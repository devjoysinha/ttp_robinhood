import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { useState } from "react";

// Client component for the interactive example
function TableAnalysisExample(props: {
  twoThirdsHTML: string;
}) {
  "use client";
  const { twoThirdsHTML } = props;

  type Player = {
    name: string;
    round1: number;
    total: number;
    reward: number;
  };

  const players: Player[] = [
    { name: "Player A", round1: 21, total: 78, reward: 0 },
    { name: "Player B", round1: 34, total: 98, reward: 1000 },
    { name: "Player C", round1: 17, total: 74, reward: 0 },
    { name: "Player D", round1: 25, total: 86, reward: 500 },
    { name: "Player E", round1: 38, total: 82, reward: 250 },
  ];

  // Statements (paraphrased)
  const statements = [
    "The player with the largest payout earned a combined 64 points across rounds two and three.",
    `Player A’s round‑one score is greater than ${""} of Player B’s round‑one score.`,
    "The two players who received no payout had identical round‑two scores.",
  ];

  // Insert KaTeX inside statement 2
  const renderStatement = (index: number) => {
    if (index !== 1) return statements[index];
    return (
      <>
        Player A’s round‑one score is greater than{" "}
        <span
          aria-label="two-thirds"
          className="align-[0.1em] inline-block"
          dangerouslySetInnerHTML={{ __html: twoThirdsHTML }}
        />{" "}
        of Player B’s round‑one score.
      </>
    );
  };

  // Correct answers for [Yes, No]
  // true = Yes, false = No
  const correct = [true, false, false];

  const [answers, setAnswers] = useState<(true | false | undefined)[]>(
    Array(statements.length).fill(undefined)
  );
  const [checked, setChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const setAnswer = (idx: number, val: boolean) => {
    const next = [...answers];
    next[idx] = val;
    setAnswers(next);
  };

  const allAnswered = answers.every((a) => a !== undefined);
  const score =
    answers.filter((a, i) => a === correct[i]).length + "/" + statements.length;

  // Precomputed helpful values for the solution
  const topRewardPlayer = players.reduce((best, p) =>
    p.reward > best.reward ? p : best
  , players[0]);
  const topR2R3 = topRewardPlayer.total - topRewardPlayer.round1; // 98 - 34 = 64
  const twoThirdsOf34 = (2 / 3) * 34; // ~22.666...

  const aNoReward = players.filter((p) => p.reward === 0); // A and C
  const aR2R3 = aNoReward.map((p) => p.total - p.round1); // both 57

  return (
    <section aria-labelledby="example-heading" className="rounded-lg border border-white/10 bg-neutral-900/50 p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 id="example-heading" className="text-xl font-semibold text-white">
          Example: Read the correct column
        </h3>
        <span className="rounded bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
          Easy
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-gray-300">
            Five competitors play three rounds. The top three receive prize money.
            Round One Score lists points from round one only; Total Score is the
            sum of all three rounds; Reward is the payout for that player.
          </p>

          <div className="overflow-x-auto rounded-md border border-white/10">
            <table className="min-w-full border-collapse text-sm">
              <caption className="sr-only">
                Scores and rewards by player across three rounds
              </caption>
              <thead className="bg-white/5 text-left text-gray-200">
                <tr>
                  <th scope="col" className="px-3 py-2">Player</th>
                  <th scope="col" className="px-3 py-2">Round One Score</th>
                  <th scope="col" className="px-3 py-2">Total Score</th>
                  <th scope="col" className="px-3 py-2">Reward (USD)</th>
                </tr>
              </thead>
              <tbody>
                {players.map((p) => (
                  <tr key={p.name} className="even:bg-white/5">
                    <th scope="row" className="px-3 py-2 font-medium text-white">
                      {p.name}
                    </th>
                    <td className="px-3 py-2 text-gray-300">{p.round1}</td>
                    <td className="px-3 py-2 text-gray-300">{p.total}</td>
                    <td className="px-3 py-2 text-gray-300">
                      {p.reward.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="mb-4 text-gray-300">
            For each statement, choose Yes if it must be true based on the table; otherwise choose No.
          </p>

          <ol className="space-y-4">
            {statements.map((_, i) => (
              <li key={i} className="rounded-md border border-white/10 p-3">
                <fieldset>
                  <legend className="mb-2 font-medium text-white">
                    Statement {i + 1}
                  </legend>
                  <p className="mb-3 text-gray-200">{renderStatement(i)}</p>

                  <div role="radiogroup" aria-label={`Choices for statement ${i + 1}`} className="flex gap-4">
                    <label className="inline-flex items-center gap-2 text-gray-300">
                      <input
                        type="radio"
                        name={`s-${i}`}
                        value="yes"
                        checked={answers[i] === true}
                        onChange={() => setAnswer(i, true)}
                        className="h-4 w-4 accent-emerald-500"
                        aria-checked={answers[i] === true}
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center gap-2 text-gray-300">
                      <input
                        type="radio"
                        name={`s-${i}`}
                        value="no"
                        checked={answers[i] === false}
                        onChange={() => setAnswer(i, false)}
                        className="h-4 w-4 accent-emerald-500"
                        aria-checked={answers[i] === false}
                      />
                      No
                    </label>
                  </div>

                  {checked && answers[i] !== undefined && (
                    <p
                      className={`mt-3 text-sm ${
                        answers[i] === correct[i]
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                    >
                      {answers[i] === correct[i] ? "Correct" : "Incorrect"}
                    </p>
                  )}
                </fieldset>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              onClick={() => setChecked(true)}
              disabled={!allAnswered}
              aria-disabled={!allAnswered}
            >
              Check answers
            </button>
            <button
              type="button"
              className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              onClick={() => setShowSolution((s) => !s)}
              aria-expanded={showSolution}
              aria-controls="solution-panel"
            >
              {showSolution ? "Hide solution" : "Show solution"}
            </button>

            {checked && (
              <span
                className="ml-auto rounded bg-white/5 px-2 py-1 text-xs text-gray-300"
                aria-live="polite"
              >
                Score: {score}
              </span>
            )}
          </div>

          <div
            id="solution-panel"
            hidden={!showSolution}
            className="mt-4 space-y-4 rounded-md border border-white/10 bg-neutral-900/60 p-4 text-gray-200"
          >
            <p className="font-semibold text-white">Text solution</p>

            <div>
              <p className="font-medium text-white">Statement 1 — Yes</p>
              <p>
                The largest payout is $1,000, earned by Player B. The total from
                rounds two and three is Total − Round One = 98 − 34 = 64, so the
                statement is true.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Statement 2 — No</p>
              <p>
                Player A’s round‑one score is 21; Player B’s is 34. We compare 21
                to{" "}
                <span
                  aria-label="two-thirds"
                  className="align-[0.1em] inline-block"
                  dangerouslySetInnerHTML={{ __html: twoThirdsHTML }}
                />{" "}
                of 34, which is approximately {twoThirdsOf34.toFixed(2)}. Since
                21 is less than that, the claim is false.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Statement 3 — No</p>
              <p>
                The two players with zero payout are A and C. Both have rounds
                two and three summing to 57 (A: 78 − 21, C: 74 − 17), but that
                doesn’t force their individual round‑two scores to match. Many
                splits are possible, so the statement is not guaranteed.
              </p>
            </div>

            <div className="text-sm text-gray-300">
              Correct sequence: Yes / No / No
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "5.7 Use the Correct Column | Table Analysis",
  description:
    "GMAT Table Analysis: avoid traps from similarly named columns and nonadjacent fields. One interactive example with explanations and lightweight math rendering.",
};

export default function Page() {
  // Pre-render KaTeX once on the server and pass HTML down
  const twoThirdsHTML = katex.renderToString("\\frac{2}{3}", {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.7 Make sure you’re reading the correct column
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Table Analysis questions often come down to sorting, filtering, and
          reading numbers quickly. Still, the GMAT hides common traps: columns
          with nearly identical names and prompts that require jumping between
          fields that aren’t next to each other. Those design choices are meant
          to see whether you’ll pull data from the wrong place.
        </p>

        <p>
          A frequent slip is mixing up columns such as “Final Exam Score,”
          “Final Exam Grade,” and “Final Grade,” or combining values from
          nonadjacent columns and losing track along the way. Slowing down long
          enough to check headers prevents easy, avoidable errors.
        </p>

        <MustKnow>
          Before you compute or compare, verify you’re pulling values from the
          intended column. Similar labels and far‑apart fields are deliberate
          traps—confirm headers, then calculate.
        </MustKnow>

        <p>
          Try the quick drill below to practice pulling the right numbers and
          rejecting claims that aren’t actually supported by the table.
        </p>

        <TableAnalysisExample twoThirdsHTML={twoThirdsHTML} />

        <p className="pt-2">
          Key takeaway: matching the prompt to the exact column is half the
          battle. Confirm the field name, then do the math.
        </p>
      </article>
    </main>
  );
}