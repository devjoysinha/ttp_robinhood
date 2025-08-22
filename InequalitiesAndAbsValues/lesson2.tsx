import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "6.3 Flip the Sign: Multiplying or Dividing an Inequality by a Negative",
  description:
    "Learn why multiplying or dividing an inequality by a negative reverses the inequality sign. Includes quick examples with fully explained solutions and KaTeX-rendered steps.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.3 Multiplying or Dividing an Inequality by a Negative Number
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Solving inequalities looks a lot like solving equations: you can add or subtract the same value on both sides, and you can also multiply or divide both sides by the same nonzero number. The crucial twist comes when that number is negative—then the inequality symbol must flip direction.
        </p>

        <p>
          For example, consider the chain of steps below. Adding and subtracting keep the inequality&apos;s direction the same, but dividing by a negative reverses it:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <BlockMath math={`\\begin{aligned}
-2x - 4 &> -10\\\\
-2x &> -6\\quad \\text{(added 4 to both sides)}\\\\
x &< 3\\quad \\text{(divided by }-2\\text{ and flipped the sign)}
\\end{aligned}`} />
        </div>

        <p>
          Notice how adding 4 kept the inequality pointing the same way, while dividing by <InlineMath math="-2" /> made the symbol reverse.
        </p>

        <MustKnow>
          When you multiply or divide an inequality by a negative number, you must reverse the inequality sign. Adding or subtracting any number—including a negative—does not change the direction of the inequality.
        </MustKnow>

        <section aria-labelledby="practice-examples" className="space-y-6">
          <h3 id="practice-examples" className="text-xl font-semibold text-white">
            Practice Examples
          </h3>

          <MCQExample
            number={1}
            prompt="If 5x − 8 ≤ 8x − 23, which of the following cannot be a value of x?"
            options={["0", "5", "15", "20", "25"]}
            correct="0"
            solution={
              <>
                <p className="mb-2">Rearrange and solve:</p>
                <BlockMath math={`\\begin{aligned}
5x - 8 &\\le 8x - 23 \\\\
5x &\\le 8x - 15\\quad \\text{(add 8)}\\\\
-3x &\\le -15\\quad \\text{(subtract }8x\\text{)}\\\\
x &\\ge 5\\quad \\text{(divide by }-3\\text{ and flip)}
\\end{aligned}`} />
                <p className="mt-2">
                  The solution set is <InlineMath math="x \\ge 5" />. Therefore, 0 is not allowed. All other listed values are at least 5.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="If (−5x + 3)/2 − 8 ≤ 6, which of the following could be a value of x? I. 10  II. −5  III. −10"
            options={["I only", "III only", "II and III", "I and II", "I, II, and III"]}
            correct="I and II"
            solution={
              <>
                <p className="mb-2">Solve the inequality:</p>
                <BlockMath math={`\\begin{aligned}
\\frac{-5x + 3}{2} - 8 &\\le 6 \\\\
\\frac{-5x + 3}{2} &\\le 14\\quad \\text{(add 8)}\\\\
-5x + 3 &\\le 28\\quad \\text{(multiply by 2)}\\\\
-5x &\\le 25\\quad \\text{(subtract 3)}\\\\
x &\\ge -5\\quad \\text{(divide by }-5\\text{ and flip)}
\\end{aligned}`} />
                <p className="mt-2">
                  Any <InlineMath math="x \\ge -5" /> works. From the list, 10 and −5 qualify, but −10 does not. So the correct choice is I and II.
                </p>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="If x is an integer and satisfies −2x + 1 > 7 and x ≥ −4, what is the value of x?"
            options={["−7", "−4", "−3", "−1", "2"]}
            correct="−4"
            solution={
              <>
                <p className="mb-2">First, solve the strict inequality:</p>
                <BlockMath math={`\\begin{aligned}
-2x + 1 &> 7 \\\\
-2x &> 6\\quad \\text{(subtract 1)}\\\\
x &< -3\\quad \\text{(divide by }-2\\text{ and flip)}
\\end{aligned}`} />
                <p className="mt-2">
                  Combine this with <InlineMath math="x \\ge -4" /> and the integrality condition. The only integer that is at least −4 and strictly less than −3 is <InlineMath math="-4" />.
                </p>
              </>
            }
          />

          <MCQExample
            number={4}
            prompt="If (3/10)c = 10d and d^3 < 0, which of the following must be true?"
            options={["c + d > 1", "d < 2c", "2d > 4c", "c > 2d", "c > d"]}
            correct="2d > 4c"
            solution={
              <>
                <p className="mb-2">
                  From <InlineMath math="\\tfrac{3}{10}c = 10d" />, we get <InlineMath math="c = \\tfrac{100}{3}d" />. Since <InlineMath math="d^3 < 0" />, we have <InlineMath math="d < 0" />, and thus <InlineMath math="c" /> is also negative.
                </p>
                <p className="mb-2">Test the statement 2d > 4c:</p>
                <BlockMath math={`\\begin{aligned}
2d &> 4c \\\\
2d &> 4\\left(\\tfrac{100}{3}d\\right) = \\tfrac{400}{3}d \\\\
2d - \\tfrac{400}{3}d &> 0 \\\\
\\left(\\tfrac{6}{3} - \\tfrac{400}{3}\\right)d &> 0 \\\\
-\\tfrac{394}{3}\\, d &> 0
\\end{aligned}`} />
                <p className="mt-2">
                  Because <InlineMath math="d < 0" />, the product <InlineMath math="-\\tfrac{394}{3}\\, d" /> is positive, so the inequality holds for all such d. Therefore, 2d > 4c must be true. The other options are not guaranteed.
                </p>
              </>
            }
          />
        </section>

        <p>
          Key takeaway: inequalities behave like equations until you multiply or divide by a negative number—at that exact moment, flip the inequality sign. Keep that rule front and center, and your solutions will stay on track.
        </p>
      </article>
    </main>
  );
}