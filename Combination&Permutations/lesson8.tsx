import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Note: Ensure KaTeX CSS is loaded once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.2.7 The Fundamental Counting Principle | Combinatorics",
  description:
    "Master the multiplication rule for counting: when steps are independent, multiply the options. Includes two quick multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.7 The Fundamental Counting Principle
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The fundamental counting principle (often called the multiplication rule)
          tells us how to count outcomes across multiple independent steps. If the
          first step can occur in <InlineMath math="m" /> ways and the second step in{" "}
          <InlineMath math="n" /> ways, and the choices for one step do not affect the
          choices for the other, then the total number of combined outcomes is{" "}
          <InlineMath math="m \times n" />. This idea extends to any number of steps: multiply
          the counts for each step when the steps are independent.
        </p>

        <p>
          Independence here means the available options at one stage stay the same
          no matter what happened in earlier stages. When you see the word “and” joining
          independent choices (do this and that and the other), that’s your cue to multiply.
        </p>

        <MustKnow>
          When steps are independent:
          <div className="mt-2">
            <BlockMath math="\text{Total outcomes} = \prod_{i=1}^{k} n_i" />
          </div>
          where <InlineMath math="n_i" /> is the number of ways to complete step{" "}
          <InlineMath math="i" />. In plain terms: “and” means multiply for independent steps.
        </MustKnow>

        <p>
          We’ll practice this rule with two short examples. In each, confirm that the
          choices are independent, then multiply the counts.
        </p>

        <MCQExample
          number={9}
          prompt="A café offers 3 kinds of bread, 4 kinds of meat, and 5 drinks. A meal consists of 1 bread, 1 meat, and 1 drink. How many distinct meals are possible?"
          options={["10", "25", "30", "45", "60"]}
          correct="60"
          solution={
            <>
              <p>
                Each component is chosen independently: bread{" "}
                <InlineMath math="(3\ \text{ways})" />, meat{" "}
                <InlineMath math="(4\ \text{ways})" />, and drink{" "}
                <InlineMath math="(5\ \text{ways})" />. By the multiplication rule:
              </p>
              <BlockMath math="3 \times 4 \times 5 = 60" />
              <p>Therefore, 60 different meals are possible.</p>
            </>
          }
        />

        <MCQExample
          number={10}
          prompt="A fair coin is flipped 5 times. How many different head–tail sequences are possible?"
          options={["16", "32", "100", "256", "1,000"]}
          correct="32"
          solution={
            <>
              <p>
                Each flip has 2 outcomes (H or T), and flips are independent. Multiply
                across the 5 flips:
              </p>
              <BlockMath math="2 \times 2 \times 2 \times 2 \times 2 = 2^5 = 32" />
              <p>So there are 32 possible sequences.</p>
            </>
          }
        />

        <p>
          Takeaway: If multiple choices are made and each choice doesn’t restrict the others,
          multiply the number of options at each step to get the total number of outcomes.
        </p>
      </article>
    </main>
  );
}