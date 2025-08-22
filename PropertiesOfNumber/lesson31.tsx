import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.10 Least Common Multiple (LCM) | Properties of Numbers",
  description:
    "Understand what the least common multiple is and how to identify it. Includes a crisp definition, a simple example, and a quick practice check with full reasoning.",
};

function KMath({
  expr,
  display = false,
  className = "",
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
    fleqn: false,
    output: "html",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={className}
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12" role="main">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.10 The Least Common Multiple (LCM)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The least common multiple of a collection of positive integers is the
          smallest positive integer that every number in the collection divides
          evenly into. Said differently, it’s the smallest positive integer that
          is simultaneously a multiple of all the numbers in the set.
        </p>

        <MustKnow>
          The LCM of a set of positive integers is the least positive integer
          that is a multiple of each number in the set. Equivalently, it is the
          least positive integer that is divisible by every number in the set.
        </MustKnow>

        <section aria-labelledby="example-heading" className="space-y-3">
          <h3
            id="example-heading"
            className="text-base font-semibold text-white"
          >
            Quick example
          </h3>
          <p>
            Consider the pair 2 and 5. The smallest positive integer that both 2
            and 5 divide into is 10, so the least common multiple is 10:
          </p>
          <KMath
            display
            expr="\\operatorname{lcm}(2, 5) = 10"
            ariaLabel="The L C M of 2 and 5 equals 10"
            className="text-gray-100"
          />
        </section>

        <MCQExample
          number={1}
          prompt="What is the least common multiple of 6 and 15?"
          options={["24", "30", "45", "60", "90"]}
          correct="30"
          solution={
            <>
              <p className="mb-2">
                Use prime factorization and take the highest power of each prime
                that appears:
              </p>
              <KMath display expr="6 = 2 \\cdot 3 \\quad\\text{and}\\quad 15 = 3 \\cdot 5" />
              <p className="mt-2">
                Combine the primes using the maximum exponents across the two
                factorizations:
              </p>
              <KMath display expr="\\operatorname{lcm}(6,15) = 2^{1}\\cdot 3^{1}\\cdot 5^{1} = 30" />
              <p className="mt-2">Therefore, the LCM is 30.</p>
            </>
          }
        />
      </article>
    </main>
  );
}