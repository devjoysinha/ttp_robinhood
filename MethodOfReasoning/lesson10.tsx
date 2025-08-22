import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.5 Incorrect Answers in Method of Reasoning Questions | Critical Reasoning",
  description:
    "Learn the most common trap answers in Method of Reasoning questions and why they look persuasive. Includes a targeted multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5 Spotting Incorrect Answers in Method of Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Method of Reasoning questions ask you to describe how an author builds an argument, not to judge whether the conclusion is true. The wrong choices often sound attractive because they echo the topic or contain pieces that feel familiar, yet they don’t match the author’s actual moves. If you guess randomly among{" "}
          <InlineMath math="n" /> choices, your chance is{" "}
          <InlineMath math="P(\\text{correct})=\\tfrac{1}{n}" />—but you can do far better by matching structure, not content.
        </p>

        <MustKnow>
          Stay laser‑focused on what the author actually does. A correct description:
          - reflects every essential step the author takes (no more, no less),
          - uses accurate logical labels (e.g., premise, conclusion, counterexample, alternative explanation),
          - does not introduce ideas or evidence that the author never used.
        </MustKnow>

        <section aria-labelledby="common-traps">
          <h3 id="common-traps" className="text-xl font-semibold text-white">
            Common trap answers and why they tempt us
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Adds a new element: Mentions surveys, studies, definitions, or facts that were never in the argument. Feels “smart,” but it’s not a match.
            </li>
            <li>
              Partly correct, but incomplete: Captures one move (e.g., offers an alternative cause) while omitting another crucial move (e.g., rules out a competing cause).
            </li>
            <li>
              Describes a method the argument could have used, but didn’t: For instance, “draws an analogy” when no analogy appears.
            </li>
            <li>
              Close look‑alike: Uses labels that resemble the author’s method but slightly misstate it (e.g., “generalizes from a sample” vs. actually “eliminates a hypothesis with a counterexample”).
            </li>
            <li>
              Content trap: Talks about the topic (healthcare, scooters, taxes) instead of the logical steps.
            </li>
            <li>
              Reverses roles: Calls a premise a conclusion, or treats an objection as supporting evidence.
            </li>
            <li>
              Extreme language: Overstates what the author concluded (always, never, only) when the argument was modest or conditional.
            </li>
            <li>
              Scope shift: Subtly changes the group, timeframe, or standard compared with the original claim.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt={
            'Editorial: City officials blame a rise in bicycle accidents on e‑scooters. However, incident reports show that most crashes happened at intersections where traffic signals were recently re‑timed to shorten pedestrian crossing windows. Thus, e‑scooters are unlikely to be the primary cause of the increase.'
          }
          options={[
            "Infers a universal rule from a handful of examples.",
            "Rejects one proposed cause by pointing to a different cause that better fits the observed pattern.",
            "Concludes that a policy failed merely because it produced unintended consequences.",
            "Equates correlation with causation without considering alternatives.",
            "Bases the conclusion on a survey of e‑scooter riders.",
          ]}
          correct="Rejects one proposed cause by pointing to a different cause that better fits the observed pattern."
          solution={
            <>
              <p>
                The author challenges the explanation “e‑scooters caused the increase” by presenting records that align the spike with changed traffic signals, not scooters. That is, the argument displaces one causal story with a rival that better matches the data.
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Choice B correctly states the method: it undermines a proposed cause by identifying a stronger alternative that explains the pattern.
                </li>
                <li>
                  Choice A is a classic trap: there is no overgeneralization from a tiny sample.
                </li>
                <li>
                  Choice C mischaracterizes the move; the argument isn’t evaluating a policy’s effectiveness.
                </li>
                <li>
                  Choice D claims the author commits a correlation→causation error; instead, the author compares competing causes.
                </li>
                <li>
                  Choice E introduces a new element (a survey) not mentioned in the stimulus.
                </li>
              </ul>
            </>
          }
        />

        <section aria-labelledby="how-to-verify">
          <h3 id="how-to-verify" className="text-xl font-semibold text-white">
            Quick checklist to verify a candidate answer
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Underline the author’s conclusion and label each supporting step in order.</li>
            <li>Match those steps to the answer’s labels. Do all essential moves appear? Are any extra moves added?</li>
            <li>Scan for role reversals: Does the choice flip premise/conclusion or evidence/objection?</li>
            <li>Watch the language: Does the choice exaggerate the claim or shift the scope?</li>
          </ul>
        </section>

        <p>
          Bottom line: describe the reasoning, not the topic. If an answer precisely mirrors the argument’s structure—no extra pieces, no missing steps—you’ve found your match.
        </p>
      </article>
    </main>
  );
}