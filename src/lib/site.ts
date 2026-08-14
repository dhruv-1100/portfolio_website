/**
 * Single source of truth for identity, contact details and deploy-dependent
 * paths. Anything that appears in more than one component lives here so the
 * site can never drift out of sync with itself again.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://dhruv-1100.github.io/portfolio_website";

export const NAME = "Dhruv Patel";
export const ROLE = "Software Engineer & MS Computer Science Student";
export const EMAIL = "dhruv.012p@gmail.com";
export const PHONE_DISPLAY = "+1 (631) 974-2620";
export const PHONE_HREF = "+16319742620";
export const GITHUB = "https://github.com/dhruv-1100";
export const LINKEDIN = "https://www.linkedin.com/in/dhruv-patel-263523213/";

/** Public assets need the basePath prefix — plain anchors are not rewritten. */
export const RESUME_PATH = `${BASE_PATH}/DhruvPatel_Resume.pdf`;

export const AVAILABILITY = "OPEN TO FULL-TIME ROLES — SPRING / SUMMER 2027";
