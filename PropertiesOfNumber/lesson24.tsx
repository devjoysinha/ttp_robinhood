import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import "katex/dist/katex.min.css";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title: "4.9 Prime Numbers | Properties of Numbers",
  description:
    "Understand what prime numbers are, how they differ from composite numbers, why 2 is unique, and see the complete list of primes below 100. Includes a KaTeX‑rendered primality check idea.",
};

const primesUnder100 = [
  2, 3, 5, 7, 11,
  13, 17, 19, 23, 29,
  31, 37, 41, 43, 47,
  53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

function KaTeXBlock({
  tex,
  ariaLabel,
}: {
  tex: string;
  ariaLabel?: string;
}) {
  const html = renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <div
      className="katex-display my-4"
      role="img"
      aria-label={ariaLabel}
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
          4.9 Prime Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A prime number is an integer greater than 1 that has exactly two
          positive divisors: 1 and the number itself. For instance, among the
          integers 2 through 10, the primes are 2, 3, 5, and 7, because no
          other positive integers divide these numbers evenly.
        </p>

        <p>
          Numbers greater than 1 that are not prime are called composite, since
          they have additional factors beyond 1 and the number itself. For
          example, 4 is composite because 2 × 2 = 4, and 6 is composite because
          2 × 3 = 6.
        </p>

        <MustKnow>
          • A prime has exactly two positive factors: 1 and itself.
          • The number 2 is the only even prime; every other even integer has 2
          as a factor and is therefore composite.
        </MustKnow>

        <section aria-labelledby="prime-checking" className="space-y-3">
          <h3 id="prime-checking" className="text-xl font-semibold text-white">
            A helpful way to check for primality
          </h3>
          <p>
            To test whether a number n is prime, you only need to check for
            divisors up to its square root. If no integer d in that range
            divides n, then n is prime.
          </p>
          <KaTeXBlock
            ariaLabel="An integer n greater than 1 is prime if and only if there is no integer d, with 2 less than or equal to d less than or equal to the square root of n, such that d divides n."
            tex={
              "n>1\\text{ is prime }\\iff \\nexists\\ d\\in\\mathbb{Z}\\ \\text{with}\\ 2\\le d\\le \\sqrt{n}\\ \\text{such that } d\\mid n"
            }
          />
        </section>

        <section aria-labelledby="primes-list" className="space-y-3">
          <h3 id="primes-list" className="text-xl font-semibold text-white">
            Primes less than 100
          </h3>
          <p>
            It’s useful to know the primes under 100—they come up often and can
            speed up your work on factorization and divisibility questions.
          </p>

          <figure>
            <figcaption className="mb-3 text-sm text-gray-400">
              Prime numbers below 100
            </figcaption>
            <ul
              role="list"
              className="grid grid-cols-5 gap-2 rounded-lg border border-gray-700 bg-gray-800/40 p-4 sm:grid-cols-8 md:grid-cols-10"
            >
              {primesUnder100.map((p) => (
                <li
                  key={p}
                  className="flex items-center justify-center rounded-md bg-gray-900/40 px-3 py-2 text-base font-medium text-gray-100"
                >
                  {p}
                </li>
              ))}
            </ul>
          </figure>

          <MustKnow>Commit the primes below 100 to memory.</MustKnow>
        </section>

        <section aria-labelledby="composite-reminder" className="space-y-3">
          <h3
            id="composite-reminder"
            className="text-xl font-semibold text-white"
          >
            Prime vs. composite recap
          </h3>
          <p>
            • Prime: exactly two positive factors (1 and the number). •
            Composite: at least one additional positive factor beyond 1 and the
            number. • 2 is the only even prime; all other even integers are
            composite.
          </p>
        </section>
      </article>
    </main>
  );
}