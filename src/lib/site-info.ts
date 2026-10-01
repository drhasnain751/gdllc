export const GLOBALDEALZ = {
  companyName: "GlobalDealz LLC",
  brandName: "GlobalDealz Infrastructure",
  website: "https://globaldealzllc.site",
  email: "info@globaldealzllc.site",
  phone: "+1 (901) 443-2051",
  whatsappNumber: "+19014432051",
  whatsappUrl:
    "https://wa.me/19014432051?text=Hello%20GlobalDealz%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20e-commerce%20infrastructure%20services.",
  address: "34 N Franklin Ave Ste 687, Pinedale, WY 82941, USA",
} as const;

export function getCalendlyUrl() {
  const envUrl = import.meta.env.VITE_CALENDLY_URL;
  return typeof envUrl === "string" && envUrl.trim()
    ? envUrl.trim()
    : "mailto:info@globaldealzllc.site";
}

export function openConsultation() {
  const url = getCalendlyUrl();

  if (url.startsWith("http://") || url.startsWith("https://")) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = url;
}
