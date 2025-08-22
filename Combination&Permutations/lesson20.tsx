import React from "react";
import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.19 Calculate an Unknown Group Size | Combinations",
  description:
    "Learn how to solve for an unknown group size when the number of ways to choose a subset is given. Includes a quick multiple‑choice example and clear, equation‑driven reasoning with KaTeX.",
};

function Math({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });

  if (block) {
    return (
      <div
        className="my-3 overflow-x-auto"
        aria-label={ariaLabel || expr}
        role="img"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      aria-label={ariaLabel || expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX CSS (loaded from CDN for math rendering) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.19 Solving for an Unknown Group Size from a Given Number of
          Combinations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes you’re told how many ways a smaller selection can be made
          from a larger group, but the total size of the group is unknown. In
          these cases, set up a combination equation and solve for the total
          number of items.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              If a problem states that “k people/items are chosen from a group
              in X ways,” translate directly to
              {" "}
              <Math expr="\\binom{n}{k}=X" ariaLabel="n choose k equals X" />
              {" "}
              and solve for the integer
              {" "}
              <Math expr="n" ariaLabel="n" /> with
              {" "}
              <Math expr="n\\ge k" ariaLabel="n is at least k" />.
            </li>
            <li>
              For pairs, use
              {" "}
              <Math
                expr="\\binom{n}{2}=\\dfrac{n(n-1)}{2}"
                ariaLabel="n choose 2 equals n times n minus 1 over 2"
              />
              . This is sometimes called the handshake formula.
            </li>
            <li>
              After solving any quadratic, discard non-integer or invalid (e.g.,
              negative) values of
              {" "}
              <Math expr="n" ariaLabel="n" />.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={31}
          difficulty="medium"
          prompt="A café owner wants to pick two customers for a quick survey. If there are 66 possible ways to choose those two customers, how many customers are currently in the café?"
          options={["10", "11", "12", "15", "18"]}
          correct="12"
          solution={
            <>
              <p>
                Let the total number of customers be
                {" "}
                <Math expr="n" ariaLabel="n" />
                . Since order doesn’t matter, this is a combination:
              </p>
              <Math
                block
                expr="\\binom{n}{2}=66"
                ariaLabel="n choose 2 equals 66"
              />
              <p>Apply the pairs formula:</p>
              <Math
                block
                expr="\\dfrac{n(n-1)}{2}=66"
                ariaLabel="n times n minus 1 over 2 equals 66"
              />
              <Math
                block
                expr="n(n-1)=132"
                ariaLabel="n times n minus 1 equals 132"
              />
              <Math
                block
                expr="n^2-n-132=0"
                ariaLabel="n squared minus n minus 132 equals 0"
              />
              <p>Factor the quadratic:</p>
              <Math
                block
                expr="(n-12)(n+11)=0"
                ariaLabel="open parenthesis n minus 12 close parenthesis times open parenthesis n plus 11 close parenthesis equals 0"
              />
              <p>
                So
                {" "}
                <Math expr="n=12" ariaLabel="n equals 12" />
                {" "}
                or
                {" "}
                <Math expr="n=-11" ariaLabel="n equals negative 11" />
                . A negative group size is impossible, so
                {" "}
                <strong>n = 12</strong>.
              </p>
              <p>
                Quick check:
                {" "}
                <Math
                  expr="\\binom{12}{2}=\\dfrac{12\\cdot 11}{2}=66"
                  ariaLabel="12 choose 2 equals 12 times 11 over 2 equals 66"
                />
                .
              </p>
            </>
          }
        />

        <p>
          Takeaway: when you know how many selections are possible, translate to
          a combination equation and solve. For pairs, the algebra is especially
          quick using
          {" "}
          <Math
            expr="\\binom{n}{2}=\\dfrac{n(n-1)}{2}"
            ariaLabel="n choose 2 equals n times n minus 1 over 2"
          />
          .
        </p>
      </article>
    </main>
  );
}