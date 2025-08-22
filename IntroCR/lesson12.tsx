import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.13 Skip Pre‑Thinking | Critical Reasoning",
  description:
    "Why guessing an answer before reviewing the options hurts Critical Reasoning performance. Learn the pitfalls, time costs, and better habits.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.13 Avoid “Pre‑Thinking” Answers in Critical Reasoning
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common shortcut students try in Critical Reasoning is to read the
          stimulus and the question stem, then predict the correct answer before
          looking at the choices. That approach sounds efficient—but in practice
          it undermines accuracy and wastes time.
        </p>

        <MustKnow>
          Don’t pre‑decide an answer before you review the choices. Locking in a
          prediction narrows your focus, invites bias, and often makes you miss
          what’s actually written in the options.
        </MustKnow>

        <section aria-labelledby="why-not-prethink">
          <h3 id="why-not-prethink" className="text-white font-semibold">
            Why pre‑thinking backfires
          </h3>

          <h4 className="text-gray-100 font-medium">1) It burns time</h4>
          <p>
            You’re on a timer. Spending extra seconds guessing a solution first
            means you’ll still need to compare five choices afterward. That’s
            two passes instead of one—and the “guess” pass rarely pays off.
          </p>

          <MustKnow>
            Your job is to evaluate the five options quickly and objectively.
            Guessing first adds a step without improving the final decision.
          </MustKnow>

          <h4 className="text-gray-100 font-medium">
            2) It narrows your attention
          </h4>
          <p>
            Even when you know your prediction might be wrong, your brain tends
            to hunt for a match. If none appears, you’ll re‑read the set, now
            juggling both the prompt and your failed prediction—more time, more
            friction.
          </p>

          <MustKnow>
            Pre‑thinking often forces a second scan of all choices after you
            don’t find your “predicted” answer—doubling the work.
          </MustKnow>

          <h4 className="text-gray-100 font-medium">
            3) It amplifies cognitive bias
          </h4>
          <p>
            Test makers know the patterns of common premature predictions. They
            craft tempting traps that resemble those partial or naive
            conclusions. When you pre‑think, you’re more likely to take the bait
            and pick a choice that “sounds like” your idea but doesn’t actually
            answer the question.
          </p>

          <MustKnow>
            Pre‑thinking increases the chance you select a polished trap that
            mirrors your guess rather than the option that directly addresses
            the task.
          </MustKnow>

          <h4 className="text-gray-100 font-medium">
            4) It slows skill development
          </h4>
          <p>
            CR is about reading precisely, recognizing argument structure, and
            testing choices against the prompt’s task. The more you rely on
            guessing, the less you practice the core skill—systematically
            validating each option.
          </p>

          <MustKnow>
            To improve in CR, train the habit of scrutinizing every choice
            against the specific question task—no shortcuts.
          </MustKnow>
        </section>

        <section aria-labelledby="what-to-do-instead">
          <h3 id="what-to-do-instead" className="text-white font-semibold">
            What to do instead
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Read the stimulus carefully—identify conclusion, evidence, and
              any key assumptions or gaps.
            </li>
            <li>
              Note the task in the question stem (strengthen, weaken, resolve,
              assumption, inference, etc.).
            </li>
            <li>
              Evaluate all five answer choices against that task. Eliminate
              choices that don’t address the logic or that introduce distortions
              or irrelevancies.
            </li>
            <li>
              Pick the option that most directly satisfies the task—no need to
              match a predicted wording or idea.
            </li>
          </ul>
        </section>

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-white font-semibold">
            The big picture
          </h3>
          <p>
            Let other test‑takers cling to shortcuts. Your advantage comes from
            disciplined reading and objective comparison. When you resist
            pre‑thinking and instead verify each option against the task, you
            solve faster, fall for fewer traps, and steadily build reliable CR
            skill.
          </p>
        </section>

        <section aria-labelledby="transition">
          <h3 id="transition" className="text-white font-semibold">
            Up next
          </h3>
          <p>
            Another shortcut to avoid: eliminating or choosing a CR option based
            solely on a single loaded word. We’ll cover how to prevent that
            mistake next.
          </p>
        </section>
      </article>
    </main>
  );
}