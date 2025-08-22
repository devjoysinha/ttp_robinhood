import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.12.2 The Wet Mixture | General Word Problems",
  description:
    "How to solve liquid mixture problems by tracking components, concentrations, and amounts. Includes a worked matrix example and two multiple‑choice drills with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.12.2 The Wet Mixture
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Wet” mixture problems blend two or more liquid solutions, each with a
          stated concentration of some ingredient, to form a new solution with
          its own concentration. You solve these by tracking what goes in and
          ensuring the amount of the ingredient balances in the final mix.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Always identify three attributes:</p>
            <ul className="list-disc pl-6">
              <li>Components being mixed (e.g., Solution 1, Solution 2)</li>
              <li>Concentration of the ingredient in each component</li>
              <li>Quantity of each component (liters, ounces, etc.)</li>
            </ul>
            <p className="mt-3">
              Core balance equation for two components:
            </p>
            <BlockMath math={"c_1 q_1 + c_2 q_2 = c_{mix}\\,(q_1 + q_2)"} />
            <p className="text-sm text-gray-400">
              Here <InlineMath math={"c_i"} /> is the decimal concentration and{" "}
              <InlineMath math={"q_i"} /> is the amount of component i.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="worked-example">
          <h3
            id="worked-example"
            className="text-xl font-semibold text-white mt-8"
          >
            Worked example (step by step)
          </h3>
          <p>
            Solution 1 is 60% alcohol, and Solution 2 is 20% alcohol. We mix
            them to make 80 liters at 50% alcohol. How many liters of Solution 2
            were used?
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="min-w-full text-left">
              <caption className="sr-only">
                Mixture matrix for alcohol solutions
              </caption>
              <thead className="bg-gray-900/40 text-gray-300">
                <tr>
                  <th className="px-4 py-3 font-medium">Component</th>
                  <th className="px-4 py-3 font-medium">Percent Alcohol</th>
                  <th className="px-4 py-3 font-medium">Liters</th>
                  <th className="px-4 py-3 font-medium">Alcohol Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3">Solution 1</td>
                  <td className="px-4 py-3">0.60</td>
                  <td className="px-4 py-3">80 − x</td>
                  <td className="px-4 py-3">0.60(80 − x)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Solution 2</td>
                  <td className="px-4 py-3">0.20</td>
                  <td className="px-4 py-3">x</td>
                  <td className="px-4 py-3">0.20x</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Final Mixture</td>
                  <td className="px-4 py-3">0.50</td>
                  <td className="px-4 py-3">80</td>
                  <td className="px-4 py-3">0.50 × 80</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">Set up and solve the balance equation:</p>
          <BlockMath math={"0.60(80 - x) + 0.20x = 0.50\\times 80"} />
          <BlockMath math={"48 - 0.60x + 0.20x = 40"} />
          <BlockMath math={"48 - 0.40x = 40 \\quad\\Rightarrow\\quad 0.40x = 8 \\quad\\Rightarrow\\quad x = 20"} />
          <p>Therefore, 20 liters of the 20% solution were used.</p>
        </section>

        <section aria-labelledby="quick-checks">
          <h3
            id="quick-checks"
            className="text-xl font-semibold text-white mt-8"
          >
            Two quick checks
          </h3>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-800 p-4">
              <p className="font-semibold text-gray-200">
                Check A (salt solutions)
              </p>
              <p>
                A 200‑liter mixture is 38% salt. It was formed by combining a
                40% salt solution with a 30% salt solution. How many liters of
                the 40% solution were used?
              </p>
              <BlockMath math={"0.40x + 0.30(200 - x) = 0.38\\times 200"} />
              <BlockMath math={"0.40x + 60 - 0.30x = 76 \\Rightarrow 0.10x = 16 \\Rightarrow x = 160"} />
              <p className="mt-2">Answer: 160 liters.</p>
            </div>

            <div className="rounded-lg border border-gray-800 p-4">
              <p className="font-semibold text-gray-200">
                Check B (oil in salad dressing)
              </p>
              <p>
                Dressing A is 20% oil, dressing B is 50% oil. Mixing 20 ounces
                of A with y ounces of B yields a blend that is 30% oil. Find y.
              </p>
              <BlockMath math={"\\dfrac{0.20\\cdot 20 + 0.50y}{20 + y} = 0.30"} />
              <BlockMath math={"4 + 0.50y = 0.30(20 + y) = 6 + 0.30y"} />
              <BlockMath math={"0.20y = 2 \\Rightarrow y = 10"} />
              <p className="mt-2">Answer: 10 ounces.</p>
            </div>
          </div>
        </section>

        <MCQExample
          number={57}
          prompt="An acid–water solution with 30% acid is mixed with another solution that has 80% acid. If the final mixture must be 20 liters at 45% acid, how many liters of the 30% solution are needed?"
          options={["10", "11", "12", "13", "14"]}
          correct="14"
          solution={
            <>
              <p>
                Let x be the liters of the 30% solution; then the other part is
                20 − x liters at 80%. Balance the acid:
              </p>
              <BlockMath math={"0.30x + 0.80(20 - x) = 0.45\\times 20"} />
              <BlockMath math={"0.30x + 16 - 0.80x = 9"} />
              <BlockMath math={"-0.50x = -7 \\Rightarrow x = 14"} />
              <p>So, 14 liters of the 30% solution are required.</p>
            </>
          }
        />

        <MCQExample
          number={58}
          prompt="Solution A contains 30% iodine and is mixed with 30 liters of Solution B that contains 10% iodine. If the resulting mixture is 18% iodine, how many liters of Solution A were used?"
          options={["18", "20", "24", "28", "32"]}
          correct="20"
          solution={
            <>
              <p>
                Let x be the liters of Solution A. Total volume is x + 30, and
                final iodine concentration is 18%.
              </p>
              <BlockMath math={"0.30x + 0.10\\cdot 30 = 0.18(x + 30)"} />
              <BlockMath math={"0.30x + 3 = 0.18x + 5.4"} />
              <BlockMath math={"0.12x = 2.4 \\Rightarrow x = 20"} />
              <p>Therefore, 20 liters of Solution A were used.</p>
            </>
          }
        />

        <section aria-labelledby="takeaways">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Track components, concentrations (as decimals), and quantities.
            </li>
            <li>
              Use the ingredient balance equation:{" "}
              <InlineMath math={"\\sum c_i q_i = c_{mix}\\sum q_i"} />.
            </li>
            <li>
              A simple two‑variable linear equation usually unlocks the answer.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}