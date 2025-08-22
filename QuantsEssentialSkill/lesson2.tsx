"use client";

import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.1.2 Add & Subtract Fractions with a Common Denominator | GMAT Quant",
  description:
    "Learn how to add and subtract fractions that share a denominator, why the 'distributive property of division' works in this setting, and common traps to avoid. Includes four practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.2 Adding and subtracting fractions with the same denominator
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When fractions already share the same bottom number (denominator), you
          can combine them by operating only on the top numbers (numerators) and
          keeping the denominator unchanged.
        </p>

        <MustKnow>
          <p className="font-semibold">Addition with a shared denominator</p>
          <p className="mt-2">
            If fractions have the same denominator, add the numerators and keep
            that denominator:
          </p>
          <div className="mt-2">
            <InlineMath math="\frac{1}{9} + \frac{4}{9} = \frac{5}{9}" />
          </div>
          <div className="mt-2">
            <InlineMath math="\text{In general, } \frac{a}{b} + \frac{c}{b} = \frac{a + c}{b}." />
          </div>
        </MustKnow>

        <p>
          That rule is a special case of the distributive property of division
          over addition: grouping the numerators over a common denominator is
          equivalent to adding the fractions term by term.
        </p>

        <MustKnow>
          <p className="font-semibold">What works — and what doesn’t</p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              Valid when the denominators match:
              <div className="mt-1">
                <InlineMath math="\frac{a + c}{b} = \frac{a}{b} + \frac{c}{b}" />
              </div>
            </li>
            <li>
              Not valid when only the numerators match:
              <div className="mt-1">
                <InlineMath math="\frac{b}{a} + \frac{b}{c} \ne \frac{b}{a + c}" />
              </div>
            </li>
          </ul>
        </MustKnow>

        <MustKnow>
          <p className="font-semibold">
            Subtraction with a shared denominator
          </p>
          <p className="mt-2">
            With the same denominator, subtract the numerators and keep the
            denominator:
          </p>
          <div className="mt-2">
            <InlineMath math="\frac{4}{9} - \frac{1}{9} = \frac{3}{9} = \frac{1}{3}" />
          </div>
          <div className="mt-2">
            <InlineMath math="\text{In general, } \frac{a}{b} - \frac{c}{b} = \frac{a - c}{b}." />
          </div>
          <p className="mt-2">
            Again, this follows the distributive property of division over
            subtraction.
          </p>
          <div className="mt-2">
            <InlineMath math="\frac{a - c}{b} = \frac{a}{b} - \frac{c}{b}" />
          </div>
          <p className="mt-2">
            And once more, this does not transfer to “common numerator only”:
          </p>
          <div className="mt-2">
            <InlineMath math="\frac{b}{a} - \frac{b}{c} \ne \frac{b}{a - c}" />
          </div>
        </MustKnow>

        <section aria-labelledby="examples-heading" className="space-y-6">
          <h3 id="examples-heading" className="text-xl font-semibold text-white">
            Practice questions
          </h3>

          <MCQExample
            number={6}
            prompt="Let z ≠ 0 and (x/z) + (y/z) = 16. Which statement must be true?"
            options={[
              String.raw`\dfrac{x+y}{z+z}=\dfrac{1}{16}`,
              String.raw`\dfrac{x+y}{z}=16`,
              String.raw`x+y=8z`,
              String.raw`\dfrac{z}{x}+\dfrac{z}{y}=\dfrac{1}{16}`,
              String.raw`x+y=16+z`,
            ]}
            correct={String.raw`\dfrac{x+y}{z}=16`}
            solution={
              <>
                <p>
                  Because the denominators already match, add the numerators and
                  keep z:
                </p>
                <div className="mt-2">
                  <InlineMath math="\frac{x}{z} + \frac{y}{z} = \frac{x+y}{z}" />
                </div>
                <p className="mt-2">
                  Since the sum equals 16, we must have:
                </p>
                <div className="mt-2">
                  <InlineMath math="\frac{x+y}{z}=16" />
                </div>
              </>
            }
          />

          <MCQExample
            number={7}
            prompt="Ying raises 1/7 of her goal from one person and 5/7 from another. What fraction of the goal has she raised from these two people combined?"
            options={[
              String.raw`\dfrac{4}{7}`,
              String.raw`\dfrac{5}{49}`,
              String.raw`\dfrac{6}{14}`,
              String.raw`\dfrac{6}{7}`,
              String.raw`\dfrac{7}{8}`,
            ]}
            correct={String.raw`\dfrac{6}{7}`}
            solution={
              <>
                <p>Add the numerators and keep 7:</p>
                <div className="mt-2">
                  <InlineMath math="\frac{1}{7}+\frac{5}{7}=\frac{6}{7}" />
                </div>
              </>
            }
          />

          <MCQExample
            number={8}
            prompt={
              <>
                Which of the following expressions is equivalent to{" "}
                <InlineMath math="\dfrac{10x-2}{5}" />?
                <br />
                I. <InlineMath math="\dfrac{10x}{5}-\dfrac{2}{5}" />
                <br />
                II. <InlineMath math="2x-\dfrac{2}{5}" />
                <br />
                III. <InlineMath math="\dfrac{10x}{5}-2" />
              </>
            }
            options={["I only", "II only", "III only", "I and II", "I, II, and III"]}
            correct="I and II"
            solution={
              <>
                <p>
                  Split the fraction across subtraction because the denominator
                  is shared:
                </p>
                <div className="mt-2">
                  <InlineMath math="\dfrac{10x-2}{5}=\dfrac{10x}{5}-\dfrac{2}{5}" />
                </div>
                <p className="mt-2">
                  Next, simplify <InlineMath math="\dfrac{10x}{5}" /> to{" "}
                  <InlineMath math="2x" />:
                </p>
                <div className="mt-2">
                  <InlineMath math="\dfrac{10x}{5}=2x" />
                </div>
                <p className="mt-2">
                  So the whole expression is <InlineMath math="2x-\dfrac{2}{5}" />
                  . Therefore I and II are equivalent; III is not.
                </p>
              </>
            }
          />

          <MCQExample
            number={9}
            prompt={
              <>
                If <InlineMath math="\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{1}{3}" />{" "}
                and a,b &gt; 0, what must a + b equal?
              </>
            }
            options={["16", "12", "6", "3", "Cannot be determined"]}
            correct="Cannot be determined"
            solution={
              <>
                <p>
                  The equation <InlineMath math="\frac{1}{a}+\frac{1}{b}=\frac{1}{3}" />{" "}
                  does not force a single value for a + b. For example:
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>
                    a = 6, b = 6 works, giving a + b = 12.
                  </li>
                  <li>
                    a = 12, b = 4 also works, giving a + b = 16.
                  </li>
                </ul>
                <p className="mt-2">
                  Since multiple sums are possible, a + b cannot be uniquely
                  determined.
                </p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Key idea: with a common denominator, you add or subtract only the
          numerators. Don’t try to combine fractions merely because their
          numerators match—those shortcuts are invalid.
        </p>
      </article>
    </main>
  );
}