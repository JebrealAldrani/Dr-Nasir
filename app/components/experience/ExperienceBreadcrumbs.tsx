import Link from "next/link";

export default function ExperienceBreadcrumbs({ title }: { title?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li>{title ? <Link href="/experience" className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Experience</Link> : <span aria-current="page">Experience</span>}</li>
        {title && <><li aria-hidden="true">/</li><li aria-current="page" className="text-secondary">{title}</li></>}
      </ol>
    </nav>
  );
}
