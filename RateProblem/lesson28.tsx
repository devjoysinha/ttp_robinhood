```tsx
// app/(quant)/rate-problems/end-of-chapter/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
// If KaTeX CSS is not already included globally, add it in your root layout:
// import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "Chapter 9 • Rate Problems — Chapter Complete",
  description:
    "You’ve finished Chapter 9 on Rate Problems. Review your lesson checklist, recall the core formulas, and continue with your Study Plan.",
};

type Lesson = {
  id: number | string;
  slug: string;
  label: string;
  title: string;
  status: "done" | "needs-examples" | "todo";
};

type Section = {
  sectionNumber: string;
  sectionTitle: string;
  lessons: Lesson[];
  subsections?: {
    title: string;
    lessons: Lesson[];
  }[];
};

// Utility: accessible icons (no external dependencies)
function StatusIcon({ status }: { status: Lesson["status"] }) {
  if (status === "done") {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4 text-emerald-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (status === "needs-examples") {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4 text-amber-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-sky-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zM11 7h2v7h-2zm0 8h2v2h-2z" />
    </svg>
  );
}

function ProgressBar({ value, max = 100 }: { value: number; max?: number }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="w-full" aria-label="Chapter progress" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-2 w-full rounded-full bg-slate-700/60">
        <div
          className="h-2 rounded-full bg-emerald-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

const DATA: Section = {
  sectionNumber: "9",
  sectionTitle: "Rate Problems",
  lessons: [
    { id: 548, slug: "/lesson/548", label: "9.1", title: "Overview", status: "done" },
    { id: 549, slug: "/lesson/549", label: "9.2", title: "Rate–Time–Distance: Core Ideas", status: "done" },
    { id: 550, slug: "/lesson/550", label: "9.3", title: "Rate–Time–Distance: Formulas and Units", status: "done" },
    { id: 551, slug: "/lesson/551", label: "9.4", title: "Matrix Method for RTD Problems", status: "needs-examples" },
    { id: 552, slug: "/lesson/552", label: "9.5", title: "Common RTD Question Types", status: "done" },
    { id: 2158, slug: "/lesson/2158", label: "9.6", title: "Basic Rate Questions", status: "needs-examples" },
    { id: 2155, slug: "/lesson/2155", label: "9.7", title: "Basic Rate Questions with Variable Choices", status: "needs-examples" },
  ],
  subsections: [
    {
      title: "9.8 Average Rate Questions",
      lessons: [
        { id: 2159, slug: "/lesson/2159", label: "•", title: "Average Rate When Distances Are Unknown", status: "needs-examples" },
        { id: 2157, slug: "/lesson/2157", label: "•", title: "Solving When the Average Rate Is Given", status: "needs-examples" },
      ],
    },
    {
      title: "9.9–9.10 Converging Rate Scenarios",
      lessons: [
        { id: 2119, slug: "/lesson/2119", label: "9.9", title: "Converging Objects: Fundamentals", status: "done" },
        { id: 2120, slug: "/lesson/2120", label: "9.10", title: "Converging Variations", status: "done" },
        { id: 2121, slug: "/lesson/2121", label: "•", title: "Both Objects Start Together", status: "needs-examples" },
        { id: 2161, slug: "/lesson/2161", label: "•", title: "Different Start Times", status: "needs-examples" },
        { id: 2162, slug: "/lesson/2162", label: "•", title: "One Object Is Faster", status: "needs-examples" },
        { id: 2163, slug: "/lesson/2163", label: "•", title: "Relative Speed Framing", status: "needs-examples" },
      ],
    },
    {
      title: "9.11–9.19 Additional Rate Topics",
      lessons: [
        { id: 562, slug: "/lesson/562", label: "9.11", title: "Diverging Motions", status: "needs-examples" },
        { id: 2164, slug: "/lesson/2164", label: "9.12", title: "Round-Trip Problems", status: "needs-examples" },
        { id: 2167, slug: "/lesson/2167", label: "9.13", title: "Catch-Up Scenarios", status: "needs-examples" },
        { id: 2181, slug: "/lesson/2181", label: "9.14", title: "Catch-Up and Pass", status: "needs-examples" },
        { id: 2166, slug: "/lesson/2166", label: "9.15", title: "Catch-Up and Wait", status: "needs-examples" },
        { id: 2111, slug: "/lesson/2111", label: "9.16", title: "Relative Motion", status: "needs-examples" },
        { id: 567, slug: "/lesson/567", label: "9.17", title: "If–Then Rate Setups", status: "needs-examples" },
        { id: 568, slug: "/lesson/568", label: "9.18", title: "Mind Time-Zone Shifts in RTD", status: "needs-examples" },
        { id: 2183, slug: "/lesson/2183", label: "9.19", title: "Fuel Efficiency as a Rate", status: "needs-examples" },
      ],
    },
    {
      title: "9.20 DS: Inequalities with Rates",
      lessons: [
        { id: 2294, slug: "/lesson/2294", label: "9.20", title: "Framing DS Rate Inequalities", status: "needs-examples" },
        { id: 2293, slug: "/lesson/2293", label: "•", title: "When a Measurement Is an Inequality", status: "needs-examples" },
      ],
    },
  ],
};

export default function Page() {
  const totalLessons =
    DATA.lessons.length +
    (DATA.subsections?.reduce((acc, s) => acc + s.lessons.length, 0) ?? 0);
  const completedLessons =
    DATA.lessons.filter((l) => l.status === "done").length +
    (DATA.subsections?.reduce(
      (acc, s) => acc + s.lessons.filter((l) => l.status === "done").length,
      0
    ) ?? 0);
  const progressPct = Math.round((completedLessons / totalLessons) * 100);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav className="mb-3">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1 py-0.5"
            aria-label="Back to Study Plan"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.707 15.707a1 1 0 01-1.414 0L5.586 10l5.707-5.707a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" />
            </svg>
            Back to Study Plan
          </Link>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Chapter {DATA.sectionNumber} • {DATA.sectionTitle}
        </h1>
        <p className="mt-1 text-gray-300">
          Chapter progress: {progressPct}% — {completedLessons} / {totalLessons} lessons finished
        </p>
        <div className="mt-3">
          <ProgressBar value={progressPct} />
        </div>
      </header>

      <section className="mb-10 rounded-lg bg-slate-800/60 ring-1 ring-slate-700 p-5 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Nicely done — you’ve wrapped up this chapter!
            </h2>
            <p className="mt-2 text-gray-300">
              Progress starts when you decide not to be limited by where you began.
            </p>
            <p className="text-gray-400">— often attributed to Mark Caine</p>
          </div>
          <div className="rounded-md bg-slate-900/60 p-4 ring-1 ring-slate-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              RTD quick ref
            </h3>
            <ul className="mt-2 space-y-1 text-gray-200">
              <li>
                Rate = <MathInline expr="\\dfrac{\\text{distance}}{\\text{time}}" ariaLabel="rate equals distance over time" />
              </li>
              <li>
                Distance = <MathInline expr="\\text{rate}\\times\\text{time}" ariaLabel="distance equals rate times time" />
              </li>
              <li>
                Time = <MathInline expr="\\dfrac{\\text{distance}}{\\text{rate}}" ariaLabel="time equals distance over rate" />
              </li>
            </ul>
            <p className="mt-3 text-sm text-slate-400">
              Align units consistently (e.g., mph with hours) and watch for relative speed when objects move toward or away from each other.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h2 className="mb-3 text-lg font-semibold text-white">Lesson checklist</h2>

          <div className="overflow-hidden rounded-lg ring-1 ring-slate-700">
            {/* Primary lessons */}
            <ul className="divide-y divide-slate-700/60 bg-slate-800/40">
              {DATA.lessons.map((lesson) => (
                <LessonRow key={lesson.id} lesson={lesson} />
              ))}
            </ul>

            {/* Subsections */}
            {DATA.subsections?.map((sub, idx) => (
              <div key={idx} className="border-t border-slate-700">
                <div className="bg-slate-900/50 px-4 py-3">
                  <h3 className="text-sm font-semibold text-slate-200">{sub.title}</h3>
                </div>
                <ul className="divide-y divide-slate-700/60 bg-slate-800/40">
                  {sub.lessons.map((lesson) => (
                    <LessonRow key={`${sub.title}-${lesson.slug}-${lesson.id}`} lesson={lesson} compact />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Note: The yellow icon marks lessons where practice examples are still pending—finishing those will unlock the chapter reinforcement test.
          </p>
        </section>

        <aside className="space-y-4">
          <div className="rounded-lg bg-slate-800/60 p-5 ring-1 ring-slate-700">
            <h2 className="text-lg font-semibold text-white">What’s next?</h2>
            <p className="mt-2 text-gray-300">
              Keep your momentum going—head back to your plan to start the next step.
            </p>
            <div className="mt-4">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-slate-900/50 p-5 ring-1 ring-slate-700">
            <h3 className="text-sm font-semibold text-slate-300">Tip</h3>
            <p className="mt-2 text-sm text-slate-300">
              For converging motion, combine speeds when objects move toward each other; subtract when moving in the same direction.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

function LessonRow({ lesson, compact = false }: { lesson: Lesson; compact?: boolean }) {
  const statusLabel =
    lesson.status === "done"
      ? "Completed"
      : lesson.status === "needs-examples"
      ? "Examples not completed"
      : "Not started";

  return (
    <li className="group flex items-center gap-3 px-4 py-3 hover:bg-slate-800/70">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/60 ring-1 ring-slate-700">
        <StatusIcon status={lesson.status} />
      </div>

      <div className="min-w-0 flex-1">
        <Link
          href={lesson.slug}
          className="block truncate text-slate-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
          title={`${lesson.label} ${lesson.title}`}
        >
          <span className="text-slate-300">{lesson.label}</span>
          <span className="ml-2">{lesson.title}</span>
        </Link>
        {!compact && (
          <span className="mt-0.5 block text-xs text-slate-400" aria-live="polite">
            {statusLabel}
          </span>
        )}
      </div>

      <div className="opacity-0 transition group-hover:opacity-100">
        <Link
          href={lesson.slug}
          className="inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-2 py-1"
          aria-label={`Open ${lesson.label} ${lesson.title}`}
        >
          Open
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586a2 2 0 01.586 1.414V16a2 2 0 01-2 2h-6a2 2 0 01-2-2v-1a1 1 0 112 0v1h6v-6h-1a1 1 0 110-2h1l-3.293-3.293a1 1 0 010-1.414z" />
            <path d="M5 4a2 2 0 00-2 2v6h1a1 1 0 110 2H3v2a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V6h1a1 1 0 100-2H5z" />
          </svg>
        </Link>
      </div>
    </li>
  );
}
```