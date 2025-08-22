import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "13.2.7 Max/Min in Overlapping Sets | GMAT Quant",
  description:
    "Learn a fast, reliable way to maximize or minimize a cell in a 2×2 set matrix. Includes a worked example and two multiple‑choice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.7 Maximization/Minimization Questions Within Sets
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many overlapping‑set problems ask for an extreme value: the largest or
          smallest a particular cell can be. The quickest way to reason about
          these is the 2×2 set matrix. Each row and column adds up to its
          margin, so nudging one cell up forces its partner down by the same
          amount.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Sums in a 2×2 set matrix
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                In every row and every column, the two inner cells sum to the
                corresponding total.
              </li>
              <li>
                Pushing one cell to its maximum automatically pulls its adjacent
                cell (in the same row/column) to its minimum, and vice versa.
              </li>
            </ul>
            <div className="mt-3 space-y-2">
              <p className="font-semibold">Notation:</p>
              <BlockMath math={`\\text{row cell}_1 + \\text{row cell}_2 = \\text{row total}`} />
              <BlockMath math={`\\text{col cell}_1 + \\text{col cell}_2 = \\text{col total}`} />
            </div>
          </div>
        </MustKnow>

        <section
          aria-labelledby="worked-example"
          className="rounded-lg border border-gray-800 bg-gray-900/60 p-4 md:p-5"
        >
          <h3 id="worked-example" className="text-lg font-semibold text-white">
            Worked example: maximize a target cell
          </h3>
          <p className="mt-2">
            A shipment contains 200 widgets. Of these, 125 are large and the
            rest are small. Exactly 100 widgets are defective. If at least 80
            large widgets are not defective, what is the maximum number of
            small defective widgets?
          </p>
          <div className="mt-3 space-y-2">
            <p>Let the matrix be Size × Defect status.</p>
            <ul className="list-inside list-disc space-y-1">
              <li>We want to maximize Small ∩ Defective.</li>
              <li>
                Since row/column sums are fixed, we minimize the competing cells
                in the same row/column.
              </li>
            </ul>
            <p className="mt-2">
              We’re told at least 80 large widgets are not defective, so the
              Large ∩ Not‑defective cell can be as high as the total
              not‑defective widgets:
            </p>
            <BlockMath math={`\\text{Not-defective total} = 200 - 100 = 100`} />
            <p className="mt-2">
              Make Large ∩ Not‑defective = 100 (its maximum). Then within the
              large row:
            </p>
            <BlockMath math={`\\text{Large total} = 125\\;\\Rightarrow\\; \\text{Large ∩ Defective} = 125 - 100 = 25`} />
            <p className="mt-2">Finally, defective total is 100, so:</p>
            <BlockMath math={`\\text{Small ∩ Defective} = 100 - 25 = 75`} />
            <p className="mt-2 font-semibold text-white">
              Therefore, the maximum number of small defective widgets is 75.
            </p>
          </div>
        </section>

        <MustKnow>
          To drive a cell to an extreme:
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              Identify which row and column contain the target cell.
            </li>
            <li>
              Push as much “mass” as possible into the other cells of that row
              and column that compete with the target (subject to the
              constraints).
            </li>
            <li>
              Use the fixed row/column totals to compute the resulting target
              value.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={15}
          prompt="At a dealership with 3,000 cars, 1,200 are red and 1,400 have a sunroof. If at least 500 cars are neither red nor have a sunroof, what is the greatest possible number of cars that could be both red and have a sunroof?"
          options={["100", "200", "700", "1,200", "1,600"]}
          correct="1,200"
          solution={
            <>
              <p>
                Let columns be Red vs. Not Red and rows be Sunroof vs. No
                Sunroof. Compute the margins:
              </p>
              <BlockMath math={`\\text{Not Red total} = 3000 - 1200 = 1800`} />
              <BlockMath math={`\\text{No Sunroof total} = 3000 - 1400 = 1600`} />
              <p className="mt-2">
                To maximize Red ∩ Sunroof, minimize NotRed ∩ Sunroof by pushing
                as many not‑red cars as possible into the No Sunroof row. Since
                at least 500 cars are NotRed ∩ NoSunroof, we can set:
              </p>
              <BlockMath math={`\\text{NotRed ∩ NoSunroof} = \\min(\\text{Not Red total}, \\text{No Sunroof total}) = \\min(1800,1600) = 1600`} />
              <p className="mt-2">
                Then the remaining NotRed cars in the Sunroof row are:
              </p>
              <BlockMath math={`\\text{NotRed ∩ Sunroof} = 1800 - 1600 = 200`} />
              <p className="mt-2">So the red with sunroof cell is:</p>
              <BlockMath math={`\\text{Red ∩ Sunroof} = 1400 - 200 = 1200`} />
              <p className="mt-2 font-semibold text-white">Answer: 1,200.</p>
            </>
          }
        />

        <section aria-labelledby="inclusion-exclusion" className="space-y-2">
          <h3 id="inclusion-exclusion" className="text-lg font-semibold text-white">
            Inclusion–Exclusion quick check
          </h3>
          <p>
            When you only need “neither” or the overlap count, inclusion–exclusion is
            often the fastest:
          </p>
          <BlockMath math={`|A \\cup B| = |A| + |B| - |A \\cap B|`} />
          <BlockMath math={`|\\text{Neither}| = N - |A \\cup B|`} />
        </section>

        <MCQExample
          number={16}
          prompt="A school has 80 students. 35 are on the honor roll and 19 play a varsity sport. If at most 14 students are both on the honor roll and play a varsity sport, what is the minimum possible number of students who are in neither group?"
          options={["14", "19", "26", "34", "40"]}
          correct="26"
          solution={
            <>
              <p>
                We want to minimize “neither,” so we maximize the union. With
                at most 14 in the overlap, the union is largest when the
                overlap is as small as possible, i.e., 0 (which respects “at
                most 14”).
              </p>
              <BlockMath math={`|A \\cup B|_{\\max} = 35 + 19 - 0 = 54`} />
              <BlockMath math={`|\\text{Neither}|_{\\min} = 80 - 54 = 26`} />
              <p className="mt-2">
                A matrix approach reaches the same result by pushing as many
                students as possible into “at least one” of the two sets while
                keeping the overlap within its cap.
              </p>
              <p className="mt-2 font-semibold text-white">Answer: 26.</p>
            </>
          }
        />

        <p className="mt-6">
          Bottom line: in a 2×2 set matrix, totals lock the row and column
          sums. To drive a cell to an extreme, push mass into the competing
          cells in its row and column, always honoring the constraints. The
          totals then force the target cell to the desired max or min.
        </p>
      </article>
    </main>
  );
}