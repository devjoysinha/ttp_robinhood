import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "5.4 Resolve the Paradox: 5‑Step Strategy | GMAT Critical Reasoning",
  description:
    "A clear, repeatable 5‑step method for Resolve the Paradox questions, plus a worked example with full reasoning and common trap analyses.",
};

function MathInline({
  expr,
  ariaLabel,
  className = "",
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={`align-baseline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.4 A 5‑Step Plan for Resolve the Paradox Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Resolve the Paradox prompts present two facts that appear to clash.
          Your job is to find the choice that shows how both can be true at the
          same time. Use the streamlined process below so you always focus on
          the real conflict and avoid tempting but irrelevant choices.
        </p>

        <MustKnow>
          Commit the 5‑step routine to memory and practice it:
          reading precisely, locating the two clashing facts, reframing the
          conflict as a question, and testing each option only on whether it
          reconciles those facts. If a choice explains anything other than the
          clash, it’s out.
        </MustKnow>

        <section aria-labelledby="steps-heading" className="space-y-3">
          <h3 id="steps-heading" className="text-xl font-semibold text-white">
            The 5‑Step Strategy
          </h3>

          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-100">Step 1 — Read for meaning.</p>
              <p>
                Carefully digest the passage. If you don’t fully understand the
                statements, you won’t recognize what actually needs explaining.
                When your grasp is solid, the right answer often stands out.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-100">
                Step 2 — Confirm the task in the question stem.
              </p>
              <p>
                Paradox prompts typically ask you to resolve a discrepancy,
                explain an unexpected result, or reconcile two facts. Make sure
                that’s really what you’re being asked to do.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-100">
                Step 3 — Bullet the two conflicting facts.
              </p>
              <p>
                There may be a lot of information, but only two statements
                truly collide. Jot them down briefly. That snapshot helps you
                visualize the conflict and generate ways to reconcile it.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-100">
                Step 4 — Turn the conflict into a question.
              </p>
              <p className="mb-1">
                Ask yourself: “How can it be that Fact 1 is true even though Fact 2
                is also true?” In logical form:
                {" "}
                <MathInline
                  expr="(\text{Fact 1}) \land (\text{Fact 2})"
                  ariaLabel="Fact 1 and Fact 2"
                  className="mx-1"
                />
                must be simultaneously plausible.
              </p>
              <p>
                This rephrase locks your attention on what must be explained and
                prevents you from picking choices that explain the wrong thing.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-100">
                Step 5 — Test each answer choice against the conflict.
              </p>
              <p>
                For each option, ask only: “Does this make the two facts
                compatible?” Exactly one choice will do that. If an option
                offers a conclusion, restates a fact, discusses a similarity
                when the paradox is about a difference, or intensifies the
                conflict, eliminate it.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="example-heading" className="pt-2">
          <h3 id="example-heading" className="text-xl font-semibold text-white mb-2">
            Worked Example
          </h3>

          <MCQExample
            number={4}
            prompt="Many employees had been using the company health plan to pay for holistic treatments. To cut costs by discouraging unnecessary use, the company began requiring a formal diagnosis from a licensed physician before the plan would cover such treatments. Yet after the policy change, plan costs went up rather than down. Which option best explains this reversal?"
            options={[
              "Holistic practitioners are just as capable at diagnosing issues as licensed physicians.",
              "Employees who see holistic providers generally trust those methods to be effective.",
              "Physician diagnoses frequently cost several times more than a visit to a holistic provider.",
              "Ending the diagnosis requirement would lower the company’s plan costs.",
              "For comparable services, physicians often charge the same as holistic practitioners.",
            ]}
            correct="Physician diagnoses frequently cost several times more than a visit to a holistic provider."
            solution={
              <>
                <p className="mb-2">
                  Set up the conflict:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Fact 1: The company adds a physician‑diagnosis requirement to
                    prevent unnecessary holistic care and save money.
                  </li>
                  <li>
                    Fact 2: After implementation, plan costs increase.
                  </li>
                </ul>
                <p className="mt-3">
                  Question to answer: How can costs rise even after adding a
                  gatekeeping requirement intended to reduce spending?
                </p>

                <p className="mt-3">
                  Correct choice (C) explains that physician diagnoses are much
                  more expensive than holistic visits. If the plan is now paying
                  for these pricier physician appointments in addition to (or
                  instead of) cheaper holistic visits, total costs can rise.
                  Symbolically, if
                  {" "}
                  <MathInline
                    expr="C_{\text{phys}} \gg C_{\text{holistic}}"
                    ariaLabel="physician cost is much greater than holistic cost"
                    className="mx-1"
                  />
                  , then adding required physician diagnoses can raise overall
                  spend.
                </p>

                <p className="mt-3">
                  Why the others fail:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    (A) Talks about holistic diagnostic skill, but the policy
                    requires a physician’s diagnosis. It doesn’t reconcile the
                    cost increase.
                  </li>
                  <li>
                    (B) Explains why employees like holistic care, not why plan
                    costs went up post‑policy.
                  </li>
                  <li>
                    (D) Proposes a solution (remove the requirement) rather than
                    explaining the observed increase.
                  </li>
                  <li>
                    (E) Claims similar pricing for similar services, which
                    doesn’t explain a cost jump caused by the new requirement.
                  </li>
                </ul>
                <p className="mt-3">Answer: C.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="summary-heading" className="pt-2">
          <h3 id="summary-heading" className="text-xl font-semibold text-white">
            Quick Summary
          </h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Understand the passage completely.</li>
            <li>Verify that the task is to resolve a paradox/discrepancy.</li>
            <li>Extract and bullet the two conflicting facts.</li>
            <li>
              Rephrase: How can Fact 1 be true even though Fact 2 is also true?
              {" "}
              <MathInline
                expr="\text{Find a bridge so } (\text{Fact 1}) \land (\text{Fact 2}) \text{ can both hold.}"
                ariaLabel="Find a bridge so Fact 1 and Fact 2 can both hold"
                className="ml-1"
              />
            </li>
            <li>Choose the option that directly reconciles the two facts; discard everything else.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}