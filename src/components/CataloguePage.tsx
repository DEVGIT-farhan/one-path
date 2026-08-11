import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { shawls, CATEGORY, PRICE } from "@/lib/shawls";
import { company, waLink } from "@/lib/company";
import { useReveal } from "@/hooks/use-reveal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import logoBlack from "@/assets/logo-black.svg";
import logoWhite from "@/assets/logo-white.svg";
import hero from "@/assets/Hero.png";

const TAGLINE = company.tagline;

function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasSolidBackground = solid || menuOpen;
  const navigationClass = hasSolidBackground
    ? "text-muted-foreground"
    : "text-white/80";
  const navigation = [
    { label: "Catalogue", href: "#catalogue" },
    { label: "Fabric", href: "#fabric" },
    { label: "Styling", href: "#styling" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hasSolidBackground
          ? "bg-background/85 backdrop-blur-md py-3 shadow-[0_1px_0_0_var(--color-border)]"
          : "py-4 sm:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={hasSolidBackground ? logoBlack : logoWhite}
            alt="One Path Fashion"
            className="h-10 w-10 transition-opacity duration-500"
          />
          <span
            className={`font-display text-xs tracking-[0.3em] uppercase transition-colors duration-500 sm:text-sm sm:tracking-[0.35em] ${
              hasSolidBackground ? "text-foreground" : "text-white"
            }`}
          >
            One Path Fashion
          </span>
        </a>
        <nav
          className={`hidden gap-10 text-xs tracking-[0.25em] uppercase transition-colors duration-500 md:flex ${navigationClass}`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-accent-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="hover:text-accent-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden ${
            hasSolidBackground ? "text-foreground" : "text-white"
          }`}
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
          <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mx-4 mt-3 border-y border-border bg-background/95 px-1 py-2 text-xs tracking-[0.25em] uppercase text-muted-foreground shadow-sm backdrop-blur-md sm:mx-6 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="flex min-h-11 items-center px-3 transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-11 items-center px-3 transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      </nav>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
      />
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
          className="h-[115%] w-full object-cover object-[70%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65 sm:bg-gradient-to-b sm:from-black/45 sm:via-black/15 sm:to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent sm:hidden" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-start justify-center px-5 text-left sm:items-center sm:px-6 sm:text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.6rem] tracking-[0.3em] uppercase text-white/75 sm:text-[0.65rem] sm:tracking-[0.45em]"
        >
          One Path Fashion
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[20rem] text-[2.25rem] leading-[1.1] text-white sm:max-w-3xl sm:text-6xl md:text-7xl"
        >
          {TAGLINE}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-10 h-px w-32 origin-left bg-white/50 sm:w-40 sm:origin-center"
        />
        <motion.a
          href="#catalogue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 min-h-11 border border-white/60 px-6 py-3 text-[0.65rem] tracking-[0.24em] uppercase text-white transition-colors duration-500 hover:bg-white hover:text-foreground sm:px-8 sm:text-[0.7rem] sm:tracking-[0.3em]"
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
    <section
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32"
    >
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

function ShadePreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeShade = shawls[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((index) => (index + 1) % shawls.length);
    }, 4400);

    return () => window.clearInterval(timer);
  }, []);

  if (!activeShade) {
    return null;
  }

  const previousShade =
    shawls[(activeIndex - 1 + shawls.length) % shawls.length] ?? activeShade;
  const nextShade = shawls[(activeIndex + 1) % shawls.length] ?? activeShade;

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((index) => (index - 1 + shawls.length) % shawls.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((index) => (index + 1) % shawls.length);
  };

  const spinVariants = {
    enter: (motionDirection: number) => ({
      opacity: 0,
      rotateY: motionDirection * 32,
      scale: 0.98,
      x: motionDirection * 40,
    }),
    center: { opacity: 1, rotateY: 0, scale: 1, x: 0 },
    exit: (motionDirection: number) => ({
      opacity: 0,
      rotateY: motionDirection * -32,
      scale: 0.98,
      x: motionDirection * -40,
    }),
  };

  return (
    <section className="overflow-hidden border-y border-border bg-secondary/20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <div>
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">
            Explore the collection
          </p>
          <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
            Ten shades, one effortless drape.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Browse each considered colour before choosing your favourite in the
            catalogue below.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous shawl shade"
              className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next shawl shade"
              className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <p className="ml-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(shawls.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] w-full [perspective:1600px]">
            <motion.div
              key={`previous-${previousShade.hex}`}
              initial={{ opacity: 0, x: -18, scale: 0.86 }}
              animate={{ opacity: 0.24, x: 0, scale: 0.92 }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-[9%] -left-[11%] z-0 w-[58%] bg-transparent blur-[3px] sm:-left-[14%]"
            >
              <img
                src={previousShade.image}
                alt=""
                className="h-full w-full object-contain object-bottom"
              />
            </motion.div>

            <div className="absolute inset-y-0 left-1/2 z-10 w-[78%] -translate-x-1/2 [transform-style:preserve-3d]">
              <AnimatePresence initial={false} mode="sync" custom={direction}>
                <motion.figure
                  key={activeShade.hex}
                  custom={direction}
                  variants={spinVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1.15, ease: [0.22, 0.61, 0.36, 1] }}
                  style={{ transformOrigin: "center center" }}
                  className="absolute inset-0 h-full [backface-visibility:hidden]"
                >
                  <img
                    src={activeShade.image}
                    alt={`${CATEGORY} in ${activeShade.name}`}
                    className="h-full w-full object-contain object-bottom"
                  />
                </motion.figure>
              </AnimatePresence>
            </div>

            <motion.div
              key={`next-${nextShade.hex}`}
              initial={{ opacity: 0, x: 18, scale: 0.86 }}
              animate={{ opacity: 0.24, x: 0, scale: 0.92 }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-[9%] -right-[11%] z-0 w-[58%] bg-transparent blur-[3px] sm:-right-[14%]"
            >
              <img
                src={nextShade.image}
                alt=""
                className="h-full w-full object-contain object-bottom"
              />
            </motion.div>
          </div>
          <p className="mt-4 text-center font-display text-2xl">
            {activeShade.name}
          </p>
          <p className="mt-1 text-center text-[0.6rem] tracking-[0.25em] uppercase text-muted-foreground">
            {CATEGORY}
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
    `Assalamu alaikum ${company.name}, I'd like to order the ${CATEGORY} in ${name} (${hex}) — ${company.currency} ${PRICE}.`,
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
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
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
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-border pt-3">
        <h3 className="font-display text-base sm:text-lg">{name}</h3>
        <span className="font-display text-sm sm:text-base">
          {company.currency} {PRICE}
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
    <section id="catalogue" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-32">
        <div className="mb-10 flex flex-col gap-3 border-b border-border pb-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl md:text-3xl">{CATEGORY}</h2>
          <p className="text-[0.6rem] tracking-[0.22em] uppercase text-muted-foreground sm:text-[0.65rem] sm:tracking-[0.3em]">
            Ten Shades · {company.currency} {PRICE} each
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-14 md:grid-cols-3 lg:gap-x-10">
          {shawls.map((s, i) => (
            <ShadeCard key={s.hex} index={i} {...s} />
          ))}
        </div>
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
      className="border-y border-border bg-secondary/30 py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
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
              className="flex flex-col items-start gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
                {f.k}
              </dt>
              <dd className="font-display text-lg sm:text-right">{f.v}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Styling() {
  return (
    <section id="styling" className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <img src={logoWhite} alt="One Path Fashion" className="h-14 w-14" />
        <p className="font-display text-lg text-white">{TAGLINE}</p>
        <p className="text-[0.6rem] tracking-[0.25em] uppercase sm:text-[0.65rem] sm:tracking-[0.35em]">
          {company.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[0.6rem] tracking-[0.18em] uppercase sm:gap-6 sm:text-[0.65rem] sm:tracking-[0.25em]">
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact & FAQ
          </Link>
          <a
            href={waLink(
              `Assalamu alaikum ${company.name}, I have a question about your chiffon shawls.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${company.email}`}
            className="hover:text-white transition-colors"
          >
            {company.email}
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
      <ShadePreview />
      <Catalogue />
      <Fabric />
      <Styling />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
