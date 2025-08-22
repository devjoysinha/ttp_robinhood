import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "5.8.1 Paradox Trap Type 1: Explaining the Wrong Thing | Critical Reasoning",
  description:
    "Learn a common trap in Resolve-the-Paradox questions: choices that explain the wrong thing. See how to spot them, review a bee‑pollination mini‑case, and practice with two MCQs and full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8.1 Trap Type 1: Explaining the Wrong Thing
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For Resolve‑the‑Paradox problems, your job is to find an option that
          shows how two seemingly conflicting facts can both be true at once.
          Any choice that explains something else—even if it sounds related—isn’t
          the answer.
        </p>

        <MustKnow>
          Many tempting traps explain the wrong thing. The correct response must
          bridge the two facts that appear to clash; anything that doesn’t do
          that is out.
        </MustKnow>

        <p>
          A frequent variant of this trap explains only one side of the
          contradiction or offers background that never reconciles the two
          statements.
        </p>

        <MustKnow>
          If a choice only speaks to one side of the paradox, it can’t resolve
          the paradox.
        </MustKnow>

        <p className="font-semibold text-gray-200">
          Quick mini‑case: European bees in South America
        </p>
        <p>
          Suppose farmers bring European bumblebees to South America to boost
          pollination, yet some crop yields drop afterward. A wrong‑thing
          explanation might say, “European bees have been effective pollinators
          in Europe.” That addresses why they were introduced, not why yields
          fell. Another wrong‑thing explanation might say, “Most fruit crops need
          bee pollination,” which is true but doesn’t reconcile the drop in
          yields.
        </p>
        <p>
          A true resolution could be: “European bees carry parasites lethal to
          native bumblebees.” Now the two facts coexist—imports help pollination
          but simultaneously harm native pollinators, reducing overall yields.
        </p>

        <MustKnow>
          Explanations that discuss the entire topic without showing how both
          facts can hold together are also incorrect. The resolution must make
          the two facts compatible.
        </MustKnow>

        <MCQExample
          number={8}
          prompt="Researchers have clocked dolphins exceeding 50 kilometers per hour. Yet biologists agree a dolphin’s muscles alone cannot generate enough energy to propel it that fast. Which option best reconciles these facts?"
          options={[
            "Dolphins sometimes ride ocean swells, tapping the waves’ energy to boost their speed.",
            "At top speed, dolphins easily catch swift fish and squid that form a large share of their diets.",
            "Some shark species can generate sufficient power to swim faster than 50 kilometers per hour.",
            "Dolphins are also frequently observed cruising at speeds well below 50 kilometers per hour.",
            "Dolphins navigate using echolocation by emitting and sensing sound waves.",
          ]}
          correct="Dolphins sometimes ride ocean swells, tapping the waves’ energy to boost their speed."
          solution={
            <>
              <p className="mb-2">
                We need a statement that shows how dolphins can be recorded above
                50 km/h even though muscular output alone isn’t enough.
              </p>
              <p className="mb-2">
                Correct: Dolphins can “surf” waves and borrow external energy,
                so muscle power plus wave energy explains the observed speeds.
              </p>
              <p className="mb-2">
                Wrong‑thing explanations:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  “They catch fast prey” explains why they might want to be
                  fast, not how they are fast.
                </li>
                <li>
                  “Sharks can go that fast” talks about sharks, not dolphins.
                </li>
                <li>
                  “They also swim slowly” tells us nothing about their top
                  speeds.
                </li>
                <li>
                  “They use echolocation” explains navigation, not propulsion.
                </li>
              </ul>
            </>
          }
        />

        <p>
          The pattern is the same across problems: the right choice must make
          the two statements compatible. Anything that explains motivation,
          background, or a side topic without connecting the two facts misses
          the mark.
        </p>

        <MustKnow>
          The winning choice is the one that shows how both statements can be
          true at the same time. If it doesn’t reconcile both, it doesn’t
          resolve the paradox.
        </MustKnow>

        <MCQExample
          number={9}
          prompt="Some email scams start with messages that are obviously poorly written or that describe implausible opportunities. These are easy to spot, yet such emails tend to generate more revenue for scammers than polished emails do. Which option best explains this pattern?"
          options={[
            "Many scammers understand which writing styles are most persuasive.",
            "With bulk‑email tools, one person can send thousands of messages quickly.",
            "Scam emails are often built from templates that have been used repeatedly.",
            "People who don’t notice poor writing are also the least likely to detect the scam before completing the transaction.",
            "Experienced scammers know from practice which methods are effective.",
          ]}
          correct="People who don’t notice poor writing are also the least likely to detect the scam before completing the transaction."
          solution={
            <>
              <p className="mb-2">
                We need a link between “poorly written” and “higher scam
                yield.” The correct choice shows that bad writing acts as a
                filter: people who miss the red flags are the ones most likely
                to proceed and pay. Targeting that subset increases returns.
              </p>
              <p className="mb-2">
                The other options either describe know‑how, scale, or templates,
                but none explains why the poorly written messages outperform the
                polished ones.
              </p>
            </>
          }
        />

        <MustKnow>
          Beware of answer choices that sound relevant yet do not directly show
          how the two core facts fit together. If the middle step—reconciling
          both sides—is missing, the choice is wrong.
        </MustKnow>
      </article>
    </main>
  );
}