import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.1 The Number Line and Inequalities | Quant",
  description:
    "Understand the real number line and how to graph basic inequalities. Learn open vs. closed circles, direction of solution rays, and test yourself with an MCQ and a Data Sufficiency drill.",
};

type NumberLineProps = {
  relation: ">" | ">=" | "<" | "<=";
  pivot?: number; // the boundary value to highlight on the line
  min?: number;
  max?: number;
  step?: number;
  className?: string;
};

function NumberLine({
  relation,
  pivot = 2,
  min = -4,
  max = 4,
  step = 1,
  className,
}: NumberLineProps) {
  // Basic responsive SVG number line from min..max with tick marks each step
  // Highlights the pivot with open/closed circle and bold ray left/right.
  const width = 560;
  const height = 90;
  const margin = 32;

  const scale = (x: number) =>
    margin + ((x - min) / (max - min)) * (width - 2 * margin);

  const yAxis = height / 2;
  const pivotX = scale(pivot);

  const isClosed = relation === ">=" || relation === "<=";
  const goesRight = relation === ">" || relation === ">=";

  const aria = `Number line from ${min} to ${max} showing the solution to x ${relation} ${pivot}. ${
    isClosed ? "Closed" : "Open"
  } circle at ${pivot} with a bold ray to the ${goesRight ? "right" : "left"}.`;

  return (
    <figure
      className={className ?? "w-full"}
      role="group"
      aria-label={aria}
      aria-describedby={`nl-caption-${relation.replace("=", "e")}`}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        width={width}
        height={height}
      >
        {/* Axis */}
        <line
          x1={scale(min)}
          y1={yAxis}
          x2={scale(max)}
          y2={yAxis}
          stroke="#94a3b8"
          strokeWidth="2"
        />
        {/* Ticks and labels */}
        {Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, i) => {
          const xVal = min + i * step;
          const x = scale(xVal);
          return (
            <g key={xVal}>
              <line
                x1={x}
                y1={yAxis - 8}
                x2={x}
                y2={yAxis + 8}
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <text
                x={x}
                y={yAxis + 24}
                textAnchor="middle"
                fontSize="12"
                fill="#cbd5e1"
              >
                {xVal}
              </text>
            </g>
          );
        })}
        {/* Bold solution ray */}
        <line
          x1={goesRight ? pivotX : scale(min)}
          y1={yAxis}
          x2={goesRight ? scale(max) : pivotX}
          y2={yAxis}
          stroke="#22d3ee"
          strokeWidth="6"
          strokeLinecap="round"
          aria-hidden="true"
        />
        {/* Direction arrow */}
        <polygon
          points={
            goesRight
              ? `${scale(max) - 12},${yAxis - 6} ${scale(max)},${yAxis} ${
                  scale(max) - 12
                },${yAxis + 6}`
              : `${scale(min) + 12},${yAxis - 6} ${scale(min)},${yAxis} ${
                  scale(min) + 12
                },${yAxis + 6}`
          }
          fill="#22d3ee"
          aria-hidden="true"
        />
        {/* Pivot circle */}
        <circle
          cx={pivotX}
          cy={yAxis}
          r={10}
          fill={isClosed ? "#22d3ee" : "#0b1220"}
          stroke="#22d3ee"
          strokeWidth="3"
          role="img"
          aria-label={`${isClosed ? "Closed" : "Open"} circle at ${pivot}`}
        />
      </svg>
      <figcaption
        id={`nl-caption-${relation.replace("=", "e")}`}
        className="mt-2 text-sm text-gray-400"
      >
        Solution set for x {relation} {pivot}
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.1 The real number line and inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Picture the real numbers as points on a horizontal axis that extends
          without end in both directions. Zero sits in the middle, called the
          origin. Values increase to the right (positive numbers) and decrease
          to the left (negative numbers). This line is our canvas for graphing
          inequalities.
        </p>

        <p>
          Inequalities compare quantities that are not necessarily the same. For
          instance, we write <TeX math="A>B" /> if A is larger than B and{" "}
          <TeX math="A<B" /> if A is smaller than B. When equality is allowed,
          we use <TeX math="A\ge B" /> (A is at least B) or{" "}
          <TeX math="A\le B" /> (A is at most B). Any such relationship can be
          stated either “small is less than large” or “large is greater than
          small.”
        </p>

        <h3 className="mt-8 text-xl font-semibold text-white">
          Reading and drawing inequality graphs
        </h3>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-200">
            1) <TeX math="x>2" />
          </h4>
          <NumberLine relation=">" />
          <p>
            All real numbers strictly greater than 2 are included. On the graph,
            2 itself is excluded, so we draw an open circle at 2 and shade the
            ray to the right.
          </p>
          <MustKnow>
            When graphing <TeX math="x>B" />, place an open circle at B and
            shade to the right.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-200">
            2) <TeX math="x\ge 2" />
          </h4>
          <NumberLine relation=">=" />
          <p>
            This set includes 2 and everything larger. We mark a closed circle
            at 2 to show inclusion and again shade to the right.
          </p>
          <MustKnow>
            When graphing <TeX math="x\ge B" />, use a closed circle at B and
            shade to the right.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-200">
            3) <TeX math="x<2" />
          </h4>
          <NumberLine relation="<" />
          <p>
            Here, every real number strictly less than 2 qualifies. Since 2 is
            not part of the set, we use an open circle at 2 and shade the ray
            to the left.
          </p>
          <MustKnow>
            When graphing <TeX math="x<B" />, place an open circle at B and
            shade to the left.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-200">
            4) <TeX math="x\le 2" />
          </h4>
          <NumberLine relation="<=" />
          <p>
            This inequality includes 2 and everything to its left. We draw a
            closed circle at 2 to indicate inclusion and shade leftward.
          </p>
          <MustKnow>
            When graphing <TeX math="x\le B" />, use a closed circle at B and
            shade to the left.
          </MustKnow>
        </section>

        <MCQExample
          number={1}
          prompt={
            <>
              Which statement best describes the solution set shown?
              <div className="mt-4">
                <NumberLine relation="<=" pivot={-1} />
              </div>
            </>
          }
          options={[
            "All real numbers greater than −1",
            "All real numbers less than −1",
            "All real numbers less than or equal to −1",
            "All real numbers greater than or equal to −1",
            "Only −1",
          ]}
          correct="All real numbers less than or equal to −1"
          solution={
            <>
              <p>
                The graph shows a closed circle at −1 (so −1 is included) and a
                shaded ray to the left. That matches <TeX math="x\le -1" />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Determining the inequality symbol from a graph"
          statements={[
            "A graph on the real number line shows a circle at 2 and a shaded ray extending to the right.",
            "1) The point at 2 is filled in.",
            "2) The shading extends to larger numbers.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want to identify the inequality relating x and 2. A filled
                (closed) circle means 2 is included (so it’s either{" "}
                <TeX math="\ge" /> or <TeX math="\le" />). Shading to the right
                means values greater than 2 are included (so it’s either{" "}
                <TeX math=">" /> or <TeX math="\ge" />).
              </p>
              <p>
                Statement (1) alone tells us “include 2,” but not whether we go
                left or right: insufficient. Statement (2) alone tells us “to
                the right,” but not whether 2 is included: insufficient.
              </p>
              <p>
                Together, they indicate “to the right” and “include 2,” which is{" "}
                <strong>
                  <TeX math="x\ge 2" />
                </strong>
                . Sufficient. Answer: C.
              </p>
            </>
          }
        />

        <p className="mt-8">
          Key takeaway: open vs. closed markers tell you whether the boundary is
          included, and the direction of the ray tells you which side of the
          boundary is in the solution set.
        </p>
      </article>
    </main>
  );
}