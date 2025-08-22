Here’s a production-ready Next.js page that rewrites your provided HTML into our design system, is fully responsive, accessible, and uses KaTeX for math rendering. I’ve also added a tiny client-side Math component to render equations with KaTeX.

File: app/(stats)/statistics/14-11-standard-deviation-zero/page.tsx
------------------------------------------------------------------
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MathInline, MathBlock } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "14.11 When the Standard Deviation Is Zero | Statistics",
  description:
    "Understand when a data set’s standard deviation is zero and how to recognize disguised cases. Includes a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.11 When the Standard Deviation Is Zero
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You won’t be asked to compute the standard deviation on the GMAT, but
          you should be able to decide when it equals zero. This happens exactly
          when every item in the set matches the mean—that is, when all entries
          are identical.
        </p>

        <MustKnow>
          The standard deviation of a set is zero if and only if every value in
          the set is the same. Equivalently, all values equal the mean.
        </MustKnow>

        <section aria-labelledby="examples-of-zero-sd" className="space-y-3">
          <h3 id="examples-of-zero-sd" className="sr-only">
            Examples where standard deviation is zero
          </h3>
          <p>
            For example, consider these sets:
          </p>
          <div className="space-y-2">
            <MathBlock expr={`\\text{Set A} = \\{4,\\,4,\\,4,\\,4\\}`} />
            <p className="text-gray-400">
              Every entry is 4, so the spread is zero.
            </p>
            <MathBlock expr={`\\text{Set B} = \\{x,\\,x,\\,x,\\,x\\}`} />
            <p className="text-gray-400">
              Even though x could be any number, all entries are equal, so the
              standard deviation is still 0.
            </p>
          </div>
        </section>

        <p>
          On harder problems, the test may disguise this idea. Your job is to
          spot when all values must coincide, directly or indirectly.
        </p>

        <ExampleCard
          number={68}
          title="When is the standard deviation of X equal to zero?"
          statements={[
            "Set X = {a, b, c, d}, where a, b, c, and d are positive integers. What is the standard deviation of set X?",
            "1) a + b + d = 3",
            "2) c/d = 1",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                The standard deviation is 0 precisely when all four values are
                identical. We’ll test each statement for sufficiency.
              </p>

              <p>
                <strong>Statement (1):</strong> a + b + d = 3, with a, b, d
                positive integers. The only way this is true is{" "}
                <MathInline expr={`a=b=d=1`} />. However, c is unrestricted.
                If c = 1, all four values match and the standard deviation is 0; if c = 2, the values differ and the standard deviation is positive. So (1) alone is not sufficient.
              </p>

              <p>
                <strong>Statement (2):</strong>{" "}
                <MathInline expr={`\\frac{c}{d} = 1`} /> implies{" "}
                <MathInline expr={`c=d`} />. The other values (a and b) are not
                constrained to match c and d, so the set may or may not be all
                equal. Thus (2) alone is not sufficient.
              </p>

              <p>
                <strong>Together:</strong> From (1),{" "}
                <MathInline expr={`a=b=d=1`} />. From (2),{" "}
                <MathInline expr={`c=d`} />, hence c = 1. Therefore a = b = c =
                d = 1, so the standard deviation is 0. Combined, the statements
                are sufficient.
              </p>

              <p>
                Correct answer: <strong>C</strong>.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: if the information forces all entries to be the same
          value, the standard deviation must be zero. If any value can differ,
          the standard deviation is nonzero or indeterminable from the data.
        </p>
      </article>
    </main>
  );
}


File: components/ui/Math.tsx
--------------------------------
"use client";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

type MathProps = { expr: string; ariaLabel?: string };

export function MathInline({ expr, ariaLabel }: MathProps) {
  return <InlineMath math={expr} aria-label={ariaLabel ?? "math expression"} />;
}

export function MathBlock({ expr, ariaLabel }: MathProps) {
  return (
    <div className="my-2 overflow-x-auto">
      <BlockMath math={expr} aria-label={ariaLabel ?? "math expression"} />
    </div>
  );
}

Notes and implementation details
- Content rewritten: All explanatory text and the example solution are paraphrased to avoid copyright issues while preserving meaning.
- Design system: Uses existing MustKnow and ExampleCard components and Tailwind classes for consistent spacing, color, and typography.
- Accessibility: Semantic headings, aria-labels on math, keyboard-safe layout, and readable color contrast.
- Responsiveness: Layout is fluid with max-width container and responsive spacing. Math blocks wrap horizontally if needed.
- KaTeX: MathInline and MathBlock render equations via react-katex and import KaTeX CSS in a client component.
- Next.js conventions: Page is a server component by default; KaTeX rendering is encapsulated in a small client component to keep SSR fast. Metadata exported for SEO.