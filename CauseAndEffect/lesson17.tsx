import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.6 Resolve the Paradox: Cause-and-Effect | Critical Reasoning",
  description:
    "Learn how to handle cause–effect situations in Resolve the Paradox questions: focus on explaining the surprising result. Includes a quick wildlife example and a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.6 Cause‑and‑Effect Reasoning in Resolve the Paradox Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a stimulus describes a cause–effect situation in a Resolve the
          Paradox task, you are not shoring up a conclusion. Instead, your job
          is to supply an explanation that makes an unexpected outcome make
          sense. In other words, find a fact that accounts for the effect that
          seemed puzzling at first glance.
        </p>

        <MustKnow>
          In Resolve the Paradox questions featuring causality, the correct
          answer typically reveals a cause (or missing condition) that explains
          an observed effect. You are explaining the result, not evaluating
          support for a conclusion.
        </MustKnow>

        <ExampleCard
          number={23}
          title="Predator barrier with an unexpected result"
          statements={[
            "In a region of Australia, a long fence was built to keep dingoes out of ranching areas. Since dingoes hunt small marsupials, people expected these marsupials to flourish where the fence kept dingoes away.",
            "However, surveys show fewer small marsupials in the fenced zones than in nearby areas that still have dingoes.",
            "Which statement, if true, best accounts for this surprising outcome?",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                The result is counterintuitive: removing a predator correlates
                with fewer prey animals. To reconcile this, look for a new
                cause—often a substitute predator or ecological shift—that
                produces the lower counts.
              </p>
              <p>
                One explanation is predator replacement: when dingoes are
                absent, foxes (which heavily prey on small marsupials) move in
                and become more abundant. That additional predation pressure
                lowers marsupial numbers and resolves the paradox.
              </p>
            </>
          }
        />

        <p>
          Keep the frame of mind: you are searching for a fact that makes the
          story cohere. A helpful mental model is “cause → effect.” The right
          choice supplies a cause or condition that makes the reported effect
          unsurprising.
        </p>

        <MCQExample
          number={24}
          prompt={
            <>
              In snake charming, the performer plays a reed instrument and moves
              rhythmically. Cobras lack external ears, yet a cobra facing the
              charmer rises and sways in time, seemingly matching the beat.
              Which option most plausibly explains this?
            </>
          }
          options={[
            "Because the instrument is played continuously, the sound induces a trance.",
            "When a cobra is near a person, it assumes a defensive stance in which it rises and visually tracks the person’s movements.",
            "Expert snake charmers rely on a set of proven techniques to create the desired display.",
            "The cobra is the snake most frequently used by modern snake charmers.",
            "Cobras hiss for reasons other than communicating with other cobras.",
          ]}
          correct="When a cobra is near a person, it assumes a defensive stance in which it rises and visually tracks the person’s movements."
          solution={
            <>
              <p>
                We need a fact that reconciles two ideas: cobras don’t hear like
                we do, yet they appear to “dance” with the music. If the snake
                is not responding to sound, what is it responding to?
              </p>
              <p>
                Correct answer (B): Cobras in close proximity to a person adopt
                a defensive posture and watch the person’s motion. The charmer
                moves to the beat, and the cobra follows those movements,
                creating the illusion that it’s keeping time with the music.
                This directly explains the effect.
              </p>
              <p>
                Why the others fail:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  (A) “Trance‑inducing sound” doesn’t help if the animal isn’t
                  responding to the sound in the first place.
                </li>
                <li>
                  (C) “Proven methods” tells us techniques exist, but not the
                  mechanism that makes the cobra sway—so it doesn’t resolve the
                  paradox.
                </li>
                <li>
                  (D) Frequency of use of cobras is background trivia, not an
                  explanation.
                </li>
                <li>
                  (E) A point about hissing behavior doesn’t address why the
                  snake sways with the charmer.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Resolve the Paradox playbook: identify the surprising effect, then
          look for a cause or missing condition that, if true, would make that
          effect expected. Avoid answers that simply restate facts, add
          irrelevant background, or offer conclusions without an explanatory
          mechanism.
        </MustKnow>

        <p>
          Bottom line: in these items, the winning choice supplies the
          mechanism—often a new cause, a substitute cause, or a condition—that
          realigns the narrative so the observed effect is no longer surprising.
        </p>
      </article>
    </main>
  );
}