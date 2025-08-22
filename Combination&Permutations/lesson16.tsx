import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.15 Collectively Exhaustive Events | Combinatorics",
  description:
    "Learn how mutually exclusive and collectively exhaustive events let you count by complement. Includes a quick walkthrough and three practice questions with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.15 Collectively Exhaustive Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In counting problems, a powerful strategy is to partition all outcomes
          into disjoint events that cover every possibility. When two events never
          happen together (mutually exclusive) and, taken together, cover the full
          sample space (collectively exhaustive), you can compute one count by
          subtracting the other from the total.
        </p>

        <MustKnow>
          <ul className="list-disc pl-6">
            <li>
              Mutually exclusive: events cannot occur at the same time.
            </li>
            <li>
              Collectively exhaustive: together they include every outcome.
            </li>
          </ul>
          <div className="mt-3">
            If A and B are mutually exclusive and collectively exhaustive, then
            <span className="sr-only">
              Total equals ways A can happen plus ways B can happen.
            </span>
            <div aria-hidden="true">
              <InlineMath math={`\\text{Total outcomes} = \\#A + \\#B`} />
            </div>
          </div>
          <div className="mt-2">
            Equivalently,
            <span className="sr-only">
              The number of outcomes in B equals total minus number of outcomes in A.
            </span>
            <div aria-hidden="true">
              <InlineMath math={`\\#B = \\text{Total outcomes} - \\#A`} />
            </div>
          </div>
        </MustKnow>

        <section aria-labelledby="worked-example-heading" className="space-y-3">
          <h3 id="worked-example-heading" className="text-xl font-semibold text-white">
            Quick walkthrough: Committees with a restriction
          </h3>
          <p>
            Build a 3‑person committee from 10 people (5 engineers, 5 architects),
            with the rule that the group cannot be all engineers.
          </p>
          <p>
            Let A = “committee is all engineers” and B = “committee is not all
            engineers.” These two events are mutually exclusive and collectively
            exhaustive, so
          </p>
          <div aria-hidden="true">
            <BlockMath math={`\\#B = \\binom{10}{3} - \\binom{5}{3}`} />
          </div>
          <p className="sr-only">
            The number not all engineers equals ten choose three minus five choose three.
          </p>
          <p>
            Compute both pieces:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={`\\binom{10}{3} = 120`} />
            </li>
            <li>
              <InlineMath math={`\\binom{5}{3} = 10`} />
            </li>
          </ul>
          <p>
            Therefore <InlineMath math={`\\#B = 120 - 10 = 110`} /> possible committees
            that aren’t all engineers.
          </p>
        </section>

        <MCQExample
          number={23}
          prompt="A 4‑person panel is formed from 5 actors and 3 musicians. If a panel cannot be all actors, how many distinct panels are possible?"
          options={["35", "42", "65", "69", "70"]}
          correct="65"
          solution={
            <>
              <p>
                Count by complement. Total 4‑person panels:
                <span className="sr-only"> eight choose four equals seventy</span>{" "}
                <InlineMath math={`\\ \\binom{8}{4} = 70`} />.
              </p>
              <p>
                Panels that are all actors:
                <span className="sr-only"> five choose four equals five</span>{" "}
                <InlineMath math={`\\ \\binom{5}{4} = 5`} />.
              </p>
              <p>
                So valid panels =
                <InlineMath math={`\\ \\binom{8}{4} - \\binom{5}{4} = 70 - 5 = 65.`} />
              </p>
            </>
          }
        />

        <MCQExample
          number={24}
          prompt="A group has n people, of whom m are left‑handed (2 ≤ m < n). How many 2‑person teams can be formed if both team members cannot be left‑handed?"
          options={[
            "n(n−1)/2 − m(m−1)/2",
            "(n+m)(n+m−1)/2",
            "m(m−1)/2 − n(n−1)/2",
            "m(m−1)/2 + n(n−1)/2",
            "n(n−1)/2 + m(m−1)/2",
          ]}
          correct="n(n−1)/2 − m(m−1)/2"
          solution={
            <>
              <p>
                Total pairs:
                <span className="sr-only"> n choose two equals n times n minus one over two</span>{" "}
                <InlineMath math={`\\binom{n}{2} = \\dfrac{n(n-1)}{2}`} />.
              </p>
              <p>
                Forbidden pairs (both left‑handed):
                <span className="sr-only"> m choose two equals m times m minus one over two</span>{" "}
                <InlineMath math={`\\binom{m}{2} = \\dfrac{m(m-1)}{2}`} />.
              </p>
              <p>
                Valid teams =
                <InlineMath
                  math={`\\ \\binom{n}{2} - \\binom{m}{2} = \\dfrac{n(n-1)}{2} - \\dfrac{m(m-1)}{2}.`}
                />
              </p>
            </>
          }
        />

        <MCQExample
          number={25}
          prompt="Josie picks two distinct integers from 1 to 15 inclusive. If the two numbers cannot be consecutive, how many pairs are possible?"
          options={["90", "91", "105", "195", "196"]}
          correct="91"
          solution={
            <>
              <p>
                Total unordered pairs:
                <InlineMath math={`\\binom{15}{2} = 105`} />.
              </p>
              <p>
                Consecutive pairs are
                <InlineMath math={`\\ (1,2), (2,3), \\dots, (14,15)`} />, which is 14 pairs.
              </p>
              <p>
                Nonconsecutive =
                <InlineMath math={`\\ 105 - 14 = 91.`} />
              </p>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt="A set has 12 integers: 6 even and 6 odd. In how many ways can you choose two different numbers whose product is even?"
          options={["15", "33", "45", "51", "66"]}
          correct="51"
          solution={
            <>
              <p>
                Total unordered pairs:
                <InlineMath math={`\\binom{12}{2} = 66`} />.
              </p>
              <p>
                The only way to get an odd product is odd × odd. Those pairs:
                <InlineMath math={`\\binom{6}{2} = 15`} />.
              </p>
              <p>
                Even‑product pairs =
                <InlineMath math={`\\ 66 - 15 = 51.`} />
              </p>
            </>
          }
        />

        <p>
          Takeaway: when two complementary events partition the sample space,
          you can often compute the harder count by subtracting the easier count
          from the total. This “counting by complement” approach is fast, reliable,
          and widely useful in combinatorics.
        </p>
      </article>
    </main>
  );
}