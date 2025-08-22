import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, display = false, ariaLabel = "math" }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.3 Evaluate the Argument: Common Stems | GMAT Verbal",
  description:
    "Recognize the most common ‘Evaluate the Argument’ question stems and apply the Yes/No test on two practice problems with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">9. Evaluate the Argument</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.3 Common Question Stems for Evaluate the Argument Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Evaluate-the-Argument prompts tend to reuse familiar wording. Spotting these phrasings quickly helps you
          switch into “evaluation mode” and apply the Yes/No test efficiently.
        </p>

        <section aria-labelledby="stems-heading">
          <h3 id="stems-heading" className="text-white font-semibold text-lg">Typical stems you’ll see</h3>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>In judging the argument, it would be most helpful to determine which of the following?</li>
            <li>Which piece of information would best assess the logic of the argument?</li>
            <li>Which of the following would be most useful for deciding whether the conclusion is sound?</li>
            <li>To evaluate the strength of the reasoning, it would be most helpful to know which of the following?</li>
            <li>To gauge the force of the evidence, which of the following should be determined?</li>
            <li>To assess whether the data actually support the claim, which of the following would be most useful?</li>
            <li>Which of the following is most likely to provide information relevant to testing the researcher’s hypothesis?</li>
            <li>Which of the following would most help evaluate how effective the new approach is?</li>
            <li>In deciding whether the plan will work as anticipated, which of the following would be most informative?</li>
            <li>The answer to which question would most help evaluate the chances that these initiatives will succeed?</li>
            <li>When estimating the impact of implementing the new strategy, which of the following should be investigated?</li>
            <li>To judge the plan’s likelihood of meeting its goal, which of the following would be most useful to know?</li>
            <li>Relative to the claim above, which question would most help assess the significance of the study?</li>
            <li>In evaluating the argument, it would be most useful to compare which of the following?</li>
            <li>Which of the following, if true, would matter most when evaluating the reported result?</li>
            <li>Investigating which of the following would best help distinguish between the competing explanations?</li>
          </ul>
        </section>

        <MustKnow>
          Commit the common stems to memory so you can quickly identify evaluate questions. Then apply the Yes/No test:
          a good evaluate choice is one where a “yes” answer meaningfully shifts the argument’s strength in one
          direction and a “no” answer shifts it in the other.
        </MustKnow>

        <section aria-labelledby="practice-heading" className="space-y-6">
          <h3 id="practice-heading" className="text-white font-semibold text-lg">Practice</h3>

          <MCQExample
            number={4}
            prompt={
              <>
                Steam &amp; Beans runs an annual “Best New Coffee” contest. Witchtown Roasters has taken the title in
                each of the last five years. Therefore, Witchtown Roasters will win again this year. In evaluating this
                reasoning, which of the following would be most useful to establish?
              </>
            }
            options={[
              "Whether Witchtown’s entry would be among the priciest coffees in this year’s field",
              "Whether any never‑before‑winning roasters will choose not to participate this year",
              "Whether Witchtown Roasters will actually submit an entry this year",
              "Whether the Steam & Beans owners personally prefer Witchtown’s coffee",
              "Whether the judging will be done by attendees or by professional coffee judges",
            ]}
            correct="Whether Witchtown Roasters will actually submit an entry this year"
            solution={
              <>
                <p className="mb-2">
                  Structure: background—annual contest; premise—Witchtown has won five straight; conclusion—Witchtown
                  will win again.
                </p>
                <p className="mb-2">
                  Hidden assumption: conditions relevant to winning haven’t changed in a way that blocks another win.
                  Apply the Yes/No test to the key participation question:
                </p>
                <ul className="list-disc pl-6 mb-2 space-y-1">
                  <li>
                    Yes, Witchtown will enter: the prediction gets more plausible, since entry is a prerequisite to
                    winning.
                  </li>
                  <li>
                    No, Witchtown will not enter: the argument collapses, because they cannot win without entering.
                  </li>
                </ul>
                <p>
                  Other options (price level, owners’ tastes, audience vs. expert judges) don’t predictably swing the
                  claim in opposite directions with a yes/no—so they’re less diagnostic.
                </p>
              </>
            }
          />

          <MCQExample
            number={5}
            prompt={
              <>
                Some people attribute the rise in obesity over the last century to greater consumption of high‑calorie
                foods. However, over that same period, the workforce has shifted from physically demanding jobs to
                largely sedentary roles. Thus, it is this move toward sedentary work that explains the increase in
                obesity. Which question would be most helpful in evaluating this conclusion?
              </>
            }
            options={[
              "Do most people who eat more high‑calorie foods also have sedentary jobs?",
              "Is the obesity rate among people with physically active jobs substantially higher today than it was 100 years ago?",
              "Has the obesity rate increased steadily throughout the last century?",
              "Have any effective medical treatments for weight gain been introduced in the last 100 years?",
              "Are there people with sedentary jobs who are nevertheless not obese?",
            ]}
            correct="Is the obesity rate among people with physically active jobs substantially higher today than it was 100 years ago?"
            solution={
              <>
                <p className="mb-2">
                  The reasoning jumps from a correlation (job activity levels changed while obesity rose) to a causal
                  claim (the shift to sedentary work caused the rise). Remember:{" "}
                  <K expr="\,\text{correlation}\;\ne\;\text{causation}\," ariaLabel="correlation is not causation" />.
                </p>
                <p className="mb-2">
                  The right evaluate question separates the two candidate causes. Ask what happens among people who
                  didn’t experience the proposed cause (they still have active jobs):
                </p>
                <ul className="list-disc pl-6 mb-2 space-y-1">
                  <li>
                    Yes, the obesity rate among active‑job workers is much higher now than 100 years ago → weakens the
                    claim that sedentary work is the main driver (the rise occurs even without the “sedentary” factor).
                  </li>
                  <li>
                    No, it isn’t higher among active‑job workers → strengthens the causal story (where the cause is
                    absent, the effect isn’t present).
                  </li>
                </ul>
                <p className="mb-2">
                  The other choices don’t cleanly pit the two causes against each other with a yes/no that flips the
                  evaluation. For instance, existence of some sedentary but non‑obese individuals says little about the
                  population‑level trend, and a steady vs. bumpy increase doesn’t isolate the cause.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: identify the missing link in the author’s reasoning and pick a question whose “yes” and “no”
          answers would push the argument in opposite directions.
        </p>
      </article>
    </main>
  );
}