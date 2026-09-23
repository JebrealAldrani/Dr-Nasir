# Certificate content maintenance

`certificates.ts` is the authoritative source for the homepage, archive,
detail routes, related documents, metadata and sitemap.

The 20 records were transcribed from 23 supplied local scans. Three scans are
duplicates, documented in the data source. English titles are descriptive
translations; the original document is always available. Attendance is not
presented as specialist certification. Historical records do not assert current
licensing or accreditation.

Before publication, have the owner review the transcriptions and translations.
The micro-sclerotherapy scan lacks a clear date and single issuing institution;
these fields are intentionally omitted. Do not infer credential IDs from an
organiser’s company or training-register number.

Set `SITE_URL` to the actual public origin before building. Until it is set,
absolute canonical URLs and JSON-LD are omitted and the sitemap is empty.
No production domain has been inferred. No modification dates are fabricated.

To add a certificate, add one record with a unique stable lowercase slug and
place the original scan in `public/images/certificates`. Keep every statement
traceable to the scan or another verified source. Mark at most eight preferred
records `featured: true` (the first eight are used if more are selected).
Related documents share the actual category; unrelated records are not used
to fill empty slots. Optional fields are only rendered when provided.

For a missing image use `/images/certificates/document-unavailable.svg` and
explicitly describe the missing image in `imageAlt`. Never generate a fake
certificate. Rebuild after changing local data or the site origin.
