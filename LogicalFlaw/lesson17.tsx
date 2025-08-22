import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "End of Chapter • Logical Flaw | Verbal",
  description:
    "You’ve finished the Logical Flaw chapter. Review what you covered, see your progress, and continue with your study plan.",
};

type SubTopic = {
  title: string;
  href: string;
  status: "completed" | "examples-pending";
};

type Topic = {
  number: string;
  title: string;
  href: string;
  status: "completed";
  subtopics?: SubTopic[];
};

const chapter = {
  number: 10,
  name: "Logical Flaw",
  lessonsRead: 17,
  lessonsTotal: 17,
};

const topics: Topic[] = [
  {
    number: "10.1",
    title: "Overview",
    href: "/lesson/970",
    status: "completed",
    subtopics: [
      {
        title: "How assumptions give rise to flawed reasoning",
        href: "/lesson/971",
        status: "examples-pending",
      },
    ],
  },
  {
    number: "10.2",
    title: "Common ways Logical Flaw questions are worded",
    href: "/lesson/972",
    status: "completed",
    subtopics: [
      {
        title: "Pure flaw prompts",
        href: "/lesson/2461",
        status: "examples-pending",
      },
      {
        title:
          "Telling flaw questions from weaken‑the‑argument questions",
        href: "/lesson/974",
        status: "completed",
      },
      {
        title:
          "Hybrid prompts that blend flaw with weaken tasks",
        href: "/lesson/975",
        status: "examples-pending",
      },
      {
        title: "Frequent reasoning errors to watch for",
        href: "/lesson/976",
        status: "completed",
      },
      {
        title: "Flaw type 1: Cause–and–effect pitfalls",
        href: "/lesson/2462",
        status: "examples-pending",
      },
      {
        title: "Flaw type 2: Overreach and sampling mistakes",
        href: "/lesson/978",
        status: "examples-pending",
      },
      {
        title:
          "Flaw type 3: Mixing up counts, percentages, or other figures",
        href: "/lesson/979",
        status: "examples-pending",
      },
      {
        title: "Flaw type 4: Conclusions that the evidence doesn’t back",
        href: "/lesson/980",
        status: "examples-pending",
      },
      {
        title:
          "Flaw type 5: Confusing what’s necessary or important with what’s sufficient",
        href: "/lesson/981",
        status: "examples-pending",
      },
    ],
  },
  {
    number: "10.3",
    title: "Typical wrong‑answer patterns in flaw questions",
    href: "/lesson/982",
    status: "completed",
    subtopics: [
      {
        title: "Answers claiming the argument does things it doesn’t",
        href: "/lesson/983",
        status: "examples-pending",
      },
      {
        title:
          "Answers pointing out features that aren’t actually flaws",
        href: "/lesson/984",
        status: "examples-pending",
      },
      {
        title:
          "Answers critiquing support for the wrong conclusion",
        href: "/lesson/985",
        status: "examples-pending",
      },
      {
        title:
          "Answers introducing math or stats that don’t matter",
        href: "/lesson/986",
        status: "examples-pending",
      },
    ],
  },
];

function KaTeX({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "html",
    strict: "ignore",
  });
  if (display) {
    return (
      <div
        aria-label={ariaLabel}
        className="my-3 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function StatusPill({ status }: { status: SubTopic["status"] | Topic["status"] }) {
  if (status === "completed") {
    return (
      <span
        aria-label="Completed"
        className="inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-2 py-0.5 text-xs text-emerald-300 ring-1 ring-emerald-700/40"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.657 7.657a1 1 0 0 1-1.414 0L3.293 9.021a1 1 0 1 1 1.414-1.414l3.222 3.222 6.95-6.95a1 1 0 0 1 1.414 0z" />
        </svg>
        Done
      </span>
    );
  }
  return (
    <span
      aria-label="Examples not yet completed"
      className="inline-flex items-center gap-1 rounded-full bg-amber-900/40 px-2 py-0.5 text-xs text-amber-200 ring-1 ring-amber-700/40"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
        <path d="M10 2a8 8 0 1 0 .001 16.001A8 8 0 0 0 10 2zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
      </svg>
      Practice pending
    </span>
  );
}

function ProgressBar({ value, total }: { value: number; total: number }) {
  const pct = Math.round((value / total) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-gray-300">
        <div>
          <span className="hidden sm:inline">Chapter</span> Progress: {pct} %
        </div>
        <div className="text-gray-400">
          {value} / {total} lessons completed
        </div>
      </div>
      <div aria-hidden="true" className="h-2 w-full rounded-full bg-gray-800">
        <div
          className="h-2 rounded-full bg-emerald-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="sr-only" role="status" aria-live="polite">
        Chapter progress is {pct} percent.
      </div>
    </div>
  );
}

export default function Page() {
  const pct = Math.round((chapter.lessonsRead / chapter.lessonsTotal) * 100);

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:rounded focus:bg-sky-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8" id="content">
        <div className="mb-3">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
              <path d="M12.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 1 1 12.707 5.707L9.414 9l3.293 3.293a1 1 0 0 1 0 1.414z" />
            </svg>
            Back to Study Plan
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          End of Chapter
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          Chapter {chapter.number}: {chapter.name}
        </h2>
        <div className="mt-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
          <div className="mb-2 text-sm text-gray-300">
            We calculate chapter progress as:
          </div>
          <KaTeX
            display
            ariaLabel="Progress equals completed lessons divided by total lessons, times 100 percent"
            expr={`\\text{Progress (\\%)} = \\left\\lfloor \\frac{${chapter.lessonsRead}}{${chapter.lessonsTotal}} \\times 100 \\right\\rfloor = ${pct}\\,\\%`}
          />
          <ProgressBar value={chapter.lessonsRead} total={chapter.lessonsTotal} />
        </div>
      </header>

      <section
        aria-label="Congratulations and next steps"
        className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12"
      >
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/60 to-gray-900 p-6">
            <h3 className="text-xl font-semibold text-white">
              Nice job—this chapter is complete.
            </h3>
            <blockquote className="mt-4 border-l-4 border-sky-600 pl-4 text-gray-200">
              <p className="text-base">
                “You must expect great things of yourself before you can do them.”
              </p>
              <footer className="mt-2 text-sm text-gray-400">— Michael Jordan</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="flex h-full flex-col justify-between rounded-xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-gray-300">
              Keep the momentum going. Continue to your study plan to pick up right where you left off.
            </p>
            <div className="mt-6">
              <Link
                href="/study_plan"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Chapter contents" className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="rounded-xl border border-gray-800 bg-gray-900">
            <div className="border-b border-gray-800 px-5 py-4">
              <h3 className="text-lg font-semibold text-white">
                Chapter {chapter.number}: {chapter.name}
              </h3>
            </div>
            <ul className="divide-y divide-gray-800">
              {topics.map((topic) => (
                <li key={topic.number} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <Link
                        href={topic.href}
                        className="group inline-flex items-baseline gap-2 focus:outline-none"
                      >
                        <span className="shrink-0 rounded bg-gray-800 px-2 py-0.5 text-xs font-mono text-gray-300 ring-1 ring-gray-700">
                          {topic.number}
                        </span>
                        <h4 className="truncate text-base font-medium text-sky-300 group-hover:text-sky-200">
                          {topic.title}
                        </h4>
                      </Link>
                    </div>
                    <StatusPill status={topic.status} />
                  </div>

                  {topic.subtopics && topic.subtopics.length > 0 && (
                    <ul className="mt-4 space-y-3">
                      {topic.subtopics.map((st, idx) => (
                        <li key={idx} className="flex items-center justify-between gap-4">
                          <Link
                            href={st.href}
                            className="text-sm text-gray-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                          >
                            {st.title}
                          </Link>
                          <StatusPill status={st.status} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
              <h3 className="text-base font-semibold text-white">
                What you accomplished
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300">
                <li>Identified how assumptions can create reasoning gaps</li>
                <li>Learned to recognize typical Logical Flaw prompts</li>
                <li>Reviewed frequent flaw patterns and why they’re wrong</li>
                <li>Studied common traps used in incorrect answer choices</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
              <h3 className="text-base font-semibold text-white">
                Next recommendation
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Head to your study plan for your next assignment, adaptive to your progress.
              </p>
              <div className="mt-4">
                <Link
                  href="/study_plan"
                  className="inline-flex items-center justify-center rounded-md border border-sky-700 bg-transparent px-3 py-2 text-sm font-medium text-sky-300 hover:bg-sky-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}