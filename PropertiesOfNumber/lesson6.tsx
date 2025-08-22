import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Assumes KaTeX CSS is included globally (e.g., in app/layout.tsx)

function Eq(props: { expr: string; display?: boolean; ariaLabel?: string }) {
  const { expr, display = false, ariaLabel } = props;
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel || expr}
      className={display ? "block py-1" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "4.4.1 Even/Odd: Addition and Subtraction | Properties of Numbers",
  description:
    "Know exactly when sums and differences are even or odd. A compact rule chart rendered with KaTeX, intuitive checks, and a quick practice question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.4.1 Even/Odd Rules for Addition and Subtraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When adding or subtracting integers, the parity (even or odd) of the result depends only on
          whether the two numbers share the same parity. If both inputs are even or both are odd,
          the result is even. If they have different parity, the result is odd.
        </p>

        <MustKnow>
          For any integers a and b:
          <ul className="mt-3 list-disc pl-6">
            <li>If a and b have the same parity (both even or both odd), then a ± b is even.</li>
            <li>If a and b have different parity (one even, one odd), then a ± b is odd.</li>
          </ul>
        </MustKnow>

        <section aria-labelledby="rule-chart">
          <h3 id="rule-chart" className="sr-only">
            Rule chart for even/odd sums and differences
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <h4 className="mb-2 text-base font-semibold text-gray-100">
                Results that are even
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Eq expr="\,\text{odd} + \text{odd} = \text{even}" ariaLabel="odd plus odd equals even" />
                </li>
                <li>
                  <Eq expr="\,\text{even} + \text{even} = \text{even}" ariaLabel="even plus even equals even" />
                </li>
                <li>
                  <Eq expr="\,\text{odd} - \text{odd} = \text{even}" ariaLabel="odd minus odd equals even" />
                </li>
                <li>
                  <Eq expr="\,\text{even} - \text{even} = \text{even}" ariaLabel="even minus even equals even" />
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <h4 className="mb-2 text-base font-semibold text-gray-100">
                Results that are odd
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Eq expr="\,\text{odd} + \text{even} = \text{odd}" ariaLabel="odd plus even equals odd" />
                </li>
                <li>
                  <Eq expr="\,\text{even} + \text{odd} = \text{odd}" ariaLabel="even plus odd equals odd" />
                </li>
                <li>
                  <Eq expr="\,\text{odd} - \text{even} = \text{odd}" ariaLabel="odd minus even equals odd" />
                </li>
                <li>
                  <Eq expr="\,\text{even} - \text{odd} = \text{odd}" ariaLabel="even minus odd equals odd" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="quick-checks">
          <h3 id="quick-checks" className="text-lg font-semibold text-gray-100">
            Quick checks with numbers
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <Eq expr="5 + 7 = 12" ariaLabel="five plus seven equals twelve" /> → both addends are odd, result is even
            </li>
            <li>
              <Eq expr="4 + 8 = 12" ariaLabel="four plus eight equals twelve" /> → both addends are even, result is even
            </li>
            <li>
              <Eq expr="3 + 4 = 7" ariaLabel="three plus four equals seven" /> → different parity, result is odd
            </li>
          </ul>
          <p className="mt-2">
            If you blank on the rule, rebuild it quickly with small sample integers as shown above.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Which statement is always true for integers?"
          options={[
            "odd + odd = odd",
            "odd − odd = even",
            "even − odd = even",
            "even + odd = even",
            "odd + even = even",
          ]}
          correct="odd − odd = even"
          solution={
            <>
              <p>
                Use the same-parity rule: when both numbers share parity, sums and differences are even. Two odd numbers have the same parity, so odd − odd is even. The other options contradict the parity rules.
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  <Eq expr="\text{odd}+\text{odd}=\text{even}" ariaLabel="odd plus odd equals even" /> not odd
                </li>
                <li>
                  <Eq expr="\text{even}-\text{odd}=\text{odd}" ariaLabel="even minus odd equals odd" /> not even
                </li>
                <li>
                  <Eq expr="\text{even}+\text{odd}=\text{odd}" ariaLabel="even plus odd equals odd" /> not even
                </li>
                <li>
                  <Eq expr="\text{odd}+\text{even}=\text{odd}" ariaLabel="odd plus even equals odd" /> not even
                </li>
              </ul>
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: parity for addition and subtraction is position‑free and pattern‑based—match the inputs’ parity to predict the result instantly.
        </p>
      </article>
    </main>
  );
}