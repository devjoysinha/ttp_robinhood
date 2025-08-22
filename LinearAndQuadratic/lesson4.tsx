import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.2.3 Combination by Subtraction | Linear Systems",
  description:
    "Learn how to solve a system of two linear equations by subtracting equations to eliminate a variable. Includes a worked example, KaTeX-rendered steps, and a quick check question.",
};

function MathInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    strict: "warn",
  });
  return (
    <span className="align-baseline">
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
      <span className="sr-only">{ariaLabel ?? children}</span>
    </span>
  );
}

function MathBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
    strict: "warn",
  });
  return (
    <div className="my-4 overflow-auto">
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
      <span className="sr-only">{ariaLabel ?? children}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.3 Eliminating a Variable by Subtracting Equations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two linear equations share a variable with the same coefficient, you can subtract
          one equation from the other to cancel that variable immediately. This “combination by
          subtraction” method isolates the other variable in a single step.
        </p>

        <MustKnow>
          Subtract equations only after aligning like terms. To eliminate a variable cleanly,
          the coefficients of that variable should match exactly. Subtract the entire equation,
          term by term—never just a single term.
        </MustKnow>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked Example
          </h3>
          <p>Solve the system for y:</p>
          <MathBlock ariaLabel="Equation one: 2x plus 2y equals 100. Equation two: 2x plus y equals 50.">
            {String.raw`\begin{aligned}
(1)\quad & 2x + 2y = 100\\
(2)\quad & 2x + y = 50
\end{aligned}`}
          </MathBlock>

          <ol className="list-decimal space-y-2 ps-6">
            <li>
              The x-terms match in both equations (
              <MathInline ariaLabel="two x">2x</MathInline>), so subtract equation (2) from
              equation (1).
            </li>
            <li>
              Subtract corresponding sides:
              <MathBlock ariaLabel="Open parenthesis 2x plus 2y close parenthesis minus open parenthesis 2x plus y close parenthesis equals 100 minus 50; hence y equals 50.">
                {String.raw`\begin{aligned}
(2x+2y) - (2x+y) &= 100 - 50\\
y &= 50
\end{aligned}`}
              </MathBlock>
            </li>
          </ol>

          <p>
            With <MathInline>y=50</MathInline> found, you could back‑substitute to get x if needed.
          </p>

          <p className="text-sm text-gray-400">
            Tip: If the coefficients are opposites (for example, <MathInline>+3x</MathInline>{" "}
            and <MathInline>-3x</MathInline>), adding the equations cancels the variable just as
            effectively as subtraction.
          </p>
        </section>

        <section aria-labelledby="common-pitfalls">
          <h3 id="common-pitfalls" className="text-xl font-semibold text-white">
            Common Pitfalls
          </h3>
          <ul className="list-disc space-y-2 ps-6">
            <li>
              Forgetting to subtract every term. Apply the subtraction across the entire equation:
              both sides and all terms.
            </li>
            <li>
              Misaligned terms. Write equations with like terms stacked to minimize sign errors.
            </li>
            <li>
              Non‑matching coefficients. If coefficients don’t match, scale one or both equations
              first so the target variable’s coefficients are equal in magnitude.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="Use subtraction to eliminate x and solve for y in the system: 3x + 2y = 14 and 3x + y = 8."
          options={["y = 2", "y = 4", "y = 6", "y = 8", "y = 10"]}
          correct="y = 6"
          solution={
            <>
              <p>
                Subtract the second equation from the first to cancel x:
                <MathBlock ariaLabel="Open parenthesis 3x plus 2y close parenthesis minus open parenthesis 3x plus y close parenthesis equals 14 minus 8; hence y equals 6.">
                  {String.raw`\begin{aligned}
(3x+2y) - (3x+y) &= 14 - 8\\
y &= 6
\end{aligned}`}
                </MathBlock>
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            If a variable appears with the same coefficient in both equations, subtract to remove
            it in one move. Align like terms, subtract the entire equation, and solve the resulting
            single‑variable equation.
          </p>
        </section>
      </article>
    </main>
  );
}