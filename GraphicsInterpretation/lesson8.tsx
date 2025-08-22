import type { Metadata } from "next";
import Image from "next/image";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "warn",
  });
  return (
    <span
      aria-label={ariaLabel || "mathematical expression"}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.9 Shapes Used in Graph Legends | Graphics Interpretation",
  description:
    "Learn how to read shapes in graph legends, avoid common traps, and practice with two GI examples (median/range from a country chart and goals over games) with clear solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9 Shapes Used in Graph Legends
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Graph legends often encode categories with shapes. Reading those
          shapes correctly is essential to matching each data series with the
          right label.
        </p>

        <MustKnow>
          Always map each shape in the legend to its data series before
          analyzing the graphic. Misreading the shape-to-series mapping is one
          of the most common sources of errors in Graphics Interpretation.
        </MustKnow>

        <p>
          For instance, a solid line marked with circles could represent one
          group while a dashed line annotated with squares represents another.
          The legend is your key to decoding which series is which.
        </p>

        <figure className="mt-4">
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/503/content_Lesson_-_Shapes_Used_in_Graph_Legends.png"
            alt="Sample legend mapping lines and point markers to different groups"
            width={1000}
            height={939}
            className="h-auto w-full rounded-md ring-1 ring-white/10"
            priority={false}
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Example of a legend that uses line style and marker shape to
            distinguish categories.
          </figcaption>
        </figure>

        <p>
          Legends may also use distinct marker shapes (for example, triangles
          versus squares) on different lines to differentiate data sets. If you
          swap which shape belongs to which group, you’ll often be steered to a
          tempting—but wrong—answer.
        </p>

        <MustKnow>
          Trap answers frequently rely on you confusing which shape corresponds
          to which data set. Confirm the legend mapping before you compute,
          compare, or select an answer.
        </MustKnow>

        <section aria-labelledby="ex9" className="space-y-4">
          <h3 id="ex9" className="text-xl font-semibold text-white">
            Example 9
          </h3>

          <figure>
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/505/content_Example_10.png"
              alt="Line chart of GDP per capita for five countries, 2019–2023, with distinct marker shapes by country"
              width={900}
              height={450}
              className="h-auto w-full rounded-md ring-1 ring-white/10"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              GDP per capita for five countries (2019–2023). Each country uses
              a distinct marker shape per the legend.
            </figcaption>
          </figure>

          <MCQExample
            number={9.1}
            prompt="The only year in which Norway did not have the median GDP per capita among the five countries was:"
            options={["2019", "2020", "2021", "2022", "2023"]}
            correct="2022"
            solution={
              <>
                <p>
                  The legend shows Norway’s data with a unique marker. Scan each
                  year and rank the five markers by height. In every year except
                  2022, Norway’s marker is the middle one (3rd of 5), so Norway
                  has the median. In 2022, a different country sits in the
                  middle, so that is the only exception.
                </p>
              </>
            }
          />

          <MCQExample
            number={9.2}
            prompt="Which country had the smallest range of GDP per capita over 2019–2023?"
            options={["Luxembourg", "Ireland", "Norway", "Sweden", "Singapore"]}
            correct="Sweden"
            solution={
              <>
                <p>
                  The range for a series is the highest point minus the lowest
                  point for that series. Visually compare vertical spread for
                  each marker shape; the marker with the tightest spread belongs
                  to Sweden per the legend, so Sweden has the smallest range.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex10" className="space-y-4">
          <h3 id="ex10" className="text-xl font-semibold text-white">
            Example 10
          </h3>

          <figure>
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/504/content_Example_9.png"
              alt="Chart of goals scored by Team A (squares) and Team B (circles) over six games"
              width={700}
              height={520}
              className="h-auto w-full rounded-md ring-1 ring-white/10"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Goals scored by Team A (squares) and Team B (circles) across six
              games. Use the legend to read each team’s values.
            </figcaption>
          </figure>

          <MCQExample
            number={10.1}
            prompt="If one of the six games is selected at random, what is the probability that the total number of goals in that game exceeded 6?"
            options={["1/6", "1/3", "2/3", "5/6"]}
            correct="1/3"
            solution={
              <>
                <p>
                  Using the legend, read both teams’ goals in each game and sum
                  them. The totals exceed 6 in two games out of six. Thus the
                  probability is{" "}
                  <MathInline
                    expr="\\tfrac{2}{6}=\\tfrac{1}{3}"
                    ariaLabel="two sixths equals one third"
                  />
                  .
                </p>
              </>
            }
          />

          <MCQExample
            number={10.2}
            prompt="The number of goals scored by Team B in game 5 was what percent less than the number scored by Team A in game 1?"
            options={["25", "33.3", "50", "66.6", "75"]}
            correct="25"
            solution={
              <>
                <p>
                  From the graph, Team B in game 5 scored 3, and Team A in game
                  1 scored 4. Using percent change,
                  {" "}
                  <MathInline
                    expr="\\frac{3-4}{4}\\times 100\\%=-25\\%"
                    ariaLabel="(3 minus 4) divided by 4 times 100 percent equals negative twenty five percent"
                  />
                  . A negative percent means a decrease, so it is 25 percent
                  less.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: legends are the Rosetta Stone of a graph. Confirm which
          shape stands for which series first, then compute, compare, or rank.
          This habit prevents most shape‑related traps.
        </p>
      </article>
    </main>
  );
}