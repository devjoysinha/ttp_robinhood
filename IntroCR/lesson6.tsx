import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.7 Background Information | Critical Reasoning",
  description:
    "Understand what background information is in Critical Reasoning, why authors include it, and how it frames an argument. Includes a short illustrative example and a symbolic (KaTeX) representation.",
};

function KInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
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
          1. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.7 Background Information
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Authors often open with context-setting facts that orient the reader
          before the reasoning begins. These statements aren’t claims we’re asked
          to judge; rather, they supply the backdrop we need to interpret the
          argument that follows.
        </p>

        <MustKnow>
          Background information is included to bring the reader up to speed on
          essential facts so the subsequent argument is clear. Treat these
          statements as context, not as premises you must evaluate.
        </MustKnow>

        <p>
          Consider this short passage, in which the first sentence provides the
          context that makes the conclusion intelligible:
        </p>

        <blockquote
          className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 text-gray-200"
          aria-label="Illustrative passage using background information"
        >
          <em>
            Noodle Barn serves only noodle dishes and has earned the state’s
            “Best Noodles” award five years running. A new Noodle Barn location
            opens in Redlands next month. The mayor of Redlands enjoys eating
            award-winning cuisine. Therefore, the mayor of Redlands will enjoy
            dining at Noodle Barn.
          </em>
        </blockquote>

        <p>
          Without the opening context about Noodle Barn and the upcoming opening,
          the conclusion about the mayor’s dining preferences would feel
          ungrounded. The background details supply the frame that connects the
          premise about the mayor’s tastes to the restaurant in question.
        </p>

        <p>
          In symbolic form, this framing can be represented as{" "}
          <KInline
            expr="(A \land B) \land C \;\Rightarrow\; D"
            ariaLabel="A and B and C imply D"
          />{" "}
          where A = “The restaurant serves only noodles,” B = “The restaurant is
          award-winning,” C = “The mayor likes award‑winning food,” and D =
          “The mayor will enjoy dining there.” Here, A and B establish the
          context that links C to D.
        </p>

        <p>
          We’ll revisit background information throughout the course. For now,
          keep your focus on its role: it’s there to set the stage so you can
          evaluate the actual reasoning effectively.
        </p>

        <p className="text-gray-400">
          Next up: assumptions—unstated ideas that must be true for an argument
          to hold.
        </p>
      </article>
    </main>
  );
}