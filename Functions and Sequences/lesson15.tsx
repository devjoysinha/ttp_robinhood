import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.15 Functions and Number Properties | Functions & Sequences",
  description:
    "Evaluate functions defined in words and by number properties. Practice with greatest-prime, distinct prime factors, and total divisor-count examples, with clear reasoning.",
};

// Helper components to render KaTeX on the server
function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <span
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, { throwOnError: false }),
      }}
    />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? expr}
      className="my-2 overflow-x-auto"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, {
          throwOnError: false,
          displayMode: true,
        }),
      }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.15 Functions and Properties of Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A function is a rule that takes an input and returns exactly one
          output. Many familiar functions are written with symbols and
          variables—for example,{" "}
          <KInline expr={"f(x)=x^2"} ariaLabel="f of x equals x squared" />{" "}
          means “square the input.”
        </p>

        <p>
          Not every function has to be defined by a formula. Sometimes the rule
          is given in words. When that happens, your job is the same: interpret
          the rule precisely and apply it to the given input.
        </p>

        <MustKnow>
          Be ready to evaluate functions described verbally. Translate the words
          into a step‑by‑step rule, then carry out that rule on the input.
        </MustKnow>

        <p>
          Here’s a function defined by a sentence instead of an algebraic
          expression:
        </p>

        <KBlock
          expr={"g(x)\\text{ is the greatest prime number }\\le x"}
          ariaLabel="g of x is the greatest prime number less than or equal to x"
        />

        <p>
          For instance,{" "}
          <KInline expr={"g(8)=7"} ariaLabel="g of 8 equals 7" /> because the
          largest prime no greater than 8 is 7;{" "}
          <KInline expr={"g(20)=19"} ariaLabel="g of 20 equals 19" />; and{" "}
          <KInline expr={"g(23)=23"} ariaLabel="g of 23 equals 23" />.
        </p>

        <p>Another example of a verbal definition is:</p>

        <KBlock
          expr={"h(x)\\text{ equals the sum of the prime factors of }x\\text{, counted with multiplicity}"}
          ariaLabel="h of x equals the sum of the prime factors of x counted with multiplicity"
        />

        <p>
          To find <KInline expr={"h(12)"} />, factor 12 and add its prime
          factors:
        </p>
        <KBlock expr={"12=2\\times 2\\times 3"} ariaLabel="12 equals 2 times 2 times 3" />
        <KBlock expr={"h(12)=2+2+3=7"} ariaLabel="h of 12 equals 2 plus 2 plus 3 equals 7" />

        <section aria-labelledby="practice-heading" className="space-y-6">
          <h3 id="practice-heading" className="sr-only">
            Practice
          </h3>

          <MCQExample
            number={37}
            prompt='The function f is defined by: "f(x) is the greatest prime number less than or equal to x." Which of the following is NOT equal to 13?'
            options={["f(13)", "f(14)", "f(15)", "f(16)", "f(17)"]}
            correct="f(17)"
            solution={
              <>
                <p>
                  For x = 13, 14, 15, and 16, the largest prime ≤ x is 13. So{" "}
                  <KInline expr={"f(13)=f(14)=f(15)=f(16)=13"} ariaLabel="f of 13 equals f of 14 equals f of 15 equals f of 16 equals 13" />
                  .
                </p>
                <p>
                  But 17 is prime, so{" "}
                  <KInline expr={"f(17)=17"} ariaLabel="f of 17 equals 17" />. The only value not equal to 13 is f(17).
                </p>
              </>
            }
          />

          <MCQExample
            number={38}
            prompt="Let f(n) be the number of distinct prime factors of n. Which of the following is greatest?"
            options={["f(30)", "f(36)", "f(48)", "f(50)", "f(125)"]}
            correct="f(30)"
            solution={
              <>
                <p>
                  Compute each count of distinct primes:
                </p>
                <p>
                  <strong>A)</strong>{" "}
                  <KInline expr={"30=2\\cdot 3\\cdot 5"} ariaLabel="30 equals 2 times 3 times 5" />
                  , so distinct primes are 2, 3, 5 → <KInline expr={"f(30)=3"} />.
                </p>
                <p>
                  <strong>B)</strong>{" "}
                  <KInline expr={"36=2^{2}\\cdot 3^{2}"} ariaLabel="36 equals 2 squared times 3 squared" />
                  , distinct primes 2, 3 → <KInline expr={"f(36)=2"} />.
                </p>
                <p>
                  <strong>C)</strong>{" "}
                  <KInline expr={"48=2^{4}\\cdot 3"} ariaLabel="48 equals 2 to the fourth times 3" />
                  , distinct primes 2, 3 → <KInline expr={"f(48)=2"} />.
                </p>
                <p>
                  <strong>D)</strong>{" "}
                  <KInline expr={"50=2\\cdot 5^{2}"} ariaLabel="50 equals 2 times 5 squared" />
                  , distinct primes 2, 5 → <KInline expr={"f(50)=2"} />.
                </p>
                <p>
                  <strong>E)</strong>{" "}
                  <KInline expr={"125=5^{3}"} ariaLabel="125 equals 5 cubed" />
                  , only prime is 5 → <KInline expr={"f(125)=1"} />.
                </p>
                <p>Thus the greatest is f(30) = 3.</p>
              </>
            }
          />

          <MCQExample
            number={39}
            prompt="Define f(n) as the total number of positive divisors of n. If f(n) = 8, which values could n be? I. 24    II. 54    III. 875"
            options={[
              "I only",
              "I and II",
              "II only",
              "II and III",
              "I, II, and III",
            ]}
            correct="I, II, and III"
            solution={
              <>
                <p>
                  Use the divisor-count formula: if{" "}
                  <KInline expr={"n=p_1^{e_1}\\,p_2^{e_2}\\,\\dots\\,p_k^{e_k}"} ariaLabel="n equals p one to the e one times p two to the e two and so on" />{" "}
                  then{" "}
                  <KInline
                    expr={"f(n)=(e_1+1)(e_2+1)\\cdots(e_k+1)"}
                    ariaLabel="f of n equals product of e i plus one"
                  />
                  .
                </p>

                <p>
                  I.{" "}
                  <KInline
                    expr={"24=2^{3}\\cdot 3^{1}\\Rightarrow f(24)=(3+1)(1+1)=8"}
                    ariaLabel="24 equals 2 cubed times 3, therefore f of 24 equals 8"
                  />
                  .
                </p>

                <p>
                  II.{" "}
                  <KInline
                    expr={"54=2^{1}\\cdot 3^{3}\\Rightarrow f(54)=(1+1)(3+1)=8"}
                    ariaLabel="54 equals 2 times 3 cubed, therefore f of 54 equals 8"
                  />
                  .
                </p>

                <p>
                  III.{" "}
                  <KInline
                    expr={"875=5^{3}\\cdot 7^{1}\\Rightarrow f(875)=(3+1)(1+1)=8"}
                    ariaLabel="875 equals 5 cubed times 7, therefore f of 875 equals 8"
                  />
                  .
                </p>

                <p>All three satisfy f(n) = 8. Answer: I, II, and III.</p>
              </>
            }
          />
        </section>
      </article>

      {/* Note: Ensure KaTeX styles are available globally, e.g., in app/layout.tsx:
          import "katex/dist/katex.min.css";
      */}
    </main>
  );
}