import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// If your app doesn't already include KaTeX styles globally, add this in app/layout.tsx:
// import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "1.12 Data Insights Timing | GMAT",
  description:
    "A practical timing approach for the GMAT Data Insights section: average time per question, when to move faster, and why it’s better to guess than to leave questions unanswered.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.12 Data Insights Timing
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Time management on the Data Insights (DI) section isn’t quite the same
          as on Quant or Verbal. The prompts tend to be denser and the formats
          more involved, so it helps to plan a pacing strategy that fits those
          realities—lean into your strengths and be honest about where you may
          need to move on.
        </p>

        <section aria-labelledby="avg-time-heading" className="space-y-3">
          <h3 id="avg-time-heading" className="text-xl font-semibold text-white">
            Average time per question
          </h3>
          <p>
            You have 45 minutes to complete 20 DI questions. That’s an average of:
          </p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <BlockMath math={"\\dfrac{45\\ \\text{minutes}}{20\\ \\text{questions}}=2.25\\ \\text{minutes per question}"} />
            <p className="mt-2">
              In other words,{" "}
              <InlineMath math={"2.25\\ \\text{min} = 2\\ \\text{min}\\ 15\\ \\text{s}"} />{" "}
              on average per question.
            </p>
          </div>
          <p>
            Treat this as a guideline, not a rule—some items should be faster,
            freeing up time for the more complex ones.
          </p>
        </section>

        <MustKnow>
          You have 45 minutes for 20 DI questions, which averages to 2 minutes
          and 15 seconds each. Expect to spend less time on some prompts and use
          that buffer on tougher, multi‑step items.
        </MustKnow>

        <section aria-labelledby="adjust-heading" className="space-y-3">
          <h3 id="adjust-heading" className="text-xl font-semibold text-white">
            Adjust pacing by question type
          </h3>
          <p>
            Graphics Interpretation is typically quicker than other DI formats,
            even if you don’t work with charts every day. Plan to move briskly
            through these—about a minute or so when feasible—and preserve extra
            time for heavier lifts such as Table Analysis, Two‑Part Analysis, and
            Multi‑Source Reasoning.
          </p>
        </section>

        <MustKnow>
          Graphics Interpretation often takes less time than other DI types.
          Aim to solve these efficiently so you can invest more time in the
          multi‑step formats.
        </MustKnow>

        <section aria-labelledby="complete-all-heading" className="space-y-3">
          <h3 id="complete-all-heading" className="text-xl font-semibold text-white">
            Don’t leave questions blank
          </h3>
          <p>
            Finishing the section matters. If you’re running short on time,
            make an educated guess rather than leaving an item unanswered. An
            informed guess is better than a blank response in terms of scoring
            outcomes.
          </p>
        </section>

        <MustKnow>
          Always submit an answer. If time is expiring, make your best guess
          instead of leaving the question blank.
        </MustKnow>

        <section aria-labelledby="practical-tips-heading" className="space-y-3">
          <h3 id="practical-tips-heading" className="text-xl font-semibold text-white">
            Practical pacing tips
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Start with a quick scan: identify whether the task is a lighter
              read (e.g., chart interpretation) or a multi‑source/multi‑step
              problem.
            </li>
            <li>
              Set micro‑checkpoints: if you’re not making progress after about{" "}
              <InlineMath math={"\\approx\\ 60{-}75\\ \\text{s}"} /> on a dense
              item, refocus your approach or flag it for a quicker guess.
            </li>
            <li>
              Bank time early when you can, so you have a cushion for heavier
              DI items later in the section.
            </li>
            <li>
              Keep your eye on the clock in natural breaks between parts of a
              question rather than mid‑calculation.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}