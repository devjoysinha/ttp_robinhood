import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.2.3 Hybrid Logical Flaw + Weaken | Critical Reasoning",
  description:
    "Learn the hybrid Logical Flaw question type that behaves like Weaken: you identify the flaw using new information. Includes three worked multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.3 Hybrid Logical Flaw Questions That Act Like Weaken Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A second flavor of Logical Flaw question blends two worlds: it asks you
          to diagnose what’s wrong with an argument, but—like a Weaken question—the
          correct choice introduces new facts that reveal the vulnerability.
        </p>

        <MustKnow>
          Some Logical Flaw prompts are hybrids. You still identify the error in
          reasoning, but the credited response supplies new information (an “if true”
          fact) that exposes the flaw—just as Weaken questions do.
        </MustKnow>

        <p>
          Consider this brief scenario illustrating the pattern:
        </p>

        <section
          aria-label="Illustrative scenario"
          className="rounded-lg border border-gray-700 bg-gray-900/40 p-4"
        >
          <p className="italic text-gray-300">
            To ease congestion in university parking, the facilities director proposes
            raising hourly parking fees by one dollar. She argues that once the
            hourly fee exceeds the round‑trip tram fare from nearby Studentville,
            most students will ride the tram instead of driving.
          </p>
          <p className="mt-3 font-medium text-gray-200">
            Why is the reasoning suspect?
          </p>
          <p className="mt-2">
            The argument quietly assumes the tram is a practical alternative for
            most students. If, however, the vast majority don’t live in
            Studentville, the price comparison is irrelevant and the plan may not
            change behavior. A fact such as “most students commute from towns other
            than Studentville” would directly expose this gap.
          </p>
        </section>

        <MustKnow>
          Hybrid stems often use “if true” language, e.g., “Which of the following,
          if true, points to a flaw...?” Though you’re naming a flaw, you do so by
          adding a new piece of evidence that undermines the argument’s link from
          evidence to conclusion.
        </MustKnow>

        <section aria-label="Sample stems" className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <p className="text-gray-200 font-semibold">Examples of hybrid stems</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Which of the following, if true, would reveal a potential flaw in the plan?</li>
            <li>Which of the following, if true, most clearly identifies the central flaw in the argument?</li>
          </ul>
        </section>

        <p>
          Let’s practice on three multiple‑choice items. Watch for new facts that
          either provide alternate explanations, remove necessary links, or show the
          plan won’t deliver the promised outcome.
        </p>

        <MCQExample
          number={4}
          prompt={
            <>
              Analyst: Two years ago, Redcorp hired a new CMO. Since then, sales
              revenue has grown by <InlineMath math={'50\\%'} /> each year. Therefore,
              the new CMO caused the revenue surge.
              <br />
              Which option, if true, highlights a potential flaw in the analyst’s reasoning?
            </>
          }
          options={[
            "In the last two years, Redcorp cut manufacturing costs substantially for several products.",
            "Over the same two‑year period, unemployment in Redcorp’s biggest market fell from 25% to 5%.",
            "For the decade prior to the new CMO, Redcorp’s sales revenue grew roughly 5% annually.",
            "At her prior employer, the new CMO substantially increased sales revenue.",
            "After joining Redcorp, the new CMO raised list prices for the company’s products.",
          ]}
          correct="Over the same two‑year period, unemployment in Redcorp’s biggest market fell from 25% to 5%."
          solution={
            <>
              <p className="mt-2">
                The analyst assumes the timing proves causation. A macroeconomic
                shift—like unemployment dropping from 25% to 5%—is an alternative
                cause that could explain higher sales without crediting the CMO.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  A (cost cuts) affects profit, not revenue—doesn’t challenge the
                  sales increase.
                </li>
                <li>
                  B supplies a plausible external driver of demand—this undermines
                  the causal claim. Correct.
                </li>
                <li>
                  C shows slower prior growth, which tends to support (not weaken)
                  the CMO hypothesis.
                </li>
                <li>
                  D speaks to prior success and thus mildly supports the claim here.
                </li>
                <li>
                  E provides a mechanism for more revenue and therefore strengthens
                  the argument.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={5}
          prompt={
            <>
              In Creos, a full‑time worker at the old minimum wage earned less than
              the official poverty threshold. At the new, higher minimum wage, a
              full‑time earner would make more than that threshold. Some economists
              worried hiring would drop, but it didn’t. Therefore, there will be no
              one living in poverty in Creos.
              <br />
              Which statement, if true, most clearly exposes a flaw in the reasoning?
            </>
          }
          options={[
            "Some residents of Creos with incomes below the official poverty line do not consider themselves to be impoverished.",
            "The income gap between the highest and lowest earners in Creos has widened.",
            "Past minimum‑wage hikes in Creos have not eliminated poverty.",
            "Employers say any further increase in the minimum wage would reduce staffing levels.",
            "A number of Creos residents have long‑term illnesses so severe that they consider themselves unable to work.",
          ]}
          correct="A number of Creos residents have long‑term illnesses so severe that they consider themselves unable to work."
          solution={
            <>
              <p className="mt-2">
                The conclusion claims poverty will vanish, but it assumes everyone who
                needs to avoid poverty can and will work full time at the new wage.
                If many people cannot work at all (e.g., due to severe illness), then
                poverty can persist despite the higher wage and steady hiring.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  A is about perceptions of poverty, not whether anyone actually lives in it.
                </li>
                <li>
                  B concerns inequality, not whether full‑time work prevents poverty.
                </li>
                <li>
                  C references history; the present policy could still differ in effect.
                </li>
                <li>
                  D speculates about future hikes, while the claim is about the current change.
                </li>
                <li>
                  E shows a path to poverty unrelated to wage level—this breaks the argument. Correct.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={6}
          prompt={
            <>
              In 2006, an E. coli outbreak was tied to fresh produce. Afterward,
              wholesale buyers became very cautious. Since wild animals near farms
              can carry E. coli, many growers decided to clear nearby wildlife
              habitat to protect profits.
              <br />
              Which option, if true, indicates a possible flaw in the farmers’ plan?
            </>
          }
          options={[
            "Natural habitats often support yields by improving water quality and keeping pest populations in check.",
            "Many wild species that carry E. coli rarely contaminate crops even when they live close to fields.",
            "That 2006 outbreak was ultimately linked only to bagged spinach.",
            "Installing fences can keep wildlife out of fields even if habitat is close by.",
            "When foodborne illness leads to lawsuits, wholesalers are often targeted rather than growers.",
          ]}
          correct="Natural habitats often support yields by improving water quality and keeping pest populations in check."
          solution={
            <>
              <p className="mt-2">
                The plan assumes clearing habitat will protect profits. But if the
                habitat provides ecosystem services (water filtration, natural pest
                control) that boost yields, removing it could cut output and hurt
                profitability—the opposite of the goal.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  A shows a downside that can reduce profits. Correct.
                </li>
                <li>
                  B leaves open that some animals still pose risk; the plan could still help.
                </li>
                <li>
                  C doesn’t rule out future outbreaks in other produce types.
                </li>
                <li>
                  D offers an alternative measure but doesn’t show clearing won’t work.
                </li>
                <li>
                  E talks about litigation targets, not demand or profitability.
                </li>
              </ul>
            </>
          }
        />

        <section className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <p className="text-gray-200 font-semibold">Big picture</p>
          <p className="mt-2">
            In hybrid Logical Flaw items, you’re still naming what’s wrong with the
            reasoning—causal leaps, missing assumptions, fragile plans—but the test
            reveals that flaw via a new fact. Train yourself to ask: “What would,
            if true, show the conclusion doesn’t necessarily follow?”
          </p>
        </section>
      </article>
    </main>
  );
}