import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "End of Chapter | Evaluate the Argument | GMAT",
  description:
    "You’ve wrapped up Chapter 9: Evaluate the Argument. Review the lesson list, see your progress, and jump to the next item in your study plan.",
};

type Lesson = {
  id: number | string;
  number: string;
  title: string;
  href: string;
  completed: boolean;
  subtopics?: Array<{ id: number | string; title: string; href: string; completed: boolean }>;
};

const lessons: Lesson[] = [
  { id: 2459, number: "9.1", title: "Overview", href: "/lesson/2459", completed: true },
  {
    id: 2460,
    number: "9.2",
    title: "Using the Yes/No check on Evaluate‑the‑Argument items",
    href: "/lesson/2460",
    completed: true,
  },
  {
    id: 959,
    number: "9.3",
    title: "Typical prompts for Evaluate‑the‑Argument",
    href: "/lesson/959",
    completed: true,
  },
  {
    id: 960,
    number: "9.4",
    title: "Plan of attack for Evaluate‑the‑Argument",
    href: "/lesson/960",
    completed: true,
  },
  {
    id: 961,
    number: "9.5",
    title: "How to tackle the four common answer‑choice patterns",
    href: "/lesson/961",
    completed: true,
    subtopics: [
      {
        id: 962,
        title: "Choices that ask non–yes/no questions",
        href: "/lesson/962",
        completed: true,
      },
      {
        id: 963,
        title: "Choices that frame other types of questions",
        href: "/lesson/963",
        completed: true,
      },
      {
        id: 964,
        title: "Choices that are statements, not questions",
        href: "/lesson/964",
        completed: true,
      },
    ],
  },
  {
    id: 965,
    number: "9.6",
    title: "Common traps in Evaluate‑the‑Argument answers",
    href: "/lesson/965",
    completed: true,
  },
  {
    id: 966,
    number: "9.7",
    title:
      "Trap 1: Relevant‑sounding details that don’t change the argument’s strength",
    href: "/lesson/966",
    completed: true,
  },
  {
    id: 967,
    number: "9.8",
    title: "Trap 2: Irrelevant comparisons",
    href: "/lesson/967",
    completed: true,
  },
  {
    id: 968,
    number: "9.9",
    title: "Trap 3: Information that addresses the wrong conclusion",
    href: "/lesson/968",
    completed: true,
  },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mt-3" aria-label="Chapter progress">
      <div
        className="h-2 w-full rounded bg-gray-700"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-2 rounded bg-blue-500 transition-[width] duration-300 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
        <span>Progress: {value}%</span>
        <span>12 / 12 lessons completed</span>
      </div>
    </div>
  );
}

function StatusDot({ completed }: { completed: boolean }) {
  const color = completed ? "bg-emerald-500" : "bg-gray-500";
  const label = completed ? "Completed" : "Not completed";
  return (
    <span className="inline-flex items-center">
      <span
        className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${color}`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function LessonItem({
  lesson,
  level = 2,
}: {
  lesson: Lesson | Lesson["subtopics"][number];
  level?: 1 | 2;
}) {
  return (
    <li className="list-none">
      <div className="group relative flex items-start justify-between rounded-lg px-3 py-3 hover:bg-gray-800/50 focus-within:bg-gray-800/50">
        <div className="flex min-w-0 items-center gap-3">
          {"number" in lesson ? (
            <span className="shrink-0 rounded bg-gray-700 px-2 py-1 text-xs font-semibold text-gray-200">
              {lesson.number}
            </span>
          ) : (
            <span className="shrink-0 rounded border border-gray-700 px-2 py-1 text-xs font-medium text-gray-300">
              Subtopic
            </span>
          )}
          <div className="min-w-0">
            {"number" in lesson ? (
              <h3 className="truncate text-sm font-medium text-gray-100">
                <Link href={lesson.href} className="outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                  <StatusDot completed={lesson.completed} />
                  {lesson.title}
                </Link>
              </h3>
            ) : (
              <p className="truncate text-sm text-gray-200">
                <Link href={lesson.href} className="outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                  <StatusDot completed={lesson.completed} />
                  {lesson.title}
                </Link>
              </p>
            )}
          </div>
        </div>
        <span aria-hidden="true" className="text-gray-600 group-hover:text-gray-400">→</span>
      </div>
      {"subtopics" in lesson && lesson.subtopics && lesson.subtopics.length > 0 && (
        <ul className="ml-8 mt-1 space-y-1">
          {lesson.subtopics.map((s) => (
            <LessonItem key={s.id} lesson={s} level={2} />
          ))}
        </ul>
      )}
    </li>
  );
}

function QuoteCard() {
  return (
    <section
      aria-labelledby="end-quote-title"
      className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-blue-500/10 blur-2xl" />
      <h2 id="end-quote-title" className="sr-only">
        Motivational note
      </h2>
      <div className="relative">
        <p className="mb-1 text-lg text-gray-200">
          Expect excellence from yourself—aim high, and your effort will follow.
        </p>
        <p className="text-sm text-gray-500">— inspired by Michael Jordan</p>
      </div>
    </section>
  );
}

export default function Page() {
  const progress = 100;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a href="#chapter-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white">
        Skip to main content
      </a>

      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-2 text-sm text-gray-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/study-plan" className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                Study Plan
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li className="text-gray-300">Chapter 9</li>
          </ol>
        </nav>
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Chapter complete — Evaluate the Argument
        </h1>
        <p className="mt-1 text-gray-300">
          You’ve reached the end of this chapter. Review the lesson list or continue to the next task in your plan.
        </p>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-5" id="chapter-content">
        <div className="md:col-span-3 space-y-6">
          <QuoteCard />

          <section aria-labelledby="progress-title" className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <h2 id="progress-title" className="text-lg font-semibold text-gray-100">
              Chapter progress
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Chapter 9: Evaluate the Argument
            </p>
            <ProgressBar value={progress} />
          </section>

          <section aria-labelledby="lessons-title" className="rounded-xl border border-gray-800 bg-gray-900">
            <div className="border-b border-gray-800 p-5">
              <h2 id="lessons-title" className="text-lg font-semibold text-gray-100">
                Lessons in this chapter
              </h2>
            </div>
            <ul className="divide-y divide-gray-800">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="p-2">
                  <LessonItem lesson={lesson} />
                </div>
              ))}
            </ul>
          </section>
        </div>

        <aside className="md:col-span-2">
          <section
            aria-labelledby="cta-title"
            className="flex h-full flex-col justify-between rounded-xl border border-gray-800 bg-gray-900 p-6"
          >
            <div>
              <h2 id="cta-title" className="text-center text-lg font-semibold text-gray-100 md:text-left">
                Keep your momentum going
              </h2>
              <p className="mt-2 text-center text-sm text-gray-300 md:text-left">
                Head to your study plan to start the next activity.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start">
              <Link
                href="/study-plan"
                className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Go to Study Plan"
              >
                Go to Study Plan
              </Link>
            </div>

            <div className="mt-8 hidden w-full justify-center md:flex">
              <Image
                src="/illustrations/chapter-complete.svg"
                alt="Chapter complete illustration"
                width={420}
                height={220}
                className="h-auto w-full max-w-sm opacity-90"
                priority={false}
              />
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}