"use client";

import * as React from "react";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

const initialValues: ContactFields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = React.useState<ContactFields>(initialValues);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  function handleChange(field: keyof ContactFields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFields;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    // Placeholder submit — wire this up to an API route or a form service
    // such as Formspree, Resend, or your own backend.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialValues);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-md border border-border bg-surface p-8"
      >
        <CheckCircle2 className="h-6 w-6 text-accent" aria-hidden="true" />
        <p className="font-display text-xl font-medium tracking-tight">Message sent.</p>
        <p className="text-sm text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Jordan Lee"
        />
        {errors.name && (
          <p id="name-error" className="text-[13px] text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="text-[13px] text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell me a little about what you're building..."
        />
        {errors.message && (
          <p id="message-error" className="text-[13px] text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
