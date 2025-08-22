import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app provides a shared KaTeX setup, you can remove these lines.
// Otherwise, uncomment them to render the tiny math snippet in the solution.
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "11.4 Strategy for Complete the Passage | GMAT Critical Reasoning",
  description:
    "A concise 5‑step method to master Complete the Passage questions on GMAT Critical Reasoning, plus a worked multiple‑choice example with full rationale.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.4 A Practical Strategy for Complete the Passage Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Complete the Passage questions ask you to choose the statement that
          makes an argument click into place. The best approach is structured
          and repeatable, so you can move quickly without guessing.
        </p>

        <section aria-labelledby="five-step-playbook" className="space-y-4">
          <h3 id="five-step-playbook" className="text-xl font-semibold text-white">
            The 5‑step playbook
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Read the question stem first to confirm the task: you’re filling
              in the blank to complete the author’s reasoning.
            </li>
            <li>
              Carefully digest the passage. Identify conclusions, support, and
              any tension or surprise that must be resolved.
            </li>
            <li>
              Turn the sentence with the blank into a Why or What question.
              That reframe exposes traps that “sound right” but don’t actually
              answer the question the passage is asking.
            </li>
            <li>
              Eliminate choices that are off‑scope, neutral, or move the argument
              in the wrong direction (e.g., weaken when you need to resolve or
              strengthen).
            </li>
            <li>
              Plug the winner back into the passage and read it through. The
              result should flow naturally and resolve any loose ends.
            </li>
          </ol>

          <MustKnow>
            Deep understanding of the passage drives everything. If you grasp
            the author’s purpose and the role of the missing statement, the
            correct completion is usually the one that makes the logic snap
            into place.
          </MustKnow>
        </section>

        <section aria-labelledby="why-what" className="space-y-3">
          <h3 id="why-what" className="text-xl font-semibold text-white">
            Turn the blank into a Why/What question
          </h3>
          <p>
            Converting the final sentence into a direct question keeps you focused
            on the exact logical job the missing piece must perform.
          </p>
          <MustKnow>
            After reframing, many tempting answers reveal themselves as off‑task:
            they may be true, inferable, or relevant to the topic, but they don’t
            answer the Why/What you just asked.
          </MustKnow>
        </section>

        <section aria-labelledby="final-check" className="space-y-3">
          <h3 id="final-check" className="text-xl font-semibold text-white">
            Always perform the final check
          </h3>
          <p>
            Once you’ve chosen an option, insert it into the passage and read from
            start to finish. The completed argument should be coherent and targeted,
            not merely plausible in isolation.
          </p>
          <MustKnow>
            Plug‑back verification prevents last‑second traps. The finished passage
            must read as a single, logical argument.
          </MustKnow>
        </section>

        <section aria-labelledby="mcq-example" className="space-y-3">
          <h3 id="mcq-example" className="text-xl font-semibold text-white">
            Worked example
          </h3>

          <MCQExample
            number={4}
            prompt={
              <>
                Which option most logically completes the passage?
                <br />
                “Hydraulic fracturing, or ‘fracking,’ involves injecting a
                pressurized fluid into an oil well. Early on, analysts doubted
                that reopening depleted wells for fracking would be especially
                profitable. Yet as fracking became widely adopted, oil companies’
                profits soared because __________.”
              </>
            }
            options={[
              "company profits tend to rise and fall with broad economic conditions",
              "fracking output has greatly outstripped demand, pushing oil prices down",
              "the expense of reviving a depleted well via fracking fell over time to roughly half the cost of drilling a new conventional well",
              "environmental groups have faulted fracking for polluting groundwater",
              "securing permits to build additional oil pipelines has been challenging",
            ]}
            correct="the expense of reviving a depleted well via fracking fell over time to roughly half the cost of drilling a new conventional well"
            solution={
              <>
                <p>
                  Identify the task: we must supply the statement that makes the
                  final sentence true and the overall story make sense.
                </p>
                <p>
                  Reframe the blank as a question: Why did profits jump once
                  fracking became common?
                </p>

                <p>
                  Evaluate choices:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    A: Vague. Macroeconomic influence is unspecified and could
                    raise or reduce profits. Doesn’t explain the profit surge.
                  </li>
                  <li>
                    B: If prices collapse, profits generally fall, not soar.
                    This worsens the puzzle.
                  </li>
                  <li>
                    C: Explains the surge: as fracking spread, costs dropped
                    substantially relative to drilling new wells, so profits
                    climbed. In shorthand: costs down implies profits up
                    (cost ↓ ⇒ profit ↑).
                    {/* If KaTeX is available, you can replace the text‑only arrow with:
                      <span className="ml-1">
                        <InlineMath math={"\\text{cost}\\downarrow\\;\\Rightarrow\\;\\text{profit}\\uparrow"} />
                      </span>
                    */}
                    <span className="sr-only">
                      Costs decreasing leads to profits increasing.
                    </span>
                  </li>
                  <li>
                    D: About environmental criticism—doesn’t address profitability.
                  </li>
                  <li>
                    E: Pipeline approval difficulty is orthogonal to the stated
                    profit spike; if anything, it could raise costs.
                  </li>
                </ul>

                <p>
                  Only choice C directly accounts for the observed jump in profits
                  by tying widespread fracking to lower production costs. Therefore,
                  C is correct.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            The right completion does the precise job the passage needs. If you
            understand the author’s goal, turn the blank into a targeted question,
            eliminate off‑task answers, and verify with a quick plug‑back, you’ll
            consistently land on the best choice.
          </p>
        </section>
      </article>
    </main>
  );
}