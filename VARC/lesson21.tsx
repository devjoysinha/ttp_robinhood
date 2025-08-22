import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.22 Inference Trap 1: Distortion | Reading Comprehension",
  description:
    "Learn to spot Distortion trap answers in RC Inference questions. See why they’re tempting, how to verify support in the passage, and practice with a reworded example and full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.22 Inference Trap 1: Distortion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A Distortion trap answer in an Inference question sounds close to what
          the passage implies but subtly changes the idea—often by swapping a
          noun, modifier, comparison, or verb tense. Because it “feels right,”
          it’s easy to pick unless you carefully match every word of the choice
          to what the text actually supports.
        </p>

        <MustKnow>
          Distortion answers echo the passage but twist the meaning. Common
          twists include:
          <br />
          - using the wrong noun or modifier (production vs. product quality),
          <br />
          - shifting scope or strength (some → always),
          <br />
          - changing tense (promising → has been used),
          <br />
          - or implying a relationship the passage never made.
        </MustKnow>

        <p>
          The cure is rigorous line-by-line verification. Before you select an
          answer, you should be able to point to explicit text and explain how
          that text supports the choice. If you can’t show a direct chain of
          support, don’t infer it.
        </p>

        <MustKnow>
          Don’t accept “close enough.” An inference is correct only if each part
          of the answer is justified by the passage’s words or by a logically
          equivalent restatement.
          <br />
          A helpful mental check: only conclude{" "}
          <InlineMath math={"X \\Rightarrow Y"} /> when the passage states it or
          clearly implies it without adding scope or strength.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick illustrative example
          </h3>
          <p>
            Suppose a passage says that a company doubled wages to cut turnover
            because turnover was “hurting production” and forcing heavy spending
            on hiring—and that the plan worked. A tempting Distortion answer
            would claim the wage hike aimed to improve “product quality.” That’s
            not what the text suggests; it points to improving “production” and
            lowering costs. The wording swap (quality vs. production) makes the
            choice incorrect even though it sounds related.
          </p>
        </section>

        <MCQExample
          number={17}
          prompt="The passage suggests which of the following about electron ptychography?"
          options={[
            "It enlarges electrons themselves to form an accurate picture.",
            "It is invariably superior to conventional light microscopes.",
            "It relies on crystal to produce magnified images.",
            "It could aid engineers in continuing to shrink component sizes.",
            "It has already been used to manufacture faster processors.",
          ]}
          correct="It could aid engineers in continuing to shrink component sizes."
          solution={
            <>
              <p>
                Focus on the sentences that introduce electron ptychography and
                why high‑resolution visualization matters. The passage notes that
                seeing surfaces at extremely high resolution helps with
                miniaturization, then presents electron ptychography as a
                promising technique that achieves extraordinary magnification.
                That supports the idea that this method may help engineers push
                miniaturization forward. So choice D is correct.
              </p>
              <p>
                Why the others are traps:
                <br />
                - A: The method uses a stream of electrons to create an image; it
                doesn’t magnify electrons themselves. Wrong noun pairing.
                <br />
                - B: “Always” overstates the claim. The text contrasts how each
                tool works, not their universal usefulness.
                <br />
                - C: Researchers used the technique to magnify a crystal’s
                surface; the tool does not “use crystal” to create images. Mixed
                roles.
                <br />
                - E: Calling it “promising” signals future potential, not
                completed application in processor fabrication. Wrong tense/
                implication.
              </p>
            </>
          }
        />

        <section aria-labelledby="process" className="space-y-3">
          <h3 id="process" className="text-xl font-semibold text-white">
            Process you can trust
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Find the exact lines with the keyword or idea in the answer choice.
            </li>
            <li>
              Compare nouns, verbs, modifiers, scope, and tense one by one
              against the text.
            </li>
            <li>
              If any piece can’t be traced directly to the passage (or a clear
              logical equivalent), eliminate the choice as a Distortion.
            </li>
          </ul>
        </section>

        <p>
          Bottom line: Distortions are persuasive because they’re nearby—not
          because they’re correct. Force every word in your chosen answer to
          earn its place by pointing back to the passage.
        </p>
      </article>
    </main>
  );
}