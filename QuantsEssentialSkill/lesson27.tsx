import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.8.3 Converting a Fraction to a Decimal | Essential GMAT Quant Skills",
  description:
    "Convert fractions to decimals using long division, understand when decimals terminate or repeat, and learn how much precision you actually need for rounding questions. Includes a quick practice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.8.3 Converting a Fraction to a Decimal
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To turn a fraction into a decimal, perform long division: place the numerator
          inside the division bracket and the denominator outside. In other words,
          compute the value of the quotient directly.
        </p>

        <MustKnow>
          For a fraction <InlineMath math="\\tfrac{a}{b}" />:
          - Divide a by b using long division.
          - If the division ends, you get a terminating decimal.
          - If the division never ends (the remainder cycles), you get a repeating decimal.
        </MustKnow>

        <p>
          Example: Convert <InlineMath math="\\tfrac{5}{8}" /> to a decimal. Divide 5 by 8.
          You may need to append a decimal point and zeros to the 5 to continue the division.
          The result is <InlineMath math="0.625" />, because after bringing down three zeros,
          the remainder becomes 0.
        </p>

        <MustKnow>
          How many zeros should you add after the decimal? As many as needed for the task:
          - If you need the exact decimal and the remainder becomes 0, you can stop.
          - If the remainder never becomes 0, the decimal repeats. For rounding or estimation,
            compute only as many places as you need and then round.
        </MustKnow>

        <p>
          For instance, the fraction <InlineMath math="\\tfrac{22}{7}" /> produces a repeating
          decimal. If a problem asks for the value rounded to the nearest tenth, you only need
          to know the hundredths place to decide whether to round up or down.
        </p>

        <MCQExample
          number={55}
          prompt={
            <>
              What is the value of <InlineMath math="\\tfrac{22}{7}" /> when rounded to the nearest tenth?
            </>
          }
          options={["3.0", "3.1", "3.2", "3.3", "3.4"]}
          correct="3.1"
          solution={
            <>
              <p>
                Compute the decimal for <InlineMath math="\\tfrac{22}{7}" /> using long division
                only to the precision you need. The decimal begins as 3.14…, and because the
                hundredths digit is 4, 3.14 rounds down to 3.1 at the tenths place. So,
                to the nearest tenth, <InlineMath math="\\tfrac{22}{7} \\approx 3.1" />.
              </p>
              <p>
                Note: The division does not terminate, so there is no need to continue beyond the
                hundredths place for a tenths‑place rounding question.
              </p>
            </>
          }
        />

        <p>
          Bottom line: long division is the universal method to convert fractions to decimals.
          Decide up front how much precision you need, compute to that place, and round appropriately.
        </p>
      </article>
    </main>
  );
}