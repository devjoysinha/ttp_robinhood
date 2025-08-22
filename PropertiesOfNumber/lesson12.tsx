import type { Metadata } from "next";
import katex from "katex";
// Note: ensure KaTeX CSS is loaded once globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6.1 Addition and Subtraction with Signed Numbers | Properties of Numbers",
  description:
    "Understand what signed numbers are and how to add or subtract them. Includes key rules, clear examples, and quick practice with full solutions.",
};

type MathProps = {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
};

function Math({ expr, block = false, ariaLabel }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: false,
  });

  if (block) {
    return (
      <div
        className="my-4 overflow-x-auto"
        role="img"
        aria-label={ariaLabel ?? "mathematical expression"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={ariaLabel ?? "mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.1 Addition and Subtraction with Signed Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A signed number is any number that carries a plus or minus sign. In
          other words, values can be positive (such as 4, 18, or 100) or
          negative (such as −4, −18, or −100). Working confidently with signed
          numbers means knowing how their signs affect addition and subtraction.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Same-sign addition: add absolute values and keep the common sign.
              Example: −7 + (−3) = −10.
            </li>
            <li>
              Different-sign addition: subtract absolute values and keep the
              sign of the number with the larger absolute value. Example:
              −7 + 12 = 5.
            </li>
            <li>
              Subtraction rule: turn subtraction into addition of the opposite.
              <Math expr={"a - b = a + (-b)"} /> For instance,
              <Math expr={"18 - (-5) = 18 + 5 = 23"} />.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="quick-rules">
          <h3 id="quick-rules" className="mb-2 text-lg font-semibold text-white">
            Quick rules with notation
          </h3>
          <p className="mb-2">
            Let x and y be real numbers. Then:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              If sgn(x) = sgn(y), then
              <Math expr={"|x + y| = |x| + |y|"} /> and sgn(x + y) = sgn(x).
            </li>
            <li>
              If sgn(x) ≠ sgn(y), then
              <Math expr={"|x + y| = \\big| |x| - |y| \\big|"} /> and the sign
              of x + y matches the term with larger absolute value.
            </li>
            <li>
              For any a and b,
              <Math expr={"a - b = a + (-b)"} />. Always convert subtraction to
              addition before applying sign rules.
            </li>
          </ul>
        </section>

        <section aria-labelledby="worked-examples">
          <h3
            id="worked-examples"
            className="mb-2 text-lg font-semibold text-white"
          >
            Worked mini-examples
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Same sign: <Math expr={"(-9) + (-4) = -(9 + 4) = -13"} />
            </li>
            <li>
              Different signs: <Math expr={"(-7) + 12 = 12 - 7 = 5"} />
            </li>
            <li>
              Subtract a negative:
              <Math expr={"18 - (-5) = 18 + 5 = 23"} />
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="Compute (−7) + 12."
          options={["−21", "−5", "5", "21", "19"]}
          correct="5"
          solution={
            <>
              <p>
                The numbers have different signs, so subtract absolute values
                and keep the sign of the larger absolute value.
              </p>
              <p>
                <Math expr={"12 - 7 = 5"} /> and since 12 has the larger
                absolute value and is positive, the result is +5.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Evaluate 18 − (−5)."
          options={["−23", "−13", "13", "23", "25"]}
          correct="23"
          solution={
            <>
              <p>
                Rewrite subtraction as addition of the opposite:
                <Math expr={"18 - (-5) = 18 + 5"} />.
              </p>
              <p>
                Then add:
                <Math expr={"18 + 5 = 23"} />. So the value is 23.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture">
          <h3
            id="big-picture"
            className="mb-2 text-lg font-semibold text-white"
          >
            Big picture
          </h3>
          <p>
            Treat subtraction as addition first, then apply the sign rules.
            Focus on absolute values to decide whether you add or subtract
            magnitudes, and use the larger magnitude to determine the final
            sign.
          </p>
        </section>
      </article>
    </main>
  );
}