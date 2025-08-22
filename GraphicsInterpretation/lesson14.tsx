import type { Metadata } from "next";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { renderToString } from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KaTeX({ expr, display = false, className = "" }: { expr: string; display?: boolean; className?: string }) {
  const html = renderToString(expr, { throwOnError: false, displayMode: display });
  const Comp = display ? "div" : "span";
  return <Comp className={className} aria-label="math" role="img" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "2.15 Pareto Charts | Graphics Interpretation",
  description:
    "Understand Pareto charts—bar charts sorted from highest to lowest—to spot the biggest contributors fast. Includes two worked examples and practice questions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">2. Graphics Interpretation</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.15 Pareto Charts</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A Pareto chart is a column chart in which categories are arranged from most frequent to least frequent. Because
          the bars are already sorted, you can immediately see which categories dominate.
        </p>

        <MustKnow>
          A Pareto chart orders categories by decreasing size. Use it to prioritize effort: address the tallest bar(s)
          first to make the biggest impact.
        </MustKnow>

        <p>
          These charts are ideal for rapid diagnosis. For instance, if a public-health team wants to reduce deaths in a
          specific age group, the chart highlights which cause contributes most and thus where interventions can move the
          needle fastest. That doesn’t make smaller categories unimportant—it simply shows their relative contribution to
          the total.
        </p>

        <section aria-labelledby="figure-pareto" className="mt-6">
          <h3 id="figure-pareto" className="sr-only">
            Example Pareto chart
          </h3>
          <figure className="rounded-lg bg-gray-900/40 p-3">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/709/content_Example_67.png"
              alt="Representative Pareto chart with bars sorted from largest to smallest"
              width={900}
              height={734}
              className="h-auto w-full rounded"
              unoptimized
              priority
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              In a Pareto chart, categories are sorted from highest to lowest. The leading category is immediately visible.
            </figcaption>
          </figure>
        </section>

        <p>
          The question styles you’ll see with Pareto charts are the same ones that appear with standard column charts
          (e.g., finding medians, ratios, and proportions) but are often quicker because the data are pre‑sorted.
        </p>

        <hr className="my-8 border-gray-700" />

        <section aria-labelledby="ex20" className="space-y-6">
          <div>
            <h3 id="ex20" className="text-xl font-semibold text-white">
              Example 20
            </h3>
            <p className="text-gray-400">The chart shows the net worth of Teatown’s nine richest people (labeled A through J).</p>
          </div>

          <figure className="rounded-lg bg-gray-900/40 p-3">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/524/content_Example_20.png"
              alt="Pareto chart of net worths for nine people in Teatown, sorted from highest to lowest"
              width={700}
              height={430}
              className="h-auto w-full rounded"
              unoptimized
            />
          </figure>

          <MCQExample
            number={20.1}
            prompt="What is the median net worth (in dollars) of the nine wealthiest people in Teatown?"
            options={["6,200,000", "8,500,000", "62,000,000", "85,000,000"]}
            correct="8,500,000"
            solution={
              <>
                <p>
                  With 9 values, the median is the middle entry after sorting—position {( <KaTeX expr="(9 + 1) / 2 = 5" /> )}.
                  Because a Pareto chart is already sorted from largest to smallest, the 5th bar is the median. From the
                  graphic, the 5th bar (person B) is about $8.5 million.
                </p>
              </>
            }
          />

          <MCQExample
            number={20.2}
            prompt="What is the approximate ratio of the 7th richest person’s net worth to the richest person’s net worth?"
            options={["1 : 7", "1 : 5", "1 : 4", "2 : 7", "3 : 10"]}
            correct="1 : 4"
            solution={
              <>
                <p>
                  The tallest bar (A) is roughly $14,000,000. The 7th bar (E) is around $3,500,000. The ratio is
                  <span className="mx-1" />
                  <KaTeX expr="\dfrac{3{,}500{,}000}{14{,}000{,}000} = \dfrac{3.5}{14} = \dfrac{1}{4}" />
                  , so approximately 1 : 4.
                </p>
              </>
            }
          />
        </section>

        <hr className="my-8 border-gray-700" />

        <section aria-labelledby="ex21" className="space-y-6">
          <div>
            <h3 id="ex21" className="text-xl font-semibold text-white">
              Example 21
            </h3>
            <p className="text-gray-400">The chart shows the top six causes of death for people aged 15–24.</p>
          </div>

          <figure className="rounded-lg bg-gray-900/40 p-3">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/525/content_Example_21.png"
              alt="Pareto chart for the top six causes of death among ages 15 to 24, sorted by frequency"
              width={700}
              height={436}
              className="h-auto w-full rounded"
              unoptimized
            />
          </figure>

          <MCQExample
            number={21.1}
            prompt="Accidents and homicide together account for about what fraction of deaths from these six causes?"
            options={["1/6", "1/3", "1/2", "3/4", "9/10"]}
            correct="3/4"
            solution={
              <>
                <p>
                  From the bars, rough counts are: accidents 14,000; homicide 5,200; suicide 4,200; cancer 1,800; heart disease
                  1,000; congenital 300. Total ≈{" "}
                  <KaTeX expr="14{,}000 + 5{,}200 + 4{,}200 + 1{,}800 + 1{,}000 + 300 = 26{,}500" />. Accidents + homicide ≈{" "}
                  <KaTeX expr="14{,}000 + 5{,}200 = 19{,}200" />. The share is{" "}
                  <KaTeX expr="\dfrac{19{,}200}{26{,}500} \approx 0.724 \approx \dfrac{3}{4}" />.
                </p>
              </>
            }
          />

          <MCQExample
            number={21.2}
            prompt="By approximately how many must deaths from accidents be reduced so that accidents are less than 20% of the total from these six causes?"
            options={["8,800", "6,600", "10,200", "11,600"]}
            correct="11,600"
            solution={
              <>
                <p>
                  Let x be the reduction in accident deaths. New accident count:{" "}
                  <KaTeX expr="14{,}000 - x" />. New total: <KaTeX expr="26{,}500 - x" />. To make accidents exactly 20%,
                  solve
                </p>
                <KaTeX expr="\frac{14{,}000 - x}{26{,}500 - x} = 0.2" display className="my-2" />
                <KaTeX expr="14{,}000 - x = 0.2(26{,}500 - x)" display />
                <KaTeX expr="14{,}000 - x = 5{,}300 - 0.2x" display />
                <KaTeX expr="8{,}700 = 0.8x \;\;\Rightarrow\;\; x = 10{,}875" display />
                <p className="mt-2">
                  That makes accidents exactly 20%. To be strictly less than 20%, reduce by a bit more: the closest option is
                  11,600.
                </p>
                <p className="mt-2 text-gray-400">
                  Common pitfall: when you remove x accidents, the total also drops by x. Be sure to subtract from both the
                  numerator and denominator.
                </p>
              </>
            }
          />
        </section>

        <hr className="my-8 border-gray-700" />

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p>
            Pareto charts are about prioritization. Because the bars are pre‑sorted, the “biggest contributors” are obvious,
            and many tasks (medians, ratios, shares) are faster. For odd-sized lists, remember the median index is{" "}
            <KaTeX expr="(n+1)/2" />; for even-sized lists, it’s the average of the two middle values.
          </p>
        </section>
      </article>
    </main>
  );
}