import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
    strict: "warn",
    trust: false,
  });
  return (
    <span
      className="inline-block align-middle"
      role="img"
      aria-label={ariaLabel || "math expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "6.4.5 Weaken Causation: Effect Without the Cause | Critical Reasoning",
  description:
    "Learn how to weaken a cause-and-effect claim by showing the effect occurs even when the proposed cause is absent. Includes a quick illustrative example and a GMAT-style MCQ with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">6. Cause and Effect Arguments</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4.5 Weakening Causation by Showing the Effect Occurs Without the Cause
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One reliable way to challenge a causal conclusion is to demonstrate that the supposed effect still shows up when
          the proposed cause is missing. In symbols: showing{" "}
          <Math expr="E" ariaLabel="E" /> occurs while{" "}
          <Math expr="\neg C" ariaLabel="not C" /> holds undermines the claim{" "}
          <Math expr="C \Rightarrow E" ariaLabel="C implies E" /> is responsible for the observations.
        </p>

        <MustKnow>
          To weaken “C causes E,” supply a scenario or evidence where the effect E happens without the cause C. Formally,
          provide <Math expr="\neg C \,\wedge\, E" ariaLabel="not C and E" />. This suggests a different driver may be at
          work and calls the original causal story into question.
        </MustKnow>

        <p>
          Note that showing the effect without the proposed cause does not prove the cause is never relevant; causes can be
          non‑exclusive or one of many contributors. Nevertheless, such evidence is a strong strike against the specific
          claim that C is what produced E in the situation at hand.
        </p>

        <ExampleCard
          number={17}
          title="Illustration: Medical genetics"
          statements={[
            "Researchers investigating a rare metabolic condition observed 31 affected relatives in one extended family. Genetic screening showed that most of them shared a particular mutation in a metabolism-related gene. The team concluded that the mutation causes the disorder.",
            "Which fact would most seriously undercut that conclusion?",
            "(Correct) Follow-up tests revealed that roughly one-third of the affected relatives do not carry the mutation."
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                The argument infers causation from co‑occurrence: “Many patients have the mutation, therefore the mutation
                causes the disease.” If a substantial portion of affected individuals lack the mutation, then the same
                effect appears without the proposed cause (
                <Math expr="\neg C \,\wedge\, E" ariaLabel="not C and E" />
                ). That directly weakens the causal claim.
              </p>
            </>
          }
        />

        <MCQExample
          number={18}
          prompt={
            "By 1989, corporate crime in Verdantia had been increasing for over twenty years. The government then passed laws enabling stiffer penalties— including prison terms for executives and larger fines for firms. In the years that followed, the rate of corporate crime fell, so officials declared the legislation successful. Which option most undermines the force of that evidence?"
          }
          options={[
            "After the law was passed, only a small number of executives actually received prison sentences for corporate offenses.",
            "Verdantia’s courts were overwhelmed by a surge in cases, which made trials proceed more slowly.",
            "Once the tougher penalties began, overall crime in Verdantia decreased.",
            "Studies indicate that harsh penalties are not the most effective way to reduce corporate wrongdoing.",
            "Neighboring countries that did not pass comparable laws saw corporate crime drop sharply starting around 1990."
          ]}
          correct="Neighboring countries that did not pass comparable laws saw corporate crime drop sharply starting around 1990."
          solution={
            <>
              <p className="mb-2">
                Structure: proposed cause{" "}
                <Math expr="C" ariaLabel="C" /> = legislation; observed effect{" "}
                <Math expr="E" ariaLabel="E" /> = decline in corporate crime. The conclusion assumes “after, therefore
                because” (post hoc).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Choice E shows the same effect in places lacking the proposed cause (
                  <Math expr="\neg C \,\wedge\, E" ariaLabel="not C and E" />
                  ). If nearby countries also experienced steep declines without the law, another factor may explain the
                  trend, weakening the causal story for Verdantia. This is the best underminer.
                </li>
                <li>
                  A: Few prison terms does not negate the drop in corporate crime; fines or deterrence could still be
                  relevant. Irrelevant to the causal link.
                </li>
                <li>
                  B: Slower trials say little about whether the policy caused the decline.
                </li>
                <li>
                  C: The overall crime rate is a different metric; the claim concerns corporate crime specifically.
                </li>
                <li>
                  D: Showing there might be a better policy does not show this policy did not work.
                </li>
              </ul>
              <p className="mt-2">Answer: E.</p>
            </>
          }
        />

        <MustKnow>
          Quick checklist to weaken “C causes E”:
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Show E without C (<Math expr="\neg C \,\wedge\, E" ariaLabel="not C and E" />).
            </li>
            <li>Provide a plausible alternative driver for E.</li>
            <li>Highlight timing or comparison evidence that breaks the causal link.</li>
          </ul>
        </MustKnow>

        <p>
          Bottom line: causal claims live or die on comparisons. If the effect shows up where the cause is absent, the
          original “C did it” story becomes doubtful.
        </p>
      </article>
    </main>
  );
}