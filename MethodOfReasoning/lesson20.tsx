import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "End of Chapter • Chapter 12: Method of Reasoning and Boldface | GMAT Verbal",
  description:
    "You’ve finished Chapter 12. Review your progress, skim the lesson list, and jump back to your Study Plan to keep going.",
};

type Subtopic = {
  id: number;
  title: string;
  href: string;
  status: "completed" | "incomplete";
};

type Topic = {
  number: string;
  title: string;
  href?: string;
  status: "completed" | "incomplete";
  subtopics?: Subtopic[];
};

const topics: Topic[] = [
  {
    number: "12.1",
    title: "Introduction",
    href: "/lesson/1000",
    status: "completed",
    subtopics: [
      {
        id: 1001,
        title: "Every part of the correct answer must truly be correct",
        href: "/lesson/1001",
        status: "incomplete",
      },
      {
        id: 1002,
        title: "Common question stems for method‑of‑reasoning items",
        href: "/lesson/1002",
        status: "incomplete",
      },
    ],
  },
  {
    number: "12.2",
    title: "Two‑speaker method‑of‑reasoning questions",
    href: "/lesson/1003",
    status: "incomplete",
    subtopics: [
      {
        id: 1004,
        title:
          "How the speakers’ verbs can guide you to the right choice",
        href: "/lesson/1004",
        status: "incomplete",
      },
    ],
  },
  {
    number: "12.3",
    title: "A strategy for tackling method‑of‑reasoning problems",
    href: "/lesson/1005",
    status: "incomplete",
  },
  {
    number: "12.4",
    title: "Boldface method‑of‑reasoning questions",
    href: "/lesson/1011",
    status: "incomplete",
    subtopics: [
      {
        id: 1012,
        title: "Typical boldface question stems",
        href: "/lesson/1012",
        status: "completed",
      },
      {
        id: 1013,
        title:
          "Find the conclusions to answer boldface questions efficiently",
        href: "/lesson/1013",
        status: "incomplete",
      },
      {
        id: 1014,
        title:
          "Answer choices in boldface questions often contain strong clues",
        href: "/lesson/1014",
        status: "incomplete",
      },
    ],
  },
  {
    number: "12.5",
    title: "Wrong‑answer patterns in method‑of‑reasoning questions",
    href: "/lesson/1006",
    status: "completed",
    subtopics: [
      {
        id: 1007,
        title: "Answers that introduce new elements",
        href: "/lesson/1007",
        status: "incomplete",
      },
      {
        id: 1008,
        title: "Answers that are only partly correct",
        href: "/lesson/1008",
        status: "incomplete",
      },
      {
        id: 1009,
        title:
          "Answers describing techniques the argument could use but doesn’t",
        href: "/lesson/1009",
        status: "incomplete",
      },
      {
        id: 1010,
        title:
          "Answers that resemble the argument’s method but don’t match it",
        href: "/lesson/1010",
        status: "incomplete",
      },
      {
        id: 1015,
        title:
          "Common boldface traps that make answer choices tricky",
        href: "/lesson/1015",
        status: "completed",
      },
      {
        id: 1016,
        title: "Conclusions that are easy to miss",
        href: "/lesson/1016",
        status: "incomplete",
      },
      {
        id: 1017,
        title:
          "Bolded text can be phrased or placed to mimic other roles",
        href: "/lesson/1017",
        status: "incomplete",
      },
      {
        id: 1018,
        title:
          "Passages often include multiple conclusions with support",
        href: "/lesson/1018",
        status: "incomplete",
      },
      {
        id: 1019,
        title:
          "Wrong choices that sound partly right or closely related",
        href: "/lesson/1019",
        status: "incomplete",
      },
    ],
  },
];

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-3h-2v-5h2v5z" />
    </svg>
  );
}

function ProgressBar({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) {
  const pct = Math.round((completed / total) * 100);
  return (
    <section aria-label="Chapter progress" className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-300">
          Chapter progress: <span className="font-semibold text-white">{pct}%</span>
        </p>
        <p className="text-sm text-gray-400">
          {completed} / {total} lessons completed
        </p>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded bg-zinc-800">
        <div
          className="h-full rounded bg-emerald-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progress"
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Progress p = completed ÷ total = {completed}/{total} = {completed === total ? "1 → 100%" : `${pct}%`}
      </p>
    </section>
  );
}

function QuoteCard() {
  return (
    <section
      aria-label="Encouragement"
      className="relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-900/20 p-6"
    >
      <p className="text-2xl font-bold text-white">Nice work! You’ve finished this chapter.</p>
      <blockquote className="mt-4">
        <p className="text-gray-300">
          Move at any pace—just don’t stop.
        </p>
        <footer className="mt-2 text-sm text-gray-400">— attributed to Confucius</footer>
      </blockquote>
    </section>
  );
}

function TopicItem({ topic }: { topic: Topic }) {
  return (
    <li className="list-none">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40">
        <div className="flex items-start gap-3 p-4">
          {topic.status === "completed" ? (
            <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" aria-label="Completed" />
          ) : (
            <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" aria-label="Not completed" />
          )}
          <div className="min-w-0 flex-1">
            {topic.href ? (
              <Link
                href={topic.href}
                className="block text-base font-semibold text-white hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <span className="text-gray-300">{topic.number}</span>
                <span className="ml-2">{topic.title}</span>
              </Link>
            ) : (
              <p className="text-base font-semibold text-white">
                <span className="text-gray-300">{topic.number}</span>
                <span className="ml-2">{topic.title}</span>
              </p>
            )}
          </div>
        </div>

        {topic.subtopics?.length ? (
          <ul className="divide-y divide-zinc-800 border-t border-zinc-800">
            {topic.subtopics.map((s) => (
              <li key={s.id} className="list-none">
                <div className="flex items-start gap-3 p-4 pl-12">
                  {s.status === "completed" ? (
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" aria-label="Completed" />
                  ) : (
                    <AlertIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" aria-label="Not completed" />
                  )}
                  <Link
                    href={s.href}
                    className="flex-1 text-sm text-gray-200 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  >
                    {s.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

export default function Page() {
  const totalLessons = 20;
  const completedLessons = 20;

  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white md:text-3xl">End of Chapter</h1>
          <h2 className="mt-1 text-lg font-semibold text-gray-200">
            Chapter 12: Method of Reasoning and Boldface
          </h2>
        </div>
        <Link
          href="/study_plan"
          className="inline-flex items-center rounded-md border border-emerald-600 bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Back to Study Plan
        </Link>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-5" id="content">
        <div className="lg:col-span-3">
          <QuoteCard />
        </div>
        <div className="lg:col-span-2">
          <ProgressBar completed={completedLessons} total={totalLessons} />
          <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
            <h3 className="text-base font-semibold text-white">
              Keep the momentum going
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              Head to your Study Plan to begin the next task.
            </p>
            <div className="mt-3">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm font-medium text-gray-100 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 md:w-auto"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <article aria-labelledby="lesson-list-heading" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 id="lesson-list-heading" className="text-xl font-semibold text-white">
            Chapter 12 lessons
          </h3>
          <ul className="mt-4 space-y-4">
            {topics.map((t) => (
              <Fragment key={t.number}>
                <TopicItem topic={t} />
              </Fragment>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
              <h4 className="text-base font-semibold text-white">What’s next?</h4>
              <p className="mt-2 text-sm text-gray-300">
                You’re set with this chapter. Review any unfinished sub‑topics or jump to the next item on your plan.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-400">
                <li>Skim the lesson list for any items marked “not completed.”</li>
                <li>Retake relevant drills if needed.</li>
                <li>Continue with your Study Plan.</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/study_plan"
                  className="inline-flex w-full items-center justify-center rounded-md border border-emerald-600 bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}