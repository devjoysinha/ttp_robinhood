import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.8 GMAT Reading Comprehension Pacing Strategy | Verbal",
  description:
    "Set smart time budgets for GMAT Reading Comprehension. Learn recommended reading times for short vs. long passages, per‑question pacing, and how to adapt when passages are dense. Includes quick practice estimates.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.8 Pacing Strategy for Reading Comprehension
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strong results in RC come from disciplined time management. A practical
          approach is to devote a small, fixed window to reading the passage
          and a steady, predictable amount per question. Use the guidelines
          below as your default plan and adjust slightly if a passage is
          unusually dense.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Recommended time budgets:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Short passage: about 2 minutes to read.</li>
              <li>Long passage: about 3–4 minutes to read.</li>
              <li>Answering: roughly 1 minute per question.</li>
            </ul>
            <p className="mt-3">
              A quick estimate for a passage is:
              <span className="ml-2 inline-block rounded bg-slate-800 px-2 py-0.5 font-mono text-sm text-slate-100">
                total time ≈ reading time + (number of questions) × 1 minute
              </span>
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="why-estimate">
          <h3 id="why-estimate" className="text-lg font-semibold text-white">
            Why estimates, not exact counts
          </h3>
          <p>
            You won’t be counting words on test day. Instead, glance at the passage
            and decide whether it’s short or long, then stick to the respective
            reading window. If a short passage is taking too long, that’s a cue
            to wrap up your read and move to the questions.
          </p>
        </section>

        <section aria-labelledby="paragraphs-dont-equal-length">
          <h3 id="paragraphs-dont-equal-length" className="text-lg font-semibold text-white">
            Don’t judge length by paragraph count
          </h3>
          <p>
            Some long passages span two or three hefty paragraphs; others may be
            shorter but split into multiple small paragraphs. Treat length by
            overall lines or words on screen—not by the number of paragraphs—so
            you don’t rush or panic unnecessarily.
          </p>
        </section>

        <section aria-labelledby="adapting">
          <h3 id="adapting" className="text-lg font-semibold text-white">
            Adapting as you practice
          </h3>
          <p>
            As you work more RC sets, you’ll develop an intuitive sense for when to
            take a bit more time on particularly dense or technical passages. That
            said, keep your pacing in ranges rather than fixed numbers and avoid
            letting a single passage derail the rest of the section.
          </p>
        </section>

        <section aria-labelledby="quick-estimates" className="space-y-4">
          <h3 id="quick-estimates" className="text-lg font-semibold text-white">
            Quick practice: time estimates
          </h3>

          <MCQExample
            number={1}
            prompt="A short passage has 4 questions. What is a sensible total time budget?"
            options={[
              "4 minutes",
              "5 minutes",
              "6 minutes",
              "7 minutes",
              "8 minutes",
            ]}
            correct="6 minutes"
            solution={
              <>
                <p>
                  Use the estimate: total ≈ reading + questions × 1 minute.
                </p>
                <p className="font-mono text-slate-100">
                  2 minutes + 4 × 1 minute = 6 minutes.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="A long passage (dense) has 5 questions. What’s a reasonable time range?"
            options={[
              "About 6 minutes",
              "About 7 minutes",
              "About 8–9 minutes",
              "About 10 minutes",
              "Impossible to estimate",
            ]}
            correct="About 8–9 minutes"
            solution={
              <>
                <p>
                  Long reading is roughly 3–4 minutes. Add about 1 minute per
                  question for 5 questions.
                </p>
                <p className="font-mono text-slate-100">
                  3–4 minutes + 5 × 1 minute ≈ 8–9 minutes.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-lg font-semibold text-white">
            Big picture
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Decide quickly whether a passage is short or long.</li>
            <li>Stick to the reading window, then spend about 1 minute per question.</li>
            <li>Judge passage length by its lines/words, not its paragraph count.</li>
            <li>Allow small adjustments for density, but keep the overall pace steady.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}