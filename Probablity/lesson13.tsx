import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.10.2 Caveats with Complementary Events | Probability",
  description:
    "Learn when subtracting from 1 is valid in probability and when it isn’t. Includes clear examples with coins, marbles, and a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.10.2 Pitfalls to Avoid When Using Complementary Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A powerful shortcut for “at least one” problems is to use complements:
          compute the chance that the event never happens, then subtract from 1.
          This works beautifully—but only when the event you subtract truly covers
          all remaining outcomes.
        </p>

        <MustKnow>
          You can replace P(A) with 1 − P(not A) only when “not A” is the exact
          complement of A: together they must partition the entire sample space,
          with no overlap and no gaps.
        </MustKnow>

        <section aria-labelledby="coin-example">
          <h3 id="coin-example" className="text-xl font-semibold text-white">
            A quick warm‑up: at least one heads
          </h3>
          <p>
            For six flips of a fair coin, “at least one heads” and “no heads”
            are perfect complements. So:
          </p>
          <BlockMath math={`\\begin{aligned}
          P(\\text{at least one head})
          &= 1 - P(\\text{no heads}) \\\\
          &= 1 - \\left(\\tfrac{1}{2}\\right)^6 \\\\
          &= 1 - \\tfrac{1}{64} \\\\
          &= \\tfrac{63}{64}
          \\end{aligned}`} />
          <p>
            This works because every outcome either has at least one heads or has none—no
            other possibility exists.
          </p>
        </section>

        <section aria-labelledby="noncomplement-example">
          <h3 id="noncomplement-example" className="text-xl font-semibold text-white">
            When “complement” logic breaks
          </h3>
          <p>
            Suppose you’re choosing two fruits from a large bowl and you want the
            probability of picking no bananas. The outcomes “no bananas” and “two
            bananas” do not cover all possibilities—“exactly one banana” is missing.
            Therefore, you cannot write P(no bananas) + P(two bananas) = 1.
          </p>
        </section>

        <section aria-labelledby="marble-example">
          <h3 id="marble-example" className="text-xl font-semibold text-white">
            Mini‑example: no red marbles
          </h3>
          <p>
            A jar has 12 marbles: 3 red, 5 blue, and 4 white. If two marbles are
            drawn at random without replacement, what’s the probability that no red
            marbles are chosen?
          </p>
          <p>
            The outcomes “no red” and “two red” aren’t complements because “exactly one red”
            also exists. So don’t subtract P(two red) from 1. Instead, compute the
            event directly as “both are non‑red.”
          </p>
          <BlockMath math={`\\begin{aligned}
          P(\\text{no red}) &= P(\\text{two non-red}) \\\\
          &= \\tfrac{9}{12} \\cdot \\tfrac{8}{11} \\\\
          &= \\tfrac{3}{4} \\cdot \\tfrac{8}{11} \\\\
          &= \\tfrac{24}{44} \\\\
          &= \\tfrac{6}{11}
          \\end{aligned}`} />
          <p>
            If the question asked for “at least one red,” then “at least one red”
            and “no red” are complements, so:
          </p>
          <BlockMath math={`\\begin{aligned}
          P(\\text{at least one red}) &= 1 - P(\\text{no red}) \\\\
          &= 1 - \\tfrac{6}{11} \\\\
          &= \\tfrac{5}{11}
          \\end{aligned}`} />
        </section>

        <MustKnow>
          A quick test for complements:
          <ul className="ml-5 list-disc">
            <li>Together they must account for every outcome.</li>
            <li>They cannot overlap.</li>
          </ul>
          If either condition fails, don’t subtract from 1—compute the event directly.
        </MustKnow>

        <MCQExample
          number={17}
          prompt="Homa’s cellar has 8 bottles: 2 red, 2 white, 2 rosé, and 2 rice wines. If Homa randomly picks 2 bottles without replacement, what’s the probability that neither bottle is red?"
          options={["2/7", "1/4", "5/14", "15/28", "27/56"]}
          correct="15/28"
          solution={
            <>
              <p>
                There are 6 non‑red bottles out of 8 total. Selecting two non‑red bottles
                without replacement:
              </p>
              <BlockMath math={`\\begin{aligned}
              P(\\text{no red}) &= \\tfrac{6}{8} \\cdot \\tfrac{5}{7} \\\\
              &= \\tfrac{30}{56} \\\\
              &= \\tfrac{15}{28}.
              \\end{aligned}`} />
              <p>
                Note that “no red” and “two red” are not complements because “exactly one red”
                also exists, so subtracting P(two red) from 1 would be invalid here.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p>
            The complement trick is fantastic when it truly covers everything else.
            Confirm that “Event” and “not Event” split the entire space with no overlap.
            If not, compute the probability directly by counting favorable outcomes
            or by multiplying conditional probabilities.
          </p>
        </section>
      </article>
    </main>
  );
}