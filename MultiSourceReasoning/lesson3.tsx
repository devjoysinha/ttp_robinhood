import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// Note: Ensure KaTeX styles are loaded once in your root layout:
// import "katex/dist/katex.min.css";
import katex from "katex";

function MathInline({ expr, className }: { expr: string; className?: string }) {
  const html = katex.renderToString(expr, {
    output: "htmlAndMathml",
    throwOnError: false,
  });
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "6.4 Use Keywords to Locate Relevant Info | Multi‑Source Reasoning",
  description:
    "Learn a fast, reliable way to navigate Multi‑Source Reasoning prompts: use keywords from the question stem and choices to jump to the right place. Includes two worked MSR examples with clear reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">6. Multi‑Source Reasoning</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4 Use Keywords in Questions to Locate Relevant Info in the Prompt
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          A quick way to cut through MSR prompts is to mine the question stem and the answer choices for
          keywords, then jump straight to where those words or concepts appear in the sources.
          This works across text, tables, and graphics, and it pairs nicely with a brief initial scan
          that maps where different types of information live.
        </p>

        <MustKnow>
          Use keywords from the question stem and choices to zero in on where to read in an MSR prompt.
        </MustKnow>

        <MustKnow>
          Tab titles often mirror question language. If a choice mentions “literacy,” the “State Literacy”
          tab is a natural first stop.
        </MustKnow>

        <MustKnow>
          Keywords help in passages, but also in structured data: column names, row labels, axis titles,
          and legends frequently echo the question’s terminology.
        </MustKnow>

        <MustKnow>
          Don’t insist on exact matches. Close synonyms and rephrased terms frequently carry the same idea.
        </MustKnow>

        <MustKnow>
          Combine keyword hunting with a quick first pass where you note which tab holds which kind of detail.
          This drastically reduces search time.
        </MustKnow>

        <section aria-labelledby="ex6" className="space-y-4">
          <h3 id="ex6" className="text-xl font-semibold text-white">
            Example 6 — Identify what the sources support (multiple answers)
          </h3>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
                <h4 className="mb-3 text-base font-semibold text-gray-200">Sources</h4>

                <details className="group mb-3 rounded-md border border-gray-700">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    Email 1 — Marketing Director → Community Manager
                    <span className="ml-2 text-gray-400">(May 1, 9:26 a.m.)</span>
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-3 text-gray-300">
                    Month‑end closed the consumer testing window. Did we hit our target of 2,000 reviews
                    rated 4★ or higher across partner sites? If not, do we need another test round?
                  </div>
                </details>

                <details className="group mb-3 rounded-md border border-gray-700">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    Email 2 — Community Manager → Marketing Director
                    <span className="ml-2 text-gray-400">(May 1, 10:07 a.m.)</span>
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-3 text-gray-300 space-y-3">
                    <p>
                      In round 1, we shipped to 3,500 potential testers and received 1,746 total reviews
                      on five partner sites, of which 237 were below 4★. Accounting for returned shipments,
                      no‑posts within the window, and sub‑4★ reviews, the success rate was about 43%.
                    </p>
                    <p>
                      We’ll contact a new tester group for round 2 (free product in exchange for a posted review).
                      We can’t assume the success rate in round 2 will match round 1, especially since the rate
                      dropped relative to the last product we tested. We must balance the risk of oversending
                      units against the risk of needing a third round. How many units can we allocate?
                    </p>
                    <div className="rounded-md bg-gray-800/60 p-3 text-sm">
                      Success‑rate idea:
                      <div className="mt-2">
                        <MathInline
                          className="text-gray-100"
                          expr={`\\text{Success Rate} = \\dfrac{\\text{on-time 4\\*+ reviews}}{\\text{mailings} - \\text{returns} - \\text{no-posts}}`}
                        />
                      </div>
                    </div>
                  </div>
                </details>

                <details className="group rounded-md border border-gray-700">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    Email 3 — Marketing Director → Community Manager
                    <span className="ml-2 text-gray-400">(May 1, 1:32 p.m.)</span>
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-3 text-gray-300">
                    We have $2,800 left for consumer testing. Aim to send a number of units close to what’s
                    truly needed to hit the reviews goal. A third round would force a marketing timeline shift,
                    which could hurt sales.
                  </div>
                </details>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
                <h4 className="mb-3 text-base font-semibold text-gray-200">
                  For each statement, does the info support the inference?
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <caption className="sr-only">
                      Inference support table for Example 6 (Yes/No).
                    </caption>
                    <thead>
                      <tr className="text-left text-gray-400">
                        <th scope="col" className="px-3 py-2">#</th>
                        <th scope="col" className="px-3 py-2">Inference</th>
                        <th scope="col" className="px-3 py-2">Supported?</th>
                      </tr>
                    </thead>
                    <tbody className="[&>tr]:border-t [&>tr]:border-gray-800">
                      <tr>
                        <td className="px-3 py-3 align-top text-gray-400">1</td>
                        <td className="px-3 py-3 align-top">
                          The community manager expects round‑2 success to be lower than round‑1.
                        </td>
                        <td className="px-3 py-3 align-top font-semibold text-red-300">No</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 align-top text-gray-400">2</td>
                        <td className="px-3 py-3 align-top">
                          The director would rather oversend units than run a third round.
                        </td>
                        <td className="px-3 py-3 align-top font-semibold text-red-300">No</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 align-top text-gray-400">3</td>
                        <td className="px-3 py-3 align-top">
                          The community manager believes the reviews goal will be met in round‑2.
                        </td>
                        <td className="px-3 py-3 align-top font-semibold text-red-300">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <details className="mt-4 rounded-md border border-gray-700 bg-gray-900/30">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    Show solution and reasoning
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-4 space-y-3 text-gray-300">
                    <p>
                      Keyword trail: success rate, second round, goal for reviews, third round.
                      These terms appear in Email 2 and Email 3.
                    </p>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        Statement 1: The manager says they can’t assume the next success rate will match round 1.
                        That’s uncertainty, not a prediction of a drop. Not supported.
                      </li>
                      <li>
                        Statement 2: The director wants to send “as close as possible” to the real need and notes
                        the risk of a third round. That’s a balance point, not a preference to overshoot. Not supported.
                      </li>
                      <li>
                        Statement 3: Email 2 explicitly weighs oversending against a possible third round — which
                        implies the goal may not be reached in round‑2. Not supported.
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-200">Answer: No / No / No</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="ex7" className="space-y-4">
          <h3 id="ex7" className="text-xl font-semibold text-white">
            Example 7 — Undermine vs. Not undermine (multiple answers)
          </h3>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
                <h4 className="mb-3 text-base font-semibold text-gray-200">Sources</h4>

                <details className="group mb-3 rounded-md border border-gray-700">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    Senate Committee
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-3 text-gray-300 space-y-3">
                    <p>
                      AI progress is accelerating and poised to outperform humans across many tasks.
                      Unchecked growth risks massive labor displacement (hundreds of millions of jobs)
                      and worsening inequality.
                    </p>
                    <p>
                      Politically, AI can flood the information space with content that’s unsourced,
                      not vetted, and indistinguishable from human‑made, enabling large‑scale disinformation.
                      Companies racing for profit can’t be relied upon to self‑regulate.
                    </p>
                    <p>
                      Proposal: pause development to build a regulatory framework and safety protocols,
                      then proceed responsibly.
                    </p>
                  </div>
                </details>

                <details className="group rounded-md border border-gray-700">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    AI Company
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-3 text-gray-300 space-y-3">
                    <p>
                      New technologies always carry uncertainty. Historically, disruptive innovations first
                      displace some workers but ultimately create jobs and lift productivity, boosting growth.
                    </p>
                    <p>
                      Slowing progress could push development underground and leave restrictive countries behind.
                      Emphasize safe, ethical use while continuing to build — change won’t be instantaneous,
                      and pausing would even slow accuracy improvements.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
                <h4 className="mb-3 text-base font-semibold text-gray-200">
                  For each statement, would it undermine one of the arguments?
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <caption className="sr-only">
                      Undermines vs Does not undermine table for Example 7.
                    </caption>
                    <thead>
                      <tr className="text-left text-gray-400">
                        <th scope="col" className="px-3 py-2">#</th>
                        <th scope="col" className="px-3 py-2">Statement</th>
                        <th scope="col" className="px-3 py-2">Effect</th>
                      </tr>
                    </thead>
                    <tbody className="[&>tr]:border-t [&>tr]:border-gray-800">
                      <tr>
                        <td className="px-3 py-3 align-top text-gray-400">1</td>
                        <td className="px-3 py-3 align-top">
                          Some AI‑generated content is fact‑based.
                        </td>
                        <td className="px-3 py-3 align-top font-semibold text-emerald-300">Does not undermine</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 align-top text-gray-400">2</td>
                        <td className="px-3 py-3 align-top">
                          Economists estimate employment gains won’t offset AI‑driven displacement for more than a decade.
                        </td>
                        <td className="px-3 py-3 align-top font-semibold text-emerald-300">Does not undermine</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 align-top text-gray-400">3</td>
                        <td className="px-3 py-3 align-top">
                          The rise of the internet produced a net decline in jobs that intensified over time.
                        </td>
                        <td className="px-3 py-3 align-top font-semibold text-red-300">Undermines</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <details className="mt-4 rounded-md border border-gray-700 bg-gray-900/30">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-200">
                    Show solution and reasoning
                  </summary>
                  <div className="border-t border-gray-700 px-4 py-4 space-y-3 text-gray-300">
                    <p>Keyword trail: disinformation, factual content, employment growth, history, disruptive innovations.</p>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        S1 vs Committee: Saying “some” AI content is factual leaves plenty of room for wide‑scale
                        disinformation. The committee’s risk claim stands. Does not undermine.
                      </li>
                      <li>
                        S2 vs Company: The company claims long‑term job growth but doesn’t specify timing.
                        “More than a decade” can still be “long term.” Does not undermine.
                      </li>
                      <li>
                        S3 vs Company: A historical counterexample (internet → long‑run net job loss) conflicts with the
                        company’s “history shows growth” narrative. Undermines.
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-200">
                      Answer: Does not undermine / Does not undermine / Undermines
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <MustKnow>
          MSR prompts usually include both helpful details and noise. Your job is to find the few lines
          that control the question. Keywords plus a quick map of the sources will get you there fast.
        </MustKnow>
      </article>
    </main>
  );
}