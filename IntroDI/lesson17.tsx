import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import katex from "katex";

export const metadata: Metadata = {
  title: "1.18 Use Daily Reading to Build Data Insights Skills | Data Insights",
  description:
    "Strengthen Graphics Interpretation and Multi-Source Reasoning by practicing with real-world news charts and arguments. Includes a quick percent-change formula rendered with KaTeX and actionable reading tips.",
};

// Server component-friendly KaTeX renderer
function TeX({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
  });

  if (display) {
    return (
      <div
        role="math"
        aria-label={ariaLabel ?? expr}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.18 Use Your Daily Reading to Brush Up on Your Data Insights Skills
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A simple way to sharpen your Graphics Interpretation and Multi-Source
          Reasoning is to read high‑quality journalism that regularly features
          charts, tables, and evidence‑based arguments. Outlets such as the Wall
          Street Journal and the New York Times frequently publish data
          visualizations that mirror what you’ll see on test day.
        </p>

        <p>
          As you work through these stories, pause at each graphic: identify the
          variables, note the units and time frame, and translate the visual
          into a plain‑English claim. This habit builds fluency with bar charts,
          line graphs, scatter plots, and multi‑panel displays in realistic
          contexts.
        </p>

        <p>
          The New York Times also hosts an ongoing feature, “What’s Going On in
          This Graph?”, dedicated to helping readers make sense of the graphics
          that appear in the paper. It’s a curated way to practice interpreting
          real visualizations.
          {" "}
          <a
            href="https://www.nytimes.com/column/whats-going-on-in-this-graph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline underline-offset-4 hover:text-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
            aria-label="Open New York Times: What's Going On in This Graph in a new tab"
          >
            Explore “What’s Going On in This Graph?”
          </a>
        </p>

        <p>
          Opinion and analysis pieces are useful too: they present claims
          supported by evidence drawn from multiple sources—perfect training for
          the reasoning you’ll need when synthesizing information across tabs or
          exhibits.
        </p>

        <MustKnow>
          Regularly reading trusted publications is an efficient way to drill
          Data Insights skills. Treat each chart as a question to answer:
          identify what’s measured, how it’s measured, and what the visualization
          does—and doesn’t—support.
        </MustKnow>

        <section
          aria-labelledby="practice-tips"
          className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 md:p-5"
        >
          <h3 id="practice-tips" className="mb-2 text-base font-semibold text-gray-100">
            Quick practice routine when you encounter a chart
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Scan the axes and legend: units, categories, time intervals, and
              any aggregation (averages, medians, moving windows).
            </li>
            <li>
              Paraphrase the main message in one sentence. Then challenge it:
              what alternative explanations or caveats could exist?
            </li>
            <li>
              Sanity‑check with a fast computation—for example, percent change.
              Try computing one point by hand before accepting the claim.
            </li>
            <li>
              Cross‑reference details across the article’s text, footnotes, and
              related visuals, just as you would across tabs in a Multi‑Source
              Reasoning prompt.
            </li>
          </ul>

          <div
            className="mt-4 rounded-md bg-gray-800/60 p-3 text-sm"
            aria-labelledby="percent-change-formula"
          >
            <p id="percent-change-formula" className="mb-2 font-medium text-gray-100">
              Handy check: percent change
            </p>
            <div className="text-gray-200">
              <TeX
                display
                expr="\\%\\ \\text{change} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%"
                ariaLabel="Percent change equals open parenthesis new minus old close parenthesis divided by old, times one hundred percent"
              />
            </div>
            <p className="mt-2 text-gray-300">
              Use this to confirm a chart’s stated growth or decline. Even one
              spot‑check can reveal a mislabeled scale or a misread axis.
            </p>
          </div>
        </section>

        <p>
          At this point, you’ve seen how the Data Insights section operates,
          which skills it measures, and broad strategies that cut across
          question types. In the next lessons, we’ll dive deeper into each type
          and build targeted techniques with plenty of practice.
        </p>

        <p className="font-medium text-gray-100">
          Up next: we begin our DI deep dive with Graphics Interpretation.
        </p>
      </article>
    </main>
  );
}