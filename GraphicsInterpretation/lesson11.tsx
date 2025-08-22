import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX renderer for server components
function KTex({ expr, block = false }: { expr: string; block?: boolean }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    output: "html",
  });
  return (
    <span
      className={block ? "block my-2" : "inline"}
      aria-label="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.12 Column Charts | Graphics Interpretation",
  description:
    "Understand what column charts show, how to read axes correctly, and how to answer common GI questions. Includes three practice examples with full solutions and KaTeX‑rendered formulas.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.12 Column Charts
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Column charts summarize data by category and visualize each category as
          a vertical bar. They are great for quick comparisons across groups
          such as colors, products, regions, or months.
        </p>

        <MustKnow>
          A column chart displays categories along the horizontal axis (x‑axis)
          and either frequency or relative frequency along the vertical axis
          (y‑axis). Bars are vertical, one per category.
        </MustKnow>

        <p>
          Why use a column chart? It turns a list of hard‑to‑scan values into a
          picture that makes differences, trends, highs, and lows easy to spot
          at a glance.
        </p>

        <MustKnow>
          Typical questions tied to column charts include:
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-300">
            <li>Percent change between two categories</li>
            <li>“What percent of” comparisons</li>
            <li>Percent increase/decrease</li>
            <li>Ratios and proportions</li>
            <li>Changes over time (month‑to‑month, year‑to‑year)</li>
            <li>Summary statistics: mean, median, mode, range, sometimes SD</li>
            <li>Reading off exact or approximate values correctly</li>
          </ul>
        </MustKnow>

        <section aria-labelledby="ex14">
          <h3 id="ex14" className="text-xl font-semibold text-white">
            Example 14
          </h3>
          <p>
            The daily number of births over a one‑week span is summarized by a
            column chart (one bar per weekday). To make this drill self‑contained,
            use the table below, which mirrors the chart’s heights:
          </p>
          <div className="rounded-md bg-gray-800/40 p-4 text-sm text-gray-200">
            Sunday: 7,500; Monday: 10,500; Tuesday: 13,500; Wednesday: 12,200; Thursday:
            12,600; Friday: 10,000; Saturday: 10,000
          </div>

          <MCQExample
            number={14.1}
            prompt="What is the average (arithmetic mean) daily births over these seven days?"
            options={[
              "less than 8,000",
              "between 8,000 and 10,000",
              "between 10,000 and 12,000",
              "greater than 13,000",
            ]}
            correct="between 10,000 and 12,000"
            solution={
              <>
                <p>
                  Four days average to roughly 10,000 (Sun+Mon and Fri+Sat are
                  about 7,500+10,500 and 10,000+10,000, respectively), while the
                  remaining three days are all above 10,000. So the overall mean
                  must exceed 10,000 but stay well under 12,000. Exact
                  arithmetic also lands between 10k and 12k.
                </p>
              </>
            }
          />

          <MCQExample
            number={14.2}
            prompt="By approximately what percent would Sunday’s births need to increase to match Tuesday’s?"
            options={["80 percent", "100 percent", "120 percent", "180 percent", "200 percent"]}
            correct="80 percent"
            solution={
              <>
                <p>
                  Use the “percent greater than” setup. If Sunday is the base{" "}
                  <KTex expr="S=7{,}500" /> and Tuesday is the target{" "}
                  <KTex expr="T=13{,}500" />, then:
                </p>
                <KTex block expr="T = S \cdot \left(1 + \frac{n}{100}\right)" />
                <KTex block expr="13{,}500 = 7{,}500 \cdot \left(1 + \frac{n}{100}\right)" />
                <KTex block expr="\frac{13{,}500}{7{,}500} = 1 + \frac{n}{100} \;\;\Rightarrow\;\; 1.8 = 1 + \frac{n}{100}" />
                <KTex block expr="\frac{n}{100} = 0.8 \;\;\Rightarrow\;\; n = 80" />
                <p>So an 80% increase is needed.</p>
                <p className="mt-2">
                  Common pitfall: computing “Tuesday as a percent of Sunday”
                  yields about 180%, but the question asks “percent increase,”
                  i.e., how much above Sunday to reach Tuesday.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex15">
          <h3 id="ex15" className="text-xl font-semibold text-white">
            Example 15
          </h3>
          <p>
            A call center logged the number of calls made each day for 41 days.
            The counts are listed in nondecreasing order. On day 21, the chart
            label (the middle bar) reads 32 calls. From day 24 through day 41,
            the counts increase by exactly 1 call per day, ranging from 51 to 68
            calls.
          </p>

          <MCQExample
            number={15.1}
            prompt="What is the median number of calls over the 41 days?"
            options={["31", "31.5", "32", "32.5", "33"]}
            correct="32"
            solution={
              <>
                <p>
                  For an odd number of values, the median is the{" "}
                  <KTex expr="\frac{n+1}{2}" /> th position. With{" "}
                  <KTex expr="n=41" />, the median position is{" "}
                  <KTex expr="\frac{41+1}{2} = 21" />. The 21st value on the
                  chart is 32, so the median is 32.
                </p>
              </>
            }
          />

          <MCQExample
            number={15.2}
            prompt="How many total calls were made from day 24 through day 41, inclusive?"
            options={["1,069", "1,070", "1,071", "1,072"]}
            correct="1,071"
            solution={
              <>
                <p>
                  From day 24 to day 41 we have consecutive integers 51 through
                  68 (inclusive), which is 18 terms. The average of a run of
                  consecutive integers equals the average of the first and last:
                </p>
                <KTex block expr="\text{mean}=\frac{51+68}{2}=59.5" />
                <p>
                  Thus sum = mean × count = <KTex expr="59.5\times 18=1{,}071" />.
                </p>
                <p className="mt-2">
                  Alternatively, use the arithmetic‑series sum:
                </p>
                <KTex block expr="\sum_{k=1}^{n} k = \frac{n(n+1)}{2}" />
                <p>
                  Then <KTex expr="\sum_{k=51}^{68} k = \sum_{k=1}^{68} k - \sum_{k=1}^{50} k" />, i.e.
                </p>
                <KTex block expr="\frac{68\cdot 69}{2} - \frac{50\cdot 51}{2} = 2{,}346 - 1{,}275 = 1{,}071" />
              </>
            }
          />
        </section>

        <section aria-labelledby="ex16">
          <h3 id="ex16" className="text-xl font-semibold text-white">
            Example 16
          </h3>
          <p>
            A family’s electric bill (in dollars) for each month of a year is
            summarized by a column chart. To keep the exercise self‑contained,
            use these approximate monthly amounts, which reflect the chart’s
            bars: Jan 75, Feb 80, Mar 105, Apr 100, May 105, Jun 110, Jul 150,
            Aug 140, Sep 100, Oct 40, Nov 45, Dec 60.
          </p>

          <MCQExample
            number={16.1}
            prompt="For which month is the change from the previous month the greatest in magnitude (increase or decrease)?"
            options={["March", "May", "July", "September", "October"]}
            correct="October"
            solution={
              <>
                <p>
                  Compute consecutive differences (absolute values). The biggest
                  jump is from September 100 down to October 40, a change of
                  about 60. That’s larger in magnitude than any other month‑to‑month change, so October wins.
                </p>
              </>
            }
          />

          <MCQExample
            number={16.2}
            prompt="The combined total of the two highest monthly bills is approximately what percent greater than the combined total of the two lowest monthly bills?"
            options={["110", "200", "240", "280", "300"]}
            correct="240"
            solution={
              <>
                <p>
                  The top two months are July and August: <KTex expr="150+140=290" />.
                  The bottom two are October and November: <KTex expr="40+45=85" />.
                </p>
                <p>
                  “Percent greater than” uses:
                </p>
                <KTex block expr="\text{percent greater} = \frac{\text{High} - \text{Low}}{\text{Low}}\times 100\%" />
                <KTex block expr="\frac{290 - 85}{85}\times 100\% = \frac{205}{85}\times 100\% \approx 2.41\times 100\% \approx 241\%" />
                <p>
                  Closest option is 240.
                </p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Key takeaway: read the axes carefully, estimate responsibly, and
          choose the simplest path. When the data form clean patterns (like
          consecutive integers), leverage symmetry, medians, and series formulas
          to compute quickly.
        </p>
      </article>
    </main>
  );
}