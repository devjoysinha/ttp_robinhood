import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.11 Combinatorics × Probability | GMAT Probability",
  description:
    "Count favorable and total outcomes with combinations to get probabilities. Compare the sequential approach vs. the counting approach, then practice with two MCQs.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.11 Blending Combinatorics and Probability
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A dependable way to compute probabilities is to count outcomes: use
          combinatorics to tally how many outcomes produce the event of interest
          and how many outcomes are possible overall, then form a ratio.
        </p>

        <BlockMath math={"\\displaystyle P(\\text{event}) = \\frac{\\text{# favorable outcomes}}{\\text{# total outcomes}}"} />

        <p>
          This “count-then-divide” strategy shines in multi‑draw, no‑replacement
          settings, but it also matches intuition on simple questions. For
          instance, if a cooler has 5 orange and 4 grape sodas, the probability
          of picking a grape is
          {" "}
          <InlineMath math={"\\tfrac{4}{9}"} />. Using combinations gives the
          same result:
          {" "}
          <InlineMath math={"\\tfrac{\\binom{4}{1}}{\\binom{9}{1}} = \\tfrac{4}{9}"} />.
        </p>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            Two ways to handle multi‑draw problems
          </h3>

          <p>
            Suppose a class has 4 girls and 5 boys. If 3 students are selected
            at random, what’s the probability of choosing exactly 1 girl?
          </p>

          <p className="font-semibold text-white">Sequential (traditional) method:</p>
          <p>
            One order that yields 1 girl and 2 boys is G‑B‑B. The probability
            of that exact order is
            {" "}
            <InlineMath math={"\\tfrac{4}{9} \\cdot \\tfrac{5}{8} \\cdot \\tfrac{4}{7} = \\tfrac{10}{63}"} />.
            There are
            {" "}
            <InlineMath math={"\\tfrac{3!}{2!} = 3"} /> such orders (GBB in any
            arrangement), so
            {" "}
            <InlineMath math={"P(\\text{exactly 1 girl}) = 3 \\cdot \\tfrac{10}{63} = \\tfrac{30}{63} = \\tfrac{10}{21}"} />.
          </p>

          <p className="font-semibold text-white">Counting (combinatorics) method:</p>
          <p>
            Count favorable selections and divide by total selections. Favorable:
            {" "}
            <InlineMath math={"\\binom{4}{1}\\binom{5}{2} = 4\\cdot 10 = 40"} />.
            Total:
            {" "}
            <InlineMath math={"\\binom{9}{3} = 84"} />. Thus
            {" "}
            <InlineMath math={"P = \\tfrac{40}{84} = \\tfrac{10}{21}"} />.
          </p>

          <p>
            Both approaches agree, but the counting route is usually faster and
            less error‑prone when there are multiple draws without replacement.
          </p>
        </section>

        <MustKnow>
          For multi‑draw, no‑replacement problems, consider counting outcomes:
          compute the number of favorable selections and the number of possible
          selections with combinations, then take the ratio
          {" "}
          <InlineMath math={"\\tfrac{\\text{favorable}}{\\text{total}}"} />.
          It’s concise and avoids tracking every order.
        </MustKnow>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick practice</h3>

          <MCQExample
            number={18}
            prompt="A waiting room has 5 cats and 3 dogs. If 5 animals are selected at random, what is the probability that exactly 3 cats and 2 dogs are chosen?"
            options={["9/14", "15/28", "3/7", "5/14", "9/28"]}
            correct="15/28"
            solution={
              <>
                <p>
                  Count favorable selections and divide by total selections.
                </p>
                <p>
                  Favorable:
                  {" "}
                  <InlineMath math={"\\binom{5}{3}\\binom{3}{2} = 10\\cdot 3 = 30"} />.
                  Total:
                  {" "}
                  <InlineMath math={"\\binom{8}{5} = 56"} />.
                </p>
                <p>
                  Probability:
                  {" "}
                  <InlineMath math={"\\tfrac{30}{56} = \\tfrac{15}{28}"} />.
                </p>
              </>
            }
          />

          <MCQExample
            number={19}
            prompt="A table has 4 even-numbered cards and 7 odd-numbered cards. If 4 cards are drawn at random, what is the probability that exactly 2 are even and 2 are odd?"
            options={["3/13", "2/11", "119/330", "4/11", "21/55"]}
            correct="21/55"
            solution={
              <>
                <p>
                  Favorable:
                  {" "}
                  <InlineMath math={"\\binom{4}{2}\\binom{7}{2} = 6\\cdot 21 = 126"} />.
                  Total:
                  {" "}
                  <InlineMath math={"\\binom{11}{4} = 330"} />.
                </p>
                <p>
                  Probability:
                  {" "}
                  <InlineMath math={"\\tfrac{126}{330} = \\tfrac{21}{55}"} />.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Takeaways</h3>
          <ul className="list-disc pl-5">
            <li>
              When order matters, the sequential approach works but can be long.
            </li>
            <li>
              When order doesn’t matter (typical selection questions), use
              combinations:
              {" "}
              <InlineMath math={"\\binom{\\cdot}{\\cdot}"} /> for favorable and total,
              then form the ratio.
            </li>
            <li>
              Always check whether draws are with or without replacement—counts
              change accordingly.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}