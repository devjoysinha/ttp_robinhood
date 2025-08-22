import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX renderer with graceful fallback
// If katex is not available at build time, we fall back to code text.
let katexLib: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  katexLib = require("katex");
} catch {
  // no-op, fallback will be used
}

function Katex({
  expr,
  block = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  if (katexLib) {
    const html = katexLib.renderToString(expr, {
      throwOnError: false,
      displayMode: block,
      strict: "ignore",
      trust: false,
      output: "html",
    });
    return (
      <span
        className={className}
        role="math"
        aria-label={ariaLabel || expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <code
      className={className}
      aria-label={ariaLabel || expr}
      role="math"
      style={{ whiteSpace: "nowrap" }}
    >
      {expr}
    </code>
  );
}

export const metadata: Metadata = {
  title: "11.9 Comparing Like Variables in Ratios | Ratios",
  description:
    "Learn to compare quantities by expressing them with a shared variable. Includes step‑by‑step examples, clear takeaways, and two practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.9 Comparing Like Variables in Ratios
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A reliable way to keep ratio work organized is to compare quantities that share the
          same variable. When two relationships connect through a common letter, re‑express each
          quantity using that letter and then simplify the ratio.
        </p>

        <p>
          Suppose
          {" "}
          <Katex expr={"A=2B"} ariaLabel="A equals 2 B" />{" "}
          and
          {" "}
          <Katex expr={"B=3C"} ariaLabel="B equals 3 C" />.
          We want the ratio of
          {" "}
          <Katex expr={"A:C"} ariaLabel="A to C" />.
          Since <Katex expr={"B"} /> links both equations, write everything in terms of
          {" "}
          <Katex expr={"B"} />.
        </p>

        <p>
          From <Katex expr={"B=3C"} />, we get
          {" "}
          <Katex expr={"C=\\tfrac{B}{3}"} ariaLabel="C equals B over 3" />.
          Then
          {" "}
          <Katex expr={"\\dfrac{A}{C} \\,=\\, \\dfrac{2B}{\\,B/3\\,} \\,=\\, 6"} ariaLabel="A over C equals 2 B over B over 3 which equals 6" />.
          So <Katex expr={"A:C = 6:1"} ariaLabel="A to C equals 6 to 1" />.
        </p>

        <MustKnow>
          To simplify a ratio, first express both quantities using a shared variable, then reduce.
          Doing so often cancels the common variable and leaves a constant, “useful” ratio.
        </MustKnow>

        <MCQExample
          number={46}
          prompt={
            <>
              At a dealership, half of the convertibles equals one‑fifth of all cars. Also, a quarter
              of the sports cars equals one‑eighth of all cars. What is the ratio of convertibles to
              sports cars?
            </>
          }
          options={["4 to 5", "5 to 8", "8 to 5", "16 to 5", "16 to 3"]}
          correct="4 to 5"
          solution={
            <>
              <p>
                Let <Katex expr={"t"} /> be the total number of cars, <Katex expr={"c"} /> the number of
                convertibles, and <Katex expr={"s"} /> the number of sports cars.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  “Half of convertibles equals one‑fifth of total”:
                  {" "}
                  <Katex expr={"\\tfrac{1}{2}c = \\tfrac{1}{5}t"} /> so
                  {" "}
                  <Katex expr={"c = \\tfrac{2}{5}t"} />.
                </li>
                <li>
                  “A quarter of sports cars equals one‑eighth of total”:
                  {" "}
                  <Katex expr={"\\tfrac{1}{4}s = \\tfrac{1}{8}t"} /> so
                  {" "}
                  <Katex expr={"s = \\tfrac{1}{2}t"} />.
                </li>
              </ul>
              <p>
                Then
                {" "}
                <Katex expr={"\\dfrac{c}{s} = \\dfrac{\\tfrac{2}{5}t}{\\tfrac{1}{2}t} = \\dfrac{2}{5}\\cdot\\dfrac{2}{1} = \\dfrac{4}{5}"} />
                , i.e., 4 to 5.
              </p>
            </>
          }
        />

        <MustKnow>
          Part–to–total ratios are easier when the total is written in terms of a single variable.
          For instance, if Total = Part 1 + Part 2 and Part 2 = 3×Part 1, let Part 1 = x. Then
          Total = x + 3x = 4x and
          {" "}
          <Katex expr={"\\dfrac{\\text{Part 1}}{\\text{Total}} = \\dfrac{x}{4x} = \\tfrac{1}{4}"} />.
        </MustKnow>

        <MCQExample
          number={47}
          prompt={
            <>
              At a teachers’ conference, 50% of math teachers are older than 40, and 60% of science
              teachers are younger than 40. No one is exactly 40. If 44% of all attendees are older than
              40, science teachers make up what fraction of the total?
            </>
          }
          options={["3/7", "3/4", "3/5", "4/5", "5/6"]}
          correct="3/5"
          solution={
            <>
              <p>
                Let <Katex expr={"M"} /> = number of math teachers and <Katex expr={"S"} /> = number of science
                teachers. Over‑40 counts:
              </p>
              <ul className="list-disc pl-6">
                <li>Math over 40: <Katex expr={"0.5M"} /></li>
                <li>Science over 40: <Katex expr={"0.4S"} /> (since 60% are under 40)</li>
              </ul>
              <p>
                Given 44% of everyone is over 40:
                {" "}
                <Katex expr={"0.5M + 0.4S = 0.44(M + S)"} />
              </p>
              <p>
                Rearranging:
                {" "}
                <Katex expr={"0.5M + 0.4S = 0.44M + 0.44S \\;\\Rightarrow\\; 0.06M = 0.04S"} />, so
                {" "}
                <Katex expr={"M = \\tfrac{2}{3}S"} />.
              </p>
              <p>
                The science fraction of the whole is
                {" "}
                <Katex expr={"\\dfrac{S}{M+S} = \\dfrac{S}{\\tfrac{2}{3}S + S} = \\dfrac{S}{\\tfrac{5}{3}S} = \\tfrac{3}{5}"} />.
              </p>
            </>
          }
        />

        <p>
          Summary: when two expressions share a variable, convert both to that same variable and reduce.
          If the shared variable cancels, the resulting constant is a stable, meaningful ratio.
        </p>
      </article>
    </main>
  );
}