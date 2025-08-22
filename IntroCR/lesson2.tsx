import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.3 What GMAT Critical Reasoning Really Tests | Verbal",
  description:
    "Understand the core skills GMAT Critical Reasoning measures, what it doesn’t, and the three pillars of success: what you know, what you notice, and what you do.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.3 What GMAT Critical Reasoning Really Tests
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many test‑takers aren’t fully clear on what Critical Reasoning (CR) questions actually evaluate. Because of that, they grind through problem sets without a real lift in accuracy or confidence. Let’s clear up the target skill set so your practice moves the needle.
        </p>

        <MustKnow>
          GMAT Critical Reasoning measures your ability to construct, analyze, and judge arguments and proposed plans.
        </MustKnow>

        <section aria-labelledby="cr-not-about">
          <h3 id="cr-not-about" className="text-xl font-semibold text-white">
            What Critical Reasoning is NOT
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Not a word‑matching game. Picking choices that echo the passage’s vocabulary isn’t the goal—sound logic is.
            </li>
            <li>
              Not a memorization contest. Knowing labels (e.g., question types) helps organize your thinking, but memorized lists don’t produce correct answers on their own.
            </li>
            <li>
              Not a set of quick tricks. Simple shortcuts may work on easier items, but tougher questions demand careful reasoning and methodical evaluation.
            </li>
          </ul>
        </section>

        <section aria-labelledby="cr-is-about">
          <h3 id="cr-is-about" className="text-xl font-semibold text-white">
            What Critical Reasoning DOES Test
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>Seeing the big picture without missing key details.</li>
            <li>Applying airtight logic to claims, evidence, and conclusions.</li>
            <li>Avoiding common traps and cognitive biases.</li>
            <li>Thinking clearly and precisely rather than superficially.</li>
            <li>Using sound judgment when multiple paths seem plausible.</li>
            <li>Executing proven best practices consistently.</li>
          </ul>
        </section>

        <p>
          In short, CR questions require higher‑order reasoning. You’ll read actively, interrogate assumptions, and weigh alternatives—then commit to the choice that best fits the task.
        </p>

        <section aria-labelledby="three-pillars">
          <h3 id="three-pillars" className="text-xl font-semibold text-white">
            The Three Pillars of CR Success
          </h3>
          <p>
            You can boil strong CR performance down to three interconnected pieces:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              What you know: core concepts, common argument structures, and task expectations.
            </li>
            <li>
              What you see: careful reading, detail awareness, and recognition of logical gaps.
            </li>
            <li>
              What you do: a disciplined process for evaluating choices and avoiding traps.
            </li>
          </ul>

          <MustKnow>
            Accurate answers in CR come from the interplay of three elements: what you know, what you notice, and what you decide to do with that information.
          </MustKnow>
        </section>

        <p>
          As we continue through this chapter and beyond, we’ll build each of these skills step by step. Next up: understanding how arguments are structured so you can dissect them with confidence.
        </p>
      </article>
    </main>
  );
}