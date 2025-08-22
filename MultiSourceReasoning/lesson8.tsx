import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "6.9 Execution Strategy #2: Define Your Mission | Multi‑Source Reasoning",
  description:
    "MSR execution strategy: lock in your objective before you start. Learn how to state your mission, split it into concrete tasks, and choose the best first step to cut through noise and move faster.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.9 Execution Strategy #2: Define Your Mission
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Before you dive into any MSR problem, decide exactly what you’re trying
          to produce. A crisp mission helps you ignore distractions across tabs,
          gather only what matters, and execute quickly.
        </p>

        <p>Use this quick self‑check to frame your mission:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>What, precisely, is the response the question wants?</li>
          <li>If there are multiple requirements, what are the distinct subtasks?</li>
          <li>Which specific facts or values must you extract to answer?</li>
          <li>What’s the smartest first fact to look for, and where will you find it?</li>
        </ul>

        <MustKnow>
          Say your mission out loud (or write it briefly) before you start:
          “Here’s what I need to deliver, and here’s how I’ll get it.” That
          anchor keeps your search targeted and prevents tab‑hopping without a plan.
        </MustKnow>

        <p>
          Early in practice, literally verbalize your mission and the sequence of
          steps you’ll take. This habit makes your process deliberate rather than
          reactive and reduces the chance you’ll chase irrelevant details.
        </p>

        <MustKnow>
          Clear, bite‑sized tasks reduce cognitive load. When you define exactly
          what to extract and in what order, execution becomes easier and the
          problem feels less overwhelming.
        </MustKnow>

        <section aria-labelledby="mission-template-title" className="space-y-3">
          <h3 id="mission-template-title" className="text-base font-semibold text-white">
            A simple mission template
          </h3>
          <p className="text-gray-300">
            Try this: “My mission is to [produce X]. To do that, I’ll first find
            [fact A], then confirm [fact B], and finally compute/compare [step C].”
            Keep it short and focused; update it if the question reveals a new
            constraint.
          </p>
        </section>

        <section aria-labelledby="when-to-revise-title" className="space-y-3">
          <h3 id="when-to-revise-title" className="text-base font-semibold text-white">
            When to revise your mission
          </h3>
          <p className="text-gray-300">
            If you discover that a tab contradicts your plan or a detail removes a
            subtask, pause and restate your mission. A 5‑second reset can save a
            minute of unfocused searching.
          </p>
        </section>
      </article>
    </main>
  );
}