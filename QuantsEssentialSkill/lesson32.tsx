```tsx
// app/(quant)/essential-skills/squares-and-square-roots-of-fractions/page.tsx
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.10.2 Squares and Square Roots of Fractions | Essential GMAT Quant Skills",
  description:
    "How to square fractions and take square roots of fractions safely and efficiently, including the role of parentheses and two must‑know rules. Includes a practice MCQ with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.10.2 Squares and Square Roots of Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Squaring a fraction or taking the square root of a fraction is
          straightforward as long as you keep parentheses and order of
          operations in check. When you square a fraction, the exponent applies
          to both the numerator and the denominator; when you take a square
          root, the root can distribute across the fraction under the right
          conditions.
        </p>

        <section aria-labelledby="examples-intro" className="space-y-3">
          <h3 id="examples-intro" className="text-lg font-semibold text-white">
            Quick sanity checks
          </h3>

          <p>
            Example of squaring a fraction:
          </p>
          <BlockMath math="\,\left(\frac{2}{3}\right)^2 \;=\; \frac{2}{3}\cdot\frac{2}{3}\;=\;\frac{4}{9}" />

          <p>
            You can also view it as raising numerator and denominator to the
            power:
          </p>
          <BlockMath math="\,\left(\frac{a}{b}\right)^2 \;=\; \frac{a^2}{b^2},\quad b\neq 0" />

          <p>
            Parentheses matter. If you omit them, you might square only the
            numerator:
          </p>
          <BlockMath math="\,\frac{2^2}{3} \;=\; \frac{4}{3}\;\neq\;\left(\frac{2}{3}\right)^2 \;=\; \frac{4}{9}" />

          <p>Square root of a fraction:</p>
          <BlockMath math="\,\sqrt{\frac{4}{9}} \;=\; \frac{\sqrt{4}}{\sqrt{9}} \;=\; \frac{2}{3}" />
        </section>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              If <InlineMath math="b\neq 0" /> then{" "}
              <InlineMath math="\left(\frac{a}{b}\right)^2=\frac{a^2}{b^2}" />.
              Use parentheses so the exponent applies to the entire fraction.
            </li>
            <li>
              If <InlineMath math="x\ge 0" /> and <InlineMath math="y>0" />, then{" "}
              <InlineMath math="\sqrt{\frac{x}{y}}=\frac{\sqrt{x}}{\sqrt{y}}" />.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="why-parentheses" className="space-y-3">
          <h3 id="why-parentheses" className="text-lg font-semibold text-white">
            Why parentheses are non‑negotiable
          </h3>
          <p>
            Without parentheses, an expression like{" "}
            <InlineMath math="2/3^2" /> is interpreted as{" "}
            <InlineMath math="2\div 3^2=2/9" />, not{" "}
            <InlineMath math="(2/3)^2" />. To square a fraction correctly, wrap
            the fraction before applying the exponent:
          </p>
          <BlockMath math="\,\left(\frac{2}{3}\right)^2=\frac{2^2}{3^2}=\frac{4}{9}" />
        </section>

        <section aria-labelledby="root-rule" className="space-y-3">
          <h3 id="root-rule" className="text-lg font-semibold text-white">
            Distributing the square root over a fraction
          </h3>
          <p>
            When the numerator is non‑negative and the denominator is positive,
            the square root can distribute across the fraction:
          </p>
          <BlockMath math="\,\sqrt{\frac{x}{y}}=\frac{\sqrt{x}}{\sqrt{y}}\quad\text{for }x\ge 0,\;y>0" />
        </section>

        <MCQExample
          number={64}
          prompt={
            <>
              If <InlineMath math="x=2\frac{1}{4}" />, what is the value of{" "}
              <InlineMath math="x^2-\sqrt{x}" />?
            </>
          }
          options={[
            "Between 0 and 1",
            "Between 1 and 2",
            "Between 2 and 3",
            "Between 3 and 4",
            "Between 4 and 5",
          ]}
          correct="Between 3 and 4"
          solution={
            <>
              <p>Convert the mixed number to an improper fraction:</p>
              <BlockMath math="\,x=2\frac{1}{4}=\frac{2\cdot 4+1}{4}=\frac{9}{4}" />

              <p>Square x:</p>
              <BlockMath math="\,x^2=\left(\frac{9}{4}\right)^2=\frac{81}{16}" />

              <p>Take the square root of x:</p>
              <BlockMath math="\,\sqrt{x}=\sqrt{\frac{9}{4}}=\frac{3}{2}=\frac{24}{16}" />

              <p>Subtract:</p>
              <BlockMath math="\,x^2-\sqrt{x}=\frac{81}{16}-\frac{24}{16}=\frac{57}{16}=3+\frac{9}{16}\approx 3.5625" />

              <p>
                The result is between 3 and 4. Therefore, the correct choice is
                “Between 3 and 4.”
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-lg font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              To square a fraction, square both parts:{" "}
              <InlineMath math="(a/b)^2=a^2/b^2" />.
            </li>
            <li>
              Use parentheses so the exponent applies to the entire fraction.
            </li>
            <li>
              For <InlineMath math="x\ge 0" /> and <InlineMath math="y>0" />,{" "}
              <InlineMath math="\sqrt{x/y}=\sqrt{x}/\sqrt{y}" />.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
```