import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.14 No Partial Credit on Data Insights | GMAT Prep",
  description:
    "Understand how multi-part Data Insights questions are scored on the GMAT (no partial credit) and how that impacts guessing, timing, and strategy. Includes a quick probability insight using KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.14 No Partial Credit Is Awarded on Data Insights Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Data Insights items contain multiple parts—often two or three. On these
          problems, you only earn credit if every part is answered correctly.
          There is no partial credit for getting some parts right.
        </p>

        <MustKnow>
          You must answer all parts of a multi‑part Data Insights question correctly
          to receive credit for that question.
        </MustKnow>

        <p>
          This scoring rule should shape your time management. If the first two parts of a
          three‑part item leave you totally uncertain, it’s usually better to make your best
          guess, submit, and move on rather than sink time into the final part. The odds of
          randomly getting all parts correct once you’re already guessing are small.
        </p>

        <MustKnow>
          When earlier parts are guesswork, your probability of an all‑correct response
          collapses quickly. Banking time for questions you can solve confidently is often
          the higher‑value move.
        </MustKnow>

        <section aria-labelledby="probability-insight">
          <h3 id="probability-insight" className="text-xl font-semibold text-white">
            A quick probability check
          </h3>
          <p>
            Suppose a question has three parts. If you’re guessing on the first two parts
            with about a 1-in-5 chance each (e.g., five choices), and you have a 50% shot on
            the last part, your chance of getting the entire question correct is:
          </p>
          <div className="rounded-md bg-gray-900/40 p-4">
            <BlockMath math={`P(\\text{all correct}) = \\left(\\tfrac{1}{5}\\right)\\cdot\\left(\\tfrac{1}{5}\\right)\\cdot\\left(\\tfrac{1}{2}\\right) = \\tfrac{1}{50} = 2\\%`} />
          </div>
          <p className="mt-2">
            In other words, once you’re already guessing on most parts, investing more time
            rarely pays off.
          </p>
        </section>

        <section aria-labelledby="use-strengths">
          <h3 id="use-strengths" className="text-xl font-semibold text-white">
            Use your strengths to triage
          </h3>
          <p>
            Know which DI topics you handle well and which tend to slow you down. If a
            multi‑part question is from a weaker area and you’re not making progress by the
            second part, it can be wise to take strategic guesses and reallocate time to
            problems you’re more likely to finish correctly.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              If part 2 leaves you no closer than part 1, pause and reassess your plan.
            </li>
            <li>
              Prefer to protect time for questions where your accuracy is higher.
            </li>
            <li>
              Avoid “sunk cost” thinking—time already spent doesn’t guarantee a payoff.
            </li>
          </ul>
        </section>

        <section aria-labelledby="plan-ahead">
          <h3 id="plan-ahead" className="text-xl font-semibold text-white">
            Plan your guessing strategy before test day
          </h3>
          <p>
            Don’t improvise under pressure. Decide in advance how you’ll handle multi‑part
            questions that stall out. For example:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Set a personal rule for when to move on (e.g., after{" "}
              <InlineMath math="90" /> seconds with no traction on a part).
            </li>
            <li>
              Use consistent, deliberate guessing patterns to avoid decision fatigue.
            </li>
            <li>
              Keep your pace aligned with a section‑wide time target to maximize your score.
            </li>
          </ul>
          <p>
            A clear plan helps you control timing and boosts your overall DI performance.
          </p>
        </section>
      </article>
    </main>
  );
}