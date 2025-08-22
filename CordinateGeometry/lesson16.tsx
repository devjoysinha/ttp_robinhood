import 'katex/dist/katex.min.css';

import type { Metadata } from "next";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.6.2 Working with the Slope‑Intercept Equation | Coordinate Geometry",
  description:
    "Master converting linear equations to slope‑intercept form y = mx + b to read slope and y‑intercept quickly. Includes two multiple‑choice practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6.2 Working with the Slope‑Intercept Equation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The slope‑intercept form of a line is <InlineMath math={"y = mx + b"} />, 
          where <InlineMath math={"m"} /> is the slope and <InlineMath math={"b"} /> is the y‑intercept. 
          On test day, you’ll often see linear equations that aren’t written this way. Your first move should be to isolate <InlineMath math={"y"} /> so you can read the slope and intercept at a glance.
        </p>

        <MustKnow>
          If a line is not already written as <InlineMath math={"y = mx + b"} />, 
          rearrange the equation to solve for <InlineMath math={"y"} />. 
          Only then can you reliably identify the slope <InlineMath math={"m"} /> and the y‑intercept <InlineMath math={"b"} /> without guesswork.
        </MustKnow>

        <section aria-labelledby="convert-example" className="space-y-3">
          <h3 id="convert-example" className="text-xl font-semibold text-white">
            Converting to slope‑intercept form
          </h3>
          <p>Example conversion for a line given in standard form:</p>
          <div className="rounded-lg bg-slate-800/50 p-4">
            <BlockMath math={"3x + 5y = 8 \\\\ \\Rightarrow \\; 5y = -3x + 8 \\\\ \\Rightarrow \\; y = -\\tfrac{3}{5}x + \\tfrac{8}{5}"} />
          </div>
          <p>
            From <InlineMath math={"y = -\\tfrac{3}{5}x + \\tfrac{8}{5}"} />, 
            the slope is <InlineMath math={"-\\tfrac{3}{5}"} /> and the y‑intercept is <InlineMath math={"\\tfrac{8}{5}"} />.
          </p>
        </section>

        <MCQExample
          number={20}
          difficulty="easy"
          prompt={
            <>
              In the coordinate plane, line A is given by <InlineMath math={"y = x + 10"} />, and line B is given by <InlineMath math={"x = 20 - y"} />. 
              What is the sum of the y‑intercepts of lines A and B?
            </>
          }
          options={["10", "20", "30", "40", "50"]}
          correct="30"
          solution={
            <>
              <p>
                Line A is already in slope‑intercept form: <InlineMath math={"y = x + 10"} />, so its y‑intercept is <InlineMath math={"10"} />.
              </p>
              <p>
                For line B, start with <InlineMath math={"x = 20 - y"} /> and solve for <InlineMath math={"y"} />:
              </p>
              <div className="my-2">
                <BlockMath math={"x = 20 - y \\;\\Rightarrow\\; y = -x + 20"} />
              </div>
              <p>
                Thus the y‑intercept of line B is <InlineMath math={"20"} />. The required sum is <InlineMath math={"10 + 20 = 30"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={21}
          difficulty="easy"
          prompt={
            <>
              In the <InlineMath math={"xy"} />‑plane, the equation of line <InlineMath math={"k"} /> is <InlineMath math={"2y + 8 = -x"} />. 
              Which of the following is an equivalent slope‑intercept form of the equation of line <InlineMath math={"k"} />?
            </>
          }
          options={[
            "y = (1/2)x - 8",
            "y = -(1/4)x - 4",
            "y = -(1/2)x - 4",
            "y = -(1/2)x + 4",
            "y = (1/2)x + 4",
          ]}
          correct="y = -(1/2)x - 4"
          solution={
            <>
              <p>Solve for <InlineMath math={"y"} />:</p>
              <div className="my-2">
                <BlockMath math={"2y + 8 = -x \\;\\Rightarrow\\; 2y = -x - 8 \\;\\Rightarrow\\; y = -\\tfrac{1}{2}x - 4"} />
              </div>
              <p>
                Therefore, an equivalent slope‑intercept form is <InlineMath math={"y = -\\tfrac{1}{2}x - 4"} />.
              </p>
            </>
          }
        />

        <p>
          Up next: equations for horizontal and vertical lines, and how to identify their slopes and intercepts instantly.
        </p>
      </article>
    </main>
  );
}