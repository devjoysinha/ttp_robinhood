import type { Metadata } from "next";
import Head from "next/head";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.1.5 Subtracting a Fraction from a Whole Number | Essential GMAT Quant Skills",
  description:
    "How to subtract a fraction from a whole number: two reliable approaches (single-fraction form and mixed-number borrowing), with worked examples and a quick check question.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { displayMode: true, throwOnError: false });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet for proper math rendering */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        />
      </Head>

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.5 Subtracting a Fraction from a Whole Number
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          There are two efficient, GMAT‑friendly ways to subtract a fraction from a whole number:
          convert everything to a single fraction, or “borrow” 1 to work in mixed‑number form.
          Pick the version that matches the answer format you want.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Single‑fraction formula</p>
            <MathBlock
              expr="A - \dfrac{b}{c} \;=\; \dfrac{c\cdot A - b}{c}"
              ariaLabel="A minus b over c equals c times A minus b all over c"
            />
            <p className="text-sm text-gray-400">
              Use this when you want your result as one fraction (often simplest for computation).
            </p>
          </div>
        </MustKnow>

        <p className="mt-6">
          Example using the formula:
        </p>
        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <MathBlock
            expr="5 - \dfrac{3}{4} \;=\; \dfrac{4\cdot 5 - 3}{4} \;=\; \dfrac{20 - 3}{4} \;=\; \dfrac{17}{4}"
          />
          <MathBlock
            expr="6 - \dfrac{7}{3} \;=\; \dfrac{3\cdot 6 - 7}{3} \;=\; \dfrac{18 - 7}{3} \;=\; \dfrac{11}{3}"
          />
        </div>

        <p>
          If you prefer a mixed number, “borrow” 1 from the whole number and rewrite that 1 as{" "}
          <MathInline expr="\dfrac{c}{c}" ariaLabel="c over c" /> to match the denominator.
          Then subtract the fractions.
        </p>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <p className="font-semibold">Borrowing with a proper fraction</p>
          <p>
            Compute{" "}
            <MathInline expr="6 - \dfrac{2}{3}" ariaLabel="six minus two thirds" /> by writing
            <MathInline expr="\,6 = 5 + 1 = 5 + \dfrac{3}{3}" ariaLabel="six equals five plus one equals five plus three over three" />.
          </p>
          <MathBlock
            expr="6 - \dfrac{2}{3} \;=\; 5 + \dfrac{3}{3} - \dfrac{2}{3} \;=\; 5 + \dfrac{1}{3} \;=\; 5\dfrac{1}{3}"
          />
        </div>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <p className="font-semibold">Borrowing when subtracting an improper fraction</p>
          <p>
            Convert the fraction to a mixed number too. For example,{" "}
            <MathInline expr="6 - \dfrac{13}{3}" ariaLabel="six minus thirteen thirds" />:
          </p>
          <MathBlock
            expr="6 \;=\; 5 + \dfrac{3}{3}, \qquad \dfrac{13}{3} \;=\; 4 + \dfrac{1}{3}"
          />
          <MathBlock
            expr="6 - \dfrac{13}{3} \;=\; \Big(5 + \dfrac{3}{3}\Big) \;-\; \Big(4 + \dfrac{1}{3}\Big) \;=\; 1 + \Big(\dfrac{3}{3} - \dfrac{1}{3}\Big) \;=\; 1\dfrac{2}{3}"
          />
        </div>

        <p className="text-gray-300">
          Quick guidance: go with the single‑fraction formula when you want an exact fraction in
          simplest terms, and use borrowing when the final result should appear as a mixed number.
        </p>

        <MCQExample
          number={15}
          prompt={
            <>
              Let{" "}
              <MathInline expr="x = 1 + \dfrac{2}{3}" ariaLabel="x equals one plus two thirds" />
              ,{" "}
              <MathInline expr="y = 4 - \dfrac{5}{6}" ariaLabel="y equals four minus five sixths" />
              , and{" "}
              <MathInline expr="z = 7 - \dfrac{9}{8}" ariaLabel="z equals seven minus nine eighths" />
              . Which inequality is true?
            </>
          }
          options={[
            "x > y > z",
            "y > x > z",
            "y > z > x",
            "z > y > x",
            "z > x > y",
          ]}
          correct="z > y > x"
          solution={
            <>
              <p className="mb-2">
                Compare by rewriting as mixed numbers (borrowing 1 where helpful).
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <MathInline expr="x = 1 + \dfrac{2}{3} = 1\dfrac{2}{3}" ariaLabel="x equals one and two thirds" />
                </li>
                <li>
                  <MathInline
                    expr="y = 4 - \dfrac{5}{6} = 3 + \Big(\dfrac{6}{6} - \dfrac{5}{6}\Big) = 3\dfrac{1}{6}"
                    ariaLabel="y equals three and one sixth"
                  />
                </li>
                <li>
                  <MathInline
                    expr="z = 7 - \dfrac{9}{8} = 6 + \Big(\dfrac{8}{8} - \dfrac{1}{8}\Big) = 6\dfrac{7}{8}"
                    ariaLabel="z equals six and seven eighths"
                  />
                </li>
              </ul>
              <p className="mt-3">Thus, z is largest, then y, then x: z > y > x.</p>
            </>
          }
        />

        <ExampleCard
          number={16}
          title="Practice: Choose the smoother path"
          statements={[
            "Compute 5 − 11/4 in simplest form.",
            "Compute 9 − 1/7 as a mixed number.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p className="mb-2">
                For 5 − 11/4, the single‑fraction route is quicker:
              </p>
              <MathBlock expr="5 - \dfrac{11}{4} = \dfrac{4\cdot 5 - 11}{4} = \dfrac{20 - 11}{4} = \dfrac{9}{4}" />
              <p className="mt-4 mb-2">
                For 9 − 1/7, borrowing keeps it clean as a mixed number:
              </p>
              <MathBlock expr="9 - \dfrac{1}{7} = 8 + \Big(\dfrac{7}{7} - \dfrac{1}{7}\Big) = 8\dfrac{6}{7}" />
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: both methods are equivalent. Choose the one that minimizes steps for the format
          you need.
        </p>
      </article>
    </main>
  );
}