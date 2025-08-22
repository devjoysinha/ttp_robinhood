import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.7 The Graph’s Legend | Graphics Interpretation",
  description:
    "Understand how to read and use a chart’s legend to decode colors, shapes, and patterns. Includes a quick MCQ and two data‑sufficiency style drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.7 Reading the Graph’s Legend
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A legend is the chart’s decoder ring. It maps visual elements—colors,
          fills, line styles, symbols—to the categories or series shown in the
          graphic. Before you compare values or hunt for trends, take a moment
          to read the legend so you know exactly what each visual cue represents.
        </p>

        <MustKnow>
          The legend links each visual style to a label. Always confirm:
          - which color/shape corresponds to which category,
          - whether items are stacked or side‑by‑side (clustered),
          - whether any patterns (hatching, dashes) indicate special cases,
          - and whether the legend clarifies units or notes (e.g., “forecast,” “target”).
        </MustKnow>

        <p>
          Authors use several devices to make legends clearer:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-gray-300">
          <li>
            Color and pattern keys: e.g., Blue = Product A, Striped = 2025
            forecast.
          </li>
          <li>
            Shape markers: circles, squares, and triangles can distinguish
            series in line charts or scatterplots.
          </li>
          <li>
            Line styles: solid vs. dashed lines often separate actuals from
            projections.
          </li>
          <li>
            Stacked vs. clustered cues: a legend may denote segments in a stack
            (parts of a whole) or separate bars within a group (side‑by‑side
            comparison).
          </li>
          <li>
            Notes and units: the legend sometimes carries clarifiers such as
            “values in thousands” or “percent of total.”
          </li>
        </ul>

        <p>
          Practical tip: after reading the legend, point to a single bar, line,
          or marker, say what it represents in words, and state the unit. This
          quick sanity check prevents misreads later.
        </p>

        <MCQExample
          number={21}
          prompt="A line chart’s legend shows Blue square = North, Orange circle = South, Gray triangle = West. Which series uses triangle markers?"
          options={["North", "South", "West", "All regions", "None of the above"]}
          correct="West"
          solution={
            <>
              <p>
                The legend directly maps shapes to regions: triangle corresponds
                to West. Therefore, West is the series using triangle markers.
              </p>
            </>
          }
        />

        <p>
          In stacked graphics, the legend also explains how parts combine. If a
          stacked column shows A and B as separate segments, the total bar
          height equals A + B. In grouped (clustered) graphics, bars are not
          summed; each bar stands alone for comparison.
        </p>

        <ExampleCard
          number={22}
          title="Legend, stacked vs. clustered"
          statements={[
            "A chart shows three categories: A (blue), B (green), C (orange). The legend says “Stacked columns.” What is the total for a column?",
            "1) A legend note reads: “Values are in thousands.”",
            "2) Each column displays a blue segment, a green segment, and an orange segment stacked vertically.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We want to know how to compute a column’s total from a stacked
                chart. In a stacked column, the overall height is the sum of
                its segments.
              </p>
              <p>
                <strong>Statement (1):</strong> Units help scale readings but do
                not explain how to combine segments. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> This confirms stacking and that
                the column height is segment A + B + C. Sufficient.
              </p>
              <p>Therefore, (2) alone is sufficient. Answer: B.</p>
            </>
          }
        />

        <ExampleCard
          number={23}
          title="Legend clarifications and interpretation"
          statements={[
            "A clustered column chart has legend entries: Blue = 2023, Gray = 2024. Bars are grouped by product (P, Q, R). What can be concluded for product Q?",
            "1) The legend includes “Gray (forecast).”",
            "2) The y‑axis label is “Revenue (millions).”",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want to interpret the grouped bars for product Q using the
                legend and labels.
              </p>
              <p>
                <strong>Statement (1):</strong> If Gray is tagged as forecast,
                then Q’s gray bar represents forecast revenue for 2024. This
                clarifies meaning. Sufficient to identify what the gray bar
                stands for.
              </p>
              <p>
                <strong>Statement (2):</strong> Units alone tell scale, not the
                semantic difference between Blue and Gray. Not sufficient to
                identify that Gray is a forecast without (1).
              </p>
              <p>
                Statement (1) alone answers the interpretation question; (2)
                alone does not. Answer: C.
              </p>
            </>
          }
        />

        <p>
          Bottom line: legends are not decoration. They define the visual
          vocabulary of the chart. Read the legend first, confirm stacking or
          clustering, check for units or special notes, and then proceed to
          compare values and trends with confidence.
        </p>
      </article>
    </main>
  );
}