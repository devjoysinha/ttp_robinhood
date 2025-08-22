import type { Metadata } from "next";
import katex from "katex";

export const metadata: Metadata = {
  title: "Chapter Complete — Coordinate Geometry",
  description:
    "You’ve wrapped up Coordinate Geometry. Review key formulas, check topic status, and jump back to your study plan.",
};

type Topic = {
  id: string;
  label: string;
  status: "completed" | "incomplete" | "examples-pending";
  href?: string;
  subtopics?: { label: string; status: Topic["status"]; href?: string }[];
};

const topics: Topic[] = [
  { id: "18.1", label: "Getting started", status: "completed" },
  {
    id: "18.2",
    label: "The coordinate grid",
    status: "completed",
    subtopics: [
      { label: "x- and y-axes", status: "completed" },
      { label: "Plotting points", status: "completed" },
    ],
  },
  { id: "18.3", label: "Quadrants overview", status: "completed" },
  {
    id: "18.4",
    label: "Line segments",
    status: "completed",
    subtopics: [{ label: "Sketching lines", status: "completed" }],
  },
  {
    id: "18.5",
    label: "Slope basics",
    status: "completed",
    subtopics: [
      { label: "Positive slope", status: "completed" },
      { label: "Negative slope", status: "completed" },
      { label: "Zero slope (horizontal)", status: "completed" },
      { label: "Undefined slope (vertical)", status: "completed" },
      { label: "Slope and steepness", status: "completed" },
    ],
  },
  {
    id: "18.6",
    label: "Slope–intercept form",
    status: "examples-pending",
    subtopics: [
      { label: "Graph with y = mx + b", status: "completed" },
      { label: "Manipulating y = mx + b", status: "examples-pending" },
      { label: "Horizontal/vertical equations", status: "completed" },
      { label: "Every point satisfies y = mx + b", status: "examples-pending" },
      { label: "Standard form of a line", status: "examples-pending" },
      { label: "What information defines a line?", status: "examples-pending" },
    ],
  },
  { id: "18.7", label: "Parallel lines", status: "examples-pending" },
  { id: "18.8", label: "Perpendicular lines", status: "examples-pending" },
  {
    id: "18.9",
    label: "Distance between two points",
    status: "examples-pending",
    subtopics: [
      {
        label: "Right-triangle method for segment length",
        status: "examples-pending",
      },
    ],
  },
  { id: "18.10", label: "Midpoint of a segment", status: "examples-pending" },
  {
    id: "18.11",
    label: "Graphing inequalities",
    status: "completed",
    subtopics: [
      { label: "Greater than regions", status: "examples-pending" },
      { label: "Less than regions", status: "examples-pending" },
      { label: "Greater than or equal to", status: "examples-pending" },
      { label: "Less than or equal to", status: "examples-pending" },
      { label: "Combining multiple inequalities", status: "examples-pending" },
    ],
  },
];

// Accessible KaTeX renderer (MathML output for SSR and screen readers)
function renderMath(expr: string) {
  return {
    __html: katex.renderToString(expr, {
      throwOnError: false,
      output: "mathml", // accessible, works without KaTeX CSS
      strict: "ignore",
    }),
  };
}

function StatusBadge({ status }: { status: Topic["status"] }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  if (status === "completed") {
    return (
      <span className={`${base} bg-emerald-600/20 text-emerald-300`}>
        <span aria-hidden="true" className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Completed
      </span>
    );
  }
  if (status === "examples-pending") {
    return (
      <span className={`${base} bg-amber-500/20 text-amber-300`}>
        <span aria-hidden="true" className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
        Examples remaining
      </span>
    );
  }
  return (
    <span className={`${base} bg-slate-500/30 text-slate-200`}>
      <span aria-hidden="true" className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-300" />
      Incomplete
    </span>
  );
}

function TopicItem({ topic }: { topic: Topic }) {
  return (
    <li className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm text-slate-300">
              <span className="font-semibold text-white">{topic.id}</span>
              <span className="mx-2 text-slate-500">•</span>
              {topic.label}
            </p>
          </div>
        </div>
        <StatusBadge status={topic.status} />
      </div>
      {topic.subtopics?.length ? (
        <ul className="mt-3 space-y-2 pl-0">
          {topic.subtopics.map((st, i) => (
            <li
              key={`${topic.id}-${i}`}
              className="flex items-center justify-between gap-3 rounded-md bg-slate-800/30 px-3 py-2"
            >
              <span className="text-sm text-slate-300">{st.label}</span>
              <StatusBadge status={st.status} />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Page() {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#study-contents"
        className="sr-only focus:not-sr-only focus:rounded focus:bg-slate-100 focus:px-3 focus:py-2 focus:text-slate-900"
      >
        Skip to chapter contents
      </a>

      <header className="mb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              Coordinate Geometry
            </h1>
            <p className="mt-1 text-base text-slate-300">
              Chapter complete — great job pushing through!
            </p>
          </div>

          <div
            className="w-full max-w-sm"
            role="region"
            aria-label="Chapter progress"
          >
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Progress</span>
              <span aria-live="polite">100%</span>
            </div>
            <div
              className="mt-2 h-2 w-full rounded-full bg-slate-700"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-label="Chapter completion"
            >
              <div className="h-2 rounded-full bg-emerald-500" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </header>

      <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/40 p-6 lg:col-span-2">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <h2 className="text-xl font-semibold text-white">
            You made it to the finish line of this chapter
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Aim high before you begin — that mindset is the first step toward exceptional
            outcomes.
          </p>
          <p className="mt-1 text-sm text-slate-400">
            A reminder inspired by a legendary competitor
          </p>
        </div>

        <aside className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
          <h3 className="text-base font-semibold text-white">
            What’s next?
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Keep your momentum going. Head back to your study plan to move on to the next task.
          </p>
          <div className="mt-4">
            <a
              href="/study_plan"
              className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Go to Study Plan
            </a>
          </div>
        </aside>
      </section>

      <section
        id="study-contents"
        aria-labelledby="chapter-contents-heading"
        className="grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2
              id="chapter-contents-heading"
              className="text-lg font-semibold text-white"
            >
              Chapter 18 overview
            </h2>
            <p className="text-sm text-slate-400">Status by topic</p>
          </div>
          <ul className="space-y-3">
            {topics.map((t) => (
              <TopicItem key={t.id} topic={t} />
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h3 className="text-base font-semibold text-white">
              Quick formula refresher
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              A few essentials from this chapter:
            </p>
            <ul className="mt-4 space-y-4">
              <li className="rounded-lg bg-slate-900/40 p-3">
                <p className="text-sm text-slate-400">Slope</p>
                <div
                  className="mt-1 text-left text-slate-100"
                  aria-label="Slope equals the change in y over the change in x"
                  dangerouslySetInnerHTML={renderMath(
                    "m = \\dfrac{y_2 - y_1}{x_2 - x_1}"
                  )}
                />
              </li>
              <li className="rounded-lg bg-slate-900/40 p-3">
                <p className="text-sm text-slate-400">Slope–intercept form</p>
                <div
                  className="mt-1 text-left text-slate-100"
                  aria-label="y equals m x plus b"
                  dangerouslySetInnerHTML={renderMath("y = mx + b")}
                />
              </li>
              <li className="rounded-lg bg-slate-900/40 p-3">
                <p className="text-sm text-slate-400">Distance between two points</p>
                <div
                  className="mt-1 text-left text-slate-100"
                  aria-label="Distance equals the square root of the quantity x two minus x one squared plus y two minus y one squared"
                  dangerouslySetInnerHTML={renderMath(
                    "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
                  )}
                />
              </li>
              <li className="rounded-lg bg-slate-900/40 p-3">
                <p className="text-sm text-slate-400">Midpoint</p>
                <div
                  className="mt-1 text-left text-slate-100"
                  aria-label="Midpoint equals left parenthesis, x one plus x two over two, comma, y one plus y two over two, right parenthesis"
                  dangerouslySetInnerHTML={renderMath(
                    "\\left(\\dfrac{x_1 + x_2}{2},\\;\\dfrac{y_1 + y_2}{2}\\right)"
                  )}
                />
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Math is rendered with KaTeX (MathML output) for accessibility.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h3 className="text-base font-semibold text-white">Tip</h3>
            <p className="mt-2 text-sm text-slate-300">
              If any topic shows “Examples remaining,” revisit those drills before starting a
              reinforcement quiz to lock in your understanding.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}