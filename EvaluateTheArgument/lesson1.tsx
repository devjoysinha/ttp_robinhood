import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.2 The Yes/No Test for Evaluate-the-Argument | GMAT Critical Reasoning",
  description:
    "Master the Yes/No Test for Evaluate-the-Argument questions: how to spot the choice that flips the argument depending on a Yes vs. No answer. Includes three quick drills and a full five‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.2 The Yes/No Test for Evaluate‑the‑Argument Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A fast, reliable way to attack many Evaluate‑the‑Argument questions is the
          Yes/No test. The idea is simple: read each answer choice as a question you
          could ask about the situation, then consider the two possible responses—
          “Yes” and “No”—and see how each response would change the argument.
        </p>

        <MustKnow>
          Many Evaluate‑the‑Argument prompts can be cracked by reframing each option
          as a Yes/No question. If “Yes” and “No” push the argument in opposite
          directions (one strengthens, the other weakens), you’ve likely found the
          correct choice.
        </MustKnow>

        <p>
          In good Evaluate answers, the two possible responses flip the argument’s
          support: if “Yes” helps the author, then “No” should hurt (or vice versa).
          In wrong answers, both responses are non‑events—you’d shrug and say,
          “So what?” either way.
        </p>

        <MustKnow>
          Correct Evaluate answers create a two‑way impact: if “Yes” strengthens,
          “No” weakens; if “Yes” weakens, “No” strengthens. Incorrect answers are
          inert—both “Yes” and “No” leave the argument essentially unchanged.
        </MustKnow>

        <p>
          Let’s warm up with a few quick two‑option drills. Treat each answer choice
          as a question. Ask “What if Yes?” and “What if No?” and watch what happens
          to the argument’s strength.
        </p>

        <MCQExample
          number={1}
          prompt={
            <>
              Policy: anyone living in a household where a communicable disease is
              present should be quarantined. Two residents of the yellow house on
              Maple Street came down with disease X yesterday. Therefore, everyone
              in that house should be quarantined. Which question would be most
              useful for evaluating the logic of this argument?
            </>
          }
          options={[
            "A) Is disease X actually communicable?",
            "B) Have people in the house next door been infected with disease X?",
          ]}
          correct="A) Is disease X actually communicable?"
          solution={
            <>
              <p>
                Read each as a Yes/No question. For (A): If Yes (X is communicable),
                the argument’s policy applies, so the conclusion is supported.
                If No (X is not communicable), the policy does not apply, so the
                conclusion collapses. Opposite effects → useful.
              </p>
              <p>
                For (B): Whether neighbors are infected doesn’t affect whether the
                quarantine policy applies to the yellow house. Yes or No, nothing
                changes → not useful. So (A) is correct.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt={
            <>
              Experts recommend relocating a factory that has polluted a lake and
              harmed the axolotl population. They claim the population will rebound
              to pre‑factory levels within two years of relocation. Which question
              would be most useful in evaluating their prediction?
            </>
          }
          options={[
            "A) Do axolotls ever live more than ten years?",
            "B) Will the factory’s pollutants remain in the water for several years after the factory is moved?",
          ]}
          correct="B) Will the factory’s pollutants remain in the water for several years after the factory is moved?"
          solution={
            <>
              <p>
                (A) is irrelevant: axolotl lifespan doesn’t bear on a two‑year
                recovery prognosis. Yes or No, the claim is unaffected.
              </p>
              <p>
                For (B): If Yes (pollutants persist for several years), the two‑year
                recovery timeline is undermined → weakens. If No (pollutants don’t
                persist), the plan’s timeline becomes more credible → strengthens.
                Opposite effects → this is the useful question.
              </p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt={
            <>
              A survey shows parents who smoke are more likely to have children who
              engage in destructive behavior. Therefore, parental smoking causes
              children’s destructive behavior. Which question would be most useful
              for evaluating the causal claim?
            </>
          }
          options={[
            "A) Do some highly destructive children have parents who do not smoke?",
            "B) Can difficult living conditions both increase parental smoking and increase children’s destructive behavior?",
          ]}
          correct="B) Can difficult living conditions both increase parental smoking and increase children’s destructive behavior?"
          solution={
            <>
              <p>
                (A) doesn’t test the causal link. Even if some destructive children
                have non‑smoking parents, the correlation in the prompt could still
                be explained by other factors; Yes or No doesn’t directly flip the
                original causal claim.
              </p>
              <p>
                (B) probes a potential common‑cause confounder. If Yes, the
                correlation might be explained by a third factor → weakens the
                causal claim. If No, that alternative is ruled out → strengthens
                the causal claim. Opposite effects → (B) is the evaluator we want.
              </p>
            </>
          }
        />

        <MustKnow>
          A dependable workflow: 1) Restate each answer as a Yes/No question. 2) Ask
          “What if Yes?” “What if No?” 3) Look for the option where Yes and No
          clearly push the argument in opposite directions.
        </MustKnow>

        <p className="pt-2">
          Now, try a full five‑choice Evaluate question. Use the Yes/No test to
          separate relevant from irrelevant information.
        </p>

        <MCQExample
          number={4}
          prompt={
            <>
              Side‑by‑side tests find no meaningful difference in key nutrient levels
              between organically and conventionally grown produce. Therefore, there
              is no reason to believe organic produce provides any health advantage
              over conventional produce. To evaluate this argument, it would be most
              useful to determine which of the following?
            </>
          }
          options={[
            "A) Whether organically grown fruits and vegetables taste different from conventionally grown ones",
            "B) Whether plants in general must absorb nutrients from soil to grow",
            "C) Whether conventionally grown produce contains significant amounts of harmful chemicals that organic produce lacks",
            "D) Whether price differences between organic and conventional produce are justified",
            "E) Whether organic farming methods are more labor‑intensive than conventional methods",
          ]}
          correct="C) Whether conventionally grown produce contains significant amounts of harmful chemicals that organic produce lacks"
          solution={
            <>
              <p>
                The argument infers “no health benefit” from one similarity
                (nutrient levels). A strong evaluator will test a different health
                pathway. Choice (C) does exactly that.
              </p>
              <p>
                Apply the Yes/No test to (C): If Yes (conventional produce carries
                harmful chemicals not found in organic), the conclusion is
                undermined → the argument weakens. If No (no such chemicals),
                the conclusion looks better → the argument strengthens. Opposite
                effects → useful evaluator.
              </p>
              <p>
                Choices (A), (B), (D), and (E) don’t bear on health benefits in
                a way that flips the claim; either answer leaves the conclusion
                essentially unchanged → not useful.
              </p>
            </>
          }
        />

        <p>
          Bottom line: a correct Evaluate answer is a pivot—its Yes/No outcomes
          move the argument in opposite directions. If both answers feel like
          “doesn’t matter,” you’re looking at a trap.
        </p>
      </article>
    </main>
  );
}