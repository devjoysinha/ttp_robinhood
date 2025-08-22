import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "11.7 Common Wrong Answer Patterns for Complete‑the‑Passage | Critical Reasoning",
  description:
    "Learn the frequent trap choices in Complete‑the‑Passage questions and how to avoid them. Includes a quick multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.7 Common Incorrect Answer Types for Complete‑the‑Passage Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Complete‑the‑Passage items aren’t a brand‑new family of logic problems.
          Most of the time, they mirror familiar Critical Reasoning goals such as
          Strengthen, Weaken, Assumption, or Inference. Because of that, many of
          the usual wrong‑answer traps you’ve seen in those question types show up here too.
        </p>

        <p>
          That said, the “fill‑in‑the‑ending” format introduces a few traps that play on
          tone or surface wording. Your job is to choose the single ending that fits
          the author’s reasoning and completes the passage’s final sentence logically.
        </p>

        <MustKnow>
          The correct completion must align with the author’s argument and purpose,
          not just sound plausible or share vocabulary with the passage. If a choice
          shifts the focus, explains background instead of completing the claim, or
          nudges the conclusion in a slightly different direction, it’s a trap.
        </MustKnow>

        <section aria-labelledby="trap-types" className="space-y-4">
          <h3 id="trap-types" className="text-xl font-semibold text-white">
            High‑frequency trap patterns
          </h3>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-200">
              1) Sounds right, but subtly pivots the conclusion
            </h4>
            <p>
              These choices echo the passage’s language yet adjust the target claim
              or introduce a new goal. They feel close—but they don’t finish the exact
              line of reasoning you’re asked to complete.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-200">
              2) Plausible or inferable, but not the logical completion
            </h4>
            <p>
              The statement could be true based on the passage, but it doesn’t answer
              the task of completing the final sentence’s argument. Plausibility isn’t enough—
              the choice must function as the missing piece of the author’s claim.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-200">
              3) Addresses a different (but relevant‑sounding) issue
            </h4>
            <p>
              These options discuss a material topic nearby, yet not the one the author is
              actually resolving in the last sentence. If it’s not solving the stated objective,
              it’s not the completion.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-200">
              4) Explains background rather than completes the argument
            </h4>
            <p>
              Some choices offer causes, definitions, or context. That information may be
              interesting, but unless it directly supplies the passage’s missing claim,
              it’s an explanatory detour—not the finish line.
            </p>
          </div>
        </section>

        <MCQExample
          number={36}
          prompt={`Which option best completes the argument?

Researcher: A pilot tutoring program placed expert tutors in 5 of the district’s 40 schools. Test scores rose in those 5 schools, while scores in other schools were flat. Therefore, expanding the program districtwide will raise overall scores because ____.`}
          options={[
            "students value tutoring more than classroom instruction, so they will study harder in all classes",
            "some families prefer after‑school programs to academic tutoring, so participation may vary by neighborhood",
            "the 5 schools also received additional grants that may have influenced results",
            "the gains in the 5 schools were caused by the tutoring; applying the same approach elsewhere should produce comparable improvements",
            "district budgets are tight, so expanding the program is not financially prudent",
          ]}
          correct="the gains in the 5 schools were caused by the tutoring; applying the same approach elsewhere should produce comparable improvements"
          solution={
            <>
              <p>
                The conclusion predicts higher districtwide scores if the program scales.
                The ending must justify that forecast by tying the pilot’s improvements
                to tutoring and projecting similar effects elsewhere.
              </p>
              <p>
                Choice D does exactly that: it attributes the gains to tutoring and extends
                the effect to the rest of the district. The other options are traps:
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  A is a broad, plausible statement but doesn’t complete the specific claim
                  about expanding this program.
                </li>
                <li>
                  B raises a side issue (participation preferences) that doesn’t finish the
                  author’s forecast.
                </li>
                <li>
                  C introduces an alternative cause, which weakens rather than completes
                  the argument.
                </li>
                <li>
                  E shifts to cost, a different conclusion than the one being advanced.
                </li>
              </ul>
              <p>Thus, D is the only choice that logically completes the passage.</p>
            </>
          }
        />

        <section aria-labelledby="how-to-avoid" className="space-y-3">
          <h3 id="how-to-avoid" className="text-xl font-semibold text-white">
            How to avoid traps quickly
          </h3>
          <ul className="ml-5 list-disc">
            <li>
              Before looking at choices, restate the final sentence’s purpose in your own words
              (e.g., “We need a reason that supports expanding the tutoring program.”).
            </li>
            <li>
              Eliminate answers that change the author’s goal, drift to a side issue, or merely
              explain context without completing the claim.
            </li>
            <li>
              Prefer the unique option that plugs the exact logical gap the author left open.
            </li>
          </ul>
        </section>

        <p className="pt-2">
          Bottom line: the correct ending is task‑focused and completes the author’s reasoning.
          If a choice merely sounds good, matches wording, or tackles a nearby but different
          objective, it’s a classic Complete‑the‑Passage trap.
        </p>
      </article>
    </main>
  );
}