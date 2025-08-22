import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.6 Compound Functions | Functions & Sequences",
  description:
    "Understand composite and iterated functions, how to evaluate them from the inside out, and how domain restrictions propagate in f(g(x)) and f(f(x)). Includes three worked multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.6 Compound Functions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A compound (composite) function applies one function to the output of another. In
          notation, <InlineMath math="(f\circ g)(x)=f(g(x))" />. When the same function is
          applied repeatedly, such as <InlineMath math="f(f(x))" />, we call it an iterated
          function. To evaluate any composite or iterated function, work strictly from the
          inside out.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Evaluate composites from the innermost expression to the outermost:
              <InlineMath math="f(g(h(x)))" /> → compute <InlineMath math="h(x)" />, then{" "}
              <InlineMath math="g(\,\cdot\,)" />, then <InlineMath math="f(\,\cdot\,)" />.
            </li>
            <li>
              Domain restrictions travel through compositions. If an inner function is
              undefined at some value, the entire composite is undefined at that value.
            </li>
            <li>
              In iterated forms like <InlineMath math="f(f(x))" />, a value that is allowed
              in the inner call might produce an output that is not allowed in the outer
              call.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={13}
          prompt={
            <>
              If <InlineMath math={"h(x)=\\dfrac{\\sqrt{x}-2}{2}"} /> and{" "}
              <InlineMath math={"g(x)=x^{3}+1"} />, what is{" "}
              <InlineMath math={"g\\big(h(36)\\big)"} />?
            </>
          }
          options={["1", "3", "7", "9", "10"]}
          correct="9"
          solution={
            <>
              <p>Evaluate the inner function first.</p>
              <BlockMath math={"h(36)=\\dfrac{\\sqrt{36}-2}{2}=\\dfrac{6-2}{2}=2"} />
              <p>Now plug that result into g.</p>
              <BlockMath math={"g(h(36))=g(2)=2^{3}+1=8+1=9"} />
              <p>Answer: 9.</p>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt={
            <>
              Let <InlineMath math={"f(x)=x+\\dfrac{x^{2}}{3x}"} />. What is{" "}
              <InlineMath math={"f\\big(f(6)\\big)"} />?
            </>
          }
          options={[
            "1/3",
            "5/6",
            "23/9",
            "32/3",
            "35/3",
          ]}
          correct="32/3"
          solution={
            <>
              <p>Simplify and evaluate from the inside out (note: x ≠ 0 for the fraction).</p>
              <BlockMath math={"f(x)=x+\\dfrac{x^{2}}{3x}=x+\\dfrac{x}{3}"} />
              <BlockMath math={"f(6)=6+\\dfrac{6}{3}=6+2=8"} />
              <BlockMath math={"f(f(6))=f(8)=8+\\dfrac{8}{3}=\\dfrac{24}{3}+\\dfrac{8}{3}=\\dfrac{32}{3}"} />
              <p>Answer: 32/3.</p>
            </>
          }
        />

        <MCQExample
          number={15}
          prompt={
            <>
              Consider <InlineMath math={"f(x)=x+\\dfrac{x^{2}}{3x}+4"} />. Which of the
              following cannot be in the domain of <InlineMath math={"f(f(x))"} />?
              <br />
              I. 3 &nbsp;&nbsp; II. 0 &nbsp;&nbsp; III. −3
            </>
          }
          options={[
            "I only",
            "II only",
            "III only",
            "I and II",
            "II and III",
          ]}
          correct="II and III"
          solution={
            <>
              <p>
                First, note <InlineMath math={"f(x)"} /> is undefined at{" "}
                <InlineMath math={"x=0"} /> because the denominator <InlineMath math={"3x"} /> would be 0.
              </p>
              <p>
                Check I: <InlineMath math={"x=3"} /> is valid. Compute the inner call:
              </p>
              <BlockMath math={"f(3)=3+\\dfrac{9}{9}+4=3+1+4=8"} />
              <p>
                Since <InlineMath math={"f(3)=8"} /> and <InlineMath math={"f(8)"} /> is defined, 3 is in the domain of{" "}
                <InlineMath math={"f(f(x))"} />.
              </p>
              <p>
                Check II: <InlineMath math={"x=0"} /> makes the inner <InlineMath math={"f(0)"} /> undefined, so 0 is
                not in the domain of <InlineMath math={"f(f(x))"} />.
              </p>
              <p>
                Check III: <InlineMath math={"x=-3"} /> gives
              </p>
              <BlockMath math={"f(-3)=-3+\\dfrac{(-3)^{2}}{3(-3)}+4=-3+\\dfrac{9}{-9}+4=-3-1+4=0"} />
              <p>
                Then the outer call is <InlineMath math={"f(0)"} />, which is undefined as above. So −3 is not in the
                domain of <InlineMath math={"f(f(x))"} />.
              </p>
              <p>Therefore, II and III cannot be in the domain.</p>
            </>
          }
        />

        <p>
          Takeaways: always move from inner to outer when evaluating composites, and track
          where denominators, square roots, and other constraints make expressions
          undefined—the composite inherits those restrictions.
        </p>
      </article>
    </main>
  );
}