import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "9.7 Evaluate the Argument: Trap Choice Type 1 (Pertinent but Irrelevant) | Verbal Reasoning",
  description:
    "Learn to avoid Evaluate-the-Argument traps that are on-topic but don’t bear on the conclusion’s strength. Includes two mini walk-throughs and one multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.7 Trap Choice Type 1: On‑Topic but Irrelevant to the Argument’s Strength
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On Evaluate-the-Argument questions, a common trap is an answer that talks about
          the same general subject yet doesn’t help you judge whether the specific conclusion
          is better or worse supported. Stay focused on what would actually change your view
          of the conclusion.
        </p>

        <MustKnow>
          Being related to the topic is not enough. The right evaluation asks for information
          that would strengthen or weaken the argument’s conclusion. If the answer wouldn’t
          shift your confidence in that conclusion, it’s not doing evaluation work—even if it
          sounds relevant.
        </MustKnow>

        <section aria-labelledby="mini-ex-1" className="rounded-lg border border-gray-700 bg-gray-900/40 p-5">
          <h3 id="mini-ex-1" className="mb-2 text-lg font-semibold text-white">
            Mini example: treatment vs. cause
          </h3>
          <p className="mb-3">
            Suppose an argument claims that many people with occasional breathing trouble are
            misprescribed airway-opening medication because their symptoms are often caused by
            excess weight rather than airway constriction.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Incorrect but tempting: “Could overweight individuals eliminate the breathing issue
              by losing weight?” This is about solving the problem. It doesn’t tell us whether the
              prescribed medication alleviates symptoms in those cases, so it doesn’t evaluate the
              claim that the meds often don’t help.
            </li>
            <li>
              Helpful: “Do airway-opening medications tend to cause weight loss?” If yes, the meds
              might indirectly address a weight-based cause, undercutting the conclusion. If no,
              the conclusion gains support. This directly bears on the argument’s strength.
            </li>
          </ul>
        </section>

        <section aria-labelledby="mini-ex-2" className="rounded-lg border border-gray-700 bg-gray-900/40 p-5">
          <h3 id="mini-ex-2" className="mb-2 text-lg font-semibold text-white">
            Mini example: environmental prediction
          </h3>
          <p className="mb-3">
            An argument predicts that air pollution in a city will drop substantially within five years
            because half of the daily vehicles will be electric by then.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Incorrect but tempting: “Is there an eco-friendly way to dispose of EV batteries?”
              That matters for environmental debates generally, but it doesn’t test this argument’s
              prediction about air pollution levels in the city.
            </li>
            <li>
              Helpful: “Is the total number of vehicles expected to exceed 600,000 in five years?”
              If the vehicle count surges, electric adoption might not reduce overall pollution as
              predicted. That question can strengthen or weaken the forecast directly.
            </li>
          </ul>
        </section>

        <MustKnow>
          To evaluate well, lock onto the conclusion first. Then ask: would a “Yes” vs. “No” answer
          to this choice make the conclusion more or less credible? If not, it’s likely an
          on-topic distraction.
        </MustKnow>

        <MCQExample
          number={12}
          prompt="U.S. researchers report that a larger share of people are diagnosed with kidney stones in southern states than in northern states. They hypothesize that the higher southern rate is due to greater dehydration from warmer temperatures. Which of the following would be most useful to determine in order to assess this hypothesis?"
          options={[
            "The size of the south–north gap in diagnosis rates",
            "Whether southerners could completely avoid kidney stones by consistently drinking large amounts of water",
            "How the southern diagnosis rate compares to the worldwide rate",
            "Whether some diagnosed cases are actually misdiagnoses",
            "Whether southern diagnoses decline in years with unusually low temperatures",
          ]}
          correct="Whether southern diagnoses decline in years with unusually low temperatures"
          solution={
            <>
              <p>
                The hypothesis ties higher temperatures (and resulting dehydration) to higher diagnosis
                rates. A good evaluation choice should help confirm or question that causal link.
              </p>

              <p>
                Choices A, B, C, and D are on topic but don’t test the temperature–diagnosis connection:
              </p>
              <ul className="mb-3 list-disc pl-5">
                <li>
                  A: The size of the gap doesn’t show whether temperature is the reason for the gap.
                </li>
                <li>
                  B: A potential remedy (drinking more water) doesn’t prove the proposed cause
                  of the existing difference.
                </li>
                <li>
                  C: A global comparison doesn’t bear on why the South differs from the North.
                </li>
                <li>
                  D: Misdiagnosis could occur in both regions; it doesn’t directly test the cause of the regional difference.
                </li>
              </ul>

              <p>
                Choice E is diagnostic: if in unusually cool years the southern rate drops, that pattern
                supports the temperature/dehydration explanation. If it doesn’t drop, the hypothesis is
                weakened. Therefore, E best helps evaluate the argument.
              </p>

              <div className="mt-3 rounded-md bg-emerald-900/30 p-3 text-emerald-200">
                Correct answer: E
              </div>
            </>
          }
        />

        <p>
          Bottom line: Evaluate choices must change how strongly you believe the conclusion. If a choice
          is merely about the general subject, it’s likely a trap.
        </p>
      </article>
    </main>
  );
}