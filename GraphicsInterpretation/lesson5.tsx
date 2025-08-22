import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.6 Units of Measurement | Graphics Interpretation",
  description:
    "Learn how to read units correctly in graphics questions, spot unit changes, and convert units without falling for traps. Includes three multi‑part examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.6 Units of Measurement
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common source of mistakes in graphics questions is overlooking the
          units shown on the axes, labels, or legend. Numbers alone are not
          enough—you must also track whether values are in dollars or cents,
          pounds or kilograms, seconds or minutes, and so on.
        </p>

        <MustKnow>
          Always read the units that the graphic uses and keep them consistent
          throughout your work. Many wrong answers are designed to match an
          unconverted value.
        </MustKnow>

        <MustKnow>
          Be ready to convert. Typical conversions include currency
          sub‑units (for example, 1 dollar = 100 cents), time
          (60 seconds = 1 minute), and distance (1 kilometer = 1000 meters;
          1 kilogram ≈ 2.2 pounds). Convert before you compare or combine
          values.
        </MustKnow>

        <section aria-labelledby="ex5" className="space-y-4">
          <h3 id="ex5" className="text-xl font-semibold text-white">
            Example 5: Prices of apples (unit traps)
          </h3>
          <p>
            A chart shows the price per pound for several apple varieties:
            Ambrosia at $2.60/lb, Gala at $1.60/lb, and Granny Smith at
            $1.80/lb.
          </p>

          <MCQExample
            number={5.1}
            prompt="How many cents more per pound are Ambrosia apples than Gala apples?"
            options={["0.1", "1", "10", "100"]}
            correct="100"
            solution={
              <>
                <p>
                  The difference is $2.60 − $1.60 = $1.00. The prompt asks for
                  cents, not dollars, so convert: $1.00 = 100 cents. The trap
                  here is choosing 1 (dollar) instead of 100 (cents).
                </p>
              </>
            }
          />

          <MCQExample
            number={5.2}
            prompt="Due to a sale, Granny Smith apples sold for half the listed price. What was the new price in cents per pound?"
            options={["0.09", "0.9", "9", "90"]}
            correct="90"
            solution={
              <>
                <p>
                  Half of $1.80 is $0.90. Convert dollars to cents:
                  $0.90 = 90 cents. The options 0.9 and 0.09 are dollar values
                  written as decimals, not cents.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex6" className="space-y-4">
          <h3 id="ex6" className="text-xl font-semibold text-white">
            Example 6: Sprint times and a unit conversion
          </h3>
          <p>
            A table shows the time to run 50 meters at top speed: animal B is
            the fastest (under 2 seconds), animal D is roughly 3 seconds,
            animal A is about 5 seconds, and the others are slower.
          </p>

          <MCQExample
            number={6.1}
            prompt="If all five animals sprint the same distance at top speed, which finishes second?"
            options={["A", "B", "C", "D", "E"]}
            correct="D"
            solution={
              <>
                <p>
                  Finishing order is determined by speed. Shorter time for
                  the 50‑meter trial means higher speed. B has the shortest
                  time (1st). The next shortest is D (~3 s), so D is 2nd.
                </p>
              </>
            }
          />

          <MCQExample
            number={6.2}
            prompt="At top speed, about how many minutes would animal A need to run 5 kilometers? (1 km = 1000 m)"
            options={["8.3", "12.0", "83", "120"]}
            correct="8.3"
            solution={
              <>
                <p>
                  From the chart, A runs 50 m in ~5 s, so speed ≈ 10 m/s.
                  Distance is 5 km = 5000 m. Time = distance ÷ speed
                  ≈ 5000 ÷ 10 = 500 s. Convert seconds to minutes:
                  500 ÷ 60 ≈ 8.3 min.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex7" className="space-y-4">
          <h3 id="ex7" className="text-xl font-semibold text-white">
            Example 7: Converting currency and weight units
          </h3>
          <p>
            A clustered chart compares prices in two countries:
            Pangoon (in pans per pound) and Utropia (in utros per kilogram).
            Use 1 pan = 2.5 utros and 1 kilogram ≈ 2.2 pounds. Apples are about
            6 pans/lb in Pangoon and ~25 utros/kg in Utropia. Beef is about
            8 pans/lb in Pangoon and ~65 utros/kg in Utropia.
          </p>

          <MCQExample
            number={7.1}
            prompt="Express the apple prices using the same units. Approximately how many times is Pangoon’s price per unit weight compared with Utropia’s?"
            options={["33", "6.6", "5.5", "1.3"]}
            correct="1.3"
            solution={
              <>
                <p>
                  Convert Pangoon apples to utros/kg:
                  6 pans/lb × (2.5 utros/pan) × (2.2 lb/kg)
                  = 33 utros/kg (approx).
                  Utropia is ~25 utros/kg. Ratio ≈ 33 ÷ 25 ≈ 1.32 → 1.3.
                </p>
              </>
            }
          />

          <MCQExample
            number={7.2}
            prompt="If it costs k² pans to buy k kilograms of beef in Pangoon, about how many utros are needed to buy k pounds of beef in Utropia?"
            options={["64", "104", "229", "520"]}
            correct="520"
            solution={
              <>
                <p>
                  First, find k from Pangoon’s price. Pangoon beef is
                  8 pans/lb, which is 8 × 2.2 = 17.6 pans/kg. Given
                  k² pans = k kg × 17.6 pans/kg ⇒ k² = 17.6k
                  ⇒ k = 17.6.
                </p>
                <p>
                  Utropia beef is ~65 utros/kg. Convert to utros/lb:
                  65 ÷ 2.2 ≈ 29.5 utros/lb. We need k pounds with k = 17.6:
                  cost ≈ 17.6 × 29.5 = 519.2 utros ≈ 520.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: treat units as part of the number. Before you compare,
          average, or convert, align the units so you’re comparing like with
          like. Doing so eliminates a large class of trap answers.
        </p>
      </article>
    </main>
  );
}