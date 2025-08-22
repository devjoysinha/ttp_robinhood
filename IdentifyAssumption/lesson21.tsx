import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { renderToString } from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "2.11.5 Assumption Trap: Better or Alternative Plans | Critical Reasoning",
  description:
    "Learn why answer choices that propose a 'better' or alternative plan are classic traps in Identify the Assumption questions, and practice with a fully worked multiple‑choice example.",
};

// Lightweight KaTeX helper for inline math
function Math({
  children,
  as: Tag = "span",
  ariaLabel,
  className,
}: {
  children: string;
  as?: "span" | "div";
  ariaLabel?: string;
  className?: string;
}) {
  const html = renderToString(children, {
    throwOnError: false,
    output: "htmlAndMathml",
    trust: false,
    strict: "warn",
    displayMode: Tag === "div",
  });

  return (
    <Tag
      role="math"
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11.5 Assumption Trap: Mentions a Better or Alternative Plan
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many Assumption questions, the passage argues for a plan and ends
          by claiming that the plan will succeed. Among the tempting wrong
          answers, you’ll often find one that pitches a different plan—sometimes
          even a seemingly superior one.
        </p>

        <p>
          These “better plan” or “alternative plan” choices feel attractive
          because they highlight something the author didn’t discuss. However,
          the conclusion we need to support is simply that the stated plan will
          work, not that it’s the only plan or even the best plan.
        </p>

        <MustKnow>
          An argument that concludes a plan will work does not need the
          assumption that no other plan could work better. Showing that a plan
          works is different from proving it’s the unique or optimal approach.
        </MustKnow>

        <p>Here’s a quick illustration of the trap and the correct logic.</p>

        <ExampleCard
          number={1}
          title="Alternative‑plan trap in a city tax proposal"
          statements={[
            "Edentown’s mayor proposes a tax on soda sales to ease budget pressure on the Department of Health Services. The tax could both discourage consumption that drives health costs and produce revenue earmarked for the department. Which statement is an assumption required for the mayor’s plan to help with the budget problem?",
            "(A) A different strategy—renegotiating supplier contracts—could not fully resolve the department’s budget issues.",
            "(B) Residents will not completely avoid the tax by purchasing soda in nearby Paradiseville.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The conclusion is that the soda tax will help address the
                department’s budget constraints. To be necessary, an assumption
                must be something that, if false, would undercut that
                conclusion.
              </p>
              <p>
                Choice (A) is the classic “better/alternative plan” trap. Even
                if supplier renegotiations might also work (or work better),
                that has no bearing on whether the soda tax could work. The
                argument does not claim the soda tax is the only or best plan.
              </p>
              <p>
                Choice (B) is required. If residents could entirely sidestep the
                tax by shopping elsewhere, then both the deterrent effect and
                the revenue stream would collapse, and the plan would fail.
              </p>
            </>
          }
        />

        <MustKnow>
          Don’t confuse “supports a different plan” with “required for this plan
          to work.” A plan can succeed even when other plans exist—or are
          superior.
        </MustKnow>

        <h3 className="mt-8 text-xl font-semibold text-white">
          Practice: Spot the trap
        </h3>

        <MCQExample
          number={35}
          prompt={
            <>
              CEO of Dreamy Beans Coffee Shop Chain: At our current staffing
              levels, team members are observed chatting with customers for
              about <Math ariaLabel="eight percent">8\\%</Math> of their on‑the‑job
              time. By trimming staffing by up to{" "}
              <Math ariaLabel="eight percent">8\\%</Math> and lowering labor
              costs, we can substantially increase profitability. Which of the
              following is an assumption the CEO’s conclusion depends on?
            </>
          }
          options={[
            "Cutting daily product waste would not be a meaningful alternative for reducing total expenses.",
            "Frequent coffee‑shop visitors generally do not select a shop primarily because of social bonds with staff.",
            "Long‑tenured Dreamy Beans employees do not provide meaningful value to the business.",
            "Adding new drinks and flavors would not improve profits more than reducing staffing would.",
            "Reducing headcount would not lead to lines that are excessively long.",
          ]}
          correct="Frequent coffee‑shop visitors generally do not select a shop primarily because of social bonds with staff."
          solution={
            <>
              <p className="mb-2">
                Structure of the argument:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Observation: Staff are seen chatting roughly{" "}
                  <Math ariaLabel="eight percent">8\\%</Math> of the time.
                </li>
                <li>
                  Plan: Reduce staff by up to{" "}
                  <Math ariaLabel="eight percent">8\\%</Math> to cut labor
                  costs.
                </li>
                <li>Conclusion: Profitability will increase significantly.</li>
              </ul>
              <p className="mt-3">
                For the plan to work, removing that chatting time must not harm
                the business more than the cost savings help. If customers come
                largely for those relationships, cutting chatting opportunities
                could shrink traffic and undercut profits.
              </p>
              <p className="mt-3">
                The correct answer states that most frequent visitors aren’t
                choosing the shop mainly due to social ties with staff. If that
                were false, eliminating those interactions would likely decrease
                profits, collapsing the CEO’s conclusion.
              </p>
              <p className="mt-3">
                Why the others are not assumptions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  (A) Alternative plan trap. A different cost‑saving method
                  might also work, but that doesn’t matter for whether this plan
                  works.
                </li>
                <li>
                  (C) We’re not told that reductions would target valuable,
                  long‑tenured people, nor that such value must be absent for
                  the plan to succeed.
                </li>
                <li>
                  (D) Another “better plan” trap. The CEO need not assume this
                  is the best possible move—only that it will increase profits.
                </li>
                <li>
                  (E) Even if lines lengthen somewhat, the net effect could
                  still be positive; moreover, we don’t know that an{" "}
                  <Math ariaLabel="eight percent">8\\%</Math> cut causes
                  understaffing.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Takeaway: In Identify the Assumption questions about plans, beware of
          choices that argue for a different approach. Your job is to secure the
          plan in the passage, not to rule out all other options or crown a
          champion strategy.
        </p>
      </article>
    </main>
  );
}