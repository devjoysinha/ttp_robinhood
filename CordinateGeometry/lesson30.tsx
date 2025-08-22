import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '18.11.4 “Less Than or Equal To” Inequalities | Coordinate Geometry',
  description:
    "Understand how to graph y ≤ mx + b: draw a solid boundary line and shade the region on or below it. Includes a worked example with plug‑in checks and a quick multiple‑choice question.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, { throwOnError: false }),
      }}
    />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <div
      aria-label={ariaLabel ?? expr}
      className="my-4 overflow-x-auto"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, {
          throwOnError: false,
          displayMode: true,
        }),
      }}
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
          18.11.4 The “less than or equal to” inequality
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For a strict “less than” inequality, the solution set lies strictly on one
          side of the boundary line and does not include the line itself. When the
          symbol is “less than or equal to,” solutions include every point on the
          line as well as the region beneath it.
        </p>

        <p>
          Concretely, consider the inequality{" "}
          <KInline expr={`y \\le 2x + 4`} ariaLabel="y is less than or equal to 2x plus 4" />.
          To sketch it, graph the boundary line{" "}
          <KInline expr={`y = 2x + 4`} /> as a solid line (not dashed) and then shade the
          half‑plane on or below that line.
        </p>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <h3 className="mb-2 font-semibold text-white">Sample points for y ≤ 2x + 4</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              For <KInline expr={`x=0`} />:{" "}
              <KInline expr={`y \\le 2(0)+4 \\Rightarrow y \\le 4`} /> → example point{" "}
              <KInline expr={`(0,\\,4)`} /> lies on the boundary.
            </li>
            <li>
              For <KInline expr={`x=1`} />:{" "}
              <KInline expr={`y \\le 2(1)+4 = 6`} /> →{" "}
              <KInline expr={`(1,\\,6)`} /> is on the boundary; anything below also works.
            </li>
            <li>
              For <KInline expr={`x=2`} />:{" "}
              <KInline expr={`y \\le 2(2)+4 = 8`} /> →{" "}
              <KInline expr={`(2,\\,8)`} /> is valid; so are points with smaller y.
            </li>
            <li>
              For <KInline expr={`x=3`} />:{" "}
              <KInline expr={`y \\le 2(3)+4 = 10`} /> →{" "}
              <KInline expr={`(3,\\,10)`} /> is valid; anything with y ≤ 10 works.
            </li>
            <li>
              For <KInline expr={`x=4`} />:{" "}
              <KInline expr={`y \\le 2(4)+4 = 12`} /> →{" "}
              <KInline expr={`(4,\\,12)`} /> is valid; so is any point directly below it.
            </li>
          </ul>
        </div>

        <MustKnow>
          The graph of{" "}
          <KInline expr={`y \\le mx + b`} ariaLabel="y is less than or equal to m x plus b" />
          {" "}is the solid line <KInline expr={`y = mx + b`} /> together with all points on or
          below that line. “Equal to” fills in the boundary; “less than” tells you which side to
          shade.
        </MustKnow>

        <section aria-labelledby="worked-check">
          <h3 id="worked-check" className="sr-only">
            Worked plug-in check for a boundary
          </h3>
          <p>
            Why solid? Because every point on{" "}
            <KInline expr={`y = 2x + 4`} /> satisfies{" "}
            <KInline expr={`y \\le 2x + 4`} /> with equality. Why “below”? Take any x;
            the largest allowed y on that vertical line is exactly{" "}
            <KInline expr={`2x + 4`} />, and anything smaller also satisfies the inequality.
          </p>
        </section>

        <MCQExample
          number={45}
          prompt={
            <>
              In the xy‑plane, region G is defined by{" "}
              <KInline expr={`y \\le 6x + 8`} ariaLabel="y is less than or equal to 6x plus 8" />.
              Which point is not in G?
            </>
          }
          options={["(2, 0)", "(4, 12)", "(30, 40)", "(10, 50)", "(4, 34)"]}
          correct="(4, 34)"
          solution={
            <>
              <p>
                Test each point by plugging into{" "}
                <KInline expr={`y \\le 6x + 8`} />.
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  (2, 0): check{" "}
                  <KInline expr={`0 \\le 6\\cdot 2 + 8 = 20`} /> → true.
                </li>
                <li>
                  (4, 12): check{" "}
                  <KInline expr={`12 \\le 6\\cdot 4 + 8 = 32`} /> → true.
                </li>
                <li>
                  (30, 40): check{" "}
                  <KInline expr={`40 \\le 6\\cdot 30 + 8 = 188`} /> → true.
                </li>
                <li>
                  (10, 50): check{" "}
                  <KInline expr={`50 \\le 6\\cdot 10 + 8 = 68`} /> → true.
                </li>
                <li>
                  (4, 34): check{" "}
                  <KInline expr={`34 \\le 6\\cdot 4 + 8 = 32`} /> → false.
                </li>
              </ul>
              <p>
                Only (4, 34) fails the test, so it is not a solution to the inequality.
              </p>
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: for{" "}
          <KInline expr={`y \\le mx + b`} />, draw a solid boundary line and include all points
          at or below it. If you forget which side to shade, plug in a quick test point such as{" "}
          <KInline expr={`(0,0)`} /> when it’s not on the line.
        </p>
      </article>
    </main>
  );
}