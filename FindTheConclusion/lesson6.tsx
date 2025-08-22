import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "8.4 Wrong Choices in Find‑the‑Conclusion Questions | Critical Reasoning",
  description:
    "Learn how trap answers in Find‑the‑Conclusion questions are constructed and how to avoid them. Covers four common wrong‑answer patterns, what to pay attention to, and includes a quick multiple‑choice drill with full reasoning.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      className="inline-block align-baseline"
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4 Wrong Choices in “Find the Conclusion” Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Across Critical Reasoning, a frequent mistake is “story‑building”—
          inventing extra facts to make an option seem to fit. Avoid that habit
          here too. In Find‑the‑Conclusion questions, tempting wrong choices are
          often statements that sound connected to the stimulus but are not the
          takeaway that actually follows from the premises.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="m-0">
              Your job is to identify the claim that is supported by the given
              statements, not to supply missing context or add assumptions. A
              good mental model is:
              <span className="mx-2">
                <MathInline
                  expr="\,\text{Premises}\ \Rightarrow\ \text{Conclusion}\,"
                  ariaLabel="Premises imply conclusion"
                />
              </span>
              Only accept a conclusion if the premises aim toward it without
              requiring extra information.
            </p>
            <ul className="list-inside list-disc pl-1">
              <li>Use only what the stimulus says and its logical implications.</li>
              <li>Match the strength of language in the premises.</li>
              <li>Stay within the topic and scope established by the author.</li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="wrong-patterns">
          <h3 id="wrong-patterns" className="text-xl font-semibold text-white">
            Four common wrong‑answer patterns
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="leading-relaxed">
              Requires outside information: The choice needs facts that the
              stimulus never provides.
            </li>
            <li className="leading-relaxed">
              Overreaches the evidence: It pushes the claim beyond what the
              statements justify (too strong, too broad, or too certain).
            </li>
            <li className="leading-relaxed">
              Related but unsupported: It talks about the same subject yet
              doesn’t actually follow from the premises.
            </li>
            <li className="leading-relaxed">
              Conflicts with the passage: It contradicts something the author
              has told us.
            </li>
          </ul>
        </section>

        <section aria-labelledby="what-to-notice">
          <h3 id="what-to-notice" className="text-xl font-semibold text-white">
            What to notice to avoid traps
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="leading-relaxed">Key qualifiers and limiting details.</li>
            <li className="leading-relaxed">
              The exact scope of the author’s statements—no more, no less.
            </li>
            <li className="leading-relaxed">
              The kind of claim being made (e.g., descriptive, causal,
              predictive) and its intensity (may, likely, must).
            </li>
            <li className="leading-relaxed">
              The precise subject matter: who or what the claims are about.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt={
            'Survey data show that a clear majority of Riverdale residents favor converting the old rail yard into a park. The city council typically approves projects that have majority support from residents. Which option states the argument’s conclusion?'
          }
          options={[
            "Most Riverdale residents enjoy outdoor recreation.",
            "If a project lacks majority support, the city council will reject it.",
            "The city council is likely to approve the rail yard conversion.",
            "Riverdale will convert every unused industrial site into a park.",
            "No residents oppose converting the rail yard into a park.",
          ]}
          correct="The city council is likely to approve the rail yard conversion."
          solution={
            <>
              <p>
                The premises say (1) most residents support the conversion and
                (2) the council usually approves projects with majority support.
                The conclusion that follows—matching the qualified language
                “typically”—is that approval is likely.
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  A: Adds new information about preferences not stated in the
                  stimulus.
                </li>
                <li>
                  B: Overstates the rule (turns “typically approves” into a
                  firm “will reject” for the opposite case).
                </li>
                <li>
                  C: Correct—aligns with the premises and mirrors their
                  strength.
                </li>
                <li>
                  D: Jumps far beyond the discussed project and scope.
                </li>
                <li>
                  E: Claims zero opposition, which is stronger than “majority
                  support.”
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: pick the statement the author is pointing to—not a claim
          that needs extra facts, stretches the evidence, merely shares the
          topic, or clashes with what was said. In the next sections, we unpack
          each wrong‑answer type with targeted practice.
        </p>
      </article>
    </main>
  );
}