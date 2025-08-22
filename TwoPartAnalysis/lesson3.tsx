import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "3.2 Two‑Part Analysis: One Equation, Two Variables | GMAT Quant",
  description:
    "How to solve Two‑Part Analysis problems that reduce to a single equation with two variables by leveraging the answer table. Includes three worked examples.",
};

type ExampleBlockProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

function ExampleBlock({ number, title, children }: ExampleBlockProps) {
  return (
    <section
      aria-labelledby={`ex-${number}`}
      className="rounded-lg border border-white/10 bg-white/5 p-4 md:p-6"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 id={`ex-${number}`} className="text-lg font-semibold text-white">
          Example {number}: {title}
        </h3>
        <span
          aria-hidden="true"
          className="rounded-md bg-white/10 px-2 py-1 text-xs text-gray-200"
        >
          Practice
        </span>
      </div>
      <div className="prose prose-invert max-w-none text-gray-300">{children}</div>
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
          3.2 Two‑Part Analysis: One Equation with Two Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common Two‑Part Analysis setup gives you a single equation in two
          unknowns. Even though the stem alone doesn’t uniquely determine both
          variables, the table of answer choices is designed so that exactly one
          pair fits the relationship. Your job is to use the equation plus the table
          to isolate that one valid pair.
        </p>

        <MustKnow>
          • Translate the stem into a clean algebraic relationship. • Use the table
          strategically: test values that are easier or more restrictive (perfect
          squares, multiples, parity, divisibility). • Only one combination will
          satisfy the relationship—stop when you find it.
        </MustKnow>

        <p>
          This approach mirrors techniques you used in linear equations: simplify
          first, then test candidates efficiently instead of brute‑forcing every
          possibility.
        </p>

        <ExampleBlock number={1} title="Square‑root relationship">
          <p className="mb-3">
            The conveyor speed b (meters/min) is set by the number of pallets g via
            <InlineMath math={"\\ b = 5\\sqrt{g}"} />. Pick one value for g and one
            value for b from the table that are consistent with this rule.
          </p>

          <div className="not-prose mb-4 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse">
              <caption className="sr-only">
                Candidate values for g and b. Choose one from each column.
              </caption>
              <thead>
                <tr className="text-left text-gray-200">
                  <th scope="col" className="border-b border-white/10 px-3 py-2">
                    g
                  </th>
                  <th scope="col" className="border-b border-white/10 px-3 py-2">
                    b
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">8</td>
                  <td className="border-b border-white/10 px-3 py-2">8</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">36</td>
                  <td className="border-b border-white/10 px-3 py-2">36</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">40</td>
                  <td className="border-b border-white/10 px-3 py-2">40</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">49</td>
                  <td className="border-b border-white/10 px-3 py-2">49</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">64</td>
                  <td className="border-b border-white/10 px-3 py-2">64</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">80</td>
                  <td className="px-3 py-2">80</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-2">
            Because b is an integer in the table, start with g that are perfect
            squares (their square roots are integers). Check g = 36 →{" "}
            <InlineMath math={"b = 5\\sqrt{36} = 5\\cdot 6 = 30"} />, but 30 is not
            listed under b. Next, g = 49 →{" "}
            <InlineMath math={"b = 5\\cdot 7 = 35"} /> (not listed). Try g = 64 →{" "}
            <InlineMath math={"b = 5\\cdot 8 = 40"} />, which appears in the b
            column.
          </p>
          <p className="font-semibold text-white">Answer: g = 64 and b = 40.</p>
        </ExampleBlock>

        <ExampleBlock number={2} title="Chores and pay">
          <p className="mb-3">
            Julia earns $20 for each indoor chore and $60 for each outdoor chore.
            One weekend she did s indoor chores and d outdoor chores for a total of
            $420. Choose s and d that satisfy the situation.
          </p>

          <div className="mb-3">
            <BlockMath math={"20s + 60d = 420"} />
            <p className="mt-2">
              Divide by 20 to simplify:
              <InlineMath math={"\\ s + 3d = 21"} /> →{" "}
              <InlineMath math={"d = 7 - \\tfrac{s}{3}"} />.
            </p>
          </div>

          <p className="mb-2">
            Since d must be an integer, s must be a multiple of 3. From the table,
            try s = 3:
          </p>
          <BlockMath math={"d = 7 - \\tfrac{3}{3} = 6"} />
          <p className="font-semibold text-white">Answer: s = 3 and d = 6.</p>

          <div className="not-prose mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse">
              <caption className="sr-only">
                Candidate values for s and d. Choose one from each column.
              </caption>
              <thead>
                <tr className="text-left text-gray-200">
                  <th scope="col" className="border-b border-white/10 px-3 py-2">
                    s
                  </th>
                  <th scope="col" className="border-b border-white/10 px-3 py-2">
                    d
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">2</td>
                  <td className="border-b border-white/10 px-3 py-2">2</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">3</td>
                  <td className="border-b border-white/10 px-3 py-2">3</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">4</td>
                  <td className="border-b border-white/10 px-3 py-2">4</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">6</td>
                  <td className="border-b border-white/10 px-3 py-2">6</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ExampleBlock>

        <ExampleBlock number={3} title="Course homework counts">
          <p className="mb-3">
            Alice took 20 courses: 16 advanced with m assignments each, and 4
            intermediate with n assignments each. She completed 220 assignments in
            total. Pick values of m and n that fit.
          </p>

          <div className="mb-3">
            <BlockMath math={"16m + 4n = 220"} />
            <p className="mt-2">
              Divide by 4:
              <InlineMath math={"\\ 4m + n = 55"} />.
            </p>
          </div>

          <p className="mb-2">
            Notice 4m is even. To sum to the odd number 55, n must be odd. That
            instantly rules out even candidates for n. Testing n = 11:
          </p>
          <BlockMath math={"4m + 11 = 55 \\ \\Rightarrow\\ 4m = 44 \\ \\Rightarrow\\ m = 11"} />
          <p className="font-semibold text-white">Answer: m = 11 and n = 11.</p>

          <div className="not-prose mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse">
              <caption className="sr-only">
                Candidate values for m and n. Choose one from each column.
              </caption>
              <thead>
                <tr className="text-left text-gray-200">
                  <th scope="col" className="border-b border-white/10 px-3 py-2">
                    m
                  </th>
                  <th scope="col" className="border-b border-white/10 px-3 py-2">
                    n
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">8</td>
                  <td className="border-b border-white/10 px-3 py-2">11</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">11</td>
                  <td className="border-b border-white/10 px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">12</td>
                  <td className="border-b border-white/10 px-3 py-2">14</td>
                </tr>
                <tr>
                  <td className="border-b border-white/10 px-3 py-2">14</td>
                  <td className="border-b border-white/10 px-3 py-2">15</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">15</td>
                  <td className="px-3 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ExampleBlock>

        <MustKnow>
          Prefer constraints that shrink the search fast: perfect squares for roots,
          multiples for divisibility, and odd/even logic for sums. Once a valid pair
          appears, you’re done—there won’t be a second.
        </MustKnow>

        <p className="text-gray-300">
          Takeaway: turn the story into an equation, simplify, then mine the table
          intelligently. That’s the quickest route to the unique consistent pair.
        </p>
      </article>
    </main>
  );
}