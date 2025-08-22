import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "1.14 Avoid Single‑Word Traps | Critical Reasoning",
  description:
    "Don’t accept or reject GMAT Critical Reasoning answers just because they include words like all, none, always, never, or some. Learn a reliable approach, see quantifier notation with KaTeX, and practice with a quick MCQ.",
};

function InlineMath({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.14 Don’t Choose or Eliminate an Answer Because of One Word
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Single words can dramatically change what an answer choice claims. Because of that,
          many test‑takers develop shortcuts such as discarding any option that uses “all,” “none,”
          “always,” or “never,” or distrusting any option that includes “some.”
          These shortcuts feel efficient—but they’re unreliable.
        </p>

        <p>
          It’s true that statements with absolute language are often wrong on the GMAT.
          But “often” isn’t “always.” If you reject an answer purely due to a single word,
          you’re gambling, not reasoning—your results will swing from great to poor without
          any real change in skill.
        </p>

        <MustKnow>
          Eliminate or select an answer only after you judge what it does,
          not which word it uses. Treat “all/none/always/never” and “some”
          as flags to investigate, not automatic deal‑breakers or green lights.
          The correct answer is the one that fulfills the task set by the question stem.
        </MustKnow>

        <section aria-labelledby="quantifiers-heading" className="space-y-3">
          <h3 id="quantifiers-heading" className="text-white font-semibold">
            Reading quantifiers precisely
          </h3>
          <p>
            Words such as “all” and “some” correspond to standard logical quantifiers:
            <InlineMath expr="\,\forall x\,P(x)\," ariaLabel="for all x, P of x" /> means “for every case,”
            while <InlineMath expr="\,\exists x\,P(x)\," ariaLabel="there exists an x such that P of x" /> means “there exists at least one case.”
            Don’t judge the answer by the symbol or word itself—judge whether that scope
            is actually warranted by the passage and the question.
          </p>
        </section>

        <section aria-labelledby="what-to-do-instead" className="space-y-3">
          <h3 id="what-to-do-instead" className="text-white font-semibold">
            What to do instead
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use the flagged word to slow down and check: does this choice
              accomplish what the stem requires (strengthen, weaken, inference, etc.)?
            </li>
            <li>
              Verify scope: universal claims (<InlineMath expr="\forall" ariaLabel="for all" />) must be backed by
              truly universal support; existence claims (<InlineMath expr="\exists" ariaLabel="there exists" />) need at least one clear instance.
            </li>
            <li>
              Compare to the other four options—sometimes an “extreme” choice is the only
              one that precisely meets the task.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="A city claims its new street‑lighting design reduces nighttime collisions. Which statement most strengthens the claim?"
          options={[
            "Some neighborhoods reported fewer collisions last month after installation.",
            "The design is widely used in other countries.",
            "All intersections that fully adopted the design had zero nighttime collisions in the first 30 days after activation, while comparable intersections without the design did not see such a drop.",
            "Police response times improved citywide this year.",
            "Drivers report that the new lights look modern.",
          ]}
          correct="All intersections that fully adopted the design had zero nighttime collisions in the first 30 days after activation, while comparable intersections without the design did not see such a drop."
          solution={
            <>
              <p>
                The stem asks for the statement that most strengthens the city’s claim that its design
                reduces collisions. The correct answer provides a clear, outcome‑based comparison:
                every treated intersection saw zero collisions in a defined window, and similar untreated
                sites did not show the same effect. Even though it uses an absolute term (“All”),
                the comparison plus concrete result directly supports the causal claim.
              </p>
              <p>
                “Some neighborhoods…” is weak and lacks controls or scope. The other choices don’t tie the
                design to collision outcomes.
              </p>
            </>
          }
        />

        <section aria-labelledby="closing" className="space-y-3">
          <h3 id="closing" className="text-white font-semibold">
            Big picture
          </h3>
          <p>
            GMAT Critical Reasoning measures quality of thought, not your ability to spot buzzwords.
            Single‑word heuristics are gimmicks. Let wording guide your attention, then decide using the
            job the answer must do and the evidence it provides.
          </p>
        </section>
      </article>
    </main>
  );
}