import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "6.12.1 Isolate the Absolute Value First | Inequalities & Absolute Value",
  description:
    "Learn the golden rule for equations with absolute value: isolate the bars before you split into cases. Includes two multiple‑choice examples with clear, KaTeX‑rendered solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.12.1 Always Isolate the Absolute Value Before Splitting
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When an equation contains an absolute value, your first move is to get the absolute value expression by itself on one side. Only after that should you split into the two sign cases. This mirrors the usual order of operations: clean up the outside first, then handle what’s inside the bars.
        </p>

        <MustKnow>
          To solve an equation with absolute value:
          <br />
          1) Isolate the absolute value term. <br />
          2) Replace <InlineMath>|E| = k</InlineMath> with the two equations <InlineMath>E = k</InlineMath> and <InlineMath>E = -k</InlineMath>. <br />
          3) Solve both cases and check for any extraneous results if needed.
        </MustKnow>

        <section aria-labelledby="worked-ideas" className="space-y-4">
          <h3 id="worked-ideas" className="text-xl font-semibold text-white">
            Why isolating comes first
          </h3>
          <p>
            Suppose you have <InlineMath>5\lvert 2x - 1\rvert - 5 = 20</InlineMath>. Adding 5 and then dividing by 5 leaves
          </p>
          <BlockMath math={"\\lvert 2x - 1\\rvert = 5"} />
          <p>
            Now it’s safe to split into <InlineMath>2x - 1 = 5</InlineMath> and <InlineMath>2x - 1 = -5</InlineMath>. If you split too early, you’ll create extra, incorrect branches. Isolate first; split second.
          </p>
        </section>

        <MCQExample
          number={33}
          prompt={
            <>
              If <InlineMath math={"5\\lvert 2x - 1\\rvert - 5 = 20"} /> , what
              is the sum of all solutions?
            </>
          }
          options={["3", "2", "1", "0", "-1"]}
          correct="1"
          solution={
            <>
              <p className="mb-2">Isolate the absolute value:</p>
              <BlockMath math={"5\\lvert 2x - 1\\rvert = 25 \\quad\\Rightarrow\\quad \\lvert 2x - 1\\rvert = 5"} />
              <p className="mb-2">Split into two linear cases:</p>
              <BlockMath math={"2x - 1 = 5 \\quad\\Rightarrow\\quad x = 3"} />
              <BlockMath math={"2x - 1 = -5 \\quad\\Rightarrow\\quad x = -2"} />
              <p>
                The sum is <InlineMath>3 + (-2) = 1</InlineMath>.
              </p>
            </>
          }
        />

        <MCQExample
          number={34}
          prompt={
            <>
              If <InlineMath math={"300\\lvert x^2 + x - 9\\rvert = 900"} />,
              what is the sum of all possible values of <InlineMath>x</InlineMath>?
            </>
          }
          options={["7", "4", "1", "-2", "-7"]}
          correct="-2"
          solution={
            <>
              <p className="mb-2">Isolate the absolute value:</p>
              <BlockMath math={"\\lvert x^2 + x - 9\\rvert = 3"} />
              <p className="mb-2">Split into two quadratic equations:</p>
              <div className="space-y-2">
                <BlockMath math={"x^2 + x - 9 = 3 \\;\\Rightarrow\\; x^2 + x - 12 = 0 \\;\\Rightarrow\\; (x+4)(x-3)=0 \\;\\Rightarrow\\; x=-4,\\;3"} />
                <BlockMath math={"x^2 + x - 9 = -3 \\;\\Rightarrow\\; x^2 + x - 6 = 0 \\;\\Rightarrow\\; (x+3)(x-2)=0 \\;\\Rightarrow\\; x=-3,\\;2"} />
              </div>
              <p>
                Add all solutions: <InlineMath>-4 + 3 + (-3) + 2 = -2</InlineMath>.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="space-y-2">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Treat the absolute value as a container you must isolate before opening. Once isolated, convert <InlineMath>|E| = k</InlineMath> into two equations and solve both. This approach keeps your work organized and prevents invalid branches.
          </p>
        </section>
      </article>
    </main>
  );
}