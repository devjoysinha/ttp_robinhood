import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.5 Correct Answer Types in Inference Questions | Verbal",
  description:
    "Learn what correct answers look like in Inference questions. See the common patterns, avoid typical traps, and practice with a quick multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5 Correct Answer Types in Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Recognizing the “shape” of correct answers is a powerful shortcut on
          Inference questions. The right answer is something that the passage
          guarantees—no extra leaps, no outside knowledge, and no added strength.
          We’ll start by looking at answers that synthesize the entire passage,
          then practice spotting wording that must be true.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              A valid inference is a statement that has to be true given the
              information in the passage. In logic notation:
              <span className="px-1">
                {" "}
                {"$p_1 \\land p_2 \\land \\dots \\land p_n \\Rightarrow C$"}
              </span>
              means the conclusion C is entailed by all premises. Anything that
              goes beyond the premises, strengthens them, or speculates is not a
              guaranteed inference.
            </p>
            <ul className="list-disc pl-6">
              <li>
                Must be true, not could be true or is likely true.
              </li>
              <li>
                Matches the scope and strength of the original statements.
              </li>
              <li>
                Avoids adding causes, explanations, or new conditions.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="whole-passage">
          <h3 id="whole-passage" className="text-xl font-semibold text-white">
            Conclusions that combine the whole passage
          </h3>
          <p>
            Many correct answers rephrase the overall message of the passage with
            careful, conservative wording. They condense multiple ideas without
            extending scope. If the passage supports a relationship like
            <span className="px-1">{"$A \\Rightarrow B$"}</span> and
            <span className="px-1">{"$B \\Rightarrow C$"}</span>, then the safe
            synthesis is
            <span className="px-1">{"$A \\Rightarrow C$"}</span>—nothing more.
          </p>
        </section>

        <MCQExample
          number={101}
          prompt={
            <>
              Passage:
              <br />
              In every trial, tomato plants treated with GrowMax were at least as
              tall as control plants, and in several trials they were taller.
              Taste tests showed no difference in flavor between groups.
              <br />
              <br />
              Which statement must be true based on the passage?
            </>
          }
          options={[
            "In some trials, treated plants and control plants were exactly the same height.",
            "GrowMax improves fruit taste.",
            "In no trial were treated plants shorter than control plants.",
            "Treated plants always grew taller than control plants.",
            "The researchers should recommend GrowMax for all uses.",
          ]}
          correct="In no trial were treated plants shorter than control plants."
          solution={
            <>
              <p>
                The passage states that treated plants were “at least as tall” as
                control plants in every trial. In math terms, for each trial
                <span className="px-1">{"$H_{t} \\ge H_{c}$"}</span>, so it is
                impossible for
                <span className="px-1">{"$H_{t} < H_{c}$"}</span> to occur. Thus,
                the statement “In no trial were treated plants shorter” must be
                true.
              </p>
              <p>
                Choice A is not guaranteed (it could be taller in every trial).
                Choices B, D, and E go beyond what’s stated.
              </p>
            </>
          }
        />

        <ExampleCard
          number={102}
          title="Spotting valid inference wording"
          statements={[
            "A) A careful restatement that pulls together all premises without adding new claims or strength.",
            "B) A bold claim that introduces a new cause to explain the passage’s facts.",
            "C) A forward-looking prediction that could be true if conditions continue.",
            "D) A sweeping generalization that is stronger than any sentence in the passage.",
            "E) A statement that sounds reasonable but would only be likely, not certain.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                The correct answer to an Inference question must be guaranteed by
                the text. Option A is the only description that matches that goal:
                it synthesizes what’s already there without overreaching.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  B adds a new explanation (not supported).
                </li>
                <li>
                  C predicts beyond the given evidence.
                </li>
                <li>
                  D increases the strength and scope.
                </li>
                <li>
                  E is merely plausible, not certain.
                </li>
              </ul>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Correct Inference answers are conservative: they are fully supported,
            appropriately scoped, and no stronger than the original text. When in
            doubt, prefer the option that restates the combined effect of the
            passage rather than one that speculates, explains, or amplifies.
          </p>
        </section>
      </article>
    </main>
  );
}