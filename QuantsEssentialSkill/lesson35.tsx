import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.11 Strategic Numbers | Essential GMAT Quant Skills",
  description:
    "When numbers are ugly, replace them with easy 'strategic numbers' that preserve the key relationship. Learn the idea, then apply it in two quick multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main
      className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12"
      aria-labelledby="page-title"
    >
      <header className="mb-8">
        <h1
          id="page-title"
          className="mt-2 text-2xl font-bold text-white md:text-3xl"
        >
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11 Try Strategic Numbers to Test General Rules
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some GMAT questions hand you awkward decimals or fractions. Rather than
          grind through nasty arithmetic, you can often swap in friendlier values
          that live in the same “category” and keep the relationship you care
          about intact. This lets you test a rule or compare expressions quickly.
        </p>

        <MustKnow>
          Pick strategic numbers that preserve the important conditions. For
          example, if a variable is a positive fraction between 0 and 1, choose a
          simple stand‑in like{" "}
          <InlineMath math="x=\tfrac14" aria-label="x equals one fourth" />. Then
          reason from known facts such as{" "}
          <InlineMath math="0&lt;x&lt;1\ \Rightarrow\ x^2&lt;x&lt;\sqrt{x}" />. Your goal is
          to confirm the ordering or behavior, not the exact decimal.
        </MustKnow>

        <p>
          Here’s the classic square–root comparison inside{" "}
          <InlineMath math="(0,1)" />: if{" "}
          <InlineMath math="0&lt;x&lt;1" />, then squaring makes the number smaller
          while taking a square root makes it larger. That is,
          <BlockMath math="x^2 \lt x \lt \sqrt{x}" />
          You can verify this with{" "}
          <InlineMath math="x=\tfrac14" /> since{" "}
          <InlineMath math="\left(\tfrac14\right)^2=\tfrac1{16}" /> and{" "}
          <InlineMath math="\sqrt{\tfrac14}=\tfrac12" />.
        </p>

        <MCQExample
          number={69}
          prompt="If x = 0.443, which of the following expressions has the greatest value?"
          options={[
            "x^2 - 1 - sqrt(x)",
            "sqrt(x) - 1 - x^2",
            "x^2 - x^2",
            "x^2 - sqrt(x)",
            "sqrt(x) - x^2",
          ]}
          correct="sqrt(x) - x^2"
          solution={
            <>
              <p>
                The exact decimal is inconvenient. Use a strategic replacement
                with the same behavior: pick{" "}
                <InlineMath math="x=\tfrac14" /> (still in{" "}
                <InlineMath math="(0,1)" />). Then
                <InlineMath math="\ \left(\tfrac14\right)^2=\tfrac1{16}" /> and{" "}
                <InlineMath math="\ \sqrt{\tfrac14}=\tfrac12" />.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>A.</strong>{" "}
                  <InlineMath math="x^2 - 1 - \sqrt{x}=\tfrac1{16}-1-\tfrac12" /> is
                  negative.
                </li>
                <li>
                  <strong>B.</strong>{" "}
                  <InlineMath math="\sqrt{x} - 1 - x^2=\tfrac12-1-\tfrac1{16}" /> is
                  negative.
                </li>
                <li>
                  <strong>C.</strong>{" "}
                  <InlineMath math="x^2 - x^2=0" />.
                </li>
                <li>
                  <strong>D.</strong>{" "}
                  <InlineMath math="x^2 - \sqrt{x}=\tfrac1{16}-\tfrac12" /> is
                  negative.
                </li>
                <li>
                  <strong>E.</strong>{" "}
                  <InlineMath math="\sqrt{x} - x^2=\tfrac12-\tfrac1{16}=\tfrac7{16}" />{" "}
                  is positive.
                </li>
              </ul>
              <p>
                The only positive—and therefore largest—value is{" "}
                <strong>E</strong>. This also follows directly from{" "}
                <InlineMath math="0&lt;x&lt;1\Rightarrow \sqrt{x}\gt x^2" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={70}
          prompt="Which of the following is largest?"
          options={[
            "(0.99)^2",
            "(0.9099)^2",
            "(0.09)^2",
            "(0.909)^2",
            "(0.9009)^2",
          ]}
          correct="(0.99)^2"
          solution={
            <>
              <p>
                All bases are between 0 and 1. Although squaring makes such
                numbers smaller, the square function is still increasing on{" "}
                <InlineMath math="[0,\infty)" />: if{" "}
                <InlineMath math="a&gt;b\ge 0" />, then{" "}
                <InlineMath math="a^2 &gt; b^2" />. Since{" "}
                <InlineMath math="0.99" /> is the greatest base,{" "}
                <InlineMath math="(0.99)^2" /> is the greatest square.
              </p>
              <p>
                If you prefer to sanity‑check, compare strategic fractions:{" "}
                <InlineMath math="\left(\tfrac12\right)^2=\tfrac14" /> and{" "}
                <InlineMath math="\left(\tfrac14\right)^2=\tfrac1{16}" />—the
                larger base gives the larger square.
              </p>
            </>
          }
        />

        <p>
          Takeaway: when the arithmetic looks painful, keep the constraints and
          swap in numbers that make the comparison effortless. Strategic numbers
          save time and reduce errors without changing the logic of the problem.
        </p>
      </article>
    </main>
  );
}