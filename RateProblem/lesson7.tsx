import type { Metadata } from "next";
import * as katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="inline-flex align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: true,
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className="my-4 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.8 Average Rate Questions | Rate Problems",
  description:
    "Master average rate problems: compute overall speed as total distance divided by total time, handle multi‑leg trips, and know the special case for round trips. Includes a worked example, a multiple‑choice drill, and one Data Sufficiency item with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">9. Rate Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">9.8 Average Rate Questions</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a trip has one or more parts, the overall or “average” speed is always the total distance traveled divided by the total time spent. You never average the speeds directly unless each speed was maintained for the same amount of time.
        </p>

        <MustKnow>
          <p className="mb-3">
            Average rate depends on totals, not piece‑by‑piece speeds:
          </p>
          <MathBlock expr="\\text{Average Rate} = \\dfrac{\\text{Total Distance}}{\\text{Total Time}}" ariaLabel="Average Rate equals total distance divided by total time" />

          <p className="mt-4 mb-2">For a two‑leg trip:</p>
          <MathBlock expr="\\text{Average Rate} = \\dfrac{D_1 + D_2}{T_1 + T_2}" ariaLabel="Average Rate equals (D1 plus D2) divided by (T1 plus T2)" />
        </MustKnow>

        <p>
          If a traveler goes out and then returns along the same path, the two leg distances are identical. That often simplifies the computation: find each leg’s time from time = distance ÷ rate, add those times, then divide the total distance by that total time.
        </p>

        <MustKnow>
          <p className="mb-2">
            Round trip along the same route implies equal distances:
          </p>
          <MathInline expr="D_1 = D_2" ariaLabel="D one equals D two" />
        </MustKnow>

        <section aria-labelledby="mini-example" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="mini-example" className="mb-2 text-white">Quick Worked Example</h3>
          <p className="mb-3">
            A car travels 120 miles from city A to city B at 40 mph and immediately returns along the same road at 60 mph. What is the car’s overall average speed?
          </p>

          <ul className="list-disc pl-6">
            <li>
              Total distance: <MathInline expr="120+120=240" ariaLabel="120 plus 120 equals 240" /> miles.
            </li>
            <li>
              Time A→B: <MathInline expr="\\dfrac{120}{40}=3" ariaLabel="120 divided by 40 equals 3" /> hours; Time B→A: <MathInline expr="\\dfrac{120}{60}=2" ariaLabel="120 divided by 60 equals 2" /> hours.
            </li>
            <li>
              Total time: <MathInline expr="3+2=5" ariaLabel="3 plus 2 equals 5" /> hours.
            </li>
          </ul>

          <MathBlock expr="\\text{Average Speed} = \\dfrac{240\\ \\text{miles}}{5\\ \\text{hours}} = 48\\ \\text{mph}" ariaLabel="Average speed equals 240 miles over 5 hours equals 48 miles per hour" />
        </section>

        <MCQExample
          number={6}
          prompt="Kwame walks from home to his office, 10 miles away, at a steady 3 mph. He immediately runs back home along the same route at 6 mph. What is his overall average speed for the out‑and‑back trip?"
          options={["2.5 mph", "3 mph", "4 mph", "4.5 mph", "5 mph"]}
          correct="4 mph"
          solution={
            <>
              <p>
                Each leg is 10 miles. Compute the time for each leg and use total distance over total time.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Outbound time: <MathInline expr="\\dfrac{10}{3}\\ \\text{hr}" ariaLabel="10 divided by 3 hours" />; return time: <MathInline expr="\\dfrac{10}{6}=\\dfrac{5}{3}\\ \\text{hr}" ariaLabel="10 divided by 6 equals five thirds hours" />.
                </li>
                <li>
                  Total distance: <MathInline expr="10+10=20" ariaLabel="10 plus 10 equals 20" /> miles; total time: <MathInline expr="\\dfrac{10}{3}+\\dfrac{5}{3}=5\\ \\text{hr}" ariaLabel="ten thirds plus five thirds equals five hours" />.
                </li>
              </ul>
              <MathBlock expr="\\text{Average Speed} = \\dfrac{20}{5} = 4\\ \\text{mph}" ariaLabel="Average speed equals 20 over 5 equals 4 miles per hour" />
            </>
          }
        />

        <ExampleCard
          number={7}
          title="Average rate for a round trip (Data Sufficiency)"
          statements={[
            "Each morning, Alberto the dog fetches the newspaper and returns home along the same path. The total round‑trip distance is 100 yards. What is Alberto’s average speed (yards per minute)?",
            "1) On the way to the newspaper, he walks at a constant 40 yards per minute.",
            "2) On the return trip, he walks at a constant 30 yards per minute.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                The two legs are equal in length, so each leg is 50 yards. Average speed is total distance divided by total time. We need both leg times (or both rates) to get the total time.
              </p>
              <p>
                Statement (1) alone: outbound rate known, return rate unknown → total time not fixed → insufficient.
              </p>
              <p>
                Statement (2) alone: return rate known, outbound rate unknown → total time not fixed → insufficient.
              </p>
              <p>
                Together: outbound time <MathInline expr="50/40=5/4" ariaLabel="50 over 40 equals five fourths" /> min, return time{" "}
                <MathInline expr="50/30=5/3" ariaLabel="50 over 30 equals five thirds" /> min. Total time:
                <MathInline expr="\\dfrac{5}{4}+\\dfrac{5}{3}=\\dfrac{35}{12}" ariaLabel="five fourths plus five thirds equals thirty five twelfths" /> min.
              </p>
              <MathBlock
                expr="\\text{Average Speed} = \\dfrac{100}{\\tfrac{35}{12}} = 100\\cdot\\dfrac{12}{35} = \\dfrac{240}{7}\\ \\text{yards/min} \\approx 34\\tfrac{2}{7}"
                ariaLabel="Average speed equals 100 divided by 35 twelfths equals 240 over 7 yards per minute, about 34 and two sevenths"
              />
              <p>Unique value determined only when both statements are used. Answer: C.</p>
            </>
          }
        />

        <p>
          Takeaway: for average rate, aggregate distance and time across the entire journey. In round trips, distances match; focus on computing each leg’s time, then divide the total distance by the sum of those times.
        </p>
      </article>
    </main>
  );
}