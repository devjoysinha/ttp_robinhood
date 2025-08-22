import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "1.15 Read Every Word in Critical Reasoning | GMAT Verbal",
  description:
    "Skimming in Critical Reasoning often leads to traps and wasted time. Learn why reading every word—especially the conclusion and question stem—improves accuracy, then apply the idea with a quick weaken-the-argument example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.15 Don’t Skip Words to “Save Time” in Critical Reasoning
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many test‑takers try to move faster by skimming parts of a Critical
          Reasoning passage, question stem, or answer choice. The risk is huge:
          small qualifiers, contrasts, or scope cues often decide what the
          argument actually claims and what the correct choice must do.
        </p>

        <p>
          Ironically, skimming usually backfires. People who miss a key phrase
          tend to loop through the answer choices repeatedly without finding a
          match—burning far more time than they “saved.” Worse, they may lock in
          an attractive but wrong option built around the very phrase they
          skipped.
        </p>

        <p>
          The fix is simple and reliable: read every word, especially in the
          conclusion and the task in the stem. That careful read is often the
          quickest path to the right answer.
        </p>

        <MustKnow>
          Read the full conclusion and the full question stem. Don’t ignore the
          last clause, comparison, or scope phrase—those details frequently
          control what a correct answer must do. Slowing down just enough to
          capture every word leads to faster, more accurate decisions.
        </MustKnow>

        <p>
          Let’s see how precision in reading affects answer selection on a
          Weaken question.
        </p>

        <MCQExample
          number={5}
          prompt="Over a decade ago, car buyers generally put acceleration and power ahead of environmental impact. In the last few years, the share of buyers choosing the greenest available models has climbed sharply. Therefore, more people now choose eco‑friendliness over performance when selecting a car. Which option most undermines this conclusion?"
          options={[
            "New cars today, on average, produce fewer emissions than earlier generations of cars.",
            "Public transit tends to be more environmentally friendly than even the greenest cars.",
            "People today are more informed about the environmental effects of driving than they used to be.",
            "A substantial portion of buyers rank long‑term reliability as the most important car attribute.",
            "Many of the greenest new models also deliver class‑leading performance.",
          ]}
          correct="Many of the greenest new models also deliver class‑leading performance."
          solution={
            <>
              <p className="mb-2">
                First, read the conclusion carefully: “more people now choose
                eco‑friendliness over performance when selecting a car.”
                Skipping “over performance” or “when selecting a car” can send
                you down the wrong path.
              </p>

              <p className="mb-2">
                What weakens the idea that eco‑friendliness is beating
                performance in head‑to‑head priority? If the same cars can be
                both green and top performers, the surge in purchases of the
                greenest models may be driven by performance, not by a shift in
                priorities. That’s exactly what the correct option states.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A: Average emissions have fallen, but that doesn’t address
                  whether buyers prioritize green attributes over performance.
                </li>
                <li>
                  B: Public transit is outside the decision of choosing among
                  cars; it doesn’t bear on the comparison in the conclusion.
                </li>
                <li>
                  C: Greater awareness could explain a trend, but it does not
                  weaken the conclusion; if anything, it can support it.
                </li>
                <li>
                  D: Reliability might be the top attribute overall; the claim
                  we’re testing compares eco‑friendliness to performance when
                  choosing a car. Reliability being important doesn’t show that
                  eco‑friendliness isn’t outranking performance.
                </li>
                <li>
                  E: If the greenest cars are also top performers, increased
                  purchases of those cars could be due to performance. This
                  undercuts the claim that eco‑friendliness has overtaken
                  performance in priority. Correct.
                </li>
              </ul>

              <p className="mt-2">
                Takeaway: reading the conclusion in full keeps you aligned with
                the exact comparison and scope the argument makes.
              </p>
            </>
          }
        />

        <section aria-labelledby="watch-outs" className="space-y-3">
          <h3 id="watch-outs" className="text-white font-semibold text-lg">
            Common misreads to avoid
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Dropping the comparison: “eco‑friendliness over performance.”
              Remove that phrase and the task changes entirely.
            </li>
            <li>
              Dropping the scope: “when selecting a car.” The claim is about
              car‑buying choices, not general attitudes or other transport
              modes.
            </li>
          </ul>
        </section>

        <p>
          Big picture: be deliberate. The right answer often hinges on a few
          words you might be tempted to skip. Read them.
        </p>
      </article>
    </main>
  );
}