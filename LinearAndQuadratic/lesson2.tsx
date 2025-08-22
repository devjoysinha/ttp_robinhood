import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "3.2.1 The Substitution Method | Linear Systems",
  description:
    "Master solving two‑variable linear systems using substitution. Learn a clean step‑by‑step strategy, when to choose it, and practice with two targeted multiple‑choice problems.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.1 The Substitution Method
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Substitution is a reliable way to solve a system with two variables:
          isolate one variable in one equation, then replace that variable in the
          other equation with the expression you found. This reduces the system
          to a single‑variable equation, which you can solve directly.
        </p>

        <MustKnow>
          Choose the path of least algebra. Isolate the variable in the equation
          that produces the simplest expression. Cleaner expressions mean fewer
          errors and faster work.
        </MustKnow>

        <section aria-labelledby="walkthrough" className="space-y-4">
          <h3 id="walkthrough" className="text-xl font-semibold text-white">
            Guided walkthrough
          </h3>
          <p>
            Suppose we have the system
            <span className="mx-2">
              <InlineMath math={"4y = 5 + b"} />
            </span>
            and
            <span className="mx-2">
              <InlineMath math={"6b = 12y + 6"} />
            </span>
            . It&apos;s convenient to solve the first equation for{" "}
            <InlineMath math={"b"} />:
          </p>
          <BlockMath math={"4y = 5 + b \\;\\;\\Rightarrow\\;\\; b = 4y - 5"} />
          <p>
            Substitute that expression for <InlineMath math={"b"} /> into the
            second equation:
          </p>
          <BlockMath math={"6(4y - 5) = 12y + 6"} />
          <BlockMath math={"24y - 30 = 12y + 6 \\;\\Rightarrow\\; 12y = 36 \\;\\Rightarrow\\; y = 3"} />
          <p>
            Back‑substitute to get <InlineMath math={"b"} />:
          </p>
          <BlockMath math={"b = 4y - 5 = 4(3) - 5 = 7"} />
          <p className="text-gray-400">
            Takeaway: isolate whichever variable gives a simple expression, then
            replace it in the other equation to solve.
          </p>
        </section>

        <section aria-labelledby="practice" className="space-y-4">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Practice problems
          </h3>

          <MCQExample
            number={1}
            prompt={
              <>
                If <InlineMath math={"20x + 30y = 900"} /> and{" "}
                <InlineMath math={"5x = 75y"} />, what is the value of{" "}
                <InlineMath math={"y"} />?
              </>
            }
            options={["15/8", "30/11", "35/7", "1/2", "3/5"]}
            correct="30/11"
            solution={
              <>
                <p>
                  From <InlineMath math={"5x = 75y"} />, isolate{" "}
                  <InlineMath math={"x"} />:
                </p>
                <BlockMath math={"x = \\dfrac{75}{5}y = 15y"} />
                <p>
                  Substitute <InlineMath math={"x = 15y"} /> into{" "}
                  <InlineMath math={"20x + 30y = 900"} />:
                </p>
                  <BlockMath math={"20(15y) + 30y = 900"} />
                  <BlockMath math={"300y + 30y = 900 \\;\\Rightarrow\\; 330y = 900"} />
                  <BlockMath math={"y = \\dfrac{900}{330} = \\dfrac{30}{11}"} />
                <p>
                  Therefore, <InlineMath math={"y = 30/11"} />.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt={
              <>
                If <InlineMath math={"x + y = 12"} /> and{" "}
                <InlineMath math={"4y + 3x = 42"} />, what is{" "}
                <InlineMath math={"xy"} />?
              </>
            }
            options={["3", "6", "12", "24", "36"]}
            correct="36"
            solution={
              <>
                <p>
                  From <InlineMath math={"x + y = 12"} />, write{" "}
                  <InlineMath math={"x = 12 - y"} />. Substitute into{" "}
                  <InlineMath math={"4y + 3x = 42"} />:
                </p>
                <BlockMath math={"4y + 3(12 - y) = 42"} />
                <BlockMath math={"4y + 36 - 3y = 42 \\;\\Rightarrow\\; y + 36 = 42 \\;\\Rightarrow\\; y = 6"} />
                <p>
                  Then <InlineMath math={"x = 12 - 6 = 6"} />, so{" "}
                  <InlineMath math={"xy = 6\\cdot 6 = 36"} />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrapup" className="space-y-2">
          <h3 id="wrapup" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Substitution is about smart isolation and clean replacement. If one
            equation makes it easy to express a variable, take that route, plug
            into the other equation, solve, and back‑substitute to finish.
          </p>
        </section>
      </article>
    </main>
  );
}