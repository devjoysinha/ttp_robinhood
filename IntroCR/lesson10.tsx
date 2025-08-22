import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title: "1.11 If You’ve Eliminated Every Answer | Critical Reasoning",
  description:
    "Practical steps to take when all five choices look wrong in a Critical Reasoning question. Learn how to reset, re-read, and re-evaluate efficiently, with one quick MCQ to check your approach.",
};

function KMath({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className="align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.11 What to Do If You’ve Eliminated All the Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every so often, you’ll reach the end of a Critical Reasoning problem
          and feel that none of the options work. Don’t panic—this is a cue to
          step back and methodically reset. Most of the time, a small reading
          slip, a missed detail, or a misread logical relationship is the real
          culprit.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-white">If everything looks wrong, reset and re-check:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Re-read the passage with intent: underline the conclusion and
                tag the key support. Separate what is claimed from what is merely
                background.
              </li>
              <li>
                Scan the question stem again—confirm exactly what is being
                asked (strengthen, weaken, assumption, inference, etc.).
              </li>
              <li>
                Reevaluate each choice independently. For every option, state a
                specific reason it helps or hurts the task. Avoid “sounds wrong”
                eliminations.
              </li>
              <li>
                Hold the logical direction steady. For many CR tasks, mixing up
                implication and its converse is a common trap:{" "}
                <KMath
                  expr={"p \\to q"}
                  ariaLabel="p implies q"
                />{" "}
                does not mean{" "}
                <KMath
                  expr={"q \\to p"}
                  ariaLabel="q implies p"
                />
                .
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          On the second pass, compare choices directly to the author’s exact
          claim. If necessary, paraphrase the conclusion in your own words, then
          test each option against that paraphrase. Keep your evaluation tied to
          explicit text or clear logic, not outside knowledge.
        </p>

        <MCQExample
          number={11}
          prompt="You’ve crossed out all five answer choices on a Critical Reasoning question. What’s the best immediate move?"
          options={[
            "Pick the least bad option to save time.",
            "Re-read only the last sentence of the passage and pick again.",
            "Re-check the stem to confirm the task, then re-evaluate each choice against the exact conclusion.",
            "Skim the answer choices faster to see whether one now stands out.",
            "Change your strategy to always pre-think an answer next time.",
          ]}
          correct="Re-check the stem to confirm the task, then re-evaluate each choice against the exact conclusion."
          solution={
            <>
              <p>
                When you end up with “nothing works,” it’s usually a task or
                logic mismatch. Confirm the question type, restate the
                conclusion, and scrutinize each option against that target. This
                structured reset typically reveals one choice that actually fits.
              </p>
            </>
          }
        />

        <section aria-labelledby="cr-reset-checklist" className="space-y-3">
          <h3 id="cr-reset-checklist" className="text-xl font-semibold text-white">
            A quick reset checklist
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Mark the conclusion and the essential premise(s). Ask: “What is
              the author trying to establish?”
            </li>
            <li>
              Restate the question stem in your own words (e.g., “Which choice
              would most undermine that conclusion?”).
            </li>
            <li>
              Test each option: “Does this choice directly help my task and tie
              to the stated argument?” If not, articulate the reason precisely.
            </li>
            <li>
              Watch for logic flips and scope creep. For example,{" "}
              <KMath expr={"\\neg p"} ariaLabel="not p" /> does not necessarily
              follow from <KMath expr={"p \\to q"} ariaLabel="p implies q" /> and{" "}
              <KMath expr={"\\neg q"} ariaLabel="not q" /> unless the structure
              supports a valid contrapositive move.
            </li>
          </ul>
        </section>

        <p>
          Bottom line: when all answers look wrong, the fix is rarely “guess and
          go.” Re-anchor on the conclusion, confirm the task, and evaluate each
          choice with tight, text-based reasoning. One option will align cleanly
          once the logic is back in focus.
        </p>
      </article>
    </main>
  );
}