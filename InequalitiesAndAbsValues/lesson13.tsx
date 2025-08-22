import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.12.2 When Two Absolute Values Are Equal | Inequalities & Absolute Value",
  description:
    "Learn the rule for when two absolute values are equal: the insides are either identical or negatives of each other. Includes two worked GMAT-style examples with full reasoning.",
};

function K({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "html",
  });
  return (
    <span
      className={display ? "block my-2" : ""}
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
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.12.2 When Two Absolute Values Are Equal
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A very handy fact with absolute values is knowing exactly when two of
          them match. The equation
          <span className="mx-2 align-middle">
            <K expr="|x| = |y|" />
          </span>
          holds in only two situations: when the expressions inside the bars are
          the same number, or when they are negatives of each other. For
          instance,
          <span className="mx-1 align-middle">
            <K expr="|5| = |5|" />
          </span>
          and
          <span className="mx-1 align-middle">
            <K expr="|-5| = |5|" />
          </span>
          are both true.
        </p>

        <MustKnow>
          If
          <span className="mx-1 align-middle">
            <K expr="|A| = |B|" />
          </span>
          , then exactly one of the following must be true:
          <span className="mx-1 align-middle">
            <K expr="A = B" />
          </span>
          or
          <span className="mx-1 align-middle">
            <K expr="A = -B" />
          </span>
          . In solving equations, treat these as two separate linear cases.
        </MustKnow>

        <section aria-labelledby="ex-35">
          <h3 id="ex-35" className="sr-only">
            Example 35
          </h3>

          <MCQExample
            number={35}
            prompt="If |16x + 14| = |8x + 6|, what is the product of all possible values of x?"
            options={["-8", "-1", "0", "5/6", "1"]}
            correct="5/6"
            solution={
              <>
                <p>
                  Apply the rule
                  <span className="mx-1 align-middle">
                    <K expr="|A| = |B| \Rightarrow A=B \text{ or } A=-B" />
                  </span>
                  with
                  <span className="mx-1 align-middle">
                    <K expr="A=16x+14" />
                  </span>
                  and
                  <span className="mx-1 align-middle">
                    <K expr="B=8x+6" />
                  </span>
                  .
                </p>

                <p className="mt-3 font-semibold text-white">Case 1: A = B</p>
                <K display expr="16x + 14 = 8x + 6 \;\;\Rightarrow\;\; 8x = -8 \;\;\Rightarrow\;\; x = -1" />

                <p className="mt-3 font-semibold text-white">Case 2: A = −B</p>
                <K display expr="16x + 14 = -(8x + 6) \;\;\Rightarrow\;\; 16x + 14 = -8x - 6 \;\;\Rightarrow\;\; 24x = -20 \;\;\Rightarrow\;\; x = -\tfrac{5}{6}" />

                <p className="mt-3">
                  The product of the solutions is
                  <span className="mx-1 align-middle">
                    <K expr="(-1)\cdot\!\left(-\tfrac{5}{6}\right) = \tfrac{5}{6}" />
                  </span>
                  .
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-36">
          <h3 id="ex-36" className="sr-only">
            Example 36
          </h3>

          <MCQExample
            number={36}
            prompt="If |2x + 8| = |4x − 4|, which of the following could be the value of x?  I. −2/3  II. 4  III. 6"
            options={["I only", "II only", "III only", "I and III", "I, II, and III"]}
            correct="I and III"
            solution={
              <>
                <p>
                  Using the same principle,
                  <span className="mx-1 align-middle">
                    <K expr="|2x+8| = |4x-4| \Rightarrow 2x+8=4x-4 \text{ or } 2x+8=-(4x-4)" />
                  </span>
                  .
                </p>

                <p className="mt-3 font-semibold text-white">Case 1: Equal</p>
                <K display expr="2x + 8 = 4x - 4 \;\;\Rightarrow\;\; 12 = 2x \;\;\Rightarrow\;\; x = 6" />

                <p className="mt-3 font-semibold text-white">Case 2: Opposites</p>
                <K display expr="2x + 8 = -(4x - 4) \;\;\Rightarrow\;\; 2x + 8 = -4x + 4 \;\;\Rightarrow\;\; 6x = -4 \;\;\Rightarrow\;\; x = -\tfrac{2}{3}" />

                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>
                    I:
                    <span className="ml-2 align-middle">
                      <K expr="-\tfrac{2}{3}" />
                    </span>
                    works.
                  </li>
                  <li>
                    II:
                    <span className="ml-2">4 does not satisfy the equation.</span>
                  </li>
                  <li>
                    III:
                    <span className="ml-2">6 works.</span>
                  </li>
                </ul>

                <p className="mt-3">Therefore, the correct choice is I and III.</p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: To solve equations with absolute values on both sides, split
          into the “equal” and “opposite” cases. Each case is linear and quick
          to solve.
        </p>
      </article>
    </main>
  );
}