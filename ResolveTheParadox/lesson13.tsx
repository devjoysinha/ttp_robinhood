import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.8.6 Paradox Wrong Answer Type 6 | Critical Reasoning",
  description:
    "Learn to spot a tricky wrong answer in Resolve-the-Paradox questions: choices that talk about the facts but don’t actually reconcile them. Includes a worked example and a practice MCQ with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8.6 Wrong Answer Type 6: Mentions the Facts but Doesn’t Reconcile Them
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One of the most deceptive traps in Resolve‑the‑Paradox questions is an answer
          choice that talks about the very facts creating the tension yet never shows how
          those facts can both be true. Because the language overlaps with the stimulus,
          this option can feel “on topic,” but it still leaves the contradiction unresolved.
        </p>

        <MustKnow>
          In a paradox question, the correct answer must bridge the gap between the two
          facts. Beware of choices that merely reference the same ideas from the prompt
          without explaining how the seemingly conflicting statements can coexist.
        </MustKnow>

        <section aria-labelledby="golado-example" className="space-y-4">
          <h3 id="golado-example" className="text-xl font-semibold text-white">
            Illustrative Mini‑Example
          </h3>
          <p>
            A country launches a program awarding large prizes and public recognition to
            researchers who make breakthroughs. Surprisingly, in the years after the launch,
            the rate of major discoveries falls.
          </p>

          <ExampleCard
            number={1}
            title="Why this looks tricky"
            statements={[
              "(Wrong answer that talks without resolving) The government never told scientists that the program’s goal was to speed up discovery.",
              "(Correct answer) Strong competitive incentives sometimes cause researchers to share far less information that could lead to breakthroughs.",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  The <em>paradox</em> is straightforward: more rewards for breakthroughs,
                  yet fewer breakthroughs. A valid explanation must show how a new condition
                  introduced by the program could push discovery rates down.
                </p>
                <p>
                  The first statement mentions the program and discovery rates, but it
                  doesn’t explain why discovery would slow. Not advertising the program’s
                  intent doesn’t create a mechanism for decreased output.
                </p>
                <p>
                  The second statement supplies a clear mechanism: intense competition
                  can reduce collaboration and information sharing. Less sharing → fewer
                  breakthroughs → a slower pace overall. That reconciles the two facts.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="what-to-explain" className="space-y-2">
          <h3 id="what-to-explain" className="text-xl font-semibold text-white">
            Keep your eye on what must be explained
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>Pin down exactly which “surprising” outcome needs explaining.</li>
            <li>Read each option asking, “Does this actually resolve the conflict?”</li>
            <li>
              Eliminate answers that only echo the facts or introduce details with no
              causal path back to the paradox.
            </li>
          </ul>
        </section>

        <MustKnow>
          A wrong choice might feel relevant because it repeats words from the prompt.
          Relevance isn’t enough—demand a concrete mechanism that makes the two facts
          fit together.
        </MustKnow>

        <section aria-labelledby="practice-mcq" className="space-y-4">
          <h3 id="practice-mcq" className="text-xl font-semibold text-white">
            Practice: Resolve the Paradox
          </h3>

          <MCQExample
            number={18}
            prompt={
              <>
                <p>
                  In controlled studies, exposing trees to elevated levels of CO₂ makes
                  them grow faster than usual. Yet in temperate forests, as atmospheric
                  CO₂ has risen, overall tree growth has slowed relative to normal.
                </p>
                <p>Which option best accounts for this surprising outcome?</p>
              </>
            }
            options={[
              "Higher CO₂ correlates more strongly with increased tree growth in tropical forests than in temperate ones.",
              "Rising temperatures driven by higher atmospheric CO₂ have reduced the water available to trees in temperate regions.",
              "Over time, plants acclimate to elevated CO₂, and their growth rates return to typical levels.",
              "In places with low soil nitrogen, trees struggle to grow.",
              "Some tree species respond to added CO₂ with larger growth gains than others.",
            ]}
            correct="Rising temperatures driven by higher atmospheric CO₂ have reduced the water available to trees in temperate regions."
            solution={
              <>
                <p>
                  We must reconcile two facts: experimental CO₂ boosts growth, but real‑world
                  temperate forests are growing more slowly as CO₂ rises. The correct answer
                  will introduce a factor present in the real world that counteracts the
                  laboratory effect.
                </p>

                <p>
                  <strong>Choice B (Correct):</strong> Higher CO₂ leads to higher temperatures,
                  which in turn reduce water availability in temperate zones. With less water,
                  trees grow more slowly. This causal chain explains how growth can decrease
                  despite elevated CO₂: the water limitation outweighs the CO₂ benefit.
                  For reference, you can think of it as a chain:
                  {" "}
                  <span aria-label="CO two">CO₂</span> ↑ → temperature ↑ → available water ↓ → growth ↓.
                </p>

                <p>
                  <strong>Choice A:</strong> Talks about where CO₂ correlates more strongly
                  with growth but doesn’t address why growth is <em>lower than normal</em> in
                  temperate forests. It describes, not resolves.
                </p>
                <p>
                  <strong>Choice C:</strong> Suggests growth returns to normal after acclimation,
                  but the observed pattern is slower‑than‑normal growth, not merely a reversion
                  to baseline.
                </p>
                <p>
                  <strong>Choice D:</strong> Low nitrogen can impede growth, but we aren’t told
                  nitrogen levels changed alongside CO₂. Without a link to the paradox, it
                  doesn’t resolve it.
                </p>
                <p>
                  <strong>Choice E:</strong> Species differ in response to CO₂, but variation
                  in responsiveness doesn’t explain a net decline below normal.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: when you face a paradox, don’t be swayed by answers that merely
          reference the same nouns and phrases as the prompt. The right choice supplies
          a concrete cause or condition that makes both facts compatible.
        </p>
      </article>
    </main>
  );
}