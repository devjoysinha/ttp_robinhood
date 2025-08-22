import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import katex from "katex";

export const metadata: Metadata = {
  title: "3.2.6 Choosing a Method for Systems of Equations | Linear & Quadratic",
  description:
    "Learn when to use substitution versus combination (elimination) to solve a system of linear equations. Includes worked examples and a quick decision table.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
};

function Math({ expr, display = false, ariaLabel }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    trust: false,
  });
  return (
    <span
      aria-label={ariaLabel ?? expr.replaceAll("\\", "")}
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX CSS (loaded here for this page). For best performance, move to your root layout. */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.6 Choosing Which Method to Use
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            A common question is how to decide between substitution and
            combination (elimination) when solving a system of linear equations.
            There isn’t a single rule that fits every case, but with practice
            you’ll quickly recognize patterns that make one approach faster than
            the other.
          </p>
          <p className="font-medium text-gray-200">Two quick guidelines:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Favor substitution when isolating a variable is straightforward in
              at least one equation.
            </li>
            <li>
              Prefer combination (elimination) when isolation would be clunky
              and it’s easier to align coefficients and eliminate a variable.
            </li>
          </ul>
        </section>

        <MustKnow>
          When one equation makes it easy to express a variable explicitly (for
          example, y = … or x = …), substitution is typically the quickest path.
          If neither equation isolates a variable cleanly, line up coefficients
          to cancel a variable using addition or subtraction (combination).
        </MustKnow>

        {/* Guideline 1 */}
        <section aria-labelledby="rule-1" className="space-y-4">
          <h3 id="rule-1" className="text-xl font-semibold text-white">
            Guideline 1: Choose substitution when isolation is easy
          </h3>
          <p>
            If you can solve one equation for a variable with just a small
            amount of algebra, plug that expression into the other equation to
            reduce the system to a single variable.
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="text-lg font-semibold text-gray-100">
              Worked example (substitution)
            </h4>
            <p className="mt-2">
              Solve for y if{" "}
              <Math expr="20x + 30y = 900" ariaLabel="20 x plus 30 y equals 900" />{" "}
              and <Math expr="5x = 75y" ariaLabel="5 x equals 75 y" />.
            </p>
            <div className="mt-3 space-y-2 text-gray-300">
              <p>
                From <Math expr="5x = 75y" />, divide both sides by 5:
                <span className="ml-2">
                  <Math expr="x = 15y" />
                </span>
                .
              </p>
              <p>
                Substitute into the first equation:
                <span className="ml-2">
                  <Math expr="20(15y) + 30y = 900" />
                </span>{" "}
                ⇒ <Math expr="300y + 30y = 900" /> ⇒{" "}
                <Math expr="330y = 900" />.
              </p>
              <p>
                Hence <Math expr="y = \dfrac{900}{330} = \dfrac{30}{11}" />.
              </p>
            </div>
          </div>
        </section>

        {/* Guideline 2 */}
        <section aria-labelledby="rule-2" className="space-y-4">
          <h3 id="rule-2" className="text-xl font-semibold text-white">
            Guideline 2: Choose combination when isolation is awkward
          </h3>
          <p>
            If isolating a variable would introduce messy fractions or extra
            steps, aim to eliminate a variable by matching coefficients and
            adding or subtracting the equations.
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="text-lg font-semibold text-gray-100">
              Worked example (combination)
            </h4>
            <p className="mt-2">
              If <Math expr="4x + 3y = 12" /> and <Math expr="3x + 4y = 36" />
              , find <Math expr="xy" ariaLabel="x times y" />.
            </p>
            <div className="mt-3 space-y-2 text-gray-300">
              <p>
                Multiply the first equation by 4 (
                <Math expr="16x + 12y = 48" />) and the second equation by 3 (
                <Math expr="9x + 12y = 108" />
                ). Subtract to eliminate y:
                <span className="ml-2">
                  <Math expr="(16x+12y) - (9x+12y) = 48 - 108" />
                </span>
                , so <Math expr="7x = -60" /> and{" "}
                <Math expr="x = -\dfrac{60}{7}" />.
              </p>
              <p>
                Substitute back into <Math expr="4x + 3y = 12" />:
                <span className="ml-2">
                  <Math expr="3y = 12 - 4x = 12 - 4\!\left(-\dfrac{60}{7}\right) = \dfrac{324}{7}" />
                </span>
                , hence <Math expr="y = \dfrac{108}{7}" />.
              </p>
              <p>
                Therefore{" "}
                <Math expr="xy = \left(-\dfrac{60}{7}\right)\!\left(\dfrac{108}{7}\right) = -\dfrac{6480}{49}" />
                .
              </p>
            </div>
          </div>
        </section>

        {/* Quick decision table */}
        <section aria-labelledby="decision-table" className="space-y-4">
          <h3 id="decision-table" className="text-xl font-semibold text-white">
            Quick calls: Which method is quicker?
          </h3>
          <p>
            Use the prompts below to practice spotting the faster approach
            before you start computing.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-lg border border-gray-800">
              <caption className="sr-only">
                Problems and the recommended solving method
              </caption>
              <thead>
                <tr className="bg-gray-800/60">
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Prompt
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Faster approach
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="align-top px-4 py-3">
                    If <Math expr="2x + 4y = 25" /> and{" "}
                    <Math expr="14x + 7y = 100" />, find x.
                  </td>
                  <td className="align-top px-4 py-3 text-gray-300">
                    Combination. Scale the first equation by 7 to get{" "}
                    <Math expr="14x + 28y = 175" />, then subtract the second
                    equation to eliminate x.
                  </td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="align-top px-4 py-3">
                    If <Math expr="3y = 12 + 6x" /> and{" "}
                    <Math expr="15y + 20x = 5.5" />, find x.
                  </td>
                  <td className="align-top px-4 py-3 text-gray-300">
                    Substitution. Divide the first equation by 3 to isolate y,
                    then substitute that expression into the second equation.
                  </td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="align-top px-4 py-3">
                    If <Math expr="55x + 10y = 101" /> and{" "}
                    <Math expr="2x + y = 76" />, find y.
                  </td>
                  <td className="align-top px-4 py-3 text-gray-300">
                    Substitution. From <Math expr="2x + y = 76" />, write{" "}
                    <Math expr="y = 76 - 2x" /> and plug into the other
                    equation.
                  </td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="align-top px-4 py-3">
                    If <Math expr="7a + 14b = 27" /> and{" "}
                    <Math expr="14a + 7b = 14" />, find <Math expr="ab" />.
                  </td>
                  <td className="align-top px-4 py-3 text-gray-300">
                    Combination. Double the first equation to{" "}
                    <Math expr="14a + 28b = 54" />, then subtract the second to
                    eliminate a.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <p>
            Bottom line: Let structure dictate strategy. If a variable is easy
            to isolate, substitute. If not, line up coefficients and eliminate.
            Making this call up front saves time and reduces algebraic errors.
          </p>
        </section>
      </article>
    </main>
  );
}