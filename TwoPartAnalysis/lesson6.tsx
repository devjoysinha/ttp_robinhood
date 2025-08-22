import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.4 Two‑Part Analysis: Rates with Unit Conversions",
  description:
    "How to handle unit changes in Two‑Part Analysis rate problems. Learn a step‑by‑step conversion workflow and practice with two solved examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Two‑Part Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.4 Rates with Unit Conversions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Two‑Part Analysis problems that feature rates also require you to
          translate units. Because there are two answers to select, you’ll often
          convert more than once before you can lock in both choices.
        </p>

        <MustKnow>
          Treat every rate as a fraction, then change one unit at a time using
          conversion factors that equal 1 (for example, 4 quarts per 1 gallon).
          Cancel units as you go until the numerator and denominator match the
          requested units.
        </MustKnow>

        <p>
          The same unit‑conversion playbook you use elsewhere in quant applies
          here. Convert systematically and keep the units visible so you can see
          what cancels.
        </p>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Warm‑up conversion
          </h3>
          <p>
            Convert 6 gallons per hour to quarts per minute. Assume 4 quarts =
            1 gallon.
          </p>

          <div className="rounded-md bg-gray-900/40 p-4">
            <p className="mb-2">Convert each unit separately:</p>
            <BlockMath math={`6\\,\\text{gallons}\\times\\frac{4\\,\\text{quarts}}{1\\,\\text{gallon}}=24\\,\\text{quarts}`} />
            <BlockMath math={`1\\,\\text{hour}\\times\\frac{60\\,\\text{minutes}}{1\\,\\text{hour}}=60\\,\\text{minutes}`} />
            <p className="mt-2">Combine the results to restate the rate:</p>
            <BlockMath math={`6\\,\\frac{\\text{gallons}}{\\text{hour}}=\\frac{24\\,\\text{quarts}}{60\\,\\text{minutes}}=\\frac{2}{5}\\,\\frac{\\text{quart}}{\\text{minute}}`} />
          </div>

          <MCQExample
            number={1}
            prompt="Which of the following equals 6 gallons per hour expressed in quarts per minute?"
            options={[
              "1/3",
              "2/3",
              "2/5",
              "5/2",
              "4/15",
            ]}
            correct="2/5"
            solution={
              <>
                <p>
                  Multiply the numerator by <InlineMath math="4" /> to convert
                  gallons to quarts and the denominator by{" "}
                  <InlineMath math="60" /> to convert hours to minutes:
                </p>
                <BlockMath math={`6\\,\\frac{\\text{gal}}{\\text{hr}}=\\frac{24\\,\\text{qt}}{60\\,\\text{min}}=\\frac{2}{5}\\,\\frac{\\text{qt}}{\\text{min}}`} />
                <p>The correct choice is 2/5.</p>
              </>
            }
          />
        </section>

        <MustKnow>
          If a rate contains two different unit types (for example, currency per
          volume or mass per length), it’s perfectly fine to convert the top and
          bottom in separate steps and then reassemble the rate at the end.
        </MustKnow>

        <ExampleCard
          number={2}
          title="Two‑Part: Fuel price in USD/gal and EUR/L"
          statements={[
            "Abraham pays $50 for 13 gallons of fuel.",
            "Given 1 gallon = 3.7854 liters and 1 EUR = 1.1043 USD, choose the values closest to the unit price in USD per gallon and in EUR per liter.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p className="font-semibold">Step 1: USD per gallon</p>
              <BlockMath math={`\\text{Unit price} = \\frac{50\\,\\text{USD}}{13\\,\\text{gal}}\\approx 3.8462\\,\\frac{\\text{USD}}{\\text{gal}}`} />

              <p className="mt-4 font-semibold">Step 2: Convert USD → EUR</p>
              <p>
                Since 1 EUR = 1.1043 USD, divide by 1.1043 to convert dollars to
                euros:
              </p>
              <BlockMath math={`3.8462\\,\\text{USD}\\times\\frac{1\\,\\text{EUR}}{1.1043\\,\\text{USD}}\\approx 3.4829\\,\\text{EUR (per gallon)}`}/>

              <p className="mt-4 font-semibold">
                Step 3: Convert per gallon → per liter
              </p>
              <p>Use 1 gallon = 3.7854 liters:</p>
              <BlockMath math={`\\frac{3.4829\\,\\text{EUR}}{3.7854\\,\\text{L}}\\approx 0.9201\\,\\frac{\\text{EUR}}{\\text{L}}`} />

              <div className="mt-4">
                <p className="mb-1">
                  Closest selections:
                </p>
                <ul className="list-inside list-disc">
                  <li>USD/gallon ≈ 3.85</li>
                  <li>EUR/liter ≈ 0.90</li>
                </ul>
              </div>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Two‑Part: Cable mass per length"
          statements={[
            "A cable has a linear density of 14 grams per centimeter.",
            "Given 1 gram = 1000 milligrams, 1 kilogram = 1000 grams, 1 centimeter = 10 millimeters, and 1 meter = 100 centimeters, select the equivalent rates in mg/mm and in kg/m.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p className="font-semibold">mg per mm</p>
              <p>Convert grams → milligrams and centimeters → millimeters:</p>
              <BlockMath math={`14\\,\\frac{\\text{g}}{\\text{cm}}=\\frac{14\\times 1000\\,\\text{mg}}{10\\,\\text{mm}}=1400\\,\\frac{\\text{mg}}{\\text{mm}}`} />

              <p className="mt-4 font-semibold">kg per m</p>
              <p>Convert grams → kilograms and centimeters → meters:</p>
              <BlockMath math={`14\\,\\frac{\\text{g}}{\\text{cm}}=\\frac{0.014\\,\\text{kg}}{0.01\\,\\text{m}}=1.4\\,\\frac{\\text{kg}}{\\text{m}}`} />

              <div className="mt-4">
                <p className="mb-1">Selections:</p>
                <ul className="list-inside list-disc">
                  <li>mg/mm = 1,400</li>
                  <li>kg/m = 1.4</li>
                </ul>
              </div>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: show the units at every step, convert one piece at a
          time, and only then simplify the numbers. If the units are right, the
          arithmetic usually follows. 
        </p>
      </article>
    </main>
  );
}