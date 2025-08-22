import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.7 Cause‑and‑Effect Reasoning in Other CR Question Types | Verbal",
  description:
    "Learn how causal logic shows up in Flaw and Evaluate questions, how to test alternative causes and reverse causation, and what evidence moves a causal claim. Includes a quick MCQ and two drill examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.7 Cause‑and‑Effect Reasoning in Other Types of Critical Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Causal thinking isn’t limited to strengthen and weaken prompts. You’ll
          see it embedded in other Critical Reasoning tasks such as Logical Flaw
          and Evaluate the Argument. The same playbook applies: find the claimed
          cause <InlineMath math="C" /> and effect <InlineMath math="E" />,
          then test whether the evidence really ties <InlineMath math="C" /> to{" "}
          <InlineMath math="E" />.
        </p>

        <MustKnow>
          <>
            <p className="mb-2">
              Anchor to the causal core:
              <span className="ms-1 inline-block rounded bg-slate-800 px-1.5 py-0.5 text-xs font-semibold text-sky-200 align-middle">
                cause <InlineMath math="C \rightarrow E" /> effect
              </span>
            </p>
            <ul className="list-disc ps-5 space-y-1">
              <li>
                Correlation isn’t causation. Ask whether{" "}
                <InlineMath math="\mathrm{P}(E\mid C)" /> truly exceeds{" "}
                <InlineMath math="\mathrm{P}(E\mid \neg C)" /> for a causal link:
                <BlockMath math="\mathrm{P}(E\mid C) > \mathrm{P}(E\mid \neg C)" />
              </li>
              <li>
                Check reversals: perhaps{" "}
                <InlineMath math="E \rightarrow C" /> explains the data.
              </li>
              <li>
                Probe third variables <InlineMath math="T" /> that could produce
                both <InlineMath math="C" /> and <InlineMath math="E" />.
              </li>
              <li>
                Prefer designs that isolate the cause (controls, before/after with
                proper baselines, or natural experiments).
              </li>
            </ul>
          </>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Researchers note that neighborhoods with more bike lanes have fewer traffic injuries. They conclude that adding bike lanes reduces injuries. Which would most strengthen the conclusion?"
          options={[
            "In neighborhoods without new bike lanes, overall traffic volume fell last year.",
            "After comparable neighborhoods installed bike lanes, the rate of injuries among cyclists and drivers fell relative to similar neighborhoods that did not install lanes.",
            "Neighborhoods with more bike lanes tend to have higher incomes.",
            "In neighborhoods with many pedestrians, injuries are reported more often.",
            "Bike lanes are more common in cities than in rural areas.",
          ]}
          correct="After comparable neighborhoods installed bike lanes, the rate of injuries among cyclists and drivers fell relative to similar neighborhoods that did not install lanes."
          solution={
            <>
              <p>
                We need evidence that changing the supposed cause (bike lanes)
                moves the effect (injuries), ideally while holding other factors
                steady. A difference‑in‑differences style comparison across{" "}
                “lane” vs “no lane” neighborhoods isolates the causal lever and
                shows injuries decline where lanes were added, not elsewhere.
              </p>
            </>
          }
        />

        <p>
          When the prompt asks you to “evaluate,” look for a test that would
          distinguish between the author’s causal story and a plausible rival
          explanation. For flaw questions, name the specific causal misstep:
          conflating correlation with causation, ignoring a confounder, or
          reversing the relationship.
        </p>

        <ExampleCard
          number={2}
          title="Spot the Flaw: Correlation vs. Causation"
          statements={[
            "A streaming service reports: “Cities with more subscribers have more live‑music venues; therefore, our service causes growth in the live‑music scene.” Which option best describes the flaw?",
            "A) The argument assumes all venues are profitable.",
            "B) It treats a mere correlation between subscribers and venues as proof that subscribers cause venue growth.",
            "C) It assumes no city has more than one venue.",
            "D) It concludes about cities based on a sample of rural towns.",
            "E) It assumes musicians prefer one streaming platform over another.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The evidence is correlational: more subscribers and more venues
                co‑occur. The conclusion jumps to a causal claim without
                ruling out third variables (e.g., population, income, music
                tourism) or a reversal (thriving music scenes may attract more
                subscribers). That is a classic correlation‑to‑causation flaw.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Evaluate the Argument: What Matters Most?"
          statements={[
            "A supplement company claims its new formula causes better sleep because customers who buy it report falling asleep faster than non‑customers. Which question would be most helpful to evaluate this claim?",
            "A) Do customers like the supplement’s flavor?",
            "B) Do customers also use habits known to improve sleep (e.g., consistent bedtimes, reduced screen time) at higher rates than non‑customers?",
            "C) Is the supplement sold in multiple flavors?",
            "D) Do customers read online reviews before purchasing?",
            "E) How long has the company been in business?",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We need to separate the supplement (<InlineMath math="C" />)
                from competing explanations. If buyers also use more effective
                sleep hygiene, that confounder (<InlineMath math="T" />) could
                produce the observed effect (<InlineMath math="E" />) without{" "}
                <InlineMath math="C" /> being causal. Knowing whether{" "}
                <InlineMath math="T" /> differs between groups is crucial to
                evaluating the claim.
              </p>
            </>
          }
        />

        <MustKnow>
          Big picture: in any CR task, treat a causal claim as a hypothesis to
          stress‑test. Ask whether changing the cause actually shifts the effect,
          whether an alternative cause could explain the pattern, or whether the
          direction might be reversed. Pick answers that tighten or loosen those
          links explicitly.
        </MustKnow>

        <p className="text-sm text-gray-400">
          Tip: When you see a causal conclusion, try to imagine a quick experiment
          you’d run. The answer that best approximates that experiment usually wins.
        </p>
      </article>
    </main>
  );
}