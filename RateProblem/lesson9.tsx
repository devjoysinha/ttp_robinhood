import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Small KaTeX helpers
// These client components render math accessibly and efficiently.
function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <span className="align-baseline">
      {/* @ts-expect-error Server/Client boundary handled internally */}
      <Katex expr={expr} display={false} ariaLabel={ariaLabel} />
    </span>
  );
}
function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <div className="my-3">
      {/* @ts-expect-error Server/Client boundary handled internally */}
      <Katex expr={expr} display ariaLabel={ariaLabel} />
    </div>
  );
}

// Client KaTeX renderer
// Placed at bottom of file to keep page a server component by default.
export const metadata: Metadata = {
  title: "9.8.2 Average Rate Known | Rate Problems",
  description:
    "Learn how to solve average‑rate questions when the overall average is given. Use a simple rate–time–distance setup, apply the average speed formula, and practice with an MCQ and a Data Sufficiency example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.8.2 Solving Average‑Rate Questions When the Average Rate Is Given
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to this point, we focused on finding an overall average speed from multiple
          segments. In this section, the twist is that the overall average speed is already
          provided. Your job is to identify an unknown time, distance, or segment speed by
          leveraging the average speed relationship.
        </p>

        <MustKnow>
          When the overall average speed is known, assign a variable to the quantity you
          seek and use the identity
          <MathInline
            expr="\\text{Average speed} = \\dfrac{\\text{Total distance}}{\\text{Total time}}"
            ariaLabel="Average speed equals total distance divided by total time"
          />
          . You never need each individual segment speed if you already know times and
          distances for those segments.
        </MustKnow>

        <h3 className="mt-10 text-xl font-semibold text-white">Quick worked example</h3>
        <p className="text-gray-300">
          A person walks from Avenue A to Avenue B along a 450‑foot path at a steady{" "}
          6 ft/s. Without stopping, the person turns around and walks back along the same
          450‑foot path. If the overall average speed for the round trip is 8 ft/s, what
          was the average speed on the return leg?
        </p>

        <p>
          Set up a simple rate–time–distance table for the two legs. Use
          <MathInline expr="t = \\dfrac{d}{r}" ariaLabel="time equals distance over rate" />.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-separate border-spacing-0 rounded-lg border border-gray-700">
            <thead className="bg-gray-800/50 text-gray-200">
              <tr>
                <th scope="col" className="py-2 px-3 text-left font-semibold">
                  Leg
                </th>
                <th scope="col" className="py-2 px-3 text-left font-semibold">
                  Rate
                </th>
                <th scope="col" className="py-2 px-3 text-left font-semibold">
                  Time
                </th>
                <th scope="col" className="py-2 px-3 text-left font-semibold">
                  Distance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <th scope="row" className="py-2 px-3 text-left font-medium text-gray-100">
                  A → B
                </th>
                <td className="py-2 px-3">
                  6 ft/s
                </td>
                <td className="py-2 px-3">
                  <MathInline expr="\\dfrac{450}{6} = 75\\text{ s}" ariaLabel="four hundred fifty divided by six equals seventy five seconds" />
                </td>
                <td className="py-2 px-3">450 ft</td>
              </tr>
              <tr className="border-t border-gray-700">
                <th scope="row" className="py-2 px-3 text-left font-medium text-gray-100">
                  B → A
                </th>
                <td className="py-2 px-3">
                  <MathInline expr="r\\ \\text{ft/s}" ariaLabel="r feet per second" />
                </td>
                <td className="py-2 px-3">
                  <MathInline expr="\\dfrac{450}{r}\\text{ s}" ariaLabel="four hundred fifty over r seconds" />
                </td>
                <td className="py-2 px-3">450 ft</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Now use the average speed formula with total distance{" "}
          <MathInline expr="900\\text{ ft}" ariaLabel="nine hundred feet" /> and total time
          <MathInline
            expr="75 + \\dfrac{450}{r}\\text{ s}"
            ariaLabel="seventy five plus four hundred fifty over r seconds"
          />
          .
        </p>

        <MathBlock
          expr={[
            "8 = \\dfrac{900}{\\,75 + \\dfrac{450}{r}\\,}",
            "\\quad\\Rightarrow\\quad 8\\!\\left(75 + \\dfrac{450}{r}\\right) = 900",
            "\\quad\\Rightarrow\\quad 600 + \\dfrac{3600}{r} = 900",
            "\\quad\\Rightarrow\\quad \\dfrac{3600}{r} = 300",
            "\\quad\\Rightarrow\\quad r = 12\\ \\text{ft/s}",
          ].join("\\\\[4px]")}
          ariaLabel="Solve for r yields r equals 12 feet per second"
        />

        <p>So the return speed was 12 ft/s.</p>

        <MCQExample
          number={10}
          prompt="Each weekend, Anita drives from home to a friend’s place and back on the same road. One weekend, the outbound drive took 4 hours and the return took 5 hours. If her overall average speed for the round trip was 40 mph, how far is her home from her friend’s place?"
          options={["90 miles", "180 miles", "270 miles", "360 miles", "450 miles"]}
          correct="180 miles"
          solution={
            <>
              <p>
                The one‑way distance is the same both directions. Let that distance be x.
                The total distance is <strong>2x</strong>, and the total time is{" "}
                <strong>4 + 5 = 9</strong> hours. With overall average speed 40 mph:
              </p>
              <MathBlock
                expr={[
                  "40 = \\dfrac{\\,2x\\,}{9}",
                  "\\Rightarrow\\ 360 = 2x",
                  "\\Rightarrow\\ x = 180\\ \\text{miles}",
                ].join("\\\\[4px]")}
                ariaLabel="Forty equals two x over nine, so x equals one hundred eighty miles"
              />
            </>
          }
        />

        <h3 className="mt-8 text-xl font-semibold text-white">Data Sufficiency drill</h3>

        <ExampleCard
          number={11}
          title="Speed from B to C"
          statements={[
            "A plane flew from city A to city B at a constant 300 km/h. Upon arrival at B, it continued to city C at a constant speed. What was the speed from B to C?",
            "1) The distance AB is half the distance BC.",
            "2) The average speed for the entire trip from A to C was 360 km/h.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let AB = S and BC = 2S (from statement 1). Let the unknown speed from B to C
                be x km/h. Then:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Time on AB: <MathInline expr="\\dfrac{S}{300}\\ \\text{h}" ariaLabel="S over 300 hours" />
                </li>
                <li>
                  Time on BC: <MathInline expr="\\dfrac{2S}{x}\\ \\text{h}" ariaLabel="two S over x hours" />
                </li>
              </ul>
              <p>
                From statement 2, the overall average from A to C is 360 km/h. Total distance
                is <MathInline expr="S + 2S = 3S" ariaLabel="three S" />, and total time is{" "}
                <MathInline expr="\\dfrac{S}{300} + \\dfrac{2S}{x}" ariaLabel="S over 300 plus two S over x" />.
              </p>
              <MathBlock
                expr={[
                  "360 = \\dfrac{3S}{\\,\\dfrac{S}{300} + \\dfrac{2S}{x}\\,}",
                  "\\Rightarrow\\ 360 = \\dfrac{3}{\\,\\dfrac{1}{300} + \\dfrac{2}{x}\\,}",
                  "\\Rightarrow\\ \\dfrac{1}{300} + \\dfrac{2}{x} = \\dfrac{3}{360} = \\dfrac{1}{120}",
                ].join("\\\\[6px]")}
                ariaLabel="After canceling S we get an equation in x only"
              />
              <p>
                This equation contains only one unknown (<MathInline expr="x" ariaLabel="x" />), so
                it has a unique solution for x. Therefore, statements 1 and 2 together are
                sufficient. Each alone is not enough: statement 1 has no time/average link,
                and statement 2 lacks the AB:BC distance relationship. Answer: C.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: when the overall average speed is given, think “total distance over
          total time.” Assign a variable, build a clean table, and write one equation that
          captures the trip end‑to‑end.
        </p>
      </article>
    </main>
  );
}

// Client-only KaTeX renderer
// This keeps math styling local and a11y-friendly.
"use client";
import "katex/dist/katex.min.css";
import katex from "katex";
import { useId } from "react";

function Katex({
  expr,
  display,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const id = useId();
  const html = katex.renderToString(expr, {
    displayMode: !!display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });

  return (
    <span
      id={id}
      role="math"
      aria-label={ariaLabel || expr.replace(/\\\\/g, " ")}
      className={display ? "block overflow-x-auto" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}