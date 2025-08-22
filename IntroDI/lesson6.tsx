import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// If your design system exposes a KaTeX helper, keep this import.
// Otherwise, replace with your local Math component or remove the demo line below.
import { InlineMath } from "@/components/ui/Katex";

export const metadata: Metadata = {
  title: "1.7 Practice With the Data Insights Calculator | Data Insights",
  description:
    "Learn why and how to practice with the GMAT Data Insights on‑screen calculator before exam day. Includes must‑know tips on estimation and when to use the calculator.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.7 Get Comfortable With the On‑Screen Calculator Before Test Day
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Data Insights calculator can speed up your work on quantitative tasks—if you’ve
          already learned its quirks. Build fluency with it before the exam so it feels natural
          when the clock is running.
        </p>

        <MustKnow>
          Make time to practice with the DI calculator ahead of test day. Familiarity turns it
          from a distraction into a genuine advantage.
        </MustKnow>

        <p>
          That said, strong number sense pays off even when a calculator is available. Treat the
          calculator as one tool among many—mental math, estimation, and clean setups are still
          critical for top performance.
        </p>

        <MustKnow>
          The better your mental‑math and paper‑and‑pencil skills, the more effectively you’ll use
          the provided calculator during DI.
        </MustKnow>

        <p>
          Estimation is indispensable, especially for prompts that say “approximately,” “nearest,”
          or “closest.” Often you can solve outright—or reduce the workload—by rounding smartly and
          sanity‑checking magnitudes before you type anything.
        </p>

        <p>
          Remember, the GMAT rewards reasoning, not button presses. With disciplined estimation and
          thoughtful setups, many DI questions become faster and cleaner than a full calculation.
        </p>

        <MustKnow>
          Use the on‑screen calculator deliberately. Before reaching for it, ask whether rounding,
          factorization, or a tighter setup will get you to the answer more quickly.
        </MustKnow>

        <section aria-labelledby="quick-estimation" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="quick-estimation" className="mb-2 text-base font-semibold text-gray-200">
            Quick estimation demo
          </h3>
          <p className="mb-2">
            A fast approximation can confirm scale before computing:
          </p>
          <p className="text-gray-100">
            {/* If your project doesn’t have a KaTeX component, replace this line with plain text. */}
            <InlineMath
              math={"19.8\\times 51\\approx 20\\times 50=1000"}
              aria-label="Nineteen point eight times fifty-one is approximately twenty times fifty, which equals one thousand."
            />
          </p>
          <p className="mt-2 text-sm text-gray-400">
            This check keeps you from chasing unnecessary decimals and helps catch input mistakes.
          </p>
        </section>

        <section aria-labelledby="practice-checklist">
          <h3 id="practice-checklist" className="mb-2 text-base font-semibold text-gray-200">
            A short practice checklist
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Rehearse common keys (memory, clear, sign change, percent).</li>
            <li>Practice careful entry with negatives and long decimals.</li>
            <li>When a prompt hints at estimation, round first, then verify with the calculator if needed.</li>
            <li>Keep scratch work tidy to track assumptions and rounding.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}