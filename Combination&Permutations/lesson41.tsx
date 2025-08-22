import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.8.1 Counting Triangles (No Three Collinear) | Combinations & Permutations",
  description:
    "Learn the fastest way to count triangles when no three available points are collinear: choose any 3 of the n points. Includes two quick multiple‑choice drills with full reasoning.",
};

// Lightweight KaTeX renderer (server-safe)
function Math({
  expr,
  display = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={display ? `block my-3 ${className}` : className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.8.1 Counting triangles when no three available points are collinear
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you have points in the plane with the guarantee that no three of them lie
          on the same straight line, every distinct choice of three points produces a unique
          triangle. So the task “How many triangles can we form?” becomes “How many ways can
          we pick 3 points out of n?”—a combinations question.
        </p>

        <MustKnow>
          If none of the points are collinear in triples, the number of triangles equals the
          number of 3‑point selections:
          <Math expr="\\binom{n}{3}" ariaLabel="n choose 3" />
          A common source of this setup is “n points on a circle,” which also ensures no three
          are collinear.
        </MustKnow>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="sr-only">
            Worked example with 8 points
          </h3>
          <p>
            For instance, with 8 points, the triangle count is:
          </p>
          <Math
            expr="\\binom{8}{3} = \\frac{8\\cdot 7\\cdot 6}{3\\cdot 2\\cdot 1} = 56"
            display
            ariaLabel="8 choose 3 equals 56"
          />
          <p>
            The calculation uses the standard combinations formula
            <Math
              expr="\\binom{n}{3} = \\frac{n!}{3!(n-3)!}"
              ariaLabel="n choose 3 equals n factorial over 3 factorial times n minus 3 factorial"
            />
            and simplifies by canceling common factors.
          </p>
        </section>

        <MCQExample
          number={58}
          prompt="Twelve points lie on a circle. How many different triangles have all three vertices among these points?"
          options={["110", "220", "440", "660", "1,320"]}
          correct="220"
          solution={
            <>
              <p>
                Points on a circle guarantee no three are collinear, so each set of three points
                forms one triangle. Count the 3‑point selections:
              </p>
              <Math
                expr="\\binom{12}{3} = \\frac{12\\cdot 11\\cdot 10}{3\\cdot 2\\cdot 1} = 220"
                display
                ariaLabel="12 choose 3 equals 220"
              />
              <p>Therefore, 220 triangles are possible.</p>
            </>
          }
        />

        <MCQExample
          number={59}
          prompt="Twenty points are drawn in the plane with no three collinear. How many triangles can be formed using these points as vertices?"
          options={["60", "380", "570", "1,140", "1,520"]}
          correct="1,140"
          solution={
            <>
              <p>
                With no three collinear, every selection of three points creates a unique triangle:
              </p>
              <Math
                expr="\\binom{20}{3} = \\frac{20\\cdot 19\\cdot 18}{3\\cdot 2\\cdot 1} = 20\\cdot 19\\cdot 3 = 1{,}140"
                display
                ariaLabel="20 choose 3 equals 1,140"
              />
              <p>Hence, 1,140 triangles can be formed.</p>
            </>
          }
        />

        <p>
          Big picture: when the “no three collinear” condition holds, triangle counting is purely
          positional—just choose any three points. As soon as some points fall on the same line,
          you must subtract degenerate triples that don’t make a triangle. That’s the next topic.
        </p>
      </article>
    </main>
  );
}