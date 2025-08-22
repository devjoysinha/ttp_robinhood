import type { Metadata } from "next";
import Head from "next/head";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "8.4 Two‑Step Unit Conversions | Arithmetic",
  description:
    "Learn how to convert measurements when no direct conversion is provided by chaining known conversion factors. Includes a worked inch‑to‑yard example and three practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX styles */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-bR3xqYgD6C2HjvJ3h7F9oD7A0Q2u8J3YcGxYBq8u2cQb1m5pN8jQvT6o4o3+9w9Q"
          crossOrigin="anonymous"
        />
      </Head>

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Unit Conversions
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4 Converting in Two Steps (or More)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On many test questions, you won’t be handed a single conversion that
          jumps straight from the starting unit to the target unit. That’s OK:
          you can chain together conversions you do know, canceling units as you
          go, until you land on the desired unit.
        </p>

        <MustKnow>
          If a direct conversion is missing, link multiple known conversions in
          a row. Write the quantity as a product of fractions so that unwanted
          units cancel top and bottom, leaving only the target unit.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-lg font-semibold text-white">
            Worked example: 4 inches to yards
          </h3>
          <p>
            Suppose you’re given 12 inches = 1 foot and 3 feet = 1 yard. Convert
            4 inches to yards by stepping through feet first:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math={`4\\,\\text{in}\\times\\frac{1\\,\\text{ft}}{12\\,\\text{in}}=\\frac{4}{12}\\,\\text{ft}=\\tfrac{1}{3}\\,\\text{ft}`} />
            <BlockMath math={`\\tfrac{1}{3}\\,\\text{ft}\\times\\frac{1\\,\\text{yd}}{3\\,\\text{ft}}=\\tfrac{1}{9}\\,\\text{yd}`} />
          </div>
          <p>
            Therefore, 4 inches equals <InlineMath math="\\tfrac{1}{9}" /> yard.
          </p>
        </section>

        <section aria-labelledby="practice" className="space-y-6">
          <h3 id="practice" className="text-lg font-semibold text-white">
            Quick practice
          </h3>

          <MCQExample
            number={6}
            prompt="If 1 dekaliter = 10 liters and 1 deciliter = 1/10 liter, how many dekaliters are in 500 deciliters?"
            options={["0.5", "5", "50", "500", "5,000"]}
            correct="5"
            solution={
              <>
                <p className="mb-2">
                  First convert deciliters to liters using{" "}
                  <InlineMath math={"1\\,\\text{dL}=\\tfrac{1}{10}\\,\\text{L}"} />:
                </p>
                <BlockMath math={`500\\,\\text{dL}\\times\\frac{1\\,\\text{L}}{10\\,\\text{dL}}=50\\,\\text{L}`} />
                <p className="mt-4 mb-2">
                  Now convert liters to dekaliters using{" "}
                  <InlineMath math={"1\\,\\text{daL}=10\\,\\text{L}"} />:
                </p>
                <BlockMath math={`50\\,\\text{L}\\times\\frac{1\\,\\text{daL}}{10\\,\\text{L}}=5\\,\\text{daL}`} />
                <p className="mt-2">Answer: 5.</p>
              </>
            }
          />

          <MCQExample
            number={7}
            prompt="If 3 myos = 2 dallors, and 5 dallors = 4 punds, how many myos are equal to 10 punds?"
            options={["5 1/3", "8 1/3", "12", "15 1/4", "18 3/4"]}
            correct="18 3/4"
            solution={
              <>
                <p className="mb-2">Convert punds → dallors → myos, canceling units:</p>
                <BlockMath math={`10\\,\\text{punds}\\times\\frac{5\\,\\text{dallors}}{4\\,\\text{punds}}=\\tfrac{25}{2}\\,\\text{dallors}`} />
                <BlockMath math={`\\tfrac{25}{2}\\,\\text{dallors}\\times\\frac{3\\,\\text{myos}}{2\\,\\text{dallors}}=\\tfrac{75}{4}\\,\\text{myos}=18\\tfrac{3}{4}\\,\\text{myos}`} />
                <p className="mt-2">So 10 punds equals 18 3/4 myos.</p>
              </>
            }
          />

          <MCQExample
            number={8}
            prompt='A baker has 15 bags of flour. Each bag weighs 8.8 pounds and costs $6. She needs 150 kilograms of flour in total. How much more money must she spend to reach 150 kg? (1 kilogram = 2.2 pounds)'
            options={["$12.25", "$22.50", "$73.50", "$138.00", "$228.00"]}
            correct="$138.00"
            solution={
              <>
                <p className="mb-2">Convert one bag to kilograms:</p>
                <BlockMath math={`8.8\\,\\text{lb}\\times\\frac{1\\,\\text{kg}}{2.2\\,\\text{lb}}=4\\,\\text{kg}`} />
                <p>
                  Total on hand:{" "}
                  <InlineMath math={"15\\,\\text{bags}\\times 4\\,\\text{kg}=60\\,\\text{kg}"} />.
                  Needed: <InlineMath math={"150-60=90\\,\\text{kg}"} />.
                </p>
                <p className="mt-2 mb-2">Bags required for the shortfall:</p>
                <BlockMath math={`\\frac{90\\,\\text{kg}}{4\\,\\text{kg/bag}}=22.5\\,\\text{bags}\\;\\Rightarrow\\;23\\,\\text{bags (must buy whole bags)}`} />
                <p className="mt-2">Cost: 23 × $6 = $138.</p>
                <p className="mt-2">Answer: $138.00.</p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Bottom line: write conversions as fractions, arrange them so unwanted
          units cancel, and multiply straight through. If you don’t have a
          one‑step conversion, a short chain will get you there.
        </p>
      </article>
    </main>
  );
}