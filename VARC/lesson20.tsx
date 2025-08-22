import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.21 Correct Answers in Inference RC Questions | Verbal Reasoning",
  description:
    "Learn the three reliable patterns of correct answers in Reading Comprehension inference questions, how to find supporting text, and work through a fully explained example.",
};

function Passage({ children, title, id }: { children: React.ReactNode; title: string; id: string }) {
  return (
    <section
      aria-labelledby={id}
      className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 md:p-6"
    >
      <h3 id={id} className="mb-3 text-lg font-semibold text-gray-100">
        {title}
      </h3>
      <div className="space-y-3 text-gray-300">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Verbal Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.21 Correct Answers in Inference RC Questions
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          A correct answer to an Inference question doesn’t introduce new facts—it captures
          something the passage guarantees. In practice, right answers tend to follow a few
          dependable patterns.
        </p>

        <section className="space-y-6">
          <MustKnow>
            Many correct inference answers simply restate a conclusion that is fully supported
            by a single sentence in the passage.
          </MustKnow>

          <div className="space-y-3">
            <h3 className="text-gray-100 font-semibold">Quick micro‑example</h3>
            <p>
              Suppose a passage says: “City leaders persuaded voters by promising to implement
              changes that had already been implemented.” A valid inference answer could be:
              “Voters supported candidates whose promises had no practical value.” That conclusion
              follows immediately from the given sentence.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <MustKnow>
            Some correct inference answers flip a statement to express the same logical idea
            in reverse. For instance, <InlineMath math={"x > y"} /> is logically identical to{" "}
            <InlineMath math={"y < x"} />.
          </MustKnow>

          <div className="space-y-3">
            <h3 className="text-gray-100 font-semibold">Quick micro‑examples</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Passage: “By the late 1900s, most residents of Vietnam could read.”
                Inference: “By the late 1900s, those who could not read were a minority.”
              </li>
              <li>
                Passage: “Rote memorization is not the most effective learning method.”
                Inference: “There exist learning methods that outperform rote memorization.”
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <MustKnow>
            Another frequent pattern is synthesis: the answer is supported by combining
            two or more statements in the passage.
          </MustKnow>

          <div className="space-y-3">
            <h3 className="text-gray-100 font-semibold">Quick micro‑example</h3>
            <p>
              Passage says: “For a game company to stay viable long term, it must keep innovating.”
              Also: “To keep innovating, a game company must retain skilled talent.”
              Together, these imply: “A game company must retain skilled talent to remain viable
              long term.”
            </p>
          </div>
        </section>

        <ExampleCard
          number={1}
          title="How to locate support in the passage"
          statements={[
            "Identify the focus of the question (whose view, what topic, which paragraph).",
            "Pick a few keywords from the stem or a promising choice as search anchors.",
            "Use those anchors (and your map of the passage) to zero in on the sentences that prove the answer.",
          ]}
          correctLetter=""
          solution={
            <>
              <p>
                Inference answers are provable using the passage. Treat the search as a targeted
                retrieval task: find the line(s) that make the answer unavoidable.
              </p>
            </>
          }
        />

        <Passage id="rc-passage-16" title="Passage for Example 16">
          <p>
            In 2013, Eugene Fama, Robert Shiller, and Lars Peter Hansen shared the Nobel Memorial
            Prize in Economic Sciences. Many observers were surprised to see Fama and Shiller
            honored together, since their views of markets are famously at odds.
          </p>
          <p>
            Fama’s work shaped the Efficient Market view: asset prices incorporate all available
            information, so price changes can’t be usefully predicted. In this framework, investors
            are assumed to behave rationally and, as a result, true asset “bubbles”—driven by
            irrational price surges—don’t fit the model. This thinking helped fuel the rise of
            index funds: if forecasting winners is futile, most investors should simply hold
            broad market baskets.
          </p>
          <p>
            Shiller, by contrast, integrates psychology into economics. He argues that human
            behavior can be systematically irrational, making prices sometimes predictably so.
            On his view, markets can generate bubbles and prolonged mispricings. Notably, he
            warned of the dot‑com decline around 2000 and of the housing downturn that began in 2006.
          </p>
        </Passage>

        <MCQExample
          number={16}
          prompt="Based on the passage, which statement about the prices of financial assets would Shiller most likely endorse?"
          options={[
            "They are predictable because investors act rationally.",
            "They fully reflect all publicly available information.",
            "Some pricing mistakes persist for a meaningful period after they arise.",
            "Irrational run‑ups in asset prices do not occur.",
            "Severe price drops follow a fixed, regular timetable.",
          ]}
          correct="Some pricing mistakes persist for a meaningful period after they arise."
          solution={
            <>
              <p>
                Shiller’s perspective emphasizes behavior‑driven markets that can create bubbles
                and long‑lasting mispricings. If mispricings can be sustained, then they don’t
                vanish immediately—so “Some pricing mistakes persist for a meaningful period”
                is supported.
              </p>
              <p>
                Why the others fail:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  “Predictable because investors act rationally” contradicts Shiller’s focus
                  on systematic irrationality.
                </li>
                <li>
                  “Fully reflect all information” is the Efficient Market view associated with Fama,
                  not Shiller.
                </li>
                <li>
                  “Irrational run‑ups do not occur” conflicts with Shiller’s stance that bubbles do occur.
                </li>
                <li>
                  “Severe drops follow a fixed schedule” is not claimed by the passage; Shiller’s
                  successful predictions don’t imply periodicity.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Big picture: a correct inference answer is positionally “inside” the passage. If you
          can put your finger on one line—or a small combination of lines—that forces the answer,
          you’ve got it. If the middle step requires speculation, it’s not the one.
        </MustKnow>
      </article>
    </main>
  );
}