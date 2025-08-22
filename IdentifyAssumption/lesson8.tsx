import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// NOTE: Make sure KaTeX CSS is loaded globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "2.9 Assumption Questions: Common Correct‑Answer Patterns | Critical Reasoning",
  description:
    "Learn how correct answers to GMAT Critical Reasoning assumption questions typically behave. Apply the plug‑the‑gap idea, use the Negation Test, and practice with one MCQ and two sufficiency‑style drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9 Common Patterns in Correct Answers to Assumption Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In assumption questions, the right choice supplies a missing idea the
          argument quietly relies on. Often, we notice that missing link only
          after seeing the correct option—it exposes the gap between evidence
          and conclusion.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="mb-2">
              Think of an assumption as the minimum bridge that makes the jump
              from evidence to conclusion possible:
            </p>
            <div className="rounded-md bg-slate-800/60 p-3 text-slate-200">
              <BlockMath math={"\\text{Premises} + \\text{Assumption} \\;\\Rightarrow\\; \\text{Conclusion}"} />
              <span className="sr-only">
                Premises plus assumption imply conclusion.
              </span>
            </div>
            <p className="mt-2">
              Use the Negation Test: if you logically negate a candidate
              assumption and that makes the conclusion fall apart, you’ve found
              a required assumption.
            </p>
            <div className="rounded-md bg-slate-800/60 p-3 text-slate-200">
              <InlineMath math={"\\neg\\text{Assumption} \\;\\Rightarrow\\; \\text{Conclusion weakens}"} />
              <span className="sr-only">
                Not assumption implies the conclusion weakens.
              </span>
            </div>
          </div>
        </MustKnow>

        <section aria-label="Common correct-answer patterns">
          <h3 className="mb-2 text-xl font-semibold text-white">
            Typical ways correct assumption answers work
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Rules out an offsetting factor that would undermine the plan or
              inference.
            </li>
            <li>
              Secures a cause-and-effect link (no alternative causes, no
              effect without the cause, and the direction of causation is
              correct).
            </li>
            <li>
              Excludes other viable routes to the same goal; the proposed path
              is the only way that matters.
            </li>
            <li>
              Ensures a proposed fix doesn’t recreate the same problem or a
              close cousin of it.
            </li>
            <li>
              Elevates a likely generalization to something applicable here
              and now (what’s plausible is actually true in this case).
            </li>
            <li>
              Handles changes over time so that older evidence remains relevant
              to the present conclusion.
            </li>
          </ul>
        </section>

        <MCQExample
          number={29}
          prompt="Researchers report that after a company adopted a new scheduling policy to reduce overtime, employee turnover dropped. Therefore, the policy caused the reduction in turnover. Which of the following is an assumption required by the researchers’ argument?"
          options={[
            "The number of employees hired each month did not increase after the policy change.",
            "No other significant change affecting turnover occurred during the same period.",
            "Employees at the company prefer flexible schedules to higher pay.",
            "Before the policy, overtime was the main source of low morale among employees.",
            "The company will keep the policy in place for at least another year.",
          ]}
          correct="No other significant change affecting turnover occurred during the same period."
          solution={
            <>
              <p>
                The conclusion is causal: “policy caused turnover to fall.” A
                necessary assumption is that nothing else explains the drop. If
                some other major change (e.g., pay increase, new benefits)
                occurred, the causal claim could fail.
              </p>
              <p>
                Negation Test: Suppose some other significant change affecting
                turnover did occur concurrently. Then the conclusion that the
                policy caused the drop would be undermined. Thus, “No other
                significant change occurred” is required.
              </p>
            </>
          }
        />

        <p>
          Don’t try to prove the conclusion outright. In Assumption questions,
          you only need the missing piece the author must be counting on—no
          more, no less.
        </p>

        <ExampleCard
          number={30}
          title="Assumption drill: securing causation"
          statements={[
            "Passage: After installing industrial air filters, a factory reports that persistent odors inside the facility disappeared. Therefore, the new filters eliminated the odors.",
            "Question: Which statements, if assumed, together are sufficient to make the conclusion reasonably follow?",
            "1) No other change to cleaning products or ventilation was introduced when the filters were installed.",
            "2) The installed filters are capable of removing the specific odor-causing compounds present at the factory.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We need both to shore up the causal story. If (1) is false,
                some other change could explain the improvement. If (2) is
                false, the filters couldn’t have done the job. Together, (1)
                rules out an alternative cause, and (2) confirms the proposed
                cause can produce the effect. Therefore, both are needed → C.
              </p>
              <p>
                Mapping to the patterns above: this combines “rule out
                offsetting/alternative factors” with “ensure the cause can
                create the effect.”
              </p>
            </>
          }
        />

        <ExampleCard
          number={31}
          title="Assumption drill: avoiding the same problem"
          statements={[
            "Plan: To reduce downtown congestion, the city will ban private cars from the central district during rush hour.",
            "Conclusion: The plan will substantially reduce overall congestion in and around downtown.",
            "1) Traffic will not simply shift to surrounding streets in volumes that recreate similar congestion there.",
            "2) Public transit has enough capacity to handle the displaced trips without causing comparable delays.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                If (1) is false, congestion just moves and the outcome doesn’t
                improve overall. If (2) is false, transit delays could recreate
                the same problem in another form. Only together do they support
                the claim of a substantial overall reduction → C.
              </p>
              <p>
                Pattern match: this is the “the fix won’t recreate the same or
                a similar problem” family of assumptions.
              </p>
            </>
          }
        />

        <section aria-label="How to apply the Negation Test">
          <h3 className="mb-2 text-xl font-semibold text-white">
            Quick checklist: using the Negation Test
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Identify a choice that looks like it plugs a gap.</li>
            <li>
              Negate it carefully (make it logically incompatible, not merely
              weaker).
            </li>
            <li>
              If the negation meaningfully damages the conclusion, the original
              is a required assumption.
            </li>
            <li>
              If the conclusion can still stand after the negation, it’s not
              necessary—eliminate it.
            </li>
          </ul>
        </section>

        <p>
          Big picture: correct assumption answers secure the argument’s middle,
          not its outer edges. Focus on what must be true for the author’s leap
          from evidence to conclusion to make sense.
        </p>
      </article>
    </main>
  );
}