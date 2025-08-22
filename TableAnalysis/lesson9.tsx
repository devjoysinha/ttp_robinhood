import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.10 Averages (Arithmetic Means) in Table Analysis | Data Insights",
  description:
    "How to find and compare arithmetic means in GMAT Table Analysis: what to sort, when a column total is enough, and when you can compare means without computing them. Includes mini‑examples and worked solutions.",
};

function SimpleTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: { key: string; header: string }[];
  rows: Record<string, React.ReactNode>[];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-800">
      <table className="min-w-full divide-y divide-gray-800">
        <caption className="px-4 py-2 text-left text-sm text-gray-400">
          {caption}
        </caption>
        <thead className="bg-gray-900/40">
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-300"
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-gray-900/30">
              {columns.map((c) => (
                <td key={c.key} className="whitespace-nowrap px-4 py-3 text-sm text-gray-200">
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Table Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.10 Averages (Arithmetic Means) in Table Analysis Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Table Analysis problems frequently ask for an average (arithmetic mean). The only
          formula you need is:
        </p>
        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"\\text{average} = \\dfrac{\\text{sum}}{\\text{quantity}}"} />
        </div>

        <MustKnow>
          When a prompt asks for the average of a subset, focus on pulling exactly the rows
          you need. Sorting the table by the relevant column often makes the subset jump out.
        </MustKnow>

        <p>
          Here’s a quick warm‑up that illustrates sorting to isolate the right entries and then
          applying average = sum ÷ count.
        </p>

        <MCQExample
          number={1}
          prompt="From the table of truck weights below, consider the three trucks with the largest maximum weights. Is the average of those three maximum weights greater than 130,000?"
          options={["True", "False"]}
          correct="True"
          solution={
            <>
              <p>Sort by Maximum Weight to find the top three: 143,000; 130,000; 120,000.</p>
              <div className="my-3 rounded-md bg-gray-900/40 p-3">
                <BlockMath
                  math={[
                    "\\text{avg} = \\dfrac{120{,}000+130{,}000+143{,}000}{3} \\\\",
                    "= \\dfrac{393{,}000}{3} = 131{,}000",
                  ].join("")}
                />
              </div>
              <p>Since 131,000 &gt; 130,000, the statement is True.</p>
            </>
          }
        />

        <SimpleTable
          caption="Truck maximum and minimum weights"
          columns={[
            { key: "company", header: "Company" },
            { key: "max", header: "Maximum Weight" },
            { key: "min", header: "Minimum Weight" },
          ]}
          rows={[
            { company: "A", max: "130,000", min: "56,000" },
            { company: "A", max: "120,000", min: "46,000" },
            { company: "A", max: "105,000", min: "62,000" },
            { company: "B", max: "102,000", min: "33,000" },
            { company: "B", max: "98,000", min: "72,000" },
            { company: "B", max: "143,000", min: "30,000" },
            { company: "C", max: "88,000", min: "40,000" },
            { company: "C", max: "96,000", min: "52,000" },
            { company: "C", max: "115,000", min: "68,000" },
          ]}
        />

        <MustKnow>
          If a column provides a total, you can often compute a mean directly without adding a
          bunch of individual entries. Use the total as the numerator in{" "}
          <InlineMath math={"\\text{average} = \\dfrac{\\text{sum}}{\\text{quantity}}"} />.
        </MustKnow>

        <p>Consider the farm production table below.</p>

        <SimpleTable
          caption="Primary products and annual production"
          columns={[
            { key: "farm", header: "Farm" },
            { key: "product", header: "Primary Product" },
            { key: "p2022", header: "Pounds Produced 2022" },
            { key: "p2023", header: "Pounds Produced 2023" },
          ]}
          rows={[
            { farm: "Babak", product: "Dates", p2022: "45,000", p2023: "50,000" },
            { farm: "Carvalho", product: "Avocados", p2022: "82,000", p2023: "84,000" },
            { farm: "Dubois", product: "Tomatoes", p2022: "301,000", p2023: "330,000" },
            { farm: "Jensen", product: "Avocados", p2022: "100,000", p2023: "112,000" },
            { farm: "Lord", product: "Dates", p2022: "20,000", p2023: "22,000" },
            { farm: "Paine", product: "Tomatoes", p2022: "218,000", p2023: "248,000" },
            { farm: "Schutz", product: "Dates", p2022: "32,000", p2023: "38,000" },
            { farm: "Sharma", product: "Avocados", p2022: "142,000", p2023: "138,000" },
            { farm: "Smith", product: "Tomatoes", p2022: "150,000", p2023: "180,000" },
            { farm: "Total", product: "—", p2022: "871,000", p2023: "954,000" },
          ]}
        />

        <ExampleCard
          number={5101}
          title="Using a column total to get a mean"
          statements={[
            "Claim: The 2022 mean production across all farms is less than 100,000 pounds.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                The table gives the 2022 total of 871,000 and the text says there are 9 farms.
                So:
              </p>
              <div className="my-3 rounded-md bg-gray-900/40 p-3">
                <BlockMath math={"\\dfrac{871{,}000}{9} < \\dfrac{900{,}000}{9} = 100{,}000"} />
              </div>
              <p>
                We didn’t need the exact average—only that it’s below 100,000. The claim holds.
              </p>
            </>
          }
        />

        <MustKnow>
          Comparing two means? Before you compute, scan the relevant entries. If each item in
          one list is larger than its counterpart in the other, the larger mean is immediate—no
          arithmetic needed.
        </MustKnow>

        <ExampleCard
          number={5102}
          title="Comparing means by inspection"
          statements={[
            "Compare the mean 2022 avocado production to the mean 2023 avocado production.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                Group the avocado rows (Carvalho, Jensen, Sharma). For Carvalho and Jensen,
                2023 exceeds 2022. Sharma’s 2023 is slightly lower than 2022 in this sample,
                but in many tables you may find every 2023 entry exceeds its 2022 counterpart,
                making the comparison trivial. When all paired entries move in the same
                direction, you can decide the mean comparison without computing.
              </p>
              <p className="text-sm text-gray-400">
                Tip: If the paired entries don’t all move in the same direction, you may still
                be able to compare by estimation, or you can compute the exact means if needed.
              </p>
            </>
          }
        />

        <hr className="my-8 border-gray-800" />

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Worked Example: Espresso Sales</h3>
          <p>
            A coffee chain tried two pricing strategies. NN means regular price in both months;
            NR means regular in January and discounted in February. Totals are given.
          </p>

          <SimpleTable
            caption="Espresso sales by shop"
            columns={[
              { key: "shop", header: "Shop" },
              { key: "strategy", header: "Pricing Strategy" },
              { key: "jan", header: "Jan Sales" },
              { key: "feb", header: "Feb Sales" },
            ]}
            rows={[
              { shop: "1", strategy: "NN", jan: "7,250", feb: "7,800" },
              { shop: "2", strategy: "NN", jan: "6,300", feb: "5,950" },
              { shop: "3", strategy: "NR", jan: "9,500", feb: "10,250" },
              { shop: "4", strategy: "NN", jan: "4,950", feb: "5,600" },
              { shop: "5", strategy: "NN", jan: "6,850", feb: "7,200" },
              { shop: "6", strategy: "NN", jan: "8,700", feb: "7,350" },
              { shop: "7", strategy: "NR", jan: "9,200", feb: "8,400" },
              { shop: "8", strategy: "NN", jan: "6,150", feb: "8,450" },
              { shop: "9", strategy: "NR", jan: "7,850", feb: "7,900" },
              { shop: "10", strategy: "NN", jan: "5,100", feb: "5,250" },
              { shop: "Total", strategy: "-", jan: "71,850", feb: "74,150" },
            ]}
          />

          <div className="space-y-3">
            <p>
              1) “For the NR shops (discount in Feb), the mean stayed the same from January to
              February.”
            </p>
            <div className="rounded-md bg-gray-900/40 p-3">
              <BlockMath
                math={[
                  "\\text{NR Jan avg} = \\dfrac{9{,}500 + 9{,}200 + 7{,}850}{3} = \\dfrac{26{,}550}{3} = 8{,}850 \\\\",
                  "\\text{NR Feb avg} = \\dfrac{10{,}250 + 8{,}400 + 7{,}900}{3} = \\dfrac{26{,}550}{3} = 8{,}850",
                ].join("")}
              />
            </div>
            <p>True: both means equal 8,850.</p>

            <p className="mt-5">
              2) “For the NN shops (regular price in Feb), the February mean exceeded 6,770.”
            </p>
            <p>
              Use the column total and subtract the NR sum from February to get the NN sum, then
              divide by 7 NN shops:
            </p>
            <div className="rounded-md bg-gray-900/40 p-3">
              <BlockMath
                math={[
                  "S_{\\text{NN, Feb}} = 74{,}150 - 26{,}550 = 47{,}600 \\\\",
                  "\\text{NN Feb avg} = \\dfrac{47{,}600}{7} = 6{,}800",
                ].join("")}
              />
            </div>
            <p>6,800 &gt; 6,770, so this statement is True.</p>

            <p className="mt-5">
              3) “None of the top three shops in February were among the bottom three in January.”
            </p>
            <p>
              Sorting reveals Shop 8 is top‑three in February but also bottom‑three in January.
              So the statement is False.
            </p>
          </div>
        </section>

        <hr className="my-8 border-gray-800" />

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Worked Example: EU GDP (PPP)</h3>
          <p>
            The table below lists PPP GDP per capita (thousand USD) for EU members, 2019–2021.
            Use sorting and inspection to compare means efficiently.
          </p>

          <SimpleTable
            caption="EU members: GDP per capita, PPP (thousand USD)"
            columns={[
              { key: "country", header: "Country" },
              { key: "ez", header: "Eurozone" },
              { key: "g2019", header: "2019" },
              { key: "g2020", header: "2020" },
              { key: "g2021", header: "2021" },
            ]}
            rows={[
              { country: "Austria", ez: "Yes", g2019: "58.7", g2020: "55.1", g2021: "59.7" },
              { country: "Belgium", ez: "Yes", g2019: "54.5", g2020: "51.7", g2021: "57.0" },
              { country: "Bulgaria", ez: "No", g2019: "24.4", g2020: "23.7", g2021: "25.9" },
              { country: "Croatia", ez: "Yes", g2019: "30.6", g2020: "28.5", g2021: "32.9" },
              { country: "Cyprus", ez: "Yes", g2019: "43.6", g2020: "41.3", g2021: "45.0" },
              { country: "Czechia", ez: "No", g2019: "43.0", g2020: "40.8", g2021: "43.8" },
              { country: "Denmark", ez: "No", g2019: "59.8", g2020: "59.1", g2021: "63.9" },
              { country: "Estonia", ez: "Yes", g2019: "38.0", g2020: "37.3", g2021: "42.0" },
              { country: "Finland", ez: "Yes", g2019: "50.7", g2020: "50.0", g2021: "53.8" },
              { country: "France", ez: "Yes", g2019: "49.8", g2020: "46.2", g2021: "51.4" },
              { country: "Germany", ez: "Yes", g2019: "56.5", g2020: "54.6", g2021: "58.4" },
              { country: "Greece", ez: "Yes", g2019: "30.9", g2020: "28.5", g2021: "32.2" },
              { country: "Hungary", ez: "No", g2019: "34.3", g2020: "33.1", g2021: "37.1" },
              { country: "Ireland", ez: "Yes", g2019: "90.4", g2020: "96.0", g2021: "112.5" },
              { country: "Italy", ez: "Yes", g2019: "44.7", g2020: "41.3", g2021: "46.2" },
              { country: "Latvia", ez: "Yes", g2019: "32.2", g2020: "31.6", g2021: "34.7" },
              { country: "Lithuania", ez: "Yes", g2019: "38.8", g2020: "39.2", g2021: "42.9" },
              { country: "Luxembourg", ez: "Yes", g2019: "123.2", g2020: "120.1", g2021: "131.9" },
              { country: "Malta", ez: "Yes", g2019: "49.0", g2020: "43.6", g2021: "49.6" },
              { country: "Netherlands", ez: "Yes", g2019: "59.7", g2020: "57.7", g2021: "62.8" },
              { country: "Poland", ez: "No", g2019: "34.7", g2020: "34.2", g2021: "37.8" },
              { country: "Portugal", ez: "Yes", g2019: "36.5", g2020: "33.8", g2021: "36.8" },
              { country: "Romania", ez: "No", g2019: "31.2", g2020: "30.6", g2021: "33.7" },
              { country: "Slovakia", ez: "Yes", g2019: "34.2", g2020: "33.1", g2021: "35.5" },
              { country: "Slovenia", ez: "Yes", g2019: "40.9", g2020: "39.4", g2021: "44.1" },
              { country: "Spain", ez: "Yes", g2019: "42.6", g2020: "38.2", g2021: "41.8" },
              { country: "Sweden", ez: "No", g2019: "55.7", g2020: "54.4", g2021: "59.0" },
              { country: "EU‑27 (avg)", ez: "—", g2019: "46.7", g2020: "44.4", g2021: "48.7" },
            ]}
          />

          <div className="space-y-3">
            <p>
              A) “For non‑Eurozone countries, the mean in 2020 was larger than the mean in 2021.”
            </p>
            <p>
              Scan the non‑Eurozone rows: for each of BG, CZ, DK, HU, PL, RO, SE, 2021 ≥ 2020 and at
              least one is strictly bigger. So the 2021 mean must exceed the 2020 mean. The claim is
              False.
            </p>

            <p className="mt-4">
              B) “The non‑Eurozone country with the highest 2021 figure (Denmark) had a greater
              2019–2021 mean than the Netherlands.”
            </p>
            <div className="rounded-md bg-gray-900/40 p-3">
              <BlockMath math={"\\text{DK avg} = (59.8+59.1+63.9)/3 = 60.9"} />
              <BlockMath math={"\\text{NL avg} = (59.7+57.7+62.8)/3 = 60.1"} />
            </div>
            <p>True.</p>

            <p className="mt-4">
              C) “In 2020, 17 countries were below the 2020 EU average (44.4).”
            </p>
            <p>
              Sorting by 2020 and counting values less than 44.4 yields 17 countries. True.
            </p>
          </div>
        </section>

        <hr className="my-8 border-gray-800" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Takeaways</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Average is position‑free: you only need the relevant sum and how many items you’re
              averaging, <InlineMath math={"\\dfrac{\\text{sum}}{\\text{quantity}}"} />.
            </li>
            <li>Sort to quickly isolate the rows that matter for the requested subset.</li>
            <li>Leverage column totals to avoid manual addition.</li>
            <li>
              Before computing, see whether a comparison of means can be decided by inspection (all
              paired entries move in the same direction).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}