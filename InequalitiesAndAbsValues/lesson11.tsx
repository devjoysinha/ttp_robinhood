import "katex/dist/katex.min.css";
import katex from "katex";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, block = false, className = "" }: { expr: string; block?: boolean; className?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    output: "htmlAndMathml",
  });
  const Tag = block ? "div" : "span";
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "6.12 Equations with Absolute Values | Inequalities and Absolute Values",
  description:
    "Learn a reliable method for solving absolute-value equations: isolate, split into two cases, and solve. Includes four quick multiple‑choice examples with full reasoning and KaTeX-rendered math.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">6. Inequalities and Absolute Values</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">6.12 Equations with Absolute Values</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Absolute-value bars hide the sign of what’s inside them. So when you solve an equation that includes an
          absolute value, you must account for both the positive and negative possibilities of the inner expression.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Playbook for |expression| = constant</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>First isolate the absolute value.</li>
              <li>
                If the constant is negative, there is no solution. Otherwise split into two cases:
                <div className="mt-2">
                  <Math block expr="|E|=c \;\Rightarrow\; E=c \;\; \text{or} \;\; E=-c" />
                </div>
              </li>
              <li>Solve each case and check in the original equation if needed.</li>
            </ul>
          </div>
        </MustKnow>

        <p>Let’s apply this method to a few quick checks.</p>

        <MCQExample
          number={29}
          prompt={
            <>
              If <Math expr="|x|+6=10" /> which of the following could be the value of x?
            </>
          }
          options={["5", "2", "0", "-4", "-5"]}
          correct="-4"
          solution={
            <>
              <p>
                Isolate the absolute value: <Math expr="|x|=4" />. Split into two cases:
              </p>
              <p className="mt-1">
                <Math expr="x=4 \quad \text{or} \quad x=-4" />
              </p>
              <p>
                Only <Math expr="-4" /> appears among the choices, so the answer is <strong>-4</strong>.
              </p>
              <p className="mt-2">
                Common pitfall: considering only the positive case and missing the negative counterpart.
              </p>
            </>
          }
        />

        <MCQExample
          number={30}
          prompt={
            <>
              If <Math expr="|2x+4|=12" /> which of the following could be a value of x?
            </>
          }
          options={["5", "3", "0", "-5", "-8"]}
          correct="-8"
          solution={
            <>
              <p>Split after isolating the absolute value:</p>
              <p className="mt-1">
                <Math expr="2x+4=12 \;\; \text{or} \;\; 2x+4=-12" />
              </p>
              <p className="mt-1">
                From the first, <Math expr="x=4" />; from the second, <Math expr="x=-8" />.
              </p>
              <p>
                Only <Math expr="-8" /> appears in the options, so <strong>-8</strong> is correct.
              </p>
            </>
          }
        />

        <MCQExample
          number={31}
          prompt={
            <>
              When graphed on the x-axis, the solutions to <Math expr="|3x+6|=12" /> are at which x-values?
            </>
          }
          options={[
            "x = 2 only",
            "x = 2 and x = -6",
            "x = -2 and x = 6",
            "x = -4 only",
            "No real solutions",
          ]}
          correct="x = 2 and x = -6"
          solution={
            <>
              <p>Solve by cases:</p>
              <p className="mt-1">
                <Math expr="3x+6=12 \;\; \text{or} \;\; 3x+6=-12" />
              </p>
              <p className="mt-1">
                <Math expr="x=2 \;\; \text{or} \;\; x=-6" />.
              </p>
              <p>
                Therefore the solution set is {`{ -6, 2 }`}. On a number line, you’d mark points at <Math expr="-6" /> and{" "}
                <Math expr="2" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={32}
          prompt={
            <>
              If <Math expr="|2n+10|=20" /> which of the following lists all possible values of n?
            </>
          }
          options={[
            "Only n = 5",
            "Only n = -15",
            "n = 5 and n = 15",
            "n = -5 and n = -15",
            "n = 5 and n = -15",
          ]}
          correct="n = 5 and n = -15"
          solution={
            <>
              <p>Split into the two cases:</p>
              <p className="mt-1">
                <Math expr="2n+10=20 \;\; \text{or} \;\; 2n+10=-20" />
              </p>
              <p className="mt-1">
                <Math expr="n=5 \;\; \text{or} \;\; n=-15" />.
              </p>
              <p>
                Both values work, so the complete set is <strong>n = 5 and n = -15</strong>.
              </p>
            </>
          }
        />

        <p>
          Big picture: to solve absolute-value equations efficiently, isolate the absolute value, split into two cases,
          and solve. Always check whether the constant is negative before splitting—if it is, you’re done (no solution).
        </p>
      </article>
    </main>
  );
}