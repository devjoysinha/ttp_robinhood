import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    output: "htmlAndMathml",
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "6.16 Inequalities with x^2 vs |x| | Quant",
  description:
    "See how inequalities involving x^2 compare to those with |x|, including how to isolate variables safely and a worked multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.16 Inequalities with x<sup>2</sup> vs. |x|
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inequalities with squares and absolute values behave similarly in one
          crucial way: both{" "}
          <MathInline expr="x^2" ariaLabel="x squared" /> and{" "}
          <MathInline expr="\lvert x \rvert" ariaLabel="absolute value of x" />{" "}
          are never negative, no matter what x is. The key difference is how we
          isolate x.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              To solve inequalities with a square, you typically “unsquare” by
              taking square roots and split the solution into two directions.
            </li>
            <li>
              For absolute-value inequalities, you split into two linear cases
              directly from the definition of{" "}
              <MathInline expr="\lvert x \rvert" />.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="compare-examples">
          <h3 id="compare-examples" className="sr-only">
            Comparing examples
          </h3>

          <p className="mt-2">
            For instance, if <MathInline expr="x^2 > 4" />, taking square roots
            yields:
          </p>
          <MathBlock expr="x > \sqrt{4}\quad \text{or}\quad x < -\sqrt{4}" />
          <p>which simplifies to</p>
          <MathBlock expr="x > 2\quad \text{or}\quad x < -2" />

          <p className="mt-4">
            On the other hand, with <MathInline expr="\lvert x \rvert > 4" />, no
            square root is needed; by definition of absolute value,
          </p>
          <MathBlock expr="x > 4\quad \text{or}\quad x < -4" />
        </section>

        <section aria-labelledby="mcq-46">
          <h3 id="mcq-46" className="sr-only">
            Practice question
          </h3>
          <MCQExample
            number={46}
            prompt="If |x| > 3 and y^2 < 4, which of the following must be true?"
            options={[
              "x > y",
              "y > x",
              "x > -y",
              "x^2 > y^2",
              "x^2 < y^2",
            ]}
            correct="x^2 > y^2"
            solution={
              <>
                <p>
                  From <MathInline expr="\lvert x \rvert > 3" /> we have{" "}
                  <MathInline expr="x > 3" /> or <MathInline expr="x < -3" />.
                  Hence <MathInline expr="x^2 > 9" />.
                </p>
                <p className="mt-2">
                  From <MathInline expr="y^2 < 4" />, it follows that{" "}
                  <MathInline expr="-2 < y < 2" /> and therefore{" "}
                  <MathInline expr="y^2 < 4" />. Combining the two results gives{" "}
                  <MathInline expr="x^2 > 9 > 4 > y^2" />, so{" "}
                  <strong>
                    <MathInline expr="x^2 > y^2" />
                  </strong>{" "}
                  must be true.
                </p>
                <p className="mt-2">
                  The other statements can fail depending on whether{" "}
                  <MathInline expr="x" /> is greater than 3 or less than −3 and
                  where <MathInline expr="y" /> lies in <MathInline expr="(-2,2)" />.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: treat <MathInline expr="x^2" /> and{" "}
          <MathInline expr="\lvert x \rvert" /> with care when isolating x.
          Squared inequalities require square roots and two branches; absolute
          values split into two linear cases by definition.
        </p>
      </article>
    </main>
  );
}