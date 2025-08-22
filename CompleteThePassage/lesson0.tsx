import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.1 Complete the Passage — Introduction | Critical Reasoning",
  description:
    "Learn how to spot and solve Complete the Passage questions in GMAT Critical Reasoning. Includes a must‑know summary and a fully worked example with answer analysis.",
};

// Lightweight KaTeX inline renderer (SSR-safe). Note: ensure KaTeX CSS is loaded globally.
function KInline({ math, ariaLabel }: { math: string; ariaLabel?: string }) {
  const html = katex.renderToString(math, { throwOnError: false });
  return (
    <span
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
      className="align-baseline"
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.1 Complete the Passage — Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Complete the Passage items are simple to recognize: the stem ends with
          a long blank, signaling that you must supply the final idea that fits
          the author’s reasoning. For example, many prompts end with{" "}
          <KInline
            math={"\\underline{\\qquad\\qquad\\qquad\\qquad}"}
            ariaLabel="blank"
          />{" "}
          instead of a concluding clause.
        </p>

        <MustKnow>
          • Identification: If the last sentence ends with a clear blank{" "}
          <KInline math={"\\underline{\\quad\\quad\\quad}"} ariaLabel="blank" />{" "}
          the question is “Complete the Passage.”{" "}
          <br />
          • Task: Pick the option that best fills that blank and makes the
          author’s point complete and sensible.
        </MustKnow>

        <p>
          The directions often read like “Which of the following most logically
          completes the passage?” Your job is not to find a true statement in
          general, but the statement that most directly completes the author’s
          thought.
        </p>

        <MustKnow>
          The correct choice must work with the passage as a whole—its setup,
          claims, and intent—not merely echo words from the final sentence.
        </MustKnow>

        <MCQExample
          number={1}
          prompt={
            'Which of the following best completes the passage?\n\nParadoxical intervention asks someone to do the very thing they want to stop doing. In treating chronic insomnia, rather than teaching ways to drift off, a counselor using this method asks the person to try to stay awake as long as possible. The idea is that, by attempting to remain awake, the person will fall asleep because ' +
            // Add a math-styled blank inside the prompt for clarity
            "_____"
          }
          options={[
            "people seeking help for insomnia would rather sleep enough than continue to struggle",
            "insomnia can arise from habits only loosely related to bedtime",
            "those with chronic insomnia typically sleep very little anyway",
            "insufficient sleep is linked to health and thinking problems",
            "worrying about not falling asleep is a major driver of the sleeplessness",
          ]}
          correct={
            "worrying about not falling asleep is a major driver of the sleeplessness"
          }
          solution={
            <>
              <p className="mb-2">
                Structure of the passage:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Background: paradoxical intervention asks the person to engage
                  in the unwanted behavior.
                </li>
                <li>
                  Plan for insomnia: tell the person to try to stay awake.
                </li>
                <li>
                  Target outcome: the person eventually falls asleep.
                </li>
              </ul>

              <p className="mt-4">
                The cue “because” introduces a reason that makes the plan more
                convincing. This behaves like a strengthen task: supply the
                premise that explains why trying to stay awake would actually
                help the person fall asleep.
              </p>

              <p className="mt-4">
                Option review:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Preference to sleep (A) is obvious and does not explain why
                  the method works.
                </li>
                <li>
                  Causes of insomnia (B) are off‑scope; we need a reason the
                  plan helps.
                </li>
                <li>
                  “They don’t sleep anyway” (C) restates the problem, not a
                  solution.
                </li>
                <li>
                  Harms of sleep deprivation (D) are irrelevant to the plan’s
                  effectiveness.
                </li>
                <li>
                  Anxiety about failing to sleep drives the insomnia (E). By
                  switching the goal to “stay awake,” the method removes that
                  performance anxiety, allowing sleep. This directly supports
                  the plan.
                </li>
              </ul>

              <p className="mt-4">
                Therefore, the choice about fear/anxiety causing the insomnia is
                the necessary completing idea.
              </p>
            </>
          }
        />

        <p>
          Bottom line: aim for the option that best completes the author’s
          reasoning—not just something plausible or thematically related. If an
          option ties the final blank back to the core logic you’ve read, it’s a
          strong contender.
        </p>
      </article>
    </main>
  );
}