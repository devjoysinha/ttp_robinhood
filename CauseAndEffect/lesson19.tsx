import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "End of Chapter • Cause-and-Effect Arguments | GMAT Critical Reasoning",
  description:
    "You’ve completed Chapter 6: Cause-and-Effect Arguments. Review lesson statuses, jump to any topic, or continue to your study plan.",
};

type Status = "done" | "practice" | "todo";

type SubTopic = {
  title: string;
  href: string;
  status: Status;
};

type Topic = {
  index: string;
  title: string;
  href: string;
  status: Status;
  subTopics?: SubTopic[];
};

const chapterData = {
  number: 6,
  title: "Cause-and-Effect Arguments",
  progressPercent: 100,
  lessonsRead: 19,
  lessonsTotal: 19,
  topics: [
    {
      index: "6.1",
      title: "Overview",
      href: "/lesson/2454",
      status: "done",
    },
    {
      index: "6.2",
      title: "Core assumptions behind cause–effect claims",
      href: "/lesson/2449",
      status: "practice",
    },
    {
      index: "6.3",
      title: "Reasoning with cause and effect",
      href: "/lesson/1597",
      status: "done",
      subTopics: [
        {
          title: "Mistake 1: Assuming sequence implies cause",
          href: "/lesson/1598",
          status: "practice",
        },
        {
          title: "Mistake 2: Treating co‑occurrence as proof",
          href: "/lesson/1599",
          status: "practice",
        },
        {
          title: "Mistake 3: Correlation vs. causation",
          href: "/lesson/1600",
          status: "practice",
        },
      ],
    },
    {
      index: "6.4",
      title: "How to weaken cause–effect conclusions",
      href: "/lesson/1601",
      status: "done",
      subTopics: [
        {
          title: "Reverse the proposed direction",
          href: "/lesson/2450",
          status: "practice",
        },
        {
          title: "Present a plausible alternative cause",
          href: "/lesson/2451",
          status: "practice",
        },
        {
          title: "Introduce a third factor driving both",
          href: "/lesson/2452",
          status: "practice",
        },
        {
          title:
            "Show that the effect sometimes fails to appear when the cause occurs",
          href: "/lesson/1605",
          status: "practice",
        },
        {
          title:
            "Show that the effect can occur even without the proposed cause",
          href: "/lesson/1606",
          status: "practice",
        },
      ],
    },
    {
      index: "6.5",
      title: "How to strengthen cause–effect support",
      href: "/lesson/1607",
      status: "done",
      subTopics: [
        {
          title: "Rule out competing causes",
          href: "/lesson/1608",
          status: "practice",
        },
        {
          title: "Use well‑designed experiments",
          href: "/lesson/1609",
          status: "practice",
        },
        {
          title:
            "Show that when the cause is absent, the effect doesn’t occur",
          href: "/lesson/1610",
          status: "practice",
        },
        {
          title: "Demonstrate the relationship can’t be reversed",
          href: "/lesson/2453",
          status: "practice",
        },
      ],
    },
    {
      index: "6.6",
      title:
        "Cause–effect thinking in Resolve the Paradox question types",
      href: "/lesson/1612",
      status: "practice",
    },
    {
      index: "6.7",
      title:
        "Cause–effect logic across other Critical Reasoning question families",
      href: "/lesson/1613",
      status: "done",
    },
  ] as Topic[],
};

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    done: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
    practice: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30",
    todo: "bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30",
  };
  const labels: Record<Status, string> = {
    done: "Done",
    practice: "Practice pending",
    todo: "To do",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function TopicRow({
  topic,
  nested = false,
}: {
  topic: Topic | SubTopic;
  nested?: boolean;
}) {
  return (
    <li className={`list-none ${nested ? "pl-6" : ""}`}>
      <div className="group flex items-start justify-between gap-3 rounded-lg px-3 py-3 hover:bg-white/5 focus-within:bg-white/5">
        <div className="min-w-0">
          {"index" in topic && (
            <span className="mr-2 shrink-0 text-sm font-semibold text-gray-400">
              {topic.index}
            </span>
          )}
          <Link
            href={topic.href}
            className="inline-block max-w-full truncate text-gray-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            prefetch
          >
            {"title" in topic ? topic.title : ""}
          </Link>
        </div>
        {"status" in topic && <StatusBadge status={topic.status} />}
      </div>
    </li>
  );
}

function QuoteBlock() {
  return (
    <section
      aria-labelledby="end-quote"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h3 id="end-quote" className="sr-only">
        Closing inspiration
      </h3>
      <p className="mb-2 text-lg text-gray-200">
        There’s really no replacement for rolling up your sleeves and putting in
        the work.
      </p>
      <p className="text-sm text-gray-400">— attributed to Thomas Edison</p>
    </section>
  );
}

function ProgressHeader() {
  const pct = chapterData.progressPercent;
  return (
    <section aria-labelledby="progress" className="mb-8">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <h2
          id="progress"
          className="text-base font-semibold text-gray-200 sm:text-lg"
        >
          Chapter progress: {pct}%
        </h2>
        <p className="text-sm text-gray-400">
          {chapterData.lessonsRead} / {chapterData.lessonsTotal} lessons read
        </p>
      </div>
      <div
        className="mt-3 h-2 w-full rounded-full bg-white/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label="Chapter completion"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
          style={{ width: `${pct}%` }}
        />
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-sky-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/study_plan"
            className="inline-flex items-center text-sm font-medium text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            prefetch
            aria-label="Back to Study Plan"
          >
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4.0-4a1 1 0 010-1.414l4.0-4a1 1 0 011.414 1.414L5.414 9H18a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Study Plan
          </Link>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          Great job! You’ve finished this chapter.
        </h1>
        <p className="mt-2 text-gray-300">
          Chapter {chapterData.number}: {chapterData.title}
        </p>
      </header>

      <ProgressHeader />

      <section
        id="content"
        aria-label="End of chapter content"
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        <div className="space-y-6 lg:col-span-2">
          <QuoteBlock />

          <div className="rounded-2xl border border-white/10 bg-white/5">
            <div className="border-b border-white/10 p-4 sm:p-5">
              <h3 className="text-lg font-semibold text-white">
                Chapter outline
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Jump to any lesson to review or finish remaining practice.
              </p>
            </div>

            <ul className="divide-y divide-white/10">
              {chapterData.topics.map((t) => (
                <li key={t.index} className="px-2 py-1">
                  <TopicRow topic={t} />
                  {t.subTopics && t.subTopics.length > 0 && (
                    <ul className="mb-2 mt-1 space-y-1 pl-4">
                      {t.subTopics.map((s) => (
                        <TopicRow key={s.href} topic={s} nested />
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <section
            aria-labelledby="next-step"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 id="next-step" className="text-lg font-semibold text-white">
              Keep up the momentum
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Continue with the next item on your personalized study plan.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                prefetch
                className="inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                aria-label="Go to Study Plan"
              >
                Go to Study Plan
              </Link>
            </div>
          </section>

          <section
            aria-labelledby="tips"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 id="tips" className="text-base font-semibold text-white">
              Quick tip
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              For cause–effect arguments, test both directions and look for
              rival explanations. When a conclusion survives those checks, your
              confidence in causation grows.
            </p>
          </section>
        </aside>
      </section>
    </main>
  );
}