import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.2 Solving a System of Two Linear Equations | Algebra",
  description:
    "Learn two core strategies for solving a 2-variable linear system: substitution and combination (elimination). See step‑by‑step examples, tips, and a quick check question.",
};

function KInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: false,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? "mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: true,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? "mathematical expression"}
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2 Solving a System of Equations for Two Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On test day, you’ll often face two linear equations with two unknowns.
          The goal is to find the unique ordered pair{" "}
          <KInline expr="(x, y)" ariaLabel="x comma y" /> that satisfies both
          equations at the same time. A generic system looks like:
        </p>

        <KBlock
          expr={`\\begin{aligned}
a_1x + b_1y &= c_1\\\\
a_2x + b_2y &= c_2
\\end{aligned}`}
          ariaLabel="general system of two linear equations"
        />

        <p>Two time‑tested methods handle nearly every such system:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Substitution: Solve one equation for one variable, then plug that
            expression into the other.
          </li>
          <li>
            Combination (Elimination): Add or subtract suitable multiples of the
            equations to eliminate one variable in a single step.
          </li>
        </ul>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Substitution shines when a variable already has coefficient 1 or
              −1, making isolation quick.
            </li>
            <li>
              Combination is fastest when you can cancel a variable by adding or
              subtracting the equations (possibly after scaling one or both).
            </li>
            <li>
              A unique solution occurs when the lines intersect once. Parallel
              lines yield no solution; coincident lines yield infinitely many.
            </li>
          </ul>
        </MustKnow>

        <ExampleCard
          number={17}
          title="Solve by substitution"
          statements={[
            "Solve the system:",
            String.raw`\;\; \begin{aligned}
x - y &= 1 \\
2x + y &= 11
\end{aligned}`,
          ]}
          correctLetter=""
          solution={
            <>
              <div className="space-y-3">
                <p>
                  Step 1: From the first equation, isolate{" "}
                  <KInline expr="x" />:
                </p>
                <KBlock expr={`x = y + 1`} />

                <p>
                  Step 2: Substitute into the second equation{" "}
                  <KInline expr="2x + y = 11" />:
                </p>
                <KBlock
                  expr={`2(y + 1) + y = 11 \\;\\Rightarrow\\; 3y + 2 = 11 \\;\\Rightarrow\\; y = 3`}
                />

                <p>Step 3: Back‑substitute to get x:</p>
                <KBlock expr={`x = y + 1 = 3 + 1 = 4`} />

                <p>
                  Solution: <KInline expr="(x, y) = (4, 3)" />.
                </p>
              </div>
            </>
          }
        />

        <ExampleCard
          number={18}
          title="Solve by combination (elimination)"
          statements={[
            "Solve the system:",
            String.raw`\;\; \begin{aligned}
2x + y &= 9 \\
3x - y &= 11
\end{aligned}`,
          ]}
          correctLetter=""
          solution={
            <>
              <div className="space-y-3">
                <p>
                  Add the equations to eliminate <KInline expr="y" />:
                </p>
                <KBlock
                  expr={`(2x + y) + (3x - y) = 9 + 11 \\;\\Rightarrow\\; 5x = 20 \\;\\Rightarrow\\; x = 4`}
                />

                <p>Substitute x = 4 into the first equation:</p>
                <KBlock expr={`2(4) + y = 9 \\;\\Rightarrow\\; y = 1`} />

                <p>
                  Solution: <KInline expr="(x, y) = (4, 1)" />.
                </p>
              </div>
            </>
          }
        />

        <MCQExample
          number={19}
          prompt={
            <>
              For the system{" "}
              <KInline expr="2x + y = 9" ariaLabel="2 x plus y equals 9" /> and{" "}
              <KInline expr="3x - y = 11" ariaLabel="3 x minus y equals 11" />,
              what is the value of <KInline expr="x + y" />?
            </>
          }
          options={["3", "4", "5", "6", "7"]}
          correct="5"
          solution={
            <>
              <p>
                From the combination example above,{" "}
                <KInline expr="x = 4" /> and <KInline expr="y = 1" />. Thus,
              </p>
              <KBlock expr={`x + y = 4 + 1 = 5`} />
            </>
          }
        />

        <section aria-labelledby="tips-heading" className="space-y-3">
          <h3
            id="tips-heading"
            className="text-lg font-semibold text-gray-200"
          >
            Quick strategy tips
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              If neither variable cancels immediately, multiply one or both
              equations to align coefficients before adding or subtracting.
            </li>
            <li>
              Watch your signs. When subtracting equations, distribute the
              negative across every term of the second equation.
            </li>
            <li>
              If the “
              <KInline expr="x" /> terms and <KInline expr="y" /> terms are in
              the same proportion and the constants are also in that proportion,
              the system has infinitely many solutions. If only the coefficients
              match proportionally but the constants don’t, there is no solution.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}