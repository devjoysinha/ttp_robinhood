import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX (server-side render to HTML)
import katex from "katex";
import "katex/dist/katex.min.css";

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      className={display ? "block my-2" : "inline"}
      aria-label={ariaLabel || expr.replace(/\\/g, "")}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.5 Read the Title First | Graphics Interpretation",
  description:
    "Learn a fast, reliable way to decode graphs: start with the title, then read axis labels and scales. See how wide scales invite estimation and practice with a quick average‑speed example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">2. Graphics Interpretation</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.5 Read the Title on the Graph or Chart</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you face a graph or chart, begin with the title. It tells you what story the graphic is trying to
          communicate and frames everything you’ll read next.
        </p>

        <MustKnow>
          The title is your compass. Treat it as the author’s one‑line summary of the message behind the figure.
        </MustKnow>

        <p>
          After the title, check any axis titles. Identify exactly what each axis measures and note the units so you
          don’t misread the values.
        </p>

        <MustKnow>
          If a graphic has x‑ and y‑axes, make sure you can answer both questions: “What does x measure?” and “What does
          y measure?” Include units.
        </MustKnow>

        <p>
          Next, examine the scale on each axis. Ask whether tick marks are tightly packed or widely spaced—this
          determines how precisely you need to read the figure and whether rounding is appropriate.
        </p>

        <MustKnow>
          Scales drive precision. When the scale is coarse (large steps), estimation is often the fastest and safest
          approach.
        </MustKnow>

        <section aria-labelledby="example-title" className="mt-10 space-y-4">
          <h3 id="example-title" className="text-xl font-semibold text-white">
            Quick look: title, axes, and scale
          </h3>
          <p className="text-sm text-gray-400">
            The title below clarifies the goal of the plot at a glance. The axis titles specify the variables and their
            units so you can read values correctly.
          </p>
          <figure className="mx-auto">
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1615/content_STARTUP_SALE_1.png"
              alt="Scatterplot relating a startup's first-year revenue to sale price; axis titles show millions of USD."
              loading="lazy"
              className="w-full rounded-md border border-gray-700 bg-gray-900/40"
              style={{ aspectRatio: "1000 / 617", objectFit: "cover" }}
            />
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              The title frames the relationship; axis titles give definitions and units.
            </figcaption>
          </figure>

          <p>
            Notice how different scales can make the same data feel more or less “spread out,” which changes how fine
            your reading must be.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <img
                src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/490/content_Lesson_2_-_Titles_on_the_Graph_or_Chart.png"
                alt="Graph with relatively tight scale marks on both axes."
                loading="lazy"
                className="w-full rounded-md border border-gray-700 bg-gray-900/40"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-400">Tighter scale</figcaption>
            </figure>
            <figure>
              <img
                src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/491/content_Lesson_3_-_Titles_on_the_Graph_or_Chart.png"
                alt="Graph with wide spacing between scale marks on both axes."
                loading="lazy"
                className="w-full rounded-md border border-gray-700 bg-gray-900/40"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-400">Coarser scale</figcaption>
            </figure>
          </div>

          <MustKnow>Wide tick spacing usually invites estimation and eliminates the need for exact arithmetic.</MustKnow>
        </section>

        <section aria-labelledby="rocket-example" className="mt-10 space-y-4">
          <h3 id="rocket-example" className="text-xl font-semibold text-white">
            Worked example: Estimate from the scale
          </h3>

          <figure className="mx-auto">
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/492/content_Example_4.png"
              alt="Line graph of a rocket’s distance from Earth over time, in minutes and miles."
              loading="lazy"
              className="mx-auto w-full max-w-md rounded-md border border-gray-700 bg-gray-900/40"
            />
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              Distance from Earth (miles) vs. time (minutes)
            </figcaption>
          </figure>

          <p>
            The title and axes tell you what’s being plotted: distance on the vertical axis and elapsed time on the
            horizontal axis. Because the tick marks are far apart, an approximate read is both acceptable and faster
            than chasing exact values.
          </p>

          <MCQExample
            number={4.1}
            prompt="About how many minutes after launch did the rocket first reach 100,000 miles from Earth?"
            options={["21", "43", "98", "244", "510"]}
            correct="43"
            solution={
              <>
                <p>
                  Locate y = 100,000 on the vertical axis and trace across to the curve. The corresponding time is
                  between 40 and 60 minutes. Among the answers, only 43 minutes falls in that range, so 43 is the best
                  estimate.
                </p>
              </>
            }
          />

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-1 text-sm font-semibold text-gray-200">Formula reminder</p>
            <Math
              expr="\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}"
              display
              ariaLabel="average speed equals total distance divided by total time"
            />
          </div>

          <MCQExample
            number={4.2}
            prompt="The rocket’s average speed during the first 1.5 hours was approximately (mph)"
            options={["27,000", "45,000", "91,000", "285,000", "425,000"]}
            correct="285,000"
            solution={
              <>
                <p>
                  Convert 1.5 hours to 90 minutes. From the graph at t = 90 minutes, the distance is roughly 430,000
                  miles. Using
                </p>
                <Math expr="\\text{avg speed} \\approx \\dfrac{430{,}000\\ \\text{miles}}{1.5\\ \\text{hours}} \\approx 287{,}000\\ \\text{mph}" />
                <p>Among the choices, 285,000 mph is the closest estimate.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="big-picture" className="mt-10">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Title first: it defines the question the graphic is answering.</li>
            <li>Then read axis titles and units so values aren’t misinterpreted.</li>
            <li>Inspect scales to decide whether to estimate or read more precisely.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}