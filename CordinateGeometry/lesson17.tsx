import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.6.3 Equations for Horizontal and Vertical Lines | Coordinate Geometry",
  description:
    "Learn how to write equations for horizontal lines (y = b) and vertical lines (x = a), see them on a graph, and practice with a quick multiple‑choice and a data sufficiency example.",
};

function HVSketch() {
  // Simple, accessible SVG to illustrate x = -3 (vertical) and y = -1 (horizontal)
  // Coordinate range: [-5, 5] both axes
  const viewBox = "-6 -6 12 12"; // x,y,width,height in math coords
  return (
    <figure className="mx-auto my-6 w-full max-w-xl">
      <svg
        viewBox={viewBox}
        role="img"
        aria-labelledby="hv-title hv-desc"
        className="h-auto w-full rounded-lg bg-slate-800/40 ring-1 ring-slate-700"
      >
        <title id="hv-title">Horizontal and vertical lines on the xy‑plane</title>
        <desc id="hv-desc">
          The vertical line A is x equals negative 3. The horizontal line B is y equals negative 1. The axes are labeled and ticked from negative five to five.
        </desc>

        {/* Grid */}
        <g stroke="#334155" strokeWidth="0.02">
          {Array.from({ length: 11 }, (_, i) => i - 5).map((t) => (
            <g key={t}>
              <line x1={-5.5} y1={t} x2={5.5} y2={t} />
              <line x1={t} y1={-5.5} x2={t} y2={5.5} />
            </g>
          ))}
        </g>

        {/* Axes */}
        <g stroke="#94a3b8" strokeWidth="0.06">
          <line x1={-5.5} y1={0} x2={5.5} y2={0} />
          <line x1={0} y1={-5.5} x2={0} y2={5.5} />
        </g>

        {/* Axis labels */}
        <g fill="#cbd5e1" fontSize="0.6">
          <text x={5.2} y={-0.3}>x</text>
          <text x={0.2} y={5.2}>y</text>
        </g>

        {/* Vertical line A: x = -3 */}
        <g>
          <line x1={-3} y1={-5.5} x2={-3} y2={5.5} stroke="#60a5fa" strokeWidth="0.1" />
          <text x={-3.2} y={4.6} fill="#60a5fa" fontSize="0.7">A</text>
        </g>

        {/* Horizontal line B: y = -1 */}
        <g>
          <line x1={-5.5} y1={-1} x2={5.5} y2={-1} stroke="#f59e0b" strokeWidth="0.1" />
          <text x={4.2} y={-1.2} fill="#f59e0b" fontSize="0.7">B</text>
        </g>

        {/* Ticks on axes */}
        <g stroke="#94a3b8" strokeWidth="0.05">
          {Array.from({ length: 11 }, (_, i) => i - 5).map((t) => (
            <g key={`ticks-${t}`}>
              {/* x-axis ticks */}
              <line x1={t} y1={-0.2} x2={t} y2={0.2} />
              {/* y-axis ticks */}
              <line x1={-0.2} y1={t} x2={0.2} y2={t} />
            </g>
          ))}
        </g>

        {/* Tick labels */}
        <g fill="#94a3b8" fontSize="0.5">
          {Array.from({ length: 11 }, (_, i) => i - 5).map((t) => (
            <g key={`labels-${t}`}>
              {t !== 0 && (
                <>
                  <text x={t - 0.15} y={-0.5}>{t}</text>
                  <text x={0.3} y={t + 0.2}>{t}</text>
                </>
              )}
            </g>
          ))}
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-400">
        Figure: Line A is vertical with equation x = −3. Line B is horizontal with equation y = −1.
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
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6.3 Equations for Horizontal and Vertical Lines
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many lines in the plane are conveniently written in slope–intercept form, <InlineMath math={"y = mx + b"} />. Two important families don’t quite fit that mold:
          horizontal lines and vertical lines. Their equations are even simpler once you focus on which coordinate stays constant.
        </p>

        <HVSketch />

        <p>
          On the sketch above, every point on line A shares the same x‑coordinate, −3. Likewise, every point on line B shares the same y‑coordinate, −1. So their equations are:
        </p>

        <div className="rounded-md bg-slate-800/60 p-4 ring-1 ring-slate-700">
          <BlockMath math={"x = -3 \\quad\\text{and}\\quad y = -1"} />
        </div>

        <MustKnow>
          <p className="mb-2">
            Vertical lines keep x fixed; horizontal lines keep y fixed.
          </p>
          <BlockMath math={"\\text{Vertical: } x = a \\quad\\;\\;\\; \\text{Horizontal: } y = b"} />
          <p className="mt-2">
            Here, a is the x‑intercept of the vertical line and b is the y‑intercept of the horizontal line. A horizontal line has slope 0; a vertical line’s slope is undefined.
          </p>
        </MustKnow>

        <p>
          The coordinate axes are just special cases of these families:
        </p>

        <MustKnow>
          <BlockMath math={"\\text{x-axis: } y = 0 \\qquad \\text{y-axis: } x = 0"} />
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which equation represents the horizontal line passing through the point (2, −4)?"
          options={["x = 2", "y = 2", "y = −4", "x = −4", "y = 4"]}
          correct="y = −4"
          solution={
            <>
              <p>
                A horizontal line has the form <InlineMath math={"y = b"} />. Plug in the point (2, −4): y must be −4 for all x. So the equation is <InlineMath math={"y = -4"} />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Data Sufficiency: Equation of a vertical line"
          statements={[
            "Line L passes through (5, −2). What is the equation of L?",
            "1) L also passes through (5, 7).",
            "2) L is parallel to the y-axis.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need a unique equation for L.
              </p>
              <p>
                <strong>Statement (1):</strong> Points (5, −2) and (5, 7) have the same x‑coordinate. A line through them must be vertical, so x is constantly 5. Thus L is <InlineMath math={"x = 5"} />. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> If L is parallel to the y‑axis, it’s vertical. Since L passes through (5, −2), its equation is <InlineMath math={"x = 5"} />. Sufficient.
              </p>
              <p>
                Each statement alone determines the line: choose D.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: when a line is horizontal, fix y to a constant; when a line is vertical, fix x to a constant. These forms are faster and clearer than trying to force <InlineMath math={"y = mx + b"} /> where it doesn’t apply.
        </p>
      </article>
    </main>
  );
}