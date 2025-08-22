import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: true,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <div
      className="katex-block overflow-x-auto py-1"
      role="img"
      aria-label={ariaLabel ?? "Equation"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: false,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      className="katex"
      role="img"
      aria-label={ariaLabel ?? "Formula"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.3 Rate–Time–Distance Formula | Rate Problems",
  description:
    "Master the relationship between rate, time, and distance. See the three interchangeable formulas, unit tips, and worked examples including a multiple‑choice question and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.3 Rate–Time–Distance Formula
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every travel question in this chapter hinges on one simple relationship:
          if you know any two of rate, time, and distance, you can determine the third.
          Keep your units consistent and use the version of the formula that matches
          what the problem gives you.
        </p>

        <section aria-labelledby="rtd-formulas">
          <h3 id="rtd-formulas" className="sr-only">
            Rate–Time–Distance formulas
          </h3>
          <div className="space-y-2">
            <MathBlock
              expr={`\\text{Distance} = \\text{Rate} \\times \\text{Time}`}
              ariaLabel="Distance equals rate times time"
            />
            <MathBlock
              expr={`\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Rate}}`}
              ariaLabel="Time equals distance divided by rate"
            />
            <MathBlock
              expr={`\\text{Rate} = \\dfrac{\\text{Distance}}{\\text{Time}}`}
              ariaLabel="Rate equals distance divided by time"
            />
          </div>
        </section>

        <MustKnow>
          • There is really one identity here:{" "}
          <MathInline expr={`d = r\\,t`} ariaLabel="d equals r t" />. The other
          two are just algebraic rearrangements.{" "}
          <br />
          • Units must match. For example, if rate is in miles per hour, time
          must be in hours to keep distance in miles. Convert minutes to hours
          by dividing by 60.{" "}
          <br />
          • Scaling works both ways: doubling the time doubles the distance at a
          fixed rate, while halving the rate halves the distance for the same
          time.
        </MustKnow>

        <MCQExample
          number={31}
          prompt="A car travels at 60 miles per hour for 2.5 hours. How many miles does it travel?"
          options={["120", "130", "140", "150", "180"]}
          correct="150"
          solution={
            <>
              <p>
                Use <MathInline expr={`d=r\\,t`} ariaLabel="d equals r t" />.
                Here, <MathInline expr={`r=60`} ariaLabel="rate is 60" /> mph
                and <MathInline expr={`t=2.5`} ariaLabel="time is 2.5" /> hours:
              </p>
              <MathBlock expr={`d = 60 \\times 2.5 = 150`} ariaLabel="d equals 60 times 2.5 equals 150" />
              <p>The car travels 150 miles.</p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Finding distance with constant speed (Data Sufficiency)"
          statements={[
            "A vehicle traveled from Town A to Town B at a constant speed. What is the distance from A to B?",
            "1) The trip took 3 hours at 70 miles per hour.",
            "2) The speed was 70 miles per hour, and the trip took 210 minutes.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need the distance. With{" "}
                <MathInline expr={`d=r\\,t`} ariaLabel="d equals r t" />:
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <MathInline expr={`r=70`} ariaLabel="rate 70" /> mph and{" "}
                <MathInline expr={`t=3`} ariaLabel="time 3" /> hours give{" "}
                <MathInline expr={`d=70\\times 3=210`} ariaLabel="d equals 70 times 3 equals 210" />
                . Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> 210 minutes is{" "}
                <MathInline expr={`210/60=3`} ariaLabel="210 over 60 equals 3" /> hours, again with{" "}
                <MathInline expr={`r=70`} ariaLabel="rate 70" /> mph, so{" "}
                <MathInline expr={`d=70\\times 3=210`} ariaLabel="d equals 70 times 3 equals 210" />
                . Sufficient.
              </p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: pick the form of the{" "}
          <MathInline expr={`d=r\\,t`} ariaLabel="d equals r t" /> identity that
          fits the information you have, align the units, and compute. This
          simple workflow powers nearly all rate questions.
        </p>
      </article>
    </main>
  );
}