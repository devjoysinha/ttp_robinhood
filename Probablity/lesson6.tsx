import React from "react";
import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight client component to load KaTeX CSS once
function KatexStyles() {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return null;
}

// Server-side KaTeX renderer (SSR-friendly)
function MathInline({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
  });
  return (
    <span
      className={className}
      aria-label={ariaLabel ?? expr}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "17.6.1 Independent Events | Probability",
  description:
    "Understand independence in probability: what it means, how to multiply probabilities across independent trials, and how complements behave. Includes two quick multiple‑choice examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* Inject KaTeX styles in the document head */}
      <KatexStyles />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.6.1 Independent Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two events are independent when the outcome of one has no effect on
          the likelihood of the other. For instance, each flip of a fair coin
          stands on its own: no matter what happened before, the chance of
          heads on the next flip is{" "}
          <MathInline expr="\\tfrac{1}{2}" ariaLabel="one half" />.
        </p>

        <p>
          The practical consequence is simple: to find the probability that
          several independent events all occur, multiply their individual
          probabilities. This principle extends to any number of independent
          trials.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Multiplication rule for independent events
            </p>
            <p>
              If A and B are independent,
              {" "}
              <MathInline
                expr="P(A\\text{ and }B)=P(A)\\cdot P(B)"
                ariaLabel="P of A and B equals P of A times P of B"
              />
              .
            </p>
            <p>
              For more than two independent events (say A, B, C, D),
              {" "}
              <MathInline
                expr="P(A\\text{ and }B\\text{ and }C\\text{ and }D)=P(A)P(B)P(C)P(D)"
                ariaLabel="Probability of A and B and C and D equals the product of their probabilities"
              />
              .
            </p>
            <p className="text-gray-300">
              Complements preserve independence: if A and B are independent,
              then A and not‑B, not‑A and B, and not‑A and not‑B are all
              independent pairs as well.
            </p>
          </div>
        </MustKnow>

        <p>
          Beware the common fallacy: long streaks don’t “force” a different
          outcome next time. Even after many heads in a row, the probability of
          heads on the very next fair flip is still{" "}
          <MathInline expr="\\tfrac{1}{2}" ariaLabel="one half" />.
        </p>

        <MCQExample
          number={46}
          prompt="An archer hits the center of an apple with any single shot with probability 25%. What is the probability the archer does this on four consecutive shots (four different apples)?"
          options={["1/256", "1/64", "1/16", "1/2"]}
          correct="1/256"
          solution={
            <>
              <p>
                Each shot is independent and has success probability{" "}
                <MathInline expr="\\tfrac{1}{4}" ariaLabel="one fourth" />.
                The probability of four successes in a row is
                {" "}
                <MathInline
                  expr="\\left(\\tfrac{1}{4}\\right)^4"
                  ariaLabel="one fourth to the fourth power"
                />
                {" "}
                ={" "}
                <MathInline expr="\\tfrac{1}{256}" ariaLabel="one over two hundred fifty six" />
                .
              </p>
            </>
          }
        />

        <p>
          Independence also works seamlessly with complements. If the chance of
          success on each trial is <MathInline expr="p" />, then the chance of
          failure on each trial is <MathInline expr="1-p" />. You can string
          together any fixed pattern of successes and failures by multiplying
          the appropriate terms.
        </p>

        <MCQExample
          number={47}
          prompt="A magician pulls a rabbit from a hat with probability 1/3 on any attempt. What is the probability of pulling a rabbit on the first attempt and then failing to pull a rabbit on the next three attempts?"
          options={["8/81", "1/81", "1/27", "16/81"]}
          correct="8/81"
          solution={
            <>
              <p>
                Let success be <MathInline expr="R" /> and failure be{" "}
                <MathInline expr="N" />. The sequence is R then N, N, N. Since
                attempts are independent,
                {" "}
                <MathInline
                  expr="P(RNNN)=\\tfrac{1}{3}\\cdot\\left(\\tfrac{2}{3}\\right)^3"
                  ariaLabel="one third times two thirds cubed"
                />
                {" "}
                ={" "}
                <MathInline expr="\\tfrac{8}{81}" ariaLabel="eight over eighty-one" />
                .
              </p>
            </>
          }
        />

        <p>
          Key takeaway: when outcomes don’t influence each other, multiply the
          individual probabilities. Use complements freely in these products
          when a pattern includes both success and failure.
        </p>
      </article>
    </main>
  );
}