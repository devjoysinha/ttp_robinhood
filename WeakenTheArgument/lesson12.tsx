import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.7.6 Weaken Type 6: Plans That Won’t Work | GMAT Critical Reasoning",
  description:
    "Learn a common weaken pattern: answers that introduce new facts showing a plan will not deliver the promised result. See four sub‑patterns plus three practice CR examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.6 Weakening Type 6: New information shows a plan won’t work
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Whenever an author proposes a plan of action, the reasoning quietly
          assumes that nothing will interfere with the plan and that the plan
          will actually deliver the promised outcome. In Weaken questions, the
          correct choice often introduces a factor the author didn’t consider,
          giving us a reason to doubt the plan’s success.
        </p>

        <MustKnow>
          A plan-based argument typically relies on an assumption that there are
          no “spoiler” variables waiting to derail execution. In Weaken
          questions, the right answer frequently reveals one of those variables
          or shows that the projected result won’t materialize even if the plan
          is attempted.
        </MustKnow>

        <p>
          A common setup in Weaken problems is: a plan is presented to achieve
          a target result. The correct answer then shows the plan will not
          produce that result. Typical ways this happens include:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            The plan tackles only one piece of the situation while ignoring a
            second, crucial factor that still blocks success.
          </li>
          <li>
            The method used by the plan creates harmful side effects that make
            the situation worse in another way.
          </li>
          <li>
            The plan is justified by analogy to a prior, “similar” case, but
            current conditions differ in a key respect, so the old playbook no
            longer applies.
          </li>
          <li>
            The argument overlooks how the system actually works; the logic
            misses a mechanism that’s essential for the plan to succeed.
          </li>
        </ul>

        <MustKnow>
          If the conclusion is “do X and we’ll get Y,” a strong Weaken answer
          often shows that even if X happens, Y won’t follow, because of a
          missing factor, a negative side effect, a bad analogy to the past, or
          a misunderstanding of the underlying process.
        </MustKnow>

        <section aria-labelledby="ex19" className="space-y-4">
          <h3 id="ex19" className="text-xl font-semibold text-white">
            Example 19
          </h3>

          <MCQExample
            number={19}
            prompt="President: Several countries that could have imported our wind turbines have imposed unfair tariffs that kept our products out. I’m negotiating trade deals to remove those tariffs. Within a few months, our wind‑turbine industry will boost output and hire more workers."
            options={[
              "Wind turbines generate electricity only when winds are strong enough to turn the blades.",
              "Manufacturers in our country are currently constrained by a shortage of copper, an essential input for wind turbines.",
              "The trade talks are not expected to eliminate tariffs on solar panels.",
              "Oil prices, which move with demand for wind turbines, are not expected to rise soon.",
              "Domestic demand for wind turbines is not projected to increase this year.",
            ]}
            correct="Manufacturers in our country are currently constrained by a shortage of copper, an essential input for wind turbines."
            solution={
              <>
                <p>
                  Structure: remove tariffs → more exports → more production and
                  jobs. To weaken, show a blocker that prevents production from
                  increasing even if tariffs disappear.
                </p>
                <p>
                  Choice “Manufacturers in our country are currently constrained
                  by a shortage of copper…” adds exactly that blocker. If firms
                  can’t source copper, they can’t ramp up output or hiring even
                  with new export opportunities. Thus the prediction is doubtful.
                </p>
                <p>
                  The other options don’t undercut the core link. Wind
                  variability, solar tariffs, flat oil prices, or flat domestic
                  demand do not prevent export-driven production growth after
                  tariffs are removed.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex20" className="space-y-4">
          <h3 id="ex20" className="text-xl font-semibold text-white">
            Example 20
          </h3>

          <MCQExample
            number={20}
            prompt="The city of Tennico will run recurring gun buybacks. Anyone can sell a gun to the city with no questions asked. Therefore, the program will reduce the number of guns carried in public places."
            options={[
              "Because sellers aren’t questioned, officials may miss chances to collect information that could help prevent violence.",
              "At times a friend or relative turns in a gun to keep the owner from using it violently.",
              "Money allocated to buybacks could instead fund education programs aimed at root causes of violence.",
              "Knowing they can easily resell a gun later makes many people more comfortable buying new guns.",
              "Many of the guns sold would have been left at home rather than carried in public anyway.",
            ]}
            correct="Knowing they can easily resell a gun later makes many people more comfortable buying new guns."
            solution={
              <>
                <p>
                  The conclusion is about fewer guns carried publicly. The best
                  weakener shows the plan could backfire or fail to reduce guns
                  on the streets.
                </p>
                <p>
                  If easy resale encourages more purchases, overall circulation
                  can rise, making it less likely that the number of guns
                  carried in public will drop. That directly challenges the
                  prediction.
                </p>
                <p>
                  The other choices either discuss different goals (e.g.,
                  gathering information, alternative spending) or leave room for
                  some reduction on the streets even if many turned‑in guns
                  wouldn’t have been carried.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex21" className="space-y-4">
          <h3 id="ex21" className="text-xl font-semibold text-white">
            Example 21
          </h3>

          <MCQExample
            number={21}
            prompt="Home Squad real estate agency will award a $10,000 monthly bonus to the top‑selling agent (in addition to commissions). Since even high performers will find that bonus motivating, this contest will have a positive impact on overall sales."
            options={[
              "The least productive agents will rarely see their income changed by the bonus.",
              "A large share of the agency’s prior sales success came from agents collaborating to close deals.",
              "$10,000 exceeds some agents’ average monthly commission totals.",
              "The commission on a single very large sale can be far greater than $10,000.",
              "Local housing demand is not expected to be strong over the next few years.",
            ]}
            correct="A large share of the agency’s prior sales success came from agents collaborating to close deals."
            solution={
              <>
                <p>
                  The argument assumes that rewarding individual competition will
                  lift total sales. If sales have largely depended on teamwork,
                  a winner‑take‑all contest could discourage cooperation and
                  undermine that engine of success, weakening the prediction.
                </p>
                <p>
                  The other choices don’t damage the core link between the bonus
                  and sales. For instance, a soft market affects sales with or
                  without the bonus; large one‑off commissions don’t mean the
                  bonus can’t still motivate; and the fact that some agents
                  won’t benefit doesn’t show overall sales won’t improve.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: when an argument claims “this plan will produce that
          result,” ask what could stop the plan from working, what unintended
          consequences it might trigger, whether past experience truly
          translates to the current situation, and whether the reasoning
          correctly models how the system behaves.
        </p>
      </article>
    </main>
  );
}