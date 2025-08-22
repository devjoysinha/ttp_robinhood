import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.1.1 Method of Reasoning: Every Part Must Be Correct",
  description:
    "Learn how to evaluate Method of Reasoning answer choices precisely: the correct choice must describe the argument’s structure in full. Includes two multiple‑choice drills with thorough reasoning.",
};

function MathInline({
  expr,
  ariaLabel,
  className = "",
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={`align-baseline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.1.1 The Correct Answer Has to Be Completely Correct
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For Method of Reasoning questions, answer choices describe how the
          argument is built. The right choice must mirror the argument’s
          structure exactly—no omissions, no embellishments. If a single piece
          of an answer misstates what the stimulus does, that entire answer is
          out.
        </p>

        <MustKnow>
          Method of Reasoning answers are all‑or‑nothing. The correct option
          must accurately capture every essential step in the author’s line of
          reasoning. If any sub‑claim in an answer doesn’t match the stimulus,
          eliminate it.
        </MustKnow>

        <p>
          You also have the passage right in front of you. Use it. Read each
          answer word‑for‑word and verify every clause against the stimulus. A
          choice that “sounds right” at the start can go off the rails in its
          second half.
        </p>

        <MustKnow>
          Don’t stop at the opening phrase of an answer choice. Many traps begin
          correctly but end with a subtle overreach or mislabeling. Read all the
          way through and check each part against the passage.
        </MustKnow>

        <section aria-labelledby="ex1-heading" className="space-y-4">
          <h3 id="ex1-heading" className="text-xl font-semibold text-white">
            Example 1
          </h3>
          <p className="italic text-gray-300">
            A recent study reports that, on average, people who drink moderate
            amounts of alcohol are healthier and live longer than those who
            abstain. Still, we should be cautious about inferring that moderate
            drinking improves health, because many abstainers avoid alcohol due
            to existing health problems.
          </p>

          <MCQExample
            number={1}
            prompt="The passage develops its point by:"
            options={[
              "arguing that a conclusion should be rejected because it has no support at all.",
              "challenging a causal conclusion by proposing a different explanation for the observed association.",
              "undermining evidence for a commonly held view by reinterpreting the very same data.",
              "presenting a theory and then supplying evidence in favor of that theory.",
              "attacking a hypothesis by showing that the supporting data are biased.",
            ]}
            correct="challenging a causal conclusion by proposing a different explanation for the observed association."
            solution={
              <>
                <p>
                  The author presents a correlation and warns against a causal
                  leap by offering an alternative cause: some people abstain
                  because they’re already unhealthy. This weakens the link from
                  “correlation” to “causation.”
                </p>
                <p>
                  Why not the others?
                  <br />
                  - “No support at all” goes too far—the study provides
                  evidence, even if it can be explained differently.
                  <br />- “Reinterpreting the same data” suggests the author is
                  re‑reading the evidence for the belief. Instead, the author
                  provides an alternate cause for the correlation, which is a
                  causal‑link attack, not a reinterpretation.
                  <br />- The argument does not present a theory and then
                  support it; it cautions against a causal reading.
                  <br />- There’s no claim that the study is biased; the attack
                  targets the inference, not the data quality.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex2-heading" className="space-y-4">
          <h3 id="ex2-heading" className="text-xl font-semibold text-white">
            Example 2
          </h3>

          <p>
            Sentences are intended to deter crime. In theory, tougher sentences
            should deter more strongly than lighter sentences. Yet studies show
            that people aged 18 and older are not meaningfully less likely to
            offend than those under 18, even though penalties are typically
            harsher for the 18+ group. So, longer potential sentences don’t
            appear to materially reduce crime.
          </p>

          <div className="rounded-md bg-slate-800/40 p-4 text-sm text-gray-300">
            <p className="mb-2 font-medium text-gray-200">Logic sketch</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Theory:{" "}
                <MathInline
                  expr={"\\text{Longer sentences} \\Rightarrow \\text{less crime}"}
                  ariaLabel="Longer sentences imply less crime"
                />
              </li>
              <li>
                Comparison: group with harsher penalties (18+) vs. group without
                those harsher penalties (&lt;18)
              </li>
              <li>
                Observation: crime rates are about the same → the supposed
                factor shows no effect
              </li>
            </ul>
          </div>

          <MCQExample
            number={2}
            prompt="The author builds the argument by:"
            options={[
              "drawing on key differences in the behavior of two age groups to explain a pattern.",
              "showing that an alleged causal factor has no effect by comparing a case that includes it with a case that does not.",
              "downplaying the evidence for a popular view by offering a new take on the very same information.",
              "stating a theory and then providing evidence that supports that theory.",
              "questioning a hypothesis by arguing that the underlying data are distorted.",
            ]}
            correct="showing that an alleged causal factor has no effect by comparing a case that includes it with a case that does not."
            solution={
              <>
                <p>
                  The method is a with/without comparison: those 18+ face
                  longer sentences; those under 18 do not. If harsher sanctions
                  were effective, the 18+ group should offend less. The data
                  show no meaningful difference, weakening the deterrence claim.
                </p>
                <p>
                  Why the others fail:
                  <br />
                  - The comparison hinges on similarity (rates are similar), not
                  “key differences.”
                  <br />
                  - The author isn’t reinterpreting evidence for the theory but
                  rather showing that the expected effect is absent.
                  <br />- The evidence contradicts the theory, not supports it.
                  <br />- There’s no assertion that the data are skewed; the
                  inference is what’s questioned.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: identify the passage’s exact moves—what it states,
          compares, assumes, or explains—and accept only the answer that gets
          every one of those moves right. Partial matches don’t earn full
          credit.
        </p>
      </article>
    </main>
  );
}