import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.16 Detail Trap 7: Matches but Incorrect | Reading Comprehension",
  description:
    "Learn to spot the 'Matches but Incorrect' trap in RC Detail questions: choices that echo the passage but fail to answer the question. Includes a quick demo scenario and a fully worked RC example with answer analysis.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.16 Detail Trap 7: Matches but Incorrect
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For a Detail question, the right answer must do two things: it must be
          backed by a specific statement in the passage, and it must directly
          address what the question asks. A common trap offers only the first of
          these—something the passage actually says—while quietly missing the
          task of the question.
        </p>

        <MustKnow>
          A “Matches but Incorrect” choice echoes the passage but does not answer the question asked.
          Always check both: support from the passage and relevance to the exact question.
        </MustKnow>

        <section aria-labelledby="demo-scenario">
          <h3 id="demo-scenario" className="text-xl font-semibold text-white">
            Quick demo scenario
          </h3>
          <p>
            Imagine a short passage explains that global stock indexes plunged
            during a major recession, and then traces the recession&apos;s roots to
            risky loans issued years earlier that later defaulted in large
            numbers.
          </p>
          <p className="text-gray-400">
            Sample Detail question: “According to the passage, what triggered
            the recession?”
          </p>
          <ul className="list-disc pl-6">
            <li>
              Matches but Incorrect: “There was an exceptionally severe market
              crash.” This repeats a fact from the passage, but the crash
              happened during the recession; it wasn&apos;t the cause.
            </li>
            <li>
              Correct: “A wave of loan defaults.” This both appears in the
              passage and answers the cause question.
            </li>
          </ul>
        </section>

        <MustKnow>
          To avoid this trap, confirm that your choice does both of the following:
          1) accurately restates what the passage says, and 2) satisfies the
          exact task in the question stem. If it doesn’t do both, eliminate it.
        </MustKnow>

        <section aria-labelledby="mini-passage">
          <h3 id="mini-passage" className="text-xl font-semibold text-white">
            Mini‑passage for practice
          </h3>
          <p>
            Absolute monarchy—particularly prominent in Europe in the 1600s and
            1700s—places unrestricted power in the hands of a single ruler. Some
            monarchs justified their authority via the “divine right of kings”
            and consolidated control by leading both church and state. Political
            thinkers such as Thomas Hobbes argued that submission to one
            decision‑maker is essential for maintaining order and safety.
          </p>
          <p>
            Constitutionalism, by contrast, binds the government with a written
            framework of laws. This structure lowers the chance that leaders act
            in their own interests at the expense of the public. Under this
            system, no one is above the law: courts rely on statutes and
            precedent. John Locke famously maintained that where law ends,
            tyranny starts. Constitutionalism also checks executive dominance by
            requiring a balance of powers; although abuses may still occur, the
            head of state cannot legally govern without the consent of at least
            one other branch (e.g., the legislature or the judiciary).
          </p>
        </section>

        <MCQExample
          number={12}
          prompt="Based on the passage above, which of the following is a benefit of constitutionalism?"
          options={[
            "It promotes order and safety.",
            "It includes features that absolutism lacks.",
            "It was endorsed by the political philosopher John Locke.",
            "It reduces the likelihood that the public’s interests are pushed aside.",
            "It engages more than one branch of government.",
          ]}
          correct="It reduces the likelihood that the public’s interests are pushed aside."
          solution={
            <>
              <p>
                The question asks for a benefit of constitutionalism. In the
                second paragraph, the author states that constitutional limits
                “lower the chance that leaders act in their own interests at the
                expense of the public.” That is a clear advantage for citizens,
                so the correct choice is:
              </p>
              <p className="font-semibold">
                D. It reduces the likelihood that the public’s interests are pushed aside.
              </p>
              <p className="mt-4">
                Why the others are wrong:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  A. Order and safety are discussed in connection with absolutism
                  via Hobbes, not as a benefit attributed to constitutionalism.
                </li>
                <li>
                  B. Saying constitutionalism has features that absolutism lacks
                  matches the passage, but it doesn’t name a benefit. This is a
                  classic Matches‑but‑Incorrect trap.
                </li>
                <li>
                  C. The passage notes Locke’s support, which matches, but that
                  endorsement is not itself a benefit. Another Matches‑but‑Incorrect trap.
                </li>
                <li>
                  E. Having multiple branches is described, but the choice does
                  not express a benefit. Again, it matches content but misses the task.
                </li>
              </ul>
            </>
          }
        />

        <ExampleCard
          number={13}
          title="Drill: Spot the trap quickly"
          statements={[
            "Task: You read a Detail question asking what effect a policy has.",
            "You see a choice that correctly quotes the passage but only describes the policy, not its effect.",
            "Is this choice acceptable?",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                No. Even if the wording mirrors the passage, it fails to answer
                the effect question. Recognize it as “Matches but Incorrect” and
                eliminate it. You need a choice that both matches and directly
                addresses the effect.
              </p>
              <ul className="list-none pl-0">
                <li>
                  A) Acceptable — Incorrect. It doesn’t answer the task.
                </li>
                <li>
                  B) Eliminate — Correct. It’s a Matches‑but‑Incorrect trap.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: a tempting paraphrase is not enough. In Detail questions,
          require a perfect fit with the passage and with the prompt’s exact
          demand. Up next: Wrong Comparison traps.
        </p>
      </article>
    </main>
  );
}