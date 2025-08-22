import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "1.2 The Basic Layout of Critical Reasoning Questions | Verbal",
  description:
    "Understand the three-part structure of Critical Reasoning questions and how to choose the option that matches the stem’s request. Includes a strengthen example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.2 The Basic Layout of Critical Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every Critical Reasoning (CR) item follows a predictable pattern: a short
          written stimulus (typically about <InlineMath math="\\approx\\,100" /> words),
          a question stem, and exactly five answer choices (
          <InlineMath math="n = 5" />). Your task is to pick the choice that has
          the precise logical relationship to the stimulus that the stem requests
          (for example, strengthens, weakens, or explains).
        </p>

        <MustKnow>
          A CR question always has three parts—stimulus, stem, and five choices.
          The correct option is the one that best satisfies the stem’s instruction
          relative to the stimulus. Read all five choices carefully before deciding.
        </MustKnow>

        <p>
          Let’s see this structure in action with a quick strengthen example.
        </p>

        <MCQExample
          number={1}
          prompt="In many regions, sales of figs have risen sharply. Shortly before this increase, a new video game launched in which characters gain power by eating figs. Therefore, the game’s portrayal of figs explains the surge in fig sales. Which option, if true, most reinforces the argument’s conclusion?"
          options={[
            "Because fig trees tolerate a wide range of climates, figs can be grown in most parts of the country.",
            "Sales of blueberries have also climbed recently.",
            "Purchases of both fresh and dried figs have gone up.",
            "Fig sales have increased only in areas where the new video game is popular.",
            "Figs are rich in nutrients and antioxidants.",
          ]}
          correct="Fig sales have increased only in areas where the new video game is popular."
          solution={
            <>
              <p>
                Task: Strengthen. We want a choice that makes it more likely that the
                video game caused the rise in fig sales rather than some unrelated factor.
              </p>

              <p>
                The best strengtheners often align the effect with the proposed cause
                across time or place. If the sales spike happens specifically where
                the game is popular, that consistency supports the causal claim.
              </p>

              <p>
                Choice D says the increases occur only in places where the game is
                popular. That geographic match between cause (game popularity) and effect
                (higher sales) lends strong support to the conclusion.
              </p>

              <p>
                Why the others fall short:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  A: Talks about where figs can be grown (supply/feasibility), not about
                  why demand rose now—doesn’t tie the increase to the game.
                </li>
                <li>
                  B: Blueberries are irrelevant to a causal claim about figs.
                </li>
                <li>
                  C: Restates the effect (sales are up) but doesn’t link it to the game.
                </li>
                <li>
                  E: Suggests an alternative reason (health benefits), which could
                  undermine the game-based explanation rather than strengthen it.
                </li>
              </ul>

              <p>
                Therefore, the choice that most strengthens the conclusion is D.
              </p>
            </>
          }
        />

        <p>
          Big takeaway: identify what the stem is asking for and then select the option
          that most directly accomplishes that task relative to the stimulus. Position,
          timing, and pattern-matching between cause and effect are common signals in
          strengthen questions.
        </p>
      </article>
    </main>
  );
}