import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "5. Roots and Exponents — 5.1 Introduction",
  description:
    "A concise kickoff to roots and exponents: why these rules matter, where they show up, and the core identities you’ll use everywhere on the GMAT. Includes one multiple‑choice warm‑up and two Data Sufficiency drills with full reasoning.",
};

function Math({
  expr,
  display = false,
  className = "",
}: {
  expr: string;
  display?: boolean;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
    output: "htmlAndMathml",
  });
  if (display) {
    return (
      <div
        className={className}
        aria-label={expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className={className}
      aria-label={expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Roots and Exponents
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          This chapter is your foundation for working confidently with powers and
          radicals. You’ll see these rules tested head‑on and also woven into
          questions about algebra, number properties, and equations. Mastering a
          short list of identities and domain rules lets you transform
          expressions quickly and avoid common traps.
        </p>

        <section aria-labelledby="why-it-matters" className="space-y-3">
          <h3 id="why-it-matters" className="text-xl font-semibold text-white">
            Why this matters
          </h3>
          <p>
            On test day, you’ll often need to rewrite expressions to a cleaner
            form, compare sizes of quantities, or verify when an operation is
            allowed. For example, switching between radical and exponent form
            streamlines many steps:
          </p>
          <Math
            display
            expr="a^{\tfrac{m}{n}}=\sqrt[n]{a^{m}} \quad\text{(with }a\ge 0\text{ when }n\text{ is even)}"
            className="text-lg"
          />
          <p>
            You’ll also rely on the standard laws of exponents and careful
            handling of roots:
          </p>
          <div className="space-y-2">
            <Math expr="a^m\cdot a^n=a^{m+n}" />
            <span className="px-2 text-gray-500">•</span>
            <Math expr="\dfrac{a^m}{a^n}=a^{m-n}\quad(a\ne 0)" />
            <span className="px-2 text-gray-500">•</span>
            <Math expr="\left(a^m\right)^{\!n}=a^{mn}" />
            <div>
              <Math expr="\sqrt{ab}=\sqrt{a}\,\sqrt{b}" />{" "}
              <span className="text-gray-400">
                (requires a,b ≥ 0 for real results)
              </span>
            </div>
          </div>
        </section>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Domain first: for even roots, the radicand must be nonnegative.
              For division and negative exponents, the base can’t be zero.
            </li>
            <li>
              Convert smartly: move between{" "}
              <Math expr="\sqrt[n]{\,\cdot\,}" /> and{" "}
              <Math expr="(\cdot)^{1/n}" /> to simplify or compare expressions.
            </li>
            <li>
              Factor to pair primes: use prime factorization to simplify radicals
              and to check when a product under a root is a perfect square.
            </li>
            <li>
              When you square both sides of an equation, always check for
              extraneous solutions afterward.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="quick-warmup" className="space-y-3">
          <h3 id="quick-warmup" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>

          <MCQExample
            number={1}
            prompt={
              <>
                Evaluate{" "}
                <Math expr="27^{\tfrac{2}{3}}" />.
              </>
            }
            options={["3", "6", "9", "3\\sqrt{3}", "27^{1/3}"]}
            correct="9"
            solution={
              <>
                <p>
                  Rewrite using the power‑to‑a‑root conversion:{" "}
                  <Math expr="27^{2/3}=\left(27^{1/3}\right)^2" />. Since{" "}
                  <Math expr="27^{1/3}=3" />, we get <Math expr="3^2=9" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ds-practice" className="space-y-4">
          <h3 id="ds-practice" className="text-xl font-semibold text-white">
            Data Sufficiency drills
          </h3>

          <ExampleCard
            number={2}
            title="When is a square root an integer?"
            statements={[
              "Let a and b be positive integers. Is √(18a) an integer?",
              "1) a is a multiple of 2",
              "2) a is a multiple of 9",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Factor inside the root: <Math expr="18=2\cdot 3^2" />. For{" "}
                  <Math expr="\sqrt{18a}" /> to be an integer, every prime
                  exponent in <Math expr="18a" /> must be even.
                </p>
                <p>
                  <strong>1)</strong> If <Math expr="a" /> is a multiple of 2,{" "}
                  <Math expr="2^1" /> pairs to <Math expr="2^2" />. But{" "}
                  <Math expr="a" /> could introduce other primes with odd
                  exponents (e.g., <Math expr="a=10" />), so not guaranteed.
                  Insufficient.
                </p>
                <p>
                  <strong>2)</strong> If <Math expr="a" /> is a multiple of 9, we
                  add another <Math expr="3^2" />, but the single{" "}
                  <Math expr="2" /> from 18 remains unpaired. Also,{" "}
                  <Math expr="a" /> might add other unpaired primes.
                  Insufficient.
                </p>
                <p>
                  <strong>Together:</strong> Being a multiple of 2 and 9 implies{" "}
                  <Math expr="a" /> is a multiple of 18, so{" "}
                  <Math expr="18a=18\cdot(18k)=(18)^2k" />. We still don’t know
                  whether <Math expr="k" /> is a perfect square. Not sufficient.
                </p>
                <p>Answer: E.</p>
              </>
            }
          />

          <ExampleCard
            number={3}
            title="Sign of x with powers and roots"
            statements={[
              "Is x > 0?",
              "1) √x is a real number",
              "2) x^3 > 0",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  <strong>1)</strong> If <Math expr="\sqrt{x}" /> is real, then{" "}
                  <Math expr="x\ge 0" />. But <Math expr="x" /> could be 0 or
                  positive. Not sufficient.
                </p>
                <p>
                  <strong>2)</strong> If <Math expr="x^3>0" />, then{" "}
                  <Math expr="x>0" /> (odd powers preserve sign). Sufficient.
                </p>
                <p>Answer: B.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="closing" className="space-y-3">
          <h3 id="closing" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Roots and exponents aren’t about memorizing dozens of facts—they’re
            about a small core of identities used fluently and safely. Keep the
            domain in mind, convert forms to simplify, and verify solutions when
            you square both sides. With those habits, you’ll be ready for the
            rest of the chapter.
          </p>
        </section>
      </article>
    </main>
  );
}