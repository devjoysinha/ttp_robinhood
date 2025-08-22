import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.4.1 Adding and Subtracting Decimals | Essential GMAT Quant Skills",
  description:
    "Learn the reliable way to add and subtract decimals: align the decimal points, optionally pad with zeros, then compute. Includes one multiple‑choice example with a clear, KaTeX‑rendered solution.",
};

export default function Page() {
  // KaTeX-rendered equation (display mode) for the worked example
  const sumDisplay = katex.renderToString("4.443 + 17.200 + 1.030 = 22.673", {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.4.1 Adding and Subtracting Decimals
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The safest way to add or subtract decimal numbers is to place the decimal
          points in a vertical line, then carry out the operation column by column.
          If one number has fewer decimal places, you can append zeros so the digits
          line up neatly—this doesn’t change the value, it just makes the arithmetic
          cleaner.
        </p>

        <MustKnow>
          When working with decimals, align the decimal points first. Add trailing
          zeros as needed to match decimal places, then add or subtract digit by digit.
          Zero padding does not affect the number’s value; it only improves alignment.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Evaluate 4.443 + 17.2 + 1.03."
          options={["0.0022673", "0.022673", "0.22673", "2.2673", "22.673"]}
          correct="22.673"
          solution={
            <>
              <p>
                Line up the decimal points. To make the columns consistent, write
                17.2 as 17.200 and 1.03 as 1.030. Adding zeros does not change the
                values—it simply standardizes the number of decimal places.
              </p>
              <div
                className="katex-block my-3"
                role="img"
                aria-label="4.443 plus 17.200 plus 1.030 equals 22.673"
                dangerouslySetInnerHTML={{ __html: sumDisplay }}
              />
              <p>
                Summing the aligned values gives 22.673. Therefore, the correct choice
                is 22.673.
              </p>
            </>
          }
        />

        <p>
          Subtraction follows the same idea: align the decimal points, add zeros
          where helpful, and subtract one column at a time, regrouping if necessary.
          Keeping the decimals aligned prevents place‑value mistakes.
        </p>
      </article>
    </main>
  );
}