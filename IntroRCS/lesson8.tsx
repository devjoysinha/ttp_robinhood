import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.9 Ten Primary RC Question Types | GMAT Verbal",
  description:
    "A concise guide to the ten core GMAT Reading Comprehension question types with quick explanations and a strategy tip, plus a short identification MCQ.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.9 The Ten Primary Types of Reading Comprehension Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Before we examine each question type in depth, it helps to know the
          landscape. GMAT Reading Comprehension questions generally fall into ten
          recurring categories. Recognizing these up front lets you read with a
          clear purpose and anticipate what the test may ask.
        </p>

        <MustKnow>
          Spotting the question type early guides your approach. Match your
          reading and elimination strategy to the task: big‑picture questions
          need the passage’s goal and arc, while detail and inference questions
          demand precise line references and airtight logic.
        </MustKnow>

        <section aria-labelledby="rc-types-heading">
          <h3 id="rc-types-heading" className="text-xl font-semibold text-white">
            The 10 core RC question types
          </h3>

          <ol className="mt-4 list-decimal space-y-4 ps-6">
            <li>
              <p className="font-medium text-gray-100">
                Primary Purpose (Main Idea)
              </p>
              <p>
                The right answer captures the passage’s overarching aim or message.
                Because a purpose question appears with most passages, read to
                synthesize the central takeaway—not just isolated facts.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Passage Structure</p>
              <p>
                Focuses on how the author organizes ideas. Correct choices
                describe the blueprint: how claims are introduced, contrasted,
                supported, and concluded.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Specific Purpose (Function)</p>
              <p>
                Asks why a particular word, sentence, or paragraph is there—
                what role it plays in the author’s reasoning or in the passage’s
                flow.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Author’s Opinion and Tone</p>
              <p>
                Targets the author’s stance or attitude toward a topic, claim,
                or approach. Look for value‑laden words and signaling verbs that
                convey approval, skepticism, or neutrality.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Detail</p>
              <p>
                Tests specific stated facts. No need to memorize: return to the
                relevant lines and match what is written—no more, no less.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Inference</p>
              <p>
                Requires a conclusion that must be true based on the passage,
                though not stated verbatim. The correct answer is a careful,
                conservative deduction—not a leap.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Application</p>
              <p>
                Asks you to carry the passage’s ideas into a new context. The
                best answer applies the same logic or principle to a different,
                but analogous, situation.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Identify the Assumption</p>
              <p>
                Similar to Critical Reasoning: find the unstated premise that a
                passage argument relies on to work. Remove the assumption and
                the argument falters.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Weaken the Argument</p>
              <p>
                Select the choice that undermines, contradicts, or casts doubt on
                an argument in the passage—often by attacking a gap or alternative
                explanation.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-100">Strengthen the Argument</p>
              <p>
                Choose the option that bolsters the passage’s reasoning—by
                supporting a premise, confirming a link, or ruling out a competing
                explanation.
              </p>
            </li>
          </ol>
        </section>

        <MCQExample
          number={1}
          prompt="Which prompt most clearly signals a Passage Structure question?"
          options={[
            "Which statement best summarizes the passage’s main goal?",
            "Which of the following best describes how the author develops the argument across the passage?",
            "Which claim would the author be most likely to disagree with?",
            "According to the passage, which of the following is true about X?",
            "Which option would most weaken the author’s conclusion?"
          ]}
          correct="Which of the following best describes how the author develops the argument across the passage?"
          solution={
            <>
              <p>
                Passage Structure questions ask how the passage is built—the
                sequencing and organization of ideas. Choice B explicitly asks
                how the author develops the argument, matching the structure task.
              </p>
              <p>
                A is a Primary Purpose prompt; D is a Detail prompt; E is a
                Weaken prompt; C leans toward Author’s Opinion.
              </p>
            </>
          }
        />

        <p>
          Up next, we’ll dive into what GMAT Reading Comprehension passages tend
          to cover so you can set expectations before you read.
        </p>
      </article>
    </main>
  );
}