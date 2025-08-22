import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: Ensure `katex/dist/katex.min.css` is imported globally (e.g., in app/layout.tsx)

export const metadata: Metadata = {
  title: "16.3.14 Solve for Unknown Group Size from a Permutation | Combinatorics",
  description:
    "Learn how to back-solve the total number of objects when a permutation count is given. Use box‑and‑fill or nPk to set up equations, then solve for n. Includes a worked example and a quick multiple‑choice drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.14 Solving for an Unknown Group Size from a Permutation Count
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, we’ve often known both the number of objects and how many spots we’re
          filling. Sometimes, however, the problem is flipped: you’re told how many ordered
          outcomes exist and asked to deduce how many items were available to choose from.
          In these “reverse” permutation problems, set up the count with a box‑and‑fill
          diagram or with <InlineMath math="nP_k = \dfrac{n!}{(n-k)!}" /> and solve for the
          total <InlineMath math="n" />.
        </p>

        <MustKnow>
          When the number of ways to order k items from a larger pool is given, represent
          the unknown pool size by n and write a permutation equation. For small k, the
          box‑and‑fill view is quick: the first seat has n options, the next has n−1, and
          so on. Multiply, set equal to the given count, and solve the resulting equation
          for an integer n.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example: two places, 90 ways
          </h3>
          <p>
            A game show awards first and second place. If there are 90 distinct ways to
            assign those two places, how many contestants are in the pool?
          </p>
          <p>
            Let <InlineMath math="n" /> be the number of contestants. Because the seats are
            distinct (first vs. second), order matters:
          </p>
          <BlockMath math="nP_2 = n(n-1) = 90" />
          <BlockMath math="n^2 - n - 90 = 0" />
          <BlockMath math="(n-10)(n+9)=0 \;\;\Rightarrow\;\; n=10\; \text{ or }\; n=-9" />
          <p>
            The total can’t be negative, so <InlineMath math="n=10" />.
          </p>
        </section>

        <MCQExample
          number={46}
          prompt="From a line of people waiting for the movie, two individuals will be assigned to seat 21 and seat 22. If there are 182 possible ways to fill those two seats, how many people are in line?"
          options={["7", "9", "11", "12", "14"]}
          correct="14"
          solution={
            <>
              <p>
                Assigning two labeled seats is an ordered selection, so use permutations.
                Let <InlineMath math="n" /> be the number of people. Then:
              </p>
              <BlockMath math="nP_2 = n(n-1) = 182" />
              <BlockMath math="n^2 - n - 182 = 0" />
              <BlockMath math="(n-14)(n+13)=0 \;\;\Rightarrow\;\; n=14\; \text{ or }\; n=-13" />
              <p>
                Only the positive value is valid, so <InlineMath math="n=14" />.
              </p>
            </>
          }
        />

        <p>
          Takeaway: when seats or positions are distinct, model the count with permutations.
          Equate the expression to the provided number of arrangements and solve for the
          whole‑number pool size.
        </p>
      </article>
    </main>
  );
}