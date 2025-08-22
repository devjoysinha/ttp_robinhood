import type { Metadata } from "next";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "6.1 Multi‑Source Reasoning (MSR) — Introduction | GMAT",
  description:
    "A concise introduction to Multi‑Source Reasoning (MSR): what it is, how tabs work, question formats, skills involved, and a worked multi‑tab example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          As the name implies, Multi‑Source Reasoning (MSR) prompts present
          information across multiple panels you can switch between. You’ll see
          two or three “tabs,” each containing text, numbers, visuals, or a mix
          of these. Your job is to synthesize the pieces—sometimes from more
          than one tab—to answer the questions that follow.
        </p>

        <p>
          Tabs can all share the same style—for example, an email thread split
          across tabs or two short passages that take opposing positions—or each
          tab can use a different medium, such as one prose passage, one data
          table, and one chart.
        </p>

        <MustKnow>
          MSR prompts distribute information across two or three tabs. Tabs may
          use the same format (e.g., multiple passages) or different formats
          (e.g., passage + table + graph). You move between tabs to gather all
          relevant details.
        </MustKnow>

        <p>
          The accompanying questions come in familiar flavors. Some sets use the
          three‑statement “Yes/No” or “True/False” style you may know from Table
          Analysis; others are standard five‑option multiple choice. Typically,
          a single MSR prompt will have two or three questions.
        </p>

        <MustKnow>
          Question formats vary: you’ll see either three‑statement evaluations
          or classic five‑option multiple‑choice. Expect two or three questions
          per MSR prompt.
        </MustKnow>

        <p>
          Success in MSR draws on skills you already use elsewhere on the GMAT:
          careful reading, argument analysis, and precise interpretation of
          tables and charts. You may be asked to combine those skills—say,
          applying quantitative reasoning to support an inference, or reading a
          graph to resolve a seeming contradiction.
        </p>

        <ul className="ml-5 list-disc text-gray-300">
          <li>Reading Comprehension</li>
          <li>Critical Reasoning</li>
          <li>Graphics Interpretation</li>
          <li>Table/Data Analysis</li>
          <li>Problem Solving</li>
        </ul>

        <MustKnow>
          MSR blends verbal and quantitative thinking. You might use quant
          skills to answer a CR‑style inference or read a chart to evaluate a
          paradox. Be ready to combine tools.
        </MustKnow>

        <section aria-labelledby="example-1" className="mt-10">
          <h3 id="example-1" className="text-xl font-semibold text-white">
            Example: Two Tabs, One Set of Questions
          </h3>
          <p className="mt-2">
            Below is a compact MSR‑style prompt with two tabs. Read the tab
            overviews and consult the data to answer the statements that follow.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <details
              className="rounded-lg border border-gray-700 bg-gray-900/30 p-4 open:bg-gray-900/50"
              open
            >
              <summary className="cursor-pointer text-lg font-medium text-white">
                Tab 1 — Fastest‑Growing Cities (2022)
              </summary>
              <div className="mt-3 space-y-3 text-gray-300">
                <p>
                  The table lists five fast‑growing U.S. cities (population
                  50,000+) and several indicators often associated with
                  livability. A cost‑of‑living index of 100 is the national
                  baseline; values below 100 indicate a lower cost of living,
                  and values above 100 indicate a higher cost of living.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-0 text-left">
                    <caption className="sr-only">
                      Annual growth, region, unemployment, median income, and
                      cost of living for Apex, Bentonville, Chico, Doral, and
                      Leander.
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col" className="border-b border-gray-700 p-2">
                          City
                        </th>
                        <th scope="col" className="border-b border-gray-700 p-2">
                          Annual % Pop. Increase
                        </th>
                        <th scope="col" className="border-b border-gray-700 p-2">
                          Region
                        </th>
                        <th scope="col" className="border-b border-gray-700 p-2">
                          Unemployment
                        </th>
                        <th scope="col" className="border-b border-gray-700 p-2">
                          Median Household Income
                        </th>
                        <th scope="col" className="border-b border-gray-700 p-2">
                          Cost of Living Index
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd:bg-gray-900/20">
                        <th scope="row" className="p-2 font-medium text-white">
                          Apex
                        </th>
                        <td className="p-2">10.1</td>
                        <td className="p-2">South</td>
                        <td className="p-2">3.2%</td>
                        <td className="p-2">$113,442</td>
                        <td className="p-2">109</td>
                      </tr>
                      <tr className="odd:bg-gray-900/20">
                        <th scope="row" className="p-2 font-medium text-white">
                          Bentonville
                        </th>
                        <td className="p-2">7.4</td>
                        <td className="p-2">South</td>
                        <td className="p-2">2.8%</td>
                        <td className="p-2">$82,183</td>
                        <td className="p-2">96</td>
                      </tr>
                      <tr className="odd:bg-gray-900/20">
                        <th scope="row" className="p-2 font-medium text-white">
                          Chico
                        </th>
                        <td className="p-2">9.5</td>
                        <td className="p-2">West</td>
                        <td className="p-2">4.7%</td>
                        <td className="p-2">$51,094</td>
                        <td className="p-2">121</td>
                      </tr>
                      <tr className="odd:bg-gray-900/20">
                        <th scope="row" className="p-2 font-medium text-white">
                          Doral
                        </th>
                        <td className="p-2">8.2</td>
                        <td className="p-2">South</td>
                        <td className="p-2">3.1%</td>
                        <td className="p-2">$84,000</td>
                        <td className="p-2">130</td>
                      </tr>
                      <tr className="odd:bg-gray-900/20">
                        <th scope="row" className="p-2 font-medium text-white">
                          Leander
                        </th>
                        <td className="p-2">12.0</td>
                        <td className="p-2">South</td>
                        <td className="p-2">2.4%</td>
                        <td className="p-2">$102,911</td>
                        <td className="p-2">98</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>

            <details className="rounded-lg border border-gray-700 bg-gray-900/30 p-4">
              <summary className="cursor-pointer text-lg font-medium text-white">
                Tab 2 — Average Temperatures & “Pool Score”
              </summary>
              <div className="mt-3 space-y-3 text-gray-300">
                <p>
                  The chart shows each city’s average monthly temperatures
                  (°F). A city earns a pool score of “excellent” if its average
                  temperature exceeds 85°F for at least four consecutive months.
                  If it exceeds 75°F for at least four straight months—but not
                  85°F—its pool score is “good.” Otherwise, it receives no
                  rating.
                </p>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-gray-700">
                  <Image
                    src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1570/content_Example_1_-_Tab_2.png"
                    alt="Average monthly temperatures for the five cities; used to determine pool score ratings."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </details>
          </div>

          <div className="mt-8 rounded-lg border border-gray-700 bg-gray-900/30 p-5">
            <h4 className="text-lg font-semibold text-white">
              Evaluate Each Statement
            </h4>
            <p className="mt-1 text-gray-300">
              For each statement below, decide whether it can be concluded from
              the information in the tabs (Inferable) or not (Not Inferable).
            </p>

            <ol className="mt-4 space-y-3 text-gray-200">
              <li>
                1) Chico has a pool score rating of “excellent.”
              </li>
              <li>
                2) Leander is more desirable overall than Bentonville.
              </li>
              <li>
                3) A majority of the five fast‑growing cities listed are in the
                South.
              </li>
            </ol>

            <details className="mt-5 rounded-md border border-gray-700 bg-gray-900/40 p-4">
              <summary className="cursor-pointer font-medium text-white">
                Show solution and reasoning
              </summary>
              <div className="mt-3 space-y-4 text-gray-300">
                <p className="font-semibold text-white">
                  1) Chico has a pool score rating of “excellent.” — Inferable
                </p>
                <p>
                  The definition of “excellent” on Tab 2 requires average
                  temperatures above 85°F for at least four consecutive months.
                  From the graph, Chico’s curve sits above the 85°F line for
                  four straight months (June–September). Therefore, Chico meets
                  the threshold for “excellent.”
                </p>

                <p className="font-semibold text-white">
                  2) Leander is more desirable overall than Bentonville. — Not
                  Inferable
                </p>
                <p>
                  While Tab 1 lists several factors that can influence
                  desirability, no weighting scheme or overall desirability
                  formula is provided. We don’t know, for instance, how to trade
                  off growth rate versus cost of living versus unemployment.
                  Without that framework, the claim about overall desirability
                  is not supported.
                </p>

                <p className="font-semibold text-white">
                  3) A majority of the five fast‑growing cities are in the
                  South. — Inferable
                </p>
                <p>
                  Four of the five cities in the table are listed in the South,
                  which is a majority. In fraction form, that’s{" "}
                  <InlineMath math="4/5" />; since{" "}
                  <InlineMath math="4/5 > 1/2" />, “most” is satisfied.
                </p>

                <div className="mt-3 rounded border border-emerald-700/40 bg-emerald-900/20 p-3 text-emerald-200">
                  Correct pattern: Inferable / Not Inferable / Inferable
                </div>
              </div>
            </details>
          </div>
        </section>

        <p className="mt-8">
          Key takeaway: MSR questions are about execution. Identify the tab that
          contains the relevant details, note definitions and thresholds
          carefully, and combine information across tabs only when the question
          demands it.
        </p>
      </article>
    </main>
  );
}