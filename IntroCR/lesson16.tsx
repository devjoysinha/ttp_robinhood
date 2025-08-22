import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className={display ? "block my-3 overflow-x-auto" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "1.16 Don’t Eliminate Answers Just Because They Add New Information | Critical Reasoning",
  description:
    "In GMAT Critical Reasoning, many correct choices introduce new information—especially in Strengthen and Weaken questions. Learn when that’s fine, when it isn’t (e.g., Inference), and practice with a quick example.",
};

export default function Page() {
  return (
    <main aria-labelledby="page-title" className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 id="page-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.16 Don’t Eliminate an Answer Choice Just Because It Adds New Information
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common pitfall in Critical Reasoning is to cross off any option that brings in ideas not explicitly
          mentioned in the prompt. Students often think “that wasn’t in the passage, so it can’t be right.”
          That reflex costs points.
        </p>

        <MustKnow>
          Many correct CR answers introduce new information. What matters is the impact on the argument, not whether
          the idea appeared in the stimulus.
        </MustKnow>

        <p>
          For most Strengthen and Weaken problems, the correct choice intentionally adds a new fact that either shores
          up or undermines the author’s claim. That’s the job of those questions: inject relevant information that
          changes how believable the conclusion is.
        </p>

        <p>
          By contrast, in question types like Inference/Must‑Be‑True, the correct answer must follow from the given
          statements alone. There, bringing in outside information is a red flag.
        </p>

        <MustKnow>
          Don’t auto‑reject “new” ideas. Instead, test each option by asking: does this, if true, make the conclusion
          more or less likely? Only for Inference‑style questions should “no new info” be your rule.
        </MustKnow>

        <section aria-labelledby="logic-structure" className="mt-6">
          <h3 id="logic-structure" className="text-xl font-semibold text-white">
            Reading the logic, not the surface
          </h3>
          <p>
            Focus on how the pieces relate, not on repeated words. A quick schematic can help you track the reasoning:
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <Math
              display
              ariaLabel="Argument structure"
              expr={
                String.raw`\text{Background: visits }\uparrow\text{ in the past year}`
              }
            />
            <Math
              display
              ariaLabel="Premise"
              expr={String.raw`\text{Premise: new factor introduced in the same period}`}
            />
            <Math
              display
              ariaLabel="Conclusion"
              expr={String.raw`\therefore\ \text{Conclusion: the new factor caused the increase}`}
            />
          </div>
          <p className="mt-2">
            To weaken, present an alternative cause or show the timing/causal link is doubtful. To strengthen, give
            evidence that ties the new factor directly to the effect.
          </p>
        </section>

        <MCQExample
          number={6}
          prompt="Over the last year, wild boars from the nearby hills have entered the village more frequently. Around the same time, a new bakery opened that produces sweet pastries, which wild boars are known to enjoy. Therefore, the boars must be coming to the village to eat pastries from this bakery. Which of the following, if true, most seriously undermines the conclusion?"
          options={[
            "Twelve months ago, the village introduced a weekly food‑scrap compost site near the hills, and boars prefer food waste to natural forage.",
            "Residents have felt increasingly anxious due to the more frequent boar sightings.",
            "Sightings of wolves in the area have not increased compared to previous years.",
            "Bakery staff have occasionally found pastry wrappers torn open behind the shop.",
            "Sweet pastries are high in sugar and calories, which boars need to maintain body weight.",
          ]}
          correct="Twelve months ago, the village introduced a weekly food‑scrap compost site near the hills, and boars prefer food waste to natural forage."
          solution={
            <>
              <p>
                We need the option that, if true, makes it less likely that pastries from the new bakery explain the
                increased boar visits.
              </p>
              <p>
                Choice A introduces a competing cause: a new, nearby food‑scrap source that boars like even more. If
                that alternative is available right when visits rose, the pastry explanation is weakened.
              </p>
              <p>
                Choice B is about villagers’ emotions—irrelevant to boar motivation. Choice C discusses wolves, which
                doesn’t address why boars come into town. Choice D points to evidence that supports the pastry idea,
                strengthening instead of weakening. Choice E explains why pastries are appealing, but it just elaborates
                on a premise rather than undercutting the conclusion.
              </p>
              <p>Thus, A most seriously weakens the argument.</p>
            </>
          }
        />

        <section aria-labelledby="when-new-info-is-bad">
          <h3 id="when-new-info-is-bad" className="text-xl font-semibold text-white">
            When “new info” is actually a problem
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Inference/Must‑Be‑True: the correct answer must be guaranteed by the stimulus; extra facts are out of
              bounds.
            </li>
            <li>
              Some detail‑retrieval or “according to the passage” prompts: stick to what’s stated or strictly implied.
            </li>
          </ul>
        </section>

        <p className="mt-2">
          Bottom line: measure answer choices by their logical effect on the conclusion. New information is often
          exactly what you need to strengthen or weaken an argument—so don’t discard it just for being new.
        </p>
      </article>
    </main>
  );
}