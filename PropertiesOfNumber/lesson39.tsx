import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.11.3 LCM and GCF When One Number Divides the Other | Properties of Numbers",
  description:
    "Quick rule: If one positive integer divides the other, the LCM is the larger number and the GCF is the smaller. Includes a worked example and one data‑sufficiency drill.",
};

// Lightweight KaTeX renderer (SSR-safe)
function K({
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
  });
  const Comp = display ? "div" : ("span" as const);
  return (
    <Comp
      className={className}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">4. Properties of Numbers</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.11.3 LCM and GCF When One Number Divides the Other
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two positive integers have a divisor–multiple relationship, the least common multiple and
          the greatest common factor are immediate—no computation required.
        </p>

        <K
          display
          expr={`\\text{If } y\\mid x \\text{ (with } x,y\\in\\mathbb{Z}^+\\text{), then}\\quad \\operatorname{lcm}(x,y)=x\\quad\\text{and}\\quad \\gcd(x,y)=y.`}
          ariaLabel="If y divides x, then l c m of x and y equals x, and g c f of x and y equals y."
          className="text-lg"
        />

        <p>
          Intuition from prime factorization: if y divides x, every prime exponent in y is less than or
          equal to the corresponding exponent in x. The LCM takes the larger exponent (so it matches x),
          while the GCF takes the smaller exponent (so it matches y).
        </p>

        <MustKnow>
          If y divides x for positive integers x and y, the larger number is their LCM and the smaller
          number is their GCF. In symbols:
          <K expr={`y\\mid x\\;\\Rightarrow\\; \\operatorname{lcm}(x,y)=x,\\; \\gcd(x,y)=y.`} />
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-white font-semibold text-lg">
            Quick example
          </h3>
          <p>
            Since 25 divides 100, we can read off the results:
          </p>
          <K
            display
            expr={`\\operatorname{lcm}(100,25)=100\\quad\\text{and}\\quad \\gcd(100,25)=25.`}
            ariaLabel="LCM of 100 and 25 equals 100, and GCF equals 25."
          />
        </section>

        <MCQExample
          number={31}
          prompt="Let a and b be positive integers and b divides a. What is lcm(a, b)?"
          options={["a", "b", "ab", "a/b", "Cannot be determined"]}
          correct="a"
          solution={
            <>
              <p>
                Because b | a, the larger number a already contains all prime factors of b with at least
                the same exponents. The LCM takes the larger exponents, so it equals a.
              </p>
              <K expr={`b\\mid a\\;\\Rightarrow\\; \\operatorname{lcm}(a,b)=a.`} />
            </>
          }
        />

        <ExampleCard
          number={32}
          title="LCM/GCF from a divisor–multiple relationship"
          statements={[
            "For positive integers m and n, what is gcd(m, n)?",
            "1) n divides m",
            "2) m < 100 and n is prime",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want the greatest common factor of m and n.
              </p>
              <p>
                <strong>Statement (1):</strong> If n | m, then every prime power of n is contained in m
                with at least the same exponent. Therefore, gcd(m, n) = n. This uniquely determines the
                answer. Sufficient.
              </p>
              <K expr={`n\\mid m\\;\\Rightarrow\\; \\gcd(m,n)=n.`} />
              <p>
                <strong>Statement (2):</strong> Knowing that m is less than 100 and n is prime does not
                tell us how m and n overlap in prime factors. The gcd could be 1, n, or some other value
                depending on m. Not sufficient.
              </p>
              <p>
                Conclusion: Statement (1) alone is sufficient; statement (2) alone is not. Answer: A.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Takeaway: whenever one positive integer divides the other, the LCM is the multiple and the GCF
          is the divisor. Use the rule instantly and save time.
        </p>
      </article>
    </main>
  );
}