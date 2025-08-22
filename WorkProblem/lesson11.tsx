import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "10.7.4 Percent and Fraction of Work | Work Problems",
  description:
    "Learn how to find the fraction or percent of a job completed by each worker when they work for the same amount of time. Includes a clear example and a quick multiple‑choice drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.7.4 Percent of a Job and Fraction of a Job
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many work‑rate questions, you’re asked what portion of a task a
          particular worker completed. When everyone works for the same amount
          of time, you can compute each person’s share directly from rates.
        </p>

        <MustKnow>
          If all workers spend the same time <InlineMath math="t" /> on the
          task, each worker’s share equals their rate divided by the sum of all
          rates. The time factor cancels.
          <BlockMath math="\text{Share of worker } i \;=\; \dfrac{r_i}{\sum r_j}" />
          To convert a share to a percent, multiply by 100.
        </MustKnow>

        <section aria-labelledby="bookcase-example" className="space-y-4">
          <h3 id="bookcase-example" className="text-white font-semibold">
            Quick walkthrough example
          </h3>
          <p>
            Suppose you and a friend build a bookcase. Your constant rate is{" "}
            <InlineMath math="\tfrac{1}{4}" /> bookcase per hour, and your
            friend’s rate is <InlineMath math="\tfrac{1}{8}" /> bookcase per
            hour. If you both work for the same duration{" "}
            <InlineMath math="t" />, how much of the bookcase did you build?
          </p>

          <p>
            Use the work equation <InlineMath math="W = R \times T" />.
            <br />
            Your work: <InlineMath math="W_\text{you} = \tfrac{1}{4}\,t" />.
            <br />
            Friend’s work: <InlineMath math="W_\text{friend} = \tfrac{1}{8}\,t" />
            .
          </p>

          <p>
            Total work:
            <BlockMath math="W_\text{total} \;=\; \tfrac{1}{4}t + \tfrac{1}{8}t = \tfrac{3}{8}t" />
            Your fraction of the job:
            <BlockMath math="\dfrac{W_\text{you}}{W_\text{total}} \;=\; \dfrac{\tfrac{1}{4}t}{\tfrac{3}{8}t} \;=\; \dfrac{2}{3}" />
            So you completed <InlineMath math="\tfrac{2}{3}" /> of the job, or
            approximately <InlineMath math="66.7\%" />.
          </p>

          <p>
            Notice how <InlineMath math="t" /> appears in both the numerator and
            denominator and cancels out. That’s why, when everyone works the
            same number of hours, you can focus on rates alone.
          </p>
        </section>

        <section aria-labelledby="rate-shortcut" className="space-y-2">
          <h3 id="rate-shortcut" className="text-white font-semibold">
            Rate‑only shortcut when time is the same
          </h3>
          <p>
            If all workers put in the same time, the share for worker{" "}
            <InlineMath math="i" /> is:
          </p>
          <BlockMath math="\text{Share}_i \;=\; \dfrac{r_i}{\sum r_j} \qquad\Longrightarrow\qquad \text{Percent}_i \;=\; \dfrac{r_i}{\sum r_j}\times 100" />
        </section>

        <MCQExample
          number={12}
          prompt="Machine A can build an engine in 8 hours. Machines B and C can each build the same engine in 4 hours. If all three machines work together for the same amount of time, what percent of the job is completed by Machine A?"
          options={["11%", "14%", "18%", "20%", "25%"]}
          correct="20%"
          solution={
            <>
              <p>
                Convert times to rates (engines per hour):
                <br />
                <InlineMath math="r_A = \tfrac{1}{8}" />,{" "}
                <InlineMath math="r_B = \tfrac{1}{4}" />,{" "}
                <InlineMath math="r_C = \tfrac{1}{4}" />.
              </p>
              <p>
                Since they work for the same time, A’s share equals its rate
                over the sum of rates:
              </p>
              <BlockMath math="\text{Share}_A = \dfrac{r_A}{r_A + r_B + r_C} = \dfrac{\tfrac{1}{8}}{\tfrac{1}{8}+\tfrac{1}{4}+\tfrac{1}{4}} = \dfrac{\tfrac{1}{8}}{\tfrac{5}{8}} = \tfrac{1}{5}" />
              <p>
                Convert to percent: <InlineMath math="\tfrac{1}{5}\times 100\% = 20\%" />.
                The time variable cancels, so we never needed to compute it.
              </p>
              <p>Answer: 20%.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-white font-semibold">
            Wrap‑up
          </h3>
          <p>
            When all workers are active for the same duration, the fraction or
            percent of the job each completes is determined by rates alone. Use{" "}
            <InlineMath math="W = R \times T" /> to confirm that the common time
            cancels, or jump straight to the shortcut{" "}
            <InlineMath math="r_i / \sum r_j" />.
          </p>
        </section>
      </article>
    </main>
  );
}