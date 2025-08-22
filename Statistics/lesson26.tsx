import type { Metadata } from "next";
import katex from "katex";
// Note: add `import "katex/dist/katex.min.css";` to app/layout.tsx (global CSS only)

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.6.3 When the Mean Equals the Median | Statistics",
  description:
    "See why any evenly spaced set has mean equal to median, and use the bookend shortcut to compute it quickly. Includes a quick multiple‑choice example.",
};

// Lightweight KaTeX component (SSR-friendly)
function Math({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? "mathematical formula"}
      className={block ? "my-3 block" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">14.6.3 When the Mean Equals the Median</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a set whose terms increase by a constant step (for example, consecutive integers, consecutive odds/evens,
          or consecutive multiples), the “center” of the set is perfectly balanced. Because of that symmetry, the
          average and the median coincide.
        </p>

        <MustKnow>
          In every evenly spaced set, the mean equals the median. A fast way to compute both is to average the first
          and last terms:
          <Math expr="\,\text{mean}=\text{median}=\dfrac{\text{first term}+\text{last term}}{2}" block />
        </MustKnow>

        <MCQExample
          number={42}
          prompt="What common value do the mean and the median share for the first 12 positive multiples of 4?"
          options={["24", "26", "32", "34", "36"]}
          correct="26"
          solution={
            <>
              <p>
                The set is {`{4, 8, 12, ..., 48}`}—an evenly spaced list with difference 4. For evenly spaced sets,
                the mean equals the median and can be found by averaging the endpoints:
              </p>
              <Math expr="\text{mean}=\text{median}=\dfrac{4+48}{2}" block ariaLabel="mean equals median equals open parenthesis four plus forty-eight close parenthesis over two" />
              <Math expr="=\;26" block ariaLabel="equals twenty six" />
              <p>Therefore, both the mean and the median are 26. Answer: 26.</p>
            </>
          }
        />

        <p>
          Takeaway: whenever a list is equally spaced, you can skip lengthy computations—just average the bookends to
          get both the mean and the median in one step.
        </p>
      </article>
    </main>
  );
}