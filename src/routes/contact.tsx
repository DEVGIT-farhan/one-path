import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { company, waLink } from "@/lib/company";
import { shawls, CATEGORY, PRICE } from "@/lib/shawls";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import logoBlack from "@/assets/logo-black.svg";
import logoWhite from "@/assets/logo-white.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Contact & FAQ — One Path Fashion Chiffon Shawls";
const description =
  "Order One Path Fashion chiffon shawls on WhatsApp. Contact details, delivery and care FAQs, and an enquiry form for shade availability.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How do I place an order?",
    a: "Choose your shade in the catalogue and tap “Order on WhatsApp”. Your message arrives pre-filled with the shade name, so you only need to confirm quantity and delivery address.",
  },
  {
    q: "What does one shawl cost?",
    a: `Every ${CATEGORY.toLowerCase()} is ${company.currency} ${PRICE}, regardless of shade. Bundle pricing for three or more pieces is available on request.`,
  },
  {
    q: "Are all ten shades in stock?",
    a: "Shades are dyed in small runs. Message us with your preferred shade and we will confirm availability and dispatch time right away.",
  },
  {
    q: "How should I care for chiffon?",
    a: "Hand wash cold with a mild detergent, do not wring, and dry flat away from direct sun. A cool iron on the reverse restores the drape.",
  },
  {
    q: "Do you ship, and how long does it take?",
    a: "Yes — we ship across the country. Dispatch is typically within 1–2 working days, with delivery in 3–6 working days depending on your location.",
  },
  {
    q: "Can I exchange a shade?",
    a: "Unused, unwashed shawls in original packaging can be exchanged within 7 days of delivery. Share your order details on WhatsApp to start an exchange.",
  },
];

function EnquiryForm() {
  const [name, setName] = useState("");
  const [shade, setShade] = useState(shawls[0]?.name ?? "");
  const [qty, setQty] = useState("1");
  const [message, setMessage] = useState("");

  const composed = waLink(
    `Assalamu alaikum ${company.name}!\n\nName: ${name || "—"}\nProduct: ${CATEGORY}\nShade: ${shade}\nQuantity: ${qty}\n\n${message || "I'd like to enquire about availability."}`,
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(composed, "_blank", "noreferrer");
      }}
      className="grid gap-5"
    >
      <label className="grid gap-2">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
          Your name
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="min-h-11 border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-foreground"
          placeholder="Full name"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
        <label className="grid gap-2">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
            Shade
          </span>
          <select
            value={shade}
            onChange={(e) => setShade(e.target.value)}
            className="min-h-11 border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-foreground"
          >
            {shawls.map((s) => (
              <option key={s.hex} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
            Quantity
          </span>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="min-h-11 border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-foreground"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
          Message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-foreground"
          placeholder="Anything you'd like us to know"
        />
      </label>

      <button
        type="submit"
        className="mt-2 min-h-11 w-full border border-foreground bg-foreground px-8 py-3 text-[0.65rem] tracking-[0.24em] uppercase text-background transition-colors hover:bg-transparent hover:text-foreground sm:w-auto sm:tracking-[0.3em]"
      >
        Send on WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Your enquiry opens in WhatsApp so you can send it directly to our team.
      </p>
    </form>
  );
}

function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 bg-background/85 py-3 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoBlack} alt={company.name} className="h-10 w-10" />
            <span className="font-display text-xs tracking-[0.3em] uppercase sm:text-sm sm:tracking-[0.35em]">
              One Path
            </span>
          </Link>
          <nav className="hidden gap-10 text-xs tracking-[0.25em] uppercase text-muted-foreground sm:flex">
            <Link to="/" className="transition-colors hover:text-foreground">
              Catalogue
            </Link>
            <span className="text-foreground">Contact</span>
          </nav>
          <Link
            to="/"
            className="flex min-h-11 items-center text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground sm:hidden"
          >
            Catalogue
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-6 md:pt-44 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-[2.25rem] leading-[1.1] md:text-6xl"
        >
          Order, enquire, or simply say salaam.
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-10 h-px w-full origin-left bg-border"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 sm:px-6 md:grid-cols-12 md:gap-14 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <h2 className="font-display text-2xl">Reach us</h2>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {[
              { k: "WhatsApp", v: company.whatsappDisplay },
              { k: "Email", v: company.email },
              { k: "Studio", v: company.address },
              { k: "Hours", v: company.hours },
            ].map((row) => (
              <div
                key={row.k}
                className="flex flex-col items-start gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
                  {row.k}
                </dt>
                <dd className="text-sm sm:text-right">{row.v}</dd>
              </div>
            ))}
          </dl>
          <a
            href={waLink(
              `Assalamu alaikum ${company.name}, I'd like to know more about your chiffon shawls.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center border border-foreground px-6 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:bg-foreground hover:text-background sm:px-8 sm:tracking-[0.3em]"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:col-span-7"
        >
          <h2 className="font-display text-2xl">Enquiry</h2>
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </motion.div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-5 text-3xl leading-tight">
              Everything, answered.
            </h2>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-16 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <img src={logoWhite} alt={company.name} className="h-14 w-14" />
          <p className="font-display text-lg text-white">{company.tagline}</p>
          <Link
            to="/"
            className="text-[0.65rem] tracking-[0.3em] uppercase hover:text-white"
          >
            Back to catalogue
          </Link>
        </div>
      </footer>
      <FloatingWhatsApp />
    </main>
  );
}
