import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MustKnow } from "@/components/ui/MustKnow";

// If you load KaTeX globally in app/layout (recommended), you can swap inline Unicode math
// such as x² and |x| with a Math component that renders KaTeX. See comment near the lessons list.

export const metadata: Metadata = {
  title: "End of Chapter • Inequalities & Absolute Value | Quant",
  description:
    "You’ve finished the chapter on inequalities and absolute values. Review your progress, revisit any lessons with outstanding examples, and continue with your study plan.",
};

type Lesson = {
  id: number | string;
  label: string; // e.g., "6.1"
  title: string;
  href: string;
  status: "done" | "examples";
  subtopics?: { title: string; href: string }[];
};

const lessons: Lesson[] = [
  {
    id: 490,
    label: "6.1",
    title: "Number line basics and inequality notation",
    href: "/lesson/490",
    status: "done",
  },
  {
    id: 491,
    label: "6.2",
    title: "Shifting from solving equations to solving inequalities",
    href: "/lesson/491",
    status: "examples",
  },
  {
    id: 492,
    label: "6.3",
    title: "Multiply or divide an inequality by a negative: what changes",
    href: "/lesson/492",
    status: "examples",
  },
  {
    id: 493,
    label: "6.4",
    title: "Working with systems of inequalities",
    href: "/lesson/493",
    status: "examples",
  },
  {
    id: 2298,
    label: "6.5",
    title: "Caution: inequalities involving multiple unknowns",
    href: "/lesson/2298",
    status: "examples",
  },
  {
    id: 495,
    label: "6.6",
    title: "Compound inequalities and interval thinking",
    href: "/lesson/495",
    status: "examples",
  },
  {
    id: 1176,
    label: "6.7",
    title: "Blending equations with inequalities",
    href: "/lesson/1176",
    status: "examples",
  },
  {
    id: 497,
    label: "6.8",
    title: "Handling multiple linked inequalities",
    href: "/lesson/497",
    status: "examples",
  },
  {
    id: 1652,
    label: "6.9",
    title: "Simplifying inequalities with x²",
    href: "/lesson/1652",
    status: "examples",
  },
  {
    id: 2359,
    label: "6.10",
    title: "Finding the minimum or maximum of a product",
    href: "/lesson/2359",
    status: "examples",
  },
  {
    id: 500,
    label: "6.11",
    title: "Absolute value fundamentals",
    href: "/lesson/500",
    status: "examples",
  },
  {
    id: 501,
    label: "6.12",
    title: "Equations that include absolute values",
    href: "/lesson/501",
    status: "examples",
    subtopics: [
      {
        title: "Simplify first; apply absolute values last",
        href: "/lesson/502",
      },
      {
        title: "Solving when two absolute values are set equal",
        href: "/lesson/503",
      },
    ],
  },
  {
    id: 504,
    label: "6.13",
    title:
      "When |a + b| equals |a| + |b|: structure and implications",
    href: "/lesson/504",
    status: "examples",
  },
  {
    id: 585,
    label: "6.14",
    title:
      "When |a − b| equals |a| − |b|: when can this happen?",
    href: "/lesson/585",
    status: "examples",
  },
  {
    id: 2118,
    label: "6.15",
    title: "Inequalities that involve absolute values",
    href: "/lesson/2118",
    status: "examples",
  },
  {
    id: 506,
    label: "6.16",
    title: "Comparing x² and |x| in inequalities",
    href: "/lesson/506",
    status: "examples",
  },
  {
    id: 507,
    label: "6.17",
    title: "Checking solutions in absolute‑value equations",
    href: "/lesson/507",
    status: "examples",
  },
  {
    id: 2287,
    label: "6.18",
    title: "Solution‑set style questions",
    href: "/lesson/2287",
    status: "examples",
  },
];

export default function Page() {
  const totalLessons = 20;
  const readLessons = 20;
  const progressPct = Math.round((readLessons / totalLessons) * 100);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/study_plan" className="hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded">
                Study Plan
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li className="text-gray-300">End of Chapter</li>
          </ol>
        </nav>

        <div className="mt-4 flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Inequalities & Absolute Values
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-gray-300">
              Chapter Progress: {progressPct}%
            </p>
            <p className="text-gray-400">
              {readLessons} / {totalLessons} Lessons Read
            </p>
          </div>
          <div className="h-2 w-full overflow-hidden rounded bg-gray-800" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label="Chapter progress">
            <div className="h-full bg-sky-500" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </header>

      <section aria-labelledby="congrats" className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-2 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6">
          <h2 id="congrats" className="text-xl font-semibold text-white">
            Fantastic work!
          </h2>
          <p className="mt-2 text-gray-300">
            You’ve reached the end of this chapter.
          </p>
          <MustKnow className="mt-4">
            Before moving on, make sure you’ve practiced every example. Reinforcing skills now will save time later.
          </MustKnow>
        </div>

        <figure className="md:col-span-3 relative isolate overflow-hidden rounded-lg border border-gray-800 bg-gray-900 p-6">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-600/10 blur-2xl" />
          <blockquote className="text-gray-200">
            <p className="text-lg">
              Motivation gets you going; steady habits keep you growing.
            </p>
          </blockquote>
          <figcaption className="mt-2 text-sm text-gray-400">— attributed to Jim Ryun</figcaption>
        </figure>
      </section>

      <section aria-labelledby="chapter-outline" className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 id="chapter-outline" className="mb-4 text-lg font-semibold text-white">
            Chapter 6: Inequalities and Absolute Values
          </h3>

          <div className="divide-y divide-gray-800 rounded-lg border border-gray-800 bg-gray-950">
            {/* Tip: If KaTeX is set up in app/layout, you can replace inline Unicode math like x² and |x| below with a <MathInline expr="x^2" /> and <MathInline expr="\\lvert x \\rvert" /> for high-fidelity typesetting. */}
            <ul className="divide-y divide-gray-800">
              {lessons.map((lesson) => (
                <li key={lesson.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        href={lesson.href}
                        className="group block focus:outline-none focus:ring-2 focus:ring-sky-500 rounded"
                      >
                        <h4 className="text-gray-200 group-hover:text-white">
                          <span className="font-semibold">{lesson.label}</span>
                          <span className="ml-2">{lesson.title}</span>
                        </h4>
                      </Link>
                      {lesson.subtopics && (
                        <ul className="mt-3 space-y-2">
                          {lesson.subtopics.map((s, idx) => (
                            <li key={`${lesson.id}-sub-${idx}`} className="pl-6">
                              <Link
                                href={s.href}
                                className="text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 rounded"
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <span
                      className={[
                        "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium",
                        lesson.status === "done"
                          ? "bg-emerald-900/40 text-emerald-300 ring-1 ring-emerald-700/50"
                          : "bg-amber-900/40 text-amber-300 ring-1 ring-amber-700/50",
                      ].join(" ")}
                      aria-label={lesson.status === "done" ? "Completed" : "Examples pending"}
                    >
                      {lesson.status === "done" ? "Completed" : "Examples pending"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-6 rounded-lg border border-gray-800 bg-gray-950 p-6">
            <h3 className="text-base font-semibold text-white text-center lg:text-left">
              Keep the momentum going
            </h3>
            <div className="mt-4 hidden lg:block">
              <Image
                src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/end_chapter/chapter_end-49d3db92b1909a22dd2cf9baad6d972f766da800977d81e656f3f1370e927c09.svg"
                alt="Illustration encouraging you to continue your study plan"
                width={800}
                height={600}
                className="h-auto w-full rounded"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Head back to your plan to start the next step.
            </p>
            <div className="mt-6">
              <Link
                href="/study_plan"
                className="inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Go to Study Plan
              </Link>
            </div>
            <div className="mt-6 rounded-md border border-amber-800/40 bg-amber-950/30 p-4">
              <p className="text-sm text-amber-200">
                Didn’t finish every example? We recommend wrapping those up so your reinforcement test targets the right skills.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}