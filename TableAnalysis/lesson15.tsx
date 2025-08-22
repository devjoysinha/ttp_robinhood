import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({
  children,
  block = false,
  ariaLabel,
}: {
  children: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
    output: "html",
  });
  const Wrapper = block ? "div" : "span";
  return (
    <Wrapper
      className={block ? "my-3 overflow-x-auto" : ""}
      aria-label={ariaLabel ?? children}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "5.14 Standard Deviation: How It Changes When Values Change | Table Analysis",
  description:
    "Learn quick rules for how adding or removing values affects standard deviation. Includes a mini True/False drill with a rainforest table and a larger sports table example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.14 How Standard Deviation Changes When Values Change
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Table Analysis problems sometimes ask what happens to the spread
          (standard deviation) of a data set when you add or drop specific
          values. You rarely need to compute the exact standard deviation—knowing
          how values near or far from the mean affect spread is enough.
        </p>

        <section aria-labelledby="sd-definition">
          <h3 id="sd-definition" className="sr-only">
            What standard deviation measures
          </h3>
          <p>
            Standard deviation measures how far, on average, the values lie from
            the mean. In symbols:
          </p>
          <K block ariaLabel="sigma equals square root of one over n sum of squared deviations">
            {\`\n\\sigma = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}\\bigl(x_i - \\mu\\bigr)^2}\n\`}
          </K>
        </section>

        <MustKnow>
          • When many values sit far from the mean, standard deviation is larger.
          • When many values cluster at or near the mean, standard deviation is smaller.
        </MustKnow>

        <p>
          From these ideas, a powerful shortcut follows.
        </p>

        <MustKnow>
          Adding a value close to the mean pulls the standard deviation down.
          Adding a value far from the mean pushes it up. Removing near-the-mean
          values increases the standard deviation, while removing far-out values
          decreases it.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Rainforest restoration table
          </h3>
          <p>
            The table shows the number of hectares of rainforest restored by two
            organizations in selected years.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700" role="table">
              <caption className="sr-only">
                Hectares restored by Organization A and B over years with means
              </caption>
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Year
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Organization A
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Organization B
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-gray-900">
                {[
                  ["2017", 204, 118],
                  ["2018", 220, 169],
                  ["2019", 190, 158],
                  ["2020", 211, 305],
                  ["2021", 197, 160],
                  ["2022", 219, 168],
                  ["2023", 194, 322],
                  ["Mean", 205, 200],
                ].map(([year, a, b], idx) => (
                  <tr key={idx}>
                    <th scope="row" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-100">
                      {year}
                    </th>
                    <td className="px-4 py-2 text-sm text-gray-300">{a}</td>
                    <td className="px-4 py-2 text-sm text-gray-300">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <MCQExample
            number={46}
            prompt="If Organization B’s result of 200 hectares from 2016 is appended to the table, will B’s standard deviation go down?"
            options={["True", "False"]}
            correct="True"
            solution={
              <>
                <p>
                  Organization B’s mean is 200. Appending 200 adds a value equal
                  to the mean, which reduces average squared distance from the mean.
                  Therefore, the standard deviation decreases.
                </p>
                <K ariaLabel="Interpretation of effect on sigma">
                  {\`\\text{Adding } x=\\mu \\Rightarrow (x-\\mu)^2=0 \\text{, so } \\sigma \\text{ decreases.}\`}
                </K>
              </>
            }
          />
        </section>

        <MustKnow>
          Removing data points that equal the mean (or sit very close to it) typically makes the standard deviation larger, unless all values are identical.
        </MustKnow>

        <section aria-labelledby="team-table">
          <h3 id="team-table" className="text-xl font-semibold text-white">
            Worked example: Hockey team table
          </h3>
          <p>
            The table summarizes a season’s performance for several players.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700" role="table">
              <caption className="sr-only">
                Player, position, games played, and goals scored, with column means
              </caption>
              <thead className="bg-gray-800">
                <tr>
                  {["Player", "Position", "Games Played", "Goals Scored"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-gray-900">
                {[
                  ["Alvarez", "Wing", 67, 79],
                  ["Betts", "Wing", 46, 55],
                  ["Cronenworth", "Center", 74, 61],
                  ["Franco", "Wing", 47, 76],
                  ["Guerrero", "Center", 45, 61],
                  ["Machado", "Wing", 55, 54],
                  ["Rizzo", "Wing", 66, 87],
                  ["Soto", "Wing", 24, 14],
                  ["Trout", "Center", 71, 62],
                  ["Average (mean)", "—", 55, 61],
                ].map(([player, pos, games, goals], idx) => (
                  <tr key={idx}>
                    <th scope="row" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-100">
                      {player as string}
                    </th>
                    <td className="px-4 py-2 text-sm text-gray-300">{pos as string}</td>
                    <td className="px-4 py-2 text-sm text-gray-300">{games as number}</td>
                    <td className="px-4 py-2 text-sm text-gray-300">{goals as number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6 pt-4">
            <MCQExample
              number={47}
              prompt="Removing Soto’s row will reduce the standard deviation of Goals Scored."
              options={["True", "False"]}
              correct="True"
              solution={
                <>
                  <p>
                    The mean goals is 61. Soto’s 14 is the most extreme value
                    relative to 61. Dropping the biggest outlier shrinks the spread,
                    so the standard deviation goes down.
                  </p>
                  <K ariaLabel="Absolute deviation comparison">
                    {|61-14| = 47 \\text{ is larger than } |61-87|=26, |61-54|=7, |61-79|=18, \\dots}
                  </K>
                </>
              }
            />

            <MCQExample
              number={48}
              prompt="Removing Machado’s row will not change the standard deviation of Games Played."
              options={["True", "False"]}
              correct="False"
              solution={
                <>
                  <p>
                    The mean games played is 55, and Machado has exactly 55.
                    Removing a value at the mean eliminates a zero deviation term,
                    which increases the average squared distance of the remaining
                    values. Hence, the standard deviation increases (so the
                    statement is false).
                  </p>
                  <K ariaLabel="Effect of removing mean on variance">
                    {(55 - 55)^2 = 0 \\ \\Rightarrow \\ \\text{remove a 0 term }\\Rightarrow\\ \\text{variance and }\\sigma\\text{ go up}}
                  </K>
                </>
              }
            />

            <MCQExample
              number={49}
              prompt="If all centers’ Goals Scored are removed, the standard deviation of Goals Scored decreases."
              options={["True", "False"]}
              correct="False"
              solution={
                <>
                  <p>
                    Centers have 61, 61, and 62 goals—values at or just above the
                    mean of 61. Removing numbers clustered at the mean reduces the
                    supply of near-mean values and increases the spread. Thus, the
                    standard deviation goes up, not down.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="sr-only">
            Key takeaway
          </h3>
          <p>
            Bottom line: You can often answer “how does the standard deviation
            change?” by checking whether added/removed values are near the mean
            (pulls spread down) or far from it (pushes spread up)—no heavy
            computation required.
          </p>
        </section>
      </article>
    </main>
  );
}