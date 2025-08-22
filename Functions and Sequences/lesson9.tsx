import type { Metadata } from "next";
import katex from "katex";
// Make sure KaTeX CSS is loaded globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.10 From f(x) to f(anything) | Functions and Sequences",
  description:
    "Evaluate functions at expressions, not just numbers. Learn safe substitution with parentheses, composition like f(f(n)), and compare growth with f(2x) versus 2f(x). Includes three MCQ examples with full reasoning.",
};

// Server-side KaTeX helpers (SSR-friendly)
function K({
  children,
  block = false,
  ariaLabel,
}: {
  children: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
  });
  return (
    <span className={block ? "block my-2" : ""}>
      <span className="sr-only">{ariaLabel ?? children}</span>
      <span
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </span>
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
          19.10 From f(x) to f(anything)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you evaluate a function, you don’t have to plug in only numbers. You
          can replace the input with any valid expression—as long as you substitute
          carefully everywhere the variable appears.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Parentheses are your safety net.</p>
            <p>
              Think of your function as a template. Whatever replaces x must be
              wrapped in parentheses before you simplify. For example:
            </p>
            <K block ariaLabel="f of x equals x squared plus 2x minus 1">
              {String.raw`f(x)=x^2+2x-1`}
            </K>
            <K block ariaLabel="f of anything equals open parentheses anything close parentheses squared plus 2 times open parentheses anything close parentheses minus 1">
              {String.raw`f(\text{anything})=(\text{anything})^2+2(\text{anything})-1`}
            </K>
          </div>
        </MustKnow>

        <section aria-labelledby="ex-22">
          <h3 id="ex-22" className="sr-only">
            Example 1
          </h3>
          <MCQExample
            number={22}
            prompt={
              <>
                <span className="mr-1">Given</span>
                <K ariaLabel="f of x equals x squared plus 2x minus 1">
                  {String.raw`f(x)=x^2+2x-1`}
                </K>
                <span>what is</span>{" "}
                <K ariaLabel="f of x plus 1">{String.raw`f(x+1)`}</K>
                <span>?</span>
              </>
            }
            options={[
              "x^2 + 2x",
              "x^2 + 3x",
              "x^2 + 2x + 2",
              "x^2 + 4x + 2",
              "x^2 + 4x + 4",
            ]}
            correct="x^2 + 4x + 2"
            solution={
              <>
                <p>
                  Substitute x → (x + 1) everywhere and use parentheses:
                </p>
                <K block ariaLabel="f of x plus 1 equals open parentheses x plus 1 close parentheses squared plus 2 times open parentheses x plus 1 close parentheses minus 1">
                  {String.raw`f(x+1)=(x+1)^2+2(x+1)-1`}
                </K>
                <p>Now expand and combine like terms:</p>
                <K block ariaLabel="equals x squared plus 2x plus 1 plus 2x plus 2 minus 1 equals x squared plus 4x plus 2">
                  {String.raw`=x^2+2x+1+2x+2-1=x^2+4x+2`}
                </K>
                <p>Answer: x^2 + 4x + 2.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-23">
          <h3 id="ex-23" className="sr-only">
            Example 2
          </h3>
          <MCQExample
            number={23}
            prompt={
              <>
                <span className="mr-1">If</span>
                <K ariaLabel="f of x equals 2x minus 3">
                  {String.raw`f(x)=2x-3`}
                </K>
                <span>and</span>{" "}
                <K ariaLabel="f of f of n equals 7">{String.raw`f(f(n))=7`}</K>
                <span>, what is n?</span>
              </>
            }
            options={["-2", "0", "2", "4", "6"]}
            correct="4"
            solution={
              <>
                <p>Work from the inside out:</p>
                <K block ariaLabel="f of n equals 2n minus 3, so f of f of n equals f of 2n minus 3 equals 2 times open parentheses 2n minus 3 close parentheses minus 3 equals 4n minus 9">
                  {String.raw`f(n)=2n-3\ \Rightarrow\ f(f(n))=f(2n-3)=2(2n-3)-3=4n-9`}
                </K>
                <p>Set equal to 7 and solve:</p>
                <K block ariaLabel="4n minus 9 equals 7 implies 4n equals 16 implies n equals 4">
                  {String.raw`4n-9=7\ \Rightarrow\ 4n=16\ \Rightarrow\ n=4`}
                </K>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-24">
          <h3 id="ex-24" className="sr-only">
            Example 3
          </h3>
          <MCQExample
            number={24}
            prompt={
              <>
                For all positive x, which function guarantees{" "}
                <K ariaLabel="f of 2x is greater than 2 f of x">
                  {String.raw`f(2x)>2f(x)`}
                </K>
                ?
              </>
            }
            options={[
              "f(x) = (1/2)x",
              "f(x) = -(1/4)x",
              "f(x) = x + 4",
              "f(x) = x^2 + x",
              "f(x) = 8x",
            ]}
            correct="f(x) = x^2 + x"
            solution={
              <>
                <p>
                  Test each rule symbolically (or with a simple positive value
                  like x = 1):
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Linear scalings like{" "}
                    <K ariaLabel="f of x equals c x">
                      {String.raw`f(x)=cx`}
                    </K>{" "}
                    give{" "}
                    <K ariaLabel="f of 2x equals 2 c x and 2 f of x equals 2 c x">
                      {String.raw`f(2x)=2cx\ \text{ and }\ 2f(x)=2cx`}
                    </K>
                    , so we get equality, not a strict greater-than.
                  </li>
                  <li>
                    For{" "}
                    <K ariaLabel="f of x equals x plus 4">
                      {String.raw`f(x)=x+4`}
                    </K>
                    :
                    <K block ariaLabel="f of 2x equals 2x plus 4 and 2 f of x equals 2x plus 8, thus f of 2x is less than 2 f of x">
                      {String.raw`f(2x)=2x+4,\quad 2f(x)=2x+8\ \Rightarrow\ f(2x)<2f(x)`}
                    </K>
                  </li>
                  <li>
                    For{" "}
                    <K ariaLabel="f of x equals x squared plus x">
                      {String.raw`f(x)=x^2+x`}
                    </K>
                    :
                    <K block ariaLabel="f of 2x equals 4x squared plus 2x and 2 f of x equals 2x squared plus 2x, hence f of 2x is greater than 2 f of x for x greater than 0">
                      {String.raw`f(2x)=4x^2+2x,\quad 2f(x)=2x^2+2x\ \Rightarrow\ f(2x)>2f(x)\ \text{for }x>0`}
                    </K>
                  </li>
                </ul>
                <p>Therefore, f(x) = x^2 + x is the only choice that works.</p>
              </>
            }
          />
        </section>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Big picture</p>
            <ul className="list-disc pl-5">
              <li>
                To evaluate{" "}
                <K ariaLabel="f of expression">{String.raw`f(\text{expression})`}</K>
                , replace every x with that expression—using parentheses—then
                simplify.
              </li>
              <li>
                Composition follows the same idea: compute the inner function,
                then feed that result into the outer function.
              </li>
              <li>
                When comparing{" "}
                <K ariaLabel="f of 2x and 2 f of x">
                  {String.raw`f(2x)\ \text{and}\ 2f(x)`}
                </K>
                , quadratic growth like{" "}
                <K ariaLabel="x squared">{String.raw`x^2`}</K> often makes{" "}
                <K ariaLabel="f of 2x">{String.raw`f(2x)`}</K> exceed{" "}
                <K ariaLabel="2 f of x">{String.raw`2f(x)`}</K> for positive x.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p className="text-gray-300">
          Bottom line: substitution is pattern-matching. Wrap the input, swap it
          everywhere the variable appears, and then simplify with care.
        </p>
      </article>
    </main>
  );
}