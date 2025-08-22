import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: '15.3 Measurement Changes by a "Factor of" | Formula Logic',
  description:
    'Learn how “increase/decrease by a factor of” changes a formula’s inputs. Covers rules for f ≥ 1 vs 0 < f < 1, worked mini‑examples, and two multiple‑choice problems with full solutions.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          15. Formula Logic
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          15.3 Measurement Changes by a “Factor of”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In formula questions, “factor of” describes how a measurement is altered before
          you plug it back into the formula. For example:
        </p>
        <ul className="ml-5 list-disc space-y-1 text-gray-300">
          <li>“The cylinder’s height is increased by a factor of 5.”</li>
          <li>“The circle’s radius is decreased by a factor of 3.”</li>
          <li>“The rectangle’s width is increased by a factor of 3.”</li>
        </ul>

        <p>
          The interpretation depends on whether the factor f is at least 1 or between 0 and 1.
          That nuance is what trips people up.
        </p>

        <section aria-labelledby="increase-rules">
          <h3 id="increase-rules" className="text-xl font-semibold text-white">
            Interpreting “increased by a factor of f”
          </h3>

          <p>
            If a quantity M is increased by a factor of f:
          </p>

          <MustKnow>
            <ul className="ml-5 list-disc">
              <li>
                If f ≥ 1, the new value is <InlineMath math="M\cdot f" />.
              </li>
              <li>
                If 0 &lt; f &lt; 1, the new value is <InlineMath math="M + M\cdot f = M(1+f)" />.
              </li>
            </ul>
          </MustKnow>

          <p>Quick checks:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              40 increased by a factor of 3 → <InlineMath math="40\cdot 3=120" />.
            </li>
            <li>
              40 increased by a factor of <InlineMath math="\tfrac{1}{5}" /> →{" "}
              <InlineMath math="40+40\cdot \tfrac{1}{5}=40+8=48" />.
            </li>
          </ul>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-white">Mini‑example</p>
            <p className="mb-2">
              Two trees start at the same height y. Tree A is increased by a factor of 6,
              and Tree B is increased by a factor of 0.5. How many times Tree B’s new height
              is Tree A’s new height?
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                A: <InlineMath math="6y" /> (since 6 ≥ 1, multiply).
              </li>
              <li>
                B: <InlineMath math="y + 0.5y = 1.5y" /> (since 0.5 &lt; 1, add half of itself).
              </li>
            </ul>
            <p className="mt-2">
              Ratio = <InlineMath math="\dfrac{6y}{1.5y}=4" />. Tree A’s new height is 4 times Tree B’s.
            </p>
          </div>
        </section>

        <section aria-labelledby="decrease-rules">
          <h3 id="decrease-rules" className="text-xl font-semibold text-white">
            Interpreting “decreased by a factor of f”
          </h3>

          <p>
            If a quantity M is decreased by a factor of f:
          </p>

          <MustKnow>
            <ul className="ml-5 list-disc">
              <li>
                If f ≥ 1, the new value is <InlineMath math="\dfrac{M}{f}" />.
              </li>
              <li>
                If 0 &lt; f &lt; 1, the new value is <InlineMath math="M - M\cdot f = M(1-f)" />.
              </li>
            </ul>
          </MustKnow>

          <p>Quick checks:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              80 decreased by a factor of 8 → <InlineMath math="\dfrac{80}{8}=10" />.
            </li>
            <li>
              80 decreased by a factor of <InlineMath math="\tfrac{1}{4}" /> →{" "}
              <InlineMath math="80-80\cdot \tfrac{1}{4}=80-20=60" />.
            </li>
          </ul>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-white">Mini‑example</p>
            <p className="mb-2">
              Trees P and Q start at height h. P is decreased by a factor of 9,
              and Q is decreased by a factor of <InlineMath math="\tfrac{1}{3}" />.
              What percent of Q’s new height is P’s new height?
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                P: <InlineMath math="\dfrac{h}{9}" /> (divide by 9).
              </li>
              <li>
                Q: <InlineMath math="h - h\cdot \tfrac{1}{3} = \tfrac{2h}{3}" />.
              </li>
            </ul>
            <p className="mt-2">
              Percent ={" "}
              <InlineMath math="\dfrac{\frac{h}{9}}{\frac{2h}{3}}\times 100=\dfrac{1}{6}\times 100=\;16\tfrac{2}{3}\%\;\approx 16.7\%" />
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="process">
          <h3 id="process" className="text-xl font-semibold text-white">
            A consistent process for “factor of” questions
          </h3>
          <p>Use either approach and stick to it:</p>
          <ul className="ml-5 list-decimal space-y-1">
            <li>Write the original formula output with variables.</li>
            <li>Apply the stated changes to each variable using the rules above.</li>
            <li>Compute the new output with the altered variables.</li>
            <li>Compare original vs new to answer the prompt.</li>
          </ul>
          <p className="mt-2">Or use numbers:</p>
          <ul className="ml-5 list-decimal space-y-1">
            <li>Assign values to the variables and compute the original output.</li>
            <li>Apply the changes to those numbers.</li>
            <li>Compute the new output.</li>
            <li>Compare to answer the question.</li>
          </ul>

          <MustKnow>
            You can solve “factor of” problems using either algebra or smart number testing.
            Be precise about whether f is at least 1 or between 0 and 1.
          </MustKnow>
        </section>

        <section aria-labelledby="box-volume">
          <h3 id="box-volume" className="text-xl font-semibold text-white">
            Worked example: Box volume transformation
          </h3>
          <p>
            The volume of a box is <InlineMath math="V=LWH" />. The length is increased by{" "}
            <InlineMath math="\tfrac{1}{4}" />, the width is decreased by 5, and the height
            is decreased by 8. How many times the volume of the original box is the volume
            of the new box?
          </p>
          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2">
              Let the original dimensions be <InlineMath math="L=a,\;W=b,\;H=c" />, so{" "}
              <InlineMath math="V_{\text{orig}}=abc" />.
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Length “increased by a factor of <InlineMath math='\tfrac{1}{4}' />” →{" "}
                <InlineMath math="a + a\cdot \tfrac{1}{4}=\tfrac{5a}{4}" />.
              </li>
              <li>
                Width “decreased by a factor of 5” → <InlineMath math="\tfrac{b}{5}" />.
              </li>
              <li>
                Height “decreased by a factor of 8” → <InlineMath math="\tfrac{c}{8}" />.
              </li>
            </ul>
            <p className="mt-2">
              New volume:{" "}
              <BlockMath math={`V_{\\text{new}}=\\frac{5a}{4}\\cdot\\frac{b}{5}\\cdot\\frac{c}{8}
              =\\frac{abc}{32}`} />
            </p>
            <p>
              So <InlineMath math="\dfrac{V_{\text{orig}}}{V_{\text{new}}}=\dfrac{abc}{\frac{abc}{32}}=32" />.
              The original volume is 32 times the new volume.
            </p>
          </div>
        </section>

        <MCQExample
          number={3}
          prompt={
            <>
              Newton’s second law is <InlineMath math="F=ma" />. If mass increases by a
              factor of 5 and acceleration decreases by a factor of{" "}
              <InlineMath math="\tfrac{1}{5}" />, by what percent does the net force change?
            </>
          }
          options={["0 percent", "33 1/3 percent", "75 percent", "300 percent", "400 percent"]}
          correct="300 percent"
          solution={
            <>
              <p className="mb-2">
                Let the original be <InlineMath math="F_0=ma" />.
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Mass after change: <InlineMath math="5m" /> (multiply because 5 ≥ 1).
                </li>
                <li>
                  Acceleration after change:{" "}
                  <InlineMath math="a - a\cdot \tfrac{1}{5}=\tfrac{4a}{5}" /> (subtract because{" "}
                  <InlineMath math="\tfrac{1}{5} &lt; 1" />).
                </li>
              </ul>
              <p className="mt-2">
                New force:{" "}
                <InlineMath math="F_{\text{new}}=(5m)\left(\tfrac{4a}{5}\right)=4\,ma=4F_0" />.
              </p>
              <p>
                Percent increase:{" "}
                <InlineMath math="\dfrac{F_{\text{new}}-F_0}{F_0}\times 100=\dfrac{4F_0-F_0}{F_0}\times 100=300\%" />
                . Answer: 300 percent.
              </p>
            </>
          }
        />

        <MCQExample
          number={4}
          prompt={
            <>
              The area of a triangle is{" "}
              <InlineMath math="A=\tfrac12\,bh" />. If the height is increased by a factor
              of 5 and the base is decreased by x percent, the area decreases by a factor of 4.
              What is x?
            </>
          }
          options={["5", "20", "75", "80", "95"]}
          correct="95"
          solution={
            <>
              <p className="mb-2">
                Let original base and height be <InlineMath math="b=y,\;h=z" />, so{" "}
                <InlineMath math="A_{\text{orig}}=\tfrac12 yz" />.
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  New height: <InlineMath math="5z" />.
                </li>
                <li>
                  New base: <InlineMath math="y\left(1-\dfrac{x}{100}\right)" />.
                </li>
              </ul>
              <p className="mt-2">
                New area:{" "}
                <InlineMath math={`A_{\\text{new}}=\\tfrac12\\cdot y\\Bigl(1-\\tfrac{x}{100}\\Bigr)\\cdot 5z=2.5\\,yz\\Bigl(1-\\tfrac{x}{100}\\Bigr)`} />
                .
              </p>
              <p>
                Decreased by a factor of 4 means{" "}
                <InlineMath math="A_{\text{new}}=\dfrac{A_{\text{orig}}}{4}" />. Substitute:
              </p>
              <BlockMath math={`2.5\\,yz\\Bigl(1-\\tfrac{x}{100}\\Bigr)=\\dfrac{0.5\\,yz}{4}`} />
              <p>
                Cancel <InlineMath math="yz" /> and solve:{" "}
                <InlineMath math={`2.5\\Bigl(1-\\tfrac{x}{100}\\Bigr)=0.125 \\Rightarrow 1-\\tfrac{x}{100}=0.05 \\Rightarrow x=95`} />
                . Answer: 95.
              </p>
            </>
          }
        />

        <p>
          Bottom line: identify whether f is at least 1 or between 0 and 1, adjust each
          variable accordingly, and then compare outputs. That simple checklist prevents
          most mistakes on “factor of” problems.
        </p>
      </article>
    </main>
  );
}