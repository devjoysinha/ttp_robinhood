import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "2.15 Opposites and Absolute Value | GMAT Quant",
  description:
    "Understand opposites and absolute value, including notation and key properties. Includes a worked multiple‑choice example with step‑by‑step reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.15 Opposites and Absolute Value
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The opposite of a number is that same number with its sign flipped.
          For instance, the opposite of +8 is −8, and the opposite of −7 is +7.
          Zero is its own opposite because it has no sign.
        </p>

        <p>
          Absolute value measures a number’s distance from zero on the number
          line, so it’s always nonnegative. In everyday notation, we write
          absolute value using vertical bars: <InlineMath math="|x|" />.
          A precise way to define it is:
        </p>

        <BlockMath math="|x|=\begin{cases}
x, & x\ge 0\\
-x, & x<0
\end{cases}" />

        <p>
          Examples: <InlineMath math="|8|=8" />,{" "}
          <InlineMath math="|-7|=7" />, and <InlineMath math="|0|=0" />.
        </p>

        <MustKnow>
          Absolute value returns the magnitude of a number without its sign:
          <InlineMath math="|x|\ge 0" /> for all real <InlineMath math="x" />.
          It’s written with vertical bars, as in <InlineMath math="|x|" />.
          In piecewise form,
          <InlineMath math="|x|=x \text{ if } x\ge 0" /> and{" "}
          <InlineMath math="|x|=-x \text{ if } x<0" />.
        </MustKnow>

        <MCQExample
          number={79}
          prompt="Which of the following values is the greatest?"
          options={["(1/2)^2", "|-3/6|", "|5/8|", "|-7/10|", "sqrt(4/9)"]}
          correct="|-7/10|"
          solution={
            <>
              <p>Rewrite each option as a simple fraction.</p>
              <ul className="list-disc pl-6">
                <li>
                  (A) <InlineMath math="\left(\tfrac{1}{2}\right)^2=\tfrac{1}{4}" />
                </li>
                <li>
                  (B) <InlineMath math="|-\tfrac{3}{6}|=\tfrac{3}{6}=\tfrac{1}{2}" />
                </li>
                <li>
                  (C) <InlineMath math="|\tfrac{5}{8}|=\tfrac{5}{8}" />
                </li>
                <li>
                  (D) <InlineMath math="|-\tfrac{7}{10}|=\tfrac{7}{10}" />
                </li>
                <li>
                  (E) <InlineMath math="\sqrt{\tfrac{4}{9}}=\tfrac{2}{3}" />
                </li>
              </ul>

              <p className="mt-3">
                Now compare the values:
                <InlineMath math="\tfrac{1}{4}=0.25,\ \tfrac{1}{2}=0.5,\ \tfrac{5}{8}=0.625,\ \tfrac{7}{10}=0.7,\ \tfrac{2}{3}\approx 0.667" />
                . The largest is <InlineMath math="\tfrac{7}{10}" />, so the
                correct choice is (D).
              </p>
            </>
          }
        />

        <p>
          Key takeaway: absolute value strips away sign but preserves size.
          Remember the definition and notation so you can quickly simplify
          expressions before comparing them.
        </p>
      </article>
    </main>
  );
}