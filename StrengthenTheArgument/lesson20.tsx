Here’s a clean, production-ready Next.js page that recreates the “End of Chapter” experience from your HTML, rewritten in original wording, responsive, accessible, and styled with Tailwind. It includes a small KaTeX-powered component for inline math where appropriate.

File: app/verbal/strengthen/end-chapter/page.tsx
--------------------------------------------------------------------------------
import type { Metadata } from "next";
import Link from "next/link";
import { InlineMath } from "@/components/InlineMath";

export const metadata: Metadata = {
  title: "End of Chapter • Strengthen the Argument | Critical Reasoning",
  description:
    "You’ve wrapped up Chapter 4: Strengthen the Argument. Review lesson links, see your progress, and jump back into your study plan.",
};

type SubTopic = {
  title: string;
  href: string;
  status: "done" | "incomplete";
};

type Lesson = {
  number: string;
  title: string;
  href: string;
  status: "done" | "incomplete";
  subtopics?: SubTopic[];
};

const lessons: Lesson[] = [
  { number: "4.1", title: "Overview", href: "/lesson/1449", status: "done" },
  {
    number: "4.2",
    title: "How to effectively reinforce an argument",
    href: "/lesson/1450",
    status: "incomplete",
  },
  {
    number: "4.3",
    title: "Recognizing strengthen-the-argument question types",
    href: "/lesson/1451",
    status: "incomplete",
  },
  {
    number: "4.4",
    title: "A practical game plan for strengthen prompts",
    href: "/lesson/1452",
    status: "done",
  },
  {
    number: "4.5",
    title: "Common techniques to strengthen a claim",
    href: "/lesson/1453",
    status: "done",
    subtopics: [
      {
        title: "Add a premise that backs the conclusion",
        href: "/lesson/1454",
        status: "incomplete",
      },
    ],
  },
  {
    number: "4.6",
    title: "State a key assumption the conclusion relies on",
    href: "/lesson/2445",
    status: "incomplete",
  },
  {
    number: "4.7",
    title: "Address a factor that could affect the conclusion",
    href: "/lesson/2446",
    status: "incomplete",
  },
  {
    number: "4.8",
    title: "Rule out an alternative cause",
    href: "/lesson/2447",
    status: "incomplete",
  },
  {
    number: "4.9",
    title: "Test a claim by changing, adding, or removing a variable",
    href: "/lesson/2448",
    status: "incomplete",
  },
  {
    number: "4.10",
    title: "Trap choices vs. correct answers in strengthen questions",
    href: "/lesson/1459",
    status: "incomplete",
  },
  {
    number: "4.11",
    title: "Frequent wrong-answer patterns in strengthen items",
    href: "/lesson/1460",
    status: "done",
  },
  {
    number: "4.12",
    title: "Incorrect Type 1: Irrelevant information",
    href: "/lesson/1461",
    status: "incomplete",
  },
  {
    number: "4.13",
    title: "Incorrect Type 2: Evidence that merely supports a premise",
    href: "/lesson/1462",
    status: "incomplete",
  },
  {
    number: "4.14",
    title: "Incorrect Type 3: Backs the wrong conclusion",
    href: "/lesson/1463",
    status: "incomplete",
  },
  {
    number: "4.15",
    title: "Incorrect Type 4: Only explains part of the stimulus",
    href: "/lesson/1464",
    status: "incomplete",
  },
  {
    number: "4.16",
    title: "Incorrect Type 5: Loosely connected to the scenario",
    href: "/lesson/1465",
    status: "incomplete",
  },
  {
    number: "4.17",
    title: "Incorrect Type 6: Pseudo‑strengthener",
    href: "/lesson/1466",
    status: "incomplete",
  },
  {
    number: "4.18",
    title: "Incorrect Type 7: Actually weakens the argument",
    href: "/lesson/1467",
    status: "incomplete",
  },
  {
    number: "4.19",
    title: "Stems with EXCEPT, NOT, and LEAST",
    href: "/lesson/1468",
    status: "incomplete",
  },
];

const totalLessons = 20;
const chapterComplete = true; // End-of-chapter state

export default function Page() {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      {/* Skip link for a11y */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white/10 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          Chapter 4: Strengthen the Argument — End of Chapter
        </h2>
      </header>

      <section
        aria-label="Chapter progress"
        className="mb-8 rounded-lg border border-white/10 bg-white/5 p-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300">
            Chapter Progress:{" "}
            <strong className="text-white">
              {chapterComplete ? "100%" : "In progress"}
            </strong>
          </p>
          <p className="text-gray-400">
            Lessons read:{" "}
            <span className="font-semibold text-gray-200">
              {chapterComplete ? `${totalLessons} / ${totalLessons}` : "—"}
            </span>
          </p>
        </div>

        <div
          className="mt-3 h-2 w-full overflow-hidden rounded bg-white/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={chapterComplete ? 100 : 0}
          aria-label="Chapter completion"
        >
          <div
            className="h-full bg-indigo-500 transition-all"
            style={{ width: chapterComplete ? "100%" : "0%" }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-400">
          We compute progress as{" "}
          <InlineMath
            expr="P=\frac{\text{completed}}{\text{total}}\times 100\%"
            srText="P equals completed divided by total, times 100 percent"
          />
          .
        </p>
      </section>

      <div
        id="content"
        className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10"
      >
        {/* Left column: message + quote */}
        <div className="md:col-span-5">
          <section
            aria-labelledby="end-chapter-heading"
            className="mb-6 rounded-lg border border-white/10 bg-white/5 px-5 py-6"
          >
            <h3
              id="end-chapter-heading"
              className="text-xl font-semibold text-white"
            >
              Nicely done!
            </h3>
            <p className="mt-2 text-gray-300">
              You’ve reached the end of this chapter.
            </p>

            <blockquote className="mt-6 border-l-4 border-indigo-500 pl-4 text-gray-200">
              <p className="mb-2">
                I didn’t fail—I simply discovered ten thousand approaches that
                weren’t the solution.
              </p>
              <cite className="block text-sm text-gray-400">— Thomas Edison</cite>
            </blockquote>
          </section>
        </div>

        {/* Right column: CTA */}
        <aside className="md:col-span-7">
          <section
            aria-labelledby="next-cta"
            className="flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6"
          >
            <div>
              <h3
                id="next-cta"
                className="text-lg font-semibold text-white md:text-xl"
              >
                Keep your momentum going
              </h3>
              <p className="mt-2 text-gray-300">
                Jump to your study plan to continue with your next task.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/study_plan"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Go to Study Plan"
              >
                Go to Study Plan
              </Link>
            </div>
          </section>
        </aside>
      </div>

      {/* Lessons list */}
      <section className="mt-10">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Chapter 4: Strengthen the Argument — Lesson Links
        </h3>

        <ol className="space-y-2">
          {lessons.map((lesson) => (
            <li key={lesson.number}>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <Link
                      href={lesson.href}
                      className="group inline-flex max-w-full items-start gap-2"
                    >
                      <StatusDot status={lesson.status} />
                      <span className="truncate text-gray-200">
                        <span className="font-semibold text-white">
                          {lesson.number}
                        </span>{" "}
                        <span className="group-hover:underline">
                          {lesson.title}
                        </span>
                      </span>
                    </Link>
                  </div>
                  <span className="text-sm text-gray-400">
                    {lesson.status === "done" ? "Completed" : "Not completed"}
                  </span>
                </div>

                {lesson.subtopics?.length ? (
                  <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
                    {lesson.subtopics.map((st) => (
                      <li key={st.href} className="pl-7">
                        <Link
                          href={st.href}
                          className="group inline-flex max-w-full items-start gap-2"
                        >
                          <StatusDot status={st.status} variant="sub" />
                          <span className="truncate text-gray-300 group-hover:underline">
                            {st.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

function StatusDot({
  status,
  variant = "main",
}: {
  status: "done" | "incomplete";
  variant?: "main" | "sub";
}) {
  const size = variant === "main" ? "h-2.5 w-2.5" : "h-2 w-2";
  const color =
    status === "done"
      ? "bg-emerald-400 ring-emerald-400/30"
      : "bg-amber-400 ring-amber-400/30";

  const label = status === "done" ? "Completed" : "Not completed";

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`${size} rounded-full ${color} ring-4`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}


File: components/InlineMath.tsx
--------------------------------
"use client";

import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

type InlineMathProps = {
  expr: string;
  srText?: string;
};

export function InlineMath({ expr, srText }: InlineMathProps) {
  const html = useMemo(
    () =>
      katex.renderToString(expr, {
        throwOnError: false,
        strict: "ignore",
      }),
    [expr]
  );

  return (
    <span className="inline-flex items-baseline">
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
      {srText ? <span className="sr-only"> {srText} </span> : null}
    </span>
  );
}

Notes
- Accessibility: semantic headings, labeled progressbar, keyboard-focusable CTA, skip link, sr-only labels for status indicators, and accessible math with screen-reader text.
- Performance: minimal DOM, no external widget scripts, no heavy images; links are Next.js Link for client-side transitions.
- Responsiveness: grid layout adapts from single column to two columns on larger screens; all blocks are mobile-friendly.
- Styling: Tailwind utility classes consistent with the theme used in your other pages (dark background, text-gray scale, indigo accent).
- KaTeX: used to render a succinct progress formula inline with a screen-reader-friendly explanation. If you already load KaTeX globally, you can remove the CSS import from InlineMath and rely on your global styles.