import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.2 Weaken the Argument by Targeting Assumptions | Critical Reasoning",
  description:
    "Learn how to weaken arguments on GMAT Critical Reasoning by finding and challenging unstated assumptions. Includes quick drills and fully worked examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2 Focus on Assumptions to Weaken an Argument Effectively
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section aria-labelledby="anatomy">
          <h3 id="anatomy" className="text-xl font-semibold text-white">
            What every argument is made of
          </h3>
          <p>
            Most CR prompts follow the same blueprint. Understanding the parts
            lets you see where and how to weaken them:
          </p>
          <ul className="list-inside list-decimal space-y-1">
            <li>
              Background (optional context that sets the scene)
            </li>
            <li>
              Premises (the stated evidence we must accept as true)
            </li>
            <li>
              Assumptions (unstated ideas that connect the evidence to the
              conclusion)
            </li>
            <li>
              Conclusion (what the author wants you to believe)
            </li>
          </ul>
        </section>

        <MustKnow>
          Premises and any background information are treated as facts on CR
          questions—do not attack them. To weaken, go after the jump in logic:
          the hidden assumption that turns evidence into the conclusion.
        </MustKnow>

        <section aria-labelledby="how-to-weaken">
          <h3 id="how-to-weaken" className="text-xl font-semibold text-white">
            What it means to weaken
          </h3>
          <p>
            A correct weaken answer shows that the conclusion does not
            necessarily follow from the given evidence, even if the evidence is
            correct. You do that by calling the assumption into question.
          </p>
        </section>

        <MustKnow>
          The right weaken answer doesn’t have to demolish the argument. Showing
          that the conclusion is less certain is enough.
        </MustKnow>

        <section aria-labelledby="quick-drills">
          <h3 id="quick-drills" className="text-xl font-semibold text-white">
            Three quick drills
          </h3>

          <MCQExample
            number={1}
            prompt="Elephants are far larger than humans. Therefore, elephants must also have larger brains than humans."
            options={[
              "Brain size is not correlated with body size.",
              "Elephants and humans eat very different diets.",
            ]}
            correct="Brain size is not correlated with body size."
            solution={
              <>
                <p>
                  Evidence: elephants have greater body size. Conclusion: their
                  brains must be larger. The bridge is “bigger body ⇒ bigger
                  brain.” If brain size doesn’t track with body size, the
                  conclusion no longer follows. So that statement weakens by
                  targeting the assumption.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="My neighbors’ porch lights are still on; therefore, they haven’t woken up yet."
            options={[
              "When the neighbors wake up, they do not turn off their porch lights.",
              "The neighbors always sleep with their porch lights on.",
            ]}
            correct="When the neighbors wake up, they do not turn off their porch lights."
            solution={
              <>
                <p>
                  The logic assumes: “if awake, then lights off.” Saying they
                  don’t turn lights off when awake breaks that link, so the
                  lights being on no longer implies they’re asleep.
                </p>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="Maria is a pilot with worse than 20/20 vision. Thus, no major airline will hire her."
            options={[
              "Having better than 20/20 vision is required to be a military pilot.",
              "Major airlines hire pilots even if they do not have 20/20 vision.",
            ]}
            correct="Major airlines hire pilots even if they do not have 20/20 vision."
            solution={
              <>
                <p>
                  The assumption is “major airlines require 20/20 vision.” If
                  airlines do hire pilots without 20/20, the conclusion doesn’t
                  necessarily follow—so the argument is weakened.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          To weaken, ask: “What unstated idea must be true for this conclusion
          to work?” Then present evidence that this idea could be false or
          doesn’t apply here.
        </MustKnow>

        <section aria-labelledby="worked-example-1">
          <h3 id="worked-example-1" className="text-xl font-semibold text-white">
            Worked example 1
          </h3>

          <MCQExample
            number={4}
            prompt="MowGreen uses eco‑friendly lawn care and has been growing fast nationwide. However, given Drawnville’s current economy, MowGreen would not be profitable there. Therefore, MowGreen certainly won’t expand into Drawnville any time soon. Which option most weakens the argument?"
            options={[
              "MowGreen’s leadership does not factor profitability into expansion decisions.",
              "Residents of Drawnville are not interested in sustainable lawn care.",
              "There are areas where MowGreen does not operate yet but could do so profitably.",
              "MowGreen is currently profitable everywhere it operates.",
              "Eco‑friendly lawn care typically costs more than less sustainable methods.",
            ]}
            correct="MowGreen’s leadership does not factor profitability into expansion decisions."
            solution={
              <>
                <p>
                  Structure:
                </p>
                <ul className="list-inside list-disc">
                  <li>Premise: In Drawnville, MowGreen would be unprofitable.</li>
                  <li>Conclusion: Therefore, they won’t expand to Drawnville soon.</li>
                </ul>
                <p>
                  Hidden link: profitability is a decision driver for
                  expansion. If management doesn’t consider profitability when
                  expanding, the premise no longer supports the conclusion.
                  Other choices either add unrelated facts, talk about different
                  geographies, or even strengthen the idea that expansion
                  wouldn’t happen. Thus, the first option most weakens.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="worked-example-2">
          <h3 id="worked-example-2" className="text-xl font-semibold text-white">
            Worked example 2
          </h3>

          <MCQExample
            number={5}
            prompt="Every Games Plus store carries the title TigerTrail. Store A keeps TigerTrail above eye level all year and sells more copies than any other store. Other stores move the game between eye‑level and above eye‑level monthly. Therefore, Store A’s shelf placement causes its higher TigerTrail sales. Which option most weakens the argument?"
            options={[
              "Before launch, the franchise ran a large online campaign for TigerTrail.",
              "Shoppers often associate above‑eye‑level placement with popularity.",
              "Most TigerTrail buyers at Store A ordered by phone and simply picked up at the register.",
              "Store A has had the franchise’s highest annual profits every year.",
              "Store A’s customers do not have more discretionary income than customers of other stores.",
            ]}
            correct="Most TigerTrail buyers at Store A ordered by phone and simply picked up at the register."
            solution={
              <>
                <p>
                  The argument claims a causal link: “above‑eye‑level placement
                  causes higher sales.” If most customers don’t browse the
                  shelves (because they call ahead and pick up), shelf position
                  likely didn’t influence their purchase. That undercuts the
                  cause-and-effect jump. The ad campaign and profits are
                  irrelevant to the specific shelf‑placement mechanism; the
                  association in option 2 would actually strengthen the
                  shelf‑placement story; and equal discretionary income removes
                  an alternative cause but doesn’t weaken.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Weaken answers commonly do one of the following:
          - Challenge a required assumption that links evidence to the conclusion.
          - Offer a plausible alternative cause or explanation.
          - Show the supposed cause couldn’t have influenced the effect.
          - Undermine the relevance of the evidence to this specific conclusion.
        </MustKnow>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Treat background and premises as true; don’t argue with them.</li>
            <li>Find the assumption—the “glue” between evidence and conclusion.</li>
            <li>Show that this glue might fail or doesn’t apply here.</li>
            <li>You only need to make the conclusion less certain, not impossible.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}