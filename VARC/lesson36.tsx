// app/verbal/chapter-3/end/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CircleAlert } from "lucide-react";

// KaTeX for the small progress formula
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "End of Chapter — RC Chapter 3 | GMAT Verbal",
  description:
    "Nice work—you’ve reached the end of Chapter 3. Review your completed topics, see what’s next, and jump back into your personalized Study Plan.",
};

type Lesson = {
  number: string;
  title: string;
  href: string;
  status: "completed" | "incomplete";
};

const lessons: Lesson[] = [
  { number: "3.1", title: "Introduction", href: "/lesson/1727", status: "completed" },
  { number: "3.2", title: "Detail question types", href: "/lesson/1728", status: "completed" },
  { number: "3.3", title: "Managing details while reading", href: "/lesson/1729", status: "incomplete" },
  { number: "3.4", title: "Locating information — a core RC skill", href: "/lesson/1730", status: "incomplete" },
  { number: "3.5", title: "Don’t stop at keywords — scan nearby lines", href: "/lesson/1731", status: "completed" },
  { number: "3.6", title: "Tracking synonyms and paraphrases", href: "/lesson/1732", status: "incomplete" },
  { number: "3.7", title: "What correct detail answers look like", href: "/lesson/1733", status: "completed" },
  { number: "3.8", title: "Detail answers from a single statement", href: "/lesson/1734", status: "incomplete" },
  { number: "3.9", title: "Detail answers combining multiple statements", href: "/lesson/1735", status: "incomplete" },
  { number: "3.10", title: "Detail trap 1: distortion", href: "/lesson/1736", status: "incomplete" },
  { number: "3.11", title: "Detail trap 2: overreach", href: "/lesson/1737", status: "incomplete" },
  { number: "3.12", title: "Detail trap 3: speculation", href: "/lesson/1738", status: "incomplete" },
  { number: "3.13", title: "Detail trap 4: opposite", href: "/lesson/1761", status: "incomplete" },
  { number: "3.14", title: "Detail trap 5: half-right", href: "/lesson/1762", status: "incomplete" },
  { number: "3.15", title: "Detail trap 6: nearby-but-wrong", href: "/lesson/1739", status: "incomplete" },
  { number: "3.16", title: "Detail trap 7: wording match, wrong idea", href: "/lesson/1740", status: "incomplete" },
  { number: "3.17", title: "Detail trap 8: wrong comparison", href: "/lesson/1741", status: "incomplete" },
  { number: "3.18", title: "Detail trap 9: mix-up", href: "/lesson/1742", status: "incomplete" },
  { number: "3.19", title: "Detail “EXCEPT” questions", href: "/lesson/1743", status: "incomplete" },
  { number: "3.20", title: "Inference questions", href: "/lesson/1744", status: "completed" },
  { number: "3.21", title: "What correct inference answers look like", href: "/lesson/1745", status: "incomplete" },
  { number: "3.22", title: "Inference trap 1: distortion", href: "/lesson/1746", status: "incomplete" },
  { number: "3.23", title: "Inference trap 2: overreach", href: "/lesson/1747", status: "incomplete" },
  { number: "3.24", title: "Inference trap 3: speculation", href: "/lesson/1748", status: "incomplete" },
  { number: "3.25", title: "Inference trap 4: opposite", href: "/lesson/1749", status: "incomplete" },
  { number: "3.26", title: "Inference trap 5: half-right", href: "/lesson/1750", status: "incomplete" },
  { number: "3.27", title: "Inference trap 6: nearby", href: "/lesson/1751", status: "incomplete" },
  { number: "3.28", title: "Inference trap 7: wording match, wrong idea", href: "/lesson/1752", status: "incomplete" },
  { number: "3.29", title: "Inference trap 8: wrong comparison", href: "/lesson/1753", status: "incomplete" },
  { number: "3.30", title: "Inference trap 9: mix-up", href: "/lesson/1754", status: "incomplete" },
  { number: "3.31", title: "Inference “EXCEPT” / “LEAST” questions", href: "/lesson/1755", status: "incomplete" },
  { number: "3.32", title: "Application questions", href: "/lesson/1756", status: "completed" },
  { number: "3.33", title: "Strategy for application questions", href: "/lesson/1757", status: "incomplete" },
  { number: "3.34", title: "Find-the-assumption questions", href: "/lesson/1758", status: "incomplete" },
  { number: "3.35", title: "Weaken the argument", href: "/lesson/1759", status: "incomplete" },
  { number: "3.36", title: "Strengthen the argument", href: "/lesson/1760", status: "incomplete" },
];

const total = lessons.length;
const completed = lessons.filter((l) => l.status === "completed").length;
const progress = Math.round((completed / total) * 100);

function LessonItem({ item }: { item: Lesson }) {
  const isDone = item.status === "completed";
  return (
    <li className="list-none">
      <div className="rounded-lg transition-colors hover:bg-gray-800/40">
        <div className="relative flex items-start gap-3 p-3">
          <span
            aria-hidden="true"
            className="mt-1 shrink-0"
            title={isDone ? "Completed" : "Not completed"}
          >
            {isDone ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            ) : (
              <CircleAlert className="h-5 w-5 text-amber-400" />
            )}
          </span>

          <Link
            href={item.href}
            className="group block w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-200 group-hover:text-white">
                <span className="sr-only">Lesson </span>
                <span className="text-gray-400">{item.number}</span>
                <span className="mx-2">•</span>
                <span>{item.title}</span>
              </h3>
              <span className="text-xs text-gray-500">
                {isDone ? "Done" : "To do"}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <hr className="border-gray-800/60" />
    </li>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <a
        href="#chapter-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 rounded bg-emerald-500 px-3 py-2 text-sm font-medium text-black"
      >
        Skip to main content
      </a>

      <header className="mb-8">
        <div className="flex items-center gap-3">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
            aria-label="Back to Study Plan"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Study Plan
          </Link>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          You did it — chapter complete!
        </h1>
        <p className="mt-2 text-gray-300">
          You’ve reached the end of this chapter. Review your progress below and
          continue with your personalized study path.
        </p>

        <section className="mt-6" aria-label="Chapter progress">
          <div className="flex items-center justify-between text-sm text-gray-300">
            <p>
              Chapter progress:{" "}
              <span className="font-semibold text-white">{progress}%</span>
            </p>
            <p className="text-gray-400">
              {completed} / {total} lessons read
            </p>
          </div>
          <div
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-800"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Progress through this chapter"
          >
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Progress is computed with{" "}
            <InlineMath math={"P = \\frac{100\\,c}{t}"} /> where c = {completed} and t = {total}.
          </p>
        </section>
      </header>

      <article id="chapter-main" className="space-y-10 text-gray-300">
        <section
          aria-labelledby="quote-heading"
          className="rounded-xl border border-gray-800 bg-gray-900/40 p-5"
        >
          <h2 id="quote-heading" className="sr-only">
            Encouragement
          </h2>
          <figure>
            <blockquote className="text-lg text-gray-200">
              Staying eager after each setback is often what turns effort into
              success.
            </blockquote>
            <figcaption className="mt-1 text-sm text-gray-400">
              — inspired by Winston Churchill
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="outline-heading">
          <h2
            id="outline-heading"
            className="text-lg font-semibold text-gray-200"
          >
            Chapter 3: Detail, Inference, Application, Assumptions, Weaken, and Strengthen
          </h2>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr,360px]">
            <div className="rounded-xl border border-gray-800 bg-gray-900/30">
              <ul className="p-2 md:p-3">
                {lessons.map((lesson) => (
                  <LessonItem key={lesson.number} item={lesson} />
                ))}
              </ul>
            </div>

            <aside
              aria-labelledby="cta-heading"
              className="rounded-xl border border-gray-800 bg-gray-900/40 p-6"
            >
              <h3
                id="cta-heading"
                className="text-base font-semibold text-white"
              >
                Keep your momentum
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Ready for what’s next? Jump back into your Study Plan to continue
                with the next recommended step.
              </p>
              <div className="mt-4">
                <Link
                  href="/study_plan"
                  className="inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-950"
                >
                  Go to Study Plan
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}