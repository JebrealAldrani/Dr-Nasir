import Link from "next/link";

export default function CertificateBreadcrumbs({ title }: { title?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="certificate-breadcrumb mb-8 text-sm text-text-secondary">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <li><Link href="/" className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li>{title ? <Link href="/certificates" className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Certificates</Link> : <span aria-current="page">Certificates</span>}</li>
        {title && <><li aria-hidden="true">/</li><li className="min-w-0 break-words" aria-current="page">{title}</li></>}
      </ol>
    </nav>
  );
}
