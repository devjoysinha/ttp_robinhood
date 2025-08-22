import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "19.4 The Range of a Function | Functions & Sequences",
  description:
    "Understand what a function’s range is and how to find it for common forms: square‑root shifts, even and odd powers plus a constant, and linear functions. Includes worked multiple‑choice examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.4 The Range of a Function
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The domain of a function is the set of inputs the function allows. The
          range is the set of outputs the function can produce. This lesson
          focuses on finding the range quickly for several high‑yield forms:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <InlineMath math={"f(x)=\\sqrt{x}+b"} />
          </li>
          <li>
            <InlineMath math={"f(x)=x^{n}+c"} /> with n a positive even integer
          </li>
          <li>
            <InlineMath math={"f(x)=x^{n}+c"} /> with n a positive odd integer
          </li>
          <li>
            <InlineMath math={"f(x)=ax+b"} />, where <InlineMath math={"a\\neq 0"} />
          </li>
        </ul>

        <MustKnow>
          The range of a function is the complete set of values the function can
          output.
        </MustKnow>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            1) Square‑root shifts: f(x) = √x + b
          </h3>
          <p>
            Because <InlineMath math={"\\sqrt{x}"} /> is defined for{" "}
            <InlineMath math={"x\\ge 0"} /> and outputs{" "}
            <InlineMath math={"\\sqrt{x}\\ge 0"} />, adding a constant b shifts
            every output up or down by b. So the smallest possible value of{" "}
            <InlineMath math={"\\sqrt{x}+b"} /> is b (attained at{" "}
            <InlineMath math={"x=0"} />).
          </p>

          <MustKnow>
            If <InlineMath math={"f(x)=\\sqrt{x}+b"} />, then the range is{" "}
            <InlineMath math={"y\\ge b"} />.
          </MustKnow>

          <p className="text-gray-300">
            Example: for{" "}
            <InlineMath math={"g(x)=\\sqrt{x}+3"} />, the range is{" "}
            <InlineMath math={"y\\ge 3"} />.
          </p>

          <MCQExample
            number={46}
            prompt="If g(x) = −3 + √x, what is the range of g?"
            options={[
              "All real numbers ≥ 0",
              "All real numbers ≥ 3",
              "All real numbers ≤ 3",
              "All real numbers ≥ −3",
              "All real numbers ≤ −3",
            ]}
            correct="All real numbers ≥ −3"
            solution={
              <>
                <p>
                  Write <InlineMath math={"g(x)=\\sqrt{x}+(-3)"} />. Since{" "}
                  <InlineMath math={"\\sqrt{x}\\ge 0"} /> for{" "}
                  <InlineMath math={"x\\ge 0"} />, the outputs satisfy{" "}
                  <InlineMath math={"g(x)\\ge -3"} />. Thus the range is{" "}
                  <InlineMath math={"y\\ge -3"} />.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            2) Even powers plus a constant: f(x) = xⁿ + c (n even)
          </h3>
          <p>
            For an even power, <InlineMath math={"x^{n}\\ge 0"} /> for all real{" "}
            <InlineMath math={"x"} /> and achieves 0 at{" "}
            <InlineMath math={"x=0"} />. Adding <InlineMath math={"c"} /> shifts
            every output by c, so the smallest possible output is c.
          </p>

          <MustKnow>
            If <InlineMath math={"f(x)=x^{n}+c"} /> with n a positive even
            integer, then the range is <InlineMath math={"y\\ge c"} />.
          </MustKnow>

          <p className="text-gray-300">
            Example: <InlineMath math={"k(x)=x^{2}+7"} /> has range{" "}
            <InlineMath math={"y\\ge 7"} />.
          </p>

          <MCQExample
            number={47}
            prompt="Let h(x) = (x^2 + 4)(x + 2)(x − 2). What is the range of h?"
            options={[
              "All real numbers",
              "All real numbers ≥ −16",
              "All real numbers ≤ −16",
              "All real numbers ≥ 16",
              "All real numbers ≤ 16",
            ]}
            correct="All real numbers ≥ −16"
            solution={
              <>
                <p>
                  Factor the last two terms as a difference of squares:
                  <InlineMath math={"(x+2)(x-2)=x^2-2x+2x-4=x^2-4"} />. Then
                  <InlineMath math={"h(x)=(x^2+4)(x^2-4)=x^4-16"} />.
                </p>
                <p>
                  Since <InlineMath math={"x^4\\ge 0"} />, the outputs satisfy{" "}
                  <InlineMath math={"x^4-16\\ge -16"} />. So the range is{" "}
                  <InlineMath math={"y\\ge -16"} />.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            3) Odd powers plus a constant: f(x) = xⁿ + c (n odd)
          </h3>
          <p>
            Odd‑power functions map the real line onto the real line: for any{" "}
            <InlineMath math={"y\\in\\mathbb{R}"} /> there’s an{" "}
            <InlineMath math={"x"} /> with <InlineMath math={"x^{n}=y-c"} />.
            Thus adding a constant does not restrict outputs.
          </p>

          <MustKnow>
            If <InlineMath math={"f(x)=x^{n}+c"} /> with n a positive odd
            integer, the range is all real numbers.
          </MustKnow>

          <p className="text-gray-300">
            Example: <InlineMath math={"p(x)=x^{3}+1"} /> has range{" "}
            <InlineMath math={"(-\\infty,\\infty)"} />.
          </p>

          <MCQExample
            number={48}
            prompt="If g(x) = (x^3 − 4)(x^6 + 4x^3 + 16), what is the range of g?"
            options={[
              "All real numbers",
              "All real numbers ≥ 4",
              "All real numbers ≥ −4",
              "All real numbers ≥ 64",
              "All real numbers ≥ −64",
            ]}
            correct="All real numbers"
            solution={
              <>
                <p>
                  Multiply out structurally:{" "}
                  <InlineMath math={"(x^3-4)(x^6+4x^3+16)"} /> is a product of a
                  linear term in <InlineMath math={"x^3"} /> and a perfect
                  square trinomial in <InlineMath math={"x^3"} />; it simplifies
                  to <InlineMath math={"x^9-64"} />. Since n=9 is odd,{" "}
                  <InlineMath math={"x^9"} /> covers all reals, and shifting by{" "}
                  <InlineMath math={"-64"} /> still yields all reals. Hence the
                  range is <InlineMath math={"(-\\infty,\\infty)"} />.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            4) Linear functions: f(x) = ax + b, a ≠ 0
          </h3>
          <p>
            A non‑constant linear function is one‑to‑one and onto the real line:
            every real number appears exactly once as an output.
          </p>

          <MustKnow>
            If <InlineMath math={"f(x)=ax+b"} /> with{" "}
            <InlineMath math={"a\\ne 0"} />, the range is all real numbers.
          </MustKnow>

          <MCQExample
            number={49}
            prompt="If g(x) = −3x + 2, what is the range of g?"
            options={[
              "All real numbers",
              "All real numbers ≥ −3",
              "All real numbers ≤ −3",
              "All real numbers ≥ 2",
              "All real numbers ≤ 2",
            ]}
            correct="All real numbers"
            solution={
              <>
                <p>
                  Because <InlineMath math={"a=-3\\ne 0"} />,{" "}
                  <InlineMath math={"g"} /> is a non‑constant linear function.
                  Its outputs span all real numbers.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Quick recap</h3>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"\\sqrt{x}+b"} /> ⇒{" "}
              <InlineMath math={"y\\ge b"} />
            </li>
            <li>
              <InlineMath math={"x^{\\text{even}}+c"} /> ⇒{" "}
              <InlineMath math={"y\\ge c"} />
            </li>
            <li>
              <InlineMath math={"x^{\\text{odd}}+c"} /> ⇒ all real numbers
            </li>
            <li>
              <InlineMath math={"ax+b\\,(a\\ne 0)"} /> ⇒ all real numbers
            </li>
          </ul>
          <p>
            When possible, simplify the expression first (for instance, by
            factoring or expanding) to match one of these templates before
            reading off the range.
          </p>
        </section>
      </article>
    </main>
  );
}