import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "End of Chapter • Complete the Passage | Verbal",
  description:
    "You’ve wrapped up this chapter on Complete the Passage. Review your lesson checklist, see your progress, and jump back to your study plan.",
};

type Lesson = {
  id: string;
  number: string;
  title: string;
  status: "done" | "todo";
  href?: string;
  subtopics?: { title: string; status: "done" | "todo"; href?: string }[];
};

const chapter = {
  number: 11,
  name: "Complete the Passage",
  progressPercent: 100,
  lessonsRead: 11,
  lessonsTotal: 11,
};

const lessons: Lesson[] = [
  {
    id: "l1",
    number: "11.1",
    title: "Kickoff and what to expect",
    status: "todo",
    href: "/lesson/988",
  },
  {
    id: "l2",
    number: "11.2",
    title: "How this task overlaps with other Critical Reasoning skills",
    status: "done",
    href: "/lesson/989",
  },
  {
    id: "l3",
    number: "11.3",
    title:
      "Expose traps by turning the final blank into a Why/What question",
    status: "todo",
    href: "/lesson/990",
  },
  {
    id: "l4",
    number: "11.4",
    title: "A practical step‑by‑step game plan",
    status: "todo",
    href: "/lesson/991",
  },
  {
    id: "l5",
    number: "11.5",
    title:
      "Your answer must work with the entire passage—not just the last sentence",
    status: "todo",
    href: "/lesson/2463",
  },
  {
    id: "l6",
    number: "11.6",
    title:
      "Prioritize the logic of the passage over surface‑level wording",
    status: "todo",
    href: "/lesson/993",
  },
  {
    id: "l7",
    number: "11.7",
    title: "Frequent wrong‑answer patterns to watch for",
    status: "done",
    href: "/lesson/994",
    subtopics: [
      {
        title: "Sounds right but nudges the argument off course",
        status: "todo",
        href: "/lesson/995",
      },
      {
        title:
          "Plausible or inferable, yet not the true completion of the passage",
        status: "todo",
        href: "/lesson/996",
      },
      {
        title:
          "Addresses a legitimate issue that isn’t the one the passage is driving at",
        status: "todo",
        href: "/lesson/997",
      },
      {
        title:
          "Explains a point in the passage without actually finishing the thought",
        status: "todo",
        href: "/lesson/998",
      },
    ],
  },
];

function MathInline({
  formula,
  ariaLabel,
  className = "",
}: {
  formula: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span className={`align-middle ${className}`}>
      <span
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <span className="sr-only">{ariaLabel ?? formula}</span>
    </span>
  );
}

function StatusPill({ status }: { status: Lesson["status"] }) {
  const isDone = status === "done";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
        isDone
          ? "bg-emerald-900/40 text-emerald-200 ring-1 ring-emerald-700/50"
          : "bg-amber-900/30 text-amber-200 ring-1 ring-amber-700/40"
      }`}
      aria-label={isDone ? "Completed" : "Needs review"}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          isDone ? "bg-emerald-400" : "bg-amber-400"
        }`}
      />
      {isDone ? "Completed" : "To review"}
    </span>
  );
}

function ProgressBar({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-gray-300">
        <span>{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div
        className="relative h-2 w-full overflow-hidden rounded bg-gray-800"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label}
      >
        <div
          className="h-full bg-indigo-500 transition-[width]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#chapter-main"
        className="sr-only focus:not-sr-only focus:rounded focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/study_plan"
            className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-indigo-500/60"
          >
            ← Back to Study Plan
          </Link>
          <div className="text-sm text-gray-400">
            <span className="hidden sm:inline">Chapter</span> Progress •{" "}
            <span className="tabular-nums">
              {chapter.lessonsRead} / {chapter.lessonsTotal}
            </span>{" "}
            lessons read
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          End of Chapter
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          {chapter.number}. {chapter.name}
        </h2>
      </header>

      <section
        id="chapter-main"
        aria-labelledby="chapter-summary-title"
        className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-12"
      >
        <div className="lg:col-span-7">
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
            <h3
              id="chapter-summary-title"
              className="text-xl font-semibold text-white"
            >
              Nicely done—you made it to the finish line!
            </h3>
            <p className="mt-2 text-gray-300">
              You’ve completed this chapter. Use the checklist below to
              revisit any lessons you still want to practice, or jump
              straight back to your plan.
            </p>

            <div className="mt-6 space-y-4">
              <ProgressBar
                value={chapter.progressPercent}
                label="Overall progress"
              />

              <p className="text-sm text-gray-400">
                Progress formula:{" "}
                <MathInline
                  formula="\,\text{Progress}=\frac{\text{completed}}{\text{total}}\times 100\%\,"
                  ariaLabel="Progress equals completed over total times 100 percent"
                  className="text-indigo-300"
                />{" "}
                →{" "}
                <MathInline
                  formula={`\\frac{${chapter.lessonsRead}}{${chapter.lessonsTotal}}\\times 100\\% = ${chapter.progressPercent}\\%`}
                  ariaLabel={`${chapter.lessonsRead} over ${chapter.lessonsTotal} equals ${chapter.progressPercent} percent`}
                  className="text-indigo-300"
                />
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900/30">
            <div className="border-b border-gray-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold text-gray-200">
                Chapter {chapter.number}: {chapter.name}
              </h3>
            </div>
            <ol className="divide-y divide-gray-800">
              {lessons.map((lesson) => (
                <li key={lesson.id} className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="shrink-0 rounded bg-gray-800 px-2 py-0.5 text-xs font-mono text-gray-300">
                          {lesson.number}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {lesson.href ? (
                            <Link
                              href={lesson.href}
                              className="hover:underline focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-indigo-500/60"
                            >
                              {lesson.title}
                            </Link>
                          ) : (
                            lesson.title
                          )}
                        </h4>
                      </div>

                      {lesson.subtopics && (
                        <ul className="mt-3 space-y-2 pl-2 sm:pl-5">
                          {lesson.subtopics.map((st, i) => (
                            <li key={`${lesson.id}-st-${i}`}>
                              <div className="flex items-center gap-2">
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-gray-600"
                                  aria-hidden="true"
                                />
                                <span className="text-sm text-gray-300">
                                  {st.href ? (
                                    <Link
                                      href={st.href}
                                      className="hover:underline focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-indigo-500/60"
                                    >
                                      {st.title}
                                    </Link>
                                  ) : (
                                    st.title
                                  )}
                                </span>
                                <StatusPill status={st.status} />
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <StatusPill status={lesson.status} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <figure className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/40 p-6">
            <blockquote className="text-lg text-gray-200">
              Success usually follows those who decide to believe they can
              achieve it.
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-400">
              — inspired by Richard Bach
            </figcaption>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            />
          </figure>

          <div className="mt-6 rounded-lg border border-gray-800 bg-gray-900/30 p-6">
            <h3 className="text-base font-semibold text-gray-200">
              Keep your momentum going
            </h3>
            <p className="mt-2 text-gray-300">
              Head back to your plan to start the next item on your path.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-indigo-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/60 md:w-auto"
                aria-label="Go to study plan"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}