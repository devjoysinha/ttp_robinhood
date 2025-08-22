import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.30 Inference Trap 9: Mix‑Up | Reading Comprehension",
  description:
    "Learn to avoid Mix‑Up trap choices in GMAT RC Inference questions—answers that infer about the wrong person, group, or idea. Includes a quick check and a fully worked example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.30 Inference Trap 9: Mix‑Up
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Inference questions, a classic trap is the Mix‑Up: a tempting choice
          that draws a correct conclusion about the wrong subject. It may swap the
          author’s view for a researcher’s, confuse two people or groups discussed,
          or shift from the targeted concept to a nearby one mentioned in the
          passage.
        </p>

        <MustKnow>
          When a question asks you to infer what a specific party believes (e.g.,
          the author, a researcher, a critic, or a group), your answer must be an
          inference about that party—and only that party. A choice can be text‑based
          yet still wrong if it’s an inference about someone or something else.
        </MustKnow>

        <p>
          A practical way to beat this trap is to tag each claim you read with its
          owner: who said it and about what. If the prompt targets X but an answer
          makes an inference about Y, it’s a Mix‑Up and must be eliminated. In
          symbols, keep in mind that{" "}
          <InlineMath math={"\\text{infer}(X) \\ne \\text{infer}(Y)"} />.
        </p>

        <MustKnow>
          Avoid Mix‑Ups by:
          <ul className="mt-2 list-inside list-disc">
            <li>Tracking who holds each opinion (author vs. sources).</li>
            <li>Matching the question’s subject to the answer’s subject.</li>
            <li>
              Rejecting choices that correctly paraphrase the passage but apply to
              the wrong person, group, or idea.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="quick-check" className="space-y-4">
          <h3 id="quick-check" className="text-xl font-semibold text-white">
            Quick check
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2">
              Some historians maintain that a migrating people left their cities
              because invaders drove them out. Dr. P, however, contends that
              earthquakes were the cause. As evidence, Dr. P notes that rows of
              columns at excavation sites fell in the same direction, a pattern he
              treats as decisive against the invasion account. The author adds that
              extensive archaeological records of warfare in the region from that
              era make it challenging to dismiss the “invaders” hypothesis.
            </p>
          </div>

          <MCQExample
            number={25}
            prompt="Based on the passage above, which statement is most consistent with what Dr. P believes?"
            options={[
              "It would be easier to reject the invader hypothesis if there were no archaeological records of wars in the region.",
              "Invaders would not have knocked down lines of columns so that they all fell in the same direction.",
              "Earthquakes typically topple columns in different directions at the same site.",
              "The migrating people definitely were not driven out by attackers.",
              "The author considers the invader hypothesis more plausible than the earthquake hypothesis.",
            ]}
            correct="Invaders would not have knocked down lines of columns so that they all fell in the same direction."
            solution={
              <>
                <p>
                  The question asks for an inference about Dr. P’s view, not the
                  author’s. Dr. P treats the uniform toppling of columns as decisive
                  evidence for earthquakes over invasion, which supports the idea
                  that attackers wouldn’t produce that pattern—so the correct choice
                  is the one about invaders not causing same‑direction toppling.
                </p>
                <p className="mt-2">
                  The choice about “it would be easier to reject the invader view
                  if no war records existed” reflects the author’s commentary, not
                  Dr. P’s belief—a textbook Mix‑Up.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 space-y-3">
            <p>
              GDP has long served as a national progress yardstick, but critics
              argue it’s too narrow: it misses key facets of human well‑being and
              ignores harms from economic growth. They suggest alternatives such as
              Gross National Happiness (GNH) and the Genuine Progress Indicator
              (GPI).
            </p>
            <p>
              GNH, developed in Bhutan, comes from a survey of thousands of
              citizens. The questionnaire is highly comprehensive, which also makes
              it time‑consuming and costly; as a result, no country beyond Bhutan
              has adopted it. GPI, in contrast, can be computed from commonly
              available datasets. It uses some inputs similar to GDP but differs in
              that it incorporates not only production totals but also costs tied to
              growth, such as reduced leisure and environmental degradation.
            </p>
          </div>

          <ExampleCard
            number={26}
            title="What advantage of GPI does the author imply?"
            statements={[
              "A) The exceptional thoroughness of the procedure used to compute it",
              "B) Its simplicity relative to two other widely used indicators",
              "C) Its dependence exclusively on aggregate production data",
              "D) Its accounting for non‑positive effects of economic development",
              "E) Its proven effectiveness at assessing quality of life in Bhutan",
            ]}
            correctLetter="D"
            solution={
              <>
                <p>
                  Scan the portion discussing GPI. The passage notes that GPI uses
                  readily available data and, crucially, that it includes negatives
                  associated with growth (e.g., leisure loss, environmental costs).
                  That implies an advantage over GDP: GPI considers harms as well as
                  benefits. Hence D.
                </p>
                <p className="mt-2">
                  Why the others fail:
                </p>
                <ul className="mt-1 list-inside list-disc">
                  <li>
                    A is about GNH’s process, not GPI—a Mix‑Up of measures.
                  </li>
                  <li>
                    B overreaches: the text contrasts GPI’s practicality with GNH,
                    but never says GPI is simpler than GDP as well.
                  </li>
                  <li>
                    C contradicts the passage; GPI uses production data and
                    negatives, not production data only.
                  </li>
                  <li>
                    E references Bhutan and quality‑of‑life surveys, which describe
                    GNH, not GPI—again, a Mix‑Up.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: inference accuracy depends on matching subjects. If the
          question targets the author, infer about the author. If it targets a
          researcher, infer about that researcher. The moment the subject shifts,
          you’ve found a Mix‑Up trap—discard it.
        </p>
      </article>
    </main>
  );
}