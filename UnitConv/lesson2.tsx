import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn't already include KaTeX styles globally,
// add `import "katex/dist/katex.min.css";` to app/layout.tsx.
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "8.3 Conversions with Two Sets of Units | Unit Conversions",
  description:
    "Learn to convert rates by changing both numerator and denominator units using the factor‑label method. Three practice questions with complete, step‑by‑step solutions using KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Unit Conversions
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.3 Conversions Involving Two Different Units
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes a quantity carries two units at once—most commonly in rates,
          such as distance per time. In those cases, you may need to convert both
          the numerator and the denominator. The safest approach is the
          factor‑label method: multiply by “conversion fractions” that equal 1 so
          that unwanted units cancel out, one dimension at a time.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Treat each conversion as multiplying by 1: for example,{" "}
              <InlineMath math="\dfrac{1\ \text{yard}}{3\ \text{feet}} = 1" /> or{" "}
              <InlineMath math="\dfrac{60\ \text{seconds}}{1\ \text{minute}} = 1" />.
            </li>
            <li>
              Convert the numerator and denominator separately so that units
              cancel cleanly.
            </li>
            <li>
              Keep track of placement: units you want in the denominator must end
              up in the denominator of your final expression, and vice versa.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={31}
          prompt="A car travels at 24 feet per second. Which of the following is the car’s speed in yards per minute? (1 yard = 3 feet, 1 minute = 60 seconds)"
          options={["240", "400", "480", "500", "520"]}
          correct="480"
          solution={
            <>
              <p>Convert feet to yards and seconds to minutes using unit fractions:</p>
              <BlockMath math={`24\\ \\dfrac{\\text{ft}}{\\text{s}}\\times\\dfrac{1\\ \\text{yd}}{3\\ \\text{ft}}\\times\\dfrac{60\\ \\text{s}}{1\\ \\text{min}}=480\\ \\dfrac{\\text{yd}}{\\text{min}}`} />
              <p>The feet and seconds cancel, leaving yards per minute. Answer: 480.</p>
            </>
          }
        />

        <MCQExample
          number={32}
          prompt="A candy sells for 10 dollars per 200 grams. How many ounces can be bought for 1 cent? (1 gram = 0.035 ounces)"
          options={[
            "7 ounces",
            "0.7 ounces",
            "0.07 ounces",
            "0.007 ounces",
            "0.0007 ounces",
          ]}
          correct="0.007 ounces"
          solution={
            <>
              <p>First convert the 200 grams to ounces:</p>
              <BlockMath math={`200\\ \\text{g}\\times 0.035\\ \\dfrac{\\text{oz}}{\\text{g}}=7\\ \\text{oz}`} />
              <p>Next, convert 10 dollars to cents:</p>
              <BlockMath math={`10\\ \\$\\times 100\\ \\dfrac{\\text{cents}}{\\$}=1000\\ \\text{cents}`} />
              <p>So the rate is 7 ounces per 1000 cents. For 1 cent:</p>
              <BlockMath math={`1\\ \\text{cent}\\times\\dfrac{7\\ \\text{oz}}{1000\\ \\text{cents}}=0.007\\ \\text{oz}`} />
              <p>Therefore, 1 cent buys 0.007 ounces. Answer: 0.007 ounces.</p>
            </>
          }
        />

        <MCQExample
          number={33}
          prompt="Suppose 200 gallons of paint is approximately 76,000 cm^3. About how many cubic meters is 1 pint of this paint? (1 m^3 = 1,000,000 cm^3 and 1 gallon = 8 pints)"
          options={[
            "5 × 10^-6",
            "5 × 10^-5",
            "5 × 10^-4",
            "5 × 10^-3",
            "5 × 10^-2",
          ]}
          correct="5 × 10^-5"
          solution={
            <>
              <p>First, express the given volume per pint using the relationships provided:</p>
              <BlockMath math={`200\\ \\text{gal}=200\\times 8=1600\\ \\text{pints}`} />
              <BlockMath math={`\\dfrac{76{,}000\\ \\text{cm}^3}{1600\\ \\text{pints}}=47.5\\ \\dfrac{\\text{cm}^3}{\\text{pint}}`} />
              <p>Now convert cubic centimeters to cubic meters:</p>
              <BlockMath math={`47.5\\ \\text{cm}^3\\times\\dfrac{1\\ \\text{m}^3}{1{,}000{,}000\\ \\text{cm}^3}=4.75\\times 10^{-5}\\ \\text{m}^3`} />
              <p>Rounded to the nearest option, that’s about 5 × 10^-5. Answer: 5 × 10^-5.</p>
            </>
          }
        />

        <p>
          Bottom line: when a quantity has two units, convert each dimension with
          a unit fraction equal to 1. As long as the unwanted units cancel and the
          desired units remain, the arithmetic will take care of itself.
        </p>
      </article>
    </main>
  );
}