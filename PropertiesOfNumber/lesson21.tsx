import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "4.7 Factors | Properties of Numbers",
  description:
    "Understand what factors/divisors are, key properties, and how to test divisibility quickly. Includes quick examples and one multiple‑choice problem with a full KaTeX-rendered solution.",
};

function MathInline({ expr, sr }: { expr: string; sr?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      className="not-prose inline align-baseline"
      role="math"
      aria-label={sr ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, sr }: { expr: string; sr?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      role="math"
      aria-label={sr ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">4.7 Factors</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a whole number <MathInline expr="y" /> divides another whole number{" "}
          <MathInline expr="x" /> with no remainder, we say that{" "}
          <MathInline expr="y" /> is a factor (or divisor) of{" "}
          <MathInline expr="x" />. In GMAT contexts, questions almost always deal with
          positive integers, so you can assume factors are positive unless told otherwise.
        </p>

        <p>
          A few quick examples:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            The factors of 16 are 1, 2, 4, 8, and 16, since each divides 16 evenly.
          </li>
          <li>
            The factors of 18 are 1, 2, 3, 6, 9, and 18.
          </li>
        </ul>

        <p>
          For any positive integer <MathInline expr="x" />, the smallest factor is 1 and
          the largest is <MathInline expr="x" /> itself. In particular,
          <MathBlock expr="1 \le y \le x" sr="1 is less than or equal to y, which is less than or equal to x" />
        </p>

        <p>
          There are only finitely many factors of a given positive integer. A powerful
          check you should memorize is the “integer quotient” test:
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              For positive integers <MathInline expr="x" /> and{" "}
              <MathInline expr="y" />, <MathInline expr="y" /> is a factor of{" "}
              <MathInline expr="x" /> if and only if{" "}
              <MathInline expr={String.raw`\dfrac{x}{y}`} sr="x over y" /> is an integer.
            </p>
            <p>
              Also, if <MathInline expr="y" /> is a factor of{" "}
              <MathInline expr="x" />, then <MathInline expr="1 \le y \le x" />.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="checkpoint" className="space-y-4">
          <h3 id="checkpoint" className="text-xl font-semibold text-white">
            Checkpoint: Quick Multiple‑Choice
          </h3>

          <MCQExample
            number={15}
            prompt="Let a, b, d, and x be positive integers with x = 3abd. Which of the following is NOT guaranteed to be a factor of x?"
            options={["a", "ab", "ad", "3d", "2a"]}
            correct="2a"
            solution={
              <>
                <p>
                  Use the integer-quotient test. Each choice must divide{" "}
                  <MathInline expr="x=3abd" /> without a remainder to be guaranteed a factor.
                </p>

                <p>
                  Choice A:{" "}
                  <MathInline
                    expr={String.raw`\dfrac{3abd}{a} = 3bd`}
                    sr="(3abd) divided by a equals 3bd"
                  />{" "}
                  is an integer.
                </p>
                <p>
                  Choice B:{" "}
                  <MathInline
                    expr={String.raw`\dfrac{3abd}{ab} = 3d`}
                    sr="(3abd) divided by ab equals 3d"
                  />{" "}
                  is an integer.
                </p>
                <p>
                  Choice C:{" "}
                  <MathInline
                    expr={String.raw`\dfrac{3abd}{ad} = 3b`}
                    sr="(3abd) divided by ad equals 3b"
                  />{" "}
                  is an integer.
                </p>
                <p>
                  Choice D:{" "}
                  <MathInline
                    expr={String.raw`\dfrac{3abd}{3d} = ab`}
                    sr="(3abd) divided by 3d equals ab"
                  />{" "}
                  is an integer.
                </p>

                <p>
                  Choice E:{" "}
                  <MathInline
                    expr={String.raw`\dfrac{3abd}{2a} = \dfrac{3bd}{2}`}
                    sr="(3abd) divided by 2a equals (3bd)/2"
                  />{" "}
                  is not always an integer. It is an integer only when{" "}
                  <MathInline expr="b" /> or <MathInline expr="d" /> (or both) is even. If
                  both <MathInline expr="b" /> and <MathInline expr="d" /> are odd, then{" "}
                  <MathInline expr={String.raw`\frac{3bd}{2}`} /> is not an integer.
                </p>

                <p className="font-semibold text-white">Correct answer: E (2a).</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaways" className="space-y-2">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              To prove “factor,” show the quotient is an integer:{" "}
              <MathInline expr={String.raw`y \mid x \iff \frac{x}{y} \in \mathbb{Z}`} />
              .
            </li>
            <li>
              For positive <MathInline expr="x" />, every factor{" "}
              <MathInline expr="y" /> satisfies <MathInline expr="1 \le y \le x" />.
            </li>
            <li>
              Testing each candidate by division is often the fastest way to spot the
              exception in “which is not a factor” questions.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}