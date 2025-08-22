import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.4 The Data Insights Section Is Computer‑Adaptive | Data Insights",
  description:
    "Learn how the computer‑adaptive system in Data Insights adjusts question difficulty as you work—similar to Quant and Verbal. Includes a quick check question and a brief model of adaptivity.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.4 The Data Insights Section Is Computer‑Adaptive
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Data Insights (DI) section adapts to your performance in real time, just as the Quantitative and Verbal sections do. When you perform well, the system tends to deliver tougher items; if you miss questions, it generally responds with easier ones. The goal is to quickly zero in on your skill level.
        </p>

        <MustKnow>
          Data Insights uses computer‑adaptive delivery: your answers steer the difficulty of the next questions. Strong streaks raise difficulty; mistakes typically lower it. This adaptivity helps estimate your ability efficiently.
        </MustKnow>

        <section aria-labelledby="how-it-adapts" className="space-y-3">
          <h3 id="how-it-adapts" className="text-white font-semibold">
            How the adaptivity behaves
          </h3>
          <p>
            You don’t get a fixed set of questions. Instead, the test engine chooses upcoming items based on how you’re doing. That means two people can see very different versions of DI even if they take it at the same time.
          </p>
          <p>
            A simple way to think about it: as your estimated ability increases, the probability of getting a given question correct rises. In test theory this is often modeled with a logistic curve:
          </p>
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
            <BlockMath math={`P(\\text{correct}\\mid \\theta) = \\frac{1}{1 + e^{-a(\\theta - b)}}`} />
            <p className="mt-2 text-sm text-gray-300">
              Here, <InlineMath math="\\theta" /> is your current ability estimate, <InlineMath math="b" /> is an item’s difficulty, and <InlineMath math="a" /> reflects how sharply the item distinguishes skill levels. The adaptive engine generally serves items with difficulty <InlineMath math="b" /> close to your current <InlineMath math="\\theta" />, refining the estimate as you work.
            </p>
          </div>
        </section>

        <MCQExample
          number={1}
          prompt="In a computer‑adaptive DI section, what most commonly happens after you answer several questions correctly in a row?"
          options={[
            "The on‑screen timer speeds up.",
            "You are more likely to see harder questions next.",
            "You’re allowed to skip to any question you want.",
            "Earlier responses are automatically changed by the system.",
            "Your score is locked and cannot change further.",
          ]}
          correct="You are more likely to see harder questions next."
          solution={
            <>
              <p>
                Adaptive tests adjust difficulty to target your estimated ability. A streak of correct answers usually triggers more challenging items; a string of misses tends to bring easier ones. The timer and your prior responses are not altered.
              </p>
            </>
          }
        />

        <section aria-labelledby="prep-implications" className="space-y-3">
          <h3 id="prep-implications" className="text-white font-semibold">
            What this means for your prep
          </h3>
          <ul className="list-disc pl-6">
            <li>Expect question difficulty to fluctuate as the test homes in on your level.</li>
            <li>Don’t panic if an item suddenly seems easy or hard—adaptivity is working as intended.</li>
            <li>Focus on accuracy and steady pacing; both signal the algorithm to place you appropriately.</li>
          </ul>
        </section>

        <p>
          Bottom line: DI is adaptive by design. Correct answers tend to raise the challenge; incorrect answers tend to lower it. Understanding this behavior helps you keep your composure and make good decisions throughout the section.
        </p>
      </article>
    </main>
  );
}