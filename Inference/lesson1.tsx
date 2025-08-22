import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.2 Recognizing Inference Questions | Critical Reasoning",
  description:
    "Learn how to spot inference question stems in GMAT Critical Reasoning. See the telltale wording, a quick logic refresher, and practice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2 How to Recognize Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inference questions present a stimulus and then ask which option is
          guaranteed by that information. Your task is to choose the statement
          that must be true if every part of the stimulus is true—no extra
          assumptions allowed.
        </p>

        <MustKnow>
          Inference stems ask for what is logically forced by the passage. Key
          phrases include “must be true,” “can be properly inferred,” “logically
          follows,” or “is supported by the passage.” Avoid choices that
          introduce new claims, rely on assumptions, or merely sound plausible.
        </MustKnow>

        <section aria-labelledby="logic-refresh">
          <h3 id="logic-refresh" className="text-xl font-semibold text-white">
            Mini logic refresher
          </h3>
          <p className="mt-2">
            If a statement guarantees another, we can think of it as:
          </p>
          <div className="rounded-md bg-slate-800/50 p-4">
            <BlockMath math={"A \\Rightarrow B \\quad\\text{and}\\quad A \\;\\therefore\\; B"} />
          </div>
          <p className="mt-2">
            Read this as: if A implies B and A is true, then B must be true. In
            inference questions, you’re selecting the option that is entailed by
            the given statements. Symbolically, the passage{" "}
            <InlineMath math={"\\models"} /> the correct answer.
          </p>
        </section>

        <section aria-labelledby="common-stems">
          <h3 id="common-stems" className="text-xl font-semibold text-white">
            Common inference stems (rephrased)
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <em>Which claim is guaranteed by the statements above?</em>
            </li>
            <li>
              <em>
                If the statements are all accurate, which conclusion follows?
              </em>
            </li>
            <li>
              <em>Which of the following must also be true?</em>
            </li>
            <li>
              <em>Which fact is directly supported by the passage?</em>
            </li>
            <li>
              <em>
                Which of the following can be properly concluded from the
                information?
              </em>
            </li>
          </ul>
          <p className="mt-2">
            Be careful not to confuse these with other CR tasks, such as
            strengthen, weaken, or assumption questions, which ask about what{" "}
            <span className="italic">could</span> make an argument better or
            worse, not what must be true.
          </p>
        </section>

        <MCQExample
          number={21}
          prompt="All city buses are electric. Some vehicles on Main Street are city buses. Which statement must be true?"
          options={[
            "Some vehicles on Main Street are electric.",
            "All vehicles on Main Street are electric.",
            "Some electric vehicles are buses on Side Street.",
            "All electric vehicles are buses.",
            "No conclusion can be drawn.",
          ]}
          correct="Some vehicles on Main Street are electric."
          solution={
            <>
              <p>
                From “All city buses are electric” and “Some vehicles on Main
                Street are city buses,” we can apply{" "}
                <InlineMath math={"A \\Rightarrow B,\\; A \\;\\therefore\\; B"} />.
                Let A be “is a city bus on Main Street,” and B be “is electric.”
                Therefore, those buses are electric, so at least some Main
                Street vehicles are electric.
              </p>
              <p>
                The stronger claims (e.g., “all vehicles on Main Street are
                electric”) go beyond the information given and are not required
                by the premises.
              </p>
            </>
          }
        />

        <ExampleCard
          number={22}
          title="Stem recognition drill"
          statements={[
            "Which of the following must be true on the basis of the statements?",
            "Which of the following, if true, most strengthens the argument?",
            "If the statements above are accurate, which conclusion logically follows?",
            "The passage supports which of the following claims?",
            "Which statement is directly implied by the information above?",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                Four of these are classic inference stems: they ask for what is{" "}
                <strong>required</strong> by the text (must be true, logically
                follows, supported, directly implied).
              </p>
              <p>
                Option B is not an inference stem. It’s a{" "}
                <strong>strengthen</strong> task, which asks for a new fact that
                would make the argument more convincing—not something already
                guaranteed by the passage.
              </p>
            </>
          }
        />

        <section aria-labelledby="checklist">
          <h3 id="checklist" className="text-xl font-semibold text-white">
            Quick checklist for inference questions
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>Confirm the stem asks for what must be true or follows.</li>
            <li>
              Treat stimulus statements as facts. Do not add new assumptions.
            </li>
            <li>
              Prefer the most conservative option that is fully supported by the
              text.
            </li>
            <li>
              Eliminate answers that are broader, stronger, or bring in new
              ideas.
            </li>
            <li>
              When helpful, translate key relationships into simple logic (e.g.,{" "}
              <InlineMath math={"A \\Rightarrow B"} />).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}