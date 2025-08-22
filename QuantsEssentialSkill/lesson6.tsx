import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.1.6 Multiplying and Dividing Fractions | Essential GMAT Quant Skills",
  description:
    "Master how to multiply and divide fractions, including invert‑and‑multiply, simplification tips, and algebraic manipulation. Features three quick multiple‑choice drills with full worked solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.6 Multiplying and Dividing Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Working with fractions becomes straightforward once you focus on what
          happens to numerators and denominators. Multiplication is a
          straight‑across product, while division is multiplication by a
          reciprocal. Always simplify when you can.
        </p>

        <MustKnow>
          <>
            To multiply fractions, multiply the numerators together and the
            denominators together, then reduce. In symbols:
            <div className="mt-3">
              <BlockMath math=" \dfrac{a}{b}\times\dfrac{c}{d}=\dfrac{ac}{bd} " />
            </div>
            Example:
            <div className="mt-2">
              <InlineMath math="\dfrac{2}{3}\times\dfrac{5}{7}=\dfrac{10}{21}" />
            </div>
          </>
        </MustKnow>

        <MCQExample
          number={16}
          prompt={
            <>
              Evaluate{" "}
              <InlineMath math="\left(\dfrac{1}{2}\right)\left(\dfrac{1}{8}\right)\div\left(\dfrac{1}{4}\right)" />.
            </>
          }
          options={["1/16", "1/8", "1/4", "1/2", "1/1.5"]}
          correct="1/4"
          solution={
            <>
              <p>
                First multiply the two fractions on the left:
                <InlineMath math="\ \dfrac{1}{2}\times\dfrac{1}{8}=\dfrac{1}{16}." />
              </p>
              <p>
                Now divide by{" "}
                <InlineMath math="\dfrac{1}{4}" /> by multiplying by its
                reciprocal:
              </p>
              <div className="mt-2">
                <BlockMath math="\dfrac{1}{16}\div\dfrac{1}{4}=\dfrac{1}{16}\times\dfrac{4}{1}=\dfrac{4}{16}=\dfrac{1}{4}." />
              </div>
              <p>So the result is 1/4.</p>
            </>
          }
        />

        <MustKnow>
          <>
            To divide by a fraction, multiply by its reciprocal. In symbols:
            <div className="mt-3">
              <BlockMath math="\dfrac{a}{b}\div\dfrac{c}{d}=\dfrac{a}{b}\times\dfrac{d}{c}=\dfrac{ad}{bc}" />
            </div>
            Example:
            <div className="mt-2">
              <InlineMath math="\dfrac{3}{4}\div\dfrac{1}{7}=\dfrac{3}{4}\times\dfrac{7}{1}=\dfrac{21}{4}=5\dfrac{1}{4}" />
            </div>
          </>
        </MustKnow>

        <MCQExample
          number={17}
          prompt={
            <>
              If <InlineMath math="x y z\neq 0" />, simplify
              <span className="whitespace-nowrap">
                {" "}
                <InlineMath math="\left(\dfrac{x}{y}\middle/\dfrac{z}{x}\right)\div\dfrac{1}{y}" />.
              </span>
            </>
          }
          options={["y/z", "x/(yz)", "(yx)/z", "x/z", "x^2/z"]}
          correct="x^2/z"
          solution={
            <>
              <p>Rewrite the complex fraction and apply invert‑and‑multiply step by step.</p>
              <div className="mt-2 space-y-2">
                <BlockMath math="\left(\dfrac{x}{y}\middle/\dfrac{z}{x}\right)=\dfrac{x}{y}\times\dfrac{x}{z}=\dfrac{x^2}{yz}" />
                <BlockMath math="\left(\dfrac{x^2}{yz}\right)\div\dfrac{1}{y}=\dfrac{x^2}{yz}\times\dfrac{y}{1}=\dfrac{x^2}{z}" />
              </div>
              <p>The expression simplifies to x²/z.</p>
            </>
          }
        />

        <MCQExample
          number={18}
          prompt={
            <>
              Let <InlineMath math="b,c,d" /> be nonzero whole numbers. If
              <span className="whitespace-nowrap">
                {" "}
                <InlineMath math="\dfrac{\left(\dfrac{a}{b}\right)}{\left(\dfrac{c}{d}\right)}=100" />
              </span>
              , what is the value of{" "}
              <InlineMath math="\dfrac{ad}{bc}" />?
            </>
          }
          options={["100", "75", "50", "25", "Cannot be determined"]}
          correct="100"
          solution={
            <>
              <p>Convert the division of fractions to a product:</p>
              <div className="mt-2 space-y-2">
                <BlockMath math="\dfrac{\left(\dfrac{a}{b}\right)}{\left(\dfrac{c}{d}\right)}=\dfrac{a}{b}\times\dfrac{d}{c}=\dfrac{ad}{bc}" />
                <p>
                  The given equation states this quantity equals 100, so{" "}
                  <InlineMath math="\dfrac{ad}{bc}=100" />.
                </p>
              </div>
            </>
          }
        />

        <p>
          Key takeaway: multiply across for products, flip‑and‑multiply for
          division, and simplify whenever possible. Keep operations in the
          correct left‑to‑right order when both multiplication and division
          appear.
        </p>
      </article>
    </main>
  );
}