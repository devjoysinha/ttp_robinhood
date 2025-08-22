import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX renderer (client-only)
"use client";
import "katex/dist/katex.min.css";
import katex from "katex";
import { useMemo } from "react";

function KaTeX({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = useMemo(() => katex.renderToString(expr, { throwOnError: false }), [expr]);
  const El = block ? "div" : "span";
  return (
    <El
      className={block ? "my-3 overflow-x-auto" : "inline-block"}
      aria-label={ariaLabel}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.11.6 Assumption Traps: Supports the Conclusion but Isn’t Required | Critical Reasoning",
  description:
    "Learn to spot answer choices that strengthen an argument yet are not necessary assumptions. Includes a quick illustration and a full GMAT‑style example with solution and FAQs.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">2. Identify the Assumption</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11.6 Trap Type: An Option That Helps the Conclusion but Isn’t a Required Assumption
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One common trap in Assumption questions is a choice that clearly lends support to the conclusion, but the
          argument does not actually depend on it. Your task is to find what the author must be taking for granted,
          not merely something that makes the claim sound more plausible.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="mb-1">
              A necessary assumption is information the argument needs. If you negate a necessary assumption, the
              conclusion collapses.
            </p>
            <p className="mt-2">
              In symbols: a statement A is necessary for conclusion C precisely when
              <KaTeX expr="\,C \Rightarrow A\, \text{ (equivalently, } \neg A \Rightarrow \neg C\text{)}" ariaLabel="C implies A; equivalently, not A implies not C." />
            </p>
            <p className="mt-2">
              A choice that only strengthens C can be true without being required. Negating a mere strengthener should
              not destroy the conclusion.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="illustration-title" className="space-y-3">
          <h3 id="illustration-title" className="text-xl font-semibold text-white">
            Quick Illustration
          </h3>
          <p>
            Consider this argument: “Oral histories from local storytellers claim that the Anabara vanished due to
            invading forces. Yet analysis of remains in their settlements points instead to a smallpox outbreak. So the
            storytellers’ account is inaccurate.”
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="mb-2 text-base font-semibold text-white">Two potential statements</h4>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Supports but not required: “Archaeologists have found no physical signs of invasions where the Anabara
                lived.”
                <br />
                Why it’s not required: Even if there were signs of conflict, smallpox could still be the true cause of
                their disappearance, so the conclusion could still stand.
              </li>
              <li>
                Required assumption: “The invaders did not deliberately spread smallpox among the Anabara.”
                <br />
                Why it’s required: If invaders intentionally triggered the epidemic, then the storytellers’ claim (that
                invaders wiped out the Anabara) could still be accurate, undermining the author’s conclusion.
              </li>
            </ul>
          </div>
        </section>

        <MustKnow>
          There is an important distinction between “helps the conclusion” and “must be true for the conclusion to hold.”
          Always test necessity by negation: if the statement were false, would the argument fall apart?
        </MustKnow>

        <section aria-labelledby="example-36-title" className="space-y-4">
          <h3 id="example-36-title" className="text-xl font-semibold text-white">
            Example 36
          </h3>

          <MCQExample
            number={36}
            prompt={
              <>
                <p>
                  Political Consultant: Rebecca Lim has lost two bids for mayor of Springville. Our polling shows that
                  most voters aren’t familiar with her credentials. We’ll revamp the campaign so voters recognize that
                  she’s the most qualified candidate. Therefore, she will win the next election.
                </p>
                <p className="mt-3">Which of the following is an assumption the consultant’s conclusion requires?</p>
              </>
            }
            options={[
              "Springville voters take a candidate’s qualifications into account when deciding whom to support.",
              "If voter awareness of Rebecca’s qualifications does not increase, she will not win the next election.",
              "The candidate who previously defeated Rebecca will be ineligible to run next time.",
              "Rebecca’s credentials are largely unchanged since her last campaign.",
              "Voters do not view Rebecca’s opponents as highly qualified for the office.",
            ]}
            correct="Springville voters take a candidate’s qualifications into account when deciding whom to support."
            solution={
              <>
                <p className="mb-2">
                  Breakdown: The plan is to boost voter awareness of Rebecca’s superior qualifications, and from that,
                  the consultant infers she will win. For the plan to justify the conclusion, qualifications must matter
                  to voters’ choices.
                </p>

                <p className="mb-1 font-semibold text-white">Why (A): Necessary</p>
                <p className="mb-3">
                  If voters don’t factor qualifications into their decisions, then increasing awareness wouldn’t change
                  votes. Negate (A) and the argument collapses—so (A) is required.
                </p>

                <p className="mb-1 font-semibold text-white">Why not (B)</p>
                <p className="mb-3">
                  (B) says awareness is the only path to victory, which is stronger than needed. She could win for other
                  reasons (e.g., turnout, opponent missteps) even without increased awareness. The conclusion does not
                  depend on (B).
                </p>

                <p className="mb-1 font-semibold text-white">Why not (C)</p>
                <p className="mb-3">
                  This could help but is not required. Rebecca might still win even if the previous rival is eligible.
                </p>

                <p className="mb-1 font-semibold text-white">Why not (D)</p>
                <p className="mb-3">
                  Whether her qualifications changed is irrelevant to the plan’s logic: the strategy is about voter
                  awareness of being “most qualified,” not about change over time.
                </p>

                <p className="mb-1 font-semibold text-white">Why not (E)</p>
                <p>
                  This strengthens the conclusion but isn’t necessary. Even if opponents are seen as qualified, making
                  voters aware that Rebecca is most qualified could still secure a win.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="faq-title" className="space-y-3">
          <h3 id="faq-title" className="text-xl font-semibold text-white">Quick FAQs</h3>

          <details className="group rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <summary className="cursor-pointer list-none font-medium text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Why isn’t “She won’t win unless awareness increases” (option B) a required assumption?
            </summary>
            <div className="mt-3 text-gray-300">
              The argument claims she will win if awareness increases. It does not claim awareness is the only way to
              win. Other factors could still lead to victory. A necessary assumption must be something without which the
              plan’s logic fails—namely, that voters care about qualifications at all.
            </div>
          </details>

          <details className="group rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <summary className="cursor-pointer list-none font-medium text-gray-2 00 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              How is option (A) different from option (B)?
            </summary>
            <div className="mt-3 text-gray-300">
              Option (A) connects the plan to votes: if voters weigh qualifications, then informing them can change
              outcomes—this is necessary. Option (B) insists awareness is strictly necessary to win, which the argument
              never claims; it’s an unnecessary overreach.
            </div>
          </details>
        </section>

        <section aria-labelledby="wrap-title" className="space-y-3">
          <h3 id="wrap-title" className="text-xl font-semibold text-white">Takeaway</h3>
          <p>
            Don’t confuse “helps” with “required.” Use the negation test for necessity:
            <KaTeX expr="\;\text{if } \neg A \Rightarrow \neg C,\; \text{ then } A \text{ is necessary for } C." ariaLabel="If not A implies not C, then A is necessary for C." />
            If negating the choice does not break the argument, it’s not a necessary assumption—even if it’s persuasive
            evidence.
          </p>
          <p className="text-gray-400">
            Next up: we’ll use these ideas to bridge into weakening arguments.
          </p>
        </section>
      </article>
    </main>
  );
}