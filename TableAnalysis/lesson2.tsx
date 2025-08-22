import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.3 Don’t Get Lost in Details | Table Analysis",
  description:
    "A fast, high‑level approach to Table Analysis: scan first, pick the right columns, and compute only what’s necessary. Includes a quick check question and handy formulas.",
};

function KaTeX({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    trust: false,
    strict: "warn",
    output: "html",
  });

  return (
    <span className={display ? "block my-2 overflow-x-auto" : "inline-block align-middle"} aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Table Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.3 Scan First—Don’t Get Bogged Down in Details
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Large tables can tempt you to read every cell. Resist that urge. Start with a quick survey of the layout:
          note column names and units, look for obvious highs/lows, and spot patterns or trends. Then move to the question
          and pull only the information you actually need.
        </p>

        <MustKnow>
          Begin with a big‑picture scan. Identify key columns, units, and any standout values before touching calculations.
        </MustKnow>

        <p>
          Once you understand the question, isolate the relevant slice of the table—usually a small set of columns and a
          manageable subset of rows. Sort or filter as needed to surface what matters. Ignore the rest.
        </p>

        <MustKnow>
          Answer the question that’s asked—no more, no less. Target only the data required for that prompt.
        </MustKnow>

        <p>
          Save fine‑grained work for last. If a prompt truly demands precise computation or row‑by‑row reading, do it then—otherwise,
          stay at the right level of detail.
        </p>

        <MustKnow>
          Only drill into specifics when necessary. Many Table Analysis items can be solved with a smart sort, a quick comparison,
          or a simple estimate.
        </MustKnow>

        <section aria-labelledby="mini-formulas">
          <h3 id="mini-formulas" className="mt-8 text-lg font-semibold text-gray-200">
            Handy micro‑formulas you may need
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Percent change:
              <span className="ms-2">
                <KaTeX expr="\\%\\Delta = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%" />
              </span>
              <span className="sr-only">Percent change equals (new minus old) divided by old, times one hundred percent.</span>
            </li>
            <li>
              Ratio (generic):
              <span className="ms-2">
                <KaTeX expr="\\text{ratio} = \\frac{\\text{part}}{\\text{whole}}" />
              </span>
              <span className="sr-only">Ratio equals part over whole.</span>
            </li>
          </ul>
          <p className="mt-3">
            Use these only when the prompt requires numeric work. Otherwise, visual sorting and direct comparisons are faster.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="When you first see a large data table, which action is the most effective first step?"
          options={[
            "Read every row left‑to‑right to avoid missing anything",
            "Compute all possible percentages and averages in advance",
            "Sort or filter the column(s) that matter for the question",
            "Skim the legend and then jump straight to calculations",
            "Estimate totals for every column before reading the prompt",
          ]}
          correct="Sort or filter the column(s) that matter for the question"
          solution={
            <>
              <p>
                The best opening move is to connect the prompt to the structure of the table. Sorting or filtering the relevant
                column(s) brings the needed rows to the top and removes distractions. Reading every row or precomputing everything
                wastes time and usually isn’t necessary.
              </p>
            </>
          }
        />

        <section aria-labelledby="workflow">
          <h3 id="workflow" className="mt-6 text-lg font-semibold text-gray-200">Suggested workflow</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Skim the headers and units; note extremes and any clumps/patterns.</li>
            <li>Read the question and identify the minimal set of columns/rows you need.</li>
            <li>Sort/filter to surface the relevant data quickly.</li>
            <li>Compare, estimate, or compute only if the prompt demands it.</li>
            <li>Double‑check units and sorting order before confirming your choice.</li>
          </ol>
        </section>

        <p className="mt-4">
          Big picture: let the question drive where you look and how deep you go. Most of the table is noise for any single prompt.
        </p>
      </article>
    </main>
  );
}