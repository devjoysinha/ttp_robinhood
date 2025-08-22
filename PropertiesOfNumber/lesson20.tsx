import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn’t already include KaTeX styles globally (e.g., in app/layout.tsx),
// add: import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "4.6.9 Drawing Conclusions Involving Inequalities | Properties of Numbers",
  description:
    "Learn a case‑based strategy to prove or disprove statements with signed variables. Includes factoring tips and three multiple‑choice practice questions with full reasoning.",
};

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
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
          4.6.9 Drawing Conclusions Involving Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many questions ask what must be true about sums, differences, or products when
          you only know the signs or ordering of variables. The fastest way to reason through
          these is to list the possible sign patterns that satisfy the given information and then
          test each statement against those patterns.
        </p>

        <MustKnow>
          Label variables left to right in ascending order when you build a quick
          “sign table.” That way, you can scan cases at a glance and avoid mixing up which
          variable is larger.
        </MustKnow>

        <section aria-labelledby="two-step">
          <h3 id="two-step" className="text-xl font-semibold text-white">
            A two‑step game plan
          </h3>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Step 1: Enumerate all sign cases that satisfy the prompt (positive, negative, and
              allowed zeroes if any).
            </li>
            <li>
              Step 2: For each choice, check whether it holds in every allowed case. If a single case breaks it,
              it’s not something that “must” be true.
            </li>
          </ul>
        </section>

        <section aria-labelledby="mini-tip">
          <h3 id="mini-tip" className="text-xl font-semibold text-white">
            A quick caution
          </h3>
          <p>
            You won’t always need every case. Sometimes the prompt alone locks in a sign. For example,
            if you know <Math expr="k &gt; j" /> then <Math expr="k - j" /> is automatically positive.
          </p>
        </section>

        <MustKnow>
          When expressions include sums or differences, try factoring. Rewriting expressions as
          products can expose sign information immediately.
        </MustKnow>

        <section aria-labelledby="factoring-demo" className="space-y-3">
          <h3 id="factoring-demo" className="text-xl font-semibold text-white">
            Mini‑example: factor before you case‑check
          </h3>
          <p>
            Suppose <Math expr="x &lt; 0" /> and <Math expr="x^2y + 2xy &gt; 0" />. Factor first:
          </p>
          <div className="rounded-md bg-gray-900/40 p-4">
            <div className="text-gray-200">
              <Math
                display
                expr={String.raw`
                  x^2y + 2xy = xy(x+2)
                `}
              />
              <Math display expr={String.raw`xy(x+2) &gt; 0`} />
            </div>
          </div>
          <p>
            Since <Math expr="x &lt; 0" />, the term <Math expr="x+2" /> could be negative or positive
            depending on the exact value of <Math expr="x" />. Use the product form to decide the sign of{" "}
            <Math expr="y" /> in each subcase so the product is positive. Factoring turns a messy sum into a
            clean sign puzzle.
          </p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={12}
          prompt={
            <>
              If <Math expr="x &lt; y &lt; z" /> and <Math expr="xyz &gt; 0" />, which of the following must be
              true?
            </>
          }
          options={[
            <>
              <Math expr="yz &gt; 0" />
            </>,
            <>
              <Math expr="xz &lt; 0" />
            </>,
            <>
              <Math expr="x + y &gt; 0" />
            </>,
            <>
              <Math expr="xy &gt; 0" />
            </>,
            <>
              <Math expr="x + y + z &gt; 0" />
            </>,
          ]}
          correct="xy > 0"
          solution={
            <>
              <p>
                Because <Math expr="xyz &gt; 0" />, none of the variables is zero. A positive product occurs if
                all three are positive or if exactly two are negative and one is positive. Given{" "}
                <Math expr="x &lt; y &lt; z" />, the “two negatives and a positive” arrangement must be{" "}
                <Math expr="x" /> and <Math expr="y" /> negative with <Math expr="z" /> positive, or all three
                positive.
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  Case 1: <Math expr="(+,+,+)" /> → <Math expr="xy &gt; 0" />
                </li>
                <li>
                  Case 2: <Math expr="(-,-,+)" /> → <Math expr="xy &gt; 0" />
                </li>
              </ul>
              <p>In both valid cases, the product xy is positive. The correct answer is D.</p>
            </>
          }
        />

        <MCQExample
          number={13}
          prompt={
            <>
              If <Math expr="c &lt; r &lt; b &lt; w &lt; t &lt; z" /> and{" "}
              <Math expr="crbwtz &lt; 0" />, which of the following must be true?
            </>
          }
          options={[
            <>
              <Math expr="t + z &gt; 0" />
            </>,
            <>
              <Math expr="cw &gt; 0" />
            </>,
            <>
              <Math expr="wt &gt; 0" />
            </>,
            <>
              <Math expr="bt &lt; 0" />
            </>,
            <>
              <Math expr="b + t &gt; 0" />
            </>,
          ]}
          correct="wt > 0"
          solution={
            <>
              <p>
                The product <Math expr="crbwtz" /> is negative, so an odd number of factors are negative:
                1, 3, or 5 of them. With variables in ascending order, negatives (if any) must occupy the
                leftmost positions.
              </p>
              <ul className="ml-5 list-disc">
                <li>Case 1: exactly 1 negative → only c negative; others positive</li>
                <li>Case 2: exactly 3 negatives → c, r, b negative; others positive</li>
                <li>Case 3: exactly 5 negatives → c, r, b, w, t negative; z positive</li>
              </ul>
              <p>
                In all three cases, <Math expr="w" /> and <Math expr="t" /> share the same sign (both positive
                in Cases 1–2, both negative in Case 3), so <Math expr="wt" /> is always positive. Thus C must
                be true.
              </p>
              <p>
                The other options can fail depending on the case: sums can flip sign, and products of mixed
                signs may be positive or negative.
              </p>
            </>
          }
        />

        <section aria-labelledby="more-factoring" className="space-y-3">
          <h3 id="more-factoring" className="text-xl font-semibold text-white">
            Another factoring pass
          </h3>
          <p>
            If an answer choice looks like a sum or difference, try to factor it first. For instance,
            <Math expr="x^2y + 2xy" /> becomes <Math expr="xy(x+2)" />, and{" "}
            <Math expr="j^2 - c^2" /> becomes <Math expr="(j+c)(j-c)" />. These forms make sign checking
            straightforward.
          </p>
        </section>

        <MCQExample
          number={14}
          prompt={
            <>
              If <Math expr="c &lt; 0" />, <Math expr="j &gt; c" />, and{" "}
              <Math expr="cj \ne 0" />, which of the following must be true?
              <br />
              I. <Math expr="jc - c^2 &lt; 0" />
              <br />
              II. <Math expr="j^2 - c^2 &lt; 0" />
              <br />
              III. <Math expr="c^3 - c^2 j &lt; 0" />
            </>
          }
          options={[
            "I only",
            "I and II",
            "I and III",
            "II and III",
            "I, II, and III",
          ]}
          correct="I and III"
          solution={
            <>
              <p>
                I: Factor <Math expr="jc - c^2 = c(j - c)" />. Since <Math expr="c &lt; 0" /> and{" "}
                <Math expr="j &gt; c" /> implies <Math expr="j - c &gt; 0" />, the product is negative. So I
                must hold.
              </p>
              <p>
                II: Factor <Math expr="j^2 - c^2 = (j + c)(j - c)" />. We already know{" "}
                <Math expr="j - c &gt; 0" />, but <Math expr="j + c" /> could be positive, zero, or negative,
                depending on actual values. So II is not guaranteed.
              </p>
              <p>
                III: Factor <Math expr="c^3 - c^2 j = c^2(c - j)" />. Here <Math expr="c^2 &gt; 0" /> and{" "}
                <Math expr="c - j &lt; 0" /> because <Math expr="j &gt; c" />. Thus the product is negative,
                so III must be true.
              </p>
              <p>Only statements I and III are forced. Answer: C.</p>
            </>
          }
        />

        <MustKnow>
          Summary: Build sign cases that respect the given order and product constraints,
          keep variables arranged left to right from least to greatest, and factor whenever sums or
          differences appear. A single counterexample is enough to eliminate a “must be true” claim.
        </MustKnow>
      </article>
    </main>
  );
}