import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6.7 Multiplication and Division with Opposite Signs | Properties of Numbers",
  description:
    "Learn the sign rules for multiplying and dividing numbers with different signs. Includes clear examples, a must‑know summary, and a quick check question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.7 Multiplication and Division with Opposite Signs
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When one factor is positive and the other is negative, the product is
          always negative. The same idea holds for division: a positive divided
          by a negative (or a negative divided by a positive) produces a
          negative quotient.
        </p>

        <section aria-labelledby="mult-examples">
          <h3 id="mult-examples" className="sr-only">
            Multiplication examples
          </h3>
          <p className="space-x-6">
            <InlineMath math={"5\\times(-5)=-25"} />{" "}
            <InlineMath math={"5\\times(-6)=-30"} />{" "}
            <InlineMath math={"10\\times(-15)=-150"} />
          </p>
        </section>

        <section aria-labelledby="div-examples">
          <h3 id="div-examples" className="sr-only">
            Division examples
          </h3>
          <p className="space-x-6">
            <InlineMath math={"\\dfrac{5}{-5}=-1"} />{" "}
            <InlineMath math={"\\dfrac{-4}{2}=-2"} />{" "}
            <InlineMath math={"\\dfrac{100}{-5}=-20"} />
          </p>
        </section>

        <MustKnow>
          If two numbers have different signs, their product or quotient is
          negative. Same signs give a positive result; opposite signs give a
          negative result.
        </MustKnow>

        <section aria-labelledby="notes">
          <h3 id="notes" className="sr-only">
            Notes and edge cases
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Zero times any number is zero: <InlineMath math={"0\\times a=0"} />
              . This is neither positive nor negative.
            </li>
            <li>
              Division by zero is undefined: <InlineMath math={"\\dfrac{a}{0}"} />{" "}
              is not allowed.
            </li>
            <li>
              Zero divided by a nonzero number is zero, regardless of the
              divisor’s sign: <InlineMath math={"\\dfrac{0}{-7}=0"} />.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="Let a and b be nonzero integers with a < 0 and b < 0. Which expression must be negative?"
          options={[
            "a × b",
            "a ÷ b",
            "a ÷ (b²)",
            "(-a) ÷ (-b)",
            "(-a) × (-b)",
          ]}
          correct="a ÷ (b²)"
          solution={
            <>
              <p>
                Since a < 0 and b < 0, we know b² is positive. Thus{" "}
                <InlineMath math={"\\dfrac{a}{b^2}"} /> is a negative divided by
                a positive, which must be negative.
              </p>
              <p>
                Meanwhile, <InlineMath math={"a\\times b"} /> and{" "}
                <InlineMath math={"\\dfrac{a}{b}"} /> are products/quotients of
                same‑sign numbers, so both are positive. Also,{" "}
                <InlineMath math={"\\dfrac{-a}{-b}"} /> and{" "}
                <InlineMath math={"(-a)\\times(-b)"} /> are also positive (same
                signs).
              </p>
            </>
          }
        />

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="sr-only">
            Key takeaway
          </h3>
          <p>
            Think “opposite signs → negative result.” This simple rule lets you
            determine the sign of a product or quotient instantly, before you do
            any arithmetic.
          </p>
        </section>
      </article>
    </main>
  );
}