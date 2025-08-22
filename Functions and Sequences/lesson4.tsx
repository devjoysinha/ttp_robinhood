import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.5 Using Min/Max to Find a Function’s Range | Functions & Sequences",
  description:
    "Learn a reliable blueprint for finding the range of unfamiliar functions: push outputs to their largest and smallest possible values and identify outputs that can never occur. Includes a worked mini‑example and two MCQ drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.5 Use minimums, maximums, and exclusions to determine a function’s
          range
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, you’ve seen quick range rules for common families of
          functions. For instance:
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>
            Shifted square root:{" "}
            <InlineMath math={"f(x)=\\sqrt{x}+b"} aria-label="f of x equals square root of x plus b" />
          </li>
          <li>
            Even power plus a constant:{" "}
            <InlineMath math={"f(x)=x^{n}+c\\;\\text{ with }n\\text{ even, }n>0"} />
          </li>
          <li>
            Odd power plus a constant:{" "}
            <InlineMath math={"f(x)=x^{n}+c\\;\\text{ with }n\\text{ odd, }n>0"} />
          </li>
          <li>
            Linear (non‑flat) functions:{" "}
            <InlineMath math={"f(x)=ax+b\\;\\text{ with }a\\neq 0"} />
          </li>
        </ul>

        <p>
          When the function doesn’t match a memorized template, use a simple
          plan: force the output as large as possible, as small as possible, and
          note any values the output can never hit.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>Push the function to its maximum possible output.</li>
            <li>Push the function to its minimum possible output.</li>
            <li>List any outputs that are impossible.</li>
          </ul>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example
          </h3>
          <p>
            Consider{" "}
            <InlineMath math={"h(x)=\\dfrac{6}{x^{2}+2}"} aria-label="h of x equals 6 over x squared plus 2" />.
            What is the range of <InlineMath math={"h"} />?
          </p>

          <p>
            A fraction grows when its numerator grows and/or its denominator
            shrinks. Here the numerator is the constant 6, so the only way to
            increase <InlineMath math={"h(x)"} /> is to make the denominator
            as small as possible. Since{" "}
            <InlineMath math={"x^{2}\\ge 0"} /> for all real{" "}
            <InlineMath math={"x"} />, the smallest value of{" "}
            <InlineMath math={"x^{2}+2"} /> is 2, achieved at{" "}
            <InlineMath math={"x=0"} />. Therefore,
          </p>

          <BlockMath
            math={"h(0)=\\dfrac{6}{0^{2}+2}=\\dfrac{6}{2}=3"}
            aria-label="h of zero equals 6 over 2 equals 3"
          />

          <p>
            To drive the output down, make the denominator large. As{" "}
            <InlineMath math={"|x|\\to\\infty"} />,{" "}
            <InlineMath math={"x^{2}+2\\to\\infty"} />, so{" "}
            <InlineMath math={"h(x)\\to 0^{+}"} />. However,{" "}
            <InlineMath math={"h(x)"} /> can never equal 0 because the numerator
            is 6 (nonzero). Putting this together, the range is
            <InlineMath math={"\\;(0,3]\\;"} />.
          </p>
        </section>

        <MustKnow>
          To find the range of a new function type, combine three checks:
          largest possible output, smallest possible output, and outputs that are
          forbidden by the algebra (for example, a nonzero constant in a
          numerator prevents the overall value from being 0).
        </MustKnow>

        <section aria-labelledby="example-11" className="space-y-4">
          <MCQExample
            number={11}
            prompt={
              <>
                If{" "}
                <InlineMath
                  math={"g(x)=\\dfrac{4}{x-4}"}
                  aria-label="g of x equals 4 over x minus 4"
                />
                , what is the range of <InlineMath math={"g"} />?
              </>
            }
            options={[
              "All real numbers",
              "All real numbers ≥ 0",
              "All real numbers ≥ 4",
              "All real numbers ≠ 0",
              "All real numbers ≠ 0 and ≠ 4",
            ]}
            correct="All real numbers ≠ 0"
            solution={
              <>
                <p>
                  The denominator can be made arbitrarily small in magnitude by
                  taking <InlineMath math={"x"} /> close to 4. Approaching from
                  the right (<InlineMath math={"x\\to 4^{+}"} />) yields large
                  positive values, and approaching from the left (
                  <InlineMath math={"x\\to 4^{-}"} />) yields large negative
                  values. So there is no greatest or least output.
                </p>
                <p>
                  Can the output be 0? No:{" "}
                  <InlineMath math={"\\dfrac{4}{x-4}=0"} /> has no solution,
                  since a nonzero numerator over a real denominator can’t be
                  zero. Can the output be 4? Yes—set{" "}
                  <InlineMath math={"\\dfrac{4}{x-4}=4"} />, which gives{" "}
                  <InlineMath math={"x-4=1"} /> and thus{" "}
                  <InlineMath math={"x=5"} />.
                </p>
                <p>
                  Therefore the range is all real numbers except 0. Answer: D.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-12" className="space-y-4">
          <MCQExample
            number={12}
            prompt={
              <>
                Let{" "}
                <InlineMath
                  math={"f(x)=\\dfrac{\\sqrt{-x+3}}{-2}"}
                  aria-label="f of x equals square root of negative x plus 3 divided by negative 2"
                />
                . If <InlineMath math={"D"} /> and{" "}
                <InlineMath math={"R"} /> denote the domain and range of{" "}
                <InlineMath math={"f"} /> respectively, then{" "}
                <InlineMath math={"D\\cap R"} /> is the set of all real numbers{" "}
                <InlineMath math={"W"} /> such that:
              </>
            }
            options={[
              "W ≥ −3",
              "W ≤ 0",
              "W ≥ 0",
              "W ≥ 3",
              "0 ≤ W ≤ −3",
            ]}
            correct="W ≤ 0"
            solution={
              <>
                <p>
                  Domain: the radicand must be nonnegative:{" "}
                  <InlineMath math={"-x+3\\ge 0\\;\\Rightarrow\\;x\\le 3"} />.
                </p>
                <p>
                  Range: the square root is{" "}
                  <InlineMath math={"\\ge 0"} />, and dividing by{" "}
                  <InlineMath math={"-2"} /> (a negative) makes{" "}
                  <InlineMath math={"f(x)\\le 0"} />. So{" "}
                  <InlineMath math={"R=(-\\infty,0]"} />.
                </p>
                <p>
                  Intersection:{" "}
                  <InlineMath math={"D=(-\\infty,3]"} /> and{" "}
                  <InlineMath math={"R=(-\\infty,0]"} /> intersect in all real{" "}
                  <InlineMath math={"W\\le 0"} />. Answer: B.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: squeeze the function’s output by driving inputs that
          minimize or maximize the expression, and explicitly rule out
          impossible outputs. This trio—max, min, and exclusions—pins down the
          range quickly and reliably.
        </p>
      </article>
    </main>
  );
}