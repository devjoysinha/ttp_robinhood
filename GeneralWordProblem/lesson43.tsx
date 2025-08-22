import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
    trust: true,
    output: "html",
  });
  return (
    <span
      className={display ? "katex-display block my-2" : "inline-block align-middle"}
      aria-label={ariaLabel || expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.14 Word Problems with Inequalities and Equations | GMAT Quant",
  description:
    "Translate English to inequalities, combine equations with inequalities via substitution, and test sufficiency on GMAT-style Data Sufficiency problems. Includes quick checks, a worked example, and three DS drills with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. General Word Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">7.14 Word Problems with Inequalities and Equations</h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            Inequality word problems show up often on the GMAT. You’ll need to do two things well:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Turn everyday language into mathematical inequalities.</li>
            <li>Blend equations and inequalities—usually by substituting from the equation into the inequality—so that everything is in one variable.</li>
          </ul>
          <p>First, let’s translate common phrases into the correct inequality symbols.</p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-4 py-3">English phrase</th>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3">up to</td>
                  <td className="px-4 py-3">
                    <Math expr="\,\le" ariaLabel="less than or equal to" />
                  </td>
                  <td className="px-4 py-3">less than or equal to</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">more than</td>
                  <td className="px-4 py-3">
                    <Math expr="\,&gt;" ariaLabel="greater than" />
                  </td>
                  <td className="px-4 py-3">greater than</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">at least</td>
                  <td className="px-4 py-3">
                    <Math expr="\,\ge" ariaLabel="greater than or equal to" />
                  </td>
                  <td className="px-4 py-3">greater than or equal to</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">exceed</td>
                  <td className="px-4 py-3">
                    <Math expr="\,&gt;" ariaLabel="greater than" />
                  </td>
                  <td className="px-4 py-3">greater than</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">no more than</td>
                  <td className="px-4 py-3">
                    <Math expr="\,\le" ariaLabel="less than or equal to" />
                  </td>
                  <td className="px-4 py-3">less than or equal to</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">at most</td>
                  <td className="px-4 py-3">
                    <Math expr="\,\le" ariaLabel="less than or equal to" />
                  </td>
                  <td className="px-4 py-3">less than or equal to</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">as few as</td>
                  <td className="px-4 py-3">
                    <Math expr="\,\ge" ariaLabel="greater than or equal to" />
                  </td>
                  <td className="px-4 py-3">greater than or equal to</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Let x be Carla’s money and y be John’s money. Translate each statement:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>“John has at most $10.” → <Math expr="y \le 10" /></li>
            <li>“John has at least as much as Carla.” → <Math expr="y \ge x" /></li>
            <li>“John has more than Carla.” → <Math expr="y &gt; x" /></li>
            <li>“John has more than twice Carla.” → <Math expr="y &gt; 2x" /></li>
            <li>“John has at least three times Carla.” → <Math expr="y \ge 3x" /></li>
          </ul>
        </section>

        <MCQExample
          number={101}
          prompt='Which inequality matches the statement: "John has at most $10"?'
          options={["y < 10", "y ≤ 10", "y ≥ 10", "y > 10", "y = 10"]}
          correct="y ≤ 10"
          solution={
            <>
              <p>“At most” allows equality and anything smaller, so we use ≤.</p>
              <p>
                Therefore, the correct translation is <Math expr="y \le 10" ariaLabel="y less than or equal to 10" />.
              </p>
            </>
          }
        />

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Combining equations and inequalities</h3>
          <p>
            The fastest way to merge an equation with an inequality is to isolate a variable in the equation and substitute it into the inequality. That way, everything is in a single variable.
          </p>

          <div className="rounded-lg border border-blue-900/40 bg-blue-950/20 p-4">
            <p className="mb-2">Example:</p>
            <p>
              Given <Math expr="n &gt; 2m" /> and <Math expr="3m + 2 = n" />, express the inequality in terms of m.
            </p>
            <p>
              Substitute <Math expr="n=3m+2" /> into <Math expr="n &gt; 2m" />:
            </p>
            <p>
              <Math expr="3m+2 &gt; 2m \;\Rightarrow\; m &gt; -2" />
            </p>
          </div>

          <MustKnow>
            When an equation and inequality share variables, solve the equation for one variable, then plug that expression into the inequality. This reduces the problem to a single variable and simplifies the logic.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Worked application</h3>
          <p>
            Delilah has more than 20 red bottle caps. If she were to add 20 blue caps, she would then have 4 more blue caps than twice the number of red caps. What must be true about her original number of blue caps?
          </p>
          <p>Let r = number of red caps and b = number of blue caps.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Given: <Math expr="r &gt; 20" /></li>
            <li>“After adding 20 blue, blue = 2r + 4” → <Math expr="b + 20 = 2r + 4" /></li>
          </ul>
          <p>
            Rearrange the equation: <Math expr="b + 16 = 2r \;\Rightarrow\; r = \dfrac{b+16}{2}" />
          </p>
          <p>Substitute into r > 20:</p>
          <p>
            <Math expr="\dfrac{b+16}{2} &gt; 20 \;\Rightarrow\; b + 16 &gt; 40 \;\Rightarrow\; b &gt; 24" />
          </p>
          <p>So, Delilah started with more than 24 blue caps.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Data Sufficiency Drills</h3>

          <ExampleCard
            number={64}
            title="Comparing revenue for two toothbrush brands"
            statements={[
              "Brand X and brand Y sell for x and y dollars, respectively. Which brand generates more revenue?",
              "1) A brand X brush costs $1 more than a brand Y brush.",
              "2) The store sells 10 fewer brand X brushes than brand Y brushes.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Let m = number sold of brand X and n = number sold of brand Y. Revenues are{" "}
                  <Math expr="R_X = m x" /> and <Math expr="R_Y = n y" />. The question is whether{" "}
                  <Math expr="m x &gt; n y" />.
                </p>

                <p>
                  <strong>Statement (1):</strong> <Math expr="x = y + 1" />. Prices are related, but we don’t know{" "}
                  <Math expr="m" /> and <Math expr="n" />. Revenue could go either way. Not sufficient.
                </p>

                <p>
                  <strong>Statement (2):</strong> <Math expr="m = n - 10" />. Quantities are related, but prices{" "}
                  <Math expr="x,y" /> are unknown. Not sufficient.
                </p>

                <p>
                  <strong>Together:</strong> Combine to test <Math expr="m x &gt; n y" />. With{" "}
                  <Math expr="m = n - 10" /> and <Math expr="x = y + 1" />:
                </p>
                <p>
                  <Math expr="(n-10)(y+1) \overset{?}{&gt;} n y \;\Rightarrow\; n y + n - 10y - 10 \overset{?}{&gt;} n y" />
                </p>
                <p>
                  <Math expr="n - 10y - 10 \overset{?}{&gt;} 0 \;\Rightarrow\; n \overset{?}{&gt;} 10y + 10" />
                </p>
                <p>We’re still missing how n compares to y, so the sign is undetermined. Not sufficient.</p>
                <p>Answer: E</p>
              </>
            }
          />

          <ExampleCard
            number={65}
            title="Counting marbles with an inequality"
            statements={[
              "A jar contains red and green marbles, 64 in total. If there are fewer than 44 green marbles, how many green marbles are there?",
              "1) The number of green marbles is greater than twice the number of red marbles.",
              "2) The number of red marbles is less than 22.",
            ]}
            correctLetter="D"
            solution={
              <>
                <p>
                  Let <Math expr="r+g=64" /> with <Math expr="g &lt; 44" />. We need the exact value of{" "}
                  <Math expr="g" />.
                </p>

                <p>
                  <strong>Statement (1):</strong> <Math expr="g &gt; 2r" />. Since <Math expr="r = 64 - g" />, substitute:
                </p>
                <p>
                  <Math expr="g &gt; 2(64 - g) \;\Rightarrow\; g &gt; 128 - 2g \;\Rightarrow\; 3g &gt; 128 \;\Rightarrow\; g &gt; \tfrac{128}{3} \approx 42.67" />
                </p>
                <p>
                  With <Math expr="g &lt; 44" /> and integer counts, <Math expr="g = 43" />. Sufficient.
                </p>

                <p>
                  <strong>Statement (2):</strong> <Math expr="r &lt; 22" />. Then <Math expr="64 - g &lt; 22" />:
                </p>
                <p>
                  <Math expr="-g &lt; -42 \;\Rightarrow\; g &gt; 42" />
                </p>
                <p>
                  Combine with <Math expr="g &lt; 44" /> and integrality to get <Math expr="g = 43" />. Sufficient.
                </p>

                <p>Each statement alone determines g. Answer: D</p>
              </>
            }
          />

          <ExampleCard
            number={66}
            title="Who has more coins?"
            statements={[
              "Penny and Nicole collect pennies and nickels. Penny has more pennies than nickels; Nicole has more nickels than pennies. Who has more total coins?",
              "1) Penny’s number of pennies equals 1 more than twice Nicole’s number of nickels.",
              "2) Nicole’s number of pennies equals 1 more than twice Penny’s number of nickels.",
            ]}
            correctLetter="A"
            solution={
              <>
                <p>
                  Let Penny have <Math expr="p" /> pennies and <Math expr="n" /> nickels. Let Nicole have{" "}
                  <Math expr="q" /> pennies and <Math expr="m" /> nickels. Given: <Math expr="p &gt; n" /> and{" "}
                  <Math expr="m &gt; q" />. Question: is <Math expr="p+n &gt; q+m" />?
                </p>

                <p>
                  <strong>Statement (1):</strong> <Math expr="p = 2m + 1" />. Then
                </p>
                <p>
                  <Math expr="p+n \overset{?}{&gt;} q+m \;\;\Leftrightarrow\;\; (2m+1)+n \overset{?}{&gt;} q+m \;\;\Leftrightarrow\;\; m + 1 + n \overset{?}{&gt;} q" />
                </p>
                <p>
                  Since coin counts are integers and <Math expr="m &gt; q" />, we have <Math expr="m \ge q+1" />, so{" "}
                  <Math expr="m+1 \ge q+2 &gt; q" />. Adding <Math expr="n \ge 0" /> keeps the inequality strict. Yes, Penny has more. Sufficient.
                </p>

                <p>
                  <strong>Statement (2):</strong> <Math expr="q = 2n + 1" />. Now
                </p>
                <p>
                  <Math expr="p+n \overset{?}{&gt;} q+m \;\;\Leftrightarrow\;\; p \overset{?}{&gt;} (2n+1)-n+m \;\;\Leftrightarrow\;\; p \overset{?}{&gt;} n+1+m" />
                </p>
                <p>
                  From the stem we only know <Math expr="p &gt; n" />; we don’t know how <Math expr="p" /> compares to{" "}
                  <Math expr="m" />. Could go either way. Not sufficient.
                </p>

                <p>Answer: A</p>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Key takeaway</h3>
          <p>
            Translate words carefully, then push everything into one variable. Substitution turns mixed equation–inequality setups into a single inequality you can analyze. In Data Sufficiency, prove whether the relationships force a unique answer.
          </p>
        </section>
      </article>
    </main>
  );
}