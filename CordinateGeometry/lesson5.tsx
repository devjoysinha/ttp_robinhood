import type { Metadata } from "next";
import katex from "katex";
// Note: Ensure you import KaTeX CSS once globally (e.g., in app/layout.tsx or globals.css):
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "18.4 Line Segments | Coordinate Geometry",
  description:
    "Understand how two points define a line and the finite portion between them called a line segment. Includes an accessible SVG illustration and KaTeX-rendered notation.",
};

type MathInlineProps = {
  expr: string;
  ariaLabel?: string;
  className?: string;
};

function MathInline({ expr, ariaLabel, className }: MathInlineProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    strict: "warn",
  });
  return (
    <span
      className={className}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function CoordinateSegmentFigure() {
  // Simple coordinate-plane SVG with a horizontal segment between A(-2, 2) and B(4, 2).
  // Plane bounds
  const xmin = -6;
  const xmax = 6;
  const ymin = -4;
  const ymax = 4;

  // SVG box
  const width = 640;
  const height = 360;
  const pad = 40;

  const sx = (width - 2 * pad) / (xmax - xmin);
  const sy = (height - 2 * pad) / (ymax - ymin);

  const x2px = (x: number) => pad + (x - xmin) * sx;
  const y2px = (y: number) => height - pad - (y - ymin) * sy;

  // Points and lines
  const A = { x: -2, y: 2 };
  const B = { x: 4, y: 2 };

  const Ax = x2px(A.x);
  const Ay = y2px(A.y);
  const Bx = x2px(B.x);
  const By = y2px(B.y);

  // Entire line y = 2 (extend across view bounds)
  const lineY = y2px(2);
  const lineX1 = x2px(xmin);
  const lineX2 = x2px(xmax);

  const axisX1 = x2px(xmin);
  const axisX2 = x2px(xmax);
  const axisY = y2px(0);
  const axisY1 = y2px(ymin);
  const axisY2 = y2px(ymax);
  const axisX = x2px(0);

  const figureId = "fig-line-segment";
  const titleId = `${figureId}-title`;
  const descId = `${figureId}-desc`;

  // Tick marks
  const ticksX = Array.from({ length: xmax - xmin + 1 }, (_, i) => xmin + i);
  const ticksY = Array.from({ length: ymax - ymin + 1 }, (_, i) => ymin + i);

  return (
    <figure
      className="mx-auto my-6 w-full max-w-3xl"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="auto"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="rounded-md bg-slate-900/40 ring-1 ring-slate-700"
      >
        <title id={titleId}>Line segment between points A(-2, 2) and B(4, 2) on the line y = 2</title>
        <desc id={descId}>
          A coordinate plane with a horizontal line at y equals 2. The finite segment between the
          points A at negative 2 comma 2 and B at 4 comma 2 is highlighted, while the rest of the
          line continues beyond the endpoints.
        </desc>

        {/* Axes */}
        <line x1={axisX1} y1={axisY} x2={axisX2} y2={axisY} stroke="#94a3b8" strokeWidth="1.5" />
        <line x1={axisX} y1={axisY1} x2={axisX} y2={axisY2} stroke="#94a3b8" strokeWidth="1.5" />

        {/* Axis labels */}
        <text x={axisX2 - 12} y={axisY - 8} fill="#cbd5e1" fontSize="12">
          x
        </text>
        <text x={axisX + 8} y={axisY2 + 14} fill="#cbd5e1" fontSize="12">
          y
        </text>

        {/* Grid ticks X */}
        {ticksX.map((tx) => {
          const px = x2px(tx);
          return (
            <g key={`tx-${tx}`}>
              <line x1={px} y1={axisY - 4} x2={px} y2={axisY + 4} stroke="#64748b" strokeWidth="1" />
              {tx !== 0 && (
                <text x={px - 4} y={axisY + 16} fill="#94a3b8" fontSize="10">
                  {tx}
                </text>
              )}
            </g>
          );
        })}

        {/* Grid ticks Y */}
        {ticksY.map((ty) => {
          const py = y2px(ty);
          return (
            <g key={`ty-${ty}`}>
              <line x1={axisX - 4} y1={py} x2={axisX + 4} y2={py} stroke="#64748b" strokeWidth="1" />
              {ty !== 0 && (
                <text x={axisX - 18} y={py + 4} fill="#94a3b8" fontSize="10">
                  {ty}
                </text>
              )}
            </g>
          );
        })}

        {/* Infinite line y = 2 (light) */}
        <line
          x1={lineX1}
          y1={lineY}
          x2={lineX2}
          y2={lineY}
          stroke="#38bdf8"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.6"
        />

        {/* Segment AB (bold) */}
        <line x1={Ax} y1={Ay} x2={Bx} y2={By} stroke="#38bdf8" strokeWidth="4" />

        {/* Points A and B */}
        <circle cx={Ax} cy={Ay} r="5" fill="#fbbf24" />
        <circle cx={Bx} cy={By} r="5" fill="#fbbf24" />

        {/* Labels */}
        <text x={Ax - 32} y={Ay - 10} fill="#e5e7eb" fontSize="12">
          A(-2, 2)
        </text>
        <text x={Bx + 8} y={By - 10} fill="#e5e7eb" fontSize="12">
          B(4, 2)
        </text>

        {/* Line label */}
        <text x={x2px(xmin) + 8} y={lineY - 8} fill="#7dd3fc" fontSize="12">
          y = 2
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-sm text-slate-300">
        A horizontal line at y = 2 with the finite segment between A and B emphasized.
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">18.4 Line Segments</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Any two distinct points determine a unique line. While that line stretches without end in
          both directions, many problems focus only on the finite portion between those two points:
          a line segment.
        </p>

        <p>
          For instance, joining the points{" "}
          <MathInline expr="(4,\,2)" ariaLabel="open parenthesis four comma two close parenthesis" />{" "}
          and{" "}
          <MathInline
            expr="(-2,\,2)"
            ariaLabel="open parenthesis negative two comma two close parenthesis"
          />{" "}
          produces a horizontal segment that lies on the line{" "}
          <MathInline expr="y = 2" ariaLabel="y equals 2" />.
        </p>

        <MustKnow>
          The line is infinite; the segment is the bounded piece between two endpoints. If we name
          the endpoints <MathInline expr="A" /> and <MathInline expr="B" />, we denote the segment by{" "}
          <MathInline expr="\,\overline{AB}\," ariaLabel="segment A B" /> and the entire line by{" "}
          <MathInline expr="\;\overleftrightarrow{AB}\;" ariaLabel="line A B" />.
        </MustKnow>

        <CoordinateSegmentFigure />

        <p>
          Big picture: lines model infinite extent, but when a question mentions a “segment,” it’s
          calling out the precise part between the two specified points. Keep that distinction in
          mind when interpreting diagrams and wording.
        </p>
      </article>
    </main>
  );
}