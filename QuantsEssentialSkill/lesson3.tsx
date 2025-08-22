```tsx
// app/(quant)/essential-quant/2-1-3-adding-subtracting-unlike-denominators/page.tsx
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const M = ({ children }: { children: string }) => <InlineMath math={children} />;
const MB = ({ children }: { children: string }) => <BlockMath math={children} />;

export const metadata: Metadata = {
  title: "2.1.3 Adding and Subtracting Fractions with Unlike Denominators | Essential GMAT Quant",
  description:
    "How to add and subtract fractions with different denominators: find a common denominator (often the LCD), use cross‑addition formulas, reduce, and check your work. Includes three MCQ examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.3 Adding and subtracting fractions with unlike denominators
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When fractions have different denominators, you can’t combine them directly. First rewrite
          each fraction so they share a common denominator, then add or subtract the numerators and
          simplify.
        </p>

        <MustKnow>
          To combine fractions with different denominators, express every term over the same
          denominator (preferably the LCD), operate on the numerators only, and then reduce the
          result.
        </MustKnow>

        <section aria-labelledby="example-basic">
          <h3 id="example-basic" className="text-gray-200 font-semibold">
            Quick warm‑ups
          </h3>

          <p>Addition example:</p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <p className="sr-only">Compute one-half plus one-fourth.</p>
            <MB>{`\\dfrac{1}{2}+\\dfrac{1}{4}=\\dfrac{\\color{gray}{2}}{\\color{gray}{4}}+\\dfrac{1}{4}=\\dfrac{3}{4}`}</MB>
          </div>

          <p className="mt-4">Subtraction example:</p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <p className="sr-only">Compute one-third minus one-fourth.</p>
            <MB>{`\\dfrac{1}{3}-\\dfrac{1}{4}=\\dfrac{4}{12}-\\dfrac{3}{12}=\\dfrac{1}{12}`}</MB>
          </div>
        </section>

        <MustKnow>
          Add or subtract in two steps:
          <br />
          1) Match denominators (use the LCD when convenient).
          <br />
          2) Combine numerators and place over the common denominator, then reduce.
        </MustKnow>

        <section aria-labelledby="cross-add">
          <h3 id="cross-add" className="text-gray-200 font-semibold">
            A faster general method (cross addition/subtraction)
          </h3>
          <p>
            You don’t need the least common denominator to combine two fractions—any common
            denominator works. A quick universal approach is:
          </p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <MB>{`\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{ad+bc}{bd}`}</MB>
            <MB>{`\\dfrac{a}{b}-\\dfrac{c}{d}=\\dfrac{ad-bc}{bd}`}</MB>
          </div>
          <p>Example:</p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <MB>{`\\dfrac{1}{2}+\\dfrac{1}{3}=\\dfrac{(1)(3)+(1)(2)}{(2)(3)}=\\dfrac{5}{6}`}</MB>
          </div>
        </section>

        <MCQExample
          number={10}
          difficulty="easy"
          prompt={
            <>
              What is <M>{String.raw`\dfrac{3}{4}+\dfrac{2}{3}-\dfrac{4}{5}`}</M>?
            </>
          }
          options={["5/14", "7/18", "37/60", "34/71", "133/60"]}
          correct="37/60"
          solution={
            <>
              <p>
                Use a common denominator of 60: <M>{String.raw`\dfrac{3}{4}=\dfrac{45}{60}`}</M>,{" "}
                <M>{String.raw`\dfrac{2}{3}=\dfrac{40}{60}`}</M>,{" "}
                <M>{String.raw`\dfrac{4}{5}=\dfrac{48}{60}`}</M>.
              </p>
              <MB>{String.raw`\dfrac{45}{60}+\dfrac{40}{60}-\dfrac{48}{60}=\dfrac{37}{60}`}</MB>
              <p>So the value is 37/60.</p>
            </>
          }
        />

        <MCQExample
          number={11}
          difficulty="easy"
          prompt={
            <>
              Which of the following equals <M>{String.raw`\dfrac{1}{6}+\dfrac{2}{9}`}</M>?
            </>
          }
          options={["2/15", "1/3", "13/36", "7/18", "17/19"]}
          correct="7/18"
          solution={
            <>
              <p>
                A common denominator is 18: <M>{String.raw`\dfrac{1}{6}=\dfrac{3}{18}`}</M> and{" "}
                <M>{String.raw`\dfrac{2}{9}=\dfrac{4}{18}`}</M>.
              </p>
              <MB>{String.raw`\dfrac{3}{18}+\dfrac{4}{18}=\dfrac{7}{18}`}</MB>
            </>
          }
        />

        <section aria-labelledby="wrapup">
          <h3 id="wrapup" className="text-gray-200 font-semibold">
            Summary formulas to remember
          </h3>
          <MustKnow>
            <MB>{`\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{ad+bc}{bd} \\quad\\text{and}\\quad \\dfrac{a}{b}-\\dfrac{c}{d}=\\dfrac{ad-bc}{bd}`}</MB>
            These work for any nonzero denominators b and d. You can still use the LCD to keep the
            arithmetic smaller and reduce at the end.
          </MustKnow>
        </section>

        <MCQExample
          number={12}
          difficulty="easy"
          prompt={
            <>
              If b and d are nonzero integers and <M>{String.raw`ad+bc=14\,bd`}</M>, then what is{" "}
              <M>{String.raw`\dfrac{a}{b}+\dfrac{c}{d}`}</M>?
            </>
          }
          options={["12", "14", "16", "18", "20"]}
          correct="14"
          solution={
            <>
              <p>
                By the addition formula,{" "}
                <M>{String.raw`\dfrac{a}{b}+\dfrac{c}{d}=\dfrac{ad+bc}{bd}`}</M>. Given{" "}
                <M>{String.raw`ad+bc=14\,bd`}</M>, we have{" "}
                <M>{String.raw`\dfrac{ad+bc}{bd}=\dfrac{14\,bd}{bd}=14`}</M>.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}
```