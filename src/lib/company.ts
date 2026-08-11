// Replace these placeholders with the company's real contact details before publishing.
export const company = {
  name: "One Path Fashion",
  tagline: "Modesty is the highest elegance.",
  whatsapp: "917904199810", // Country code + number, digits only
  whatsappDisplay: "+91 79041 99810",
  email: "hello@onepathfashion.com",
  address: "Shop Address Line 1, City, State — 000000",
  hours: "Mon – Sat, 10:00 – 19:00",
  instagram: "https://instagram.com/onepathfashion",
  currency: "Rs.",
  price: 400,
};

export function waLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
