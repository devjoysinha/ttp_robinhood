import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { Fragment } from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "2.1 Proper & Improper Fractions, Mixed Numbers | GMAT Quant",
  description:
    "A concise guide to proper and improper fractions and mixed numbers: definitions, quick rules, clean conversions, and three practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1 Proper fractions, improper fractions, and mixed numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section aria-labelledby="proper-improper">
          <h3 id="proper-improper" className="text-xl font-semibold text-white">
            Proper vs. improper fractions
          </h3>
          <p>
            A simple fraction has a numerator and a nonzero denominator. For instance, in{" "}
            <InlineMath math="\frac{3}{4}" aria-label="three fourths" />, 3 is the numerator and 4 is the denominator.
          </p>
          <p>
            We call a fraction proper when the numerator is smaller than the denominator, and improper when the numerator is
            at least as large as the denominator.
          </p>

          <div className="grid gap-2 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Examples of proper fractions</p>
              <ul className="ml-5 list-disc text-gray-300">
                <li>
                  <InlineMath math="\frac{1}{3}" aria-label="one third" />
                </li>
                <li>
                  <InlineMath math="\frac{2}{7}" aria-label="two sevenths" />
                </li>
                <li>
                  <InlineMath math="\frac{6}{11}" aria-label="six elevenths" />
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Examples of improper fractions</p>
              <ul className="ml-5 list-disc text-gray-300">
                <li>
                  <InlineMath math="\frac{3}{2}" aria-label="three halves" />
                </li>
                <li>
                  <InlineMath math="\frac{5}{4}" aria-label="five fourths" />
                </li>
                <li>
                  <InlineMath math="\frac{17}{5}" aria-label="seventeen fifths" />
                </li>
              </ul>
            </div>
          </div>

          <MustKnow>
            In a proper fraction the top is smaller than the bottom. In an improper fraction the top is greater than or equal
            to the bottom.
          </MustKnow>

          <MCQExample
            number={1}
            prompt={
              <>
                If <InlineMath math="x" /> and <InlineMath math="y" /> are positive integers,{" "}
                <InlineMath math="\frac{x}{2}" /> is proper and <InlineMath math="\frac{y}{2}" /> is improper. Which statement
                must be true?
              </>
            }
            options={[
              "x + y < 0",
              "(x)(y) < 0",
              "x − y < 0",
              "x / y < 0",
              "x > y",
            ]}
            correct="x − y < 0"
            solution={
              <Fragment>
                <p>
                  Since <InlineMath math="\frac{x}{2}" /> is proper and <InlineMath math="x" /> is a positive integer, we must
                  have <InlineMath math="x<2" /> so <InlineMath math="x=1" />.
                </p>
                <p>
                  Since <InlineMath math="\frac{y}{2}" /> is improper and <InlineMath math="y" /> is positive,{" "}
                  <InlineMath math="y>2" />. Therefore <InlineMath math="y\ge 3" /> and so{" "}
                  <InlineMath math="x - y < 0" /> must hold. The other choices contradict positivity or need not be true.
                </p>
              </Fragment>
            }
          />
        </section>

        <section aria-labelledby="mixed-numbers">
          <h3 id="mixed-numbers" className="text-xl font-semibold text-white">
            Mixed numbers (and converting from improper)
          </h3>
          <p>
            An improper fraction can be written as a mixed number, which is a whole number followed by a proper fraction. For
            example:
          </p>
          <ul className="ml-5 list-disc">
            <li>
              <InlineMath math="\frac{7}{2} = 3\ \frac{1}{2}" aria-label="seven over two equals three and one half" />
            </li>
            <li>
              <InlineMath math="\frac{14}{3} = 4\ \frac{2}{3}" aria-label="fourteen over three equals four and two thirds" />
            </li>
          </ul>

          <MustKnow>
            To convert an improper fraction to a mixed number, divide numerator by denominator. The quotient is the whole
            part; the remainder over the original denominator is the fractional part.
          </MustKnow>

          <MCQExample
            number={2}
            prompt={
              <>
                Let <InlineMath math="p=\frac{9}{2}" /> and <InlineMath math="q=\frac{16}{3}" />. Which statements are true?
                <br />
                I. <InlineMath math="p<q" /> &nbsp;&nbsp;&nbsp; II. <InlineMath math="p+q>9" /> &nbsp;&nbsp;&nbsp; III.{" "}
                <InlineMath math="pq>20" />
              </>
            }
            options={["I only", "I and II", "II only", "II and III", "I, II, and III"]}
            correct="I, II, and III"
            solution={
              <Fragment>
                <p>
                  Convert to mixed numbers: <InlineMath math="p=4\ \frac{1}{2}=4.5" /> and{" "}
                  <InlineMath math="q=5\ \frac{1}{3}\approx 5.33" />. Thus I is true.
                </p>
                <p>
                  Sum: <InlineMath math="p+q\approx 9.83>9" /> so II is true.
                </p>
                <p>
                  Product: <InlineMath math="pq=\frac{9}{2}\cdot\frac{16}{3}=\frac{144}{6}=24>20" /> so III is true.
                </p>
              </Fragment>
            }
          />
        </section>

        <section aria-labelledby="to-improper">
          <h3 id="to-improper" className="text-xl font-semibold text-white">
            Converting a mixed number to an improper fraction
          </h3>
          <p>
            To rewrite a mixed number as an improper fraction, multiply the whole part by the denominator, add the numerator,
            and place the result over the original denominator.
          </p>

          <div className="space-y-2">
            <p className="font-semibold text-white">Examples</p>
            <ul className="ml-5 list-disc">
              <li>
                <InlineMath math="4\ \frac{1}{3}=\frac{4\cdot 3 + 1}{3}=\frac{12+1}{3}=\frac{13}{3}" />
              </li>
              <li>
                <InlineMath math="6\ \frac{2}{3}=\frac{6\cdot 3 + 2}{3}=\frac{18+2}{3}=\frac{20}{3}" />
              </li>
            </ul>
          </div>

          <MustKnow>
            Mixed to improper: multiply the whole number by the denominator, add the numerator, and keep the same denominator.
          </MustKnow>

          <MCQExample
            number={3}
            prompt={
              <>
                If <InlineMath math="m=2\ \frac{1}{4}" /> and <InlineMath math="n=6\ \frac{1}{4}" />, then{" "}
                <InlineMath math="m+n" /> equals which of the following?
              </>
            }
            options={["26/4", "31/4", "34/4", "37/4", "38/4"]}
            correct="34/4"
            solution={
              <Fragment>
                <p>
                  Convert each to an improper fraction: <InlineMath math="m=\frac{2\cdot 4+1}{4}=\frac{9}{4}" /> and{" "}
                  <InlineMath math="n=\frac{6\cdot 4+1}{4}=\frac{25}{4}" />.
                </p>
                <p>
                  Add: <InlineMath math="\frac{9}{4}+\frac{25}{4}=\frac{34}{4}" />. (This also simplifies to{" "}
                  <InlineMath math="\frac{17}{2}" /> or <InlineMath math="8\ \frac{1}{2}" />.)
                </p>
              </Fragment>
            }
          />
        </section>

        <section aria-labelledby="summary">
          <h3 id="summary" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="ml-5 list-disc">
            <li>
              Proper means numerator smaller than denominator; improper means numerator at least as large as denominator.
            </li>
            <li>
              Improper → mixed: divide to get whole part and remainder; write remainder over the same denominator.
            </li>
            <li>
              Mixed → improper: whole × denominator + numerator, over the same denominator.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}