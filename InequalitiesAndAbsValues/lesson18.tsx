import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is globally included once in app/layout.tsx (e.g., import "katex/dist/katex.min.css";)
import katex from "katex";

function Math({ expr, display = false, className }: { expr: string; display?: boolean; className?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
  });
  return (
    <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export const metadata: Metadata = {
  title: "6.17 Checking Solutions in Absolute‑Value Equations | Inequalities",
  description:
    "Learn when absolute‑value equations have no solutions and how to check for extraneous roots, especially when variables appear on both sides. Includes two multiple‑choice drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.17 Checking Solutions in Absolute‑Value Equations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A reliable way to solve absolute‑value equations is to split into cases by removing the bars and
          considering the expression inside as positive or negative. For instance, solving
          <Math className="mx-1" expr="|x+1|=2" /> means you examine
          <Math className="mx-1" expr="x+1=2" /> and <Math className="mx-1" expr="-(x+1)=2" />, then check both results.
        </p>

        <p>
          However, you don’t always need to do any algebra to know an equation has no solution. If the absolute value
          equals a negative number, it’s impossible. For example,
          <Math className="mx-1" expr="|x+1|=-2" /> cannot be true for any real <Math expr="x" /> because an absolute value
          is never negative.
        </p>

        <MustKnow>
          If an absolute value equals a negative number, the equation has no solution.
        </MustKnow>

        <p>
          A common trap occurs when you “solve” an absolute‑value equation mechanically and get answers that don’t
          actually work. For <Math className="mx-1" expr="|x+1|=-2" />, the two case equations produce
          <Math className="mx-1" expr="x=-3" /> and <Math className="mx-1" expr="x=1" />, but neither satisfies the original
          equation upon substitution:
        </p>

        <ul className="list-disc pl-5">
          <li>
            <Math expr="x=-3" /> gives <Math className="mx-1" expr="|{-3}+1|=|{-2}|=2\neq -2" />.
          </li>
          <li>
            <Math expr="x=1" /> gives <Math className="mx-1" expr="|1+1|=|2|=2\neq -2" />.
          </li>
        </ul>

        <p>
          Takeaway: solving by cases is fine, but always verify in the original equation, especially when the constant
          on the right side is negative.
        </p>

        <p>
          Now consider equations with variables on both sides, such as{" "}
          <Math className="mx-1" expr="|x-1|=2x" />. Solving the two cases:
        </p>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <p className="mb-1 font-semibold text-gray-200">Case analysis</p>
          <ul className="list-disc pl-5">
            <li>
              Case A: <Math className="mx-1" expr="x-1=2x" /> ⇒ <Math className="mx-1" expr="-x=1" /> ⇒{" "}
              <Math className="mx-1" expr="x=-1" />.
            </li>
            <li>
              Case B: <Math className="mx-1" expr="-(x-1)=2x" /> ⇒ <Math className="mx-1" expr="-x+1=2x" /> ⇒{" "}
              <Math className="mx-1" expr="1=3x" /> ⇒ <Math className="mx-1" expr="x=\tfrac13" />.
            </li>
          </ul>
          <p className="mt-3">
            Now check both in the original equation <Math className="mx-1" expr="|x-1|=2x" />:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <Math className="mx-1" expr="x=-1" /> ⇒ <Math className="mx-1" expr="|{-1}-1|=|{-2}|=2" /> and{" "}
              <Math className="mx-1" expr="2(-1)=-2" />. Not equal, so <Math expr="-1" /> is extraneous.
            </li>
            <li>
              <Math className="mx-1" expr="x=\tfrac13" /> ⇒ <Math className="mx-1" expr="|\tfrac13-1|=\tfrac23" /> and{" "}
              <Math className="mx-1" expr="2\cdot \tfrac13=\tfrac23" />. Works.
            </li>
          </ul>
          <p className="mt-3">
            Only <Math expr="\tfrac13" /> is a true solution.
          </p>
        </div>

        <MustKnow>
          When a variable appears on both sides of an absolute‑value equation, the case work may produce extraneous
          roots. Always substitute back into the original equation to confirm which solutions are valid.
        </MustKnow>

        <MCQExample
          number={47}
          prompt={
            <>
              Which of the following equations has no solution?
              <br />
              I. <Math expr="|x-3|=2" />
              <br />
              II. <Math expr="|x+3|=-2" />
              <br />
              III. <Math expr="|2x+3|=x" />
            </>
          }
          options={["I only", "II only", "III only", "II and III", "I, II, and III"]}
          correct="II and III"
          solution={
            <>
              <p>
                I. <Math className="mx-1" expr="|x-3|=2" /> is an absolute value equal to a positive constant, so it has
                two solutions. Not “no solution.”
              </p>
              <p>
                II. <Math className="mx-1" expr="|x+3|=-2" /> cannot be true because an absolute value is never
                negative. No solution.
              </p>
              <p>
                III. <Math className="mx-1" expr="|2x+3|=x" /> requires the right side to be nonnegative, so any
                candidate with <Math expr="x&lt;0" /> will fail. Solving the cases yields candidate values{" "}
                <Math expr="x=-3" /> and <Math expr="x=-1" />, both negative. Checking either gives nonnegative left
                side and negative right side, so neither works. No solution.
              </p>
              <p>Therefore, II and III have no solutions. Answer: D.</p>
            </>
          }
        />

        <MCQExample
          number={48}
          prompt={
            <>
              If <Math expr="|x-1|=-2x" />, which of the following could be the value of <Math expr="x" />?
              <br />
              I. <Math expr="-1" /> II. <Math expr="\tfrac13" /> III. <Math expr="1" />
            </>
          }
          options={["I only", "II only", "I and II", "II and III", "I, II, and III"]}
          correct="I only"
          solution={
            <>
              <p>
                Since <Math expr="|x-1|=-2x" />, the right side must be nonnegative, so <Math expr="-2x\ge 0" /> ⇒{" "}
                <Math expr="x\le 0" />.
              </p>
              <p>
                Case work:
                <br />
                • If <Math expr="x-1\ge 0" />, then <Math expr="x-1=-2x" /> ⇒ <Math expr="3x=1" /> ⇒{" "}
                <Math expr="x=\tfrac13" />, which contradicts <Math expr="x\le 0" /> and also fails when checked:
                <Math className="mx-1" expr="|\tfrac13-1|=\tfrac23\neq -\tfrac23" />.
                <br />
                • If <Math expr="x-1&lt;0" />, then <Math expr="-(x-1)=-2x" /> ⇒ <Math expr="-x+1=-2x" /> ⇒{" "}
                <Math expr="x=-1" />, which satisfies <Math expr="|{-1}-1|=2=-2(-1)" />.
              </p>
              <p>
                Among the choices, only <Math expr="-1" /> works. Answer: A.
              </p>
            </>
          }
        />

        <p>
          Bottom line: absolute‑value equations are about consistency with signs and definitions. If the right side is
          negative, there’s no solution. If variables appear on both sides, do the case work but always verify in the
          original to weed out extraneous results.
        </p>
      </article>
    </main>
  );
}