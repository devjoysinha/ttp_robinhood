import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "18.1 Coordinate Geometry — Introduction | GMAT",
  description:
    "A quick orientation to GMAT coordinate geometry: what’s covered, what’s provided on test day, and the core formulas you’ll use (slope, distance, midpoint), rendered with KaTeX.",
};

function KMath({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
  });
  return (
    <span
      className={display ? "block my-2 overflow-x-auto" : "inline"}
      role="math"
      aria-label={ariaLabel ?? expr}
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
        <h2 className="mt-1 text-lg font-semibold text-gray-200">18.1 Introduction</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          This chapter gives you a working tour of the coordinate plane and the skills that go with it:
          reading and plotting points, understanding lines and slope, and using formulas to measure
          distance and midpoints. You’ll also see how inequalities appear on graphs.
        </p>

        <MustKnow>
          Coordinate geometry is still part of the GMAT. Expect questions that use the x–y plane,
          lines, and basic graph interpretation.
        </MustKnow>

        <p>
          Beyond the coordinate plane, the current GMAT can still touch on simple measurements such as
          area and perimeter of common shapes (squares, triangles, circles). If a problem requires a
          geometry formula that isn’t part of coordinate geometry, the test will supply that formula in
          the prompt.
        </p>

        <MustKnow>
          If a non–coordinate-geometry formula is needed (for example, the area of a circle), the
          question stem will provide it. You should still be comfortable applying such formulas when
          given.
        </MustKnow>

        <section aria-labelledby="core-tools">
          <h3 id="core-tools" className="text-xl font-semibold text-white">
            Core tools you’ll use
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Slope of a line from two points:
              <div className="mt-1">
                <KMath
                  display
                  expr="m=\dfrac{y_2-y_1}{x_2-x_1}"
                  ariaLabel="m equals the change in y over the change in x"
                />
              </div>
            </li>
            <li>
              Distance between two points:
              <div className="mt-1">
                <KMath
                  display
                  expr="d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}"
                  ariaLabel="Distance equals the square root of the change in x squared plus the change in y squared"
                />
              </div>
            </li>
            <li>
              Midpoint of a segment:
              <div className="mt-1">
                <KMath
                  display
                  expr="\left(\dfrac{x_1+x_2}{2},\ \dfrac{y_1+y_2}{2}\right)"
                  ariaLabel="Midpoint has x coordinate x1 plus x2 over 2 and y coordinate y1 plus y2 over 2"
                />
              </div>
            </li>
            <li>
              Slope–intercept form of a line:
              <div className="mt-1">
                <KMath
                  display
                  expr="y=mx+b"
                  ariaLabel="y equals m x plus b"
                />
              </div>
            </li>
          </ul>
        </section>

        <section aria-labelledby="what-to-expect">
          <h3 id="what-to-expect" className="text-xl font-semibold text-white">
            What to expect on test day
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Plotting and interpreting points and lines on the x–y plane</li>
            <li>Computing slope, distance, and midpoints quickly and accurately</li>
            <li>Recognizing horizontal and vertical lines and their equations</li>
            <li>Reading and shading regions for linear inequalities</li>
            <li>
              Occasionally applying basic shape measurements; if a non‑coordinate formula is needed,
              it will be provided in the question stem
            </li>
          </ul>
        </section>

        <p>
          Use the formulas above as your go‑to toolkit. As you move through the chapter, you’ll practice
          spotting which tool a problem calls for and executing with minimal algebra.
        </p>
      </article>
    </main>
  );
}