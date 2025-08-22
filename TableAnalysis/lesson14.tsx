import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app already provides KaTeX globally, you can remove this import.
// Otherwise, ensure KaTeX CSS is loaded once (typically in app/layout.tsx).
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "5.13 Standard Deviation in Table Analysis | Data Insights",
  description:
    "How to compare standard deviations in GMAT Table Analysis without calculating them: use spread around the mean, range, and spacing. Includes a True/False drill and a multi‑statement practice set with full reasoning.",
};

type YesNoItem = {
  text: string;
  answer: "Yes" | "No";
  rationale: React.ReactNode;
};

function YesNoGroup({
  title,
  items,
}: {
  title: string;
  items: YesNoItem[];
}) {
  return (
    <section aria-labelledby={title} className="space-y-4">
      <h3 id={title} className="text-lg font-semibold text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="rounded-lg border border-gray-800 bg-gray-900/40 p-4"
          >
            <div className="flex flex-col gap-1">
              <p className="text-gray-200">{item.text}</p>
              <p className="text-sm">
                Answer:{" "}
                <span
                  className={
                    item.answer === "Yes" ? "text-emerald-400" : "text-red-400"
                  }
                >
                  {item.answer}
                </span>
              </p>
              <div className="prose prose-invert prose-sm max-w-none text-gray-300">
                {item.rationale}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.13 Standard Deviation in Table Analysis
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          Table Analysis problems often include questions about variability.
          You rarely need to compute a standard deviation exactly; instead, you
          judge which set is more spread out around its mean.
        </p>

        <MustKnow>
          Expect Table Analysis items that compare or reason about standard
          deviation. The exam typically asks you to infer which set is more
          dispersed, not to calculate a numerical value.
        </MustKnow>

        <p>
          Conceptually, standard deviation measures how far a data set’s values
          tend to be from the mean. If values cluster tightly around the mean,
          the standard deviation is small; if many values sit far from the mean,
          the standard deviation is larger.
        </p>

        <MustKnow>
          Standard deviation tracks the average distance from the mean. More
          spread around the mean implies a larger deviation; tighter clustering
          implies a smaller one. In symbols:{" "}
          <InlineMath math="\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i-\mu)^2}" />{" "}
          (population SD) and{" "}
          <InlineMath math="s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2}" />{" "}
          (sample SD).
        </MustKnow>

        <p>
          A practical way to compare standard deviations in tables is to look at
          two things:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            the overall range of each set{" "}
            <InlineMath math="(\text{max}-\text{min})" />, and
          </li>
          <li>
            how evenly the values are spaced relative to the mean (i.e., how far
            typical values sit from the mean).
          </li>
        </ul>

        <MustKnow>
          When two columns contain the same number of entries, you can compare
          their standard deviations by checking range and spacing from the mean.
          Bigger range and looser spacing usually mean a larger standard
          deviation.
        </MustKnow>

        <section aria-labelledby="ta-sd-orgs">
          <h3 id="ta-sd-orgs" className="text-lg font-semibold text-white">
            Quick example: comparing spread around the mean
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
              <caption className="sr-only">
                Hectares of rainforest restored by two organizations with yearly
                values and means
              </caption>
              <thead className="bg-gray-800/50 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    Year
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Organization A
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Organization B
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { y: 2017, a: 204, b: 118 },
                  { y: 2018, a: 220, b: 169 },
                  { y: 2019, a: 190, b: 158 },
                  { y: 2020, a: 211, b: 305 },
                  { y: 2021, a: 197, b: 160 },
                  { y: 2022, a: 219, b: 168 },
                  { y: 2023, a: 194, b: 322 },
                ].map((r) => (
                  <tr key={r.y} className="odd:bg-gray-900/30">
                    <th scope="row" className="px-4 py-2 font-medium text-gray-200">
                      {r.y}
                    </th>
                    <td className="px-4 py-2">{r.a}</td>
                    <td className="px-4 py-2">{r.b}</td>
                  </tr>
                ))}
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-semibold text-gray-200">
                    Mean
                  </th>
                  <td className="px-4 py-2">205</td>
                  <td className="px-4 py-2">200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <MCQExample
            number={1}
            prompt="True or False: The standard deviation of Organization A is greater than that of Organization B."
            options={["True", "False"]}
            correct="False"
            solution={
              <>
                <p>
                  Organization A’s numbers lie close to its mean of 205: the
                  extremes 190 and 220 are only 15 units away, and all other
                  values are even nearer. By contrast, Organization B’s values
                  are much farther from 200, including 110 and 320, so their
                  typical distance from the mean is larger. Therefore,{" "}
                  <strong>Organization B</strong> has the larger standard
                  deviation, making the statement False.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="more-ways">
          <h3 id="more-ways" className="text-lg font-semibold text-white">
            Another common framing: compare categories across cities
          </h3>
          <p>
            Below is a small table of city expenditures (millions of dollars).
            We’ll reason about standard deviations by using range and spacing.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
              <caption className="sr-only">
                Expenditures by city across four categories
              </caption>
              <thead className="bg-gray-800/50 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    City
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Arts
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Recreation
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Infrastructure
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Education
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: "Appleton", a: 10.5, r: 14.4, i: 39.4, e: 20.7 },
                  { c: "Bridgeview", a: 13.1, r: 23.8, i: 50.6, e: 19.9 },
                  { c: "Cloud City", a: 14.5, r: 9.6, i: 44.2, e: 20.9 },
                  { c: "Dew Valley", a: 11.8, r: 4.7, i: 46.7, e: 19.8 },
                  { c: "Eagle Peak", a: 12.5, r: 18.8, i: 42.5, e: 20.3 },
                ].map((row) => (
                  <tr key={row.c} className="odd:bg-gray-900/30">
                    <th scope="row" className="px-4 py-2 font-medium text-gray-200">
                      {row.c}
                    </th>
                    <td className="px-4 py-2">{row.a}</td>
                    <td className="px-4 py-2">{row.r}</td>
                    <td className="px-4 py-2">{row.i}</td>
                    <td className="px-4 py-2">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <YesNoGroup
            title="Practice: Decide Yes/No for each statement"
            items={[
              {
                text:
                  "The standard deviation of Arts spending is higher than the standard deviation of Recreation spending.",
                answer: "No",
                rationale: (
                  <>
                    Arts values run from 10.5 to 14.5, a range of{" "}
                    <InlineMath math="4.0" />, and consecutive Arts entries are
                    tightly spaced. Recreation runs from 4.7 to 23.8, a range of{" "}
                    <InlineMath math="19.1" /> with much looser spacing. With
                    equal counts per column, the larger range and looser spacing
                    imply Recreation has the larger standard deviation. So the
                    statement is No.
                  </>
                ),
              },
              {
                text:
                  "Among the four categories, Education has the smallest standard deviation.",
                answer: "Yes",
                rationale: (
                  <>
                    Education values are tightly clustered between 19.8 and
                    20.9, a range of{" "}
                    <InlineMath math="20.9-19.8=1.1" />, which is far smaller
                    than the ranges in the other categories. With such a narrow
                    spread, Education’s standard deviation is the smallest. So
                    Yes.
                  </>
                ),
              },
              {
                text:
                  "The median city in Arts spending is also the median city in Education spending.",
                answer: "Yes",
                rationale: (
                  <>
                    Sorting Arts values gives 10.5 (Appleton), 11.8 (Dew
                    Valley), <strong>12.5 (Eagle Peak)</strong>, 13.1
                    (Bridgeview), 14.5 (Cloud City). Sorting Education yields
                    19.8 (Dew Valley), 19.9 (Bridgeview),{" "}
                    <strong>20.3 (Eagle Peak)</strong>, 20.7 (Appleton), 20.9
                    (Cloud City). In both lists, the middle entry belongs to
                    Eagle Peak. Thus, Yes.
                  </>
                ),
              },
            ]}
          />
        </section>

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-lg font-semibold text-white">
            Big picture
          </h3>
          <p>
            In this question type, standard deviation is about{" "}
            <em>spread</em>, not arithmetic. Compare how far values sit from the
            mean and how wide the range is. If the numbers can’t stray much from
            the mean (tight range and spacing), the deviation is small; if they
            can, it’s larger.
          </p>
        </section>
      </article>
    </main>
  );
}