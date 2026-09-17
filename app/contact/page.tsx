import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch about a project or opportunity.",
};

export default function ContactPage() {
  return (
    <section className="container-edge py-16 md:py-24">
      <SectionHeader index="Contact" title="Let's build something together." />

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
