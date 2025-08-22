import type { Metadata } from "next";
import katex from "katex";
// IMPORTANT: Ensure KaTeX styles are globally available (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.4.1 Graphing Lines | Coordinate Geometry",
  description:
    "Learn how two points uniquely determine a line on the xy‑plane. Plot points, connect them, and use slope formulas rendered with KaTeX. Includes an MCQ and a quick sufficiency drill.",
};

function renderMath(tex: string, displayMode = false) {
  return {
    __html: katex.renderToString(tex, {
      throwOnError: false,
      displayMode,
      output: "htmlAndMathml",
      strict: "ignore",
    }),
  };
}

function MathInline({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  return (
    <span
      className="not-prose align-baseline"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={renderMath(tex, false)}
    />
  );
}

function MathBlock({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  return (
    <div
      className="my-3 overflow-x-auto"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={renderMath(tex, true)}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.4.1 Graphing Lines
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A single straight line in the coordinate plane is completely specified
          by two distinct points. To graph it, place both points accurately and
          draw the straight path passing through them.
        </p>

        <MustKnow>
          • Two distinct points uniquely determine a line.{" "}
          <br />
          • To plot a point (x, y), first move horizontally by x, then move
          vertically by y.{" "}
          <br />
          • The slope of the line through{" "}
          <MathInline tex="(x_1,y_1)" ariaLabel="x one comma y one" /> and{" "}
          <MathInline tex="(x_2,y_2)" ariaLabel="x two comma y two" /> is{" "}
          <MathInline
            tex="m=\dfrac{y_2-y_1}{x_2-x_1}"
            ariaLabel="m equals the difference y two minus y one over x two minus x one"
          />
          . Using a known point, the point–slope form is{" "}
          <MathInline
            tex="y-y_1=m(x-x_1)"
            ariaLabel="y minus y one equals m times x minus x one"
          />
          .
        </MustKnow>

        <section aria-labelledby="example-a-b" className="space-y-4">
          <h3 id="example-a-b" className="text-xl font-semibold text-white">
            Example: Line through A(2, 2) and B(6, 6)
          </h3>
          <p>
            Start at the origin <MathInline tex="(0,0)" ariaLabel="zero zero" />
            . To place A, go 2 units to the right and 2 units up, landing at{" "}
            <MathInline tex="(2,2)" ariaLabel="two two" />. To place B, go 6
            units right and 6 units up to{" "}
            <MathInline tex="(6,6)" ariaLabel="six six" />. Draw the straight
            line passing through A and B.
          </p>

          <MathBlock
            tex={String.raw`m=\frac{6-2}{6-2}=1 \quad \Rightarrow \quad y-2=1\,(x-2)\;\;\text{so}\;\; y=x`}
            ariaLabel="The slope equals six minus two over six minus two equals one; so y minus two equals one times x minus two, hence y equals x."
          />

          <figure className="mx-auto w-full max-w-md rounded-md bg-gray-800 p-3">
            <svg
              role="img"
              aria-labelledby="graph-title graph-desc"
              viewBox="0 0 220 220"
              className="h-auto w-full"
            >
              <title id="graph-title">Graph of line through A and B</title>
              <desc id="graph-desc">
                Coordinate axes with points A at two comma two and B at six
                comma six. The line through them has slope one.
              </desc>

              {/* Background */}
              <rect x="0" y="0" width="220" height="220" fill="#111827" />

              {/* Axes */}
              <g stroke="#9CA3AF" strokeWidth="1">
                <line x1="20" y1="200" x2="210" y2="200" /> {/* x-axis */}
                <line x1="20" y1="200" x2="20" y2="10" /> {/* y-axis */}
              </g>

              {/* Ticks and labels (1 to 8) */}
              <g fontSize="10" fill="#D1D5DB" aria-hidden="true">
                {Array.from({ length: 8 }).map((_, i) => {
                  const k = i + 1;
                  const px = 20 + k * 20;
                  const py = 200 - k * 20;
                  return (
                    <g key={k}>
                      {/* x ticks */}
                      <line x1={px} y1={200} x2={px} y2={195} stroke="#4B5563" />
                      <text x={px} y={210} textAnchor="middle">
                        {k}
                      </text>
                      {/* y ticks */}
                      <line x1={20} y1={py} x2={25} y2={py} stroke="#4B5563" />
                      <text x={10} y={py + 3} textAnchor="middle">
                        {k}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Line y = x in this scaled grid (from near axes bounds) */}
              <line
                x1="20"
                y1="200"
                x2="200"
                y2="20"
                stroke="#60A5FA"
                strokeWidth="2"
              />

              {/* Points A(2,2) and B(6,6) */}
              {/* Scale: unit = 20px, origin at (20,200) */}
              <g>
                {/* A(2,2) => x = 20 + 2*20 = 60, y = 200 - 2*20 = 160 */}
                <circle cx="60" cy="160" r="4" fill="#F59E0B" />
                <text
                  x="68"
                  y="156"
                  fontSize="12"
                  fill="#FDE68A"
                  aria-hidden="true"
                >
                  A(2,2)
                </text>

                {/* B(6,6) => x = 20 + 6*20 = 140, y = 200 - 6*20 = 80 */}
                <circle cx="140" cy="80" r="4" fill="#F59E0B" />
                <text
                  x="148"
                  y="76"
                  fontSize="12"
                  fill="#FDE68A"
                  aria-hidden="true"
                >
                  B(6,6)
                </text>
              </g>
            </svg>
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              Graphing a line from two plotted points. The line extends
              infinitely; the segment between A and B is just one portion of it.
            </figcaption>
          </figure>

          <p>
            Remember: the infinite line continues in both directions, while the
            line segment is the finite piece between A and B (including the
            endpoints).
          </p>
        </section>

        <MCQExample
          number={41}
          prompt="What is the slope of the line passing through (2,2) and (6,6)?"
          options={["1/2", "1", "2", "4", "8"]}
          correct="1"
          solution={
            <>
              <p>
                Use{" "}
                <MathInline
                  tex="m=\dfrac{y_2-y_1}{x_2-x_1}"
                  ariaLabel="m equals y two minus y one over x two minus x one"
                />{" "}
                with{" "}
                <MathInline tex="(x_1,y_1)=(2,2)" ariaLabel="x1 y1 equals two two" />{" "}
                and{" "}
                <MathInline tex="(x_2,y_2)=(6,6)" ariaLabel="x2 y2 equals six six" />
                .
              </p>
              <MathBlock
                tex={String.raw`m=\frac{6-2}{6-2}=1`}
                ariaLabel="m equals six minus two over six minus two equals one."
              />
              <p>So the slope is 1.</p>
            </>
          }
        />

        <section aria-labelledby="ds-mini" className="space-y-3">
          <h3 id="ds-mini" className="text-xl font-semibold text-white">
            Quick Sufficiency Check: Can we determine the slope?
          </h3>
          <p>
            A line goes through{" "}
            <MathInline tex="(x_1,y_1)" ariaLabel="x one y one" /> and{" "}
            <MathInline tex="(x_2,y_2)" ariaLabel="x two y two" />. What is the
            slope <MathInline tex="m" ariaLabel="m" />?
          </p>
          <ul className="list-disc space-y-2 ps-6">
            <li>Statement (1): x₂ − x₁ = 4</li>
            <li>Statement (2): y₂ − y₁ = 4</li>
          </ul>
          <div className="rounded-md border border-gray-700 bg-gray-800 p-4">
            <p className="font-semibold text-gray-200">Answer: C</p>
            <div className="mt-2 space-y-2 text-gray-300">
              <p>
                From the slope formula{" "}
                <MathInline
                  tex="m=\dfrac{y_2-y_1}{x_2-x_1}"
                  ariaLabel="m equals y two minus y one over x two minus x one"
                />
                :
              </p>
              <p>
                • (1) alone gives the denominator but not the numerator → the
                slope could be many values. Not sufficient.
              </p>
              <p>
                • (2) alone gives the numerator but not the denominator → again,
                many slopes possible. Not sufficient.
              </p>
              <p>
                • Together,{" "}
                <MathInline tex="y_2-y_1=4" ariaLabel="y two minus y one equals four" />{" "}
                and{" "}
                <MathInline tex="x_2-x_1=4" ariaLabel="x two minus x one equals four" />{" "}
                imply{" "}
                <MathInline tex="m=\dfrac{4}{4}=1" ariaLabel="m equals four over four equals one" />
                . Sufficient.
              </p>
            </div>
          </div>
        </section>

        <p>
          Bottom line: plot accurately, connect the points, and use{" "}
          <MathInline tex="m=\dfrac{\Delta y}{\Delta x}" ariaLabel="m equals delta y over delta x" />{" "}
          or point–slope form{" "}
          <MathInline tex="y-y_1=m(x-x_1)" ariaLabel="y minus y one equals m times x minus x one" />{" "}
          to formalize the equation.
        </p>
      </article>
    </main>
  );
}