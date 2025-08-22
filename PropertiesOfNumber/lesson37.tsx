import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.11.1 Finding the GCF | Properties of Numbers",
  description:
    "Learn a reliable, step‑by‑step method to find the greatest common factor (GCF) using prime factorization. Includes one multiple‑choice example with full reasoning and key takeaways.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

// Server component: render KaTeX HTML on the server for performance.
function KaTeX({ expr, display = false, ariaLabel, className }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });

  return (
    <span
      aria-label={ariaLabel ?? "mathematical expression"}
      role="math"
      className={className}
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
          4.11.1 Finding the GCF
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The greatest common factor (GCF) of a set of positive integers is the
          largest integer that divides each number in the set. A fast, reliable
          way to find it is to compare the prime factorizations and keep only
          what the numbers share in common.
        </p>

        <section aria-labelledby="steps-gcf" className="space-y-3">
          <h3 id="steps-gcf" className="text-lg font-semibold text-white">
            A systematic process
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Prime‑factorize every number, writing factors with exponents.
              Example format:
              <span className="ms-2">
                <KaTeX expr="360 = 2^3 \cdot 3^2 \cdot 5" />
              </span>
            </li>
            <li>
              Identify the primes that appear in every factorization (shared
              primes).
            </li>
            <li>
              For each shared prime, keep the smallest exponent across the
              numbers.
            </li>
            <li>
              Multiply those selected prime powers. The product is the GCF. If
              there are no shared primes, the GCF is
              <span className="ms-1">
                <KaTeX expr="1" ariaLabel="one" />
              </span>
              .
            </li>
          </ol>
        </section>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-lg font-semibold text-white">
            Worked example (walkthrough)
          </h3>
          <p>Find the greatest common factor of 60 and 72.</p>
          <div className="rounded-md bg-gray-900/40 p-4">
            <div className="space-y-2">
              <div className="flex flex-col gap-1">
                <span className="text-gray-200">Prime factorizations:</span>
                <div className="md:flex md:items-center md:gap-6">
                  <KaTeX
                    expr="60 = 2^2 \cdot 3 \cdot 5"
                    display
                    ariaLabel="sixty equals two squared times three times five"
                  />
                  <KaTeX
                    expr="72 = 2^3 \cdot 3^2"
                    display
                    ariaLabel="seventy two equals two cubed times three squared"
                  />
                </div>
              </div>
              <p className="mt-2">
                Shared primes:
                <span className="ms-2">
                  <KaTeX expr="2 \text{ and } 3" />
                </span>
                . Take the smaller exponents:
                <span className="ms-2">
                  <KaTeX expr="2^2 \text{ and } 3^1" />
                </span>
                .
              </p>
              <p>
                Multiply:
                <span className="ms-2">
                  <KaTeX expr="2^2 \cdot 3 = 12" />
                </span>
                . So the GCF is
                <span className="ms-1">
                  <KaTeX expr="12" />
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        <MCQExample
          number={34}
          prompt="What is the greatest common factor of 60 and 72?"
          options={["2", "4", "6", "8", "12"]}
          correct="12"
          solution={
            <>
              <p>Use prime factorizations and keep the overlaps with least exponents.</p>
              <div className="my-2">
                <KaTeX expr="60 = 2^2 \cdot 3 \cdot 5 \quad\text{and}\quad 72 = 2^3 \cdot 3^2" display />
              </div>
              <p>
                Common primes are
                <span className="mx-1">
                  <KaTeX expr="2" />
                </span>
                and
                <span className="mx-1">
                  <KaTeX expr="3" />
                </span>
                . Take
                <span className="mx-1">
                  <KaTeX expr="2^2" />
                </span>
                and
                <span className="mx-1">
                  <KaTeX expr="3^1" />
                </span>
                .
              </p>
              <p>
                Therefore,
                <span className="ms-2">
                  <KaTeX expr="2^2 \cdot 3 = 12" />
                </span>
                , so the GCF is 12.
              </p>
            </>
          }
        />

        <p>
          Be careful: if the numbers have no prime factors in common, the GCF is
          1 (never 0) since 1 divides every integer.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              If a set of positive integers shares no prime factors, its GCF is{" "}
              <KaTeX expr="1" ariaLabel="one" />.
            </li>
            <li>
              For any set of positive integers, the LCM is at least as large as
              the biggest number in the set, and the GCF is at most as large as
              the smallest number in the set.
            </li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}