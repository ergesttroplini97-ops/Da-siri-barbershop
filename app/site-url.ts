/**
 * Canonical origin used for metadata, Open Graph and JSON-LD.
 *
 * Defaults to the ChatGPT Sites deployment so nothing changes unless the
 * hosting actually moves. Set `NEXT_PUBLIC_SITE_URL` (for example on Vercel,
 * `https://dasiribarbershop.com`) to make that deployment canonical instead.
 */
const FALLBACK_SITE_URL =
  "https://da-siri-barbershop.ergest-troplini97.chatgpt.site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/+$/, "");
