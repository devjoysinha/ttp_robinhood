import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "2.5 Rounding Numbers | Essential GMAT Quant Skills",
  description:
    "Master rounding on the GMAT: place value review, rounding rules for integers and decimals, the carry‑over case with 9, and targeted practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.5 Rounding Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          GMAT problems often ask you to round numbers. Two big cases show up:
          rounding whole numbers (positions to the left of the decimal) and
          rounding decimals (positions to the right). Before the rules, let’s
          quickly anchor place value.
        </p>

        <section aria-labelledby="place-value-heading">
          <h3 id="place-value-heading" className="text-xl font-semibold text-white">
            Place Value Refresher
          </h3>
          <p>
            To the left of the decimal we have ones, tens, hundreds, thousands,
            and so on. To the right, we have tenths, hundredths, thousandths, etc.
            Every number can be written with a decimal point, even if it’s not shown
            (for example, 9,467 is 9,467.).
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Common place values on both sides of the decimal
              </caption>
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-3 py-2">Thousands</th>
                  <th className="px-3 py-2">Hundreds</th>
                  <th className="px-3 py-2">Tens</th>
                  <th className="px-3 py-2">Ones</th>
                  <th className="px-3 py-2">Decimal Point</th>
                  <th className="px-3 py-2">Tenths</th>
                  <th className="px-3 py-2">Hundredths</th>
                  <th className="px-3 py-2">Thousandths</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="px-3 py-2">1,000</td>
                  <td className="px-3 py-2">100</td>
                  <td className="px-3 py-2">10</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2 text-center">.</td>
                  <td className="px-3 py-2">0.1</td>
                  <td className="px-3 py-2">0.01</td>
                  <td className="px-3 py-2">0.001</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3">
            Example: In 9,467, the digits are 9 (thousands), 4 (hundreds),
            6 (tens), 7 (ones). In 0.125, they are 0 (ones), 1 (tenths),
            2 (hundredths), 5 (thousandths).
          </p>
        </section>

        <section aria-labelledby="round-integers-heading" className="space-y-4">
          <h3 id="round-integers-heading" className="text-xl font-semibold text-white">
            Rounding Positive Integers (left of the decimal)
          </h3>

          <p>
            You frequently round a whole number to a particular place value,
            such as nearest ten, hundred, or thousand. The decision hinges on
            the digit immediately to the right of the place you’re rounding to.
          </p>

          <MustKnow>
            <p className="mb-2">
              To round a positive integer to a place value on the left side of the
              decimal:
            </p>
            <ul className="list-disc pl-5">
              <li>
                If the next digit to the right is 0–4, keep the rounding place the
                same and replace all digits to its right with 0 (round down).
              </li>
              <li>
                If the next digit to the right is 5–9, add 1 to the rounding place
                and replace all digits to its right with 0 (round up).
              </li>
            </ul>
          </MustKnow>
        </section>

        <MCQExample
          number={46}
          prompt={
            <>
              Let p be the ones digit after rounding 9,746 to the nearest hundred,
              and let q be the ones digit after rounding 9,746 to the nearest thousand.
              What is{" "}
              <InlineMath math={"p - q"} />
              ?
            </>
          }
          options={["-2", "-1", "0", "1", "2"]}
          correct="0"
          solution={
            <>
              <p>
                Nearest hundred: look at the tens digit in 9,746. The hundreds digit
                is 7 and the tens digit is 4, so we round down to 9,700. The ones digit is p = 0.
              </p>
              <p>
                Nearest thousand: look at the hundreds digit (7). Since it’s 5 or more,
                9,746 rounds up to 10,000. The ones digit is q = 0. Therefore{" "}
                <InlineMath math={"p - q = 0"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={47}
          prompt="A new artist sold her first painting for $974. A veteran averages $4,545 per painting. How many dollars less did the new artist earn, rounded to the nearest hundred?"
          options={["3,400", "3,500", "3,600", "4,000", "5,000"]}
          correct="3,600"
          solution={
            <>
              <p>
                Compute first, then round:{" "}
                <InlineMath math={"4545 - 974 = 3571"} />. Round 3,571 to the nearest
                hundred: look at the tens digit (7) → round up to 3,600.
              </p>
              <p>
                If you had rounded first and then subtracted (4,500 − 1,000 = 3,500),
                you’d miss that the exact difference rounds to 3,600.
              </p>
            </>
          }
        />

        <section aria-labelledby="round-decimals-heading" className="space-y-4">
          <h3 id="round-decimals-heading" className="text-xl font-semibold text-white">
            Rounding Decimals (right of the decimal)
          </h3>

          <p>
            Rounding decimals is symmetric to rounding integers—just on the right
            side of the decimal point. Focus on the digit immediately to the right
            of the place you’re rounding to.
          </p>

          <MustKnow>
            <p className="mb-2">
              To round a decimal to a place value on the right side of the decimal:
            </p>
            <ul className="list-disc pl-5">
              <li>
                If the next digit to the right is 0–4, keep the rounding place and
                drop all digits to its right (round down).
              </li>
              <li>
                If the next digit to the right is 5–9, add 1 to the rounding place
                and drop all digits to its right (round up).
              </li>
            </ul>
          </MustKnow>
        </section>

        <MCQExample
          number={48}
          prompt={
            <>
              Let x be 9.746 rounded to the nearest tenth and y be 9.746 rounded to
              the nearest hundredth. Which statement is true?
            </>
          }
          options={[
            "x − y > 1",
            "x − y = 0",
            "x · y < 1",
            "x / y < 1",
            "x / y > 1",
          ]}
          correct="x / y < 1"
          solution={
            <>
              <p>
                Nearest tenth: 9.746 → 9.7 (look at the hundredths digit 4 → round down).
              </p>
              <p>
                Nearest hundredth: 9.746 → 9.75 (look at the thousandths digit 6 → round up).
              </p>
              <p>
                So x = 9.7 and y = 9.75. Clearly x &lt; y, hence{" "}
                <InlineMath math={"\\dfrac{x}{y} < 1"} />. The other choices do not hold.
              </p>
            </>
          }
        />

        <section aria-labelledby="round-nine-heading" className="space-y-4">
          <h3 id="round-nine-heading" className="text-xl font-semibold text-white">
            Special Carry Case: Rounding Up a 9
          </h3>

          <p>
            Sometimes the digit in the rounding place is 9, and the next digit to the
            right forces you to round up. Adding 1 to 9 yields 10, which “carries”
            to the left. That means the 9 becomes 0 and you increase the digit to its left by 1.
          </p>

          <MustKnow>
            When the rounding place contains a 9 and you must round up, set that 9 to 0
            and add 1 to the next digit to the left. Then zero out (or drop, for decimals)
            all digits to the right of the rounding place.
          </MustKnow>
        </section>

        <MCQExample
          number={49}
          prompt={
            <>
              The three‑digit number <InlineMath math={"2XY"} /> rounds to 300 when rounded
              to the nearest ten. If <InlineMath math={"X + Y = 14"} />, what is Y?
            </>
          }
          options={["3", "4", "5", "6", "7"]}
          correct="5"
          solution={
            <>
              <p>
                For 2XY to round to 300 to the nearest ten, the tens digit must be 9
                (so rounding carries into the hundreds place). Thus X = 9. With
                <InlineMath math={"X + Y = 14"} />, we get Y = 14 − 9 = 5.
              </p>
            </>
          }
        />

        <MCQExample
          number={51}
          prompt={
            <>
              Let <InlineMath math={"A = 7.xy9"} />, where x is the tenths digit and y
              is the hundredths digit.
              If A rounded to the nearest tenth is 7.7 and A rounded to the nearest hundredth is 7.x3,
              what is x + y?
            </>
          }
          options={["7", "8", "9", "10", "11"]}
          correct="9"
          solution={
            <>
              <p>
                Rounding A to the nearest hundredth increases the hundredths place
                because the thousandths digit is 9. Since the result is 7.x3, the
                hundredths digit became 3 after adding 1, so the original y = 2.
              </p>
              <p>
                Now A = 7.x29. To round A to the nearest tenth and get 7.7, the
                hundredths digit (2) must be less than 5, so the tenths digit stays
                x = 7. Therefore x + y = 7 + 2 = 9.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="pt-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Key Takeaways
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Rounding is all about the next digit to the right of your target place.
            </li>
            <li>
              For integers, replace all trailing digits with zeros; for decimals, drop the trailing digits.
            </li>
            <li>
              Watch the carry when the rounding place holds a 9.
            </li>
            <li>
              When possible, complete calculations first and round at the end to avoid compounding error.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}