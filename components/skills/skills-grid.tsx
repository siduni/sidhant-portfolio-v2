"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  FileCode2,
  Palette,
  Braces,
  Component,
  Layers,
  Wind,
} from "lucide-react";
import { primarySkills } from "@/lib/skills";
import { Card } from "@/components/ui/card";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: Braces,
  React: Component,
  "Next.js": Layers,
  "Tailwind CSS": Wind,
};

export function SkillsGrid() {
  const flat = primarySkills.flatMap((group) =>
    group.skills.map((skill) => ({ skill, group: group.category }))
  );

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {flat.map(({ skill, group }, i) => {
        const Icon = icons[skill] ?? FileCode2;
        return (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="flex h-full flex-col gap-4 p-5 hover:border-border-strong">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="font-display text-[15px] font-medium tracking-tight">{skill}</p>
                <p className="mt-0.5 font-mono text-[11px] text-faint">{group}</p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
