import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.20 Critical Reasoning Questions Stay Consistent | GMAT Verbal",
  description:
    "Understand why GMAT Critical Reasoning feels predictable, how to use that consistency to your advantage, and what to focus on when practicing. Includes two quick multiple‑choice checks with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.20 Critical Reasoning Questions Have Been Consistent Over Time
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The GMAT is a standardized exam. To keep scores comparable across test
          dates and versions, the makers of the test maintain steady patterns in
          how questions are written and how correct answers are framed. As a
          result, Critical Reasoning (CR) questions tend to look and feel
          familiar from test to test.
        </p>

        <p>
          You can use that consistency to study more efficiently: learn the most
          common argument structures, get comfortable with recurring question
          stems, and practice recognizing the characteristics of strong versus
          weak answer choices.
        </p>

        <MustKnow>
          Because the GMAT is standardized, CR items follow reliable patterns in
          wording, structure, and answer design. The more you internalize those
          patterns—what correct answers typically do and how trap answers are
          written—the faster and more accurately you can evaluate choices on
          test day.
        </MustKnow>

        <section aria-labelledby="how-to-use-consistency">
          <h3
            id="how-to-use-consistency"
            className="text-xl font-semibold text-white"
          >
            How to leverage this consistency
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Master the core argument pieces: conclusion, evidence, assumptions
              that connect them, and common logical gaps.
            </li>
            <li>
              Drill the major CR question families (e.g., strengthen, weaken,
              assumption, inference) so you know what a “good” answer typically
              looks like for each.
            </li>
            <li>
              Watch for trap patterns: extreme wording, answers that restate
              premises without addressing the task, or responses that introduce
              irrelevant details.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="Which statement best explains why GMAT Critical Reasoning often feels predictable?"
          options={[
            "The exam frequently changes CR formats to keep students guessing.",
            "Every CR item is totally unique, so patterns are rare.",
            "As a standardized test, the GMAT keeps question structures and answer design stable for score comparability.",
            "CR questions primarily reward outside knowledge rather than reasoning.",
            "CR questions always offer six answer choices, which creates predictability.",
          ]}
          correct="As a standardized test, the GMAT keeps question structures and answer design stable for score comparability."
          solution={
            <>
              <p>
                The GMAT is standardized, so CR items maintain consistent
                structures, stems, and answer tendencies. That predictability
                supports fair scoring across different test forms.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Which study tactic most directly exploits the consistency of GMAT CR?"
          options={[
            "Memorize niche facts from business articles.",
            "Skim answer choices first and pick the shortest one.",
            "Learn what correct answers typically do for each question type and practice spotting common traps.",
            "Focus only on timing; accuracy will follow automatically.",
            "Avoid analyzing argument structure to save time.",
          ]}
          correct="Learn what correct answers typically do for each question type and practice spotting common traps."
          solution={
            <>
              <p>
                Because CR patterns repeat, the highest‑yield approach is to
                learn how correct answers behave (by task) and to recognize
                recurring wrong‑answer designs. This lets you evaluate choices
                quickly and accurately.
              </p>
            </>
          }
        />

        <section aria-labelledby="whats-next">
          <h3 id="whats-next" className="text-xl font-semibold text-white">
            What’s next
          </h3>
          <p>
            With the big picture in place, we’re ready to dive into our first
            major CR topic: finding the assumption that links evidence to a
            conclusion. You’ll learn how to spot the gap in an argument and how
            the right answer bridges it.
          </p>
        </section>
      </article>
    </main>
  );
}