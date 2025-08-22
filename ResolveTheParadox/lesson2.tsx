import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.3 Resolve the Paradox: Key Contrast Keywords | Critical Reasoning",
  description:
    "Learn the contrast signal words that often link the two facts in Resolve the Paradox questions. Includes a fully worked example with answer explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve The Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.3 High‑Value Contrast Keywords
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Resolve the Paradox problems, two facts appear to clash.
          Very often, those facts are tied together by a word or phrase that
          signals a turn or contrast. Spotting that pivot helps you see exactly
          where the conflict lies—and what kind of information could reconcile it.
        </p>

        <MustKnow>
          Train your eyes to catch contrast signposts. These words frequently
          connect the two seemingly incompatible facts and highlight the tension
          you must resolve.
        </MustKnow>

        <div>
          <h3 className="sr-only">Common contrast keywords</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li>yet, but, however</li>
            <li>paradoxically, surprisingly, unexpectedly</li>
            <li>despite, although, though, even though</li>
            <li>unlike, instead, rather</li>
          </ul>
        </div>

        <p>
          In the example below, notice how the contrast word marks the shift
          between two facts that seem to point in different directions.
        </p>

        <MCQExample
          number={3}
          prompt="In the city of Argentium, a river is crossed by one main bridge and two smaller bridges. Typically, if a rush‑hour accident forces the main bridge to close, the two smaller bridges become jammed with cars. However, when the main bridge’s roadway was shut for scheduled repairs for two months, rush‑hour traffic on the two smaller bridges was not higher than usual. Which of the following, if true, best accounts for this result?"
          options={[
            "Drivers headed to Argentium can use bridges just outside the city to cross the river without lengthy detours.",
            "The two smaller bridges were engineered to handle volumes far above their usual rush‑hour loads.",
            "A large share of Argentium residents travel by bicycle in dedicated bike lanes.",
            "When people know ahead of time that congestion is likely, many choose public transit instead of driving.",
            "During the roadway closure for repairs, the pedestrian walkway on the main bridge stayed open.",
          ]}
          correct="When people know ahead of time that congestion is likely, many choose public transit instead of driving."
          solution={
            <>
              <p className="mb-2 font-semibold">What’s given:</p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Unplanned rush‑hour closures (accidents) → smaller bridges get
                  clogged.
                </li>
                <li>
                  Planned, long maintenance closure → smaller bridges are not
                  busier than normal.
                </li>
                <li className="mt-2">
                  Paradox: Why do unplanned vs. planned closures lead to
                  different traffic outcomes on the smaller bridges?
                </li>
              </ul>

              <p className="mb-2 font-semibold">Evaluate the choices:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A: Nearby out‑of‑city bridges exist in both situations, so this
                  doesn’t explain the difference. Not a resolver.
                </li>
                <li>
                  B: Bridge design capacity isn’t the issue—the smaller bridges do
                  congest when the main bridge shuts unexpectedly. Irrelevant to the
                  contrast.
                </li>
                <li>
                  C: Cycling is a background constant; it doesn’t distinguish
                  unplanned vs. planned closures. Doesn’t reconcile the gap.
                </li>
                <li>
                  D: Forewarning is the key distinction. With notice (maintenance),
                  many commuters switch to transit and avoid adding to car volume on
                  the smaller bridges. With accidents, people can’t plan and keep
                  driving, causing jams. This directly resolves the paradox.
                </li>
                <li>
                  E: A pedestrian walkway doesn’t address vehicular congestion on
                  the smaller bridges. Off‑target.
                </li>
              </ul>

              <p className="mt-4">
                The option that introduces a meaningful difference between the two
                scenarios—and thus reconciles the facts—is D.
              </p>
            </>
          }
        />

        <p>
          Takeaway: Look for an answer that distinguishes the two facts in a way
          that makes them compatible. If a detail is present in both situations,
          it can’t be what resolves the conflict.
        </p>
      </article>
    </main>
  );
}