import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.6 Arranging Decimals by Size | Essential GMAT Quant Skills",
  description:
    "Learn a reliable, fast method to order decimals between 0 and 1 by comparing digits place-by-place. Includes a quick multiple-choice drill with a clear, step-by-step solution.",
};

// Lightweight inline KaTeX renderer for accessible math
function K({
  expr,
  display = false,
  className = "",
  label,
}: {
  expr: string;
  display?: boolean;
  className?: string;
  label?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      className={className}
      aria-label={label || expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.6 Arranging Decimals by Size
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On many GMAT problems you’ll need to sort decimals between 0 and 1. The
          quickest way is to compare the digits from left to right, starting at the
          tenths place. If two decimals have different lengths, add trailing zeros to
          the shorter one so their places line up, for example{" "}
          <K expr="0.907 = 0.9070" />.
        </p>

        <p>
          Consider comparing 0.9098 and 0.907. First, align the places:{" "}
          <K expr="0.907 = 0.9070" />. Now scan:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>Tenths: both are 9</li>
          <li>Hundredths: both are 0</li>
          <li>
            Thousandths differ: 9 vs 7, and <K expr="9>7" />. Therefore{" "}
            <K expr="0.9098 > 0.9070" />.
          </li>
        </ul>

        <MustKnow>
          To order decimals between 0 and 1, compare digits place-by-place from the
          tenths position. The first position where the digits differ decides which
          number is larger. Padding with zeros on the right (for example,{" "}
          <K expr="0.7 = 0.7000" />) never changes a number’s value.
        </MustKnow>

        <MCQExample
          number={52}
          prompt="Which of the following numbers is the third largest?"
          options={["0.707", "0.7077", "0.7", "0.7007", "0.77"]}
          correct="0.707"
          solution={
            <>
              <p>
                Normalize each number by padding zeros as needed:{" "}
                <K expr="0.7 = 0.7000" /> and <K expr="0.707 = 0.7070" />. Now compare
                left to right (tenths, hundredths, thousandths, …):
              </p>
              <p>
                In order from greatest to least:{" "}
                <K expr="0.77 > 0.7077 > 0.7070 > 0.7007 > 0.7000" />.
              </p>
              <p>
                The third largest is <K expr="0.7070" label="0.7070 (i.e., 0.707)" />{" "}
                (that is, 0.707).
              </p>
            </>
          }
        />

        <p>
          Takeaway: for decimals in the interval (0, 1), the digit closest to the
          decimal point has the most influence. Align the places, find the first point
          of difference, and you can rank quickly without converting to fractions.
        </p>
      </article>
    </main>
  );
}