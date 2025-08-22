import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End of Chapter | Study Plan",
  description:
    "You’ve finished this chapter. Review your progress, revisit any topics, and move on to the next step in your study plan.",
};

type Subtopic = {
  title: string;
  href?: string;
  completed?: boolean;
  bookmarked?: boolean;
};

type Topic = {
  number: string;
  title: string;
  href?: string;
  completed?: boolean;
  subtopics?: Subtopic[];
};

const chapterData = {
  number: 8,
  title: "Find the Conclusion",
  lessonsRead: 11,
  lessonsTotal: 11,
  progress: 100,
  topics: [
    {
      number: "8.1",
      title: "Introduction",
      href: "/lesson/2455",
      completed: false,
      subtopics: [
        {
          title: "Pinpointing the Main Claim in an Argument",
          href: "/lesson/946",
          completed: true,
          bookmarked: false,
        },
      ],
    },
    {
      number: "8.2",
      title: "Recognizing Conclusion Questions",
      href: "/lesson/947",
      completed: false,
    },
    {
      number: "8.3",
      title: "A Five‑Step Approach to Conclusion Questions",
      href: "/lesson/948",
      completed: false,
      subtopics: [
        {
          title:
            "Don’t Confuse Conclusion Questions with Similar‑Sounding Types",
          href: "/lesson/949",
          completed: true,
          bookmarked: false,
        },
        {
          title:
            "Inference vs. Find‑the‑Conclusion: Understanding the Difference",
          href: "/lesson/2456",
          completed: true,
          bookmarked: false,
        },
      ],
    },
    {
      number: "8.4",
      title: "Common Wrong Answers in Conclusion Questions",
      href: "/lesson/951",
      completed: true,
      subtopics: [
        {
          title:
            "Trap 1: Requires Evidence Not Stated in the Passage",
          href: "/lesson/952",
          completed: true,
        },
        {
          title: "Trap 2: Overextends Beyond What’s Stated",
          href: "/lesson/953",
          completed: true,
        },
        {
          title:
            "Trap 3: Sounds Related but Isn’t Supported by the Premises",
          href: "/lesson/954",
          completed: true,
        },
        {
          title: "Trap 4: Conflicts with the Passage",
          href: "/lesson/955",
          completed: true,
        },
      ],
    },
  ] as Topic[],
};

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="w-full" aria-label="Chapter progress">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-300">
        <span className="hidden sm:inline">Chapter Progress</span>
        <span aria-live="polite">{percent} %</span>
      </div>
      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-gray-700/60"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span
          className="absolute left-0 top-0 h-full rounded-full bg-blue-500"
          style={{ width: `${Math.min(Math.max(percent, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}

function CheckIcon({ className = "h-4 w-4 text-green-400" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3A1 1 0 016 9.793l2.793 2.793 6.793-6.793a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AlertIcon({ className = "h-4 w-4 text-amber-400" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M12 2a1 1 0 01.894.553l9 18A1 1 0 0121 22H3a1 1 0 01-.894-1.447l9-18A1 1 0 0112 2zm0 5a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1zm0 10a1.25 1.25 0 100 2.5A1.25 1.25 0 0012 17z" />
    </svg>
  );
}

function BookmarkIcon({
  active,
  className = "h-4 w-4",
}: {
  active?: boolean;
  className?: string;
}) {
  return active ? (
    <svg
      className={`${className} text-yellow-400`}
      viewBox="0 0 20 20"
      aria-label="Bookmarked"
      role="img"
      fill="currentColor"
    >
      <path d="M5 2a2 2 0 00-2 2v14l7-4 7 4V4a2 2 0 00-2-2H5z" />
    </svg>
  ) : (
    <svg
      className={`${className} text-gray-400`}
      viewBox="0 0 20 20"
      aria-label="Not bookmarked"
      role="img"
      fill="currentColor"
    >
      <path d="M5 2a2 2 0 00-2 2v14l7-4 7 4V4a2 2 0 00-2-2H5zm0 2h10v10.764l-5-2.857-5 2.857V4z" />
    </svg>
  );
}

function QuoteCard() {
  return (
    <section
      aria-labelledby="end-chapter-title"
      className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <h2 id="end-chapter-title" className="text-xl font-semibold text-white">
        Nice job — you’ve finished this chapter.
      </h2>
      <blockquote className="mt-4 border-l-2 border-blue-400/60 pl-4 text-gray-200">
        <p className="text-base">
          Dreams move within reach when we have the courage to go after them.
        </p>
        <footer className="mt-2 text-sm text-gray-400">Keep going—you’re building momentum.</footer>
      </blockquote>
    </section>
  );
}

function TopicItem({ topic }: { topic: Topic }) {
  const TopicStatus = topic.completed ? CheckIcon : AlertIcon;

  return (
    <li className="list-none">
      <div className="rounded-md bg-white/5 transition-colors hover:bg-white/10">
        <div className="flex items-center gap-3 p-4">
          <TopicStatus />
          <Link
            href={topic.href ?? "#"}
            className="flex w-full items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h3 className="m-0 text-base font-medium text-gray-100">
              <span className="text-gray-300">{topic.number}</span>
              <span className="ml-2">{topic.title}</span>
            </h3>
          </Link>
        </div>
      </div>

      {topic.subtopics && topic.subtopics.length > 0 && (
        <ul className="mt-2 space-y-1 pl-7">
          {topic.subtopics.map((s, i) => (
            <li key={`${topic.number}-${i}`} className="list-none">
              <div className="flex items-center justify-between rounded-md bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10">
                <Link
                  href={s.href ?? "#"}
                  className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {s.completed ? (
                    <CheckIcon className="h-3.5 w-3.5 text-green-400" />
                  ) : (
                    <AlertIcon className="h-3.5 w-3.5 text-amber-400" />
                  )}
                  <span>{s.title}</span>
                </Link>
                <BookmarkIcon active={s.bookmarked} />
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr className="my-4 border-white/10" />
    </li>
  );
}

export default function Page() {
  const { number, title, lessonsRead, lessonsTotal, progress, topics } = chapterData;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-3">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
            >
              <path d="M12.707 15.707a1 1 0 01-1.414 0L6 10.414l5.293-5.293a1 1 0 111.414 1.414L8.828 10l3.879 3.879a1 1 0 010 1.414z" />
            </svg>
            Back to Study Plan
          </Link>
        </nav>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">End of Chapter</h1>
            <p className="mt-1 text-gray-300">
              Chapter {number}: {title}
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-medium text-gray-100">
              {lessonsRead} / {lessonsTotal}
            </span>{" "}
            Lessons Read
          </div>
        </div>

        <div className="mt-6">
          <ProgressBar percent={progress} />
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <QuoteCard />
        </div>

        <aside className="lg:col-span-5">
          <div className="flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Continue with your Study Plan
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                You’ve wrapped up this chapter. Move forward to the next task in your plan or
                revisit any topic below.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-blue-300 ring-1 ring-inset ring-blue-400/40 transition hover:bg-blue-500/10 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Go to Study Plan"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section aria-labelledby="chapter-topics" className="mt-10">
        <h2 id="chapter-topics" className="mb-4 text-lg font-semibold text-white">
          Chapter {number}: {title}
        </h2>

        <div className="rounded-lg border border-white/10 bg-white/5 p-2 sm:p-4">
          <ul className="m-0 list-none p-0">
            {topics.map((t) => (
              <TopicItem key={t.number} topic={t} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}