import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

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
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
    trust: false,
  });

  return (
    <span
      className={display ? `block my-4 ${className}` : `inline ${className}`}
      aria-label={ariaLabel ?? expr}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "18.7 Parallel Lines | Coordinate Geometry",
  description:
    "Understand what makes lines parallel on the coordinate plane, how slope controls parallelism, and practice identifying a parallel line by converting to slope-intercept form.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.7 Parallel Lines
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the coordinate plane, two lines are parallel precisely when they have
          identical slopes and different y‑intercepts. Equal slopes guarantee the
          lines tilt the same way and never meet.
        </p>

        <p>
          For instance, consider the two equations below. Both lines share slope
          2/3, but their intercepts differ, so they are parallel:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <Math expr={"y=\\tfrac{2}{3}x+1"} display />
          <Math expr={"y=\\tfrac{2}{3}x-1"} display />
        </div>

        <MustKnow>
          Parallel lines have the same slope and distinct y‑intercepts. If two
          lines can be written in slope‑intercept form y = mx + b with the same m
          and different b values, they will never intersect.
        </MustKnow>

        <section aria-labelledby="identify-parallel">
          <h3 id="identify-parallel" className="sr-only">
            Identify a parallel line example
          </h3>

          <MCQExample
            number={30}
            prompt={
              <>
                In the coordinate plane, line G is given by{" "}
                <Math expr={"y=-3x+6"} ariaLabel="y equals negative 3 x plus 6" />.
                Which equation represents a line parallel to G?
              </>
            }
            options={[
              "x = –3y + 2",
              "x = –3y – 2",
              "x = (1/2)y + 2",
              "x = (1/3)y – 2",
              "x = –(1/3)y – 2",
            ]}
            correct="x = –(1/3)y – 2"
            solution={
              <>
                <p>
                  A line parallel to G must also have slope −3. Convert each choice
                  to slope‑intercept form y = mx + b to read off its slope.
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-gray-200">Choice A</p>
                    <Math expr={"x=-3y+2\\;\\Rightarrow\\; y=-\\tfrac{1}{3}x+\\tfrac{2}{3}"} />
                    <p>Slope is −1/3, not −3.</p>
                  </div>

                  <div>
                    <p className="text-gray-200">Choice B</p>
                    <Math expr={"x=-3y-2\\;\\Rightarrow\\; y=-\\tfrac{1}{3}x-\\tfrac{2}{3}"} />
                    <p>Slope is −1/3, not −3.</p>
                  </div>

                  <div>
                    <p className="text-gray-200">Choice C</p>
                    <Math expr={"x=\\tfrac{1}{2}y+2\\;\\Rightarrow\\; y=2x-4"} />
                    <p>Slope is 2, not −3.</p>
                  </div>

                  <div>
                    <p className="text-gray-200">Choice D</p>
                    <Math expr={"x=\\tfrac{1}{3}y-2\\;\\Rightarrow\\; y=3x+6"} />
                    <p>Slope is 3, not −3.</p>
                  </div>

                  <div>
                    <p className="text-gray-200">Choice E</p>
                    <Math expr={"x=-\\tfrac{1}{3}y-2\\;\\Rightarrow\\; y=-3x-6"} />
                    <p>Here the slope is −3, matching line G. This is the parallel line.</p>
                  </div>
                </div>
              </>
            }
          />
        </section>

        <p>
          Takeaway: to test for parallelism, place equations in the form{" "}
          <Math expr={"y=mx+b"} ariaLabel="y equals m x plus b" /> and compare the
          slopes. Matching slopes with different intercepts means the lines never cross.
        </p>
      </article>
    </main>
  );
}