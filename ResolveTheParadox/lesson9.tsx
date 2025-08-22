import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
// Note: Make sure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title:
    "5.8.2 Paradox Wrong Answer Type 2 — Similarities Don’t Resolve Differences | Critical Reasoning",
  description:
    "In Resolve the Paradox questions where the puzzle hinges on a difference between two items, answers that point out similarities are traps. Learn the rule and practice with two GMAT-style examples and full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8.2 Wrong Answer Type 2: The paradox hinges on a difference, but the choice highlights a similarity
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some paradox questions compare two things that share a lot in common yet behave differently in one key way. When that happens, the correct answer must uncover a relevant difference that accounts for the different outcomes. Any option that just tells you how the two things are alike will not resolve a discrepancy that is explicitly about how they differ.
        </p>

        <MustKnow>
          If the paradox stems from a difference between two items, then only an explanation that introduces a meaningful difference between those items can resolve it. A choice that emphasizes similarities cannot explain a difference-based paradox.
        </MustKnow>

        <p>
          A clean way to think about this is to inventory the two given facts, then ask: what specific difference could make both facts true at the same time?
        </p>

        <section aria-labelledby="math-intuition" className="rounded-md bg-gray-800/40 p-4">
          <h3 id="math-intuition" className="mb-2 text-base font-semibold text-gray-200">
            A quick energy-balance lens (why differences matter)
          </h3>
          <p className="text-sm text-gray-300">
            For paradoxes about fat loss or energy use, a difference that changes the net balance can resolve the puzzle:
          </p>
          <div className="mt-2">
            <BlockMath math={`\\Delta\\text{fat} \\;\\approx\\; \\text{calories burned} \\; - \\; \\text{calories consumed post-exercise}`} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            If group A tends to eat more after tougher workouts, that difference can flip the net. Notice how this is about a difference, not a similarity.
          </p>
        </section>

        <MCQExample
          number={10}
          prompt="Cardio typically burns more calories per hour than strength training. Yet a recent study found that people who only lift weights lose more body fat than those who only do cardio. Which option best resolves this discrepancy?"
          options={[
            "Both cardio and strength training increase endurance.",
            "Both cardio and strength training are associated with greater longevity.",
            "People who only do cardio tend to spend more total time exercising than those who only lift.",
            "Both cardio and strength training improve heart health, blood sugar control, and joint stability.",
            "People who burn more calories per hour during workouts tend to eat more afterward than those who burn fewer calories per hour.",
          ]}
          correct="People who burn more calories per hour during workouts tend to eat more afterward than those who burn fewer calories per hour."
          solution={
            <>
              <p>
                The paradox is that the higher hourly burn from cardio doesn’t translate into more fat loss. The only choice that introduces a relevant difference is the last one: a stronger post‑workout appetite for higher burners. That compensatory eating can shrink or erase the cardio advantage on the energy balance:
              </p>
              <div className="my-2">
                <InlineMath math={`\\Delta\\text{fat} \\approx \\text{burn} - \\text{intake}`} />
              </div>
              <p>
                If intake rises when burn rises, the net goes down. The other options simply note shared benefits (endurance, longevity, general health markers) or even intensify the paradox (more time spent on cardio) without explaining the difference in fat loss outcomes.
              </p>
            </>
          }
        />

        <MCQExample
          number={11}
          prompt="Cocoa—the main ingredient in both dark and milk chocolate—contains flavonoids that support arterial health. Nonetheless, studies show that eating dark chocolate improves arterial function while eating milk chocolate does not. Which option best explains this contrast?"
          options={[
            "Both dark and milk chocolate contain sugar, which can cause problems if overconsumed.",
            "Milk chocolate, unlike dark chocolate, often includes substantial cream, butter, and certain oils that are known to harm arteries.",
            "Both dark and milk chocolate can contain pesticide residues that may damage arteries at high levels.",
            "A large share of dark chocolate’s calories comes from saturated fat, excessive intake of which can impair arterial function.",
            "Both dark and milk chocolate are calorie dense and can lead to weight gain if eaten regularly.",
          ]}
          correct="Milk chocolate, unlike dark chocolate, often includes substantial cream, butter, and certain oils that are known to harm arteries."
          solution={
            <>
              <p>
                We’re asked to explain why one chocolate helps arteries while the other doesn’t, even though both contain flavonoids. The credited answer introduces a relevant difference: milk chocolate commonly adds ingredients that counteract the benefits. Choices that describe shared properties (sugar, pesticide residues, calorie density) don’t explain a difference‑based paradox. The saturated‑fat option adds confusion without establishing a clear contrast with milk chocolate.
              </p>
            </>
          }
        />

        <MustKnow>
          In difference‑driven paradoxes, ignore choices that only highlight similarities. Look for a concrete, relevant difference that lets both stated facts stand without contradiction.
        </MustKnow>

        <p className="text-gray-300">
          Bottom line: when the puzzle is “same setup, different result,” the winning answer must supply a difference that actually affects the result. Similarities are decoys.
        </p>
      </article>
    </main>
  );
}