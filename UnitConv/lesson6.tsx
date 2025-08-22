import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "katex/dist/katex.min.css";
import katex from "katex";
import { Fragment } from "react";

// Page metadata
export const metadata: Metadata = {
  title: "End of Chapter: Unit Conversions | GMAT Quant",
  description:
    "Chapter wrap‑up for Unit Conversions. See your progress, review lesson links, and jump back to your Study Plan. Includes a quick refresher with properly formatted conversion equations.",
};

// Server component to render KaTeX safely
function MathRender({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const __html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "html",
    strict: "warn",
    trust: false,
  });

  const role = ariaLabel ? "img" : undefined;
  const label = ariaLabel ? { "aria-label": ariaLabel } : {};

  const Tag = display ? "div" : "span";

  return <Tag role={role} {...label} className="not-prose" dangerouslySetInnerHTML={{ __html }} />;
}

// Small, reusable icons (inline SVG for performance)
function CheckIcon({ className = "h-4 w-4 text-emerald-400" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.435a1 1 0 111.414-1.415l3.01 3.01 6.657-6.657a1 1 0 011.333-.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AlertIcon({ className = "h-4 w-4 text-amber-400" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a1 1 0 01.894.553l9 18A1 1 0 0121 22H3a1 1 0 01-.894-1.447l9-18A1 1 0 0112 2zm0 6a1 1 0 00-1 1v5a1 1 0 102 0V9a1 1 0 00-1-1zm0 9a1.25 1.25 0 100 2.5A1.25 1.25 0 0012 17z" />
    </svg>
  );
}

// Data for the lesson list (text rewritten; links preserved)
type Lesson = {
  id: number;
  number: string;
  title: string;
  href: string;
  status: "done" | "pending";
  subtopics?: Array<{ title: string; href: string; status: "done" | "pending" }>;
};

const lessons: Lesson[] = [
  {
    id: 544,
    number: "8.1",
    title: "Unit conversion basics",
    href: "/lesson/544",
    status: "done",
  },
  {
    id: 545,
    number: "8.2",
    title: "A step‑by‑step method for converting units",
    href: "/lesson/545",
    status: "pending",
  },
  {
    id: 546,
    number: "8.3",
    title: "Converting between two systems of measurement",
    href: "/lesson/546",
    status: "pending",
  },
  {
    id: 2152,
    number: "8.4",
    title: "Two‑stage conversions (chain conversions)",
    href: "/lesson/2152",
    status: "pending",
    subtopics: [
      {
        title: "Conversions that include variables",
        href: "/lesson/2153",
        status: "pending",
      },
    ],
  },
  {
    id: 2184,
    number: "8.5",
    title: "Dealing with squared and cubed units",
    href: "/lesson/2184",
    status: "pending",
  },
];

// Client component for modal and CTA
function Actions() {
  "use client";
  const onOpen = () => {
    const dialog = document.getElementById("incomplete-examples") as HTMLDialogElement | null;
    dialog?.showModal();
  };
  const onClose = () => {
    const dialog = document.getElementById("incomplete-examples") as HTMLDialogElement | null;
    dialog?.close();
  };

  return (
    <Fragment>
      <button
        onClick={onOpen}
        className="inline-flex w-full items-center justify-center rounded-md border border-indigo-500 px-4 py-2 text-indigo-200 transition hover:bg-indigo-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        Go to Study Plan
      </button>

      <dialog
        id="incomplete-examples"
        className="rounded-lg backdrop:bg-black/60 open:animate-in open:fade-in data-[closing]:animate-out data-[closing]:fade-out w-[min(92vw,640px)] bg-slate-900 text-slate-100"
        aria-labelledby="incomplete-title"
      >
        <div className="p-6">
          <div className="mx-auto mb-4 grid place-items-center">
            <Image
              src="/images/examples-pending.svg"
              alt="Reminder to finish example questions"
              width={160}
              height={120}
              className="h-24 w-auto"
            />
          </div>
          <h3 id="incomplete-title" className="mb-2 text-center text-xl font-semibold">
            A quick heads‑up
          </h3>
          <p className="mx-auto mb-4 max-w-prose text-center text-slate-300">
            You still have example questions left in this chapter. For the best learning
            outcome, finish those examples first. Once you do, we&apos;ll unlock a tailored
            chapter review to reinforce your skills.
          </p>
          <p className="mb-6 text-center text-rose-300">
            The exclamation icon marks lessons with examples to complete.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/study_plan"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-4 py-2 text-slate-200 hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Return to Study Plan
            </Link>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              OK, stay here
            </button>
          </div>
        </div>
      </dialog>
    </Fragment>
  );
}

export default function Page() {
  const completedCount = lessons.filter((l) => l.status === "done").length;
  const totalLessons = lessons.length + (lessons.find((l) => l.subtopics)?.subtopics?.length ? 1 : 0);
  const progress = 100;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <a
        href="#chapter-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-slate-900"
      >
        Skip to main content
      </a>

      <header className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Link
            href="/study_plan"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span aria-hidden="true">←</span>
            Back to Study Plan
          </Link>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">Chapter 8: Unit Conversions</h1>
        <p className="text-slate-300">Chapter wrap‑up and next steps</p>
      </header>

      <section
        id="chapter-main"
        aria-label="Chapter completion summary"
        className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-slate-300">
              Progress: <span className="font-semibold text-slate-100">{progress} %</span>
            </p>
            <p className="text-slate-400">
              {completedCount} / 6 lessons read
            </p>
          </div>
          <div
            className="relative h-2 w-full overflow-hidden rounded bg-slate-800"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Chapter progress"
          >
            <span className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
          </div>

          <div className="mt-6 rounded-md bg-slate-800/50 p-4">
            <h2 className="mb-2 text-lg font-semibold text-white">Nice job—chapter complete!</h2>
            <p className="text-slate-300">
              You made it to the end of this chapter. Keep your momentum going by practicing the
              examples you haven’t finished, or jump back to your Study Plan to queue up what’s next.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60 p-5">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10" />
          <blockquote className="relative">
            <div className="mb-3 text-slate-200">
              “The strongest driver of progress is curiosity—when you want answers, you’ll keep
              moving forward until you find them.”
            </div>
            <cite className="text-sm text-slate-400">— Unknown</cite>
          </blockquote>
          <div className="mt-6 rounded-md bg-slate-800/50 p-4">
            <p className="mb-2 text-sm font-semibold text-slate-200">Quick refresher:</p>
            <div className="space-y-2 text-slate-300">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-400">Common factor</span>
                <MathRender expr="1\ \text{in} = 2.54\ \text{cm}" ariaLabel="One inch equals 2.54 centimeters" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-400">Rate conversion</span>
                <MathRender
                  expr="\frac{\text{km}}{\text{h}} \to \frac{\text{m}}{\text{s}}:\quad v_{\mathrm{m/s}} = v_{\mathrm{km/h}} \times \frac{1000}{3600}"
                  ariaLabel="Kilometers per hour to meters per second equals value multiplied by one thousand over three thousand six hundred"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Lesson list and next action" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800 p-4">
              <h2 className="text-xl font-semibold text-white">
                Chapter 8: Unit Conversions
              </h2>
            </div>
            <ul className="divide-y divide-slate-800">
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  <div className="group flex flex-col gap-3 p-4">
                    <div className="flex items-center gap-3">
                      {lesson.status === "done" ? (
                        <CheckIcon />
                      ) : (
                        <AlertIcon />
                      )}
                      <Link
                        href={lesson.href}
                        className="flex-1 text-slate-200 underline-offset-2 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-400"
                      >
                        <span className="font-semibold">{lesson.number}</span>
                        <span className="ml-2">{lesson.title}</span>
                      </Link>
                    </div>
                    {lesson.subtopics?.length ? (
                      <ul className="ml-7 space-y-2">
                        {lesson.subtopics.map((sub) => (
                          <li key={sub.href} className="flex items-center gap-2">
                            {sub.status === "done" ? (
                              <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              <AlertIcon className="h-3.5 w-3.5 text-amber-400" />
                            )}
                            <Link
                              href={sub.href}
                              className="text-slate-300 underline-offset-2 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-400"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="flex flex-col gap-4 rounded-lg border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-center text-lg font-semibold text-white">
            Ready for the next step?
          </h3>
          <div className="relative mx-auto h-36 w-full max-w-xs overflow-hidden rounded-md border border-slate-800 bg-slate-800/40">
            <Image
              src="/images/chapter-end-illustration.svg"
              alt="Keep going illustration"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <p className="text-center text-slate-300">
            Head to your Study Plan to continue your prep with the right next lesson or review set.
          </p>
          <Actions />
        </aside>
      </section>
    </main>
  );
}