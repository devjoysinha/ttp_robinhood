import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.1 RC Introduction: Detail, Inference, Application, Assumption, Weaken, Strengthen",
  description:
    "An overview of the detail-focused GMAT Reading Comprehension question types—Detail, Inference, Application, Assumption, Weaken, and Strengthen—plus a quick identification drill.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.1 Introduction: Detail, Inference, Application, Assumption, Weaken, Strengthen
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Previously, you practiced approaching passages with a big‑picture mindset and learned how to
          interpret structure and purpose. In this section, we turn to question types that focus on the
          passage’s specifics and on what logically follows from those specifics.
        </p>

        <MustKnow>
          Success on these problems comes from two habits:
          1) locate the exact spot in the passage that answers the question, and
          2) confirm the choice using the author’s words and logic—never outside knowledge.
        </MustKnow>

        <p className="leading-relaxed">
          We’ll work through six detail‑oriented families:
        </p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Detail — Find a stated fact or paraphrase anchored in the text.</li>
          <li>Inference — Deduce what must be true given the passage, without adding assumptions.</li>
          <li>Application — Extend the passage’s idea to a new but consistent scenario.</li>
          <li>Assumption — Identify a gap‑filler that the author relies on implicitly.</li>
          <li>Weaken — Spot new information that undermines the author’s reasoning.</li>
          <li>Strengthen — Find information that bolsters the author’s logic.</li>
        </ul>

        <p>
          For reference, we can think of this set of types as{" "}
          <MathInline
            expr="T=\{\text{Detail},\ \text{Inference},\ \text{Application},\ \text{Assumption},\ \text{Weaken},\ \text{Strengthen}\},\quad |T|=6"
            ariaLabel="Set T equals Detail, Inference, Application, Assumption, Weaken, Strengthen, cardinality 6"
          />
          . As you practice, you’ll reinforce the broader RC skills you’ve built while adding targeted
          tactics for each type above.
        </p>

        <MCQExample
          number={301}
          prompt="Which question stem most clearly signals an Inference question?"
          options={[
            "According to the passage, which of the following is stated as a reason for the change?",
            "Which of the following can be reasonably concluded from the information in the passage?",
            "In paragraph 2, the phrase “critical shift” most nearly means:",
            "Which of the following, if true, would most directly weaken the author’s claim?",
            "The author’s primary purpose in the passage is to:",
          ]}
          correct="Which of the following can be reasonably concluded from the information in the passage?"
          solution={
            <>
              <p>
                Inference questions ask what must be true based on the passage. Phrases like
                “can be reasonably concluded” or “is best supported by the passage” are classic markers.
              </p>
              <p>
                Choice B contains that language, so it’s the Inference stem. The other options cue different
                types: A is Detail (it asks what is stated), C is Vocab‑in‑Context, D is Weaken, and E is
                Main Idea/Purpose.
              </p>
            </>
          }
        />

        <p>
          In the lessons that follow, we’ll examine each type in turn—starting with Detail questions—so
          you can recognize the stems quickly, locate the right text fast, and evaluate choices with confidence.
        </p>
      </article>
    </main>
  );
}