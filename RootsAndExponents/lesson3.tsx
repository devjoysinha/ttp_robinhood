import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.4 Perfect Squares | Roots and Exponents",
  description:
    "Understand perfect squares and when a square root is an integer. Includes quick examples, a must‑know summary, and a multiple‑choice drill using √n < 1.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

function K({ expr, display = false, ariaLabel, className }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={className}
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
          5.4 Perfect Squares
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A number is a perfect square if it can be written as the square of an integer. Equivalently, aside from 0 and 1, its prime factorization has only even exponents. When the value under the radical is a perfect square, its square root is a whole number; otherwise, the square root is not an integer.
        </p>

        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
          <p className="mb-2">
            Example checks:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              81 is a perfect square because 81 = 3
              <sup>4</sup>. So{" "}
              <K expr="\\sqrt{81}=9" ariaLabel="square root of 81 equals 9" />
              .
            </li>
            <li>
              24 is not a perfect square since 24 = 2
              <sup>3</sup> × 3. Thus{" "}
              <K
                expr="\\sqrt{24}\\approx 4.8989"
                ariaLabel="square root of 24 is approximately 4.8989"
              />
              , which is not a whole number.
            </li>
          </ul>
        </div>

        <MustKnow>
          The square root of a perfect square is an integer. If the radicand is
          not a perfect square, its square root will not be a whole number.
        </MustKnow>

        <section aria-labelledby="memorize-ps" className="space-y-2">
          <h3 id="memorize-ps" className="text-base font-semibold text-gray-200">
            Perfect squares to remember (up to 225)
          </h3>
          <p className="text-sm text-gray-400">
            Memorizing these speeds up estimation and root recognition:
          </p>
          <p className="leading-relaxed">
            0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225
          </p>
        </section>

        <section aria-labelledby="example-ps" className="space-y-4">
          <h3 id="example-ps" className="text-base font-semibold text-gray-200">
            Quick Check
          </h3>

          <MCQExample
            number={10}
            prompt={
              <>
                If n is positive and{" "}
                <K expr="\\sqrt{n} &lt; 1" ariaLabel="square root of n is less than 1" />
                , which statements must be true?
                <br />
                I. n is not an integer
                <br />
                II. <K expr="n \\ne 0" ariaLabel="n is not equal to zero" />
                <br />
                III. <K expr="n &lt; 1" ariaLabel="n is less than 1" />
              </>
            }
            options={[
              "II only",
              "I and II only",
              "I and III only",
              "II and III only",
              "I, II, and III",
            ]}
            correct="I, II, and III"
            solution={
              <>
                <p>
                  Start from <K expr="\\sqrt{n} &lt; 1" ariaLabel="square root of n is less than 1" /> with n > 0.
                  Squaring both sides preserves the inequality for nonnegative values:
                </p>
                <div className="my-2">
                  <K expr="\\sqrt{n} &lt; 1" display ariaLabel="square root of n is less than 1" />
                  <K expr="n &lt; 1" display ariaLabel="n is less than 1" />
                </div>
                <p>
                  Since n is positive, we have 0 < K expr="n" ariaLabel="n" /> < 1. Now evaluate:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>
                    I. There is no integer strictly between 0 and 1, so n cannot be an integer. True.
                  </li>
                  <li>
                    II. From 0 < <K expr="n" ariaLabel="n" /> < 1, n ≠ 0. True.
                  </li>
                  <li>
                    III. We already have <K expr="n &lt; 1" ariaLabel="n less than 1" />. True.
                  </li>
                </ul>
                <p className="mt-2">Therefore, all three statements must be true. Answer: I, II, and III.</p>
              </>
            }
          />
        </section>
      </article>
    </main>
  );
}