"use client";

import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "4.4 Strategy for Strengthen Questions | Critical Reasoning",
  description:
    "A concise, step‑by‑step plan for GMAT Critical Reasoning Strengthen questions: find the conclusion, analyze support, eliminate weakeners and irrelevancies, and pick the choice that most clearly boosts the argument.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.4 A Practical Strategy for Strengthen-the-Argument Questions
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section aria-labelledby="intro">
          <h3 id="intro" className="text-xl font-semibold text-white">
            Why a clear process matters
          </h3>
          <p className="mt-2">
            Strengthen questions ask you to add the single piece of information
            that makes the author’s conclusion more convincing. In other words,
            you’re looking for a choice that increases the support for the
            claim—not just any true statement, and not something that fixes a
            different argument.
          </p>

          <div className="mt-4">
            <InlineMath math={`\\text{premises} + \\text{answer choice} \\Rightarrow \\text{stronger support for conclusion}`} />
          </div>

          <MustKnow>
            To strengthen an argument, you must first understand it precisely.
            If the conclusion is even slightly misidentified, tempting—but wrong—choices
            become much harder to avoid.
          </MustKnow>
        </section>

        <section aria-labelledby="step-1" className="space-y-3">
          <h3 id="step-1" className="text-lg font-semibold text-white">
            Step 1 — Read for meaning before anything else
          </h3>
          <p>
            Start by reading the stimulus carefully. Capture the core point,
            the tone, and any key details. Without a solid grasp of what’s
            being argued, it’s impossible to judge what would help.
          </p>
        </section>

        <section aria-labelledby="step-2" className="space-y-3">
          <h3 id="step-2" className="text-lg font-semibold text-white">
            Step 2 — Confirm the task: Help vs. Hurt
          </h3>
          <p>
            Check the question stem to be sure you’re strengthening (not weakening).
            A quick mental label helps:
          </p>
          <ul className="ml-5 list-disc">
            <li>
              Strengthen: add support
              {" "}
              <InlineMath math={`\\Rightarrow`} />
              {" "}
              conclusion more likely.
            </li>
            <li>
              Weaken: undermine support
              {" "}
              <InlineMath math={`\\Rightarrow`} />
              {" "}
              conclusion less likely.
            </li>
          </ul>
        </section>

        <section aria-labelledby="step-3" className="space-y-3">
          <h3 id="step-3" className="text-lg font-semibold text-white">
            Step 3 — Pinpoint the exact conclusion
          </h3>
          <p>
            Identify the conclusion word‑for‑word in your own terms. Many
            trap answers help a nearby claim or a stronger/looser version of
            the conclusion. Knowing the precise claim lets you ignore those traps.
          </p>

          <MustKnow>
            Locking down the exact conclusion is often the single most important
            move in Strengthen questions.
          </MustKnow>
        </section>

        <section aria-labelledby="step-4" className="space-y-3">
          <h3 id="step-4" className="text-lg font-semibold text-white">
            Step 4 — Map how the author supports that conclusion
          </h3>
          <p>
            Determine what evidence (if any) the author uses and how it’s
            supposed to connect. In some prompts, there’s essentially no real
            support—so the correct answer often supplies a helpful premise.
            In others, you’re reinforcing the link between existing premises
            and the conclusion.
          </p>
        </section>

        <section aria-labelledby="step-5" className="space-y-3">
          <h3 id="step-5" className="text-lg font-semibold text-white">
            Step 5 — Clear out weakeners and obvious non‑effects
          </h3>
          <p>
            Typically, only two choices are serious contenders. The rest usually:
          </p>
          <ul className="ml-5 list-disc">
            <li>make the argument worse (weakeners), or</li>
            <li>do little to nothing (irrelevant/no impact).</li>
          </ul>
          <p>
            Read all five choices before eliminating. If you can’t show that a
            choice clearly does nothing, keep it for a second pass rather than
            discarding it prematurely.
          </p>
        </section>

        <section aria-labelledby="step-6" className="space-y-3">
          <h3 id="step-6" className="text-lg font-semibold text-white">
            Step 6 — Select the choice that most clearly boosts the support
          </h3>
          <p>
            Between the remaining finalists, choose the option that most
            directly increases the credibility of the conclusion. The difference
            often turns on a single word or scope detail.
          </p>

          <MustKnow>
            The correct Strengthen answer can introduce new information. “New”
            is not the same as “out of scope” if it meaningfully raises the
            likelihood that the conclusion is true.
          </MustKnow>

          <div className="mt-2">
            <InlineMath math={`\\text{Your goal: maximize } P(\\text{conclusion}\\mid\\text{premises} + \\text{answer choice})`} />
          </div>

          <MustKnow>
            Harder Strengthen questions often hide the right answer behind an
            option that looks unrelated at first glance. Don’t eliminate a
            choice just because it talks about something not mentioned—eliminate
            it only if it truly fails to support the conclusion.
          </MustKnow>
        </section>

        <section aria-labelledby="summary" className="space-y-3">
          <h3 id="summary" className="text-lg font-semibold text-white">
            One‑page checklist
          </h3>
          <ol className="ml-5 list-decimal space-y-1">
            <li>Read for meaning; note key facts and tone.</li>
            <li>Confirm you’re strengthening, not weakening.</li>
            <li>Underline or restate the exact conclusion.</li>
            <li>Identify how (or whether) the author supports it.</li>
            <li>Eliminate weakeners and clearly irrelevant choices.</li>
            <li>Pick the option that most directly increases support.</li>
          </ol>

          <MustKnow>
            Practice and memorize this process. With repetition, you’ll spot
            the conclusion faster, see how the pieces connect, and consistently
            choose the statement that most powerfully helps the argument.
          </MustKnow>
        </section>
      </article>
    </main>
  );
}