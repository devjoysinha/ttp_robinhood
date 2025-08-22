import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "17.9 Accounting for Multiple Outcomes | Probability",
  description:
    "How to handle events that can happen in several ways. Learn to count favorable sequences and use the binomial model. Includes worked coin‑flip and weather examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.9 Accounting for Multiple Outcomes
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to this point, we’ve focused on events that happen in exactly one
          way (for example, “heads on the first toss and tails on the second
          toss”). In many questions, though, the event can occur through several
          different sequences, and we must account for all of them.
        </p>

        <p>
          Consider a warm‑up: flip a fair coin twice. What’s the probability of
          heads on the first toss and tails on the second? This single sequence{" "}
          <InlineMath math="\text{HT}" /> has probability{" "}
          <InlineMath math="P(\text{HT})=\tfrac12\cdot\tfrac12=\tfrac14" />.
        </p>

        <p>
          Now change the event to “exactly one head in two flips.” That event is
          satisfied by two different sequences, <InlineMath math="\text{HT}" />{" "}
          or <InlineMath math="\text{TH}" />. Each sequence has probability{" "}
          <InlineMath math="\tfrac14" />, so the total probability is{" "}
          <InlineMath math="\tfrac14+\tfrac14=\tfrac12" />.
        </p>

        <MustKnow>
          When an event can happen through multiple equally likely sequences,
          the event probability equals:
          <div className="mt-2">
            <BlockMath math="\text{(# of favorable sequences)}\times \text{(probability of one sequence)}" />
          </div>
          Use this shortcut only when the sequences are equally likely (for
          example, independent coin flips). If they are not equally likely,
          compute and add each sequence’s probability directly.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: three flips, exactly two heads
          </h3>
          <p>
            Flip a fair coin three times. What’s the probability of getting
            exactly two heads?
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Count the favorable sequences: arrange HHT in any order. The
              number of distinct arrangements is{" "}
              <InlineMath math="\frac{3!}{2!}=3" />.
            </li>
            <li>
              Probability of one sequence (e.g., HHT):{" "}
              <InlineMath math="\left(\tfrac12\right)^3=\tfrac18" />.
            </li>
            <li>
              Multiply: <InlineMath math="3\times\tfrac18=\tfrac38" />.
            </li>
          </ul>
          <p>
            Equivalently, this is a binomial setting with{" "}
            <InlineMath math="n=3,\ p=\tfrac12,\ k=2" />, so
          </p>
          <BlockMath math="P(X=2)=\binom{3}{2}\left(\tfrac12\right)^2\left(\tfrac12\right)^{1}=\tfrac38" />
        </section>

        <MCQExample
          number={11}
          prompt="A fair coin is flipped 4 times. What is the probability that the coin lands on heads exactly two times?"
          options={["1/16", "1/8", "1/4", "3/8", "5/8"]}
          correct="3/8"
          solution={
            <>
              <p>
                We want exactly two heads in four independent flips. Count the
                sequences and multiply by the probability of any one sequence:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Number of favorable sequences:{" "}
                  <InlineMath math="\binom{4}{2}=6" />.
                </li>
                <li>
                  Probability of one sequence (e.g., HHTT):{" "}
                  <InlineMath math="\left(\tfrac12\right)^4=\tfrac{1}{16}" />.
                </li>
              </ul>
              <p>
                Therefore,{" "}
                <InlineMath math="6\cdot\tfrac{1}{16}=\tfrac{6}{16}=\tfrac{3}{8}" />
                .
              </p>
            </>
          }
        />

        <MCQExample
          number={12}
          prompt="In Town X, the chance of rain on any given day is 40%. What is the probability that it rains on exactly 3 days in a particular 4‑day stretch?"
          options={["24/625", "36/625", "72/625", "84/625", "96/625"]}
          correct="96/625"
          solution={
            <>
              <p>
                Let <InlineMath math="p=0.4=\tfrac{2}{5}" /> be the probability
                of rain on a single day, and{" "}
                <InlineMath math="1-p=0.6=\tfrac{3}{5}" /> be the probability of
                no rain. We want exactly three rainy days out of four (binomial
                setting with <InlineMath math="n=4,\ k=3" />):
              </p>
              <BlockMath math="P(X=3)=\binom{4}{3}p^3(1-p)^{1}=4\cdot\left(\tfrac{2}{5}\right)^3\left(\tfrac{3}{5}\right)=4\cdot\tfrac{8}{125}\cdot\tfrac{3}{5}=\tfrac{96}{625}" />
              <p>So the correct choice is 96/625.</p>
            </>
          }
        />

        <section aria-labelledby="binomial-wrap" className="space-y-3">
          <h3 id="binomial-wrap" className="text-xl font-semibold text-white">
            Binomial model (quick reference)
          </h3>
          <p>
            When an event with constant probability <InlineMath math="p" /> is
            repeated independently <InlineMath math="n" /> times, the
            probability of getting exactly <InlineMath math="k" /> “successes” is
          </p>
          <BlockMath math="P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}" />
          <p>
            This formula captures both how many favorable sequences exist and the
            probability of any one such sequence.
          </p>
        </section>
      </article>
    </main>
  );
}