import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: '18.11.1 Graphing "Greater Than" Inequalities | Coordinate Geometry',
  description:
    "How to sketch y > mx + b: draw the boundary line, use a dashed style, and shade the correct half-plane. Includes a worked multiple‑choice example and quick table of sample points.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.11.1 The “greater than” inequality
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section className="space-y-4">
          <p>
            Consider the inequality <InlineMath math={"y > 2x + 4"} />. To graph an
            inequality in slope–intercept form, first draw its boundary line, which is
            the corresponding equation <InlineMath math={"y = 2x + 4"} />. A few sample
            x-values and their on-the-line y-values are shown below.
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-800/50">
            <table className="min-w-full text-left">
              <caption className="sr-only">
                Sample points on the line y = 2x + 4
              </caption>
              <thead className="bg-gray-900/40 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Chosen value of x
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Output value of y on <InlineMath math={"y = 2x + 4"} />
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Ordered pair
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { x: 0, y: 4 },
                  { x: 1, y: 6 },
                  { x: 2, y: 8 },
                  { x: 3, y: 10 },
                  { x: 4, y: 12 },
                ].map((row) => (
                  <tr key={row.x} className="odd:bg-gray-900/20">
                    <td className="px-4 py-3">{row.x}</td>
                    <td className="px-4 py-3">{row.y}</td>
                    <td className="px-4 py-3">({row.x}, {row.y})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            If this were the equality <InlineMath math={"y = 2x + 4"} />, we would draw
            a solid line and the solutions would be exactly the points on that line.
            With the strict inequality <InlineMath math={"y > 2x + 4"} />, two things
            change:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              The boundary is drawn as a dashed line (the line itself is not included).
            </li>
            <li>
              We shade the half‑plane above the line, because valid y-values must be
              greater than <InlineMath math={"2x + 4"} /> for the same x.
            </li>
          </ul>

          <MustKnow>
            The graph of <InlineMath math={"y > mx + b"} /> is the dashed line{" "}
            <InlineMath math={"y = mx + b"} /> with the solution region shaded above
            the line. The boundary is excluded because the inequality is strict.
          </MustKnow>

          <p>
            In words: there are infinitely many solutions, and every solution point
            lies in the shaded region above the dashed boundary line.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Checkpoint</h3>

          <MCQExample
            number={42}
            prompt={
              <>
                In the xy‑plane, let region R be defined by{" "}
                <InlineMath math={"y > 6x + 8"} />. Which of the following points
                could lie in R?
              </>
            }
            options={["(2, 0)", "(4, 12)", "(30, 40)", "(10, 50)", "(4, 33)"]}
            correct="(4, 33)"
            solution={
              <>
                <p>
                  A point <InlineMath math={"(x, y)"} /> is in R if it satisfies{" "}
                  <InlineMath math={"y > 6x + 8"} />.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    (2, 0): test <InlineMath math={"0 > 6\\cdot 2 + 8"} /> →{" "}
                    <InlineMath math={"0 > 20"} /> is false.
                  </li>
                  <li>
                    (4, 12): test <InlineMath math={"12 > 6\\cdot 4 + 8"} /> →{" "}
                    <InlineMath math={"12 > 32"} /> is false.
                  </li>
                  <li>
                    (30, 40): test <InlineMath math={"40 > 6\\cdot 30 + 8"} /> →{" "}
                    <InlineMath math={"40 > 188"} /> is false.
                  </li>
                  <li>
                    (10, 50): test <InlineMath math={"50 > 6\\cdot 10 + 8"} /> →{" "}
                    <InlineMath math={"50 > 68"} /> is false.
                  </li>
                  <li>
                    (4, 33): test <InlineMath math={"33 > 6\\cdot 4 + 8"} /> →{" "}
                    <InlineMath math={"33 > 32"} /> is true.
                  </li>
                </ul>
                <p>Therefore, the only viable point is (4, 33).</p>
              </>
            }
          />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white">Key takeaway</h3>
          <p>
            To graph a strict linear inequality, draw the matching line as dashed to
            mark the boundary, determine the correct side to shade (use a test point
            if needed), and remember that the boundary line is not part of the
            solution set.
          </p>
        </section>
      </article>
    </main>
  );
}