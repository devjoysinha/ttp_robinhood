import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.3.1 Sequencing Error | Cause-and-Effect Arguments",
  description:
    "Learn the 'sequencing' fallacy in cause–effect arguments: why “X before Y” doesn’t prove X caused Y. Includes one Weaken and one Strengthen multiple‑choice example with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.3.1 Cause-and-Effect Reasoning Error One: Sequencing
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common logical slip happens when we note that one event occurs before
          another and jump to the conclusion that the earlier event caused the
          later one. In symbols:{" "}
          <InlineMath math={"\\text{X happens before Y} \\;\\not\\Rightarrow\\; X \\text{ caused } Y"} />.
          Order in time alone is not evidence of a causal link.
        </p>

        <MustKnow>
          Seeing X occur before Y is not enough to conclude causation. To claim
          that X caused Y, you need more than sequence—you need to rule out
          reasonable alternatives, such as other causes or a coincidence.
        </MustKnow>

        <p>
          Consider a quick illustration. You have a headache, then you take an
          aspirin. An hour later, your headache is gone. It’s tempting to say the
          aspirin cured the headache, but several other explanations could work:
        </p>
        <ul className="list-disc pl-6">
          <li>The headache might have resolved on its own over time.</li>
          <li>Perhaps you were dehydrated, and the water you drank with the pill helped.</li>
          <li>A loud noise stopped, removing the trigger for the pain.</li>
          <li>You received good news, lowering stress and easing the headache.</li>
          <li>You’d taken turmeric earlier, which can reduce headache symptoms.</li>
        </ul>

        <p>
          The big idea is that mere sequence is weak evidence. Without additional
          support, “X then Y” does not show “X causes Y.”
        </p>

        <MustKnow>
          Post hoc fallacy: mistaking “after” for “because.” Sequence is not
          causation.
        </MustKnow>

        <section aria-labelledby="weaken-example">
          <h3 id="weaken-example" className="text-xl font-semibold text-white">
            Weaken the Argument: Sequencing Trap
          </h3>

          <MCQExample
            number={3}
            prompt={
              <>
                In 2012, Muscat Sound experienced a surge of algae blooms. Since
                then, manatees in the sound have died in unusually large numbers.
                Therefore, the algae blooms are causing the manatee deaths.
                Which of the following, if true, most undermines this reasoning?
              </>
            }
            options={[
              "Fish populations in Muscat Sound have stayed stable since the blooms began.",
              "There have been fewer motorboats on the sound since the blooms started.",
              "The algae bloom increase was driven by a rise in pollutants that are known to be lethal to manatees.",
              "Toxins from the algae kill seagrass, the primary food source of manatees.",
              "In another region with a similar algae bloom outbreak, overall marine mortality did not increase.",
            ]}
            correct="The algae bloom increase was driven by a rise in pollutants that are known to be lethal to manatees."
            solution={
              <>
                <p>
                  The conclusion treats timing as proof of causation. A strong way
                  to weaken this is to offer a plausible alternative cause of the
                  deaths that also explains the blooms.
                </p>
                <p>
                  Choice C does exactly that: pollutants both trigger algae blooms
                  and are themselves fatal to manatees. This “third cause” breaks
                  the claimed link “blooms → deaths.”
                </p>
                <p>
                  Why the others don’t weaken:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    A: Fish stability doesn’t tell us what’s killing manatees.
                  </li>
                  <li>
                    B: Fewer boats removes an alternative cause; if anything, that
                    leans toward the algae explanation.
                  </li>
                  <li>
                    D: Explains a mechanism by which blooms could harm manatees,
                    which supports, not weakens, the conclusion.
                  </li>
                  <li>
                    E: Ambiguous—without knowing whether manatees live there or
                    relevant conditions match, it’s not a decisive weaken.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="strengthen-example">
          <h3 id="strengthen-example" className="text-xl font-semibold text-white">
            Strengthen the Argument: Sequencing with Comparative Evidence
          </h3>

          <MCQExample
            number={4}
            prompt={
              <>
                Two years ago, many states loosened their fireworks laws by
                permitting a wider range of products. A study reports a rise in
                severe fireworks-related burns among minors in those states over
                the last two years. Advocates argue that the loosened laws caused
                the increase in severe burns. Which statement, if true, most
                bolsters their claim?
              </>
            }
            options={[
              "The newly permitted items are not more powerful than previously allowed fireworks.",
              "Fireworks vendors expanded into new areas during the last two years.",
              "Some states that loosened their laws did not sell more total fireworks.",
              "Among adults, severe fireworks-related burns neither rose nor fell over the same period.",
              "States that kept their fireworks laws unchanged did not see an increase in severe burns among minors.",
            ]}
            correct="States that kept their fireworks laws unchanged did not see an increase in severe burns among minors."
            solution={
              <>
                <p>
                  The advocates infer causation from timing. To strengthen, add
                  comparison evidence that aligns the effect with the presence of
                  the proposed cause.
                </p>
                <p>
                  Choice E does this: where laws didn’t change (no cause), the
                  spike in severe burns (effect) didn’t occur. In symbolic form:{" "}
                  <InlineMath math={"\\neg X \\Rightarrow \\neg Y"} />. This
                  pattern is supportive of a causal link.
                </p>
                <p>
                  Why the others don’t strengthen:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    A: Removes a potential strengthener (greater power) rather
                    than adding support.
                  </li>
                  <li>
                    B: Introduces an alternative explanation (greater access),
                    which weakens rather than strengthens.
                  </li>
                  <li>
                    C: The claim concerns variety, not total quantity sold, so
                    this is off-point.
                  </li>
                  <li>
                    D: Adult outcomes don’t address the causal story about minors.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Takeaway: sequence is about timing, not proof. Build or test causation
          by looking for patterns beyond “X before Y,” such as alternative causes,
          mechanisms, or comparative evidence showing that when the cause is
          absent, the effect tends to be absent too.
        </p>

        <p className="text-gray-400">
          Up next: co‑occurrence—why “X and Y happened together” is not enough to
          conclude causation either.
        </p>
      </article>
    </main>
  );
}