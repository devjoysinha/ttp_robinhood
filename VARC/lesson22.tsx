import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app loads KaTeX CSS globally in app/layout.tsx or globals.css,
// InlineMath markup will render with full styles.
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "3.23 Inference Trap 2: Stretch | Verbal RC",
  description:
    "Learn to spot Stretch (overreach) answer choices in GMAT Reading Comprehension Inference questions. Includes a paraphrased worked example and quick tips to avoid extreme-language traps.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.23 Inference Trap 2: Stretch
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A Stretch answer looks close to what the passage supports, but it
          quietly pushes the claim beyond the text. These choices often sound
          persuasive because they echo the passage’s language, yet they add
          strength, scope, or certainty the author never guaranteed.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              What makes an option a “Stretch”?
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                It mirrors the idea in the passage but upgrades it (e.g., from
                “many” to “most,” from “some” to “all,” or from “can” to
                “always”).
              </li>
              <li>
                It relies on extreme markers (all, none, only, always, never,
                best, worst, must, cannot) that the passage does not justify.
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Quick logic check with math language:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                “Most” implies{" "}
                <InlineMath math={"\\text{proportion} \\, >\\, 50\\%"} /> — if
                the passage doesn’t establish this threshold, “most” is too
                strong.
              </li>
              <li>
                “No other” means{" "}
                <InlineMath math={"\\forall x \\ne \\text{target},\\; P(x) < P(\\text{target})"} />{" "}
                — a universal claim requiring evidence the text rarely provides.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-illustration" className="space-y-3">
          <h3 id="mini-illustration" className="text-xl font-semibold text-white">
            Mini‑illustration: When wording goes too far
          </h3>
          <p>
            Suppose a passage states that in 1914 Henry Ford doubled his
            assembly line wage to five dollars a day and that this pay was
            “much higher than what assembly line workers at other car companies
            received.”
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Stretch choice: “In 1914, nobody outside Ford’s assembly line was
              paid five dollars a day.” This leaps from “higher than other auto
              assembly wages” to “no one anywhere,” which the passage never
              addresses.
            </li>
            <li>
              Supported inference: “At most automobile companies, assembly line
              workers earned well under five dollars per day.” This restates the
              comparison the passage actually makes.
            </li>
          </ul>
        </section>

        <MustKnow>
          To avoid Stretch traps, slow down whenever you see strong language:
          all, none, always, never, only, must, cannot, best, worst, “no other,”
          “the most,” “every,” or “guarantees.” Ask: does the passage truly
          commit to that level of certainty or scope?
        </MustKnow>

        <section aria-labelledby="rc-example" className="space-y-4">
          <h3 id="rc-example" className="text-xl font-semibold text-white">
            Example: Inference with tempting overreach
          </h3>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 text-gray-200">Passage (paraphrased)</p>
            <p className="text-gray-300">
              Public debate about new technology is nothing new, and the
              internet is frequently at the center of it. In{" "}
              <i>The Shallows</i>, Nicholas Carr argues that online life can
              dull our thinking rather than sharpen it. He claims that constant
              digital stimuli — including the many smartphone alerts people get
              each day — erode patience, attention, and memory. Carr cites
              research showing that exposure to such notifications hurts
              concentration even when devices aren’t in active use. For
              instance, one study found participants’ focus declined even with
              phones turned off and put away, and most participants didn’t
              realize their performance had suffered. Other scholars counter
              that worries about “information overload” are as old as
              information itself and highlight the web’s unprecedented access to
              knowledge and collaboration tools. While some concede misuse is
              inevitable, they maintain the benefits far exceed the costs.
            </p>
          </div>

          <MCQExample
            number={18}
            prompt="The passage suggests Carr would most likely agree with which statement about smartphones?"
            options={[
              "They are the most disruptive internet‑connected device.",
              "They can reduce users’ ability to focus, and some users don’t realize this.",
              "They distract every user even when powered off and put away.",
              "No other device sends more daily notifications to its users.",
              "There is no possible way to avoid focus loss caused by smartphones.",
            ]}
            correct="They can reduce users’ ability to focus, and some users don’t realize this."
            solution={
              <>
                <p className="mb-2">
                  Focus on what Carr claims (the first paragraph’s middle
                  sentences). The study he cites shows reduced focus even with
                  phones off and set aside, and he’s alarmed that nearly all
                  participants were unaware of the effect.
                </p>

                <p className="mb-2">
                  Correct: Choice (B) accurately captures both parts — negative
                  impact on focus and lack of awareness among users.
                </p>

                <ul className="list-inside list-disc space-y-2">
                  <li>
                    (A) Stretch: “the most disruptive” is a superlative the
                    passage never establishes.
                  </li>
                  <li>
                    (C) Stretch: “every user” is universal. The study reports on
                    participants, not all users, and doesn’t claim a 100%
                    effect rate.
                  </li>
                  <li>
                    (D) Stretch: “no other device” is an absolute comparison not
                    supported by the text.
                  </li>
                  <li>
                    (E) Stretch: “no possible way” to prevent focus loss is far
                    beyond the evidence presented.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p className="text-gray-300">
          Bottom line: A valid inference never overshoots the passage. When an
          option goes stronger in scope, certainty, or comparison than the text,
          it’s almost always a Stretch and should be eliminated.
        </p>
      </article>
    </main>
  );
}