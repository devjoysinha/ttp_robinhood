import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1. Introduction to GMAT Reading Comprehension | RC 1.1",
  description:
    "Why strong reading matters for the GMAT, the mindset shift most test‑takers need, and what you’ll learn in this Reading Comprehension module.",
};

function Formula({
  expr,
  display = false,
  srText,
}: {
  expr: string;
  display?: boolean;
  srText: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });
  return (
    <figure className="my-4">
      <span className="sr-only">{srText}</span>
      <div
        aria-hidden="true"
        className={display ? "katex-block" : "katex-inline"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction To GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strong reading is one of the biggest differentiators on the GMAT. Top
          scorers almost always read efficiently and precisely. If you invest
          the time to upgrade your reading skills, that effort pays off on test
          day and well beyond.
        </p>

        <MustKnow>
          Becoming a powerful reader takes focused practice and patience. The
          time you put in compounds—boosting your GMAT score and strengthening
          your performance in school and at work.
        </MustKnow>

        <p>
          In this module, you’ll build the core knowledge, habits, and
          strategies that drive Reading Comprehension success. By the end, you
          will have a clear process for breaking down passages, anticipating
          questions, and selecting answers with confidence.
        </p>

        <p>
          Many test‑takers need a reset. Some haven’t practiced deliberately;
          others have drilled for hours using shortcuts that don’t hold up under
          pressure. Here, we replace guesswork and gimmicks with a method that
          is deliberate, teachable, and repeatable.
        </p>

        <p>
          From here on out, we’ll emphasize fundamentals done right—active
          reading, evidence‑based thinking, and disciplined pacing. Let’s start
          with the mindset that unlocks mastery of Reading Comprehension.
        </p>

        <section aria-labelledby="pacing-tip" className="rounded-lg bg-gray-900/40 p-4">
          <h3 id="pacing-tip" className="mb-2 text-base font-semibold text-white">
            A quick lens on pacing
          </h3>
          <p>
            When you plan your study, it can help to think in terms of reading
            rate. If you aim to read W words in T minutes, your target rate r is:
          </p>
          <Formula expr={"r = \\\\frac{W}{T} \\\\ \\text{ (words per minute)}"} display srText="r equals W divided by T, in words per minute" />
          <p className="text-sm text-gray-400">
            Don’t chase speed first—build accuracy and comprehension, then let
            speed grow naturally as your process becomes automatic.
          </p>
        </section>
      </article>
    </main>
  );
}