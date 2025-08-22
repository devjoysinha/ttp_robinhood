import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Optional: if your app includes KaTeX, ensure its CSS is loaded globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";
import katex from "katex";

function InlineMath({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  // Graceful server-side render of short math/logical notation with accessible text
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="align-[0.05em]"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.7 Limiting Words in Assumption Questions | Critical Reasoning",
  description:
    "Learn a reliable approach for assumption questions whose stems include limiting words like “except” or “not.” Includes two fully worked multiple‑choice examples with reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.7 Handling Assumption Stems with Limiting Words (“except,” “not”)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some assumption questions add a twist by including limiting words in the stem—most commonly
          “except” or “not.” These stems flip your usual task: instead of finding a statement the argument
          requires, you must find the one choice that is{" "}
          <span className="italic">not</span> required for the argument to stand.
        </p>

        <p>
          Typical stems you might see:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>The argument relies on each of the following assumptions, except…</li>
          <li>Which of the following is not an assumption on which the argument depends?</li>
        </ul>

        <MustKnow>
          For stems with “except” or “not,” four answer choices will be required assumptions that support
          the link from evidence to conclusion—those four are incorrect. The correct answer is the only choice
          the argument does not need.
        </MustKnow>

        <p>
          A fast, low‑stress way to keep the logic straight is to tag each option:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Mark “Yes” if the choice is a necessary assumption (it rules out an alternative cause, a loophole, or a contradiction).</li>
          <li>Mark “No” if the choice is not needed. In an “except/not” stem, “No” is your correct answer.</li>
        </ul>

        <section aria-labelledby="ex12" className="mt-8">
          <h3 id="ex12" className="sr-only">
            Example 12
          </h3>
          <MCQExample
            number={12}
            prompt={
              <>
                In Commerce, speed‑detection cameras were recently installed along local highways.
                These cameras do not detect speeding at night. Since installation, the number of speeding
                vehicles the cameras record each day has fallen sharply. Therefore, the cameras are discouraging drivers from speeding.
                <br />
                <br />
                Each of the following, if true, is an assumption the argument requires, except:
              </>
            }
            options={[
              "Highway traffic volume in Commerce has not dropped substantially since the cameras were installed.",
              "Drivers do not slow to the limit only near the cameras and then resume speeding immediately afterward.",
              "The cameras have not suffered major malfunctions since being installed.",
              "Most habitual speeders have not recently shifted the bulk of their driving from daytime to nighttime.",
              "The town’s population has not grown markedly since the cameras were introduced.",
            ]}
            correct="The town’s population has not grown markedly since the cameras were introduced."
            solution={
              <>
                <p className="mb-2">
                  Structure: The author claims a cause → effect: Installing cameras caused the observed drop in recorded speeders.
                </p>
                <p className="mb-2">
                  Cause‑and‑effect conclusions assume there is no alternate explanation for the observation. We test each choice by asking:
                  “If this choice were false, would that undermine the causal claim?”
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-6">
                  <li>
                    <strong>A (traffic volume steady):</strong> If overall traffic fell a lot, that could explain fewer recorded speeders.
                    The argument needs traffic to be roughly stable. Required → mark “Yes.”
                  </li>
                  <li>
                    <strong>B (no camera‑only slowdowns):</strong> If people only slow when near cameras, recorded speeders would drop without a real behavior change overall. Required → “Yes.”
                  </li>
                  <li>
                    <strong>C (no critical malfunctions):</strong> If the devices broke, the decrease is just under‑detection. Required → “Yes.”
                  </li>
                  <li>
                    <strong>D (no shift to night):</strong> Cameras don’t work at night. If most speeders moved to night driving, the drop is detection‑based, not deterrence. Required → “Yes.”
                  </li>
                  <li>
                    <strong>E (population growth not large):</strong> Even if the population rose, we’d expect more cars and potentially more speeders, which would make the observed decline
                    even more consistent with a deterrent effect. The argument doesn’t rely on this being false. Not required → “No.” This is the correct answer for an “except” stem.
                  </li>
                </ul>
                <p className="mt-2">
                  Bottom line: A, B, C, and D each block competing explanations. E is not needed for the conclusion to hold.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          The correct choice in an “except/not” stem is the statement that does not serve as a required bridge
          between the given evidence and the conclusion.
        </MustKnow>

        <section aria-labelledby="ex13" className="mt-8 space-y-4">
          <h3 id="ex13" className="sr-only">
            Example 13
          </h3>
          <p>
            Consider the one‑way claim:
            {" "}
            <InlineMath expr={`\\text{PCBs in fatty tissue} \\Rightarrow \\text{fish lived in PCB water}`} ariaLabel="PCBs in fatty tissue implies fish lived in PCB water" />.
            The premises given are: fish absorb PCBs from PCB‑contaminated water via their gills, and PCBs can accumulate in fish fatty tissue.
          </p>

          <MCQExample
            number={13}
            prompt={
              <>
                Each of the following is an assumption required by the conclusion above, except:
              </>
            }
            options={[
              "Fish cannot acquire PCBs by eating other fish that previously lived in PCB‑contaminated water.",
              "Fish do not create PCBs internally through natural biological processes.",
              "Plants eaten by fish do not take up PCBs from the substrate in which they grow.",
              "Fish that have PCBs in their fatty tissues are not merely a tiny fraction of all fish that have lived in PCB‑contaminated water.",
              "PCBs are not transmitted from parent fish to their offspring.",
            ]}
            correct="Fish that have PCBs in their fatty tissues are not merely a tiny fraction of all fish that have lived in PCB‑contaminated water."
            solution={
              <>
                <p className="mb-2">
                  The conclusion is one‑directional: finding PCBs in a fish’s fatty tissue is taken to imply it lived in PCB water.
                  For that to be valid, the argument must exclude other pathways by which PCBs could end up in fatty tissue.
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-6">
                  <li>
                    <strong>A (no trophic transfer by predation):</strong> If fish can get PCBs by eating contaminated prey, then PCBs in tissue would not necessarily imply inhabiting PCB water. Required → “Yes.”
                  </li>
                  <li>
                    <strong>B (no endogenous production):</strong> If fish could synthesize PCBs, the inference fails. Required → “Yes.”
                  </li>
                  <li>
                    <strong>C (no plant uptake route):</strong> If plants contain PCBs from soil/substrate and fish ingest them, that’s an alternate path. Required → “Yes.”
                  </li>
                  <li>
                    <strong>D (proportion of exposed fish with PCBs):</strong> The argument does not claim that all fish from PCB waters must show PCBs.
                    It only claims that if PCBs are present, then exposure to PCB water occurred. The share of exposed fish who end up with PCBs is irrelevant to that one‑way claim. Not required → “No.” Correct for an “except” stem.
                  </li>
                  <li>
                    <strong>E (no maternal transfer):</strong> If offspring inherit PCBs from a parent, PCBs in tissue wouldn’t prove the fish itself inhabited PCB water. Required → “Yes.”
                  </li>
                </ul>
                <p className="mt-2">
                  In short, A, B, C, and E close off alternate contamination routes. D does not affect the one‑way implication being claimed.
                </p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Takeaway: For “except/not” stems, your job is to find the odd one out—the statement that the argument doesn’t actually
          need. The remaining four should each keep the argument’s middle link intact by ruling out plausible alternative explanations.
        </p>
      </article>
    </main>
  );
}