import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.6 Short vs. Long RC Passages | GMAT Reading Comprehension",
  description:
    "Learn how GMAT Reading Comprehension passages are categorized as short or long, how many of each you’ll typically see, and why length doesn’t equal difficulty.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.6 Short vs. Long Reading Comprehension Passages
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          GMAT Reading Comprehension passages are grouped into two buckets:
          short and long. The label is based on how many lines and words the
          passage contains rather than how hard it is to understand.
        </p>

        <section aria-labelledby="short-passages">
          <h3 id="short-passages" className="text-xl font-semibold text-white">
            What counts as a short passage?
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Usually 1–2 paragraphs that fit within roughly 50 lines on screen.
            </li>
            <li>
              About 200–250 words in total. On rare occasions, a short passage
              may stretch to 3 paragraphs.
            </li>
            <li>Typically paired with 3 questions, though exceptions exist.</li>
          </ul>

          <MustKnow>
            Short passages typically fit within ~50 lines on screen and span
            about 200–250 words, most often in 1–2 paragraphs. Occasionally,
            you’ll see 3 paragraphs and still be in the “short” category.
          </MustKnow>
        </section>

        <section aria-labelledby="short-preview">
          <h3 id="short-preview" className="text-xl font-semibold text-white">
            How a short passage might appear
          </h3>
          <div
            aria-label="Illustrative mock layout of a short passage"
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-4"
          >
            <div className="space-y-2">
              <div className="h-3 w-5/6 rounded bg-gray-700" />
              <div className="h-3 w-11/12 rounded bg-gray-700" />
              <div className="h-3 w-10/12 rounded bg-gray-700" />
              <div className="h-3 w-2/3 rounded bg-gray-700" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-4/5 rounded bg-gray-700" />
              <div className="h-3 w-10/12 rounded bg-gray-700" />
              <div className="h-3 w-9/12 rounded bg-gray-700" />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Note: This is a simple placeholder to convey layout only.
            </p>
          </div>
        </section>

        <section aria-labelledby="long-passages">
          <h3 id="long-passages" className="text-xl font-semibold text-white">
            What counts as a long passage?
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Commonly 3–4 paragraphs that exceed about 50 lines on screen.
            </li>
            <li>
              More than 300 words overall. Occasionally, a long passage may
              consist of only 2 paragraphs.
            </li>
            <li>Often accompanied by 4 questions, but not always.</li>
          </ul>

          <MustKnow>
            Long passages typically run beyond ~50 lines and surpass 300 words,
            usually in 3–4 paragraphs. Sometimes you’ll see just 2 paragraphs,
            yet the passage still qualifies as long.
          </MustKnow>
        </section>

        <section aria-labelledby="long-preview">
          <h3 id="long-preview" className="text-xl font-semibold text-white">
            How a long passage might appear
          </h3>
          <div
            aria-label="Illustrative mock layout of a long passage"
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-4"
          >
            <div className="space-y-2">
              <div className="h-3 w-11/12 rounded bg-gray-700" />
              <div className="h-3 w-10/12 rounded bg-gray-700" />
              <div className="h-3 w-9/12 rounded bg-gray-700" />
              <div className="h-3 w-4/6 rounded bg-gray-700" />
              <div className="h-3 w-3/5 rounded bg-gray-700" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-10/12 rounded bg-gray-700" />
              <div className="h-3 w-11/12 rounded bg-gray-700" />
              <div className="h-3 w-9/12 rounded bg-gray-700" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-5/6 rounded bg-gray-700" />
              <div className="h-3 w-10/12 rounded bg-gray-700" />
              <div className="h-3 w-2/3 rounded bg-gray-700" />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Note: This is a simple placeholder to convey layout only.
            </p>
          </div>
        </section>

        <section aria-labelledby="how-many">
          <h3 id="how-many" className="text-xl font-semibold text-white">
            How many short vs. long passages will I see?
          </h3>
          <p>
            Across the four Reading Comprehension passages you typically
            encounter, expect around two to three short passages and one to two
            long passages. Be prepared for any mix, since the exact split can
            vary.
          </p>

          <MustKnow>
            On test day, you’ll usually see 4 RC passages in total: commonly 2–3
            short and 1–2 long. The exact distribution isn’t guaranteed, so be
            ready for any combination.
          </MustKnow>
        </section>

        <section aria-labelledby="difficulty">
          <h3 id="difficulty" className="text-xl font-semibold text-white">
            Length does not equal difficulty
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Some long passages read smoothly; others are dense.</li>
            <li>Some short passages are straightforward; others are tricky.</li>
            <li>
              Question difficulty doesn’t always match the passage’s perceived
              difficulty.
            </li>
          </ul>

          <MustKnow>
            Don’t judge a passage by its length. Both short and long passages
            can be easy or challenging, and the questions that follow don’t
            always mirror the passage’s difficulty.
          </MustKnow>
        </section>

        <p className="pt-2">
          Next up, we’ll look at how Reading Comprehension questions are
          delivered during the exam interface and what that means for your game
          plan.
        </p>
      </article>
    </main>
  );
}