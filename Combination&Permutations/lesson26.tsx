import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.3.5 Pathway Questions | Combinatorics",
  description:
    "Count shortest paths on grids with and without checkpoints, and extend to 3D paths. Learn the binomial/multinomial formulas, see a quick MCQ, and practice with two Data Sufficiency drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.5 Pathway Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many counting problems ask for the number of distinct shortest routes
          from a start to an end point on a grid, sometimes with required
          waypoints. These are classic applications of combinations and, in 3D,
          multinomials.
        </p>

        <p>We’ll focus on three common variations:</p>
        <ul className="list-disc pl-6">
          <li>2D grids with mandatory checkpoints</li>
          <li>2D grids without checkpoints</li>
          <li>3D grids with steps along three positive directions</li>
        </ul>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Core formulas and ideas</p>
            <ul className="list-disc pl-6">
              <li>
                2D shortest paths: If you must move r steps in one direction
                and c steps in the other, the number of shortest paths is{" "}
                <InlineMath math={"\\binom{r+c}{r} = \\binom{r+c}{c}"} />.
              </li>
              <li>
                With a checkpoint C that’s p steps along one axis and q along
                the other (from the start), multiply the legs:
                <BlockMath math={"\\binom{p+q}{p} \\times \\binom{(r-p)+(c-q)}{r-p}"} />
              </li>
              <li>
                3D shortest paths: If you must move a, b, and c steps along the
                x, y, and z directions (only forward moves), the count is the
                multinomial:
                <BlockMath math={"\\frac{(a+b+c)!}{a!\\,b!\\,c!"} />
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Why these work: a shortest path is just an arrangement of fixed
              steps. In 2D, you arrange r moves of one kind and c of the other
              (a binomial coefficient). In 3D, you arrange a, b, and c moves of
              three kinds (a multinomial).
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="On a rectangular grid, you can move only right or up. From A you must reach B, which is 4 blocks to the right and 3 blocks up from A. How many distinct shortest routes are there from A to B?"
          options={["12", "24", "28", "35", "56"]}
          correct="35"
          solution={
            <>
              <p>
                A shortest route has 4 rights and 3 ups in some order. The
                number of such sequences is{" "}
                <InlineMath math={"\\binom{4+3}{4} = \\binom{7}{4} = 35"} />.
              </p>
            </>
          }
        />

        <p>
          When checkpoints are required, break the trip into legs and multiply
          the counts for each leg.
        </p>

        <ExampleCard
          number={2}
          title="2D grid with an unknown checkpoint (Data Sufficiency)"
          statements={[
            "On a grid, you can move only right or up. From S at (0, 0) you must reach T at (a, b) via checkpoint C at (p, q). All variables are non‑negative integers with p ≤ a and q ≤ b. What is the number of distinct shortest routes from S to T that pass through C?",
            "1) a = 5 and b = 3",
            "2) p = 2 and q = 1",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                The count of shortest paths through C equals{" "}
                <InlineMath math={"\\binom{p+q}{p} \\times \\binom{(a-p)+(b-q)}{a-p}"} />
                .
              </p>
              <p>
                Statement (1) alone gives a and b but not p and q, so we cannot
                evaluate the product. Not sufficient.
              </p>
              <p>
                Statement (2) alone gives p and q but not a and b. Not
                sufficient.
              </p>
              <p>
                Together, a = 5, b = 3, p = 2, q = 1. The count is{" "}
                <InlineMath math={"\\binom{2+1}{2} \\times \\binom{(5-2)+(3-1)}{5-2} = \\binom{3}{2}\\times\\binom{5}{3} = 3\\times10 = 30"} />
                . Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Shortest paths in 3D (Data Sufficiency)"
          statements={[
            "From the origin, you must reach point P by taking only forward unit steps along the x-, y-, and z-axes. If the destination requires a steps in x, b in y, and c in z, how many distinct shortest routes reach P?",
            "1) a = 2, b = 2, and a + b + c = 5",
            "2) c = 1",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                For a 3D shortest path, the count is{" "}
                <InlineMath math={"\\dfrac{(a+b+c)!}{a!\\,b!\\,c!"} />.
              </p>
              <p>
                Statement (1): If a = 2, b = 2, and a + b + c = 5, then c = 1.
                The count is{" "}
                <InlineMath math={"\\dfrac{5!}{2!\\,2!\\,1!} = 30"} />. Sufficient.
              </p>
              <p>
                Statement (2): Only c is known. Without a and b, we cannot
                evaluate the multinomial. Not sufficient.
              </p>
              <p>Answer: A.</p>
            </>
          }
        />

        <p>
          Big picture: pathway counts are arrangements of a fixed multiset of
          steps. Identify how many steps of each type you must take, then apply
          the appropriate binomial or multinomial formula. If checkpoints are
          involved, compute each leg and multiply.
        </p>
      </article>
    </main>
  );
}