import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title: "6.6 Use Multiple Tabs to Answer One MSR Question | GMAT Data Insights",
  description:
    "Multi-Source Reasoning often requires weaving details from several tabs to judge even a single choice. Learn the mindset, see two worked examples, and practice reading across tabs efficiently.",
};

function Math({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const __html = renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    output: "html",
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel || "math expression"}
      className={block ? "my-2 inline-block" : "inline align-baseline"}
      dangerouslySetInnerHTML={{ __html }}
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
          6.6 Be Ready to Use Multiple Tabs to Answer a Single Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Multi‑Source Reasoning (MSR), it’s common that a single answer choice or statement can only be
          evaluated by pulling facts from more than one tab. Treat the tabs as parts of one dataset, and expect to
          cross‑reference them.
        </p>

        <MustKnow>
          To judge one statement in MSR, you may need to merge details from multiple tabs. Plan to scan, match
          keywords, and synthesize.
        </MustKnow>

        <p>
          For instance, a question might rely on a numeric table on one tab but also require a rule or definition
          described in the passage on another tab. In that case, you must combine the rule with the appropriate
          rows or columns to make a correct decision.
        </p>

        <p>
          You may even find that different statements in a single question each need a different mix of tabs.
          One statement might depend on tabs 1 and 2, the next on tabs 1, 2, and 3, and the last on tabs 1 and 3.
        </p>

        <MustKnow>
          Different statements can draw on different subsets of tabs. Don’t assume the same tabs apply across the
          board—check every statement.
        </MustKnow>

        <p>
          Bottom line: combining information across tabs isn’t a rare trick—it’s a core MSR skill. Build the habit
          of locating, linking, and verifying details across the entire prompt.
        </p>

        <MustKnow>
          Synthesizing across tabs is fundamental to MSR. Practice tracing definitions, constraints, and data
          wherever they live.
        </MustKnow>

        <section aria-labelledby="ex10" className="mt-10 space-y-4">
          <h3 id="ex10" className="text-xl font-semibold text-white">
            Example 10
          </h3>
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 md:p-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-100">Tab 1 — Requirements</h4>
              <p className="text-gray-300">
                A contractor runs 7 dump trucks moving ore for a mine. Each week, the mine sets these requirements:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-gray-300">
                <li>Every truck must complete more than 225 loads.</li>
                <li>The median loads per truck must exceed 250.</li>
                <li>For each truck, average tons per load must be greater than 10.</li>
                <li>For each truck, total weekly tonnage must exceed 2,500 tons.</li>
                <li>Across all trucks, the average tons per load must exceed 10.</li>
              </ul>

              <h4 className="pt-4 text-lg font-semibold text-gray-100">Tab 2 — Truckloads (loads per week)</h4>
              <p className="text-gray-300">
                The table lists the weekly loads for three specific trucks over the past three weeks.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">Loads per week by truck</caption>
                  <thead>
                    <tr className="bg-gray-800/60 text-gray-200">
                      <th scope="col" className="whitespace-nowrap border border-gray-700 px-3 py-2 text-left">
                        Truck
                      </th>
                      <th scope="col" className="whitespace-nowrap border border-gray-700 px-3 py-2 text-left">
                        Week 1
                      </th>
                      <th scope="col" className="whitespace-nowrap border border-gray-700 px-3 py-2 text-left">
                        Week 2
                      </th>
                      <th scope="col" className="whitespace-nowrap border border-gray-700 px-3 py-2 text-left">
                        Week 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, w1: 233, w2: 244, w3: 202 },
                      { id: 4, w1: 246, w2: 238, w3: 222 },
                      { id: 6, w1: 256, w2: 248, w3: 324 },
                    ].map((r) => (
                      <tr key={r.id} className="odd:bg-gray-800/30">
                        <th scope="row" className="border border-gray-700 px-3 py-2 text-gray-100">
                          {r.id}
                        </th>
                        <td className="border border-gray-700 px-3 py-2">{r.w1}</td>
                        <td className="border border-gray-700 px-3 py-2">{r.w2}</td>
                        <td className="border border-gray-700 px-3 py-2">{r.w3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-md bg-gray-800/50 p-4">
                <p className="font-medium text-gray-200">
                  Question. For each truck below, select Yes if the data show it satisfied requirement 1 (more than
                  225 loads) in each of the three weeks; otherwise, select No.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-[420px] border-collapse text-sm">
                    <caption className="sr-only">Satisfaction of requirement 1 across weeks</caption>
                    <thead>
                      <tr className="bg-gray-800/60 text-gray-200">
                        <th scope="col" className="border border-gray-700 px-3 py-2 text-left">
                          Truck
                        </th>
                        <th scope="col" className="border border-gray-700 px-3 py-2 text-left">
                          Met in Weeks 1, 2, and 3?
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 1, result: "No" },
                        { id: 4, result: "No" },
                        { id: 6, result: "Yes" },
                      ].map((r) => (
                        <tr key={r.id} className="odd:bg-gray-800/30">
                          <th scope="row" className="border border-gray-700 px-3 py-2 text-gray-100">
                            {r.id}
                          </th>
                          <td className="border border-gray-700 px-3 py-2">{r.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 space-y-2 rounded-md border border-gray-700 bg-gray-800/40 p-4">
                <p className="font-semibold text-gray-100">Solution (key idea)</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    Requirement 1: each week’s loads must be greater than 225 for that truck.
                  </li>
                  <li>
                    Truck 1 has only 202 loads in week 3 → fails → No.
                  </li>
                  <li>
                    Truck 4 has only 222 loads in week 3 → fails → No.
                  </li>
                  <li>
                    Truck 6 posts 256, 248, and 324 loads → all exceed 225 → Yes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="ex11" className="mt-10 space-y-4">
          <h3 id="ex11" className="text-xl font-semibold text-white">
            Example 11
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 md:p-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-100">Tabs (context)</h4>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Background. A company ships pineapples but many arrive spoiled. Taste tests show a pineapple is
                  “at peak flavor” exactly 5 days before it becomes rotten.
                </li>
                <li>
                  Diameter vs. time to rot. Trend line:{" "}
                  <Math expr="y = -3.27x + 61" ariaLabel="y equals negative 3.27 x plus 61" /> (y = days until rotten,
                  x = diameter in cm).
                </li>
                <li>
                  Note. Size does not change after harvest.
                </li>
              </ul>

              <MCQExample
                number={11}
                prompt="If shipping to a certain customer takes 5 days, which diameter is the best approximation to ensure the pineapple arrives at peak flavor?"
                options={["14.5 cm", "15.6 cm", "16.5 cm", "17 cm", "18 cm"]}
                correct="15.6 cm"
                solution={
                  <>
                    <p>
                      Peak flavor occurs 5 days before rotting. If transit is 5 days, then at the moment we ship, the
                      fruit should be 10 days away from rotting.
                    </p>
                    <p>
                      Use the trend line <Math expr="y = -3.27x + 61" ariaLabel="y equals negative 3.27 x plus 61" /> and
                      set <Math expr="y = 10" ariaLabel="y equals ten" />:
                    </p>
                    <p>
                      <Math block expr="10 = -3.27x + 61" ariaLabel="10 equals negative 3.27 x plus 61" />
                      <Math block expr="3.27x = 61 - 10 = 51" ariaLabel="3.27 x equals 51" />
                      <Math block expr="x = \dfrac{51}{3.27} \approx 15.6" ariaLabel="x equals 51 over 3.27 approximately 15.6" />
                    </p>
                    <p>So, a diameter of about 15.6 cm is the best choice.</p>
                  </>
                }
              />
            </div>
          </div>
        </section>

        <p className="pt-6">
          Takeaway: in MSR, success comes from disciplined execution—identify what’s asked, locate all relevant tabs,
          and knit together the necessary facts before you decide.
        </p>
      </article>
    </main>
  );
}