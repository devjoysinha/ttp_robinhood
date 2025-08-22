import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "4.12.1 Divisibility via Prime Factorization | Properties of Numbers",
  description:
    "Decide divisibility by comparing prime factorizations. See quick checks, worked mini‑examples, and two practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.12.1 Think About Divisibility Through Prime Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A fast, reliable way to check whether one positive integer is divisible by another is to look at their prime factorizations. If the prime building blocks of the smaller number all appear within the larger number’s factorization (with at least the same exponents), the division is exact.
        </p>

        <MustKnow>
          A positive integer x is divisible by a positive integer y exactly when the prime factorization of x contains the prime factorization of y (including exponents).
        </MustKnow>

        <section aria-labelledby="ex-15-60">
          <h3 id="ex-15-60" className="sr-only">
            Example: 15 and 60
          </h3>
          <p>Illustration with 15 and 60:</p>
          <p className="leading-relaxed">
            <InlineMath math={"15 = 3\\cdot 5"} /> and{" "}
            <InlineMath math={"60 = 2^2\\cdot 3\\cdot 5"} />. Because the prime factorization of 60 includes that of 15, we know 60 is divisible by 15. Equivalently,
          </p>
          <p>
            <BlockMath math={"\\frac{60}{15} = 4"} />
          </p>
          <p>and 4 is an integer.</p>
        </section>

        <section aria-labelledby="ex-3660-42">
          <h3 id="ex-3660-42" className="sr-only">
            Mini‑example: Is 3,660 divisible by 42?
          </h3>
          <p>Mini‑example: Is 3,660 divisible by 42?</p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"42 = 2\\cdot 3\\cdot 7"} />
            </li>
            <li>
              <InlineMath math={"3{,}660 = 2^2\\cdot 3\\cdot 5\\cdot 61"} />
            </li>
          </ul>
          <p>
            The factor <InlineMath math={"7"} /> is missing from <InlineMath math={"3{,}660"} />’s prime factorization, so <InlineMath math={"3{,}660"} /> is not divisible by <InlineMath math={"42"} />.
          </p>
        </section>

        <MCQExample
          number={41}
          prompt="2,016 is divisible by each of the following integers, except"
          options={["32", "42", "48", "54", "84"]}
          correct="54"
          solution={
            <>
              <p>
                First, prime‑factorize 2,016. One quick route is to peel off powers of 2:
              </p>
              <p>
                <InlineMath math={"2{,}016 = 2^5\\cdot 3^2\\cdot 7"} />
              </p>

              <ul className="mt-3 list-disc pl-6">
                <li>
                  32 = <InlineMath math={"2^5"} />. Present in 2,016 → divisible.
                </li>
                <li>
                  42 = <InlineMath math={"2\\cdot 3\\cdot 7"} />. Present → divisible.
                </li>
                <li>
                  48 = <InlineMath math={"2^4\\cdot 3"} />. Present → divisible.
                </li>
                <li>
                  54 = <InlineMath math={"2\\cdot 3^3"} />. Requires three 3s, but 2,016 has only <InlineMath math={"3^2"} /> → not divisible.
                </li>
                <li>
                  84 = <InlineMath math={"2^2\\cdot 3\\cdot 7"} />. Present → divisible.
                </li>
              </ul>

              <p className="mt-3">Therefore, the exception is 54.</p>
            </>
          }
        />

        <MCQExample
          number={42}
          prompt="If 100, 18, and 8 are factors of 150k, what is the least positive value of k?"
          options={["1", "4", "6", "12", "18"]}
          correct="12"
          solution={
            <>
              <p>
                We need <InlineMath math={"150k"} /> to be divisible by 100, 18, and 8. Compare prime factors.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath math={"150 = 2\\cdot 3\\cdot 5^2"} />
                </li>
                <li>
                  <InlineMath math={"100 = 2^2\\cdot 5^2"} />,{" "}
                  <InlineMath math={"18 = 2\\cdot 3^2"} />,{" "}
                  <InlineMath math={"8 = 2^3"} />
                </li>
              </ul>
              <p className="mt-2">
                The least common multiple of 100, 18, and 8 is{" "}
                <InlineMath math={"\\text{LCM}=2^3\\cdot 3^2\\cdot 5^2=1800"} />. For{" "}
                <InlineMath math={"150k"} /> to be a multiple of 1800,
              </p>
              <p>
                <BlockMath math={"150k \\text{ is a multiple of } 1800 \\;\\Rightarrow\\; k \\text{ is a multiple of } \\frac{1800}{150}=12"} />
              </p>
              <p>The smallest such k is 12.</p>

              <p className="mt-3">
                Prime‑factor view gives the same result: 150 already supplies <InlineMath math={"2\\cdot 3\\cdot 5^2"} />. To cover the requirements from 100, 18, and 8, we need two more 2s (to reach <InlineMath math={"2^3"} />) and one more 3 (to reach <InlineMath math={"3^2"} />). Thus <InlineMath math={"k=2\\cdot 2\\cdot 3=12"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat divisibility as a comparison of prime “ingredients.” If the candidate dividend contains every required prime (with sufficient exponent), the division works; if any required prime is missing or underpowered, it doesn’t.
        </p>
      </article>
    </main>
  );
}