import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Tip: Ensure the global KaTeX stylesheet is imported once in your root layout:
// import "katex/dist/katex.min.css";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "6.7 Working with Inequalities and Equations | GMAT Quant",
  description:
    "Master substitution with an equation and an inequality (including compound inequalities). Walk through quick examples and three practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.7 Working with Inequalities and Equations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Substitution doesn’t just connect two equations—it works the same way
          when you pair an equation with an inequality. Solve the equation for
          one variable, plug that expression into the inequality, and simplify
          to learn what the remaining variable must satisfy.
        </p>

        <MustKnow>
          - If an equation and an inequality involve the same variables, first
          isolate one variable in the equation, then substitute that expression
          into the inequality.
          <br />
          - When solving inequalities, the direction of the inequality flips only
          when you multiply or divide both sides by a negative number.
        </MustKnow>

        <section aria-labelledby="refresh-substitution">
          <h3 id="refresh-substitution" className="sr-only">
            Substitution warm‑ups
          </h3>

          <div className="space-y-3">
            <p className="font-semibold text-gray-200">Warm‑up A</p>
            <p>
              Given the equation <InlineMath math={"x = y + 10"} /> and the
              inequality <InlineMath math={"x + y < 14"} />, substitute{" "}
              <InlineMath math={"y + 10"} /> for <InlineMath math={"x"} />:
            </p>
            <BlockMath math={"(y + 10) + y < 14 \\implies 2y < 4 \\implies y < 2"} />
          </div>

            <div className="space-y-3">
              <p className="font-semibold text-gray-200">Warm‑up B</p>
              <p>
                Suppose <InlineMath math={"a = 2b - 2"} /> and{" "}
                <InlineMath math={"3a + b > 22"} />. Substituting gives:
              </p>
              <BlockMath math={"3(2b - 2) + b > 22 \\implies 6b - 6 + b > 22 \\implies 7b > 28 \\implies b > 4"} />
            </div>
        </section>

        <MCQExample
          number={17}
          prompt={
            <>
              If <InlineMath math={"x + 2y = -20"} /> and{" "}
              <InlineMath math={"5x + 3y < 5"} />, which of the following must
              be true?
            </>
          }
          options={[
            <span key="A">
              <InlineMath math={"y < 105"} />
            </span>,
            <span key="B">
              <InlineMath math={"y > 10"} />
            </span>,
            <span key="C">
              <InlineMath math={"y < 15"} />
            </span>,
            <span key="D">
              <InlineMath math={"y > -15"} />
            </span>,
            <span key="E">
              <InlineMath math={"y > -5"} />
            </span>,
          ]}
          correct="y > -15"
          solution={
            <>
              <p>
                From <InlineMath math={"x + 2y = -20"} />, isolate{" "}
                <InlineMath math={"x"} />:
              </p>
              <BlockMath math={"x = -20 - 2y"} />
              <p>Substitute into the inequality:</p>
              <BlockMath math={"5(-20 - 2y) + 3y < 5 \\implies -100 - 10y + 3y < 5 \\implies -7y < 105"} />
              <p>Divide by −7 (flip the sign):</p>
              <BlockMath math={"y > -15"} />
              <p>Therefore, the statement that must be true is y &gt; −15.</p>
            </>
          }
        />

        <ExampleCard
          number={18}
          title="Which statements must be true?"
          statements={[
            "If x + y = 20 and 2x + 3y < 54, evaluate statements I–III.",
            "I. 3x > 17",
            "II. 2y < 30",
            "III. y − x < 8",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>From the inequality with the equation:</p>
              <p className="mt-2 font-semibold text-gray-200">Bound on x</p>
              <BlockMath math={"y = 20 - x \\quad \\text{and}\\quad 2x + 3y < 54"} />
              <BlockMath math={"2x + 3(20 - x) < 54 \\implies 2x + 60 - 3x < 54 \\implies -x < -6 \\implies x > 6"} />
              <p>
                Then <InlineMath math={"3x > 18"} />, so I is true (hence{" "}
                <InlineMath math={"3x > 17"} />).
              </p>

              <p className="mt-4 font-semibold text-gray-200">Bound on y</p>
              <BlockMath math={"x = 20 - y \\quad \\text{and}\\quad 2x + 3y < 54"} />
              <BlockMath math={"2(20 - y) + 3y < 54 \\implies 40 - 2y + 3y < 54 \\implies y < 14"} />
              <p>
                Then <InlineMath math={"2y < 28"} />, so II is true (hence{" "}
                <InlineMath math={"2y < 30"} />).
              </p>

              <p className="mt-4 font-semibold text-gray-200">Relating y − x</p>
              <p>
                From <InlineMath math={"x > 6"} />, multiplying by −1 gives{" "}
                <InlineMath math={"-x < -6"} />. Add{" "}
                <InlineMath math={"y < 14"} /> to get:
              </p>
              <BlockMath math={"y - x < 8"} />
              <p>Thus III is also true. Answer: E (I, II, and III).</p>
            </>
          }
        />

        <h3 className="mt-10 text-xl font-semibold text-white">
          Substituting into a Compound Inequality
        </h3>
        <p>
          The same substitution idea applies when the inequality has two signs.
          Just remember every operation must be applied to all three sides.
        </p>

        <MustKnow>
          For a compound inequality like{" "}
          <InlineMath math={"a < \\;\\cdot\\; < b"} />, apply the same steps to
          the left, middle, and right expressions at each stage of your
          simplification.
        </MustKnow>

        <section aria-labelledby="compound-example">
          <h4 id="compound-example" className="sr-only">
            Compound inequality example
          </h4>
          <p>
            If <InlineMath math={"y = x + 6"} /> and{" "}
            <InlineMath math={"18 < x + 2y < 54"} />, substitute{" "}
            <InlineMath math={"x + 6"} /> for <InlineMath math={"y"} />:
          </p>
          <BlockMath math={"18 < x + 2(x + 6) < 54 \\implies 18 < 3x + 12 < 54"} />
          <p>Subtract 12 across:</p>
          <BlockMath math={"6 < 3x < 42"} />
          <p>Divide all sides by 3:</p>
          <BlockMath math={"2 < x < 14"} />
        </section>

        <MCQExample
          number={19}
          prompt={
            <>
              If <InlineMath math={"x - 3y = 16"} /> and{" "}
              <InlineMath math={"39 < y + 2x < 74"} />, which of the following
              could be the value of <InlineMath math={"y"} />?
            </>
          }
          options={["-5", "0", "5", "8", "12"]}
          correct="5"
          solution={
            <>
              <p>From the equation, express x in terms of y:</p>
              <BlockMath math={"x = 16 + 3y"} />
              <p>Substitute into the compound inequality:</p>
              <BlockMath math={"39 < y + 2(16 + 3y) < 74 \\implies 39 < 32 + 7y < 74"} />
              <p>Subtract 32 and then divide by 7:</p>
              <BlockMath math={"7 < 7y < 42 \\implies 1 < y < 6"} />
              <p>
                Among the choices, only <InlineMath math={"y = 5"} /> lies in{" "}
                <InlineMath math={"(1, 6)"} />. So 5 is possible.
              </p>
            </>
          }
        />

        <p className="mt-8">
          Bottom line: solve the equation for one variable, substitute into the
          inequality, and treat the inequality rules with care—especially when
          multiplying or dividing by negatives or when operating on a compound
          inequality.
        </p>
      </article>
    </main>
  );
}