import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.7.1 Sounds‑Right but Wrong Direction | Complete the Passage",
  description:
    "Learn to spot tempting choices that sound good but steer away from the passage’s aim. Includes two CR Complete‑the‑Passage examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.7.1 A Choice That Sounds Right but Veers Off the Passage’s Direction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, especially with Complete the Passage prompts, incorrect
          options often read smoothly and feel reasonable—but they drift away from where the
          argument is headed. Your job is to find the choice that actually pushes the passage
          to its intended conclusion, not one that raises a side issue or follows a slightly
          different line of thought.
        </p>

        <MustKnow>
          A correct completion must align with the passage’s purpose. Beware of answers that
          seem sensible yet redirect the reasoning—those “sounds‑right” traps don’t complete
          the author’s line of thought.
        </MustKnow>

        <section aria-labelledby="ex-seatown">
          <h3 id="ex-seatown" className="sr-only">
            Example: Fish farms and wild fish populations
          </h3>

          <p className="mt-2">
            Consider how two choices can feel relevant, yet only one fulfills the passage’s goal.
          </p>

          <MCQExample
            number={1}
            prompt="Which option best completes the passage? Overfishing around Seatown has substantially reduced wild fish populations. To help those populations rebound, the government plans to establish fish farms in nearby waters so that people rely more on farmed fish and less on wild catch. But fish farms often foster parasites. Thus, the plan may fail to achieve its goal because ____."
            options={[
              "medicated feed used at fish farms can harm certain organisms that live on the seafloor",
              "parasites that proliferate in fish farms can infect nearby juvenile wild fish, sharply reducing wild stocks",
            ]}
            correct="parasites that proliferate in fish farms can infect nearby juvenile wild fish, sharply reducing wild stocks"
            solution={
              <>
                <p>
                  The desired outcome is clear: let wild fish populations recover. We need a
                  completion that shows why the plan might not lead to that recovery.
                </p>
                <p>
                  The second option explains that parasites originating in the farms could attack
                  passing wild fish, undermining wild stock recovery—the core objective. The first
                  option points out a potential environmental issue with medicated feed, but that
                  concern doesn’t explain why wild populations specifically would fail to rebound.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Anchor on the author’s aim. If an answer choice does not directly address the stated
          objective or the blank’s role in the argument, it’s likely a subtle red herring.
        </MustKnow>

        <section aria-labelledby="ex-teens">
          <h3 id="ex-teens" className="sr-only">
            Example: Restricted licenses and risky behavior
          </h3>

          <MCQExample
            number={2}
            prompt="Which of the following best completes the passage? In many states, teens receive provisional driver’s licenses allowing them to drive only between 5 a.m. and 9 p.m. These limits keep young drivers off the road during some of the riskiest hours. Still, parents should know that such restrictions can themselves lead to hazardous behavior, because ____."
            options={[
              "many provisional licenses allow driving at any hour when traveling directly between home and a job",
              "reaching the age for an unrestricted license does not necessarily mean a driver is skilled",
              "in some states, teens can earn an unrestricted license by completing a driver‑education program",
              "some teens speed so they can get home before the cutoff time",
              "provisional licenses still allow driving during certain hours when many crashes occur",
            ]}
            correct="some teens speed so they can get home before the cutoff time"
            solution={
              <>
                <p>
                  The passage presents a tension: the rules are meant to improve safety, yet they
                  can also trigger unsafe behavior. A good completion must show how the restriction
                  itself can produce danger.
                </p>
                <p>
                  The choice stating that some teens speed to beat the curfew resolves this
                  tension—an action directly caused by the time limit and inherently risky. The
                  other options discuss situations where the restriction doesn’t apply, driver
                  skill in general, or hours still permitted—not how the restriction creates
                  dangerous behavior.
                </p>
                <p>
                  Therefore, “some teens speed so they can get home before the cutoff time” best
                  completes the passage.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: don’t be persuaded by wording that merely sounds aligned—demand a choice
          that precisely advances the author’s purpose and resolves the prompt’s final claim.
        </p>
      </article>
    </main>
  );
}