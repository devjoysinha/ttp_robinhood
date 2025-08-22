import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

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
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
    output: "html",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel}
      className={block ? "my-2 overflow-x-auto" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "3.2.6 Picking a Method for Systems | Linear & Quadratic Equations",
  description:
    "How to decide between substitution and combination (elimination) when solving a 2‑variable system. Quick rules of thumb, worked examples, and a handy pattern checklist.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.6 Choosing a Method to Solve a System
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you face two equations in two unknowns, the best approach is the
          one that gets you to a solution with the fewest steps. In practice,
          you’ll usually choose between substitution and combination
          (elimination). With experience you’ll spot the faster route at a
          glance, but the guidelines below work well in most situations.
        </p>

        <MustKnow>
          Use substitution when one equation can be rearranged to isolate a
          variable with almost no effort. Use combination (elimination) when
          isolating a variable is clumsy, but you can quickly match coefficients
          to cancel a variable by adding or subtracting the equations.
        </MustKnow>

        <section aria-labelledby="substitution">
          <h3 id="substitution" className="text-xl font-semibold text-white">
            Rule of thumb 1: Prefer substitution when isolation is easy
          </h3>
          <p>
            If one equation already gives you a variable—or can do so with a
            one‑step manipulation—solve for that variable and plug into the
            other equation.
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-gray-100">Worked example</p>
            <K
              block
              expr={`\\begin{aligned}
20x + 30y &= 900\\\\
5x &= 75y
\\end{aligned}`}
              ariaLabel="system of equations: 20x plus 30y equals 900; and 5x equals 75y"
            />
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                From <K expr={"5x = 75y"} /> we get <K expr={"x = 15y"} />.
              </li>
              <li>
                Substitute into the first equation:
                <K expr={"20(15y) + 30y = 900 \\Rightarrow 330y = 900"} /> so{" "}
                <K expr={"y = \\tfrac{30}{11}"} />.
              </li>
            </ol>
          </div>

          <MCQExample
            number={1}
            prompt={
              <>
                In the system{" "}
                <K expr={"20x + 30y = 900"} /> and <K expr={"5x = 75y"} />, what
                is the value of <K expr={"y"} />?
              </>
            }
            options={["2", "30/11", "3", "15", "45"]}
            correct="30/11"
            solution={
              <>
                <p>
                  From <K expr={"5x = 75y"} />, we have <K expr={"x = 15y"} />.
                  Substitute into <K expr={"20x + 30y = 900"} />:
                  <K expr={"20(15y) + 30y = 900 \\Rightarrow 330y = 900"} /> so{" "}
                  <K expr={"y = \\tfrac{30}{11}"} />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="elimination">
          <h3 id="elimination" className="text-xl font-semibold text-white">
            Rule of thumb 2: Prefer combination (elimination) when matching coefficients is quick
          </h3>
          <p>
            If neither equation cleanly isolates a variable, look to scale one
            or both equations so a variable cancels when you add or subtract the
            equations.
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-gray-100">Worked example</p>
            <K
              block
              expr={`\\begin{aligned}
4x + 3y &= 12\\\\
3x + 4y &= 36
\\end{aligned}`}
              ariaLabel="system of equations: 4x plus 3y equals 12; and 3x plus 4y equals 36"
            />
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                Match the <K expr={"y"} /> coefficients:
                <K
                  block
                  expr={`\\begin{aligned}
\\text{(1)}\\times 4: \\quad 16x + 12y &= 48\\\\
\\text{(2)}\\times 3: \\quad 9x + 12y &= 108
\\end{aligned}`}
                />
                Subtract the second from the first:
                <K expr={"7x = -60 \\Rightarrow x = -\\tfrac{60}{7}"} />.
              </li>
              <li>
                Back‑substitute into <K expr={"4x + 3y = 12"} />:
                <K expr={"4\\left(-\\tfrac{60}{7}\\right) + 3y = 12"} />, so{" "}
                <K expr={"3y = 12 + \\tfrac{240}{7} = \\tfrac{324}{7}"} /> and{" "}
                <K expr={"y = \\tfrac{108}{7}"} />.
              </li>
            </ol>
          </div>

          <MCQExample
            number={2}
            prompt={
              <>
                For the system <K expr={"4x + 3y = 12"} /> and{" "}
                <K expr={"3x + 4y = 36"} />, find <K expr={"xy"} />.
              </>
            }
            options={["-6480/49", "-3240/49", "-648/7", "-480/7", "-60/7"]}
            correct="-6480/49"
            solution={
              <>
                <p>
                  Eliminate <K expr={"y"} />: scale and subtract to get{" "}
                  <K expr={"x = -\\tfrac{60}{7}"} />, then{" "}
                  <K expr={"y = \\tfrac{108}{7}"} />. Thus{" "}
                  <K expr={"xy = \\left(-\\tfrac{60}{7}\\right)\\!\\left(\\tfrac{108}{7}\\right) = -\\tfrac{6480}{49}"} />
                  .
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="patterns">
          <h3 id="patterns" className="text-xl font-semibold text-white">
            Quick picks: spotting the faster method
          </h3>
          <ul className="space-y-4">
            <li className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <p className="text-gray-200">
                Question:
                <span className="ml-2">
                  <K expr={"2x + 4y = 25"} /> and <K expr={"14x + 7y = 100"} />
                </span>
              </p>
              <p className="mt-1">
                Recommended: Combination. Multiply the first equation by{" "}
                <K expr={"7"} /> to match <K expr={"x"} /> coefficients and
                subtract to eliminate <K expr={"x"} />.
              </p>
            </li>
            <li className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <p className="text-gray-200">
                Question:
                <span className="ml-2">
                  <K expr={"3y = 12 + 6x"} /> and{" "}
                  <K expr={"15y + 20x = 5.5"} />
                </span>
              </p>
              <p className="mt-1">
                Recommended: Substitution. The first equation isolates{" "}
                <K expr={"y"} /> in one step; substitute into the second.
              </p>
            </li>
            <li className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <p className="text-gray-200">
                Question:
                <span className="ml-2">
                  <K expr={"55x + 10y = 101"} /> and <K expr={"2x + y = 76"} />
                </span>
              </p>
              <p className="mt-1">
                Recommended: Substitution. From the second equation,{" "}
                <K expr={"y = 76 - 2x"} />; plug into the first.
              </p>
            </li>
            <li className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <p className="text-gray-200">
                Question:
                <span className="ml-2">
                  <K expr={"7a + 14b = 27"} /> and <K expr={"14a + 7b = 14"} />
                </span>
              </p>
              <p className="mt-1">
                Recommended: Combination. Double the first equation to align{" "}
                <K expr={"a"} /> coefficients, then subtract to eliminate{" "}
                <K expr={"a"} />.
              </p>
            </li>
          </ul>
        </section>

        <MustKnow>
          In short: if a variable falls out of an equation with a single quick
          step, substitute. If not, scan for a fast way to match coefficients
          and cancel a variable. Let the structure of the system dictate your
          choice.
        </MustKnow>
      </article>
    </main>
  );
}