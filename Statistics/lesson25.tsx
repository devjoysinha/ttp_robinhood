import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: true,
  });
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? expr}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "14.6.2 Alternative Median Strategy | Statistics",
  description:
    "Pinpoint the median quickly in large data sets by jumping to the middle position(s). Includes two worked multiple‑choice examples with clear reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.6.2 A faster way to locate the median
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a list is long, it is inefficient to examine every entry to find
          the median. Instead, jump directly to the middle position(s). Use one
          rule when the number of terms is odd and another when it is even.
        </p>

        <MustKnow>
          For an ordered set with an odd number of terms n, the median sits at
          position <MathInline expr="(n+1)/2" ariaLabel="open parenthesis n plus 1 close parenthesis over 2" />.
          This is a position index, not the median’s value.
        </MustKnow>

        <section aria-labelledby="odd-example" className="space-y-4">
          <h3 id="odd-example" className="sr-only">
            Median position for odd n — example
          </h3>

          <MCQExample
            number={40}
            prompt="A store surveyed 95 shoppers about what they spent on holiday gifts: 15 spent $50, 20 spent $72, 10 spent $80, 12 spent $95, and 38 spent $100. What is the median amount spent?"
            options={["$50", "$72", "$80", "$95", "$100"]}
            correct="$95"
            solution={
              <>
                <p>
                  With n = 95 shoppers (odd), the median is at position{" "}
                  <MathInline expr="(95+1)/2=96/2=48" ariaLabel="95 plus 1 over 2 equals 48" />{" "}
                  in the sorted list.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Positions 1–15: $50</li>
                  <li>Positions 16–35: $72</li>
                  <li>Positions 36–45: $80</li>
                  <li>Positions 46–57: $95</li>
                  <li>Positions 58–95: $100</li>
                </ul>
                <p>
                  The 48th entry falls in the $95 block, so the median is $95.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          For an ordered set with an even number of terms n, the median is the
          average of the values at positions{" "}
          <MathInline expr="n/2" ariaLabel="n over 2" /> and{" "}
          <MathInline expr="(n+2)/2" ariaLabel="open parenthesis n plus 2 close parenthesis over 2" />.
          Again, those are positions, not values.
        </MustKnow>

        <section aria-labelledby="even-example" className="space-y-4">
          <h3 id="even-example" className="sr-only">
            Median positions for even n — example
          </h3>

          <MCQExample
            number={41}
            prompt={
              "On a certain day, a food stand sold items at these prices and quantities: 5 hot dogs at $3.45, 24 hamburgers at $3.85, 12 chicken sandwiches at $3.95, 21 sausage sandwiches at $4.05, and 20 fish sandwiches at $4.15. What was the median price per item among all items sold that day?"
            }
            options={["$3.45", "$3.95", "$4.00", "$4.05", "$4.15"]}
            correct="$4.00"
            solution={
              <>
                <p>
                  The total number of items is{" "}
                  <MathInline expr="5+24+12+21+20=82" ariaLabel="5 plus 24 plus 12 plus 21 plus 20 equals 82" />{" "}
                  (even). The median is the average of the values at positions{" "}
                  <MathInline expr="n/2=82/2=41" ariaLabel="82 over 2 equals 41" />{" "}
                  and{" "}
                  <MathInline
                    expr="(n+2)/2=(82+2)/2=42"
                    ariaLabel="open parenthesis 82 plus 2 close parenthesis over 2 equals 42"
                  />
                  .
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Items 1–5: $3.45 (hot dogs)</li>
                  <li>Items 6–29: $3.85 (hamburgers)</li>
                  <li>Items 30–41: $3.95 (chicken)</li>
                  <li>Items 42–62: $4.05 (sausage)</li>
                  <li>Items 63–82: $4.15 (fish)</li>
                </ul>
                <p>
                  The 41st item costs $3.95 and the 42nd costs $4.05, so the
                  median is{" "}
                  <MathInline
                    expr="(3.95+4.05)/2=8.00/2=4.00"
                    ariaLabel="3.95 plus 4.05 over 2 equals 4.00"
                  />{" "}
                  dollars.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="sr-only">
            Key takeaway
          </h3>
          <p>
            Bottom line: focus on positions, not arithmetic. Find the middle
            location(s) first, then read the corresponding value(s) to get the
            median.
          </p>
        </section>

        <section aria-labelledby="formulas" className="space-y-2">
          <h3 id="formulas" className="sr-only">
            Median formulas (KaTeX)
          </h3>
          <MathBlock
            expr="\text{Odd } n:\quad \text{median at position } \frac{n+1}{2}"
            ariaLabel="For odd n, the median is at position open parenthesis n plus 1 close parenthesis over 2"
          />
          <MathBlock
            expr="\text{Even } n:\quad \text{median is the average of positions } \frac{n}{2}\ \text{and}\ \frac{n+2}{2}"
            ariaLabel="For even n, the median is the average of the values at positions n over 2 and open parenthesis n plus 2 close parenthesis over 2"
          />
        </section>
      </article>
    </main>
  );
}