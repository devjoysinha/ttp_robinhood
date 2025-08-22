import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "12.5.3 Methods an Argument Could Have Used—but Didn’t | Critical Reasoning",
  description:
    "Learn a common Method of Reasoning trap: answer choices that describe plausible methods the argument could have used but never actually uses. Includes two mini walk‑throughs and an applied multiple‑choice example with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.3 Trap Answers: Methods the Argument Could Use but Doesn’t
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Method of Reasoning questions, a frequent trap is an answer choice
          that outlines a reasonable technique the author could have used but
          never actually uses. Your job is to match the description to the
          argument’s real move, not to a move that would also be capable of
         weakening, strengthening, or otherwise assessing the argument.
        </p>

        <MustKnow>
          Do not pick an answer just because it describes a strategy that{" "}
          could have addressed the argument. The correct choice must capture
          the exact step the author takes in the passage as written.
        </MustKnow>

        <section aria-labelledby="example-1" className="space-y-3">
          <h3 id="example-1" className="text-xl font-semibold text-white">
            Mini example 1: Added information that undercuts a forecast
          </h3>
          <p>
            Suppose property owners in City A expect a new high‑speed rail line
            to draw big companies away from City B toward City A. The author
            notes that planners intend to extend the same rail line beyond City
            B to City C, which could make City B even more attractive. This
            added detail provides a new reason to doubt the original prediction.
          </p>
          <p>
            A tempting but wrong description here would be “challenging the
            assumption that access to City A matters to companies.” The author
            does not attack that assumption; instead, the author supplies{" "}
            new context that makes the prediction less likely to hold.
          </p>
        </section>

        <section aria-labelledby="example-2" className="space-y-3">
          <h3 id="example-2" className="text-xl font-semibold text-white">
            Mini example 2: Showing the effect without the alleged cause
          </h3>
          <p>
            A principal claims that lead found in the main playground explains
            the school’s below‑average reading scores. A reading specialist
            replies that students who never use that playground also score low.
            That reply shows the outcome persists even where the supposed cause
            is absent, giving a reason to doubt the causal claim.
          </p>
          <p>
            A look‑alike, incorrect description would be “introducing some
            alternative cause.” The specialist isn’t proposing a different
            cause; they’re showing that the effect occurs without the stated
            cause.
          </p>
        </section>

        <MCQExample
          number={12}
          prompt="Editorial: The red‑legged beetle tunnels into hardwood trees, harming the wood and lowering its value to loggers. Because there is no known predator for this beetle in our forests, some officials propose using insecticides to control it. That step may be unnecessary, however, because almost no hardwood is commercially harvested in our state’s forests. The editorialist’s reasoning proceeds by:"
          options={[
            "undermining the proposal by denying that the beetle is found in the state.",
            "arguing that the beetle will not cause any harm in this state.",
            "noting that the plan may be needless because the situation that would justify it does not exist here.",
            "claiming the cure would be more damaging than the pest itself.",
            "inferring from “not appropriate in all cases” that it is not appropriate in this case.",
          ]}
          correct="noting that the plan may be needless because the situation that would justify it does not exist here."
          solution={
            <>
              <p>
                Structure: the author questions a proposed remedy by introducing
                a consideration that makes the remedy unnecessary in this
                context. The key new consideration is that there is virtually no
                commercial harvesting of hardwood in the state.
              </p>
              <p>
                Choice C matches that move: it says the action may be
                unnecessary because the triggering conditions aren’t present.
              </p>
              <p>
                Why the others are out:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  A: The editorial does not deny the beetle’s presence.
                </li>
                <li>
                  B: The editorial does not claim the beetle causes no damage;
                  it acknowledges damage but argues the remedy isn’t warranted
                  here.
                </li>
                <li>
                  D: No comparison of harms is made; the author only calls the
                  insecticide “somewhat destructive.”
                </li>
                <li>
                  E: The author makes a case about this particular situation,
                  not about all possible cases.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: trap answers often describe strategies that would{" "}
          plausibly interact with the argument but are not the strategy the
          author actually uses. Always map the answer choice to the specific,
          literal move in the passage. If any part of the description doesn’t
          happen, eliminate it. 
        </p>
      </article>
    </main>
  );
}