import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import katex from "katex";

export const metadata: Metadata = {
  title: "2.11 Patterns and Trends | Graphics Interpretation",
  description:
    "Learn how to scan visuals for recurring patterns and relationships. Includes two worked examples: forecasting from a revenue chart and comparing runner speeds from a distance–time graph.",
};

function MathBlock({
  expr,
  inline = false,
  ariaLabel,
}: {
  expr: string;
  inline?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: !inline,
    throwOnError: false,
    output: "htmlAndMathml",
  });
  const Tag = inline ? "span" : "div";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel ?? "mathematical expression"}
      className={inline ? "katex-inline" : "katex-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11 Patterns and Trends
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Graphics Interpretation problems reward you for spotting consistent
          behaviors in the data. When you read any chart or graph, first scan
          for predictable relationships and recurring movement rather than
          crunching numbers.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Hunt for clear relationships: direct vs. inverse patterns,
              steady/zero slopes, cycles, and stepwise changes.
            </li>
            <li>
              Compare steepness to assess rates of change quickly; steeper lines
              indicate larger changes per unit on the horizontal axis.
            </li>
            <li>
              Note increases and decreases across equal intervals, and estimate
              percent changes when exact figures aren’t necessary.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="example-12">
          <ExampleCard
            number={12}
            title="Reading a Repeating Pattern in Annual Revenue"
            statements={[
              "The chart displays ABC Corp’s yearly revenue from 1900 through 1909.",
              "Task A: Identify the year in which revenue reaches 8 million dollars.",
              "Task B: If the observed pattern continues, project the company’s revenue for 1910.",
            ]}
            correctLetter="1906 / 12,000,000"
            solution={
              <>
                <figure className="my-4">
                  <img
                    src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1568/content_Example_12.png"
                    alt="Line graph of ABC Corp revenue by year from 1900 to 1909"
                    loading="lazy"
                    decoding="async"
                    className="mx-auto h-auto w-full max-w-2xl rounded-md border border-gray-700"
                  />
                  <figcaption className="mt-2 text-sm text-gray-400">
                    Use the y-axis to locate $8M, then match to the year on the
                    x-axis. Next, analyze the year-to-year pattern.
                  </figcaption>
                </figure>

                <p className="mt-4">
                  Task A: Locate 8 on the y-axis and track across to the plotted
                  point. That point aligns with the year 1906, so the year is
                  1906.
                </p>

                <p className="mt-2">
                  Task B: Read the year-to-year changes. The data alternate in a
                  two-step rhythm: odd years rise by $3M relative to the
                  previous year, and even years drop by $1M relative to the
                  previous year. Since 1909 is $13M, the next year (1910, an
                  even year) would be $1M less:
                </p>

                <MathBlock
                  expr={`1910\\text{ revenue} = 13{,}000{,}000 - 1{,}000{,}000 = 12{,}000{,}000`}
                  ariaLabel="1910 revenue equals 13 million minus 1 million equals 12 million"
                />

                <p className="mt-2">
                  Conclusion: 1906 is the year with $8M, and 1910 would be
                  $12,000,000 if the pattern continues.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-13">
          <ExampleCard
            number={13}
            title="Comparing Speeds from a Distance–Time Plot"
            statements={[
              "The graph shows distance from home for four runners—A, B, C, and D—over 5 hours.",
              "Task A: Determine the slowest runner.",
              "Task B: If A and C keep running for two more hours at the same pace, find the positive difference in their total distances after 7 hours.",
            ]}
            correctLetter="D / 21"
            solution={
              <>
                <figure className="my-4">
                  <img
                    src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/510/content_Example_13.png"
                    alt="Distance versus time graph for runners A, B, C, and D over five hours"
                    loading="lazy"
                    decoding="async"
                    className="mx-auto h-auto w-full max-w-3xl rounded-md border border-gray-700"
                  />
                  <figcaption className="mt-2 text-sm text-gray-400">
                    For constant-rate motion, line slope equals speed. Flatter
                    lines indicate slower runners.
                  </figcaption>
                </figure>

                <p className="mt-2">
                  Task A: The slowest runner corresponds to the smallest slope
                  (least distance gained over the same time). Over 5 hours,
                  runner D travels only about 5 km, so D is the slowest.
                </p>

                <p className="mt-4">
                  A rate-based approach confirms this. Average speed is distance
                  divided by time:
                </p>

                <MathBlock
                  expr={`\\text{avg speed} = \\frac{\\text{distance}}{\\text{time}}`}
                  ariaLabel="Average speed equals distance divided by time"
                />

                <div className="space-y-2">
                  <MathBlock
                    expr={`A:\\ \\frac{30\\ \\text{km}}{5\\ \\text{h}}=6\\ \\text{km/h}`}
                    ariaLabel="Runner A speed equals 30 kilometers over 5 hours equals 6 kilometers per hour"
                  />
                  <MathBlock
                    expr={`B:\\ \\frac{20\\ \\text{km}}{5\\ \\text{h}}=4\\ \\text{km/h}`}
                    ariaLabel="Runner B speed equals 20 kilometers over 5 hours equals 4 kilometers per hour"
                  />
                  <MathBlock
                    expr={`C:\\ \\frac{15\\ \\text{km}}{5\\ \\text{h}}=3\\ \\text{km/h}`}
                    ariaLabel="Runner C speed equals 15 kilometers over 5 hours equals 3 kilometers per hour"
                  />
                  <MathBlock
                    expr={`D:\\ \\frac{5\\ \\text{km}}{5\\ \\text{h}}=1\\ \\text{km/h}`}
                    ariaLabel="Runner D speed equals 5 kilometers over 5 hours equals 1 kilometer per hour"
                  />
                </div>

                <p className="mt-4">
                  Task B: Extend A and C for two more hours at the same pace.
                  Runner A adds 6 km per hour:
                </p>

                <MathBlock
                  expr={`\\text{A in 7 h} = 30\\ \\text{km} + 2\\cdot 6\\ \\text{km} = 42\\ \\text{km}`}
                  ariaLabel="Runner A total in 7 hours equals 30 plus 2 times 6 equals 42 kilometers"
                />

                <p className="mt-2">Runner C adds 3 km per hour:</p>

                <MathBlock
                  expr={`\\text{C in 7 h} = 15\\ \\text{km} + 2\\cdot 3\\ \\text{km} = 21\\ \\text{km}`}
                  ariaLabel="Runner C total in 7 hours equals 15 plus 2 times 3 equals 21 kilometers"
                />

                <p className="mt-2">The positive difference is:</p>

                <MathBlock
                  expr={`42\\ \\text{km} - 21\\ \\text{km} = 21\\ \\text{km}`}
                  ariaLabel="Forty-two minus twenty-one equals twenty-one kilometers"
                />
              </>
            }
          />
        </section>

        <p className="mt-6">
          Bottom line: focus on structure before arithmetic. Spotting consistent
          slopes, alternating steps, and other patterns often leads straight to
          the answer.
        </p>
      </article>
    </main>
  );
}