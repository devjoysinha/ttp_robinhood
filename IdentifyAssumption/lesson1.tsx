import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.2 Identify the Assumption | Critical Reasoning",
  description:
    "Learn what assumptions are, why they matter, and how to spot them in Critical Reasoning. Includes three multiple‑choice drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.2 Assumptions: Hidden facts an argument needs to stand
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, an assumption is a fact the author does not
          state but is relying on. If that missing fact turns out to be wrong,
          the argument no longer works.
        </p>

        <MustKnow>
          An assumption is an unstated requirement the argument needs in order
          for its reasoning to be valid.
        </MustKnow>

        <MustKnow>
          If a required assumption is false, the reasoning collapses.
        </MustKnow>

        <p>
          Consider this tiny argument:
          <br />
          <em className="block pl-4 mt-2">Dogs like to bark.</em>
          <em className="block pl-4">Therefore, Fido likes to bark.</em>
        </p>

        <p>
          The author used one premise to reach a conclusion about Fido. The
          bridge they silently used is “Fido is a dog.”
        </p>

        <div className="rounded-md border border-gray-700/50 bg-gray-900/40 p-4">
          <p className="mb-2 font-semibold text-gray-100">Structure</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Premise: <InlineMath math={"\\forall x\\, (Dog(x) \\Rightarrow Bark(x))"} />
            </li>
            <li>
              Assumption: <InlineMath math={"Dog(Fido)"} />
            </li>
            <li>
              Conclusion: <InlineMath math={"Bark(Fido)"} />
            </li>
          </ul>
        </div>

        <p>
          Without the hidden fact that Fido is indeed a dog, the jump from a
          statement about dogs to a statement about Fido isn’t justified.
        </p>

        <p>
          Here’s a second quick one:
          <br />
          <em className="block pl-4 mt-2">Today is not a holiday.</em>
          <em className="block pl-4">So the kids will be in school.</em>
        </p>

        <p>
          What must the author be presuming? That the only days kids are not in
          school are holidays. In symbols, a common way to encode this is:
        </p>

        <div className="rounded-md border border-gray-700/50 bg-gray-900/40 p-4">
          <BlockMath math={"\\neg\\,InSchool \\Rightarrow Holiday"} />
          <p className="mt-2 text-sm text-gray-400">
            With that in place, from <InlineMath math={"\\neg Holiday"} /> we
            can safely infer <InlineMath math={"InSchool"} />.
          </p>
        </div>

        <p>
          One more, a bit richer:
          <br />
          <em className="block pl-4 mt-2">
            Everyone living in a house where a communicable disease is present
            should be quarantined. Two residents of the yellow house on Maple
            Street were diagnosed with disease X yesterday. Therefore, all
            people in that house should be quarantined.
          </em>
        </p>

        <p>The linchpin here is that disease X is communicable:</p>

        <div className="rounded-md border border-gray-700/50 bg-gray-900/40 p-4">
          <BlockMath math={"[Communicable(D)\\ \\n\\wedge\\ Present(D, H)]\\ \\Rightarrow\\ Quarantine(H)"} />
          <p className="mt-2 text-sm text-gray-400">
            If disease X is not communicable, the conclusion doesn’t follow.
          </p>
        </div>

        <MustKnow>
          An assumption is the glue that connects the evidence to the
          conclusion.
        </MustKnow>

        <MustKnow>
          Read arguments like a lawyer: dissect claims, separate premises from
          conclusions, and look for the missing piece that makes the leap
          possible.
        </MustKnow>

        <section aria-labelledby="practice" className="pt-2">
          <h3 id="practice" className="sr-only">
            Practice Questions
          </h3>

          <MCQExample
            number={1}
            prompt="The Noodle House, a noodles‑only restaurant that has won the state’s “Best Noodles” award five years running, will open in Redlands next month. The mayor of Redlands enjoys eating award‑winning food. Therefore, the mayor will love dining at the Noodle House. Which assumption does this reasoning require?"
            options={[
              "The mayor of Redlands never eats meals at home.",
              "Redlands has very few restaurants that serve noodles.",
              "Only award‑winning restaurants are allowed to open in Redlands.",
              "The Noodle House is cheaper than every other restaurant.",
              "The mayor of Redlands does not have a noodle allergy.",
            ]}
            correct="The mayor of Redlands does not have a noodle allergy."
            solution={
              <>
                <p>
                  The argument moves from “likes award‑winning food” to “will
                  love eating at this specific restaurant.” If the mayor cannot
                  eat noodles at all, the conclusion is impossible no matter how
                  many awards the place has. So the author must assume there’s
                  no noodle allergy.
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>
                    Not required: where the mayor eats otherwise (home vs.
                    out), how many noodle spots exist, or relative price.
                  </li>
                  <li>
                    The only deal‑breaker among the choices is an allergy that
                    prevents eating there at all.
                  </li>
                </ul>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="Last summer, Hampton Falls charged a $10 per‑person entry fee at one of its two public beaches and collected $50,000. The city will charge the same fee at the second beach next summer. Therefore, next summer the city will collect at least $100,000 in beach admissions. Which statement must be true for the conclusion to hold?"
            options={[
              "The same lifeguards will work the beaches next summer.",
              "The town will not be more crowded than usual next summer.",
              "Next summer’s beach season will be two weeks shorter.",
              "The beaches will not be closed all summer due to high bacteria levels.",
              "Some visitors from last summer will not return next summer.",
            ]}
            correct="The beaches will not be closed all summer due to high bacteria levels."
            solution={
              <>
                <p>
                  To earn admission revenue, the beaches must be open. If both
                  beaches were shut for the entire season (for example, due to
                  unsafe water), then collecting $100,000 would be impossible.
                  Thus, the plan requires the beaches not be closed all summer.
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>
                    Who the lifeguards are, crowd size, season length (shorter),
                    or whether last year’s visitors return are not necessary
                    truths for the conclusion.
                  </li>
                </ul>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="MowGreen, a lawn‑care company that uses sustainable methods, is growing quickly and now serves many regions. Given the local economy in Drawnville, however, MowGreen could not operate profitably there. Therefore, MowGreen will not expand into Drawnville any time soon. Which assumption is required?"
            options={[
              "MowGreen’s leadership factors profitability into expansion decisions.",
              "Residents around Drawnville are not interested in sustainable lawn care.",
              "There are still other areas where MowGreen could expand profitably.",
              "MowGreen is currently profitable in every area it serves.",
              "Sustainable lawn‑care methods are generally more expensive than conventional methods.",
            ]}
            correct="MowGreen’s leadership factors profitability into expansion decisions."
            solution={
              <>
                <p>
                  The argument goes from “cannot be profitable” to “will not
                  expand there.” That link only works if the company actually
                  considers profitability when choosing where to expand. If
                  profitability weren’t a decision criterion, the premise
                  wouldn’t block expansion.
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>
                    Interest in sustainability, availability of other markets,
                    current profits elsewhere, or relative costs are not
                    required for this particular conclusion.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: assumptions live at the hinge between what’s given and
          what’s claimed. Find the hinge, and you’ll find the assumption.
        </p>
      </article>
    </main>
  );
}