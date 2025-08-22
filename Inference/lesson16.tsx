Here’s a production-ready Next.js page that recreates your “End of Chapter” experience using Tailwind CSS, is responsive and accessible, and includes KaTeX for math rendering where appropriate. All text has been rephrased to avoid copyright concerns while preserving meaning.

You can place this file at app/inference/chapter-7/end/page.tsx (or any route you prefer).

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "End of Chapter • Inference | Reading",
  description:
    "You’ve wrapped up the Inference chapter. Review your progress, revisit lessons, and move ahead to your Study Plan.",
};

type Lesson = {
  number: string;
  title: string;
  href: string;
  completed?: boolean;
  children?: Lesson[];
};

const lessons: Lesson[] = [
  { number: "7.1", title: "Intro to inference problems", href: "/lesson/inference/intro", completed: false },
  { number: "7.2", title: "How to identify inference prompts", href: "/lesson/inference/identify", completed: true },
  { number: "7.3", title: "Core habits for accurate inference answers", href: "/lesson/inference/guidelines", completed: false },
  { number: "7.4", title: "A practical plan for tackling inference items", href: "/lesson/inference/strategy", completed: false },
  {
    number: "7.5",
    title: "What correct inference answers look like",
    href: "/lesson/inference/correct-answers",
    completed: true,
    children: [
      { number: "7.5.1", title: "Conclusions supported by the whole passage", href: "/lesson/inference/correct-answers/whole-passage", completed: true },
      { number: "7.5.2", title: "Claims backed by brief excerpts", href: "/lesson/inference/correct-answers/snippets", completed: true },
      { number: "7.5.3", title: "Takeaways built from quantitative details across the text", href: "/lesson/inference/correct-answers/quantitative", completed: true },
      { number: "7.5.4", title: "Takeaways grounded in limited math within the text", href: "/lesson/inference/correct-answers/local-math", completed: true },
    ],
  },
  {
    number: "7.6",
    title: "Frequent trap patterns in inference answers",
    href: "/lesson/inference/traps",
    completed: true,
    children: [
      { number: "7.6.1", title: "Choices that could be true or sound reasonable", href: "/lesson/inference/traps/could-be-true", completed: true },
      { number: "7.6.2", title: "Choices that twist or misstate passage info", href: "/lesson/inference/traps/distortions", completed: true },
      { number: "7.6.3", title: "Choices that overreach the evidence", href: "/lesson/inference/traps/overreach", completed: true },
      { number: "7.6.4", title: "Choices that seem supported but rely on outside assumptions", href: "/lesson/inference/traps/hidden-assumptions", completed: true },
      { number: "7.6.5", title: "Choices true in real life but not supported by the text", href: "/lesson/inference/traps/real-world", completed: true },
    ],
  },
  { number: "7.7", title: "Inference questions with “EXCEPT” phrasing", href: "/lesson/inference/except", completed: false },
];

function renderKaTeX(expr: string, displayMode = false, srLabel?: string) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode,
    strict: "ignore",
    trust: true,
  });
  return { __html: html, sr: srLabel || "" };
}

function ProgressBar({ value, label }: { value: number; label?: string }) {
  const percentage = Math.max(0, Math.min(100, value));
  return (
    <div aria-label={label || "Progress"} className="w-full">
      <div className="flex items-center justify-between text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <span className="sr-only">Completion:</span>
          <span className="text-gray-300">Chapter Progress:</span>
          <span className="inline-flex items-center">
            <span
              aria-hidden="true"
              dangerouslySetInnerHTML={renderKaTeX(`${percentage}\\%`, false, `${percentage} percent`)}
            />
            <span className="sr-only">{percentage}%</span>
          </span>
        </div>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-gray-800">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          className="h-2 rounded-full bg-blue-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function LessonItem({ lesson, depth = 0 }: { lesson: Lesson; depth?: number }) {
  const stateColor = lesson.completed ? "text-emerald-400" : "text-amber-400";
  const stateDot = lesson.completed ? "bg-emerald-500" : "bg-amber-500";

  return (
    <li className={depth === 0 ? "py-2" : "py-1"}>
      <div className="flex items-start gap-3">
        <span className={`mt-1 h-2.5 w-2.5 rounded-full ${stateDot}`} aria-hidden="true" />
        <div className="flex-1">
          <Link
            href={lesson.href}
            className="group inline-flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span className="shrink-0 text-xs tabular-nums text-gray-400">{lesson.number}</span>
            <span className="text-gray-200 underline-offset-4 group-hover:underline">{lesson.title}</span>
            <span className={`text-xs ${stateColor} ml-2`}>{lesson.completed ? "Done" : "In progress"}</span>
          </Link>
          {lesson.children && lesson.children.length > 0 && (
            <ul className="mt-2 border-l border-gray-800 pl-4">
              {lesson.children.map((child) => (
                <LessonItem key={child.number} lesson={child} depth={depth + 1} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Page() {
  const totalLessons = 16;
  const readLessons = 16;
  const progress = 100;

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#chapter-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Study Plan</span>
          </Link>
        </nav>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">Reading</h1>
            <h2 className="mt-1 text-lg font-semibold text-gray-200">Chapter 7: Inference</h2>
          </div>
          <div className="text-sm text-gray-400">
            <span className="sr-only">Lessons completed:</span>
            {readLessons} / {totalLessons} Lessons Read
          </div>
        </div>

        <ProgressBar value={progress} label="Chapter progress" />
      </header>

      <section
        id="celebration"
        aria-labelledby="celebration-title"
        className="relative mb-10 overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6"
      >
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <Image
            priority
            src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/end_chapter/grid-c4475fa85084c71f3448c6b72710061363bb9f13a4a65ea34197143390f14f55.svg"
            alt=""
            role="presentation"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative grid gap-6 lg:grid-cols-2">
          <div>
            <h3 id="celebration-title" className="text-2xl font-semibold text-white">
              Nicely done — you’ve reached the end of this chapter.
            </h3>
          </div>
          <figure className="relative">
            <blockquote className="text-gray-300">
              Progress is built on persistence: each attempt teaches you something new.
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-500">Keep going — the next step is up to you.</figcaption>
          </figure>
        </div>
      </section>

      <section id="chapter-content" aria-labelledby="chapter-content-title" className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 id="chapter-content-title" className="mb-4 text-xl font-semibold text-white">
            Chapter 7: Inference — Lesson List
          </h3>

          <div className="rounded-lg border border-gray-800 bg-gray-950">
            <ul className="divide-y divide-gray-800 p-4">
              {lessons.map((lesson) => (
                <LessonItem key={lesson.number} lesson={lesson} />
              ))}
            </ul>
          </div>
        </div>

        <aside aria-label="Next action" className="space-y-4">
          <div className="rounded-lg border border-gray-800 bg-gray-950 p-5">
            <h4 className="text-lg font-semibold text-white">
              Ready for what’s next?
            </h4>
            <p className="mt-2 text-gray-300">
              Continue with your personalized Study Plan to keep your momentum.
            </p>
            <div className="mt-4">
              <Image
                src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/end_chapter/chapter_end-49d3db92b1909a22dd2cf9baad6d972f766da800977d81e656f3f1370e927c09.svg"
                alt="Illustration representing moving to the next step in your study plan"
                width={800}
                height={400}
                className="hidden w-full lg:block"
              />
            </div>
            <div className="mt-5">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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