import type { Metadata } from "next";
import Link from "next/link";
import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "End of Chapter | Resolving Paradoxes",
  description:
    "You’ve finished this chapter on resolving paradoxes. Review your progress, revisit topics, and continue with your study plan.",
};

type Topic = {
  id: string;
  number: string;
  title: string;
  href: string;
  status: "done" | "todo";
  subtopics?: { id: string; title: string; href: string; status: "done" | "todo" }[];
};

const topics: Topic[] = [
  {
    id: "2444",
    number: "5.1",
    title: "Overview of paradox‑resolution questions",
    href: "/lesson/2444",
    status: "todo",
  },
  {
    id: "1576",
    number: "5.2",
    title: "Typical stems you’ll encounter",
    href: "/lesson/1576",
    status: "todo",
  },
  {
    id: "1577",
    number: "5.3",
    title: "High‑value keywords to notice",
    href: "/lesson/1577",
    status: "todo",
  },
  {
    id: "1578",
    number: "5.4",
    title: "Step‑by‑step approach for solving",
    href: "/lesson/1578",
    status: "todo",
  },
  {
    id: "1579",
    number: "5.5",
    title: "First, pinpoint the exact conflict to reconcile",
    href: "/lesson/1579",
    status: "todo",
  },
  {
    id: "1580",
    number: "5.6",
    title: "Don’t try to prove a conclusion—explain the coexistence",
    href: "/lesson/1580",
    status: "todo",
  },
  {
    id: "1581",
    number: "5.7",
    title: "Prefer what could be true over what must be true",
    href: "/lesson/1581",
    status: "todo",
  },
  {
    id: "1582",
    number: "5.8",
    title: "Frequent wrong‑answer patterns",
    href: "/lesson/1582",
    status: "done",
    subtopics: [
      {
        id: "1583",
        title: "Type 1: Solves the wrong issue",
        href: "/lesson/1583",
        status: "done",
      },
      {
        id: "1584",
        title: "Type 2: Talks similarities when the paradox is about differences",
        href: "/lesson/1584",
        status: "done",
      },
      {
        id: "1585",
        title: "Type 3: Makes the contradiction worse",
        href: "/lesson/1585",
        status: "done",
      },
      {
        id: "1586",
        title: "Type 4: Undercuts one of the stated facts",
        href: "/lesson/1586",
        status: "done",
      },
      {
        id: "1587",
        title: "Type 5: Adds information that doesn’t matter",
        href: "/lesson/1587",
        status: "done",
      },
      {
        id: "1588",
        title: "Type 6: Restates the facts without reconciling them",
        href: "/lesson/1588",
        status: "done",
      },
    ],
  },
];

function MathInline({ expr, label }: { expr: string; label?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={label}
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  const totalLessons = 14;
  const completedLessons = 14;
  const progressPercent = 100;

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12">
      <a
        href="#content-start"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-md focus:bg-slate-800 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-gray-400">
          <Link href="/study_plan" className="hover:text-gray-200 underline underline-offset-2">
            Back to Study Plan
          </Link>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-white">Chapter Complete</h1>
        <p className="mt-1 text-gray-300">You’ve finished this chapter on resolving paradoxes.</p>
      </header>

      <section aria-labelledby="progress-heading" className="mb-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="progress-heading" className="text-lg font-semibold text-gray-200">
            Your Progress
          </h2>
          <div className="text-gray-300">
            Chapter progress: <MathInline expr={"100\\%"} label="100 percent" /> • Lessons read:{" "}
            <MathInline expr={"\\tfrac{14}{14}"} label="14 out of 14" />
          </div>
        </div>
        <div
          className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-700"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Chapter completion"
        >
          <div
            className="h-full bg-indigo-500 transition-[width] duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </section>

      <section
        id="content-start"
        aria-labelledby="congrats-heading"
        className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-5"
      >
        <div className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-800/60 p-6">
          <h2 id="congrats-heading" className="text-xl font-semibold text-white">
            Nice work!
          </h2>
          <p className="mt-2 text-gray-300">
            You’ve reached the end of this chapter. Keep the momentum going.
          </p>
          <blockquote className="mt-6 border-l-4 border-indigo-500 pl-4 text-gray-200">
            <p className="italic">
              Knowledge shows what can be done; wisdom knows when to hold back.
            </p>
            <footer className="mt-2 text-sm text-gray-400">— Anonymous</footer>
          </blockquote>
        </div>

        <div className="md:col-span-3 rounded-lg border border-slate-700 bg-slate-800/60 p-6">
          <h3 className="text-lg font-semibold text-white">What’s next?</h3>
          <p className="mt-2 text-gray-300">
            Jump back to your personalized plan to continue exactly where you should.
          </p>
          <div className="mt-4">
            <Link
              href="/study_plan"
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              aria-label="Go to Study Plan"
            >
              Go to Study Plan
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="chapter-outline-heading" className="mb-12">
        <h2 id="chapter-outline-heading" className="text-xl font-semibold text-white">
          Chapter 5: Resolving Paradoxes
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-lg border border-slate-700 bg-slate-900/40">
            <ul role="list" className="divide-y divide-slate-800">
              {topics.map((t) => (
                <li key={t.id} className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <Link
                        href={t.href}
                        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                      >
                        <div className="flex items-center gap-2">
                          <span className="shrink-0 rounded bg-slate-800 px-2 py-0.5 text-xs font-semibold text-gray-200">
                            {t.number}
                          </span>
                          <h3 className="truncate text-base font-medium text-gray-200 group-hover:text-white">
                            {t.title}
                          </h3>
                        </div>
                      </Link>
                      {t.subtopics && (
                        <ul role="list" className="mt-3 space-y-2 pl-4">
                          {t.subtopics.map((s) => (
                            <li key={s.id} className="flex items-start gap-2">
                              <StatusBadge status={s.status} />
                              <Link
                                href={s.href}
                                className="flex-1 text-sm text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <StatusBadge status={t.status} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-lg border border-slate-700 bg-slate-900/40 p-5">
            <h3 className="text-base font-semibold text-white">Tip</h3>
            <p className="mt-2 text-sm text-gray-300">
              For paradox problems, your job is to present a plausible bridge that allows both
              statements to stand together. If a choice makes the conflict sharper or ignores it,
              it’s almost certainly a trap.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function StatusBadge({ status }: { status: "done" | "todo" }) {
  if (status === "done") {
    return (
      <span
        aria-label="Completed"
        title="Completed"
        className="inline-flex items-center gap-1 rounded-full bg-emerald-600/20 px-2 py-0.5 text-xs font-medium text-emerald-300"
      >
        <svg
          aria-hidden="true"
          className="h-3 w-3 text-emerald-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-4-4A1 1 0 115.757 8.293l3.293 3.293 6.543-6.543a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Done
      </span>
    );
  }
  return (
    <span
      aria-label="Not completed"
      title="Not completed"
      className="inline-flex items-center gap-1 rounded-full bg-amber-600/20 px-2 py-0.5 text-xs font-medium text-amber-300"
    >
      <svg aria-hidden="true" className="h-3 w-3 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.257 3.099c.366-.756 1.42-.756 1.786 0l7.021 14.521A1 1 0 0016.143 19H3.857a1 1 0 00-.921 1.62l7.321-14.521z" />
      </svg>
      To do
    </span>
  );
}