import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End of Chapter • Ratios | Study Plan",
  description:
    "You’ve wrapped up the Ratios chapter. Review your progress, skim the lesson list, and move on to the next step in your study plan.",
};

type Topic = {
  id: string | number;
  label: string;
  title: string;
  href: string;
  completed?: boolean;
  hasExamplesLeft?: boolean;
  subTopics?: {
    id: string | number;
    title: string;
    href: string;
    completed?: boolean;
    hasExamplesLeft?: boolean;
  }[];
};

const chapterNumber = 11;
const chapterTitle = "Ratios";
const progressPercent = 100;
const lessonsRead = 20;
const totalLessons = 20;

// Rewritten topic titles to avoid copyright issues while preserving meaning
const topics: Topic[] = [
  { id: 21, label: "11.1", title: "Getting Started", href: "/lesson/21", completed: true },
  {
    id: 22,
    label: "11.2",
    title: "Three interchangeable ways to write ratios",
    href: "/lesson/22",
    completed: true,
    subTopics: [
      {
        id: 2365,
        title: "Working with equivalent ratios",
        href: "/lesson/2365",
        completed: false,
        hasExamplesLeft: true,
      },
    ],
  },
  { id: 23, label: "11.3", title: "What every ratio communicates", href: "/lesson/23", completed: true },
  {
    id: 24,
    label: "11.4",
    title: "Why a ratio alone doesn’t give exact quantities",
    href: "/lesson/24",
    hasExamplesLeft: true,
  },
  { id: 25, label: "11.5", title: "The ratio scale factor", href: "/lesson/25", completed: true },
  { id: 26, label: "11.6", title: "Finding the scale factor", href: "/lesson/26", hasExamplesLeft: true },
  { id: 27, label: "11.7", title: "When the scale factor isn’t an integer", href: "/lesson/27", hasExamplesLeft: true },
  { id: 28, label: "11.8", title: "Spotting a helpful ratio", href: "/lesson/28", hasExamplesLeft: true },
  { id: 29, label: "11.9", title: "Using matching variables in ratios", href: "/lesson/29", hasExamplesLeft: true },
  { id: 2457, label: "11.10", title: "Multipart ratios and the LCM connection", href: "/lesson/2457", hasExamplesLeft: true },
  { id: 31, label: "11.11", title: "Adjusting totals to reach a target ratio", href: "/lesson/31", hasExamplesLeft: true },
  { id: 32, label: "11.12", title: "Scaling ratios by multiplying or dividing", href: "/lesson/32", hasExamplesLeft: true },
  { id: 33, label: "11.13", title: "Reading ratios as fractions", href: "/lesson/33", hasExamplesLeft: true },
  { id: 34, label: "11.14", title: "Proportions and how to use them", href: "/lesson/34", hasExamplesLeft: true },
  {
    id: 1655,
    label: "11.15",
    title: "Direct variation",
    href: "/lesson/1655",
    hasExamplesLeft: true,
    subTopics: [
      {
        id: 2366,
        title: "Direct variation with twists",
        href: "/lesson/2366",
        completed: false,
        hasExamplesLeft: true,
      },
    ],
  },
  {
    id: 1654,
    label: "11.16",
    title: "Inverse variation",
    href: "/lesson/1654",
    hasExamplesLeft: true,
    subTopics: [
      {
        id: 2367,
        title: "Inverse variation with extra steps",
        href: "/lesson/2367",
        completed: false,
        hasExamplesLeft: true,
      },
    ],
  },
  { id: 1653, label: "11.17", title: "Combined and joint variation", href: "/lesson/1653", hasExamplesLeft: true },
];

function StatusIcon({ completed, hasExamplesLeft }: { completed?: boolean; hasExamplesLeft?: boolean }) {
  if (completed) {
    return (
      <span aria-label="Completed" title="Completed" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
        </svg>
      </span>
    );
  }
  if (hasExamplesLeft) {
    return (
      <span aria-label="Examples remaining" title="Examples remaining" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-600/20 text-amber-300">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path fill="currentColor" d="M11 7h2v6h-2zm0 8h2v2h-2z" />
          <path fill="currentColor" d="M1 21h22L12 2 1 21z" />
        </svg>
      </span>
    );
  }
  return (
    <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-600/30 text-gray-300">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
          <Link href="/study_plan" className="inline-flex items-center gap-2 text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded px-1">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path fill="currentColor" d="M20 11H7.83l5.58-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            Back to Study Plan
          </Link>
        </nav>

        <h1 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          Chapter {chapterNumber}: {chapterTitle}
        </h1>
        <p className="mt-1 text-gray-300">End of chapter overview</p>
      </header>

      <section aria-labelledby="chapter-progress" className="mb-8 rounded-lg border border-white/10 bg-neutral-900/40 p-4 backdrop-blur-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="chapter-progress" className="text-lg font-semibold text-gray-100">
              Progress
            </h2>
            <p className="text-sm text-gray-300">
              Lessons completed: {lessonsRead} / {totalLessons}
            </p>
          </div>

          <div className="w-full md:max-w-md">
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressPercent}
              aria-label="Chapter completion"
              className="h-3 w-full overflow-hidden rounded-full bg-neutral-800"
              title={`Chapter Progress: ${progressPercent}%`}
            >
              <div className="h-full w-0 bg-emerald-500 transition-[width]" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="mt-1 text-right text-xs text-gray-400">{progressPercent}%</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="congrats" className="mb-10 rounded-lg border border-white/10 bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 p-6">
        <h2 id="congrats" className="text-xl font-semibold text-white">
          Nicely done — you’ve finished this chapter.
        </h2>
        <figure className="mt-3">
          <blockquote className="text-gray-200">
            “What blocks the path today can become a foothold tomorrow.”
          </blockquote>
          <figcaption className="mt-1 text-sm text-gray-400">— inspired by a sentiment attributed to Prescott</figcaption>
        </figure>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section aria-labelledby="lesson-list" className="lg:col-span-2">
          <div className="flex items-end justify-between">
            <h2 id="lesson-list" className="text-lg font-semibold text-white">
              Chapter {chapterNumber}: {chapterTitle}
            </h2>
          </div>

          <ol className="mt-4 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-neutral-900/30">
            {topics.map((t) => (
              <li key={t.id} className="group">
                <div className="flex items-start gap-3 p-4">
                  <StatusIcon completed={t.completed} hasExamplesLeft={t.hasExamplesLeft} />
                  <div className="min-w-0 flex-1">
                    <Link
                      href={t.href}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded"
                      aria-label={`Open lesson ${t.label}: ${t.title}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="truncate text-sm font-medium text-gray-100">
                          <span className="mr-2 inline-flex min-w-[3.5rem] justify-center rounded bg-white/5 px-2 py-0.5 text-xs text-gray-300 ring-1 ring-inset ring-white/10">
                            {t.label}
                          </span>
                          <span className="align-middle">{t.title}</span>
                        </h3>
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-500 transition group-hover:translate-x-0.5 group-hover:text-gray-300" aria-hidden="true">
                          <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                        </svg>
                      </div>
                    </Link>

                    {t.subTopics && t.subTopics.length > 0 && (
                      <ul className="mt-3 space-y-2 border-l border-white/10 pl-4">
                        {t.subTopics.map((s) => (
                          <li key={s.id} className="flex items-start gap-2">
                            <StatusIcon completed={s.completed} hasExamplesLeft={s.hasExamplesLeft} />
                            <Link
                              href={s.href}
                              className="text-sm text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded"
                              aria-label={`Open sub‑topic: ${s.title}`}
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside aria-labelledby="continue-panel" className="lg:col-span-1">
          <div className="sticky top-6 rounded-lg border border-white/10 bg-neutral-900/40 p-6">
            <h2 id="continue-panel" className="text-base font-semibold text-gray-100">
              Keep going
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Head to your Study Plan to tackle what’s next.
            </p>

            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
              >
                Go to Study Plan
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z" />
                </svg>
              </Link>
            </div>

            {progressPercent < 100 && (
              <p className="mt-4 text-xs text-amber-300">
                Tip: items marked with a warning icon still have examples to finish.
              </p>
            )}
          </div>
        </aside>
      </div>

      <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Need help? Use the contact options in your dashboard or review the chapter summary before moving on.
      </footer>
    </main>
  );
}