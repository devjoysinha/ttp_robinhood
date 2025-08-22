import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.16 Use the Answer Choices to Make Your Job Easier | Data Insights",
  description:
    "Learn how to scan the answer choices first to focus on what matters, skip irrelevant data, and cut down time and calculations in Data Insights questions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction To Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.16 Use the Answer Choices to Make Your Job Easier
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Data Insights problems, the options aren’t just the finish line—they’re
          part of your toolkit. Skimming the choices first often reveals exactly
          which comparisons, units, or time frames matter, letting you ignore
          anything that doesn’t move the answer.
        </p>

        <p>
          When a prompt is packed with numbers, charts, and labels, the choices
          will usually hint at what the question is really asking: a difference,
          a ratio, a trend, or a ranking. Use that to decide which rows, columns,
          or periods to evaluate and which details you can safely skip.
        </p>

        <MustKnow>
          Treat the answer set as a roadmap. Identify what the options compare
          or measure, then pull only the data needed for that comparison. This
          keeps you away from extra details and reduces unnecessary calculations.
        </MustKnow>

        <section aria-labelledby="quick-workflow" className="space-y-3">
          <h3 id="quick-workflow" className="text-xl font-semibold text-white">
            A quick workflow
          </h3>
          <ul className="list-disc space-y-2 ps-6">
            <li>Glance at the choices before you compute anything.</li>
            <li>
              Decide the exact quantity to compare (total, average, percent
              change, rank, etc.).
            </li>
            <li>
              Highlight only the relevant rows/columns/time frames; ignore the rest.
            </li>
            <li>
              Do the smallest calculation that separates the options; avoid full
              precision unless it’s required.
            </li>
          </ul>
        </section>

        <MCQExample
          number={16}
          prompt={
            'A summary shows Q1 and Q2 revenue (in $k) for five stores:\n' +
            'A: Q1=120, Q2=150\n' +
            'B: Q1=200, Q2=230\n' +
            'C: Q1=90,  Q2=140\n' +
            'D: Q1=160, Q2=176\n' +
            'E: Q1=110, Q2=121\n\n' +
            'Which store had the greatest percent increase from Q1 to Q2?'
          }
          options={["A", "B", "C", "D", "E"]}
          correct="C"
          solution={
            <>
              <p>
                Focus on percent change; the answer choices tell you to compare Q2
                versus Q1 for each store and ignore anything else. You don’t need
                totals across stores or other time periods.
              </p>
              <p className="mt-2">
                Compare by ratio Q2/Q1 (bigger ratio → bigger percent increase):
                A: 150/120 ≈ 1.25, B: 230/200 = 1.15, C: 140/90 ≈ 1.56,
                D: 176/160 = 1.10, E: 121/110 ≈ 1.10. Store C is largest.
              </p>
              <p className="mt-2">
                The choices guided us to compute only five quick comparisons,
                skipping all other data.
              </p>
            </>
          }
        />

        <section aria-labelledby="pro-tips" className="space-y-3">
          <h3 id="pro-tips" className="text-xl font-semibold text-white">
            Pro tips
          </h3>
          <ul className="list-disc space-y-2 ps-6">
            <li>
              If choices are ranges (e.g., 10–20, 20–30), rough estimates are often
              enough to lock in the right interval.
            </li>
            <li>
              If choices are rankings (e.g., which is largest), compare by ratios
              or relative differences instead of computing exact values.
            </li>
            <li>
              Units and time windows in the choices dictate which columns and
              periods to read; don’t mix units or years that don’t appear in the options.
            </li>
          </ul>
        </section>

        <p>
          Bottom line: let the answers tell you what to measure. When you work
          backward from the options, you’ll spend less time, do fewer calculations,
          and avoid distractions.
        </p>
      </article>
    </main>
  );
}