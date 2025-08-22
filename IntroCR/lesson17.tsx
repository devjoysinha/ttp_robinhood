import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "1.17 Fixing Habits That Lead to Wrong Answers | Critical Reasoning",
  description:
    "Most Critical Reasoning mistakes are predictable and avoidable. Learn how to spot your patterns, keep an effective error log, and replace unhelpful habits with winning routines.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.17 Find Your Habits—and Fix the Ones Causing Incorrect Answers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many misses in Critical Reasoning don’t come from a lack of ability but from
          repeatable habits: rushing, skimming, or misreading. If you can surface those habits,
          you can change them—and your accuracy climbs quickly.
        </p>

        <MustKnow>
          Improving at CR is largely about making the invisible visible: identify the
          patterns that produce errors, then replace them with better routines. Over time,
          your error rate{" "}
          <InlineMath math="\rightarrow\ 0" aria-label="approaches zero" />.
        </MustKnow>

        <p className="mt-6">
          Below are common, preventable reasons people miss questions they could have solved:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>You skimmed and overlooked a key detail in the argument.</li>
          <li>You didn’t read the entire stimulus.</li>
          <li>You failed to read an answer choice completely before eliminating or selecting it.</li>
          <li>You tried to answer without first understanding the passage.</li>
          <li>You solved the wrong problem by misreading the question stem.</li>
          <li>You lost track of the main conclusion.</li>
          <li>You tossed the correct option because it seemed off-topic at first glance.</li>
          <li>You tried to “pre‑think” the answer and then forced it to fit.</li>
          <li>You constructed an unsupported, complicated story to justify a choice.</li>
          <li>You chose a trap because it “sounded like” wording from the passage.</li>
          <li>You picked a trap because it appeared to have the desired effect, despite a flaw.</li>
          <li>You ran short on time and guessed.</li>
          <li>You couldn’t keep the moving parts of the argument straight.</li>
        </ul>

        <p>
          Each time you miss a question that you should have gotten right, log the reason.
          Tag the mistake type in an error log and write a brief note on what you’ll do
          differently next time.
        </p>

        <MustKnow>
          Build and maintain a personal error log. For every miss, record:
          the question ID, the exact cause, and the fix you’ll apply. A good log turns
          scattered mistakes into a focused improvement plan.
        </MustKnow>

        <section aria-labelledby="action-steps" className="space-y-3">
          <h3 id="action-steps" className="text-lg font-semibold text-white">
            Simple workflow to reduce CR errors
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Slow down enough to read the stimulus and the entire stem.</li>
            <li>State the conclusion in your own words before looking at choices.</li>
            <li>
              Evaluate all five choices; don’t eliminate or select on a single word alone.
            </li>
            <li>
              If stuck, ask, “Which choice best matches the task?” rather than forcing a
              pre‑thought answer.
            </li>
            <li>
              After review, update your error log: mistake cause, supporting evidence, and your new rule.
              For example, enforce{" "}
              <InlineMath
                math="t_{\text{choice}} \ge 3\text{–}5\ \text{seconds per option}"
                aria-label="at least 3 to 5 seconds per option"
              />
              {" "}to ensure you actually read every choice.
            </li>
          </ol>
        </section>

        <MCQExample
          number={17}
          prompt="You missed a CR question because you eliminated the correct answer after skimming its final clause. What’s the best next step to prevent repeats?"
          options={[
            "Memorize more question stems to move faster",
            "Create an error-log entry with the cause and adopt a rule to fully read every choice",
            "Pre‑think more aggressively so the right answer stands out",
            "Ignore it—small mistakes even out over time",
            "Flag all long choices as traps"
          ]}
          correct="Create an error-log entry with the cause and adopt a rule to fully read every choice"
          solution={
            <>
              <p>
                The root issue is a process flaw—skimming answer choices. The best fix
                is to log the mistake and add a specific behavioral rule (for example,
                read each option end‑to‑end and paraphrase why it’s in/out) so you can
                catch and correct the pattern.
              </p>
            </>
          }
        />

        <p>
          Bottom line: CR success is as much about process as it is about logic.
          Track why you miss questions, install targeted guardrails, and keep refining your routine.
          In the next lesson, we’ll see that you don’t need specialized outside knowledge—your job
          is to reason from the information provided.
        </p>
      </article>
    </main>
  );
}