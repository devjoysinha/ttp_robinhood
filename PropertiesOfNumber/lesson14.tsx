import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function Equation({
  tex,
  displayMode = false,
  ariaLabel,
}: {
  tex: string;
  displayMode?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode,
    strict: "ignore",
    output: "htmlAndMathml",
  });
  return (
    <span
      className={displayMode ? "block my-2" : "inline"}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.6.3 Adding Two Negative Numbers | Properties of Numbers",
  description:
    "Learn how to add negative numbers: keep the negative sign and add magnitudes. Includes symbolic and algebraic examples plus a quick check question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.3 Adding Two Negative Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you add negatives, the result moves further left on the number
          line. In other words, the sum is still negative and its magnitude
          increases.
        </p>

        <MustKnow>
          Negative plus negative stays negative. To add two negative numbers,
          keep the minus sign and add their absolute values. Formally, for real
          numbers a, b {`>`} 0:
          <div className="mt-2">
            <Equation
              displayMode
              tex={"(-a) + (-b) = -(a + b)"}
              ariaLabel="Negative a plus negative b equals negative of a plus b"
            />
          </div>
        </MustKnow>

        <section aria-labelledby="worked-examples" className="space-y-3">
          <h3 id="worked-examples" className="text-white font-semibold">
            Quick examples
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Equation
                tex={"-5 + (-8) = -(5 + 8) = -13"}
                ariaLabel="Negative five plus negative eight equals negative thirteen"
              />
            </li>
            <li>
              Combine like terms:
              {" "}
              <Equation
                tex={"-2x + (-7x) = -(2x + 7x) = -9x"}
                ariaLabel="Negative two x plus negative seven x equals negative nine x"
              />
            </li>
            <li>
              With multiple variables:
              {" "}
              <Equation
                tex={"-5xy + (-100xy) = -(5xy + 100xy) = -105xy"}
                ariaLabel="Negative five x y plus negative one hundred x y equals negative one hundred five x y"
              />
            </li>
          </ul>
        </section>

        <section aria-labelledby="why-it-works" className="space-y-3">
          <h3 id="why-it-works" className="text-white font-semibold">
            Why this rule makes sense
          </h3>
          <p>
            Absolute value measures distance from zero. If you add two negative
            values, their distances stack while the direction remains left of
            zero. That is, you add the magnitudes and keep the negative sign.
          </p>
          <p>
            Using absolute value notation:
          </p>
          <Equation
            displayMode
            tex={"(-a) + (-b) = -(\\lvert -a \\rvert + \\lvert -b \\rvert) = -(a + b)"}
            ariaLabel="Negative a plus negative b equals negative of the sum of absolute values, which equals negative a plus b"
          />
        </section>

        <MCQExample
          number={1}
          prompt="Compute the sum: −9 + (−4)"
          options={["−5", "−13", "5", "13", "0"]}
          correct="−13"
          solution={
            <>
              <p>
                Add the magnitudes and keep the negative sign:
              </p>
              <Equation
                displayMode
                tex={"-9 + (-4) = -(9 + 4) = -13"}
                ariaLabel="Negative nine plus negative four equals negative thirteen"
              />
            </>
          }
        />

        <section aria-labelledby="takeaway" className="space-y-3">
          <h3 id="takeaway" className="text-white font-semibold">
            Key takeaway
          </h3>
          <p>
            Adding negatives is straightforward: add the absolute values and
            keep the minus sign. This applies equally to numbers and like
            algebraic terms.
          </p>
        </section>
      </article>
    </main>
  );
}