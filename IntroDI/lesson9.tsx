import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.10 Interacting with On‑Screen DI Questions | Data Insights",
  description:
    "Practical tips for working with Data Insights questions on a computer: arrange the on‑screen calculator, sort tables, and switch tabs efficiently. Includes a quick timing note rendered with KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.10 Get Comfortable Working with DI Questions on the Screen
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To perform well on Data Insights, you should be at ease navigating the
          interface of each question type. The smoother you are with the on‑screen
          tools and layouts, the more attention you can devote to reasoning and
          accuracy.
        </p>

        <p>
          Aim to move through a question fluidly—expand, collapse, sort, or switch
          views without hesitation. That comfort reduces friction and helps you stay
          focused on the data rather than the controls.
        </p>

        <MustKnow>
          Make a habit of practicing the interaction patterns for every DI format.
          Familiarity with the on‑screen experience pays off in speed and confidence.
        </MustKnow>

        <section aria-labelledby="di-checklist" className="space-y-4">
          <h3 id="di-checklist" className="text-xl font-semibold text-white">
            Quick interaction checklist
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Position the on‑screen calculator so it never blocks content. A good
              default is to drag it to the far right of the question area. It remains
              handy while keeping the prompt and choices fully visible.
            </li>
            <li>
              For Table Analysis, use the column sort feature to surface trends,
              boundaries, and outliers. Sorting intelligently often turns a complex
              scan into a quick read.
            </li>
            <li>
              For Multi‑Source Reasoning, practice switching between tabs rapidly.
              Your goal is to verify or refute a claim by hopping among sources with
              minimal overhead.
            </li>
          </ul>
        </section>

        <section aria-labelledby="timing-note" className="space-y-3">
          <h3 id="timing-note" className="text-xl font-semibold text-white">
            A quick timing note
          </h3>
          <p>
            If you like to think in seconds, remember that{" "}
            <InlineMath>1\text{ min }30\text{ s}=90\text{ s}</InlineMath>. Pick a
            target pace that keeps you moving while leaving time to confirm your
            reasoning.
          </p>
        </section>

        <p>
          Bottom line: rehearsal with the interface is part of your prep. The more
          you practice these actions now, the less you’ll think about them on test
          day—and the more bandwidth you’ll have for the actual analysis.
        </p>
      </article>
    </main>
  );
}