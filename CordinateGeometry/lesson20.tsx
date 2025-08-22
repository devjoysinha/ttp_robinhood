import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "18.6.6 Information Needed to Define a Line | Coordinate Geometry",
  description:
    "Learn exactly what information pins down a unique line on the coordinate plane. Includes a Data Sufficiency drill about perpendicular lines and a multiple‑choice example building the line equation from two points.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6.6 The Information Needed to Define a Line
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Knowing that a line goes through one specific point on the{" "}
          <InlineMath math={"xy"} />‑plane doesn’t tell us which line it is.
          Infinitely many lines can pivot about that point, each with a different slope
          and different intercepts. To lock in a single line, we need enough information
          so that the line can’t “rotate” anymore.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              A unique line is determined by either:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                One point on the line plus its slope{" "}
                <InlineMath math={"m"} /> (or the slope of a parallel/perpendicular
                line, since parallel lines share the same <InlineMath math={"m"} /> and
                perpendicular lines have slopes that are negative reciprocals).
              </li>
              <li>
                Two distinct points on the line (including an intercept as one of the points).
              </li>
            </ul>
            <p>
              Once you have a point and a slope, or two points, you can write the line’s
              equation in slope‑intercept form{" "}
              <InlineMath math={"y = mx + b"} /> or any equivalent form.
            </p>
          </div>
        </MustKnow>

        <p>
          Big idea: lines are determined by relationships, not by a single location.
          A lone point leaves the line underdetermined; add either a slope or a second
          point, and the line becomes fixed.
        </p>

        <ExampleCard
          number={28}
          title="Is the slope of line q negative?"
          statements={[
            "In the coordinate plane, line p and line q intersect at (2, 4). Is the slope of line q negative?",
            "1) The product of the slopes of line p and line q is −1.",
            "2) Line p crosses the x-axis at (5, 0).",
          ]}
          correctLetter="C"
          solution={
            <>
              <p className="mb-2">
                The intersection point at <InlineMath math="(2, 4)" /> alone doesn’t
                determine either line’s slope.
              </p>

              <p className="mb-2">
                <strong>Statement (1):</strong> If the product of the slopes is{" "}
                <InlineMath math="-1" />, then lines p and q are perpendicular.
                That guarantees one slope is positive and the other negative, but we don’t
                know which is which. Not sufficient.
              </p>

              <p className="mb-2">
                <strong>Statement (2):</strong> Now we know a second point on line p:
                it passes through <InlineMath math="(2,4)" /> and{" "}
                <InlineMath math="(5,0)" />. We can compute its slope:
              </p>

              <BlockMath math={"m_p = \\frac{4 - 0}{2 - 5} = \\frac{4}{-3} = -\\frac{4}{3}"} />

              <p className="mb-2">
                This by itself still tells us nothing about line q’s slope sign. Not sufficient.
              </p>

              <p className="mb-2">
                <strong>Together (1) and (2):</strong> From (2),{" "}
                <InlineMath math={"m_p = -\\tfrac{4}{3}"} />. Using (1),{" "}
                <InlineMath math={"m_p \\cdot m_q = -1"} />, so
              </p>

              <BlockMath math={"m_q = \\frac{-1}{m_p} = \\frac{-1}{-\\tfrac{4}{3}} = \\tfrac{3}{4}"} />

              <p>
                <InlineMath math={"m_q = \\tfrac{3}{4}"} /> is positive, so the answer to the
                question “Is the slope of line q negative?” is definitively “No.”
                Both statements together are sufficient. Answer: C.
              </p>
            </>
          }
        />

        <p>
          Next, let’s build a line’s equation directly from two points. With two points, the slope
          is fixed, and so is the line.
        </p>

        <MCQExample
          number={29}
          prompt="Line L passes through (3, 3) and (1, −1). Which equation represents line L?"
          options={[
            "y = 1/2 x − 3",
            "y = 2x − 6",
            "y = −1/2 x − 3",
            "y = 2x − 3",
            "y = 3x − 2",
          ]}
          correct="y = 2x − 3"
          solution={
            <>
              <p className="mb-2">
                First find the slope using{" "}
                <InlineMath math={"m = \\dfrac{\\Delta y}{\\Delta x}"} />:
              </p>
              <BlockMath math={"m = \\frac{-1 - 3}{1 - 3} = \\frac{-4}{-2} = 2"} />
              <p className="mb-2">
                With <InlineMath math={"m = 2"} />, substitute a known point, say{" "}
                <InlineMath math="(3, 3)" />, into <InlineMath math={"y = mx + b"} />:
              </p>
              <BlockMath math={"3 = 2(3) + b \\;\\Rightarrow\\; b = -3"} />
              <p>
                Therefore, the equation is <InlineMath math={"y = 2x - 3"} />. Correct choice: D.
              </p>
            </>
          }
        />

        <p>
          Takeaway: a line is uniquely identified once the “degree of freedom” is removed—
          add a slope to a point or add a second point, and the line is fully specified.
        </p>
      </article>
    </main>
  );
}