import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "19.12 Algorithms | Functions and Sequences",
  description:
    "Understand algorithm-style GMAT questions: how to follow step-by-step rules, loop control, and stopping conditions. Includes a quick warm‑up and three multiple‑choice examples with worked solutions.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel ?? `math: ${expr}`}
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
          19.12 Algorithms
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some GMAT Quant problems hand you a set of procedural rules to apply to one
          or more variables. Your job is to trace those rules carefully and determine
          the outcome.
        </p>

        <MustKnow>
          A finite, step‑by‑step set of instructions for transforming inputs into an
          output is called an algorithm.
        </MustKnow>

        <section aria-labelledby="mini-example" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="mini-example" className="mb-3 text-base font-semibold text-gray-100">
            Mini‑example
          </h3>
          <div className="overflow-x-auto rounded-md bg-black/40 p-3 text-sm">
            <pre className="whitespace-pre-wrap leading-6 text-gray-200">{`Step 1: Assign a value for x.
Step 2: If x < 3, go to step 5; otherwise, go to step 3.
Step 3: Replace x with the square root of x.
Step 4: Go to step 2.
Step 5: Output the value of x.`}</pre>
          </div>
          <p className="mt-3">
            If you start with x = 16 in Step 1, what value is printed in Step 5?
          </p>

          <details className="mt-2">
            <summary className="cursor-pointer text-gray-100">Solution</summary>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Start: x = 16</li>
              <li>
                Step 2: 16 is not less than 3 → go to Step 3
              </li>
              <li>
                Step 3: x = <MathInline expr="\sqrt{16}" ariaLabel="square root of sixteen" /> = 4
              </li>
              <li>Step 4 → back to Step 2</li>
              <li>Step 2: 4 is not less than 3 → go to Step 3</li>
              <li>
                Step 3: x = <MathInline expr="\sqrt{4}" ariaLabel="square root of four" /> = 2
              </li>
              <li>Step 4 → back to Step 2</li>
              <li>Step 2: 2 is less than 3 → go to Step 5</li>
              <li>Step 5: print x = 2</li>
            </ul>
            <p className="mt-2 font-semibold text-gray-100">Final answer: 2</p>
          </details>
        </section>

        <MustKnow>
          Work through algorithm questions exactly in the order given. Be ready for
          loops that send you forward or backward between steps, and stop only when
          the instructions say so.
        </MustKnow>

        <hr className="border-gray-800" />

        <section aria-labelledby="ex1">
          <h3 id="ex1" className="mb-2 text-lg font-semibold text-gray-100">
            Example 1
          </h3>

          <div className="overflow-x-auto rounded-md bg-black/40 p-3 text-sm">
            <pre className="whitespace-pre-wrap leading-6 text-gray-200">{`Step 1: Assign a value for n.
Step 2: If n > 17, go to step 5; otherwise, go to step 3.
Step 3: Replace n with (2n − 1).
Step 4: Go to step 2.
Step 5: Output the value of n.`}</pre>
          </div>

          <MCQExample
            number={1}
            prompt="If n = 3 is used in Step 1, which value is printed in Step 5?"
            options={["17", "29", "31", "33", "35"]}
            correct="33"
            solution={
              <>
                <p>Iterate until the stop condition is met:</p>
                <div className="overflow-x-auto rounded-md bg-black/40 p-3 text-sm">
                  <pre className="whitespace-pre-wrap leading-6 text-gray-200">{`Start: n = 3  → not > 17 → n = 2·3 − 1 = 5
n = 5  → not > 17 → n = 2·5 − 1 = 9
n = 9  → not > 17 → n = 2·9 − 1 = 17
n = 17 → not > 17 → n = 2·17 − 1 = 33
n = 33 → 33 > 17 → stop and print 33`}</pre>
                </div>
                <p className="mt-2">
                  Therefore, the output is 33.
                </p>
              </>
            }
          />
        </section>

        <hr className="border-gray-800" />

        <section aria-labelledby="ex2">
          <h3 id="ex2" className="mb-2 text-lg font-semibold text-gray-100">
            Example 2
          </h3>

          <div className="overflow-x-auto rounded-md bg-black/40 p-3 text-sm">
            <pre className="whitespace-pre-wrap leading-6 text-gray-200">{`Step 1: Assign values for j and k.
Step 2: If jk > 100, go to step 5; otherwise, go to step 3.
Step 3: Replace j with j/2 and replace k with 3k.
Step 4: Go to step 2.
Step 5: Output j + k.
Step 6: End.`}</pre>
          </div>

          <MCQExample
            number={2}
            prompt={
              <>
                If Step 1 sets j = 32 and k = 2, what value is printed in Step 5?
              </>
            }
            options={["22", "26", "59", "96", "144"]}
            correct="26"
            solution={
              <>
                <p>Track the product and stop once it exceeds 100:</p>
                <div className="overflow-x-auto rounded-md bg-black/40 p-3 text-sm">
                  <pre className="whitespace-pre-wrap leading-6 text-gray-200">{`j = 32, k = 2  → jk = 64  < 100 → transform → j = 16, k = 6
j = 16, k = 6  → jk = 96  < 100 → transform → j = 8,  k = 18
j = 8,  k = 18 → jk = 144 > 100 → stop → output j + k = 26`}</pre>
                </div>
                <p className="mt-2">Thus, the printed value is 26.</p>
              </>
            }
          />
        </section>

        <hr className="border-gray-800" />

        <section aria-labelledby="ex3">
          <h3 id="ex3" className="mb-2 text-lg font-semibold text-gray-100">
            Example 3
          </h3>

          <div className="overflow-x-auto rounded-md bg-black/40 p-3 text-sm">
            <pre className="whitespace-pre-wrap leading-6 text-gray-200">{`Step 1: Assign values for y and z.
Step 2: If (y − z) > 40, go to step 5; otherwise, go to step 3.
Step 3: Replace y with y^(−1) and replace z with (−2)z.
Step 4: Go to step 2.
Step 5: End.`}</pre>
          </div>

          <MCQExample
            number={3}
            prompt={
              <>
                If Step 1 sets{" "}
                <MathInline expr="y=\tfrac{1}{4}" ariaLabel="y equals one fourth" /> and{" "}
                <MathInline expr="z=-3" />, how many times is Step 3 executed before the
                algorithm ends?
              </>
            }
            options={["three", "four", "five", "six", "seven"]}
            correct="four"
            solution={
              <>
                <ol className="ml-5 list-decimal space-y-1">
                  <li>
                    Start:{" "}
                    <MathInline expr="y=\tfrac{1}{4},\ z=-3" />. Then{" "}
                    <MathInline expr="y-z=\tfrac{1}{4}-(-3)=\tfrac{13}{4}=3.25" /> which is less than 40 → perform Step 3.
                  </li>
                  <li>
                    1st:{" "}
                    <MathInline expr="y=\left(\tfrac{1}{4}\right)^{-1}=4" />,{" "}
                    <MathInline expr="z=-3\cdot(-2)=6" /> →{" "}
                    <MathInline expr="y-z=4-6=-2" /> (still less than 40)
                  </li>
                  <li>
                    2nd: <MathInline expr="y=4^{-1}=\tfrac{1}{4}" />,{" "}
                    <MathInline expr="z=6\cdot(-2)=-12" /> →{" "}
                    <MathInline expr="y-z=\tfrac{1}{4}-(-12)=\tfrac{49}{4}=12.25" /> (less than 40)
                  </li>
                  <li>
                    3rd:{" "}
                    <MathInline expr="y=\left(\tfrac{1}{4}\right)^{-1}=4" />,{" "}
                    <MathInline expr="z=-12\cdot(-2)=24" /> →{" "}
                    <MathInline expr="y-z=4-24=-20" /> (less than 40)
                  </li>
                  <li>
                    4th: <MathInline expr="y=4^{-1}=\tfrac{1}{4}" />,{" "}
                    <MathInline expr="z=24\cdot(-2)=-48" /> →{" "}
                    <MathInline expr="y-z=\tfrac{1}{4}-(-48)=\tfrac{193}{4}=48.25" /> which is greater than 40 → stop.
                  </li>
                </ol>
                <p className="mt-2">Step 3 is executed four times.</p>
              </>
            }
          />
        </section>
      </article>
    </main>
  );
}