import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn't already include KaTeX CSS globally, import it in your root layout.
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.1 Introduction to Inference Questions | Critical Reasoning",
  description:
    "Understand what GMAT Critical Reasoning Inference questions demand: conclusions that must follow from the facts. Learn the must‑be‑true standard, common traps, and practice with a multiple‑choice example and explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.1 Introduction to Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a Critical Reasoning Inference question, you’re shown a collection of
          facts and asked which choice states a conclusion that necessarily follows
          from those facts. Your job isn’t to judge what seems reasonable or likely
          in the real world—it’s to identify what must be true given only what you’re told.
        </p>

        <MustKnow>
          An inference must be guaranteed by the stimulus. Using probability
          language: a valid inference satisfies{" "}
          <InlineMath math={"P(\\text{claim} \\mid \\text{facts}) = 1"} />. If a
          choice could be true but isn’t forced by the facts (i.e.,{" "}
          <InlineMath math={"0 < P(\\text{claim} \\mid \\text{facts}) < 1"} />),
          it’s not an inference.
        </MustKnow>

        <p>
          To infer is to reach an unstated conclusion from stated information.
          If a candidate answer can be true in some scenarios but fails in
          other scenarios consistent with the stimulus, it’s out.
        </p>

        <MustKnow>
          “Must be true” beats “might be true.” If the facts allow even one
          counterexample in which the option fails, eliminate it.
        </MustKnow>

        <p className="mt-6 font-semibold text-gray-200">
          Inference stimuli typically aren’t arguments
        </p>
        <p>
          We often call every CR stimulus an “argument,” but inference prompts
          usually don’t present a premise‑to‑conclusion argument. Instead, they
          provide raw facts. Your task is to extract the unavoidable takeaway.
        </p>

        <MustKnow>
          Expect fact patterns rather than author conclusions. Your correct answer
          is the conclusion you can deduce purely from those facts.
        </MustKnow>

        <section aria-labelledby="example-1">
          <MCQExample
            number={1}
            prompt={
              <>
                Research indicates two things: (1) talking while driving requires
                handling two mental tasks at once, and drivers on cell phones are
                less focused on responding to driving demands than drivers who are
                not conversing; (2) when a driver chats with a passenger, both
                parties tend to pause the conversation right when the driver needs
                to concentrate most.
                <br />
                <br />
                If all of the statements above are accurate, which option must be
                true?
              </>
            }
            options={[
              "Drivers carrying passengers place fewer cell‑phone calls than solo drivers.",
              "Compared with drivers on cell phones, drivers speaking with passengers tend to maintain better focus on driving tasks.",
              "For highly practiced multitaskers, phone conversations do not reduce concentration while driving.",
              "If a driver on a phone call stops talking to deal with a hazard, the person on the other end may end the call.",
              "Talking on a cell phone while driving is exactly as dangerous as driving under the influence.",
            ]}
            correct="Compared with drivers on cell phones, drivers speaking with passengers tend to maintain better focus on driving tasks."
            solution={
              <>
                <p className="mb-2">
                  Break down the given facts:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Cell‑phone conversations make drivers less attentive than
                    drivers who aren’t conversing.
                  </li>
                  <li>
                    Passenger conversations naturally pause at moments when the
                    driver most needs to focus.
                  </li>
                </ul>
                <p className="mt-3">
                  During demanding driving moments, a driver with a passenger is
                  typically not conversing and thus is behaving like a “not
                  conversing” driver—i.e., more focused. In contrast, a cell‑phone
                  conversation does not inherently pause at those moments, and
                  such drivers are expressly said to be less focused. Therefore,
                  the comparison in the correct choice holds: a driver talking
                  with a passenger is, on the whole, more focused than a driver
                  talking on a phone.
                </p>

                <p className="mt-3">
                  Why the others fail:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    “Passengers reduce phone use” is plausible but unsupported by
                    the facts given.
                  </li>
                  <li>
                    “Multitasking experts aren’t affected” introduces new
                    information about experience; not guaranteed.
                  </li>
                  <li>
                    “The other caller might hang up” is speculative and unrelated
                    to the provided facts.
                  </li>
                  <li>
                    “Just as dangerous as intoxicated driving” goes far beyond
                    what’s stated; no data on intoxication are provided.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          The overarching standard is necessity, not plausibility. Anchor every
          elimination to whether the option could fail under a fact‑consistent
          scenario. If it can, it’s not your answer.
        </p>

        <MustKnow>
          Quick test: Can you sketch a scenario that satisfies all given facts but
          makes the answer choice false? If yes, eliminate it. If no, it’s a
          contender.
        </MustKnow>

        <section aria-labelledby="common-stems">
          <h3
            id="common-stems"
            className="mt-8 text-lg font-semibold text-gray-200"
          >
            Common inference-style question stems
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              “Which of the following must be true based on the statements above?”
            </li>
            <li>
              “Which option is most strongly supported by the information given?”
            </li>
            <li>
              “The statements above most logically complete which of the following?”
            </li>
          </ul>
        </section>

        <p>
          Bottom line: Treat the stimulus like a rulebook. Select the choice that
          cannot fail if the rules are obeyed, and dismiss anything that adds
          assumptions or relies on what merely seems likely.
        </p>
      </article>
    </main>
  );
}