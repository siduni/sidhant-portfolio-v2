import Link from "next/link";
import { ArrowUpRight, GitFork, Link as LinkIcon, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "GitHub", href: siteConfig.socials.github, icon: GitFork },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkIcon },
  { label: "Twitter", href: siteConfig.socials.twitter, icon: Send },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-edge grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <p className="font-display text-xl font-medium tracking-tight">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="font-mono text-[12px] text-faint">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[12px] text-faint">Connect</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {siteConfig.email}
              </a>
            </li>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edge flex flex-col gap-2 py-6 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
