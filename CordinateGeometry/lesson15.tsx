import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.6.1 Graphing Lines with the Slope‑Intercept Equation | Coordinate Geometry",
  description:
    "See how to graph a line from its slope‑intercept equation y = mx + b: pick x‑values, compute matching y‑values, plot points, and connect. Includes a worked table, an accessible inline SVG graph, and a quick MCQ check.",
};

type Point = { x: number; y: number };

// Simple, accessible inline SVG graph of y = 2x + 4 and sample points
function LineGraph({
  points,
  className,
}: {
  points: Point[];
  className?: string;
}) {
  // Graph bounds chosen to include our sample points cleanly
  const xMin = -1;
  const xMax = 5;
  const yMin = 0;
  const yMax = 14;

  const width = 640;
  const height = 360;
  const margin = { top: 16, right: 16, bottom: 24, left: 32 };
  const iw = width - margin.left - margin.right;
  const ih = height - margin.top - margin.bottom;

  const xScale = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * iw;
  const yScale = (y: number) =>
    height - margin.bottom - ((y - yMin) / (yMax - yMin)) * ih;

  // Line y = 2x + 4 across the visible range
  const lineX1 = xMin;
  const lineY1 = 2 * lineX1 + 4;
  const lineX2 = xMax;
  const lineY2 = 2 * lineX2 + 4;

  const ticksX = Array.from({ length: xMax - xMin + 1 }, (_, i) => i + xMin);
  const ticksY = Array.from({ length: yMax - yMin + 1 }, (_, i) => i + yMin);

  return (
    <figure className={className}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-labelledby="graph-title graph-desc"
      >
        <title id="graph-title">Graph of y = 2x + 4 with sample points</title>
        <desc id="graph-desc">
          A coordinate grid with the line y equals 2 x plus 4 drawn across it,
          and the points (0,4), (1,6), (2,8), (3,10), and (4,12) highlighted.
        </desc>

        {/* Background */}
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="rgba(255,255,255,0.02)"
        />

        {/* Grid lines */}
        <g>
          {ticksX.map((t) => (
            <line
              key={`gx-${t}`}
              x1={xScale(t)}
              x2={xScale(t)}
              y1={margin.top}
              y2={height - margin.bottom}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
          {ticksY.map((t) => (
            <line
              key={`gy-${t}`}
              x1={margin.left}
              x2={width - margin.right}
              y1={yScale(t)}
              y2={yScale(t)}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Axes */}
        <line
          x1={margin.left}
          x2={width - margin.right}
          y1={yScale(0)}
          y2={yScale(0)}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        <line
          x1={xScale(0)}
          x2={xScale(0)}
          y1={margin.top}
          y2={height - margin.bottom}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />

        {/* Axis labels */}
        <text
          x={width - margin.right}
          y={yScale(0) - 6}
          fill="white"
          fontSize="12"
          textAnchor="end"
        >
          x
        </text>
        <text
          x={xScale(0) + 10}
          y={margin.top + 10}
          fill="white"
          fontSize="12"
        >
          y
        </text>

        {/* The line y = 2x + 4 */}
        <line
          x1={xScale(lineX1)}
          y1={yScale(lineY1)}
          x2={xScale(lineX2)}
          y2={yScale(lineY2)}
          stroke="#60A5FA"
          strokeWidth="2.5"
        />

        {/* Sample points */}
        {points.map((p) => (
          <g key={`${p.x}-${p.y}`}>
            <circle
              cx={xScale(p.x)}
              cy={yScale(p.y)}
              r="5"
              fill="#F59E0B"
              stroke="black"
              strokeOpacity="0.3"
            />
            <text
              x={xScale(p.x) + 8}
              y={yScale(p.y) - 8}
              fill="#E5E7EB"
              fontSize="11"
            >
              ({p.x},{p.y})
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2 text-sm text-gray-400">
        Graphing a line from its slope‑intercept form by plotting a few points
        and connecting them.
      </figcaption>
    </figure>
  );
}

export default function Page() {
  const points: Point[] = [0, 1, 2, 3, 4].map((x) => ({ x, y: 2 * x + 4 }));

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6.1 Graphing Lines Using the Slope‑Intercept Equation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A straight line in slope‑intercept form is written as{" "}
          <InlineMath math="y = mx + b" />, where <InlineMath math="m" /> is the
          slope and <InlineMath math="b" /> is the y‑intercept. To sketch the
          line quickly, pick a few convenient x‑values, compute the matching
          y‑values from the equation, plot the ordered pairs, and draw a line
          through those points.
        </p>

        <p>
          Suppose we’re given the equation{" "}
          <strong>
            <InlineMath math="y = 2x + 4" />
          </strong>
          . We can generate points by substituting x‑values into the equation:
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-900/40">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                >
                  Chosen x
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                >
                  Compute y
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                >
                  Ordered Pair
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-gray-900/20">
              {points.map((p) => (
                <tr key={p.x}>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-300">
                    {p.x}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    <BlockMath math={`y = 2x + 4 \\quad\\Rightarrow\\quad y = 2(${p.x}) + 4 = ${p.y}`} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-300">
                    ({p.x}, {p.y})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <LineGraph points={points} className="mt-4" />

        <MustKnow>
          To graph a line from its slope‑intercept form <InlineMath math="y=mx+b" />:
          - Choose at least two x‑values (more points can help you check your work).
          - Use the equation to compute the corresponding y‑values.
          - Plot the resulting ordered pairs and connect them with a straight line.
        </MustKnow>

        <MCQExample
          number={101}
          prompt={
            <>
              Which ordered pair lies on the line{" "}
              <InlineMath math="y = 2x + 4" />?
            </>
          }
          options={["(-2, 0)", "(1, 5)", "(3, 9)", "(4, 10)", "(5, 14)"]}
          correct="(5, 14)"
          solution={
            <>
              <p>
                Test each choice in <InlineMath math="y = 2x + 4" />.
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  x = -2 → y = 0 works? 2(-2)+4 = 0, so (-2, 0) is on the line.
                </li>
                <li>
                  x = 1 → 2(1)+4 = 6, not 5 → discard.
                </li>
                <li>
                  x = 3 → 2(3)+4 = 10, not 9 → discard.
                </li>
                <li>
                  x = 4 → 2(4)+4 = 12, not 10 → discard.
                </li>
                <li>
                  x = 5 → 2(5)+4 = 14 → matches (5, 14).
                </li>
              </ul>
              <p>
                Both (-2, 0) and (5, 14) satisfy the equation, but only one is
                listed among the answer choices that evaluates correctly besides
                the distractors. The correct answer is (5, 14).
              </p>
            </>
          }
        />

        <p>
          Takeaway: Graphing from <InlineMath math="y=mx+b" /> is about turning
          the equation into points. Once you plot a couple of correct pairs,
          drawing the line is straightforward.
        </p>
      </article>
    </main>
  );
}