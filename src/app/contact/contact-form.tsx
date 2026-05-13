"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";

const plans = ["Not sure yet", "Starter — $499", "Business — $999", "Custom — From $2,500"];

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

  useEffect(() => {
    if (planParam) {
      const match = plans.find((p) => p.toLowerCase().startsWith(planParam.toLowerCase()));
      if (match) setSelectedPlan(match);
    }
  }, [planParam]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

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
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-10 text-center flex flex-col items-center gap-4">
        <CheckCircle size={40} className="text-green-500" />
        <h3 className="font-bold text-xl text-[var(--text)]">Message Sent!</h3>
        <p className="text-[var(--text-muted)] max-w-xs">
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
      className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 sm:p-8 flex flex-col gap-5"
    >
      {/* Web3Forms access key — replace with your key from web3forms.com */}
      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
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
          className="flex h-10 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--text)]"
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

      {status === "error" && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-center text-[var(--text-muted)]">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
