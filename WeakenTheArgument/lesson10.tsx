import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "3.7.4 Weakening Answer Type 4: Faulty Comparisons | Critical Reasoning",
  description:
    "Learn how to weaken arguments that rely on comparisons. Spot when two things aren’t similar in the relevant way, and use that difference to undermine the conclusion. Includes two multiple‑choice drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.4 Weakening Answer Type 4: When a Comparison Is Flawed
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Authors often use comparisons as evidence, implicitly assuming that
          what holds for one thing will hold for another similar thing. To
          weaken these arguments, show that the two items being compared differ
          in a way that matters for the conclusion.
        </p>

        <MustKnow>
          A comparison supports a conclusion only if the items are similar in
          the specific, relevant respect. If they meaningfully differ on that
          key dimension, the comparison is faulty and the conclusion loses
          support.
        </MustKnow>

        <p>
          A “faulty comparison” occurs when the argument treats two things as
          analogous even though they diverge in an important way, so evidence
          about one doesn’t transfer to the other.
        </p>

        <MustKnow>
          To weaken a comparison-based argument, point out a concrete, relevant
          difference between the two things being compared. The closer that
          difference is to the mechanism that links evidence to conclusion, the
          stronger the weakening.
        </MustKnow>

        <p>Try the examples below and focus on the exact basis of the comparison.</p>

        <MCQExample
          number={16}
          prompt="Kittens adopted early and handled daily tend to be much tamer than cats adopted as adults or rarely handled. Therefore, wild cats (for example, cheetahs) that are born in zoos and interact with keepers every day should be far tamer than their non‑captive counterparts."
          options={[
            "Compared with many other wild felines, cheetahs tend to be calmer by nature.",
            "Wild animals born in captivity share more traits with domesticated animals than do wild animals born in natural habitats.",
            "In recent decades, fatal incidents between keepers and captive‑born wild cats have been rare.",
            "House cats have been selectively bred for generations to live with humans, so their temperament is especially shaped by human contact, unlike wild cats.",
            "Zoos enforce safety procedures even when staff handle captive‑born wild cats.",
          ]}
          correct="House cats have been selectively bred for generations to live with humans, so their temperament is especially shaped by human contact, unlike wild cats."
          solution={
            <>
              <p>
                The author assumes that house cats and wild cats respond to
                human interaction in comparable ways. To weaken the conclusion,
                show a relevant dissimilarity.
              </p>
              <p>
                Option D highlights that house cats are the result of long-term
                breeding to coexist with people, making them unusually
                susceptible to human socialization. Wild cats lack this
                breeding history. That key difference undercuts the comparison,
                so the conclusion that captive‑born wild cats will be “much
                tamer” is not well supported.
              </p>
              <p>
                The other choices either shift focus (A, E), slightly
                strengthen or are neutral (B), or provide an outcome with many
                possible causes (C) rather than a targeted difference in how
                temperament is formed. Thus, D most directly weakens the
                argument.
              </p>
            </>
          }
        />

        <MCQExample
          number={17}
          prompt="Reintroducing wolves to Yellowstone restored the ecosystem by reestablishing key long‑standing relationships among species. Dingoes are wild dogs similar to wolves and have disappeared from parts of Australia. Therefore, reintroducing dingoes where they are missing should similarly restore local ecosystems in Australia."
          options={[
            "Although wolves and dingoes share common ancestors, they have evolved separately for thousands of years.",
            "In some Australian regions where dingoes once lived, they attacked livestock.",
            "Australia’s climate is highly variable, and relationships among species there change frequently rather than remaining stable over long periods.",
            "Like wolves, dingoes function as apex predators in habitats where they are present.",
            "Programs in Australia that tried to fix ecosystems by removing non‑native species have largely failed.",
          ]}
          correct="Australia’s climate is highly variable, and relationships among species there change frequently rather than remaining stable over long periods."
          solution={
            <>
              <p>
                The logic borrows a result from Yellowstone and applies it to
                Australia via a comparison. What made Yellowstone work was the
                restoration of long‑standing, stable interspecies relationships.
              </p>
              <p>
                Option C shows that Australian ecosystems often lack those
                stable, persistent relationships because of climate volatility.
                That critical difference breaks the core analogy and calls the
                conclusion into question.
              </p>
              <p>
                Options A and D talk about species traits without addressing the
                ecosystem stability that drove the Yellowstone outcome. Option B
                raises a drawback (livestock issues) but doesn’t show the plan
                won’t restore ecosystems. Option E critiques other restoration
                methods, not the dingo plan specifically. Thus, C most clearly
                undermines the conclusion.
              </p>
            </>
          }
        />

        <MustKnow>
          Checklist for comparison weakeners:
          <br />
          - Identify what makes the original case work.
          <br />
          - Show that the new case lacks that specific feature.
          <br />
          - Prefer differences tied to the conclusion’s mechanism, not side
          issues.
        </MustKnow>

        <p className="text-gray-300">
          Bottom line: a comparison is only as strong as the similarity that
          matters. Expose a relevant difference, and the argument’s support
          collapses.
        </p>
      </article>
    </main>
  );
}