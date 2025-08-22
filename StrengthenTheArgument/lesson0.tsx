import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4. Strengthen the Argument — 4.1 Introduction | GMAT Critical Reasoning",
  description:
    "An introduction to Strengthen the Argument questions: what they ask, how to think about premises, assumptions, and conclusions, plus two targeted multiple‑choice drills with full explanations.",
};

export default function Page() {
  // Pre-render a tiny symbolic view of “evidence + assumption ⇒ conclusion” with KaTeX
  const implication = katex.renderToString("E \\land A \\Rightarrow C", {
    throwOnError: false,
    output: "html",
  });
  const notImplication = katex.renderToString("E \\not\\Rightarrow C", {
    throwOnError: false,
    output: "html",
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strengthen questions are a staple of GMAT Critical Reasoning. Your job
          is to read an argument and pick the choice that makes its conclusion
          more convincing. In other words, you’re looking for information that
          increases the support for the author’s claim.
        </p>

        <MustKnow>
          In a typical strengthen task, the existing evidence alone usually{" "}
          <span
            className="inline-block align-middle"
            dangerouslySetInnerHTML={{ __html: notImplication }}
            aria-label="Evidence by itself does not imply the conclusion"
          />{" "}
          is not enough to guarantee the conclusion. A strong answer often
          supplies a missing link or removes competing explanations so that{" "}
          <span
            className="inline-block align-middle"
            dangerouslySetInnerHTML={{ __html: implication }}
            aria-label="Evidence together with the new assumption supports the conclusion"
          />{" "}
          feels more plausible.
        </MustKnow>

        <p>
          The thinking you practiced in Assumption questions and the habits you
          built in Weaken questions carry over here: seek the conclusion, find
          the gap between the evidence and that conclusion, and test which new
          fact would tighten that gap the most. Helpful strengthen moves include
          bridging a logical leap, ruling out alternate causes, confirming that
          the evidence is trustworthy or representative, and showing the effect
          persists under relevant variations.
        </p>

        <MCQExample
          number={1}
          prompt="After a new sales training, monthly revenue at Zenco increased by 12%. Therefore, the training caused the revenue increase."
          options={[
            "During the same period, Zenco also launched a major holiday promotion.",
            "In the three months before the training, Zenco’s revenue had steadily declined.",
            "No other significant changes in pricing, product mix, or marketing occurred during the period studied.",
            "A key competitor reduced prices shortly after the training.",
            "Some employees reported that the training was tedious.",
          ]}
          correct="No other significant changes in pricing, product mix, or marketing occurred during the period studied."
          solution={
            <>
              <p>
                The argument infers a cause (training) from a correlation
                (revenue rose). To strengthen, we want to eliminate alternate
                explanations for the increase.
              </p>
              <p>
                The correct choice removes other plausible causes by indicating
                there were no meaningful changes besides the training. This
                directly links the observed increase more tightly to the
                training. The holiday promotion and competitor price cuts
                introduce competing causes and would not strengthen; prior
                decline doesn’t explain the post‑training rise; employee
                opinions about the training are irrelevant to revenue impact.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="A city installed LED streetlights last winter and reports fewer nighttime accidents this spring. Officials conclude that the LEDs reduced nighttime accidents."
          options={[
            "Accident statistics were collected for only one week after installation.",
            "LED streetlights consume less energy than the old bulbs.",
            "Nighttime traffic volume this spring is similar to last spring’s volume.",
            "Police increased DUI checkpoints at the same time the LEDs were installed.",
            "New reflective road signs were put up throughout the city during the LED rollout.",
          ]}
          correct="Nighttime traffic volume this spring is similar to last spring’s volume."
          solution={
            <>
              <p>
                To support the conclusion that LEDs reduced accidents, we should
                rule out competing explanations. If far fewer cars were on the
                road at night, that could account for fewer accidents.
              </p>
              <p>
                The correct choice shows traffic volume is comparable to last
                year, removing a key alternate cause and strengthening the
                LED–accidents link. One‑week data are too short (weak), energy
                efficiency is off‑topic, and concurrent DUI checks or new signs
                create alternate reasons for the drop (they don’t strengthen).
              </p>
            </>
          }
        />

        <p>
          Key takeaway: strengthening is about making the author’s leap from
          evidence to conclusion safer. Close the logical gap, eliminate rival
          explanations, and confirm that the evidence genuinely bears on the
          claim. If an option doesn’t make the conclusion more likely, it
          doesn’t strengthen—no matter how interesting it sounds.
        </p>
      </article>
    </main>
  );
}