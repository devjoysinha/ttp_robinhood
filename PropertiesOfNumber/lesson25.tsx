import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX server-side renderer
import "katex/dist/katex.min.css";
import katex from "katex";

// Lightweight KaTeX component for SSR math rendering
function K({
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
    displayMode: block,
    strict: "warn",
    output: "html",
  });
  const role = "math";
  const label = ariaLabel ?? expr.replace(/\s+/g, " ").trim();
  if (block) {
    return (
      <div
        className="my-3 overflow-x-auto"
        role={role}
        aria-label={label}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role={role}
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.9.1 Prime Factorization | Properties of Numbers",
  description:
    "Break any composite number into its prime building blocks using factor trees, then apply prime factorizations in GMAT-style questions. Includes a worked example and a multiple-choice problem with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9.1 Prime Factorization
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every composite integer can be written as a product of prime numbers.
          That list of primes—together with their exponents—is called the number’s
          prime factorization. A quick, reliable way to find it is to build a
          factor tree: keep splitting a composite number into two factors until
          only primes remain, then collect those primes.
        </p>

        <section aria-labelledby="factor-tree-192" className="space-y-3">
          <h3 id="factor-tree-192" className="sr-only">
            Factor tree example for 192
          </h3>
          <p>
            For instance, to factor 192, note that the digit sum is{" "}
            <K expr="1+9+2=12" /> (a multiple of 3), so 192 is divisible by 3:
          </p>
          <K
            block
            expr={
              "192=3\\cdot 64=3\\cdot 8\\cdot 8=3\\cdot 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2=2^{6}\\cdot 3"
            }
            ariaLabel="192 equals 3 times 64 equals 3 times 8 times 8 equals 3 times six twos equals two to the sixth times three"
          />

          <figure className="mt-4">
            <Image
              src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/content_asset/asset/1888/lesson382.svg"
              alt="Prime factorization tree for 192: 192 splits to 3 and 64; 64 splits to 8 and 8; each 8 splits to 2, 2, and 2—yielding six 2s and one 3."
              width={880}
              height={420}
              priority
              unoptimized
              className="h-auto w-full rounded-md ring-1 ring-white/10"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              A factor tree helps you peel a composite number down to primes. For
              192 you get six 2s and one 3, i.e., <K expr="2^{6}\\cdot 3" />.
            </figcaption>
          </figure>

          <p>
            Once the tree is fully prime, multiply the leaves (or just tally
            each prime’s exponent). For 192 we found{" "}
            <K expr="192=(2^{6})(3^{1})" />—six factors of 2 and one factor of 3.
          </p>
        </section>

        <MustKnow>
          A factor tree is a fast route to the prime factorization of a composite
          number. When you’re done, your answer should be written as primes raised
          to exponents (for example, 192 = 2^6 · 3).
        </MustKnow>

        <p>
          Don’t mix up “prime factorization” with listing every divisor. Prime
          factorization records only the prime building blocks (with exponents),
          not all possible factors of the number.
        </p>

        <p>
          Many GMAT problems quietly hinge on prime factorization. Instead of
          asking for the factorization outright, they may give an equation with
          variables and primes and ask you to evaluate an expression.
        </p>

        <MCQExample
          number={17}
          prompt={
            <>
              Integers a and b and primes x and y with <K expr="x&lt;y" /> satisfy{" "}
              <K expr="288=x^{a}y^{b}" />. What is the value of{" "}
              <K expr="\\dfrac{y}{x}-\\dfrac{a}{b}" />?
            </>
          }
          options={["–2", "–1", "0", "1", "2"]}
          correct="–1"
          solution={
            <>
              <p>
                First find the prime factorization of 288. One clean path is:
              </p>
              <K
                block
                expr={
                  "288=2\\cdot 144=2\\cdot 12\\cdot 12=2\\cdot (2\\cdot 2\\cdot 3)\\cdot (2\\cdot 2\\cdot 3)=2^{5}\\cdot 3^{2}"
                }
                ariaLabel="288 equals two to the fifth times three squared"
              />
              <p>
                Because <K expr="x&lt;y" />, we match <K expr="x=2" /> and{" "}
                <K expr="y=3" />, with <K expr="a=5" /> and <K expr="b=2" />. Then
                compute:
              </p>
              <K
                block
                expr={"\\dfrac{y}{x}-\\dfrac{a}{b}=\\dfrac{3}{2}-\\dfrac{5}{2}=\\dfrac{-2}{2}=-1"}
                ariaLabel="y over x minus a over b equals three halves minus five halves equals negative one"
              />
              <p>Therefore, the answer is –1.</p>
            </>
          }
        />
      </article>
    </main>
  );
}