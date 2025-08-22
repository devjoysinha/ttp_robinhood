import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter Complete | Critical Reasoning",
  description:
    "You’ve wrapped up this chapter on Critical Reasoning. Review the lesson list, check your progress, and jump to your next Study Plan task.",
};

type LessonStatus = "done" | "attention";
type Lesson = {
  number: string;
  title: string;
  href: string;
  status: LessonStatus;
};

const lessons: Lesson[] = [
  { number: "1.1", title: "Getting started", href: "/lesson/1316", status: "done" },
  { number: "1.2", title: "How CR questions are structured", href: "/lesson/1317", status: "attention" },
  { number: "1.3", title: "Abilities assessed in CR", href: "/lesson/1318", status: "done" },
  { number: "1.4", title: "Anatomy of an argument", href: "/lesson/1319", status: "done" },
  { number: "1.5", title: "Identifying the conclusion", href: "/lesson/1320", status: "done" },
  { number: "1.6", title: "Premises and evidence", href: "/lesson/1321", status: "done" },
  { number: "1.7", title: "Context and background", href: "/lesson/1322", status: "done" },
  { number: "1.8", title: "Working with assumptions", href: "/lesson/1323", status: "attention" },
  { number: "1.9", title: "Key vocabulary to know", href: "/lesson/1324", status: "done" },
  { number: "1.10", title: "Evaluate all five choices carefully", href: "/lesson/1325", status: "done" },
  { number: "1.11", title: "If every option seems wrong, what next?", href: "/lesson/1326", status: "done" },
  { number: "1.12", title: "Reading for logical consequences", href: "/lesson/1865", status: "attention" },
  { number: "1.13", title: "Avoid “pre‑thinking” answers", href: "/lesson/1327", status: "done" },
  { number: "1.14", title: "Don’t fixate on a single word", href: "/lesson/1328", status: "done" },
  { number: "1.15", title: "Don’t skip words to save time", href: "/lesson/1329", status: "attention" },
  { number: "1.16", title: "New info isn’t an automatic disqualifier", href: "/lesson/1334", status: "attention" },
  { number: "1.17", title: "Find and fix habits that cause misses", href: "/lesson/1330", status: "done" },
  { number: "1.18", title: "No outside subject knowledge required", href: "/lesson/1331", status: "done" },
  { number: "1.19", title: "Managing time on CR", href: "/lesson/1332", status: "done" },
  { number: "1.20", title: "CR has remained stable over the years", href: "/lesson/1333", status: "done" },
];

function LessonRow({ lesson }: { lesson: Lesson }) {
  const statusStyles =
    lesson.status === "done"
      ? "text-emerald-400 bg-emerald-400/10 ring-1 ring-emerald-400/30"
      : "text-amber-400 bg-amber-400/10 ring-1 ring-amber-400/30";

  const statusLabel = lesson.status === "done" ? "Completed" : "Needs review";

  return (
    <li className="list-none">
      <div className="group relative flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-white/5">
        <span
          className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${statusStyles}`}
          aria-label={statusLabel}
          title={statusLabel}
        >
          {lesson.status === "done" ? "✓" : "!"}
        </span>
        <Link
          href={lesson.href}
          className="flex w-full items-center justify-between gap-3"
          aria-label={`Open lesson ${lesson.number}: ${lesson.title}`}
        >
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-gray-200">
              <span className="tabular-nums">{lesson.number}</span>
              <span className="ml-2 text-gray-300">{lesson.title}</span>
            </h3>
          </div>
          <span
            className="pointer-events-none hidden text-xs text-gray-400 sm:inline"
            aria-hidden="true"
          >
            View
          </span>
        </Link>
      </div>
      <hr className="border-t border-white/10" />
    </li>
  );
}

export default function Page() {
  const completed = lessons.filter((l) => l.status === "done").length;
  const total = lessons.length;
  const progressPct = Math.round((completed / total) * 100);

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white/10 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-gray-400">
          <Link href="/study_plan" className="hover:text-gray-200">
            Study Plan
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-gray-300">Critical Reasoning</span>
        </nav>

        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Chapter complete
        </h1>
        <p className="mt-2 text-gray-300">
          You’ve reached the end of this chapter in Critical Reasoning. Nice work.
        </p>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-gray-200">
              Chapter progress:{" "}
              <span className="tabular-nums">{progressPct}%</span>
            </p>
            <p className="text-sm text-gray-400">
              <span className="tabular-nums">
                {completed} / {total}
              </span>{" "}
              lessons completed
            </p>
          </div>
          <div className="mt-3">
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Chapter progress"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <section
        id="content"
        className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        aria-labelledby="end-section-title"
      >
        <div className="md:col-span-2">
          <h2 id="end-section-title" className="sr-only">
            End of chapter content
          </h2>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
            <p className="text-xl font-semibold text-white">
              Great job!
              <br />
              You’ve wrapped up this chapter.
            </p>
            <figure className="mt-4">
              <blockquote className="text-gray-300">
                “Success often comes down to two moves: decide exactly what you’re
                going to do, then follow through.”
              </blockquote>
              <figcaption className="mt-2 text-sm text-gray-400">
                — paraphrased from a quote attributed to Mario Cuomo
              </figcaption>
            </figure>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Chapter 1: Introduction to Critical Reasoning
            </h3>
            <ul className="rounded-lg border border-white/10 bg-white/[0.03]">
              {lessons.map((lesson) => (
                <LessonRow key={lesson.number} lesson={lesson} />
              ))}
            </ul>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">
              Keep your momentum
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Head to your Study Plan to continue with the next recommended step.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white outline-none ring-indigo-400 transition hover:bg-indigo-600 focus-visible:ring-2"
                aria-label="Go to Study Plan"
              >
                Go to Study Plan
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Tip: You can revisit any lesson above to reinforce concepts or fill
              gaps before moving on.
            </p>
          </div>
        </aside>
      </section>
    </main>
  ); 
}