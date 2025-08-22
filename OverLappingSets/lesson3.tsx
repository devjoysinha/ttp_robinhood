import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "13.2.2 Fractions in Overlapping Set Problems | Overlapping Sets",
  description:
    "How to handle overlapping‑set questions stated with fractions. Learn the LCM ‘assume a total’ trick, build a 2×2 matrix, and verify with a variable approach. Includes a quick multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.2 Fractions in Overlapping Set Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Overlapping‑set questions often give membership information as
          fractions. You can tackle these the same way you handle percent
          problems: either assume a convenient total and convert the fractions
          to counts, or keep the total as a variable and work symbolically.
        </p>

        <MustKnow>
          When the overall total isn’t specified, you have two reliable options:
          (1) assume a total equal to the least common multiple of all
          denominators and turn every fraction into a whole‑number count; or (2)
          let the total be a variable, say <InlineMath math="N" />, and write
          each cell of the set matrix in terms of <InlineMath math="N" />. Both
          methods lead to the same answer—choose the one that is faster for the
          numbers you see.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example (two sets, fractions)
          </h3>
          <p>
            In a certain group, <InlineMath math="\tfrac{5}{8}" /> have a job,
            <InlineMath math="\tfrac{2}{3}" /> do not own a car, and{" "}
            <InlineMath math="\tfrac{1}{4}" /> have neither a job nor a car.
            What fraction of the group own a car but do not have a job?
          </p>

          <h4 className="font-semibold text-white">Method 1: Assume a total</h4>
          <p>
            The least common multiple of 8, 3, and 4 is 24. Assume there are{" "}
            <InlineMath math="24" /> people.
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Jobs: <InlineMath math="\tfrac{5}{8}\cdot 24 = 15" />
            </li>
            <li>
              No car: <InlineMath math="\tfrac{2}{3}\cdot 24 = 16" />
            </li>
            <li>
              Neither: <InlineMath math="\tfrac{1}{4}\cdot 24 = 6" />
            </li>
          </ul>

          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                2×2 matrix of Job vs Car with totals
              </caption>
              <thead>
                <tr>
                  <th className="w-28"></th>
                  <th className="border-b border-gray-700 px-3 py-2 text-gray-200">
                    Car
                  </th>
                  <th className="border-b border-gray-700 px-3 py-2 text-gray-200">
                    No car
                  </th>
                  <th className="border-b border-gray-700 px-3 py-2 text-gray-200">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-b border-gray-800 px-3 py-2">
                    Job
                  </th>
                  <td className="border-b border-gray-800 px-3 py-2">5</td>
                  <td className="border-b border-gray-800 px-3 py-2">10</td>
                  <td className="border-b border-gray-800 px-3 py-2">15</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-gray-800 px-3 py-2">
                    No job
                  </th>
                  <td className="border-b border-gray-800 px-3 py-2">3</td>
                  <td className="border-b border-gray-800 px-3 py-2">6</td>
                  <td className="border-b border-gray-800 px-3 py-2">9</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2">
                    Total
                  </th>
                  <td className="px-3 py-2">8</td>
                  <td className="px-3 py-2">16</td>
                  <td className="px-3 py-2">24</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-2">
            The required cell is “car and no job,” which is{" "}
            <InlineMath math="3" /> people. As a fraction of the total,{" "}
            <InlineMath math="\tfrac{3}{24}=\tfrac{1}{8}" />.
          </p>

          <h4 className="font-semibold text-white">
            Method 2: Keep the total as a variable
          </h4>
          <p>
            Let the total be <InlineMath math="N" />.
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Jobs: <InlineMath math="\tfrac{5}{8}N" />
            </li>
            <li>
              No car: <InlineMath math="\tfrac{2}{3}N" />
            </li>
            <li>
              Neither (no job and no car): <InlineMath math="\tfrac{1}{4}N" />
            </li>
          </ul>
          <p>
            Then “job and no car” is{" "}
            <InlineMath math="\tfrac{2}{3}N-\tfrac{1}{4}N=\tfrac{5}{12}N" />.
            “Job and car” is{" "}
            <InlineMath math="\tfrac{5}{8}N-\tfrac{5}{12}N=\tfrac{5}{24}N" />.
            So “car and no job” is the rest of the “car” column:
          </p>
          <BlockMath math={String.raw`\text{car total} = N-\tfrac{2}{3}N=\tfrac{1}{3}N`} />
          <BlockMath
            math={String.raw`\text{no job and car} = \tfrac{1}{3}N-\tfrac{5}{24}N=\tfrac{3}{24}N=\tfrac{1}{8}N`}
          />
          <p>Again, the answer is 1/8 of the group.</p>
        </section>

        <MCQExample
          number={4}
          prompt={
            <>
              On a flight, <InlineMath math="\tfrac{2}{5}" /> of the passengers
              are female, <InlineMath math="\tfrac{1}{8}" /> of the passengers
              like peanuts, and <InlineMath math="\tfrac{1}{2}" /> of the
              passengers are males who do not like peanuts. The number of male
              passengers who like peanuts is what fraction of all male
              passengers?
            </>
          }
          options={["1/2", "1/4", "1/6", "1/8", "1/10"]}
          correct="1/6"
          solution={
            <>
              <p className="mb-2 font-semibold text-white">Fast ratio method</p>
              <p>
                Let the total be <InlineMath math="T" />. Then males make up{" "}
                <InlineMath math="1-\tfrac{2}{5}=\tfrac{3}{5}" /> of the
                passengers, so the male total is{" "}
                <InlineMath math="\tfrac{3}{5}T" />. We’re told{" "}
                <InlineMath math="\tfrac{1}{2}T" /> are males who{" "}
                <em>do not</em> like peanuts. Thus male peanut‑likers count is
                <InlineMath math="\tfrac{3}{5}T-\tfrac{1}{2}T=\tfrac{1}{10}T" />.
              </p>
              <p className="mt-2">
                As a fraction of all males:
              </p>
              <BlockMath
                math={String.raw`\frac{\text{male like}}{\text{male total}}=\frac{\tfrac{1}{10}T}{\tfrac{3}{5}T}=\frac{1}{10}\cdot\frac{5}{3}=\frac{1}{6}`}
              />
              <p className="mt-4 mb-2 font-semibold text-white">
                Check with an assumed total
              </p>
              <p>
                Take <InlineMath math="T=40" /> (LCM of 5, 8, 2):
                females <InlineMath math="=16" />, so males{" "}
                <InlineMath math="=24" />. Peanut‑likers total{" "}
                <InlineMath math="=5" />. Male non‑likers{" "}
                <InlineMath math="=20" />. Therefore male likers{" "}
                <InlineMath math="=24-20=4" />, and{" "}
                <InlineMath math="\tfrac{4}{24}=\tfrac{1}{6}" />.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Fractions in overlapping sets are easiest when you pick a total
              that clears denominators.
            </li>
            <li>
              A tidy 2×2 matrix makes “difference” relationships (e.g., “no car”
              minus “neither”) immediately visible.
            </li>
            <li>
              Keeping the total as <InlineMath math="N" /> is just as valid and
              is sometimes quicker when the arithmetic is friendly.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}