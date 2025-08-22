import type { Metadata } from "next";
import Head from "next/head";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title: "4.3.1 Properties of Zero | Properties of Numbers",
  description:
    "A concise guide to the special properties of 0: arithmetic rules, division pitfalls, exponents, parity, factors, and multiples. Includes one quick multiple‑choice check and two Data Sufficiency drills with full reasoning.",
};

// Simple KaTeX renderer
function K({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={display ? "my-3 overflow-x-auto" : ""}
      aria-label={ariaLabel ?? expr}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* Load KaTeX CSS (CDN) for proper math rendering */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
          integrity="sha384-jyGQ8yZ1HhvXxApb0m1z2dGJxV8QWA1l2UAXCjJzQ+z2FQ6I7i7nQqJjVYpC2tTg"
          crossOrigin="anonymous"
        />
      </Head>

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3.1 Properties of Zero
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Zero behaves in very particular ways. Knowing these rules lets you
          quickly validate expressions, avoid undefined operations, and spot
          shortcuts on test day.
        </p>

        <MustKnow>
          • Never divide by zero: expressions with a zero denominator are
          undefined.
          <br />
          • Zero is the additive identity: adding or subtracting zero doesn’t
          change a number.
          <br />
          • Zero is even and has no sign (neither positive nor negative).
          <br />
          • Exponent rules: for any nonzero base, b^0 = 1; for zero as a base,
          0^n = 0 when n is a positive integer, while 0^0 is undefined for our
          purposes.
          <br />• Every integer is a factor of 0, but 0 is a factor only of 0.
        </MustKnow>

        <section aria-labelledby="rules-heading" className="space-y-4">
          <h3 id="rules-heading" className="text-xl font-semibold text-white">
            Core facts about 0
          </h3>

          <ul className="list-inside list-disc space-y-3">
            <li>
              Multiplication by zero collapses any number to zero:{" "}
              <K expr="0 \times a = 0" ariaLabel="0 times a equals 0" />.
            </li>

            <li>
              Zero divided by a nonzero number is zero:{" "}
              <K expr="\dfrac{0}{a} = 0 \quad (a \neq 0)" ariaLabel="0 divided by a equals 0 for a not equal 0" />
              .
            </li>

            <li>
              Division by zero is not defined:{" "}
              <K expr="\dfrac{a}{0} \text{ is undefined}" ariaLabel="a divided by 0 is undefined" />
              .
            </li>

            <li>
              The principal square root of zero is zero:{" "}
              <K expr="\sqrt{0} = 0" ariaLabel="square root of 0 equals 0" />.
            </li>

            <li>
              Zero to a positive integer power is zero, and zero to the zero
              power is not defined for our use:
              <K
                expr="0^n = 0 \; (n \in \mathbb{Z}^+), \quad 0^0 \text{ is undefined}"
                ariaLabel="0 to the n equals 0 for positive integer n, 0 to the 0 is undefined"
                display
              />
            </li>

            <li>Zero has no sign: it’s neither positive nor negative.</li>

            <li>
              Zero equals its additive inverse:{" "}
              <K expr="0 = -0" ariaLabel="0 equals negative 0" />.
            </li>

            <li>
              Every integer divides 0, i.e., 0 is a multiple of any integer m:
              <K expr="0 = m \times 0" ariaLabel="0 equals m times 0" />
              .
            </li>

            <li>
              All multiples of 0 are the same number, 0. No other number has
              that property.
            </li>

            <li>
              Zero is a factor only of zero. If{" "}
              <K expr="0 \mid n" ariaLabel="0 divides n" /> then{" "}
              <K expr="n=0" ariaLabel="n equals 0" />.
            </li>

            <li>
              Any nonzero base raised to the zero power is 1:{" "}
              <K expr="a^0 = 1 \; (a \neq 0)" ariaLabel="a to the 0 equals 1 for a not equal 0" />
              .
            </li>

            <li>
              Zero is an even integer. For example,{" "}
              <K expr="0 = 2 \times 0" ariaLabel="0 equals 2 times 0" />.
            </li>

            <li>
              Adding or subtracting 0 leaves a number unchanged:{" "}
              <K expr="a + 0 = a \quad \text{and} \quad a - 0 = a" ariaLabel="a plus 0 equals a and a minus 0 equals a" />
              .
            </li>
          </ul>

          <div className="rounded-md border border-gray-700 bg-gray-800/40 p-4">
            <p className="mb-2 font-semibold text-white">Why “0 is a factor of 0” works</p>
            <p>
              By definition, “a is a factor of b” means there exists an integer{" "}
              <K expr="k" /> such that{" "}
              <K expr="b = a \cdot k" ariaLabel="b equals a times k" />. Since{" "}
              <K expr="0 = 0 \cdot k" ariaLabel="0 equals 0 times k" /> for any
              integer <K expr="k" />, 0 divides 0.
            </p>
          </div>
        </section>

        <MCQExample
          number={31}
          prompt="Which of the following expressions is undefined?"
          options={[
            "0 ÷ 7",
            "7 ÷ 0",
            "√0",
            "0^5",
            "(-0) + 3",
          ]}
          correct="7 ÷ 0"
          solution={
            <>
              <p>
                Only division by zero is undefined. The others evaluate to{" "}
                <K expr="0" />, <K expr="0" />, <K expr="0" />, and{" "}
                <K expr="3" />, respectively.
              </p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Is a/b defined?"
          statements={[
            "Given real numbers a and b, determine whether a/b is defined.",
            "1) a = 0",
            "2) b = 0",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We need to know if the denominator is zero.
              </p>
              <p>
                Statement (1): a = 0. Then a/b = 0/b. If b ≠ 0, the value is 0 (defined); if b = 0, it’s undefined. Different possibilities → not sufficient.
              </p>
              <p>
                Statement (2): b = 0. Division by zero is undefined regardless of a. This answers the question definitively → sufficient.
              </p>
              <p>Answer: B.</p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Square root at zero"
          statements={[
            "What is the value of √k?",
            "1) k = 0",
            "2) k^2 = 0",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Statement (1): If k = 0, then √k = √0 = 0 → sufficient.
              </p>
              <p>
                Statement (2): If k^2 = 0, the only real solution is k = 0. Thus
                √k = 0 → sufficient.
              </p>
              <p>Each alone works. Answer: D.</p>
            </>
          }
        />

        <p>
          Remember: zero is about structure, not computation. Guard against
          dividing by zero, leverage that 0 is even and signless, and use the
          exponent identities to simplify expressions quickly.
        </p>
      </article>
    </main>
  );
}