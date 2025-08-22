import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.5 How Many Reading Comprehension Questions Are on the GMAT? | Verbal",
  description:
    "Learn how GMAT Reading Comprehension questions are grouped and how many to expect on test day. Quick summary and takeaway.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.5 How Many Reading Comprehension Questions Are on the GMAT?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Reading Comprehension questions on the GMAT appear in sets tied to specific passages rather than as standalone items. In a typical exam, you&apos;ll encounter around four passages, and each passage usually comes with three or four questions. In total, you should plan for roughly 12 to 14 Reading Comprehension questions.
        </p>

        <MustKnow>
          Expect approximately four RC passages on the GMAT, each paired with three or four questions. That means you will generally face about 12–14 Reading Comprehension questions overall.
        </MustKnow>

        <p>
          Up next, we&apos;ll look at how long these passages tend to be and what that means for your pacing strategy.
        </p>
      </article>
    </main>
  );
}