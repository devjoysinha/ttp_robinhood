import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If not already included globally, add KaTeX CSS once in app/layout.tsx:
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "1.6 On‑Screen Calculator in Data Insights | GMAT",
  description:
    "Learn how the Data Insights on‑screen calculator works, when it helps, and when estimation is faster. Includes a quick check example that uses approximation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.6 You’ll Have an On‑Screen Calculator to Use in Data Insights
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Data Insights section is the only part of the GMAT that provides a built‑in
          calculator. It’s there to keep you focused on interpreting data and drawing
          conclusions rather than grinding through tedious arithmetic.
        </p>

        <MustKnow>
          A simple, on‑screen calculator is available in Data Insights.
        </MustKnow>

        <p className="flex flex-wrap items-center gap-x-2">
          The tool is intentionally basic: it supports{" "}
          <InlineMath math="+" aria-label="addition" /> ,{" "}
          <InlineMath math="-" aria-label="subtraction" /> ,{" "}
          <InlineMath math="\\times" aria-label="multiplication" /> , and{" "}
          <InlineMath math="\\div" aria-label="division" />{" "}
          (plus a few standard keys). Don’t expect graphing, advanced functions,
          or memory beyond the essentials.
        </p>

        <MustKnow>
          Having a calculator doesn’t mean it’s always the right choice. Use it
          strategically—many questions are faster and safer to solve by estimating
          or by reasoning from the answer choices.
        </MustKnow>

        <p>
          Overusing the calculator can slow you down. For instance, if the question
          clearly calls for an approximation, computing an exact decimal can waste time
          and even lead you away from the intended answer. Train yourself to recognize
          when a quick estimate or a comparison among answer choices is all you need.
        </p>

        <section aria-labelledby="when-to-use" className="space-y-3">
          <h3 id="when-to-use" className="text-lg font-semibold text-white">
            When to use it vs. when to estimate
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Use the calculator for routine arithmetic when precision matters or when
              decimals are messy, but the result must be exact.
            </li>
            <li>
              Prefer estimation when the prompt allows words like “about,” “closest to,” or
              “approximately,” or when answer choices are widely spaced.
            </li>
            <li>
              Cross‑check: estimate first to set expectations, then use the calculator to
              confirm only if needed.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="A DI problem asks for the value of 99.8 × 4.98, and the choices are 470, 495, 500, 525, and 560. What’s the fastest, most reliable approach?"
          options={[
            "Compute the exact product on the calculator.",
            "Round to friendly numbers and estimate to pick the best choice.",
            "Ignore the numbers and choose the median option (500).",
            "Round both numbers down drastically to guarantee you don’t overshoot.",
            "Skip the calculation because the DI calculator is not allowed.",
          ]}
          correct="Round to friendly numbers and estimate to pick the best choice."
          solution={
            <>
              <p>
                Since an approximation will clearly distinguish among the given choices,
                estimation is fastest:
              </p>
              <p className="mt-2">
                <InlineMath math="99.8 \\times 4.98 \\approx 100 \\times 5 = 500" />
              </p>
              <p className="mt-2">
                The estimate lands exactly on 500 and the nearby options are far enough
                away that rounding error won’t change the choice. Computing an exact
                product is slower and unnecessary.
              </p>
            </>
          }
        />

        <section aria-labelledby="wise-use" className="space-y-3">
          <h3 id="wise-use" className="text-lg font-semibold text-white">
            Bottom line
          </h3>
          <p>
            The DI calculator is a convenience, not a crutch. Use it to avoid time‑consuming
            arithmetic when precision is required; otherwise, lean on estimation and answer‑choice
            logic. When a question signals approximation, a quick mental round—such as{" "}
            <InlineMath math="a \\times b \\approx (\\text{round}(a)) \\times (\\text{round}(b))" />—is often
            all you need.
          </p>
        </section>
      </article>
    </main>
  );
}