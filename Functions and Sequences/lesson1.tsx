import type { Metadata } from "next";
import katex from "katex";
// Note: import the KaTeX CSS once in your root layout (app/layout.tsx)
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "19.2 Function Notation | Functions & Sequences",
  description:
    "Understand what f(x) really means, why it’s not multiplication, and how inputs map to outputs. Includes a quick MCQ and a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.2 Function Notation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In function notation, we write{" "}
          <MathInline expr={"f(x) = y"} ariaLabel="f of x equals y" />. Read{" "}
          <MathInline expr={"f(x)"} ariaLabel="f of x" /> aloud as “f of x.” It
          names the output produced by the rule{" "}
          <MathInline expr={"f"} ariaLabel="function f" /> when the input is{" "}
          <MathInline expr={"x"} ariaLabel="x" />. This is not multiplication:
          the symbol <MathInline expr={"f"} ariaLabel="f" /> is the function’s
          name, and the parentheses indicate which input you’re feeding into the
          function.
        </p>

        <p>
          We often use letters like{" "}
          <MathInline expr={"f"} ariaLabel="f" />,{" "}
          <MathInline expr={"g"} ariaLabel="g" />, or{" "}
          <MathInline expr={"h"} ariaLabel="h" /> to name functions, but any
          valid name would work. For example, if{" "}
          <MathInline expr={"f(3) = 7"} ariaLabel="f of 3 equals 7" />, then{" "}
          <MathInline expr={"y"} ariaLabel="y" /> equals 7 when the input is 3.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-white">
              What <MathInline expr={"f(x)"} ariaLabel="f of x" /> means
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <MathInline expr={"f"} ariaLabel="f" /> is the rule’s name, not
                a factor.
              </li>
              <li>
                The parentheses show the input. The result (output) is{" "}
                <MathInline expr={"f(x)"} ariaLabel="f of x" />.
              </li>
              <li>
                You may see <MathInline expr={"g(x)"} ariaLabel="g of x" /> or{" "}
                <MathInline expr={"h(x)"} ariaLabel="h of x" /> instead of{" "}
                <MathInline expr={"f(x)"} ariaLabel="f of x" />—the idea is the
                same.
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Let f(x) = x^2 + 1. What is f(-3)?"
          options={["-2", "0", "1", "9", "10"]}
          correct="10"
          solution={
            <>
              <p>
                Substitute x = −3 into f(x) = x^2 + 1: (−3)^2 + 1 = 9 + 1 = 10.
              </p>
              <p>So, f(−3) = 10.</p>
            </>
          }
        />

        <p>
          A useful perspective:{" "}
          <MathInline expr={"f(x)"} ariaLabel="f of x" /> labels a value,
          specifically “the value that rule{" "}
          <MathInline expr={"f"} ariaLabel="f" /> assigns to input{" "}
          <MathInline expr={"x"} ariaLabel="x" />.” For instance, if{" "}
          <MathInline
            expr={"g(x) = 2x - 5"}
            ariaLabel="g of x equals two x minus five"
          />
          , then <MathInline expr={"g(4) = 3"} ariaLabel="g of 4 equals 3" />.
          Again, there is no multiplication between the function’s name and the
          input.
        </p>

        <ExampleCard
          number={2}
          title="Determining a Function Output (Data Sufficiency)"
          statements={[
            "For the function f defined by f(x) = 2x + k, what is f(4)?",
            "1) f(1) = 7",
            "2) k = -1",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We want <MathInline expr={"f(4)"} ariaLabel="f of 4" /> when{" "}
                <MathInline expr={"f(x) = 2x + k"} ariaLabel="f of x equals two x plus k" />
                .
              </p>
              <p>
                <strong>Statement (1):</strong> If{" "}
                <MathInline expr={"f(1) = 7"} ariaLabel="f of 1 equals 7" />,
                then <MathInline expr={"7 = 2(1) + k"} ariaLabel="7 equals 2 plus k" />
                , so <MathInline expr={"k = 5"} ariaLabel="k equals 5" />. Thus{" "}
                <MathInline expr={"f(4) = 2(4) + 5 = 13"} ariaLabel="f of 4 equals 13" />
                . Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <MathInline expr={"k = -1"} ariaLabel="k equals negative one" />{" "}
                gives <MathInline expr={"f(4) = 2(4) - 1 = 7"} ariaLabel="f of 4 equals 7" />
                . Sufficient.
              </p>
              <p>
                Each statement alone pins down{" "}
                <MathInline expr={"f(4)"} ariaLabel="f of 4" />. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat <MathInline expr={"f"} ariaLabel="f" /> as a label
          for a rule and <MathInline expr={"f(x)"} ariaLabel="f of x" /> as the
          output for input <MathInline expr={"x"} ariaLabel="x" />—never as a
          product of <MathInline expr={"f"} ariaLabel="f" /> and{" "}
          <MathInline expr={"x"} ariaLabel="x" />.
        </p>
      </article>
    </main>
  );
}