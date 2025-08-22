Here’s a production-ready Next.js page that rewrites your “End of Chapter” content in our theme, adds a11y, uses Tailwind for styling, and includes a small KaTeX block for the core work-rate formula. It’s fully responsive and avoids third-party scripts. Note: ensure you import 'katex/dist/katex.min.css' once in your root layout.

File: app/quant/work-problems/end-of-chapter/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
// IMPORTANT: ensure this CSS is included once in your root layout (app/layout.tsx)
// import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "End of Chapter • Work Problems | GMAT Quant",
  description:
    "You finished the Work Problems chapter. Review progress, revisit lessons with missing examples, and continue to your study plan.",
};

type Subtopic = {
  title: string;
  href: string;
  status: "completed" | "missing";
};

type Topic = {
  number: string;
  title: string;
  href: string;
  status: "completed" | "missing";
  subtopics?: Subtopic[];
};

const topics: Topic[] = [
  { number: "10.1", title: "Introduction", href: "/lesson/2", status: "completed" },
  { number: "10.2", title: "Rate–time–work relationship", href: "/lesson/3", status: "completed" },
  { number: "10.3", title: "Finding a single worker’s rate", href: "/lesson/4", status: "completed" },
  { number: "10.4", title: "Solving with matrices", href: "/lesson/5", status: "missing" },
  { number: "10.5", title: "Key categories of work problems", href: "/lesson/6", status: "completed" },
  {
    number: "10.6",
    title: "Single-worker problems",
    href: "/lesson/7",
    status: "missing",
    subtopics: [
      {
        title: "Single‑worker problems with variables in the choices",
        href: "/lesson/8",
        status: "missing",
      },
    ],
  },
  {
    number: "10.7",
    title: "Combined‑worker problems",
    href: "/lesson/9",
    status: "completed",
    subtopics: [
      {
        title: "Two workers, same time on task",
        href: "/lesson/10",
        status: "missing",
      },
      {
        title: "Two workers start together; one stops early",
        href: "/lesson/11",
        status: "missing",
      },
      {
        title: "Two workers together; one has unknown time",
        href: "/lesson/12",
        status: "missing",
      },
      {
        title: "Percent or fraction of a job completed",
        href: "/lesson/13",
        status: "missing",
      },
    ],
  },
  {
    number: "10.8",
    title: "Adding combined rates",
    href: "/lesson/821",
    status: "missing",
    subtopics: [
      {
        title:
          "Finding a group’s combined rate from three or more given combined rates",
        href: "/lesson/2362",
        status: "missing",
      },
    ],
  },
  { number: "10.9", title: "Opposing‑worker scenarios", href: "/lesson/14", status: "missing" },
  {
    number: "10.10",
    title: "Relative‑rate work problems",
    href: "/lesson/15",
    status: "completed",
    subtopics: [
      {
        title: "One rate is a multiple of another",
        href: "/lesson/16",
        status: "missing",
      },
      {
        title: "One worker is faster or slower than another",
        href: "/lesson/17",
        status: "missing",
      },
      {
        title:
          "One worker’s time is a percent or fraction more/less than another’s",
        href: "/lesson/18",
        status: "missing",
      },
    ],
  },
  { number: "10.11", title: "Changing‑workers problems", href: "/lesson/19", status: "missing" },
];

function StatusIcon({ status, label }: { status: Topic["status"]; label: string }) {
  if (status === "completed") {
    return (
      <span
        aria-label={`${label}: completed`}
        title="Completed"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
      >
        <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3-3a1 1 0 011.415-1.414l2.293 2.292 6.793-6.793a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  return (
    <span
      aria-label={`${label}: examples outstanding`}
      title="Examples outstanding"
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400"
    >
      <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2Zm1 14h-2v-2h2Zm0-4h-2V7h2Z" />
      </svg>
    </span>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div aria-label="Chapter progress" className="w-full">
      <div className="mb-1 flex items-center justify-between text-sm text-gray-400">
        <span className="hidden sm:inline">Chapter progress</span>
        <span>{percent} %</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-700">
        <div
          className="h-2 rounded-full bg-emerald-500"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        />
      </div>
    </div>
  );
}

export default function Page() {
  const total = topics.length + topics.reduce((a, t) => a + (t.subtopics?.length ?? 0), 0);
  const completed = topics.filter(t => t.status === "completed").length +
    topics.reduce((a, t) => a + (t.subtopics?.filter(s => s.status === "completed").length ?? 0), 0);
  const percent = 100; // Per original screen, the chapter is marked complete.

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      {/* Top bar */}
      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400/40 rounded"
          >
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            Back to Study Plan
          </Link>
        </nav>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">Chapter 10 • Work Problems</h1>
            <p className="mt-1 text-gray-300">You’ve finished this chapter. Nice job.</p>
          </div>
          <div className="w-full sm:max-w-sm">
            <ProgressBar percent={percent} />
            <p className="mt-1 text-right text-sm text-gray-400">
              {completed} / {total} lessons viewed
            </p>
          </div>
        </div>
      </header>

      {/* Quote / encouragement */}
      <section
        aria-label="Encouragement"
        className="relative mb-10 overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.12),transparent_35%)]" />
        <div className="relative">
          <p className="mb-2 text-lg text-gray-100">
            Progress often grows out of missteps—setbacks are frequently the stepping stones to real wins.
          </p>
          <p className="text-sm text-gray-400">Inspired by Dale Carnegie</p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Lessons list */}
        <section aria-labelledby="lesson-list-title" className="lg:col-span-2">
          <h2 id="lesson-list-title" className="mb-4 text-lg font-semibold text-gray-200">
            Chapter contents
          </h2>

          <ul className="divide-y divide-gray-800 rounded-xl border border-gray-700 bg-gray-900/40">
            {topics.map((topic) => (
              <li key={topic.number} className="p-4">
                <div className="flex items-start gap-3">
                  <StatusIcon status={topic.status} label={`Topic ${topic.number}`} />
                  <div className="flex-1">
                    <Link
                      href={topic.href}
                      className="group inline-flex w-full items-baseline justify-between gap-3 outline-none"
                    >
                      <h3 className="text-base font-medium text-gray-100">
                        <span className="text-gray-400">{topic.number}</span>
                        <span className="ml-2">{topic.title}</span>
                      </h3>
                      <span className="text-xs text-sky-300 opacity-0 group-hover:opacity-100">
                        Open
                      </span>
                    </Link>

                    {topic.subtopics?.length ? (
                      <ul className="mt-3 space-y-2 border-l border-gray-800 pl-4">
                        {topic.subtopics.map((s, idx) => (
                          <li key={`${topic.number}-${idx}`} className="flex items-start gap-2">
                            <StatusIcon status={s.status} label={`Subtopic of ${topic.number}`} />
                            <Link
                              href={s.href}
                              className="text-sm text-gray-300 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400/40 rounded"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Right column: CTA + Formula refresher */}
        <aside className="space-y-6">
          <section
            aria-label="Next action"
            className="rounded-xl border border-gray-700 bg-gray-900/40 p-6"
          >
            <h2 className="text-base font-semibold text-gray-100">
              Keep going with your Study Plan
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Ready for the next task? Jump back to your plan to continue, or revisit any lesson to
              shore up missing examples.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
              >
                Go to Study Plan
              </Link>
            </div>
          </section>

          <section
            aria-label="Core formula refresher"
            className="rounded-xl border border-gray-700 bg-gray-900/40 p-6"
          >
            <h2 className="text-base font-semibold text-gray-100">Core relationship</h2>
            <div className="mt-3 rounded-md bg-gray-800/60 p-4">
              <BlockMath math="\text{Work} \;=\; \text{Rate} \times \text{Time}" />
              <p className="mt-2 text-sm text-gray-300">
                This identity underpins every chapter topic. For example, if a worker’s rate is
                r jobs per hour and time is t hours, then the completed portion is r × t.
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>Combine rates additively when people work together.</li>
              <li>Watch signs for “opposing” work (e.g., filling vs. leaking).</li>
              <li>Translate “percent of a job” directly into fractional work.</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}