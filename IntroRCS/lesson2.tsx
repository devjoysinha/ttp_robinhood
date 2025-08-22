import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.3 What Does GMAT Reading Comprehension Test? | Verbal",
  description:
    "Understand what the GMAT Reading Comprehension section actually measures: precision at the word and sentence level, how ideas connect, paragraph purposes, and overall passage structure.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.3 What Does GMAT Reading Comprehension Test?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Reading Comprehension on the GMAT checks more than whether you read the words on
          the page. It evaluates how closely you read, how accurately you interpret what
          the author says, and how well you track the relationships among ideas within a
          passage.
        </p>

        <p>
          Why does the test target these skills? In business school and professional
          settings, you’ll regularly encounter dense, research‑style writing. The exam
          uses RC to gauge whether you can digest this kind of material and draw correct
          conclusions—evidence that you’re ready for the reading load ahead.
        </p>

        <MustKnow>
          RC measures careful reading, faithful interpretation of the text, and the
          ability to connect ideas—not speed skimming or outside knowledge.
        </MustKnow>

        <p>
          A helpful way to think about RC is as a stack of five layers of understanding.
          The stronger you are at each layer, the more consistent your results will be.
        </p>

        <section aria-labelledby="levels-title" className="space-y-3">
          <h3 id="levels-title" className="text-xl font-semibold text-white">
            The five layers of comprehension
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Precision with individual words and phrases</li>
            <li>Precision with full sentences</li>
            <li>Connections between adjacent sentences</li>
            <li>Main idea of each paragraph</li>
            <li>How all paragraphs fit together to form the passage</li>
          </ul>

          <figure
            role="img"
            aria-labelledby="pyramid-caption"
            className="mx-auto mt-4 w-full max-w-2xl rounded-md border border-slate-700 bg-slate-800/50 p-4"
          >
            {/* Simple illustrative SVG pyramid (decorative but labeled for a11y) */}
            <svg
              viewBox="0 0 400 220"
              className="h-44 w-full"
              aria-hidden="true"
              focusable="false"
            >
              <g>
                <rect x="20" y="170" width="360" height="30" rx="4" className="fill-sky-900" />
                <rect x="50" y="135" width="300" height="28" rx="4" className="fill-sky-800" />
                <rect x="80" y="102" width="240" height="26" rx="4" className="fill-sky-700" />
                <rect x="110" y="70" width="180" height="24" rx="4" className="fill-sky-600" />
                <rect x="140" y="40" width="120" height="22" rx="4" className="fill-sky-500" />
              </g>
            </svg>
            <figcaption id="pyramid-caption" className="mt-2 text-center text-sm text-gray-400">
              A skills pyramid: words → sentences → sentence links → paragraph main ideas →
              passage structure
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="words-title" className="space-y-3">
          <h3 id="words-title" className="text-xl font-semibold text-white">
            1) Word‑level precision
          </h3>
          <p>
            Words are the raw materials of meaning. Strong readers pay close attention to
            signal terms—such as “however,” “despite,” “only,” “most,” “in contrast,” and
            “in conclusion”—and interpret them in context. These cues reveal emphasis,
            qualification, comparison, and author intent.
          </p>
          <MustKnow>
            Mastery starts with language: notice key words and interpret them exactly as
            used in the sentence, not by habit or assumption.
          </MustKnow>
          <p>
            In the next sections, we’ll outline practical habits for noticing and making
            sense of these high‑value words as you read.
          </p>
        </section>

        <section aria-labelledby="sentences-title" className="space-y-3">
          <h3 id="sentences-title" className="text-xl font-semibold text-white">
            2) Sentence‑level precision
          </h3>
          <p>
            Sentences carry complete thoughts. Effective readers slow down at natural
            pause points to confirm what each clause contributes and to paraphrase the
            sentence in their own words. Readers who struggle often move on before they’ve
            fully grasped what a sentence actually says.
          </p>
          <MustKnow>
            Pause and paraphrase. Summarizing a sentence in your own words cements meaning
            and prevents confusion downstream.
          </MustKnow>
        </section>

        <section aria-labelledby="links-title" className="space-y-3">
          <h3 id="links-title" className="text-xl font-semibold text-white">
            3) Connections between sentences
          </h3>
          <p>
            Every sentence earns its place by doing something: advancing an argument,
            providing evidence, defining a term, contrasting an idea, and so on. Ask,
            “Why is this sentence here?” and “How does it relate to the one before?”
            These questions keep you aligned with the author’s logic.
          </p>
          <MustKnow>
            Read for relationships. Meaning accumulates as sentences support, qualify, or
            contrast one another.
          </MustKnow>
        </section>

        <section aria-labelledby="paragraphs-title" className="space-y-3">
          <h3 id="paragraphs-title" className="text-xl font-semibold text-white">
            4) Paragraph main ideas
          </h3>
          <p>
            After each paragraph, state its central point in a short sentence. This habit
            prevents detail overload and clarifies the role each paragraph plays in the
            passage.
          </p>
        </section>

        <section aria-labelledby="structure-title" className="space-y-3">
          <h3 id="structure-title" className="text-xl font-semibold text-white">
            5) Passage structure
          </h3>
          <p>
            Finally, step back and connect the parts. What is the author trying to do
            overall, and how does each paragraph contribute to that goal? Seeing the
            structure makes inference, detail, and purpose questions far more predictable.
          </p>
        </section>

        <section aria-labelledby="big-picture-title" className="space-y-3">
          <h3 id="big-picture-title" className="text-xl font-semibold text-white">
            The big picture: how RC rewards understanding
          </h3>
          <p>
            RC is not about gaming the test. It rewards readers who derive answers from a
            clear understanding of the text. Strategies help, but they work only when
            they’re anchored in accurate comprehension at each layer.
          </p>
          <MustKnow>
            The reliable path to RC success is to understand the passage and let the
            answers follow from that understanding.
          </MustKnow>
          <p className="text-gray-300">
            Next up: how Reading Comprehension differs from casual, everyday reading and
            what that means for your approach.
          </p>
        </section>
      </article>
    </main>
  );
}