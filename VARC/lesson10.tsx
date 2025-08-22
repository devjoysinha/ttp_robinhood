import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "3.11 Detail Trap: Stretch | Reading Comprehension",
  description:
    "Learn to spot and avoid Stretch trap choices in RC Detail questions. See how extreme wording goes beyond what the passage states. Includes a worked example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken, and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.11 Detail Trap 2: Stretch
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Stretch choices are common traps in Detail questions. A Stretch choice
          uses stronger or broader language than the passage, so it claims more
          than what&apos;s actually stated. These options often feel tempting
          because they point in the same general direction as the text, but
          they overshoot the evidence.
        </p>

        <MustKnow>
          In Detail questions, a Stretch choice goes beyond the text. Watch for
          absolute or exaggerated wording such as “all,” “none,” “always,”
          “never,” or “completely.” If the passage doesn’t commit to that level
          of strength, the choice is too strong.
          <div className="mt-2 text-sm text-gray-400">
            Examples with math-style notation:{" "}
            <InlineMath>{"\\text{none} \\ne \\text{few}"}</InlineMath>,{" "}
            <InlineMath>{"\\text{greatly reduced} \\ne \\text{eliminated}"}</InlineMath>.
          </div>
        </MustKnow>

        <section aria-labelledby="stretch-mini-examples" className="space-y-4">
          <h3 id="stretch-mini-examples" className="text-xl font-semibold text-white">
            How Stretch traps show up
          </h3>

          <div>
            <p className="mb-1">
              Suppose a passage says: “Only a small number of her peers took the
              proposal seriously.”
            </p>
            <p className="italic text-gray-400">
              Trap example: “None of her peers took the proposal seriously.”
            </p>
            <p className="mt-2">
              “None” is stronger than “a small number,” so the choice goes
              beyond the passage.
            </p>
          </div>

          <div>
            <p className="mb-1">
              Suppose a passage says: “After a nationwide policy replaced
              inconsistent state rules, the number of incidents dropped
              sharply.”
            </p>
            <p className="italic text-gray-400">
              Trap example: “The policy completely eliminated incidents.”
            </p>
            <p className="mt-2">
              “Dropped sharply” is not the same as “eliminated.” The trap adds
              certainty the passage never stated.
            </p>
          </div>
        </section>

        <MustKnow>
          Checklist to avoid Stretch traps:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Scan for extreme markers or universal claims.</li>
            <li>
              Re-read the relevant line(s) and match the exact strength of the
              passage.
            </li>
            <li>
              If the choice is stronger than the text, it&apos;s likely a
              Stretch and therefore incorrect.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="mongoose-passage" className="space-y-3">
          <h3 id="mongoose-passage" className="text-xl font-semibold text-white">
            Quick passage
          </h3>
          <p>
            Some researchers claim fairness is uniquely human. However, recent
            work with banded mongooses suggests that fairness-like behavior can
            arise in animal groups too. In several observed colonies, many
            mothers give birth on the same night, making pups nearly
            indistinguishable. Because parents can’t tell which pups are theirs,
            adults tend to distribute care evenly across the litter. That
            equitable care gives the entire litter a higher chance of survival
            than it would otherwise have. In addition, caretakers often give
            extra attention to pups that are initially smaller, which leads to
            noticeable decreases in weight gaps among pups in the weeks after
            birth.
          </p>
        </section>

        <MCQExample
          number={7}
          prompt="According to the passage, which outcome follows from equitable care given to all pups in a litter?"
          options={[
            "The litter is more likely to survive than the litters of every other species.",
            "All pups in the litter survive.",
            "Any weight differences among pups are completely eliminated.",
            "The litter becomes less likely to fail to survive.",
            "The heaviest pup never consumes more milk than any other pup on any day.",
          ]}
          correct="The litter becomes less likely to fail to survive."
          solution={
            <>
              <p>
                The passage states that equal care “gives the entire litter a
                higher chance of survival than it would otherwise have.” Saying
                the litter is “less likely to fail to survive” restates that
                idea without adding extra strength, so this matches the text.
              </p>

              <p>
                Why the others are Stretch traps or unsupported:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Comparing to “every other species” isn’t in the passage.
                </li>
                <li>
                  “All pups survive” is absolute; the text only says the chance
                  of survival improves.
                </li>
                <li>
                  “Completely eliminated” is stronger than “weight gaps decrease.”
                </li>
                <li>
                  “Never” is absolute; the passage doesn’t claim such a daily
                  restriction on milk consumption.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: in Detail questions, match the passage’s exact strength.
          If a choice adds absolutes or goes further than the text, it’s a
          Stretch—eliminate it.
        </p>
      </article>
    </main>
  );
}