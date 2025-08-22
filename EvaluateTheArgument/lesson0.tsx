import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "9. Evaluate the Argument | GMAT Critical Reasoning",
  description:
    "Learn how to evaluate arguments in GMAT Critical Reasoning: what info matters, how assumptions drive validity, and how to use the Yes/No test. Includes two multiple‑choice drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Evaluate the Argument questions give you a plan, proposal, or line of reasoning and ask which piece of information would best help you judge whether the plan will succeed or whether the conclusion is sound. In other words, you’re picking the fact that most clarifies how good the argument really is.
        </p>

        <MustKnow>
          A reliable way to think about these is to hunt for the author’s missing link: the assumption. If that missing link is true, the reasoning holds up more; if it’s false, the case weakens. Your job is to find the question or fact that most directly tests that link.
        </MustKnow>

        <p>
          Most Evaluate items are assumption checks wearing a different label. When you see a cause-and-effect claim, ask whether an alternative cause could explain the result. Using KaTeX notation:
        </p>

        <div className="rounded-md bg-gray-900/50 p-4">
          <p className="mb-1 text-sm text-gray-400">Cause-effect pattern</p>
          <BlockMath math="\\text{Cause} \\;\\Rightarrow\\; \\text{Effect}" />
          <p className="mt-2">
            To evaluate, look for information that would confirm or rule out other plausible{" "}
            <InlineMath math="\\text{causes}" /> of the same{" "}
            <InlineMath math="\\text{effect}" />.
          </p>
        </div>

        <MustKnow>
          The Yes/No Test: A great Evaluate choice is one where a “Yes” answer makes the argument stronger and a “No” answer makes it weaker (or vice versa). If both answers move the needle in opposite directions, you’ve found a high‑quality Evaluate choice.
        </MustKnow>

        <section aria-labelledby="disease-x" className="space-y-3">
          <h3 id="disease-x" className="text-xl font-semibold text-white">
            Warm‑up: Spot the Missing Link
          </h3>
          <p>
            Policy: Anyone living in a home where there’s a contagious illness should be isolated. Yesterday, two residents of the yellow house on Maple Street were diagnosed with disease X. Therefore, everyone in that house should be quarantined.
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Premise 1: People in homes with a contagious disease should be quarantined.
            </li>
            <li>Premise 2: Two residents in the yellow house have disease X.</li>
            <li>Conclusion: Everyone in the yellow house should be quarantined.</li>
          </ul>
          <p>
            The hidden assumption is that disease X is, in fact, contagious. If that’s true, the logic holds. If it’s not, the conclusion isn’t supported. So the single most useful fact to establish is whether disease X is communicable.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Diets Plus CEO: We surveyed 500 people who used our Healthy Plus prepared meals. All lost some body fat; 400 lost at least 20 pounds of fat, and 300 lost at least 25 pounds. Therefore, our meals alone are sufficient for losing body fat. Which piece of information would be most useful for evaluating this claim?"
          options={[
            "Whether the 500 people kept the fat off after they stopped using the meals",
            "Whether the 500 people needed to lose more weight than average",
            "Whether, when using the meals, the 500 people also began rigorous exercise programs for the first time",
            "Whether Healthy Plus meals taste as good as other healthy options",
            "Whether most of the 500 people had tried other diets in the past",
          ]}
          correct="Whether, when using the meals, the 500 people also began rigorous exercise programs for the first time"
          solution={
            <>
              <p>
                The CEO asserts a cause‑and‑effect relationship: meals cause fat loss. In KaTeX:
              </p>
              <BlockMath math="\\text{Meals} \\;\\Rightarrow\\; \\text{Fat Loss}" />
              <p>
                To evaluate this, look for a competing cause. If the group also started rigorous workouts, exercise could explain the fat loss. If they did not, the meals are more plausibly the driver.
              </p>
              <p>
                Choices about taste, prior dieting, or long‑term maintenance don’t test the stated claim that meals alone suffice to lose fat. Whether the sample needed to lose more weight also doesn’t address causality. The exercise question directly probes an alternative cause, so it’s the most useful check.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="The Academy of Pediatrics recommends teens sleep until 8:00 a.m. to improve health and academics. Danterton High moved its start time from 7:30 a.m. to 9:00 a.m., yet most students showed no change in grades or health. Therefore, letting teens wake up later doesn’t actually help in these areas. Which would be most useful to determine?"
          options={[
            "Whether most Danterton students prefer the new start time",
            "Whether parents now have difficulty getting to work on time",
            "Whether most teenagers sleep past 8:00 a.m. on weekends",
            "Whether most Danterton students used the extra morning time to sleep versus doing other activities",
            "Whether improving students’ diets would help their grades and health",
          ]}
          correct="Whether most Danterton students used the extra morning time to sleep versus doing other activities"
          solution={
            <>
              <p>
                The school assumes the later start resulted in more sleep. If students spent the extra time on non‑sleep activities, the intervention didn’t actually change the relevant variable (sleep). A “Yes, they slept more” answer supports the conclusion’s reasoning; a “No, they didn’t” answer undermines it. That’s the Yes/No test in action.
              </p>
              <p>
                Preferences, parent commutes, weekend habits, or other potential interventions (diet) don’t test whether the change targeted the mechanism the recommendation relies on—additional sleep.
              </p>
            </>
          }
        />

        <MustKnow>
          Summary: Evaluate the Argument = test the key assumption. Seek information that, if answered one way, strengthens the argument, and if answered the other way, weakens it. Prefer items that rule out alternative causes in{" "}
          <InlineMath math="\\text{cause} \\Rightarrow \\text{effect}" /> claims.
        </MustKnow>
      </article>
    </main>
  );
}