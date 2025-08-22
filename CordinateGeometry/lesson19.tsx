import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Small SSR KaTeX helper
function K({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    output: "html",
    trust: true,
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      role="img"
      aria-label={ariaLabel ?? expr.replace(/\s+/g, " ").trim()}
      className={block ? "my-4 overflow-x-auto" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "18.6.5 Standard Form of a Line | Coordinate Geometry",
  description:
    "Understand the standard (general) form Ax + By = C, how to convert it to slope‑intercept form, and how to read the slope and intercept directly. Includes two MCQs and one Data Sufficiency example with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6.5 The Standard Form of the Equation of a Line
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You’re already familiar with the slope–intercept model,{" "}
          <K expr="y = mx + b" ariaLabel="y equals m x plus b" />. Lines are
          also commonly written in standard (general) form:
        </p>

        <K expr="Ax + By = C" block ariaLabel="A x plus B y equals C" />

        <p>
          Here, <K expr="A" /> , <K expr="B" /> , and <K expr="C" /> are
          constants. While standard form is compact, it hides the slope and the{" "}
          <K expr="y" />
          -intercept. When <K expr="B \neq 0" />, you can solve for{" "}
          <K expr="y" /> to expose both.
        </p>

        <K
          block
          expr={String.raw`
            \begin{aligned}
              Ax + By &= C \\
              By &= -Ax + C \\
              y &= -\frac{A}{B}\,x + \frac{C}{B}
            \end{aligned}
          `}
          ariaLabel="Rearrange Ax plus By equals C to slope intercept form"
        />

        <MustKnow>
          When B ≠ 0, the standard form Ax + By = C is equivalent to{" "}
          <K expr="y = -\frac{A}{B}x + \frac{C}{B}" ariaLabel="y equals negative A over B x plus C over B" />
          . Therefore:
          <ul className="mt-2 list-disc pl-6">
            <li>
              slope <K expr="m = -\frac{A}{B}" ariaLabel="m equals negative A over B" />
            </li>
            <li>
              y‑intercept <K expr="b = \frac{C}{B}" ariaLabel="b equals C over B" />
            </li>
          </ul>
        </MustKnow>

        <p>Quick conversion example:</p>
        <K
          block
          expr={String.raw`
            \begin{aligned}
              3x - 5y &= 5 \\
              -5y &= -3x + 5 \\
              y &= \frac{3}{5}x - 1
            \end{aligned}
          `}
          ariaLabel="Convert three x minus five y equals five into slope intercept form"
        />
        <p>
          Thus, the slope is <K expr="\tfrac{3}{5}" /> and the{" "}
          <K expr="y" />
          -intercept is <K expr="-1" />.
        </p>

        <MCQExample
          number={25}
          prompt="The equation of line k is Px + Q = −Ry. If P, Q, and R are all nonzero, which expression equals the slope of line k?"
          // Keep options as plain text for robust rendering in any UI; full derivation uses KaTeX in the solution.
          options={["-P/R", "-R/P", "-Q/R", "P/Q", "Q/P"]}
          correct="-P/R"
          solution={
            <>
              <p>Rearrange to slope–intercept form:</p>
              <K
                block
                expr={String.raw`
                  \begin{aligned}
                    Px + Q &= -Ry \\
                    Ry &= -Px - Q \\
                    y &= -\frac{P}{R}x - \frac{Q}{R}
                  \end{aligned}
                `}
                ariaLabel="Solve for y and identify slope"
              />
              <p>
                The coefficient of <K expr="x" /> is the slope,{" "}
                <K expr="-\frac{P}{R}" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt="Line k has equation Dx − By = E. If (m, n) is on k and both m and B are nonzero, the slope of k is equal to which of the following?"
          options={[
            "(nB + E)/(mB)",
            "(nB − E)/(mB)",
            "(B + E)/(mB)",
            "(E − nB)/(mB)",
            "(nB + E)/m",
          ]}
          correct="(nB + E)/(mB)"
          solution={
            <>
              <p>First isolate y:</p>
              <K
                block
                expr={String.raw`
                  \begin{aligned}
                    Dx - By &= E \\
                    By &= Dx - E \\
                    y &= \frac{D}{B}x - \frac{E}{B}
                  \end{aligned}
                `}
                ariaLabel="Convert to slope intercept form and identify slope D over B"
              />
              <p>
                So the slope is <K expr="\tfrac{D}{B}" />. Because{" "}
                <K expr="(m,n)" /> lies on the line:
              </p>
              <K
                block
                expr={String.raw`
                  n = \frac{D}{B}m - \frac{E}{B}
                `}
              />
              <p>Rearrange to solve for D/B in terms of m, n, B, E:</p>
              <K
                block
                expr={String.raw`
                  n + \frac{E}{B} = \frac{D}{B}m
                  \;\;\Longrightarrow\;\;
                  \frac{nB + E}{mB} = \frac{D}{B}
                `}
              />
              <p>
                Therefore the slope equals <K expr="\tfrac{nB + E}{mB}" />,
                which matches option A.
              </p>
            </>
          }
        />

        <ExampleCard
          number={27}
          title="Find v on Ax + By = C (Data Sufficiency)"
          statements={[
            "In the coordinate plane, line L has equation Ax + By = C. The point (u, v) lies on L, and A, B, C ≠ 0. What is the value of v?",
            "1) B/A = 2u/3",
            "2) B/C = 1/2",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>Start from the line equation and plug in (u, v):</p>
              <K
                block
                expr={String.raw`
                  \begin{aligned}
                    Ax + By &= C \\
                    Au + Bv &= C \\
                    Bv &= -Au + C \\
                    v &= -\frac{A}{B}u + \frac{C}{B}
                  \end{aligned}
                `}
                ariaLabel="Express v in terms of A over B, u, and C over B"
              />
              <p>
                We can compute <K expr="v" /> if we know both{" "}
                <K expr="\frac{A}{B}u" /> and <K expr="\frac{C}{B}" />.
              </p>

              <p>
                Statement (1): <K expr="\tfrac{B}{A} = \tfrac{2u}{3}" />. Invert
                to get <K expr="\tfrac{A}{B} = \tfrac{3}{2u}" />, hence{" "}
                <K expr="\tfrac{A}{B}u = \tfrac{3}{2}" />. This fixes{" "}
                <K expr="\tfrac{A}{B}u" /> but tells us nothing about{" "}
                <K expr="\tfrac{C}{B}" />. Not sufficient.
              </p>

              <p>
                Statement (2): <K expr="\tfrac{B}{C} = \tfrac{1}{2}" /> implies{" "}
                <K expr="\tfrac{C}{B} = 2" />. This sets{" "}
                <K expr="\tfrac{C}{B}" /> but gives no information about{" "}
                <K expr="\tfrac{A}{B}u" />. Not sufficient.
              </p>

              <p>
                Together: from (1), <K expr="\tfrac{A}{B}u = \tfrac{3}{2}" />;
                from (2), <K expr="\tfrac{C}{B} = 2" />. Substitute in
                <K expr="v = -\frac{A}{B}u + \frac{C}{B}" />:
              </p>

              <K block expr={String.raw`v = -\frac{3}{2} + 2 = \frac{1}{2}`} />

              <p>So both statements together are sufficient. Answer: C.</p>
            </>
          }
        />

        <p>
          Takeaway: standard form is easy to convert. Once you isolate{" "}
          <K expr="y" />, the slope is the coefficient of <K expr="x" /> and
          the constant term is the <K expr="y" />‑intercept:
          <K
            block
            expr={String.raw`y = -\frac{A}{B}x + \frac{C}{B}\quad(B\neq 0)`}
          />
        </p>
      </article>
    </main>
  );
}