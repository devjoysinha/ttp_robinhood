import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import katex from "katex";

export const metadata: Metadata = {
  title: "5.2 Read the First Sorted View | Table Analysis",
  description:
    "GMAT Table Analysis strategy: start by interpreting the very first sorted view, then explore how the table can be sorted. Finish by writing a one‑sentence summary of what the table shows.",
};

function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: false,
  });
  return <span className="whitespace-nowrap" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Page() {
  return (
    <main
      className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12"
      aria-labelledby="page-title"
    >
      <header className="mb-8">
        <h1
          id="page-title"
          className="mt-2 text-2xl font-bold text-white md:text-3xl"
        >
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.2 First, Understand What the Initial Sorted View Shows
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you open a Table Analysis prompt, begin by reading the short description above the table
          and scanning the very first sorted view. Your goal is to figure out, in plain language,
          what the data represent and how the current ordering frames the story.
        </p>

        <p>
          Next, experiment with the sort controls to learn which columns you can sort by and what each new
          ordering reveals. On every fresh sort, take a brief moment to notice the pattern or relationship
          that becomes easier to see, but don’t try to memorize numbers or details yet.
        </p>

        <MustKnow>
          Spend your first moments understanding what the default (first) sorted view communicates.
          Then, try different sorts to see the angles the data can show you. Scan for relationships;
          avoid number‑by‑number memorization.
        </MustKnow>

        <p>
          Before tackling the questions, write a single sentence that captures the gist of the table.
          This one‑liner acts as your compass while you evaluate statements and claims. For instance,
          you might summarize, “The table compares measurements across regions and years to show how one
          variable changes as another shifts.”
        </p>

        <MustKnow>
          Create a concise, one‑sentence takeaway describing what the table is about. Use that
          summary to guide which column to sort and what patterns to look for.
        </MustKnow>

        <section aria-labelledby="workflow-heading" className="space-y-3">
          <h3 id="workflow-heading" className="text-xl font-semibold text-white">
            A quick, repeatable workflow
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Read the prompt/explanatory text and scan column names, units, and footnotes.</li>
            <li>Note the current order: Which column is it sorted by? Ascending or descending?</li>
            <li>Test alternative sorts to surface trends, extremes, or groups you care about.</li>
            <li>
              Write your one‑sentence takeaway and keep it visible as you answer the questions.
            </li>
          </ul>
        </section>

        <section aria-labelledby="why-sorting-works" className="space-y-3">
          <h3 id="why-sorting-works" className="text-xl font-semibold text-white">
            Why sorting first helps
          </h3>
          <p>
            Think of a sort as reordering the rows by a rule. If the table has{" "}
            <MathInline expr="n" /> rows, a sort is just a permutation{" "}
            <MathInline expr="\\sigma" /> of the indices{" "}
            <MathInline expr="\\{1,2,\\dots,n\\}" />. Different choices of{" "}
            <MathInline expr="\\sigma" /> highlight different patterns—max/min values, outliers,
            clusters, or monotonic trends—so a few quick sorts can reveal the structure you need to
            answer questions efficiently.
          </p>
        </section>
      </article>
    </main>
  );
}