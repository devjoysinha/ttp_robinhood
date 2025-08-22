import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Make sure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "18.11 Graphing Inequalities | Coordinate Geometry",
  description:
    "How to graph linear inequalities on the coordinate plane: isolate y, pick the correct boundary (solid vs dashed), and shade the right half‑plane. Includes a quick MCQ and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.11 Graphing Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A nonvertical line can be written in slope–intercept form as{" "}
          <InlineMath math="y = mx + b" />. Every point on that line satisfies
          the equation. For instance, if a point <InlineMath math="(a, z)" /> is
          on the line, then <InlineMath math="z = ma + b" />.
        </p>

        <p>
          Inequalities extend this idea from a single line to a region of the
          plane. A linear inequality such as{" "}
          <InlineMath math="y > mx + b" /> or <InlineMath math="y \le mx + b" />{" "}
          represents a half‑plane: all points strictly above or at/under the
          line, depending on the symbol used.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Always rewrite a linear inequality in slope–intercept form with{" "}
              <InlineMath math="y" /> isolated on the left:{" "}
              <InlineMath math="y \,{\large ?}\, mx + b" /> where{" "}
              <InlineMath math="{\large ?}\in\{<,\le,>,\ge\}" />.
            </li>
            <li>
              Boundary style:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Use a solid line for <InlineMath math="\le" /> or{" "}
                  <InlineMath math="\ge" /> (boundary included).
                </li>
                <li>
                  Use a dashed line for <InlineMath math="<" /> or{" "}
                  <InlineMath math=">" /> (boundary excluded).
                </li>
              </ul>
            </li>
            <li>
              Shading rule (after isolating <InlineMath math="y" />):
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <InlineMath math="y > mx + b" />: shade above the line.
                </li>
                <li>
                  <InlineMath math="y \ge mx + b" />: shade above, solid line.
                </li>
                <li>
                  <InlineMath math="y < mx + b" />: shade below the line.
                </li>
                <li>
                  <InlineMath math="y \le mx + b" />: shade below, solid line.
                </li>
              </ul>
            </li>
            <li>
              If you’re unsure, test any point not on the boundary (e.g.,{" "}
              <InlineMath math="(0,0)" /> when it’s not on the line). If the
              point satisfies the inequality, shade the side containing that
              point; otherwise, shade the other side.
            </li>
          </ul>
        </MustKnow>

        <p>
          Caution: Do not interpret the direction of the inequality until{" "}
          <InlineMath math="y" /> is isolated on the left. For example, starting
          with <InlineMath math="2x + 4 > y" />, you must rewrite it as{" "}
          <InlineMath math="y < 2x + 4" />. Only then is it clear that the
          solution is the region below the line <InlineMath math="y = 2x + 4" />,
          with a dashed boundary.
        </p>

        <MCQExample
          number={261}
          prompt="Which description correctly represents the solution set of 2x + 4 > y?"
          options={[
            "All points strictly above the line y = 2x + 4; solid boundary",
            "All points strictly above the line y = 2x + 4; dashed boundary",
            "All points strictly below the line y = 2x + 4; solid boundary",
            "All points strictly below the line y = 2x + 4; dashed boundary",
          ]}
          correct="All points strictly below the line y = 2x + 4; dashed boundary"
          solution={
            <>
              <p>
                First isolate <InlineMath math="y" />. From{" "}
                <InlineMath math="2x + 4 > y" />, we get{" "}
                <InlineMath math="y < 2x + 4" />. That’s a “less than”{" "}
                inequality, so we shade below the boundary line{" "}
                <InlineMath math="y = 2x + 4" /> and draw the boundary dashed
                (strict inequality).
              </p>
            </>
          }
        />

        <ExampleCard
          number={262}
          title="Solid or dashed boundary?"
          statements={[
            "For a linear inequality of the form y ? mx + b, is the boundary line drawn solid?",
            "1) The inequality is strict (< or >).",
            "2) The point (0, b) is part of the solution set.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need to decide whether equality is included. For{" "}
                <InlineMath math="<" /> or <InlineMath math=">" />, the boundary
                is dashed; for <InlineMath math="\le" /> or{" "}
                <InlineMath math="\ge" />, it’s solid.
              </p>
              <p>
                Statement (1): If the inequality is strict, the boundary is
                dashed. Sufficient.
              </p>
              <p>
                Statement (2): The point <InlineMath math="(0,b)" /> lies on the
                line <InlineMath math="y = mx + b" />. If that point is included
                in the solution set, equality holds, so the boundary is solid.
                Sufficient.
              </p>
              <p>Each statement alone suffices. Answer: D.</p>
            </>
          }
        />

        <ExampleCard
          number={263}
          title="Which information fixes the shaded side?"
          statements={[
            "Consider the boundary line L of a linear inequality. Which statements are sufficient to determine which side of L is shaded?",
            "1) A single test point not on L that is known to satisfy (or not satisfy) the inequality.",
            "2) The sign of the x‑coefficient and whether the inequality is ≥ or ≤ (in standard form ax + by ≤ c).",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                A test point settles the shading immediately: plug it into the
                inequality; if it’s true, shade the side containing that point;
                otherwise, shade the opposite side. So (1) is sufficient.
              </p>
              <p>
                Knowing only the sign of <InlineMath math="a" /> and whether{" "}
                <InlineMath math="\ge" /> or <InlineMath math="\le" /> in{" "}
                <InlineMath math="ax + by \le c" /> does not determine which
                half‑plane is correct without the full boundary and a reference
                point. So (2) is not sufficient.
              </p>
              <p>Therefore, (1) alone suffices. Answer: A.</p>
            </>
          }
        />

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Quick worked example
          </h3>
          <p>
            Graph <InlineMath math="y \ge -\tfrac{1}{2}x + 3" />.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Boundary: <InlineMath math="y = -\tfrac{1}{2}x + 3" /> (slope{" "}
              <InlineMath math="-\tfrac{1}{2}" />, intercept{" "}
              <InlineMath math="3" />).
            </li>
            <li>
              Symbol is <InlineMath math="\ge" />, so draw a solid line and
              shade above.
            </li>
            <li>
              Check with a test point like <InlineMath math="(0,0)" />:{" "}
              <InlineMath math="0 \ge -\tfrac{1}{2}\cdot 0 + 3" /> is false, so
              the origin should not be shaded—consistent with shading above the
              line.
            </li>
          </ul>
          <p className="text-gray-400">
            Summary: Put the inequality in{" "}
            <InlineMath math="y = mx + b" /> form, choose dashed/solid based on
            the symbol, then shade the correct half‑plane. When in doubt, test a
            point.
          </p>
        </section>
      </article>
    </main>
  );
}