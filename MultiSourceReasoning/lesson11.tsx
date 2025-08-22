import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.12 Process Details in Tables and Graphs | Multi‑Source Reasoning",
  description:
    "Practical tactics for reading tables and charts in MSR: spot sorting, verify labels, and mine titles for hidden constraints. Includes two worked multiple‑choice examples with step‑by‑step reasoning and accessible math rendered with KaTeX.",
};

function MathBlock({
  expr,
  display = false,
  className = "",
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "htmlAndMathml",
    strict: "ignore",
  });
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      aria-label={ariaLabel}
      role="math"
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.12 Be Meticulous with Details in Tables and Graphs
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a prompt spreads information across tables and graphics, success
          comes down to two habits: locating the right numbers fast and making
          sure subtle details don’t slip by. The tips below help with both.
        </p>

        <section aria-labelledby="locate-info-quickly" className="space-y-4">
          <h3 id="locate-info-quickly" className="sr-only">
            Find information quickly
          </h3>
          <p>
            First pass: check whether the table is already sorted. Sorting lets
            you home in on rows without scanning everything line by line. Common
            patterns include:
          </p>
          <ul className="ml-6 list-disc space-y-1 text-gray-300">
            <li>Ascending or descending by a time column (e.g., year)</li>
            <li>Alphabetical order by a name field (e.g., company)</li>
            <li>Ranked by a metric (e.g., cost from highest to lowest)</li>
          </ul>

          <MustKnow>
            Spotting the sort order up front reduces search time when you jump
            back to the table to answer a question.
          </MustKnow>
        </section>

        <section aria-labelledby="similar-looking-data" className="space-y-4">
          <h3 id="similar-looking-data" className="sr-only">
            Avoid pulling the wrong value
          </h3>
          <p>
            MSR layouts often place similar‑looking numbers side by side (think:
            “regular price” next to “sale price” or “2021 population” next to
            “2022 population”). It’s easy to read from the wrong column or axis
            if you rush.
          </p>

          <MustKnow>
            Before you copy a value, confirm you have the right label, axis, or
            header. Small label mistakes lead to big errors.
          </MustKnow>
        </section>

        <section aria-labelledby="titles-matter" className="space-y-4">
          <h3 id="titles-matter" className="sr-only">
            Titles can contain critical constraints
          </h3>
          <p>
            Don’t ignore titles and footnotes. They often encode units or
            qualifiers that change the math. For instance, a table labeled “per
            10 employees” means you must divide by 10 to get a per‑employee
            figure.
          </p>

          <MustKnow>
            Key constraints (units, time windows, “per‑N” factors) frequently
            live in titles. Read them before you compute.
          </MustKnow>
        </section>

        <hr className="my-8 border-gray-700" />

        <section aria-labelledby="example-14" className="space-y-4">
          <div>
            <h3 id="example-14" className="text-xl font-semibold text-white">
              Example 14
            </h3>
            <p className="mt-2">
              The National Health Center (NHC) publishes the minimum number of
              family doctors recommended per 1,000 residents. The benchmarks
              rise with the average age of the city, since older populations
              tend to visit doctors more often.
            </p>
            <div className="overflow-x-auto">
              <table className="mt-4 w-full min-w-[480px] table-fixed border-collapse rounded-md text-sm">
                <caption className="sr-only">
                  Minimum recommended ratios of family doctors to population by
                  mean age
                </caption>
                <thead>
                  <tr className="bg-gray-800">
                    <th
                      scope="col"
                      className="w-1/2 px-3 py-2 text-left font-semibold text-gray-100"
                    >
                      Mean age of population
                    </th>
                    <th
                      scope="col"
                      className="w-1/2 px-3 py-2 text-left font-semibold text-gray-100"
                    >
                      Minimum doctors per 1,000 people
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {[
                    { age: 40, ratio: "1.0" },
                    { age: 45, ratio: "1.3" },
                    { age: 50, ratio: "1.6" },
                    { age: 55, ratio: "2.0" },
                    { age: 60, ratio: "2.5" },
                    { age: 65, ratio: "3.1" },
                    { age: 70, ratio: "3.7" },
                  ].map((row) => (
                    <tr key={row.age} className="bg-gray-900/40">
                      <td className="px-3 py-2 text-gray-200">{row.age}</td>
                      <td className="px-3 py-2 text-gray-200">{row.ratio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Context: In 2009, Urbanville’s mean age was 50. The city had 31
              family doctors, a ratio of 1.2 per 1,000 people—below the NHC’s
              1.6 benchmark for a mean age of 50. The city responded by
              launching a campaign to attract additional doctors.
            </p>
          </div>

          <MCQExample
            number={14}
            prompt="What is the best estimate of Urbanville’s population in 2014?"
            options={["19,000", "23,750", "26,250", "35,500", "42,000"]}
            correct="26,250"
            solution={
              <>
                <p>
                  From the 2014 data points: Urbanville had 42 family doctors,
                  and the ratio was 1.6 doctors per 1,000 residents.
                </p>
                <p>
                  Let x be Urbanville’s population in 2014. Use equivalent
                  ratios in “doctors : residents” form:
                </p>
                <div className="my-3">
                  <MathBlock
                    display
                    expr="\\frac{42}{x}=\\frac{1.6}{1000}"
                    ariaLabel="42 divided by x equals 1.6 divided by 1000"
                  />
                </div>
                <div className="my-3">
                  <MathBlock
                    display
                    expr="1.6\\,x=42{,}000 \\quad\\Rightarrow\\quad x=\\frac{42{,}000}{1.6}=26{,}250"
                    ariaLabel="1.6 times x equals forty two thousand, so x equals twenty six thousand two hundred fifty"
                  />
                </div>
                <p>Therefore, the population was approximately 26,250.</p>
                <p>
                  Answer choice C matches this value. Note how we read one value
                  from each axis and combined them with a simple proportion.
                </p>
              </>
            }
          />
        </section>

        <hr className="my-8 border-gray-700" />

        <section aria-labelledby="example-15" className="space-y-4">
          <h3 id="example-15" className="text-xl font-semibold text-white">
            Example 15
          </h3>
          <p>
            Thermania sells only two sodas: Fizz Cola and Zoom Cola. Both firms
            sell 355 ml cans from their own vending machines and have no other
            revenue streams. On December 31, 2009, each company announced the
            same 10‑year goals:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Goal #1: capture more than half of total can sales</li>
            <li>Goal #2: end each year with higher revenue than the year before</li>
          </ul>
          <p className="mt-2">
            Strategies starting January 1, 2010:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>
              Fizz Cola doubled its 2009 ad budget and raised price per can by
              50%.
            </li>
            <li>
              Zoom Cola cut its price per can by 25% and reduced its ad budget
              to half of the 2009 level.
            </li>
          </ul>
          <p>Both companies fully spent their annual ad budgets every year.</p>

          <MCQExample
            number={15}
            prompt="From 2010 through 2019 (inclusive), in how many years did BOTH companies achieve Goal #2 (year‑over‑year revenue increase)?"
            options={["Two", "Three", "Four", "Five", "Six"]}
            correct="Four"
            solution={
              <>
                <p>
                  From the revenue charts (one for each company), mark the years
                  when revenue rose relative to the prior year.
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    Fizz increased year‑over‑year in: 2010, 2012, 2016, 2017,
                    2018, 2019.
                  </li>
                  <li>
                    Zoom increased year‑over‑year in: 2011, 2012, 2013, 2015,
                    2016, 2018, 2019.
                  </li>
                </ul>
                <p className="mt-2">
                  Intersecting these sets gives the years both increased:
                  2012, 2016, 2018, 2019 — four years total.
                </p>
                <p>Therefore, the correct answer is Four.</p>
              </>
            }
          />
        </section>

        <hr className="my-8 border-gray-700" />

        <section aria-labelledby="takeaways" className="space-y-3">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Big takeaways
          </h3>
          <ul className="ml-6 list-disc space-y-1">
            <li>Use sort order to scan smarter.</li>
            <li>Confirm columns, axes, and units before recording values.</li>
            <li>
              Titles and footnotes often hide the final conversion or division
              you need.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}