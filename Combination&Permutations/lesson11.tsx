import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '16.2.10 Choosing "At Least" a Certain Number | Combinations',
  description:
    'Learn to translate “at least” into mutually exclusive counting cases and add them up. Includes a worked multiple‑choice example with full, KaTeX‑formatted solution.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.10 Choosing “at least” some number of items
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In counting problems, “at least” means “no less than.” For instance, “at
          least two” translates to a quantity <InlineMath math={"\\ge 2"} />. The usual
          approach is to split into separate, non‑overlapping cases that meet the
          minimum and then add those counts.
        </p>

        <p>
          Example: If a stand sells six kinds of fruit and you must pick at least two
          types, the possible case counts are exactly 2, 3, 4, 5, or 6 types. These
          cases are mutually exclusive, so you add the number of ways from each case.
        </p>

        <MustKnow>
          “At least k” means “k or more.” Handle it by:
          1) listing the valid, non‑overlapping cases (k, k+1, …),
          2) counting each case, and
          3) adding the results. Equivalently, you can sometimes use a complement:
          total − (fewer than k).
        </MustKnow>

        <MCQExample
          number={15}
          prompt="A 4‑person international rugby squad is selected from 5 Turkish and 6 Iranian players. If the squad must include at least two Iranian players, how many distinct squads are possible?"
          options={["150", "265", "315", "420", "900"]}
          correct="265"
          solution={
            <>
              <p>
                “At least two Iranians” means we can have exactly 2 Iranians, 3 Iranians,
                or 4 Iranians on the 4‑person squad. These cases don’t overlap, so we add
                their counts.
              </p>

              <p className="mt-4 font-semibold text-white">Case 1: 2 Iranians and 2 Turks</p>
              <BlockMath math={"\\binom{6}{2}\\times\\binom{5}{2}=15\\times 10=150"} />

              <p className="mt-4 font-semibold text-white">Case 2: 3 Iranians and 1 Turk</p>
              <BlockMath math={"\\binom{6}{3}\\times\\binom{5}{1}=20\\times 5=100"} />

              <p className="mt-4 font-semibold text-white">Case 3: 4 Iranians and 0 Turks</p>
              <BlockMath math={"\\binom{6}{4}=15"} />

              <p className="mt-4">
                Add the mutually exclusive cases:
              </p>
              <BlockMath math={"150+100+15=265"} />
              <p>Therefore, the answer is 265.</p>

              <p className="mt-6 text-gray-300">
                Quick cross‑check (complement): total 4‑person squads from 11 players is{" "}
                <InlineMath math={"\\binom{11}{4}=330"} />. Squads with fewer than two Iranians:
                0 Iranians: <InlineMath math={"\\binom{6}{0}\\binom{5}{4}=5"} />; 1 Iranian:{" "}
                <InlineMath math={"\\binom{6}{1}\\binom{5}{3}=6\\times 10=60"} />. Subtract:
                <InlineMath math={"\\,330-(5+60)=265"} />.
              </p>
            </>
          }
        />

        <p>
          Takeaway: When you see “at least,” think “sum across valid middle‑to‑max cases,”
          or use a clean complement if that arithmetic is simpler.
        </p>
      </article>
    </main>
  );
}