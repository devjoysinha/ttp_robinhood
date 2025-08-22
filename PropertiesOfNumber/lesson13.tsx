import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6.2 Addition with Positive Numbers | Properties of Numbers",
  description:
    "Learn what happens when you add positive numbers, how to combine like terms with positive coefficients, and see quick examples with clear reasoning.",
};

function KInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
  });
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
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.2 Addition When Both Numbers Are Positive
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you add positive quantities, the result remains positive and gets
          larger. In other words, if both addends are above zero, the sum will
          also be above zero and greater than either addend.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Positive plus positive stays positive.
            </p>
            <p>
              Formally:{" "}
              <KInline expr="x &gt; 0 \text{ and } y &gt; 0 \implies x + y &gt; 0" />
            </p>
            <p>
              Adding positives increases magnitude:{" "}
              <KInline expr="x &gt; 0 \text{ and } y &gt; 0 \implies x + y &gt; \max(x,y)" />
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="examples-heading" className="space-y-3">
          <h3
            id="examples-heading"
            className="text-base font-semibold text-gray-200"
          >
            Quick examples
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <KInline expr="5 + 8 = 13" ariaLabel="5 plus 8 equals 13" />
            </li>
            <li>
              Combine like terms (same variable):{" "}
              <KInline expr="2x + 7x = 9x" ariaLabel="2 x plus 7 x equals 9 x" />
            </li>
            <li>
              Combine like terms (same variables and powers):{" "}
              <KInline
                expr="5xy + 100xy = 105xy"
                ariaLabel="5 x y plus 100 x y equals 105 x y"
              />
            </li>
          </ul>
          <p>
            In general, when terms are “like” (same variable part), you add the
            coefficients: <KInline expr="ax + bx = (a + b)x" />. If{" "}
            <KInline expr="a &gt; 0" /> and <KInline expr="b &gt; 0" />, then{" "}
            <KInline expr="(a+b) &gt; 0" />, so the combined term is also
            positive.
          </p>
          <KBlock
            expr="\text{If } a,b &gt; 0 \text{, then } a + b &gt; 0 \text{ and } a + b &gt; \max(a,b)."
            ariaLabel="If a and b are greater than zero, then a plus b is greater than zero and greater than the maximum of a and b."
          />
        </section>

        <MCQExample
          number={1}
          prompt="Let p and q be real numbers with p > 0 and q > 0. Which statement must be true?"
          options={[
            "p + q < p",
            "p + q = p",
            "p + q > max(p, q)",
            "p + q < 0",
            "p + q = |p − q|",
          ]}
          correct="p + q > max(p, q)"
          solution={
            <>
              <p>
                Since both addends are positive, the sum is positive and larger
                than each individual term. Thus{" "}
                <KInline expr="p + q &gt; p" /> and{" "}
                <KInline expr="p + q &gt; q" />, which implies{" "}
                <KInline expr="p + q &gt; \max(p,q)" />.
              </p>
              <p>
                The other choices contradict these facts: the sum cannot be less
                than one of the addends, cannot equal a single addend unless the
                other is zero (not allowed here), cannot be negative, and does
                not generally equal <KInline expr="|p - q|" />.
              </p>
            </>
          }
        />

        <section aria-labelledby="takeaway-heading" className="space-y-2">
          <h3
            id="takeaway-heading"
            className="text-base font-semibold text-gray-200"
          >
            Key takeaway
          </h3>
          <p>
            When adding positive numbers, keep the positive sign and add the
            magnitudes. For like algebraic terms, add the coefficients and keep
            the common variable part.
          </p>
        </section>
      </article>
    </main>
  );
}