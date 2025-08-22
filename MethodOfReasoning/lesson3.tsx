import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "12.2 Two‑Speaker Method of Reasoning Questions | Critical Reasoning",
  description:
    "Learn how to analyze two‑speaker Method of Reasoning prompts: isolate each speaker’s claim, map the support, and describe how the second speaker responds. Includes a fully worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.2 Two‑Speaker Method of Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A large share of Method of Reasoning prompts are written as short
          exchanges between two people. Treat each speaker’s remarks as a
          separate argument: identify the conclusion, list the supporting
          evidence, and note any assumptions or gaps.
        </p>

        <MustKnow>
          Start by mapping both arguments: what each person concludes and how
          they try to justify it. Then describe, as precisely as possible, what
          the second speaker does to the first—does the second offer a different
          explanation, attack the data or method, shift the scope, concede a
          point, or argue in favor of the same endpoint by a different route?
        </MustKnow>

        <p>
          Keep in mind that the second person’s reply isn’t always an effective
          rebuttal. Sometimes the response targets the person rather than the
          logic (an ad hominem), changes the subject, or simply fails to address
          a key step in the first person’s reasoning. In other cases, the two
          speakers seem to disagree but are actually talking about different
          things—a classic scope/frame shift.
        </p>

        <p>
          When a reply points to an alternative cause, you’re looking at a
          concern about confounding variables. In statistical terms, we might
          model the outcome as{" "}
          <InlineMath math={"\\text{Health} = f(\\text{Diet},\\,\\text{Location},\\,\\dots)"} />{" "}
          —if location wasn’t controlled, diet might not be the actual driver of
          the observed differences.
        </p>

        <MCQExample
          number={31}
          prompt={
            <>
              <p>
                Researcher: In our study, participants following the
                Mediterranean diet were healthier and lived longer than those on
                other diets. Therefore, people should adopt the Mediterranean
                diet.
              </p>
              <p>
                Editor: In your design, everyone in one region used the
                Mediterranean diet, while participants in other regions used
                other diets. We won’t publish these results because the
                differences could be due to regional factors rather than diet.
              </p>
              <p>How does the editor respond to the researcher?</p>
            </>
          }
          options={[
            "Questioning the assumption that no other diet could yield better results than the Mediterranean diet.",
            "Noting that averages for a group may not indicate what diet is best for any single individual.",
            "Pointing out that the study failed to control for a factor other than diet that could explain the results.",
            "Criticizing the ethics of assigning people in different areas to diets of potentially different quality.",
            "Asserting that regional differences, rather than diet, definitely caused the observed outcomes.",
          ]}
          correct="Pointing out that the study failed to control for a factor other than diet that could explain the results."
          solution={
            <>
              <p className="mb-2 font-semibold">Argument breakdown</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Researcher: Premise—participants on the Mediterranean diet
                  outperformed others; Conclusion—adopt the Mediterranean diet.
                </li>
                <li>
                  Editor: Premise—diet was assigned by region; Conclusion—results
                  may reflect where people lived, not what they ate.
                </li>
              </ul>

              <p className="mt-4">
                The editor challenges the study’s internal validity by citing an
                uncontrolled variable (location). Using a simple model,{" "}
                <InlineMath math={"\\text{Health} = f(\\text{Diet},\\,\\text{Location})"} />, if{" "}
                <InlineMath math={"\\text{Location}"} /> varies with{" "}
                <InlineMath math={"\\text{Diet}"} /> (as it does here), you
                can’t isolate the causal impact of diet.
              </p>

              <p className="mt-4 font-semibold">Answer choice analysis</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  A: Talks about other diets being superior—this isn’t the
                  editor’s point.
                </li>
                <li>
                  B: Focuses on individual‑level optimization, which the editor
                  never discusses.
                </li>
                <li>
                  C: Correct. It describes a failure to control for a confounder
                  (region) unrelated to the focal variable (diet).
                </li>
                <li>
                  D: Ethics are not raised by the editor.
                </li>
                <li>
                  E: Overstates the claim. The editor says it{" "}
                  <em>could</em> be location, not that it definitely is.
                </li>
              </ul>

              <p className="mt-4">Correct answer: C</p>
            </>
          }
        />

        <MustKnow>
          Label the move. Common response types include: proposing an
          alternative cause, disputing data quality or method, exposing an
          assumption, drawing a distinction in scope, or agreeing with the
          conclusion but via different support. The correct choice will state
          exactly what the second speaker does—no more, no less.
        </MustKnow>

        <p>
          Next up: how the verbs used by the speakers (e.g., concede, refute,
          qualify, analogize) can quickly steer you toward the correct response
          description.
        </p>
      </article>
    </main>
  );
}