import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "19.23.2 Product of Consecutive Terms in a Sequence | Functions & Sequences",
  description:
    "Learn how to compute products of consecutive sequence terms quickly using telescoping cancellation. Includes two GMAT‑style multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.23.2 Product of a Set of Consecutive Terms in a Sequence
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a sequence is written as fractions and we multiply a run of consecutive
          terms, the expression often collapses (telescopes): shared factors in
          numerators and denominators cancel, leaving just a few edge terms.
          Mastering that cancellation is the fastest path to the product.
        </p>

        <MustKnow>
          For products of consecutive terms, look for a telescoping structure:
          adjacent numerators and denominators that match. Cancel what repeats and
          keep only the first numerator(s) and final denominator(s).
        </MustKnow>

        <section aria-labelledby="telescoping-demo" className="space-y-4">
          <h3 id="telescoping-demo" className="text-xl font-semibold text-white">
            Quick demo: why telescoping works
          </h3>
          <p>Consider the product below.</p>
          <BlockMath math={`\\frac{5}{7}\\times\\frac{7}{9}\\times\\frac{9}{11}\\times\\frac{11}{13}`} />
          <p>
            Every denominator cancels with the next numerator, so only the first
            numerator and the last denominator survive:
          </p>
          <BlockMath math={`\\frac{5}{\\cancel{7}}\\times\\frac{\\cancel{7}}{\\cancel{9}}\\times\\frac{\\cancel{9}}{\\cancel{11}}\\times\\frac{\\cancel{11}}{13} \\,=\\, \\frac{5}{13}`} />
        </section>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: product of tₙ = n/(n+1)
          </h3>
          <p>
            Let <InlineMath math={`t_n = \\dfrac{n}{n+1}`} /> for integers <InlineMath math={`n\\ge 1`} />.
            Find the product of the first 20 terms.
          </p>
          <BlockMath math={`\\prod_{n=1}^{20} \\frac{n}{n+1} = \\frac{1}{2}\\times\\frac{2}{3}\\times\\frac{3}{4}\\times\\cdots\\times\\frac{20}{21}`} />
          <p>
            Everything cancels except the first numerator and the last denominator:
          </p>
          <BlockMath math={`=\\; \\frac{1}{21}`} />
        </section>

        <MCQExample
          number={60}
          prompt={
            <>
              In the infinite sequence S, the n-th term is{" "}
              <InlineMath math={`t_n = \\dfrac{n+3}{n+1}`} /> for all integers{" "}
              <InlineMath math={`n\\ge 1`} />. What is the product of the first 100 terms?
            </>
          }
          options={["17", "57", "157", "517", "1,751"]}
          correct="1,751"
          solution={
            <>
              <p>
                Multiply the first 100 terms:
                <InlineMath math={`\\prod_{n=1}^{100} \\dfrac{n+3}{n+1}`} />.
                Separate numerators and denominators:
              </p>
              <BlockMath math={`\\frac{(4\\cdot 5\\cdot 6\\cdots 103)}{(2\\cdot 3\\cdot 4\\cdots 101)}.`} />
              <p>
                Cancel the common block <InlineMath math={`4\\cdots 101`} />.
                What remains is:
              </p>
              <BlockMath math={`\\frac{102\\cdot 103}{2\\cdot 3}=\\frac{10506}{6}=1751.`} />
              <p>Answer: 1,751.</p>
            </>
          }
        />

        <MCQExample
          number={61}
          prompt={
            <>
              The sequence <InlineMath math={`t_1, t_2,\\dots, t_n`} /> is defined by{" "}
              <InlineMath math={`t_n = \\dfrac{2n}{n+1}`} /> for all integers{" "}
              <InlineMath math={`n\\ge 1`} />. What is the product of the first 31 terms?
            </>
          }
          options={["2^{26}", "2^{27}", "2^{29}", "2^{31}", "2^{32}"]}
          correct="2^{26}"
          solution={
            <>
              <p>
                Compute <InlineMath math={`\\prod_{n=1}^{31} \\dfrac{2n}{n+1}`} />.
                Factor out the powers of 2:
              </p>
              <BlockMath math={`=\\;2^{31}\\cdot \\frac{1\\cdot 2\\cdot 3\\cdots 31}{2\\cdot 3\\cdot 4\\cdots 32}\\;=\\;2^{31}\\cdot\\frac{1}{32}`}/>
              <p>
                Since <InlineMath math={`32=2^5`} />, the product is{" "}
                <InlineMath math={`2^{31}/2^5=2^{26}`} />. Answer:{" "}
                <InlineMath math={`2^{26}`} />.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              For products, target cancellation, not brute‑force multiplication.
            </li>
            <li>
              Many “nice” sequences create a telescoping chain where middle
              terms vanish and only a few boundary terms remain.
            </li>
            <li>
              When the remaining factors are powers or short products, finish
              with quick simplifications (e.g., rewrite 32 as <InlineMath math={`2^5`} />).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}