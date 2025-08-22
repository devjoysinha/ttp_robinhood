import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "6.8 Read the Question Carefully | Multi‑Source Reasoning",
  description:
    "Execution Strategy #1 for Multi‑Source Reasoning: avoid avoidable mistakes by reading the stem, statements, and choices deliberately. Learn the most common slip‑ups and a quick checklist to stay precise.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.8 Execution Strategy #1: Read the Question Carefully
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A large share of errors in Multi‑Source Reasoning come from rushing the
          reading. When we don’t slow down for the stem, statements, and
          choices, we miss instructions, overlook scope, or answer a different
          question than the one asked.
        </p>

        <section aria-labelledby="common-slip-ups">
          <h3 id="common-slip-ups" className="text-xl font-semibold text-white">
            Frequent reading slip‑ups
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Skimming the stem, the statements, or the answer choices</li>
            <li>Letting your eyes skip parts of the prompt without noticing</li>
            <li>Answering from memory of the stem instead of rereading it</li>
            <li>Moving on before you’ve fully grasped what a statement implies</li>
          </ul>
        </section>

        <section aria-labelledby="why-stem-matters">
          <h3 id="why-stem-matters" className="text-xl font-semibold text-white">
            Why the stem matters as much as the statements
          </h3>
          <p>
            When a problem gives several statements to analyze, it’s natural to
            dive into them. But the stem often carries instructions or context
            that change how the statements should be interpreted. Missing a
            constraint, definition, or goal in the stem can completely alter the
            correct evaluation of the given statements.
          </p>
        </section>

        <section aria-labelledby="multi-task-stems">
          <h3 id="multi-task-stems" className="text-xl font-semibold text-white">
            Watch for multi‑part tasks
          </h3>
          <p>
            Some prompts ask you to do more than one thing. If you rely on a
            quick first read or on memory, you might complete only the first
            task and forget the second. Always confirm the full “mission” before
            you evaluate or select an answer.
          </p>
        </section>

        <MustKnow>
          Read every part of an MSR question deliberately—the stem, each
          statement, and all answer choices—and make sure you understand the
          consequences of what you read. Precision in reading leads to
          precision in evaluation.
        </MustKnow>

        <section aria-labelledby="do-before-answering">
          <h3
            id="do-before-answering"
            className="text-xl font-semibold text-white"
          >
            Quick checklist before you answer
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Restate the question in your own words. What exactly must be
              determined?
            </li>
            <li>
              Identify all required tasks and any constraints stated in the
              stem.
            </li>
            <li>
              For each statement or tab, ask: what does this actually guarantee?
              What does it not guarantee?
            </li>
            <li>
              Re‑scan the choices to ensure your evaluation aligns with the
              prompt’s instructions and scope.
            </li>
          </ul>
        </section>

        <p>
          Bottom line: treat reading as a deliberate step, not a formality. When
          you read with intention, you prevent unforced mistakes and make better
          use of the information MSR questions provide.
        </p>
      </article>
    </main>
  );
}