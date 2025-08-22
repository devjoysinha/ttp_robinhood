import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "5.9 Filter by Criterion in a Table | Table Analysis",
  description:
    "Learn how to quickly isolate rows that satisfy a condition by sorting the right column. See a median example and two multi‑statement Table Analysis drills with full reasoning.",
};

type CityRow = { city: string; country: string; population: number };
type ClientRow = {
  code: string;
  freeWeights: "Yes" | "No";
  cables: "Yes" | "No";
  cardio: "Yes" | "No";
  strength: "High" | "Medium" | "Low" | "None";
  cardioImp: "High" | "Medium" | "Low" | "None";
};
type PitchRow = {
  city: string;
  infra: 0 | 1 | 2 | 3;
  subsidies: 0 | 1 | 2 | 3;
  stadium: 0 | 1 | 2 | 3;
};

const cities: CityRow[] = [
  { city: "Buenos Aires", country: "Argentina", population: 2_936_877 },
  { city: "Córdoba", country: "Argentina", population: 1_317_298 },
  { city: "Rio de Janeiro", country: "Brazil", population: 6_023_699 },
  { city: "Rosario", country: "Argentina", population: 1_193_605 },
  { city: "Salvador", country: "Brazil", population: 2_711_840 },
  { city: "Santiago", country: "Chile", population: 6_310_000 },
  { city: "Sao Paulo", country: "Brazil", population: 10_021_295 },
  { city: "Valparaíso", country: "Chile", population: 979_000 },
];

const clients: ClientRow[] = [
  { code: "AA", freeWeights: "Yes", cables: "Yes", cardio: "No", strength: "High", cardioImp: "Low" },
  { code: "BB", freeWeights: "No", cables: "Yes", cardio: "No", strength: "Low", cardioImp: "None" },
  { code: "CC", freeWeights: "No", cables: "No", cardio: "Yes", strength: "None", cardioImp: "Medium" },
  { code: "DD", freeWeights: "Yes", cables: "No", cardio: "No", strength: "Medium", cardioImp: "Low" },
  { code: "EE", freeWeights: "No", cables: "Yes", cardio: "Yes", strength: "Low", cardioImp: "Medium" },
  { code: "FF", freeWeights: "No", cables: "No", cardio: "No", strength: "None", cardioImp: "None" },
  { code: "GG", freeWeights: "Yes", cables: "Yes", cardio: "Yes", strength: "High", cardioImp: "High" },
  { code: "HH", freeWeights: "Yes", cables: "No", cardio: "Yes", strength: "Medium", cardioImp: "High" },
];

const pitches: PitchRow[] = [
  { city: "Albuquerque", infra: 1, subsidies: 2, stadium: 0 },
  { city: "Boise", infra: 2, subsidies: 2, stadium: 1 },
  { city: "Charlotte", infra: 3, subsidies: 3, stadium: 2 },
  { city: "Helena", infra: 2, subsidies: 2, stadium: 2 },
  { city: "Juneau", infra: 1, subsidies: 0, stadium: 2 },
  { city: "Nashville", infra: 3, subsidies: 2, stadium: 2 },
  { city: "Portland", infra: 2, subsidies: 1, stadium: 1 },
  { city: "Reno", infra: 2, subsidies: 3, stadium: 2 },
  { city: "Salt Lake City", infra: 3, subsidies: 3, stadium: 3 },
  { city: "Wichita", infra: 1, subsidies: 1, stadium: 1 },
].map((r) => ({ ...r }));

function formatNum(n: number) {
  return n.toLocaleString("en-US");
}

function CityTable({ rows, caption }: { rows: CityRow[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-800/60">
      <table className="min-w-full border-separate border-spacing-0 text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-gray-900/60">
          <tr>
            <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-200">
              City
            </th>
            <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-200">
              Country
            </th>
            <th scope="col" className="px-4 py-2 text-right font-semibold text-gray-200">
              Population
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={`${r.city}-${r.country}`} className="odd:bg-gray-900/30">
              <th scope="row" className="px-4 py-2 text-gray-100">
                {r.city}
              </th>
              <td className="px-4 py-2 text-gray-300">{r.country}</td>
              <td className="px-4 py-2 text-right tabular-nums text-gray-300">{formatNum(r.population)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ClientTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-800/60">
      <table className="min-w-full border-separate border-spacing-0 text-sm">
        <caption className="sr-only">Training types and improvements by client</caption>
        <thead className="bg-gray-900/60">
          <tr>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Client
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Free Weights
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Cable Machines
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Cardio Training
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Strength Improvement
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Cardio Improvement
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((r) => (
            <tr key={r.code} className="odd:bg-gray-900/30">
              <th scope="row" className="px-3 py-2 text-gray-100">
                {r.code}
              </th>
              <td className="px-3 py-2 text-gray-300">{r.freeWeights}</td>
              <td className="px-3 py-2 text-gray-300">{r.cables}</td>
              <td className="px-3 py-2 text-gray-300">{r.cardio}</td>
              <td className="px-3 py-2 text-gray-300">{r.strength}</td>
              <td className="px-3 py-2 text-gray-300">{r.cardioImp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PitchTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-800/60">
      <table className="min-w-full border-separate border-spacing-0 text-sm">
        <caption className="sr-only">City offers scored by category</caption>
        <thead className="bg-gray-900/60">
          <tr>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              City
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Infrastructure Improvements
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              City Subsidies
            </th>
            <th scope="col" className="px-3 py-2 text-left font-semibold text-gray-200">
              Stadium Funding
            </th>
            <th scope="col" className="px-3 py-2 text-right font-semibold text-gray-200">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {pitches.map((r) => {
            const total = r.infra + r.subsidies + r.stadium;
            return (
              <tr key={r.city} className="odd:bg-gray-900/30">
                <th scope="row" className="px-3 py-2 text-gray-100">
                  {r.city}
                </th>
                <td className="px-3 py-2 text-gray-300">{r.infra}</td>
                <td className="px-3 py-2 text-gray-300">{r.subsidies}</td>
                <td className="px-3 py-2 text-gray-300">{r.stadium}</td>
                <td className="px-3 py-2 text-right tabular-nums text-gray-300">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const byCountry = [...cities].sort((a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
  const brazilOnly = cities.filter((r) => r.country === "Brazil").sort((a, b) => a.population - b.population);
  const n = brazilOnly.length;
  const medianBrazil = brazilOnly[Math.floor((n - 1) / 2)]?.population;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Table Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">5.9 Working with Rows That Match a Given Criterion</h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          Many table questions ask about a portion of the data that satisfies a specific condition (for example, “cities in
          Brazil” or “clients who used free weights”). The fastest way to isolate those rows is to sort the column that
          carries the condition so the relevant entries appear together.
        </p>

        <MustKnow>
          Sort the column that contains the filter you care about. Grouping relevant rows lets you read off statistics
          (median, range, counts, etc.) without scanning the entire table.
        </MustKnow>

        <section aria-labelledby="cities-section">
          <h3 id="cities-section" className="text-xl font-semibold text-white">
            Example table: Cities, countries, and populations
          </h3>
          <p className="mt-2">
            Suppose we need the median population of the listed cities that are located in Brazil. First view the table as
            is, then view it sorted by Country to cluster the Brazilian cities.
          </p>

          <div className="mt-4 space-y-4">
            <CityTable rows={cities} caption="Unsorted city list" />
            <CityTable rows={byCountry} caption="City list sorted by country" />
          </div>

          <div className="mt-4">
            <p>
              After sorting, the Brazilian cities are grouped: Salvador, Rio de Janeiro, and Sao Paulo. Because there are{" "}
              <InlineMath math="n=3" /> values (an odd count), the median is the middle one.
            </p>
            <BlockMath math={"\\text{median position} = \\frac{n+1}{2} = \\frac{3+1}{2} = 2"} />
            <p>
              The 2nd value (in population order) is {formatNum(medianBrazil)}. So, the median population among the
              Brazilian cities in this table is {formatNum(medianBrazil)}.
            </p>
          </div>

          <MustKnow>
            When the number of selected rows is odd, the median is the single middle value after ordering by the numeric
            column of interest. For an even count, it’s the average of the two central values.
          </MustKnow>
        </section>

        <section aria-labelledby="ta-ex5">
          <h3 id="ta-ex5" className="text-xl font-semibold text-white">
            Example 5: Training log (Yes/No statements)
          </h3>
          <p className="mt-2">
            A trainer recorded which equipment each client used and the improvements each client achieved.
          </p>
          <div className="mt-4">
            <ClientTable />
          </div>

          <ExampleCard
            number={5}
            title="Decide whether each statement is supported"
            statements={[
              "A. Anyone who improved strength used free weights, cable machines, or both.",
              "B. Clients who skipped cardio training showed no cardio improvement.",
              "C. Every client who used free weights improved in both strength and cardio.",
            ]}
            correctLetter="—"
            solution={
              <>
                <p>
                  A: Yes. Sorting by Strength Improvement and checking the Free Weights/Cable Machines columns shows that
                  all rows with High/Medium/Low strength gains have at least one of those two training types marked Yes.
                </p>
                <p>
                  B: No. Some clients who did not do cardio training still have non‑None cardio improvement (for example,
                  AA and DD).
                </p>
                <p>
                  C: Yes. Every free‑weights user (AA, DD, GG, HH) has strength improvement (Medium/High) and cardio
                  improvement (Low/High).
                </p>
                <p className="mt-2">
                  Correct answers: Yes / No / Yes
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ta-ex6">
          <h3 id="ta-ex6" className="text-xl font-semibold text-white">
            Example 6: City pitches (Yes/No statements)
          </h3>
          <p className="mt-2">
            A team owner rated 10 cities on three categories (0–3 scale). Total score is the sum of the three category
            scores.
          </p>
          <div className="mt-4">
            <PitchTable />
          </div>

          <ExampleCard
            number={6}
            title="Decide whether each statement is supported"
            statements={[
              "A. Any city with a 3 in Infrastructure also earned a 3 in at least one other category.",
              "B. Any city with a 3 in any category never has a score below 2 in the other categories.",
              "C. Among the cities with the lowest total score, only one made an offer in all three categories (i.e., no zeros).",
            ]}
            correctLetter="—"
            solution={
              <>
                <p>
                  A: No. Nashville has Infrastructure 3 but City Subsidies 2 and Stadium 2 (no additional 3).
                </p>
                <p>
                  B: Yes. Checking each category’s 3s shows the other two scores are 2 or 3 for those cities.
                </p>
                <p>
                  C: Yes. The lowest total is 3 (Albuquerque, Juneau, Wichita). Albuquerque has a 0 (stadium), Juneau has
                  a 0 (subsidies), while Wichita has 1/1/1—offers in all three. So only Wichita made offers across the
                  board.
                </p>
                <p className="mt-2">Correct answers: No / Yes / Yes</p>
              </>
            }
          />
        </section>

        <p className="mt-6">
          Takeaway: isolate the subset first by sorting the right column. Once the relevant rows are grouped, compute the
          requested statistic on that smaller set.
        </p>
      </article>
    </main>
  );
}