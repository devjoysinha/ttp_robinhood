import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "17.4 Sample Spaces | Probability",
  description:
    "Understand sample spaces in probability: what they are, how to list them for common experiments, and why probabilities across a sample space sum to 1. Includes quick examples and a practice MCQ with a full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.4 Sample Spaces
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In probability, the phrase “sample space” comes up often. It simply
          captures every outcome that could happen for a particular experiment
          or process.
        </p>

        <MustKnow>
          The sample space of an experiment is the complete set of all possible
          outcomes for that experiment.
        </MustKnow>

        <p>
          A few quick illustrations:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Roll a fair six‑sided die once. The sample space is {"{1, 2, 3, 4, 5, 6}"} — the six
            faces that could appear.
          </li>
          <li>
            Flip a fair coin twice. The sample space is {"{HH, HT, TH, TT}"}, where, for
            example, HT means heads on the first flip and tails on the second.
          </li>
          <li>
            Flip a fair coin three times. The sample space is
            {" {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}"} — eight outcomes total.
          </li>
        </ul>

        <MustKnow>
          If you add up the probabilities of all outcomes in a sample space, the
          total is always 1.
        </MustKnow>

        <p>For equally likely outcomes, that property is easy to see:</p>

        <section aria-labelledby="coin-2-flips" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="coin-2-flips" className="mb-2 text-base font-semibold text-gray-100">
            Example: Two coin flips
          </h3>
          <p className="mb-2">
            For two fair flips, each outcome in {"{HH, HT, TH, TT)"} has probability{" "}
            <InlineMath math={"\\tfrac{1}{4}"} />:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"P(HH)=\\tfrac{1}{4}"} />
            </li>
            <li>
              <InlineMath math={"P(HT)=\\tfrac{1}{4}"} />
            </li>
            <li>
              <InlineMath math={"P(TH)=\\tfrac{1}{4}"} />
            </li>
            <li>
              <InlineMath math={"P(TT)=\\tfrac{1}{4}"} />
            </li>
          </ul>
          <div className="mt-3">
            <BlockMath math={"\\tfrac{1}{4}+\\tfrac{1}{4}+\\tfrac{1}{4}+\\tfrac{1}{4}=1"} />
          </div>
        </section>

        <section aria-labelledby="die-roll" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="die-roll" className="mb-2 text-base font-semibold text-gray-100">
            Example: One roll of a fair die
          </h3>
          <p className="mb-2">
            With a fair six‑sided die, each face is equally likely:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"P(1)=\\tfrac{1}{6}"} />
            </li>
            <li>
              <InlineMath math={"P(2)=\\tfrac{1}{6}"} />
            </li>
            <li>
              <InlineMath math={"P(3)=\\tfrac{1}{6}"} />
            </li>
            <li>
              <InlineMath math={"P(4)=\\tfrac{1}{6}"} />
            </li>
            <li>
              <InlineMath math={"P(5)=\\tfrac{1}{6}"} />
            </li>
            <li>
              <InlineMath math={"P(6)=\\tfrac{1}{6}"} />
            </li>
          </ul>
          <div className="mt-3">
            <BlockMath math={"\\tfrac{1}{6}+\\tfrac{1}{6}+\\tfrac{1}{6}+\\tfrac{1}{6}+\\tfrac{1}{6}+\\tfrac{1}{6}=1"} />
          </div>
        </section>

        <section aria-labelledby="thumbtack" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="thumbtack" className="mb-2 text-base font-semibold text-gray-100">
            Mini‑example: Two outcomes, not necessarily equal
          </h3>
          <p className="mb-2">
            A thumbtack tossed in the air can land either point‑up or on its side. Suppose{" "}
            <InlineMath math={"P(\\text{point up})=0.85"} />. Using the fact that the probabilities across the
            sample space add to 1:
          </p>
          <BlockMath math={"P(\\text{point up})+P(\\text{side})=1"} />
          <BlockMath math={"0.85+P(\\text{side})=1"} />
          <BlockMath math={"P(\\text{side})=0.15"} />
        </section>

        <MCQExample
          number={201}
          prompt="Teams A and B play a soccer match. The three possible outcomes are: A wins, B wins, or a tie. For each match, P(B wins) = 0.35 and P(tie) = 0.55. What is P(A wins)?"
          options={["0.10", "0.15", "0.20", "0.25", "0.30"]}
          correct="0.10"
          solution={
            <>
              <p>
                The outcomes form a sample space, so their probabilities sum to 1:
              </p>
              <BlockMath math={"P(A)+P(B)+P(\\text{tie})=1"} />
              <BlockMath math={"P(A)+0.35+0.55=1"} />
              <BlockMath math={"P(A)+0.90=1"} />
              <BlockMath math={"P(A)=0.10"} />
              <p>Therefore, the probability that team A wins is 0.10.</p>
            </>
          }
        />

        <ExampleCard
          number={202}
          title="Listing a sample space and using the sum-to-one property"
          statements={[
            "An opaque bag has exactly three types of balls: red, blue, and green. You draw one ball at random and record its color. Let P(red) = 0.4 and P(blue) = 0.25. What is P(green)?",
            "1) The draw is equally likely among the three colors.",
            "2) The bag contains at least one ball of each color.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                The sample space is {`{red, blue, green}`}. Regardless of counts or fairness,
                probabilities across the sample space must add to 1:
              </p>
              <BlockMath math={"P(\\text{red})+P(\\text{blue})+P(\\text{green})=1"} />
              <BlockMath math={"0.40+0.25+P(\\text{green})=1"} />
              <BlockMath math={"P(\\text{green})=0.35"} />
              <p>
                We didn’t need either statement to compute P(green) because the sum‑to‑one
                rule fully determines it. Thus, each statement alone is unnecessary, and
                together they are still unnecessary. Answer: E (neither statement needed).
              </p>
            </>
          }
        />

        <p>
          Key takeaway: identify the sample space first, then use either symmetry
          (equally likely outcomes) or given probabilities, together with the
          fact that all probabilities across the space must total 1.
        </p>
      </article>
    </main>
  );
}