import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "19.12.1 Algorithm Net Effect | Functions & Sequences",
  description:
    "Learn two reliable ways to turn a step‑by‑step algorithm into a single algebraic expression: build it symbolically or test a value and match. Includes worked examples.",
};

export default function Page() {
  // MCQ choices as plain strings (for the MCQExample API), mirrored in the solution with KaTeX.
  const algoAChoices = [
    "(x^2+9)/(x^2+6x+9)",
    "(x^2+6x)/(x^2+9)",
    "(-x^2-6x)/(x^2+6x+9)",
  ];

  const example30Choices = [
    "(x^2+3)/(x^2+4)",
    "(-x^2-3)/(x^2+4)",
    "3/4",
    "(x^2-3)/4",
  ];

  const example31Choices = ["6x + 1", "6x + 3", "6x^2", "6x^2 + 1", "36x^2"];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.12.1 Answering Questions about an Algorithm’s Net Effect
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some Quant problems describe a short algorithm (“do this, then that…”)
          and ask for one expression that captures the overall effect. There are
          two dependable approaches: (1) translate each step into algebra and
          simplify, or (2) test a carefully chosen input and pick the answer
          that produces the same output.
        </p>

        <section aria-labelledby="tech1">
          <h3 id="tech1" className="sr-only">
            Technique 1
          </h3>
          <MustKnow>
            Build the algebra step by step. Write the result of each operation,
            simplify when possible, and keep going until you have a single
            expression. Then match your result to the choices.
          </MustKnow>

          <div className="rounded-md bg-gray-800/40 p-4">
            <p className="mb-2 font-semibold text-gray-200">
              Mini‑example (build it symbolically)
            </p>
            <ol className="ml-5 list-decimal space-y-1">
              <li>Divide x by 3.</li>
              <li>Add 1 to the result.</li>
              <li>Square the result.</li>
              <li>Take the reciprocal.</li>
              <li>Subtract 1 from the result.</li>
            </ol>
            <p className="mt-3">
              Work through the steps:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                After step 1: <Math expr="x/3" ariaLabel="x over 3" />
              </li>
              <li>
                After step 2:{" "}
                <Math expr="x/3 + 1 = (x+3)/3" ariaLabel="x over 3 plus 1 equals (x+3) over 3" />
              </li>
              <li>
                After step 3:{" "}
                <Math
                  expr="((x+3)/3)^2 = (x^2+6x+9)/9"
                  ariaLabel="((x+3) over 3) squared equals (x squared plus 6x plus 9) over 9"
                />
              </li>
              <li>
                After step 4:{" "}
                <Math
                  expr="9/(x^2+6x+9)"
                  ariaLabel="9 over (x squared plus 6x plus 9)"
                />
              </li>
              <li>
                After step 5:{" "}
                <Math
                  expr="9/(x^2+6x+9) - 1 = \frac{9-(x^2+6x+9)}{x^2+6x+9} = \frac{-x^2-6x}{x^2+6x+9}"
                  ariaLabel="9 over (x squared plus 6x plus 9) minus 1 equals negative x squared minus 6x over (x squared plus 6x plus 9)"
                />
              </li>
            </ul>
          </div>

          <MCQExample
            number={29}
            prompt="Which expression is equivalent to the five‑step algorithm above?"
            options={algoAChoices}
            correct="(-x^2-6x)/(x^2+6x+9)"
            solution={
              <>
                <p>
                  Translating step by step yields{" "}
                  <Math
                    expr="(-x^2-6x)/(x^2+6x+9)"
                    ariaLabel="negative x squared minus 6x over x squared plus 6x plus 9"
                  />
                  , so that is the correct choice.
                </p>
                <p className="mt-2">
                  Quick check by substitution (e.g., x = 6): the algorithm’s
                  output is <Math expr="-8/9" ariaLabel="negative eight ninths" />. Plugging
                  x = 6 into the three options shows only{" "}
                  <Math
                    expr="(-x^2-6x)/(x^2+6x+9)"
                    ariaLabel="negative x squared minus 6x over x squared plus 6x plus 9"
                  />{" "}
                  matches −8/9.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          When testing a number, avoid “too convenient” values such as 0, 1, and
          −1; those can make different expressions look the same. Pick an input
          that is unlikely to cancel terms accidentally.
        </MustKnow>

        <section aria-labelledby="tech2">
          <h3 id="tech2" className="sr-only">
            Technique 2
          </h3>
          <MustKnow>
            Testing strategy: (1) pick a sensible input, (2) run the algorithm
            to get an output, (3) evaluate each choice at that same input, and
            (4) select the one that matches the output.
          </MustKnow>
        </section>

        <MCQExample
          number={30}
          prompt="Step 1: square x. Step 2: add 4. Step 3: take the reciprocal. Step 4: subtract the result of step 3 from 1. Which expression equals the net effect?"
          options={example30Choices}
          correct="(x^2+3)/(x^2+4)"
          solution={
            <>
              <p className="mb-2">Build the result:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Square then add 4: <Math expr="x^2 + 4" />
                </li>
                <li>
                  Reciprocal: <Math expr="1/(x^2+4)" />
                </li>
                <li>
                  Subtract from 1:{" "}
                  <Math
                    expr="1 - \frac{1}{x^2+4} = \frac{x^2+4}{x^2+4} - \frac{1}{x^2+4} = \frac{x^2+3}{x^2+4}"
                    ariaLabel="one minus one over x squared plus four equals (x squared plus 3) over (x squared plus 4)"
                  />
                </li>
              </ul>
              <p className="mt-2">
                The simplified expression is{" "}
                <Math expr="(x^2+3)/(x^2+4)" />. That matches choice A.
              </p>
            </>
          }
        />

        <MCQExample
          number={31}
          prompt="Step 1: multiply x by 12. Step 2: subtract 6. Step 3: divide by 6. Step 4: add 1. Step 5: triple the result. Step 6: square the result. Which expression equals the net effect?"
          options={example31Choices}
          correct="36x^2"
          solution={
            <>
              <p className="mb-2">
                Use the test‑a‑number method with x = 3 (avoids trivial values):
              </p>
              <ol className="ml-5 list-decimal space-y-1">
                <li>12·3 = 36</li>
                <li>36 − 6 = 30</li>
                <li>30 ÷ 6 = 5</li>
                <li>5 + 1 = 6</li>
                <li>3 × 6 = 18</li>
                <li>18² = 324</li>
              </ol>
              <p className="mt-2">
                Only <Math expr="36x^2" /> gives 324 when x = 3, since{" "}
                <Math expr="36\cdot 3^2 = 36\cdot 9 = 324" />. Therefore, the net
                effect is <Math expr="36x^2" />.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: convert the steps directly when algebra looks tame;
          otherwise, test a smart input and match the output. Both methods are
          fast and dependable once you practice them.
        </p>
      </article>
    </main>
  );
}