import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.2.2 Logical Flaw vs. Weaken the Argument | Critical Reasoning",
  description:
    "Understand the crucial difference between pure Logical Flaw questions and Weaken the Argument questions. Learn why Weaken answers introduce new information while Logical Flaw answers diagnose a defect within the argument itself.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.2 Telling Logical Flaw Questions Apart from Weaken Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Logical Flaw prompts can look a lot like Weaken the Argument prompts at
          first glance. Yet they ask for very different things. Getting this
          distinction right prevents you from chasing the wrong type of answer.
        </p>

        <p>
          In Weaken the Argument questions, the credited response typically
          introduces new facts that, if true, take support away from the
          conclusion. You’re allowed—indeed expected—to bring in outside
          information that undermines the author’s reasoning.
        </p>

        <MustKnow>
          Weaken the Argument questions usually rely on new, external evidence
          that makes the conclusion less believable. The correct answer
          frequently adds information not stated in the stimulus.
        </MustKnow>

        <p>
          Pure Logical Flaw questions, on the other hand, are diagnostic. You
          are not trying to damage the conclusion by adding new facts. Instead,
          you must identify what’s wrong with the reasoning as written. The
          answer choice should name or describe the mistake built into the
          argument itself.
        </p>

        <MustKnow>
          For a pure Logical Flaw question, do not import outside facts. Your
          task is to analyze only the given argument and pinpoint the error in
          how the author moves from evidence to conclusion.
        </MustKnow>

        <p>
          Said differently: Weaken asks you to make the argument worse with
          additional information; Logical Flaw asks you to label the defect that
          already exists. Keeping that boundary clear will save time and improve
          accuracy.
        </p>

        <MCQExample
          number={1}
          prompt="Which statement best captures the key difference between a pure Logical Flaw question and a Weaken the Argument question?"
          options={[
            "Both require adding new evidence that contradicts the conclusion.",
            "Logical Flaw requires naming the reasoning error within the stimulus; Weaken often introduces new facts that reduce the argument’s support.",
            "Logical Flaw focuses on real‑world plausibility; Weaken focuses on formal logic only.",
            "Logical Flaw and Weaken both prohibit using outside information.",
            "Logical Flaw asks for an alternative conclusion; Weaken asks for the original conclusion to be restated.",
          ]}
          correct="Logical Flaw requires naming the reasoning error within the stimulus; Weaken often introduces new facts that reduce the argument’s support."
          solution={
            <>
              <p>
                In Weaken, the correct answer frequently provides additional,
                previously unstated information that undermines the link between
                evidence and conclusion. In a pure Logical Flaw question, the
                correct answer describes what is wrong with the reasoning as
                presented—no new facts required. Thus, the second choice is
                correct.
              </p>
            </>
          }
        />

        <p>
          Moving forward, you may also see hybrid prompts that blend flaw
          language with a weaken task. For those, confirm exactly what the
          question asks: Are you diagnosing a specific error in the stimulus, or
          are you selecting a new fact that would erode the argument’s support?
        </p>
      </article>
    </main>
  );
}