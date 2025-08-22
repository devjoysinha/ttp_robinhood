import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "3.8 Trap vs. Correct in Weaken Questions | Critical Reasoning",
  description:
    "Learn to distinguish seductive trap answers from real weakeners on GMAT‑style Critical Reasoning. Includes a guided example and six practice questions with concise explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.8 Telling Trap Choices from True Weakeners
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many wrong answers on Weaken questions are written to feel relevant
          and damaging, yet leave the argument’s logic intact. The correct
          answer typically targets the link between evidence and conclusion,
          even if it doesn’t read as “obviously related” at first glance.
        </p>

        <MustKnow>
          Trap choices tend to mention something related and negative-sounding
          but don’t undercut the conclusion’s support. The right choice
          challenges the reasoning: it exposes an alternative cause, a hidden
          assumption, a flawed comparison, or some gap that weakens how the
          premises lead to the conclusion.
        </MustKnow>

        <section aria-labelledby="cause-effect-demo" className="space-y-4">
          <h3 id="cause-effect-demo" className="text-xl font-semibold text-white">
            Quick cause–effect demo
          </h3>

          <MCQExample
            number={1}
            prompt="A study reports that parents who smoke are more likely than nonsmoking parents to have children who commit minor offenses. The author concludes that parental smoking causes kids to engage in destructive behavior. Which option most weakens the reasoning?"
            options={[
              "Some children who frequently misbehave have parents who do not smoke.",
              "Challenging life circumstances can lead parents to smoke and can also increase the likelihood that children act out.",
            ]}
            correct="Challenging life circumstances can lead parents to smoke and can also increase the likelihood that children act out."
            solution={
              <>
                <p className="mb-2">
                  The first option sounds relevant but doesn’t dent the logic:
                  the claim is about relative likelihood, not about all
                  misbehavior coming from kids of smokers. The second option
                  introduces a confounder (stressful circumstances) that can
                  explain both variables, weakening the causal jump from
                  “parents smoke” to “kids misbehave.”
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="targeted-practice" className="space-y-6">
          <h3 id="targeted-practice" className="text-xl font-semibold text-white">
            Targeted practice: spot the trap
          </h3>

          <MCQExample
            number={2}
            prompt="Transportation analyst: Over five years, using seatbelts reduced serious injuries in crashes at a 60‑mph speed limit by 48%. If our state mandates seatbelts, people’s risk of serious injury should drop to about half of current levels. What most undermines this conclusion?"
            options={[
              "The dataset includes only collisions documented in police reports.",
              "People wearing safety gear such as seatbelts tend to drive faster or less carefully than they otherwise would.",
            ]}
            correct="People wearing safety gear such as seatbelts tend to drive faster or less carefully than they otherwise would."
            solution={
              <>
                <p className="mb-2">
                  If seatbelt wearers also take more risks, the policy’s impact
                  may be smaller than the study suggests. Limiting the dataset
                  to police reports doesn’t, by itself, show a bias that
                  undercuts the conclusion.
                </p>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="A home energy firm offers insulation alongside solar, wind, and smart‑heating services. Due to competition, insulation is less profitable. The firm should drop insulation and focus on higher‑margin work. What most weakens this recommendation?"
            options={[
              "Customers who first inquire about insulation often end up buying full energy systems from the firm.",
              "Many individuals earn above‑average incomes providing insulation services.",
            ]}
            correct="Customers who first inquire about insulation often end up buying full energy systems from the firm."
            solution={
              <>
                <p className="mb-2">
                  If insulation is a feeder that drives lucrative cross‑sales,
                  cutting it could reduce overall profit. The fact that
                  independent providers make good money on insulation doesn’t
                  change this firm’s comparative margins or strategy.
                </p>
              </>
            }
          />

          <MCQExample
            number={4}
            prompt="City health official: When street vendors sell more frozen fruit snacks, petty crime rates also rise. So eating frozen fruit products must contribute to criminal tendencies. Which most undermines the conclusion?"
            options={[
              "A large share of petty crimes are committed by teenagers, who are less likely to go out on cold or rainy days.",
              "Some people say they feel calm and happy after eating frozen fruit snacks.",
            ]}
            correct="A large share of petty crimes are committed by teenagers, who are less likely to go out on cold or rainy days."
            solution={
              <>
                <p className="mb-2">
                  Weather is a plausible third factor: warm, sunny days increase
                  both outdoor snack sales and the number of people outside,
                  including teens, which can raise petty crime. Reports of a few
                  people feeling peaceful don’t meaningfully weaken the causal
                  claim.
                </p>
              </>
            }
          />

          <MCQExample
            number={5}
            prompt="CEO: We must add new safety measures. Compliance time and equipment costs will hurt profitability. Which most calls this into question?"
            options={[
              "Implementing the safety measures won’t disrupt a separate cost‑cutting project the company recently began.",
              "Consumers prefer to buy from companies with strong safety records and few workplace accidents.",
            ]}
            correct="Consumers prefer to buy from companies with strong safety records and few workplace accidents."
            solution={
              <>
                <p className="mb-2">
                  If safety boosts reputation and sales, the profit effect could
                  be neutral or positive. Not hindering an unrelated efficiency
                  project doesn’t address whether safety measures help or hurt
                  profits.
                </p>
              </>
            }
          />

          <MCQExample
            number={6}
            prompt="Tennis center owner: People in our region are shifting leisure time from tennis to cycling. Projections show tennis falling from 5% to 3% of leisure time while cycling rises from 1% to 5% over five years. If true, our business is in trouble. What most suggests the owner’s conclusion is wrong?"
            options={[
              "The price of high‑quality tennis gear is expected to drop significantly.",
              "Automation is expected to double the overall amount of leisure time people in the region have.",
            ]}
            correct="Automation is expected to double the overall amount of leisure time people in the region have."
            solution={
              <>
                <p className="mb-2">
                  Even if tennis falls to 3% of leisure time, doubling total
                  leisure can increase absolute tennis time. Simple math:
                </p>
                <div className="mt-2">
                  <BlockMath math={"2\\times 3\\% = 6\\%\\text{ of today’s leisure time}"} />
                </div>
                <p className="mt-2">
                  That’s more than the current 5% share. Cheaper equipment
                  doesn’t overturn the given projections.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-24" className="space-y-4">
          <h3 id="example-24" className="text-xl font-semibold text-white">
            Example 24
          </h3>

          <MCQExample
            number={7}
            prompt="Marketing executive: We rate our performance using independent customer‑satisfaction surveys. After switching survey providers, our ratings jumped right away. Because the new provider uses a longer, more detailed survey, the higher ratings must be more accurate than the earlier, lower ones. Which option most undermines this interpretation?"
            options={[
              "The new survey vendor serves about half as many client companies as the previous vendor.",
              "The new survey has been in use for five months; the prior survey was used for three years.",
              "Customers who feel positively about the company are more likely to invest time in completing a long, detailed survey.",
              "Creating a reliable customer‑satisfaction survey requires careful analysis to determine which questions to ask.",
              "The first few questions on the new survey closely mirror the first few questions on the old survey.",
            ]}
            correct="Customers who feel positively about the company are more likely to invest time in completing a long, detailed survey."
            solution={
              <>
                <p className="mb-2">
                  If satisfied customers are disproportionately represented in
                  responses, the new survey’s results can be skewed upward
                  rather than “more accurate.” The other options don’t show a
                  bias that undercuts the executive’s claim about accuracy.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Fewer client companies (A) doesn’t imply poorer
                    methodology or biased results.
                  </li>
                  <li>
                    Duration of use (B) doesn’t determine accuracy on its own.
                  </li>
                  <li>
                    General survey‑design best practices (D) don’t show whether
                    either survey actually followed them.
                  </li>
                  <li>
                    Similar opening questions (E) don’t address representativeness
                    or bias in the longer instrument.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <MustKnow>
          Before choosing a “negative‑sounding” option, ask: does this actually
          weaken how the premises support the conclusion? The best weakaners
          often point to a competing cause, a sampling or measurement flaw, or a
          reason the comparison doesn’t hold.
        </MustKnow>
      </article>
    </main>
  );
}