import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "4.11 Greatest Common Factor (GCF) | Properties of Numbers",
  description:
    "Understand common factors and the greatest common factor (GCF). See clear examples, a quick multiple‑choice check, and a Data Sufficiency drill with full reasoning.",
};

function TeX({
  tex,
  display = false,
  ariaLabel,
}: {
  tex: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  const Tag: any = display ? "div" : "span";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel ?? tex}
      className={display ? "my-2" : ""}
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
          4.11 Greatest Common Factor (GCF)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common factor of a collection of positive integers is any integer
          that divides each number in the collection with no remainder. For
          instance, 5 is a factor of both 10 and 20, so it’s a common factor of
          the set {`{10, 20}`}.
        </p>

        <p>
          The greatest common factor (GCF) of a set of positive integers is the
          largest integer that divides every member of the set. As a quick
          example:
        </p>

        <p>
          <TeX tex={`\\gcd(8,\\,12,\\,16) = 4`} ariaLabel="g c d of 8, 12, and 16 equals 4" />
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              The GCF of a set of positive integers is the biggest integer that
              divides all of them.
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Prime factor view: write each number as a product of primes and
                take the minimum exponent of each prime across the set.
              </li>
              <li>
                For two positive integers a and b:
                <TeX
                  display
                  tex={`\\gcd(a,b)\\,\\cdot\\,\\operatorname{lcm}(a,b)\\;=\\;|ab|`}
                  ariaLabel="g c d times l c m equals the absolute value of a times b"
                />
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="What is the greatest common factor of 18 and 24?"
          options={["2", "3", "6", "12", "18"]}
          correct="6"
          solution={
            <>
              <p className="mb-2">Prime factorizations:</p>
              <TeX
                display
                tex={`18 = 2\\cdot 3^{2}\\quad\\text{and}\\quad 24 = 2^{3}\\cdot 3`}
                ariaLabel="18 equals 2 times 3 squared, and 24 equals 2 cubed times 3"
              />
              <p>
                Take the minimum power of each shared prime:
                <TeX
                  tex={`\\gcd(18,24)=2^{\\min(1,3)}\\cdot 3^{\\min(2,1)}=2^1\\cdot 3^1=6`}
                  ariaLabel="g c d of 18 and 24 equals 6"
                />
                So the GCF is 6.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Data Sufficiency: Pinning down a GCF"
          statements={[
            "Let x and y be positive integers. What is gcd(x, y)?",
            "1) x = 48 and y is a multiple of 18",
            "2) lcm(x, y) = 144 and x = 48",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We want a single value for <TeX tex="\\gcd(x,y)" ariaLabel="g c d of x and y" />.
              </p>
              <p>
                <strong>Statement (1):</strong> x = 48 and y is a multiple of 18. Try y = 18:
                <TeX tex="\\gcd(48,18)=6" ariaLabel="g c d of 48 and 18 equals 6" />. Try y = 36:
                <TeX tex="\\gcd(48,36)=12" ariaLabel="g c d of 48 and 36 equals 12" />. Different results →
                not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> lcm(x, y) = 144 and x = 48. Using
                <TeX
                  tex="\\gcd(x,y)\\cdot \\operatorname{lcm}(x,y) = xy"
                  ariaLabel="g c d times l c m equals x y"
                />
                we get
                <TeX tex="\\gcd(x,y) = \\dfrac{xy}{\\operatorname{lcm}(x,y)} = \\dfrac{48\\,y}{144} = \\dfrac{y}{3}" />
                which depends on y. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> From lcm(48, y) = 144, prime factorizations give
                y = <TeX tex="2^{a}\\cdot 3^{2}" ariaLabel="2 to the a times 3 squared" /> with 0 ≤ a ≤ 4 and no other primes.
                Combined with “y is a multiple of 18,” we must have a ≥ 1, so
                y ∈ {18, 36, 72, 144}. Then:
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  y = 18 → <TeX tex="\\gcd(48,18)=6" />
                </li>
                <li>
                  y = 36 → <TeX tex="\\gcd(48,36)=12" />
                </li>
              </ul>
              <p>Still not a unique value. Answer: E.</p>
            </>
          }
        />

        <p>
          Takeaway: to find a GCF, think divisibility and prime structure. The
          “greatest” part just means you’ve collected all the common prime
          factors with their smallest exponents across the set.
        </p>
      </article>
    </main>
  );
}