import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath as KInline, BlockMath as KBlock } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.9.3 Counting Odd Positive Factors | Properties of Numbers",
  description:
    "A quick method to count the odd divisors of an integer using prime factorization. Includes three worked multiple‑choice examples with explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9.3 Counting the Odd Positive Factors of an Integer
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the previous lesson, we counted the total number of positive
          divisors of a number. Here, we focus on those divisors that are odd.
          The trick is simple: isolate the odd part of the prime factorization,
          then apply the usual counting rule to that part only.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              To count odd divisors, ignore all factors of 2.
            </p>
            <p>
              If{" "}
              <KInline
                math={
                  "N = 2^{a}\\,\\cdot\\,\\prod_{i=1}^{k} p_i^{e_i} \\quad (p_i\\text{ odd primes})"
                }
              />{" "}
              then the number of odd positive divisors of{" "}
              <KInline math="N" /> is
            </p>
            <KBlock math={"\\prod_{i=1}^{k} (e_i + 1)"} />
            <p className="mt-3">
              Recipe:
              <br />
              1) Prime‑factorize N.
              <br />
              2) Drop the entire power of 2 (if present).
              <br />
              3) Add 1 to each remaining exponent and multiply.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="worked-mini-example" className="space-y-4">
          <h3
            id="worked-mini-example"
            className="text-xl font-semibold text-white"
          >
            Quick Worked Example
          </h3>
          <p>
            How many odd positive divisors does{" "}
            <KInline math={"12{,}600"} /> have?
          </p>
          <div className="rounded-md bg-gray-800 p-4">
            <div className="space-y-2">
              <p className="font-semibold">Step 1: Prime factorization</p>
              <KBlock math={"12{,}600 = 2^{3}\\cdot 3^{2}\\cdot 5^{2}\\cdot 7"} />
              <p className="font-semibold">Step 2: Remove the factor of 2</p>
              <KBlock math={"3^{2}\\cdot 5^{2}\\cdot 7^{1}"} />
              <p className="font-semibold">
                Step 3: Multiply (exponent + 1) across odd primes
              </p>
              <KBlock math={"(2+1)(2+1)(1+1) = 3\\cdot 3\\cdot 2 = 18"} />
              <p className="text-gray-300">
                Therefore, <KInline math={"12{,}600"} /> has{" "}
                <strong>18</strong> odd positive divisors.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="practice-examples" className="space-y-6">
          <h3 id="practice-examples" className="text-xl font-semibold text-white">
            Practice: Multiple‑Choice
          </h3>

          <MCQExample
            number={19}
            prompt="How many factors of 54,000 are odd and greater than 1?"
            options={["9", "15", "16", "35", "79"]}
            correct="15"
            solution={
              <>
                <p>
                  First count the odd divisors, then subtract 1 (since 1 is odd
                  but not greater than 1).
                </p>
                <p>
                  Prime factorization:{" "}
                  <KInline math={"54{,}000 = 2^{4}\\cdot 3^{3}\\cdot 5^{3}"} />.
                  Ignoring powers of 2, the odd part is{" "}
                  <KInline math={"3^{3}\\cdot 5^{3}"} />.
                </p>
                <p>
                  Number of odd divisors:{" "}
                  <KInline math={"(3+1)(3+1) = 16"} />.
                </p>
                <p>
                  We need those odd divisors that are greater than 1, so subtract
                  1: <KInline math={"16 - 1 = 15"} />. Correct choice:{" "}
                  <strong>15</strong>.
                </p>
              </>
            }
          />

          <MCQExample
            number={20}
            prompt="How many positive factors of 1,960 are even?"
            options={["4", "6", "12", "18", "24"]}
            correct="18"
            solution={
              <>
                <p>
                  All divisors are either odd or even, so:
                  <br />
                  even divisors = total divisors − odd divisors.
                </p>
                <p>
                  Factorize: <KInline math={"1{,}960 = 2^{3}\\cdot 5^{1}\\cdot 7^{2}"} />.
                </p>
                <p>
                  Total divisors:{" "}
                  <KInline math={"(3+1)(1+1)(2+1) = 4\\cdot 2\\cdot 3 = 24"} />.
                </p>
                <p>
                  Odd divisors (drop the power of 2):{" "}
                  <KInline math={"5^{1}\\cdot 7^{2}"} /> gives{" "}
                  <KInline math={"(1+1)(2+1) = 2\\cdot 3 = 6"} />.
                </p>
                <p>
                  Even divisors: <KInline math={"24 - 6 = 18"} />. Correct choice:{" "}
                  <strong>18</strong>.
                </p>
              </>
            }
          />

          <MCQExample
            number={21}
            prompt={
              <>
                Variables b and c are positive integers. Let{" "}
                <KInline math={"N = 2^{b}\\cdot 11^{c}\\cdot 39^{5}"} /> and{" "}
                <KInline math={"M = 2^{2b}\\cdot 7^{17}\\cdot 37^{19}"} />. If N and
                M have the same number of odd positive factors, what is the value
                of c?
              </>
            }
            options={["9", "10", "26", "31", "59"]}
            correct="9"
            solution={
              <>
                <p>
                  Count odd divisors of each number by removing all factors of 2.
                </p>
                <p>
                  For N, note <KInline math={"39 = 3\\cdot 13"} />, so{" "}
                  <KInline math={"39^{5} = 3^{5}\\cdot 13^{5}"} />. Then
                </p>
                <KBlock math={"N = 2^{b}\\cdot 11^{c}\\cdot 3^{5}\\cdot 13^{5}"} />
                <p>
                  The odd part is <KInline math={"11^{c}\\cdot 3^{5}\\cdot 13^{5}"} />.
                </p>
                <p>
                  Odd divisors of N:{" "}
                  <KInline math={"(c+1)(5+1)(5+1) = (c+1)\\cdot 36"} />.
                </p>
                <p>
                  For M, the odd part is{" "}
                  <KInline math={"7^{17}\\cdot 37^{19}"} />.
                </p>
                <p>
                  Odd divisors of M:{" "}
                  <KInline math={"(17+1)(19+1) = 18\\cdot 20 = 360"} />.
                </p>
                <p>
                  Set them equal: <KInline math={"36(c+1) = 360"} /> ⇒{" "}
                  <KInline math={"c+1 = 10"} /> ⇒ <KInline math={"c = 9"} />.
                  Correct choice: <strong>9</strong>.
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: to count odd divisors, strip out all factors of 2 and apply
          the standard “add 1 to each exponent and multiply” rule to the
          remaining (odd) primes only.
        </p>
      </article>
    </main>
  );
}