import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "3.12 Detail Trap 3: Speculation | Reading Comprehension",
  description:
    "Learn to spot the Speculation trap in GMAT RC Detail questions. See why the correct choice must be explicitly stated, and practice with a quick EV passage example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.12 Detail Trap 3: Speculation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For Detail questions, the correct option must come straight from the
          passage. Still, many test‑takers get pulled into answers that feel
          reasonable but weren’t actually said. That trap has a name: Speculation.
        </p>

        <MustKnow>
          Speculation trap answers sound plausible (or even true in real life)
          but are not explicitly stated in the passage. For Detail questions,
          “could be true” is not good enough—only pick what the author directly
          says or clearly mentions.
        </MustKnow>

        <p>
          The antidote is simple: anchor every candidate answer to the text. If
          you can’t underline a sentence (or a tight paraphrase) that backs the
          choice, it’s not a Detail‑question correct answer.
        </p>

        <MustKnow>
          Verify before you select. When an answer choice tempts you, go back to
          the passage and confirm that the idea appears verbatim or is an explicit
          statement by the author—not an inference, not a reasonable guess, and
          not outside knowledge.
        </MustKnow>

        <section aria-labelledby="ev-passage" className="space-y-4">
          <h3 id="ev-passage" className="text-xl font-semibold text-white">
            Mini‑Passage (for practice)
          </h3>

          <p>
            Unlike conventional cars that burn fossil fuels and release gases
            such as carbon dioxide (
            <InlineMath math={"CO_2"} aria-label="CO sub 2" />) during use,
            electric vehicles (EVs) draw power from the electrical grid and
            emit no greenhouse gases while operating. Because of this, many
            environmental advocates support EV adoption.
          </p>

          <p>
            Manufacturing any midsize vehicle generates greenhouse gases—metal
            production, chip fabrication, and final assembly all contribute.
            Building a similar EV typically starts out higher: producing and
            processing the metals for lithium‑ion batteries requires heavy
            equipment that burns fuel, so the total manufacturing footprint can
            be about <InlineMath math={"70\\%"} aria-label="seventy percent" />{" "}
            larger for an EV at the time of purchase.
          </p>

          <p>
            Over the lifetime of the cars, however, the picture changes. On
            average, making electricity to run an EV produces roughly{" "}
            <InlineMath math={"35\\%"} aria-label="thirty five percent" /> of the
            greenhouse gases associated with creating and combusting fuel for a
            comparable gasoline vehicle. Around 20,000 miles, the totals tend to
            even out; by 100,000 miles, the gas car is linked to far more
            cumulative emissions, and by 200,000 miles the gap is substantial.
          </p>
        </section>

        <MCQExample
          number={8}
          prompt="According to the passage above, why have many environmentalists supported the use of EVs?"
          options={[
            "They overlooked that manufacturing EVs produces greenhouse gases.",
            "EVs operate without burning fossil fuel.",
            "They believe EVs will remove all environmental harm from greenhouse gases.",
            "They think conventional vehicles should no longer be used.",
            "They do not realize that generating electricity also emits greenhouse gases.",
          ]}
          correct="EVs operate without burning fossil fuel."
          solution={
            <>
              <p>
                The question stem begins with “According to the passage,” so the
                correct answer must be stated in the text. In the first
                paragraph, the author explains that EVs emit no greenhouse gases
                during operation and then says that, for this reason,
                environmentalists have supported EV adoption. That matches the
                choice “EVs operate without burning fossil fuel.”
              </p>
              <p>
                The remaining options are Speculation traps. The passage never
                says environmentalists ignored manufacturing emissions, that EVs
                eliminate all harm, that advocates want gasoline cars banned, or
                that advocates are unaware the grid produces emissions. Those
                ideas may seem possible, but they are not explicitly stated—so
                they are not correct in a Detail question.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when you see “According to the passage,” treat the
          passage like a checklist. If a choice is not directly stated by the
          author, no matter how reasonable it sounds, it’s a Speculation trap.
        </p>
      </article>
    </main>
  );
}