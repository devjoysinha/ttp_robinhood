```tsx
// app/(quant)/combinatorics/16-3-7/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "16.3.7 Counting 2‑D Paths Without Checkpoints | Combinatorics",
  description:
    "Learn to count shortest paths on a rectangular grid when you can only move in two directions. Includes the indistinguishable permutations formula, one quick MCQ, and one checkpoint example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.7 Counting 2‑Dimensional Paths When There Are No Checkpoints
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a path question has no mandatory stops between the start and end,
          the map is effectively a rectangular grid. If you can only move in two
          fixed directions (for example, only east and south), every shortest
          route from the start to the finish consists of the same multiset of
          moves—just in different orders. That turns the problem into counting
          arrangements of indistinguishable items.
        </p>

        <div className="flex justify-center">
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1877/content_14.png"
            alt="Rectangular street grid showing points A and B"
            width={900}
            height={600}
            className="h-auto w-full max-w-2xl rounded-md ring-1 ring-white/10"
            priority={false}
          />
        </div>

        <p>
          Suppose point B lies <strong>j</strong> blocks in one direction and{" "}
          <strong>k</strong> blocks in the other direction from point A. Any
          shortest route uses exactly j moves of one type and k moves of the
          other. So the number of shortest routes equals the number of distinct
          permutations of those moves:
        </p>

        <div className="rounded-md bg-slate-900/40 p-4 ring-1 ring-white/10">
          <BlockMath math="P = \frac{(j+k)!}{j!\,k!} = \binom{j+k}{j}" />
          <p className="mt-2 text-sm text-slate-300">
            Think of “choose where the E moves go” or “choose where the S moves
            go”—both viewpoints produce the same binomial coefficient.
          </p>
        </div>

        <MustKnow>
          The count of shortest paths on a rectangular grid (moving only in two
          allowed directions) depends only on how far you must travel along each
          axis. If the displacement is j blocks one way and k blocks the other,
          the number of shortest routes is{" "}
          <InlineMath math="\binom{j+k}{j}=\frac{(j+k)!}{j!\,k!}" />.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example
          </h3>

          <div className="flex justify-center">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1878/content_15.png"
              alt="Two different shortest routes from A to B: one takes ESSESES and the other SSSEEES"
              width={1020}
              height={500}
              className="h-auto w-full max-w-3xl rounded-md ring-1 ring-white/10"
            />
          </div>

          <p>
            In the diagram, B is 4 blocks south and 3 blocks east of A, so every
            shortest path is an ordering of four S’s and three E’s. Thus:
          </p>

          <BlockMath math="\text{# paths}=\frac{7!}{4!\,3!}=\binom{7}{4}=35" />
        </section>

        <MCQExample
          number={36}
          image={{
            src: "https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1879/content_16.png",
            alt: "Grid with start A and end B for the shortest-route question",
          }}
          prompt="On the grid, how many routes from A to B have the minimum possible length? Assume movement is only north and east."
          options={["20", "72", "108", "126", "144"]}
          correct="126"
          solution={
            <>
              <p>
                “Minimum possible length” means you never backtrack—so you only
                move north or east. From A to B, the displacement is 4 blocks
                north and 5 blocks east. Using the indistinguishable permutations
                (or combinations) formula:
              </p>
              <BlockMath math="\text{# paths}=\frac{(4+5)!}{4!\,5!}=\binom{9}{4}=126" />
            </>
          }
        />

        <section aria-labelledby="checkpoint-note" className="space-y-3">
          <h3 id="checkpoint-note" className="text-xl font-semibold text-white">
            A quick note on checkpoints
          </h3>
          <p>
            If every shortest path must pass through a specific intermediate
            point (a checkpoint), count the paths into that checkpoint and the
            paths out of it, then multiply the two counts.
          </p>
        </section>

        <MCQExample
          number={37}
          image={{
            src: "https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1881/content_18.png",
            alt: "Grid with points X, C (checkpoint), and Y",
          }}
          prompt="Gail drives from X to Y moving only east and south. All shortest routes pass through point C. How many different shortest paths are possible?"
          options={["41", "75", "105", "210", "420"]}
          correct="420"
          solution={
            <>
              <p>
                Split the trip: X → C, then C → Y. Multiply the counts.
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  X → C: 2 south and 5 east →
                  <InlineMath math="\ \binom{7}{2}=21" />
                </li>
                <li>
                  C → Y: 3 south and 3 east →
                  <InlineMath math="\ \binom{6}{3}=20" />
                </li>
              </ul>
              <BlockMath math="\text{Total} = 21 \times 20 = 420" />
            </>
          }
        />

        <p>
          Big picture: when you can only move along two axes, shortest‑path
          counting is a combinations problem. If no checkpoints are imposed, use{" "}
          <InlineMath math="\binom{j+k}{j}" />. If checkpoints do exist, split
          the journey at each checkpoint and multiply the segment counts.
        </p>
      </article>
    </main>
  );
}
```