import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
// KaTeX note: ensure `katex/dist/katex.min.css` is imported once globally (e.g., in app/layout.tsx)
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "4.14 Strengthen Trap: Supports the Wrong Conclusion | Critical Reasoning",
  description:
    "Learn to avoid a common Strengthen trap: choices that support a different conclusion than the one in the stimulus. See two quick demos and a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.14 Trap Type 3: An Option That Backs the Wrong Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent mistake on Strengthen questions is losing sight of the exact
          claim we’re supposed to bolster. When that happens, it’s easy to pick an
          answer that lends credence to some other, related conclusion rather than
          the one stated in the argument.
        </p>

        <MustKnow>
          To strengthen an argument, the support must target the argument’s stated
          conclusion. If an option reinforces a different, related takeaway, it
          doesn’t strengthen the argument we were given.
        </MustKnow>

        <p>
          Why is this trap persuasive? Because the alternative conclusion often
          sounds plausible and lives in the same topic neighborhood as the real
          conclusion. Stay laser‑focused on the author’s claim, not on nearby ideas.
        </p>

        <section aria-labelledby="golado-demo" className="space-y-3">
          <h3 id="golado-demo" className="text-xl font-semibold text-white">
            Quick demo: related idea ≠ right target
          </h3>
          <p className="pl-4 border-l-2 border-gray-700">
            A country increases taxes on alcohol. Officials predict that the
            higher tax will shrink the budget deficit.
          </p>
          <p className="pl-4">
            Tempting trap answer: “The deficit is a small share of the total
            budget.” That statement could support a different conclusion (for
            instance, that it might be easy to close the gap entirely), but it
            doesn’t show that the tax change will reduce the gap at all. Size of
            the gap doesn’t tell us whether this policy lowers it.
          </p>
        </section>

        <ExampleCard
          number={13}
          title="Roofing material: which claim actually strengthens?"
          statements={[
            "A new reflective roofing material lowers A/C run time on hot days. Conclusion: using this roof will help a household save energy.",
            "(A) Trap: The new roof costs less to install than standard materials.",
            "(B) Correct: Because the roof retains heat, heating systems run less on cold days than they would with typical roofs.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The conclusion is about saving energy. A lower installation cost
                (choice A) supports a money‑related conclusion, not an energy one.
                Choice B directly increases the likelihood of total energy savings
                because it reduces heating energy when it’s cold, complementing the
                cooling benefit in heat.
              </p>
            </>
          }
        />

        <MustKnow>
          Before you read the options, write or say the conclusion out loud. When
          evaluating each choice, ask: “Does this make that exact claim more
          credible?” If the support points elsewhere, it’s not a strengthener.
        </MustKnow>

        <section aria-labelledby="mcq-drill" className="space-y-4">
          <h3 id="mcq-drill" className="text-xl font-semibold text-white">
            Drill: identify the true strengthener
          </h3>

          <MCQExample
            number={15}
            prompt="Most software firms hire support specialists to field customer calls. JustDoIt, a tax software company, instead has its engineers take those calls. Despite engineers’ higher hourly pay, the company expects this approach to save money over time. Which option most strongly confirms that expectation?"
            options={[
              "Compared with competitors, JustDoIt averages fewer help calls per user.",
              "JustDoIt’s engineers resolve customer issues just as quickly as dedicated support reps.",
              "Customer surveys show JustDoIt’s support satisfaction exceeds industry norms.",
              "Engineers who speak with users discover pain points that let them design future releases to be easier to use.",
              "JustDoIt has enough engineers to handle both product work and support calls.",
            ]}
            correct="Engineers who speak with users discover pain points that let them design future releases to be easier to use."
            solution={
              <>
                <p>
                  Target conclusion: the engineer‑handled model will save money in
                  the long run. A credible path to savings is to reduce the volume
                  or duration of future calls.
                </p>
                <p>
                  Choice D supplies the missing mechanism: by hearing problems
                  firsthand, engineers improve usability, which should lower future
                  support demand. Fewer calls and shorter interactions translate to
                  less paid time on support. Conceptually, long‑run cost behaves
                  like{" "}
                  <InlineMath math="\text{calls}\times\text{time per call}\times\text{wage}" />.
                  If “calls” and/or “time per call” drop enough, total cost can go
                  down even with a higher wage.
                </p>
                <p>
                  Why the others don’t strengthen the money‑savings claim:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    A: Fewer calls than competitors might be true for unrelated
                    reasons and doesn’t show this strategy causes savings for
                    JustDoIt relative to hiring specialists.
                  </li>
                  <li>
                    B: “Just as fast” keeps labor time equal while wages are higher,
                    so costs wouldn’t drop.
                  </li>
                  <li>
                    C: Higher satisfaction is nice but doesn’t guarantee lower
                    support costs.
                  </li>
                  <li>
                    E: Staffing sufficiency avoids a capacity problem, but it
                    doesn’t create savings.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            Strengthen choices must lift the argument’s actual conclusion. If a
            choice props up a different, appealing claim—cost, popularity, or
            satisfaction—while the conclusion is about something else, it’s a trap.
            Anchor to the exact claim and demand direct support.
          </p>
        </section>
      </article>
    </main>
  );
}