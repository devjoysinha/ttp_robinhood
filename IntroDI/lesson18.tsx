```tsx
// app/data-insights/end-of-chapter/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

type Lesson = {
  id: number;
  number: string;
  title: string;
  href: string;
  completed?: boolean;
};

const lessons: Lesson[] = [
  { id: 1868, number: "1.1", title: "Overview of Data Insights", href: "/lesson/1868", completed: true },
  { id: 1869, number: "1.2", title: "Why finish most Quant & Verbal before starting DI", href: "/lesson/1869", completed: true },
  { id: 1870, number: "1.3", title: "How the Data Insights section is scored", href: "/lesson/1870", completed: true },
  { id: 1871, number: "1.4", title: "DI is computer‑adaptive: what that means for you", href: "/lesson/1871", completed: true },
  { id: 1872, number: "1.5", title: "The five types of DI questions", href: "/lesson/1872", completed: true },
  { id: 1873, number: "1.6", title: "Using the on‑screen calculator", href: "/lesson/1873", completed: true },
  { id: 1874, number: "1.7", title: "Practice with the calculator before test day", href: "/lesson/1874", completed: true },
  { id: 1875, number: "1.8", title: "Not every DI problem requires calculation", href: "/lesson/1875", completed: true },
  { id: 1876, number: "1.9", title: "Lean on estimation whenever possible", href: "/lesson/1876", completed: true },
  { id: 1877, number: "1.10", title: "Get comfortable with on‑screen interactions", href: "/lesson/1877", completed: true },
  { id: 1878, number: "1.11", title: "You can move within a question, not between questions", href: "/lesson/1878", completed: true },
  { id: 1879, number: "1.12", title: "Pacing and timing strategies for DI", href: "/lesson/1879", completed: true },
  { id: 1880, number: "1.13", title: "Build a smart guessing strategy", href: "/lesson/1880", completed: true },
  { id: 1881, number: "1.14", title: "No partial credit in DI—what it implies", href: "/lesson/1881", completed: true },
  { id: 1882, number: "1.15", title: "Filter out irrelevant information", href: "/lesson/1882", completed: true },
  { id: 1883, number: "1.16", title: "Use answer choices to your advantage", href: "/lesson/1883", completed: true },
  { id: 1884, number: "1.17", title: "Focus on details and key terms", href: "/lesson/1884", completed: true },
  { id: 1885, number: "1.18", title: "Use daily reading to sharpen DI skills", href: "/lesson/1885", completed: true },
];

const chapterTitle = "Chapter 1: Introduction to Data Insights";
const totalLessons = lessons.length;
const completedLessons = lessons.filter(l => l.completed).length;
const completionPct = Math.round((completedLessons / totalLessons) * 100);

export const metadata: Metadata = {
  title: "End of Chapter • Introduction to Data Insights",
  description:
    "You’ve completed all lessons in Chapter 1: Introduction to Data Insights. Review the lesson list or continue to your study plan.",
};

function ProgressBar() {
  return (
    <div aria-label="Chapter progress" className="w-full" role="region">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-300">
        <span>
          <span className="hidden sm:inline">Chapter</span> Progress: {completionPct}%
        </span>
        <span className="text-gray-400">
          {completedLessons} / {totalLessons} Lessons Completed
        </span>
      </div>
      <div
        aria-label="Progress"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={completionPct}
        className="h-2 w-full rounded-full bg-gray-700"
        role="progressbar"
      >
        <div
          className="h-2 rounded-full bg-indigo-500 transition-[width]"
          style={{ width: `${completionPct}%` }}
        />
      </div>
    </div>
  );
}

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <li className="list-none">
      <div className="group relative flex items-center justify-between rounded-md p-3 transition-colors hover:bg-gray-800/60 focus-within:bg-gray-800/60">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
              lesson.completed
                ? "border-emerald-400 text-emerald-300"
                : "border-gray-500 text-gray-400"
            }`}
            title={lesson.completed ? "Completed" : "Not completed"}
          >
            {lesson.completed ? "✓" : ""}
          </span>
          <Link
            className="block focus:outline-none"
            href={lesson.href}
            aria-label={`Open lesson ${lesson.number}: ${lesson.title}`}
          >
            <div className="text-gray-200">
              <span className="font-medium text-gray-300">{lesson.number}</span>
              <span className="ml-2 text-gray-200 group-hover:underline">
                {lesson.title}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <hr className="my-1 border-gray-800" />
    </li>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-gray-200" href="/study_plan">
                Study Plan
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">End of Chapter</li>
          </ol>
        </nav>

        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Great job—chapter complete!
        </h1>
        <p className="mt-1 text-lg font-medium text-gray-300">
          You’ve reached the end of this chapter.
        </p>
      </header>

      <section
        aria-labelledby="progress-heading"
        className="mb-8 rounded-xl border border-gray-800 bg-gray-900/50 p-5"
      >
        <h2 id="progress-heading" className="sr-only">
          Chapter progress
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">{chapterTitle}</p>
            <p className="mt-1 max-w-2xl text-gray-300">
              Review what you’ve covered or jump back into your personalized plan.
            </p>
          </div>
          <div className="w-full md:max-w-md">
            <ProgressBar />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="quote-heading"
        className="mb-10 grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
          <h2 id="quote-heading" className="sr-only">
            Motivation
          </h2>
          <figure>
            <blockquote className="text-xl leading-7 text-gray-200">
              “Success often comes down to two steps: decide what you truly want, then
              take action.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-400">
              — Inspired by Mario Cuomo
            </figcaption>
          </figure>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
          <h3 className="text-base font-semibold text-white">
            What’s next?
          </h3>
          <p className="mt-2 text-gray-300">
            Keep your momentum going. Head to your study plan to continue with the next
            recommended task.
          </p>
          <div className="mt-4">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              href="/study_plan"
              aria-label="Go to Study Plan"
            >
              Go to Study Plan
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="lessons-heading" className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 id="lessons-heading" className="mb-3 text-lg font-semibold text-white">
            Lessons in this chapter
          </h2>
          <ul className="rounded-xl border border-gray-800 bg-gray-900/40 p-2">
            {lessons.map(lesson => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-6 rounded-xl border border-gray-800 bg-gray-900/40 p-6">
            <h3 className="text-base font-semibold text-white">
              Continue your plan
            </h3>
            <p className="mt-2 text-gray-300">
              Your personalized plan adapts as you learn. Pick up right where you left off.
            </p>
            <div className="mt-4">
              <Link
                className="inline-flex w-full items-center justify-center rounded-md border border-indigo-400/40 bg-transparent px-4 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                href="/study_plan"
              >
                Open Study Plan
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Tip: You can revisit any lesson above to reinforce concepts before moving on.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
```