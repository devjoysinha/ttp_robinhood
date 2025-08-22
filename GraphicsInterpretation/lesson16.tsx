import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="inline-block align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.15 Pareto Charts | Graphics Interpretation",
  description:
    "Understand Pareto charts: what they show, how to read them quickly, and how to answer common question types. Includes two worked, test‑style examples with clear reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.15 Pareto Charts
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A Pareto chart is a column chart arranged from the most frequent
          category to the least frequent. Because the bars are pre‑sorted,
          you can spot the biggest contributors at a glance and prioritize
          your analysis accordingly.
        </p>

        <MustKnow>
          Only the ordering matters in a Pareto chart: categories are listed
          from highest to lowest frequency. This makes it fast to identify
          which categories dominate a total and to focus on where the largest
          impact can be made first.
        </MustKnow>

        <p>
          Here is a typical Pareto chart to illustrate the idea.
        </p>

        <figure className="w-full">
          <img
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/709/content_Example_67.png"
            alt="Sample Pareto chart with categories sorted from highest to lowest frequency."
            className="mx-auto h-auto w-full max-w-3xl rounded-lg border border-gray-700"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Example Pareto chart: the tallest bar appears first, followed by
            shorter bars in descending order.
          </figcaption>
        </figure>

        <p>
          Because the bars descend in height, you can immediately tell which
          category dominates. For instance, if a public health team aims to
          lower overall deaths in an age group, a Pareto chart that shows
          accidents as the tallest bar suggests that focusing on accident
          reduction may yield the largest immediate gains. That doesn’t mean
          the smaller bars aren’t important—just that they contribute less to
          the total than the leading category.
        </p>

        <section aria-labelledby="example-20">
          <div className="mb-3">
            <h3 id="example-20" className="text-xl font-semibold text-white">
              Example 20
            </h3>
            <p className="text-gray-400">
              The graphic displays the net worths of Teatown’s nine wealthiest
              residents in descending order.
            </p>
          </div>

          <figure className="w-full">
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/524/content_Example_20.png"
              alt="Bar chart of nine net worths, sorted from highest to lowest."
              className="mx-auto h-auto w-full max-w-2xl rounded-lg border border-gray-700"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Net worths are already sorted from largest to smallest.
            </figcaption>
          </figure>

          <div className="mt-6 space-y-6">
            <MCQExample
              number={20}
              prompt="What is approximately the median net worth of the nine people?"
              options={[
                "6,200,000",
                "8,500,000",
                "62,000,000",
                "85,000,000",
              ]}
              correct="8,500,000"
              solution={
                <>
                  <p>
                    With nine values and the bars already in descending order,
                    the median is the 5th value from the top. From the chart,
                    person B’s bar corresponds to about $8.5 million. So the
                    median is 8,500,000.
                  </p>
                </>
              }
            />

            <MCQExample
              number={21}
              prompt="What is the ratio of the seventh‑richest person’s net worth to the richest person’s net worth?"
              options={["1 : 7", "1 : 5", "1 : 4", "2 : 7", "3 : 10"]}
              correct="1 : 4"
              solution={
                <>
                  <p>
                    From the chart, the seventh position (E) is about $3.5
                    million and the top position (A) is about $14 million.
                    The ratio is 3.5 to 14, which simplifies to{" "}
                    <MathInline expr="\\tfrac{1}{4}" ariaLabel="one-fourth" />.
                    So the answer is 1 : 4.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <section aria-labelledby="example-21" className="pt-4">
          <div className="mb-3">
            <h3 id="example-21" className="text-xl font-semibold text-white">
              Example 21
            </h3>
            <p className="text-gray-400">
              The graph shows the top six causes of death among people aged 15–24.
            </p>
          </div>

          <figure className="w-full">
            <img
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/525/content_Example_21.png"
              alt="Pareto chart of top causes of death for ages 15 to 24, sorted by count."
              className="mx-auto h-auto w-full max-w-2xl rounded-lg border border-gray-700"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Bars are ordered from highest to lowest: accidents first, then homicide, suicide, and so on.
            </figcaption>
          </figure>

          <div className="mt-6 space-y-6">
            <MCQExample
              number={22}
              prompt="Deaths from accidents and homicide together represent what fraction of deaths from these top six causes?"
              options={["1/6", "1/3", "1/2", "3/4", "9/10"]}
              correct="3/4"
              solution={
                <>
                  <p>
                    Approximate counts from the chart: accidents ≈ 14,000,
                    homicide ≈ 5,200, suicide ≈ 4,200, cancer ≈ 1,800,
                    heart disease ≈ 1,000, congenital defects ≈ 300.
                  </p>
                  <p>
                    Total ≈ 26,500; accidents + homicide ≈ 19,200. The share is
                    19,200 ÷ 26,500 ≈ 0.724, which is closest to{" "}
                    <MathInline expr="\\tfrac{3}{4}" ariaLabel="three-fourths" />
                    .
                  </p>
                </>
              }
            />

            <MCQExample
              number={23}
              prompt="By how many deaths would the accidents count need to decrease so that accidents are less than 20% of the total from these causes?"
              options={["8,800", "6,600", "10,200", "11,600"]}
              correct="11,600"
              solution={
                <>
                  <p>
                    Let x be the drop in the accidents count. We want the new
                    share of accidents to be below 20%:
                  </p>
                  <p className="mt-2">
                    <MathInline
                      expr="\\frac{14000 - x}{26500 - x} \\lt 0.2"
                      ariaLabel="(fourteen thousand minus x) divided by (twenty-six thousand five hundred minus x) is less than 0.2"
                    />
                  </p>
                  <p className="mt-2">
                    Solve the equality boundary to find the tipping point:
                  </p>
                  <p>
                    <MathInline
                      expr="\\frac{14000 - x}{26500 - x} = 0.2"
                      ariaLabel="(fourteen thousand minus x) divided by (twenty-six thousand five hundred minus x) equals 0.2"
                    />
                    {"  "}
                    ⇒{" "}
                    <MathInline
                      expr="14000 - x = 0.2\\,(26500 - x)"
                      ariaLabel="fourteen thousand minus x equals 0.2 times (twenty-six thousand five hundred minus x)"
                    />
                    {"  "}
                    ⇒{" "}
                    <MathInline
                      expr="14000 - x = 5300 - 0.2x"
                      ariaLabel="fourteen thousand minus x equals five thousand three hundred minus zero point two x"
                    />
                    {"  "}
                    ⇒{" "}
                    <MathInline
                      expr="8700 = 0.8x"
                      ariaLabel="eight thousand seven hundred equals zero point eight x"
                    />
                    {"  "}
                    ⇒{" "}
                    <MathInline expr="x = 10875" ariaLabel="x equals ten thousand eight hundred seventy-five" />
                    .
                  </p>
                  <p className="mt-2">
                    To force the percentage strictly below 20%, we need more
                    than 10,875. Among the choices, 11,600 is the only option
                    above that threshold, so 11,600 is correct.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <p>
          Key takeaway: Pareto charts surface the biggest contributors first.
          Use the descending order to estimate shares quickly, compare categories,
          and decide where an intervention would have the largest effect.
        </p>
      </article>
    </main>
  );
}