// Set SITE_URL to the public origin before the production build.
// Omit absolute SEO URLs until the real domain is supplied rather than invent one.
const configuredUrl = process.env.SITE_URL?.trim();
export const SITE_URL = configuredUrl ? new URL(configuredUrl).origin : undefined;
if (SITE_URL && !/^https?:\/\//.test(SITE_URL)) {
  throw new Error("SITE_URL must be an absolute HTTP(S) website URL.");
}
export function absoluteUrl(path: string) {
  return SITE_URL ? new URL(path, `${SITE_URL}/`).href : undefined;
}

export const DOCTOR_ENTITY_ID = SITE_URL ? `${SITE_URL}/#doctor` : undefined;
