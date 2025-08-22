import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.2.2 The Combination (Elimination) Method | Linear Systems",
  description:
    "Master the combination (elimination) method for solving linear systems: when to add or subtract, how to align coefficients, and how to spot special cases. Includes one quick multiple‑choice example and one Data Sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.2 The Combination (Elimination) Method
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The combination method solves a system by adding or subtracting entire
          equations to remove one variable. Once a variable disappears, you can
          solve for the other and back‑solve. You’ll often multiply one or both
          equations first so that a variable cancels cleanly.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Align a variable’s coefficients. If they already match (up to
              sign), you’re ready to eliminate.
            </li>
            <li>
              Same sign coefficients → subtract the equations. Opposite sign
              coefficients → add the equations.
            </li>
            <li>
              It’s valid to multiply an entire equation by any nonzero constant
              before combining.
            </li>
            <li>
              After eliminating, solve the one‑variable equation, then substitute
              to find the remaining variable.
            </li>
            <li>
              Watch for special outcomes:
              <ul className="mt-2 list-disc pl-5">
                <li>
                  Contradiction like <InlineMath math={"0=c"} /> (with{" "}
                  <InlineMath math={"c\\neq 0"} />) → no solution (parallel
                  lines).
                </li>
                <li>
                  Identity like <InlineMath math={"0=0"} /> → infinitely many
                  solutions (same line).
                </li>
              </ul>
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="when-to-add-or-subtract">
          <h3
            id="when-to-add-or-subtract"
            className="text-lg font-semibold text-gray-200"
          >
            When do I add and when do I subtract?
          </h3>
          <p>
            Suppose the system is:
          </p>
          <BlockMath
            math={String.raw`
              \begin{aligned}
                a_1x + b_1y &= c_1 \\
                a_2x + b_2y &= c_2
              \end{aligned}
            `}
          />
          <p className="mt-2">
            If you want to eliminate <InlineMath math={"y"} />, try to make{" "}
            <InlineMath math={"b_1"} /> and <InlineMath math={"b_2"} /> equal in
            magnitude:
          </p>
          <ul className="list-disc pl-5">
            <li>
              If <InlineMath math={"b_1 = b_2"} />, subtract the equations to
              cancel <InlineMath math={"y"} />.
            </li>
            <li>
              If <InlineMath math={"b_1 = -b_2"} />, add the equations to cancel{" "}
              <InlineMath math={"y"} />.
            </li>
            <li>
              Otherwise, multiply one or both equations by constants to create
              matching coefficients before adding or subtracting.
            </li>
          </ul>
        </section>

        <MCQExample
          number={21}
          prompt={
            <>
              For the system{" "}
              <InlineMath math={"4x + 7y = 13"} /> and{" "}
              <InlineMath math={"6x - 7y = 11"} />, what is <InlineMath math={"x"} />?
            </>
          }
          options={["2", "12/5", "5/2", "7/3", "9/4"]}
          correct="12/5"
          solution={
            <>
              <p>
                The <InlineMath math={"y"} /> coefficients are opposites (
                <InlineMath math={"+7"} /> and <InlineMath math={"-7"} />), so
                add the equations to eliminate <InlineMath math={"y"} />:
              </p>
              <BlockMath
                math={String.raw`
                \begin{aligned}
                  (4x + 7y) + (6x - 7y) &= 13 + 11 \\
                  10x &= 24 \\
                  x &= \tfrac{24}{10} = \tfrac{12}{5}.
                \end{aligned}
              `}
              />
              <p>Thus, x = 12/5.</p>
            </>
          }
        />

        <section aria-labelledby="aligning-coefficients">
          <h3
            id="aligning-coefficients"
            className="text-lg font-semibold text-gray-200"
          >
            Aligning coefficients with multiplication
          </h3>
          <p>
            If coefficients don’t line up, scale equations. For example:
          </p>
          <BlockMath
            math={String.raw`
              \begin{aligned}
                2x + 3y &= 7 \\
                5x + 4y &= 8
              \end{aligned}
            `}
          />
          <p>
            To eliminate <InlineMath math={"y"} />, make the{" "}
            <InlineMath math={"y"} /> coefficients match: multiply the first
            equation by <InlineMath math={"4"} /> and the second by{" "}
            <InlineMath math={"-3"} />:
          </p>
          <BlockMath
            math={String.raw`
              \begin{aligned}
                (2x + 3y)\cdot 4 &:~ 8x + 12y = 28 \\
                (5x + 4y)\cdot (-3) &:~ -15x - 12y = -24
              \end{aligned}
            `}
          />
          <p>Now add to eliminate y and solve for x.</p>
        </section>

        <ExampleCard
          number={22}
          title="Data Sufficiency: Determine x"
          statements={[
            "What is the value of x?",
            "1) 2x + 5y = 7",
            "2) 3x − 5y = 8",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We need a unique value for <InlineMath math={"x"} />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math={"2x + 5y = 7"} />. Infinitely many{" "}
                <InlineMath math={"(x,y)"} /> pairs satisfy this line → not
                sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math={"3x - 5y = 8"} />. Also a single line →
                not sufficient.
              </p>
              <p>
                <strong>Together:</strong> Add the equations to eliminate{" "}
                <InlineMath math={"y"} />:
              </p>
              <BlockMath
                math={String.raw`
                \begin{aligned}
                  (2x + 5y) + (3x - 5y) &= 7 + 8 \\
                  5x &= 15 \\
                  x &= 3.
                \end{aligned}
              `}
              />
              <p>
                A unique value for <InlineMath math={"x"} /> is determined →
                sufficient only together. Answer: C.
              </p>
            </>
          }
        />

        <section aria-labelledby="edge-cases">
          <h3 id="edge-cases" className="text-lg font-semibold text-gray-200">
            Edge cases: no solution vs. infinitely many
          </h3>
          <p>Elimination also reveals structure of a system:</p>
          <ul className="list-disc pl-5">
            <li>
              If combining leads to <InlineMath math={"0 = c"} /> with{" "}
              <InlineMath math={"c \\neq 0"} />, the system is inconsistent (no
              solution).
            </li>
            <li>
              If combining leads to an identity such as{" "}
              <InlineMath math={"0 = 0"} />, the equations describe the same
              line (infinitely many solutions).
            </li>
          </ul>
          <BlockMath
            math={String.raw`
              \text{Example of no solution:}\quad
              \begin{aligned}
                2x + 4y &= 10 \\
                x + 2y  &= 9
              \end{aligned}
            `}
          />
          <p className="mt-2">
            Multiply the second equation by 2 to get{" "}
            <InlineMath math={"2x + 4y = 18"} />. Subtracting from the first
            yields <InlineMath math={"0 = -8"} />, a contradiction → no
            solution.
          </p>
        </section>

        <p>
          Bottom line: elimination is about lining up coefficients so one
          variable drops out with a clean add or subtract. Set up the cancel,
          combine, solve, then substitute to finish.
        </p>
      </article>
    </main>
  );
}