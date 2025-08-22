import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, sr }: { expr: string; sr?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span className="inline-block align-middle">
      <span
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: html }}
        className="katex text-lg"
      />
      {sr ? <span className="sr-only">{sr}</span> : null}
    </span>
  );
}

export const metadata: Metadata = {
  title:
    "9.8 Evaluate — Wrong Answer Type 2: Irrelevant Comparison | Critical Reasoning",
  description:
    "Learn how to spot Evaluate-the-Argument answer choices that introduce off‑topic comparisons. Includes a worked example and a practice question with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.8 Wrong Answer Type 2: Irrelevant Comparison
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Comparisons can help us judge an argument—but only when they speak
          directly to the claim being tested. On Evaluate-the-Argument questions,
          traps often present comparisons that sound sensible yet fail to shed
          light on the conclusion.
        </p>

        <MustKnow>
          Beware of comparisons that sit “next to” the issue without testing the
          actual link the conclusion relies on. A good Evaluate choice changes
          the strength of the conclusion depending on the answer. An irrelevant
          comparison does not.
        </MustKnow>

        <section aria-labelledby="sa-example">
          <h3 id="sa-example" className="sr-only">
            Illustrative example: relevant vs. irrelevant comparison
          </h3>
          <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4">
            <p className="italic text-gray-200">
              San Alonso’s severe air pollution is largely due to the roughly
              400,000 cars driven in the city each day. Within five years,
              200,000 of those cars are projected to be nonpolluting electric
              vehicles. Therefore, San Alonso’s typical air pollution levels
              will drop substantially within five years.
            </p>
            <div className="mt-3 space-y-2">
              <p>
                Irrelevant comparison: “Is San Alonso’s pollution higher than
                that of most cities?” This does not test the forecast; the city
                could be cleaner or dirtier than average and the predicted
                reduction could still occur.
              </p>
              <p>
                Relevant comparison: “Will the total number of daily vehicles
                in five years be below 600,000?” This bears on whether replacing
                200,000 cars with electric vehicles actually reduces emissions,
                especially if overall traffic is projected to grow.
              </p>
            </div>
          </div>
        </section>

        <p>
          A quick test for relevance is the Yes/No test: if a single question,
          when answered differently, would strengthen in one case and weaken in
          the other, it’s a useful Evaluate choice. In shorthand:{" "}
          <K
            expr={"\\text{Yes}~\\Rightarrow~\\text{strengthen},\\quad \\text{No}~\\Rightarrow~\\text{weaken}"}
            sr="Yes implies strengthen; No implies weaken"
          />
          .
        </p>

        <MCQExample
          number={13}
          prompt="Elephants, among other species, spread tree seeds, allowing trees to take root far from parent stands. Conservationists fear that reduced seed dispersal from shrinking elephant populations will lower the number of healthy trees in regions where elephants have historically lived. Which of the following would be most helpful in evaluating the conservationists’ concern?"
          options={[
            "Whether elephants spread seeds more efficiently than other animals",
            "Whether declines in elephant numbers due to poaching will slow soon",
            "Whether seeds dispersed by elephants actually grow into healthy trees",
            "Whether trees in historic elephant regions tend to be taller than trees where elephants were never present",
            "Which strategy for sustaining elephant populations is most likely to succeed",
          ]}
          correct="Whether seeds dispersed by elephants actually grow into healthy trees"
          solution={
            <>
              <p>
                We need information that directly tests the link between less
                seed dispersal by elephants and a decline in healthy trees. Apply
                the Yes/No test to option (C):
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Yes — seeds dispersed by elephants do mature into healthy
                  trees. The concern is{" "}
                  <strong>more</strong> plausible, so the conclusion is
                  strengthened.
                </li>
                <li>
                  No — those seeds do not become healthy trees. The concern is{" "}
                  <strong>less</strong> plausible, so the conclusion is weakened.
                </li>
              </ul>
              <p>
                Because different answers to (C) push the conclusion in opposite
                directions, it’s the most useful for evaluation. The other
                options introduce side issues or unrelated comparisons:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  (A) Comparing elephants to other animals is off-point; the
                  claim is specifically about changes in elephant-driven
                  dispersal.
                </li>
                <li>
                  (B) Future poaching trends don’t address whether the{" "}
                  existing reduction in dispersal affects healthy tree counts.
                </li>
                <li>
                  (D) Tree height is not the same as tree health and doesn’t test
                  the causal link in question.
                </li>
                <li>
                  (E) Implementation strategy for elephant conservation doesn’t
                  evaluate whether reduced dispersal impacts healthy trees.
                </li>
              </ul>
              <p className="mt-2">
                Therefore, the correct answer is C.
              </p>
            </>
          }
        />

        <MustKnow>
          Use the Yes/No test. If answering “yes” and “no” leaves the
          conclusion essentially unchanged, the choice is likely an irrelevant
          comparison, not a true evaluation of the claim.
        </MustKnow>

        <p>
          Bottom line: comparisons only help when they probe the causal link
          the conclusion relies on. If the comparison drifts to a different
          metric, a different population, or a background fact, it’s probably a
          trap.
        </p>
      </article>
    </main>
  );
}