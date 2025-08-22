import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.15.1 Scenario Tables for Max–Min Problems | Word Problems",
  description:
    "Use quick scenario tables to tackle max–min questions: push non‑target values to extremes, then adjust to meet totals and constraints. Includes two fully worked multiple‑choice examples with KaTeX math.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.15.1 Scenario Tables for Max–Min Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a question asks you to minimize or maximize a count or value while a
          total is fixed, a fast way to reason is to sketch a tiny “what‑if” table and test
          a couple of edge cases. The core move is simple: to make one part small, make the
          other parts as large as allowed; to make one part large, keep the others as small
          as the rules permit. Then adjust to satisfy any remaining constraints.
        </p>

        <MustKnow>
          • With a fixed total, pushing non‑target entries to their extremes often reveals
          the minimum or maximum of the target. • Two handy levers: “pack with the biggest
          unit” to reduce the count, and “spread with the smallest unit” to increase it. •
          Use a quick scenario table to keep arithmetic straight as you test cases.
        </MustKnow>

        <MCQExample
          number={70}
          prompt="For each report card, Micah earns $60 per A, $40 per B, and $15 per C. If Micah received $410 for the most recent report card, what is the minimum possible number of grades on that report card?"
          options={["8", "9", "10", "11", "12"]}
          correct="9"
          solution={
            <>
              <p>
                To minimize the number of grades, load up on the highest‑value grade first.
                Try the most A’s without exceeding $410.
              </p>

              <div className="overflow-x-auto">
                <table className="mt-3 w-full min-w-[420px] border-separate border-spacing-0 text-sm">
                  <caption className="sr-only">
                    Scenario table for A, B, C counts and payout totals
                  </caption>
                  <thead>
                    <tr className="bg-gray-800 text-left text-gray-200">
                      <th className="px-3 py-2 font-semibold">A ($60)</th>
                      <th className="px-3 py-2 font-semibold">B ($40)</th>
                      <th className="px-3 py-2 font-semibold">C ($15)</th>
                      <th className="px-3 py-2 font-semibold">Total payout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">6</td>
                      <td className="px-3 py-2">0</td>
                      <td className="px-3 py-2">0</td>
                      <td className="px-3 py-2">
                        <K expr="6\times 60=360" ariaLabel="6 times 60 equals 360" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                With 6 A’s we have <K expr="410-360=50" ariaLabel="410 minus 360 equals 50" /> left.
                You can’t make $50 using $15’s alone, and two B’s would be $80, which overshoots.
                So six A’s won’t work.
              </p>

              <p>
                Drop to 5 A’s: total from A’s is{" "}
                <K expr="5\times 60=300" ariaLabel="5 times 60 equals 300" />, leaving{" "}
                <K expr="410-300=110" ariaLabel="410 minus 300 equals 110" />. To minimize the added
                grades, maximize B’s (worth more per grade than C’s). Two B’s give{" "}
                <K expr="2\times 40=80" ariaLabel="2 times 40 equals 80" />, and two C’s give{" "}
                <K expr="2\times 15=30" ariaLabel="2 times 15 equals 30" />; together{" "}
                <K expr="80+30=110" ariaLabel="80 plus 30 equals 110" />.
              </p>

              <div className="overflow-x-auto">
                <table className="mt-3 w-full min-w-[420px] border-separate border-spacing-0 text-sm">
                  <caption className="sr-only">
                    Completing the payout with 5 A’s, 2 B’s, 2 C’s
                  </caption>
                  <tbody>
                    <tr className="bg-gray-800 text-left text-gray-200">
                      <th className="px-3 py-2 font-semibold">A ($60)</th>
                      <th className="px-3 py-2 font-semibold">B ($40)</th>
                      <th className="px-3 py-2 font-semibold">C ($15)</th>
                      <th className="px-3 py-2 font-semibold">Total payout</th>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">5</td>
                      <td className="px-3 py-2">2</td>
                      <td className="px-3 py-2">2</td>
                      <td className="px-3 py-2">
                        <K expr="5\times 60+2\times 40+2\times 15=410" ariaLabel="5 times 60 plus 2 times 40 plus 2 times 15 equals 410" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                The count is <K expr="5+2+2=9" ariaLabel="5 plus 2 plus 2 equals 9" /> grades, and
                you can’t do it in fewer because 6 A’s failed. Answer: 9.
              </p>
            </>
          }
        />

        <MCQExample
          number={71}
          prompt="Over the last 7 days, Gemma sold 55 cars. If Wednesday’s sales were strictly higher than each other day, what is the minimum possible number of cars she sold on Wednesday?"
          options={["7", "8", "9", "10", "11"]}
          correct="9"
          solution={
            <>
              <p>
                To make Wednesday as small as possible while keeping it strictly the largest,
                make every other day as large as allowed but still less than Wednesday.
              </p>

              <p>
                Test 7 for Wednesday. Then the other six days are at most 6 each, giving{" "}
                <K expr="6\times 6+7=43" ariaLabel="6 times 6 plus 7 equals 43" />, which is short of 55.
              </p>

              <p>
                Test 8 for Wednesday. Then others are at most 7 each:{" "}
                <K expr="6\times 7+8=50" ariaLabel="6 times 7 plus 8 equals 50" />, still short.
              </p>

              <p>
                Test 9 for Wednesday. Then others are at most 8 each:{" "}
                <K expr="6\times 8+9=57" ariaLabel="6 times 8 plus 9 equals 57" />. That overshoots by 2,
                so reduce two cars from any non‑Wednesday day (e.g., make Monday 6 instead of 8).
                Wednesday remains strictly the largest, and the total becomes{" "}
                <K expr="57-2=55" ariaLabel="57 minus 2 equals 55" />.
              </p>

              <p>
                Therefore, the minimum possible Wednesday total is 9.
              </p>
            </>
          }
        />

        <MustKnow>
          Bottom line: with a fixed total, the median trick doesn’t apply—position doesn’t matter.
          Instead, push the non‑target entries to their allowable extremes, check the total, and
          make the smallest legal tweak that satisfies all constraints. A tiny scenario table helps
          you see the arithmetic cleanly.
        </MustKnow>
      </article>
    </main>
  );
}