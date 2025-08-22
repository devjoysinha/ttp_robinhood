import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.5.1 Answers That Introduce New Elements | Method of Reasoning",
  description:
    "Learn why Method of Reasoning answers must stick to the argument’s structure and wording. Includes a quick mini‑example and a full multiple‑choice drill with detailed reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.1 Answers That Introduce New Elements
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Method of Reasoning (MoR) questions ask how an argument is built. Your
          job is to describe the author’s moves—what roles the parts play and
          what strategy ties them together. Because of that, the right answer
          cannot smuggle in ideas that the argument itself never mentions.
        </p>

        <MustKnow>
          Correct MoR answers mirror the passage’s structure and language. Any
          choice that adds a new claim, factor, or assumption not present in the
          original argument is automatically wrong.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini example: Spotting “new stuff”
          </h3>
          <p className="italic text-gray-300">
            Many think homeschooling is worse than traditional school because
            it’s seen as weaker for social development. It’s true that students
            in conventional schools usually interact with peers more. Still,
            school isn’t much like life after graduation. So there’s no reason
            to conclude traditional students end up better prepared socially
            than homeschooled students.
          </p>
          <p className="text-gray-300">
            Consider two descriptions of how the author proceeds:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              A: Bases the conclusion on the assumption that one educational
              setting is more similar to the “real world” than the other.
            </li>
            <li>
              B: Acknowledges evidence favoring the opposing view, then adds a
              further consideration that supports the author’s conclusion.
            </li>
          </ul>
          <p>
            Choice A goes beyond the passage—the author doesn’t assert that one
            experience is more “real‑world‑like.” That assumption is new
            information. Choice B, however, matches the structure: concede a
            point (more peer interaction), then introduce a reason (school is
            unlike adult life) to support the author’s conclusion.
          </p>
        </section>

        <p>
          Don’t let gaps in an argument tempt you to “fix” them. MoR questions
          aren’t asking you to improve the logic; they’re asking you to
          identify, categorize, and label what’s actually there. If a choice
          speaks to motives, populations, or metrics that never appear in the
          stimulus, it’s out of scope.
        </p>

        <MCQExample
          number={10}
          prompt="City planners once prioritized drivers by allocating prime land to parking garages and lots, which constrained space for leisure and entertainment businesses. Planners are now shifting toward non‑car transit, an approach that better fits urban residents who prefer amenities within walking or biking distance. Which statement from a planner best reflects the reasoning behind this policy change?"
          options={[
            "As urban density increases, we must dismantle the belief that car ownership is practical in cities.",
            "For years we shortchanged residents to chase entertainment spending from the suburbs.",
            "Bike‑share programs cut the parking footprint needed to support local commerce, freeing up prime parcels for restaurants and shops.",
            "More young adults can now afford homes here, but they won’t relocate without robust entertainment options.",
            "Surface parking lots are eyesores that waste land which retailers and other businesses could use to boost tax revenue.",
          ]}
          correct="Bike‑share programs cut the parking footprint needed to support local commerce, freeing up prime parcels for restaurants and shops."
          solution={
            <>
              <p className="text-gray-300">
                Structure of the argument:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-gray-300">
                <li>Background: parking lots/garages used up valuable land.</li>
                <li>Problem: less room for entertainment/leisure venues.</li>
                <li>Shift: accommodate non‑car transportation.</li>
                <li>
                  Rationale: this better matches urban lifestyles (walk/bike to
                  amenities).
                </li>
              </ul>
              <p className="text-gray-300">
                The correct choice should connect alternative transit with
                reclaiming space for amenities that residents want close by.
              </p>
              <p className="text-gray-300">
                Correct: “Bike‑share programs…” directly ties the new approach
                (bikes) to reducing parking needs and freeing land for shops and
                restaurants—exactly the tradeoff the argument highlights.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-300">
                <li>
                  “Density must change attitudes…” introduces city density, an
                  element not used in the argument.
                </li>
                <li>
                  “We favored suburban spending…” brings in suburban dollars and
                  resident “disservice,” both new and unnecessary to the
                  reasoning.
                </li>
                <li>
                  “Young adults can afford homes…” adds age group and housing
                  affordability—neither appears in the passage.
                </li>
                <li>
                  “Parking lots are unattractive and hurt tax revenue…” relies
                  on aesthetics and tax intake, again new considerations not in
                  the original argument.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: describe what the author actually does. If an answer
          mentions a factor the author never used, it can’t be the right MoR
          choice.
        </p>
      </article>
    </main>
  );
}