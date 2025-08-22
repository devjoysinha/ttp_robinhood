import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "End of Chapter • GMAT Reading Comprehension — Chapter 1",
  description:
    "You’ve completed Chapter 1 of GMAT Reading Comprehension. Review your progress, revisit any lesson, and move on to the next item in your study plan.",
};

type Lesson = {
  id: number;
  number: string;
  title: string;
  href: string;
  completed?: boolean;
};

const lessons: Lesson[] = [
  { id: 1672, number: "1.1", title: "Welcome and Overview", href: "/lesson/1672", completed: true },
  { id: 1673, number: "1.2", title: "Building a Powerful RC Mindset", href: "/lesson/1673", completed: true },
  { id: 1674, number: "1.3", title: "What the GMAT RC Section Measures", href: "/lesson/1674", completed: true },
  { id: 1675, number: "1.4", title: "RC vs. Casual Reading", href: "/lesson/1675", completed: true },
  { id: 1676, number: "1.5", title: "How Many RC Questions Appear?", href: "/lesson/1676", completed: true },
  { id: 1677, number: "1.6", title: "Short vs. Long Passages", href: "/lesson/1677", completed: true },
  { id: 1678, number: "1.7", title: "How Questions Appear (One at a Time)", href: "/lesson/1678", completed: true },
  { id: 1679, number: "1.8", title: "Pacing Plan for RC", href: "/lesson/1679", completed: true },
  { id: 1680, number: "1.9", title: "The Ten Core RC Question Types", href: "/lesson/1680", completed: true },
  { id: 1681, number: "1.10", title: "Typical RC Passage Topics", href: "/lesson/1681", completed: true },
  { id: 1682, number: "1.11", title: "A Key Habit of RC Experts", href: "/lesson/1682", completed: true },
  { id: 1683, number: "1.12", title: "High‑quality Reading for Extra Practice", href: "/lesson/1683", completed: true },
  { id: 1684, number: "1.13", title: "Getting the Most from This Course", href: "/lesson/1684", completed: true },
];

const totalLessons = lessons.length;
const completedLessons = lessons.filter((l) => l.completed).length;
const progress = Math.round((completedLessons / totalLessons) * 100);

function renderKatex(expr: string) {
  return {
    __html: katex.renderToString(expr, {
      throwOnError: false,
      output: "html",
      strict: "ignore",
      displayMode: false,
    }),
  };
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className ?? "h-5 w-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function ProgressBar() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-gray-300">
        <p className="font-medium">
          <span className="hidden sm:inline">Chapter</span> Progress: {progress}%
        </p>
        <p className="text-gray-400">
          {completedLessons} / {totalLessons} Lessons Read
        </p>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full bg-blue-500 transition-[width] duration-500"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-label="Chapter completion progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        />
      </div>
    </div>
  );
}

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <li className="list-none">
      <div className="rounded-md transition hover:bg-gray-800">
        <div className="relative flex items-center gap-3 px-3 py-3">
          {lesson.completed ? (
            <span className="text-green-400" aria-hidden="true" title="Completed">
              <CheckIcon />
            </span>
          ) : (
            <span className="h-5 w-5 rounded-full border border-gray-600" aria-hidden="true" />
          )}
          <Link
            className="flex-1"
            href={lesson.href}
            aria-label={`Open lesson ${lesson.number}: ${lesson.title}`}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-gray-400">{lesson.number}</span>
              <span className="text-gray-200">{lesson.title}</span>
            </div>
          </Link>
        </div>
      </div>
      <hr className="border-gray-800" />
    </li>
  );
}

export default function Page() {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#end-of-chapter"
        className="sr-only focus:not-sr-only focus:rounded focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Study Plan</span>
          </Link>
        </nav>

        <h1 className="text-2xl font-bold text-white md:text-3xl">
          GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          Chapter 1 • End of Chapter
        </h2>

        <div className="mt-4">
          <ProgressBar />
        </div>
      </header>

      <section
        id="end-of-chapter"
        aria-labelledby="eoc-heading"
        className="grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 ring-1 ring-gray-700">
            <h3 id="eoc-heading" className="text-xl font-semibold text-white">
              Fantastic effort—you’ve wrapped up this chapter.
            </h3>
            <p className="mt-2 text-gray-300">
              Keep your momentum going. You can revisit any lesson below or jump straight to the next step in your plan.
            </p>
          </div>

          <div className="rounded-lg bg-gray-900/60 ring-1 ring-gray-800">
            <div className="border-b border-gray-800 px-4 py-3">
              <h4 className="text-base font-semibold text-gray-100">
                Chapter 1: Reading Comprehension — Lesson List
              </h4>
            </div>
            <ul className="p-0">
              {lessons.map((lesson) => (
                <LessonItem key={lesson.id} lesson={lesson} />
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <figure className="relative overflow-hidden rounded-lg bg-gray-900/60 p-6 ring-1 ring-gray-800">
            <blockquote className="text-lg text-gray-200">
              Push through the toughest stretches—the way out is forward.
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-400">
              Keep going—you’re closer than you think.
            </figcaption>
            <div className="pointer-events-none absolute -right-8 -top-8 opacity-20">
              <Image
                src="/images/pattern-grid.svg"
                width={220}
                height={220}
                alt=""
                aria-hidden="true"
                priority
              />
            </div>
          </figure>

          <div className="rounded-lg bg-gray-900/60 p-6 ring-1 ring-gray-800">
            <h5 className="text-base font-semibold text-white">
              Next up in your Study Plan
            </h5>
            <p className="mt-2 text-gray-300">
              Ready for the next task? Continue to your personalized study flow.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>

          <MustKnow>
            <div className="space-y-2">
              <p className="font-medium text-gray-100">
                How we computed your chapter progress
              </p>
              <p className="text-gray-200">
                Progress is simply the percentage of lessons you’ve completed out of the total in the chapter:
              </p>
              <p
                className="text-gray-100"
                aria-label={`P equals completed divided by total, times 100 percent`}
                dangerouslySetInnerHTML={renderKatex(String.raw`P = \frac{\text{completed}}{\text{total}} \times 100\%`)}
              />
              <p className="text-sm text-gray-300">
                For this chapter, that’s {completedLessons} out of {totalLessons}, which gives {progress}%.
              </p>
            </div>
          </MustKnow>
        </aside>
      </section>
    </main>
  );
}