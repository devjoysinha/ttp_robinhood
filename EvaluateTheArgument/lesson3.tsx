import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.4 Evaluate the Argument Strategy | Critical Reasoning",
  description:
    "A clear 4‑step process for Evaluate the Argument questions: read and dissect the argument, verify the task, eliminate clearly wrong options with the Yes/No test, and pick the choice that most directly tests the conclusion. Includes a worked multiple‑choice example with full reasoning.",
};

// Lightweight server component for KaTeX rendering
function InlineMath({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "mathml",
    trust: false,
    strict: "ignore",
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.4 Strategy for Evaluate the Argument Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Evaluate the Argument questions ask which piece of information would
          best help you judge whether the author’s conclusion is well‑supported.
          Use the following process on every question.
        </p>

        <section aria-labelledby="step-1">
          <h3 id="step-1" className="text-xl font-semibold text-white">
            Step 1 — Read carefully and unpack the argument
          </h3>
          <p>
            First, understand what the author is trying to prove and how the
            author supports that claim. Identify:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Conclusion (what the author asserts is true or will be true)
            </li>
            <li>Evidence (the stated support)</li>
            <li>
              Hidden link(s) the argument relies on (unstated assumptions)
            </li>
          </ul>

          <MustKnow>
            To reason about an argument, pin down its structure. In symbols:
            <span className="ml-2 inline-block rounded bg-slate-800 px-2 py-0.5">
              <InlineMath expr={"E \\; + \\; A \\; \\Rightarrow \\; C"} />
            </span>
            , where E is the evidence, A is an assumption, and C is the
            conclusion.
          </MustKnow>

          <p>
            If you can’t say, in your own words, what the author concludes and
            why, pause and reread before moving on.
          </p>

          <MustKnow>
            The key to these questions is understanding the plan, proposal, or
            claim in the passage and how it’s supported. Clarity first; answer
            choice analysis second.
          </MustKnow>
        </section>

        <section aria-labelledby="step-2">
          <h3 id="step-2" className="text-xl font-semibold text-white">
            Step 2 — Read the stem and confirm the task
          </h3>
          <p>
            Verify that the stem asks what would help you evaluate the argument
            or judge the conclusion. Some test‑takers like to read the stem
            first; others prefer reading the passage first. Choose one approach
            and stick with it to reduce distractions.
          </p>
        </section>

        <section aria-labelledby="step-3">
          <h3 id="step-3" className="text-xl font-semibold text-white">
            Step 3 — Eliminate clearly wrong choices using the Yes/No test
          </h3>
          <p>
            For each option, ask: If this information turned out one way versus
            the other, would it push the conclusion in opposite directions? A
            strong evaluate choice typically affects the credibility of the
            conclusion either way:
            <span className="ml-2 inline-block rounded bg-slate-800 px-2 py-0.5">
              <InlineMath expr={"P(C\\mid X) \\;\\text{vs.}\\; P(C\\mid \\neg X)"} />
            </span>
            .
          </p>

          <MustKnow>
            The correct evaluate choice highlights information that could either
            strengthen or weaken the argument. If a choice wouldn’t change your
            confidence in the conclusion, it’s out.
          </MustKnow>

          <p>
            On your first pass, only discard options that are clearly irrelevant
            or off‑task. Keep choices you aren’t sure about. If you struggle to
            find a keeper, reconsider what you eliminated—you may have tossed
            the right answer too quickly.
          </p>

          <MustKnow>
            Don’t remove a choice just because you don’t see the link. It’s
            safer to prove that a choice cannot impact the conclusion than to
            drop it due to uncertainty.
          </MustKnow>
        </section>

        <section aria-labelledby="step-4">
          <h3 id="step-4" className="text-xl font-semibold text-white">
            Step 4 — Pick the choice that best tests the conclusion
          </h3>
          <p>
            After pruning, choose the option that most directly helps you judge
            whether the conclusion follows from the evidence. If two finalists
            remain, re‑apply the Yes/No lens and ask which one truly has the
            potential to move your confidence in the conclusion up or down.
          </p>

          <MustKnow>Practice and memorize this 4‑step playbook.</MustKnow>
        </section>

        <section aria-labelledby="example">
          <h3 id="example" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <MCQExample
            number={6}
            prompt="Polar bears typically hunt seals from sea ice. As warming reduces sea ice, some worry that polar bears will vanish. Yet polar bears have been seen eating other foods, such as seaweed, shellfish, and berries. Therefore, even if sea ice disappears completely, polar bears will persist. Which of the following would be most helpful to determine in order to evaluate the reasoning?"
            options={[
              "Whether polar bears can meet their energy needs by relying on non‑seal food sources",
              "Whether the seal population would grow if sea‑ice hunting became impossible for polar bears",
              "Whether other Arctic species have successfully changed diets after climate‑driven habitat shifts",
              "Whether human activity is likely to slow or halt further temperature increases",
              "Whether any species can hunt seals effectively without using sea ice",
            ]}
            correct="Whether polar bears can meet their energy needs by relying on non‑seal food sources"
            solution={
              <>
                <p>
                  Breakdown: The conclusion is that polar bears will survive
                  even if sea ice vanishes. The support is that bears sometimes
                  eat things besides seals. The missing link is that these other
                  foods would be nutritionally viable as a replacement.
                </p>
                <p>
                  Apply the Yes/No test to option (A): If non‑seal foods{" "}
                  <em>can</em> supply enough calories and nutrients, the
                  conclusion gets stronger; if they{" "}
                  <em>cannot</em> sustain bears, the conclusion weakens. This
                  directly tests the reasoning, so (A) is the most useful.
                </p>
                <p>
                  Why the others don’t evaluate the argument:
                  <br />
                  • (B) Seal population changes don’t matter if bears can’t use
                  sea ice to hunt them in the first place.
                  <br />
                  • (C) Other species’ dietary flexibility doesn’t tell us
                  whether polar bears can thrive on alternatives.
                  <br />
                  • (D) The conclusion is about survival even if sea ice is
                  gone; whether warming slows is off‑point.
                  <br />
                  • (E) That some species can hunt seals without ice is
                  irrelevant—the premise already states polar bears{" "}
                  <em>must</em> use sea ice to hunt seals.
                </p>
                <p>Answer: A.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="beyond-yes-no">
          <h3 id="beyond-yes-no" className="text-xl font-semibold text-white">
            Not every evaluate choice is a Yes/No question
          </h3>
          <p>
            Some answer choices present two alternative scenarios or a factual
            measurement rather than a direct yes/no. The test is the same: would
            the two possible outcomes move your confidence in the conclusion in
            opposite directions? If yes, it’s a strong evaluate choice.
          </p>
        </section>
      </article>
    </main>
  );
}