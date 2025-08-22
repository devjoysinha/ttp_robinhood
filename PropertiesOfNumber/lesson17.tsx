import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6.6 Same‑Sign Multiplication & Division | Properties of Numbers",
  description:
    "Learn the rule of signs for multiplication and division: why two numbers with the same sign always produce a positive result. Includes quick examples and a short multiple‑choice check.",
};

function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
  });
  return (
    <div
      role="img"
      aria-label={expr}
      className="my-2 overflow-x-auto"
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
          4.6.6 Multiplication and Division with Same Signs
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you multiply or divide two real numbers that share the same sign
          (both positive or both negative), the result is always positive. This
          rule follows directly from the rules of signs and is essential for
          quick mental checks on arithmetic work.
        </p>

        <MustKnow>
          Two numbers with the same sign produce a positive result under
          multiplication or division. In symbols:
          <br />
          • If a &gt; 0 and b &gt; 0, then a·b &gt; 0 and a÷b &gt; 0 (for b ≠ 0).
          <br />
          • If a &lt; 0 and b &lt; 0, then a·b &gt; 0 and a÷b &gt; 0 (for b ≠ 0).
        </MustKnow>

        <section aria-labelledby="mult-examples" className="space-y-3">
          <h3 id="mult-examples" className="text-white font-semibold">
            Multiplication examples
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <MathInline expr="(-5)\times(-5)=25" />
            </li>
            <li>
              <MathInline expr="5\times 5=25" />
            </li>
            <li>
              <MathInline expr="(-10)\times(-15)=150" />
            </li>
          </ul>
        </section>

        <section aria-labelledby="div-examples" className="space-y-3">
          <h3 id="div-examples" className="text-white font-semibold">
            Division examples
          </h3>
          <div className="grid gap-2 sm:grid-cols-3">
            <MathBlock expr="\\frac{12}{6}=2" />
            <MathBlock expr="\\frac{-5}{-5}=1" />
            <MathBlock expr="\\frac{-100}{-5}=20" />
          </div>
          <p className="text-sm text-gray-400">
            Note: Division by zero is undefined, so the denominator must be
            nonzero.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Which expression is guaranteed to be positive for all positive real numbers a and b?"
          options={[
            "(-a) × b",
            "a ÷ (-a) (with a ≠ 0)",
            "(-a) × (-b)",
            "(-a) ÷ b",
            "-(a × b)",
          ]}
          correct="(-a) × (-b)"
          solution={
            <>
              <p>
                Products or quotients of two numbers with the same sign are
                positive. Among the options, only (-a) × (-b) multiplies two
                negatives, which yields a positive value. The other choices
                introduce exactly one negative sign, resulting in a negative
                outcome.
              </p>
            </>
          }
        />

        <section aria-labelledby="pitfalls" className="space-y-3">
          <h3 id="pitfalls" className="text-white font-semibold">
            Common pitfall
          </h3>
          <p>
            Don’t confuse “same sign” with “same value.” The rule depends only
            on the signs. For instance, <MathInline expr="(-2)\times(-7)=14" />{" "}
            is positive even though the numbers are different in magnitude.
          </p>
        </section>

        <p>
          Takeaway: if the signs match, both multiplication and division produce
          positive results. Use this as a quick sanity check whenever you work
          with signed numbers.
        </p>
      </article>
    </main>
  );
}