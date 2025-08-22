import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.5 Zero In on Relevant Information | Multi‑Source Reasoning",
  description:
    "MSR passages mix signal and noise. Learn a fast two‑step filter to pull only what matters, plus two quick practice items (inference and a small numeric drill) with full reasoning and KaTeX-rendered math.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5 Zero In on Relevant Information
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Multi‑Source Reasoning (MSR) passages intentionally blend crucial facts
          with material you’ll never use. The job is not to read everything, but
          to quickly isolate the few details tied to the question you’re
          answering right now.
        </p>

        <MustKnow>Not every sentence, number, or table entry in an MSR prompt is relevant.</MustKnow>

        <p>
          Often, only a handful of lines or a small slice of a chart matter.
          Train yourself to hunt for those details and ignore the rest.
        </p>

        <MustKnow>
          Effective MSR solving is largely a filtering exercise: find the signal, skip the noise.
        </MustKnow>

        <p>Use this two‑step process when a question appears:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Decide exactly what information the question demands.</li>
          <li>Jump to the tab/paragraph/row that contains only that information.</li>
        </ul>

        <MustKnow>
          While answering, you must do two things: (1) identify the information
          requirements of the question, and (2) target only the supporting lines
          that satisfy those requirements.
        </MustKnow>

        <p>
          Remember: MSR content is engineered to feel dense. Don’t chase every
          detail—lock onto the few that move the answer.
        </p>

        <MustKnow>
          MSR prompts are built to overwhelm. Focus on the detail that solves the current question and tune out the rest.
        </MustKnow>

        <section aria-labelledby="examples" className="space-y-6">
          <h3 id="examples" className="text-xl font-semibold text-white">
            Quick Practice
          </h3>

          <MCQExample
            number={8}
            prompt={
              <>
                <p className="mb-3">
                  Read the brief and judge the statement:
                </p>
                <p className="mb-2">
                  • Small‑molecule medicines are typically taken orally and can
                  act broadly, which sometimes leads to extra side effects.
                </p>
                <p className="mb-2">
                  • Biologics are highly targeted, so off‑target effects are
                  less common; they are usually given by injection.
                </p>
                <p className="mb-4">
                  • In 2022, the FDA approved 37 new drugs: 10 biologics and the
                  rest small‑molecule.
                </p>
                <p className="font-medium">
                  Statement: “Small‑molecule drugs are less likely than biologics
                  to be administered by injection.”
                </p>
              </>
            }
            options={["Inferable", "Not inferable"]}
            correct="Inferable"
            solution={
              <>
                <p>
                  The brief says small‑molecule drugs are “typically” taken by
                  mouth, while biologics are “typically” injected. That supports
                  the comparison that small‑molecule drugs are less likely to be
                  injections. So the statement is inferable.
                </p>
              </>
            }
          />

          <MCQExample
            number={9}
            prompt={
              <>
                <p className="mb-3">
                  A study collects egg weights (grams) from three groups. For
                  each group, focus only on the middle third of its 60 recorded
                  weights:
                </p>
                <ul className="list-disc pl-6">
                  <li>Group A (middle third): 62.0 to 63.0</li>
                  <li>Group B (middle third): 61.3 to 62.8</li>
                  <li>Group C (middle third): 63.4 to 64.2</li>
                </ul>
                <p className="mt-3">
                  If we pool those middle‑third eggs together (20 from each
                  group), what is the range, in grams, of the combined 60
                  weights?
                </p>
              </>
            }
            options={["2.5", "2.7", "2.9", "3.1", "3.3"]}
            correct="2.9"
            solution={
              <>
                <p>
                  The smallest weight among the three middle‑third intervals is{" "}
                  <strong>61.3</strong> (Group B) and the largest is{" "}
                  <strong>64.2</strong> (Group C). Using the range formula{" "}
                  <MathInline expr={"\\text{range} = \\text{max} - \\text{min}"} ariaLabel="range equals max minus min" />{" "}
                  we get{" "}
                  <MathInline expr={"64.2 - 61.3 = 2.9"} ariaLabel="64.2 minus 61.3 equals 2.9" />.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: MSR success comes from precision. Decide what the question
          needs, find just those details, and leave the rest unread.
        </p>
      </article>
    </main>
  );
}