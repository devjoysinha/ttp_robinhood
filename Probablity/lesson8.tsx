import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { ExampleCard } from "@/components/ui/ExampleCard";

function TeX({
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
    strict: "ignore",
    output: "html",
    displayMode: block,
  });

  if (block) {
    return (
      <div
        className="my-2 overflow-x-auto"
        role="math"
        aria-label={ariaLabel || expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="math"
      aria-label={ariaLabel || expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "17.7 Mutually Exclusive Events | Probability",
  description:
    "Understand mutually exclusive events in probability. Learn core definitions, the connection to addition rules, and practice with quick examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.7 Mutually Exclusive Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two events are called mutually exclusive when they cannot happen
          together on a single trial. In other words, if one event occurs, the
          other is ruled out. A classic example is a single coin toss: getting
          heads and getting tails cannot both occur on the same flip.
        </p>

        <p>
          Using set and probability notation, mutual exclusivity can be stated
          as
          {" "}
          <TeX expr="A \cap B = \varnothing" ariaLabel="A intersection B is empty" />
          , which immediately implies
          {" "}
          <TeX expr="P(A \cap B) = 0" ariaLabel="Probability of A intersection B equals zero" />
          .
          The general addition rule for any two events is
          {" "}
          <TeX
            block
            expr="P(A \cup B) = P(A) + P(B) - P(A \cap B)"
            ariaLabel="Probability of A union B equals probability of A plus probability of B minus probability of A intersection B"
          />
          and for mutually exclusive events this simplifies to
          {" "}
          <TeX
            expr="P(A \cup B) = P(A) + P(B)"
            ariaLabel="Probability of A union B equals probability of A plus probability of B"
          />
          {" "}
          because the overlap term is zero.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Mutually exclusive means “no overlap.”
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <TeX expr="A \cap B = \varnothing" ariaLabel="A intersection B equals empty set" />{" "}
                so <TeX expr="P(A \cap B) = 0" ariaLabel="Probability of A intersection B is zero" />.
              </li>
              <li>
                Addition rule reduces to{" "}
                <TeX
                  expr="P(A \cup B) = P(A) + P(B)"
                  ariaLabel="Probability of A union B equals probability of A plus probability of B"
                />
                {" "}
                only when events are mutually exclusive.
              </li>
              <li>
                If{" "}
                <TeX
                  expr="P(A \cup B) = P(A) + P(B)"
                  ariaLabel="Probability of A union B equals probability of A plus probability of B"
                />{" "}
                holds, then{" "}
                <TeX
                  expr="P(A \cap B)=0"
                  ariaLabel="Probability of A intersection B is zero"
                />{" "}
                and the events are mutually exclusive.
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which pair of events is mutually exclusive?"
          options={[
            "Drawing a card: A = red card, B = king",
            "Rolling one die: A = even number, B = divisible by 3",
            "Flipping one coin: A = heads, B = tails",
            "Selecting a student: A = senior, B = math major",
            "Rolling one die: A = prime, B = even",
          ]}
          correct="Flipping one coin: A = heads, B = tails"
          solution={
            <>
              <p>
                Mutually exclusive events cannot occur together. On a single
                coin toss, the outcomes “heads” and “tails” can’t both happen.
              </p>
              <p>
                The others have overlaps:
                red kings exist in a deck;
                even and divisible by 3 overlap at 6;
                a student can be both a senior and a math major;
                prime and even overlap at 2.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Events A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.2. What is P(A ∪ B)?"
          options={["0.1", "0.3", "0.5", "0.6", "Not enough information"]}
          correct="0.5"
          solution={
            <>
              <p>
                For mutually exclusive events,{" "}
                <TeX expr="P(A \cup B) = P(A) + P(B)" ariaLabel="P of A union B equals P of A plus P of B" />.
                Substitute the values: 0.3 + 0.2 = 0.5.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Testing for mutual exclusivity using probabilities"
          statements={[
            "Events A and B are defined on the same experiment. Are A and B mutually exclusive?",
            "1) P(A ∪ B) = P(A) + P(B)",
            "2) P(A ∩ B) = 0",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We want to know whether{" "}
                <TeX expr="P(A \cap B)=0" ariaLabel="Probability of A intersection B equals zero" />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                If{" "}
                <TeX expr="P(A \cup B) = P(A) + P(B)" ariaLabel="P of A union B equals sum of P of A and P of B" />, 
                then by the general addition rule{" "}
                <TeX
                  expr="P(A \cup B)=P(A)+P(B)-P(A \cap B)"
                  ariaLabel="General addition rule"
                />{" "}
                we must have{" "}
                <TeX expr="P(A \cap B)=0" ariaLabel="P of intersection equals zero" />. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                This directly states{" "}
                <TeX expr="P(A \cap B)=0" ariaLabel="P of intersection equals zero" />, 
                which is the definition of mutual exclusivity. Sufficient.
              </p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Takeaway: mutual exclusivity is about structure, not arithmetic.
          When there is no overlap, the union’s probability is just the sum.
          We’ll use this idea in the upcoming section on addition rules for
          probability.
        </p>
      </article>
    </main>
  );
}