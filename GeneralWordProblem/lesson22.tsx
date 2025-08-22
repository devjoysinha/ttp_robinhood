import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.5.2 Hypothetical Changes to a Fraction | General Word Problems",
  description:
    "Turn 'what-if' fraction statements into equations and solve efficiently. Includes a multiple‑choice example with a fully worked solution and a quick check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5.2 Hypothetical changes to a fraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many word problems describe a fraction and then tell you how the fraction would
          change under a hypothetical tweak (for example, adding the same number to the
          numerator and denominator). The fastest path is to translate the words directly
          into an equation, then solve.
        </p>

        <MustKnow>
          - Represent the original fraction with variables straight from the wording.
          - Apply the described change to both numerator and denominator.
          - Set the new fraction equal to the given value and cross‑multiply to solve.
          - Always simplify the final fraction and, if helpful, verify by plugging back.
        </MustKnow>

        <MCQExample
          number={30}
          prompt={
            <>
              A fraction has a denominator that is 2 more than 3 times its numerator.
              If 7 is added to both the numerator and the denominator, the result equals
              3/5. Which option is equivalent to the original fraction?
            </>
          }
          options={["1/4", "2/7", "3/11", "5/17", "7/23"]}
          correct="1/4"
          solution={
            <>
              <p>
                Let x be the numerator. Then the denominator is 3x + 2, so the original
                fraction is x/(3x + 2).
              </p>
              <p>
                After adding 7 to both parts, we get (x + 7)/(3x + 2 + 7) = (x + 7)/(3x + 9).
                We’re told this equals 3/5, so:
              </p>
              <p className="font-mono text-gray-200">
                5(x + 7) = 3(3x + 9)
              </p>
              <p className="font-mono text-gray-200">
                5x + 35 = 9x + 27 → 4x = 8 → x = 2
              </p>
              <p>
                The original denominator is 3(2) + 2 = 8, so the fraction is 2/8, which
                simplifies to 1/4.
              </p>
              <p className="text-gray-300">
                Quick check: (2 + 7)/(8 + 7) = 9/15 = 3/5, as required.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: When a problem describes “what would happen” to a fraction, build
          the algebra from the description, solve, and then reduce your answer to simplest
          terms.
        </p>
      </article>
    </main>
  );
}