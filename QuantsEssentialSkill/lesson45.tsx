import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.19.1 Distributive Property: Factor Out Common Factors | Essential GMAT Quant",
  description:
    "Master the distributive law for quick simplification on GMAT problems. Learn to factor common terms and cancel shared factors in complex fractions, with three worked multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.19.1 The Distributive Property: Pulling Out Common Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The distributive law is a core time‑saver: instead of multiplying first and adding later,
          you can factor shared terms and compute once. In symbols,
          <InlineMath math="ab+ac=a(b+c)" /> and
          <InlineMath math="ka+kb=k(a+b)" />. On GMAT problems, spotting a common factor can collapse long arithmetic into a single easy step.
        </p>

        <MustKnow>
          • Scan for a shared multiplier before you calculate. If several terms contain the same factor, factor it out with the distributive property.{" "}
          • In complex fractions, you can factor and cancel the same nonzero expression from numerator and denominator. Always ensure the canceled factor is not zero.
        </MustKnow>

        <section aria-labelledby="worked-examples" className="space-y-6">
          <h3 id="worked-examples" className="text-xl font-semibold text-white">
            Quick Practice
          </h3>

          <MCQExample
            number={86}
            prompt={
              <>
                What is the value of{" "}
                <InlineMath math="43\cdot 16\;+\;32\cdot 16\;+\;21\cdot 16\;+\;10\cdot 16\;-\;6\cdot 16" />?
              </>
            }
            options={["1,000", "1,200", "1,400", "1,600", "1,800"]}
            correct="1,600"
            solution={
              <>
                <p>Every term has a factor of 16, so factor it out:</p>
                <BlockMath math="43\cdot 16+32\cdot 16+21\cdot 16+10\cdot 16-6\cdot 16=16\,(43+32+21+10-6)" />
                <BlockMath math="=16\cdot 100=1600" />
                <p>Answer: 1,600.</p>
              </>
            }
          />

          <MCQExample
            number={87}
            prompt={
              <>
                Compute{" "}
                <InlineMath math="\frac{5+10+15+\cdots+65}{6+12+18+\cdots+78}" />.
              </>
            }
            options={["4/5", "5/6", "6/7", "7/8", "8/9"]}
            correct="5/6"
            solution={
              <>
                <p>
                  Each sum is an arithmetic sequence with a common factor. Factor 5 from the numerator and 6 from the denominator:
                </p>
                <BlockMath math="\frac{5(1+2+3+\cdots+13)}{6(1+2+3+\cdots+13)}" />
                <p>The identical sum cancels (it’s nonzero):</p>
                <BlockMath math="=\frac{5}{6}" />
                <p>Answer: 5/6.</p>
              </>
            }
          />

          <MCQExample
            number={88}
            prompt={
              <>
                Simplify{" "}
                <InlineMath math="\dfrac{5.000005}{9.000009}" />.
              </>
            }
            options={["1/5", "1/9", "5/9", "7/9", "8/9"]}
            correct="5/9"
            solution={
              <>
                <p>
                  Notice <InlineMath math="5.000005=5\cdot 1.000001" /> and{" "}
                  <InlineMath math="9.000009=9\cdot 1.000001" />. Factor and cancel the common nonzero factor{" "}
                  <InlineMath math="1.000001" />:
                </p>
                <BlockMath math="\frac{5\cdot 1.000001}{9\cdot 1.000001}=\frac{5}{9}" />
                <p>Answer: 5/9.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaways" className="space-y-3">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Big Picture
          </h3>
          <p>
            The distributive property is about structure, not grind. If multiple terms share a multiplier, extract it and finish in one shot. In fractions, factor first, then cancel matching nonzero expressions to simplify instantly.
          </p>
        </section>
      </article>
    </main>
  );
}