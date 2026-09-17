import { GitFork, Link, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const items = [ 
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", value: "@samdev", href: siteConfig.socials.github, icon: GitFork },
  { label: "LinkedIn", value: "in/samdev", href: siteConfig.socials.linkedin, icon: Link },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-3 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[12px] text-muted">{siteConfig.availability}</span>
      </div>

      <ul className="flex flex-col gap-4">
        {items.map(({ label, value, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-md border border-border p-4 transition-colors hover:border-border-strong"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border-strong text-accent">
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-mono text-[11px] text-faint">{label}</span>
                <span className="block text-[14px] text-ink">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 font-mono text-[13px] text-faint">
        <MapPin className="h-3.5 w-3.5" />
        {siteConfig.location}
      </div>
    </div>
  );
}
