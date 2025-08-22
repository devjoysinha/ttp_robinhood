import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { InlineMath, BlockMath } from "react-katex";
// Ensure KaTeX CSS is loaded once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "3.2 Two‑Part Analysis: One Equation with Two Variables",
  description:
    "Turn a Two‑Part Analysis stem into a single equation with two variables and use the answer grid to find the unique pair that works. Includes a walkthrough and three interactive examples.",
};

type TwoPartSelectorProps = {
  number: number;
  title: string;
  leftLabel: string;
  rightLabel: string;
  options: number[];
  prompt: React.ReactNode;
  isCorrect: (left?: number, right?: number) => boolean;
  solution: React.ReactNode;
};

function RowRadio({
  name,
  id,
  checked,
  onChange,
  "aria-label": ariaLabel,
}: {
  name: string;
  id: string;
  checked: boolean;
  onChange: () => void;
  "aria-label": string;
}) {
  return (
    <input
      type="radio"
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 cursor-pointer accent-blue-500"
      aria-label={ariaLabel}
    />
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
      />
    </svg>
  );
}

"use client";
import { useId, useMemo, useState } from "react";

function TwoPartSelector(props: TwoPartSelectorProps) {
  const {
    number,
    title,
    leftLabel,
    rightLabel,
    options,
    prompt,
    isCorrect,
    solution,
  } = props;

  const leftGroup = useId();
  const rightGroup = useId();
  const [left, setLeft] = useState<number | undefined>();
  const [right, setRight] = useState<number | undefined>();
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">(
    "idle"
  );
  const [showSolution, setShowSolution] = useState(false);

  const canCheck = typeof left !== "undefined" && typeof right !== "undefined";

  const feedback = useMemo(() => {
    if (status === "correct") return "Great job — that pair satisfies the condition.";
    if (status === "incorrect")
      return "That pair doesn’t work. Try another combination.";
    return "";
  }, [status]);

  return (
    <section
      className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 md:p-5"
      aria-labelledby={`ex-${number}-title`}
    >
      <header className="mb-3 flex items-center justify-between gap-2">
        <h3
          id={`ex-${number}-title`}
          className="text-xl font-semibold text-white"
        >
          Example {number}. {title}
        </h3>
      </header>

      <div className="prose prose-invert max-w-none text-gray-200">
        {prompt}
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-300">
              <th className="px-2 py-2">{leftLabel}</th>
              <th className="px-2 py-2">{rightLabel}</th>
              <th className="px-2 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {options.map((val, idx) => {
              const leftId = `${leftGroup}-row-${idx}`;
              const rightId = `${rightGroup}-row-${idx}`;
              return (
                <tr
                  key={val}
                  className="border-b border-gray-800/70 hover:bg-gray-800/40"
                >
                  <td className="px-2 py-2 align-middle">
                    <div className="flex items-center gap-2">
                      <RowRadio
                        name={leftGroup}
                        id={leftId}
                        checked={left === val}
                        onChange={() => setLeft(val)}
                        aria-label={`${leftLabel} option ${val}`}
                      />
                      <label
                        htmlFor={leftId}
                        className="cursor-pointer select-none text-gray-200"
                      >
                        Select
                      </label>
                    </div>
                  </td>
                  <td className="px-2 py-2 align-middle">
                    <div className="flex items-center gap-2">
                      <RowRadio
                        name={rightGroup}
                        id={rightId}
                        checked={right === val}
                        onChange={() => setRight(val)}
                        aria-label={`${rightLabel} option ${val}`}
                      />
                      <label
                        htmlFor={rightId}
                        className="cursor-pointer select-none text-gray-200"
                      >
                        Select
                      </label>
                    </div>
                  </td>
                  <td className="px-2 py-2 align-middle">
                    <span className="inline-flex min-w-[2ch] items-center rounded bg-gray-800 px-2 py-1 font-mono text-gray-100">
                      {val}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:bg-gray-700"
          onClick={() => {
            if (!canCheck) return;
            setStatus(isCorrect(left, right) ? "correct" : "incorrect");
          }}
          disabled={!canCheck}
        >
          Check answer
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-1 rounded-md border border-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-expanded={showSolution}
          aria-controls={`ex-${number}-solution`}
          onClick={() => setShowSolution((s) => !s)}
        >
          {showSolution ? "Hide explanation" : "Show explanation"}
          <Chevron open={showSolution} />
        </button>

        <span
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === "correct"
              ? "text-emerald-400"
              : status === "incorrect"
              ? "text-rose-400"
              : "text-gray-400"
          }`}
        >
          {feedback}
        </span>
      </div>

      {showSolution && (
        <div
          id={`ex-${number}-solution`}
          className="mt-4 rounded-md border border-gray-800 bg-gray-900 p-3 text-gray-200"
        >
          {solution}
        </div>
      )}
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Two‑Part Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2 One Equation with Two Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent Two‑Part Analysis pattern lets you rewrite the stem as a
          single equation in two unknowns. On its own, that equation doesn’t pin
          down unique values, but the answer grid acts as a filter: exactly one
          pair from the table will satisfy the relationship.
        </p>

        <MustKnow>
          You often don’t solve the equation directly. Instead, work
          strategically with the grid:
          <br />• express the relationship,
          <br />• use structure (divisibility, parity, perfect squares, etc.) to
          prune choices,
          <br />• test only what’s necessary. By design, there is a single
          consistent pair.
        </MustKnow>

        <p>
          Quick demo. Suppose we must find positive integers <InlineMath>x</InlineMath>{" "}
          and <InlineMath>y</InlineMath> from a small table of candidates such
          that:
        </p>

        <BlockMath math={"x + 8y = 42"} />

        <p>
          Solving for <InlineMath>x</InlineMath> gives{" "}
          <InlineMath>{String.raw`x = 42 - 8y`}</InlineMath>. Testing just the
          listed values of <InlineMath>y</InlineMath> immediately yields a
          single pair in the grid that works. The grid, not the algebra alone,
          forces uniqueness.
        </p>

        <MustKnow>
          When the answer grid is part of the question, leverage it. Reduce the
          search space before you plug and chug.
        </MustKnow>

        <TwoPartSelector
          number={1}
          title="Square‑root speed rule"
          leftLabel="g (pallets)"
          rightLabel="b (m/min)"
          options={[8, 36, 40, 49, 64, 80]}
          prompt={
            <>
              <p>
                A COO sets the conveyor speed by the rule{" "}
                <InlineMath>{String.raw`b = 5\sqrt{g}`}</InlineMath>, where{" "}
                <InlineMath>g</InlineMath> is the number of pallets on hand and{" "}
                <InlineMath>b</InlineMath> is the belt speed in meters per
                minute.
              </p>
              <p>
                Select one value for <InlineMath>g</InlineMath> and one for{" "}
                <InlineMath>b</InlineMath> that are consistent with the rule.
              </p>
            </>
          }
          isCorrect={(g, b) => {
            if (g === undefined || b === undefined) return false;
            const sqrt = Math.sqrt(g);
            // Only accept exact integer square roots
            if (!Number.isInteger(sqrt)) return false;
            return 5 * sqrt === b;
          }}
          solution={
            <>
              <p>
                Since <InlineMath>{String.raw`b = 5\sqrt{g}`}</InlineMath> and
                all candidates are integers, <InlineMath>g</InlineMath> should
                be a perfect square. From the grid, test{" "}
                <InlineMath>36</InlineMath>, <InlineMath>49</InlineMath>, and{" "}
                <InlineMath>64</InlineMath>:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <InlineMath>{String.raw`g=36 \Rightarrow b=5\cdot 6=30`}</InlineMath>{" "}
                  (not listed)
                </li>
                <li>
                  <InlineMath>{String.raw`g=49 \Rightarrow b=5\cdot 7=35`}</InlineMath>{" "}
                  (not listed)
                </li>
                <li>
                  <InlineMath>{String.raw`g=64 \Rightarrow b=5\cdot 8=40`}</InlineMath>{" "}
                  (listed)
                </li>
              </ul>
              <p>
                The only matching pair in the table is{" "}
                <InlineMath>g=64</InlineMath> and <InlineMath>b=40</InlineMath>.
              </p>
            </>
          }
        />

        <TwoPartSelector
          number={2}
          title="Chore pay equation"
          leftLabel="s (indoor)"
          rightLabel="d (outdoor)"
          options={[2, 3, 4, 6, 7]}
          prompt={
            <>
              <p>
                Julia earns $20 per indoor chore and $60 per outdoor chore. One
                weekend she completes <InlineMath>s</InlineMath> indoor and{" "}
                <InlineMath>d</InlineMath> outdoor chores for a total of $420.
              </p>
              <p>
                Pick values of <InlineMath>s</InlineMath> and{" "}
                <InlineMath>d</InlineMath> that fit the situation.
              </p>
            </>
          }
          isCorrect={(s, d) => {
            if (s === undefined || d === undefined) return false;
            return 20 * s + 60 * d === 420;
          }}
          solution={
            <>
              <p>
                The total is{" "}
                <InlineMath>{String.raw`20s + 60d = 420`}</InlineMath>. Divide
                by 20 to get{" "}
                <InlineMath>{String.raw`s + 3d = 21`}</InlineMath>, so{" "}
                <InlineMath>{String.raw`d = \frac{21 - s}{3}`}</InlineMath>.
                That forces <InlineMath>s</InlineMath> to be a multiple of 3.
              </p>
              <p>
                From the table, try <InlineMath>s=3</InlineMath>:
              </p>
              <BlockMath math={"d = (21-3)/3 = 6"} />
              <p>
                The pair <InlineMath>(s,d)=(3,6)</InlineMath> satisfies the
                equation; as the grid allows only one correct pair, we are done.
              </p>
            </>
          }
        />

        <TwoPartSelector
          number={3}
          title="Counting assignments across courses"
          leftLabel="m (advanced)"
          rightLabel="n (intermediate)"
          options={[8, 11, 12, 14, 15]}
          prompt={
            <>
              <p>
                Alice took 20 courses: 16 advanced, each with{" "}
                <InlineMath>m</InlineMath> assignments, and 4 intermediate, each
                with <InlineMath>n</InlineMath> assignments. Altogether, she
                completed 220 assignments.
              </p>
              <p>
                Choose values for <InlineMath>m</InlineMath> and{" "}
                <InlineMath>n</InlineMath> that match this information.
              </p>
            </>
          }
          isCorrect={(m, n) => {
            if (m === undefined || n === undefined) return false;
            return 16 * m + 4 * n === 220;
          }}
          solution={
            <>
              <p>
                The total gives{" "}
                <InlineMath>{String.raw`16m + 4n = 220`}</InlineMath>, or{" "}
                <InlineMath>{String.raw`4m + n = 55`}</InlineMath> after dividing
                by 4. Since <InlineMath>4m</InlineMath> is even,{" "}
                <InlineMath>n</InlineMath> must be odd to sum to 55. From the
                grid, only <InlineMath>n=11</InlineMath> is odd.
              </p>
              <p>
                Plugging in <InlineMath>n=11</InlineMath>:
              </p>
              <BlockMath math={"4m + 11 = 55 \\Rightarrow 4m = 44 \\Rightarrow m = 11"} />
              <p>
                Thus, <InlineMath>m=11</InlineMath> and{" "}
                <InlineMath>n=11</InlineMath>.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Takeaway: convert to an equation, use quick filters (divisibility,
          parity, roots), and test only a minimal set of candidates from the
          table. The unique pair will reveal itself fast. 
        </p>
      </article>
    </main>
  );
}