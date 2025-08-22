import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "13.2.8 Converting Data for a Set Matrix Approach | Overlapping Sets",
  description:
    "Learn how to turn multi-choice response tables into two‑option groups so you can use a 2×2 set matrix. Includes a worked mini‑example and two practice problems with full solutions.",
};

function KInline({ expr, as = "span", className = "" }: { expr: string; as?: keyof JSX.IntrinsicElements; className?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, output: "html" });
  const Tag = as;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">13. Overlapping Sets</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">13.2.8 Converting Data for a Set Matrix Approach</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Overlapping‑set questions sometimes present each group with three or more response categories
          (for example, Yes/No/Undecided) rather than just two. You can still use a 2×2 set matrix:
          first collapse the data so each group has exactly two buckets that match the question you need to answer.
        </p>

        <MustKnow>
          When a problem involves two groups but lists three or more options per group, regroup those options into
          two complementary categories per group that align with the question. Then build a standard 2×2 set matrix.
        </MustKnow>

        <section aria-labelledby="poll-two-referenda" className="space-y-4">
          <h3 id="poll-two-referenda" className="text-xl font-semibold text-white">
            From three options to two: a quick walkthrough
          </h3>
          <p>
            Suppose a poll of 40 people reports support for two referenda, A and B, each with choices Yes/No/Undecided:
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-[520px] w-full text-left text-sm">
              <caption className="sr-only">Responses for Referenda A and B with three options</caption>
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Yes</th>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Undecided</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Referendum A
                  </th>
                  <td className="px-4 py-2">21</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">7</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Referendum B
                  </th>
                  <td className="px-4 py-2">25</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The question you care about might only distinguish “Yes” versus “Not Yes.” Combine No and Undecided into
            “Not Yes” for each referendum:
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-[420px] w-full text-left text-sm">
              <caption className="sr-only">Collapsed table with Yes vs Not Yes for each referendum</caption>
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Yes</th>
                  <th className="px-4 py-2">Not Yes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Referendum A
                  </th>
                  <td className="px-4 py-2">21</td>
                  <td className="px-4 py-2">19</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Referendum B
                  </th>
                  <td className="px-4 py-2">25</td>
                  <td className="px-4 py-2">15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Now you can lay out a standard set matrix using those two categories per group:</p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-[520px] w-full text-left text-sm">
              <caption className="sr-only">2×2 set matrix for Yes vs Not Yes across A and B</caption>
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Yes on B</th>
                  <th className="px-4 py-2">Not Yes on B</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Yes on A
                  </th>
                  <td className="px-4 py-2"> </td>
                  <td className="px-4 py-2"> </td>
                  <td className="px-4 py-2 font-semibold">21</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Not Yes on A
                  </th>
                  <td className="px-4 py-2"> </td>
                  <td className="px-4 py-2"> </td>
                  <td className="px-4 py-2 font-semibold">19</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Total
                  </th>
                  <td className="px-4 py-2 font-semibold">25</td>
                  <td className="px-4 py-2 font-semibold">15</td>
                  <td className="px-4 py-2 font-semibold">40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="mini-example-speed" className="space-y-4">
          <h3 id="mini-example-speed" className="text-xl font-semibold text-white">
            Mini‑example: collapsing to “Increase” vs “Not Increase”
          </h3>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-[560px] w-full text-left text-sm">
              <caption className="sr-only">Survey results about speed limits with three options</caption>
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Increase</th>
                  <th className="px-4 py-2">Decrease</th>
                  <th className="px-4 py-2">Keep the same</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Residential speed limit
                  </th>
                  <td className="px-4 py-2">400</td>
                  <td className="px-4 py-2">150</td>
                  <td className="px-4 py-2">350</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Bypass speed limit
                  </th>
                  <td className="px-4 py-2">250</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The question asks about people who want to raise one limit and not raise the other. Group “Decrease” and
            “Keep the same” together as “Not Increase” for each road:
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-[420px] w-full text-left text-sm">
              <caption className="sr-only">Collapsed Increase vs Not Increase counts</caption>
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Increase</th>
                  <th className="px-4 py-2">Not Increase</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Residential
                  </th>
                  <td className="px-4 py-2">400</td>
                  <td className="px-4 py-2">500</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Bypass
                  </th>
                  <td className="px-4 py-2">250</td>
                  <td className="px-4 py-2">650</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Build the matrix and fill totals. We’re told 110 residents chose “Increase bypass” and “Not increase residential.”</p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-[620px] w-full text-left text-sm">
              <caption className="sr-only">2×2 set matrix for Increase vs Not Increase (Residential × Bypass)</caption>
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Increase bypass</th>
                  <th className="px-4 py-2">Not increase bypass</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Increase residential
                  </th>
                  <td className="px-4 py-2">140</td>
                  <td className="px-4 py-2 bg-gray-800 font-semibold">260</td>
                  <td className="px-4 py-2">400</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Not increase residential
                  </th>
                  <td className="px-4 py-2 font-semibold">110</td>
                  <td className="px-4 py-2">390</td>
                  <td className="px-4 py-2">500</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                    Total
                  </th>
                  <td className="px-4 py-2">250</td>
                  <td className="px-4 py-2">650</td>
                  <td className="px-4 py-2">900</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Therefore, the count who want to increase the residential limit but not the bypass is 260.
          </p>
        </section>

        <MustKnow>
          A two‑set matrix needs exactly two categories per group. If your data shows three or more responses per group,
          merge them into the two that matter for the question (for example, Loved vs Did Not Love; Fewer than 3 vs 3+).
        </MustKnow>

        <MCQExample
          number={17}
          prompt={
            <>
              A survey of 400 people asked about two films, “The Diary” and “The Crew.” For each movie,
              respondents chose Loved, Hated, or Neutral. The counts were:
              <div className="mt-3 overflow-x-auto rounded-lg border border-gray-800">
                <table className="min-w-[520px] w-full text-left text-sm">
                  <caption className="sr-only">Sentiment counts for two movies</caption>
                  <thead className="bg-gray-900 text-gray-200">
                    <tr>
                      <th className="px-4 py-2"> </th>
                      <th className="px-4 py-2">Loved</th>
                      <th className="px-4 py-2">Hated</th>
                      <th className="px-4 py-2">Neutral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        The Diary
                      </th>
                      <td className="px-4 py-2">75</td>
                      <td className="px-4 py-2">175</td>
                      <td className="px-4 py-2">150</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        The Crew
                      </th>
                      <td className="px-4 py-2">210</td>
                      <td className="px-4 py-2">60</td>
                      <td className="px-4 py-2">130</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              If 60 people loved both movies, how many loved neither?
            </>
          }
          options={["15", "150", "175", "210", "340"]}
          correct="175"
          solution={
            <>
              <p>
                The question distinguishes “Loved” vs “Did not love.” Combine Hated and Neutral into “Did not love.”
              </p>
              <p className="flex items-center gap-2">
                For The Diary:{" "}
                <KInline expr="175 + 150 = 325" /> people did not love it; Loved = 75.
              </p>
              <p className="flex items-center gap-2">
                For The Crew:{" "}
                <KInline expr="60 + 130 = 190" /> people did not love it; Loved = 210.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-800">
                <table className="min-w-[520px] w-full text-left text-sm">
                  <caption className="sr-only">Loved vs Did Not Love matrix skeleton</caption>
                  <thead className="bg-gray-900 text-gray-200">
                    <tr>
                      <th className="px-4 py-2"> </th>
                      <th className="px-4 py-2">Loved The Crew</th>
                      <th className="px-4 py-2">Did not love The Crew</th>
                      <th className="px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Loved The Diary
                      </th>
                      <td className="px-4 py-2 font-semibold">60</td>
                      <td className="px-4 py-2">15</td>
                      <td className="px-4 py-2">75</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Did not love The Diary
                      </th>
                      <td className="px-4 py-2">150</td>
                      <td className="px-4 py-2 bg-gray-800 font-semibold">175</td>
                      <td className="px-4 py-2">325</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Total
                      </th>
                      <td className="px-4 py-2">210</td>
                      <td className="px-4 py-2">190</td>
                      <td className="px-4 py-2">400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The “neither loved” cell is Did‑not‑love Diary and Did‑not‑love Crew: 175.
              </p>
              <p>
                Common trap: subtracting the “both loved” count from the total to get 340 assumes everyone else loved
                neither, ignoring “loved one but not the other.”
              </p>
            </>
          }
        />

        <ExampleCard
          number={18}
          title="Households with fewer than 3 of both devices"
          statements={[
            "A survey of 100 households records the counts of televisions and laptops, each reported as 0, 1, 2, or 3+ (see table below). How many households have fewer than 3 televisions and fewer than 3 laptops?",
            "1) 10 households have more than 2 televisions and more than 2 laptops.",
            "2) 6 households have fewer than 3 televisions but 3 or more laptops.",
          ]}
          correctLetter="D"
          solution={
            <>
              <div className="overflow-x-auto rounded-lg border border-gray-800 my-2">
                <table className="min-w-[560px] w-full text-left text-sm">
                  <caption className="sr-only">Device counts distribution</caption>
                  <thead className="bg-gray-900 text-gray-200">
                    <tr>
                      <th className="px-4 py-2"> </th>
                      <th className="px-4 py-2">0</th>
                      <th className="px-4 py-2">1</th>
                      <th className="px-4 py-2">2</th>
                      <th className="px-4 py-2">3+</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Televisions
                      </th>
                      <td className="px-4 py-2">10</td>
                      <td className="px-4 py-2">38</td>
                      <td className="px-4 py-2">41</td>
                      <td className="px-4 py-2">11</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Laptops
                      </th>
                      <td className="px-4 py-2">8</td>
                      <td className="px-4 py-2">55</td>
                      <td className="px-4 py-2">21</td>
                      <td className="px-4 py-2">16</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The stem separates each device into two categories: “fewer than 3” and “3 or more.” Combine the 0/1/2
                rows accordingly.
              </p>
              <p className="flex items-center gap-2">
                TVs fewer than 3: <KInline expr="10 + 38 + 41 = 89" />; TVs 3+: <KInline expr="11" />.
              </p>
              <p className="flex items-center gap-2">
                Laptops fewer than 3: <KInline expr="8 + 55 + 21 = 84" />; Laptops 3+: <KInline expr="16" />.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-800">
                <table className="min-w-[560px] w-full text-left text-sm">
                  <caption className="sr-only">2×2 matrix aggregation</caption>
                  <thead className="bg-gray-900 text-gray-200">
                    <tr>
                      <th className="px-4 py-2"> </th>
                      <th className="px-4 py-2">TVs &lt; 3</th>
                      <th className="px-4 py-2">TVs ≥ 3</th>
                      <th className="px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Laptops &lt; 3
                      </th>
                      <td className="px-4 py-2 bg-gray-800 font-semibold">83</td>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">84</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Laptops ≥ 3
                      </th>
                      <td className="px-4 py-2">6</td>
                      <td className="px-4 py-2">10</td>
                      <td className="px-4 py-2">16</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                        Total
                      </th>
                      <td className="px-4 py-2">89</td>
                      <td className="px-4 py-2">11</td>
                      <td className="px-4 py-2">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                Statement (1): “More than 2 TVs and more than 2 laptops” means the bottom‑right cell is 10, which forces
                the remaining cells as shown above, giving 83 in the target cell (fewer than 3 of both). Sufficient.
              </p>
              <p>
                Statement (2): “Fewer than 3 TVs but 3+ laptops” fixes the top‑right cell at 6, which again forces the
                same unique fill with 83 in the target cell. Sufficient.
              </p>
              <p>Each statement alone nails the answer. Therefore, D.</p>
            </>
          }
        />

        <p>
          Bottom line: pick the two categories that matter, merge the others, and drop the numbers into a 2×2 matrix.
          From there, totals and one or two given cell values are usually enough to determine the rest.
        </p>
      </article>
    </main>
  );
}