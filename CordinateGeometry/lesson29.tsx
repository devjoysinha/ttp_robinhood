import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.11.3 Greater‑Than‑or‑Equal‑To Inequalities | Coordinate Geometry",
  description:
    "Learn how to graph inequalities of the form y ≥ mx + b: use a solid boundary line and shade the region above. Includes a quick point table and a multiple‑choice check for y ≥ 6x + 8.",
};

// Server-safe KaTeX renderer (outputs HTML + MathML for a11y)
function K({
  expr,
  display = false,
  as: Tag = "span",
  className,
}: {
  expr: string;
  display?: boolean;
  as?: "span" | "div" | "p" | "h3" | "h4";
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "htmlAndMathml",
  });
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.11.3 The “Greater Than or Equal To” Inequality
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A linear inequality of the form <K expr="y \ge mx + b" /> includes all points on
          the boundary line and every point above that line. This differs from{" "}
          <K expr="y > mx + b" />, where points on the line are excluded.
        </p>

        <MustKnow>
          The graph of <K expr="y \ge mx + b" /> is drawn with a solid boundary line
          because points on the line satisfy the inequality. Shade the region above the
          line to show the rest of the solution set.
        </MustKnow>

        <section aria-labelledby="graphing-example" className="space-y-4">
          <h3 id="graphing-example" className="text-white text-xl font-semibold">
            Quick example: graph <K expr="y \ge 2x + 4" />
          </h3>
          <p>
            You can sketch the boundary line <K expr="y = 2x + 4" /> using any two points,
            then use a solid line and shade the region above. The table below shows some
            easy choices of <K expr="x" /> with their corresponding boundary values of{" "}
            <K expr="y" /> and the point on the line.
          </p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                Sample points on the line y = 2x + 4
              </caption>
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Chosen x
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Boundary y = 2x + 4
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Point on the line
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { x: 0, y: 4 },
                  { x: 1, y: 6 },
                  { x: 2, y: 8 },
                  { x: 3, y: 10 },
                  { x: 4, y: 12 },
                ].map((p) => (
                  <tr key={p.x} className="bg-gray-900/40">
                    <td className="px-4 py-3">{p.x}</td>
                    <td className="px-4 py-3">
                      <K expr={`2\\cdot ${p.x} + 4 = ${p.y}`} />
                    </td>
                    <td className="px-4 py-3">({p.x}, {p.y})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-400">
            Reading the graph: the solid line represents <K expr="y = 2x + 4" />, which is
            included in the solution set; the shaded half‑plane above the line shows all
            additional points where <K expr="y \ge 2x + 4" /> holds true.
          </p>
        </section>

        <MCQExample
          number={44}
          prompt={
            <>
              In the xy‑plane, region R is defined by <K expr="y \ge 6x + 8" />. Which of
              the following points could lie in R?
            </>
          }
          options={["(2, 0)", "(4, 12)", "(30, 40)", "(10, 50)", "(4, 33)"]}
          correct="(4, 33)"
          solution={
            <>
              <p>
                We need points satisfying <K expr="y \ge 6x + 8" />. Test each option:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  (2, 0): compare 0 with <K expr="6\cdot 2 + 8 = 20" />. Since{" "}
                  <K expr="0 \not\ge 20" />, reject.
                </li>
                <li>
                  (4, 12): compare 12 with <K expr="6\cdot 4 + 8 = 32" />.{" "}
                  <K expr="12 \not\ge 32" />, reject.
                </li>
                <li>
                  (30, 40): compare 40 with <K expr="6\cdot 30 + 8 = 188" />.{" "}
                  <K expr="40 \not\ge 188" />, reject.
                </li>
                <li>
                  (10, 50): compare 50 with <K expr="6\cdot 10 + 8 = 68" />.{" "}
                  <K expr="50 \not\ge 68" />, reject.
                </li>
                <li>
                  (4, 33): compare 33 with <K expr="6\cdot 4 + 8 = 32" />.{" "}
                  <K expr="33 \ge 32" />, accept.
                </li>
              </ul>
              <p>Therefore, the correct choice is (4, 33).</p>
            </>
          }
        />

        <section aria-labelledby="takeaways" className="space-y-3">
          <h3 id="takeaways" className="text-white text-xl font-semibold">
            Takeaways
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Use a solid line for <K expr="\ge" /> or <K expr="\le" />; use a dashed line
              for <K expr="&gt;" /> or <K expr="&lt;" />.
            </li>
            <li>
              For <K expr="y \ge mx + b" />, shade the region above the line; for{" "}
              <K expr="y \le mx + b" />, shade below.
            </li>
            <li>
              To check any point, substitute its coordinates into the inequality and verify
              it makes the statement true.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}