"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const plans = ["Not sure yet", "Starter — $499", "Business — $999", "Custom — From $2,500"];

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  const defaultPlan = planParam
    ? plans.find((p) => p.toLowerCase().startsWith(planParam.toLowerCase())) ?? plans[0]
    : plans[0];

  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Sync the dropdown when the ?plan= query param changes.
  const [prevPlanParam, setPrevPlanParam] = useState(planParam);
  if (planParam !== prevPlanParam) {
    setPrevPlanParam(planParam);
    const match = planParam
      ? plans.find((p) => p.toLowerCase().startsWith(planParam.toLowerCase()))
      : undefined;
    if (match) setSelectedPlan(match);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMsg("Form is not configured yet. Please contact us directly by email.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("plan", selectedPlan);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        setSelectedPlan(plans[0]);
      } else {
        setStatus("error");
        setErrorMsg(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-surface p-10 text-center shadow-[0_20px_70px_-25px_var(--glow)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
          <CheckCircle2 size={28} className="text-accent" />
        </span>
        <h3 className="font-display text-xl font-bold">Message sent!</h3>
        <p className="max-w-xs text-muted">
          Thanks for reaching out. Moshe will get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 shadow-[0_20px_70px_-40px_var(--glow)] sm:p-8"
    >
      {/* Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (get one at web3forms.com) */}
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New inquiry from mobrauntech.com" />
      <input type="hidden" name="from_name" value="Mobrauntech Website" />

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Name *</Label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" name="company" placeholder="Your business name" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="plan">Interested in</Label>
        <select
          id="plan"
          name="plan"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="flex h-11 w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-foreground transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {plans.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}

      <Button type="submit" disabled={status === "loading"} className="group w-full">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message
            <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
