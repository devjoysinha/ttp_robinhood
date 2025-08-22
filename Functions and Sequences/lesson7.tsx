import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.8 Maximum and Minimum Values of a Quadratic Function | Functions & Sequences",
  description:
    "How to find the maximum or minimum value of a quadratic function using the vertex formula x = -b/(2a). Includes a quick warm-up, two multiple‑choice examples, and concise takeaways.",
};

type MathProps = {
  expr: string;
  block?: boolean;
  className?: string;
  ariaLabel?: string;
};

function Math({ expr, block = false, className = "", ariaLabel }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    output: "html",
  });
  const Comp = block ? "div" : "span";
  return (
    <Comp
      className={className}
      aria-label={ariaLabel ?? expr}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
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
          19.8 Maximum and Minimum Values of a Quadratic Function
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A quadratic function has the form{" "}
          <Math expr="f(x)=ax^2+bx+c" ariaLabel="f of x equals a x squared plus b x plus c" />{" "}
          with <Math expr="a \ne 0" />. Examples include{" "}
          <Math expr="2x^2-8x+5" />, <Math expr="x^2-9x-3" />, and{" "}
          <Math expr="-3x^2-7x" />. Many test questions ask for the largest or
          smallest possible output of such a function.
        </p>

        <MustKnow>
          To locate an extreme value (maximum or minimum) of{" "}
          <Math expr="f(x)=ax^2+bx+c" />, use the vertex x‑coordinate{" "}
          <Math expr="x_v=-\dfrac{b}{2a}" ariaLabel="x sub v equals negative b over two a" />.
          • If <Math expr="a>0" />, the parabola opens upward and the vertex is a minimum. • If{" "}
          <Math expr="a<0" />, it opens downward and the vertex is a maximum. After finding{" "}
          <Math expr="x_v" />, plug it back into the original function to get the extreme output{" "}
          <Math expr="f(x_v)" />.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-white font-semibold">
            Quick warm‑up
          </h3>
          <p>
            What is the smallest value of{" "}
            <Math expr="f(x)=4x^2-8x+3" />?
          </p>
          <p>
            Here, <Math expr="a=4" />, <Math expr="b=-8" />, <Math expr="c=3" />. The vertex occurs at{" "}
            <Math expr="x_v=-\dfrac{b}{2a}=-\dfrac{-8}{2\cdot 4}=1" />. Evaluate{" "}
            <Math expr="f(1)=4(1)^2-8(1)+3=4-8+3=-1" />. Thus, the minimum value is{" "}
            <Math expr="-1" />.
          </p>
        </section>

        <MustKnow>
          The number <Math expr="-\dfrac{b}{2a}" /> tells you where the extreme occurs. The extreme value
          itself is <Math expr="f\!\left(-\dfrac{b}{2a}\right)" />. Always substitute the x‑value back into
          the original function.
        </MustKnow>

        <MCQExample
          number={16}
          prompt={
            <>
              What is the maximum value of{" "}
              <Math expr="g(x)=-2x^2-12x-9" ariaLabel="g of x equals negative two x squared minus twelve x minus nine" />?
            </>
          }
          options={["-9", "-3", "4", "9", "13"]}
          correct="9"
          solution={
            <>
              <p>
                Since <Math expr="a=-2<0" />, the vertex is a maximum. Compute{" "}
                <Math expr="x_v=-\dfrac{b}{2a}=-\dfrac{-12}{2\cdot(-2)}=-\dfrac{12}{-4}=-3" />.
              </p>
              <p>
                Now evaluate:{" "}
                <Math
                  block
                  expr={`g(-3)=-2(-3)^2-12(-3)-9=-2(9)+36-9= -18+27=9`}
                  ariaLabel="g of negative three equals nine"
                />
                The greatest value is 9.
              </p>
            </>
          }
        />

        <MCQExample
          number={17}
          prompt={
            <>
              What is the minimum value of{" "}
              <Math expr="f(x)=10(x+4)(x+6)" />?
            </>
          }
          options={["-10", "-5", "0", "24", "990"]}
          correct="-10"
          solution={
            <>
              <p>
                Method 1 (roots/axis): The zeros are <Math expr="x=-4" /> and{" "}
                <Math expr="-6" />. The axis of symmetry is the midpoint{" "}
                <Math expr="\dfrac{-4+(-6)}{2}=-5" />, so the vertex occurs at{" "}
                <Math expr="x=-5" />. Then{" "}
                <Math expr="f(-5)=10(-5+4)(-5+6)=10(-1)(1)=-10" />. Since{" "}
                <Math expr="a=10>0" />, this vertex value is a minimum.
              </p>
              <p>
                Method 2 (expand + vertex):{" "}
                <Math expr="f(x)=10x^2+100x+240" />, so{" "}
                <Math expr="x_v=-\dfrac{b}{2a}=-\dfrac{100}{2\cdot10}=-5" /> and{" "}
                <Math expr="f(-5)=-10" />.
              </p>
            </>
          }
        />

        <MustKnow>
          Summary: For{" "}
          <Math expr="f(x)=ax^2+bx+c" /> with <Math expr="a\ne 0" />:
          • If <Math expr="a>0" />, the minimum occurs at{" "}
          <Math expr="x=-\dfrac{b}{2a}" />; • If <Math expr="a<0" />, the maximum occurs at{" "}
          <Math expr="x=-\dfrac{b}{2a}" />. In all cases, compute{" "}
          <Math expr="f\!\left(-\dfrac{b}{2a}\right)" /> to get the extreme value.
        </MustKnow>

        <p className="text-gray-300">
          Up next: applying these ideas to word problems that involve maximizing or minimizing a quantity.
        </p>
      </article>
    </main>
  );
}