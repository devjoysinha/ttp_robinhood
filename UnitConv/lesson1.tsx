import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// IMPORTANT: make sure KaTeX CSS is loaded globally, e.g. in app/layout.tsx:
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "8.2 The Unit Conversion Process | Quant",
  description:
    "Master unit conversions using conversion factors and dimensional analysis. Learn how to set up fractions that cancel units, see common factors, and practice with two multiple‑choice problems.",
};

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    trust: true,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={display ? "block my-2 overflow-x-auto" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Unit Conversions
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.2 The Unit Conversion Process
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Any time you convert a measurement, you need a relationship that ties
          the starting unit to the target unit. That relationship is a
          conversion factor—an equality between two different unit names for the
          same quantity.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="w-full caption-bottom text-left text-sm">
            <caption className="sr-only">
              Examples of conversion factors and their fraction forms
            </caption>
            <thead className="text-gray-200">
              <tr className="border-b border-gray-700">
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Converting From
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  To
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Conversion Factor (equality)
                </th>
                <th scope="col" className="py-3 font-semibold">
                  As a fraction (value = 1)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="py-3 pr-4">Dollars</td>
                <td className="py-3 pr-4">Cents</td>
                <td className="py-3 pr-4">1 dollar = 100 cents</td>
                <td className="py-3">
                  <Math
                    expr={`\\dfrac{100\\,\\text{cents}}{1\\,\\text{dollar}}`}
                    ariaLabel="100 cents over 1 dollar"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Meters</td>
                <td className="py-3 pr-4">Kilometers</td>
                <td className="py-3 pr-4">1,000 meters = 1 kilometer</td>
                <td className="py-3">
                  <Math
                    expr={`\\dfrac{1\\,\\text{kilometer}}{1{,}000\\,\\text{meters}}`}
                    ariaLabel="1 kilometer over 1,000 meters"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Quarts</td>
                <td className="py-3 pr-4">Pints</td>
                <td className="py-3 pr-4">1 quart = 2 pints</td>
                <td className="py-3">
                  <Math
                    expr={`\\dfrac{2\\,\\text{pints}}{1\\,\\text{quart}}`}
                    ariaLabel="2 pints over 1 quart"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          On standardized tests, non‑obvious conversion factors are usually
          supplied. Since a conversion factor is an equality, you can write it
          as a fraction equal to 1. Multiplying by that fraction changes the
          unit label without changing the underlying value.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-2">
            <li>
              A conversion factor is an equality between units; as a fraction it
              equals 1.
            </li>
            <li>
              Always place the “from” unit opposite (in the denominator) so it
              cancels. If the unit you started with doesn’t cancel out, your
              setup is wrong.
            </li>
            <li>
              Unit conversions change labels, not amounts. The numeric value may
              change, but the quantity represented does not.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-lg font-semibold text-gray-200">
            Quick walkthrough
          </h3>
          <p>
            How many cents are in 100 dollars? Multiply by a fraction that turns
            dollars into cents:
          </p>
          <Math
            display
            expr={`100\\,\\text{dollars}\\;\\times\\;\\dfrac{100\\,\\text{cents}}{1\\,\\text{dollar}}\\;=\\;10{,}000\\,\\text{cents}`}
            ariaLabel="100 dollars times 100 cents over 1 dollar equals 10,000 cents"
          />
          <p>
            Writing the factor upside down would fail to cancel dollars and
            would yield nonsense units:
          </p>
          <Math
            display
            expr={`100\\,\\text{dollars}\\;\\times\\;\\dfrac{1\\,\\text{dollar}}{100\\,\\text{cents}}\\;\\text{ (incorrect) }`}
            ariaLabel="Incorrect setup: 100 dollars times 1 dollar over 100 cents"
          />
        </section>

        <MCQExample
          number={1}
          prompt="If 10 Zigs are equivalent to 20 Zags, how many Zags equal 40 Zigs?"
          options={["10", "20", "40", "60", "80"]}
          correct="80"
          solution={
            <>
              <p>Use a conversion factor that cancels Zigs:</p>
              <Math
                display
                expr={`40\\,\\text{Zigs}\\;\\times\\;\\dfrac{20\\,\\text{Zags}}{10\\,\\text{Zigs}}\\;=\\;40\\times\\dfrac{2}{1}\\;=\\;80\\,\\text{Zags}`}
                ariaLabel="40 Zigs times 20 Zags over 10 Zigs equals 80 Zags"
              />
              <p>The correct answer is 80.</p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="In finance, 1 percent equals 100 basis points. If an asset moves by 2,500 basis points, what is the change in percent?"
          options={["0.025", "0.25", "2.5", "25", "250"]}
          correct="25"
          solution={
            <>
              <p>Convert basis points to percent so BP cancels:</p>
              <Math
                display
                expr={`2{,}500\\,\\text{BP}\\;\\times\\;\\dfrac{1\\,\\%}{100\\,\\text{BP}}\\;=\\;25\\,\\%`}
                ariaLabel="2,500 basis points times 1 percent over 100 basis points equals 25 percent"
              />
              <p>So the change is 25 percent.</p>
            </>
          }
        />

        <p>
          Bottom line: dimensional analysis is about arranging factors so units
          cancel cleanly. Once the “from” unit disappears, the remaining label
          tells you the unit you converted into.
        </p>
      </article>
    </main>
  );
}