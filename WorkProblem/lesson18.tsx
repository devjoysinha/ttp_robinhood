import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.10.3 Percent Faster/Slower in Time | Work Problems",
  description:
    "Learn how to translate 'x% fewer (or more) minutes' into equations, build rates with KaTeX, and solve GMAT-style problems. Includes one multiple-choice example and one Data Sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.10.3 When one worker needs a percent more/less time than another
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Problems often describe one worker as finishing a task in some percent
          fewer (or more) minutes than another worker. A clean way to model
          these is to let the slower worker&apos;s time be{" "}
          <InlineMath math="t" /> and express the other time as a percentage of{" "}
          <InlineMath math="t" />. Then convert times to rates using{" "}
          <InlineMath math="\text{rate} = \dfrac{1}{\text{time}}" />.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-white">Translate time first:</p>
            <ul className="list-inside list-disc">
              <li>
                If worker A needs x% fewer minutes than worker B, and B&apos;s
                time is <InlineMath math="t" />, then
                <InlineMath math="\;T_A = t\left(1 - \dfrac{x}{100}\right)." />
              </li>
              <li>
                If A needs x% more minutes than B, then
                <InlineMath math="\;T_A = t\left(1 + \dfrac{x}{100}\right)." />
              </li>
            </ul>
            <p className="font-semibold text-white">Then build rates:</p>
            <BlockMath math={`R = \\dfrac{1}{T}\\quad\\text{(jobs per unit time)}`} />
            <p className="text-sm text-gray-300">
              Caution: “x% faster” in{" "}
              <span className="italic">rate</span> is not the same as “x% fewer
              minutes” in <span className="italic">time</span>. In this lesson,
              we handle percent comparisons stated in time.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mcq-1" className="space-y-4">
          <h3 id="mcq-1" className="sr-only">
            Multiple-choice example
          </h3>

          <MCQExample
            number={21}
            prompt="Jamshid can paint a fence in 50% less time than Taimour can when each works alone. Working together, they finish the fence in 8 hours. How long would it take Taimour to paint the fence by himself?"
            options={["6 hours", "8 hours", "14 hours", "24 hours", "32 hours"]}
            correct="24 hours"
            solution={
              <>
                <p className="mb-2">
                  Let Taimour&apos;s solo time be <InlineMath math="t" /> hours.
                  Jamshid needs 50% fewer minutes, so his time is{" "}
                  <InlineMath math="0.5t" /> hours. Convert to rates (jobs per
                  hour):
                </p>
                <BlockMath math="R_T = \dfrac{1}{t},\quad R_J = \dfrac{1}{0.5t} = \dfrac{2}{t}." />
                <p className="mb-2">
                  Together, the combined rate is{" "}
                  <InlineMath math="R_T + R_J = \dfrac{1}{t} + \dfrac{2}{t} = \dfrac{3}{t}" />{" "}
                  jobs per hour. Time to complete one fence together:
                </p>
                <BlockMath math={`T_{\\text{together}} = \\dfrac{1}{3/t} = \\dfrac{t}{3}.`} />
                <p>
                  We&apos;re told <InlineMath math="t/3 = 8" />, so{" "}
                  <InlineMath math="t = 24" /> hours. Therefore, Taimour alone
                  needs 24 hours.
                </p>
              </>
            }
          />
        </section>

        <p>
          The key steps are the same every time: translate the percent
          comparison into a time expression, turn times into rates, then use
          work-rate-time relationships.
        </p>

        <section aria-labelledby="ds-1" className="space-y-4">
          <h3 id="ds-1" className="sr-only">
            Data Sufficiency example
          </h3>

          <ExampleCard
            number={22}
            title="Could Y finish 100 bulbs in under 60% of X's time?"
            statements={[
              "If X and Y always work alone at constant rates, could machine Y produce 100 light bulbs in less than 60% of the time that machine X would take?",
              "1) Y takes 50% less time than X to produce 4,000 bulbs.",
              "2) Y works twice as fast as X.",
            ]}
            correctLetter="D"
            solution={
              <>
                <p className="mb-2">
                  We want to know whether{" "}
                  <InlineMath math="T_Y(100) < 0.6\,T_X(100)" />. Recall{" "}
                  <InlineMath math="T = \dfrac{\text{work}}{\text{rate}}" />.
                </p>

                <p className="mb-1">
                  <strong>Statement (1):</strong> Y needs 50% less time than X
                  for 4,000 bulbs:
                </p>
                <BlockMath math="T_Y(4000) = 0.5\,T_X(4000)" />
                <p className="mb-2">
                  With constant rates, for the same output, time ratios equal
                  the inverse of rate ratios:
                </p>
                <BlockMath math={`\\dfrac{4000}{r_Y} = 0.5\\,\\dfrac{4000}{r_X} \\;\\Rightarrow\\; r_Y = 2r_X.`} />
                <p className="mb-2">
                  Then for 100 bulbs,{" "}
                  <InlineMath math="T_Y(100) = \frac{100}{r_Y} = \frac{100}{2r_X} = 0.5\,T_X(100)" />
                  , which is strictly less than{" "}
                  <InlineMath math="0.6\,T_X(100)" />. Sufficient.
                </p>

                <p className="mb-1">
                  <strong>Statement (2):</strong> Y works twice as fast as X:
                </p>
                <BlockMath math="r_Y = 2r_X \\;\\Rightarrow\\; T_Y(100) = \dfrac{100}{2r_X} = 0.5\,T_X(100) < 0.6\,T_X(100)." />
                <p>Sufficient.</p>

                <p className="mt-3">
                  Each statement alone guarantees{" "}
                  <InlineMath math="T_Y(100) < 0.6\,T_X(100)" />. Answer: D.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          When percent comparisons are given in time, convert to exact times
          first and only then move to rates. For combined work, add rates, not
          times.
        </MustKnow>
      </article>
    </main>
  );
}