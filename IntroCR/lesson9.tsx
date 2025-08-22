import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.10 Evaluate Every Answer Choice | Critical Reasoning",
  description:
    "Learn why you should review all five options on GMAT Critical Reasoning questions, what “best” really means, and practice with a quick example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.10 Always Evaluate All Five Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you think you’ve spotted the correct option on a Critical Reasoning
          question, resist the urge to lock it in immediately. Make a quick pass through
          all five choices before deciding. This habit prevents you from missing an
          option that addresses the task more directly or powerfully.
        </p>

        <MustKnow>
          Even if one option seems right, scan all five before selecting your answer. 
          Many CR stems ask for the “best” choice, so a good option can still be beaten by a better one.
        </MustKnow>

        <p>
          You’ll often see stems that explicitly ask for the strongest match to the task, such as:
        </p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>“MOST seriously weakens”</li>
          <li>“provides the MOST support”</li>
          <li>“BEST explains”</li>
          <li>“is MOST strongly supported by”</li>
        </ul>

        <p>
          Because of this wording, it’s common to find more than one answer that seems
          reasonable. Your job is to identify the choice that best fulfills the prompt,
          not just one that works.
        </p>

        <MustKnow>
          Although stems use the word “best,” each official CR question has a single correct
          answer. The correct option will be clearly better than any runner‑up in how it
          fulfills the task.
        </MustKnow>

        <MCQExample
          number={1}
          prompt={
            <>
              A company concludes that its recent week‑long training program caused a 15% rise
              in worker output, because productivity increased during the week immediately following
              the training. Which of the following, if true, most seriously weakens the company’s conclusion?
            </>
          }
          options={[
            "The training included both lectures and hands‑on activities.",
            "The 15% productivity increase was calculated across the entire company.",
            "New high‑speed machinery was installed two days before the training began.",
            "Several employees reported that they enjoyed the training sessions.",
            "The company plans to offer refresher sessions next quarter.",
          ]}
          correct="New high‑speed machinery was installed two days before the training began."
          solution={
            <>
              <p>
                The argument claims the training caused the productivity increase by citing a temporal
                correlation. To weaken a causal claim, show an alternative cause or attack the link
                between cause and effect.
              </p>
              <p>
                Choice C introduces a powerful alternative explanation: upgraded equipment. If faster
                machines were installed right before training, they could plausibly account for the
                observed productivity jump, undermining the conclusion that training was the cause.
                The other options are neutral or irrelevant to the causal link.
              </p>
            </>
          }
        />

        <p>
          What if you’ve crossed out all five options? Re‑read the stem and the argument to confirm
          the exact task and scope, then reassess the two most plausible choices for how directly and
          strongly they perform the requested job. In the next lesson, we’ll outline a quick recovery
          process for that situation.
        </p>
      </article>
    </main>
  );
}