import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.3 Permutations | Combinations and Permutations",
  description:
    "Learn what permutations are, why order matters, and how to count them using factorials and P(n, r) = n!/(n−r)!. Includes a quick MCQ and a Data Sufficiency drill with full reasoning.",
};

// Lightweight KaTeX helper (server-side render). Ensure KaTeX CSS is included globally.
function K({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "htmlAndMathml",
  });
  return (
    <span
      className={className}
      aria-label={ariaLabel}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  const abcPermutations = ["A-B-C", "A-C-B", "B-A-C", "B-C-A", "C-A-B", "C-B-A"];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3 Permutations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A permutation is an arrangement of items where position matters. If we
          change the order, we get a different outcome. For instance, lining up
          the letters A, B, C as A-B-C is not the same as A-C-B.
        </p>

        <section aria-labelledby="figure-abc" className="space-y-3">
          <h3 id="figure-abc" className="text-gray-200 font-semibold">
            Figure 1: All permutations of ABC
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="list">
            {abcPermutations.map((seq, idx) => (
              <li
                key={seq}
                className="rounded-md border border-gray-700 px-3 py-2 text-gray-100"
                aria-label={`Permutation ${idx + 1}: ${seq}`}
              >
                <div className="text-xs text-gray-400">#{idx + 1}</div>
                <div className="font-medium">{seq}</div>
              </li>
            ))}
          </ul>
          <p className="text-gray-400">
            There are six different ways to order A, B, and C.
          </p>
        </section>

        <MustKnow>
          <div className="space-y-2">
            <p>
              In permutations, order is critical. For n distinct objects, the
              number of ways to arrange all of them is{" "}
              <K expr="n!" ariaLabel="n factorial" />. If we arrange r out of n
              distinct objects without repetition, the count is{" "}
              <K
                expr="P(n,r) = \dfrac{n!}{(n-r)!}"
                ariaLabel="P of n r equals n factorial over n minus r factorial"
              />
              .
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={201}
          prompt="How many different linear arrangements are there for the letters A, B, and C?"
          options={["3", "4", "5", "6", "9"]}
          correct="6"
          solution={
            <>
              <p>
                We’re arranging 3 distinct letters. The total number of
                permutations is <K expr="3!" ariaLabel="three factorial" /> ={" "}
                <K expr="6" ariaLabel="six" />.
              </p>
            </>
          }
        />

        <p>
          When deciding whether a counting question involves permutations or
          combinations, focus on whether swapping positions produces a new
          outcome. If yes, you’re in permutation territory.
        </p>

        <ExampleCard
          number={202}
          title="Determining a permutation count from constraints (Data Sufficiency)"
          statements={[
            "Let N be the number of distinct ways to arrange A, B, C, and D in a row. What is N?",
            "1) A must be the first letter.",
            "2) B and C must be consecutive, in that order.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Without restrictions, arranging 4 distinct letters yields{" "}
                <K expr="4!" ariaLabel="four factorial" /> = 24 permutations.
              </p>
              <p>
                <strong>Statement (1):</strong> If A must be first, we fix A and
                arrange the remaining 3 letters freely:{" "}
                <K expr="3!" ariaLabel="three factorial" /> = 6. This produces a
                unique count for N. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Treat BC as a single block (in
                that fixed order), along with A and D. We have 3 items to order:
                <K expr="3!" ariaLabel="three factorial" /> = 6. This also
                determines N uniquely. Sufficient.
              </p>
              <p>
                Each statement alone is sufficient to find N. Answer: D.
              </p>
            </>
          }
        />

        <section aria-labelledby="formulas" className="space-y-2">
          <h3 id="formulas" className="text-gray-200 font-semibold">
            Key formulas
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Arrange n distinct items: <K expr="n!" ariaLabel="n factorial" />.
            </li>
            <li>
              Arrange r of n distinct items (no repetition):{" "}
              <K
                expr="P(n,r) = \dfrac{n!}{(n-r)!}"
                ariaLabel="P of n r equals n factorial over n minus r factorial"
              />
              .
            </li>
          </ul>
        </section>

        <p>
          Big picture: if the lineup matters, count permutations. Use factorials
          and the P(n, r) formula to get the exact number of orderings.
        </p>
      </article>
    </main>
  );
}