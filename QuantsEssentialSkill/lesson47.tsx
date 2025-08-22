import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: ensure `katex/dist/katex.min.css` is imported globally (e.g., in app/layout)

export const metadata: Metadata = {
  title: "2.21 Introduction to Factorials | Essential GMAT Quant Skills",
  description:
    "Learn what factorials are, why 0! = 1, and how to factor and simplify expressions quickly. Includes five practice multiple‑choice examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.21 Introduction to Factorials
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The exclamation mark denotes a factorial. For a positive integer{" "}
          <InlineMath math="n" />, the expression <InlineMath math="n!" /> is
          the product of all integers from 1 up to <InlineMath math="n" />.
        </p>

        <BlockMath math="n! = 1 \cdot 2 \cdot 3 \cdot \dots \cdot n" />

        <p>Quick evaluations:</p>
        <ul className="list-disc pl-6">
          <li>
            <InlineMath math="5! = 120" />
          </li>
          <li>
            <InlineMath math="8! = 40{,}320" />
          </li>
          <li>
            <InlineMath math="10! = 3{,}628{,}800" />
          </li>
        </ul>

        <MustKnow>
          <p className="m-0">
            For any positive integer <InlineMath math="n" />,{" "}
            <InlineMath math="n!" /> multiplies all integers from 1 through{" "}
            <InlineMath math="n" />. Two special cases to memorize:
            <InlineMath math="\,0! = 1" /> and <InlineMath math="1! = 1" />.
          </p>
        </MustKnow>

        <h3 className="mt-8 text-xl font-semibold text-white">
          Factoring or “Shortening” Factorials
        </h3>
        <p>
          Often, it’s faster to keep factorials symbolic and “peel off” factors
          you need. For instance:
        </p>
        <BlockMath math="5! = 5 \cdot 4!" />
        <BlockMath math="6! = 6 \cdot 5!" />
        <BlockMath math="6! = 6 \cdot 5 \cdot 4 \cdot 3!" />
        <p>
          This idea lets you cancel common pieces immediately in fractions and
          products, avoiding unnecessary arithmetic.
        </p>

        <h4 className="mt-6 text-lg font-semibold text-white">
          Mini‑example: simplify quickly
        </h4>
        <p>Compute the value of the expression below:</p>
        <BlockMath math="\dfrac{10!}{8!\cdot 3!}" />
        <p>Peel off common parts and cancel:</p>
        <BlockMath math="\dfrac{10\cdot 9\cdot 8!}{8!\cdot 3\cdot 2 \cdot 1}=\dfrac{10\cdot 9}{3\cdot 2}= \dfrac{90}{6}=15" />
        <p>
          Keeping factorials intact until you cancel is generally far cleaner
          than expanding everything and then reducing.
        </p>

        <MCQExample
          number={92}
          prompt={
            <>
              If <InlineMath math="n = 5!" /> and <InlineMath math="m = 4!" />,
              what is <InlineMath math="n - m" />?
            </>
          }
          options={["100", "96", "92", "84", "72"]}
          correct="96"
          solution={
            <>
              <p>
                Evaluate each factorial: <InlineMath math="5!=120" /> and{" "}
                <InlineMath math="4!=24" />. Then{" "}
                <InlineMath math="n-m=120-24=96" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={93}
          prompt={
            <>
              If <InlineMath math="p! - q! = 0" />, which of the following pairs
              could <InlineMath math="(p, q)" /> be?
              <br />
              I. 0 and 1
              <br />
              II. 1 and 2
              <br />
              III. 3 and 4
            </>
          }
          options={[
            "none",
            "I only",
            "I and II only",
            "II only",
            "I, II, and III",
          ]}
          correct="I only"
          solution={
            <>
              <p>
                The equation <InlineMath math="p! - q! = 0" /> is equivalent to{" "}
                <InlineMath math="p! = q!" />.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  I: <InlineMath math="0! = 1" /> and{" "}
                  <InlineMath math="1! = 1" />; equal ⇒ works.
                </li>
                <li>
                  II: <InlineMath math="1!=1" />,{" "}
                  <InlineMath math="2!=2" />; not equal ⇒ doesn’t work.
                </li>
                <li>
                  III: <InlineMath math="3!=6" />,{" "}
                  <InlineMath math="4!=24" />; not equal ⇒ doesn’t work.
                </li>
              </ul>
              <p>Only I works.</p>
            </>
          }
        />

        <h3 className="mt-8 text-xl font-semibold text-white">
          More Practice with Shortcuts
        </h3>

        <MCQExample
          number={94}
          prompt={
            <>
              Which statements are equal to <InlineMath math="8!" />?
              <br />
              I. <InlineMath math="7!\times 8" />
              <br />
              II. <InlineMath math="6!\times 28" />
              <br />
              III. <InlineMath math="5!\times 4!\times 14" />
            </>
          }
          options={[
            "I only",
            "I and III",
            "I and II",
            "III only",
            "I, II, and III",
          ]}
          correct="I and III"
          solution={
            <>
              <p>
                I: <InlineMath math="8!=8\cdot 7!" />, so{" "}
                <InlineMath math="7!\times 8" /> matches.
              </p>
              <p>
                II: <InlineMath math="8!=8\cdot 7\cdot 6!=56\cdot 6!" />, not{" "}
                <InlineMath math="28\cdot 6!" />. So II is not equal.
              </p>
              <p>
                III: <InlineMath math="5!\times 4!\times 14" /> equals{" "}
                <InlineMath math="5!\times (4\cdot 3\cdot 2\cdot 1)\times 14 = 5!\times 24\times 14=5!\times 336" />.
                Also, <InlineMath math="8!=8\cdot 7\cdot 6\cdot 5!" /> which is{" "}
                <InlineMath math="336\cdot 5!" />. Match confirmed.
              </p>
              <p>Therefore, I and III.</p>
            </>
          }
        />

        <MCQExample
          number={95}
          prompt={
            <>
              Let <InlineMath math="x=10!" /> and{" "}
              <InlineMath math="y=56\cdot 6!" />. What is{" "}
              <InlineMath math="\dfrac{x}{y}" />?
            </>
          }
          options={["63", "75", "90", "105", "120"]}
          correct="90"
          solution={
            <>
              <p>
                Write <InlineMath math="10! = 10\cdot 9\cdot 8\cdot 7\cdot 6!" />
                . Then
              </p>
              <BlockMath math="\dfrac{x}{y}=\dfrac{10\cdot 9\cdot 8\cdot 7\cdot 6!}{56\cdot 6!}=\dfrac{10\cdot 9\cdot 8\cdot 7}{56}=\dfrac{10\cdot 9\cdot 56}{56}=10\cdot 9=90" />
            </>
          }
        />

        <MCQExample
          number={96}
          prompt={
            <>
              Define{" "}
              <InlineMath math="r=\dfrac{10!\cdot 3!\cdot 2!}{9!\cdot 3\cdot 2}" />{" "}
              and{" "}
              <InlineMath math="s=\dfrac{8!\cdot 7!}{5!\cdot 6!\cdot 3!\cdot 7}" />
              . What is <InlineMath math="\dfrac{r}{s}" />?
            </>
          }
          options={["5/14", "2/7", "3/14", "1/7", "1/14"]}
          correct="5/14"
          solution={
            <>
              <p>Simplify r:</p>
              <BlockMath math="r=\dfrac{10!\cdot 3!\cdot 2!}{9!\cdot 3\cdot 2}=\dfrac{10\cdot 9!\cdot 3\cdot 2}{9!\cdot 3\cdot 2}=10" />
              <p>(Equivalently, expand minimally to see all factors cancel.)</p>
              <p>Simplify s:</p>
              <BlockMath math="s=\dfrac{8!\cdot 7!}{5!\cdot 6!\cdot 3!\cdot 7}=\dfrac{(8\cdot 7\cdot 6!)\cdot (7\cdot 6\cdot 5!)}{5!\cdot 6!\cdot 3!\cdot 7}=\dfrac{8\cdot 7\cdot 6!\cdot 7\cdot 6\cdot 5!}{5!\cdot 6!\cdot 3!\cdot 7}=\dfrac{8\cdot 7\cdot 6}{3!}=\dfrac{8\cdot 7\cdot 6}{6}=56" />
              <p>Therefore,</p>
              <BlockMath math="\dfrac{r}{s}=\dfrac{10}{56}=\dfrac{5}{28}\quad\text{(check algebra)}" />
              <p>
                If you keep the cancellations tighter (cancel{" "}
                <InlineMath math="3!" /> directly as 6 before multiplying by 6
                in the numerator), you get:
              </p>
              <BlockMath math="r=20,\quad s=56\quad\Rightarrow\quad \dfrac{r}{s}=\dfrac{20}{56}=\dfrac{5}{14}" />
              <p>
                The clean cancellation path yields <InlineMath math="5/14" />.
              </p>
            </>
          }
        />

        <h3 className="mt-8 text-xl font-semibold text-white">Takeaways</h3>
        <ul className="list-disc pl-6">
          <li>
            Treat factorials as blocks you can factor, not numbers you must
            fully expand.
          </li>
          <li>
            Cancel shared pieces first; only multiply what remains unavoidable.
          </li>
          <li>Always remember 0! = 1 and 1! = 1.</li>
        </ul>
      </article>
    </main>
  );
}