import type { Metadata } from "next";
import Image from "next/image";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.8 Colors in Graph Legends | Graphics Interpretation",
  description:
    "Understand why legend colors matter in multi-series charts. See two visual examples, then solve a two-part practice item on median and average with full reasoning.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="katex"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet (loaded once for this page) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.8 Colors Used in a Graph Legend
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Color is one of the quickest ways a legend helps you match elements in
          a graphic to the data they represent. In multi-series visuals, colors
          are the visual “labels” that let you track each series cleanly from
          point to point or bar to bar.
        </p>

        <MustKnow>
          Always map each color in the legend to its series before you analyze
          the numbers. A few seconds of color-to-series mapping prevents
          misreads when multiple lines or bars overlap.
        </MustKnow>

        <p>
          For instance, in a line chart with two datasets, one line might be
          blue and the other green. The legend tells you which dataset is blue
          and which is green, so you can follow each line correctly throughout
          the graph.
        </p>

        <figure className="mx-auto w-full">
          {/* Using next/image; if this domain isn’t allowed in next.config.js, switch to a regular img tag or mark unoptimized */}
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/499/content_Lesson_-_Colors_Used_in_a_Graph_Legend.png"
            alt="Line chart with multiple colored series and a legend indicating which color corresponds to each dataset"
            width={800}
            height={450}
            className="mx-auto h-auto w-full max-w-3xl rounded-md ring-1 ring-white/10"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Legends connect colors to series so you can trace each dataset
            accurately.
          </figcaption>
        </figure>

        <p>
          Likewise, a clustered bar chart might use different shades for
          different categories. The legend clarifies which shade corresponds to
          each category, so you can compare like with like at a glance.
        </p>

        <figure className="mx-auto w-full">
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1606/content_County.png"
            alt="Clustered bar chart with three distinct colors; the legend identifies which color corresponds to the state, largest county, and largest city populations"
            width={1000}
            height={781}
            className="mx-auto h-auto w-full rounded-md ring-1 ring-white/10"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            In grouped bars, color ensures you’re comparing the correct
            categories across groups.
          </figcaption>
        </figure>

        <section aria-labelledby="example-8-heading" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3
              id="example-8-heading"
              className="text-xl font-semibold text-white"
            >
              Example 8
            </h3>
            <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-300">
              easy
            </span>
          </div>

          <figure className="mx-auto w-full">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/501/content_Example_8.png"
              alt="Line chart showing five boys’ daily popcorn sales over five days; each boy has a distinct color/style indicated by the legend"
              width={750}
              height={420}
              className="mx-auto h-auto w-full max-w-2xl rounded-md ring-1 ring-white/10"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Use the legend to match each colored/styled line to the correct
              student.
            </figcaption>
          </figure>

          <p>
            Five boys sold popcorn for five days. The legend links each color
            (and line style/marker) to a specific boy. Answer the two sub‑parts
            below.
          </p>

          <MCQExample
            number={8.1}
            prompt={
              <>
                What is the median of Charles’s daily revenue?
                <br />
                Hint: for an odd number of values n, the median is the value in
                position <KInline expr="(n+1)/2" ariaLabel="n plus 1 over 2" />{" "}
                after sorting.
              </>
            }
            options={["$20", "$25", "$30", "$35", "$40"]}
            correct="$30"
            solution={
              <>
                <p>
                  From the legend, identify Charles’s line (teal with triangle
                  markers). Reading the five days: $40, $20, $35, $25, $30.
                </p>
                <p>
                  Sort them: 20, 25, 30, 35, 40. With n = 5, the median is the{" "}
                  <KInline expr="(5+1)/2=3" ariaLabel="(5 plus 1) over 2 equals 3" />{" "}
                  rd value, which is 30. So the median is $30.
                </p>
              </>
            }
          />

          <MCQExample
            number={8.2}
            prompt={
              <>
                Over the five days, which boy has the smallest average daily
                revenue?
                <br />
                Recall the mean formula:{" "}
                <KInline
                  expr="\\bar{x}=\\tfrac{1}{n}\\sum_{i=1}^{n}x_i"
                  ariaLabel="x bar equals one over n times the sum from i equals 1 to n of x sub i"
                />
                . If a series is below all others on every day, its sum (and
                thus its average) must be smallest.
              </>
            }
            options={["Michael", "Charles", "Larry", "Tim", "Scottie"]}
            correct="Scottie"
            solution={
              <>
                <p>
                  The black dashed line sits beneath the other lines on each
                  day, so its five-day total is the smallest; therefore its
                  average is also the smallest. The legend shows that this line
                  corresponds to Scottie. Answer: Scottie.
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: the legend’s color (and style) mapping is not decorative—it
          is the key to reading multi-series graphics accurately. Build the
          color-to-series map first, then analyze values, medians, and averages
          with confidence.
        </p>
      </article>
    </main>
  );
}