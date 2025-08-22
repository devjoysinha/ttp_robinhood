import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.13 Getting the Most From This RC Course | GMAT Reading Comprehension",
  description:
    "Actionable guidance to maximize your GMAT Reading Comprehension prep: understand passages and questions, locate evidence efficiently, avoid trap answers, train untimed first, and build a repeatable process.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.13 Getting the Most From This RC Course
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You’ll get the biggest return from this course by sharpening four core skills. Keep these front and center while you study and practice:
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>Truly understanding the passage</li>
          <li>Precisely understanding each question</li>
          <li>Finding the exact lines and ideas that answer the question</li>
          <li>Separating tempting traps from the one correct answer</li>
        </ul>

        <MustKnow>
          RC success is built on four pillars: deep passage comprehension, careful question reading, targeted evidence-finding, and confidently rejecting trap choices. Train these on every passage and question.
        </MustKnow>

        <section aria-labelledby="understanding-passages">
          <h3 id="understanding-passages" className="text-xl font-semibold text-white">
            Understanding Passages
          </h3>
          <p>
            Use the reading strategies taught in this course as you work through each passage. If the text feels dense or unfamiliar, slow down. Work sentence by sentence, paraphrase challenging parts, and reread spots that aren’t clear until the big picture clicks.
          </p>
          <p>
            Treat tough passages as training opportunities. Persist until you can explain the author’s main point, structure, and tone in your own words. That persistence compounds quickly.
          </p>
          <MustKnow>
            Apply the course’s reading framework and aim for full comprehension of every passage—even if that means reading more deliberately and revisiting difficult lines.
          </MustKnow>
        </section>

        <section aria-labelledby="understanding-questions">
          <h3 id="understanding-questions" className="text-xl font-semibold text-white">
            Understanding Questions
          </h3>
          <p>
            A few extra seconds spent parsing the question stem pay off. Identify exactly what is being asked—scope, task, and constraints—before you look at the choices. Clear question understanding drives efficient evidence searches and cleaner eliminations.
          </p>
          <MustKnow>
            Make it a habit to read every question stem carefully. Precision here saves time and prevents avoidable errors.
          </MustKnow>
        </section>

        <section aria-labelledby="finding-evidence">
          <h3 id="finding-evidence" className="text-xl font-semibold text-white">
            Finding the Right Evidence
          </h3>
          <p>
            Think of RC as an open-book exercise: the support you need is in the passage. Use clues in the stem to target the right paragraph or sentence, then verify with the surrounding context. Your goal is to become fast and reliable at retrieving the exact lines that settle the question.
          </p>
          <MustKnow>
            Train yourself to be an “evidence-finder.” Pinpoint the relevant text first—answers should be supported by words on the page, not memory or outside knowledge.
          </MustKnow>
        </section>

        <section aria-labelledby="trap-vs-correct">
          <h3 id="trap-vs-correct" className="text-xl font-semibold text-white">
            Spotting Traps vs. Selecting the Correct Answer
          </h3>
          <p>
            The final step is separating distractors from the single supported choice. Traps often overgeneralize, go out of scope, reverse relationships, or subtly distort the author’s view. The correct answer will be precise and fully backed by the passage.
          </p>
          <p>
            When practicing, articulate why each eliminated choice is wrong and why the winner must be right. Building this compare-and-contrast muscle boosts accuracy and speed.
          </p>
          <MustKnow>
            During review, explicitly note the difference between the right answer and the strongest trap. This is how you internalize common distractor patterns.
          </MustKnow>
        </section>

        <section aria-labelledby="untimed-first">
          <h3 id="untimed-first" className="text-xl font-semibold text-white">
            Start Untimed, Then Add Speed
          </h3>
          <p>
            At the beginning, remove time pressure. Work slowly enough to truly master the reading process, question interpretation, and evidence gathering. Once you can consistently land the right answer with solid support, gradually introduce timing.
          </p>
          <p>
            In short: accuracy and understanding first; speed follows skill.
          </p>
          <MustKnow>
            For best results, train untimed until your process is consistent and accurate. Then layer in timing to reach test-day pace.
          </MustKnow>
        </section>

        <section aria-labelledby="focus-on-process">
          <h3 id="focus-on-process" className="text-xl font-semibold text-white">
            Focus on Process to Build Mastery
          </h3>
          <p>
            Aim to use repeatable, high-quality steps on every question—clear reading, precise question parsing, targeted evidence, and evidence-based selection. Avoid winning by guesswork or flimsy reasoning; those wins don’t scale.
          </p>
          <p>
            When you hold yourself to strong rationale on both correct and incorrect choices, your method becomes reliable under pressure.
          </p>
        </section>

        <p className="text-gray-300">
          Keep the process tight, prioritize understanding, and practice deliberately. That’s how you translate study time into a higher RC score.
        </p>
      </article>
    </main>
  );
}