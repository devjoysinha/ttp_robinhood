import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.9.2 Pseudo‑Weakeners | Weaken the Argument",
  description:
    "Learn to spot pseudo‑weakener answer choices—options that feel like they weaken an argument but don’t. Compare them with true weakeners using a GMAT‑style example and concise explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9.2 Choices That Are Pseudo‑Weakeners
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Weaken questions, only one option truly undermines the author’s conclusion.
          Others may sound damaging but leave the conclusion largely intact. Those traps
          are pseudo‑weakeners: they distract by raising points that don’t actually
          reduce the argument’s force.
        </p>

        <section aria-labelledby="demo-mini" className="space-y-3">
          <h3 id="demo-mini" className="text-xl font-semibold text-white">
            A quick mini‑demo
          </h3>
          <p className="italic">
            A high‑school coach wants players to gain muscle and gives them free gym
            memberships. Therefore, the team’s average muscle mass will surely increase.
          </p>
          <p className="italic">Which statement most calls the conclusion into question?</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold underline">Pseudo‑weakener:</span> Some
              players won’t use the gym.
              <br />
              This doesn’t necessarily dent the conclusion about the average; if the
              others train and add enough muscle, the team average can still rise.
            </li>
            <li>
              <span className="font-semibold underline">True weakener:</span> The gym
              offers only cardio and endurance equipment.
              <br />
              That makes the plan mis‑matched to the goal (gaining muscle), directly
              undermining the conclusion.
            </li>
          </ul>
        </section>

        <MustKnow>
          Beware of options that merely sound negative. A choice weakens only if it
          reduces support for the stated conclusion. If the point raised can coexist
          with the conclusion still holding, it’s likely a pseudo‑weakener.
        </MustKnow>

        <section aria-labelledby="mcq" className="space-y-4">
          <h3 id="mcq" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <MCQExample
            number={27}
            prompt="SwiftBrew built its customer base by selling coffee pods for its brewers at low prices. With many owners now loyal to the brand, SwiftBrew plans to raise pod prices. The company concludes that its profits will increase sharply after the price hike. Which option most seriously undermines this conclusion?"
            options={[
              "A portion of SwiftBrew brewer owners have already stopped purchasing pods due to concerns about pod waste.",
              "Many SwiftBrew customers typically buy a large supply of pods that lasts for months.",
              "Sales of SwiftBrew brewers are growing more slowly now than during the first year after launch.",
              "A competitor that sells nearly indistinguishable pods will keep charging the same low price that SwiftBrew currently charges.",
              "Some customers brew multiple cups using a single pod.",
            ]}
            correct="A competitor that sells nearly indistinguishable pods will keep charging the same low price that SwiftBrew currently charges."
            solution={
              <>
                <p>
                  Argument map: The plan is to raise pod prices, and the conclusion is
                  that profits will jump substantially. For this to be reliable, there
                  can’t be factors that meaningfully cut sales or margins after the
                  increase.
                </p>
                <p>
                  A) Some owners already quit buying pods because of waste. That’s
                  disconnected from the price hike; SwiftBrew isn’t earning from these
                  people now anyway. Charging more to the remaining buyers could still
                  raise profits.
                </p>
                <p>
                  B) Stockpiling delays purchases but doesn’t block the price increase
                  from eventually taking effect on future orders. Timing may shift, but
                  the conclusion isn’t fundamentally challenged.
                </p>
                <p>
                  C) Slower brewer growth doesn’t address profits from current pod
                  users. Existing owners still need pods, so higher pod prices could
                  still boost profits.
                </p>
                <p>
                  D) A near‑perfect substitute remains available at the lower price.
                  That invites switching after SwiftBrew raises its price, threatening
                  volume and profit. This directly undercuts the conclusion. Correct.
                </p>
                <p>
                  E) Reusing pods lowers consumption rate but doesn’t preclude higher
                  profits from the pods that are still purchased at the new price.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: track the exact conclusion and ask whether the choice gives a
          realistic reason that the plan/claim would falter. If the choice merely adds
          color without eroding the link to the conclusion, it’s not a real weakener.
        </p>

        <section aria-labelledby="faq" className="space-y-3">
          <h3 id="faq" className="text-xl font-semibold text-white">
            Quick FAQs
          </h3>

          <details className="rounded-md border border-gray-700 p-4">
            <summary className="cursor-pointer font-medium text-gray-200">
              We aren’t told that the competitor reaches SwiftBrew’s customers. How can
              that weaken?
            </summary>
            <p className="mt-2">
              We don’t need proof it already does—only that it plausibly could. A
              lower‑priced, nearly identical product presents a credible threat to the
              plan. That possibility is enough to cast doubt in a Weaken question.
            </p>
          </details>

          <details className="rounded-md border border-gray-700 p-4">
            <summary className="cursor-pointer font-medium text-gray-200">
              “Virtually identical” might only describe appearance. What if taste is
              worse and customers return?
            </summary>
            <p className="mt-2">
              That scenario is possible, but Weaken tasks don’t require decisive
              refutation—just a reason to be skeptical. The availability of a cheaper,
              nearly equivalent option creates a realistic path for the plan to fail.
            </p>
          </details>

          <details className="rounded-md border border-gray-700 p-4">
            <summary className="cursor-pointer font-medium text-gray-200">
              In option A, could “some” mean “all”?
            </summary>
            <p className="mt-2">
              It could be any positive subset, but we can’t assume “all.” Regardless,
              those buyers have already exited—pricing changes don’t affect them—so the
              price‑increase plan can still lift profits from remaining customers.
            </p>
          </details>

          <details className="rounded-md border border-gray-700 p-4">
            <summary className="cursor-pointer font-medium text-gray-200">
              Why doesn’t stockpiling (option B) weaken?
            </summary>
            <p className="mt-2">
              The conclusion lacks a time constraint. Stockpiling can delay the impact
              of a price change, but it doesn’t prevent higher profits from arriving as
              inventory is eventually replenished at the new price.
            </p>
          </details>
        </section>
      </article>
    </main>
  );
}