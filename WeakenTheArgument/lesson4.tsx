import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.5 Weaken ≠ Destroy | Critical Reasoning",
  description:
    "Learn why weakening an argument doesn’t require demolishing it. See subtle vs. decisive weakeners, then practice with two GMAT-style multiple‑choice examples and full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.5 Weakening Does Not Mean Wrecking
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a prompt asks you to weaken an argument, your job is not to
          obliterate it. A correct weakener can be big, but more often it’s a
          targeted nudge: add a relevant complication, expose a questionable
          assumption, or introduce a plausible alternative that makes the
          conclusion less convincing.
        </p>

        <MustKnow>
          A valid weakener doesn’t have to prove the conclusion false. It’s
          enough to reduce confidence in the conclusion by raising a credible
          concern or surfacing an overlooked factor.
        </MustKnow>

        <p>
          Strong answers frequently poke at assumptions behind a plan or
          prediction. If the plan depends on things going smoothly, then any
          reasonable hitch that could derail the plan weakens the argument.
        </p>

        <section aria-labelledby="samples-title" className="space-y-4">
          <h3
            id="samples-title"
            className="text-xl font-semibold text-white mt-6"
          >
            Subtle vs. decisive weakeners: quick illustrations
          </h3>
          <p>
            Consider an argument claiming: “Factory pollution reduced a lake’s
            axolotl population. Move the factory and the population will be back
            to previous levels within two years.”
          </p>
          <ul className="list-disc ms-6 space-y-2">
            <li>
              Decisive weakener (attacks a key timeline assumption): “The
              contaminants break down only several years after the pollution
              source disappears.” If true, the two‑year rebound is doubtful.
            </li>
            <li>
              Decisive weakener (population dynamics): “After habitat stress,
              each generation produces half as many offspring as the previous
              one.” Using soft math, the population follows a decay pattern
              like a_n = a₀·(1/2)ⁿ, so a rapid rebound is unlikely.
            </li>
            <li>
              Subtle weakener (introduces a competing factor): “Pollutants kept
              tilapia, a natural axolotl predator, in check.” Removing the
              factory may let predators surge, casting doubt on a quick recovery
              without ruling it out.
            </li>
            <li>
              Subtle weakener (new obstacle): “Recent genetic changes make
              axolotls unable to thrive on their former food source.” Even with
              cleaner water, food availability may now impede the rebound.
            </li>
          </ul>

          <MustKnow>
            Weaken = introduce reasonable doubt. Decisive attacks are fine, but
            subtle, well‑targeted complications are very often correct.
          </MustKnow>
        </section>

        <MCQExample
          number={6}
          prompt="The Silver Bullet Tea Company opened upscale tea shops in the affluent city of Silverton and launched TV, newspaper, and online ads last week. Therefore, the shops will soon be packed with local residents buying tea. Which option most undermines this reasoning?"
          options={[
            "In Silverton, businesses may operate only if they comply with city ordinances.",
            "The company spent less than half of the marketing budget originally set for Silverton.",
            "Most Silverton residents are willing to buy premium tea.",
            "Because they spend much of their time on outdoor activities, most Silverton residents seldom watch TV, read the paper, or use the internet.",
            "In a recent city survey, many residents said the city needs more high‑end tea and coffee shops.",
          ]}
          correct={
            "Because they spend much of their time on outdoor activities, most Silverton residents seldom watch TV, read the paper, or use the internet."
          }
          solution={
            <>
              <p className="mb-2">
                Outline: The argument predicts crowded shops based on a media
                campaign. This assumes the campaign will reach and influence the
                target audience.
              </p>
              <p className="mb-2">
                The correct choice states that most residents rarely engage with
                TV, newspapers, or the internet, so the ads likely won’t reach
                them. If the audience doesn’t see the campaign, the projected
                surge in customers is less plausible. That directly weakens the
                plan’s effectiveness.
              </p>
              <ul className="list-disc ms-6 space-y-1">
                <li>
                  Ordinance compliance is generic and provides no evidence of a
                  conflict; it doesn’t weaken.
                </li>
                <li>
                  Spending “less than half” of the budget might still be
                  sufficient—too vague to weaken.
                </li>
                <li>
                  Willingness to buy premium tea strengthens, not weakens.
                </li>
                <li>
                  Stated demand for more high‑end shops also supports the plan.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={7}
          prompt="Blades of Glory skating rink earns revenue from admissions and concessions (food and drinks). During daytime sessions, most skaters don’t buy food, so food hasn’t been profitable then. Management plans to offer only drinks during the day to raise overall profitability. Which option most calls the plan into question?"
          options={[
            "At some rinks, daytime food sales are highly profitable.",
            "One hungry person can sway a group’s choice of which rink to visit.",
            "Some people who go to buy drinks decide to buy food as well.",
            "Many Blades of Glory customers skate some evenings and some days.",
            "Most visitors who would have bought both food and drinks will still buy drinks if food isn’t offered.",
          ]}
          correct={
            "One hungry person can sway a group’s choice of which rink to visit."
          }
          solution={
            <>
              <p className="mb-2">
                Plan: drop daytime food to cut an unprofitable line and boost
                overall profit. Hidden risk: removing food might reduce traffic
                (and thus admissions and drink sales).
              </p>
              <p className="mb-2">
                The correct option says a single hungry group member can steer
                the entire group to a different rink. If groups avoid Blades of
                Glory due to no food, the rink could lose admissions and drink
                revenue, defeating the purpose of the plan.
              </p>
              <ul className="list-disc ms-6 space-y-1">
                <li>
                  Profits at other rinks aren’t evidence about this rink.
                </li>
                <li>
                  “Some buy food with drinks” doesn’t show the plan fails; food
                  was unprofitable already.
                </li>
                <li>
                  Mixed day/evening attendance doesn’t address daytime profit.
                </li>
                <li>
                  If drink buyers still buy drinks, that tends to support—not
                  weaken—the plan.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Plan and prediction arguments hinge on assumptions. If your answer
          reveals a plausible obstacle or shows the plan won’t reach its
          audience, you’ve weakened the conclusion—even if the plan could still
          work sometimes.
        </MustKnow>

        <p className="mt-6">
          Bottom line: you don’t need a knockout punch. Introduce a credible
          reason to hesitate, and you’ve successfully weakened the argument.
        </p>
      </article>
    </main>
  );
}