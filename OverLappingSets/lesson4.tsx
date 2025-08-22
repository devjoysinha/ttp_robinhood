import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Optional: KaTeX helper. Falls back to plain text if rendering fails.
function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  let html = expr;
  try {
    html = katex.renderToString(expr, { throwOnError: false, strict: "ignore" });
  } catch {
    // noop: keep expr as plain text
  }
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "13.2.3 Percents & Fractions with a Fixed Total | Overlapping Sets",
  description:
    "Learn how to handle overlapping‑set problems when a total is specified. Convert percentages to counts, use inclusion–exclusion, and decide when a 2×2 set matrix helps. Includes a quick multiple‑choice example with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.3 Percents and Fractions when a Fixed Total Is Given
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a problem specifies the total number of items, don’t default to “assume 100” or use the
          least common multiple trick. Instead, convert all given percents or fractions directly into
          counts using the stated total, and then apply a 2×2 set matrix or the inclusion–exclusion
          principle to finish.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="m-0">
              For two sets A and B with total N, use inclusion–exclusion:
            </p>
            <p className="m-0">
              <MathInline expr="|A \cup B| = |A| + |B| - |A \cap B|" ariaLabel="Union equals A plus B minus intersection" />
            </p>
            <p className="m-0">
              Those in neither set:
              <span className="ml-2">
                <MathInline expr="\text{Neither} = N - |A \cup B|" ariaLabel="Neither equals N minus union" />
              </span>
            </p>
            <p className="m-0">
              If a total N is given, compute counts first, e.g.,
              <span className="ml-2">
                <MathInline expr="40\% \text{ of } 60 = 0.4 \times 60 = 24" ariaLabel="Forty percent of sixty equals twenty four" />
              </span>
              .
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={5}
          prompt="A survey of 60 people found that 40% like sitcoms, 60% like reality TV, and 20% like both. How many people like neither?"
          options={["10", "12", "24", "30", "36"]}
          correct="12"
          solution={
            <>
              <p>
                Convert percents to counts using the total of 60:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Sitcoms:
                  <span className="ml-1">
                    <MathInline expr="0.4 \times 60 = 24" ariaLabel="0.4 times 60 equals 24" />
                  </span>
                </li>
                <li>
                  Reality TV:
                  <span className="ml-1">
                    <MathInline expr="0.6 \times 60 = 36" ariaLabel="0.6 times 60 equals 36" />
                  </span>
                </li>
                <li>
                  Both:
                  <span className="ml-1">
                    <MathInline expr="0.2 \times 60 = 12" ariaLabel="0.2 times 60 equals 12" />
                  </span>
                </li>
              </ul>
              <p className="mt-3">
                Apply inclusion–exclusion to get the number in at least one of the two sets:
                <span className="ml-2">
                  <MathInline expr="|S \cup R| = 24 + 36 - 12 = 48" ariaLabel="Union equals 24 plus 36 minus 12 equals 48" />
                </span>
                .
              </p>
              <p>
                Therefore, the number who like neither is:
                <span className="ml-2">
                  <MathInline expr="60 - 48 = 12" ariaLabel="60 minus 48 equals 12" />
                </span>
                .
              </p>
              <p className="font-semibold">Answer: 12</p>
            </>
          }
        />

        <p>
          Takeaway: when a total is provided, translate every percentage or fraction into an actual
          count first, then use a quick 2×2 table or inclusion–exclusion to compute the union and the
          “neither” group efficiently.
        </p>
      </article>
    </main>
  );
}