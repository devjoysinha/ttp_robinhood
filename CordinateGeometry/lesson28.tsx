import type { Metadata } from "next";
import Image from "next/image";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '18.11.2 "Less Than" Inequalities | Coordinate Geometry',
  description:
    'How to graph y < mx + b when the inequality is strict: dashed boundary line, shaded solution region, and a quick check-by-substitution example.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.11.2 Graphing a “Less Than” Linear Inequality
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Let’s switch to a strict inequality and analyze{" "}
          <InlineMath math={"y < 2x + 4"} />. To sketch its solution set, first draw the
          reference line <InlineMath math={"y = 2x + 4"} />, then apply the inequality
          rule to decide which side of the line to shade.
        </p>

        <section aria-labelledby="points-table-title" className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h3 id="points-table-title" className="mb-3 text-base font-semibold text-white">
            Sample points for the line <InlineMath math={"y = 2x + 4"} />
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <caption className="sr-only">Chosen x-values, corresponding y-values on y = 2x + 4, and ordered pairs</caption>
              <thead>
                <tr>
                  <th scope="col" className="border-b border-gray-800 px-3 py-2 text-left text-gray-200">
                    Chosen value of x
                  </th>
                  <th scope="col" className="border-b border-gray-800 px-3 py-2 text-left text-gray-200">
                    Output value of y
                  </th>
                  <th scope="col" className="border-b border-gray-800 px-3 py-2 text-left text-gray-200">
                    Ordered pair
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { x: 0, y: 4 },
                  { x: 1, y: 6 },
                  { x: 2, y: 8 },
                  { x: 3, y: 10 },
                  { x: 4, y: 12 },
                ].map((p) => (
                  <tr key={p.x}>
                    <td className="border-b border-gray-800 px-3 py-2">{p.x}</td>
                    <td className="border-b border-gray-800 px-3 py-2">
                      <InlineMath math={`y = 2\\cdot ${p.x} + 4 = ${p.y}`} />
                    </td>
                    <td className="border-b border-gray-800 px-3 py-2">
                      ({p.x}, {p.y})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p>
          Now convert the line into the graph of{" "}
          <InlineMath math={"y < 2x + 4"} />: because the inequality is strict, the
          boundary is drawn as a dashed line, and the solution region is the side of the
          plane where <InlineMath math={"y"} /> values are strictly less than{" "}
          <InlineMath math={"2x + 4"} /> for the same <InlineMath math={"x"} />.
        </p>

        <figure className="my-6">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-md ring-1 ring-gray-800">
            <Image
              src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/content_asset/asset/1874/image19.png"
              alt='Graph of y < 2x + 4 showing a dashed boundary line y = 2x + 4 and the shaded region below the line'
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 640px"
              priority
            />
          </div>
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            “Less than” inequality: dashed boundary and shaded region below the line.
          </figcaption>
        </figure>

        <div className="rounded-md border border-gray-800 bg-gray-900/40 p-4">
          <h3 className="mb-2 text-base font-semibold text-white">Key visual cues</h3>
          <ul className="list-disc space-y-1 pl-5 text-gray-300">
            <li>
              Strict inequalities like <InlineMath math={"y < mx + b"} /> use a dashed
              boundary line (points on the line are not included).
            </li>
            <li>
              For <InlineMath math={"y < mx + b"} />, shade the region below the boundary;
              for <InlineMath math={"y > mx + b"} />, shade above.
            </li>
          </ul>
        </div>

        <MustKnow>
          The graph of a strict linear inequality such as{" "}
          <InlineMath math={"y < mx + b"} /> uses a dashed boundary line{" "}
          <InlineMath math={"y = mx + b"} />. The solution set is every point on the
          correct side of that line—in this case, all points with{" "}
          <InlineMath math={"y"} /> less than <InlineMath math={"mx + b"} />.
        </MustKnow>

        <section aria-labelledby="why-dashed-title">
          <h3 id="why-dashed-title" className="text-base font-semibold text-white">
            Why dashed and why that side?
          </h3>
          <p className="mt-2">
            Because <InlineMath math={"<"} /> is strict, equality is not allowed—hence,
            the boundary is dashed. To choose the side to shade, pick any convenient test
            point not on the boundary (for example, the origin, when it’s not on the
            line). If it satisfies <InlineMath math={"y < 2x + 4"} />, shade that side.
          </p>
        </section>

        <MCQExample
          number={43}
          prompt={
            <>
              In the xy‑plane, region G is defined by the inequality{" "}
              <InlineMath math={"y < 6x + 8"} />. Which point is not in G?
            </>
          }
          options={["(2, 0)", "(4, 12)", "(30, 40)", "(10, 50)", "(4, 33)"]}
          correct="(4, 33)"
          solution={
            <>
              <p>
                A point <InlineMath math={"(x, y)"} /> belongs to G if{" "}
                <InlineMath math={"y < 6x + 8"} /> holds.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>(2, 0):</strong>{" "}
                  <InlineMath math={"0 < 6\\cdot 2 + 8 = 20"} /> ✓
                </li>
                <li>
                  <strong>(4, 12):</strong>{" "}
                  <InlineMath math={"12 < 6\\cdot 4 + 8 = 32"} /> ✓
                </li>
                <li>
                  <strong>(30, 40):</strong>{" "}
                  <InlineMath math={"40 < 6\\cdot 30 + 8 = 188"} /> ✓
                </li>
                <li>
                  <strong>(10, 50):</strong>{" "}
                  <InlineMath math={"50 < 6\\cdot 10 + 8 = 68"} /> ✓
                </li>
                <li>
                  <strong>(4, 33):</strong>{" "}
                  <InlineMath math={"33 < 6\\cdot 4 + 8 = 32"} /> is false ✗
                </li>
              </ul>
              <p>
                Only (4, 33) fails the test, so it is not a solution to{" "}
                <InlineMath math={"y < 6x + 8"} />.
              </p>
              <p>
                Answer: <strong>E</strong>.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up-title">
          <h3 id="wrap-up-title" className="text-base font-semibold text-white">
            Takeaway
          </h3>
          <p className="mt-2">
            For strict linear inequalities, draw the corresponding line as dashed and
            shade the half‑plane that satisfies the inequality. A quick substitution check
            confirms whether a given point lies in the shaded region.
          </p>
        </section>
      </article>
    </main>
  );
}