import type { Metadata } from "next";
import Link from "next/link";
import "katex/dist/katex.min.css";
import katex from "katex";

// Server component: KaTeX renderers
function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
    trust: false,
    output: "html",
  });
  return (
    <div
      className="overflow-x-auto"
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Client component: CTA + accessible modal
"use client";
import { useRef, useEffect } from "react";

function CTAWithModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  // Close on Escape to reinforce a11y
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
      <h3 className="text-lg font-semibold text-white">
        Keep the momentum going
      </h3>
      <p className="mt-2 text-gray-300">
        Jump to your personalized Study Plan to continue where you left off.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={openDialog}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          Go to Study Plan
        </button>
        <Link
          href="/study_plan"
          className="inline-flex items-center justify-center rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          Back to Study Plan
        </Link>
      </div>

      <dialog
        ref={dialogRef}
        className="rounded-lg border border-gray-700 bg-gray-900 text-gray-200 backdrop:bg-black/60 max-w-lg w-[90%]"
        aria-labelledby="examples-modal-title"
        aria-modal="true"
      >
        <div className="p-4 sm:p-6">
          <h4
            id="examples-modal-title"
            className="text-base sm:text-lg font-semibold text-white"
          >
            A quick heads‑up
          </h4>
          <p className="mt-3 text-gray-300">
            It looks like a few chapter examples still need your attention.
            For the best results, wrap up the remaining examples before moving
            ahead. Once you finish, we’ll unlock a short reinforcement quiz to
            cement your skills from Overlapping Sets.
          </p>
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={closeDialog}
              className="inline-flex items-center justify-center rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Stay on this page
            </button>
            <Link
              href="/study_plan"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Return to Study Plan
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}

// Server components and data below

type Status = "complete" | "examples-missing";

type SubTopic = {
  title: string;
  href?: string;
  status: Status;
};

type Topic = {
  section: string; // e.g., "13.1"
  title: string;
  href?: string;
  status: Status;
  subtopics?: SubTopic[];
};

const topics: Topic[] = [
  {
    section: "13.1",
    title: "Overview",
    href: "/lesson/2237",
    status: "complete",
  },
  {
    section: "13.2",
    title: "Structure of the Set Matrix",
    href: "/lesson/2238",
    status: "examples-missing",
    subtopics: [
      {
        title: "Percentages in Overlap Problems",
        href: "/lesson/2239",
        status: "examples-missing",
      },
      {
        title: "Fractions in Overlap Problems",
        href: "/lesson/2240",
        status: "examples-missing",
      },
      {
        title: "Percents and Fractions with Arbitrary Totals",
        href: "/lesson/2241",
        status: "examples-missing",
      },
      {
        title: "Blending Algebra with Overlapping Sets",
        href: "/lesson/2242",
        status: "examples-missing",
      },
      {
        title: "Sums of Cells in a Set Matrix",
        href: "/lesson/2243",
        status: "examples-missing",
      },
      {
        title: "Counting Members in the Union",
        href: "/lesson/2244",
        status: "examples-missing",
      },
      {
        title: "Max/Min Scenarios within Sets",
        href: "/lesson/2245",
        status: "examples-missing",
      },
      {
        title: "Translating Data into a Set‑Matrix",
        href: "/lesson/2340",
        status: "examples-missing",
      },
    ],
  },
  {
    section: "13.3",
    title: "Triple‑Set Overlaps",
    href: "/lesson/2246",
    status: "complete",
    subtopics: [
      {
        title: "3‑Circle Venns with Region Counts Given",
        href: "/lesson/2248",
        status: "examples-missing",
      },
      {
        title: "3‑Circle Venns with X‑only and Y‑only Unknown",
        href: "/lesson/2249",
        status: "examples-missing",
      },
    ],
  },
];

function StatusIcon({ status }: { status: Status }) {
  return status === "complete" ? (
    <span
      aria-label="Completed"
      title="Completed"
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white"
    >
      ✓
    </span>
  ) : (
    <span
      aria-label="Examples pending"
      title="Examples pending"
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-white"
    >
      !
    </span>
  );
}

function TopicItem({ topic }: { topic: Topic }) {
  return (
    <li className="border-b border-gray-800 py-4 last:border-0">
      <div className="flex items-start gap-3">
        <StatusIcon status={topic.status} />
        <div className="flex-1">
          {topic.href ? (
            <Link
              href={topic.href}
              className="group inline-flex flex-wrap items-baseline gap-2"
            >
              <span className="text-sm font-medium text-gray-400">
                {topic.section}
              </span>
              <span className="text-base font-semibold text-white group-hover:underline">
                {topic.title}
              </span>
            </Link>
          ) : (
            <div className="inline-flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-medium text-gray-400">
                {topic.section}
              </span>
              <span className="text-base font-semibold text-white">
                {topic.title}
              </span>
            </div>
          )}

          {topic.subtopics && topic.subtopics.length > 0 && (
            <ul className="mt-3 space-y-2">
              {topic.subtopics.map((st, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1">
                    <StatusIcon status={st.status} />
                  </span>
                  {st.href ? (
                    <Link
                      href={st.href}
                      className="text-sm text-gray-300 hover:underline"
                    >
                      {st.title}
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-300">{st.title}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export const metadata: Metadata = {
  title: "End of Chapter | Overlapping Sets",
  description:
    "You’ve completed the chapter on Overlapping Sets. Review your progress, revisit topics, and continue to your Study Plan. Includes a formula recap rendered with KaTeX.",
};

export default function Page() {
  const totalLessons = 13;
  const readLessons = 13;
  const progress = Math.round((readLessons / totalLessons) * 100);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Overlapping Sets
          </h1>
          <div className="text-sm text-gray-400">
            Chapter Progress:{" "}
            <span className="font-semibold text-gray-200">{progress}%</span> •{" "}
            <span className="text-gray-300">{readLessons}</span> /{" "}
            <span className="text-gray-300">{totalLessons}</span> lessons read
          </div>
        </div>

        <div
          className="mt-3 h-2 w-full overflow-hidden rounded bg-gray-800"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Chapter completion"
        >
          <div
            className="h-full bg-emerald-500 transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <section className="mb-8 rounded-lg border border-gray-800 bg-gray-900/40 p-6">
        <h2 className="text-xl font-semibold text-white">
          Nicely done — you reached the finish line!
        </h2>
        <p className="mt-2 text-gray-300">
          Mastery grows with consistent, focused practice. Keep building on what
          you learned to make these ideas second nature.
        </p>
        <figure className="mt-4 border-l-4 border-blue-500 pl-4">
          <blockquote className="text-gray-200">
            The edge of a warrior isn’t extraordinary talent, but everyday
            discipline and unwavering focus.
          </blockquote>
          <figcaption className="mt-2 text-sm text-gray-400">
            — inspired by Bruce Lee
          </figcaption>
        </figure>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">
              Chapter 13: Overlapping Sets
            </h3>
            <span className="text-sm text-gray-400">Topics and subtopics</span>
          </div>

          <ul className="divide-y divide-gray-800 rounded-lg border border-gray-800 bg-gray-900/40">
            {topics.map((t) => (
              <TopicItem key={t.section} topic={t} />
            ))}
          </ul>

          <section className="mt-8 rounded-lg border border-gray-800 bg-gray-900/40 p-6">
            <h4 className="text-base font-semibold text-white">
              Formula recap
            </h4>
            <p className="mt-2 text-gray-300">
              The inclusion–exclusion principle underpins most overlap problems:
            </p>
            <div className="mt-4">
              <MathBlock
                ariaLabel="Two-set inclusion–exclusion formula"
                expr="|A \cup B| = |A| + |B| - |A \cap B|"
              />
            </div>
            <div className="mt-4">
              <MathBlock
                ariaLabel="Three-set inclusion–exclusion formula"
                expr="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Tip: Translate every word problem into counts for each distinct
              region. Once the regions are clear, the arithmetic follows.
            </p>
          </section>
        </article>

        <aside className="lg:col-span-1">
          <CTAWithModal />
        </aside>
      </div>
    </main>
  );
}