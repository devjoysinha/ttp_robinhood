import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight client-only wrappers for KaTeX
const InlineTeX = dynamic(
  async () => {
    const { InlineMath } = await import("react-katex");
    await import("katex/dist/katex.min.css");
    return ({ math }: { math: string }) => <InlineMath math={math} />;
  },
  { ssr: false }
);

const BlockTeX = dynamic(
  async () => {
    const { BlockMath } = await import("react-katex");
    await import("katex/dist/katex.min.css");
    return ({ math }: { math: string }) => <BlockMath math={math} />;
  },
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "7.5.4 Answers Backed by Math in Small Parts of a Passage | Critical Reasoning",
  description:
    "Learn to spot inference answers that rely on just a subset of the numerical facts in a passage. Includes two quick illustrations and three multiple‑choice drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5.4 Answers Supported by Mathematical Information in Small Portions
          of Passages
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some inference problems, the correct choice doesn’t synthesize every
          fact in the stimulus. Instead, it follows with certainty from a
          small, well-chosen slice of the numerical information. Your job is to
          locate that slice and verify the claim logically.
        </p>

        <MustKnow>
          Don’t insist that the right answer must use all of the given data. Any
          option that can be proven from some subset of the passage—especially a
          clean numerical relationship—is fair game. If it must be true from
          that subset, it’s correct. If it could shift with missing context,
          it’s not.
        </MustKnow>

        <section aria-labelledby="ex-greenvale" className="space-y-3">
          <h3 id="ex-greenvale" className="text-xl font-semibold text-white">
            Tiny slice proof: children per home
          </h3>
          <p className="italic text-gray-300">
            Over the last eight years in Greenvale, no additional homes were
            built, home prices stayed flat, and the number of children living in
            town rose substantially. Schools are funded entirely by property
            taxes based on home values.
          </p>
          <p className="italic">
            Proper inference: On average, there are more children per home now
            than eight years ago.
          </p>
          <p>
            That conclusion uses only two facts: the housing stock is unchanged,
            and the count of children increased. With the denominator
            (homes) fixed and the numerator (children) larger, the average must
            go up. The other details about prices and funding are irrelevant to
            this specific inference.
          </p>
        </section>

        <section aria-labelledby="ex-commute" className="space-y-3">
          <h3 id="ex-commute" className="text-xl font-semibold text-white">
            Ratio beats overreach: commuters by mode
          </h3>
          <p className="italic text-gray-300">
            In Meklerton, car commuters fell by 10% over two years, while bike
            commuters rose by 30%. During rush hour, bicycles travel 150% faster
            than cars.
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-300">
              Tempting but unsupported: “Average commute time decreased.” We
              lack distances, routes, and mode shares—speed alone doesn’t fix
              average time.
            </li>
            <li className="text-gray-300">
              Guaranteed: “The ratio of bike commuters to car commuters
              increased.”
            </li>
          </ul>
          <p>A quick numeric check clarifies the ratio claim:</p>
          <div className="rounded-md bg-slate-800/60 p-4">
            <p className="mb-2">
              Suppose initially there are 100 bike commuters and 100 car
              commuters.
            </p>
            <BlockTeX math={`\\text{Before: }\\; \\dfrac{100}{100} = 1`} />
            <p className="mt-3">
              After the change: cars −10% → 90; bikes +30% → 130.
            </p>
            <BlockTeX math={`\\text{After: }\\; \\dfrac{130}{90} \\approx 1.44 > 1`} />
          </div>
          <p>Only the mode counts matter for that ratio; speeds are a red herring.</p>
        </section>

        <MustKnow>
          When numbers are present, look for rock-solid relationships:
          proportions, fixed totals, or direct arithmetic consequences.
          If a choice depends on missing context—like unprovided distances or
          weights—treat it with suspicion.
        </MustKnow>

        <MCQExample
          number={13}
          prompt="Last month in Mennerton, the average interest rate on commercial loans was lower than in any other month over the past 20 years. Within last month, the average rate for commercial real‑estate loans was 4.5%, and for equipment‑purchase loans it was 9%. Which inference must be true?"
          options={[
            "If only equipment loans had been issued last month, that month could not have set a 20‑year low for the average commercial rate.",
            "The 4.5% average for real‑estate loans is the lowest commercial loan rate seen in 20 years.",
            "The month preceding last month had an average commercial rate above 5%.",
            "If no commercial loans had been made last month, the average commercial loan rate over the most recent nine months would have been higher than it actually was.",
            "In each of the 12 months before last month, the average rate on equipment loans exceeded 9%.",
          ]}
          correct="If no commercial loans had been made last month, the average commercial loan rate over the most recent nine months would have been higher than it actually was."
          solution={
            <>
              <p>
                The first sentence alone guarantees that last month’s average
                was the minimum for any month in 20 years. Removing the lowest
                datapoint from a multi‑month average can only increase that
                multi‑month average. Therefore, if last month had no loans, the
                nine‑month average would be higher. The other options either
                speculate about historical category rates (not given), assume
                thresholds for the prior month, or rely on a what‑if about only
                equipment loans—all of which we cannot prove.
              </p>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="In Vesornia over the last 10 years, government debt rose by 39%. Over the same period, the population stayed constant, and GDP grew by 32%. A prominent economist asserts that if the debt rises another 40%, the country would immediately go bankrupt. What can be concluded?"
          options={[
            "If the economist is right, Vesornia will go bankrupt in a bit more than 10 years.",
            "To avoid bankruptcy, Vesornia must raise its GDP growth rate.",
            "If GDP growth accelerates by 25%, the country will avoid bankruptcy.",
            "Debt has grown faster over the last 10 years than it did in the 10 years before that.",
            "Debt per person is higher now than it was 10 years ago.",
          ]}
          correct="Debt per person is higher now than it was 10 years ago."
          solution={
            <>
              <p>
                Only two facts are needed: total debt is up 39% and population
                is unchanged. With the numerator larger and the denominator
                fixed, per‑capita debt must increase. The other answers either
                predict timing, prescribe policy, or compare to an earlier
                decade—none of which is supported by the given information.
              </p>
            </>
          }
        />

        <MCQExample
          number={15}
          prompt="In Derask, the number of gasoline‑powered cars on the road doubled from 1977 to 2017. Over that time, the average fuel used per mile per car fell by 50%, yet total gasoline consumed by cars in 2017 was 10% higher than in 1977. Which conclusion must be true?"
          options={[
            "In 2017, the average miles traveled per liter of fuel was twice the 1977 value.",
            "The average annual cost to operate a car in 1977 was nearly double that in 2017.",
            "Most cars traveled more miles in 2017 than the average car did in 1977.",
            "No 2017 car burned more fuel per mile than any 1977 car did.",
            "Total miles driven in 2017 exceeded total miles in 1977 by exactly 10%.",
          ]}
          correct="In 2017, the average miles traveled per liter of fuel was twice the 1977 value."
          solution={
            <>
              <p className="mb-2">
                If the average fuel per mile drops by 50%, then its reciprocal,
                miles per unit of fuel, doubles. Symbolically, if in 1977 a car
                used <InlineTeX math={'f\\;\\text{liters/mile}'} /> and in 2017 it used{" "}
                <InlineTeX math={'\\tfrac{f}{2}'} />, then:
              </p>
              <BlockTeX math={`\\text{Miles per liter:}\\quad \\dfrac{1}{f} \\;\\to\\; \\dfrac{1}{f/2} = 2\\cdot\\dfrac{1}{f}`} />
              <p className="mt-2">
                That statement is forced by the 50% reduction alone. The other
                choices overreach: we’re given nothing about operating costs,
                distribution of miles across cars, extremes of individual
                efficiency, or an exact percent change in total miles. In fact,
                because cars used less fuel per mile yet total fuel rose 10%,
                total miles must have increased by more than 10%, not exactly
                10%.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Inference answers that lean on numbers often succeed by isolating a
            guaranteed relationship—fixed totals, ratios, or monotonic effects
            like “halve this ⇒ double the reciprocal.” When a choice hinges on
            unknown context (distances, weights, mixes), it’s not provable and
            should be eliminated.
          </p>
        </section>
      </article>
    </main>
  );
}