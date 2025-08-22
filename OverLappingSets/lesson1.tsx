import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { InlineMath, BlockMath } from 'react-katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '13.2 The Set‑Matrix Blueprint | Overlapping Sets',
  description:
    'Learn the set‑matrix method for two overlapping sets. See how to label the grid, apply row/column totals, and use inclusion‑exclusion to solve quickly. Includes a worked example and a short multiple‑choice drill.',
};

function HistoryBiologyMatrix() {
  return (
    <figure className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-0 rounded-md text-gray-300">
        <caption className="pb-3 text-left text-sm text-gray-400">
          Figure: A 2×2 set‑matrix with mutually exclusive/complement headings and subtotals
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-40 border-b border-gray-700 px-3 py-2 text-left"></th>
            <th scope="col" className="border border-gray-700 px-3 py-2 text-left">
              Takes AP History
            </th>
            <th scope="col" className="border border-gray-700 px-3 py-2 text-left">
              Not AP History
            </th>
            <th scope="col" className="border border-gray-700 px-3 py-2 text-left">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="border border-gray-700 px-3 py-2 text-left">
              Takes AP Biology
            </th>
            <td className="border border-gray-700 bg-gray-800/40 px-3 py-2">Both</td>
            <td className="border border-gray-700 bg-gray-800/40 px-3 py-2">Biology only</td>
            <td className="border border-gray-700 px-3 py-2">Total Biology</td>
          </tr>
          <tr>
            <th scope="row" className="border border-gray-700 px-3 py-2 text-left">
              Not AP Biology
            </th>
            <td className="border border-gray-700 bg-gray-800/40 px-3 py-2">History only</td>
            <td className="border border-gray-700 bg-gray-800/40 px-3 py-2">Neither</td>
            <td className="border border-gray-700 px-3 py-2">Total Not Biology</td>
          </tr>
          <tr>
            <th scope="row" className="border border-gray-700 px-3 py-2 text-left">
              Total
            </th>
            <td className="border border-gray-700 px-3 py-2">Total History</td>
            <td className="border border-gray-700 px-3 py-2">Total Not History</td>
            <td className="border border-gray-700 bg-gray-800/40 px-3 py-2">Total Students</td>
          </tr>
        </tbody>
      </table>
    </figure>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">13. Overlapping Sets</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2 The Blueprint of the Set‑Matrix
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A set‑matrix is a compact way to organize data for problems involving two overlapping
          groups. When you choose complementary headings for the columns and rows and track row/column
          totals, the key counts fall into place with simple additions and subtractions.
        </p>

        <MustKnow>
          To use a 2×2 set‑matrix, pick column headings that are complements (e.g., History vs. Not
          History) and row headings that are also complements (e.g., Biology vs. Not Biology). The
          four interior cells are mutually exclusive and together cover everyone in the universe of
          the problem.
        </MustKnow>

        <HistoryBiologyMatrix />

        <section aria-labelledby="relationships" className="space-y-3">
          <h3 id="relationships" className="text-xl font-semibold text-white">
            Core relationships
          </h3>
          <p>Let the four interior cells be History∧Biology, History only, Biology only, and Neither. Then:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Row sums and column sums give subtotals. For example, Total History = History∧Biology + History only.
            </li>
            <li>
              The entire population equals the sum of the four disjoint regions:
              <BlockMath math="(\text{History only}) + (\text{Biology only}) + (\text{Both}) + (\text{Neither}) = N" />
            </li>
            <li>
              Inclusion–exclusion with a “neither” term:
              <BlockMath math="\lvert H\rvert + \lvert B\rvert - \lvert H\cap B\rvert + \lvert (H\cup B)^\complement \rvert = N" />
              where <InlineMath math="N" /> is the total number of individuals.
            </li>
          </ul>
        </section>

        <MustKnow>
          The four interior cells are disjoint. That’s why you can add them to get the total. When totals
          for a row or column are known, you can backfill the missing interior values with one subtraction.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Employees, engineers, and marriage status
          </h3>
          <p>
            A company has 50 employees. Exactly 31 are engineers, 27 are married, and 13 are both
            engineers and married. How many employees are neither married nor engineers?
          </p>
          <p>Use inclusion–exclusion with “neither” unknown:</p>
          <BlockMath math="\underbrace{31}_{\lvert E\rvert} + \underbrace{27}_{\lvert M\rvert} - \underbrace{13}_{\lvert E\cap M\rvert} + \underbrace{x}_{\text{neither}} = \underbrace{50}_{N}" />
          <BlockMath math="45 + x = 50 \quad \Rightarrow \quad x = 5" />
          <p>Therefore, 5 employees are in neither group.</p>
        </section>

        <MCQExample
          number={1}
          prompt="In a 10th‑grade class of 50 students, 20 take AP History and 32 take AP Biology. If 12 take neither course, how many take both?"
          options={['6', '12', '14', '18', '20']}
          correct="14"
          solution={
            <>
              <p>
                Apply inclusion–exclusion with “neither” given (12) and total N = 50. Let b = number who take both.
              </p>
              <BlockMath math="20 + 32 - b + 12 = 50" />
              <BlockMath math="64 - b = 50 \quad \Rightarrow \quad b = 14" />
              <p>So, 14 students are enrolled in both classes.</p>
            </>
          }
        />

        <section aria-labelledby="workflow" className="space-y-3">
          <h3 id="workflow" className="text-xl font-semibold text-white">
            A quick workflow for two‑set problems
          </h3>
          <ul className="list-inside list-decimal space-y-1">
            <li>Draft a 2×2 grid with complementary headings for columns and rows.</li>
            <li>Drop given totals into the appropriate row/column “Total” cells.</li>
            <li>Backfill interior cells using one subtraction per row/column as needed.</li>
            <li>
              Use inclusion–exclusion:
              <InlineMath math="\ |A| + |B| - |A\cap B| + \text{Neither} = N" /> or, if “neither” is unknown, solve for it.
            </li>
          </ul>
        </section>

        <p className="pt-2">
          Bottom line: the set‑matrix keeps you honest about complements and totals, while inclusion–exclusion
          ties the whole picture together in one clean equation.
        </p>
      </article>
    </main>
  );
}