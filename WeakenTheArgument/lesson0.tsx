import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "3.1 Weaken the Argument — Introduction | Critical Reasoning",
  description:
    "Start mastering Weaken the Argument questions: what they ask, why they’re common, and how skills from Assumption questions transfer. Two quick Must‑Know takeaways included.",
};

export default function Page() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12"
      aria-labelledby="page-title"
    >
      <header className="mb-8">
        <h1
          id="page-title"
          className="mt-2 text-2xl font-bold text-white md:text-3xl"
        >
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Among Critical Reasoning prompts, Weaken the Argument questions show up
          frequently. Building confidence with this question type will pay off
          across your exam prep.
        </p>

        <p>
          The core task is straightforward: choose the option that makes the
          author’s case less compelling. In short, your goal is to reduce the
          strength of the conclusion by undermining the support for it.
        </p>

        <MustKnow>
          A Weaken question asks you to pick the choice that lowers the
          argument’s persuasive force. You’re not required to disprove the
          conclusion—only to make it less well‑supported.
        </MustKnow>

        <p>
          A helpful way to approach these items is to think about the
          assumptions the author relies on. The techniques you used for
          Assumption questions carry over: surface the hidden links between
          evidence and conclusion, then look for an answer choice that calls one
          of those links into question.
        </p>

        <MustKnow>
          Weaken the Argument problems are a natural cousin to Assumption
          questions. Identifying and testing the author’s underlying assumptions
          is often the fastest path to the correct answer.
        </MustKnow>

        <p>
          With that framing, you’re ready to see why assumption‑focused thinking
          is so effective for weakening an argument and how to apply it
          consistently on test day.
        </p>
      </article>
    </main>
  );
}