import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({
  expr,
  display = false,
  ariaLabel = "mathematical expression",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
    strict: "ignore",
  });
  const Wrapper = display ? "div" : "span";
  return (
    <Wrapper
      role="math"
      aria-label={ariaLabel}
      className={display ? "my-3 overflow-x-auto" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "14.2 Average (Arithmetic Mean) | Statistics",
  description:
    "Understand the arithmetic mean: what it is, how to compute it, and what the formula really says. Includes a quick multiple‑choice example with a fully worked solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.2 Average (Arithmetic Mean)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The arithmetic mean, often just called the average, is the total of the
          values in a set divided by how many values there are. While other means
          exist (such as geometric and harmonic), GMAT questions use the arithmetic
          mean unless stated otherwise.
        </p>

        <section aria-labelledby="mean-formula">
          <h3 id="mean-formula" className="sr-only">
            Mean formula
          </h3>
          <p className="mb-2">Formula for the arithmetic mean:</p>
          <Math
            display
            expr={`\\text{mean} = \\dfrac{\\text{sum of terms}}{\\text{number of terms}}`}
            ariaLabel="mean equals the sum of terms divided by the number of terms"
          />
        </section>

        <MustKnow>
          The average (arithmetic mean) is the sum of the values divided by the
          number of values. You can add the terms in any order—the result is the
          same—so sorting is unnecessary for computing a mean.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="What is the average (arithmetic mean) of 30, 50, 82, and 14?"
          options={["28", "32", "36", "40", "44"]}
          correct="44"
          solution={
            <>
              <p>Apply the mean formula.</p>
              <Math
                display
                expr={`\\text{mean} = \\dfrac{30 + 50 + 82 + 14}{4}`}
                ariaLabel="mean equals the sum 30 plus 50 plus 82 plus 14 over 4"
              />
              <Math
                display
                expr={`= \\dfrac{176}{4} = 44`}
                ariaLabel="equals one hundred seventy six over four equals forty four"
              />
              <p>
                Therefore, the average is 44. You didn’t need to sort the numbers,
                since addition is order‑independent.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: averaging is an additive process followed by division by
          the count of values. The order of addition doesn’t matter, and you
          should lean on the formula to work quickly and accurately.
        </p>
      </article>
    </main>
  );
}