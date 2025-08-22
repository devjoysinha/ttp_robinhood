import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.2 The Basic Probability Formula | Probability",
  description:
    "Understand the core probability ratio, when you can apply it (equally likely outcomes), and practice with a quick marble-draw multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.2 The Basic Probability Formula
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          At its simplest, probability compares the number of favorable outcomes
          to the total number of possible outcomes. When each outcome in the
          sample space is equally likely, the probability of an event E is given
          by the following ratio:
        </p>

        <div className="rounded-lg bg-gray-800/60 p-4">
          <BlockMath math={"P(E) = \\dfrac{\\text{# favorable outcomes}}{\\text{# total outcomes}}"} />
        </div>

        <MustKnow>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Use the ratio only when all outcomes are equally likely (uniform
              sample space).
            </li>
            <li>
              Probabilities are between 0 and 1, inclusive. You can also express
              them as percentages.
            </li>
            <li>
              Identify the event precisely, count its favorable outcomes, and
              divide by the total outcomes in the experiment.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={201}
          prompt="A jar holds 40 blue marbles and 60 red marbles. If one marble is drawn at random, what is the probability that it is blue?"
          options={["10%", "20%", "40%", "60%", "80%"]}
          correct="40%"
          solution={
            <>
              <p>
                The total number of marbles (outcomes) is 40 + 60 = 100. The
                favorable outcomes for “blue” are 40.
              </p>
              <p className="mt-2">
                So{" "}
                <InlineMath math={"P(\\text{blue}) = \\dfrac{40}{100} = 0.4 = 40\\%"} />
                .
              </p>
              <p className="mt-2">Answer: 40%.</p>
            </>
          }
        />

        <p>
          Important caveat: the ratio above assumes every basic outcome has the
          same chance of occurring. If outcomes are not equally likely (for
          example, a weighted die), you must use the appropriate weighted model
          instead of the simple count-over-count formula.
        </p>
      </article>
    </main>
  );
}