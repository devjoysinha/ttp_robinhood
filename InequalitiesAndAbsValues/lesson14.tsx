import type { Metadata } from "next";
import katex from "katex";
import "server-only";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Small helpers to render KaTeX on the server
function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} aria-hidden="false" />;
}

function MathBlock({ expr, className = "" }: { expr: string; className?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: true,
  });
  return (
    <div className={className} role="math" aria-hidden="false" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export const metadata: Metadata = {
  title: "6.13 | When |x + y| equals |x| + |y| | Inequalities & Absolute Value",
  description:
    "Understand the triangle inequality |x + y| ≤ |x| + |y| and the exact conditions for equality. Includes quick checks, Must‑Know takeaways, and practice MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.13 When |x + y| Equals |x| + |y|
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A cornerstone fact about absolute value is the triangle inequality:
          <span className="ms-2"><MathInline expr="\\lvert a+b\\rvert \\le \\lvert a\\rvert + \\lvert b\\rvert" /></span>.
          In words, the absolute value of a sum never exceeds the sum of the absolute values.
          You can sanity‑check this with a few quick substitutions.
        </p>

        <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              With a = 5 and b = 4:
              <MathInline expr="\\;\\lvert 5+4\\rvert = 9 = \\lvert 5\\rvert + \\lvert 4\\rvert" /> (equality).
            </li>
            <li>
              With a = -5 and b = 4:
              <MathInline expr="\\;\\lvert -5+4\\rvert = 1 \\lt 9 = \\lvert -5\\rvert + \\lvert 4\\rvert" /> (strict inequality).
            </li>
            <li>
              With a = 5 and b = -4:
              <MathInline expr="\\;\\lvert 5+(-4)\\rvert = 1 \\lt 9 = \\lvert 5\\rvert + \\lvert -4\\rvert" />.
            </li>
            <li>
              With a = -5 and b = -4:
              <MathInline expr="\\;\\lvert -5+(-4)\\rvert = 9 = \\lvert -5\\rvert + \\lvert -4\\rvert" /> (equality).
            </li>
          </ul>
        </div>

        <MustKnow>
          The triangle inequality:
          <span className="ms-2"><MathInline expr="\\lvert a+b\\rvert \\le \\lvert a\\rvert + \\lvert b\\rvert" /></span>.
          Equality holds exactly when a and b point in the same “direction” on the number line (both nonnegative or both nonpositive) or when at least one of them is 0.
        </MustKnow>

        <p>
          In particular, for nonzero a and b,
          <span className="ms-2"><MathInline expr="\\lvert a+b\\rvert = \\lvert a\\rvert + \\lvert b\\rvert" /></span>
          if and only if a and b have the same sign.
        </p>

        <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <p className="mb-3 font-semibold text-gray-100">Equality snapshots</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              a = 5, b = 4:
              <MathInline expr="\\;\\lvert 5+4\\rvert = 9 \\;=\\; \\lvert 5\\rvert + \\lvert 4\\rvert" />.
            </li>
            <li>
              a = -5, b = -4:
              <MathInline expr="\\;\\lvert -5+(-4)\\rvert = 9 \\;=\\; \\lvert -5\\rvert + \\lvert -4\\rvert" />.
            </li>
          </ul>
        </div>

        <MCQExample
          number={37}
          prompt="If pq > 0, which of the following must be true?"
          options={["|p| > |q|", "|p| < |q|", "|p| ≥ q", "|p| ≤ q", "|pq| ≥ pq"]}
          correct="|pq| ≥ pq"
          solution={
            <>
              <p>
                The condition pq &gt; 0 means p and q share the same sign (both positive or both negative).
                Since pq is positive, <MathInline expr="\\lvert pq\\rvert = pq" /> and hence
                <MathInline expr="\\lvert pq\\rvert \\ge pq" /> is true as an equality for all such p, q.
              </p>
              <p>
                None of the other options must always hold; they can flip depending on the magnitudes and signs of p and q.
              </p>
            </>
          }
        />

        <section aria-labelledby="when-equality">
          <h3 id="when-equality" className="text-xl font-semibold text-white">
            When does |x + y| equal |x| + |y|?
          </h3>
          <p>
            The only ways to get equality in the triangle inequality are:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>One of the terms is 0; or</li>
            <li>The two terms are nonzero and have the same sign.</li>
          </ul>

          <MustKnow>
            If a and b are nonzero and
            <span className="ms-2"><MathInline expr="\\lvert a+b\\rvert = \\lvert a\\rvert + \\lvert b\\rvert" /></span>,
            then a and b must have the same sign.
          </MustKnow>
        </section>

        <MCQExample
          number={38}
          prompt="If |x + y| = |x| + |y|, which of the following can be the value of xy? I. −8   II. 0   III. 17"
          options={["II only", "III only", "I and II", "I and III", "II and III"]}
          correct="II and III"
          solution={
            <>
              <p>
                Equality means x and y have the same sign or one is 0.
                So xy cannot be negative, eliminating I. If x or y is 0, then xy = 0 works (II).
                With both positive (e.g., x = 17, y = 1), xy = 17 works (III). Therefore, II and III.
              </p>
            </>
          }
        />

        <MCQExample
          number={39}
          prompt="If p ≠ 0, q ≠ 0 and |p + q| = |p| + |q|, which of the following must be true?"
          options={["p < q", "p > q", "pq > 0", "p > 0", "q < 0"]}
          correct="pq > 0"
          solution={
            <>
              <p>
                For nonzero p and q, equality occurs only when p and q have the same sign.
                Thus their product is positive: <MathInline expr="pq \\gt 0" />. The other comparisons
                need not hold.
              </p>
            </>
          }
        />

        <MCQExample
          number={40}
          prompt="If |x + y| = |x| + |y| = 14, which of the following could equal x + y? I. 14   II. 7   III. −14"
          options={["I only", "II only", "III only", "I and II", "I and III"]}
          correct="I and III"
          solution={
            <>
              <p>
                Equality allows x and y to be both nonnegative (sum 14 is possible, e.g., 6 and 8) or both nonpositive
                (sum −14 is possible, e.g., −6 and −8). A sum of 7 would give |x + y| = 7, not 14.
              </p>
            </>
          }
        />

        <MCQExample
          number={41}
          prompt="If (|m + n|)/(|m| + |n|) = 1 and m < 0, with m and n nonzero, which must be true? I. n < 0   II. m + n < 0   III. mn > 0"
          options={["I only", "II only", "III only", "I and III", "I, II, and III"]}
          correct="I, II, and III"
          solution={
            <>
              <p>
                The ratio equals 1 exactly when <MathInline expr="\\lvert m+n\\rvert = \\lvert m\\rvert + \\lvert n\\rvert" />, which
                for nonzero terms requires m and n to share a sign. Given m &lt; 0, n is also negative (I).
                Then their sum is negative (II), and the product of two negatives is positive (III).
              </p>
            </>
          }
        />

        <MustKnow>
          Summary:
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              Always <MathInline expr="\\lvert a+b\\rvert \\le \\lvert a\\rvert + \\lvert b\\rvert" />.
            </li>
            <li>
              Equality if and only if a and b have the same sign or one is 0.
            </li>
            <li>
              For nonzero a, b with equality, <MathInline expr="ab \\gt 0" />.
            </li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}