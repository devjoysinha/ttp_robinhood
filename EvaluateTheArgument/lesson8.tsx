import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.6 Trap Choices in Evaluate the Argument | Critical Reasoning",
  description:
    "Learn how to spot trap answers in Evaluate the Argument questions. Includes a worked multiple‑choice example and a checklist to avoid common pitfalls.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.6 Trap Choices in Evaluate the Argument Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Evaluate the Argument questions, the correct answer pinpoints
          information that would change how persuasive the author’s reasoning
          is—either by making the argument stronger or by undermining it.
        </p>

        <MustKnow>
          The right Evaluate choice is a question or statement whose different
          possible answers would meaningfully strengthen or weaken the
          conclusion. If both answers leave the argument’s strength unchanged,
          it’s not the one.
        </MustKnow>

        <p>
          Test writers include tempting distractors that look relevant but don’t
          actually bear on the reasoning. To steer clear of these traps:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-gray-300">
          <li>
            Pin down the exact conclusion you’re assessing—don’t evaluate the
            topic at large.
          </li>
          <li>
            Don’t invent elaborate stories to make a so‑so option seem useful.
          </li>
          <li>
            Use a simple Yes/No check: if answering “yes” vs. “no” clearly moves
            the needle in opposite directions, you likely have a good Evaluate
            choice.
          </li>
        </ul>

        <MCQExample
          number={11}
          prompt={
            <>
              A poll of homeowners in Springfield showed that many sellers chose
              to list without an agent because commissions were viewed as too
              high. In response, half of the city’s agents cut their commission
              from 8% to 6% to win more clients. Those agents sold the same
              number of homes in the year after the change as in the prior year.
              Therefore, the agents who lowered their rate did not gain anything
              from doing so.
              <br />
              <br />
              To best assess this argument, which of the following would be most
              helpful to determine?
            </>
          }
          options={[
            "Whether dropping the commission to 4% would have brought in more clients",
            "Whether the average sale price for homes sold with an agent exceeded that of homes sold without an agent",
            "Whether agents who kept their original commission saw a decline in the number of homes they sold",
            "Whether a follow‑up survey shows homeowners now consider the lower commission more reasonable",
            "Whether the agents who cut their rate handled more than half of Springfield’s home sales the following year",
          ]}
          correct="Whether agents who kept their original commission saw a decline in the number of homes they sold"
          solution={
            <>
              <p className="mb-2 font-semibold text-white">What’s going on:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Premise: Some agents cut commission from 8% to 6%.</li>
                <li>
                  Premise: Those agents sold the same number of houses as the
                  year before.
                </li>
                <li>
                  Conclusion: The rate cut did not benefit those agents.
                </li>
              </ul>

              <p className="mt-4">
                The author seems to assume that equal sales volume means “no
                benefit.” But benefit could exist if market conditions worsened
                and the cut helped avoid a drop in sales relative to peers.
              </p>

              <p className="mt-4">
                Choice C asks whether agents who did not cut their rate sold
                fewer homes. If they did, the cut likely helped the others hold
                steady—weakening the author’s claim. If they did not, then both
                groups held steady and the cut simply lowered revenue per
                transaction—strengthening the claim. Because answers to C move
                the argument in opposite directions, C is the best Evaluate
                choice.
              </p>

              <p className="mt-4">
                A: A deeper cut (to 4%) could be better or worse, but that
                doesn’t tell us whether the 6% move paid off.
              </p>
              <p>
                B: Comparing with‑agent vs. without‑agent prices doesn’t reveal
                whether the rate reduction helped those agents.
              </p>
              <p>
                D: Opinions about reasonableness don’t establish the actual
                effect on outcomes.
              </p>
              <p>
                E: Share of total sales without a pre‑cut baseline doesn’t show
                whether those agents benefited.
              </p>
            </>
          }
        />

        <MustKnow>
          Trap choices often feel related to the scenario but don’t shift the
          conclusion’s plausibility. If a choice doesn’t change how confident
          you are in the author’s claim under different answers, it’s a trap.
        </MustKnow>

        <ExampleCard
          number={12}
          title="Trap‑proof checklist (quick apply)"
          statements={[
            "1) Am I evaluating the stated conclusion, not the general topic?",
            "2) If the answer to this choice were “yes,” would that strengthen or weaken the argument?",
            "3) If the answer were “no,” would that do the opposite?",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                Use this micro‑checklist when you’re torn between two plausible
                choices. The correct Evaluate option will push the argument in
                opposite directions under “yes” vs. “no.”
              </p>
            </>
          }
        />

        <p>
          Bottom line: a good Evaluate choice toggles your confidence in the
          conclusion. If flipping the answer doesn’t flip your assessment, keep
          looking. 
        </p>
      </article>
    </main>
  );
}