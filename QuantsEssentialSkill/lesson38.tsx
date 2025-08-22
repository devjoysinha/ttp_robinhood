import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ children }: { children: string }) {
  const html = katex.renderToString(children, { throwOnError: false, displayMode: false });
  return <span role="math" aria-label={children} dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ children }: { children: string }) {
  const html = katex.renderToString(children, { throwOnError: false, displayMode: true });
  return <div role="math" aria-label={children} className="my-3" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "2.14 Number Line and Signed Numbers | Essential GMAT Quant",
  description:
    "Master how to compare signed numbers on the number line, including a reliable method for ranking negative fractions. Includes an MCQ with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12" aria-labelledby="page-title">
      <header className="mb-8">
        <h1 id="page-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.14 The Number Line and Signed Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A number line places zero at the center. Every point to the right of 0 represents a positive number, and
          every point to the left represents a negative number. Zero itself is neither positive nor negative. These are
          called signed numbers, and comparing them is mostly about position: farther right means larger, farther left
          means smaller.
        </p>

        <MustKnow>
          The ordering rule for the number line is simple: numbers to the right are greater than numbers to the left.
          For two negative numbers, the value closer to zero is larger, and the one farther from zero (more left) is
          smaller.
        </MustKnow>

        <section aria-labelledby="compare-negatives">
          <h3 id="compare-negatives" className="text-xl font-semibold text-white">
            Comparing Negative Fractions Quickly
          </h3>
          <p className="mt-2">
            When you must rank negative fractions, a dependable shortcut is to ignore the minus sign first:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Compare their positive counterparts.</li>
            <li>The larger positive fraction corresponds to the smaller negative fraction (because it lies farther left).</li>
          </ul>

          <p className="mt-2">
            For instance, which is smaller, <MathInline>{String.raw`-\frac{1}{9}`}</MathInline> or{" "}
            <MathInline>{String.raw`-\frac{1}{7}`}</MathInline>? Since{" "}
            <MathInline>{String.raw`\frac{1}{7} > \frac{1}{9}`}</MathInline>, it follows that{" "}
            <MathInline>{String.raw`-\frac{1}{7} < -\frac{1}{9}`}</MathInline>. So{" "}
            <MathInline>{String.raw`-\frac{1}{7}`}</MathInline> is the smaller value.
          </p>

          <p>
            Another example: Which is smaller, <MathInline>{String.raw`-\frac{14}{99}`}</MathInline> or{" "}
            <MathInline>{String.raw`-\frac{15}{100}`}</MathInline>? Compare their positives by cross-multiplying:
          </p>
          <MathBlock>{String.raw`14 \cdot 100 = 1400 \quad\text{and}\quad 15 \cdot 99 = 1485`}</MathBlock>
          <p>
            Because <MathInline>{String.raw`\frac{15}{100} > \frac{14}{99}`}</MathInline>, the negatives reverse the
            order: <MathInline>{String.raw`-\frac{15}{100} < -\frac{14}{99}`}</MathInline>. Thus{" "}
            <MathInline>{String.raw`-\frac{15}{100}`}</MathInline> is smaller.
          </p>
        </section>

        <MCQExample
          number={78}
          prompt="Which of the following numbers is the smallest?"
          options={["-5/6", "-3/4", "-1/2", "-6/7", "-1/9"]}
          correct="-6/7"
          solution={
            <>
              <p>
                A fast way to rank negatives is to compare their absolute values first and then reverse the order. Viewed
                as positive fractions, we have:
              </p>
              <MathBlock>{String.raw`\frac{6}{7} > \frac{5}{6} > \frac{3}{4} > \frac{1}{2} > \frac{1}{9}`}</MathBlock>
              <p>
                Because the actual numbers are negative, the order flips. Therefore,{" "}
                <MathInline>{String.raw`-\frac{6}{7}`}</MathInline> is the farthest left (most negative) and thus the
                smallest. Answer: D.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big Picture
          </h3>
          <p className="mt-2">
            Comparing signed numbers is about where they sit on the line. Rightward is larger, leftward is smaller. For
            negatives specifically, the value with the greater absolute magnitude is actually the smaller number.
          </p>
        </section>
      </article>
    </main>
  );
}