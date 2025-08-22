import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "14.5.4 Weight the Formula Correctly | Statistics",
  description:
    "Understand how to weight averages the right way. See why average speed is time‑weighted and fuel efficiency is gallon‑weighted. Includes a quick GMAT‑style multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.5.4 Weight the Formula Correctly
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Average speed is not the straight average of speeds. It is total
          distance divided by total time, so the “weights” come from time spent
          at each speed.
        </p>

        <MustKnow>
          When averaging rates, always weight by the quantity in the denominator
          of the rate.
          <br />
          • For speed in mph, weight by time.
          <br />
          • For fuel efficiency in miles per gallon, weight by gallons.
        </MustKnow>

        <section aria-labelledby="avg-speed">
          <h3 id="avg-speed" className="sr-only">
            Time-weighted average speed example
          </h3>
          <p>
            Suppose a car goes 50 mph for 2 hours and then 60 mph for 3 hours.
            The average speed is:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math="\text{Average speed}=\dfrac{\text{Total distance}}{\text{Total time}}=\dfrac{(50\ \text{mph})(2\ \text{h})+(60\ \text{mph})(3\ \text{h})}{2\ \text{h}+3\ \text{h}}=\dfrac{280\ \text{mi}}{5\ \text{h}}=56\ \text{mph}" />
          </div>
          <p>
            Notice the average is closer to 60 mph because more time was spent
            at the higher speed. If the car instead traveled 60 mph for 100
            hours and 50 mph for just 2 hours, the time‑weighted average moves
            even nearer to 60:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math="\text{Average speed}=\dfrac{(50)(2)+(60)(100)}{2+100}=\dfrac{6100}{102}\approx 59.8\ \text{mph}" />
          </div>
        </section>

        <section aria-labelledby="avg-mpg">
          <h3 id="avg-mpg" className="sr-only">
            Gallon-weighted fuel efficiency
          </h3>
          <p>
            For fuel efficiency in miles per gallon, gallons play the role that
            time played above. The overall miles‑per‑gallon is:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math="\text{Average mpg}=\dfrac{\text{Total miles}}{\text{Total gallons}}" />
          </div>
        </section>

        <MCQExample
          number={32}
          prompt="A plane travels 200 miles on 50 gallons at 10,000 ft and 300 miles on 50 gallons at 20,000 ft. If it flies 1,000 miles at 10,000 ft and 3,000 miles at 20,000 ft, which is closest to its average miles per gallon for the trip?"
          options={["3", "4", "5", "6", "7"]}
          correct="5"
          solution={
            <>
              <p>
                First, find the efficiency at each altitude:
                <br />• At 10,000 ft: 200 miles / 50 gal = 4 mpg
                <br />• At 20,000 ft: 300 miles / 50 gal = 6 mpg
              </p>
              <p>Compute total gallons (weight by gallons, not by miles):</p>
              <div className="rounded-md bg-gray-900/50 p-4">
                <BlockMath math="\text{Gallons at }10{,}000\text{ ft}=\dfrac{1{,}000}{4}=250" />
                <BlockMath math="\text{Gallons at }20{,}000\text{ ft}=\dfrac{3{,}000}{6}=500" />
                <BlockMath math="\text{Total gallons}=250+500=750" />
              </div>
              <p>Now average mpg using total miles over total gallons:</p>
              <div className="rounded-md bg-gray-900/50 p-4">
                <BlockMath math="\text{Average mpg}=\dfrac{4{,}000}{750}=\dfrac{16}{3}\approx 5.33" />
              </div>
              <p>
                The closest option is 5. The common mistake is to average the
                two mpg values by distance weights directly, which is incorrect
                because mpg is gallon‑weighted.
              </p>
            </>
          }
        />

        <MustKnow>
          Quick check: If you’re averaging a rate a/b, accumulate totals of “a”
          and “b” separately, then compute total a ÷ total b. Do not average the
          individual rates unless the weights are equal in the denominator.
          Example:
          <InlineMath math="\ \ \text{Average speed}=\dfrac{\sum \text{distance}}{\sum \text{time}},\quad \text{Average mpg}=\dfrac{\sum \text{miles}}{\sum \text{gallons}}" />
        </MustKnow>

        <p>
          Bottom line: get the weighting right by focusing on what sits in the
          denominator of the rate. That’s what controls the average.
        </p>
      </article>
    </main>
  );
}