import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "17.3 Probability Is Between 0 and 1 (Inclusive) | Probability",
  description:
    "Understand why every probability lies on the closed interval [0, 1]. See quick examples, counterexamples, and two DS-style drills that reinforce the bounds.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.3 Probability Must Fall Between 0 and 1, Inclusive
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Probabilities are bounded quantities: the chance of any event can never be
          less than 0 or greater than 1. In symbols,{" "}
          <InlineMath math={"0 \\le P(E) \\le 1"} /> for every event E.
        </p>

        <p>
          If an event is impossible, its probability is 0. For instance, the probability
          that an even prime greater than 2 is selected from the set of primes is 0
          (because 2 is the only even prime). On the other hand, if an event is certain,
          its probability is 1. For example, a single roll of a fair six‑sided die must
          show an integer, so that event has probability 1.
        </p>

        <MustKnow>
          A probability always lies on the closed interval [0, 1]. That is,{" "}
          <InlineMath math={"0 \\le P(E) \\le 1"} />. Impossible events have probability 0; events
          that must occur have probability 1.
        </MustKnow>

        <p>
          Most real scenarios fall strictly between 0 and 1, represented as fractions,
          decimals, or percentages in that range. For example,{" "}
          <InlineMath math={"\\tfrac{3}{10} = 0.3 = 30\\%"} /> is a valid probability, while 1.2 and
          −0.4 are not.
        </p>

        <MCQExample
          number={31}
          prompt="Which of the following could represent the probability of an event?"
          options={["-1/3", "0.4", "120%", "1.3", "4/3"]}
          correct="0.4"
          solution={
            <>
              <p>
                Valid probabilities satisfy <InlineMath math={"0 \\le p \\le 1"} /> or, in percent form,
                0% to 100%. Among the options, only 0.4 lies in this interval. The values −1/3 and 4/3
                are outside the range, and 120% and 1.3 exceed 1.
              </p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Is p a valid probability?"
          statements={[
            "1) p = 1 − q, where q is a probability",
            "2) p > 0",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We must determine whether <InlineMath math={"0 \\le p \\le 1"} />.
              </p>
              <p>
                <strong>Statement (1):</strong> If q is a probability, then{" "}
                <InlineMath math={"0 \\le q \\le 1"} />. Thus,{" "}
                <InlineMath math={"p = 1 - q"} /> implies{" "}
                <InlineMath math={"0 \\le p \\le 1"} />. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Knowing only that <InlineMath math={"p > 0"} /> does
                not prevent p from being greater than 1 (e.g., p = 1.5). Not sufficient.
              </p>
              <p>Therefore, statement (1) alone is sufficient. Answer: A.</p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Bounding a linear expression of a probability"
          statements={[
            "Is -1 ≤ 3p − 1 ≤ 2?",
            "1) p ≥ 0",
            "2) p ≤ 1",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                The inequality <InlineMath math={"-1 \\le 3p - 1 \\le 2"} /> is equivalent to{" "}
                <InlineMath math={"0 \\le 3p \\le 3"} />, which simplifies to{" "}
                <InlineMath math={"0 \\le p \\le 1"} />.
              </p>
              <p>
                <strong>Statement (1):</strong> <InlineMath math={"p \\ge 0"} /> only gives the lower bound;
                p could still exceed 1, breaking the upper bound. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> <InlineMath math={"p \\le 1"} /> only gives the upper bound;
                p could be negative, breaking the lower bound. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> <InlineMath math={"0 \\le p \\le 1"} />, which guarantees{" "}
                <InlineMath math={"-1 \\le 3p - 1 \\le 2"} />. Sufficient.
              </p>
              <p>Therefore, both statements together are sufficient. Answer: C.</p>
            </>
          }
        />

        <p>
          Takeaway: check the bounds first. Any claimed probability that falls outside{" "}
          <InlineMath math={"[0, 1]"} /> is invalid—no computation required.
        </p>
      </article>
    </main>
  );
}