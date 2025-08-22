import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.9.1 No Offsetting Factor Assumptions | Critical Reasoning",
  description:
    "Learn the common assumption behind many plans and predictions: nothing will offset the intended effect. Includes two GMAT-style Assumption examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify The Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9.1 Assumption Type 1: No Offsetting Factor
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When an author proposes a plan, makes a forecast, or recommends a course
          of action, a hidden assumption often lurks in the background:
          nothing will happen that neutralizes the intended effect. Your job in
          Assumption questions is to surface that “no-offsetting-factor” idea.
        </p>

        <MustKnow>
          The conclusion of a plan or prediction quietly depends on the absence
          of countervailing forces. If an offsetting factor could plausibly
          undo the intended result, the argument must assume that factor won’t
          occur.
        </MustKnow>

        <section aria-labelledby="real-world-patterns" className="space-y-4">
          <h3 id="real-world-patterns" className="text-xl font-semibold text-white">
            Quick real‑world patterns
          </h3>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Cutting nicotine levels to help people quit presumes smokers won’t
              simply smoke more to make up for the drop in nicotine per cigarette.
            </li>
            <li>
              Taxing soda to reduce consumption assumes manufacturers won’t lower
              shelf prices to offset the tax and keep the final price unchanged.
            </li>
            <li>
              Reducing daily calories to lose weight assumes the body won’t slow
              its burn rate enough to cancel out the deficit.
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            In each case, the success of the plan hinges on “no offset will occur.”
          </p>
        </section>

        <section aria-labelledby="example-16" className="space-y-4">
          <h3 id="example-16" className="text-xl font-semibold text-white">
            Example 16
          </h3>

          <MCQExample
            number={16}
            prompt={
              "In Hooksville, beer has long been 7% alcohol by volume. A new law caps beer at 4% ABV, so the council predicts that beer drinkers in Hooksville will soon consume less alcohol than they do now. Which assumption is required?"
            }
            options={[
              "Excessive alcohol consumption harms mental and physical health.",
              "Beer prices in Hooksville will not rise significantly because of the new law.",
              "Some Hooksville residents drink wine but avoid other alcoholic beverages.",
              "Residents will not double their beer intake to make up for the lower alcohol content.",
              "Nearby towns passed similar laws that substantially reduced alcohol consumption.",
            ]}
            correct="Residents will not double their beer intake to make up for the lower alcohol content."
            solution={
              <>
                <p className="mb-2">
                  The argument predicts “less alcohol consumed” because each beer will
                  have a lower ABV. That prediction fails if people compensate by
                  drinking more beer. The author must therefore assume that such
                  compensation won’t happen.
                </p>
                <p className="mb-2">
                  Why D? If residents were to drink twice as much 4% beer, they could
                  erase or even surpass the reduction implied by the law. So the
                  forecast depends on the assumption that people won’t offset the drop
                  in strength by increasing quantity.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    A explains the motivation for the policy, not the logic linking
                    the evidence to the conclusion.
                  </li>
                  <li>
                    B talks about price changes; the conclusion is about alcohol
                    volume consumed, not cost.
                  </li>
                  <li>
                    C is about wine drinkers; the argument concerns people who drink
                    beer.
                  </li>
                  <li>
                    E is supportive background at best, not a must‑be‑true for this
                    city’s outcome.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-17" className="space-y-4">
          <h3 id="example-17" className="text-xl font-semibold text-white">
            Example 17
          </h3>

          <MCQExample
            number={17}
            prompt={
              "In Junipira, the supply of mangos is maxed out at 2,000 per day. When demand exceeds supply in Junipira, prices rise. Current demand is 3,000 per day. Therefore, mango prices in Junipira will rise soon. The argument depends on which assumption?"
            }
            options={[
              "Most residents will sharply cut their mango consumption.",
              "Limited acreage explains why production is capped.",
              "Nearly all residents will not start traveling to a cheaper neighboring country to buy mangos.",
              "Other fruits in Junipira are identical substitutes for mangos.",
              "Farmers recently found new methods to boost yield per acre.",
            ]}
            correct="Nearly all residents will not start traveling to a cheaper neighboring country to buy mangos."
            solution={
              <>
                <p className="mb-2">
                  The conclusion relies on demand in Junipira continuing to exceed
                  the in‑country supply. If nearly everyone buys mangos across the
                  border instead, local demand could fall below local supply, and
                  the predicted price increase might not materialize.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    A weakens by suggesting demand will drop on its own.
                  </li>
                  <li>
                    B and E merely explain background facts; they don’t bridge premise
                    to conclusion.
                  </li>
                  <li>
                    D isn’t required; identical substitutes could actually reduce demand
                    and run counter to the price‑increase claim.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaway" className="space-y-2">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            For plans and predictions, scan for ways the effect could be canceled.
            The correct Assumption typically rules out the compensating behavior,
            policy response, or market shift that would undo the conclusion.
          </p>
        </section>
      </article>
    </main>
  );
}