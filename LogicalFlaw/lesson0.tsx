import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "10.1 Logical Flaw — Introduction | Verbal Reasoning",
  description:
    "An overview of Logical Flaw questions: what the task is, how they relate to Assumption questions, and what to watch for in arguments with faulty reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Logical Flaw questions present a short argument that goes off the rails
          in some way. Your job is to diagnose what went wrong or, in certain
          versions of the task, to attack the argument where it is most
          vulnerable.
        </p>

        <MustKnow>
          In this family of questions, you may be asked to do one of two things:
          1) pick the answer that best describes the mistake in reasoning in the
          passage (pure Logical Flaw), or 2) choose the answer that, if true,
          would undermine the already flawed argument (hybrid Logical
          Flaw/Weaken).
        </MustKnow>

        <p>
          Here’s the good news: a large share of Logical Flaw prompts are really
          just Assumption questions dressed up with tougher language. In many
          arguments, the “flaw” is simply an unproven assumption that claims
          more than the evidence supports. If you’re comfortable spotting
          unstated assumptions, you can transfer that skill directly to this
          topic.
        </p>

        <MustKnow>
          Many Logical Flaw questions are essentially advanced Assumption
          questions. The flaw often lives in the gap between the evidence and
          the conclusion.
        </MustKnow>

        <p>
          Next, we’ll dig into how missing assumptions create flaws and how to
          use that connection to move faster and more accurately on this
          question type.
        </p>

        <section aria-label="What to keep in mind" className="mt-8 space-y-3">
          <h3 className="text-xl font-semibold text-white">What to keep in mind</h3>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>
              Read for the conclusion and the key support; then ask, “What must
              be true for this jump in logic to work?”
            </li>
            <li>
              If the prompt is the hybrid type, use that same weak spot to find
              a statement that would erode the argument.
            </li>
            <li>
              Common flaw patterns include cause–effect mix-ups, overbroad
              generalizations, sampling issues, and confusing necessary with
              sufficient conditions.
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-400">
          Note: This section contains no mathematical notation; KaTeX is not
          required here. When math appears elsewhere, we’ll render it with KaTeX
          for clarity and accessibility.
        </p>
      </article>
    </main>
  );
}