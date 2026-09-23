const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return originalResolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, ...args);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => {
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
      fileName: filename,
    });
    module._compile(outputText, filename);
  };
}
require.extensions['.css'] = (module) => { module.exports = {}; };
const FAQSection = require('../app/components/faq/FAQSection.tsx').default;
const collections = [
  require('../static/faq/homeFaq.ts').homeFaq,
  require('../static/faq/servicesFaq.ts').servicesFaq,
  require('../static/faq/contactFaq.ts').contactFaq,
];
const questions = new Set();
for (const [index, items] of collections.entries()) {
  const html = renderToStaticMarkup(React.createElement(FAQSection, { id: `faq-${index}`, title: 'Questions', items, schema: true }));
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1);
  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema['@type'], 'FAQPage');
  assert.equal(schema.mainEntity.length, items.length);
  assert.equal((html.match(/<details/g) || []).length, items.length);
  assert.equal((html.match(/<summary/g) || []).length, items.length);
  assert.equal((html.match(/<h2/g) || []).length, 1);
  assert.ok(!html.includes('<h1'));
  for (const [itemIndex, item] of items.entries()) {
    assert.ok(!questions.has(item.question), `Duplicate question: ${item.question}`);
    questions.add(item.question);
    const encodedAnswer = renderToStaticMarkup(React.createElement('p', null, item.answer));
    assert.ok(html.includes(encodedAnswer), 'Answer must be present in server HTML');
    assert.equal(schema.mainEntity[itemIndex].name, item.question);
    assert.equal(schema.mainEntity[itemIndex].acceptedAnswer.text, [item.answer, ...(item.links || []).map(x => x.label)].join(' '));
    for (const link of item.links || []) {
      const [route, fragment] = link.href.split('#');
      assert.ok(fs.existsSync(path.join(root, 'app', route, 'page.tsx')), `Missing route ${route}`);
      if (fragment) {
        const valid = route === '/expertise'
          ? require('../static/index.ts').expertise.some(x => x.slug === fragment)
          : fragment === 'contact-section';
        assert.ok(valid, `Missing anchor ${fragment}`);
      }
    }
  }
  console.log(`PASS: FAQ collection ${index + 1}, ${items.length} SSR answers, native disclosures, schema parity, headings, internal links`);
}
assert.equal(renderToStaticMarkup(React.createElement(FAQSection, { id: 'empty', title: 'Empty', items: [], schema: true })), '');
const unsafe = [{ question: 'Escaping test', answer: '</script><script>alert(1)</script>' }];
const escaped = renderToStaticMarkup(React.createElement(FAQSection, { id: 'escape', title: 'Escape', items: unsafe, schema: true }));
assert.equal((escaped.match(/<script/g) || []).length, 1);
const schema = JSON.parse(escaped.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema.mainEntity[0].acceptedAnswer.text, unsafe[0].answer);
const noSchema = renderToStaticMarkup(React.createElement(FAQSection, { id: 'optional', title: 'Optional', items: unsafe }));
assert.ok(!noSchema.includes('application/ld+json'));
console.log('PASS: empty sections, optional schema, script escaping, unique questions across pages');
