import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "End of Chapter | General Word Problems",
  description:
    "You’ve finished this chapter. Review your progress, skim the lesson list, and jump back to your personalized study plan.",
};

type Subtopic = {
  title: string;
  href?: string;
  completed?: boolean;
};

type Topic = {
  code: string;
  title: string;
  href?: string;
  completed?: boolean;
  subtopics?: Subtopic[];
};

const topics: Topic[] = [
  {
    code: "7.1",
    title: "Overview",
    href: "/lesson/509",
    completed: true,
  },
  {
    code: "7.2",
    title: "Translating stories into equations",
    href: "/lesson/510",
    completed: true,
    subtopics: [
      { title: "Age scenarios", href: "/lesson/511", completed: false },
      { title: "Distance/length scenarios", href: "/lesson/512", completed: false },
      { title: "Mass/weight scenarios", href: "/lesson/513", completed: false },
      { title: "Money applications", href: "/lesson/514", completed: false },
      { title: "Choices include variables", href: "/lesson/2296", completed: false },
      { title: "DS: core translation skills", href: "/lesson/516", completed: false },
    ],
  },
  {
    code: "7.3",
    title: "Business word problems",
    href: "/lesson/517",
    completed: true,
    subtopics: [
      { title: "Unit pricing", href: "/lesson/518", completed: false },
      { title: "Mixed unit prices and quantities", href: "/lesson/2257", completed: false },
      { title: "Profit/loss", href: "/lesson/519", completed: false },
      { title: "Cost sharing", href: "/lesson/520", completed: false },
      { title: "Comparing salary plans", href: "/lesson/521", completed: false },
      { title: "Choosing a pricing plan", href: "/lesson/522", completed: false },
    ],
  },
  {
    code: "7.4",
    title: "Equalizing rates",
    href: "/lesson/1504",
    completed: false,
  },
  {
    code: "7.5",
    title: "Fraction applications",
    href: "/lesson/523",
    completed: false,
    subtopics: [
      { title: "Parts add up to the whole", href: "/lesson/524", completed: false },
      { title: "What‑if changes to fractions", href: "/lesson/525", completed: false },
    ],
  },
  {
    code: "7.6",
    title: "Interest‑rate word problems",
    href: "/lesson/526",
    completed: true,
    subtopics: [
      { title: "Simple interest", href: "/lesson/527", completed: false },
      { title: "Compound interest", href: "/lesson/528", completed: false },
      { title: "Mind the compounding periods", href: "/lesson/1413", completed: false },
    ],
  },
  {
    code: "7.7",
    title: "Linear growth",
    href: "/lesson/529",
    completed: true,
    subtopics: [
      { title: "Linear growth formula", href: "/lesson/530", completed: false },
      { title: "Using growth tables", href: "/lesson/531", completed: false },
    ],
  },
  {
    code: "7.8",
    title: "Exponential growth",
    href: "/lesson/532",
    completed: false,
    subtopics: [{ title: "Identify the growth driver", href: "/lesson/1249", completed: false }],
  },
  {
    code: "7.9",
    title: "Exponential decay",
    href: "/lesson/533",
    completed: false,
  },
  {
    code: "7.10",
    title: "Digit puzzles",
    href: "/lesson/534",
    completed: false,
  },
  {
    code: "7.11",
    title: "Consecutive integer scenarios",
    href: "/lesson/535",
    completed: false,
    subtopics: [
      { title: "Even/odd consecutive sets", href: "/lesson/536", completed: false },
      { title: "Consecutive multiples", href: "/lesson/537", completed: false },
    ],
  },
  {
    code: "7.12",
    title: "Mixture problems",
    href: "/lesson/538",
    completed: true,
    subtopics: [
      { title: "Dry mixtures", href: "/lesson/539", completed: false },
      { title: "Liquid mixtures", href: "/lesson/540", completed: false },
      { title: "Mixtures with unknowns", href: "/lesson/820", completed: false },
    ],
  },
  {
    code: "7.13",
    title: "Mixtures with replacement",
    href: "/lesson/2271",
    completed: false,
    subtopics: [
      { title: "Partial replacement operations", href: "/lesson/2272", completed: false },
    ],
  },
  {
    code: "7.14",
    title: "Inequality and equation setups",
    href: "/lesson/541",
    completed: false,
    subtopics: [
      { title: "Modeling max–min questions", href: "/lesson/2352", completed: false },
    ],
  },
  {
    code: "7.15",
    title: "Optimization in word problems",
    href: "/lesson/2348",
    completed: false,
    subtopics: [
      { title: "Scenario tables for max–min", href: "/lesson/2357", completed: false },
    ],
  },
  {
    code: "7.16",
    title: "Arrangements in a line",
    href: "/lesson/2336",
    completed: false,
  },
];

function ProgressBar({
  value,
  total,
  label,
}: {
  value: number;
  total: number;
  label?: string;
}) {
  const pct = Math.round((value / total) * 100);
  return (
    <div aria-label="Chapter progress" role="group">
      <div className="flex items-center justify-between text-sm text-gray-300">
        <span className="sr-only">{label}</span>
        <span className="font-medium">
          <span className="hidden sm:inline">Chapter</span> Progress: {pct}%
        </span>
        <span className="text-gray-400">
          {value} / {total} Lessons Read
        </span>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-700"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-indigo-500 transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function StatusIcon({ done }: { done?: boolean }) {
  return done ? (
    <CheckCircle2 aria-label="Completed" className="h-4 w-4 text-emerald-400" />
  ) : (
    <AlertCircle aria-label="Not completed" className="h-4 w-4 text-amber-400" />
  );
}

function TopicRow({ topic }: { topic: Topic }) {
  return (
    <li className="list-none">
      <div className="group relative rounded-md p-3 hover:bg-white/5 focus-within:bg-white/5">
        <div className="flex items-center gap-3">
          <StatusIcon done={topic.completed} />
          <Link
            href={topic.href ?? "#"}
            className="flex-1 truncate pr-6 outline-none"
          >
            <h3 className="m-0 text-base font-medium text-gray-100">
              <span className="text-gray-400">{topic.code}</span>
              <span className="ml-2">{topic.title}</span>
            </h3>
          </Link>
        </div>

        {topic.subtopics && topic.subtopics.length > 0 && (
          <ul className="mt-2 space-y-1 pl-8">
            {topic.subtopics.map((s, i) => (
              <li key={i} className="list-none">
                <div className="flex items-center gap-2 rounded p-2 hover:bg-white/5">
                  <StatusIcon done={s.completed} />
                  <Link
                    href={s.href ?? "#"}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mx-3 border-b border-white/10" />
    </li>
  );
}

function QuoteCard() {
  return (
    <section
      aria-labelledby="chapter-finished"
      className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-6 md:grid-cols-2 md:p-8"
    >
      <div className="relative z-10">
        <h2 id="chapter-finished" className="text-2xl font-bold text-white md:text-3xl">
          Nicely done!
          <br /> You’ve reached the end of this chapter.
        </h2>
        <p className="mt-3 text-gray-300">
          Take a breath, scan the outline below, and continue with your
          personalized plan when you’re ready.
        </p>
      </div>

      <div className="relative z-10">
        <div className="rounded-lg bg-white/5 p-5">
          <figure>
            <blockquote className="text-lg text-gray-200">
              Knowing how to do something is skill; choosing when to do it is judgment.
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-400">— Anonymous</figcaption>
          </figure>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />
    </section>
  );
}

function ChapterList() {
  return (
    <section aria-labelledby="chapter-outline" className="mt-8">
      <h3 id="chapter-outline" className="mb-3 text-lg font-semibold text-white">
        Chapter 7: General Word Problems
      </h3>
      <div className="rounded-xl border border-white/10 bg-slate-900/60">
        <ul className="divide-y divide-white/10 p-2">
          {topics.map((t) => (
            <TopicRow key={t.code} topic={t} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <aside className="mt-8 rounded-xl border border-white/10 bg-slate-900/70 p-6">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h4 className="text-base font-semibold text-white">
            Keep up the momentum
          </h4>
          <p className="mt-1 text-sm text-gray-300">
            Head back to your study plan to see what’s next.
          </p>
        </div>
        <Link
          href="/study_plan"
          className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Go to Study Plan
        </Link>
      </div>
    </aside>
  );
}

// Client-only KaTeX block for a tiny, relevant formula
function ProgressFormulaClient() {
  return null;
}

export default function Page() {
  // Hard-coded from the source page for demonstration; wire to real data in production.
  const lessonsRead = 44;
  const lessonsTotal = 44;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-slate-800 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex items-center gap-2 text-gray-400">
            <li>
              <Link href="/study_plan" className="hover:text-white">
                Study Plan
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">End of Chapter</li>
          </ol>
        </nav>

        <h1 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          End of Chapter
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          Chapter 7 — General Word Problems
        </h2>

        <div className="mt-5">
          <ProgressBar value={lessonsRead} total={lessonsTotal} label="Chapter progress" />
          <div className="mt-3 text-sm text-gray-400">
            Progress P can be expressed as P = (completed ÷ total) × 100%.
          </div>
        </div>
      </header>

      <article id="main-content" className="space-y-8 text-gray-300">
        <QuoteCard />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ChapterList />
          </div>

          <div className="lg:col-span-1">
            <section
              aria-labelledby="continue-plan"
              className="sticky top-6 rounded-xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 id="continue-plan" className="text-base font-semibold text-white">
                What’s next?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Your study plan adapts as you learn. Jump back in to keep your streak alive.
              </p>
              <div className="mt-4">
                <Link
                  href="/study_plan"
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Go to Study Plan
                </Link>
              </div>
              <div className="mt-6 rounded-lg bg-white/5 p-4">
                <h4 className="text-sm font-semibold text-white">
                  Tip
                </h4>
                <p className="mt-1 text-sm text-gray-300">
                  Skim any topics marked with the warning icon to finish their examples before moving on.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-amber-300">
                  <AlertCircle className="h-4 w-4" />
                  Examples remaining
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Fully completed
                </div>
              </div>
            </section>
          </div>
        </div>

        <CTA />
      </article>

      <footer className="mt-12 text-center text-sm text-gray-500">
        You’re making steady progress—keep going.
      </footer>
    </main>
  );
}