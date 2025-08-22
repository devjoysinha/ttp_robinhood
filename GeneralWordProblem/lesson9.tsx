import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.2.4 Money Problems | General Word Problems",
  description:
    "Turn checkout totals into equations, clear decimals, and solve with elimination. Includes a multiple‑choice café bill example with full KaTeX‑rendered work.",
};

// Simple KaTeX helper for inline/block math (assumes KaTeX CSS is loaded globally)
function Math({
  expr,
  inline = false,
  ariaLabel,
}: {
  expr: string;
  inline?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: !inline,
  });
  const Tag = inline ? "span" : "div";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel ?? expr}
      className={inline ? "katex-inline" : "katex-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2.4 Money problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Price‑mix questions appear often: you’re given totals for different
          bundles of items and asked to find the price of one item type. These
          are linear‑equation problems in disguise: define variables for each
          price, write one equation per bill, then solve the system.
        </p>

        <MustKnow>
          <ul className="list-disc pl-6">
            <li>
              Name your variables clearly (for example, s for a sandwich, c for
              a cup of soup).
            </li>
            <li>
              Eliminate decimals by multiplying both sides of an equation by a
              power of 10 (or work in cents).
            </li>
            <li>
              Line up coefficients and use elimination or substitution to solve.
            </li>
            <li>
              Always sanity‑check the result against the original totals.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={6}
          prompt="A café charges a fixed price for sandwiches and for soup. A receipt for 3 sandwiches and 2 cups of soup is $70.40. Another receipt for 2 sandwiches and 3 cups of soup is $61.60. What is the price of one sandwich?"
          options={["$8.16", "$8.80", "$9.40", "$13.20", "$17.60"]}
          correct="$17.60"
          solution={
            <>
              <p>Let s be the price of one sandwich and c be the price of one cup of soup.</p>

              <Math expr="3s + 2c = 70.40" />
              <Math expr="2s + 3c = 61.60" />

              <p>Clear decimals by multiplying each equation by 10:</p>
              <Math expr="30s + 20c = 704" />
              <Math expr="20s + 30c = 616" />

              <p>Use elimination to remove s. Multiply the first by −2 and the second by 3:</p>
              <Math expr="-60s - 40c = -1408" />
              <Math expr="60s + 90c = 1848" />

              <p>Add the equations:</p>
              <Math expr="50c = 440 \\,\\Rightarrow\\, c = 8.80" />

              <p>Substitute c back into 2s + 3c = 61.60:</p>
              <Math expr="2s + 3(8.80) = 61.60" />
              <Math expr="2s + 26.40 = 61.60" />
              <Math expr="2s = 35.20 \\,\\Rightarrow\\, s = 17.60" />

              <p>Therefore, one sandwich costs $17.60.</p>
            </>
          }
        />

        <p>
          Key takeaway: translate the purchase summaries into equations, remove
          decimals early, and eliminate one variable cleanly. The arithmetic
          stays simple when you align coefficients on purpose.
        </p>
      </article>
    </main>
  );
}