import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.14 Testing Function Properties by Plugging Numbers | Functions & Sequences",
  description:
    "Learn a fast, reliable strategy for verifying properties of functions: plug in simple numbers. Includes a quick warm‑up, one conceptual multiple‑choice example, and one follow‑up drill with full solutions and KaTeX-rendered math.",
};

// Server-friendly KaTeX renderer (CSS provided via import above)
function Math({
  expr,
  block = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    output: "htmlAndMathml",
  });
  if (block) {
    return (
      <div
        role="math"
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={className}
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
          19.14 Testing Function Properties by Plugging Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many GMAT questions ask whether a function satisfies a property for every
          admissible input. A practical approach is to substitute small, easy
          numbers for the variables and see whether the rule holds. One clear
          counterexample is enough to disprove a “for all” claim.
        </p>

        <MustKnow>
          When a statement claims a function property is true for all inputs,
          plug in convenient values. If you find a single set of inputs for which
          the statement fails, the property is not universally true.
        </MustKnow>

        <section aria-labelledby="warmup" className="space-y-4">
          <h3 id="warmup" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>
          <p>
            Suppose <Math expr="f(x)=x^2" ariaLabel="f of x equals x squared" />.
            Does the additivity property{" "}
            <Math expr="f(n+m)=f(n)+f(m)" ariaLabel="f of n plus m equals f of n plus f of m" />{" "}
            hold for all real <Math expr="n" /> and <Math expr="m" />?
          </p>
          <p>
            Try <Math expr="n=1" /> and <Math expr="m=2" />:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <Math expr="f(1)=1^2=1" ariaLabel="f of 1 equals 1 squared equals 1" />
            </li>
            <li>
              <Math expr="f(2)=2^2=4" ariaLabel="f of 2 equals 2 squared equals 4" />
            </li>
            <li>
              <Math expr="f(1+2)=f(3)=3^2=9" ariaLabel="f of 3 equals 9" />
            </li>
          </ul>
          <p>
            Compare: <Math expr="f(3)=9" /> vs{" "}
            <Math expr="f(1)+f(2)=1+4=5" />. Because{" "}
            <Math expr="9\ne 5" ariaLabel="9 is not equal to 5" />, the property
            does not hold for all inputs.
          </p>
        </section>

        <MustKnow>
          To confirm a property is always true, your test values must work in
          every case. To disprove a universal property, one valid counterexample
          is sufficient.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example
          </h3>

          <MCQExample
            number={35}
            prompt={
              <>
                For which of the following does{" "}
                <Math
                  expr="f(j-k)=f(j)-f(k)"
                  ariaLabel="f of j minus k equals f of j minus f of k"
                />{" "}
                for all nonzero <Math expr="j" /> and <Math expr="k" />?
              </>
            }
            options={[
              "f(x) = x + 4",
              <span key="opt-b">
                f(x) = <Math expr="4x" ariaLabel="four x" />
              </span>,
              <span key="opt-c">
                f(x) = <Math expr="\dfrac{4}{x}" ariaLabel="four over x" />
              </span>,
            ]}
            correct="f(x) = 4x"
            solution={
              <>
                <p>
                  Test convenient values, say <Math expr="j=5" /> and{" "}
                  <Math expr="k=2" />.
                </p>
                <p>
                  A) <Math expr="f(x)=x+4" />:{" "}
                  <Math expr="f(5-2)=f(3)=7" />, but{" "}
                  <Math expr="f(5)-f(2)=9-6=3" />. Not equal → fails.
                </p>
                <p>
                  B) <Math expr="f(x)=4x" />:{" "}
                  <Math expr="f(3)=12" /> and{" "}
                  <Math expr="f(5)-f(2)=20-8=12" />. Equal → works.
                </p>
                <p>
                  C) <Math expr="f(x)=4/x" />:{" "}
                  <Math expr="f(3)=\frac{4}{3}" />, but{" "}
                  <Math expr="f(5)-f(2)=\frac{4}{5}-2=-\frac{6}{5}" />. Not equal
                  → fails.
                </p>
                <p>Therefore, only f(x) = 4x satisfies the property for all nonzero j and k.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-1" className="space-y-3">
          <h3 id="example-1" className="text-xl font-semibold text-white">
            Example: Additive inputs turn into multiplicative outputs
          </h3>

          <MCQExample
            number={36}
            prompt={
              <>
                For which of the following functions does{" "}
                <Math
                  expr="f(a+b)=f(a)\times f(b)"
                  ariaLabel="f of a plus b equals f of a times f of b"
                />{" "}
                for all real numbers <Math expr="a" /> and <Math expr="b" />?
              </>
            }
            options={[
              <span key="e36-a">
                f(x) = <Math expr="x" />
              </span>,
              <span key="e36-b">
                f(x) = <Math expr="x^2" />
              </span>,
              <span key="e36-c">
                f(x) = <Math expr="2^x" ariaLabel="two to the x" />
              </span>,
              <span key="e36-d">
                f(x) = <Math expr="\dfrac{x}{2}" ariaLabel="x over 2" />
              </span>,
              <span key="e36-e">
                f(x) = <Math expr="2x" />
              </span>,
            ]}
            correct="f(x) = 2^x"
            solution={
              <>
                <p>
                  Exponentials convert addition in the exponent into multiplication:{" "}
                  <Math expr="2^{a+b}=2^a\cdot 2^b" />. So{" "}
                  <Math expr="f(x)=2^x" /> satisfies the property for all real{" "}
                  <Math expr="a,b" />.
                </p>
                <p>
                  A quick check with <Math expr="a=1" />, <Math expr="b=2" />:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <Math expr="f(x)=x" /> gives <Math expr="f(3)=3" /> but{" "}
                    <Math expr="f(1)f(2)=1\cdot 2=2" /> → not equal.
                  </li>
                  <li>
                    <Math expr="f(x)=x^2" /> gives <Math expr="f(3)=9" /> but{" "}
                    <Math expr="f(1)f(2)=1\cdot 4=4" /> → not equal.
                  </li>
                  <li>
                    <Math expr="f(x)=x/2" /> gives <Math expr="f(3)=3/2" /> but{" "}
                    <Math expr="f(1)f(2)=(1/2)\cdot 1=1/2" /> → not equal.
                  </li>
                  <li>
                    <Math expr="f(x)=2x" /> gives <Math expr="f(3)=6" /> but{" "}
                    <Math expr="f(1)f(2)=2\cdot 4=8" /> → not equal.
                  </li>
                </ul>
                <p>Only f(x) = 2^x works for all real a and b.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-2" className="space-y-3">
          <h3 id="example-2" className="text-xl font-semibold text-white">
            Drill: Multiplicative inputs remain multiplicative
          </h3>

          <MCQExample
            number={37}
            prompt={
              <>
                If <Math expr="f(ab)=f(a)\times f(b)" ariaLabel="f of a b equals f of a times f of b" />{" "}
                for all nonnegative <Math expr="a,b" />, which of the following
                cannot be <Math expr="f(x)" ariaLabel="f of x" />?
              </>
            }
            options={[
              <span key="e37-a">
                f(x) = <Math expr="x" />
              </span>,
              <span key="e37-b">
                f(x) = <Math expr="x^2" />
              </span>,
              <span key="e37-c">
                f(x) = <Math expr="x^3" />
              </span>,
              <span key="e37-d">
                f(x) = <Math expr="\sqrt{x}" ariaLabel="square root of x" />
              </span>,
              <span key="e37-e">
                f(x) = <Math expr="2x" />
              </span>,
            ]}
            correct="f(x) = 2x"
            solution={
              <>
                <p>
                  Test the defining property with general inputs. Power functions
                  with nonnegative inputs are multiplicative:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <Math expr="x" />: <Math expr="f(ab)=ab" /> and{" "}
                    <Math expr="f(a)f(b)=a\cdot b=ab" /> → works.
                  </li>
                  <li>
                    <Math expr="x^2" />: <Math expr="f(ab)=(ab)^2=a^2b^2=f(a)f(b)" /> →
                    works.
                  </li>
                  <li>
                    <Math expr="x^3" />: <Math expr="(ab)^3=a^3b^3" /> → works.
                  </li>
                  <li>
                    <Math expr="\sqrt{x}" />:{" "}
                    <Math expr="f(ab)=\sqrt{ab}=\sqrt{a}\sqrt{b}=f(a)f(b)" /> for{" "}
                    <Math expr="a,b\ge 0" /> → works.
                  </li>
                </ul>
                <p>
                  For <Math expr="f(x)=2x" />, we get{" "}
                  <Math expr="f(ab)=2ab" /> but{" "}
                  <Math expr="f(a)f(b)=(2a)(2b)=4ab" />. Since{" "}
                  <Math expr="2ab\ne 4ab" />, this choice violates the property.
                </p>
                <p>Therefore, f(x) = 2x cannot satisfy the condition.</p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Bottom line: these questions are about logical validity, not heavy
          computation. If the property must work for all inputs, try simple
          substitutions. One failure disproves the claim; otherwise, look for a
          structure (like exponentials) that guarantees it for every case.
        </p>
      </article>
    </main>
  );
}