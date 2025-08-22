import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "5.8 Sorting Tables to Find Maximum or Minimum Values | Table Analysis",
  description:
    "Learn a fast, reliable way to locate rows tied to extreme values in a table: sort the relevant column. Includes worked examples with mammals, NBA players, and apartment complexes.",
};

type Mammal = { name: string; weight: number; lifespan: number };
type Player = {
  name: string;
  games: number;
  minutes: number;
  points: number;
  fgm: number;
};
type Complex = {
  name: string;
  company: "Xavier" | "Yarrow" | "Zenith";
  sqft: number;
  rent: number;
  score: number;
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      className="inline-block"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Table<T extends Record<string, any>>({
  caption,
  columns,
  rows,
  highlightKey,
  highlightAria,
  sortDirection = "ascending",
}: {
  caption: string;
  columns: { key: keyof T; label: string; numeric?: boolean }[];
  rows: T[];
  highlightKey?: keyof T;
  highlightAria?: string;
  sortDirection?: "ascending" | "descending";
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/40">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-slate-900/60">
          <tr>
            {columns.map((c) => {
              const isHighlighted = highlightKey && c.key === highlightKey;
              return (
                <th
                  key={String(c.key)}
                  scope="col"
                  className={`px-4 py-3 text-sm font-semibold text-gray-200 ${
                    c.numeric ? "text-right" : ""
                  } ${isHighlighted ? "bg-slate-800" : ""}`}
                  aria-sort={
                    isHighlighted ? (sortDirection as "ascending" | "descending") : undefined
                  }
                >
                  <span className="align-middle">{c.label}</span>
                  {isHighlighted && highlightAria ? (
                    <span id={`${String(c.key)}-sorted`} className="sr-only">
                      {" "}
                      {highlightAria}
                    </span>
                  ) : null}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr
              key={idx}
              className={`border-t border-slate-800 ${
                idx % 2 === 0 ? "bg-slate-900/20" : "bg-slate-900/10"
              }`}
            >
              {columns.map((c) => {
                const isHighlighted = highlightKey && c.key === highlightKey;
                return (
                  <td
                    key={String(c.key)}
                    className={`px-4 py-2 text-sm text-gray-300 ${
                      c.numeric ? "text-right tabular-nums" : ""
                    } ${isHighlighted ? "bg-slate-800" : ""}`}
                    aria-describedby={
                      isHighlighted && highlightAria ? `${String(c.key)}-sorted` : undefined
                    }
                  >
                    {String(r[c.key])}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  // Mammals dataset
  const mammals: Mammal[] = [
    { name: "Black Bear", weight: 140, lifespan: 10 },
    { name: "Brown Bear", weight: 200, lifespan: 24 },
    { name: "Chimpanzee", weight: 50, lifespan: 33 },
    { name: "Deer", weight: 70, lifespan: 5 },
    { name: "Elephant", weight: 5220, lifespan: 60 },
    { name: "Rabbit", weight: 2, lifespan: 3 },
    { name: "Sloth", weight: 6, lifespan: 20 },
    { name: "Wolf", weight: 40, lifespan: 8 },
    { name: "Zebra", weight: 320, lifespan: 9 },
  ];
  const mammalsSortedByLife = [...mammals].sort((a, b) => a.lifespan - b.lifespan);
  const mammalsSortedByWeight = [...mammals].sort((a, b) => a.weight - b.weight);

  // NBA dataset
  const players: Player[] = [
    { name: "Dirk Nowitzki", games: 145, minutes: 5895, points: 3663, fgm: 1220 },
    { name: "Dwyane Wade", games: 177, minutes: 6697, points: 3954, fgm: 1450 },
    { name: "Elgin Baylor", games: 134, minutes: 5510, points: 3623, fgm: 1388 },
    { name: "Hakeem Olajuwon", games: 145, minutes: 5749, points: 3755, fgm: 1504 },
    { name: "James Harden", games: 160, minutes: 5750, points: 3637, fgm: 1089 },
    { name: "Jerry West", games: 153, minutes: 6321, points: 4457, fgm: 1622 },
    { name: "John Havlicek", games: 172, minutes: 6860, points: 3776, fgm: 1451 },
    { name: "Kareem Abdul-Jabbar", games: 237, minutes: 8851, points: 5762, fgm: 2356 },
    { name: "Karl Malone", games: 193, minutes: 7907, points: 4761, fgm: 1743 },
    { name: "Kevin Durant", games: 166, minutes: 6725, points: 4878, fgm: 1647 },
    { name: "Kobe Bryant", games: 220, minutes: 8641, points: 5640, fgm: 2014 },
    { name: "Larry Bird", games: 164, minutes: 6886, points: 3897, fgm: 1458 },
    { name: "LeBron James", games: 282, minutes: 11654, points: 8023, fgm: 2872 },
    { name: "Magic Johnson", games: 190, minutes: 7538, points: 3701, fgm: 1291 },
    { name: "Michael Jordan", games: 179, minutes: 7474, points: 5987, fgm: 2188 },
    { name: "Scottie Pippen", games: 208, minutes: 8105, points: 3642, fgm: 1335 },
    { name: "Shaquille O'Neal", games: 216, minutes: 8098, points: 5250, fgm: 2041 },
    { name: "Stephen Curry", games: 147, minutes: 5492, points: 3966, fgm: 1326 },
    { name: "Tim Duncan", games: 251, minutes: 9370, points: 5172, fgm: 1975 },
    { name: "Tony Parker", games: 226, minutes: 7758, points: 4045, fgm: 1613 },
  ];

  const byPoints = [...players].sort((a, b) => a.points - b.points);
  const byGames = [...players].sort((a, b) => a.games - b.games);
  const byFGM = [...players].sort((a, b) => a.fgm - b.fgm);
  const byMinutes = [...players].sort((a, b) => a.minutes - b.minutes);

  // Apartments dataset
  const complexes: Complex[] = [
    { name: "Apple Heights", company: "Xavier", sqft: 600, rent: 750, score: 9.4 },
    { name: "Brentwood", company: "Zenith", sqft: 800, rent: 850, score: 9.2 },
    { name: "City Estates", company: "Xavier", sqft: 550, rent: 600, score: 7.2 },
    { name: "Desert Lofts", company: "Yarrow", sqft: 900, rent: 550, score: 8.8 },
    { name: "Eaglecrest", company: "Xavier", sqft: 700, rent: 900, score: 7.5 },
    { name: "Gardenia", company: "Zenith", sqft: 1000, rent: 1100, score: 7.9 },
    { name: "Hibiscus Meadows", company: "Xavier", sqft: 650, rent: 700, score: 6.9 },
    { name: "Lotus Villas", company: "Yarrow", sqft: 950, rent: 1000, score: 8.5 },
    { name: "Magnolia View", company: "Yarrow", sqft: 750, rent: 800, score: 9.1 },
    { name: "Peony Park", company: "Zenith", sqft: 850, rent: 925, score: 8.3 },
  ];

  const bySatisfaction = [...complexes].sort((a, b) => a.score - b.score);
  const bySqft = [...complexes].sort((a, b) => a.sqft - b.sqft);
  const byRent = [...complexes].sort((a, b) => a.rent - b.rent);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Table Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8 Sorting Tables to Find Maximum or Minimum Values
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          Questions about tables often ask for the row tied to an extreme value in a specific
          column: the tallest, the smallest, the most, or the least. The quickest, lowest‑risk way
          to find that row is to sort the column that matters and then read from the top or bottom.
          Conceptually, you’re identifying{" "}
          <MathInline expr={"\\operatorname*{arg\\,max}\\limits_i\\; C_i"} ariaLabel="arg max of column C" />{" "}
          or{" "}
          <MathInline expr={"\\operatorname*{arg\\,min}\\limits_i\\; C_i"} ariaLabel="arg min of column C" />
          , where C is the column of interest.
        </p>

        <MustKnow>
          Sort the column that contains the value you care about. After sorting, the row you want is
          at one end of the table, and any ties are adjacent to each other. This avoids scanning
          row‑by‑row and reduces errors.
        </MustKnow>

        <section aria-labelledby="mammals">
          <h3 id="mammals" className="mb-2 text-xl font-semibold text-white">
            Example: Longest lifespan among mammals
          </h3>
          <p className="mb-4">
            Suppose you’re asked for the mammal with the greatest average lifespan. Sort the
            “Average Lifespan” column from smallest to largest and read the last row.
          </p>

          <div className="space-y-4">
            <Table<Mammal>
              caption="Mammals, sorted by average lifespan (ascending)"
              columns={[
                { key: "name", label: "Mammal" },
                { key: "weight", label: "Average Weight (kg)", numeric: true },
                { key: "lifespan", label: "Average Lifespan (years)", numeric: true },
              ]}
              rows={mammalsSortedByLife}
              highlightKey={"lifespan"}
              highlightAria="Sorted by lifespan from least to greatest"
            />

            <p>
              After sorting, the bottom row has the longest lifespan. Here, that’s the elephant at
              60 years.
            </p>

            <p className="mt-6">
              Similarly, if the question asks for the three lowest average weights, sort by
              “Average Weight (kg)” ascending and read the top three rows.
            </p>

            <Table<Mammal>
              caption="Mammals, sorted by average weight (ascending)"
              columns={[
                { key: "name", label: "Mammal" },
                { key: "weight", label: "Average Weight (kg)", numeric: true },
                { key: "lifespan", label: "Average Lifespan (years)", numeric: true },
              ]}
              rows={mammalsSortedByWeight}
              highlightKey={"weight"}
              highlightAria="Sorted by weight from least to greatest"
            />

            <p>
              The three lightest mammals are Sloth, Wolf, and Chimpanzee (top three rows after
              sorting).
            </p>
          </div>
        </section>

        <MustKnow>
          When a prompt asks for the row associated with an extreme in a column, don’t eyeball the
          whole table. Sort that column. The target row is at the top or bottom, and groups of tied
          values will appear together.
        </MustKnow>

        <section aria-labelledby="nba">
          <h3 id="nba" className="mb-2 text-xl font-semibold text-white">
            Example 3 (GMAT‑style DI): NBA statistics
          </h3>
          <p className="mb-4">
            The table below shows statistics for 20 NBA players. For each statement, select Yes if
            it must be true; otherwise, select No. We’ll answer each by sorting the relevant
            column(s).
          </p>

          <div className="space-y-6">
            <ol className="list-decimal space-y-6 pl-6">
              <li>
                The player with the most points is also the player with the most games played.
                <div className="mt-3 space-y-3">
                  <p>
                    Sort by Points Scored ascending; the last row gives the top scorer. Then sort
                    by Games Played ascending; the last row gives the leader in games.
                  </p>
                  <Table<Player>
                    caption="Players, sorted by Points Scored (ascending)"
                    columns={[
                      { key: "name", label: "Player" },
                      { key: "games", label: "Games Played", numeric: true },
                      { key: "minutes", label: "Minutes Played", numeric: true },
                      { key: "points", label: "Points Scored", numeric: true },
                      { key: "fgm", label: "Field Goals Made", numeric: true },
                    ]}
                    rows={byPoints}
                    highlightKey={"points"}
                    highlightAria="Sorted by points from least to greatest"
                  />
                  <Table<Player>
                    caption="Players, sorted by Games Played (ascending)"
                    columns={[
                      { key: "name", label: "Player" },
                      { key: "games", label: "Games Played", numeric: true },
                      { key: "minutes", label: "Minutes Played", numeric: true },
                      { key: "points", label: "Points Scored", numeric: true },
                      { key: "fgm", label: "Field Goals Made", numeric: true },
                    ]}
                    rows={byGames}
                    highlightKey={"games"}
                    highlightAria="Sorted by games from least to greatest"
                  />
                  <p>
                    The top scorer and the games leader are both LeBron James. Answer: Yes.
                  </p>
                </div>
              </li>

              <li>
                Scottie Pippen made the fifth fewest field goals.
                <div className="mt-3 space-y-3">
                  <p>Sort by Field Goals Made ascending and count to the fifth row.</p>
                  <Table<Player>
                    caption="Players, sorted by Field Goals Made (ascending)"
                    columns={[
                      { key: "name", label: "Player" },
                      { key: "games", label: "Games Played", numeric: true },
                      { key: "minutes", label: "Minutes Played", numeric: true },
                      { key: "points", label: "Points Scored", numeric: true },
                      { key: "fgm", label: "Field Goals Made", numeric: true },
                    ]}
                    rows={byFGM}
                    highlightKey={"fgm"}
                    highlightAria="Sorted by field goals from least to greatest"
                  />
                  <p>
                    The fifth name from the top is Scottie Pippen. Answer: Yes.
                  </p>
                </div>
              </li>

              <li>
                The three players with the most games are also the three players with the most
                minutes.
                <div className="mt-3 space-y-3">
                  <p>
                    Sort by Games Played and note the bottom three names. Then sort by Minutes
                    Played and check the bottom three again.
                  </p>
                  <Table<Player>
                    caption="Players, sorted by Games Played (ascending)"
                    columns={[
                      { key: "name", label: "Player" },
                      { key: "games", label: "Games Played", numeric: true },
                      { key: "minutes", label: "Minutes Played", numeric: true },
                      { key: "points", label: "Points Scored", numeric: true },
                      { key: "fgm", label: "Field Goals Made", numeric: true },
                    ]}
                    rows={byGames}
                    highlightKey={"games"}
                    highlightAria="Sorted by games from least to greatest"
                  />
                  <Table<Player>
                    caption="Players, sorted by Minutes Played (ascending)"
                    columns={[
                      { key: "name", label: "Player" },
                      { key: "games", label: "Games Played", numeric: true },
                      { key: "minutes", label: "Minutes Played", numeric: true },
                      { key: "points", label: "Points Scored", numeric: true },
                      { key: "fgm", label: "Field Goals Made", numeric: true },
                    ]}
                    rows={byMinutes}
                    highlightKey={"minutes"}
                    highlightAria="Sorted by minutes from least to greatest"
                  />
                  <p>
                    In both sorts, the bottom three are LeBron James, Tim Duncan, and Kareem
                    Abdul‑Jabbar. Answer: Yes.
                  </p>
                </div>
              </li>
            </ol>

            <div className="rounded-md border border-slate-800 bg-slate-900/40 p-4 text-sm text-gray-300">
              Final answers for Example 3: Yes / Yes / Yes.
            </div>
          </div>
        </section>

        <section aria-labelledby="apartments">
          <h3 id="apartments" className="mb-2 text-xl font-semibold text-white">
            Example 4 (GMAT‑style DI): Apartment complexes
          </h3>
          <p className="mb-4">
            The table shows 10 complexes managed by three companies. Decide whether each statement
            must be true by sorting the relevant column(s).
          </p>

          <div className="space-y-6">
            <ol className="list-decimal space-y-6 pl-6">
              <li>
                If we choose the 5 complexes with the highest resident satisfaction, every company
                is represented.
                <div className="mt-3 space-y-3">
                  <p>Sort by Resident Satisfaction ascending and inspect the top five from the end.</p>
                  <Table<Complex>
                    caption="Complexes, sorted by Resident Satisfaction (ascending)"
                    columns={[
                      { key: "name", label: "Apartment Complex" },
                      { key: "company", label: "Rental Company" },
                      { key: "sqft", label: "Average square footage", numeric: true },
                      { key: "rent", label: "Average monthly rent", numeric: true },
                      { key: "score", label: "Resident Satisfaction (out of 10)", numeric: true },
                    ]}
                    rows={bySatisfaction}
                    highlightKey={"score"}
                    highlightAria="Sorted by satisfaction from least to greatest"
                  />
                  <p>
                    The top five include properties from Xavier, Yarrow, and Zenith. Answer: Yes.
                  </p>
                </div>
              </li>

              <li>
                If we choose the 5 complexes with the largest average square footage, one rental
                company will be left out.
                <div className="mt-3 space-y-3">
                  <p>Sort by Average square footage ascending and look at the top five from the end.</p>
                  <Table<Complex>
                    caption="Complexes, sorted by Average square footage (ascending)"
                    columns={[
                      { key: "name", label: "Apartment Complex" },
                      { key: "company", label: "Rental Company" },
                      { key: "sqft", label: "Average square footage", numeric: true },
                      { key: "rent", label: "Average monthly rent", numeric: true },
                      { key: "score", label: "Resident Satisfaction (out of 10)", numeric: true },
                    ]}
                    rows={bySqft}
                    highlightKey={"sqft"}
                    highlightAria="Sorted by square footage from least to greatest"
                  />
                  <p>
                    The five largest units come from Yarrow and Zenith only; Xavier is excluded.
                    Answer: Yes.
                  </p>
                </div>
              </li>

              <li>
                If we pick the 3 highest‑rent complexes and the 2 lowest‑rent complexes, one
                company will be excluded.
                <div className="mt-3 space-y-3">
                  <p>
                    Sort by Average monthly rent ascending. The two lowest rents are at the top; the
                    three highest are at the bottom.
                  </p>
                  <Table<Complex>
                    caption="Complexes, sorted by Average monthly rent (ascending)"
                    columns={[
                      { key: "name", label: "Apartment Complex" },
                      { key: "company", label: "Rental Company" },
                      { key: "sqft", label: "Average square footage", numeric: true },
                      { key: "rent", label: "Average monthly rent", numeric: true },
                      { key: "score", label: "Resident Satisfaction (out of 10)", numeric: true },
                    ]}
                    rows={byRent}
                    highlightKey={"rent"}
                    highlightAria="Sorted by monthly rent from least to greatest"
                  />
                  <p>
                    The two lowest‑rent properties belong to Yarrow and Xavier; among the three
                    highest, Zenith appears twice. All three companies are included overall. Answer:
                    No.
                  </p>
                </div>
              </li>
            </ol>

            <div className="rounded-md border border-slate-800 bg-slate-900/40 p-4 text-sm text-gray-300">
              Final answers for Example 4: Yes / Yes / No.
            </div>
          </div>
        </section>

        <section aria-labelledby="wrapup">
          <h3 id="wrapup" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            To reliably find a maximum or minimum in a table, sort the column that contains the
            relevant values. The desired row will be sitting at one end of the table, ready to be
            read—no hunting required.
          </p>
        </section>
      </article>
    </main>
  );
}