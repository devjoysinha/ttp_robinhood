import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX (client-only to avoid SSR/style conflicts). Ensure katex CSS is included globally in your app layout.
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "13.2.6 Counting Members in Either Set | Overlapping Sets",
  description:
    "Learn how to compute the number of elements in either of two sets using inclusion–exclusion. Includes two quick practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.6 Counting Members in Either Set
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a question asks for the number of items that are in either of two
          sets, it’s really asking for the total who are in exactly one set plus
          the total who are in both. This is a direct application of the
          inclusion–exclusion idea for two sets.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Either/or using “only” counts</p>
            <BlockMath math="\text{# in either A or B} \;=\; \text{# in A only} \;+\; \text{# in B only} \;+\; \text{# in both}" />
          </div>
        </MustKnow>

        <p>
          Example using “only” counts: suppose 40 students take English only,
          60 take Math only, and 80 take both. Then the number who take English
          or Math is 40 + 60 + 80 = 180.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Either/or using set totals</p>
            <BlockMath math="|A \cup B| \;=\; |A| \;+\; |B| \;-\; |A \cap B|" />
            <p className="text-sm text-gray-300">
              We subtract the overlap once to avoid double‑counting, since members
              of both A and B are included in each total.
            </p>
          </div>
        </MustKnow>

        <p>
          Example using totals: if 120 students take English, 140 take Math, and
          80 take both, then
          {" "}
          <InlineMath math="|E \cup M| = 120 + 140 - 80 = 180" />
          .
        </p>

        <MCQExample
          number={13}
          prompt="At a horse show, 30 competitors fed alfalfa, 17 fed hay, and 5 fed both types. How many competitors fed alfalfa or hay?"
          options={["18", "42", "47", "52", "57"]}
          correct="42"
          solution={
            <>
              <p>
                Use inclusion–exclusion for two sets. Let A be “fed alfalfa”
                and H be “fed hay.”
              </p>
              <p>
                <InlineMath math="|A \cup H| = |A| + |H| - |A \cap H| = 30 + 17 - 5 = 42" />
              </p>
              <p>Therefore, 42 competitors fed alfalfa or hay.</p>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="A dealership has 50 red cars and 35 convertibles. If 65 cars are red or convertible, how many are both red and convertible?"
          options={["10", "15", "20", "25", "30"]}
          correct="20"
          solution={
            <>
              <p>
                Let R be “red” and C be “convertible.” Apply inclusion–exclusion:
              </p>
              <p>
                <InlineMath math="|R \cup C| = |R| + |C| - |R \cap C|" />
              </p>
              <p>
                Substitute the values and solve for the overlap:
                {" "}
                <InlineMath math="65 = 50 + 35 - |R \cap C|" />
                {" "}
                so
                {" "}
                <InlineMath math="|R \cap C| = 85 - 65 = 20" />
                .
              </p>
              <p>Thus, 20 cars are both red and convertible.</p>
            </>
          }
        />

        <p>
          Takeaway: for two sets, the count in either set is the sum of the
          individual totals minus the overlap. If you’re given “only” counts,
          add A only, B only, and the overlap to get the same result.
        </p>
      </article>
    </main>
  );
}