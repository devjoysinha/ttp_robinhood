import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.3 Strategy for Method of Reasoning Questions | GMAT Verbal",
  description:
    "A practical 5‑step plan for Method of Reasoning (including two‑speaker) questions: read for structure, identify the task, summarize the method, eliminate precisely, and choose the best description. Includes two fully worked multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.3 How to Tackle Method of Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Method of Reasoning questions ask you to describe how an argument is
          built, not whether the argument is good. Your job is to read for
          structure: what the author concludes, how they support it, and how the
          pieces fit together.
        </p>

        <section aria-labelledby="step-1">
          <h3 id="step-1" className="text-xl font-semibold text-white">
            Step 1 — Read slowly and map the argument
          </h3>
          <p>
            First, digest the passage. Identify the moving parts and how each
            sentence functions in the argument. Focus on structure ≠ merits:
            you are describing what the author does, not judging whether it’s
            convincing.
          </p>

          <MustKnow>
            Do whatever helps you truly grasp the argument’s layout:
            - Take brief notes (e.g., Premise → Intermediate Conclusion → Main
            Conclusion).
            - Stay active and curious while reading.
            - Keep reminding yourself: evaluate structure, not truth.
          </MustKnow>

          <p className="mt-3">
            As you read, explicitly label:
          </p>
          <ul className="ml-5 list-disc text-gray-300">
            <li>Conclusion: What is the author trying to establish?</li>
            <li>Premises: Which statements are used as support?</li>
            <li>
              If there are two speakers, note where they agree or disagree and
              how the second speaker responds.
            </li>
          </ul>
        </section>

        <section aria-labelledby="step-2">
          <h3 id="step-2" className="text-xl font-semibold text-white">
            Step 2 — Identify the question type
          </h3>
          <p>
            Confirm you’re in a Method of Reasoning task. Stems like “The
            argument proceeds by…” or “The response to X does which of the
            following?” signal that you must describe the author’s or responder’s
            technique.
          </p>
        </section>

        <section aria-labelledby="step-3">
          <h3 id="step-3" className="text-xl font-semibold text-white">
            Step 3 — Summarize the method in plain language
          </h3>
          <p>
            Before peeking at choices, write a one‑line summary of what the
            author did. Pretend you’re explaining the “recipe” of the argument to
            a bright middle‑schooler. You won’t see your wording verbatim in the
            answers, but this step equips you to judge which description actually
            matches the passage.
          </p>
          <p>Remember: the test rewards careful reading.</p>
        </section>

        <section aria-labelledby="step-4">
          <h3 id="step-4" className="text-xl font-semibold text-white">
            Step 4 — Eliminate precisely and track your work
          </h3>
          <p>
            Go choice by choice and cross out what clearly doesn’t match the
            passage. Keep a visible A–E list (on your scratch pad) and strike
            through as you rule out options.
          </p>

          <MustKnow>
            Keep an A–E list on your pad. As you eliminate, physically cross
            out the losers so you don’t accidentally select one later.
          </MustKnow>

          <p>
            Be flexible. If a later insight shows an eliminated choice actually
            fits better than a survivor, be willing to revisit your decision.
            Stay focused and adaptable until you find the best match.
          </p>

          <MustKnow>
            It’s common to discard the correct choice too early. Stay open to
            revising your eliminations—especially if the remaining option isn’t
            a clean match.
          </MustKnow>

          <p>
            Also, any part of an answer that misstates the passage is fatal.
            Method questions require exact descriptions.
          </p>

          <MustKnow>
            If even one clause in an answer misdescribes the argument, that
            choice is wrong.
          </MustKnow>
        </section>

        <section aria-labelledby="step-5">
          <h3 id="step-5" className="text-xl font-semibold text-white">
            Step 5 — Compare finalists and pick the best description
          </h3>
          <p>
            Among the remaining contenders, only one will best capture what the
            argument actually does. Don’t settle for “good enough.” Push through
            the last comparison and choose the answer that most precisely mirrors
            the structure you mapped in Step 1.
          </p>

          <MustKnow>
            When you’re down to two, don’t guess. Re‑read the critical
            sentences in the passage and match them line‑by‑line to the answer
            text. One option will fit better.
          </MustKnow>
        </section>

        <section aria-labelledby="examples" className="pt-2">
          <h3 id="examples" className="text-xl font-semibold text-white">
            Worked Examples
          </h3>

          <MCQExample
            number={5}
            prompt={
              <>
                <p>
                  Over the last decade, mobile gaming has been the fastest‑growing
                  part of the video‑game market. Visuals and gameplay on phones
                  and tablets are rapidly improving. Soon, dedicated consoles
                  will look as outdated as pinball machines.
                </p>
                <p className="mt-3">
                  The argument above proceeds in which of the following ways?
                </p>
              </>
            }
            options={[
              "Weighs two opposing views and, based on the facts, endorses one.",
              "Uses an analogy as the central evidence to forecast the future of a technology category.",
              "Cites a commonly held belief and shows—using recent developments—that it is no longer accurate.",
              "Draws a cause‑and‑effect conclusion from characteristics of a narrow sample.",
              "Forecasts what will happen to one technology by appealing to advances in a competing technology.",
            ]}
            correct="Forecasts what will happen to one technology by appealing to advances in a competing technology."
            solution={
              <>
                <p>
                  Structure: the author notes rapid progress in mobile gaming and
                  then predicts that traditional consoles will soon seem obsolete.
                  The analogy to pinball is rhetorical flair, not the evidence.
                </p>
                <p>
                  Eliminate:
                  - A: There aren’t two viewpoints; only the author’s.
                  - B: The prediction isn’t based on the pinball analogy; it’s
                  based on mobile’s progress. The analogy illustrates the
                  prediction’s flavor.
                  - C: No widely held belief is stated and refuted.
                  - D: The support is a broad trend, not a tiny sample.
                </p>
                <p>
                  Best match: The author{" "}
                  predicts the fate of one technology (consoles) by citing
                  improvements in a rival technology (mobile). Choice E.
                </p>
              </>
            }
          />

          <MCQExample
            number={6}
            prompt={
              <>
                <p>
                  Eleni: Most hybrid‑car owners I know are much healthier than
                  average. So if I want to be healthy, I should buy a hybrid
                  rather than a standard gas‑only car.
                </p>
                <p>
                  Lee: Hybrid drivers usually care about environmental impact.
                  They’re therefore likely to bike more and eat more locally
                  grown organic produce than average. I doubt your car choice will
                  affect your health.
                </p>
                <p className="mt-3">
                  Lee responds to Eleni’s argument by doing which of the
                  following?
                </p>
              </>
            }
            options={[
              "Questioning the factual basis Eleni uses to support her conclusion.",
              "Arguing that owning a hybrid is required—but not by itself enough—for achieving above‑average health.",
              "Objecting that Eleni’s sample is small and not representative of the population.",
              "Weakening Eleni’s evidence by proposing an alternative cause of the correlation she cites.",
              "Showing that Eleni’s proposed method is not the only way to achieve her goal.",
            ]}
            correct="Weakening Eleni’s evidence by proposing an alternative cause of the correlation she cites."
            solution={
              <>
                <p>
                  Eleni infers “buy a hybrid → better health” from a correlation
                  she observes. Lee proposes a different driver of the correlation:
                  eco‑focused lifestyle choices (e.g., biking, organic food) that
                  tend to accompany hybrid ownership and can improve health.
                </p>
                <p>
                  Eliminate:
                  - A: Lee doesn’t dispute Eleni’s observation; he grants the
                  correlation.
                  - B: He doesn’t claim “hybrid is necessary.”
                  - C: He doesn’t discuss sample size/representativeness.
                  - E: He isn’t saying “there are other ways” to reach the goal;
                  he’s saying the car choice likely doesn’t matter.
                </p>
                <p>
                  Best match: Lee undermines the correlation by presenting a
                  plausible alternative cause. Choice D.
                </p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Transition to boldface questions: Boldface items use the same
          structural mindset—identify conclusions and support—but add the task
          of labeling what each highlighted portion is doing in the argument.
        </p>
      </article>
    </main>
  );
}