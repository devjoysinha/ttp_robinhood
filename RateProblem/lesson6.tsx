import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// If KaTeX CSS is not already loaded globally, add the import below
// (recommended in your root layout to avoid multiple injections):
// import "katex/dist/katex.min.css";

import katex from "katex";

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, { throwOnError: false });
  if (display) {
    return (
      <div
        className="my-2 overflow-x-auto"
        role="img"
        aria-label={ariaLabel ?? expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.7 Rate Problems with Variables in the Choices | GMAT Quant",
  description:
    "Learn a consistent, unit‑safe process for rate problems when answers use variables. Practice with three problem‑solving examples and step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.7 Elementary Rate Questions with Variables in the Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many GMAT rate questions present answers with variables rather than
          numbers. Your approach should not change: set up rate, time, and
          distance carefully, keep units consistent, and use the same formulas
          you’d use with actual values.
        </p>

        <MustKnow>
          - Keep the standard relationships front and center:
          <br />
          • Distance = Rate × Time
          <br />
          • Time = Distance ÷ Rate
          <br />
          • Rate = Distance ÷ Time
          <br />
          - Convert units before you compute. For example, minutes to hours (
          <Math expr="60 \text{ minutes} = 1 \text{ hour}" />) or minutes to
          seconds (<Math expr="1 \text{ minute} = 60 \text{ seconds}" />).
          <br />- Build a quick table (Rate | Time | Distance) to stay organized.
        </MustKnow>

        <p>
          Here’s a quick warm‑up to see the method in action. We’ll convert
          units first, then apply the formula that fits the question.
        </p>

        <section aria-label="Examples">
          <MCQExample
            number={1}
            prompt="At a constant pace of y feet per second, how many seconds does it take to walk x feet?"
            options={["y/x", "x/y", "60xy", "xy", "x/(60y)"]}
            correct="x/y"
            solution={
              <>
                <p>
                  We need time. Use Time = Distance ÷ Rate. Distance is{" "}
                  <Math expr="x \text{ feet}" /> and rate is{" "}
                  <Math expr="y \text{ feet/second}" />.
                </p>
                <p>
                  <Math
                    display
                    expr={`\\text{Time} = \\dfrac{x\\,\\text{feet}}{y\\,\\text{feet/second}} = \\dfrac{x}{y}\\,\\text{seconds}`}
                  />
                </p>
                <p>So the answer is x/y.</p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="Olivia runs x miles in y minutes at a constant rate. How many miles can she run in z hours?"
            options={[
              "(60y)/z",
              "(60xz)/y",
              "(xz)/(60y)",
              "y/(60xz)",
              "z/60",
            ]}
            correct="(60xz)/y"
            solution={
              <>
                <p>
                  First, compute Olivia’s rate. From{" "}
                  <Math expr="x \text{ miles}" /> in <Math expr="y \text{ minutes}" />
                  , her rate is:
                </p>
                <p>
                  <Math
                    display
                    expr={`\\text{Rate} = \\dfrac{x\\,\\text{miles}}{y\\,\\text{minutes}} = \\dfrac{x}{y}\\,\\text{miles per minute}`}
                  />
                </p>
                <p>
                  Convert to miles per hour:
                  <Math
                    display
                    expr={`\\dfrac{x}{y}\\,\\text{miles/min} \\times 60\\,\\dfrac{\\text{min}}{\\text{hour}} = \\dfrac{60x}{y}\\,\\text{miles/hour}`}
                  />
                </p>
                <p>
                  In <Math expr="z" /> hours, distance is:
                </p>
                <p>
                  <Math
                    display
                    expr={`\\text{Distance} = \\left(\\dfrac{60x}{y}\\right) z = \\dfrac{60xz}{y}\\,\\text{miles}`}
                  />
                </p>
                <p>Therefore, the correct choice is (60xz)/y.</p>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="Bob falls m meters in s seconds at a constant rate. Sam falls for z minutes at the same rate. How far does Sam fall?"
            options={[
              "(60zm)/s",
              "(mz)/s",
              "m/60",
              "60zm",
              "(60m)/z",
            ]}
            correct="(60zm)/s"
            solution={
              <>
                <p>
                  Bob’s rate is distance over time:
                  <Math
                    display
                    expr={`\\text{Rate} = \\dfrac{m\\,\\text{meters}}{s\\,\\text{seconds}} = \\dfrac{m}{s}\\,\\text{meters/second}`}
                  />
                </p>
                <p>
                  Sam falls for <Math expr="z" /> minutes, which is{" "}
                  <Math expr="60z \text{ seconds}" />. Using Distance = Rate ×
                  Time:
                </p>
                <p>
                  <Math
                    display
                    expr={`\\text{Distance} = \\left(\\dfrac{m}{s}\\right) (60z) = \\dfrac{60zm}{s}\\,\\text{meters}`}
                  />
                </p>
                <p>So Sam falls (60zm)/s meters.</p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: set up the relationship you need, convert units up front,
          and let the variables ride through the algebra. The process is
          identical to when the numbers are known.
        </p>
      </article>
    </main>
  );
}