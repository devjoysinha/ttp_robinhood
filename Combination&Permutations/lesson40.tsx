import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { ExampleCard } from "@/components/ui/ExampleCard";

function Math({ children, block = false, className }: { children: string; block?: boolean; className?: string }) {
  const html = katex.renderToString(children, {
    displayMode: block,
    throwOnError: false,
    output: "html",
  });
  return (
    <span
      className={className}
      aria-label="mathematical expression"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.8 Counting Triangles | Combinations and Permutations",
  description:
    "Count triangles formed by points on a plane. Learn the clean choose-3 rule when no three points are collinear and how to adjust when some points lie on a line. Includes an MCQ and a Data Sufficiency example with KaTeX-rendered formulas.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.8 Counting Triangles
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many combinatorics problems ask how many distinct triangles you can form by connecting three of the available points in a plane. The answer depends on whether some of those points sit on the same straight line.
        </p>

        <MustKnow>
          Three or more points that lie on one straight line are called
          <strong> collinear</strong>. Any triple of collinear points does not form a triangle (it’s a “degenerate” triangle with zero area), so those triples must be excluded when counting.
        </MustKnow>

        <p>We’ll consider two common scenarios:</p>
        <ol className="list-inside list-decimal space-y-1 text-gray-300">
          <li>No three of the available points are collinear.</li>
          <li>At least three points are collinear.</li>
        </ol>

        <section aria-labelledby="no-collinear">
          <h3 id="no-collinear" className="mt-6 text-xl font-semibold text-white">
            Case 1: No three points are collinear
          </h3>
          <p>
            If you have n points in general position (no three on a line), then every group of three distinct points makes a triangle. Thus, the total number of triangles is simply “n choose 3”:
          </p>
          <p className="text-gray-100">
            <Math block>{String.raw`\binom{n}{3} = \frac{n(n-1)(n-2)}{6}`}</Math>
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="A set contains 7 points in the plane, and no three are collinear. How many distinct triangles can be formed?"
          options={["20", "21", "35", "42", "120"]}
          correct="35"
          solution={
            <>
              <p>
                With no three collinear, every triple of points forms a triangle. Use choose-3:
              </p>
              <p className="text-gray-100">
                <Math block>{String.raw`\binom{7}{3} = \frac{7\cdot 6\cdot 5}{3\cdot 2\cdot 1} = 35`}</Math>
              </p>
              <p>Answer: 35.</p>
            </>
          }
        />

        <section aria-labelledby="with-collinear">
          <h3 id="with-collinear" className="mt-6 text-xl font-semibold text-white">
            Case 2: Some points are collinear
          </h3>
          <p>
            A reliable approach is:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Start with all triples of points: <Math>{String.raw`\binom{n}{3}`}</Math>.</li>
            <li>Subtract any triples that are collinear (each such triple does not form a triangle).</li>
          </ul>
          <MustKnow>
            If a single line contains k of your points, then
            <Math className="mx-1">{String.raw`\binom{k}{3}`}</Math>
            triples lie on that line and must be subtracted. If multiple distinct lines each contain k<sub>i</sub> points, subtract
            <span className="mx-1">
              <Math>{String.raw`\sum_i \binom{k_i}{3}`}</Math>
            </span>
            accordingly. Be careful with overlapping configurations; use inclusion–exclusion as needed in edge cases.
          </MustKnow>
        </section>

        <ExampleCard
          number={2}
          title="Triangles from 8 points when a subset is collinear"
          statements={[
            "A set has 8 points in the plane. Four of these points lie on the same line. No other three points are collinear. How many non‑degenerate triangles can be formed?",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                Begin with all triples: <Math>{String.raw`\binom{8}{3} = 56`}</Math>.
                The 4 collinear points create degenerate triples:
                <span className="mx-1">
                  <Math>{String.raw`\binom{4}{3} = 4`}</Math>
                </span>
                that must be removed. No other collinear triples exist.
              </p>
              <p className="text-gray-100">
                <Math block>{String.raw`56 - 4 = 52`}</Math>
              </p>
              <p>Therefore, 52 triangles can be formed.</p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Data Sufficiency: Counting triangles"
          statements={[
            "Set P contains n distinct points in the plane. How many non‑degenerate triangles can be formed from P?",
            "1) No three points in P are collinear.",
            "2) n = 9.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We need a unique count of triangles.
              </p>
              <p>
                <strong>Statement (1) alone:</strong> Knowing there are no collinear triples is helpful, but without n we cannot compute <Math>{String.raw`\binom{n}{3}`}</Math>. Not sufficient.
              </p>
              <p>
                <strong>Statement (2) alone:</strong> With n = 9 but no information about collinearity, the number of triangles varies (e.g., if some triples are collinear, we subtract; if none are collinear, it’s <Math>{String.raw`\binom{9}{3}=84`}</Math>). Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> n = 9 and no three collinear imply
                <span className="mx-1">
                  <Math>{String.raw`\binom{9}{3} = 84`}</Math>
                </span>
                triangles. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Key takeaway: When no three points are collinear, use the choose‑3 rule directly. If some points align, start from <Math>{String.raw`\binom{n}{3}`}</Math> and subtract degenerate triples on each line.
        </p>
      </article>
    </main>
  );
}