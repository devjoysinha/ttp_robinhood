import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
    output: "html",
  });
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "6.2 From Equations to Inequalities | Inequalities and Absolute Values",
  description:
    "See how familiar equation‑solving moves carry over to inequalities, with three quick GMAT‑style examples. Learn what stays the same and what to watch out for next.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.2 Moving from Solving Equations to Solving Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The reassuring news: nearly all algebraic steps you use to solve equations also apply to
          inequalities. You can add or subtract the same quantity on both sides, and you can
          multiply or divide both sides by a positive number without changing the direction of the
          inequality. Let’s warm up with a few examples.
        </p>

        <MustKnow>
          Most equation techniques work the same way for inequalities: isolate the variable with
          legal moves on both sides. A key difference we’ll study next: multiplying or dividing by a
          negative flips the inequality sign.
        </MustKnow>

        <section aria-labelledby="ex1">
          <h3 id="ex1" className="sr-only">
            Example 1
          </h3>
          <MCQExample
            number={1}
            prompt={`If ${(katex.renderToString("\\frac{x+3}{2} > 6", {
              throwOnError: false,
            }) as unknown) as string} which of the following could be a value of x? I. 3   II. 6   III. 10`}
            options={["I only", "III only", "II and III", "I and II", "I, II, and III"]}
            correct="III only"
            solution={
              <>
                <p>
                  Solve the inequality by isolating x:
                </p>
                <MathBlock
                  ariaLabel="Steps showing how to isolate x"
                  expr={`\\begin{aligned}
\\frac{x+3}{2} &> 6\\\\
x+3 &> 12\\\\
x &> 9
\\end{aligned}`}
                />
                <p>
                  Since x must be greater than 9, only III (10) fits. Therefore, the correct choice
                  is III only.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex2">
          <h3 id="ex2" className="sr-only">
            Example 2
          </h3>
          <MCQExample
            number={2}
            prompt="If 2x + 5 > 7, which of the following could be the value of x?"
            options={["-2", "-1", "0", "1", "2"]}
            correct="2"
            solution={
              <>
                <p>Isolate x using standard moves:</p>
                <MathBlock
                  ariaLabel="Steps to solve inequality 2x + 5 > 7"
                  expr={`\\begin{aligned}
2x + 5 &> 7\\\\
2x &> 2\\\\
x &> 1
\\end{aligned}`}
                />
                <p>
                  Any number greater than 1 works; among the options, only 2 qualifies.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex3">
          <h3 id="ex3" className="sr-only">
            Example 3
          </h3>
          <MCQExample
            number={3}
            prompt="If 5m − 3 ≤ 2, what is the greatest possible value of 6m − 2?"
            options={["1", "2", "4", "5", "7"]}
            correct="4"
            solution={
              <>
                <p>First, solve for m:</p>
                <MathBlock
                  ariaLabel="Solve 5m − 3 ≤ 2"
                  expr={`\\begin{aligned}
5m - 3 &\\le 2\\\\
5m &\\le 5\\\\
m &\\le 1
\\end{aligned}`}
                />
                <p>
                  The expression <MathInline expr="6m - 2" ariaLabel="six m minus two" /> increases
                  as m increases, so its maximum occurs at the greatest allowed m, which is{" "}
                  <MathInline expr="1" ariaLabel="one" />:
                </p>
                <MathBlock
                  ariaLabel="Compute 6m − 2 at m = 1"
                  expr={`6(1) - 2 = 4`}
                />
                <p>Hence, the greatest possible value is 4.</p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: treat inequalities much like equations when isolating the variable. In the next
          section, we’ll focus on the crucial exception—what happens when you multiply or divide by
          a negative number and why the inequality direction must reverse.
        </p>
      </article>
    </main>
  );
}