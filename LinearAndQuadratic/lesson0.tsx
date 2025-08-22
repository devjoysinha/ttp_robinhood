import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.1 Solving for One Variable | Linear Equations",
  description:
    "Learn what makes an equation linear and how to isolate a variable step by step. Includes two multiple‑choice practice problems with full solutions.",
};

type MathProps = {
  children: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

function Math({ children, display = false, ariaLabel, className }: MathProps) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
  });
  const Comp = display ? "div" : "span";
  return (
    <Comp
      className={display ? `my-2 overflow-x-auto ${className ?? ""}` : className}
      role="math"
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
          3.1 Solving an Equation for One Variable
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section aria-labelledby="what-is-linear">
          <h3 id="what-is-linear" className="sr-only">
            What is a linear equation?
          </h3>
          <p>
            A linear equation uses one or more variables, each to the first power,
            and the variables are not multiplied together. In other words, no
            squares, cubes, products of variables, or other nonlinear operations
            appear.
          </p>
          <p>
            Examples of linear equations:
            <Math className="ml-2">
              {"10x + 20 = 40"}
            </Math>
            ,
            <Math className="ml-2">
              {"5x - 6y = 30"}
            </Math>
            .
          </p>
          <p>
            Not linear:
            <Math className="ml-2">{"x^2 + 10x + 5 = 0"}</Math> and
            <Math className="ml-2">{"xy - 2x = 3y"}</Math>.
          </p>
        </section>

        <section aria-labelledby="solve-strategy">
          <h3 id="solve-strategy" className="sr-only">
            Strategy to solve for a variable
          </h3>
          <p>
            To find the value of a variable, rearrange the equation so that the
            unknown stands alone on one side of the equals sign. Every operation
            you apply must be done to both sides to maintain equality.
          </p>

          <MustKnow>
            Whatever change you make to one side of an equation, make the exact
            same change to the other side as well.
          </MustKnow>
        </section>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="text-white font-semibold text-lg">
            Worked example: isolate x
          </h3>
          <p>Solve for x in the equation below.</p>
          <Math display ariaLabel="10x plus 20 equals 40 plus 8x">
            {"10x + 20 = 40 + 8x"}
          </Math>

          <p className="font-semibold text-white">Step 1: Subtract 20 from both sides.</p>
          <Math display>{String.raw`\Rightarrow 10x = 20 + 8x`}</Math>

          <p className="font-semibold text-white">Step 2: Subtract 8x from both sides.</p>
          <Math display>{String.raw`\Rightarrow 2x = 20`}</Math>

          <p className="font-semibold text-white">Step 3: Divide both sides by 2.</p>
          <Math display>{String.raw`\Rightarrow x = 10`}</Math>

          <p className="mt-4">
            Quick check by substitution:
          </p>
          <Math display>
            {String.raw`10(10) + 20 = 40 + 8(10) \Rightarrow 100 + 20 = 40 + 80 \Rightarrow 120 = 120`}
          </Math>
          <p>The equality holds, so x = 10 is correct.</p>
        </section>

        <MCQExample
          number={1}
          prompt="If 8x − 18 = 30 + 2x, what is the value of x?"
          options={["10", "8", "6", "4", "2"]}
          correct="8"
          solution={
            <>
              <p className="mb-2">Rearrange to collect x on one side:</p>
              <Math display>{String.raw`8x - 18 = 30 + 2x`}</Math>
              <Math display>{String.raw`\Rightarrow 8x - 2x = 30 + 18`}</Math>
              <Math display>{String.raw`\Rightarrow 6x = 48`}</Math>
              <Math display>{String.raw`\Rightarrow x = \frac{48}{6} = 8`}</Math>
              <p>Therefore, x = 8.</p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="If 2x + 10 = 5x + 12 and 3y + 6 = 20, what is the value of x + y?"
          options={["16/3", "4", "22/3", "8", "25/3"]}
          correct="4"
          solution={
            <>
              <p className="mb-2">Solve the two linear equations separately.</p>
              <p className="font-semibold text-white mt-2">Find x:</p>
              <Math display>{String.raw`2x + 10 = 5x + 12`}</Math>
              <Math display>{String.raw`\Rightarrow 2x - 5x = 12 - 10`}</Math>
              <Math display>{String.raw`\Rightarrow -3x = 2`}</Math>
              <Math display>{String.raw`\Rightarrow x = -\frac{2}{3}`}</Math>

              <p className="font-semibold text-white mt-4">Find y:</p>
              <Math display>{String.raw`3y + 6 = 20`}</Math>
              <Math display>{String.raw`\Rightarrow 3y = 14`}</Math>
              <Math display>{String.raw`\Rightarrow y = \frac{14}{3}`}</Math>

              <p className="font-semibold text-white mt-4">Sum:</p>
              <Math display>
                {String.raw`x + y = -\frac{2}{3} + \frac{14}{3} = \frac{12}{3} = 4`}
              </Math>
              <p>So, x + y = 4.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="sr-only">
            Key takeaway
          </h3>
          <p>
            The core idea is balance: isolate the variable by performing equal
            operations on both sides. Keep terms with the variable together, move
            constants to the other side, and finish by dividing or multiplying to
            solve.
          </p>
        </section>
      </article>
    </main>
  );
}