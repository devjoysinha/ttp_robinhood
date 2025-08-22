import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// KaTeX
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "6.18 Solution Set Questions | Inequalities & Absolute Value",
  description:
    "How to interpret and find the full set of solutions to inequalities. Learn two fast strategies (algebra vs. testing values) and practice with curated examples, including absolute value and rational inequalities.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.18 Working with Solution Sets
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many algebra questions, you’re asked for the solution set of an
          inequality—that is, every value of the variable that makes the
          statement true.
        </p>

        <MustKnow>
          The solution set of an inequality is the complete collection of all
          values that satisfy the inequality.
        </MustKnow>

        <p>Quick warm‑up: solve the inequality below.</p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <p className="mb-2 text-gray-200">Example A</p>
          <p className="mb-2">
            What is the solution set of <InlineMath math={"2x - 5 < 7"} />?
          </p>
          <BlockMath
            math={[
              "2x - 5 < 7",
              "2x < 12",
              "x < 6",
            ].join("\\\\Rightarrow\\ ")}
          />
          <p className="mt-2">
            So every real number less than 6 is a solution. On a number line,
            you’d show an open circle at 6 and shade to the left.
          </p>
        </div>

        <p>
          These prompts can be phrased in several ways, such as “Which choice
          lists all values of x that satisfy…”, “What is the set of solutions
          to…”, or “Which inequality matches the shaded portion of the number
          line?” Regardless of wording, your job is to identify all x that make
          the statement true.
        </p>

        <MustKnow>
          Two reliable approaches:
          <br />• Apply algebra to isolate the variable when the inequality is
          straightforward.
          <br />• Test numbers strategically when algebra is messy or when
          choices describe disjoint ranges.
        </MustKnow>

        <div className="rounded-md bg-gray-900/40 p-4">
          <p className="mb-2 text-gray-200">Example B</p>
          <p className="mb-2">
            Which values of x satisfy{" "}
            <InlineMath math={"2(3x - 4) < 5(x - 1)"} />?
          </p>

          <p className="mt-2 font-semibold text-gray-200">Algebraic route:</p>
          <BlockMath
            math={[
              "2(3x - 4) < 5(x - 1)",
              "6x - 8 < 5x - 5",
              "x - 8 < -5",
              "x < 3",
            ].join("\\\\Rightarrow\\ ")}
          />
          <p className="mt-2">Therefore, the solution set is x &lt; 3.</p>

          <p className="mt-4 font-semibold text-gray-200">Testing values:</p>
          <p>
            Try x = 0: <InlineMath math={"2(3\\cdot0 - 4) = -8"} /> and{" "}
            <InlineMath math={"5(0 - 1) = -5"} />, so{" "}
            <InlineMath math={"-8 < -5"} /> is true. That’s consistent with
            x&nbsp;&lt;&nbsp;3. Try x = 4:{" "}
            <InlineMath math={"2(3\\cdot4 - 4) = 16"} /> and{" "}
            <InlineMath math={"5(4 - 1) = 15"} />, so{" "}
            <InlineMath math={"16 < 15"} /> is false. Again, this aligns with
            x&nbsp;&lt;&nbsp;3.
          </p>
        </div>

        <MustKnow>
          Test numbers that separate remaining choices. Avoid values that all
          surviving options agree on; pick inputs that can eliminate at least
          one candidate.
        </MustKnow>

        <div className="rounded-md bg-gray-900/40 p-4">
          <p className="mb-2 text-gray-200">Example C (Harder)</p>
          <p className="mb-2">
            Find all x such that{" "}
            <InlineMath math={"|2x - 1| + |x + 1| < 6"} />.
          </p>
          <p>
            Testing values is efficient here. Check x = 0:{" "}
            <InlineMath math={"|2(0) - 1| + |0 + 1| = 1 + 1 = 2 < 6"} /> (works).
            Check x = 3: <InlineMath math={"|5| + |4| = 9"} /> (fails). This
            suggests a bounded interval. Probe more points (e.g., x = 2, x =
            −2) to bracket the range precisely, or split by critical points
            x = −1 and x = 1/2 and solve piecewise.
          </p>
        </div>

        <p className="mt-8 text-gray-200">Practice Examples</p>

        <MCQExample
          number={49}
          prompt={
            <>
              The solution set of{" "}
              <InlineMath math={"16 \\ge 25 - x^2"} /> is:
            </>
          }
          options={[
            "−4 ≤ x ≤ 4",
            "−3 ≤ x ≤ 3",
            "x ≤ −3 or x ≥ 3",
            "x ≤ −4 or x ≥ 4",
            "x ≥ 3",
          ]}
          correct="x ≤ −3 or x ≥ 3"
          solution={
            <>
              <p className="mb-2">
                Rearrange to isolate the squared term:
              </p>
              <BlockMath
                math={[
                  "16 \\ge 25 - x^2",
                  "16 + x^2 \\ge 25",
                  "x^2 \\ge 9",
                ].join("\\\\Rightarrow\\ ")}
              />
              <p className="mt-2">
                Taking square roots yields{" "}
                <InlineMath math={"|x| \\ge 3"} />, which means{" "}
                <InlineMath math={"x \\le -3"} /> or{" "}
                <InlineMath math={"x \\ge 3"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={50}
          prompt={
            <>
              Which of the following describes all real numbers x such that{" "}
              <InlineMath math={"\\dfrac{x + 2}{x - 3} < -4"} />?
            </>
          }
          options={["−3 < x < 2", "2 < x < 3", "−2 < x < 3", "−3 < x < −2", "x > 2"]}
          correct="2 < x < 3"
          solution={
            <>
              <p className="mb-2">
                You must account for the sign of the denominator when multiplying
                both sides of an inequality.
              </p>
              <p className="font-semibold text-gray-200">Case 1: x − 3 &gt; 0 (x &gt; 3)</p>
              <p className="mb-2">
                Multiplying preserves the sign:
              </p>
              <BlockMath
                math={[
                  "\\dfrac{x + 2}{x - 3} < -4",
                  "x + 2 < -4(x - 3)",
                  "x + 2 < -4x + 12",
                  "5x < 10",
                  "x < 2",
                ].join("\\\\Rightarrow\\ ")}
              />
              <p>
                But we also assumed x &gt; 3, which conflicts with x &lt; 2. So
                there’s no solution from Case 1.
              </p>

              <p className="mt-4 font-semibold text-gray-200">
                Case 2: x − 3 &lt; 0 (x &lt; 3)
              </p>
              <p className="mb-2">
                Multiplying flips the inequality:
              </p>
              <BlockMath
                math={[
                  "\\dfrac{x + 2}{x - 3} < -4",
                  "x + 2 > -4(x - 3)",
                  "x + 2 > -4x + 12",
                  "5x > 10",
                  "x > 2",
                ].join("\\\\Rightarrow\\ ")}
              />
              <p>
                Combine with the case condition x &lt; 3 to get{" "}
                <InlineMath math={"2 < x < 3"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={51}
          prompt={
            <>
              Which inequality has solution set{" "}
              <InlineMath math={"-3 \\le x \\le 4"} />?
            </>
          }
          options={[
            <span key="A">
              <InlineMath math={"|x + 2| + |x - 3| \\le 7"} />
            </span>,
            <span key="B">
              <InlineMath math={"|x - 2| + |x + 3| \\le 7"} />
            </span>,
            <span key="C">
              <InlineMath math={"|x - 3| + |x - 4| \\le 7"} />
            </span>,
            <span key="D">
              <InlineMath math={"|x + 2| + |x - 5| \\le 7"} />
            </span>,
            <span key="E">
              <InlineMath math={"|x - 3| + |x - 2| \\le 7"} />
            </span>,
          ]}
          correct="|x + 2| + |x - 3| ≤ 7"
          solution={
            <>
              <p className="mb-2">
                A fast check is to test the endpoints −3 and 4. The correct
                inequality should be true at both endpoints (equality allowed)
                and false just beyond them.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  For choice A at x = −3:{" "}
                  <InlineMath math={"|{-3}+2| + |{-3}-3| = 1 + 6 = 7"} /> ✓
                </li>
                <li>
                  For choice A at x = 4:{" "}
                  <InlineMath math={"|4+2| + |4-3| = 6 + 1 = 7"} /> ✓
                </li>
              </ul>
              <p className="mt-2">
                Choice A matches both endpoints, while other options fail at −3
                or 4. Thus{" "}
                <InlineMath math={"|x + 2| + |x - 3| \\le 7"} /> is the unique
                match for <InlineMath math={"-3 \\le x \\le 4"} />.
              </p>
            </>
          }
        />

        <MustKnow>
          Strategy recap:
          <br />• Prefer algebra when manipulation is clean.
          <br />• Prefer testing when expressions are piecewise (absolute value,
          variable in denominator) or when choices are intervals you can
          eliminate quickly.
        </MustKnow>

        <p className="text-gray-300">
          With practice, you’ll quickly recognize whether to isolate the
          variable or to prune choices by plugging in smart test values.
        </p>
      </article>
    </main>
  );
}