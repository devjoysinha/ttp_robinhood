```tsx
// app/(verbal)/critical-reasoning/find-the-conclusion/introduction/page.tsx
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "8.1 Find the Conclusion — Introduction | Critical Reasoning",
  description:
    "How to identify the author's main claim in Find the Conclusion (Main Point) Critical Reasoning questions. One worked MCQ example with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.1 Find the Conclusion — Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many Critical Reasoning prompts, the conclusion is stated outright.
          Find the Conclusion questions are different: they give you support
          (premises, background, and sometimes intermediate takeaways) but leave
          the final claim unsaid. Your job is to infer the author’s main point.
        </p>

        <MustKnow>
          - These items are also called Main Point questions. The stimulus
          supplies reasons, not the final claim.{" "}
          <br />
          - Your task is to choose the answer that best expresses the author’s
          overall claim—the single statement that the given premises most
          directly support. <br />
          - Avoid choices that introduce outside information, go beyond what the
          statements justify, or contradict the stimulus.
        </MustKnow>

        <p>
          A reliable approach is to read the stimulus, restate the main claim in
          your own words, and then match that claim to the closest answer—being
          wary of overstatements and claims that need extra assumptions.
        </p>

        <MCQExample
          number={1}
          prompt={
            <>
              A set of statements appears below. If all are true, which option
              is most strongly supported?
              <br />
              <br />
              1) When the true cause of an illness is completely treated, the
              patient no longer has that illness. <br />
              2) In some situations, weekly stress‑management counseling halts
              the illness’s progression. <br />
              3) In many of those situations, once counseling stops, the
              progression resumes.
            </>
          }
          options={[
            "Stress‑management counseling never benefits people who are ill.",
            "Some people recover without receiving any treatment.",
            "For certain illnesses, there is no way at all to treat the cause.",
            "In some cases, stress‑management counseling does not completely resolve the root cause of the illness.",
            "Stress is the only cause of every illness.",
          ]}
          correct="In some cases, stress‑management counseling does not completely resolve the root cause of the illness."
          solution={
            <>
              <p className="mb-2">
                Translate the key ideas using logical notation:
              </p>
              <div className="rounded-md bg-gray-900/50 p-3">
                <BlockMath math="\text{P1: }\; \text{Cause fully addressed} \Rightarrow \text{illness ends}" />
                <BlockMath math="\text{P2: }\; \text{Counseling} \Rightarrow \text{progression stops (while ongoing)}" />
                <BlockMath math="\text{P3: }\; \text{Stop counseling} \Rightarrow \text{progression resumes (often)}" />
              </div>

              <p className="mt-3">
                If fully addressing the cause makes the illness go away
                permanently (P1), but we observe that stopping counseling often
                allows the illness to advance again (P3), then the counseling
                did not fully resolve the underlying cause in those cases. That
                lines up with the choice stating that, in some situations,
                counseling does not completely address the root cause.
              </p>

              <p className="mt-2">
                Why the other answers fail:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  “Never benefits” contradicts the premise that counseling can
                  halt progression (P2).
                </li>
                <li>
                  “People recover with no treatment” is not discussed; it adds
                  new information.
                </li>
                <li>
                  “No way to treat the cause” overreaches; the stimulus doesn’t
                  claim impossibility of treatment.
                </li>
                <li>
                  “Stress is the only cause of every illness” is an unjustified
                  universal claim not supported by the statements.
                </li>
              </ul>

              <p className="mt-2">
                Therefore, the supported conclusion is that in some cases
                stress‑management counseling does not completely resolve the
                root cause.
              </p>
            </>
          }
        />

        <MustKnow>
          The correct answer in a Find the Conclusion question is the statement
          that the given premises most directly support—no stronger, no weaker.
          Watch for answer choices that: <br />
          - require extra assumptions, <br />
          - go beyond what the premises justify, or <br />
          - conflict with any stated facts.
        </MustKnow>

        <p>
          Bottom line: identify what the author is driving toward, express that
          main claim succinctly, and select the answer that most accurately
          captures it without adding or contradicting information.
        </p>
      </article>
    </main>
  );
}
```