import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import { siteConfig } from "@/lib/data";

const all = [
  { key: "instagram", label: "Instagram", Icon: FiInstagram },
  { key: "facebook", label: "Facebook", Icon: FiFacebook },
  { key: "twitter", label: "X (Twitter)", Icon: FiTwitter },
  { key: "youtube", label: "YouTube", Icon: FiYoutube },
] as const;

/** Only profiles that have a real URL in siteConfig.social are shown (no more href="#"). */
export const socialLinks = all
  .map((s) => ({ ...s, href: siteConfig.social[s.key] }))
  .filter((s) => Boolean(s.href));
