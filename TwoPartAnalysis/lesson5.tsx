import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "3.3 Two‑Part Analysis: Rates | GMAT Quant",
  description:
    "Solve two‑answer rate problems using distance = rate × time, average speed, catch‑up, and evenly spaced rate ideas. Includes five worked two‑column examples with full reasoning and KaTeX math.",
};

function Math({ children, inline = false, ariaLabel }: { children: string; inline?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: !inline,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      className={inline ? "katex-inline" : "katex-block my-2"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

type TwoPartOptionsProps = {
  columns: [string, string, string];
  rows: string[]; // label in the 3rd column for each row
  correct: [number, number]; // [index for col1, index for col2]
  caption?: string;
};

function TwoPartOptions({ columns, rows, correct, caption }: TwoPartOptionsProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full text-left text-sm text-gray-200">
        {caption ? (
          <caption className="px-4 py-3 text-left text-xs font-medium text-gray-400">{caption}</caption>
        ) : null}
        <thead className="bg-gray-800/60">
          <tr>
            <th className="px-4 py-3 font-semibold">{columns[0]}</th>
            <th className="px-4 py-3 font-semibold">{columns[1]}</th>
            <th className="px-4 py-3 font-semibold">{columns[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((label, i) => {
            const isLeft = i === correct[0];
            const isRight = i === correct[1];
            return (
              <tr key={i} className="border-t border-gray-700">
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full ring-2 ${
                      isLeft ? "ring-emerald-400 bg-emerald-500/20" : "ring-gray-600"
                    }`}
                    aria-label={isLeft ? "Correct choice for first column" : "Not selected"}
                    aria-pressed={isLeft}
                    role="button"
                  >
                    {isLeft ? (
                      <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill="currentColor" d="M7.6 14.2L3.4 10l1.2-1.2l3 3l7-7L15.8 6z" />
                      </svg>
                    ) : null}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full ring-2 ${
                      isRight ? "ring-emerald-400 bg-emerald-500/20" : "ring-gray-600"
                    }`}
                    aria-label={isRight ? "Correct choice for second column" : "Not selected"}
                    aria-pressed={isRight}
                    role="button"
                  >
                    {isRight ? (
                      <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill="currentColor" d="M7.6 14.2L3.4 10l1.2-1.2l3 3l7-7L15.8 6z" />
                      </svg>
                    ) : null}
                  </span>
                </td>
                <td className="px-4 py-3">{label}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TPAExample({
  number,
  title,
  prompt,
  options,
  solution,
  answerNote,
}: {
  number: number;
  title: string;
  prompt: React.ReactNode;
  options: TwoPartOptionsProps;
  solution: React.ReactNode;
  answerNote?: string;
}) {
  return (
    <section aria-labelledby={`ex-${number}`} className="rounded-xl border border-gray-800 bg-gray-900/30 p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 id={`ex-${number}`} className="text-lg font-semibold text-white md:text-xl">
          Example {number}: {title}
        </h3>
        <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-300">Two‑Part</span>
      </div>
      <div className="space-y-4">
        <p className="text-gray-300">{prompt}</p>
        <TwoPartOptions {...options} />
        <details className="group">
          <summary className="cursor-pointer list-none rounded-md bg-gray-800/50 px-3 py-2 text-sm text-gray-100 ring-1 ring-inset ring-gray-700 transition hover:bg-gray-800/70">
            Show explanation
          </summary>
          <div className="mt-3 space-y-3 text-gray-300">{solution}</div>
          {answerNote ? <p className="mt-2 text-sm text-emerald-300">Answer: {answerNote}</p> : null}
        </details>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">3. Two‑Part Analysis</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">3.3 Two‑Part Analysis Questions: Rates</h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          In rate problems, we return again and again to the relationships between distance, rate, and time. Two‑Part
          Analysis (TPA) questions wrap a single scenario around two unknowns, asking you to choose one entry in each of
          two columns. Your job is to connect the pieces with the right equations and pin down both answers.
        </p>

        <MustKnow>
          Two‑answer rate questions still rely on the same core equations—only now you must solve for two outputs that
          live in the same story. Track units carefully and write the relationships you need before diving into
          arithmetic.
        </MustKnow>

        <section aria-labelledby="core-ids" className="space-y-3">
          <h3 id="core-ids" className="text-xl font-semibold text-white">
            Core identities you will use
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Distance–rate–time:
              <Math inline ariaLabel="distance equals rate times time">{`\\;d = r\\,t`}</Math>
              , so
              <Math inline ariaLabel="time equals distance over rate">{`\\;t = \\dfrac{d}{r}`}</Math>
              .
            </li>
            <li>
              Average speed over a trip:
              <Math inline ariaLabel="average speed equals total distance over total time">{`\\;\\text{avg speed} = \\dfrac{\\text{total distance}}{\\text{total time}}`}</Math>
              .
            </li>
            <li>
              Catch‑up or pass problems often reduce to
              <Math inline ariaLabel="time equals change in distance over change in rate">{`\\;t = \\dfrac{\\Delta\\text{distance}}{\\Delta\\text{rate}}`}</Math>
              .
            </li>
            <li>
              If speed changes linearly over time (evenly spaced), then the mean speed equals the mean of the endpoints:
              <Math inline ariaLabel="average equals highest plus lowest over two">{`\\;\\text{avg} = \\dfrac{\\text{high} + \\text{low}}{2}`}</Math>
              .
            </li>
          </ul>
        </section>

        <section aria-labelledby="warmup" className="space-y-3">
          <h3 id="warmup" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>
          <p>
            Suppose a runner covers 2 miles at
            <Math inline>{`10\\;\\text{mph}`}</Math> and later walks 2 miles at
            <Math inline>{`4\\;\\text{mph}`}</Math>. Times:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Jogging:
              <Math inline ariaLabel="time equals two over ten equals one fifth hour">{`\\;t = \\dfrac{2}{10} = \\dfrac{1}{5}\\;\\text{hr}`}</Math>
            </li>
            <li>
              Walking:
              <Math inline ariaLabel="time equals two over four equals one half hour">{`\\;t = \\dfrac{2}{4} = \\dfrac{1}{2}\\;\\text{hr}`}</Math>
            </li>
          </ul>
        </section>

        <TPAExample
          number={4}
          title="Two drivers share a trip"
          prompt={
            <>
              Joe and Charlotte drive
              <Math inline>{`440`}</Math> miles to visit family. Joe goes first at
              <Math inline>{`60\\;\\text{mph}`}</Math>, then Charlotte finishes at
              <Math inline>{`70\\;\\text{mph}`}</Math>. Charlotte drives three hours less than Joe. Select how many miles
              each drove—one choice in each column.
            </>
          }
          options={{
            columns: ["Joe", "Charlotte", "(miles)"],
            rows: ["140 miles", "160 miles", "170 miles", "270 miles", "280 miles", "300 miles"],
            // correct mapping: Joe 300, Charlotte 140
            correct: [5, 0],
            caption: "Choose one entry for Joe and one for Charlotte.",
          }}
          solution={
            <>
              <p>
                Let Joe’s time be <Math inline>{`t`}</Math> hours; then Charlotte’s time is
                <Math inline>{`t-3`}</Math>. Distances:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Joe:
                  <Math>{`60t`}</Math>
                </li>
                <li>
                  Charlotte:
                  <Math>{`70(t-3) = 70t - 210`}</Math>
                </li>
              </ul>
              <p>
                The total is <Math inline>{`440`}</Math>, so
                <Math>{`60t + 70t - 210 = 440 \\;\\Rightarrow\\; 130t = 650 \\;\\Rightarrow\\; t = 5.`}</Math>
              </p>
              <p>
                Joe drove <Math inline>{`60\\cdot 5 = 300`}</Math> miles; Charlotte drove
                <Math inline>{`70\\cdot 2 = 140`}</Math> miles.
              </p>
            </>
          }
          answerNote="Joe — 300 miles (Row 6); Charlotte — 140 miles (Row 1)"
        />

        <TPAExample
          number={5}
          title="Out and back: find two average speeds"
          prompt={
            <>
              David drives from home to work at an average of
              <Math inline>{`50\\;\\text{mph}`}</Math> over
              <Math inline>{`30\\;\\text{miles}`}</Math>. The round trip takes
              <Math inline>{`1\\;\\text{hr}\\;21\\;\\text{min}`}</Math>. Rounded to the nearest tenth, choose his average
              speed from office to home and his average speed for the entire round trip—one per column.
            </>
          }
          options={{
            columns: ["From office to home", "Round trip", "Average speed (mph)"],
            rows: ["22.2", "33.3", "40.0", "44.4", "66.6"],
            correct: [2, 3], // 40.0 and 44.4
            caption: "Pick one value in each column.",
          }}
          solution={
            <>
              <p>
                Time to work:
                <Math>{`t_{\\text{to}} = \\dfrac{30}{50} = \\dfrac{3}{5}\\;\\text{hr} = 36\\;\\text{min}.`}</Math>
                Total time is <Math inline>{`81`}</Math> minutes, so the return leg took
                <Math inline>{`81-36=45`}</Math> minutes, i.e.
                <Math inline>{`\\tfrac{3}{4}`}</Math> hour. Return speed:
                <Math>{`\\dfrac{30}{\\tfrac{3}{4}} = 40.0\\;\\text{mph}.`}</Math>
              </p>
              <p>
                Round‑trip average:
                <Math>{`\\dfrac{60\\;\\text{miles}}{\\tfrac{81}{60}\\;\\text{hr}} \\approx 44.4\\;\\text{mph}.`}</Math>
              </p>
            </>
          }
          answerNote="From office to home — 40.0 (Row 3); Round trip — 44.4 (Row 4)"
        />

        <TPAExample
          number={6}
          title="Bike, then walk"
          prompt={
            <>
              Bilal travels <Math inline>{`7`}</Math> miles to school. He bikes
              <Math inline>{`6`}</Math> miles, then walks the last mile. His biking speed is
              <Math inline>{`10\\;\\text{mph}`}</Math> faster than his walking speed, and the total travel time is
              exactly one hour. Choose his biking speed and walking speed—one per column.
            </>
          }
          options={{
            columns: ["Biking", "Walking", "Speed (mph)"],
            rows: ["2 mph", "5 mph", "12 mph", "15 mph", "22 mph"],
            correct: [2, 0], // biking 12, walking 2
            caption: "Select one speed for each activity.",
          }}
          solution={
            <>
              <p>
                Let the walking rate be <Math inline>{`x`}</Math> mph. Then biking rate is
                <Math inline>{`x+10`}</Math> mph. Times:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Walk:
                  <Math inline>{`\\tfrac{1}{x}`}</Math> hr
                </li>
                <li>
                  Bike:
                  <Math inline>{`\\tfrac{6}{x+10}`}</Math> hr
                </li>
              </ul>
              <p>
                Total time is one hour:
                <Math>{`\\dfrac{1}{x} + \\dfrac{6}{x+10} = 1.`}</Math>
                Clearing denominators and simplifying gives
                <Math>{`x^2 + 3x - 10 = 0 \\;\\Rightarrow\\; (x+5)(x-2)=0.`}</Math>
                Positive solution: <Math inline>{`x=2`}</Math>.
              </p>
              <p>
                So he walks at <Math inline>{`2\\;\\text{mph}`}</Math> and bikes at
                <Math inline>{`12\\;\\text{mph}`}</Math>.
              </p>
            </>
          }
          answerNote="Biking — 12 mph (Row 3); Walking — 2 mph (Row 1)"
        />

        <TPAExample
          number={7}
          title="Speed decreases at a constant rate"
          prompt={
            <>
              From noon to 12:20 pm, an object’s speed drops linearly from
              <Math inline>{`x`}</Math> to <Math inline>{`y`}</Math> yards per minute. It covers
              <Math inline>{`4{,}000`}</Math> yards in those <Math inline>{`20`}</Math> minutes. Choose values of
              <Math inline>{`x`}</Math> and <Math inline>{`y`}</Math> that fit the information—one per column.
            </>
          }
          options={{
            columns: ["x", "y", "Speed (yd/min)"],
            rows: ["130", "190", "200", "210", "240", "260"],
            correct: [3, 1], // x=210, y=190
            caption: "Pick one x and one y.",
          }}
          solution={
            <>
              <p>
                Because the speed changes evenly over time, the average speed equals the midpoint of the endpoints:
                <Math>{`\\text{avg} = \\dfrac{x+y}{2}.`}</Math>
                Distance <Math inline>{`=`}</Math> average speed <Math inline>{`×`}</Math> time gives
                <Math>{`4000 = \\dfrac{x+y}{2}\\cdot 20 \\Rightarrow x+y = 400.`}</Math>
              </p>
              <p>
                Since speed decreased, <Math inline>{`x>y`}</Math>. From the options, the only pair that sums to
                <Math inline>{`400`}</Math> with <Math inline>{`x>y`}</Math> is
                <Math inline>{`(x,y)=(210,190)`}</Math>.
              </p>
            </>
          }
          answerNote="x — 210 (Row 4); y — 190 (Row 2)"
        />

        <TPAExample
          number={8}
          title="Bounds from rounded distance and time"
          prompt={
            <>
              A captain estimates the travel time as 18 hours (rounded to the nearest hour) and the route length as 260
              miles (rounded to the nearest 10 miles). Choose a lower bound <Math inline>{`q`}</Math> and an upper
              bound <Math inline>{`r`}</Math> for the boat’s average speed such that
              <Math inline>{`q<r`}</Math> and the gap <Math inline>{`|q-r|`}</Math> is as small as possible—one pick in
              each column.
            </>
          }
          options={{
            columns: ["q", "r", "Speed (mph)"],
            rows: ["12", "13", "14", "15", "16", "17"],
            correct: [1, 4], // q=13, r=16
            caption: "Pick the tightest plausible bounds from the options.",
          }}
          solution={
            <>
              <p>
                Rounding gives
                <Math inline>{`255 \\le \\text{distance} < 265`}</Math> and
                <Math inline>{`17.5 \\le \\text{time} < 18.5`}</Math>. Since
                <Math inline>{`\\text{rate} = \\dfrac{\\text{distance}}{\\text{time}}`}</Math>, the minimum plausible
                rate uses minimum distance over maximum time; the maximum uses maximum distance over minimum time:
              </p>
              <Math>{`\\dfrac{255}{18.5} < \\text{avg speed} < \\dfrac{265}{17.5} \\;\\Rightarrow\\; 13.78 < v < 15.14.`}</Math>
              <p>
                From the table, the tightest bounds containing that interval are
                <Math inline>{`q=13`}</Math> and <Math inline>{`r=16`}</Math>, minimizing
                <Math inline>{`|q-r|`}</Math>.
              </p>
            </>
          }
          answerNote="q — 13 (Row 2); r — 16 (Row 5)"
        />

        <section aria-labelledby="wrap" className="space-y-3">
          <h3 id="wrap" className="text-xl font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Start with
              <Math inline>{`d = r\\,t`}</Math> and write what you know; solve symbolically before plugging numbers.
            </li>
            <li>In TPA, both answers must fit the same scenario—test edge cases and constraints.</li>
            <li>For linear changes in speed, average speed is the midpoint of the endpoints.</li>
            <li>When values are rounded, translate to intervals first; then bound the possible rate.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}