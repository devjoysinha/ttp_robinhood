import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.5 Pinpointing the Paradox to Resolve | Critical Reasoning",
  description:
    "Master Resolve the Paradox questions by defining exactly what must be explained. Learn directionality, avoid common trap answers, and work through a fully reasoned multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.5 To Solve a Paradox Question, First Nail the Exact Paradox You Must Resolve
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, precise reading is everything. Question writers
          choose words carefully, and small differences in phrasing often change
          what has to be explained. That is especially true for Resolve the
          Paradox items.
        </p>

        <MustKnow>
          In Resolve the Paradox questions, every word in the prompt matters.
          Treat the wording as a set of instructions about what must be
          explained.
        </MustKnow>

        <p>
          Most mistakes on these problems come from not stating, in plain terms,
          the exact oddity that needs reconciling. If you don’t lock in on the
          specific conflict, it’s easy to chase an answer that addresses a
          nearby—but different—issue.
        </p>

        <MustKnow>
          Before you look at the choices, restate the paradox precisely. If you
          can’t say exactly what needs explaining, your odds of picking the
          correct choice drop dramatically.
        </MustKnow>

        <section aria-labelledby="duck-example" className="space-y-4">
          <h3 id="duck-example" className="text-xl font-semibold text-white">
            Quick Illustration
          </h3>
          <p className="italic">
            For years, the town of Pondville was flooded with ducks. The local
            government began paying a bounty to residents who could prove they
            had transported a duck to a nearby duck‑free town and released it
            there. Two years after the program started, Pondville had even more
            ducks than before.
          </p>
          <p>
            What do we actually have to explain? The correct target is:
            “Why did Pondville’s duck population increase after the reward
            program began?”
          </p>
          <p>Common but imprecise targets include:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>“Why didn’t the plan work?”</li>
            <li>“Why didn’t the number of ducks go down?”</li>
          </ul>
          <p>
            Those are close but not the same. If you chase them, trap choices
            suddenly look appealing, for example:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li className="italic">
              Most residents were too busy to transport ducks.
            </li>
            <li className="italic">
              Most exported ducks found their way back to Pondville.
            </li>
          </ul>
          <p>
            Each explains why the plan might not reduce ducks, but neither
            explains the observed increase. A better explanation targets the
            rise directly, such as:
          </p>
          <p className="italic">
            To collect multiple rewards easily, some residents started breeding
            ducks at home, and many of those ducks escaped—boosting the local
            population.
          </p>
          <p>
            Notice how the correct explanation would blend in with trap options
            if you hadn’t first pinned down the exact paradox (the increase).
          </p>
        </section>

        <MustKnow>
          Direction matters. Sometimes you must explain an increase, sometimes a
          decrease, no change, or a difference between two similar things. Name
          the direction or relationship explicitly before evaluating choices.
        </MustKnow>

        <section aria-labelledby="mcq" className="space-y-4">
          <h3 id="mcq" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <MCQExample
            number={5}
            prompt="In Oakville, a national coffee chain opened a store with a large advertising budget. Surprisingly, the town’s three independent coffee shops each saw a sizable jump in business after the chain opened. Which option best accounts for this outcome?"
            options={[
              "Most regular coffee drinkers in Oakville prefer the taste at the independent shops to the chain’s coffee.",
              "During peak periods, lines at the chain often exceed the wait time many customers will tolerate.",
              "The independent shops are long‑standing businesses whose owners are well known in the community.",
              "The chain’s marketing persuaded many people that drinking coffee is enjoyable and worth adding to their routines.",
              "The chain offers not only coffee but also gourmet sandwiches and desserts.",
            ]}
            correct="The chain’s marketing persuaded many people that drinking coffee is enjoyable and worth adding to their routines."
            solution={
              <>
                <p>
                  Facts: A big chain arrives; afterwards, local shops see
                  increased business. Paradox: Why would local shops gain sales
                  after a powerful competitor appears?
                </p>

                <p>
                  A. Preference for local taste might explain why local business
                  didn’t drop, but it doesn’t introduce a reason for the
                  increase. It’s old information, not a new catalyst.
                </p>
                <p>
                  B. Long lines at the chain don’t guarantee those people
                  divert to the independents; they might postpone purchases or
                  leave. The choice doesn’t tie directly to increased local
                  demand.
                </p>
                <p>
                  C. Familiar owners again explains how locals can compete, not
                  why sales rose after the chain opened. No new driver of
                  demand.
                </p>
                <p>
                  D. If the chain’s advertising grows the overall number of
                  coffee drinkers in town, all shops benefit. That explains why
                  the independents experienced an uptick after the chain
                  arrived. This resolves the paradox.
                </p>
                <p>
                  E. A broader menu at the chain doesn’t explain why the
                  independents gained customers.
                </p>
                <p>
                  Correct answer: D.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: define the exact phenomenon—and its direction—before you
          read the choices. Then keep only options that genuinely explain that
          phenomenon. Everything else is noise.
        </p>
      </article>
    </main>
  );
}