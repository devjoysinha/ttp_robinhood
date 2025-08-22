import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure `katex/dist/katex.min.css` is loaded globally (e.g., in app/layout.tsx)

function MathInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    output: "htmlAndMathml",
  });
  return (
    <span
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
    output: "htmlAndMathml",
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.10.1 Finding the LCM | Properties of Numbers",
  description:
    "Learn a fast, reliable method to compute the least common multiple (LCM) using prime exponents, with worked examples and a quick quiz.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.10.1 Finding the Least Common Multiple (LCM)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The least common multiple of a set of positive integers is the smallest
          positive number that each integer in the set divides evenly. The most
          dependable way to compute it is to work with prime factorizations and
          take the highest power of every prime that appears.
        </p>

        <MustKnow>
          LCM via prime exponents: prime‑factorize each integer. For every prime p
          that appears, keep the greatest exponent found across the set, and
          multiply those prime powers together. In symbols:
          <MathBlock ariaLabel="LCM formula">
            {String.raw`\mathrm{LCM}(n_1,n_2,\dots) = \prod_{p} p^{\max\big(v_p(n_1),\,v_p(n_2),\,\dots\big)}`}
          </MathBlock>
          where <MathInline>{String.raw`v_p(n)`}</MathInline> is the exponent of p in the
          prime factorization of n.
        </MustKnow>

        <section aria-labelledby="procedure-heading" className="space-y-3">
          <h3 id="procedure-heading" className="text-xl font-semibold text-white">
            A dependable procedure
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Prime‑factorize each integer and write factors with exponents.
              Example: <MathInline>{String.raw`24 = 2^3\cdot 3^1`}</MathInline>.
            </li>
            <li>
              For each prime that shows up anywhere, select the largest exponent
              you see among the numbers.
            </li>
            <li>Multiply those chosen prime powers to get the LCM.</li>
          </ol>
          <p className="text-sm text-gray-400">
            Common pitfall: do not add exponents across numbers—always take the
            maximum exponent of each prime.
          </p>
        </section>

        <MCQExample
          number={29}
          prompt="What is the least common multiple of 24 and 60?"
          options={["120", "180", "240", "360", "720"]}
          correct="120"
          solution={
            <>
              <p>
                Prime‑factorize both numbers:
                <br />
                <MathInline>{String.raw`24 = 2^3\cdot 3^1`}</MathInline>,{" "}
                <MathInline>{String.raw`60 = 2^2\cdot 3^1\cdot 5^1`}</MathInline>.
              </p>
              <p>
                Take the highest exponent of each prime that appears:
                <br />
                <MathInline>{String.raw`2^3,\quad 3^1,\quad 5^1`}</MathInline>.
              </p>
              <p>
                Multiply:
                <br />
                <MathInline>{String.raw`\mathrm{LCM} = 2^3\cdot 3\cdot 5 = 8\cdot 3\cdot 5 = 120`}</MathInline>.
              </p>
              <p>Therefore, the answer is 120.</p>
            </>
          }
        />

        <MCQExample
          number={30}
          prompt="Find the least common multiple of 18, 24, and 30."
          options={["180", "240", "360", "540", "720"]}
          correct="360"
          solution={
            <>
              <p>
                Factor each:
                <br />
                <MathInline>{String.raw`18 = 2^1\cdot 3^2`}</MathInline>,{" "}
                <MathInline>{String.raw`24 = 2^3\cdot 3^1`}</MathInline>,{" "}
                <MathInline>{String.raw`30 = 2^1\cdot 3^1\cdot 5^1`}</MathInline>.
              </p>
              <p>
                Max exponents by prime:
                <br />
                <MathInline>{String.raw`2^3,\quad 3^2,\quad 5^1`}</MathInline>.
              </p>
              <p>
                Multiply:
                <br />
                <MathInline>{String.raw`\mathrm{LCM} = 2^3\cdot 3^2\cdot 5 = 8\cdot 9\cdot 5 = 360`}</MathInline>.
              </p>
              <p>The least common multiple is 360.</p>
            </>
          }
        />

        <p>
          Big picture: the LCM collects every prime that occurs in the set, using
          the largest power needed so that all the numbers divide the result.
          This makes it ideal for synchronizing cycles, aligning denominators, and
          solving divisibility constraints.
        </p>
      </article>
    </main>
  );
}