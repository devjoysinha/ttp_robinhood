import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "4.9.4 Total Prime Factors vs. Distinct Prime Factors | Properties of Numbers",
  description:
    "Learn the difference between the total number of prime factors and the number of distinct (unique) prime factors. Includes clear examples and three GMAT‑style multiple‑choice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9.4 Total Prime Factors vs. Distinct Prime Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          GMAT questions often mention two related ideas: the total number of prime factors of an integer and the number of distinct (unique) prime factors. They sound similar but measure different things: one counts every prime in the factorization with multiplicity; the other counts only the different primes that appear.
        </p>

        <MustKnow>
          - Total number of prime factors counts multiplicity. If an integer has prime factorization
          <InlineMath math="n = p^{a} q^{b} r^{c}" /> then the total number of prime factors is{" "}
          <InlineMath math="a + b + c" />.
          <br />
          - Number of distinct prime factors counts how many different primes appear. For the same{" "}
          <InlineMath math="n = p^{a} q^{b} r^{c}" />, the number of distinct prime factors is 3 (the primes{" "}
          <InlineMath math="p, q, r" />).
        </MustKnow>

        <section aria-labelledby="examples-title" className="space-y-3">
          <h3 id="examples-title" className="text-xl font-semibold text-white">
            Quick checks
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <InlineMath math="6 = 2 \times 3" /> → total prime factors: 2; distinct prime factors: 2.
            </li>
            <li>
              <InlineMath math="12 = 2 \times 2 \times 3 = 2^{2}\times 3" /> → total: 3; distinct: 2.
            </li>
            <li>
              <InlineMath math="32 = 2^{5}" /> → total: 5; distinct: 1.
            </li>
            <li>
              <InlineMath math="60 = 2^{2}\times 3 \times 5" /> → total: 4; distinct: 3.
            </li>
          </ul>
        </section>

        <MustKnow>
          To find these counts quickly:
          <br />
          - Write the prime factorization using exponents.
          <br />
          - Sum the exponents for the total number of prime factors.
          <br />
          - Count how many different bases (primes) appear for the distinct count.
        </MustKnow>

        <MCQExample
          number={22}
          difficulty="medium"
          prompt="If x has exactly three distinct prime factors and x < 100, what is the greatest possible value of x?"
          options={["30", "60", "75", "90", "99"]}
          correct="90"
          solution={
            <>
              <p>Test the larger choices first using prime factorizations:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <InlineMath math="99 = 3^{2}\times 11" /> → distinct primes: 2 (<InlineMath math="3, 11" />) → not enough.
                </li>
                <li>
                  <InlineMath math="90 = 2 \times 3^{2}\times 5" /> → distinct primes: 3 → meets the condition.
                </li>
              </ul>
              <p>
                Since 90 is less than 100 and already satisfies “three distinct primes,” it is the maximum such value among the options. Answer: 90.
              </p>
            </>
          }
        />

        <MCQExample
          number={23}
          difficulty="easy"
          prompt="y is a non-prime integer with 1 < y < 10. If the number of distinct prime factors of y equals the total number of prime factors of y, what is y?"
          options={["2", "4", "6", "8", "9"]}
          correct="6"
          solution={
            <>
              <p>
                If the two counts are equal, the factorization must have no repeated primes (every exponent is 1).
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <InlineMath math="4 = 2^{2}" /> → total = 2, distinct = 1 → not equal.
                </li>
                <li>
                  <InlineMath math="8 = 2^{3}" /> → total = 3, distinct = 1 → not equal.
                </li>
                <li>
                  <InlineMath math="9 = 3^{2}" /> → total = 2, distinct = 1 → not equal.
                </li>
                <li>
                  <InlineMath math="6 = 2 \times 3" /> → total = 2, distinct = 2 → equal.
                </li>
              </ul>
              <p>Also, 2 is prime and excluded. The only value that works is 6. Answer: 6.</p>
            </>
          }
        />

        <MCQExample
          number={24}
          difficulty="easy"
          prompt="If positive integers x and y have the same number of distinct prime factors but different totals of prime factors, which of the following pairs could be (x, y)? I. x = 8 and y = 81  II. x = 1 and y = 2  III. x = 12 and y = 45"
          options={[
            "I only",
            "I and II only",
            "I and III only",
            "II and III only",
            "I, II, and III",
          ]}
          correct="I only"
          solution={
            <>
              <p>
                I. <InlineMath math="8 = 2^{3}" /> → distinct = 1, total = 3;{" "}
                <InlineMath math="81 = 3^{4}" /> → distinct = 1, total = 4. Same distinct, different totals → works.
              </p>
              <p>
                II. 1 is neither prime nor composite and has no prime factorization, so its distinct count is 0;{" "}
                <InlineMath math="2" /> has distinct count 1. Not the same → does not work.
              </p>
              <p>
                III. <InlineMath math="12 = 2^{2}\times 3" /> → distinct = 2, total = 3;{" "}
                <InlineMath math="45 = 3^{2}\times 5" /> → distinct = 2, total = 3. Totals are the same → does not meet “different totals.”
              </p>
              <p>Only I satisfies the condition. Answer: I only.</p>
            </>
          }
        />

        <p>
          Bottom line: Use the exponents in the prime factorization. The sum of exponents gives the total number of prime factors, while counting the different prime bases gives the number of distinct factors. Practice spotting repeated primes quickly to avoid common traps.
        </p>
      </article>
    </main>
  );
}