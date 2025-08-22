import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.7 Correct Answers in Detail RC Questions | Reading Comprehension",
  description:
    "Learn what correct answers look like in GMAT RC Detail questions. See why the right choice often paraphrases the passage, and how some answers are based on a single sentence while others combine multiple lines.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="inline-block align-middle"
      aria-label={ariaLabel || expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7 What Correct Answers Look Like in Detail Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Detail questions, the credited answer must reflect a specific point made in the passage. However, it rarely copies the original wording. Instead, it typically restates the idea accurately in new language.
        </p>

        <MustKnow>
          Correct Detail answers are faithful paraphrases of the passage, not quotations. They come in two flavors:
          <ul className="mt-2 list-inside list-disc">
            <li>Supported by a single sentence or clause</li>
            <li>Supported by combining two or more statements in the passage</li>
          </ul>
          Think of the logic as{" "}
          <MathInline expr="(\text{facts from the passage}) \Rightarrow (\text{answer})" ariaLabel="facts from the passage imply the answer" />
          . If that implication fails, the choice is not correct.
        </MustKnow>

        <section aria-labelledby="single-sentence-support">
          <h3 id="single-sentence-support" className="text-lg font-semibold text-white">
            Correct answers based on one statement
          </h3>
          <p>
            Sometimes a single line in the passage is enough to confirm a choice. The right answer restates that line without adding or twisting meaning.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-800/30 p-4 text-gray-200">
            <p className="mb-0 italic">
              Passage (excerpt): “During its first year, the pilot program reduced average processing time
              by nearly a third, primarily by eliminating duplicate reviews.”
            </p>
          </div>

          <MCQExample
            number={37}
            prompt="According to the excerpt, which statement is supported?"
            options={[
              "The program reduced processing time exactly 33%.",
              "The program shortened processing time largely because it removed repeated reviews.",
              "The program saved time by adding reviewers with specialized training.",
              "The program will reduce processing time by a third every year.",
              "The program had no effect on processing time in its first year.",
            ]}
            correct="The program shortened processing time largely because it removed repeated reviews."
            solution={
              <>
                <p>
                  The excerpt says “reduced … by nearly a third” (so not exactly 33%) and identifies the main reason:
                  removing duplicate reviews. That directly supports the choice about shortening time largely due to eliminating repeats.
                </p>
                <p>
                  The other choices either over‑specify the amount (exactly 33%), add new causes (specialized training), make an unwarranted projection (“every year”), or contradict the reduction (“no effect”).
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="multi-statement-support">
          <h3 id="multi-statement-support" className="text-lg font-semibold text-white">
            Correct answers based on multiple statements
          </h3>
          <p>
            In other cases, you need to connect two or more points from the passage. The credited answer will reflect the combined meaning, not merely one sentence in isolation.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-800/30 p-4 text-gray-200">
            <p className="mb-0 italic">
              Passage (excerpt): “Researchers found that the battery’s capacity held steady across 500
              cycles under moderate temperatures. However, at high temperatures, capacity declined
              measurably after 200 cycles.”
            </p>
          </div>

          <MCQExample
            number={38}
            prompt="Which statement accurately synthesizes the excerpt?"
            options={[
              "Battery capacity always declines after 200 cycles.",
              "Battery capacity remains constant at all temperatures.",
              "Temperature conditions affect whether capacity remains stable over many cycles.",
              "High temperature improves capacity after 500 cycles.",
              "Capacity increases under moderate temperatures but decreases under high temperatures.",
            ]}
            correct="Temperature conditions affect whether capacity remains stable over many cycles."
            solution={
              <>
                <p>
                  Combine the two sentences: stability across 500 cycles at moderate temperatures, but measurable decline after 200 at high temperatures. Together they show that temperature drives different capacity outcomes over time.
                </p>
                <p>
                  The wrong options overgeneralize (“always declines” or “remains constant at all temperatures”), contradict the passage (“improves”), or claim increases that were never stated.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Quick checklist for Detail correct answers:
          <ul className="mt-2 list-inside list-disc">
            <li>Must be provably true from the passage</li>
            <li>May paraphrase; need not quote</li>
            <li>Cannot add new claims or broaden scope</li>
            <li>When multiple lines are relevant, the answer must match their combined meaning</li>
          </ul>
        </MustKnow>

        <p className="text-gray-300">
          Bottom line: match meaning, not wording. If a choice faithfully captures the passage’s idea—whether from one line or from several working together—it’s a contender. If it adds, distorts, or projects beyond what’s written, it’s out.
        </p>
      </article>
    </main>
  );
}