import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Client-only KaTeX renderers for accessible math
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "7.7.2 Using a Growth Table for Linear Growth | General Word Problems",
  description:
    "Solve linear growth questions by organizing values in a period-by-period table. Includes two multiple‑choice examples with clear reasoning and KaTeX-rendered equations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.7.2 Using a Growth Table to Solve Linear Growth
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In linear growth, a fixed increment is added to an initial amount in
          every period. Rather than jumping to a formula, you can often list
          values in a small table period by period to keep the arithmetic
          transparent and avoid mistakes—especially when the number of periods
          is modest.
        </p>

        <MustKnow>
          Linear growth means “start value + the same add-on each period.” A
          quick growth table lets you track that add-on step by step and see the
          total after any number of periods.
        </MustKnow>

        <MCQExample
          number={41}
          prompt="On January 1, 2000, a tree was 4 feet tall. The tree grew by 2 feet each year. How tall was the tree on January 1, 2005?"
          options={["6 feet", "12 feet", "14 feet", "18 feet", "20 feet"]}
          correct="14 feet"
          solution={
            <>
              <p>
                Build a short table. The starting height is 4 ft on Jan 1,
                2000. From Jan 2000 to Jan 2005 is 5 full years of growth:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>2000 → 4 ft</li>
                <li>2001 → 6 ft</li>
                <li>2002 → 8 ft</li>
                <li>2003 → 10 ft</li>
                <li>2004 → 12 ft</li>
                <li>2005 → 14 ft</li>
              </ul>
              <p className="mt-3">
                Algebraically, that’s{" "}
                <InlineMath math={"4 + 5\\times 2 = 14"} />. So the height on
                Jan 1, 2005 is 14 feet.
              </p>
            </>
          }
        />

        <p>
          Some linear-growth questions are cleaner if you write a simple
          expression for the value after <InlineMath math={"n"} /> periods and
          then use the relationship in the prompt to solve for the common
          difference.
        </p>

        <MCQExample
          number={42}
          prompt="A portfolio increases by the same dollar amount every year. After year 8, its value is 5/4 of its value after year 5. If the portfolio started at $100, which choice is closest to the yearly increase?"
          options={["$0.14", "$1.40", "$14", "$140", "$144"]}
          correct="$14"
          solution={
            <>
              <p>
                Let <InlineMath math={"x"} /> be the constant yearly increase.
                With a starting value of 100, the value after year{" "}
                <InlineMath math={"n"} /> is <InlineMath math={"100 + nx"} />.
              </p>
              <BlockMath
                math={
                  String.raw`100 + 8x = \frac{5}{4}\bigl(100 + 5x\bigr)
\\ 400 + 32x = 500 + 25x
\\ 7x = 100
\\ x = \frac{100}{7} \approx 14.29`
                }
              />
              <p>
                The closest option is <strong>$14</strong>.
              </p>
            </>
          }
        />

        <MustKnow>
          Template for linear growth: after <InlineMath math={"n"} /> periods,
          value = initial + <InlineMath math={"n\\times"} />(constant
          increase). Write that down first, then plug in any relationships given
          in the problem.
        </MustKnow>

        <p className="text-gray-300">
          Bottom line: a small table is fast and reliable for a handful of
          periods; an expression like <InlineMath math={"100 + nx"} /> is more
          flexible when the prompt relates values from different times.
        </p>
      </article>
    </main>
  );
}