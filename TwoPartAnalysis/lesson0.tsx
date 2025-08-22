import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "3.1 Introduction | Two‑Part Analysis",
  description:
    "What Two‑Part Analysis (TPA) questions are, how the response grid works, when both answers can match, and why quant TPAs are just word problems. Includes quick algebra snippets rendered with KaTeX.",
};

// Load KaTeX components on the client only
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Two‑Part Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two‑Part Analysis (TPA) items present a short setup and a response
          grid with two columns. Your job is to choose one option for the first
          prompt and one option for the second prompt—essentially making a pair
          of selections that work together.
        </p>

        <MustKnow>
          In Two‑Part Analysis, you submit two coordinated answers—one per
          column. Treat the task as finding an ordered pair of choices that
          satisfies what the problem asks.
        </MustKnow>

        <p>
          TPAs can be mathematical or verbal. In math‑focused versions,
          you&apos;ll frequently translate language into algebra and arithmetic.
          Verbal TPAs often mirror Critical Reasoning in structure, just
          presented in a two‑answer grid.
        </p>

        <MustKnow>
          Two‑Part Analysis questions may be quant or verbal. Quant TPAs are
          commonly algebraic word problems; verbal TPAs feel like CR prompts
          formatted into a two‑column grid.
        </MustKnow>

        <p>
          You record your choice for Question 1 in the first column and your
          choice for Question 2 in the second column. Many times the two answers
          will be different, but sometimes the correct pair uses the same option
          in both columns—that&apos;s perfectly acceptable when it fits the
          prompt.
        </p>

        <MustKnow>
          It&apos;s possible—and sometimes required—that both columns select the
          same option. Don&apos;t force different answers unless the question
          demands it.
        </MustKnow>

        <p>
          Scoring is all‑or‑nothing: you must get both columns correct to earn
          credit. There is no partial credit on GMAT Data Insights questions, so
          verify the pair before you submit.
        </p>

        <MustKnow>
          Full credit requires a correct pair. If either column is wrong, the
          entire response is marked incorrect.
        </MustKnow>

        <section aria-labelledby="quant-tpa" className="space-y-4">
          <h3 id="quant-tpa" className="text-xl font-semibold text-white">
            Quant TPAs: just word problems in a two‑answer grid
          </h3>
          <p>
            When a TPA is quantitative, handle it exactly as you would any other
            word problem: translate the words into equations or expressions,
            then solve systematically. Common topics include rates and work,
            percentages, ratios, functions, linear and quadratic equations,
            weighted averages, and general problem translation.
          </p>

          <MustKnow>
            For quant TPAs, the workflow doesn&apos;t change: convert the
            description to math, solve, then map your results to the two
            required selections.
          </MustKnow>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="mb-2 font-semibold text-gray-100">
              Quick algebra refresher
            </h4>
            <p className="mb-2">
              You might see a relationship such as{" "}
              <InlineMath math="ax + by = c" /> and be asked to pick values for{" "}
              <InlineMath math="x" /> and <InlineMath math="y" /> that satisfy
              the equation, one in each column. For instance:
            </p>
            <BlockMath math="2x + 3y = 12" />
            <p className="mt-2">
              Solving for <InlineMath math="y" /> in terms of{" "}
              <InlineMath math="x" /> gives{" "}
              <InlineMath math="y = \frac{12 - 2x}{3}" />. A valid pair like{" "}
              <InlineMath math="x = 3" /> and <InlineMath math="y = 2" /> would
              satisfy the equation. In the grid, the first column could be your
              choice for <InlineMath math="x" />, and the second column your
              choice for <InlineMath math="y" />.
            </p>
            <p className="mt-2">
              Likewise, linear forms such as <InlineMath math="y = mx + b" />{" "}
              may appear—be ready to work with slope, intercepts, and simple
              substitutions.
            </p>
          </div>
        </section>

        <section aria-labelledby="study-plan" className="space-y-4">
          <h3 id="study-plan" className="text-xl font-semibold text-white">
            How this chapter is organized
          </h3>
          <p>
            Next, we&apos;ll focus on the most frequently tested quant topics
            that show up as TPAs, and then we&apos;ll dive into the verbal
            patterns. We&apos;ll summarize key ideas as we go, but if any topic
            feels rusty, revisit the corresponding lessons in the Quant portion
            of your course.
          </p>
          <p>
            To kick things off, we&apos;ll revisit a staple from linear and
            quadratic equations: one equation with two variables, and how that
            plays out in a two‑column response format.
          </p>
        </section>
      </article>
    </main>
  );
}