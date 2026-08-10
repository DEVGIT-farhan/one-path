import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { shawls, CATEGORY, PRICE } from "@/lib/shawls";
import { business, waLink } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import logoBlack from "@/assets/logo-black.svg";
import logoWhite from "@/assets/logo-white.svg";
import hero from "@/assets/Hero.png";

const TAGLINE = business.tagline;

function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-md py-3 shadow-[0_1px_0_0_var(--color-border)]"
          : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={solid ? logoBlack : logoWhite}
            alt="One Path Fashion"
            className="h-10 w-10 transition-opacity duration-500"
          />
          <span
            className={`font-display text-sm tracking-[0.35em] uppercase transition-colors duration-500 ${
              solid ? "text-foreground" : "text-white"
            }`}
          >
            One Path
          </span>
        </a>
        <nav
          className={`hidden gap-10 text-xs tracking-[0.25em] uppercase transition-colors duration-500 md:flex ${
            solid ? "text-muted-foreground" : "text-white/80"
          }`}
        >
          <a
            href="#catalogue"
            className="hover:text-accent-foreground transition-colors"
          >
            Catalogue
          </a>
          <a
            href="#fabric"
            className="hover:text-accent-foreground transition-colors"
          >
            Fabric
          </a>
          <a
            href="#styling"
            className="hover:text-accent-foreground transition-colors"
          >
            Styling
          </a>
          <Link
            to="/contact"
            className="hover:text-accent-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={hero}
          alt="Woman wearing a One Path Fashion chiffon shawl at golden hour"
          className="h-[115%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/60" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.65rem] tracking-[0.45em] uppercase text-white/75"
        >
          One Path Fashion
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-4xl leading-[1.1] text-white sm:text-6xl md:text-7xl"
        >
          {TAGLINE}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-10 h-px w-40 origin-center bg-white/50"
        />
        <motion.a
          href="#catalogue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 border border-white/60 px-8 py-3 text-[0.7rem] tracking-[0.3em] uppercase text-white transition-colors duration-500 hover:bg-white hover:text-foreground"
        >
          The Chiffon Shawl
        </motion.a>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const line = "Chiffon Shawl · Ten Shades · One Path Fashion · ";
  return (
    <div className="border-y border-border bg-secondary/40 py-4 overflow-hidden">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-sm tracking-[0.3em] uppercase text-secondary-foreground/70">
        <span>{line.repeat(6)}</span>
        <span>{line.repeat(6)}</span>
      </div>
    </div>
  );
}

function Intro() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div
        className={`grid gap-12 md:grid-cols-12 ${shown ? "reveal reveal-in" : "reveal"}`}
      >
        <p className="md:col-span-4 text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">
          The Collection
        </p>
        <div className="md:col-span-8">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            A single, perfected shawl — offered in ten considered shades.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Featherlight chiffon, cut generously and finished with a fine rolled
            hem. It drapes without slipping, holds a pleat softly, and travels
            folded into nothing. Choose your shade below.
          </p>
        </div>
      </div>
    </section>
  );
}

function ShadeCard({
  index,
  name,
  hex,
  note,
  image,
}: {
  index: number;
  name: string;
  hex: string;
  note: string;
  image: string;
}) {
  const order = waLink(
    `Assalamu alaikum ${business.name}, I'd like to order the ${CATEGORY} in ${name} (${hex}) — ${business.currency} ${PRICE}.`,
  );
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden"
        style={{ backgroundColor: hex }}
      >
        <img
          src={image}
          alt={`${CATEGORY} in ${name} styled over a black abaya`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top mix-blend-normal transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="drift pointer-events-none absolute -inset-x-6 top-1/3 h-40 bg-white/10 blur-2xl" />
        <span className="absolute left-4 top-4 font-display text-xs tracking-[0.3em] text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/70 to-transparent p-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs leading-relaxed text-white/90">{note}</p>
          <a
            href={order}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block border border-white/70 px-4 py-2 text-[0.6rem] tracking-[0.25em] uppercase text-white transition-colors hover:bg-white hover:text-foreground"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-border pt-3">
        <h3 className="font-display text-lg">{name}</h3>
        <span className="font-display text-base">
          {business.currency} {PRICE}
        </span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
          {CATEGORY}
        </p>
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground">
          {hex}
        </span>
      </div>
      <a
        href={order}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block border border-border py-2 text-center text-[0.6rem] tracking-[0.25em] uppercase transition-colors hover:bg-foreground hover:text-background md:hidden"
      >
        Order on WhatsApp
      </a>
    </motion.article>
  );
}

function Catalogue() {
  return (
    <section id="catalogue" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
      <div className="mb-12 flex items-end justify-between border-b border-border pb-5">
        <h2 className="text-2xl md:text-3xl">{CATEGORY}</h2>
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
          Ten Shades · {business.currency} {PRICE} each
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:gap-x-10">
        {shawls.map((s, i) => (
          <ShadeCard key={s.hex} index={i} {...s} />
        ))}
      </div>
    </section>
  );
}

function Fabric() {
  const facts = [
    { k: "Fabric", v: "Premium chiffon, matte finish" },
    { k: "Size", v: "Generous rectangular drape" },
    { k: "Finish", v: "Fine rolled hem, no fraying" },
    { k: "Care", v: "Hand wash cold, dry flat" },
  ];
  return (
    <section
      id="fabric"
      className="border-y border-border bg-secondary/30 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl leading-tight md:text-4xl">
            Weightless on, effortless off.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Chiffon breathes in warm weather and layers quietly in cold. Each
            shade is dyed in small runs, so the colour you choose stays true
            wash after wash.
          </p>
        </motion.div>
        <dl className="divide-y divide-border">
          {facts.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
                {f.k}
              </dt>
              <dd className="font-display text-right text-lg">{f.v}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Styling() {
  return (
    <section id="styling" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src={hero}
            alt="Chiffon shawl styled at golden hour"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">
            Styling
          </p>
          <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
            Wrapped, pleated, or loosely draped.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Pair the deeper shades — Royal Berry Pink, Navy Blue, Mocha Brown —
            with neutral abayas for evenings. Keep Sand Beige, Baby Blossom Pink
            and Frosted Lavender Blue for daylight.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-16 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <img src={logoWhite} alt="One Path Fashion" className="h-14 w-14" />
        <p className="font-display text-lg text-white">{TAGLINE}</p>
        <p className="text-[0.65rem] tracking-[0.35em] uppercase">
          {business.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-[0.65rem] tracking-[0.25em] uppercase">
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact & FAQ
          </Link>
          <a
            href={waLink(
              `Assalamu alaikum ${business.name}, I have a question about your chiffon shawls.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${business.email}`}
            className="hover:text-white transition-colors"
          >
            {business.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function CataloguePage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <Intro />
      <Catalogue />
      <Fabric />
      <Styling />
      <Footer />
    </main>
  );
}
