import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy‑load KaTeX renderers on the client
const MathInline = dynamic(() => import("@/components/ui/Math").then(m => m.MathInline), { ssr: false });
const MathBlock = dynamic(() => import("@/components/ui/Math").then(m => m.MathBlock), { ssr: false });

export const metadata: Metadata = {
  title: "3.2.5 Combine Equations with Different Coefficients | Linear Systems",
  description:
    "Learn how to align coefficients using scaling and the LCM so you can eliminate a variable when adding or subtracting linear equations. Includes two worked examples and a quick multiple‑choice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.5 Combining Equations When the Coefficients Don’t Match
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A coefficient is the number multiplying a variable. For instance, in{" "}
          <MathInline>4x + 3y = 12</MathInline>, the coefficient of{" "}
          <MathInline>x</MathInline> is <MathInline>4</MathInline> and of{" "}
          <MathInline>y</MathInline> is <MathInline>3</MathInline>. When a term
          appears as just <MathInline>x</MathInline> or <MathInline>y</MathInline>,
          the coefficient is understood to be <MathInline>1</MathInline>.
        </p>

        <p>
          The combination (elimination) method works instantly when a variable has the
          same or opposite coefficients across two equations. When they don’t match,
          you can scale one or both equations to create matching coefficients and then
          add or subtract to eliminate a variable.
        </p>

        <MustKnow>
          - You may multiply or divide every term of an equation by any nonzero constant
          without changing its truth.
          - To eliminate a variable, scale the equations so one variable shares the same
          (or opposite) coefficient, then add or subtract the equations.
          - The least common multiple (LCM) of the original coefficients is a fast target
          for aligning terms.
        </MustKnow>

        <section aria-labelledby="why-same-coeffs">
          <h3 id="why-same-coeffs" className="text-xl font-semibold text-white">
            Why scaling is sometimes necessary
          </h3>
          <p>Consider the system</p>
          <MathBlock>{`\\begin{aligned}
6x + 9y &= 12 \\\\
2x + y  &= 3
\\end{aligned}`}</MathBlock>

          <p>
            If we add or subtract as‑is, neither <MathInline>x</MathInline> nor{" "}
            <MathInline>y</MathInline> cancels:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-800 p-4">
              <p className="font-semibold text-white">Subtraction</p>
              <MathBlock>{`\\begin{aligned}
(6x + 9y) - (2x + y) &= 12 - 3 \\\\
4x + 8y &= 9
\\end{aligned}`}</MathBlock>
            </div>
            <div className="rounded-lg border border-gray-800 p-4">
              <p className="font-semibold text-white">Addition</p>
              <MathBlock>{`\\begin{aligned}
(6x + 9y) + (2x + y) &= 12 + 3 \\\\
8x + 10y &= 15
\\end{aligned}`}</MathBlock>
            </div>
          </div>

          <p>
            To eliminate <MathInline>x</MathInline>, make its coefficients match by
            multiplying the second equation by <MathInline>3</MathInline>:
          </p>
          <MathBlock>{`3(2x + y = 3) \\;\\Rightarrow\\; 6x + 3y = 9`}</MathBlock>

          <p>Now subtract to eliminate x:</p>
          <MathBlock>{`\\begin{aligned}
(6x + 9y) - (6x + 3y) &= 12 - 9 \\\\
6y &= 3 \\\\
y &= \\tfrac{1}{2}
\\end{aligned}`}</MathBlock>
        </section>

        <section aria-labelledby="lcm-both">
          <h3 id="lcm-both" className="text-xl font-semibold text-white">
            When you need to scale both equations
          </h3>
          <p>Suppose the system is</p>
          <MathBlock>{`\\begin{aligned}
2x + 4y &= 10 \\\\
3x + 5y &= 7.5
\\end{aligned}`}</MathBlock>

          <p>
            The <MathInline>x</MathInline> coefficients are <MathInline>2</MathInline> and{" "}
            <MathInline>3</MathInline>. Use their LCM, <MathInline>6</MathInline>:
          </p>
          <MathBlock>{`\\begin{aligned}
3(2x + 4y = 10) &\\Rightarrow 6x + 12y = 30 \\\\
2(3x + 5y = 7.5) &\\Rightarrow 6x + 10y = 15
\\end{aligned}`}</MathBlock>

          <p>Subtract to eliminate x:</p>
          <MathBlock>{`\\begin{aligned}
(6x + 12y) - (6x + 10y) &= 30 - 15 \\\\
2y &= 15 \\\\
y &= 7.5
\\end{aligned}`}</MathBlock>

          <p>Back‑substitute to find x, say into the first equation:</p>
          <MathBlock>{`\\begin{aligned}
2x + 4(7.5) &= 10 \\\\
2x + 30 &= 10 \\\\
2x &= -20 \\\\
x &= -10
\\end{aligned}`}</MathBlock>
        </section>

        <MCQExample
          number={5}
          prompt="If 4x + 3y = 12 and 3x + 2y = 10, what is the value of xy?"
          options={["–24", "–6", "4", "18", "24"]}
          correct="–24"
          solution={
            <>
              <p>
                Aim to eliminate a variable by aligning coefficients. Using{" "}
                <MathInline>x</MathInline> is convenient: the LCM of{" "}
                <MathInline>4</MathInline> and <MathInline>3</MathInline> is{" "}
                <MathInline>12</MathInline>.
              </p>
              <MathBlock>{`\\begin{aligned}
3(4x + 3y = 12) &\\Rightarrow 12x + 9y = 36 \\\\
4(3x + 2y = 10) &\\Rightarrow 12x + 8y = 40
\\end{aligned}`}</MathBlock>
              <p>Subtract the second from the first to eliminate x:</p>
              <MathBlock>{`\\begin{aligned}
(12x + 9y) - (12x + 8y) &= 36 - 40 \\\\
y &= -4
\\end{aligned}`}</MathBlock>
              <p>Substitute into the first original equation to get x:</p>
              <MathBlock>{`\\begin{aligned}
4x + 3(-4) &= 12 \\\\
4x - 12 &= 12 \\\\
4x &= 24 \\\\
x &= 6
\\end{aligned}`}</MathBlock>
              <p>
                Therefore, <MathInline>xy = 6\\cdot(-4) = -24</MathInline>.
              </p>
            </>
          }
        />

        <ExampleCard
          number={6}
          title="Eliminate x by matching coefficients (quick drill)"
          statements={[
            "System: 6x + 9y = 12 and 2x + y = 3",
            "Show how to align coefficients and eliminate x, then solve for y.",
          ]}
          correctLetter=""
          solution={
            <>
              <p>Scale the second equation by 3 to match the x-coefficient:</p>
              <MathBlock>{`3(2x + y = 3) \\Rightarrow 6x + 3y = 9`}</MathBlock>
              <p>Subtract to eliminate x and solve for y:</p>
              <MathBlock>{`\\begin{aligned}
(6x + 9y) - (6x + 3y) &= 12 - 9 \\\\
6y &= 3 \\\\[-2pt]
y &= \\tfrac{1}{2}
\\end{aligned}`}</MathBlock>
            </>
          }
        />

        <ExampleCard
          number={7}
          title="Use the LCM to align both equations"
          statements={[
            "System: 2x + 4y = 10 and 3x + 5y = 7.5",
            "Make x-coefficients equal using the LCM of 2 and 3; eliminate x and solve.",
          ]}
          correctLetter=""
          solution={
            <>
              <p>Scale to make both x-coefficients equal to 6:</p>
              <MathBlock>{`\\begin{aligned}
3(2x + 4y = 10) &\\Rightarrow 6x + 12y = 30 \\\\
2(3x + 5y = 7.5) &\\Rightarrow 6x + 10y = 15
\\end{aligned}`}</MathBlock>
              <p>Subtract to eliminate x, then back‑substitute:</p>
              <MathBlock>{`\\begin{aligned}
(6x + 12y) - (6x + 10y) &= 30 - 15 \\\\
2y &= 15 \\Rightarrow y = 7.5 \\\\
2x + 4(7.5) &= 10 \\Rightarrow x = -10
\\end{aligned}`}</MathBlock>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: when coefficients don’t line up on their own, scale equations
          to line them up. Once one variable’s coefficients match (or are opposites),
          a single addition or subtraction wipes that variable out and the system
          becomes straightforward.
        </p>
      </article>
    </main>
  );
}