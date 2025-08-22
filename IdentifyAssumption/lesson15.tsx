import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.10 Trap vs. Correct Assumptions | Critical Reasoning",
  description:
    "Learn how to distinguish tempting trap options from true assumptions in GMAT CR. Includes two multiple‑choice examples with full explanations and a practical checklist.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.10 How Trap Choices Differ from Real Assumptions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Assumption questions, the correct option is a missing but necessary
          link that makes the argument work. Many wrong answers are attractive
          because they feel relevant, but they don’t bridge the gap between the{" "}
          <InlineMath math="\text{evidence} \Rightarrow \text{conclusion}" />.
        </p>

        <MustKnow>
          A common trap does one of two things:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              It’s clearly related to the topic but not required for the logic
              to hold.
            </li>
            <li>
              It seems like a necessary assumption at first glance, yet the
              argument doesn’t actually depend on it.
            </li>
          </ul>
        </MustKnow>

        <p>
          To avoid these traps, lock in what an assumption must do: it’s an
          unstated condition that the author must be taking for granted so that
          the support actually leads to the conclusion.
        </p>

        <MustKnow>
          Stay focused on the job of the correct answer: an essential,
          unstated fact that connects the support to the claim. If a choice
          doesn’t fill that role, it’s not the assumption—no matter how relevant
          or interesting it appears.
        </MustKnow>

        <section aria-labelledby="trap-type-1">
          <h3 id="trap-type-1" className="text-xl font-semibold text-white">
            Trap Type 1: Explains Something But Doesn’t Patch the Gap
          </h3>
          <p>
            Some wrong answers explain why a premise is true or add background
            color. Those can be tempting because they’re “on topic,” but they
            don’t serve as the missing link the argument needs.
          </p>

          <MCQExample
            number={28}
            prompt={
              <>
                For three months, one group of gym members took Pro‑Max (a
                plant‑based protein) after workouts. They gained more lean
                muscle than a second group who took Pro‑Lean (a milk‑based
                protein) over the same period. Therefore, Pro‑Max is better than
                Pro‑Lean for building lean muscle post‑workout.
                <br />
                <br />
                Which of the following is an assumption the argument requires?
              </>
            }
            options={[
              "The Pro‑Max group did not follow more effective training routines than the Pro‑Lean group.",
              "A serving of Pro‑Max is not more expensive than a serving of Pro‑Lean.",
              "Pro‑Lean does not taste substantially better than Pro‑Max.",
              "No one in the Pro‑Lean group worked as a personal trainer.",
              "Pro‑Max has fewer calories than Pro‑Lean.",
            ]}
            correct="The Pro‑Max group did not follow more effective training routines than the Pro‑Lean group."
            solution={
              <>
                <p>
                  The author concludes “Pro‑Max causes more muscle gain.” To
                  justify a cause‑and‑effect claim, we must rule out credible
                  alternative causes. If the Pro‑Max group simply trained more
                  effectively, the protein might not be the cause of the extra
                  muscle gain.
                </p>
                <p>
                  Choice (A) eliminates that alternative explanation, so it’s a
                  required assumption. The other options talk about cost, taste,
                  job titles, or calories—none is necessary for the causal link.
                </p>
                <p>
                  Negation check: If (A) is false (i.e., the Pro‑Max group did
                  train more effectively), the conclusion no longer follows.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="trap-type-2">
          <h3 id="trap-type-2" className="text-xl font-semibold text-white">
            Trap Type 2: Sounds Plausible But Isn’t Required
          </h3>
          <p>
            Some distractors feel like they “fit the story,” but the argument
            doesn’t rely on them. The correct assumption is the one that, if
            denied, breaks the reasoning chain.
          </p>

          <MCQExample
            number={29}
            prompt={
              <>
                Owning a home can confer many individual and societal benefits.
                Yet fewer than half of the country’s residents currently own
                homes, and the government does little to promote ownership. By
                informing renters about homeownership’s advantages and thereby
                encouraging it, the government could improve conditions for both
                individuals and society.
                <br />
                <br />
                Which of the following is an assumption on which the argument
                depends?
              </>
            }
            options={[
              "Crime is lower in cities with high homeownership because homeowners feel invested in their neighborhoods.",
              "Government officials are motivated to improve conditions for individuals and society.",
              "Without government encouragement, most people would choose to rent.",
              "Retirees who own homes often have lower housing costs than retirees who rent.",
              "At least some current renters have the financial ability to purchase homes.",
            ]}
            correct="At least some current renters have the financial ability to purchase homes."
            solution={
              <>
                <p>
                  The conclusion says that encouraging homeownership would
                  improve outcomes. That only matters if encouragement can
                  actually increase ownership among renters. If no renters can
                  afford to buy, then outreach won’t move the needle, and the
                  conclusion collapses.
                </p>
                <p>
                  Thus, (E) is required. The other choices either explain
                  possible benefits, speculate about government motives, restate
                  a conclusion‑like claim, or add details that aren’t necessary
                  for the author’s prediction to go through.
                </p>
                <p>
                  Negation check: If no renters could afford a home, then
                  promoting homeownership would not improve conditions via
                  increased ownership, defeating the conclusion.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Quick checklist for Assumption questions:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Read the argument carefully; locate the exact conclusion.</li>
            <li>
              Map the support and identify the logical gap between{" "}
              <InlineMath math="\text{premises} \rightarrow \text{conclusion}" />.
            </li>
            <li>
              Eliminate choices that merely explain background or add
              tangentially relevant facts.
            </li>
            <li>
              Prefer answers that, if negated, would undermine the conclusion
              (necessary assumption test).
            </li>
            <li>
              Select the option that truly plugs the gap—an unstated requirement
              for the reasoning to work.
            </li>
          </ul>
        </MustKnow>

        <p>
          Bottom line: the correct assumption is the indispensable link holding{" "}
          <InlineMath math="\text{evidence} \Rightarrow \text{claim}" />. If the
          middle link can fail without a given statement, that statement isn’t
          the assumption you’re after.
        </p>
      </article>
    </main>
  );
}