import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.11 Skip Within a Question, Not Between Questions | Data Insights",
  description:
    "Learn the navigation rules for the Data Insights section: you can answer parts of a question in any order, but you must complete a question before moving to the next.",
};

export default function Page() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12"
      aria-labelledby="page-title"
    >
      <header className="mb-8">
        <h1
          id="page-title"
          className="mt-2 text-2xl font-bold text-white md:text-3xl"
        >
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.11 You Can Reorder Parts Within a Question, But Not Jump Between Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the Data Insights section, you are free to tackle the parts of a
          single question in whatever sequence makes sense to you. However, you
          can’t hop to a different question until you’ve submitted all parts of
          the current one.
        </p>

        <MustKnow>
          Within a DI item, you can answer parts in any order. You must finish
          the entire question before moving on to the next.
        </MustKnow>

        <p>
          After you’ve worked through every question in the section, you may
          have a chance—time permitting—to revisit earlier questions you’ve
          already answered. This rule mirrors the navigation limits you’ll see
          elsewhere on the GMAT.
        </p>

        <section aria-labelledby="what-it-means" className="space-y-3">
          <h3 id="what-it-means" className="text-base font-semibold text-gray-100">
            What this means in practice
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Prioritize the parts you find easiest within the current question,
              then circle back to the trickier parts.
            </li>
            <li>
              Don’t try to open a new question until you’ve answered every part
              of the one on your screen.
            </li>
            <li>
              If time remains at the end of the section, you can review
              completed questions.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}