import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is included globally once in your root layout or _app:
// import "katex/dist/katex.min.css";
const Inline = dynamic(() => import("react-katex").then(m => m.InlineMath), { ssr: false });
const Block = dynamic(() => import("react-katex").then(m => m.BlockMath), { ssr: false });

export const metadata: Metadata = {
  title: "4.3 Zero and One | Properties of Numbers",
  description:
    "Master the special roles of 0 and 1: identities, evenness, division rules, exponent and factorial edge cases. Includes one MCQ and two Data Sufficiency drills with reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 Zero and One: Core Properties
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Zero and one show up in nearly every topic and carry special rules that save time and prevent mistakes. Zero acts as the additive identity and one as the multiplicative identity, and both have important implications for division, parity, exponents, and factorials.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Additive identity: <Inline math="a + 0 = 0 + a = a" />.
            </li>
            <li>
              Multiplicative identity: <Inline math="a \cdot 1 = 1 \cdot a = a" />.
            </li>
            <li>
              Zero is even and neither positive nor negative.
            </li>
            <li>
              Multiplying by zero: <Inline math="a \cdot 0 = 0" /> for any real <Inline math="a" />.
            </li>
            <li>
              Division rules: <Inline math="\dfrac{0}{a} = 0" /> for <Inline math="a \ne 0" />, and <Inline math="\dfrac{a}{0}" /> is undefined.
            </li>
            <li>
              Exponents:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><Inline math="a^0 = 1" /> for <Inline math="a \ne 0" /></li>
                <li><Inline math="0^n = 0" /> for any integer <Inline math="n &gt; 0" /></li>
                <li><Inline math="1^n = 1" /> for any integer <Inline math="n" /></li>
                <li><Inline math="0^0" /> is undefined/indeterminate in this course context</li>
              </ul>
            </li>
            <li>
              Factorial edge case: <Inline math="0! = 1" />.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="identities">
          <h3 id="identities" className="text-xl font-semibold text-white">
            Identities and Division
          </h3>
          <p className="mt-2">
            The identities are fast checks you can use anywhere:
          </p>
          <div className="mt-3 space-y-2">
            <Block math="a + 0 = a \quad\text{and}\quad a \cdot 1 = a" />
          </div>
          <p className="mt-2">
            Division with zero trips many test takers. Remember:
          </p>
          <div className="mt-3 space-y-2">
            <Block math="\dfrac{0}{a} = 0 \quad (a \ne 0), \qquad \dfrac{a}{0} \text{ is undefined}" />
          </div>
          <p className="mt-2">
            The product being zero tells you at least one factor is zero (the zero‑product property).
          </p>
        </section>

        <section aria-labelledby="exponents">
          <h3 id="exponents" className="text-xl font-semibold text-white">
            Exponent Patterns with 0 and 1
          </h3>
          <p className="mt-2">
            The three most useful exponent facts here are:
          </p>
          <div className="mt-3 space-y-2">
            <Block math="a^0 = 1 \text{ for } a \ne 0" />
            <Block math="0^n = 0 \text{ for any integer } n &gt; 0" />
            <Block math="1^n = 1 \text{ for any integer } n" />
          </div>
          <p className="mt-2">
            The expression <Inline math="0^0" /> is not assigned a single value in this course; treat it as undefined/indeterminate.
          </p>
        </section>

        <section aria-labelledby="factorial">
          <h3 id="factorial" className="text-xl font-semibold text-white">
            Why 0! = 1
          </h3>
          <p className="mt-2">
            The factorial rule <Inline math="n! = n \cdot (n-1)!" /> implies
          </p>
          <div className="mt-3">
            <Block math="1! = 1 \cdot 0! \ \Rightarrow\ 1 = 1 \cdot 0! \ \Rightarrow\ 0! = 1." />
          </div>
        </section>

        <MCQExample
          number={31}
          prompt={
            <>
              For nonzero real <Inline math="r" />, which expression is always equal to{" "}
              <Inline math="1" />?
            </>
          }
          options={[
            <span key="a"><Inline math="0^{r}" /></span>,
            <span key="b"><Inline math="r^{0}" /></span>,
            <span key="c"><Inline math="r^{1}" /></span>,
            "r / 0",
            <span key="e"><Inline math="(-1)^{r}" /></span>,
          ]}
          correct="r^0"
          solution={
            <>
              <p>
                For any nonzero real <Inline math="r" />, we have <Inline math="r^0 = 1" />.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><Inline math="0^{r}" /> equals 0 when <Inline math="r &gt; 0" />, but isn’t 1.</li>
                <li><Inline math="r^{1} = r" />, not always 1.</li>
                <li><Inline math="r/0" /> is undefined.</li>
                <li><Inline math="(-1)^{r}" /> is not always 1; for noninteger <Inline math="r" /> it may not be real.</li>
              </ul>
              <p className="mt-2">Therefore, only <Inline math="r^0" /> is always 1.</p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Is 1/x defined?"
          statements={[
            "For real number x, is 1/x defined?",
            "1) x^2 = 0",
            "2) |x| = 1",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                The question asks whether <Inline math="x \ne 0" /> (since division by 0 is undefined).
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <Inline math="x^2 = 0" /> implies <Inline math="x = 0" />. Then{" "}
                <Inline math="1/x" /> is not defined. We can answer definitively (“No”). Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <Inline math="|x| = 1" /> gives <Inline math="x = \pm 1" />, both nonzero, so{" "}
                <Inline math="1/x" /> is defined. We can answer definitively (“Yes”). Sufficient.
              </p>
              <p>
                Each statement alone is sufficient to answer the yes/no question. Answer: D.
              </p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Value of 0^n"
          statements={[
            "For integer n, what is the value of 0^n?",
            "1) n > 0",
            "2) n is even",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We must determine a single value for <Inline math="0^n" />.
              </p>
              <p>
                <strong>Statement (1):</strong> If <Inline math="n &gt; 0" />, then{" "}
                <Inline math="0^n = 0" />. Unique value → sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> If <Inline math="n" /> is even,{" "}
                <Inline math="n" /> could be 0 or a positive even integer.{" "}
                <Inline math="0^0" /> is undefined/indeterminate, while{" "}
                <Inline math="0^{2} = 0" />. Different outcomes → not sufficient.
              </p>
              <p>Thus, (1) alone suffices; (2) alone does not. Answer: A.</p>
            </>
          }
        />

        <p>
          Bottom line: treat 0 and 1 as special “anchors.” Use identities to simplify expressions instantly, respect the division and exponent exceptions, and remember the factorial edge case <Inline math="0!=1" />. These small facts pay off across algebra, number properties, and beyond.
        </p>
      </article>
    </main>
  );
}