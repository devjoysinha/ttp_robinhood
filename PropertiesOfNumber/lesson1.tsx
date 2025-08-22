import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX (client-only to avoid SSR issues)
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "4.2 Integers | Properties of Numbers",
  description:
    "Learn what integers and whole numbers are, see clear examples and non‑examples, understand the sign of zero, and test yourself with a quick check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.2 Integers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Integers are numbers that do not include any fractional or decimal
          part. In other words, each integer can be written without a decimal
          point and without a numerator/denominator. Typical examples include
          negative counts, zero, and positive counts: −100, −20, −5, −1, 0, 1,
          5, 20, 100, and so on.
        </p>

        <p>
          Many familiar numbers are not integers because they include a
          fractional or decimal component. For instance, 1.2,{" "}
          <InlineMath math="-\\tfrac{3}{4}" /> and{" "}
          <InlineMath math="\\pi" /> (approximately 3.14) are not integers.
        </p>

        <p>
          With signs, everything works as you’d expect: integers less than zero
          are negative, those greater than zero are positive, and zero itself is
          special — it is neither positive nor negative.
        </p>

        <p>
          Another term you’ll see is whole numbers. Whole numbers are simply the
          nonnegative integers, that is, the set consisting of zero together
          with all positive integers.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Integer: any number with no decimal or fractional part (…, −3, −2,
              −1, 0, 1, 2, 3, …).
            </li>
            <li>
              Not an integer: values like 1.2,{" "}
              <InlineMath math="-\\tfrac{3}{4}" />,{" "}
              <InlineMath math="\\pi" />.
            </li>
            <li>Zero has no sign; it’s neither positive nor negative.</li>
            <li>Whole numbers = nonnegative integers = {`{0, 1, 2, 3, …}`}.</li>
          </ul>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which of the following lists contains only whole numbers?"
          options={[
            "{−2, 0, 3}",
            "{0, 4, 7}",
            "{1.5, 2, 3}",
            "{−1, −3, −5}",
            "{π, 2, 4}",
          ]}
          correct="{0, 4, 7}"
          solution={
            <>
              <p>
                Whole numbers are the nonnegative integers: 0, 1, 2, 3, … The
                only option containing only nonnegative integers is {`{0, 4, 7}`}.
              </p>
              <ul className="list-inside list-disc">
                <li>{`{−2, 0, 3}`} includes −2 (not whole).</li>
                <li>{`{0, 4, 7}`} is all nonnegative integers (valid).</li>
                <li>{`{1.5, 2, 3}`} includes 1.5 (not an integer).</li>
                <li>{`{−1, −3, −5}`} are negative integers (not whole).</li>
                <li>
                  {`{π, 2, 4}`} includes <InlineMath math="\\pi" /> (not an
                  integer).
                </li>
              </ul>
            </>
          }
        />

        <p>
          Quick recap: integers exclude decimals and fractions; whole numbers
          are the integers that are zero or positive; and zero is signless.
          When you classify a value, check whether it has any fractional/decimal
          part and whether it’s nonnegative if you’re deciding whether it’s a
          whole number.
        </p>
      </article>
    </main>
  );
}