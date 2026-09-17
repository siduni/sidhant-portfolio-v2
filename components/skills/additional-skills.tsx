import { additionalSkills } from "@/lib/skills";
import { Badge } from "@/components/ui/badge";

export function AdditionalSkills() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {additionalSkills.map((group) => (
        <div key={group.category}>
          <p className="font-mono text-[12px] text-faint">{group.category}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="accent">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
