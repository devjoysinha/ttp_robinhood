import type { Metadata } from "next";
import Link from "next/link";

type Lesson = {
  id: number;
  number: string;
  title: string;
  href: string;
};

const LESSONS: Lesson[] = [
  { id: 2093, number: "6.1", title: "Getting started", href: "/lesson/2093" },
  { id: 2094, number: "6.2", title: "First steps for tackling MSR prompts", href: "/lesson/2094" },
  { id: 2095, number: "6.3", title: "Map where each information type lives", href: "/lesson/2095" },
  { id: 2096, number: "6.4", title: "Use question keywords to jump to the right tab", href: "/lesson/2096" },
  { id: 2097, number: "6.5", title: "Filter for only what’s relevant", href: "/lesson/2097" },
  { id: 2098, number: "6.6", title: "Expect to synthesize across multiple tabs", href: "/lesson/2098" },
  { id: 2099, number: "6.7", title: "MSR success hinges on crisp execution", href: "/lesson/2099" },
  { id: 2100, number: "6.8", title: "Execution tactic 1: read the task precisely", href: "/lesson/2100" },
  { id: 2101, number: "6.9", title: "Execution tactic 2: define the objective", href: "/lesson/2101" },
  { id: 2102, number: "6.10", title: "Execution tactic 3: proceed step‑by‑step", href: "/lesson/2102" },
  { id: 2103, number: "6.11", title: "Execution tactic 4: hunt for fine details", href: "/lesson/2103" },
  { id: 2104, number: "6.12", title: "Handle tables and charts with care", href: "/lesson/2104" },
  { id: 2105, number: "6.13", title: "Any math here is mostly detail extraction", href: "/lesson/2105" },
  { id: 2106, number: "6.14", title: "Balance multiple, sometimes competing, constraints", href: "/lesson/2106" },
];

export const metadata: Metadata = {
  title: "End of Chapter • Multi‑Source Reasoning | GMAT",
  description:
    "You’ve wrapped up Chapter 6 on Multi‑Source Reasoning. Review the lesson index and jump back to your study plan to keep momentum going.",
};

export default function Page() {
  const total = LESSONS.length;
  const completed = total; // Chapter finished
  const progress = Math.round((completed / total) * 100);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white md:text-3xl">Multi‑Source Reasoning</h1>
        <p className="mt-1 text-sm text-gray-400 md:text-base">Chapter 6 • End of chapter</p>
      </header>

      <section
        aria-labelledby="chapter-summary"
        className="mb-10 rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 shadow-lg backdrop-blur"
      >
        <h2 id="chapter-summary" className="text-lg font-semibold text-gray-100 md:text-xl">
          Great work—chapter complete!
        </h2>
        <p className="mt-2 text-gray-300">
          You’ve reached the finish line for this chapter. The habits you practiced here—reading precisely, isolating
          what matters, and weaving details across tabs—are the same skills that unlock tough MSR questions on test day.
        </p>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Progress</span>
            <span className="text-gray-300">
              {completed} / {total} lessons
            </span>
          </div>
          <div
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-700"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Chapter progress"
          >
            <div
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Keep going while the momentum is strong—head back to your study plan and queue up what’s next.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <section aria-labelledby="lesson-index" className="md:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="lesson-index" className="text-lg font-semibold text-gray-100">
              Lesson index
            </h2>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              100% complete
            </span>
          </div>

          <nav aria-label="Chapter lessons" className="divide-y divide-white/5 overflow-hidden rounded-xl border border-white/10">
            {LESSONS.map((lesson) => (
              <Link
                key={lesson.id}
                href={lesson.href}
                className="group flex items-center gap-4 bg-slate-800/40 px-4 py-3 transition-colors hover:bg-slate-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                prefetch={false}
              >
                <span className="flex h-8 w-12 items-center justify-center rounded-md bg-slate-700/60 text-sm font-semibold text-gray-200">
                  {lesson.number}
                </span>
                <span className="flex-1 text-sm text-gray-200 group-hover:text-white">{lesson.title}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 group-hover:bg-emerald-500/25"
                  title="Read"
                >
                  ✓
                </span>
              </Link>
            ))}
          </nav>
        </section>

        <aside aria-labelledby="next-steps" className="md:col-span-1">
          <div className="sticky top-6 rounded-xl border border-white/10 bg-slate-800/50 p-5">
            <h2 id="next-steps" className="text-base font-semibold text-gray-100">
              Continue your plan
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Jump back to your study plan to schedule reviews, drills, or the next chapter.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                prefetch={false}
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section
        aria-labelledby="closing-note"
        className="mt-10 rounded-xl border border-white/10 bg-slate-800/40 p-6 text-gray-300"
      >
        <h2 id="closing-note" className="text-base font-semibold text-gray-100">
          One last nudge
        </h2>
        <p className="mt-2">
          Success and failure often share the same road—the difference is consistency. Keep showing up and refining your
          process.
        </p>
      </section>
    </main>
  );
}