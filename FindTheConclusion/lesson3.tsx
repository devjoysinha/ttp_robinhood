import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "8.3 Five‑Step Strategy for Find‑the‑Conclusion | Critical Reasoning",
  description:
    "A concise, battle‑tested process for Find‑the‑Conclusion questions: identify the task, analyze the argument, eliminate traps, and choose the sentence that truly completes the reasoning. Includes a fully worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.3 A Five‑Step Strategy for Find‑the‑Conclusion Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Find‑the‑Conclusion questions reward disciplined reading and precise
          elimination. Below is a practical five‑step game plan you can apply
          consistently to lock in the sentence that best completes the author’s
          reasoning.
        </p>

        <section aria-labelledby="step-1">
          <h3 id="step-1" className="text-xl font-semibold text-white">
            Step 1 — Read for full comprehension
          </h3>
          <p>
            Your first job is to truly understand the passage. Capture the main
            claim the author is pushing toward, how the evidence is organized,
            and any subtle shifts in scope or tone. If meaning is fuzzy, the
            rest of the process will wobble.
          </p>
        </section>

        <section aria-labelledby="step-2">
          <h3 id="step-2" className="text-xl font-semibold text-white">
            Step 2 — Confirm the task
          </h3>
          <p>
            Verify that the stem is actually asking you to supply the
            conclusion. Common stems include:
          </p>
          <p className="italic text-gray-200">
            “Which of the following most logically completes the argument?”
          </p>
        </section>

        <section aria-labelledby="step-3">
          <h3 id="step-3" className="text-xl font-semibold text-white">
            Step 3 — Parse the argument’s structure
          </h3>
          <p>
            Separate premises from background, note any intermediate
            conclusions, and watch for hidden assumptions. You’re trying to see
            how the pieces line up so that the final sentence can follow
            naturally from what came before.
          </p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <p className="mb-2 text-sm text-gray-300">
              In logic form, a valid completion looks like:
            </p>
            <BlockMath math={"P_1 \\;\\land\\; P_2\\; (\\land\\; \\text{purpose/background})\\;\\Rightarrow\\; C"} />
            <p className="mt-2 text-sm text-gray-400">
              Read this as: premises together imply the conclusion. If the
              proposed sentence doesn’t read like a “therefore” from the stated
              facts, it’s not the right finish.
            </p>
          </div>
        </section>

        <section aria-labelledby="step-4">
          <h3 id="step-4" className="text-xl font-semibold text-white">
            Step 4 — Eliminate aggressively (for good reasons)
          </h3>
          <p className="mb-3">
            Clear out options that are too broad, too narrow, introduce new
            information, make unjustified leaps, or clash with the passage.
          </p>

          <MustKnow>
            There’s exactly one correct completion. Use that fact: prune anything
            that doesn’t directly and uniquely fit after “therefore.”
          </MustKnow>

          <p>
            Track your eliminations explicitly to avoid circling back onto a
            discarded choice. If later evidence shows an elimination was
            premature, be willing to reverse it—flexibility beats stubbornness.
          </p>

          <MustKnow>
            Write A–E in your scratch work and cross out obvious losers. Stay
            open to revisiting an X if your later comparison reveals a mistake.
          </MustKnow>
        </section>

        <section aria-labelledby="step-5">
          <h3 id="step-5" className="text-xl font-semibold text-white">
            Step 5 — Settle the finalists with the “therefore” test
          </h3>
          <p>
            When two choices remain, don’t guess. Read the passage, then say
            “Therefore, …” and test each candidate. Select the one that most
            directly and conservatively expresses what the premises already
            support—no more, no less.
          </p>

          <MustKnow>
            The winning sentence is the one that most cleanly follows from the
            stated evidence. If you need extra assumptions, it’s not a valid
            completion.
          </MustKnow>
        </section>

        <section aria-labelledby="example-lex" className="pt-2">
          <h3 id="example-lex" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <div className="rounded-md bg-gray-800/40 p-4">
            <p className="mb-2 text-gray-200">
              A reliable completion should snap into place after “Therefore,”:
            </p>
            <p className="italic">
              Premise(s) … purpose … <InlineMath math="\\therefore" /> [correct completion]
            </p>
          </div>

          <MCQExample
            number={4}
            prompt={
              <>
                Lexicographer: Several grammarians have argued that our
                dictionary should not have listed “ain’t” as an acceptable
                informal contraction because it violates standard grammar.
                Still, many English speakers now use “ain’t” stylistically, and
                our dictionary exists to mirror how people currently use the
                language. Which choice best completes the argument?
              </>
            }
            options={[
              'Despite those grammarians, “ain’t” is actually grammatically correct.',
              'Many other languages feature an informal contraction similar to “ain’t.”',
              'In time, grammarians usually accept most shifts in language use as correct.',
              'Those grammarians were wrong to claim the dictionary should not have added “ain’t.”',
              'Every dictionary should include “ain’t” as an acceptable contraction.',
            ]}
            correct="Those grammarians were wrong to claim the dictionary should not have added “ain’t.”"
            solution={
              <>
                <p>
                  Structure: Premise 1 reports an objection based on grammar
                  rules. Premise 2 notes widespread stylistic use. Premise 3
                  states the dictionary’s purpose is to reflect actual usage. Put
                  together, these support including “ain’t.”
                </p>

                <p className="font-semibold text-white">Apply the “therefore” test</p>
                <p>
                  The completion should say, in effect: because many speakers use
                  “ain’t” and the dictionary reflects current usage, adding
                  “ain’t” was appropriate—so the grammarians’ objection misses the
                  mark.
                </p>

                <p className="mt-4">
                  A) Shifts the topic to grammatical correctness. The
                  lexicographer’s case is about usage and purpose, not changing
                  the rules of grammar. Too narrow/misdirected.
                </p>
                <p>
                  B) Brings in other languages—new information not used by the
                  argument. Out of scope.
                </p>
                <p>
                  C) This might strengthen the move but doesn’t complete the
                  author’s reasoning from the given premises. It’s a general claim
                  about grammarians, not the needed conclusion.
                </p>
                <p className="text-green-300">
                  D) Matches the logic: if the dictionary should track usage and
                  “ain’t” is used, then including it was appropriate; the
                  grammarians’ “don’t add it” claim was mistaken. This is the
                  best completion.
                </p>
                <p>
                  E) Overgeneralizes to all dictionaries, but the premise about
                  “purpose” was specific to this dictionary. Too broad.
                </p>
                <p className="mt-3">
                  Answer: D.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Treat the correct choice as the sentence that would naturally come
            after “Therefore,” given the stated evidence and purpose. If the
            option requires extra assumptions, changes the scope, or adds new
            facts, it doesn’t belong.
          </p>
        </section>
      </article>
    </main>
  );
}