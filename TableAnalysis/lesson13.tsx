import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KaTeX({ expr, display = false, className }: { expr: string; display?: boolean; className?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: display });
  return <span className={className} aria-label="math formula" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "5.13 Standard Deviation in Table Analysis | Data Insights",
  description:
    "Learn how to compare standard deviations in tables without heavy computation. Use distance from the mean, spacing, and range. Includes a quick True/False and a 3‑statement drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Table Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">5.13 Standard Deviation in Table Analysis</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Table Analysis tasks often include questions about the spread of values. You won’t be asked to compute a
          standard deviation explicitly; instead, you’ll judge which set appears more or less spread out.
        </p>

        <MustKnow>
          Expect Table Analysis questions that compare or reason about standard deviation for values shown in a table.
        </MustKnow>

        <p>
          Standard deviation quantifies how far data points tend to be from the mean. Formally, for a population:
        </p>
        <div className="rounded-md bg-gray-800/40 p-4">
          <KaTeX expr="\\sigma = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2}" display />
        </div>
        <p className="mt-2">
          and for a sample:
        </p>
        <div className="rounded-md bg-gray-800/40 p-4">
          <KaTeX expr="s = \\sqrt{\\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2}" display />
        </div>

        <MustKnow>
          Bigger departures from the mean and wider spacing between values lead to a larger standard deviation; tighter
          clustering near the mean leads to a smaller one.
        </MustKnow>

        <p>
          On the GMAT, you can compare standard deviations by inspecting:
        </p>
        <ul className="list-disc pl-6">
          <li>how far the values are from their mean (distance from center)</li>
          <li>the overall spacing and range of the values</li>
        </ul>

        <MustKnow>
          To compare standard deviations from tables, look at both the spread around the mean and the overall spacing of
          the values. You do not need to compute exact values.
        </MustKnow>

        <section aria-labelledby="rainforest-heading" className="space-y-4">
          <h3 id="rainforest-heading" className="text-xl font-semibold text-white">
            Mini‑Example: Comparing Spread with a Mean Provided
          </h3>
          <p className="text-gray-300">
            The table shows hectares of rainforest restored by two organizations in selected years, along with each
            organization’s mean over the years shown.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full table-auto">
              <caption className="sr-only">
                Hectares of rainforest restored for Organization A and B across years with means
              </caption>
              <thead className="bg-gray-800/60">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Year
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Organization A
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Organization B
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: 2017, A: 204, B: 118 },
                  { year: 2018, A: 220, B: 169 },
                  { year: 2019, A: 190, B: 158 },
                  { year: 2020, A: 211, B: 305 },
                  { year: 2021, A: 197, B: 160 },
                  { year: 2022, A: 219, B: 168 },
                  { year: 2023, A: 194, B: 322 },
                  { year: "Mean", A: 205, B: 200, mean: true },
                ].map((r, i) => (
                  <tr key={i} className={r.mean ? "bg-gray-900/40 font-semibold" : i % 2 ? "bg-gray-900/20" : ""}>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-200">{r.year}</td>
                    <td className="px-4 py-3 text-sm">{r.A}</td>
                    <td className="px-4 py-3 text-sm">{r.B}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <MCQExample
            number={1}
            prompt="The standard deviation of the hectares restored by Organization A is greater than the standard deviation of the hectares restored by Organization B."
            options={["True", "False"]}
            correct="False"
            solution={
              <>
                <p>
                  Use the provided means to gauge spread. For Organization A, values range from 190 to 220 with a mean
                  of 205, so every value is within 15 of the mean.
                </p>
                <p>
                  For Organization B, the mean is 200, but values like 118, 305, and 322 are far from 200 (distances of
                  82, 105, and 122, respectively). Overall, B’s data are much more spread out.
                </p>
                <p>Thus, A’s standard deviation is smaller, not larger. The statement is False.</p>
              </>
            }
          />
        </section>

        <MustKnow>
          When two sets have the same number of items, range and spacing provide a quick, reliable way to compare their
          standard deviations.
        </MustKnow>

        <section aria-labelledby="cities-heading" className="space-y-4">
          <h3 id="cities-heading" className="text-xl font-semibold text-white">
            Example 13: Reasoning with Range, Spacing, and Medians
          </h3>
          <p>The table lists city expenditures (in millions) in the most recent fiscal year.</p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full table-auto">
              <caption className="sr-only">City expenditures table across four categories</caption>
              <thead className="bg-gray-800/60">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    City
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Arts
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Recreation
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Infrastructure
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Education
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { city: "Appleton", arts: 10.5, rec: 14.4, infra: 39.4, edu: 20.7 },
                  { city: "Bridgeview", arts: 13.1, rec: 23.8, infra: 50.6, edu: 19.9 },
                  { city: "Cloud City", arts: 14.5, rec: 9.6, infra: 44.2, edu: 20.9 },
                  { city: "Dew Valley", arts: 11.8, rec: 4.7, infra: 46.7, edu: 19.8 },
                  { city: "Eagle Peak", arts: 12.5, rec: 18.8, infra: 42.5, edu: 20.3 },
                ].map((r, i) => (
                  <tr key={r.city} className={i % 2 ? "bg-gray-900/20" : ""}>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-200">{r.city}</td>
                    <td className="px-4 py-3 text-sm">{r.arts}</td>
                    <td className="px-4 py-3 text-sm">{r.rec}</td>
                    <td className="px-4 py-3 text-sm">{r.infra}</td>
                    <td className="px-4 py-3 text-sm">{r.edu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-gray-700 p-4">
            <p className="font-medium text-gray-200">
              For each statement, choose Yes if it is supported by the table; otherwise choose No.
            </p>
            <ol className="mt-3 space-y-3 list-decimal pl-5">
              <li>The standard deviation of Arts spending is higher than that of Recreation spending.</li>
              <li>Among the four categories, Education spending has the smallest standard deviation.</li>
              <li>The median city in Arts spending is the same as the median city in Education spending.</li>
            </ol>
          </div>

          <div className="space-y-3 rounded-lg bg-gray-900/30 p-4">
            <h4 className="font-semibold text-white">Solution outline</h4>
            <p>
              1) Compare ranges and spacing (each column has five items). Arts ranges from 10.5 to 14.5 (range 4.0) and
              values are closely spaced. Recreation ranges from 4.7 to 23.8 (range 19.1) with much wider spacing. So
              Arts is less spread out. Answer: No.
            </p>
            <p>
              2) Education values are 19.8, 19.9, 20.3, 20.7, 20.9 (range 1.1), considerably tighter than Arts (range
              4.0) and far tighter than the other categories. Answer: Yes.
            </p>
            <p>
              3) Sort Arts: 10.5 (Appleton), 11.8 (Dew Valley), 12.5 (Eagle Peak), 13.1 (Bridgeview), 14.5 (Cloud City)
              → median city is Eagle Peak. Sort Education: 19.8 (Dew Valley), 19.9 (Bridgeview), 20.3 (Eagle Peak),
              20.7 (Appleton), 20.9 (Cloud City) → median city is Eagle Peak again. Answer: Yes.
            </p>
            <p className="font-semibold">Final answers: No / Yes / Yes.</p>
          </div>
        </section>

        <p>
          Takeaway: you can compare standard deviations visually by focusing on position and spread—distances from the
          mean, spacing, and range—without crunching formulas.
        </p>
      </article>
    </main>
  );
}