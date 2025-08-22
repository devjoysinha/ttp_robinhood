import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.1.8 Simplify Before You Multiply | GMAT Quant",
  description:
    "Speed up fraction multiplication with top-and-bottom and cross simplification. Clear walk-throughs, telescoping products, and four quick GMAT‑style practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.8 Simplify Before You Multiply
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you multiply fractions, don’t rush to multiply all numerators and denominators. In many cases you can shrink the arithmetic dramatically by simplifying first. Two tools do the heavy lifting: top‑and‑bottom simplification and cross simplification.
        </p>

        <MustKnow>
          Before multiplying fractions, look for chances to reduce. Divide a numerator and its own denominator by a common factor (top‑and‑bottom), and cancel a numerator in one fraction with a denominator in another (cross). Both methods often combine to avoid big numbers.
        </MustKnow>

        <section aria-labelledby="tab-simplification">
          <h3 id="tab-simplification" className="text-xl font-semibold text-white">
            Top‑and‑Bottom Simplification
          </h3>
          <p>
            Reduce a single fraction by dividing its numerator and denominator by the same nonzero integer.
          </p>
          <div className="space-y-3">
            <BlockMath math={`\\frac{7}{56}=\\frac{7\\div 7}{56\\div 7}=\\frac{1}{8}`} />
            <BlockMath math={`\\frac{10}{25}=\\frac{10\\div 5}{25\\div 5}=\\frac{2}{5}`} />
          </div>
          <p>Now apply this to a product:</p>
          <div className="space-y-3">
            <BlockMath math={`\\frac{20}{25}\\cdot\\frac{9}{27}=\\frac{4}{5}\\cdot\\frac{1}{3}=\\frac{4}{15}`} />
          </div>
          <p>
            If you skipped simplifying, you would get
          </p>
          <BlockMath math={`\\frac{20}{25}\\cdot\\frac{9}{27}=\\frac{180}{675}=\\frac{36}{135}=\\frac{12}{45}=\\frac{4}{15}`} />
          <p>Same answer, much more work.</p>
        </section>

        <section aria-labelledby="cross-simplification">
          <h3 id="cross-simplification" className="text-xl font-semibold text-white">
            Cross Simplification
          </h3>
          <p>
            Here you reduce across fractions: divide a numerator in one fraction and a denominator in a different fraction by the same factor.
          </p>
          <div className="space-y-3">
            <BlockMath math={`\\frac{35}{64}\\cdot\\frac{56}{45}=\\frac{7}{64}\\cdot\\frac{56}{9}=\\frac{7}{8}\\cdot\\frac{7}{9}=\\frac{49}{72}`} />
          </div>
          <p>
            Cross simplification also works even when fractions aren’t adjacent, and you can combine it with top‑and‑bottom reductions:
          </p>
          <div className="space-y-3">
            <BlockMath math={`\\frac{35}{64}\\cdot\\frac{1}{2}\\cdot\\frac{24}{45}=\\frac{7}{64}\\cdot\\frac{1}{2}\\cdot\\frac{24}{9}=\\frac{7}{8}\\cdot\\frac{1}{2}\\cdot\\frac{3}{9}=\\frac{7}{8}\\cdot\\frac{1}{2}\\cdot\\frac{1}{3}=\\frac{7}{48}`} />
          </div>

          <MustKnow>
            - You can cross‑simplify nonadjacent fractions.{" "}
            - It’s common to use both cross and top‑and‑bottom simplification in the same product.
          </MustKnow>
        </section>

        <section aria-labelledby="mcq-22">
          <MCQExample
            number={22}
            prompt={
              <>
                What is the value of{" "}
                <InlineMath math="\,\dfrac{7}{77}\cdot\dfrac{36}{72}\cdot\dfrac{15}{45}\," />?
              </>
            }
            options={["1/66", "1/45", "1/33", "1/22", "1/15"]}
            correct="1/66"
            solution={
              <>
                <p>Reduce each fraction first:</p>
                <BlockMath math={`\\frac{7}{77}=\\frac{1}{11},\\quad \\frac{36}{72}=\\frac{1}{2},\\quad \\frac{15}{45}=\\frac{1}{3}`} />
                <p>Then multiply:</p>
                <BlockMath math={`\\frac{1}{11}\\cdot\\frac{1}{2}\\cdot\\frac{1}{3}=\\frac{1}{66}`} />
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-23">
          <MCQExample
            number={23}
            prompt={
              <>
                Evaluate{" "}
                <InlineMath math="\,\dfrac{6}{70}\cdot\dfrac{17}{34}\cdot\dfrac{14}{36}\," />.
              </>
            }
            options={["1/30", "1/48", "1/60", "1/63", "1/72"]}
            correct="1/60"
            solution={
              <>
                <p>Simplify each factor:</p>
                <BlockMath math={`\\frac{6}{70}=\\frac{3}{35}=\\frac{1}{10}\\cdot\\frac{3}{3}=\\frac{1}{10},\\quad \\frac{17}{34}=\\frac{1}{2},\\quad \\frac{14}{36}=\\frac{7}{18}=\\frac{2}{6}=\\frac{2}{6}=\\frac{7}{18}\\,\\text{ then }\\,\\frac{2}{6}=\\frac{1}{3}\\,\\text{(via cross with }35\\text{ and }14\\text{ if desired)}`} />
                <p>A clean path is:</p>
                <BlockMath math={`\\frac{6}{70}\\cdot\\frac{17}{34}\\cdot\\frac{14}{36}=\\Big(\\frac{1}{10}\\Big)\\cdot\\Big(\\frac{1}{2}\\Big)\\cdot\\Big(\\frac{7}{18}\\Big)=\\frac{7}{360}=\\frac{1}{60}`} />
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-24">
          <MCQExample
            number={24}
            prompt={
              <>
                Compute{" "}
                <InlineMath math="\;\dfrac{3\cdot 7}{9\cdot 13}\cdot\dfrac{17\cdot 31\cdot 47}{7\cdot 5}\cdot\dfrac{13\cdot 9\cdot 5}{3\cdot 17\cdot 31}\;" />.
              </>
            }
            options={["13", "17", "29", "33", "47"]}
            correct="47"
            solution={
              <>
                <p>
                  Every factor cancels with a partner except 47 in the numerator:
                </p>
                <BlockMath math={`\\frac{3\\cdot 7}{9\\cdot 13}\\cdot\\frac{17\\cdot 31\\cdot 47}{7\\cdot 5}\\cdot\\frac{13\\cdot 9\\cdot 5}{3\\cdot 17\\cdot 31}=47`} />
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-25">
          <MCQExample
            number={25}
            prompt={
              <>
                What is{" "}
                <InlineMath math="\;(1-\tfrac{1}{10})(1-\tfrac{1}{9})(1-\tfrac{1}{8})\cdots(1-\tfrac{1}{2})\;?" />
              </>
            }
            options={["10", "1", "1/5", "1/10", "1/15"]}
            correct="1/10"
            solution={
              <>
                <p>Rewrite each factor and observe the telescoping cancellation:</p>
                <BlockMath math={`\\prod_{k=2}^{10}\\Big(1-\\frac{1}{k}\\Big)=\\prod_{k=2}^{10}\\frac{k-1}{k}=\\frac{1}{2}\\cdot\\frac{2}{3}\\cdot\\frac{3}{4}\\cdots\\frac{9}{10}=\\frac{1}{10}`} />
              </>
            }
          />
        </section>

        <MustKnow>
          Big picture: reducing early keeps numbers small and mistakes rare. Scan for common factors vertically (within a fraction) and diagonally (across fractions) before you multiply.
        </MustKnow>
      </article>
    </main>
  );
}