// Placeholder business details — replace with real values.
export const business = {
  name: "One Path Fashion",
  tagline: "Modesty is the highest elegance.",
  whatsapp: "910000000000", // placeholder: country code + number, digits only
  whatsappDisplay: "+91 00000 00000",
  email: "hello@onepathfashion.com",
  address: "Shop Address Line 1, City, State — 000000",
  hours: "Mon – Sat, 10:00 – 19:00",
  instagram: "https://instagram.com/onepathfashion",
  currency: "Rs.",
  price: 400,
};

export function waLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
