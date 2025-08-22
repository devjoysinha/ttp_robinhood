import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "@matejmazur/react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.16 Strengthen: Poorly Connected Evidence | Critical Reasoning",
  description:
    "Learn to avoid strengthen answers that aren’t tightly tied to the argument’s scenario. See a worked example and a multiple‑choice drill with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.16 Incorrect Choice Type 5: Evidence Not Well Connected to the Scenario
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Strengthen questions, the argument usually centers on a specific situation
          (a place, organization, time period, or process). The best answer adds
          information that bears directly on that exact situation. Choices that talk
          about different contexts—however similar they may seem—rarely count as strong
          support on the GMAT.
        </p>

        <MustKnow>
          When strengthening, prefer evidence tied tightly to the given scenario. A choice
          about a different place, population, time, or activity is typically too loosely
          related to make the conclusion more credible.
        </MustKnow>

        <p>
          GMAT Critical Reasoning often treats cross‑scenario comparisons as weak support.
          Even if such parallels feel reasonable in everyday thinking, the test usually
          wants a direct link to the case at hand. Symbolically, we’re looking for
          <InlineMath math={'P_1, P_2, \\dots \\ \\Rightarrow \\ C'} /> where the added
          premise clearly plugs into the same actors, setting, and outcome as the
          conclusion.
        </p>

        <p>Examples of evidence that is typically not “well connected” to the scenario:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            A price spike for tomatoes after a storm five years ago used to predict a
            price spike after a different storm last month.
          </li>
          <li>
            A mega‑company improved profits by closing half its factories used to justify
            a small company doing the same.
          </li>
          <li>
            A discount retailer’s profits during a recession used to predict outcomes for
            a luxury department store in a recession.
          </li>
          <li>
            A trucking firm’s success with driving simulators used to argue that an airline
            will reduce pilot accidents with flight simulators.
          </li>
        </ul>

        <section aria-labelledby="airport-scenario">
          <h3 id="airport-scenario" className="text-xl font-semibold text-white">
            Mini‑Scenario: Connect to the Exact Case
          </h3>
          <p className="mt-2">
            A city council plans to shut down a large public airport to address constant
            noise. Many local businesses rely on tourist spending. The council predicts
            that closing the airport will increase—not reduce—those businesses’ profits.
          </p>
          <p className="mt-2">
            Which statement lends the strongest support?
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Not well connected: When a small private airport in another city closed,
              some businesses there saw revenue grow.
            </li>
            <li>
              Strongly connected: Without constant aircraft noise, the city will be more
              attractive to tourists, increasing visits and spending.
            </li>
          </ul>
          <p className="mt-2">
            The first choice concerns a different city, a different airport type, and only
            “some” businesses. The second choice ties directly to this city and explains the
            exact mechanism—reduced noise boosts tourism—that links the action to the
            stated outcome.
          </p>
        </section>

        <MustKnow>
          Favor choices that speak to the same players, the same setting, and the same
          outcome pathway. That is, the new information should integrate with the original
          premises to make the conclusion more likely in this exact scenario.
        </MustKnow>

        <section aria-labelledby="mcq-17">
          <MCQExample
            number={17}
            prompt="CSim Labs builds simulators that let trainees practice operating heavy construction equipment before using the real machines. Because most mishaps occur while operators are still learning, companies that use CSim Labs’ simulators will avoid many mishaps. Which option most strengthens this conclusion?"
            options={[
              "Using aircraft simulators has been a major contributor to modern commercial aviation safety.",
              "Simulators let construction operators practice safely handling difficult situations that would otherwise catch them unprepared.",
              "Training on real equipment can be costly due to fuel use and maintenance needs.",
              "Classroom instruction reduces crash rates for new automobile drivers during their first years on the road.",
              "Construction simulators can train operators on many different kinds of machines.",
            ]}
            correct="Simulators let construction operators practice safely handling difficult situations that would otherwise catch them unprepared."
            solution={
              <>
                <p>
                  Argument map:
                </p>
                <ul className="list-disc pl-6">
                  <li>Premise: CSim provides training via simulators before real operation.</li>
                  <li>Premise: Many mishaps happen while operators are still learning.</li>
                  <li>Conclusion: Using the simulators will prevent many mishaps.</li>
                </ul>
                <p className="mt-2">
                  The best support explains why this training reduces the specific kinds of
                  incidents that cause mishaps. The correct choice says operators can rehearse
                  risky scenarios safely, turning “unprepared” moments into “practiced”
                  responses—directly lowering mishaps during the learning phase.
                </p>
                <p className="mt-2">
                  Why the others are weak:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Aviation safety (pilots) is a different domain; it’s a loose analogy, not
                    evidence about construction operators.
                  </li>
                  <li>
                    Lower training costs don’t show fewer mishaps; that is a different conclusion.
                  </li>
                  <li>
                    Classroom benefits for new drivers differ from simulator training and from
                    operating heavy equipment; wrong domain and method.
                  </li>
                  <li>
                    Broad coverage (many machine types) doesn’t prove that mishaps decrease.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Strong answers plug directly into the scenario’s details and
          mechanism. If the choice leans on another city, another industry, or a different
          training method, it’s usually not the strengthen you want.
        </p>
      </article>
    </main>
  );
}