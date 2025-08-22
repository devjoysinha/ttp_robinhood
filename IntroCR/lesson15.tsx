"use client";

import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.16 Don’t Eliminate a Choice Just Because It Adds New Information | Critical Reasoning",
  description:
    "Learn why many correct Critical Reasoning answers introduce new information—and when that’s appropriate. Includes a quick Weaken example and clear takeaways.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.16 Don’t Eliminate an Answer Just Because It Introduces New Information
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common trap in Critical Reasoning is to discard any option that mentions something not explicitly stated in the passage. Students often say things like “The argument never mentioned insects,” or “This option seems off-topic,” and eliminate it on that basis alone.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li><em>“The passage doesn’t talk about ants at all.”</em></li>
          <li><em>“This choice adds information that wasn’t in the stimulus.”</em></li>
          <li><em>“That detail feels unrelated to what I just read.”</em></li>
          <li><em>“This came out of left field—must be wrong.”</em></li>
        </ul>

        <p>
          Sometimes that instinct is valid—for example, on pure Inference questions, new information is a red flag. However, for many other CR tasks (such as Strengthen or Weaken), introducing new, relevant facts is exactly how a correct answer does its job.
        </p>

        <MustKnow>
          Many correct CR answers legitimately introduce new, relevant information. The key is whether the new detail meaningfully affects the argument (e.g., by offering an alternative cause, filling a gap, or reinforcing a link), not whether it appeared in the passage.
        </MustKnow>

        <p>
          A quick way to remember this is to treat “new info” as neutral until proven helpful or harmful to the conclusion:
          <span className="ml-2 inline-block rounded bg-gray-800 px-2 py-0.5 align-middle">
            <InlineMath math={"P(\\text{correct} \\mid \\text{new info}) \\ne 0"} />
          </span>
          . In other words, you shouldn’t penalize an option just for introducing something new.
        </p>

        <p>
          Context matters:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Inference/Conclusion questions: avoid answers that go beyond what’s supported by the text.</li>
          <li>Strengthen/Weaken/Resolve/Evaluate: new facts often are required to impact the argument’s plausibility.</li>
        </ul>

        <MCQExample
          number={6}
          prompt="Over the last year, brown bears from nearby mountains have been entering the town of Silvervale more frequently. Around that time, several local farms started producing honey, which bears are known to love. Therefore, the bears must be coming into town primarily to eat that honey. Which of the following, if true, most undermines the conclusion?"
          options={[
            "At roughly the same time, several farms in Silvervale planted large blueberry fields, another food that brown bears actively seek.",
            "Residents of Silvervale have grown more anxious because bear sightings have increased.",
            "Over the past year, the number of mountain lion sightings in town has not changed from prior years.",
            "Beekeepers in Silvervale have reported bears opening hives and eating the honey inside.",
            "Bears are drawn to honey because it is rich in sugars and calories needed to maintain body weight.",
          ]}
          correct="At roughly the same time, several farms in Silvervale planted large blueberry fields, another food that brown bears actively seek."
          solution={
            <>
              <p>
                We’re asked to weaken the claim that honey explains the uptick in bear visits. The best way to do that is to present a credible alternative cause that coincides with the timing.
              </p>
              <p>
                Choice A introduces another plausible attractant—new blueberry fields, which bears also favor—appearing at the same time as the increase. This creates a competing explanation and makes the honey‑only conclusion less convincing.
              </p>
              <p>
                The other options don’t weaken: community anxiety is irrelevant (B), mountain lion sightings don’t speak to bears’ motives (C), reports of bears eating honey would support—not weaken—the conclusion (D), and explaining why honey is enticing (E) merely restates a premise rather than undermining the claim.
              </p>
              <p><strong>Answer:</strong> A</p>
            </>
          }
        />

        <MustKnow>
          Don’t auto-reject an answer solely because it adds information not found in the passage. First ask: does this new detail logically weaken, strengthen, explain, or evaluate the argument’s conclusion?
        </MustKnow>

        <p>
          Bottom line: evaluate choices for what they do to the argument, not whether every word appeared in the stimulus. New information can be exactly what you need—depending on the question type.
        </p>
      </article>
    </main>
  );
}