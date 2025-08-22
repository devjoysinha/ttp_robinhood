import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "Chapter 16 • Combinations & Permutations — End of Chapter",
  description:
    "You’ve finished Chapter 16. Review key formulas, see your topic checklist, and jump back to your study plan.",
};

type Status = "done" | "examples-missing";

type Subtopic = {
  title: string;
  status: Status;
};

type Topic = {
  code: string;
  title: string;
  status: Status;
  subtopics?: Subtopic[];
};

const progress = {
  percent: 100,
  read: 43,
  total: 43,
};

const topics: Topic[] = [
  {
    code: "16.1",
    title: "Getting started",
    status: "done",
  },
  {
    code: "16.2",
    title: "Combinations",
    status: "done",
    subtopics: [
      { title: "Spotting when a problem is combinations", status: "done" },
      { title: "Tactics for solving combination questions", status: "examples-missing" },
      { title: "Handshake-style counting scenarios", status: "examples-missing" },
      { title: "Symmetry identity for combinations", status: "examples-missing" },
      { title: "Using the symmetry identity to find unknowns", status: "examples-missing" },
      { title: "Multi‑stage selections", status: "done" },
      { title: "Fundamental Counting Principle (multiplication rule)", status: "examples-missing" },
      { title: "Selecting from multiple groups (AND cases)", status: "examples-missing" },
      { title: "Selecting from multiple groups (OR cases)", status: "examples-missing" },
      { title: "Counting 'at least' selections", status: "examples-missing" },
      { title: "Restrictions: items that must be included", status: "examples-missing" },
      { title: "Restrictions: items that must be excluded", status: "examples-missing" },
      {
        title:
          "Mixing constraints: some must be chosen while others cannot be chosen",
        status: "examples-missing",
      },
      { title: "Layered/compound combination problems", status: "done" },
      { title: "Collectively exhaustive events", status: "examples-missing" },
      { title: "Items that may not appear together", status: "examples-missing" },
      { title: "Special case: choose at least one from a group", status: "examples-missing" },
      { title: "Selections with dependence", status: "examples-missing" },
      { title: "Back‑solving an unknown group size", status: "examples-missing" },
    ],
  },
  {
    code: "16.3",
    title: "Permutations",
    status: "done",
    subtopics: [
      { title: "Recognizing permutation setups", status: "done" },
      { title: "Methods for solving permutation questions", status: "examples-missing" },
      { title: "Watch out for indistinguishable items", status: "done" },
      { title: "Permutation formula with repeated items", status: "examples-missing" },
      { title: "Grid/Pathway questions (overview)", status: "done" },
      {
        title:
          "2‑D paths with required checkpoints",
        status: "examples-missing",
      },
      {
        title:
          "2‑D paths without intermediate checkpoints",
        status: "examples-missing",
      },
      { title: "Counting paths in 3‑D", status: "examples-missing" },
      { title: "Arrangements around a circle", status: "done" },
      { title: "Arrangements with constraints", status: "done" },
      { title: "Anchor method for restricted arrangements", status: "examples-missing" },
      { title: "Treat items that must stay together as a block", status: "examples-missing" },
      { title: "Forbid adjacent placements", status: "examples-missing" },
      { title: "Back‑solving unknown group sizes in permutations", status: "examples-missing" },
    ],
  },
  {
    code: "16.4",
    title: "Building codes and IDs",
    status: "examples-missing",
  },
  {
    code: "16.5",
    title: "Multi‑digit counts with constraints",
    status: "examples-missing",
  },
  {
    code: "16.6",
    title: "Start with the tightest restriction (multi‑digit)",
    status: "examples-missing",
  },
  {
    code: "16.7",
    title: "Digit problems with multiple scenarios",
    status: "examples-missing",
  },
  {
    code: "16.8",
    title: "Counting triangles",
    status: "done",
    subtopics: [
      { title: "No three points collinear", status: "examples-missing" },
      { title: "Three or more collinear points present", status: "examples-missing" },
    ],
  },
];

// KaTeX renderer (SSR-friendly)
function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={display ? "block my-2" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function StatusBadge({ status }: { status: Status }) {
  const label = status === "done" ? "Done" : "Examples pending";
  const classes =
    status === "done"
      ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30"
      : "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30";
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${classes}`}>
      {label}
    </span>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded bg-white/10">
      <div
        className="h-full bg-sky-500"
        style={{ width: `${Math.min(Math.max(percent, 0), 100)}%` }}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/study_plan" className="hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded">
                Study Plan
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">Chapter 16</li>
          </ol>
        </nav>

        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Combinations & Permutations
        </h1>
        <p className="mt-1 text-lg font-semibold text-gray-200">
          End of Chapter
        </p>

        <section
          aria-label="Chapter progress"
          className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-gray-300">
              <span className="font-medium text-gray-100">Progress:</span>{" "}
              {progress.percent}%
              <span className="ml-3 text-gray-400">
                {progress.read} / {progress.total} lessons read
              </span>
            </div>
            <div className="w-full sm:w-72">
              <ProgressBar percent={progress.percent} />
            </div>
          </div>
        </section>
      </header>

      <section className="mb-10 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
            <h2 className="mb-3 text-xl font-semibold text-white">Nice work!</h2>
            <p className="text-gray-300">
              You’ve wrapped up this chapter. Keep momentum by tackling the next step in your plan.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </div>
        <figure className="lg:col-span-3">
          <blockquote className="rounded-xl border border-white/10 bg-white/5 p-6 text-gray-300">
            <p className="text-balance">
              Begin each day with purpose so you can end it feeling accomplished.
            </p>
            <figcaption className="mt-2 text-sm text-gray-400">— Inspired by George Lorimer</figcaption>
          </blockquote>
        </figure>
      </section>

      <section aria-labelledby="key-formulas" className="mb-10">
        <h2 id="key-formulas" className="mb-3 text-lg font-semibold text-white">
          Core formulas from this chapter
        </h2>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-gray-300">
          <ul className="space-y-3">
            <li>
              Combinations (order doesn’t matter):
              <div>
                <Math
                  display
                  expr="{}^nC_k=\binom{n}{k}=\dfrac{n!}{k!\,(n-k)!}"
                  ariaLabel="n choose k equals n factorial divided by k factorial times n minus k factorial"
                />
              </div>
            </li>
            <li>
              Permutations (order matters):
              <div>
                <Math
                  display
                  expr="{}^nP_k=\dfrac{n!}{(n-k)!}"
                  ariaLabel="n permute k equals n factorial divided by n minus k factorial"
                />
              </div>
            </li>
            <li>
              Permutations with repeated items:
              <div>
                <Math
                  display
                  expr="\dfrac{n!}{a_1!\,a_2!\,\cdots\,a_m!}"
                  ariaLabel="n factorial divided by the product of factorials for each repeated group"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="topics" className="mb-14">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="topics" className="text-lg font-semibold text-white">
            Chapter topics checklist
          </h2>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Done</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
              <span>Examples pending</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {topics.map((t) => (
            <article
              key={t.code}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              aria-labelledby={`topic-${t.code}`}
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3
                  id={`topic-${t.code}`}
                  className="text-sm font-semibold text-white"
                >
                  <span className="text-gray-400">{t.code}</span>{" "}
                  <span className="ml-1">{t.title}</span>
                </h3>
                <StatusBadge status={t.status} />
              </div>

              {t.subtopics && (
                <ul className="mt-3 space-y-2">
                  {t.subtopics.map((s, idx) => (
                    <li key={`${t.code}-${idx}`} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-gray-300">{s.title}</span>
                      <StatusBadge status={s.status} />
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="next-steps" className="mb-16">
        <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-5">
          <h2 id="next-steps" className="text-base font-semibold text-white">
            What’s next?
          </h2>
          <p className="mt-2 text-gray-200">
            If any items are marked “Examples pending,” finish those practice sets to lock in the concepts.
            Then continue with your personalized plan.
          </p>
          <div className="mt-4">
            <Link
              href="/study_plan"
              className="inline-flex items-center justify-center rounded-md border border-sky-500/40 bg-transparent px-4 py-2 text-sm font-semibold text-sky-300 hover:bg-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Return to Study Plan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}