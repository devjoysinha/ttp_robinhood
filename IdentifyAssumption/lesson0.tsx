import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "2. Identify the Assumption — 2.1 Introduction | Critical Reasoning",
  description:
    "Learn why many GMAT Critical Reasoning problems hinge on a missing premise and how spotting that hidden requirement is the key to solving Assumption questions—and helpful across other verbal tasks.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many Critical Reasoning prompts, the author’s case is missing a key
          piece. That missing piece isn’t just nice to have—it must be true for
          the argument to hold together. If that requirement fails, the logic
          collapses.
        </p>

        <p>
          So, a big part of succeeding in CR is learning to surface what the
          author left unsaid. The better you get at revealing that hidden
          requirement, the faster you’ll separate solid arguments from shaky
          ones.
        </p>

        <MustKnow>
          Many CR arguments depend on an unstated premise. Your goal is to
          uncover that required idea—if it doesn’t hold, the conclusion doesn’t
          follow.
        </MustKnow>

        <p>
          This skill sits at the heart of Assumption questions, where your task
          is to identify the specific claim the argument needs but doesn’t
          explicitly provide. Mastering this habit of mind pays off beyond
          Assumption items—it strengthens your approach to other CR question
          types and even boosts your Reading Comprehension performance.
        </p>

        <p className="text-gray-400">
          Take your time with this chapter. Building a reliable process for
          exposing hidden premises will sharpen your reasoning across the entire
          Verbal section.
        </p>
      </article>
    </main>
  );
}