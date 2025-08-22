import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.4 Decimals | Essential GMAT Quant Skills",
  description:
    "Understand decimal notation and base‑10 place value. See how each position corresponds to a power of 10, view a responsive place‑value chart, and practice with a quick check‑in.",
};

function KInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  return (
    <span
      className="whitespace-nowrap"
      aria-label={ariaLabel ?? `math: ${children}`}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          throwOnError: false,
          output: "html",
          strict: "ignore",
        }),
      }}
    />
  );
}

function KBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  return (
    <div
      className="my-2 overflow-x-auto"
      role="img"
      aria-label={ariaLabel ?? `math: ${children}`}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          displayMode: true,
          throwOnError: false,
          output: "html",
          strict: "ignore",
        }),
      }}
    />
  );
}

function PlaceValueTable() {
  // Accessible, responsive place-value table with powers of 10 and decimal forms
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700/50">
      <table className="w-full border-collapse text-left text-gray-300">
        <caption className="sr-only">
          Place values around the decimal point with corresponding powers of 10 and decimal forms
        </caption>
        <thead className="bg-gray-800/60">
          <tr>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Thousands
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Hundreds
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Tens
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Ones
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Decimal point
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Tenths
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Hundredths
            </th>
            <th scope="col" className="px-3 py-2 text-sm font-semibold text-gray-200">
              Thousandths
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-700/50">
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the third power">{`10^3`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the second power">{`10^2`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the first power">{`10^1`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the zero power">{`10^0`}</KInline>
            </td>
            <td className="px-3 py-2 text-gray-400">·</td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the negative first power">{`10^{-1}`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the negative second power">{`10^{-2}`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten to the negative third power">{`10^{-3}`}</KInline>
            </td>
          </tr>
          <tr className="border-t border-gray-700/50">
            <td className="px-3 py-2">
              <KInline ariaLabel="one thousand">{`1{,}000`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="one hundred">{`100`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="ten">{`10`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="one">{`1`}</KInline>
            </td>
            <td className="px-3 py-2 text-gray-400">.</td>
            <td className="px-3 py-2">
              <KInline ariaLabel="one tenth">{`0.1 = \\frac{1}{10}`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="one hundredth">{`0.01 = \\frac{1}{100}`}</KInline>
            </td>
            <td className="px-3 py-2">
              <KInline ariaLabel="one thousandth">{`0.001 = \\frac{1}{1000}`}</KInline>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.4 Decimals</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A decimal is any number written with a decimal point. Examples include 0.003, 4.987, and
          14.786. Our number system is base‑10, so every position in a number is tied to a power of
          10.
        </p>

        <MustKnow>
          In base‑10, each step to the left multiplies the place value by{" "}
          <KInline>{`10`}</KInline>, and each step to the right divides by{" "}
          <KInline>{`10`}</KInline>. Equivalently, places correspond to powers of ten:
          ones <KInline>{`(10^0)`}</KInline>, tens <KInline>{`(10^1)`}</KInline>, hundreds{" "}
          <KInline>{`(10^2)`}</KInline>, tenths <KInline>{`(10^{-1})`}</KInline>, hundredths{" "}
          <KInline>{`(10^{-2})`}</KInline>, and so on.
        </MustKnow>

        <p>
          Reading from the decimal point outward: to the left are ones, tens, hundreds, thousands,
          ...; to the right are tenths, hundredths, thousandths, ....
        </p>

        <PlaceValueTable />

        <section aria-labelledby="expanded-form-title" className="space-y-3">
          <h3 id="expanded-form-title" className="text-lg font-semibold text-white">
            Expanded form
          </h3>
          <p>
            Any decimal can be decomposed as a sum of its digits times powers of 10. For example:
          </p>
          <KBlock ariaLabel="14.786 equals 1 times 10 to the 1 plus 4 times 10 to the 0 plus 7 times 10 to the negative 1 plus 8 times 10 to the negative 2 plus 6 times 10 to the negative 3">
            {`14.786
= 1\\cdot 10^1 + 4\\cdot 10^0 + 7\\cdot 10^{-1} + 8\\cdot 10^{-2} + 6\\cdot 10^{-3}`}
          </KBlock>
          <p>
            This viewpoint makes place value crystal clear: the 7 is in the tenths place{" "}
            <KInline>{`(10^{-1})`}</KInline>, the 8 is in the hundredths place{" "}
            <KInline>{`(10^{-2})`}</KInline>, and the 6 is in the thousandths place{" "}
            <KInline>{`(10^{-3})`}</KInline>.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="In the number 14.786, which value does the digit 8 represent?"
          options={["8", "0.8", "0.08", "0.008", "80"]}
          correct="0.08"
          solution={
            <>
              <p>
                The 8 is two places to the right of the decimal point, so it’s in the hundredths
                place. The hundredths place equals <KInline>{`10^{-2} = \\frac{1}{100}`}</KInline>,
                which is <KInline>{`0.01`}</KInline>. Thus the 8 represents{" "}
                <KInline>{`8\\times 0.01 = 0.08`}</KInline>.
              </p>
            </>
          }
        />

        <section aria-labelledby="quick-tips-title" className="space-y-2">
          <h3 id="quick-tips-title" className="text-lg font-semibold text-white">
            Quick tips
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              When adding or subtracting decimals, align the decimal points so like places combine.
            </li>
            <li>
              Appending a zero to the right of a decimal does not change its value (e.g.,{" "}
              <KInline>{`0.5 = 0.50 = 0.500`}</KInline>).
            </li>
            <li>
              Moving the decimal point one place to the right multiplies by{" "}
              <KInline>{`10`}</KInline>; one place to the left divides by{" "}
              <KInline>{`10`}</KInline>.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}