import type { Metadata } from "next";
import Link from "next/link";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "Chapter Wrap‑Up: Identify the Assumption | Critical Reasoning",
  description:
    "You’ve finished this chapter. Review your lesson list, see 100% progress, and jump to the next step in your study plan.",
};

type Status = "done" | "in-progress" | "todo";

type Subtopic = {
  id: string;
  title: string;
  href: string;
  status: Status;
};

type Topic = {
  number: string;
  title: string;
  href: string;
  status: Status;
  subtopics?: Subtopic[];
};

const topics: Topic[] = [
  {
    number: "2.1",
    title: "Overview",
    href: "/lesson/2431",
    status: "done",
  },
  {
    number: "2.2",
    title: "Assumptions: hidden facts an argument relies on",
    href: "/lesson/2432",
    status: "in-progress",
  },
  {
    number: "2.3",
    title: "How to spot assumption prompts",
    href: "/lesson/1340",
    status: "in-progress",
  },
  {
    number: "2.4",
    title: "Plan of attack for assumption items",
    href: "/lesson/1341",
    status: "in-progress",
  },
  {
    number: "2.5",
    title: "Authors presume their reasoning holds—implications",
    href: "/lesson/2440",
    status: "in-progress",
  },
  {
    number: "2.6",
    title: "Assumptions can be subtle",
    href: "/lesson/2433",
    status: "in-progress",
  },
  {
    number: "2.7",
    title: "Handling stems with restrictive wording",
    href: "/lesson/2435",
    status: "in-progress",
  },
  {
    number: "2.8",
    title: "Using the negation test",
    href: "/lesson/2436",
    status: "in-progress",
  },
  {
    number: "2.9",
    title: "How correct answers typically function",
    href: "/lesson/1343",
    status: "done",
    subtopics: [
      {
        id: "1344",
        title: "Type 1: no offsetting condition",
        href: "/lesson/1344",
        status: "in-progress",
      },
      {
        id: "1345",
        title: "Type 2: needed for cause–effect claims",
        href: "/lesson/1345",
        status: "in-progress",
      },
      {
        id: "1346",
        title: "Type 3: rules out alternative routes",
        href: "/lesson/1346",
        status: "in-progress",
      },
      {
        id: "1347",
        title: "Type 4: solution doesn’t recreate the problem",
        href: "/lesson/1347",
        status: "in-progress",
      },
      {
        id: "1348",
        title: "Type 5: likely event actually occurs",
        href: "/lesson/1348",
        status: "in-progress",
      },
      {
        id: "1349",
        title: "Type 6: stability over time",
        href: "/lesson/1349",
        status: "in-progress",
      },
    ],
  },
  {
    number: "2.10",
    title: "How traps differ from correct answers",
    href: "/lesson/1353",
    status: "in-progress",
  },
  {
    number: "2.11",
    title: "Frequent wrong‑answer patterns",
    href: "/lesson/1354",
    status: "done",
    subtopics: [
      {
        id: "1355",
        title: "Type 1: backs the wrong claim",
        href: "/lesson/1355",
        status: "in-progress",
      },
      {
        id: "1356",
        title: "Type 2: does the opposite task",
        href: "/lesson/1356",
        status: "in-progress",
      },
      {
        id: "1357",
        title: "Type 3: mere explanation of the setup",
        href: "/lesson/1357",
        status: "in-progress",
      },
      {
        id: "1358",
        title: "Type 4: conclusion, not assumption",
        href: "/lesson/1358",
        status: "in-progress",
      },
      {
        id: "1359",
        title: "Type 5: proposes a different plan",
        href: "/lesson/1359",
        status: "in-progress",
      },
      {
        id: "1360",
        title: "Type 6: helpful but not required",
        href: "/lesson/1360",
        status: "in-progress",
      },
    ],
  },
  {
    number: "2.12",
    title: "Assumptions and how to weaken arguments",
    href: "/lesson/1361",
    status: "in-progress",
  },
];

function StatusBadge({ status }: { status: Status }) {
  const map = {
    done: { label: "Completed", className: "bg-emerald-500/15 text-emerald-300" },
    "in-progress": { label: "In progress", className: "bg-amber-500/15 text-amber-300" },
    todo: { label: "Not started", className: "bg-slate-500/20 text-slate-300" },
  } as const;

  const { label, className } = map[status];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
      aria-label={label}
    >
      {status === "done" ? "✔" : status === "in-progress" ? "…" : "•"} {label}
    </span>
  );
}

function ProgressBar({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) {
  const pct = Math.round((completed / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm text-gray-300">
        <div>
          Chapter progress:{" "}
          <span className="font-semibold text-white" aria-live="polite">
            {pct}%
          </span>
        </div>
        <div className="text-gray-400">
          <span className="sr-only">Lessons read:</span>
          {completed} / {total}
        </div>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-700"
        role="progressbar"
        aria-label="Chapter completion"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
      >
        <div
          className="h-full bg-gradient-to-r from-indigo-400 to-sky-400"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-3 text-sm text-gray-400">
        Tip:{" "}
        <InlineMath math="\text{Progress}=\dfrac{\text{completed}}{\text{total}}\times100\%" />
      </p>
    </div>
  );
}

export default function Page() {
  const completed = 24;
  const total = 24;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#chapter-main"
        className="sr-only focus:not-sr-only focus:rounded focus:bg-slate-800 focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>

      <header className="mb-6 flex flex-col gap-2">
        <nav aria-label="Breadcrumb">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >
            ← Back to Study Plan
          </Link>
        </nav>
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Critical Reasoning
        </h1>
        <h2 className="text-lg font-semibold text-gray-200">
          Chapter 2: Identify the Assumption — Wrap‑Up
        </h2>
      </header>

      <section
        id="chapter-main"
        aria-labelledby="progress-heading"
        className="mb-8 rounded-xl border border-slate-700/60 bg-slate-900/40 p-4 md:p-6"
      >
        <h3 id="progress-heading" className="sr-only">
          Chapter progress
        </h3>
        <ProgressBar completed={completed} total={total} />
      </section>

      <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 md:p-6">
            <div className="mb-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-gray-200">
              <p className="text-xl font-semibold text-white">
                Nice work — you’ve finished this chapter!
              </p>
              <p className="mt-2 text-gray-300">
                Every stumble teaches something useful. Keep stacking those
                lessons and momentum will follow.
              </p>
            </div>

            <h3 className="mb-4 text-lg font-semibold text-white">
              Lessons in this chapter
            </h3>
            <ul className="divide-y divide-slate-700/60">
              {topics.map((t) => (
                <li key={t.number} className="py-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Link
                        href={t.href}
                        className="group inline-flex max-w-full items-baseline gap-2"
                      >
                        <span className="shrink-0 rounded bg-slate-700 px-2 py-0.5 text-xs font-semibold text-gray-200">
                          {t.number}
                        </span>
                        <span className="truncate text-base font-medium text-sky-200 group-hover:text-sky-100">
                          {t.title}
                        </span>
                      </Link>
                      <StatusBadge status={t.status} />
                    </div>

                    {t.subtopics && t.subtopics.length > 0 && (
                      <ul className="mt-3 space-y-2 pl-0">
                        {t.subtopics.map((s) => (
                          <li key={s.id} className="flex items-start justify-between gap-3">
                            <Link
                              href={s.href}
                              className="text-sm text-gray-300 hover:text-gray-100"
                            >
                              {s.title}
                            </Link>
                            <StatusBadge status={s.status} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="flex h-full flex-col justify-between rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 md:p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Ready for what’s next?
              </h3>
              <p className="mt-2 text-gray-300">
                Head to your personalized study plan to continue with the next
                task.
              </p>
            </div>

            <div className="mt-6">
              <img
                src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/end_chapter/chapter_end-49d3db92b1909a22dd2cf9baad6d972f766da800977d81e656f3f1370e927c09.svg"
                alt="Illustration for moving on to the next study step"
                loading="lazy"
                className="mb-6 hidden w-full rounded-lg md:block"
              />
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <footer className="mt-8 text-sm text-gray-400">
        Pro tip: Revisit any “in progress” items above and convert them to
        “completed” before moving on. Consistency compounds.
      </footer>
    </main>
  );
}