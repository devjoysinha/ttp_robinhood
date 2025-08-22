import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Eq({
  expr,
  block = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  const Wrapper = block ? "div" : "span";
  return (
    <Wrapper
      aria-label={ariaLabel ?? "mathematical expression"}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.9.2 Counting Factors via Prime Factorization | Properties of Numbers",
  description:
    "Learn the fast divisor-count formula from a prime factorization, then apply it on 2,160, 12,000, and a short multiple‑choice drill. KaTeX-rendered formulas included.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9.2 How to Count the Number of Factors of an Integer
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Listing every divisor works for small integers, but it gets unwieldy
          as numbers grow. A prime‑factorization shortcut lets you count all
          positive divisors quickly—without enumerating them.
        </p>

        <section aria-labelledby="quick-warmup">
          <h3 id="quick-warmup" className="sr-only">
            Quick warm‑up
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              For 6, the divisors are 1, 2, 3, 6 → 4 divisors.
            </li>
            <li>
              For 18, the divisors are 1, 2, 3, 6, 9, 18 → 6 divisors.
            </li>
          </ul>
        </section>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Divisor‑count rule:</p>
            <p>
              If the prime factorization of a positive integer n is
              <Eq
                expr="n = p_1^{a_1}\,p_2^{a_2}\,\cdots\,p_k^{a_k}"
                block
                ariaLabel="n equals p one to the a one times p two to the a two up to p k to the a k"
              />
              then the total number of positive divisors of n is
              <Eq
                expr="(a_1+1)(a_2+1)\cdots(a_k+1)."
                block
                ariaLabel="open parenthesis a one plus one close parenthesis times open parenthesis a two plus one close parenthesis up to open parenthesis a k plus one close parenthesis"
              />
            </p>
            <p className="text-sm text-gray-400">
              Tip: Make sure every prime&rsquo;s exponent is explicit—even 1.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="worked-2160" className="space-y-3">
          <h3 id="worked-2160" className="text-white font-semibold">
            Worked example: How many divisors does 2,160 have?
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Prime factorize:
              <Eq
                expr="2160 = 2^4 \cdot 3^3 \cdot 5^1"
                block
                ariaLabel="two thousand one hundred sixty equals two to the fourth times three to the third times five to the first"
              />
            </li>
            <li>
              Apply the rule:
              <Eq
                expr="(4+1)(3+1)(1+1) = 5\cdot4\cdot2 = 40"
                block
                ariaLabel="open parenthesis four plus one close parenthesis times open parenthesis three plus one close parenthesis times open parenthesis one plus one close parenthesis equals five times four times two equals forty"
              />
            </li>
          </ol>
          <p>Therefore, 2,160 has 40 positive divisors.</p>
        </section>

        <section aria-labelledby="worked-12000" className="space-y-3">
          <h3 id="worked-12000" className="text-white font-semibold">
            Worked example: How many divisors does 12,000 have?
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Prime factorize:
              <Eq
                expr="12{,}000 = 2^5 \cdot 3^1 \cdot 5^3"
                block
                ariaLabel="twelve thousand equals two to the fifth times three to the first times five to the third"
              />
            </li>
            <li>
              Apply the rule:
              <Eq
                expr="(5+1)(1+1)(3+1) = 6\cdot2\cdot4 = 48"
                block
                ariaLabel="open parenthesis five plus one close parenthesis times open parenthesis one plus one close parenthesis times open parenthesis three plus one close parenthesis equals six times two times four equals forty eight"
              />
            </li>
          </ol>
          <p>So, 12,000 has 48 positive divisors.</p>
        </section>

        <MCQExample
          number={18}
          prompt="Let x be the number of positive divisors of 240, and let y be the number of positive divisors of 120. What is the value of x^2 − y^2?"
          options={["0", "2", "12", "144", "256"]}
          correct="144"
          solution={
            <>
              <p className="mb-2">
                Find x from the factorization of 240:
              </p>
              <Eq
                expr="240 = 2^4 \cdot 3^1 \cdot 5^1 \quad\Rightarrow\quad x = (4+1)(1+1)(1+1) = 5\cdot2\cdot2 = 20"
                block
                ariaLabel="two hundred forty equals two to the fourth times three to the first times five to the first, therefore x equals open parenthesis four plus one close parenthesis times open parenthesis one plus one close parenthesis times open parenthesis one plus one close parenthesis equals five times two times two equals twenty"
              />
              <p className="mb-2">Find y from the factorization of 120:</p>
              <Eq
                expr="120 = 2^3 \cdot 3^1 \cdot 5^1 \quad\Rightarrow\quad y = (3+1)(1+1)(1+1) = 4\cdot2\cdot2 = 16"
                block
                ariaLabel="one hundred twenty equals two to the third times three to the first times five to the first, therefore y equals open parenthesis three plus one close parenthesis times open parenthesis one plus one close parenthesis times open parenthesis one plus one close parenthesis equals four times two times two equals sixteen"
              />
              <p className="mb-2">Compute the requested difference of squares:</p>
              <Eq
                expr="x^2 - y^2 = 20^2 - 16^2 = 400 - 256 = 144"
                block
                ariaLabel="x squared minus y squared equals twenty squared minus sixteen squared equals four hundred minus two hundred fifty six equals one hundred forty four"
              />
            </>
          }
        />

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="sr-only">
            Key takeaway
          </h3>
          <p>
            The divisor count depends only on the exponents in the prime
            factorization. Expose every exponent, add one to each, and multiply
            the results.
          </p>
        </section>
      </article>
    </main>
  );
}