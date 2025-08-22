import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.11.2 Probability: Items That Must Not Be Selected | Probability",
  description:
    "Learn how to compute probabilities when certain items are forbidden from selection. Use combinations to count favorable outcomes versus total outcomes, with worked examples and explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.11.2 The probability that some items must not be selected
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In earlier sections, we counted outcomes when a certain number of items had to be included. Here, we flip the script: some items are explicitly off‑limits. The overall strategy doesn’t change—count the outcomes that satisfy the restriction and divide by the total number of possible selections.
        </p>

        <p>
          The basic probability template remains:
        </p>

        <BlockMath math={"\\displaystyle P=\\frac{\\text{favorable outcomes}}{\\text{total outcomes}}"} />

        <p>
          For “must not be selected” constraints, “favorable” means “every valid selection that excludes the forbidden items.”
        </p>

        <MustKnow>
          Mentally remove banned items from the main pool before you count. The size of the subgroup you’re forming stays the same—only the pool you’re choosing from shrinks.
        </MustKnow>

        <p>
          Put another way, you often compute:
        </p>

        <BlockMath math={"\\displaystyle P=\\frac{\\#\\text{ of selections that avoid the forbidden items}}{\\#\\text{ of all possible selections}}"} />

        <MustKnow>
          When a selection is unordered, use combinations:
          <InlineMath math={"\\,\\binom{n}{k}="} />
          the number of ways to choose <InlineMath math={"k"} /> items from{" "}
          <InlineMath math={"n"} /> distinct items.
        </MustKnow>

        <section aria-labelledby="worked-mini-example" className="space-y-3">
          <h3 id="worked-mini-example" className="text-white font-semibold">
            Quick worked example
          </h3>
          <p>
            A bucket holds 2 red, 2 white, and 5 green balls (9 total). Three balls are drawn at random. What’s the probability that neither red ball is drawn?
          </p>
          <p className="text-gray-200 font-medium">Favorable selections</p>
          <p>
            Exclude the 2 reds from the pool; choose all 3 from the remaining 7:
          </p>
          <BlockMath math={"\\displaystyle \\binom{7}{3}=35"} />
          <p className="text-gray-200 font-medium">Total selections</p>
          <p>Choose any 3 from all 9:</p>
          <BlockMath math={"\\displaystyle \\binom{9}{3}=84"} />
          <p className="text-gray-200 font-medium">Probability</p>
          <BlockMath math={"\\displaystyle P=\\frac{\\binom{7}{3}}{\\binom{9}{3}}=\\frac{35}{84}=\\frac{5}{12}"} />
        </section>

        <MCQExample
          number={21}
          prompt="From a group of 8 students (including Scott and Jeffrey), a 5‑person team will be chosen at random. What is the probability that neither Scott nor Jeffrey is on the team?"
          options={["3/28", "7/56", "1/7", "5/28", "3/14"]}
          correct="3/28"
          solution={
            <>
              <p>
                Favorable selections avoid both Scott and Jeffrey. Remove them from the pool and select all 5 from the remaining 6 students:
              </p>
              <BlockMath math={"\\displaystyle \\text{Favorable}=\\binom{6}{5}=6"} />
              <p>Total ways to choose any 5 from 8:</p>
              <BlockMath math={"\\displaystyle \\text{Total}=\\binom{8}{5}=56"} />
              <p>Therefore,</p>
              <BlockMath math={"\\displaystyle P=\\frac{\\binom{6}{5}}{\\binom{8}{5}}=\\frac{6}{56}=\\frac{3}{28}"} />
              <p>Answer: 3/28.</p>
            </>
          }
        />

        <MCQExample
          number={22}
          prompt="A box has 9 distinct chips: 4 red, 3 black, and 2 white. If 4 chips are drawn at random, what is the probability that no black chip is drawn?"
          options={["11/126", "7/56", "1/9", "5/42", "17/126"]}
          correct="5/42"
          solution={
            <>
              <p>
                Exclude the 3 black chips from the pool; choose all 4 from the remaining 6 (the reds and whites):
              </p>
              <BlockMath math={"\\displaystyle \\text{Favorable}=\\binom{6}{4}=15"} />
              <p>Total ways to choose any 4 from all 9:</p>
              <BlockMath math={"\\displaystyle \\text{Total}=\\binom{9}{4}=126"} />
              <p>Thus,</p>
              <BlockMath math={"\\displaystyle P=\\frac{\\binom{6}{4}}{\\binom{9}{4}}=\\frac{15}{126}=\\frac{5}{42}"} />
              <p>Answer: 5/42.</p>
            </>
          }
        />

        <p>
          Big picture: when certain items are disallowed, shrink the selection pool by removing them and count with combinations. Then compare those favorable counts to the total number of possible selections.
        </p>
      </article>
    </main>
  );
}