import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "4.3.2 Properties of One | Properties of Numbers",
  description:
    "A concise guide to the special properties of the number 1: factors, powers, parity, and why 1 is not prime. Includes clear KaTeX-rendered identities.",
};

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap"
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      aria-label={ariaLabel}
      role="img"
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
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3.2 Properties of One
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The number 1 plays a unique role in arithmetic and algebra. It behaves
          as the multiplicative identity and has special traits with factors,
          exponents, and parity. Keep the following facts at your fingertips:
        </p>

        <section aria-labelledby="one-rules" className="space-y-4">
          <h3 id="one-rules" className="text-xl font-semibold text-white">
            Core facts about 1
          </h3>

          <ul className="list-inside list-disc space-y-3">
            <li>
              1 divides every integer. For any integer k, we have{" "}
              <MathInline expr={"1\\mid k"} ariaLabel="one divides k" /> since{" "}
              <MathInline expr={"k = 1\\cdot k"} ariaLabel="k equals 1 times k" />
              .
            </li>

            <li className="space-y-2">
              Raising 1 to any power still gives 1:
              <MathBlock expr={"1^n = 1\\quad \\text{for any integer } n"} ariaLabel="one to the n equals one for any integer n" />
            </li>

            <li className="space-y-2">
              Multiplying or dividing by 1 leaves a value unchanged:
              <MathBlock
                expr={"a\\cdot 1 = a\\quad\\text{and}\\quad \\dfrac{a}{1} = a"}
                ariaLabel="a times one equals a and a divided by one equals a"
              />
            </li>

            <li>1 is odd.</li>

            <li>
              1 is the only integer with exactly one positive factor (itself).
            </li>

            <li>
              1 is not prime. The smallest prime number is 2, because primes
              must have exactly two distinct positive divisors.
            </li>
          </ul>
        </section>

        <MustKnow>
          Commit the special behaviors of 0 and 1 to memory. They show up
          everywhere—in simplifying expressions, solving equations, and checking
          edge cases.
        </MustKnow>

        <section aria-labelledby="quick-notes" className="space-y-3">
          <h3 id="quick-notes" className="text-xl font-semibold text-white">
            Quick notes and identities
          </h3>
          <p>
            Because 1 is the multiplicative identity, it often helps to insert
            or remove a factor of 1 without changing a value. For example,
            rationalizing a denominator or rewriting units can rely on{" "}
            <MathInline
              expr={"\\dfrac{a}{a} = 1\\ (a\\neq 0)"}
              ariaLabel="a over a equals one when a is not zero"
            />
            .
          </p>
          <p>
            Also, be careful not to misclassify 1 as prime. A quick test is to
            count positive divisors: primes must have exactly two; 1 has only one.
          </p>
        </section>
      </article>
    </main>
  );
}