import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure `katex/dist/katex.min.css` is included globally (e.g., in app/layout.tsx)

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "1.8 You Don’t Always Need Calculations in DI | Data Insights",
  description:
    "In many GMAT Data Insights problems, careful interpretation—not arithmetic—gets you to the answer. Learn when to read, compare, and infer before you compute, with a quick practice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.8 You Don’t Always Need Calculations in Every DI Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Not every Data Insights problem demands number‑crunching. Even in quantitative prompts, you can often reach the correct choice by reading visuals
          carefully, comparing categories, or spotting patterns—no calculator needed.
        </p>

        <MustKnow>
          Before you start computing, ask: “Can I solve this by interpreting what’s given?” Many DI questions reward precise reading more than arithmetic.
        </MustKnow>

        <p>
          Typical no‑calculation wins include:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Reading a bar or line chart to identify the largest, smallest, or a clearly increasing/decreasing category.
          </li>
          <li>
            Noticing a trend in a scatter plot (e.g., a positive association without needing a regression).
          </li>
          <li>
            Using geometry or coordinate intuition from a figure. For instance, the slope of a line is{" "}
            <MathInline expr="m=\dfrac{\Delta y}{\Delta x}=\dfrac{y_2-y_1}{x_2-x_1}" ariaLabel="m equals delta y over delta x equals y two minus y one over x two minus x one" />{" "}
            —you might only need the sign of the slope (positive/negative), not its exact value.
          </li>
        </ul>

        <MustKnow>
          Precision first, computation second. If the question asks for direction, order, or a clear visual comparison, interpretation is usually faster and safer than calculating.
        </MustKnow>

        <p>
          Practical checklist before calculating:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>What does the question actually ask—an exact value or a relative comparison?</li>
          <li>Do the visuals already make the answer obvious (highest bar, clear trend, non‑overlapping ranges)?</li>
          <li>Can estimation or sign analysis answer it without exact arithmetic?</li>
        </ul>

        <MCQExample
          number={1}
          prompt="A line chart shows a company’s monthly revenue rising steadily from January through June. Which statement must be true based on the visual alone?"
          options={[
            "Revenue in June is higher than in January.",
            "Revenue in March equals revenue in April.",
            "Average monthly revenue from January to June is constant.",
            "Revenue decreases at least once during the period.",
            "Exact monthly revenue values can be read from the chart without labels.",
          ]}
          correct="Revenue in June is higher than in January."
          solution={
            <>
              <p>
                The chart shows a consistent upward trend. Without exact numbers, we can still conclude that the June value exceeds the January value.
              </p>
              <p>
                We cannot assert equality between March and April, constancy of the average, any decrease, or precise values without labels. Interpretation, not computation, is sufficient.
              </p>
            </>
          }
        />

        <p>
          Bottom line: in DI, computation is a tool—not a default. Start with interpretation. If the answer hinges on trends, ordering, or visual comparisons, you can often solve it without touching the calculator.
        </p>
      </article>
    </main>
  );
}