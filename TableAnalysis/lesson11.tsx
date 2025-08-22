import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "5.11 Medians in Table Analysis | Data Insights",
  description:
    "How to read medians from tables quickly and accurately. Learn the difference between odd/even counts, avoid common pitfalls (like totals rows), and practice with two worked examples using KaTeX.",
};

type SalesRow = {
  year: number | "Total";
  market: "Up" | "Down" | "—";
  candy: number;
  fruit: number;
};

// Source data used for the examples below
const DATA: SalesRow[] = [
  { year: 2001, market: "Down", candy: 1.1, fruit: 37.5 },
  { year: 2002, market: "Down", candy: 2.3, fruit: 42 },
  { year: 2003, market: "Up", candy: 4.0, fruit: 36 },
  { year: 2004, market: "Up", candy: 3.2, fruit: 28.9 },
  { year: 2005, market: "Down", candy: 1.9, fruit: 30 },
  { year: 2006, market: "Up", candy: 2.2, fruit: 25.6 },
  { year: 2007, market: "Up", candy: 2.8, fruit: 27 },
  { year: 2008, market: "Down", candy: 3.0, fruit: 28 },
  { year: 2009, market: "Up", candy: 2.6, fruit: 37 },
  { year: 2010, market: "Up", candy: 1.9, fruit: 45 },
  { year: 2011, market: "Up", candy: 3.0, fruit: 40 },
  // Totals (not part of medians)
  { year: "Total", market: "—", candy: 28, fruit: 377 },
];

function isDataRow(r: SalesRow) {
  return r.year !== "Total";
}

function median(nums: number[]) {
  if (nums.length === 0) return NaN;
  const arr = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 1 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

function Table({
  rows,
  highlightColumn,
  caption,
}: {
  rows: SalesRow[];
  highlightColumn?: "candy" | "fruit" | "market" | "year";
  caption?: string;
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-800/60">
      <table className="min-w-full border-collapse">
        {caption && (
          <caption className="text-left px-4 pt-3 pb-1 text-sm text-gray-400">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-gray-900/50 text-gray-300">
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Year
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Market
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Candy Sales (B USD)
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Fruit Sales (B USD)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((r, i) => {
            const isTotal = r.year === "Total";
            const rowClass = isTotal ? "bg-gray-900/30" : "";
            const cell = (key: keyof SalesRow, children: React.ReactNode) => {
              const isHighlight = highlightColumn === key;
              return (
                <td
                  className={[
                    "px-4 py-3 align-top",
                    isHighlight ? "bg-gray-800/40" : "",
                  ].join(" ")}
                >
                  {children}
                </td>
              );
            };

            return (
              <tr key={`${r.year}-${i}`} className={rowClass}>
                {cell(
                  "year",
                  <span className={isTotal ? "font-semibold text-gray-200" : ""}>
                    {r.year}
                  </span>
                )}
                {cell("market", r.market)}
                {cell(
                  "candy",
                  <span className={isTotal ? "font-semibold text-gray-200" : ""}>
                    {r.candy}
                  </span>
                )}
                {cell(
                  "fruit",
                  <span className={isTotal ? "font-semibold text-gray-200" : ""}>
                    {r.fruit}
                  </span>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  // Base rows without the Total line for all median work
  const rows = DATA.filter(isDataRow);

  // Example 1: median of Fruit column across all years
  const fruits = rows.map((r) => r.fruit);
  const fruitMedian = median(fruits); // 36
  const fruitTotal = DATA.find((r) => r.year === "Total")!.fruit; // 377
  const tenPercentOfTotal = 0.1 * fruitTotal;
  const fruitClaimIsTrue = fruitMedian > tenPercentOfTotal;

  // Example 2: median of Candy when Market is Down
  const candyDown = rows.filter((r) => r.market === "Down").map((r) => r.candy);
  const candyDownMedian = median(candyDown); // (1.9 + 2.3)/2 = 2.1

  const sortedByFruitAsc = [...rows].sort((a, b) => a.fruit - b.fruit);
  const sortedByMarketThenCandy = [...rows]
    .sort((a, b) => a.candy - b.candy)
    .sort((a, b) => (a.market > b.market ? -1 : a.market < b.market ? 1 : 0));

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.11 Medians in Table Analysis
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          In table-driven questions, you’ll often need a median. The steps are
          straightforward: sort the relevant values, count how many there are,
          and grab the middle item (or average the two middle items if the count
          is even).
        </p>

        <MustKnow>
          • For an ordered list with an odd number of items, the median is the
          unique middle value. For an even number of items, the median equals
          the mean of the two central values.
        </MustKnow>

        <p>
          Sometimes the task is “What’s the median of all entries in this
          column?” In that case:
        </p>
        <ul className="list-inside list-disc space-y-1 text-gray-300">
          <li>Sort just that column’s numbers from least to greatest.</li>
          <li>
            Count to the middle. If the count is even, average the pair in the
            middle.
          </li>
        </ul>

        <MustKnow>
          If a column shows a total or an average on a “Total” row, do not treat
          that row as one of the data points when you compute the median.
        </MustKnow>

        <section aria-labelledby="dataset-heading" className="space-y-4">
          <h3 id="dataset-heading" className="text-xl font-semibold text-white">
            Example dataset (years, market direction, and sales)
          </h3>
          <p className="text-gray-300">
            We’ll use this table for the examples below.
          </p>
          <Table rows={DATA} caption="Raw data (the Total row is not included when computing medians)" />
        </section>

        <ExampleCard
          number={1}
          title="Is the median yearly fruit sales more than 10% of the total fruit sales?"
          statements={[
            "Claim: The median yearly fruit sales is greater than 10% of the total fruit sales across the listed years.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p className="mb-2">
                First, find the median of the Fruit Sales column. Sort the
                values and pick the middle because there are 11 yearly entries.
              </p>

              <Table
                rows={sortedByFruitAsc}
                highlightColumn="fruit"
                caption="Fruit Sales sorted in ascending order (highlighted column)"
              />

              <p className="mt-3">
                Counting down to the 6th value (the middle of 11) gives a median
                of 36 billion USD.
              </p>

              <p className="mt-4">
                Next, compare that to 10% of the total fruit sales. Using KaTeX:
              </p>
              <div className="mt-2">
                <InlineMath math={"0.1 \\times 377 = 37.7"} />
                <span className="ml-2">billion USD.</span>
              </div>

              <p className="mt-3">
                Since 36 is not greater than 37.7, the claim is false.
              </p>

              <MustKnow>
                When comparing a median to a percentage of the column total,
                compute the median from the yearly entries only. Do not include
                the “Total” row as a datapoint.
              </MustKnow>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Median candy sales when the market is Down"
          statements={[
            "Find the median of the Candy Sales for the subset of years when the stock market was down.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p className="mb-2">
                Filter the table to years with Market = Down, then take the
                median of those candy values.
              </p>

              <Table
                rows={sortedByMarketThenCandy}
                highlightColumn="market"
                caption="Grouped by Market, then sorted by Candy Sales"
              />

              <p className="mt-3">
                The four candy values for “Down” years are 1.1, 1.9, 2.3, and
                3.0 (in ascending order). With four values, take the average of
                the two middle numbers:
              </p>

              <div className="mt-2">
                <BlockMath math={"\\text{median} = \\dfrac{1.9 + 2.3}{2} = 2.1"} />
                <p className="mt-2">So the median candy sales is 2.1 billion USD.</p>
              </div>

              <MustKnow>
                For medians restricted by a condition in another column:
                1) group the relevant rows,
                2) count how many values fit the condition, and
                3) take the middle (or the average of the two middle values).
              </MustKnow>
            </>
          }
        />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Key takeaways</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Medians depend on position after sorting, not on arithmetic with
              all values.
            </li>
            <li>
              Always exclude totals/summary rows when identifying the median.
            </li>
            <li>
              When a condition filters the data, apply the condition first, then
              re-evaluate the median on the reduced set.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}