import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.6 Inference Traps: Common Wrong Answer Patterns | Verbal",
  description:
    "Train your eye to spot common trap answers in Inference questions: could‑be‑true, distorted wording, overreach, outside assumptions, and real‑world truths not supported by the passage. Includes a quick must‑be‑true check with logic notation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. Inference</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6 Common Inference Question Trap Answer Types
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To lower the odds of picking a tempting but incorrect option on Inference questions,
          it helps to recognize the patterns test writers use to craft trap answers. The list
          below covers frequent offenders, though new twists can appear. Your goal is to build
          a habit of asking, “Does the passage force this to be true?”
        </p>

        <MustKnow>
          Inference answers must be logically guaranteed by the text—nothing more, nothing less.
          A good litmus test is:{" "}
          <InlineMath math="\text{could be true} \;\neq\; \text{must be true}" />. If an option
          could happen but isn’t compelled by the passage, it’s a trap.
        </MustKnow>

        <section aria-labelledby="trap-could-be-true" className="space-y-3">
          <h3 id="trap-could-be-true" className="text-xl font-semibold text-white">
            Trap 1: The “Could Be True” or “Probably True” Answer
          </h3>
          <p>
            These options feel reasonable or likely, but the passage doesn’t lock them in. Unless
            the text makes the statement inevitable, treat it with suspicion.
          </p>
          <p className="text-gray-400">
            Quick check: Can you imagine a world consistent with the passage in which this choice
            is false? If yes, it’s not an inference.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt={
            <>
              A report states: “Any warehouse that fails an audit is reinspected within 30 days.”
              In 2024, no warehouse in Zone K failed an audit.
              <br />
              Which statement must be true?
              <div className="mt-3 text-gray-400">
                Logic form:{" "}
                <InlineMath math="\forall x \; (\text{Fail}(x) \Rightarrow \text{Reinspect}_{\le 30}(x))" />{" "}
                and{" "}
                <InlineMath math="\neg \exists x \in \text{Zone K}\; \text{Fail}(x) \text{ (in 2024)}" />
              </div>
            </>
          }
          options={[
            "At least one warehouse in Zone K was reinspected in 2024.",
            "No warehouse outside Zone K was reinspected in 2024.",
            "Every warehouse that was reinspected in 2024 failed an audit.",
            "Any warehouse that failed an audit in 2024 was reinspected within 30 days.",
            "All warehouses passed their audits in 2024.",
          ]}
          correct="Any warehouse that failed an audit in 2024 was reinspected within 30 days."
          solution={
            <>
              <p>
                The rule says “fail ⇒ reinspect within 30 days,” expressed as{" "}
                <InlineMath math="\text{Fail} \Rightarrow \text{Reinspect}_{\le 30}" />. It does not
                claim the converse. Thus:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Choice D restates the rule and must be true for any warehouse that failed in 2024.
                </li>
                <li>
                  Choices A and B make claims about Zone K reinspections that aren’t guaranteed
                  (the report doesn’t say who was reinspected, only that failures trigger it).
                </li>
                <li>
                  Choice C asserts the converse (
                  <InlineMath math="\text{Reinspect} \Rightarrow \text{Fail}" />
                  ), which isn’t supported.
                </li>
                <li>
                  Choice E overreaches; the rule allows failures as long as they’re followed by reinspection.
                </li>
              </ul>
            </>
          }
        />

        <section aria-labelledby="trap-distortion" className="space-y-3">
          <h3 id="trap-distortion" className="text-xl font-semibold text-white">
            Trap 2: Distorted or Mismatched Wording
          </h3>
          <p>
            The option borrows terms from the passage but tweaks scope, direction, or conditions.
            Watch for swapped quantifiers (some vs. most vs. all), flipped cause/effect, or
            reworded constraints that quietly change meaning.
          </p>
          <p className="text-gray-400">
            Spot it by matching each term’s role: subject, condition, and outcome should align exactly
            with the passage.
          </p>
        </section>

        <section aria-labelledby="trap-overreach" className="space-y-3">
          <h3 id="trap-overreach" className="text-xl font-semibold text-white">
            Trap 3: Out‑of‑Proportion Conclusions
          </h3>
          <p>
            A small observation is blown up into a broad rule. If the text supports a local or
            conditional point, the correct inference won’t turn it into an absolute or general law.
          </p>
          <p className="text-gray-400">
            Scan for universal language (e.g., “all,” “always,” “never”) that isn’t warranted.
          </p>
        </section>

        <section aria-labelledby="trap-outside-assumption" className="space-y-3">
          <h3 id="trap-outside-assumption" className="text-xl font-semibold text-white">
            Trap 4: Requires Outside Assumptions
          </h3>
          <p>
            The option seems supported but actually needs extra facts not given. Inference answers
            cannot lean on “world knowledge” or plausible background assumptions unless the passage
            supplies them.
          </p>
          <p className="text-gray-400">
            If removing a background belief breaks the option, it’s not guaranteed by the passage.
          </p>
        </section>

        <section aria-labelledby="trap-true-but-unsupported" className="space-y-3">
          <h3 id="trap-true-but-unsupported" className="text-xl font-semibold text-white">
            Trap 5: True in Real Life, Not Proven by the Passage
          </h3>
          <p>
            Sometimes an option is factually correct in the real world, yet the passage doesn’t
            prove it. Inference questions are about what must follow from the text, not about
            external truth.
          </p>
          <p className="text-gray-400">
            Ask: “If the passage were my entire universe, would this still be guaranteed?”
          </p>
        </section>

        <MustKnow>
          Checklist for Inference choices:
          <ul className="ml-5 mt-2 list-disc space-y-1">
            <li>Must be forced by the passage; no extra assumptions.</li>
            <li>Match the original scope, direction, and conditions.</li>
            <li>Avoid universal claims unless the text is universal.</li>
            <li>
              Remember: <InlineMath math="\text{Fail} \Rightarrow \text{Reinspect}" /> does not imply{" "}
              <InlineMath math="\text{Reinspect} \Rightarrow \text{Fail}" />.
            </li>
          </ul>
        </MustKnow>

        <p className="text-gray-300">
          Big picture: treat each tempting option as a hypothesis and try to break it using only the
          passage. If you can imagine a compliant scenario where the option fails, it isn’t an inference.
        </p>
      </article>
    </main>
  );
}