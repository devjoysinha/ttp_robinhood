import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "12.4.1 Boldface Question Stems | Verbal Reasoning",
  description:
    "See the common ways GMAT Boldface question stems are phrased and what they ask you to do. Includes a quick must‑know tip and examples of typical stems.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.4.1 Question Stems for Boldface Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Boldface questions center on identifying how the highlighted (bold)
          statements function within an argument. The stem will ask you to match
          each bold portion to its role—such as evidence, claim, counterclaim,
          background, or conclusion.
        </p>

        <p className="mt-4">
          Here are representative ways these stems are commonly worded:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            In the argument, what roles are played by the two statements shown
            in bold?
          </li>
          <li>
            In the argument above, which description best captures the function
            of the boldfaced part?
          </li>
          <li>
            In the ecologist’s reasoning, which roles do the two boldfaced
            portions serve?
          </li>
          <li>
            Which of the following, if true, would serve the same role in the
            argument as the boldfaced statement?
          </li>
        </ul>

        <MustKnow>
          When a stem references boldfaced portions, your task is to label the
          role each bold segment plays in the argument. Think in terms of
          structure: premise versus conclusion, support versus challenge,
          author’s position versus an opposing view.
        </MustKnow>

        <p>
          Up next, we’ll focus on the most valuable skill for tackling Boldface
          problems efficiently: pinpointing conclusions.
        </p>
      </article>
    </main>
  );
}