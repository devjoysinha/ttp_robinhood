import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.12 Divisibility | Properties of Numbers",
  description:
    "A clean definition of divisibility, common equivalent statements, and quick examples. Includes one multiple‑choice check and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.12 Divisibility
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Let <InlineMath math="x,y \in \mathbb{Z}^+" /> with <InlineMath math="y \neq 0" />. We say that <em>x is divisible by y</em> when division leaves no remainder. Equivalently, there is an integer <InlineMath math="k \in \mathbb{Z}" /> such that <InlineMath math="x = k\,y" />, or, put another way, <InlineMath math="\frac{x}{y}" /> is an integer.
        </p>

        <MustKnow>
          <p className="mb-2">
            Formal definition: <InlineMath math="y \mid x \iff \exists\,k \in \mathbb{Z} \text{ with } x = ky" />.
          </p>
          <p>
            Same idea in words: dividing <InlineMath math="x" /> by <InlineMath math="y" /> produces a whole number and no remainder.
          </p>
        </MustKnow>

        <p>Quick illustrations:</p>
        <div className="rounded-lg bg-gray-800/40 p-4">
          <BlockMath math="\frac{20}{4} = 5" />
          <p className="mt-2 text-sm text-gray-400">20 is divisible by 4 because the result is an integer.</p>
          <div className="mt-4">
            <BlockMath math="\frac{20}{3} = 6+\frac{2}{3}" />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            20 is not divisible by 3 because the division leaves a remainder (the fractional part).
          </p>
        </div>

        <MustKnow>
          <p className="mb-2 font-semibold">Equivalent ways to express divisibility</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              “<InlineMath math="y" /> is a factor of <InlineMath math="x" />.”
            </li>
            <li>
              “<InlineMath math="y" /> is a divisor of <InlineMath math="x" />.”
            </li>
            <li>
              “<InlineMath math="x" /> is a multiple of <InlineMath math="y" />.”
            </li>
            <li>
              “<InlineMath math="\dfrac{x}{y}" /> simplifies to an integer.”
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which statement is always true if a is divisible by b (with a and b positive integers and b ≠ 0)?"
          options={[
            "b is a factor of a",
            "a is a multiple of b",
            "a/b is an integer",
            "All of the above",
            "None of the above",
          ]}
          correct="All of the above"
          solution={
            <>
              <p>
                If <InlineMath math="b \mid a" />, then by definition <InlineMath math="\frac{a}{b}" /> is an integer, so “a/b is an integer” holds. That implies “b is a factor of a,” and equivalently “a is a multiple of b.” All three are the same statement.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Is n divisible by 6?"
          statements={[
            "Is n divisible by 6?",
            "1) n is a multiple of 2 and 3.",
            "2) n is a multiple of 12.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need to determine whether <InlineMath math="6 \mid n" />.
              </p>
              <p>
                <strong>Statement (1):</strong> If n is a multiple of 2 and 3, then n is a multiple of LCM(2, 3) = 6. Thus, n is divisible by 6. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> If n is a multiple of 12, it is automatically a multiple of 6. Sufficient.
              </p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Is n divisible by 18?"
          statements={[
            "Is n divisible by 18?",
            "1) n is divisible by 6 and by 3.",
            "2) n is divisible by 9 and by 2.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We must decide whether <InlineMath math="18 \mid n" />.
              </p>
              <p>
                <strong>Statement (1):</strong> Being divisible by 6 and 3 implies n is divisible by LCM(6, 3) = 6. This does not force a factor of 9 or 18. For example, n = 6 satisfies the statement but is not a multiple of 18. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Divisible by 9 and 2 implies divisibility by LCM(9, 2) = 18. Sufficient.
              </p>
              <p>
                Only statement (2) is sufficient. Answer: B.
              </p>
            </>
          }
        />

        <p>
          Takeaway: Divisibility is fundamentally about whole-number quotients. When you see phrases such as “factor,” “divides,” “multiple,” or “the fraction simplifies to an integer,” treat them as interchangeable signals of the same idea.
        </p>
      </article>
    </main>
  );
}