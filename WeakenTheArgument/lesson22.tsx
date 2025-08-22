import type { Metadata } from "next";
import Link from "next/link";

type Subtopic = {
  title: string;
  href: string;
  done?: boolean;
};

type Lesson = {
  number: string;
  title: string;
  href: string;
  done?: boolean;
  subtopics?: Subtopic[];
};

export const metadata: Metadata = {
  title: "End of Chapter • Weakening Arguments | GMAT Verbal",
  description:
    "You’ve finished Chapter 3: Weakening Arguments. Review the lesson outline and proceed to your study plan.",
};

const lessons: Lesson[] = [
  {
    number: "3.1",
    title: "Overview",
    href: "/lesson/3-1",
    done: true,
  },
  {
    number: "3.2",
    title: "Undermining by Targeting Assumptions",
    href: "/lesson/3-2",
    done: true,
  },
  {
    number: "3.3",
    title: "Recognizing Weaken-the-Argument Prompts",
    href: "/lesson/3-3",
    done: true,
  },
  {
    number: "3.4",
    title: "A Practical Game Plan for Weaken Questions",
    href: "/lesson/3-4",
    done: true,
  },
  {
    number: "3.5",
    title: "Weakening Doesn’t Mean Disproving",
    href: "/lesson/3-5",
    done: true,
  },
  {
    number: "3.6",
    title: "When New Information in Choices Matters",
    href: "/lesson/3-6",
    done: true,
  },
  {
    number: "3.7",
    title: "How Correct Weaken Answers Typically Work",
    href: "/lesson/3-7",
    done: true,
    subtopics: [
      {
        title:
          "Type 1: Breaks a False Either/Or by Offering a Third Path",
        href: "/lesson/3-7-1",
        done: true,
      },
      {
        title:
          "Type 2: Challenges a Cause-and-Effect Claim",
        href: "/lesson/3-7-2",
        done: true,
      },
      {
        title:
          "Type 3: Shows a Supporting Generalization Is Unsound",
        href: "/lesson/3-7-3",
        done: true,
      },
      {
        title:
          "Type 4: Exposes a Flawed Comparison",
        href: "/lesson/3-7-4",
        done: true,
      },
      {
        title:
          "Type 5: Mixes Up Counts and Percentages",
        href: "/lesson/3-7-5",
        done: true,
      },
      {
        title:
          "Type 6: Adds Facts Showing a Plan Would Fail",
        href: "/lesson/3-7-6",
        done: true,
      },
      {
        title:
          "Type 7: Reveals That a Supposedly Doomed Plan Can Work",
        href: "/lesson/3-7-7",
        done: true,
      },
    ],
  },
  {
    number: "3.8",
    title:
      "Spotting Traps vs. Genuine Weakeners",
    href: "/lesson/3-8",
    done: true,
  },
  {
    number: "3.9",
    title:
      "Common Wrong Answers in Weaken Questions",
    href: "/lesson/3-9",
    done: true,
    subtopics: [
      {
        title:
          "Strengtheners: The Opposite of What You Need",
        href: "/lesson/3-9-1",
        done: true,
      },
      {
        title:
          "Pseudo‑Weakeners That Don’t Hit the Logic",
        href: "/lesson/3-9-2",
        done: true,
      },
      {
        title:
          "Frameshifts: Undermining the Wrong Conclusion",
        href: "/lesson/3-9-3",
        done: true,
      },
      {
        title:
          "Relevant but Incorrect Choices",
        href: "/lesson/3-9-4",
        done: true,
      },
      {
        title:
          "Choices that Appear to Attack Premises",
        href: "/lesson/3-9-5",
        done: true,
      },
    ],
  },
  {
    number: "3.10",
    title:
      "Tricky Stems Using EXCEPT and NOT",
    href: "/lesson/3-10",
    done: true,
  },
];

function ProgressBar({ read, total }: { read: number; total: number }) {
  const percent = Math.round((read / total) * 100);
  return (
    <div aria-labelledby="chapter-progress" className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-400">
        <div id="chapter-progress" className="font-medium">
          Progress: {percent}%
        </div>
        <div aria-live="polite" className="text-gray-400">
          {read} / {total} lessons completed
        </div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <li className="list-none">
      <div className="rounded-md bg-gray-800/40 p-3 hover:bg-gray-800/60">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
              lesson.done ? "bg-green-600/20 text-green-400" : "bg-yellow-600/20 text-yellow-400"
            }`}
          >
            {lesson.done ? "✓" : "!"}
          </span>
          <div className="flex-1">
            <Link
              href={lesson.href}
              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="m-0 text-base font-medium text-gray-100">
                <span className="mr-2 tabular-nums">{lesson.number}</span>
                <span className="align-middle">{lesson.title}</span>
                <span className="sr-only">
                  {lesson.done ? " (completed)" : " (not completed)"}
                </span>
              </h3>
            </Link>
            {lesson.subtopics && lesson.subtopics.length > 0 && (
              <ul className="mt-2 space-y-1 pl-7">
                {lesson.subtopics.map((st, idx) => (
                  <li key={idx}>
                    <div className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded ${
                          st.done ? "bg-green-600/20 text-green-400" : "bg-yellow-600/20 text-yellow-400"
                        }`}
                      >
                        {st.done ? "•" : "!"}
                      </span>
                      <Link
                        href={st.href}
                        className="text-sm text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {st.title}
                        <span className="sr-only">
                          {st.done ? " (completed)" : " (not completed)"}
                        </span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Page() {
  const totalLessons =
    lessons.length +
    lessons.reduce((acc, l) => acc + (l.subtopics ? l.subtopics.length : 0), 0);
  const completed =
    lessons.filter((l) => l.done).length +
    lessons.reduce(
      (acc, l) => acc + (l.subtopics ? l.subtopics.filter((s) => s.done).length : 0),
      0
    );

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/study-plan" className="hover:text-gray-200">
                Study Plan
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">GMAT Verbal</li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-200">Chapter 3</li>
          </ol>
        </nav>
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Weakening Arguments — Chapter Complete
        </h1>
        <p className="mt-2 text-gray-300">
          Nice work—you’ve reached the end of this chapter.
        </p>
      </header>

      <section
        aria-labelledby="chapter-summary"
        className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12"
      >
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6">
            <h2 id="chapter-summary" className="text-xl font-semibold text-gray-100">
              Chapter 3: Weakening Arguments
            </h2>
            <div className="mt-4">
              <ProgressBar read={completed} total={totalLessons} />
            </div>
            <blockquote className="mt-6 rounded-md bg-gray-900/50 p-4 text-gray-300">
              Growth tends to happen when you reach beyond what’s comfortable.
            </blockquote>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6">
            <h3 className="text-lg font-medium text-gray-100">What’s next?</h3>
            <p className="mt-2 text-gray-300">
              Keep your momentum going—head back to your study plan for the next activity.
            </p>
            <div className="mt-4">
              <Link
                href="/study-plan"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Go to Study Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="lesson-list" className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 id="lesson-list" className="mb-4 text-lg font-semibold text-gray-100">
            Lesson Outline
          </h2>
          <ul className="space-y-3">
            {lessons.map((lesson) => (
              <LessonItem key={lesson.number} lesson={lesson} />
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 text-center lg:text-left">
            <h3 className="text-base font-semibold text-gray-100">
              Continue your prep
            </h3>
            <p className="mt-2 text-gray-300">
              You’ve wrapped up this chapter. Review any lessons as needed, then continue with your personalized plan.
            </p>
            <div className="mt-4">
              <Link
                href="/study-plan"
                className="inline-flex w-full items-center justify-center rounded-md border border-blue-500 px-4 py-2 text-sm font-medium text-blue-400 hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Open Study Plan
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}