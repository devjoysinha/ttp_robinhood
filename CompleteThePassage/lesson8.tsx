import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX InlineMath on the client (used for the correlation snippet)
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "11.7.2 Complete the Passage: Plausible vs. Logical Completion | GMAT Critical Reasoning",
  description:
    "Learn to avoid tempting choices that merely sound reasonable or are inferable but don’t complete the argument’s logic. Includes a worked mini‑example and a full multiple‑choice item with explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.7.2 Answers that Sound Plausible or Inferable but Don’t Complete the Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Complete the Passage questions, your task is to supply the one line that
          actually finishes the author’s reasoning. Some choices will echo facts from
          the prompt or state something that seems reasonable—and yet they fail to
          lock into the argument’s final step. Don’t pick what merely “fits the vibe”;
          pick what completes the logic.
        </p>

        <MustKnow>
          Tempting options often paraphrase earlier facts or state something
          inferable, but they don’t answer the precise question the blank implies.
          The correct choice provides the missing link that makes the author’s
          closing claim follow.
        </MustKnow>

        <section
          aria-labelledby="mini-example"
          className="rounded-lg border border-gray-700 bg-black/20 p-4 md:p-5"
        >
          <h3
            id="mini-example"
            className="mb-3 text-base font-semibold text-white md:text-lg"
          >
            Quick Illustration
          </h3>
          <p className="mb-4">
            NutWorks Co. sells two items: bagged in‑shell walnuts and bagged
            shelled walnuts. Their shelling machine broke and will be replaced
            with a newer, more efficient model instead of being repaired. Installation
            will take about a week, so NutWorks won’t produce shelled walnuts during
            that time. Still, they expect to fill every order that week, because ________.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-md border border-gray-700 p-3">
              <p className="text-sm font-semibold text-gray-200">
                Choice that merely follows from the passage
              </p>
              <p className="mt-1 text-sm text-gray-300">
                After the weeklong installation, the company will shell walnuts
                more efficiently.
              </p>
            </div>
            <div className="rounded-md border border-emerald-700/60 bg-emerald-900/10 p-3">
              <p className="text-sm font-semibold text-emerald-300">Correct</p>
              <p className="mt-1 text-sm text-gray-300">
                They already have enough shelled‑walnut inventory to cover at least
                a week of orders.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-300">
            The first statement sounds relevant but doesn’t explain how orders will be
            filled during the downtime. The second statement supplies new information that
            directly completes the reasoning.
          </p>
        </section>

        <p>
          A common pitfall is choosing a line that could be true or is even supported by
          the stimulus, but that doesn’t answer the specific “Why/What must be true here?”
          question implied by the blank.
        </p>

        <section aria-labelledby="mcq" className="pt-2">
          <h3 id="mcq" className="sr-only">
            Multiple‑choice example
          </h3>

          <MCQExample
            number={8}
            prompt={
              <>
                Which of the following best completes the discussion?
                <br />
                <br />
                The number of years a person spends in school is negatively correlated with
                the likelihood of that person becoming involved in criminal activity{" "}
                <span className="whitespace-nowrap">
                  (
                  <InlineMath math="\rho(\text{schooling},\,\text{crime}) < 0" />
                  ).
                </span>{" "}
                Therefore, some have urged using education as a tool to reduce crime.
                Others have suggested that this observed relationship might not be due to
                education itself but instead to motivation: people inclined to pursue
                more schooling are also less inclined toward crime. Studies give reason
                to discount this motivation‑only view, however, because researchers found
                that ________.
              </>
            }
            options={[
              "High‑school graduates are less likely to commit crimes than those who leave school before graduating.",
              "Some people who spend many years in school are no more educated than others who spend fewer years in school.",
              "Most people who do not finish high school never engage in serious criminal activity.",
              "Jurisdictions that raised the legal minimum years of schooling saw lower crime among the cohorts that, as a result, stayed in school longer.",
              "The share of college graduates who commit crimes is even lower than the share of high‑school graduates who do so.",
            ]}
            correct="Jurisdictions that raised the legal minimum years of schooling saw lower crime among the cohorts that, as a result, stayed in school longer."
            solution={
              <>
                <p>
                  The blank must provide a reason to doubt the hypothesis that motivation,
                  not education, explains the correlation. A strong way to do that is to
                  cite evidence where additional schooling is caused by an external rule
                  rather than by students’ personal motivation, and to show that crime
                  drops in that group.
                </p>
                <p>
                  Choice (D) does exactly this: when laws force students to remain in
                  school longer, the affected cohorts—who are not necessarily more
                  motivated—later commit less crime. That points to schooling itself as
                  a causal factor and undercuts the motivation‑only explanation.
                </p>
                <p>
                  The other options mostly restate or extend the original negative
                  correlation ((A) and (E)), introduce an aside about educational
                  attainment that doesn’t address causality (B), or give a data point
                  that doesn’t distinguish between education and motivation (C). None of
                  these completes the argument the way (D) does.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Don’t reward answers that merely echo or extrapolate from the passage. The right
          completion supplies the missing premise that makes the author’s final claim go
          through—especially when the blank signals you need new, targeted information.
        </MustKnow>

        <p>
          Bottom line: choose the statement that bridges the gap in reasoning, not the one
          that just sounds consistent with what you already read.
        </p>
      </article>
    </main>
  );
}