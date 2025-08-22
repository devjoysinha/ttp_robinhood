import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "3.17 Detail Trap 8: Wrong Comparison | Reading Comprehension",
  description:
    "Learn to spot the Wrong Comparison trap in RC Detail questions. See the two ways it shows up, a quick test-taking heuristic, and a worked example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.17 Detail Trap 8: Wrong Comparison
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Reading passages often contrast viewpoints, approaches, or categories.
          Because of that, Detail questions frequently include tempting choices
          that compare things inaccurately. We call these Wrong Comparison traps.
        </p>

        <MustKnow>
          Wrong Comparison choices make a comparison that the passage does not
          actually support.
        </MustKnow>

        <p>
          These traps usually appear in one of two ways:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            They flip or distort a comparison that does appear in the passage.
            For instance, if a passage establishes that a moose is larger than a
            white‑tailed deer, a trap might claim that a moose is smaller, or it
            might invent a different dimension of comparison (for example,
            speed) that the passage never addressed. In symbols, if the passage
            implies{" "}
            <InlineMath math={"\\text{moose size} \\, > \\, \\text{deer size}"} />{" "}
            a trap might assert{" "}
            <InlineMath math={"\\text{moose size} \\, < \\, \\text{deer size}"} />{" "}
            or switch to an unrelated metric.
          </li>
          <li>
            They introduce a brand‑new comparison that the passage never makes.
            Example: the text might say that freedom of speech is emphasized in
            Sweden and also mention Germany, but it never compares the two.
            Claiming “Sweden has{" "}
            <InlineMath math={"\\text{more}"} /> freedom of speech than Germany”
            goes beyond the text. The statement “X is emphasized in Sweden”
            doesn’t imply{" "}
            <InlineMath math={"\\text{Sweden} \\; \\overset{?}{>} \\; \\text{Germany}"} />{" "}
            in degree.
          </li>
        </ul>

        <MustKnow>
          A Wrong Comparison choice either distorts an existing comparison or
          fabricates one that the passage never makes.
        </MustKnow>

        <p>
          A simple way to avoid this trap: treat any comparison in an answer
          choice as a yellow flag. Pause and verify that the exact comparison
          (same items, same direction, same dimension) is stated or clearly
          supported by the passage—no more and no less.
        </p>

        <MustKnow>
          If a choice makes a comparison, verify that the passage makes that
          same comparison in the same way. If not, it’s likely a Wrong
          Comparison.
        </MustKnow>

        <section aria-labelledby="example-13" className="pt-2">
          <h3 id="example-13" className="sr-only">
            Example 13
          </h3>

          <MCQExample
            number={13}
            prompt="Which of the following is cited in the passage as a reason the Efficient Market view considers price movements unpredictable?"
            options={[
              "Prices already incorporate every piece of available information.",
              "The prices of financial assets are set more rationally than those of most other assets.",
              "Most investors should prefer broad index funds to individual stock picking.",
              "Modern markets operate more efficiently today than they did in the past.",
              "Markets are too irrational for any patterns in asset‑price movements to exist.",
            ]}
            correct="Prices already incorporate every piece of available information."
            solution={
              <>
                <p>
                  Focus on the paragraph discussing Efficient Markets. The view
                  holds that price changes can’t be forecast because prices
                  already reflect all available information.
                </p>
                <p>
                  Correct: “Prices already incorporate every piece of available
                  information.” This paraphrases the stated rationale.
                </p>
                <p>
                  Wrong Comparison: “The prices of financial assets are set more
                  rationally than those of most other assets.” The passage does
                  not compare asset classes in that way.
                </p>
                <p>
                  Matches but not a reason: “Most investors should prefer index
                  funds…” That’s a consequence of unpredictability, not the
                  reason for it.
                </p>
                <p>
                  Wrong Comparison: “Modern markets operate more efficiently
                  than in the past.” The passage doesn’t compare time periods.
                </p>
                <p>
                  Opposite: “Markets are too irrational for patterns to exist.”
                  Under the Efficient Market view, prices are described as
                  rationally set; the “irrational patterns” framing belongs to
                  the opposing perspective.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: watch for answer choices that sneak in new or flipped
          comparisons. If the text doesn’t make the exact comparison in the
          same sense, it’s not a valid detail match.
        </p>
      </article>
    </main>
  );
}