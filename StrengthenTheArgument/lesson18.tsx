import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "4.18 Strengthen Incorrect Choice Type 7: Weakeners | Critical Reasoning",
  description:
    "Avoid the classic trap in Strengthen questions: answers that actually undermine the conclusion. Includes a quick warm‑up and a full multiple‑choice example with thorough reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.18 Strengthen Incorrect Choice Type 7: Weakens the Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Strengthen questions, your job is to pick the choice that makes the
          conclusion more believable. Because many tempting options feel
          “related” to the topic, it’s surprisingly easy to grab an answer that
          is relevant but actually cuts against the author’s claim.
        </p>

        <p>
          The remedy is simple: keep the task front and center. Ask for each
          option, “Does this increase the support for the stated conclusion?”
          Anything that decreases support—or points toward an alternative
          explanation—must be eliminated.
        </p>

        <MustKnow>
          In a Strengthen question, relevance isn’t enough. Reject choices that
          introduce competing causes, reduce revenue/benefit, or otherwise make
          the conclusion less likely. If it weakens the author’s claim, it
          cannot be correct.
        </MustKnow>

        <section aria-labelledby="warm-up" className="space-y-3">
          <h3 id="warm-up" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>
          <p>
            A country raises taxes on alcohol. Officials claim that the higher
            taxes will help shrink the national budget deficit, even though
            consumption will drop.
          </p>
          <MCQExample
            number={31}
            prompt="Which option, if true, most supports the officials’ claim that the tax hike will narrow the budget gap?"
            options={[
              "Because people will drink less, the government will collect fewer import fees from alcohol distributors.",
              "Government funding covers every organization that treats alcohol‑related health issues.",
            ]}
            correct="Government funding covers every organization that treats alcohol‑related health issues."
            solution={
              <>
                <p>
                  We want evidence that higher alcohol taxes will improve the
                  budget. The first choice points to a revenue loss (fewer
                  import fees), which pushes the deficit in the wrong direction.
                  That weakens the claim.
                </p>
                <p>
                  The second choice indicates that the government pays for all
                  alcohol‑related health care. If people drink less, those
                  health costs should fall, easing the strain on the budget.
                  That adds support to the officials’ position, so it
                  strengthens.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-asteroid" className="space-y-3">
          <h3
            id="example-asteroid"
            className="text-xl font-semibold text-white"
          >
            Example
          </h3>

          <p>
            About 65 million years ago, dinosaurs went extinct. A giant crater
            on the Yucatán Peninsula indicates that a massive asteroid struck
            Earth tens of millions of years ago. A sediment layer found around
            the world and dated to 65 million years ago suggests that a dust
            cloud—possibly from an impact—made Earth unlivable for dinosaurs for
            an extended period. Therefore, it is likely that the Yucatán impact
            caused the dinosaur extinction.
          </p>

          <p className="font-semibold text-gray-200">
            Which of the following, if true, most helps confirm the explanation
            above?
          </p>

          <MCQExample
            number={32}
            prompt="Select the choice that most increases the likelihood that the Yucatán impact caused the mass extinction."
            options={[
              "Around the time of the extinction, a cluster of Asian volcanoes was unusually active, ejecting vast amounts of material into the atmosphere.",
              "Fossils show that the number of dinosaur species dropped sharply 65 million years ago.",
              "The global sediment layer from 65 million years ago has a geochemical signature matching local rock from the Yucatán impact site.",
              "Near the Yucatán crater, material created by the impact sits below sediment laid down thousands of years before the extinction.",
              "A dense dust cloud can cool the planet by reflecting substantial sunlight away from Earth.",
            ]}
            correct="The global sediment layer from 65 million years ago has a geochemical signature matching local rock from the Yucatán impact site."
            solution={
              <>
                <p className="font-semibold">Structure of the argument</p>
                <ul className="list-disc pl-6">
                  <li>
                    Premise: A large asteroid hit near Yucatán (tens of
                    millions of years ago).
                  </li>
                  <li>
                    Premise: A worldwide layer dated to 65 million years ago
                    indicates a dust cloud that made the planet hostile to
                    dinosaurs.
                  </li>
                  <li>
                    Conclusion: The Yucatán impact caused the extinction.
                  </li>
                </ul>
                <p>
                  The missing link is evidence tying the specific Yucatán impact
                  to the global dust layer at the extinction boundary.
                </p>

                <p className="mt-3">
                  Choice A introduces an alternative cause (volcanic activity)
                  for the dust, which weakens the idea that the asteroid was the
                  driver. Eliminate.
                </p>
                <p>
                  Choice B restates what we already know—that dinosaurs declined
                  around that time. Confirming a premise doesn’t add new support
                  for the causal link. Eliminate.
                </p>
                <p>
                  Choice C provides exactly the bridge we need: the chemistry of
                  the global layer matches Yucatán material, indicating that the
                  impact likely generated the dust that spread worldwide. This
                  strengthens the conclusion. Correct.
                </p>
                <p>
                  Choice D implies the impact predates even older sediment,
                  placing the impact too early relative to the extinction—this
                  undermines the causal story. Eliminate.
                </p>
                <p>
                  Choice E explains a mechanism for how dust could change the
                  climate but doesn’t connect the dust to the Yucatán event.
                  It’s explanatory, not strengthening. Eliminate.
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: In Strengthen problems, any option that diverts credit to a
          competing cause or otherwise reduces the conclusion’s plausibility is
          out. Keep your eye on the conclusion and select the answer that makes
          that specific claim more convincing.
        </p>
      </article>
    </main>
  );
}