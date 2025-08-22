import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

// Lightweight KaTeX helper (SSR-safe)
import katex from "katex";

function K({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { displayMode: block, throwOnError: false });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className={block ? "my-2 block" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "5.10 Averages in Table Analysis | Data Insights",
  description:
    "How to use sorting and provided totals to compute and compare arithmetic means in Table Analysis. Includes worked examples and quick True/False drills.",
};

type TruckRow = { company: string; max: number; min: number };
type FarmRow = { farm: string; product: "Avocados" | "Dates" | "Tomatoes"; y2022: number; y2023: number };
type EspressoRow = { shop: number; strategy: "NN" | "NR"; jan: number; feb: number };
type GDPRow = { country: string; eurozone: "Yes" | "No"; g2019: number; g2020: number; g2021: number };

// Demo data (trimmed to what the examples need)
const trucks: TruckRow[] = [
  { company: "A", max: 130_000, min: 56_000 },
  { company: "A", max: 120_000, min: 46_000 },
  { company: "A", max: 105_000, min: 62_000 },
  { company: "B", max: 102_000, min: 33_000 },
  { company: "B", max: 98_000, min: 72_000 },
  { company: "B", max: 143_000, min: 30_000 },
  { company: "C", max: 88_000, min: 40_000 },
  { company: "C", max: 96_000, min: 52_000 },
  { company: "C", max: 115_000, min: 68_000 },
];

const avocadoFarms: FarmRow[] = [
  { farm: "Carvalho", product: "Avocados", y2022: 102_000, y2023: 126_000 },
  { farm: "Jensen", product: "Avocados", y2022: 100_000, y2023: 112_000 },
  { farm: "Sharma", product: "Avocados", y2022: 142_000, y2023: 158_000 },
];

const espresso: EspressoRow[] = [
  { shop: 1, strategy: "NN", jan: 7250, feb: 7800 },
  { shop: 2, strategy: "NN", jan: 6300, feb: 5950 },
  { shop: 3, strategy: "NR", jan: 9500, feb: 10250 },
  { shop: 4, strategy: "NN", jan: 4950, feb: 5600 },
  { shop: 5, strategy: "NN", jan: 6850, feb: 7200 },
  { shop: 6, strategy: "NN", jan: 8700, feb: 7350 },
  { shop: 7, strategy: "NR", jan: 9200, feb: 8400 },
  { shop: 8, strategy: "NN", jan: 6150, feb: 8450 },
  { shop: 9, strategy: "NR", jan: 7850, feb: 7900 },
  { shop: 10, strategy: "NN", jan: 5100, feb: 5250 },
];

const espressoTotals = { jan: 71_850, feb: 74_150 };

const gdp: GDPRow[] = [
  // Non-Eurozone
  { country: "Bulgaria", eurozone: "No", g2019: 24.4, g2020: 23.7, g2021: 25.9 },
  { country: "Czechia", eurozone: "No", g2019: 43.0, g2020: 40.8, g2021: 43.8 },
  { country: "Denmark", eurozone: "No", g2019: 59.8, g2020: 59.1, g2021: 63.9 },
  { country: "Hungary", eurozone: "No", g2019: 34.3, g2020: 33.1, g2021: 37.1 },
  { country: "Poland", eurozone: "No", g2019: 34.7, g2020: 34.2, g2021: 37.8 },
  { country: "Romania", eurozone: "No", g2019: 31.2, g2020: 30.6, g2021: 33.7 },
  { country: "Sweden", eurozone: "No", g2019: 55.7, g2020: 54.4, g2021: 59.0 },
  // Eurozone (subset needed for comparisons)
  { country: "Netherlands", eurozone: "Yes", g2019: 59.7, g2020: 57.7, g2021: 62.8 },
];

function formatNum(n: number) {
  return n.toLocaleString();
}

export default function Page() {
  // Trucks example computation
  const top3ByMax = [...trucks].sort((a, b) => b.max - a.max).slice(0, 3);
  const avgTop3 = Math.round(top3ByMax.reduce((s, r) => s + r.max, 0) / 3);

  // Espresso example computations
  const NR = espresso.filter((r) => r.strategy === "NR");
  const NRJanMean = NR.reduce((s, r) => s + r.jan, 0) / NR.length;
  const NRFedMean = NR.reduce((s, r) => s + r.feb, 0) / NR.length;

  const NRFebSum = NR.reduce((s, r) => s + r.feb, 0);
  const NNFEBcount = espresso.filter((r) => r.strategy === "NN").length;
  const NNFebMean = (espressoTotals.feb - NRFebSum) / NNFEBcount;

  const top3Feb = [...espresso].sort((a, b) => b.feb - a.feb).slice(0, 3).map((r) => r.shop);
  const bottom3Jan = [...espresso].sort((a, b) => a.jan - b.jan).slice(0, 3).map((r) => r.shop);
  const overlap = top3Feb.filter((s) => bottom3Jan.includes(s)); // [8]

  // GDP example computations
  const nonEuro = gdp.filter((r) => r.eurozone === "No");
  const nonEuroAll2021Higher = nonEuro.every((r) => r.g2021 > r.g2020);

  const denmark = gdp.find((r) => r.country === "Denmark")!;
  const netherlands = gdp.find((r) => r.country === "Netherlands")!;
  const meanDenmark = (denmark.g2019 + denmark.g2020 + denmark.g2021) / 3;
  const meanNetherlands = (netherlands.g2019 + netherlands.g2020 + netherlands.g2021) / 3;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Table Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">5.10 Averages (Arithmetic Means) in Table Analysis Questions</h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            Table Analysis problems revolve around reading, sorting, and comparing entries in a grid. It’s very common to be asked for an
            arithmetic mean. Keep the core identity front and center:
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <K expr="\,\text{average} \;=\; \dfrac{\text{sum}}{\text{quantity}}" block ariaLabel="average equals sum over quantity" />
          </div>
          <MustKnow>
            The mean is simply the total divided by how many items you are averaging. Two speed boosts:
            <br />
            1) Sort first to isolate the relevant entries you actually need.
            <br />
            2) If a column total is provided, you can avoid manual addition by reusing that total.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Mini‑Example 1: Top‑3 average from a table</h3>
          <p>
            The table lists maximum and minimum truck weights by company. Decide whether the mean of the three highest maximum weights
            exceeds 130,000.
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">Truck weights by company</caption>
              <thead className="bg-gray-800/60 text-gray-200">
                <tr>
                  <th scope="col" className="px-3 py-2">Company</th>
                  <th scope="col" className="px-3 py-2">Maximum Weight</th>
                  <th scope="col" className="px-3 py-2">Minimum Weight</th>
                </tr>
              </thead>
              <tbody>
                {trucks.map((r, i) => (
                  <tr key={i} className="odd:bg-gray-900/30">
                    <td className="px-3 py-2">{r.company}</td>
                    <td className="px-3 py-2">{formatNum(r.max)}</td>
                    <td className="px-3 py-2">{formatNum(r.min)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Sort by “Maximum Weight” and take the top three values: {formatNum(top3ByMax[0].max)}, {formatNum(top3ByMax[1].max)}, and{" "}
            {formatNum(top3ByMax[2].max)}. Their mean is:
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <K
              block
              expr={`\\dfrac{${top3ByMax[0].max} + ${top3ByMax[1].max} + ${top3ByMax[2].max}}{3} \\,=\\, ${avgTop3}`}
              ariaLabel="average equals sum of the three maximums divided by three equals 131,000"
            />
          </div>
          <p>Since {formatNum(avgTop3)} is greater than 130,000, the statement is True.</p>

          <MustKnow>
            When a question points to “the k largest” or “the m smallest,” sort first. Then you can read off exactly the rows you need.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Mini‑Example 2: Using a provided total</h3>
          <p>
            Suppose a table lists production for 9 farms and gives a column total of 871,000 pounds for 2022. Is the 2022 mean less than
            100,000 pounds?
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <K expr="\,\text{average}_{2022} \;=\; \dfrac{871{,}000}{9}" block ariaLabel="average equals 871,000 over 9" />
            <p className="mt-2">
              Because 9 × 100,000 = 900,000 and 871,000 is smaller than 900,000, the mean must be under 100,000. No exact division needed.
            </p>
          </div>

          <MustKnow>
            When a column shows a total, divide by the count to get the overall mean. You can often compare with a benchmark using quick
            inequalities rather than computing the exact average.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Mini‑Example 3: Comparing two means without arithmetic</h3>
          <p>
            For the avocado farms below, determine which year’s average production is larger—2022 or 2023.
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">Avocado farms production 2022 vs 2023</caption>
              <thead className="bg-gray-800/60 text-gray-200">
                <tr>
                  <th scope="col" className="px-3 py-2">Farm</th>
                  <th scope="col" className="px-3 py-2">2022 (lb)</th>
                  <th scope="col" className="px-3 py-2">2023 (lb)</th>
                </tr>
              </thead>
              <tbody>
                {avocadoFarms.map((r) => (
                  <tr key={r.farm} className="odd:bg-gray-900/30">
                    <th scope="row" className="px-3 py-2 font-medium text-gray-200">{r.farm}</th>
                    <td className="px-3 py-2">{formatNum(r.y2022)}</td>
                    <td className="px-3 py-2">{formatNum(r.y2023)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Each 2023 value exceeds its 2022 counterpart. Therefore, the 2023 average must be larger without doing any calculations.
          </p>

          <MustKnow>Before computing two means, check whether every entry in one set is larger (or smaller). If so, the comparison is immediate.</MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 7: Espresso sales (True/False set)</h3>
          <p>
            Mr. Jones tested strategies: NN (regular price in Jan and Feb) and NR (regular in Jan, reduced in Feb). Decide whether each
            statement is True or False based on the table.
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">Espresso sales by shop, strategy, and month</caption>
              <thead className="bg-gray-800/60 text-gray-200">
                <tr>
                  <th scope="col" className="px-3 py-2">Shop</th>
                  <th scope="col" className="px-3 py-2">Strategy</th>
                  <th scope="col" className="px-3 py-2">January</th>
                  <th scope="col" className="px-3 py-2">February</th>
                </tr>
              </thead>
              <tbody>
                {espresso.map((r) => (
                  <tr key={r.shop} className="odd:bg-gray-900/30">
                    <td className="px-3 py-2">{r.shop}</td>
                    <td className="px-3 py-2">{r.strategy}</td>
                    <td className="px-3 py-2">{formatNum(r.jan)}</td>
                    <td className="px-3 py-2">{formatNum(r.feb)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-900/60 font-medium text-gray-200">
                  <td className="px-3 py-2">Total</td>
                  <td className="px-3 py-2">–</td>
                  <td className="px-3 py-2">{formatNum(espressoTotals.jan)}</td>
                  <td className="px-3 py-2">{formatNum(espressoTotals.feb)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <div className="rounded-md bg-gray-800/60 p-4">
              <p className="font-semibold text-gray-100">
                Statement A. For shops that used the reduced price in February (NR), the mean sales did not change from January to February.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-200">Show reasoning</summary>
                <div className="mt-2 space-y-2">
                  <p>
                    NR shops are 3, 7, and 9. January mean:{" "}
                    <K expr="(9500 + 9200 + 7850)\,/\,3 \;=\; 8850" ariaLabel="nine thousand five hundred plus nine thousand two hundred plus seven thousand eight hundred fifty over three equals eight thousand eight hundred fifty" />.
                  </p>
                  <p>
                    February mean:{" "}
                    <K expr="(10250 + 8400 + 7900)\,/\,3 \;=\; 8850" ariaLabel="ten thousand two hundred fifty plus eight thousand four hundred plus seven thousand nine hundred over three equals eight thousand eight hundred fifty" />.
                  </p>
                  <p>Means are equal. Answer: True.</p>
                </div>
              </details>
            </div>

            <div className="rounded-md bg-gray-800/60 p-4">
              <p className="font-semibold text-gray-100">
                Statement B. In February, the mean sales for shops charging the regular price (NN) was greater than 6,770.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-200">Show reasoning</summary>
                <div className="mt-2 space-y-2">
                  <p>
                    Use the total:{" "}
                    <K expr="\text{sum(NN Feb)} \;=\; 74{,}150 \;-\; (10{,}250 + 8{,}400 + 7{,}900) \;=\; 47{,}600" ariaLabel="sum NN February equals seventy four thousand one hundred fifty minus (ten thousand two hundred fifty plus eight thousand four hundred plus seven thousand nine hundred) equals forty seven thousand six hundred" />
                    . With 7 NN shops,{" "}
                    <K expr="\,\text{mean(NN Feb)} \;=\; 47{,}600/7 \;=\; 6{,}800" ariaLabel="mean equals forty seven thousand six hundred over seven equals six thousand eight hundred" />.
                  </p>
                  <p>Since 6,800 &gt; 6,770, the statement is True.</p>
                </div>
              </details>
            </div>

            <div className="rounded-md bg-gray-800/60 p-4">
              <p className="font-semibold text-gray-100">
                Statement C. None of the top‑3 February shops were among the bottom‑3 January shops.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-200">Show reasoning</summary>
                <div className="mt-2 space-y-2">
                  <p>Top‑3 February shops: {top3Feb.join(", ")}. Bottom‑3 January shops: {bottom3Jan.join(", ")}.</p>
                  <p>Overlap: {overlap.join(", ") || "none"}. Because shop 8 appears in both groups, the statement is False.</p>
                </div>
              </details>
            </div>

            <p className="text-sm text-gray-400">Answers: True / True / False</p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 8: EU GDP per capita (PPP)</h3>
          <p>
            The table below shows a subset sufficient for the questions. Values are thousands of USD. The EU‑27 average for 2020 is 44.4
            (thousand).
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">Selected EU countries GDP per capita (PPP)</caption>
              <thead className="bg-gray-800/60 text-gray-200">
                <tr>
                  <th scope="col" className="px-3 py-2">Country</th>
                  <th scope="col" className="px-3 py-2">Eurozone</th>
                  <th scope="col" className="px-3 py-2">2019</th>
                  <th scope="col" className="px-3 py-2">2020</th>
                  <th scope="col" className="px-3 py-2">2021</th>
                </tr>
              </thead>
              <tbody>
                {gdp.map((r) => (
                  <tr key={r.country} className="odd:bg-gray-900/30">
                    <th scope="row" className="px-3 py-2 font-medium text-gray-200">{r.country}</th>
                    <td className="px-3 py-2">{r.eurozone}</td>
                    <td className="px-3 py-2">{r.g2019.toFixed(1)}</td>
                    <td className="px-3 py-2">{r.g2020.toFixed(1)}</td>
                    <td className="px-3 py-2">{r.g2021.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <div className="rounded-md bg-gray-800/60 p-4">
              <p className="font-semibold text-gray-100">
                Statement A. For non‑Eurozone countries, the mean 2020 GDP per capita was greater than the mean 2021 GDP per capita.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-200">Show reasoning</summary>
                <div className="mt-2 space-y-2">
                  <p>Every non‑Eurozone row shown has 2021 &gt; 2020. Therefore, the 2021 mean must exceed the 2020 mean. Answer: False.</p>
                  <p className="text-sm text-gray-400">
                    Check: {nonEuro.map((c) => c.country).join(", ")} all have 2021 higher than 2020.
                  </p>
                </div>
              </details>
            </div>

            <div className="rounded-md bg-gray-800/60 p-4">
              <p className="font-semibold text-gray-100">
                Statement B. The non‑Eurozone country with the highest 2021 GDP per capita had a larger three‑year mean (2019–2021) than the
                Netherlands.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-200">Show reasoning</summary>
                <div className="mt-2 space-y-2">
                  <p>Among non‑Eurozone countries, 2021 is largest for Denmark (63.9). Compare three‑year means:</p>
                  <ul className="ml-5 list-disc">
                    <li>
                      Denmark: <K expr="\,(59.8 + 59.1 + 63.9)/3 \approx 60.9" ariaLabel="Denmark mean approximately 60.9" />
                    </li>
                    <li>
                      Netherlands: <K expr="\,(59.7 + 57.7 + 62.8)/3 \approx 60.1" ariaLabel="Netherlands mean approximately 60.1" />
                    </li>
                  </ul>
                  <p>Denmark’s mean is higher. Answer: True.</p>
                </div>
              </details>
            </div>

            <div className="rounded-md bg-gray-800/60 p-4">
              <p className="font-semibold text-gray-100">
                Statement C. In 2020, 17 EU countries had a GDP per capita below the 2020 EU average (44.4).
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-200">Show reasoning</summary>
                <div className="mt-2 space-y-2">
                  <p>
                    Counting across the full table of 27 members (not all rows shown here), exactly 17 fall under 44.4 in 2020. Answer:
                    True.
                  </p>
                </div>
              </details>
            </div>

            <p className="text-sm text-gray-400">Answers: False / True / True</p>
          </div>
        </section>

        <section>
          <MustKnow>
            Summary:
            <br />
            • Sort to isolate the subset you need for a mean.
            <br />
            • Use provided totals to shortcut addition.
            <br />
            • Compare means by inspection when one set dominates the other entry‑by‑entry.
          </MustKnow>
        </section>
      </article>
    </main>
  );
}