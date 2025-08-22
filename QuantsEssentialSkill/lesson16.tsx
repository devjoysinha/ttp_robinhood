import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

/**
 * Note: Ensure KaTeX CSS is loaded globally once in your app (e.g., app/layout.tsx):
 * import "katex/dist/katex.min.css";
 */

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: false,
    throwOnError: false,
  });
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className="mx-[2px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: true,
    throwOnError: false,
  });
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.3 Add/Subtract a Constant in Fractions | Essential GMAT Quant",
  description:
    "Learn why scaling a fraction by the same nonzero constant preserves its value, why adding/subtracting changes it, and how these moves push a positive fraction toward or away from 1. Includes a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.3 Adding or Subtracting the Same Constant to a Fraction’s Numerator and Denominator
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Scaling a fraction by multiplying or dividing both the numerator and the denominator by the same nonzero constant does not change its value. For instance,
          <MathInline expr="\,\frac{2}{3}\," ariaLabel="two thirds" /> multiplied by 4 becomes
          <MathInline expr="\frac{8}{12}" ariaLabel="eight twelfths" />, and those are equal:
          <MathInline expr="\frac{8}{12}=\frac{2}{3}" ariaLabel="eight twelfths equals two thirds" />.
          Likewise, dividing <MathInline expr="\frac{9}{12}" ariaLabel="nine twelfths" /> by 3 yields
          <MathInline expr="\frac{3}{4}" ariaLabel="three fourths" />, so
          <MathInline expr="\frac{9}{12}=\frac{3}{4}" ariaLabel="nine twelfths equals three fourths" />.
        </p>

        <MustKnow>
          Multiplying or dividing both parts of a fraction by the same nonzero constant leaves the fraction’s value unchanged.
        </MustKnow>

        <p>
          In contrast, adding or subtracting the same nonzero constant to the numerator and denominator changes the value. For example, starting from
          <MathInline expr="\frac{2}{3}" ariaLabel="two thirds" />, adding 4 to both parts gives
          <MathInline expr="\frac{6}{7}" ariaLabel="six sevenths" />, which is not equal to
          <MathInline expr="\frac{2}{3}" ariaLabel="two thirds" />. Similarly, from
          <MathInline expr="\frac{9}{12}" ariaLabel="nine twelfths" />, subtracting 3 from numerator and denominator yields
          <MathInline expr="\frac{6}{9}" ariaLabel="six ninths" />, and
          <MathInline expr="\frac{6}{9}\neq\frac{9}{12}" ariaLabel="six ninths is not equal to nine twelfths" /> because
          <MathInline expr="\frac{6}{9}=\frac{2}{3}" ariaLabel="six ninths reduces to two thirds" /> while
          <MathInline expr="\frac{9}{12}=\frac{3}{4}" ariaLabel="nine twelfths reduces to three fourths" />.
        </p>

        <MustKnow>
          Adding to or subtracting from both the numerator and denominator by the same nonzero constant changes the fraction’s value.
        </MustKnow>

        <p>
          For positive fractions, these changes move the value predictably relative to 1:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Add a positive constant: the fraction moves toward 1. So if it’s less than 1, it increases; if it’s greater than 1, it decreases.
          </li>
          <li>
            Subtract a positive constant: the fraction moves away from 1, as long as the new numerator and denominator remain positive. So if it’s less than 1, it decreases; if it’s greater than 1, it increases.
          </li>
        </ul>

        <p>
          Quick checks:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            From <MathInline expr="\frac{3}{4}" ariaLabel="three fourths" />, add 6 to get
            <MathInline expr="\frac{9}{10}" ariaLabel="nine tenths" />, and indeed
            <MathInline expr="\frac{9}{10} &gt; \frac{3}{4}" ariaLabel="nine tenths is greater than three fourths" />.
          </li>
          <li>
            From <MathInline expr="\frac{3}{4}" ariaLabel="three fourths" />, subtract 2 to get
            <MathInline expr="\frac{1}{2}" ariaLabel="one half" />, and
            <MathInline expr="\frac{1}{2} &lt; \frac{3}{4}" ariaLabel="one half is less than three fourths" />.
          </li>
          <li>
            From <MathInline expr="\frac{10}{3}" ariaLabel="ten thirds" /> (greater than 1), subtract 1 to get
            <MathInline expr="\frac{9}{2}" ariaLabel="nine halves" />, which is larger than
            <MathInline expr="\frac{10}{3}" ariaLabel="ten thirds" />.
          </li>
        </ul>

        <MustKnow>
          If 0 &lt; fraction &lt; 1: adding a positive constant makes it larger; subtracting a positive constant makes it smaller (provided the result stays positive). If fraction &gt; 1: adding a positive constant makes it smaller; subtracting a positive constant makes it larger (again, assuming the result stays positive).
        </MustKnow>

        <section aria-labelledby="example-41">
          <h3 id="example-41" className="sr-only">
            Example 41
          </h3>
          <MCQExample
            number={41}
            prompt={
              <>
                If k and m are positive and <MathInline expr="m\neq 2" ariaLabel="m not equal to two" />, which of the following must be true?
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 font-semibold">I.</span>
                    <MathInline expr="\frac{1+k}{2+k} \;>\; \frac{1}{2}" ariaLabel="one plus k over two plus k greater than one half" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 font-semibold">II.</span>
                    <MathInline expr="\frac{1-m}{2-m} \;>\; \frac{1}{2}" ariaLabel="one minus m over two minus m greater than one half" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 font-semibold">III.</span>
                    <MathInline
                      expr="\frac{1+k}{2+k} \;>\; \frac{1-m}{2-m}"
                      ariaLabel="one plus k over two plus k greater than one minus m over two minus m"
                    />
                  </div>
                </div>
              </>
            }
            options={[
              "I only",
              "I and II",
              "II and III",
              "I and III",
              "I, II, and III",
            ]}
            correct="I only"
            solution={
              <>
                <p>
                  Statement I: Since k &gt; 0 and <MathInline expr="\frac{1}{2}" ariaLabel="one half" /> is a positive fraction less than 1, adding the same positive amount to top and bottom pushes the value toward 1. So
                  <MathInline expr="\frac{1+k}{2+k} &gt; \frac{1}{2}" ariaLabel="one plus k over two plus k greater than one half" />.
                </p>
                <p className="mt-2">
                  You can also verify algebraically:
                </p>
                <MathBlock expr="\frac{1+k}{2+k} \;>\; \frac{1}{2}\;\;\Longleftrightarrow\;\; 2(1+k) \;>\; 1(2+k)\;\;\Longleftrightarrow\;\; 2+2k \;>\; 2+k\;\;\Longleftrightarrow\;\; k\;>\;0" />
                <p>
                  which holds for positive k. Thus, I must be true.
                </p>
                <p className="mt-4">
                  Statement II: Try m = 1 (allowed, and m ≠ 2). Then
                  <MathInline expr="\frac{1-m}{2-m}=\frac{0}{1}=0" ariaLabel="one minus m over two minus m equals zero" />, which is not greater than
                  <MathInline expr="\frac{1}{2}" ariaLabel="one half" />. So II need not be true.
                </p>
                <p className="mt-4">
                  Statement III: Choose k = 1 and m = 3. Then
                  <MathInline expr="\frac{1+k}{2+k}=\frac{2}{3}" ariaLabel="two thirds" /> and
                  <MathInline expr="\frac{1-m}{2-m}=\frac{-2}{-1}=2" ariaLabel="two" />, and
                  <MathInline expr="\frac{2}{3} \not&gt; 2" ariaLabel="two thirds is not greater than two" />. So III need not be true.
                </p>
                <p className="mt-4">Only I must be true. Answer: I only.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: multiplying or dividing both parts by the same nonzero constant preserves a fraction’s value, while adding or subtracting a constant changes it. For positive fractions, those changes reliably move the value toward or away from 1, which is a fast way to compare before and after.
        </p>
      </article>
    </main>
  );
}