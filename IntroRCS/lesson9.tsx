import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.10 What GMAT Reading Comprehension Passages Are About | Verbal",
  description:
    "See the typical subjects GMAT Reading Comprehension passages cover, why topic doesn’t equal difficulty, and why outside knowledge isn’t required. Plus, a mindset tip to stay engaged with any passage.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.10 What GMAT Reading Comprehension Passages Are About
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          GMAT Reading Comprehension (RC) passages can come from a broad mix of
          academic and professional fields. The test isn’t trying to assess your
          expertise in those fields—it’s measuring how well you read, understand,
          and analyze what’s written.
        </p>

        <section aria-labelledby="rc-topics">
          <h3 id="rc-topics" className="sr-only">
            Typical RC Subject Areas
          </h3>
          <p className="text-gray-300">
            You’ll routinely see passages drawn from the following high‑level areas:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-gray-300">
            <li>Humanities</li>
            <li>Social sciences</li>
            <li>Business and economics</li>
            <li>Physical sciences</li>
            <li>Biological sciences</li>
          </ul>
          <p>
            Concretely, you might read about topics such as art, music, film,
            literature, human rights, international law, history, economics,
            politics, sociology, medicine, health care, astronomy, technology,
            philosophy, physics, biology, or chemistry—among many others.
          </p>
        </section>

        <MustKnow>
          GMAT RC passages span humanities, social sciences, business and
          economics, and the physical and biological sciences.
        </MustKnow>

        <section aria-labelledby="difficulty-myth">
          <h3 id="difficulty-myth" className="sr-only">
            Topic vs. Difficulty
          </h3>
          <p>
            A crucial misconception to drop: the topic of a passage does not set
            its difficulty. For instance, not every science passage is hard—some
            are easy, some moderate, some challenging. The same is true for every
            other genre you’ll encounter.
          </p>

          <MustKnow>
            Subject matter does not determine how hard a passage or its
            questions will be.
          </MustKnow>
        </section>

        <section aria-labelledby="outside-knowledge">
          <h3 id="outside-knowledge" className="sr-only">
            Outside Knowledge Not Required
          </h3>
          <p>
            You won’t need specialized background knowledge to answer RC
            questions. Everything needed to respond correctly is contained in the
            passage itself. RC is not a subject exam; it’s a test of reading and
            reasoning using the given text.
          </p>

          <MustKnow>
            No outside facts, dates, or expertise are required—derive answers
            strictly from the passage.
          </MustKnow>
        </section>

        <section aria-labelledby="engagement">
          <h3 id="engagement" className="sr-only">
            Stay Engaged with Any Topic
          </h3>
          <p>
            Because the range of topics is so wide, some passages will naturally
            appeal to you more than others. Even if a passage isn’t in your
            favorite domain—say you prefer business or history but get a long
            science passage—lean in and engage with it just as fully. In the next
            chapters, we’ll cover practical ways to stay focused and extract the
            key ideas from any text you face.
          </p>

          <MustKnow>
            Treat every passage as important—cultivate the habit of staying
            curious and engaged, regardless of the topic.
          </MustKnow>
        </section>

        <p className="text-gray-300">
          Up next, we’ll reveal a core mindset that top performers use to make
          sense of even the trickiest RC passages.
        </p>
      </article>
    </main>
  );
}