import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "6.5.3 Strengthen by Showing No Effect Without the Cause | Critical Reasoning",
  description:
    "Learn a high‑yield strengthen technique for cause‑and‑effect arguments: demonstrate that when the supposed cause is absent, the effect doesn’t occur. Includes a GMAT‑style multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5.3 Strengthening a Cause‑and‑Effect Argument by Showing the Effect
          Disappears When the Cause Is Absent
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One reliable way to bolster a causal conclusion is to show that when
          the suspected cause is missing, the outcome also does not appear. In
          symbols, if the author claims{" "}
          <InlineMath math={"C \\to E"} aria-label="C implies E" />, then
          evidence that{" "}
          <InlineMath math={"\\lnot C \\to \\lnot E"} aria-label="not C implies not E" />{" "}
          offers meaningful support. Note that this isn’t a proof of causation,
          but it does make the proposed link more credible.
        </p>

        <MustKnow>
          For strengthen questions involving causality, evidence that the effect
          is absent whenever the alleged cause is absent provides direct support
          for the claim that the cause leads to the effect. In short: “no cause,
          no effect” is a classic strengthen pattern.
        </MustKnow>

        <p>
          Consider the following GMAT‑style example that leverages the “no
          cause → no effect” idea.
        </p>

        <MCQExample
          number={22}
          prompt={
            <>
              Recent drops in bee populations occurred during a period of
              increased use of neonicotinoid pesticides on crops. When used,
              traces of these pesticides are found in plant nectar and pollen,
              which bees collect for food. Therefore, neonicotinoid use is what
              caused the decline in bee populations.
              <br />
              <br />
              Which of the following, if true, most strongly supports the
              hypothesis above?
            </>
          }
          options={[
            "In regions where bees forage primarily on wildflowers rather than cultivated crops, bee colonies are thriving.",
            "Over the course of many decades, bee populations tend to rise and fall in regular cycles.",
            "The scientists who first designed neonicotinoids believed the chemicals would be harmless to bees.",
            "Colonies that gather pollen from many different plant species have stronger immune systems than colonies that rely on a single species.",
            "When crop seeds are treated with neonicotinoids before planting, the chemical spreads throughout the plant as it grows.",
          ]}
          correct="In regions where bees forage primarily on wildflowers rather than cultivated crops, bee colonies are thriving."
          solution={
            <>
              <p className="mb-2">
                Structure of the argument:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Premise: Bee declines coincided with increased use of
                  neonicotinoids; the chemical appears in nectar and pollen.
                </li>
                <li>Conclusion: Neonicotinoids caused the bee decline.</li>
              </ul>

              <p className="mt-4">
                We want evidence that strengthens the causal story. A powerful
                way is to show “no cause → no effect,” i.e.,{" "}
                <InlineMath math={"\\lnot C \\to \\lnot E"} />.
              </p>

              <p className="mt-4">
                Choice A says that where bees mainly feed on wildflowers (no
                neonicotinoid exposure), colonies are doing well (no decline).
                That mirrors “no cause, no effect” and directly supports the
                causal claim. This is the best answer.
              </p>

              <p className="mt-4">
                Choice B points to natural population cycles, which suggests the
                decline may be unrelated to pesticide use—this weakens rather
                than strengthens.
              </p>

              <p className="mt-2">
                Choice C discusses the original expectations of scientists,
                which is irrelevant to what actually happens to bees.
              </p>

              <p className="mt-2">
                Choice D is about immune system strength and plant diversity;
                it’s a possible side story with no clear tie to neonicotinoids.
              </p>

              <p className="mt-2">
                Choice E explains how the chemical moves through plants. We
                already knew it reaches nectar and pollen; this mechanism alone
                doesn’t add new causal support.
              </p>

              <p className="mt-4">
                Therefore, A most strongly supports the hypothesis.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: When you can show that the effect does not occur in the
          absence of the proposed cause, you reinforce the causal link. While
          this does not prove causation, it is one of the most persuasive ways
          to strengthen a cause‑and‑effect conclusion on test day.
        </p>
      </article>
    </main>
  );
}