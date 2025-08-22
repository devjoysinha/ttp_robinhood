import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "4.9 Validate a Conclusion by Changing, Adding, or Removing a Variable | Critical Reasoning",
  description:
    "Learn a powerful Strengthen technique: confirm a causal conclusion by manipulating a key variable. Includes a quick real‑world illustration and a multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9 Validating a Conclusion by Changing, Adding, or Removing a Variable
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Correct answers to Strengthen questions often confirm a conclusion by
          showing what happens when we manipulate a key factor: we can tweak it, introduce it,
          or take it away entirely and observe the outcome. When the observed change lines up
          with the author’s prediction, the argument gets stronger.
        </p>

        <MustKnow>
          A common way to strengthen a causal claim is to show that removing the suspected
          cause makes the effect disappear. If a real causal link exists, then when the cause
          is absent, the effect should also be absent. In symbols:{" "}
          <InlineMath math={"C \\rightarrow E \\quad \\text{and we expect} \\quad \\neg C \\Rightarrow \\neg E"} />.
        </MustKnow>

        <p>
          Example idea: suppose an author claims that kids’ sugar intake leads to trouble
          with learning. An answer that reports a group of children who avoid sugar and
          show no learning issues would reinforce that claim, because eliminating the
          proposed cause (sugar) coincides with eliminating the effect (learning problems).
        </p>

        <MustKnow>
          To bolster a causal conclusion, look for answers that:
          <br />
          - remove the proposed cause and show the effect is gone (elimination),
          <br />
          - add or increase the proposed cause and show the effect appears or intensifies (addition),
          <br />
          - change the relevant condition and show the effect changes in the predicted way (manipulation).
        </MustKnow>

        <MCQExample
          number={8}
          prompt="In the Andes, frog populations have dropped sharply. Some scientists attribute the decline to warmer temperatures from global climate change. However, because chytrid fungus—often fatal to frogs—is now widespread in the region, the more plausible explanation is infection by this fungus. Which of the following, if true, most strengthens the argument?"
          options={[
            "Human activity introduced chytrid fungus into the Andean ecosystem.",
            "At elevations where chytrid fungus cannot survive, frog populations in the Andes have remained stable over the last two decades.",
            "When air temperatures exceed a certain threshold, chytrid fungus does not infect frogs.",
            "Researchers do not yet know what fraction of frog species have developed resistance to chytrid fungus.",
            "Rising temperatures caused by climate change can speed up the spread of chytrid fungus across regions.",
          ]}
          correct="At elevations where chytrid fungus cannot survive, frog populations in the Andes have remained stable over the last two decades."
          solution={
            <>
              <p>
                We’re asked to strengthen the claim that chytrid fungus—not warmer
                temperatures—is the likely cause of the dramatic population drop.
                A strong approach is to eliminate the proposed cause and see the effect vanish.
              </p>

              <p>
                Choice B reports that in places where the fungus can’t live, the declines
                don’t occur. That’s exactly the elimination pattern we want: remove the cause,
                lose the effect. This aligns with the principle{" "}
                <InlineMath math={"\\neg C \\Rightarrow \\neg E"} /> and thus supports the
                fungus‑causes‑decline story.
              </p>

              <p>
                Why the others don’t strengthen:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  A: How the fungus arrived doesn’t show that it’s the cause of the decline.
                </li>
                <li>
                  C: Without knowing whether the Andes are above that temperature, the impact
                  is unclear. In some scenarios it could even undercut the argument.
                </li>
                <li>
                  D: Uncertain resistance rates could help or hurt the claim; it’s ambiguous.
                </li>
                <li>
                  E: Explains spread speed, not whether the fungus is responsible for the
                  observed declines.
                </li>
              </ul>
              <p>Therefore, B most strongly supports the conclusion.</p>
            </>
          }
        />

        <p>
          Takeaway: To validate a causal conclusion, prefer answers that directly tie changes
          in the proposed cause to predictable changes in the effect—especially by removing
          the cause and showing the effect disappears.
        </p>
      </article>
    </main>
  );
}