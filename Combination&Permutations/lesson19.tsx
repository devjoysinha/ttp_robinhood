import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.18 Dependent Combinations | Combinatorics",
  description:
    "Understand how earlier selections affect later counts in multi‑step combination problems. Includes a worked multiple‑choice example and two equivalent solution paths using combinations and the multinomial approach.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.18 Dependent Combinations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many counting problems involve a sequence of choices. Those choices are
          called dependent when an earlier pick changes how many options remain
          for the next pick. In combination problems, that usually means our pool
          of available items shrinks step by step.
        </p>

        <MustKnow>
          Earlier selections can change the size of the pool for later selections.
          When forming groups in stages, count with combinations at each step
          (order within a group does not matter) and multiply across steps. If
          the groups are labeled (e.g., Design vs. Construction), you do not
          divide by any extra factorial for the groups themselves.
        </MustKnow>

        <MCQExample
          number={30}
          prompt="A manager needs to place nine of ten workers onto three distinct teams — Design, Construction, and Control — each with three members. No one can be on more than one team. In how many ways can the three teams be created?"
          options={[
            "100 × 10",
            "120 × 20",
            "130 × 15 × 2",
            "140 × 20 × 4",
            "120 × 35 × 4",
          ]}
          correct="120 × 35 × 4"
          solution={
            <>
              <p className="mb-2">
                Because the teams are labeled, we can select them sequentially
                with combinations and multiply:
              </p>

              <ol className="list-inside list-decimal space-y-2">
                <li>
                  Choose the 3 Design members from 10:
                  <span className="ml-2 inline-block">
                    <InlineMath math={"\\binom{10}{3} = 120"} />
                  </span>
                </li>
                <li>
                  Now 7 workers remain. Choose the 3 Construction members:
                  <span className="ml-2 inline-block">
                    <InlineMath math={"\\binom{7}{3} = 35"} />
                  </span>
                </li>
                <li>
                  Now 4 workers remain. Choose the 3 Control members:
                  <span className="ml-2 inline-block">
                    <InlineMath math={"\\binom{4}{3} = 4"} />
                  </span>
                </li>
              </ol>

              <div className="mt-3">
                <BlockMath math={"\\binom{10}{3}\\cdot \\binom{7}{3}\\cdot \\binom{4}{3} = 120\\cdot 35\\cdot 4 = 16{,}800"} />
              </div>

              <p className="mt-3">
                Therefore, the total number of configurations is 16,800, which
                matches the choice
                <span className="ml-1 font-semibold">120 × 35 × 4</span>.
              </p>

              <hr className="my-4 border-gray-700" />

              <p className="mb-2 font-semibold">Alternate viewpoint (multinomial):</p>
              <p>
                Pick the one person who is not assigned:
                <span className="ml-2 inline-block">
                  <InlineMath math={"\\binom{10}{1} = 10"} />
                </span>
                . Then split the remaining 9 workers into three labeled teams of 3:
              </p>
              <div className="mt-2">
                <BlockMath math={"\\frac{9!}{3!\\,3!\\,3!} = 1680"} />
              </div>
              <div className="mt-2">
                <BlockMath math={"10 \\times \\frac{9!}{3!\\,3!\\,3!} = 10 \\times 1680 = 16{,}800"} />
              </div>
              <p className="mt-2">
                This confirms the same result.
              </p>
            </>
          }
        />

        <p>
          Common pitfall: If the teams were indistinguishable (unlabeled), you
          would divide by <InlineMath math={"3!"} /> to remove the overcount from
          permuting the three identical groups. Here, the teams are named, so no
          extra division is needed beyond using combinations within each team.
        </p>
      </article>
    </main>
  );
}