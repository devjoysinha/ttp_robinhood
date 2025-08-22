import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title:
    "3.5 Read Beyond Keyword Sentences | Reading Comprehension",
  description:
    "Finding a keyword isn’t the finish line. Learn how to scan nearby sentences and use look‑above/below cues to locate the line that actually answers the question, with a clear Nureyev example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.5 Look Past the Sentence That Contains Your Keyword
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Spotting a keyword from the question stem is a great way to jump to the right area of the passage, but the sentence that contains that keyword won’t always hold the answer. Very often, the explanation you need sits just before or after the keyword line.
        </p>

        <MustKnow>
          After you find a keyword in the passage, check the neighboring sentences. The direct answer frequently lives one line above or below where the keyword appears.
        </MustKnow>

        <section aria-labelledby="example-title" className="space-y-4">
          <h3 id="example-title" className="text-white text-xl font-semibold">
            Example: Following “look above” cues
          </h3>

          <p>
            Suppose a question asks: “According to the passage, how could the career path of Rudolph Nureyev be characterized?” You search for either “Rudolph Nureyev” or “career path” and land on this part of the passage:
          </p>

          <figure className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <blockquote className="italic text-gray-200">
              However, many dancers successfully move from performer to choreographer and therefore stay active in dance for decades. The career of Rudolph Nureyev followed such a path.
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-400">
              Excerpt with the keyword and a pointer phrase
            </figcaption>
          </figure>

          <p>
            The second sentence includes our keywords, but it doesn’t itself describe the path. The phrase “such a path” is a classic pointer telling us to look just above. The prior sentence defines the path as transitioning from dancer to choreographer. So the answer is that Nureyev’s career moved from performing to choreographing.
          </p>
        </section>

        <MustKnow>
          Use a mix of keyword hunting and “look above/below” markers (such as “such,” “this,” “that,” and other referential phrases). These cues often direct you to the sentence that actually explains the idea referenced in the keyword line.
        </MustKnow>

        <section aria-labelledby="tips-title" className="space-y-3">
          <h3 id="tips-title" className="text-white text-xl font-semibold">
            Quick tips for finding the right line
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              When you hit a keyword, scan one sentence up and one sentence down before committing to an answer.
            </li>
            <li>
              Watch for referential language: “such,” “this,” “that,” “these,” and pronouns that point to a prior description or definition.
            </li>
            <li>
              If the keyword sentence summarizes or references a concept, the concrete details you need are usually nearby.
            </li>
          </ul>
        </section>

        <p className="pt-2">
          Up next: how to track synonym and wording shifts so you don’t miss lines that restate the same idea in different words.
        </p>
      </article>
    </main>
  );
}