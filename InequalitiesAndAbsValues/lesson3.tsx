import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "6.4 Systems of Inequalities | Inequalities and Absolute Values",
  description:
    "Learn how and when you can add inequalities, why subtraction is unsafe, and how to combine inequalities to extract sums like x + y. Includes three worked multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4 Adding Inequalities (Systems)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Equations and inequalities share an important technique: you can add them
          term by term to eliminate variables. The catch for inequalities is that
          every inequality in the stack must point the same way before you add.
        </p>

        <section aria-labelledby="refresh-equations">
          <h3 id="refresh-equations" className="sr-only">
            Refresh: Adding equations
          </h3>
          <p>Quick warm‑up with equations—add to cancel a variable:</p>
          <BlockMath math={`\\begin{aligned}
-x + 7y &= 26\\\\
-7y + 2x &= -12\\\\
\\hline
x &= 14
\\end{aligned}`} />
        </section>

        <section aria-labelledby="example-ineq-1">
          <h3 id="example-ineq-1" className="sr-only">
            Example: Adding inequalities to isolate x
          </h3>
          <p>The same idea works with inequalities when the signs match:</p>
          <BlockMath math={`\\begin{aligned}
-x + 7y &> 26\\\\
-7y + 2x &> -12\\\\
\\hline
x &> 14
\\end{aligned}`} />
          <p>So we can conclude <InlineMath math={"x > 14"} />.</p>
        </section>

        <section aria-labelledby="example-ineq-2">
          <h3 id="example-ineq-2" className="sr-only">
            Example: Adding simple bounds
          </h3>
          <p>
            If <InlineMath math={"x < 26"} /> and <InlineMath math={"y < 8"} />,
            then adding gives <InlineMath math={"x + y < 34"} />.
          </p>
        </section>

        <MustKnow>
          You may add inequalities when all inequality symbols face the same
          direction; the result is valid and combines the left sides and right
          sides respectively. Do not subtract one inequality from another—unlike
          equations, subtraction can lead to invalid conclusions. Also remember:
          multiplying or dividing an inequality by a negative flips the sign.
        </MustKnow>

        <MCQExample
          number={31}
          prompt={
            <>
              Given the system
              <BlockMath math={`\\begin{aligned}
3y + 2x &> 20\\\\
y &> 2x
\\end{aligned}`} />
              which statement about y must be true?
            </>
          }
          options={["y > 6", "y > 5", "y < 4", "y < 5", "y < 6"]}
          correct="y > 5"
          solution={
            <>
              <p>
                From <InlineMath math={"y > 2x"} />, move <InlineMath math={"2x"} /> to the
                other side to write <InlineMath math={"y - 2x > 0"} />. Now add that
                to <InlineMath math={"3y + 2x > 20"} />:
              </p>
              <BlockMath math={`\\begin{aligned}
(3y + 2x) &> 20\\\\
+(y - 2x) &> 0\\\\
\\hline
4y &> 20 \\;\\Rightarrow\\; y > 5
\\end{aligned}`} />
              <p>Therefore, y must exceed 5. Option B.</p>
            </>
          }
        />

        <MCQExample
          number={32}
          prompt={
            <>
              If <InlineMath math={"p < 6"} /> and <InlineMath math={"q < 5"} />, which of the
              following must be true?
              <br />
              I. <InlineMath math={"p > 9 - q"} /> (i.e., <InlineMath math={"p + q > 9"} />)
              <br />
              II. <InlineMath math={"3p + q < 33 - 2q"} /> <br />
              III. <InlineMath math={"p - q < 1"} />
            </>
          }
          options={[
            "I only",
            "II only",
            "II and III",
            "I and II",
            "I, II, and III",
          ]}
          correct="II only"
          solution={
            <>
              <p>
                Add the given bounds to understand the sum:{" "}
                <InlineMath math={"p < 6"} /> and <InlineMath math={"q < 5"} /> imply{" "}
                <InlineMath math={"p + q < 11"} />.
              </p>
              <ul className="list-disc ps-5">
                <li>
                  I: <InlineMath math={"p + q > 9"} /> is not guaranteed. For instance,
                  pick <InlineMath math={"p = 3"} />, <InlineMath math={"q = 4"} /> →
                  sum 7 (false), but <InlineMath math={"p = 5.9"} />,{" "}
                  <InlineMath math={"q = 4.9"} /> → sum 10.8 (true). Not a must.
                </li>
                <li>
                  II: Rearrange:
                  <BlockMath math={`\\begin{aligned}
3p + q &< 33 - 2q\\\\
3p + 3q &< 33\\\\
p + q &< 11
\\end{aligned}`} />
                  This matches what we already know, so II must be true.
                </li>
                <li>
                  III: Don’t subtract inequalities. A counterexample shows it can fail:
                  <InlineMath math={"p = 5"} />, <InlineMath math={"q = 1"} /> gives{" "}
                  <InlineMath math={"p - q = 4"} />, which is not less than 1.
                </li>
              </ul>
              <p>Only II is guaranteed. Answer: II only.</p>
            </>
          }
        />

        <MCQExample
          number={33}
          prompt={
            <>
              If <InlineMath math={"9x - 2y > 0"} /> and{" "}
              <InlineMath math={"3y - 2 > 8x"} />, which of the following must be
              true?
            </>
          }
          options={[
            "x + y > 2",
            "x + y > 4",
            "x + y > 6",
            "x + y < 2",
            "x + y < 4",
          ]}
          correct="x + y > 2"
          solution={
            <>
              <p>
                First rewrite the second inequality so both point the same way and can
                be added:
              </p>
              <BlockMath math={`\\begin{aligned}
3y - 2 &> 8x \\;\\;\\Longleftrightarrow\\;\\; 3y - 8x > 2
\\end{aligned}`} />
              <p>Now add it to <InlineMath math={"9x - 2y > 0"} />:</p>
              <BlockMath math={`\\begin{aligned}
(3y - 8x) &> 2\\\\
+(9x - 2y) &> 0\\\\
\\hline
x + y &> 2
\\end{aligned}`} />
              <p>
                Stronger bounds like <InlineMath math={"x + y > 4"} /> can happen for some
                values but are not forced. Only <InlineMath math={"x + y > 2"} /> must
                hold. Option A.
              </p>
            </>
          }
        />

        <p>
          Bottom line: stacking and adding inequalities is a position game—make sure
          every sign faces the same way, add to combine like terms, and avoid
          subtracting inequalities altogether.
        </p>
      </article>
    </main>
  );
}