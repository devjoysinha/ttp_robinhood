import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Ensure KaTeX CSS is included globally (e.g., in app/layout.tsx): import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "19.11 Symbolism | Functions & Sequences",
  description:
    "Learn how custom symbols define operations (symbolism) and how to evaluate and solve with them on the GMAT. Includes two multiple‑choice practice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.11 Symbolism (Custom Operators)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A function can use one variable, such as
          {" "}
          <InlineMath math={"f(x) = x^2 + 10"} />
          {" "}
          or
          {" "}
          <InlineMath math={"f(x) = 2x - 3"} />
          , and it can also take multiple variables, for example
          {" "}
          <InlineMath math={"f(x,y) = x^2 + y^3"} />.
          To evaluate, substitute the inputs directly:
          {" "}
          <InlineMath math={"f(1,2) = 1^2 + 2^3 = 9"} />.
        </p>

        <p>
          On the GMAT, instead of formal function notation, you may see
          custom symbols that mean “do this operation.” For instance, the exam
          might write <InlineMath math={"x@y = x^2 + y^3"} /> and then ask for
          {" "}
          <InlineMath math={"1@2"} />, which still equals 9. These problems are
          often called symbolism questions.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              A custom symbol is just a rule. Apply it exactly as defined.
            </li>
            <li>
              Treat the symbol like a function: substitute the given inputs and follow the specified arithmetic.
            </li>
            <li>
              Watch for domain notes (e.g., values a symbol can’t take) when solving equations.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="operators-example" className="space-y-3">
          <h3 id="operators-example" className="text-xl font-semibold text-white">
            Example of a two‑input operator
          </h3>
          <p>Suppose a new operator is defined by:</p>
          <BlockMath math={"a \\# b = a + b - \\dfrac{a}{b}"} />
          <p>
            Then
            {" "}
            <InlineMath math={"6 \\# 3 = 6 + 3 - \\dfrac{6}{3} = 9 - 2 = 7"} />.
          </p>
        </section>

        <MCQExample
          number={25}
          prompt={
            <>
              If <InlineMath math={"@x = x^2 + 1"} /> and{" "}
              <InlineMath math={"y \\ne 3"} />, which value of y satisfies{" "}
              <InlineMath math={"@y = @3"} />?
            </>
          }
          options={["-3", "-1", "0", "2", "4"]}
          correct="-3"
          solution={
            <>
              <p>
                Apply the rule to both sides:
                {" "}
                <InlineMath math={"@y = @3 \\Rightarrow y^2 + 1 = 3^2 + 1"} />.
                So <InlineMath math={"y^2 = 9"} />, giving
                {" "}
                <InlineMath math={"y = \\pm 3"} />.
              </p>
              <p>
                Since <InlineMath math={"y \\ne 3"} />, we must have
                {" "}
                <InlineMath math={"y = -3"} />.
              </p>
            </>
          }
        />

        <p>
          Some symbols act on a single input (like <InlineMath math={"@x"} />),
          while others combine two inputs (like <InlineMath math={"a \\# b"} />).
          In either case, the approach is the same: substitute and follow the rule.
        </p>

        <MCQExample
          number={26}
          prompt={
            <>
              Let <InlineMath math={"a \\sim b = a + b - ab"} /> and{" "}
              <InlineMath math={"a \\& b = ab - a + b"} />. If{" "}
              <InlineMath math={"a \\sim b = a \\& b"} /> and{" "}
              <InlineMath math={"a \\ne 0"} />, which value must b equal?
            </>
          }
          options={["-2", "-1", "0", "1", "2"]}
          correct="1"
          solution={
            <>
              <p>
                Set the two definitions equal:
                {" "}
                <InlineMath math={"a + b - ab = ab - a + b"} />.
              </p>
              <p>
                Cancel <InlineMath math={"b"} /> on both sides and rearrange:
                {" "}
                <InlineMath math={"a - ab = ab - a"} />.
                Factor:
                {" "}
                <InlineMath math={"a(1 - b) = a(b - 1)"} />.
              </p>
              <p>
                Since <InlineMath math={"a \\ne 0"} />, divide both sides by{" "}
                <InlineMath math={"a"} />:
                {" "}
                <InlineMath math={"1 - b = b - 1"} />.
                Then <InlineMath math={"2 = 2b"} />, so{" "}
                <InlineMath math={"b = 1"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when you see a made‑up symbol, read its definition as a set
          of instructions. Substitute, compute, and respect any restrictions the
          problem provides.
        </p>
      </article>
    </main>
  );
}