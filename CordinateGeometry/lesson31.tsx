import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.11.5 Working with Multiple Inequalities | Coordinate Geometry",
  description:
    "How to reason about the intersection of linear inequalities on the xy-plane. Learn which side of a boundary line to shade, how to include or exclude the boundary, and practice by testing points.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.11.5 Working with Multiple Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some coordinate-geometry questions require you to satisfy more than one
          inequality at the same time. The quickest path is to understand what
          each boundary line represents and which side of that line belongs to
          the solution set.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Shading rules for linear inequalities</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                For <InlineMath math={"y < mx + b"} />, shade strictly below the
                line <InlineMath math={"y = mx + b"} />; the boundary is not included
                (drawn dashed, conceptually).
              </li>
              <li>
                For <InlineMath math={"y \\le mx + b"} />, shade below and include the
                boundary line <InlineMath math={"y = mx + b"} />.
              </li>
              <li>
                For <InlineMath math={"y > mx + b"} />, shade strictly above the line
                <InlineMath math={"y = mx + b"} />.
              </li>
              <li>
                For <InlineMath math={"y \\ge mx + b"} />, shade above and include the
                line <InlineMath math={"y = mx + b"} />.
              </li>
            </ul>
            <p className="mt-3">
              Combining conditions:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                “And” means intersection: a point must satisfy all inequalities.
              </li>
              <li>
                “Or” means union: a point may satisfy any one of the inequalities.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="quick-test" className="space-y-3">
          <h3 id="quick-test" className="text-lg font-semibold text-white">
            Fast check: testing a point
          </h3>
          <p>
            When graphing isn’t convenient, plug a point’s coordinates into each
            inequality. If all statements are true, the point lives in the required
            region.
          </p>
        </section>

        <MCQExample
          number={46}
          prompt="In the xy‑plane, region R is defined by y ≤ 6x + 8 and region S is defined by y ≥ 2x + 1. Which of the following points does NOT lie in both R and S?"
          options={["(2, 6)", "(4, 12)", "(8, 24)", "(9, 15)", "(80, 240)"]}
          correct="(9, 15)"
          solution={
            <>
              <p>
                We need the intersection of the two half‑planes:
              </p>
              <div className="rounded-md bg-slate-900/40 p-3">
                <BlockMath math={"R: \\; y \\le 6x + 8"} />
                <BlockMath math={"S: \\; y \\ge 2x + 1"} />
              </div>

              <p className="mt-3">
                Test each option. A point lies in both regions only if it satisfies
                both inequalities.
              </p>

              <p className="mt-3">
                A. (2, 6): Check R: <InlineMath math={"6 \\le 6(2) + 8 = 20"} /> (true).{" "}
                Check S: <InlineMath math={"6 \\ge 2(2) + 1 = 5"} /> (true). Included.
              </p>

              <p>
                B. (4, 12): R: <InlineMath math={"12 \\le 6(4) + 8 = 32"} /> (true). S:{" "}
                <InlineMath math={"12 \\ge 2(4) + 1 = 9"} /> (true). Included.
              </p>

              <p>
                C. (8, 24): R: <InlineMath math={"24 \\le 6(8) + 8 = 56"} /> (true). S:{" "}
                <InlineMath math={"24 \\ge 2(8) + 1 = 17"} /> (true). Included.
              </p>

              <p>
                D. (9, 15): R: <InlineMath math={"15 \\le 6(9) + 8 = 62"} /> (true). S:{" "}
                <InlineMath math={"15 \\ge 2(9) + 1 = 19"} /> (false). Not included in S.
              </p>

              <p>
                E. (80, 240): R: <InlineMath math={"240 \\le 6(80) + 8 = 488"} /> (true). S:{" "}
                <InlineMath math={"240 \\ge 2(80) + 1 = 161"} /> (true). Included.
              </p>

              <p className="mt-3 font-semibold text-white">
                Therefore, (9, 15) is the only point that is not in both regions. Answer: D.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="space-y-3">
          <h3 id="big-picture" className="text-lg font-semibold text-white">
            Big picture
          </h3>
          <p>
            Multiple‑inequality questions are position problems. Identify which side of
            each boundary line qualifies, then take the overlap. When in doubt, test
            a point by substitution—it’s fast and reliable.
          </p>
        </section>
      </article>
    </main>
  );
}