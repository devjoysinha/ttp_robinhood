import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn't already include KaTeX styles globally,
// be sure to add `import "katex/dist/katex.min.css";` in your root layout.
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.1 Introduction | Combinations and Permutations",
  description:
    "A quick, clear intro to combinatorics on the GMAT: when to use combinations vs. permutations, what each counts, and the key formulas with examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Combinatorics is the part of math focused on counting how many outcomes
          or arrangements are possible under certain rules. On the GMAT, the two
          workhorses you’ll use are combinations and permutations.
        </p>

        <p>
          Both tools count how many ways a task can be carried out. The only
          difference is whether order matters:
        </p>

        <MustKnow>
          - Use combinations when order does not matter (just selections).
          <br />
          - Use permutations when order does matter (arrangements/lineups).
        </MustKnow>

        <section aria-labelledby="formulas-heading" className="space-y-4">
          <h3
            id="formulas-heading"
            className="text-lg font-semibold text-white"
          >
            Core formulas you’ll use
          </h3>

          <p className="text-gray-300">
            Combinations: number of ways to choose <InlineMath math="r" /> items
            from <InlineMath math="n" /> when order is irrelevant:
          </p>
          <BlockMath math={`\\displaystyle \\binom{n}{r} = \\frac{n!}{r!(n-r)!}`} />

          <p className="text-gray-300">
            Permutations: number of ways to arrange <InlineMath math="r" /> items
            from <InlineMath math="n" /> when order is important:
          </p>
          <BlockMath math={`\\displaystyle P(n,r) = \\frac{n!}{(n-r)!}`} />

          <p className="text-gray-300">
            Recall: factorial means multiply down to 1. For example,{" "}
            <InlineMath math="5! = 5\\cdot4\\cdot3\\cdot2\\cdot1 = 120" /> and{" "}
            <InlineMath math="0! = 1" /> by definition.
          </p>
        </section>

        <section aria-labelledby="identify-heading" className="space-y-3">
          <h3
            id="identify-heading"
            className="text-lg font-semibold text-white"
          >
            How to decide quickly
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              If rearranging the chosen items creates a new outcome, you’re
              dealing with a permutation.
            </li>
            <li>
              If rearranging the chosen items doesn’t change the outcome, it’s a
              combination.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="From a set of 7 candidates, how many distinct 3‑person committees can be formed?"
          options={["21", "28", "35", "84", "210"]}
          correct="35"
          solution={
            <>
              <p>
                This is a selection problem — a committee has no positions, so
                order does not matter. Use combinations:
              </p>
              <BlockMath math={`\\displaystyle \\binom{7}{3} = \\frac{7!}{3!\\,4!} = \\frac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1} = 35`} />
              <p>Therefore, there are 35 committees.</p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="How many different 4‑person lineups can be made from 9 people for four distinct positions?"
          options={["126", "3024", "504", "6561", "362880"]}
          correct="3024"
          solution={
            <>
              <p>
                This is an arrangement problem — the positions are distinct, so
                order matters. Use permutations:
              </p>
              <BlockMath math={`\\displaystyle P(9,4) = \\frac{9!}{(9-4)!} = 9\\cdot8\\cdot7\\cdot6 = 3024`} />
              <p>Thus, there are 3024 possible lineups.</p>
            </>
          }
        />

        <section aria-labelledby="wrapup-heading" className="space-y-3">
          <h3 id="wrapup-heading" className="text-lg font-semibold text-white">
            Big picture
          </h3>
          <p>
            First decide whether order matters. If yes, it’s a permutation; if
            not, it’s a combination. Then apply the matching formula and
            simplify.
          </p>
        </section>
      </article>
    </main>
  );
}