import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Note: Make sure the KaTeX stylesheet is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "4.10.4 Product vs. LCM | Properties of Numbers",
  description:
    "Learn when the product of two positive integers equals their least common multiple (LCM) and when it does not. Includes prime‑factor examples and a quick check question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.10.4 The Product of Two Positive Integers May or May Not Equal Their LCM
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The least common multiple (LCM) of two positive integers equals their product
          precisely when the numbers have no prime factors in common. If they do share
          any prime factor, simply multiplying the numbers gives a common multiple, but
          not necessarily the least one.
        </p>

        <p>
          In general, for positive integers a and b:
        </p>
        <div className="rounded-md bg-gray-800/60 p-4">
          <BlockMath math="\operatorname{lcm}(a,b)=\dfrac{a\cdot b}{\gcd(a,b)}" />
          <p className="mt-2 text-sm text-gray-400">
            So if <InlineMath math="\gcd(a,b)=1" /> (the numbers are relatively prime),
            then <InlineMath math="\operatorname{lcm}(a,b)=a\cdot b" />.
          </p>
        </div>

        <section aria-labelledby="examples-heading" className="space-y-4">
          <h3 id="examples-heading" className="text-lg font-semibold text-white">
            Quick illustrations
          </h3>
          <div className="space-y-3">
            <div className="rounded-md border border-gray-700 bg-gray-800/50 p-4">
              <p className="font-medium text-gray-200">Example 1</p>
              <p className="mt-1">
                Consider 24 and 30. Their prime factorizations are
                <InlineMath math="\;24=2^3\cdot 3\," /> and
                <InlineMath math="\;30=2\cdot 3\cdot 5\," /> so they clearly share prime
                factors. The LCM takes the highest powers of each prime:
              </p>
              <div className="mt-2">
                <InlineMath math="\operatorname{lcm}(24,30)=2^3\cdot 3\cdot 5=120" />
              </div>
              <p className="mt-2">
                The product is <InlineMath math="24\cdot 30=720" />, which is a common
                multiple but not the least one.
              </p>
            </div>

            <div className="rounded-md border border-gray-700 bg-gray-800/50 p-4">
              <p className="font-medium text-gray-200">Example 2</p>
              <p className="mt-1">
                Consider 6 and 7. They share no prime factors, so
                <InlineMath math="\gcd(6,7)=1" /> and thus
                <InlineMath math="\;\operatorname{lcm}(6,7)=6\cdot 7=42" />.
              </p>
            </div>
          </div>
        </section>

        <MustKnow>
          If two positive integers x and y have no common prime factors
          (i.e., <InlineMath math="\gcd(x,y)=1" />), then their LCM equals their product:
          <InlineMath math="\;\operatorname{lcm}(x,y)=x\cdot y" />. If they do share any
          prime factor, then <InlineMath math="\operatorname{lcm}(x,y) < x\cdot y" />.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="For which pair of positive integers does the product equal the LCM?"
          options={[
            "8 and 12",
            "9 and 10",
            "15 and 25",
            "18 and 21",
            "14 and 35",
          ]}
          correct="9 and 10"
          solution={
            <>
              <p>
                The product matches the LCM precisely when the numbers are relatively
                prime. Check each pair:
              </p>
              <ul className="ml-5 list-disc">
                <li>8 and 12 share 2 → not relatively prime.</li>
                <li>9 and 10 share no primes → relatively prime.</li>
                <li>15 and 25 share 5 → not relatively prime.</li>
                <li>18 and 21 share 3 → not relatively prime.</li>
                <li>14 and 35 share 7 → not relatively prime.</li>
              </ul>
              <p className="mt-2">
                Only 9 and 10 are coprime, so their product equals their LCM.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}