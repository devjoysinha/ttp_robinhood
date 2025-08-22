import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.6 Start with the Most Restrictive Choice | Combinatorics",
  description:
    "Learn why multi‑digit counting problems should begin with the most constrained position. Includes a guided mini‑example and two multiple‑choice practice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.6 Lead with the Most Restrictive Digit in Multi‑Digit Counts
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many multi‑digit counting tasks, picking one position can change the
          options available for the others. When that dependency exists, counting
          “left to right” or in any fixed order can break down.
        </p>

        <MustKnow>
          If the number of options for one position depends on earlier choices, do
          not choose positions in a convenient order. Instead, begin with the most
          restrictive position, then proceed to the next most restrictive, and so on.
          This approach minimizes unwanted dependencies and makes the fundamental
          counting principle straightforward to apply.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Three‑digit odd numbers with no repeated digits
          </h3>
          <p className="mt-2">
            Goal: Count positive 3‑digit integers that are odd and use no repeated
            digits.
          </p>

          <p className="mt-2">
            A naive “hundreds → tens → ones” approach runs into trouble. The ones
            place must be odd, but how many choices remain there depends on whether
            we already used odd digits earlier:
          </p>

          <ul className="list-disc pl-6">
            <li>
              If exactly one odd digit was used in hundreds or tens, then remaining
              odd choices for ones are <InlineMath math={"5 - 1 = 4"} />.
            </li>
            <li>
              If two odd digits were used, remaining choices are{" "}
              <InlineMath math={"5 - 2 = 3"} />.
            </li>
            <li>If no odd digits were used, there are 5 choices for the ones place.</li>
          </ul>

          <p className="mt-2">
            Different scenarios produce different counts for the ones place, so the
            naive order creates a dependency headache. Instead, start with the
            tightest constraint: the units digit must be odd.
          </p>

          <p className="mt-2">
            Choose positions from most to least restrictive:
          </p>
          <ul className="list-disc pl-6">
            <li>Ones (must be odd): 5 choices (1, 3, 5, 7, 9).</li>
            <li>
              Hundreds (cannot be 0 and cannot repeat the ones digit):{" "}
              <InlineMath math={"10 - 2 = 8"} /> choices.
            </li>
            <li>
              Tens (cannot repeat either chosen digit):{" "}
              <InlineMath math={"10 - 2 = 8"} /> choices.
            </li>
          </ul>

          <p className="mt-2">
            By the fundamental counting principle,
          </p>
          <BlockMath math={"5 \\times 8 \\times 8 = 320"} />
          <p className="mt-2">
            So, there are 320 such three‑digit integers.
          </p>
        </section>

        <MustKnow>
          Summary rule: order your choices by how restrictive they are. Fix the
          position with the strongest constraint first. If multiple positions are
          equally constrained, the order among those positions does not matter.
        </MustKnow>

        <MCQExample
          number={53}
          prompt="How many integers from 100 to 999, inclusive, have 2 or 5 as the tens digit and contain no repeated digits?"
          options={["108", "128", "144", "180", "200"]}
          correct="128"
          solution={
            <>
              <p>
                Treat all 3‑digit integers and enforce the tens restriction. The tens
                place is the tightest constraint, so choose it first: 2 choices (2 or 5).
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Hundreds: any nonzero digit except the tens digit.{" "}
                  <InlineMath math={"10 - 2 = 8"} /> choices.
                </li>
                <li>
                  Ones: any digit except the two already used.{" "}
                  <InlineMath math={"10 - 2 = 8"} /> choices.
                </li>
              </ul>
              <BlockMath math={"2 \\times 8 \\times 8 = 128"} />
              <p>Therefore, the answer is 128.</p>
            </>
          }
        />

        <MCQExample
          number={54}
          prompt="How many positive four‑digit integers are odd and use four distinct nonzero digits?"
          options={["1,680", "1,960", "2,240", "2,520", "3,240"]}
          correct="1,680"
          solution={
            <>
              <p>
                The units digit must be odd, which is the strongest constraint. Start
                there: 5 choices (1, 3, 5, 7, 9).
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Thousands: any nonzero digit except the chosen units digit.{" "}
                  <InlineMath math={"10 - 2 = 8"} /> choices.
                </li>
                <li>
                  Hundreds: any nonzero digit except the two already used.{" "}
                  <InlineMath math={"10 - 3 = 7"} /> choices.
                </li>
                <li>
                  Tens: any nonzero digit except the three already used.{" "}
                  <InlineMath math={"10 - 4 = 6"} /> choices.
                </li>
              </ul>
              <BlockMath math={"5 \\times 8 \\times 7 \\times 6 = 1680"} />
              <p>So, there are 1,680 such four‑digit integers.</p>
            </>
          }
        />

        <p className="mt-6">
          Takeaway: Counting is about controlling dependencies. When you anchor the
          most limited position first, the rest of the choices typically fall into
          place, and the multiplication rule applies cleanly.
        </p>
      </article>
    </main>
  );
}