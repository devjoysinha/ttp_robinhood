import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.6.1 Median of an Even Number of Terms | Statistics",
  description:
    "Learn how to find the median for even- and odd-sized sets. Includes two quick multiple‑choice examples with full reasoning and KaTeX-rendered formulas.",
};

function MathExpr({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.6.1 Median of an Even Number of Terms
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The median is the center of a list once the values are sorted. For an
          even number of entries, there isn’t a single middle element—so the
          median is the average of the two central values. Note that this
          average does not have to be a value from the original set.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="m-0">
              After sorting a set with an even count, let the ordered values be{" "}
              <MathExpr expr="a_1 \le a_2 \le \dots \le a_{2m}" ariaLabel="a sub 1 through a sub 2m" />
              . The median is
            </p>
            <div className="mt-1">
              <MathExpr
                display
                expr="\text{median}=\dfrac{a_m+a_{m+1}}{2}"
                ariaLabel="median equals the average of a sub m and a sub m plus 1"
              />
            </div>
          </div>
        </MustKnow>

        <MCQExample
          number={38}
          prompt="Set B = {3, 6, 9, 10, -1, -8, 5, 14}. What is the median of B?"
          options={["4.5", "5", "5.5", "6", "7"]}
          correct="5.5"
          solution={
            <>
              <p className="m-0">
                Sort first: −8, −1, 3, 5, 6, 9, 10, 14. With 8 terms, take the
                average of the 4th and 5th values. That gives
              </p>
              <p className="mt-2">
                <MathExpr
                  display
                  expr="\text{median}=\dfrac{5+6}{2}=\dfrac{11}{2}=5.5"
                  ariaLabel="median equals open parenthesis five plus six close parenthesis over two equals eleven over two equals five point five"
                />
              </p>
              <p className="m-0">So, the median is 5.5.</p>
            </>
          }
        />

        <p className="pt-2">
          For a quick contrast, when a set has an odd number of terms, the
          median is simply the one value sitting in the middle after sorting—no
          averaging required.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="m-0">
              In an ordered list with an odd count{" "}
              <MathExpr expr="(2m+1)" ariaLabel="two m plus one" />
              , the median is the single middle term{" "}
              <MathExpr expr="a_{m+1}" ariaLabel="a sub m plus 1" />.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={39}
          prompt="Set A = {3, 6, 9, 10, -1, -8, 5}. What is the median of A?"
          options={["3", "4", "5", "6", "7"]}
          correct="5"
          solution={
            <>
              <p className="m-0">
                Sort the values: −8, −1, 3, 5, 6, 9, 10. There are 7 numbers,
                so the median is the 4th entry, which is 5.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: always sort first. With an even count, average the two
          central values; with an odd count, take the one right in the middle.
        </p>
      </article>
    </main>
  );
}