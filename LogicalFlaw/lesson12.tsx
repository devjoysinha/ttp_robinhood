import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// If you haven't already, add this once in app/layout.tsx (global CSS):
// import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "10.3 Wrong Answer Patterns in Logical Flaw Questions | Critical Reasoning",
  description:
    "Learn how to spot and reject trap choices on pure Logical Flaw questions. See the two properties every correct answer must have and the common ways wrong answers miss the mark.",
};

function MathInline({
  expr,
  sr,
  className,
}: {
  expr: string;
  sr: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
  });
  return (
    <span className={className}>
      <span className="sr-only">{sr}</span>
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.3 Types of Incorrect Choices in Logical Flaw Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On a pure Logical Flaw question, the right choice does two things at
          once: it accurately describes what the author actually does and it
          identifies that behavior as faulty reasoning. If either piece is
          missing, you don’t have the correct answer.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              Two must‑haves for the correct answer:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>It matches a move the argument truly makes.</li>
              <li>That move is characterized as a reasoning error.</li>
            </ul>
            <div className="mt-3 rounded-md bg-zinc-800/50 p-3">
              <p className="mb-1 text-sm text-gray-300">Logic shorthand:</p>
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-gray-200">Correct</span>
                <span>=</span>
                <MathInline
                  expr={"\\text{does} \\; \\land \\; \\text{flawed}"}
                  sr="does AND flawed"
                  className="text-gray-100"
                />
              </p>
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-gray-200">Incorrect</span>
                <span>=</span>
                <MathInline
                  expr={
                    "\\lnot(\\text{does} \\land \\text{flawed}) \\;=\\; (\\lnot\\text{does}) \\;\\lor\\; (\\lnot\\text{flawed})"
                  }
                  sr="not both; either it does not describe the argument or it is not actually a flaw"
                  className="text-gray-100"
                />
              </p>
            </div>
          </div>
        </MustKnow>

        <p>
          Because of that framework, every wrong option will fail at least one
          of the two requirements. Many trap answers are crafted to sound
          authoritative—using phrases such as “presupposes” or “fails to
          address”—and sprinkle in relevant‑sounding facts. Don’t be swayed by
          tone; verify that the choice both matches the argument’s behavior and
          calls out a genuine error in reasoning.
        </p>

        <section aria-labelledby="pitfalls">
          <h3 id="pitfalls" className="mb-3 text-lg font-semibold text-white">
            Frequent wrong‑answer patterns
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Describes a flaw that never occurs in the passage (sounds
              plausible, but it’s not what the author did).
            </li>
            <li>
              Accurately names something the author does, but that move isn’t a
              flaw in this context.
            </li>
            <li>
              Critiques support for the wrong claim—e.g., targets a side point
              or a restatement rather than the argument’s actual conclusion.
            </li>
            <li>
              Dresses up an irrelevant observation with fancy wording
              (“presupposes,” “fails to consider”) but doesn’t pinpoint an
              actual reasoning mistake.
            </li>
            <li>
              Introduces numbers, percentages, or other quantitative details
              that don’t affect the logic of the conclusion.
            </li>
          </ul>
        </section>

        <section aria-labelledby="approach">
          <h3 id="approach" className="mb-3 text-lg font-semibold text-white">
            A quick, reliable approach
          </h3>
          <ol className="ml-5 list-decimal space-y-2">
            <li>
              Lock down the conclusion and the key evidence. Paraphrase both.
            </li>
            <li>
              State the flaw in your own words (e.g., “confuses correlation and
              causation,” “generalizes from a biased sample”).
            </li>
            <li>
              Match first: eliminate any choice that doesn’t clearly describe
              what the author did.
            </li>
            <li>
              Then validate the error: remove choices that describe a move the
              author makes but that is not actually mistaken here.
            </li>
          </ol>
        </section>

        <p>
          Bottom line: the correct response must both mirror the author’s move
          and label that move as faulty. Anything that only sounds critical or
          only sounds relevant—but doesn’t do both—is a trap.
        </p>
      </article>
    </main>
  );
}