import type { Metadata } from "next";
import Image from "next/image";
import katex from "katex";
// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.1 Graphics Interpretation — Introduction",
  description:
    "Understand how Graphics Interpretation questions work: what you’re asked to do, common graph types, and how answers are selected. Includes a two‑part practice example with full solutions.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: true });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className="my-2 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.1 Introduction</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Graphics Interpretation (GI), you’ll read one or more visuals—such as a chart or
          graph—and then choose answers from dropdown menus embedded in short statements.
          Your selections must accurately reflect what the graphic shows.
        </p>

        <MustKnow>
          GI items present a graphic plus a brief prompt, followed by statements that each contain a
          dropdown menu. Your job is to pick the most accurate option for every menu based solely on
          the information in the visual.
        </MustKnow>

        <p>
          The test uses a wide variety of visuals: column and bar charts, line graphs, scatterplots,
          histograms, flowcharts, Pareto charts, bubble charts, concept maps, and even Venn
          diagrams—anything that can display data cleanly.
        </p>

        <MustKnow>
          Most GI questions are quantitative. Expect topics like ratios, averages, percent change,
          probability, slope, mean/median/mode, and standard deviation, though some items simply
          check whether you can read the graphic correctly without any heavy math.
        </MustKnow>

        <p>
          Each GI prompt typically leads to two statements. Inside each statement you’ll see a
          dropdown with three or more choices. You must select the best option in every dropdown to
          earn credit for the question.
        </p>

        <MustKnow>
          There is no partial credit. You must get all dropdowns in the item correct to receive the
          point(s).
        </MustKnow>

        <section aria-labelledby="example-gi" className="space-y-4">
          <h3 id="example-gi" className="text-xl font-semibold text-white">
            Example: Bagels Sold by Day
          </h3>

          <figure className="rounded-lg bg-gray-800/40 p-3">
            {/* If your Next config allows this external domain, you can replace <img> with next/image */}
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/480/content_Example_1_-_Number_of_Bagels_Sold.png"
              alt="Line graph of a bakery’s daily bagel sales for Monday through Friday."
              className="mx-auto h-auto w-full max-w-3xl rounded-md"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              A bakery’s daily bagel sales (y‑axis) by day of the week (x‑axis).
            </figcaption>
          </figure>

          <p className="text-gray-300">
            Use the graph to answer the following two prompts:
          </p>

          <MCQExample
            number={1}
            prompt="The ratio of bagels sold on Tuesday to bagels sold on Friday is:"
            options={["1/2", "1/3", "2/3", "3/4"]}
            correct="2/3"
            solution={
              <>
                <p>
                  From the graph, Tuesday has 120 bagels and Friday has 180. The ratio is{" "}
                  <MathInline expr="120/180" ariaLabel="120 over 180" />{" "}
                  which simplifies to <MathInline expr="2/3" ariaLabel="two thirds" />.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="The number of bagels sold on Wednesday is 40% greater than the number sold on:"
            options={["Monday", "Tuesday", "Thursday", "Friday"]}
            correct="Thursday"
            solution={
              <>
                <p>
                  The graph shows 140 bagels on Wednesday. If that is 40% more than some value x,
                  then <MathInline expr="140 = 1.4x" ariaLabel="140 equals 1.4 x" />.
                </p>
                <MathBlock expr="x = \dfrac{140}{1.4} = 100" ariaLabel="x equals 140 divided by 1.4 equals 100" />
                <p>
                  Looking back at the graph, the day with 100 bagels is Thursday. Therefore,
                  Wednesday’s total is 40% greater than Thursday’s.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="gi-tips" className="space-y-2">
          <h3 id="gi-tips" className="text-xl font-semibold text-white">
            What to keep in mind
          </h3>
          <ul className="list-inside list-disc text-gray-300">
            <li>Start by understanding the axes, units, and any legend or labels.</li>
            <li>Read values carefully; don’t estimate when exact values are given.</li>
            <li>
              For percentage language, “x% greater than y” means{" "}
              <MathInline expr="(1 + x\% )\cdot y" ariaLabel="one plus x percent times y" />
              . For example, 40% greater than y is 1.4y.
            </li>
            <li>Answer each dropdown independently based on the graphic.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}