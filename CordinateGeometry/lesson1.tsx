import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.2 The Coordinate Plane | Coordinate Geometry",
  description:
    "A clear tour of the xy‑plane: axes, origin, quadrants, and sign patterns. Includes an accessible diagram, a quick multiple‑choice check, and one Data Sufficiency drill with full reasoning.",
};

// Server component-safe KaTeX renderer
function Math({
  expr,
  display = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  const Wrapper = display ? "div" : "span";
  return (
    <Wrapper
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function XYPlaneDiagram() {
  return (
    <figure className="mx-auto w-full max-w-xl rounded-lg border border-gray-800 bg-gray-900/40 p-4 shadow-sm">
      <svg
        role="img"
        aria-labelledby="xy-title xy-desc"
        viewBox="-12 -12 24 24"
        className="h-auto w-full"
      >
        <title id="xy-title">Overview of the coordinate plane</title>
        <desc id="xy-desc">
          Horizontal x-axis and vertical y-axis crossing at the origin. Quadrants
          I, II, III, and IV are labeled with the sign patterns of x and y.
        </desc>
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 z" fill="#a3a3a3" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="-11"
          y1="0"
          x2="11"
          y2="0"
          stroke="#a3a3a3"
          strokeWidth="0.15"
          markerEnd="url(#arrow)"
          aria-hidden="true"
        />
        <line
          x1="0"
          y1="11"
          x2="0"
          y2="-11"
          stroke="#a3a3a3"
          strokeWidth="0.15"
          markerEnd="url(#arrow)"
          aria-hidden="true"
        />

        {/* Origin */}
        <circle cx="0" cy="0" r="0.18" fill="#60a5fa" />

        {/* Grid tick labels (light) */}
        {[-10, -5, 5, 10].map((x) => (
          <g key={`xtick-${x}`} aria-hidden="true">
            <line
              x1={x}
              y1="-0.3"
              x2={x}
              y2="0.3"
              stroke="#525252"
              strokeWidth="0.08"
            />
          </g>
        ))}
        {[-10, -5, 5, 10].map((y) => (
          <g key={`ytick-${y}`} aria-hidden="true">
            <line
              x1="-0.3"
              y1={y}
              x2="0.3"
              y2={y}
              stroke="#525252"
              strokeWidth="0.08"
            />
          </g>
        ))}

        {/* Quadrant labels */}
        <text x="5.5" y="-5.5" fill="#e5e7eb" fontSize="1.2" textAnchor="middle">
          I
        </text>
        <text x="-5.5" y="-5.5" fill="#e5e7eb" fontSize="1.2" textAnchor="middle">
          II
        </text>
        <text x="-5.5" y="5.5" fill="#e5e7eb" fontSize="1.2" textAnchor="middle">
          III
        </text>
        <text x="5.5" y="5.5" fill="#e5e7eb" fontSize="1.2" textAnchor="middle">
          IV
        </text>

        {/* Sign patterns */}
        <text x="5.5" y="-3.8" fill="#9ca3af" fontSize="0.9" textAnchor="middle">
          (+,+)
        </text>
        <text x="-5.5" y="-3.8" fill="#9ca3af" fontSize="0.9" textAnchor="middle">
          (-,+)
        </text>
        <text x="-5.5" y="3.2" fill="#9ca3af" fontSize="0.9" textAnchor="middle">
          (-,-)
        </text>
        <text x="5.5" y="3.2" fill="#9ca3af" fontSize="0.9" textAnchor="middle">
          (+,-)
        </text>

        {/* Axis labels */}
        <text x="10.5" y="-0.6" fill="#d1d5db" fontSize="0.9" textAnchor="end">
          x
        </text>
        <text x="0.6" y="-10.2" fill="#d1d5db" fontSize="0.9">
          y
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-sm text-gray-400">
        Figure 1: The xy‑plane with axes, origin, and the four quadrants
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
          18.2 The coordinate plane
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Coordinate geometry questions live on the{" "}
          <Math expr="xy" />‑plane. Picture two number lines: a horizontal one
          called the <strong>x‑axis</strong> and a vertical one called the{" "}
          <strong>y‑axis</strong>. They cross at the{" "}
          <strong>origin</strong>, the point{" "}
          <Math expr="(0,\,0)" ariaLabel="zero comma zero" />.
        </p>

        <p>
          Any location in this plane can be named with an ordered pair{" "}
          <Math expr="(x,\,y)" ariaLabel="x comma y" />. The first coordinate
          tells you how far to move left or right; the second tells you how far
          to move down or up. The axes slice the plane into four regions called{" "}
          <strong>quadrants</strong>, labeled I, II, III, and IV.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-1">
            <li>
              x‑axis: <Math expr="y = 0" ariaLabel="y equals zero" />
            </li>
            <li>
              y‑axis: <Math expr="x = 0" ariaLabel="x equals zero" />
            </li>
            <li>
              Origin: <Math expr="(0,\,0)" ariaLabel="zero comma zero" />
            </li>
            <li className="mt-1">
              Quadrant sign patterns:
              <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-300 md:grid-cols-4">
                <span>
                  I: <Math expr="x>0,\ y>0" />
                </span>
                <span>
                  II: <Math expr="x<0,\ y>0" />
                </span>
                <span>
                  III: <Math expr="x<0,\ y<0" />
                </span>
                <span>
                  IV: <Math expr="x>0,\ y<0" />
                </span>
              </div>
            </li>
          </ul>
        </MustKnow>

        <XYPlaneDiagram />

        <p>
          Keep these identities in mind. For example, points on the x‑axis have{" "}
          <Math expr="y=0" />, and points on the y‑axis have <Math expr="x=0" />.
          A quick sign check tells you a point’s quadrant at a glance.
        </p>

        <MCQExample
          number={1}
          prompt={
            <>
              Which quadrant contains the point <Math expr="(-3,\,4)" />?
            </>
          }
          options={["I", "II", "III", "IV"]}
          correct="II"
          solution={
            <>
              <p>
                The x‑coordinate is negative and the y‑coordinate is positive. By
                the sign patterns, that’s Quadrant II.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Locating a point on the xy‑plane"
          statements={[
            "Point P = (a, b) lies in the coordinate plane. In which quadrant does P lie?",
            "1) a < 0",
            "2) b > 0",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want P’s quadrant, which is determined by the signs of{" "}
                <Math expr="a" /> and <Math expr="b" />.
              </p>
              <p>
                <strong>Statement (1):</strong> <Math expr="a<0" />. x is
                negative, so P is in Quadrant II or III depending on{" "}
                <Math expr="b" />. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> <Math expr="b>0" />. y is
                positive, so P is in Quadrant I or II depending on{" "}
                <Math expr="a" />. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> <Math expr="a<0" /> and{" "}
                <Math expr="b>0" /> place P in Quadrant II uniquely. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Big picture: the axes are the reference lines{" "}
          <Math expr="x=0" /> and <Math expr="y=0" />, the origin is{" "}
          <Math expr="(0,\,0)" />, and quadrant labels follow the sign pattern
          of <Math expr="(x,\,y)" />. With these anchors, you can read the
          plane quickly and accurately.
        </p>
      </article>
    </main>
  );
}