import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="inline-block align-[0.1em]"
      aria-label={ariaLabel ?? expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "3.2 Detail Questions | GMAT Reading Comprehension",
  description:
    "What Detail questions ask, how to spot them quickly, and common GMAT RC stems to memorize. Includes two Must‑Know takeaways.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2 Detail Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In GMAT Reading Comprehension, Detail questions target precise facts
          and statements from the passage. They’re asking, in effect, “What does
          the passage explicitly say?” not “What can we reasonably conclude?”
          In other words, Detail{" "}
          <MathInline expr="\,\text{≠}\," ariaLabel="does not equal" /> Inference.
        </p>

        <MustKnow>
          Detail questions test recall of stated information. Your job is to
          verify an answer choice by locating the exact line(s) in the passage
          that support it, rather than paraphrasing from memory.
        </MustKnow>

        <p className="mt-6">
          You’ll recognize Detail items by their predictable wording. Here are
          common stem patterns you’ll see:
        </p>

        <ul role="list" className="list-disc space-y-2 pl-6">
          <li>
            Which statement about Mount Kilimanjaro is supported by the passage?
          </li>
          <li>
            The passage reports that psychologists used cognitive behavioral
            therapy to address which condition?
          </li>
          <li>
            Crocodiles in South Florida differ from crocodiles elsewhere in that…
          </li>
          <li>
            Each of the following is true of pangolins, EXCEPT:
          </li>
          <li>
            All of the following methods for providing clean water in
            Sub‑Saharan Africa are mentioned, EXCEPT:
          </li>
          <li>
            According to the “theory” discussed in paragraph 3, asset prices are
            least rational when…
          </li>
          <li>
            Which piece of evidence does the author cite to support the claim
            about the connection between education and success?
          </li>
          <li>
            Which is one distinction between reindeer and caribou as described
            in the passage?
          </li>
          <li>
            The “positive parenting” approach outlined in paragraph 2 is best
            characterized as one that…
          </li>
          <li>
            The author asserts which of the following about shamanic healing in
            the 14th century?
          </li>
          <li>
            What does the author indicate about the long migration of a group of
            elephants?
          </li>
          <li>
            According to the author, which of the following was true of Brazil
            in the 19th century?
          </li>
        </ul>

        <MustKnow>
          Memorize the signal phrases that flag Detail questions: “According to
          the passage…,” “is mentioned,” “the author indicates,” and
          “EXCEPT/LEAST” variants. These stems tell you to find a direct,
          text‑based match.
        </MustKnow>

        <p>
          Because these items hinge on specific lines, handling details while
          reading—marking names, dates, terms, and claims—pays off. In the next
          section, we’ll focus on efficient ways to track and retrieve those
          details quickly.
        </p>
      </article>
    </main>
  );
}