import type { Metadata } from "next";
import Image from "next/image";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, inline = true, ariaLabel }: { expr: string; inline?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: !inline,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      className={inline ? "inline-block align-baseline" : "block my-2"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.15 The Pareto Chart | Graphics Interpretation",
  description:
    "What a Pareto chart shows, how to read it quickly, and how to answer GMAT-style questions that use it. Includes two worked examples with step-by-step reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">2. Graphics Interpretation</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.15 The Pareto Chart</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A Pareto chart is a column chart in which categories are arranged from the most frequent to the least.
          Because the bars are pre‑sorted, you can immediately spot the biggest contributors and compare categories
          without reordering anything yourself.
        </p>

        <MustKnow>
          A Pareto chart is just a bar chart sorted in descending order by frequency or size.
          The leftmost bars represent the largest contributors, so you can scan from left to right to see what matters most.
        </MustKnow>

        <p>
          Here is a typical Pareto chart. Notice how the highest category appears first, making it effortless to
          identify the major contributor.
        </p>

        <figure className="mt-4">
          {/* Using a regular img for broad compatibility; configure next/image domains if optimizing */}
          <img
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/709/content_Example_67.png"
            alt="Example Pareto chart with categories arranged from largest to smallest"
            className="mx-auto h-auto w-full max-w-3xl rounded-md border border-gray-700"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            In a Pareto chart, the bars are sorted from largest (left) to smallest (right).
          </figcaption>
        </figure>

        <p>
          Because Pareto bars are ordered, you can quickly answer questions such as which category is largest,
          how big the top contributor is compared to others, and what portion of the total comes from a chosen subset
          of categories.
        </p>

        <section aria-labelledby="ex20" className="space-y-6">
          <h3 id="ex20" className="text-xl font-semibold text-white">
            Example 20
          </h3>

          <figure>
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/524/content_Example_20.png"
              alt="Pareto chart showing net worths of Teatown’s nine wealthiest people"
              className="mx-auto h-auto w-full max-w-2xl rounded-md border border-gray-700"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Net worths of Teatown’s nine richest residents (sorted from largest to smallest).
            </figcaption>
          </figure>

          <MCQExample
            number={20.1}
            prompt="The median net worth of the nine wealthiest people in Teatown is approximately:"
            options={["6,200,000", "8,500,000", "62,000,000", "85,000,000"]}
            correct="8,500,000"
            solution={
              <>
                <p>
                  With nine values, the median is the 5th value once the list is ordered. Because this graphic is a
                  Pareto chart, it’s already sorted from highest to lowest. The 5th bar corresponds to person B, at
                  about $8.5 million, i.e., 8,500,000.
                </p>
              </>
            }
          />

          <MCQExample
            number={20.2}
            prompt="The ratio of the 7th-richest person’s net worth to the richest person’s net worth is approximately:"
            options={["1 : 7", "1 : 5", "1 : 4", "2 : 7", "3 : 10"]}
            correct="1 : 4"
            solution={
              <>
                <p>
                  The richest person (A) is about $14,000,000. The 7th‑richest (E) is about $3,500,000. The ratio is
                  roughly 3.5 to 14. Simplify:
                </p>
                <p>
                  <K expr="\\frac{3.5}{14} = \\frac{1}{4}" ariaLabel="three point five over fourteen equals one fourth" />
                </p>
                <p>So the ratio is 1 : 4.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex21" className="space-y-6">
          <h3 id="ex21" className="text-xl font-semibold text-white">
            Example 21
          </h3>

          <figure>
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/525/content_Example_21.png"
              alt="Pareto chart of top six causes of death for ages 15 to 24"
              className="mx-auto h-auto w-full max-w-2xl rounded-md border border-gray-700"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Top six causes of death, ages 15–24 (bars are ordered from most to least).
            </figcaption>
          </figure>

          <MCQExample
            number={21.1}
            prompt="Accidents and homicides together account for approximately what fraction of deaths from the top six causes for this age group?"
            options={["1/6", "1/3", "1/2", "3/4", "9/10"]}
            correct="3/4"
            solution={
              <>
                <p>
                  Estimate counts from the chart: accidents ≈ 14,000; homicide ≈ 5,200; suicide ≈ 4,200; cancer ≈ 1,800;
                  heart disease ≈ 1,000; congenital defects ≈ 300. Total ≈ 26,500. Accidents + homicide ≈ 19,200.
                </p>
                <p>
                  Proportion ≈{" "}
                  <K expr="\\frac{19,200}{26,500}\\approx 0.724" ariaLabel="nineteen thousand two hundred divided by twenty six thousand five hundred is about zero point seven two four" />{" "}
                  which is closest to <K expr="\\tfrac{3}{4}" ariaLabel="three fourths" /> (75%).
                </p>
              </>
            }
          />

          <MCQExample
            number={21.2}
            prompt="By approximately how many must deaths from accidents be reduced so that accidents represent less than 20% of deaths from the top six causes combined?"
            options={["8,800", "6,600", "10,200", "11,600"]}
            correct="11,600"
            solution={
              <>
                <p>
                  Let x be the reduction in accident deaths. New fraction must be below 20%:
                </p>
                <p>
                  <K
                    expr="\\frac{14,000 - x}{26,500 - x} &lt; 0.2"
                    inline={false}
                    ariaLabel="open parenthesis fourteen thousand minus x close parenthesis divided by open parenthesis twenty six thousand five hundred minus x close parenthesis is less than 0.2"
                  />
                </p>
                <p>
                  First solve equality to find the boundary:
                </p>
                <p>
                  <K
                    expr="\\frac{14,000 - x}{26,500 - x} = 0.2 \\;\\Rightarrow\\; 14,000 - x = 0.2(26,500 - x)"
                    inline={false}
                    ariaLabel="equation: left side equals right side leading to fourteen thousand minus x equals zero point two times open parenthesis twenty six thousand five hundred minus x close parenthesis"
                  />
                  <K
                    expr="14,000 - x = 5,300 - 0.2x \\;\\Rightarrow\\; 8,700 = 0.8x \\;\\Rightarrow\\; x = 10,875"
                    inline={false}
                    ariaLabel="solving gives eight thousand seven hundred equals zero point eight x, so x equals ten thousand eight hundred seventy five"
                  />
                </p>
                <p>
                  To get strictly below 20%, x must be greater than 10,875. Among the choices, 11,600 is the only value
                  that exceeds 10,875, so 11,600 is correct.
                </p>
                <p className="text-gray-400">
                  Tip: Be sure to subtract x from both the numerator and the total. Reducing one category lowers both
                  that category and the overall total.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Pareto charts make “biggest contributors” jump out. Use the ordering to locate medians quickly,
          compare categories, and estimate proportions with minimal computation.
        </p>
      </article>
    </main>
  );
}