import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6 Positive and Negative Numbers | Properties of Numbers",
  description:
    "A clear introduction to signed numbers (positive, negative, and zero), how signs relate to the number line, and common pitfalls. Includes a quick check question and a data sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6 Working with Positive and Negative Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          At first glance, signed numbers look tame: examples like –4, 5, –19, and 100 feel
          straightforward. Yet many test questions hide subtle traps in how signs behave.
          In this short overview, you’ll build an intuition for what “positive,” “negative,”
          and “zero” really mean and why sign rules can power surprisingly tricky logic.
          Subsequent lessons will dive into addition, subtraction, multiplication, and division
          with signed numbers.
        </p>

        <MustKnow>
          <ul className="list-disc pl-6">
            <li>
              Every real number is either positive, negative, or zero. Using KaTeX:
              <InlineMath math="x > 0" /> means x is positive, <InlineMath math="x < 0" /> means x is negative,
              and <InlineMath math="x = 0" /> is neutral.
            </li>
            <li>
              Opposites sit symmetrically around zero on the number line: if a is to the right,
              then <InlineMath math="-a" /> is the same distance to the left.
            </li>
            <li>
              Magnitude is measured by absolute value. By definition:
              <BlockMath math="|a|=\begin{cases}
              a, & a\ge 0\\
              -a, & a<0
              \end{cases}" />
            </li>
            <li>
              Signs flip under multiplication by <InlineMath math="-1" />:
              <InlineMath math="(-1)\cdot a=-a" />.
            </li>
          </ul>
        </MustKnow>

        <p>
          A quick set of identities to anchor your intuition:
        </p>
        <BlockMath math="-a + a = 0,\quad a - a = 0,\quad (-2)\cdot(-3)=6,\quad \frac{-8}{2}=-4" />

        <MCQExample
          number={1}
          prompt="Let x be negative and y be positive with |x| > y. What must be true about x + y?"
          options={["x + y is positive", "x + y is zero", "x + y is negative", "Cannot be determined", "|x + y| = |x| - y"]}
          correct="x + y is negative"
          solution={
            <>
              <p>
                Since <InlineMath math="x<0" /> and <InlineMath math="y>0" /> with <InlineMath math="|x|>y" />,
                the negative magnitude of x outweighs the positive magnitude of y. Write
                <InlineMath math="x=-|x|" />. Then
              </p>
              <BlockMath math="x+y=-|x|+y=-(|x|-y)" />
              <p>
                Because <InlineMath math="|x|-y>0" />, the result is strictly negative. Hence x + y is negative.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Data Sufficiency: The sign of n − |n|"
          statements={[
            "For integer n, is n − |n| negative?",
            "1) n < 0",
            "2) n is odd",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We must determine whether <InlineMath math="n-|n|<0" />.
              </p>
              <p>
                <strong>Statement (1):</strong> <InlineMath math="n<0" />. Then <InlineMath math="|n|=-n" />, so
                <InlineMath math="n-|n|=n-(-n)=2n" />, which is negative because <InlineMath math="n<0" />.
                Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> n is odd. n could be 3 (then <InlineMath math="3-|3|=0" />) or
                –3 (then <InlineMath math="-3-3=-6" />, negative). Different outcomes → Not sufficient.
              </p>
              <p>
                Therefore, statement (1) alone is sufficient; statement (2) alone is not. Answer: A.
              </p>
            </>
          }
        />

        <p>
          Big picture: signs are about direction on the number line. Keep track of position,
          magnitude, and when operations flip signs. With that mindset, you’ll avoid common
          traps and set yourself up for the arithmetic rules that follow.
        </p>
      </article>
    </main>
  );
}