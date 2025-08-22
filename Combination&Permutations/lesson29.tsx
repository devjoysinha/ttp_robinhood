import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.3.8 Counting 3‑Dimensional Paths | Combinatorics",
  description:
    "Count lattice paths on a 3D rectangular grid using the multinomial coefficient. Learn the formula, see a quick worked mini‑example, and try a multiple‑choice question with a full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.8 Counting 3‑Dimensional Paths
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The 2‑D lattice‑path idea extends cleanly to 3‑D boxes. If you move from
          one corner of a rectangular prism to the opposite corner using only unit
          steps along the three axes, the total number of distinct routes depends only
          on how many steps you must take in each direction, not on the layout of the
          prism’s faces. You can count all paths that run on the surface or through
          the interior—every sequence of steps is fair game as long as each step is
          a 1‑unit move in an allowed direction.
        </p>

        <MustKnow>
          <>
            Suppose a trip from point A to point B on a 3‑D rectangular grid
            requires exactly j steps along one axis, k along a second axis, and m along
            the third (order can vary). The number of distinct paths is the multinomial
            count:
            <div className="mt-3">
              <BlockMath math="\displaystyle \frac{(j+k+m)!}{j!\,k!\,m!}" />
            </div>
            Intuition: among the total <InlineMath math="j+k+m" /> steps, choose which
            positions are the j moves in one direction, which are the k moves in the second,
            and which are the m moves in the third.
          </>
        </MustKnow>

        <section aria-labelledby="mini-example" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="mini-example" className="text-base font-semibold text-white">
            Mini‑example: a 2 × 2 × 3 prism
          </h3>
          <p className="mt-2">
            From X to Y, each valid route uses 2 steps in one axis, 2 in another,
            and 3 in the third. Thus j = 2, k = 2, m = 3 and the total number of paths is:
          </p>
          <div className="mt-2">
            <BlockMath math="\displaystyle \frac{(2+2+3)!}{2!\,2!\,3!} \;=\; \frac{7!}{2!\,2!\,3!} \;=\; 210" />
          </div>
          <p className="mt-2">So there are 210 distinct paths from X to Y.</p>
        </section>

        <MCQExample
          number={38}
          prompt="Points X and Y are opposite corners of a 3‑D rectangular grid with dimensions 2 by 4 by 4. If you must travel from X to Y in 1‑unit moves using only down, left, or back, and you count every possible path (including those through the interior and on hidden faces), how many distinct paths are there?"
          options={["320", "1,440", "2,400", "3,150", "3,200"]}
          correct="3,150"
          solution={
            <>
              <p>
                Any route must make 2 moves in one axis, 4 in another, and 4 in the third.
                Let j = 2, k = 4, m = 4. Apply the multinomial formula:
              </p>
              <BlockMath math="\displaystyle \#\text{paths} \;=\; \frac{(j+k+m)!}{j!\,k!\,m!} \;=\; \frac{(2+4+4)!}{2!\,4!\,4!} \;=\; \frac{10!}{2!\,4!\,4!}" />
              <p>Compute:</p>
              <BlockMath math="\displaystyle \frac{10!}{2!\,4!\,4!} \;=\; 3{,}150" />
              <p>Therefore, the correct answer is 3,150.</p>
            </>
          }
        />

        <p>
          Key takeaway: 3‑D path counts are position‑based, not geometry‑heavy. Once you
          know how many steps must be taken along each axis, the answer is simply the
          multinomial <InlineMath math="(j+k+m)!/(j!\,k!\,m!)" />.
        </p>
      </article>
    </main>
  );
}