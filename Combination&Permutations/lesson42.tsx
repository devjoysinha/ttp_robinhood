import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX renderer (server-side). Falls back gracefully if KaTeX isn't available.
function KInline({
  expr,
  sr,
}: {
  expr: string;
  sr?: string;
}) {
  try {
    // Avoid importing CSS here; expect it to be included globally by the app.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const katex = require("katex");
    const html = katex.renderToString(expr, {
      throwOnError: false,
      displayMode: false,
      strict: "ignore",
      output: "html",
    });
    return (
      <span
        role="math"
        aria-label={sr ?? expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <code aria-label={sr ?? expr} className="whitespace-nowrap">
        {expr}
      </code>
    );
  }
}

function KBlock({
  expr,
  sr,
}: {
  expr: string;
  sr?: string;
}) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const katex = require("katex");
    const html = katex.renderToString(expr, {
      throwOnError: false,
      displayMode: true,
      strict: "ignore",
      output: "html",
    });
    return (
      <div
        role="math"
        aria-label={sr ?? expr}
        className="my-3 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <pre
        aria-label={sr ?? expr}
        className="my-3 overflow-x-auto rounded-md bg-gray-900/40 p-3 text-gray-200"
      >
        {expr}
      </pre>
    );
  }
}

export const metadata: Metadata = {
  title:
    "16.8.2 Counting Triangles with Collinear Points | Combinations & Permutations",
  description:
    "How to count triangles when some available points are collinear. Learn the subtract‑the‑degenerate‑triples rule, see it on a 3×3 grid, then practice with one MCQ and one Data Sufficiency example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.8.2 Counting triangles when three or more available points are collinear
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A triangle is determined by three non‑collinear points. So whenever a selection
          of three points happens to lie on a single straight line, that selection does not
          produce a triangle. This small wrinkle means we have to adjust the simple
          “choose any three points” approach when some of the available points are collinear.
        </p>

        <MustKnow>
          Three points on the same line never form a triangle. When some of the available
          points are collinear, first count all 3‑point selections, then subtract the
          collinear triples.
        </MustKnow>

        <section aria-labelledby="counting-rule">
          <h3 id="counting-rule" className="text-xl font-semibold text-white">
            The counting rule
          </h3>
          <p>
            Suppose there are n labeled points in the plane, and one or more lines among
            them contain at least three of those points. The total number of triangles is:
          </p>
          <KBlock
            expr={String.raw`(\text{# triangles})=\binom{n}{3}-\sum_{\text{each line } L}\binom{m_L}{3}`}
            sr="Number of triangles equals n choose 3 minus the sum over each line of m sub L choose 3"
          />
          <p>
            Here m<sub>L</sub> is the number of available points on line L (only lines with
            m<sub>L</sub> ≥ 3 contribute). In words:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Start with all possible 3‑point selections, <KInline expr={String.raw`\binom{n}{3}`} sr="n choose 3" />.
            </li>
            <li>
              Subtract every degenerate selection of three collinear points,
              one line at a time via <KInline expr={String.raw`\binom{m_L}{3}`} sr="m sub L choose 3" />.
            </li>
          </ul>
        </section>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick grid example (3×3)
          </h3>
          <p>
            Consider the nine points of a 3×3 lattice (think of points A through I on
            a tic‑tac‑toe board). First count all 3‑point selections:
          </p>
          <KBlock expr={String.raw`\binom{9}{3}=84`} sr="9 choose 3 equals 84" />
          <p>
            Now remove collinear triples. There are 3 horizontal lines of 3 points,
            3 vertical lines of 3 points, and 2 main diagonals of 3 points.
            That&apos;s 3 + 3 + 2 = 8 collinear triples to subtract:
          </p>
          <KBlock expr={String.raw`84-8=76`} sr="84 minus 8 equals 76" />
          <p>Therefore, the grid yields 76 distinct triangles.</p>
        </section>

        <MCQExample
          number={60}
          prompt="In a diagram, points A, B, C, and D are collinear, and points F, G, H, I, and J are collinear. Using only those nine points as possible vertices, how many triangles can be formed?"
          options={["20", "48", "60", "70", "84"]}
          correct="70"
          solution={
            <>
              <p>
                There are 4 points on the top line and 5 points on the bottom line,
                for a total of 9 points. Begin with all 3‑point selections:
                <KInline expr={String.raw`\binom{9}{3}=84`} sr="9 choose 3 equals 84" />.
              </p>
              <p>
                Subtract selections that are collinear:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  From the top line (4 points):{" "}
                  <KInline expr={String.raw`\binom{4}{3}=4`} sr="4 choose 3 equals 4" />.
                </li>
                <li>
                  From the bottom line (5 points):{" "}
                  <KInline expr={String.raw`\binom{5}{3}=10`} sr="5 choose 3 equals 10" />.
                </li>
              </ul>
              <p>
                Total to subtract: 4 + 10 = 14. Hence the number of triangles is{" "}
                <KInline expr={String.raw`84-14=70`} sr="84 minus 14 equals 70" />.
              </p>
              <p>Answer: 70.</p>
            </>
          }
        />

        <MustKnow>
          When several groups of points lie on different lines, subtract{" "}
          <KInline expr={String.raw`\binom{m}{3}`} sr="m choose 3" /> for each line
          with m ≥ 3 points. There&apos;s no overlap between lines because three
          distinct points cannot lie on two different lines at once.
        </MustKnow>

        <ExampleCard
          number={61}
          title="How many triangles from k points?"
          statements={[
            "If there are k points in the plane (k > 3), how many triangles can be formed whose vertices are among the k points?",
            "1) Exactly one set of three of the k points is collinear.",
            "2) k = 6",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want the exact triangle count. With collinearity in play, the count is
                <KInline
                  expr={String.raw`\binom{k}{3}-\text{(# collinear triples)}`}
                  sr="k choose 3 minus the number of collinear triples"
                />
                .
              </p>

              <p>
                <strong>Statement (1):</strong> We know there is exactly one collinear triple,
                so the count would be{" "}
                <KInline expr={String.raw`\binom{k}{3}-1`} sr="k choose 3 minus 1" />.
                But k is unknown, so the expression is not a single numeric value.
                Not sufficient.
              </p>

              <p>
                <strong>Statement (2):</strong> k = 6. If no three are collinear, the answer is{" "}
                <KInline expr={String.raw`\binom{6}{3}=20`} sr="6 choose 3 equals 20" />.
                If there exists at least one collinear triple, we must subtract it (or them),
                changing the result. We can&apos;t tell which case applies. Not sufficient.
              </p>

              <p>
                <strong>Together:</strong> With k = 6 and exactly one collinear triple, the count is{" "}
                <KInline expr={String.raw`\binom{6}{3}-1=20-1=19`} sr="6 choose 3 minus 1 equals 19" />.
                A single value is determined. Sufficient.
              </p>

              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Bottom line: start with all 3‑point choices and subtract any selections that line up.
          As soon as you know how many collinear triples exist on each line, the triangle
          count falls out immediately.
        </p>
      </article>
    </main>
  );
}