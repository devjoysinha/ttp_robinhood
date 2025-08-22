import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function MathInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const __html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      className="inline-block align-baseline"
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

function MathBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const __html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return (
    <div
      className="my-4 overflow-x-auto"
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.11.2 A Second Approach to Finding the GCF | Properties of Numbers",
  description:
    "Learn a fast mental method to find the greatest common factor by scanning factors of the smaller number. Includes an MCQ, two Data Sufficiency drills, and KaTeX-rendered explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.11.2 A Second Approach to Finding the Greatest Common Factor (GCF)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The greatest common factor of a group of positive integers is the largest positive
          integer that divides all of them. Formally,
        </p>

        <MathBlock ariaLabel="Definition of greatest common divisor">
          {`\\gcd(a,b) = \\max\\{\\,d \\in \\mathbb{N} : d\\mid a \\;\\text{and}\\; d\\mid b\\,\\}`}
        </MathBlock>

        <p>
          Besides prime factorization and the Euclidean algorithm, there’s a quick mental
          technique that’s surprisingly effective: pick the smallest number in the set and
          scan its factors from largest to smallest. The first factor you encounter that
          divides every other number is the GCF.
        </p>

        <MustKnow>
          - Fast GCF scan: start with the smallest number in the set, list its factors from
          largest to smallest, and test divisibility against the other numbers. The first
          common hit is the GCF.
          - Divisibility rules and small prime checks make this scan faster.
          - This method matches prime‑factorization results but is often quicker in your head.
        </MustKnow>

        <MCQExample
          number={31}
          prompt="What is the greatest common factor of 60 and 72?"
          options={["6", "8", "12", "18", "24"]}
          correct="12"
          solution={
            <>
              <p>
                Scan factors of the smaller number (60) from the top: 60, 30, 20, 15, 12, ...
                Among these, 12 divides 72. None above 12 divides both, so the GCF is 12.
              </p>
              <p className="mt-3">
                Prime‑factor check confirms it:
              </p>
              <MathBlock ariaLabel="Prime factorization of 60 and 72 with GCF">
                {String.raw`
                  60 = 2^{2}\cdot 3\cdot 5,\quad
                  72 = 2^{3}\cdot 3^{2}
                `}
              </MathBlock>
              <MathBlock ariaLabel="GCF via minimum exponents">
                {String.raw`
                  \gcd(60,72)=2^{\min(2,3)}\cdot 3^{\min(1,2)}=2^{2}\cdot 3=12
                `}
              </MathBlock>
            </>
          }
        />

        <p>
          The same scan works for more than two numbers: list the factors of the smallest
          value and test each factor against the rest until one divides them all.
        </p>

        <ExampleCard
          number={32}
          title="Determining gcd(84, n)"
          statements={[
            "What is gcd(84, n)?",
            "1) n is a multiple of 28 and a divisor of 140.",
            "2) n is a multiple of 42 and n < 60.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We want a single numeric value for gcd(84, n).
              </p>
              <p>
                <strong>Statement (1):</strong> n is a multiple of 28 and a divisor of 140.
                The intersection is n ∈ {`{28, 140}`}. Then gcd(84, 28) = 28 and gcd(84, 140) = 28,
                so gcd(84, n) is fixed at 28. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> n is a multiple of 42 and n &lt; 60, so n = 42.
                Then gcd(84, 42) = 42. Sufficient.
              </p>
              <p>
                Each statement alone determines a unique GCF. Answer: D.
              </p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="GCF of a 3‑number set"
          statements={[
            "Set T = {60, 72, x}. What is gcd(T)?",
            "1) x is a multiple of 12.",
            "2) x is divisible by 5.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                First reduce the pair: gcd(60, 72) = 12. Then gcd(T) = gcd(12, x).
              </p>
              <p>
                <strong>Statement (1):</strong> x is a multiple of 12, so gcd(12, x) = 12. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> x divisible by 5 could be 5, 15, 20, 60, ... and
                gcd(12, x) could be 1, 3, 4, 12, ... Not unique. Not sufficient.
              </p>
              <p>Therefore, statement (1) alone suffices. Answer: A.</p>
            </>
          }
        />

        <section aria-labelledby="tips" className="space-y-3">
          <h3 id="tips" className="text-lg font-semibold text-gray-200">
            Practical tips and quick checks
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use the scan only on the smallest number to minimize work. If{" "}
              <MathInline ariaLabel="a less than b">a &lt; b</MathInline>, try factors of a first.
            </li>
            <li>
              If both numbers are even, factor out powers of 2 early. If both are multiples of 3,
              factor out a 3, and so on.
            </li>
            <li>
              For a quick double‑check, the prime‑factor route always agrees with the scan:
              take the minimum exponent of each common prime. Example:
            </li>
          </ul>
          <MathBlock ariaLabel="Example of GCF via min-exponent rule">
            {String.raw`
              84 = 2^{2}\cdot 3\cdot 7,\quad
              140 = 2^{2}\cdot 5\cdot 7
              \quad\Rightarrow\quad
              \gcd(84,140)=2^{\min(2,2)}\cdot 3^{\min(1,0)}\cdot 5^{\min(0,1)}\cdot 7^{\min(1,1)}
              = 2^{2}\cdot 7 = 28
            `}
          </MathBlock>
        </section>
      </article>
    </main>
  );
}