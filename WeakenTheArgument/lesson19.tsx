import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.9.4 Pertinent but Incorrect Choices | Critical Reasoning",
  description:
    "Learn to avoid trap answers that feel relevant but don’t actually weaken the argument. Includes two quick demonstrations and a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9.4 “Pertinent but Incorrect” Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Weaken questions frequently include attractive traps: choices that bring
          up points you might care about in real life, yet leave the argument’s
          support untouched. These options feel sensible and on‑topic, but they
          do not reduce the probability that the conclusion is true.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              To weaken an argument, the choice must nudge the conclusion
              downward by undermining a link in the author’s reasoning chain,
              not merely by adding commentary that is sensible or practically
              relevant.
            </p>
            <p className="text-gray-200">
              Think of an argument as{" "}
              <InlineMath math="\text{premises} + \text{assumptions} \Rightarrow \text{conclusion}" />.
              A correct weakener pressures an assumption or introduces a new fact
              that blunts the conclusion. A “pertinent but incorrect” option may
              be related to the topic, but it leaves the chain above intact.
            </p>
          </div>
        </MustKnow>

        <p>
          The telltale sign of these traps: the choice comments on side issues
          (cost, preference, ethics, strategy, etc.) without shifting the support
          for the specific claim the author makes.
        </p>

        <section aria-labelledby="demo-1">
          <h3 id="demo-1" className="sr-only">
            Demonstration 1
          </h3>
          <ExampleCard
            number={27}
            title="Trap vs. real weakener (food safety)"
            statements={[
              "Claim: Banning certain pesticides and switching to organic methods will make food safer.",
              "(Pertinent but incorrect) Many shoppers would rather choose between organic and non‑organic foods because organic options often cost more.",
              "(Correct weakener) Certain dangerous bacteria appear more frequently on produce grown with organic methods than on other produce.",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  The goal is food safety. Preference and price (choice B) could matter
                  in policy debates, but they don’t bear on whether food becomes safer.
                  Choice C, however, introduces a risk that directly counters the safety
                  claim and therefore weakens the argument.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="demo-2">
          <h3 id="demo-2" className="sr-only">
            Demonstration 2
          </h3>
          <ExampleCard
            number={28}
            title="Trap vs. real weakener (ed‑tech effectiveness)"
            statements={[
              "Prediction: A new online platform, once rolled out nationally, will help students learn faster and more effectively.",
              "(Pertinent but incorrect) Poorly designed programs can yield high test scores while missing what’s most useful to learn.",
              "(Correct weakener) Effective use of the new system requires specialized support that most school staff currently cannot provide.",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  The conclusion is about learning effectiveness after nationwide
                  implementation. Choice B raises a valid educational concern,
                  but not one tied to this platform’s projected effectiveness.
                  Choice C undermines the rollout by revealing a missing input
                  (staff support), reducing the likelihood that the outcome will
                  match the promise.
                </p>
              </>
            }
          />
        </section>

        <MCQExample
          number={29}
          prompt="Politician: Our manufacturers have lost cost advantage to foreign competitors. New extraction tech lets us tap domestic fossil fuels more cheaply. By switching from imported to cheaper domestic fuels, our manufacturers will regain competitiveness. Which option most weakens this reasoning?"
          options={[
            "Global use of fossil fuels harms air quality and contributes to environmental instability.",
            "Pivoting the national economy toward services may be wiser than trying to revive manufacturing.",
            "For many factories, fuel accounts for a sizable share of operating costs.",
            "Investments in renewables would yield greater long‑run gains than investing in fossil‑fuel extraction.",
            "If a country cuts fuel imports, global demand falls and world fossil‑fuel prices drop, reducing or erasing any new cost edge for its manufacturers.",
          ]}
          correct="If a country cuts fuel imports, global demand falls and world fossil‑fuel prices drop, reducing or erasing any new cost edge for its manufacturers."
          solution={
            <>
              <p>
                Map the claim: cheaper domestic fuel —&gt; lower costs —&gt; regain
                competitiveness. Choices about health, ethics, or national strategy
                can be relevant in life, but they don’t touch this causal path.
              </p>
              <p>
                The last choice introduces a feedback effect: the domestic shift
                lowers world prices, making energy cheaper abroad as well. If
                foreign rivals also enjoy reduced energy costs, the home country’s
                relative advantage may not improve, directly challenging the
                politician’s conclusion.
              </p>
            </>
          }
        />

        <p>
          Bottom line: a tempting trap often sounds reasonable and closely
          related to the topic, but it doesn’t move the needle on the conclusion.
          A true weakener either pressures a necessary assumption, supplies
          counter‑evidence, or introduces a factor that makes the plan or
          prediction less likely to succeed.
        </p>
      </article>
    </main>
  );
}