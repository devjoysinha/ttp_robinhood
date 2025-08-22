import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function InlineK({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="align-middle"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "12.2 Percent Word Problems — Use a Variable or Pick 100 | GMAT Math",
  description:
    "Two reliable tactics for percent word problems: represent the unknown total with a variable or assume a total of 100. Includes a quick MCQ and worked solutions with KaTeX math.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.2 Percent word problems — using a variable or picking 100
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In percent word problems, we often need a percentage of some total that isn’t given.
          There are two clean ways to proceed:
          either treat the total as an algebraic variable, or simply assume the total is 100.
          Both approaches lead to the same percent relationship—choose the one that’s faster for the numbers in front of you.
        </p>

        <MustKnow>
          When a problem asks for “what percent” of an unknown whole:
          - Use a variable for the total, such as x, and translate percents to fractions or decimals (e.g., 30% = <InlineK expr="\tfrac{3}{10}" ariaLabel="three-tenths" />).
          - Or, pick a convenient whole of 100 so that percentages convert to counts immediately.
          The math is equivalent; pick the route that minimizes computation.
        </MustKnow>

        <section aria-labelledby="movie-example" className="space-y-3">
          <h3 id="movie-example" className="text-xl font-semibold text-white">
            Quick warm-up
          </h3>
          <p>
            Suppose an unknown number of people are in a theater and 30% are women. What percent are men?
          </p>
          <p className="pl-4">
            - Pick 100: If the total is 100, then 30 are women and 70 are men, so men are 70%.
          </p>
          <p className="pl-4">
            - Use a variable: Let the total be x. Women = <InlineK expr="\tfrac{3}{10}x" ariaLabel="three-tenths x" />, so men = <InlineK expr="\tfrac{7}{10}x" ariaLabel="seven-tenths x" />, i.e., 70% of x.
          </p>
        </section>

        <MCQExample
          number={41}
          prompt="If 80 percent of the students at a school are girls, what percent are boys?"
          options={["5%", "10%", "15%", "20%", "25%"]}
          correct="20%"
          solution={
            <>
              <p className="font-semibold">Method 1 — Variable total</p>
              <p>
                Let the total be x. Girls = <InlineK expr="0.80x" ariaLabel="zero point eight x" />.
                Then boys = <InlineK expr="x - 0.80x = 0.20x" ariaLabel="x minus zero point eight x equals zero point two x" />.
                Since <InlineK expr="0.20" ariaLabel="zero point two" /> equals{" "}
                <InlineK expr="\tfrac{1}{5}" ariaLabel="one-fifth" /> or 20%, boys make up 20%.
              </p>

              <p className="font-semibold mt-3">Method 2 — Pick 100</p>
              <p>
                Assume 100 students.
                Then 80 are girls and 20 are boys, so boys are 20% of the total.
              </p>

              <p className="mt-3">Answer: 20%.</p>
            </>
          }
        />

        <blockquote className="rounded-md border border-gray-700 bg-gray-800/40 p-4">
          <div className="mb-2 font-semibold text-white">Must Know</div>
          <p className="text-gray-300">
            Selecting x versus 100 doesn’t change the answer—only the work.
            When numbers are friendly, picking 100 is often quickest.
            When relationships matter or values combine, using a variable can be clearer.
          </p>
        </blockquote>

        <p>
          In the rest of this chapter, you’ll see both strategies in action.
          Practice toggling between them so you can quickly choose the one that keeps your arithmetic—and your logic—simple.
        </p>
      </article>
    </main>
  );
}