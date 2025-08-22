import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.1 Introduction to Functions | Functions and Sequences",
  description:
    "Read and evaluate function notation, understand inputs and outputs, and practice with two worked examples. KaTeX-rendered steps included.",
};

// Lightweight KaTeX helpers (server-safe)
function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, { throwOnError: false }),
      }}
    />
  );
}
function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className="overflow-x-auto py-2"
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
          19.1 Introduction to Functions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In this section we’ll refresh the core ideas behind functions: how to read function
          notation, how to substitute values, and how to interpret inputs and outputs.
        </p>

        <h3 className="text-xl font-semibold text-white">What is a function?</h3>
        <p>
          A function pairs each allowed input with exactly one output. We often write functions
          using notation like <MathInline expr="f(x)" ariaLabel="f of x" />, read “f of x.”
          Here’s a quick example:
        </p>

        <p className="text-gray-200 font-medium">
          Example prompt:
        </p>
        <p>
          If <MathInline expr="f(x)=x^3+2x-1" /> , what is <MathInline expr="f(5)" />?
        </p>

        <p>
          The symbol <MathInline expr="f(5)" /> means “evaluate f at x = 5,” so replace x with 5 in
          the formula for <MathInline expr="f(x)" /> and simplify:
        </p>

        <MathBlock expr={`\\begin{aligned}
f(x) &= x^3 + 2x - 1 \\\\
f(5) &= (5)^3 + 2\\cdot 5 - 1 \\\\
     &= 125 + 10 - 1 \\\\
     &= 134
\\end{aligned}`} />

        <p>
          All of the following questions are different ways of asking for the same computation:
        </p>
        <ul className="list-disc pl-6">
          <li>
            What is the value of <MathInline expr="x^3+2x-1" /> when <MathInline expr="x=5" />?
          </li>
          <li>
            If <MathInline expr="y=x^3+2x-1" />, what is y when <MathInline expr="x=5" />?
          </li>
          <li>
            If <MathInline expr="f(x)=x^3+2x-1" />, what is <MathInline expr="f(5)" />?
          </li>
          <li>
            If function f is defined by <MathInline expr="f(x)=x^3+2x-1" />, find the value of f at{" "}
            <MathInline expr="x=5" />.
          </li>
        </ul>

        <MustKnow>
          Evaluating a function is substitution: put the input everywhere the variable appears, use
          parentheses, and simplify.
        </MustKnow>

        <p>
          It’s helpful to picture a function as a machine: you feed in an input, and it outputs a
          number according to its rule. In the example above, input 5 produces output 134.
        </p>

        <MustKnow>
          Vocabulary: inputs go into the function; outputs come out. A function maps each allowed
          input to exactly one output.
        </MustKnow>

        <section aria-labelledby="practice-1" className="pt-4">
          <h3 id="practice-1" className="text-xl font-semibold text-white">
            Practice Example 1
          </h3>

          <MCQExample
            number={1}
            prompt={
              <>
                If <MathInline expr="f(x)=\\dfrac{x^3}{x^2}-\\sqrt{x}" /> , what is{" "}
                <MathInline expr="f(4)" />?
              </>
            }
            options={["4", "2", "0", "-2", "-4"]}
            correct="2"
            solution={
              <>
                <p>Substitute x = 4 and simplify step by step:</p>
                <MathBlock
                  expr={`\\begin{aligned}
f(4) &= \\dfrac{4^3}{4^2} - \\sqrt{4} \\\\
     &= \\dfrac{64}{16} - 2 \\\\
     &= 4 - 2 \\\\
     &= 2
\\end{aligned}`}
                />
                <p>Therefore, the value is 2.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="practice-2" className="pt-2">
          <h3 id="practice-2" className="text-xl font-semibold text-white">
            Practice Example 2
          </h3>

          <MCQExample
            number={2}
            prompt={
              <>
                If <MathInline expr="f(x)=28-2x" /> and a constant k satisfies{" "}
                <MathInline expr="f(k)=10" />, what is k?
              </>
            }
            options={["8", "9", "101", "11", "12"]}
            correct="9"
            solution={
              <>
                <p>Set up the equation and solve for k:</p>
                <MathBlock
                  expr={`\\begin{aligned}
f(k) = 10 &\\implies 28 - 2k = 10 \\\\
2k &= 18 \\\\
k &= 9
\\end{aligned}`}
                />
                <p>So k = 9.</p>
              </>
            }
          />
        </section>

        <p className="text-gray-300">
          Key takeaway: function notation is just a compact way to direct substitution. Keep inputs
          in parentheses, follow order of operations, and simplify carefully.
        </p>
      </article>
    </main>
  );
}