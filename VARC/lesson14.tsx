import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "3.15 Detail Trap 6: Nearby | Reading Comprehension",
  description:
    "Learn to avoid the 'Nearby' trap in GMAT RC Detail questions: choices that quote lines near a keyword but don’t answer the question. Includes a worked multiple‑choice example.",
};

function MathInline({
  expr,
  ariaLabel,
  className,
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    // eslint-disable-next-line react/no-danger
    <span
      className={className}
      aria-label={ariaLabel}
      role="img"
      aria-roledescription="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.15 Detail Trap 6: Nearby
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A reliable way to solve Detail questions is to go back to the passage
          and find the exact line that answers the prompt. Many test‑takers
          naturally scan for keywords from the question. Test makers know this,
          so they craft wrong answers that echo wording sitting close to those
          keywords in the passage even though the choice doesn’t answer the
          question. That pattern is the Nearby trap.
        </p>

        <MustKnow>
          A Nearby trap is a choice built from text that appears near the
          keyword you searched for, but it fails to address the question’s task.
          If a choice merely “sounds familiar” because it sits next to the right
          spot in the passage, it’s still wrong unless it directly answers the
          question.
        </MustKnow>

        <p>
          Think of it this way:{" "}
          <MathInline
            expr={"\\text{keyword matching} \\ne \\text{answering the question}"}
            ariaLabel="keyword matching is not the same as answering the question"
            className="text-gray-100"
          />
          . To beat this trap, confirm that your chosen option states the point
          the question asks for, not just a phrase you saw near the target line.
        </p>

        <section aria-labelledby="mini-illustration" className="rounded-lg bg-slate-800/40 p-4">
          <h3 id="mini-illustration" className="mb-2 text-base font-semibold text-white">
            Quick illustration
          </h3>
          <p className="mb-3 text-gray-300">
            Suppose a passage says: “Rather than relying only on conquest,
            Roman leaders often used diplomacy to incorporate defeated peoples.
            As a result, the empire enjoyed greater stability than its rivals.”
          </p>
          <p className="mb-2 text-gray-300">
            Question: “According to the passage, why was Rome more stable?”
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Nearby trap: “They defeated tribes in war.” (a phrase close to
              the target sentence, but not the stated reason)
            </li>
            <li>
              Correct: “They used diplomatic methods to achieve their aims.”
              (answers the “why” exactly)
            </li>
          </ul>
        </section>

        <MustKnow>
          How to avoid Nearby traps:
          <br />
          1) Locate the lines tied to the question.
          <br />
          2) Restate in your own words what those lines assert for the specific
          task (cause, purpose, effect, definition, etc.).
          <br />
          3) Choose the option that explicitly matches that task—ignore options
          that borrow words from adjacent sentences.
        </MustKnow>

        <section aria-labelledby="three-sisters" className="rounded-lg bg-slate-800/40 p-4">
          <h3 id="three-sisters" className="mb-2 text-base font-semibold text-white">
            Short passage for practice
          </h3>
          <p className="text-gray-300">
            Some Indigenous communities in North America practiced intercropping
            by planting corn, beans, and squash together—a method often called
            the “Three Sisters.” In this system, the tall corn stalks act as a
            natural trellis for the beans. The beans add nitrogen to the soil
            and also help steady the corn against strong winds. Meanwhile, the
            broad squash leaves shade the ground, reducing evaporation and
            limiting weed growth. The result is a mutually supportive planting
            arrangement that improves overall crop health.
          </p>
        </section>

        <MCQExample
          number={11}
          prompt="Based on the passage above, which of the following describes an effect of the corn?"
          options={[
            "It adds nutrients to the soil.",
            "It supports the beans’ growth.",
            "It reduces water loss from the soil.",
            "It protects crops from high winds.",
            "It suppresses weed growth.",
          ]}
          correct="It supports the beans’ growth."
          solution={
            <>
              <p>
                The question asks for an effect of the corn. From the passage,
                the corn provides vertical structure for the beans to climb. So,
                “It supports the beans’ growth” is correct.
              </p>
              <p>
                The other options are classic Nearby traps: the beans (not the
                corn) enrich the soil with nitrogen and help stabilize the corn
                during wind; the squash (not the corn) shades the ground to
                reduce evaporation and inhibit weeds. Those statements appear
                close to the corn sentence, but they don’t answer the corn
                question.
              </p>
            </>
          }
        />

        <MustKnow>
          Final check: before you commit, point to the exact line that answers
          the question and read it with the question stem in mind. If your
          choice doesn’t satisfy the stem’s task, it’s likely a Nearby trap.
        </MustKnow>
      </article>
    </main>
  );
}