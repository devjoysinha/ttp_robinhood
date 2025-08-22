import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Minimal KaTeX helper that gracefully falls back if KaTeX isn’t available.
// Renders inline math on the server for best performance.
type InlineMathProps = {
  math: string;
  text?: string; // human-readable fallback for screen readers / no-KaTeX
  display?: boolean;
  className?: string;
};
function InlineMath({ math, text, display = false, className }: InlineMathProps) {
  let html: string | null = null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const katex = require("katex");
    html = katex.renderToString(math, { throwOnError: false, displayMode: display });
  } catch {
    html = null;
  }
  return html ? (
    <span
      className={className}
      aria-label={text ?? math}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <span className={className}>{text ?? math}</span>
  );
}

export const metadata: Metadata = {
  title: "3.18 Detail Trap 9: Mix‑Up | Reading Comprehension",
  description:
    "Learn to spot Mix‑Up trap answers in GMAT Reading Comprehension: what they are, how they trick you, and how to avoid them. Includes a worked example and full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Verbal Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.18 Detail Trap 9: Mix‑Up
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Reading Comprehension passages juggle several parallel items—people and their
          viewpoints, competing hypotheses, methods and outcomes, or categories and their effects.
          The difficulty isn’t just understanding each idea; it’s keeping straight which idea
          belongs to which entity.
        </p>

        <p>
          For example, if a passage contrasts two researchers and their distinct theories, or
          compares three transit modes and each mode’s social impact, you must track those pairings.
          Test writers exploit this with a common distractor: the Mix‑Up trap.
        </p>

        <MustKnow>
          Mix‑Up distractors swap associations. They attach an attribute, claim, or effect from item A
          to item B—or vice versa.
        </MustKnow>

        <p>
          Here’s a simple illustration. Suppose a passage says:
        </p>
        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4 text-gray-200">
          Both Dostoevsky and Tolstoy explore psychological themes, but from different angles.
          Tolstoy tends to emphasize how people relate to one another in society, while Dostoevsky
          often focuses on the inner life of an individual—sometimes at extremes. Meanwhile,
          Tolstoy’s characters are typically ordinary people experiencing intense events.
        </div>
        <p className="mt-2">
          A Mix‑Up answer to “What is true of Tolstoy’s writing?” might claim that Tolstoy
          “frequently depicts the extremes to which an individual goes.” That’s actually what the
          passage says about Dostoevsky, not Tolstoy. The correct association for Tolstoy is his
          focus on relationships among people.
        </p>

        <MustKnow>
          You don’t need to memorize every linkage on the first read. Recognize that multiple
          similar items are in play, keep a lightweight map, and be ready to revisit the passage
          to verify who/what goes with which detail.
        </MustKnow>

        <p>
          When a passage presents several comparable items (authors, methods, species, time periods,
          etc.), anticipate Mix‑Up choices. Enter each question expecting that at least one option will
          intentionally swap labels or claims.
        </p>

        <MustKnow>
          Expect Mix‑Up choices whenever multiple similar entities appear. Before selecting an option,
          double‑check the passage line(s) that tie the detail to the correct entity.
        </MustKnow>

        <section aria-labelledby="rc-passage-heading" className="mt-8 space-y-4">
          <h3 id="rc-passage-heading" className="text-xl font-semibold text-white">
            Worked Example: Daylight Saving Time (Reading Passage)
          </h3>
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 text-gray-100">
            <p className="mb-3">
              Daylight Saving Time (DST)—moving clocks forward by one hour in spring and back in fall—
              was adopted in the United States in 1918 as a wartime strategy to cut fuel consumption by
              reducing evening lighting needs. Today, however, the drawbacks appear to outweigh the
              benefits, and thus DST should be discontinued in the United States.
            </p>
            <p className="mb-3">
              Recent studies suggest that even a one‑hour shift can disrupt normal sleep patterns,
              negatively affecting circadian rhythms and overall health. In particular, one study found
              that the risk of heart attacks rises by{" "}
              <InlineMath math="10\%" text="10%" /> during the two days following the spring clock change.
            </p>
            <p className="mb-3">
              Experts in light–dark biology, including chronobiologist Till Roenneberg, also point to
              a sizable drop in workplace productivity as a consequence of DST. Although proponents
              claim people adjust quickly, Roenneberg notes that the body clock fails to align with
              DST’s social time even after months.
            </p>
            <p>
              Another hidden cost is the time spent changing a vast number of clocks twice annually; a
              2008 economic analysis estimates this opportunity cost at{" "}
              <InlineMath math="1.7" text="1.7" /> billion dollars per year. Unsurprisingly, public support
              for the biannual time change is low: a 2019 AP‑NORC poll found that only 28% of U.S. adults
              want to keep switching the clocks twice a year.
            </p>
          </div>
        </section>

        <MCQExample
          number={14}
          prompt="According to the passage, the health impact of Daylight Saving Time"
          options={[
            "is the primary concern highlighted by Till Roenneberg",
            "is a bigger problem in the United States than in other countries",
            "includes a higher risk of heart attacks after the autumn clock change",
            "is negative but only extends to sleep and circadian rhythm disturbances",
            "has been shown to include a measurable reduction in the likelihood that the average person will avoid a heart attack",
          ]}
          correct="has been shown to include a measurable reduction in the likelihood that the average person will avoid a heart attack"
          solution={
            <>
              <p>
                The question asks specifically about the health impact of DST. That information appears
                in the discussion of sleep/circadian effects and the heart‑attack finding after the spring
                change.
              </p>

              <p>
                Choice A — Mix‑Up trap. The passage cites Roenneberg for decreased productivity and failure
                to adapt the body clock to DST social time, not for a statement that health impact is his
                primary focus in this context.
              </p>

              <p>
                Choice B — Wrong comparison. The passage doesn’t compare health impact across countries,
                so we can’t conclude it’s worse in the U.S.
              </p>

              <p>
                Choice C — Mix‑Up trap. The study cited concerns the spring shift, not the autumn shift.
              </p>

              <p>
                Choice D — Half‑Right trap. While sleep and circadian rhythm disruptions are discussed,
                the passage also mentions elevated heart‑attack risk, so the impact is not “limited to”
                circadian issues.
              </p>

              <p>
                Choice E — Correct. If the risk of heart attacks increases after the spring change, then
                the probability of not having a heart attack decreases. This rephrases the cited study’s
                finding and directly addresses “health impact.”
              </p>
            </>
          }
        />

        <p>
          Bottom line: whenever multiple similar entities appear in a passage, slow down when matching
          a detail to its source. If an option “sounds right” but assigns the right fact to the wrong
          entity, it’s a Mix‑Up trap.
        </p>
      </article>
    </main>
  );
}