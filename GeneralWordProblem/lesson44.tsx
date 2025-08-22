import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.14.1 Max–Min: Building Equations and Inequalities | Word Problems",
  description:
    "Learn a reliable workflow for max–min word problems: translate text to equations/inequalities, eliminate variables, and optimize. Includes a worked example and a multiple‑choice practice question with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.14.1 Creating Equations and Inequalities for Max–Min Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A dependable way to handle max–min word problems is to turn the story
          into equations and inequalities, then reduce everything to a single
          variable before you optimize. That reduction step makes it clear which
          extreme value is allowed by the constraints.
        </p>

        <MustKnow>
          For max–min setups with multiple unknowns, translate the facts into
          equations/inequalities and then rewrite the key inequality in terms of
          one variable. With a single‑variable inequality, you can quickly read
          off the feasible extreme (minimum or maximum) that the question asks
          for.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example (maximize the count)
          </h3>
          <p className="text-gray-300">
            A home gym has only 5‑lb and 20‑lb plates. There are more 20‑lb
            plates than 5‑lb plates. If the plates together weigh 425 lb, what
            is the greatest possible number of plates?
          </p>

          <p>
            Let <InlineMath>H</InlineMath> be the number of 20‑lb plates and{" "}
            <InlineMath>L</InlineMath> be the number of 5‑lb plates. We are
            given:
          </p>

          <BlockMath>{String.raw`
\begin{aligned}
H &> L \\
20H + 5L &= 425
\end{aligned}
          `}</BlockMath>

          <p>Solve the equation for L:</p>

          <BlockMath>{String.raw`
\begin{aligned}
20H + 5L &= 425 \\
5L &= 425 - 20H \\
L &= 85 - 4H
\end{aligned}
          `}</BlockMath>

          <p>Substitute into the inequality <InlineMath>H &gt; L</InlineMath>:</p>

          <BlockMath>{String.raw`
\begin{aligned}
H &> 85 - 4H \\
5H &> 85 \\
H &> 17
\end{aligned}
          `}</BlockMath>

          <p>
            Since <InlineMath>H</InlineMath> is an integer, the least it can be
            is <InlineMath>18</InlineMath>. Those{" "}
            <InlineMath>18</InlineMath> heavy plates weigh{" "}
            <InlineMath>18 \times 20 = 360</InlineMath> lb, so the remaining
            weight is <InlineMath>425 - 360 = 65</InlineMath> lb, which must
            come from 5‑lb plates. Thus{" "}
            <InlineMath>65 \div 5 = 13</InlineMath> small plates.
          </p>

          <p className="font-semibold text-white">
            Maximum number of plates = <InlineMath>18 + 13 = 31</InlineMath>.
          </p>
        </section>

        <MustKnow>
          When the goal is to maximize the count under a fixed total, try to use
          as many higher‑value items (heavier or more expensive) as the
          constraints allow; when minimizing the count, push toward higher unit
          values while respecting any required inequalities between the
          variables.
        </MustKnow>

        <section aria-labelledby="practice" className="space-y-4">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Practice: Multiple Choice
          </h3>

          <MCQExample
            number={67}
            prompt="Vern spent $132 on only two kinds of chocolate bars: small bars cost $2 each, and large bars cost $4 each. If he bought more small bars than large bars, what is the smallest possible total number of bars he could have purchased?"
            options={["33", "37", "39", "41", "45"]}
            correct="45"
            solution={
              <>
                <p>
                  Let <InlineMath>L</InlineMath> be the number of large bars
                  and <InlineMath>S</InlineMath> the number of small bars. The
                  facts give:
                </p>
                <BlockMath>{String.raw`
\begin{aligned}
4L + 2S &= 132 \\
S &> L
\end{aligned}
                `}</BlockMath>
                <p>Solve the cost equation for S:</p>
                <BlockMath>{String.raw`
\begin{aligned}
4L + 2S &= 132 \\
2S &= 132 - 4L \\
S &= 66 - 2L
\end{aligned}
                `}</BlockMath>
                <p>Impose S &gt; L:</p>
                <BlockMath>{String.raw`
\begin{aligned}
66 - 2L &> L \\
66 &> 3L \\
L &< 22
\end{aligned}
                `}</BlockMath>
                <p>
                  To minimize the total bars <InlineMath>S + L</InlineMath>, use
                  as many large bars as allowed:{" "}
                  <InlineMath>L = 21</InlineMath>. Then{" "}
                  <InlineMath>
                    S = 66 - 2(21) = 66 - 42 = 24
                  </InlineMath>
                  , which satisfies <InlineMath>S &gt; L</InlineMath>.
                </p>
                <p className="font-semibold text-white">
                  Minimum total = <InlineMath>21 + 24 = 45</InlineMath>.
                </p>
                <p className="text-gray-400">
                  Note: The tempting choice 33 corresponds to spending all the
                  money on large bars (
                  <InlineMath>132 \div 4 = 33</InlineMath>), but that would make{" "}
                  <InlineMath>S = 0</InlineMath>, violating{" "}
                  <InlineMath>S &gt; L</InlineMath>.
                </p>
              </>
            }
          />
        </section>

        <p>
          Summary: Translate, reduce to one variable, then push that variable to
          its allowed extreme while respecting all constraints. This keeps your
          search efficient and eliminates guesswork.
        </p>
      </article>
    </main>
  );
}