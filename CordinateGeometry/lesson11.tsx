import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "18.5.4 Horizontal Lines (Zero Slope) | Coordinate Geometry",
  description:
    "Understand why horizontal lines have slope 0, how y-intercepts place them in quadrants, and practice with a quick multiple‑choice item using exponent and fraction logic.",
};

type KaTeXProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

function KaTeX({ expr, display = false, ariaLabel, className }: KaTeXProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel || expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
          18.5.4 Horizontal Lines (Zero Slope)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A line that runs parallel to the x‑axis is horizontal, and its slope is
          always zero. From the slope formula{" "}
          <KaTeX expr="m=\dfrac{\Delta y}{\Delta x}" /> we see why: for any two
          distinct points on a horizontal line,{" "}
          <KaTeX expr="\Delta y = 0" /> while{" "}
          <KaTeX expr="\Delta x \ne 0" />. A fraction with a zero numerator and
          nonzero denominator equals zero, so <KaTeX expr="m=0" ariaLabel="m equals zero" />.
        </p>

        <MustKnow>
          On a horizontal line all points share the same y‑coordinate. Because
          the vertical change is zero between any two points, the slope must be
          zero: <KaTeX expr="m=\dfrac{0}{\Delta x}=0" ariaLabel="m equals zero divided by delta x equals zero" />.
        </MustKnow>

        <section aria-labelledby="figure-horizontal-line" className="space-y-3">
          <h3 id="figure-horizontal-line" className="sr-only">
            Example of a horizontal line
          </h3>
          <p>
            Here is a simple sketch: points A and B sit at the same height in
            the plane, so the line through them is horizontal and has slope 0.
          </p>
          <div className="rounded-md border border-gray-700 bg-gray-900 p-4">
            <svg
              viewBox="0 0 320 180"
              role="img"
              aria-labelledby="svg-title svg-desc"
              className="h-40 w-full"
            >
              <title id="svg-title">Horizontal line with points A and B</title>
              <desc id="svg-desc">
                The x and y axes are shown. A horizontal line at y = 2 passes
                through points A at x = -2 and B at x = 3. Both points share the
                same y-coordinate.
              </desc>
              {/* Axes */}
              <line x1="10" y1="150" x2="310" y2="150" stroke="#64748b" strokeWidth="1" />
              <line x1="40" y1="10" x2="40" y2="170" stroke="#64748b" strokeWidth="1" />
              {/* Ticks */}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`xtick-${i}`}
                  x1={40 + i * 27}
                  y1="147"
                  x2={40 + i * 27}
                  y2="153"
                  stroke="#64748b"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`ytick-${i}`}
                  x1="37"
                  y1={150 - i * 22}
                  x2="43"
                  y2={150 - i * 22}
                  stroke="#64748b"
                  strokeWidth="1"
                />
              ))}
              {/* Horizontal line y=constant */}
              <line x1="10" y1="90" x2="310" y2="90" stroke="#22c55e" strokeWidth="2" />
              {/* Points A and B */}
              <circle cx="100" cy="90" r="4" fill="#e2e8f0" />
              <text x="108" y="86" fontSize="12" fill="#e2e8f0">
                A(-2, 2)
              </text>
              <circle cx="230" cy="90" r="4" fill="#e2e8f0" />
              <text x="238" y="86" fontSize="12" fill="#e2e8f0">
                B(3, 2)
              </text>
              {/* Axis labels */}
              <text x="300" y="165" fontSize="12" fill="#94a3b8">
                x
              </text>
              <text x="25" y="20" fontSize="12" fill="#94a3b8">
                y
              </text>
            </svg>
          </div>
        </section>

        <section aria-labelledby="quadrant-facts" className="space-y-3">
          <h3 id="quadrant-facts" className="text-lg font-semibold text-white">
            Where do horizontal lines lie on the plane?
          </h3>
          <p>Use the y‑intercept to locate a horizontal line:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              If <KaTeX expr="b>0" /> in <KaTeX expr="y=b" />, the line sits
              above the x‑axis and crosses Quadrants I and II.
            </li>
            <li>
              If <KaTeX expr="b=0" />, the line is the x‑axis itself and does
              not pass through any quadrant.
            </li>
            <li>
              If <KaTeX expr="b<0" />, the line lies below the x‑axis and
              crosses Quadrants III and IV.
            </li>
          </ul>

          <MustKnow>
            For a horizontal line <KaTeX expr="y=b" />, the sign of{" "}
            <KaTeX expr="b" /> determines location: positive places the line in
            Quadrants I–II, zero makes it coincide with the x‑axis, and negative
            puts it in Quadrants III–IV.
          </MustKnow>
        </section>

        <section aria-labelledby="mcq-example" className="space-y-3">
          <h3 id="mcq-example" className="text-lg font-semibold text-white">
            Quick Check
          </h3>

          <MCQExample
            number={12}
            prompt={
              <>
                The equation of line k is <KaTeX expr="y=mx+b" /> where{" "}
                <KaTeX expr="m" /> is the slope. If line k is parallel to the
                x‑axis and <KaTeX expr="n\ne 0" />, which statements must be
                true?
                <br />
                I. <KaTeX expr="n^{m}=1" />
                <br />
                II. <KaTeX expr="mnpq=0" />
                <br />
                III. <KaTeX expr="\dfrac{n}{m}=0" />
              </>
            }
            options={[
              "I only",
              "II only",
              "I and II only",
              "II and III only",
              "I, II, and III",
            ]}
            correct="I and II only"
            solution={
              <>
                <p>
                  If k is parallel to the x‑axis, then k is horizontal and{" "}
                  <KaTeX expr="m=0" />.
                </p>
                <p>
                  I. With <KaTeX expr="m=0" /> and <KaTeX expr="n\ne 0" />,{" "}
                  <KaTeX expr="n^{0}=1" />. So I must be true.
                </p>
                <p>
                  II. Since <KaTeX expr="m=0" />,{" "}
                  <KaTeX expr="mnpq=0\cdot n p q=0" /> for any{" "}
                  <KaTeX expr="n,p,q" />. So II must be true.
                </p>
                <p>
                  III. <KaTeX expr="\dfrac{n}{m}=\dfrac{n}{0}" /> is undefined,
                  not 0. So III is not necessarily true.
                </p>
                <p>Only I and II must hold.</p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Up next: vertical lines, which have an undefined slope.
        </p>
      </article>
    </main>
  );
}