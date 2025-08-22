import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "17.5 Complementary Events | Probability",
  description:
    "Learn what complementary events are and how to use P(A) + P(A^c) = 1 to find probabilities quickly. Includes an easy multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.5 Complementary Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two events are complementary when they cannot happen at the same time
          and together account for every possible outcome of an experiment. If
          one occurs, the other necessarily does not.
        </p>

        <p>
          Example: Suppose a jar holds 20 blue marbles and 60 red marbles. A
          single draw will be either blue or red—no overlap and no other
          colors—so “blue” and “red” are complements. The probabilities are
          <InlineMath math={"P(\\text{blue})=\\tfrac{20}{80}=\\tfrac14"} /> and{" "}
          <InlineMath math={"P(\\text{red})=\\tfrac{60}{80}=\\tfrac34"} />,
          which means <InlineMath math={"\\tfrac14+\\tfrac34=1"} />.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="text-gray-200 font-semibold">
              Key identity for complements
            </p>
            <BlockMath math={"P(A) + P(A^c) = 1"} />
            <p>
              Therefore,
              <InlineMath math={"\\quad P(A^c) = 1 - P(A)"} />. This relationship
              works only when A and its complement collectively cover all
              outcomes and cannot occur together.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="formula-clarification" className="space-y-2">
          <h3 id="formula-clarification" className="sr-only">
            Formula clarification
          </h3>
          <p>
            Using complements is powerful because knowing{" "}
            <InlineMath math={"P(A)"} /> immediately gives{" "}
            <InlineMath math={"P(A^c)"} />. For the marbles:
          </p>
          <BlockMath math={"P(\\text{blue}) + P(\\text{not blue}) = 1"} />
          <p className="text-sm text-gray-400">
            Note: Only apply this rule to truly complementary pairs—exactly two
            mutually exclusive outcomes that are collectively exhaustive.
          </p>
        </section>

        <MCQExample
          number={3}
          prompt="The chance of rain in Town X tomorrow is 25%. What is the probability that it will not rain in Town X tomorrow?"
          options={["10%", "25%", "50%", "75%", "90%"]}
          correct="75%"
          solution={
            <>
              <p>
                “Rain” and “no rain” are complementary outcomes. By the
                complement rule:
              </p>
              <BlockMath math={"P(\\text{no rain}) = 1 - P(\\text{rain})"} />
              <BlockMath math={"P(\\text{no rain}) = 1 - 0.25 = 0.75 = 75\\%"} />
              <p>So the correct answer is 75%.</p>
            </>
          }
        />

        <p>
          Big picture: Complements let you compute a probability by subtracting
          from 1. Always verify that the two events are disjoint and that they
          cover all possibilities before using{" "}
          <InlineMath math={"P(A^c)=1-P(A)"} />.
        </p>
      </article>
    </main>
  );
}