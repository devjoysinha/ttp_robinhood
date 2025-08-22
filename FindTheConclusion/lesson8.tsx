import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "8.4.2 Wrong Answer Type Two: Overreaching Conclusions | Critical Reasoning",
  description:
    "Learn to spot tempting answer choices that claim more than the stimulus supports. Includes two practice questions with full explanations and quick qualifier checks (some ≠ all, more ≠ most).",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Find the Conclusion
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4.2 Wrong Answer Type Two: Choices That Go Too Far
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          It’s common to read a stimulus and unconsciously amplify what it says.
          Test writers know this and craft attractive wrong answers that stretch
          beyond the text. Your job is to keep the conclusion within the fence
          of what’s actually supported.
        </p>

        <MustKnow>
          Overreaching choices claim more than the premises justify. The correct
          conclusion must be a tight synthesis of what’s stated—nothing extra.
          Watch the qualifiers:
          <span className="ml-2 inline-flex items-center gap-2">
            <InlineMath math={`\\text{some} \\neq \\text{all}`} />
            <InlineMath math={`\\text{more} \\neq \\text{most}`} />
            <InlineMath math={`\\text{may} \\neq \\text{will}`}/>
          </span>
        </MustKnow>

        <section aria-labelledby="why-overreach-is-wrong">
          <h3 id="why-overreach-is-wrong" className="text-xl font-semibold text-white">
            Why “goes too far” answers are tempting
          </h3>
          <p>
            These choices sound consistent with the passage but quietly swap in
            stronger language. For instance, if the stimulus supports “more
            profitable,” a trap answer may claim “the most profitable,” which
            is a bigger, unjustified leap.
          </p>
        </section>

        <section aria-labelledby="example-training">
          <h3 id="example-training" className="text-xl font-semibold text-white">
            Example 1
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="text-gray-200">
              Many people assume top performers are naturally gifted. In truth,
              those at the highest level typically reach it through consistent
              practice, and anyone who trains steadily with sound methods sees
              improvement.
            </p>

            <div className="mt-4">
              <BlockMath math={`\\text{Top performer} \\Rightarrow \\text{trained consistently}`} />
              <BlockMath math={`\\text{Consistent, effective training} \\Rightarrow \\text{skill improves}`} />
            </div>
          </div>

          <MCQExample
            number={31}
            prompt="Which statement is best supported by the information above?"
            options={[
              "Anyone can quickly and easily train to match top performers in any field.",
              "All differences in skill are explained entirely by differences in training time.",
              "Skill gaps attributed to “talent” might instead reflect differences in steady, effective practice.",
            ]}
            correct="Skill gaps attributed to “talent” might instead reflect differences in steady, effective practice."
            solution={
              <>
                <p>
                  The passage supports a link between steady, effective training
                  and improved performance, and notes that top performers
                  generally train consistently. It does not claim that everyone
                  can easily reach the top (too strong) or that training explains
                  all skill differences (also too strong).
                </p>
                <p>
                  The third choice stays within the evidence: some apparent
                  “talent” differences could actually be differences in training
                  consistency and quality.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="how-to-guard">
          <h3 id="how-to-guard" className="text-xl font-semibold text-white">
            Guardrails for qualifiers
          </h3>
          <p className="flex flex-wrap items-center gap-3">
            When comparing an answer to the stimulus, sanity‑check the strength:
            <InlineMath math={`\\text{some} \\not\\Rightarrow \\text{all}`} />
            <InlineMath math={`\\text{can} \\not\\Rightarrow \\text{will}`} />
            <InlineMath math={`\\text{more} \\not\\Rightarrow \\text{most}`} />
          </p>
        </section>

        <section aria-labelledby="example-autoimmune">
          <h3 id="example-autoimmune" className="text-xl font-semibold text-white">
            Example 2
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <ul className="list-inside list-disc space-y-1 text-gray-200">
              <li>Normally, the immune system helps protect against infection.</li>
              <li>With autoimmune disease, the immune system harms the body.</li>
              <li>Some treatments for autoimmune disease work by suppressing the immune system.</li>
            </ul>

            <div className="mt-4">
              <BlockMath math={`\\text{Immune system} \\Rightarrow \\text{protection from infection}`} />
              <BlockMath math={`\\text{Some treatments} \\Rightarrow \\text{block immune function}`} />
            </div>
          </div>

          <MCQExample
            number={32}
            prompt="Which conclusion is most strongly supported by the statements above?"
            options={[
              "Holistic approaches are generally better than drugs for treating autoimmune disease.",
              "Every drug used to treat autoimmune disease causes harmful side effects.",
              "If a patient starts a drug that suppresses the immune system, healing begins immediately.",
              "The only way to stop autoimmune damage is to block immune function.",
              "Using certain drugs for autoimmune disease could increase susceptibility to infection.",
            ]}
            correct="Using certain drugs for autoimmune disease could increase susceptibility to infection."
            solution={
              <>
                <p>
                  Since the immune system protects against infection, and some
                  autoimmune drugs suppress it, it follows that such drugs could
                  make infection more likely. That’s a cautious, supported claim.
                </p>
                <p>
                  The other options overreach: they compare treatments without
                  evidence, generalize to all drugs, promise healing, or assert
                  a one‑and‑only method—none of which is warranted.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Big takeaway
          </h3>
          <p>
            Keep conclusions inside the boundary set by the stimulus. Whenever
            an answer choice strengthens the language or adds new claims, treat
            it as suspect.
          </p>
        </section>
      </article>
    </main>
  );
}