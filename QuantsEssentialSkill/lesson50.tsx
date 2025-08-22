import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End of Chapter • Essential GMAT Quant Skills",
  description:
    "You’ve finished this chapter. Review your progress, skim the lesson checklist, and jump back to your study plan.",
};

type Status = "done" | "incompleteExamples" | "pending";

type Subtopic = {
  id: string;
  title: string;
  status: Status;
  href?: string;
};

type Topic = {
  id: string;
  code: string;
  title: string;
  status: Status;
  href?: string;
  subtopics?: Subtopic[];
};

const topics: Topic[] = [
  {
    id: "t-2-1",
    code: "2.1",
    title: "Fractions: types and mixed forms",
    status: "done",
    href: "/lesson/279",
    subtopics: [
      { id: "t-2-1-1", title: "Least common denominator strategies", status: "done", href: "/lesson/280" },
      { id: "t-2-1-2", title: "Add/subtract with shared denominators", status: "done", href: "/lesson/282" },
      { id: "t-2-1-3", title: "Add/subtract with unlike denominators", status: "done", href: "/lesson/283" },
      { id: "t-2-1-4", title: "Combine a whole number and a fraction", status: "done", href: "/lesson/284" },
      { id: "t-2-1-5", title: "Subtract a fraction from a whole number", status: "done", href: "/lesson/285" },
      { id: "t-2-1-6", title: "Multiply and divide fractions", status: "done", href: "/lesson/286" },
      { id: "t-2-1-7", title: "Whole number ×/÷ fraction shortcuts", status: "incompleteExamples", href: "/lesson/287" },
      { id: "t-2-1-8", title: "Streamline calculations when possible", status: "incompleteExamples", href: "/lesson/288" },
      { id: "t-2-1-9", title: "Reciprocals and 1 ÷ fraction", status: "incompleteExamples", href: "/lesson/289" },
      { id: "t-2-1-10", title: "Complex fractions", status: "incompleteExamples", href: "/lesson/1590" },
    ],
  },
  {
    id: "t-2-2",
    code: "2.2",
    title: "Compare fractions efficiently",
    status: "done",
    href: "/lesson/291",
    subtopics: [
      { id: "t-2-2-1", title: "Use benchmarks (e.g., 1/2) to compare", status: "incompleteExamples", href: "/lesson/292" },
      { id: "t-2-2-2", title: "Cross‑multiplication (“bow tie”) method", status: "incompleteExamples", href: "/lesson/293" },
      { id: "t-2-2-3", title: "Common denominator approach", status: "incompleteExamples", href: "/lesson/294" },
      { id: "t-2-2-4", title: "Common numerator approach", status: "incompleteExamples", href: "/lesson/295" },
    ],
  },
  {
    id: "t-2-3",
    code: "2.3",
    title: "Add or subtract the same constant to numerator and denominator",
    status: "pending",
    href: "/lesson/296",
  },
  {
    id: "t-2-4",
    code: "2.4",
    title: "Decimals",
    status: "done",
    href: "/lesson/297",
    subtopics: [
      { id: "t-2-4-1", title: "Add and subtract decimals", status: "incompleteExamples", href: "/lesson/298" },
      { id: "t-2-4-2", title: "Multiply decimals", status: "incompleteExamples", href: "/lesson/299" },
      { id: "t-2-4-3", title: "Divide decimals", status: "incompleteExamples", href: "/lesson/2112" },
    ],
  },
  { id: "t-2-5", code: "2.5", title: "Rounding rules", status: "pending", href: "/lesson/1589" },
  { id: "t-2-6", code: "2.6", title: "Order decimals by size", status: "pending", href: "/lesson/302" },
  { id: "t-2-7", code: "2.7", title: "Percents overview", status: "pending", href: "/lesson/1642" },
  {
    id: "t-2-8",
    code: "2.8",
    title: "Convert fractions, decimals, and percents",
    status: "done",
    href: "/lesson/304",
    subtopics: [
      { id: "t-2-8-1", title: "Decimal → percent", status: "done", href: "/lesson/305" },
      { id: "t-2-8-2", title: "Percent → decimal", status: "done", href: "/lesson/306" },
      { id: "t-2-8-3", title: "Fraction → decimal", status: "incompleteExamples", href: "/lesson/307" },
      { id: "t-2-8-4", title: "Decimal → fraction", status: "done", href: "/lesson/308" },
    ],
  },
  { id: "t-2-9", code: "2.9", title: "Common fractions and their decimal/percent equivalents", status: "pending", href: "/lesson/309" },
  {
    id: "t-2-10",
    code: "2.10",
    title: "Squares and square roots",
    status: "pending",
    href: "/lesson/1591",
    subtopics: [
      { id: "t-2-10-1", title: "Exponent properties", status: "incompleteExamples", href: "/lesson/2368" },
      { id: "t-2-10-2", title: "Squares/roots of fractions", status: "incompleteExamples", href: "/lesson/311" },
      { id: "t-2-10-3", title: "Numbers between 0 and 1", status: "incompleteExamples", href: "/lesson/312" },
      { id: "t-2-10-4", title: "Square‑root properties", status: "incompleteExamples", href: "/lesson/2297" },
    ],
  },
  { id: "t-2-11", code: "2.11", title: "Test rules with smart sample values", status: "pending", href: "/lesson/313" },
  { id: "t-2-12", code: "2.12", title: "Estimation tactics", status: "pending", href: "/lesson/1614" },
  { id: "t-2-13", code: "2.13", title: "Time‑saving problem‑solving ideas", status: "pending", href: "/lesson/1633" },
  { id: "t-2-14", code: "2.14", title: "Number line and signed values", status: "pending", href: "/lesson/316" },
  { id: "t-2-15", code: "2.15", title: "Opposites and absolute value", status: "pending", href: "/lesson/317" },
  {
    id: "t-2-16",
    code: "2.16",
    title: "Order of operations (PEMDAS)",
    status: "pending",
    href: "/lesson/318",
    subtopics: [{ id: "t-2-16-1", title: "Order of operations inside fractions", status: "incompleteExamples", href: "/lesson/319" }],
  },
  { id: "t-2-17", code: "2.17", title: "Addition shortcuts", status: "pending", href: "/lesson/320" },
  { id: "t-2-18", code: "2.18", title: "Multiplication shortcuts", status: "pending", href: "/lesson/321" },
  {
    id: "t-2-19",
    code: "2.19",
    title: "Distributive property",
    status: "pending",
    href: "/lesson/322",
    subtopics: [{ id: "t-2-19-1", title: "Factor by distributing in reverse", status: "incompleteExamples", href: "/lesson/323" }],
  },
  { id: "t-2-20", code: "2.20", title: "Rewrite numbers using + and −", status: "pending", href: "/lesson/1645" },
  {
    id: "t-2-21",
    code: "2.21",
    title: "Intro to factorials",
    status: "pending",
    href: "/lesson/1632",
    subtopics: [{ id: "t-2-21-1", title: "Factor expressions with factorials", status: "incompleteExamples", href: "/lesson/1636" }],
  },
  { id: "t-2-22", code: "2.22", title: "Equivalent fractions", status: "pending", href: "/lesson/2386" },
];

function StatusBadge({ status }: { status: Status }) {
  const map = {
    done: { label: "Completed", className: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30" },
    incompleteExamples: { label: "Examples pending", className: "bg-amber-500/15 text-amber-300 ring-amber-400/30" },
    pending: { label: "Not started", className: "bg-slate-500/15 text-slate-300 ring-slate-400/30" },
  } as const;

  const cfg = map[status];
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${cfg.className}`}
      aria-label={cfg.label}
    >
      {cfg.label}
    </span>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full" role="group" aria-label="Chapter progress">
      <div className="mb-1 flex items-center justify-between text-sm text-gray-300">
        <span>Chapter progress</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700/70">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-indigo-400"
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
        />
      </div>
    </div>
  );
}

function LessonItem({ item }: { item: Topic | Subtopic }) {
  const isTopic = (x: any): x is Topic => "code" in x;
  return (
    <li className="group relative rounded-md border border-slate-700/50 bg-slate-800/40 p-3 transition hover:border-slate-600/60 hover:bg-slate-800/60">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm text-slate-200">
            {isTopic(item) && <span className="mr-2 inline-block w-10 shrink-0 text-slate-400">{item.code}</span>}
            <Link className="underline-offset-2 hover:underline" href={item.href || "#"}>
              {item.title}
            </Link>
          </p>
        </div>
        <StatusBadge status={item.status} />
      </div>
      {"subtopics" in item && item.subtopics?.length ? (
        <details className="mt-2">
          <summary className="cursor-pointer select-none text-xs text-slate-300 hover:text-slate-200">
            {item.subtopics.length} subtopic{item.subtopics.length > 1 ? "s" : ""}
          </summary>
          <ul className="mt-2 space-y-1.5">
            {item.subtopics.map((s) => (
              <li key={s.id} className="flex items-start justify-between gap-3 rounded bg-slate-900/40 p-2">
                <Link className="text-xs text-slate-200 underline-offset-2 hover:underline" href={s.href || "#"}>
                  {s.title}
                </Link>
                <StatusBadge status={s.status} />
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </li>
  );
}

export default function Page() {
  const totalLessons = 50;
  const completedLessons = 50;
  const progress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-white md:text-3xl">Essential GMAT Quant Skills</h1>
          <p className="mt-1 text-sm text-gray-300">Chapter 2 • Checklist and next steps</p>
        </div>
        <Link
          href="/study_plan"
          className="inline-flex items-center rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:border-slate-500 hover:bg-slate-700"
          aria-label="Back to Study Plan"
        >
          ← Back to Study Plan
        </Link>
      </header>

      <section aria-labelledby="congrats" className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-700/60 bg-gradient-to-b from-slate-800/70 to-slate-900/60 p-5">
          <h2 id="congrats" className="text-xl font-semibold text-white">
            Nice work — you’ve wrapped up this chapter!
          </h2>
          <p className="mt-2 text-gray-300">
            You reached the finish line for this section. Review the lesson list below if you want to revisit any topics,
            then continue to your plan when you’re ready.
          </p>
          <div className="mt-5">
            <ProgressBar value={progress} />
            <p className="mt-2 text-sm text-gray-400">
              {completedLessons} / {totalLessons} lessons viewed
            </p>
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/60 p-5">
          <blockquote className="text-lg italic text-slate-100">“A hurdle often becomes a stepping‑stone.”</blockquote>
          <figcaption className="mt-2 text-sm text-gray-400">— Prescott</figcaption>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl" aria-hidden="true" />
        </figure>
      </section>

      <section aria-labelledby="lesson-list" className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 id="lesson-list" className="mb-3 text-lg font-semibold text-white">
            Chapter outline
          </h2>

          <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-4">
            <ul className="space-y-3">
              {topics.map((t) => (
                <LessonItem key={t.id} item={t} />
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span className="mr-2 font-medium text-gray-300">Legend:</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" aria-hidden="true" />
                Completed
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400/70" aria-hidden="true" />
                Examples pending
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400/70" aria-hidden="true" />
                Not started
              </span>
            </div>
          </div>
        </div>

        <aside aria-labelledby="next-step" className="lg:col-span-1">
          <div className="sticky top-6 rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
            <h2 id="next-step" className="text-base font-semibold text-white">
              Keep the momentum going
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Head back to your personalized plan to start the next item in your sequence.
            </p>
            <Link
              href="/study_plan"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-sky-300/60"
            >
              Go to Study Plan
            </Link>

            <div className="mt-5 rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-200">
              Tip: Items marked “Examples pending” mean you’ve viewed the lesson but still have unsolved examples to
              complete. Finishing them will unlock a reinforcement quiz tailored to this chapter.
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}