"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalPanel } from "./terminal-panel";
import { siteConfig } from "@/lib/site-config";
import DotGrid from "./dot-grid";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const ease = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function Hero() {
  return (
    <>
    <DotGrid />
    <section className="container-edge relative grid gap-14 pb-20 pt-14 md:grid-cols-[1.15fr_1fr] md:items-center md:pb-28 md:pt-20">
      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[12px] text-muted">{siteConfig.availability}</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
        >
          Hi, I&apos;m Sidhant.
          <br />
          <span className="text-muted">Web Developer</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-md text-[16px] leading-relaxed text-muted sm:text-[17px]">
          {siteConfig.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center gap-1.5 font-mono text-[13px] text-faint"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.location}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.25 }}
        className="relative z-10 justify-self-center md:justify-self-end"
      >
        <TerminalPanel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex"
      >
        <span className="font-mono text-[11px]">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
    </>
  );
}
