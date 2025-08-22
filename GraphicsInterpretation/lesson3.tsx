import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX renderers for client-friendly performance
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "2.4 Pay Attention to All Aspects of the Graphic | Graphics Interpretation",
  description:
    "Build a reliable checklist for reading charts and graphs: titles, units, axes, legends, gridlines, and trends. Includes a quick MCQ and a DS-style drill with reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.4 Pay Attention to All Aspects of the Graphic
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Great chart reading is detail-driven. To understand what a graphic is really saying,
          scan every part of it—not just the bars, dots, or lines. Many GMAT traps live in
          labels, scales, or legends.
        </p>

        <MustKnow>
          The fastest path to correct interpretations is a consistent checklist:
          read the title, confirm units and scale, decode the legend, verify axis labels
          and gridlines, and only then look for patterns or comparisons.
        </MustKnow>

        <section aria-labelledby="checklist">
          <h3 id="checklist" className="text-xl font-semibold text-white">
            What to examine every time
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Title and scope: What is being measured, for whom, and over what period?
            </li>
            <li>
              Units and scale: Are values in units, thousands, or percent? Is the y-axis baseline at zero?
              Are there axis breaks?
            </li>
            <li>
              Axes and axis titles: Confirm what each axis represents and whether categories or time are evenly spaced.
            </li>
            <li>
              Legend and encodings: Match colors/shapes/patterns to series. Note stacked vs. clustered bars.
            </li>
            <li>
              Gridlines and tick marks: Use them to estimate values; watch for irregular spacing.
            </li>
            <li>
              Trends and features: Look for direction, peaks/valleys, seasonality, outliers, and relative vs. absolute change.
            </li>
            <li>
              Footnotes/notes: Small print often explains exclusions, transformations, or rounding.
            </li>
          </ul>
        </section>

        <section aria-labelledby="math-on-graphs">
          <h3 id="math-on-graphs" className="text-xl font-semibold text-white">
            Math you may use on graphs
          </h3>
          <p className="mb-2">
            Slope (rate of change) from a line chart:
          </p>
          <div className="rounded-md bg-slate-800/60 p-4">
            <BlockMath math={"m = \\\\dfrac{\\\\Delta y}{\\\\Delta x}"} />
            <p className="sr-only">
              Slope equals change in y divided by change in x.
            </p>
          </div>
          <p className="mt-4 mb-2">
            Percent change:
          </p>
          <div className="rounded-md bg-slate-800/60 p-4">
            <BlockMath math={"\\\\%\\\\ \\text{ change} = \\\\dfrac{\\\\text{new} - \\\\text{old}}{\\\\text{old}} \\times 100\\\\%"} />
            <p className="sr-only">
              Percent change equals new minus old divided by old, times one hundred percent.
            </p>
          </div>
          <p className="mt-4">
            Always tie any calculation back to the chart’s units and scale before concluding.
          </p>
        </section>

        <MCQExample
          number={24}
          prompt="You’re comparing bar heights for two products across years. Which single check most quickly prevents a misleading comparison?"
          options={[
            "Confirm the y-axis starts at zero and the units are clear.",
            "Read the legend after you compute differences.",
            "Verify that categories on the x-axis are alphabetical.",
            "Match bar colors to your personal color preferences.",
          ]}
          correct="Confirm the y-axis starts at zero and the units are clear."
          solution={
            <>
              <p>
                Bar height visually encodes magnitude. If the y-axis does not start at zero
                or units are unclear (e.g., percent vs. dollars, thousands vs. ones),
                visual comparisons can be distorted. Check the baseline and units first.
              </p>
            </>
          }
        />

        <ExampleCard
          number={25}
          title="Reading slope from a chart"
          statements={[
            "A line chart plots points A and B for a single series. What is the slope of segment AB?",
            "1) From the chart, A ≈ (2, 8) and B ≈ (6, 20).",
            "2) The x-axis is in minutes and the y-axis is in dollars.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want the slope of AB. Using the slope definition
                {" "}
                <InlineMath math={"m=\\\\dfrac{\\\\Delta y}{\\\\Delta x}"} />
                , we need the coordinates of A and B.
              </p>
              <p>
                <strong>Statement (1):</strong> Gives A = (2, 8) and B = (6, 20), so
                {" "}
                <InlineMath math={"m = (20 - 8) / (6 - 2) = 12 / 4 = 3"} />.
                Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Units alone (minutes, dollars) do not
                supply the numeric values needed for the slope. Not sufficient.
              </p>
              <p>
                Therefore, statement (1) alone suffices. Answer: A.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat each graphic like a checklist. Verify the title, units, axes,
          legend, and scale before drawing conclusions. Once the setup is solid, your
          comparisons and calculations will be both faster and safer. 
        </p>
      </article>
    </main>
  );
}