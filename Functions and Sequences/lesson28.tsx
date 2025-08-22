Here’s a production‑ready Next.js page that rebuilds the provided HTML as a clean, accessible, and fully responsive component using TailwindCSS. It follows Next.js app‑router conventions, renders math with KaTeX where relevant, and paraphrases the original text to avoid copyright issues.

File: app/chapters/functions-sequences/end/page.tsx

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";

// Page metadata
export const metadata: Metadata = {
  title: "End of Chapter — Functions and Sequences",
  description:
    "You’ve wrapped up the Functions and Sequences chapter. Review your progress, revisit any incomplete items, and continue to your study plan.",
};

// Lightweight inline KaTeX renderer (server-safe)
function MathInline({
  expression,
  ariaLabel,
  className = "",
}: {
  expression: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expression, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

type SubTopic = {
  title: string | React.ReactNode;
  href: string;
  done?: boolean;
};

type Topic = {
  id: string; // e.g., "19.1"
  title: string | React.ReactNode;
  href: string;
  done?: boolean;
  subTopics?: SubTopic[];
};

const chapter = {
  number: 19,
  title: "Functions and Sequences",
  progressPercent: 100,
  lessonsRead: 28,
  lessonsTotal: 28,
};

// Paraphrased topic list
const topics: Topic[] = [
  { id: "19.1", title: "Overview", href: "/lesson/2381" },
  { id: "19.2", title: "How we write functions", href: "/lesson/588", done: true },
  { id: "19.3", title: "Function domains", href: "/lesson/2385" },
  { id: "19.4", title: "Function ranges", href: "/lesson/2387" },
  {
    id: "19.5",
    title: "Using min/max to find a function’s range",
    href: "/lesson/2382",
  },
  { id: "19.6", title: "Compositions of functions", href: "/lesson/590" },
  { id: "19.7", title: "Graphing functions", href: "/lesson/591", done: true },
  { id: "19.8", title: "Quadratic maxima and minima", href: "/lesson/2252" },
  {
    id: "19.9",
    title: "Applications: optimizing quadratics",
    href: "/lesson/2253",
  },
  {
    id: "19.10",
    title: (
      <>
        From <MathInline expression="f(x)" ariaLabel="f of x" /> to f(•)
      </>
    ),
    href: "/lesson/593",
  },
  { id: "19.11", title: "Custom symbols and operators", href: "/lesson/594" },
  {
    id: "19.12",
    title: "Algorithms",
    href: "/lesson/2363",
    subTopics: [
      {
        title: "Finding an algorithm’s overall effect",
        href: "/lesson/2364",
        done: false,
      },
    ],
  },
  { id: "19.13", title: "Function word problems", href: "/lesson/595" },
  {
    id: "19.14",
    title: "Probing function properties by testing values",
    href: "/lesson/2182",
  },
  { id: "19.15", title: "Functions and number properties", href: "/lesson/2168" },
  { id: "19.16", title: "Sequences", href: "/lesson/596" },
  { id: "19.17", title: "Recurrence notation", href: "/lesson/597" },
  { id: "19.18", title: "Arithmetic sequences", href: "/lesson/598" },
  {
    id: "19.19",
    title: "Sum of an arithmetic sequence",
    href: "/lesson/599",
  },
  {
    id: "19.20",
    title: "Evenly spaced tick marks",
    href: "/lesson/2261",
    subTopics: [
      {
        title: "Tick‑mark questions with nonconsecutive values",
        href: "/lesson/2262",
        done: true,
      },
      {
        title: "Evenly spaced number lines with exponents",
        href: "/lesson/2263",
        done: true,
      },
    ],
  },
  { id: "19.21", title: "Geometric sequences", href: "/lesson/600" },
  { id: "19.22", title: "Repeating sequences", href: "/lesson/2273" },
  {
    id: "19.23",
    title: "Canceling terms in a sequence",
    href: "/lesson/2266",
    done: true,
    subTopics: [
      {
        title: "Sum of a block of consecutive terms",
        href: "/lesson/2267",
        done: true,
      },
      {
        title: "Product of a block of consecutive terms",
        href: "/lesson/2268",
        done: true,
      },
    ],
  },
];

function StatusIcon({ done }: { done?: boolean }) {
  // Inline SVG for accessibility and no external deps
  if (done) {
    return (
      <svg
        aria-label="Completed"
        className="h-4 w-4 text-emerald-400"
        viewBox="0 0 20 20"
        role="img"
      >
        <path
          fill="currentColor"
          d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.707-9.707a1 1 0 0 0-1.414-1.414L9 10.172 7.707 8.879a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
        />
      </svg>
    );
  }
  return (
    <svg
      aria-label="Examples pending"
      className="h-4 w-4 text-amber-400"
      viewBox="0 0 20 20"
      role="img"
    >
      <path
        fill="currentColor"
        d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM9 5h2v6H9V5Zm0 8h2v2H9v-2Z"
      />
    </svg>
  );
}

function TopicItem({ topic }: { topic: Topic }) {
  const hasSubs = Array.isArray(topic.subTopics) && topic.subTopics.length > 0;
  return (
    <li className="list-none">
      <div className="rounded-lg transition-colors hover:bg-slate-800/40">
        <div className="relative flex items-center gap-3 px-3 py-3">
          <StatusIcon done={topic.done} />
          <Link
            href={topic.href || "#"}
            className="flex w-full items-center justify-between gap-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="shrink-0 text-sm font-semibold text-slate-300">
                {topic.id}
              </span>
              <h3 className="truncate text-slate-100">{topic.title}</h3>
            </div>
            <span aria-hidden className="text-slate-500">→</span>
          </Link>
        </div>
      </div>

      {hasSubs && (
        <ul className="ml-9 mt-2 space-y-1">
          {topic.subTopics!.map((st, idx) => (
            <li key={idx} className="list-none">
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-800/40">
                <StatusIcon done={st.done} />
                <Link href={st.href || "#"} className="text-slate-200">
                  {st.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}

      <hr className="my-3 border-slate-800" />
    </li>
  );
}

export default function Page() {
  const { progressPercent, lessonsRead, lessonsTotal } = chapter;

  return (
    <>
      {/* Skip link for a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-50 focus:px-4 focus:py-2 focus:text-slate-900"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12"
      >
        {/* Top nav bar replacement: progress summary */}
        <section
          aria-label="Chapter progress"
          className="mb-8 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
        >
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="text-slate-300">
              <span className="font-semibold text-slate-100">Chapter</span>{" "}
              Progress:{" "}
              <span className="font-semibold text-slate-100">
                {progressPercent}%
              </span>
            </div>
            <div className="text-slate-400">
              {lessonsRead} of {lessonsTotal} lessons viewed
            </div>
          </div>
          <div
            className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Completion progress"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </section>

        {/* Hero message with quote */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              Nice work—chapter complete!
            </h1>
            <p className="mt-2 text-slate-300">
              You’ve finished the chapter on Functions and Sequences. Browse the
              list to revisit any items, or jump ahead to your study plan.
            </p>
          </div>

          <figure className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <blockquote className="text-lg text-slate-200">
              Chances don’t just show up—you build them.
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-400">
              — inspired by Chris Grosser
            </figcaption>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-full bg-gradient-to-br from-sky-500/20 to-emerald-400/20 blur-2xl"
            />
          </figure>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: topics list */}
          <section
            aria-label={`Chapter ${chapter.number}: ${chapter.title}`}
            className="lg:col-span-2"
          >
            <header className="mb-4">
              <h2 className="text-xl font-semibold text-white">
                Chapter {chapter.number}: {chapter.title}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Legend:{" "}
                <span className="inline-flex items-center gap-1">
                  <StatusIcon done />
                  <span>Completed</span>
                </span>{" "}
                <span className="ml-4 inline-flex items-center gap-1">
                  <StatusIcon />
                  <span>Examples to review</span>
                </span>
              </p>
            </header>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40">
              <ul className="p-3">
                {topics.map((t) => (
                  <TopicItem key={t.id} topic={t} />
                ))}
              </ul>
            </div>
          </section>

          {/* Right: CTA card */}
          <aside
            aria-label="Next steps"
            className="lg:col-span-1 space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              Continue your plan
            </h3>
            <p className="text-slate-300">
              Ready to keep going? Head to your study plan to start the next
              activity.
            </p>
            <Link
              href="/study_plan"
              className="inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-2 font-semibold text-white shadow-sm ring-1 ring-inset ring-sky-400/50 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Go to Study Plan
            </Link>

            <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-amber-200">
              Heads‑up: items with the alert icon still have practice examples
              to complete. Revisiting those will strengthen retention.
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
```

Notes on the implementation:
- Accessibility
  - Includes a skip link, semantic landmarks, ARIA labels, and an explicit progressbar with aria-valuenow/min/max.
  - Icons are inline SVG with accessible labels.
- Responsiveness and performance
  - TailwindCSS utilities provide a fluid, responsive layout with lightweight, server-rendered markup.
- Next.js conventions
  - Uses app directory metadata export and a server component page by default.
- KaTeX usage
  - A small server-side MathInline component renders f(x) cleanly with KaTeX where it appears in the title list.
- Content rewriting
  - All headings, descriptions, and the quote are paraphrased to preserve meaning while avoiding copyright conflicts.