import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      aria-label={expr}
      role="math"
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, { displayMode: true, throwOnError: false });
  return (
    <div
      aria-label={expr}
      role="math"
      className="my-3"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "17.6 Probability of A and B | Probability",
  description:
    "Understand how to find P(A ∩ B): multiply for independent events and use conditional probability for dependent events. Includes a quick MCQ and a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">17. Probability</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.6 The Probability of A and B
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a question asks for the probability that events A and B both occur, you are
          dealing with an “and” scenario. If the events are independent, you multiply their
          individual probabilities. If they are not independent, use conditional probability.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-gray-100">Core formulas</p>
            <KBlock expr="P(A \cap B) = P(A)\,P(B) \quad \text{(if A and B are independent)}" />
            <KBlock expr="P(A \cap B) = P(A)\,P(B \mid A) \quad \text{(in general)}" />
            <p className="text-gray-300">
              Independence means that knowing A happened does not change the chance of B:
              <span className="ms-1">
                <KInline expr="P(B \mid A) = P(B)" />
              </span>
              . Without independence, never multiply the standalone probabilities; use the
              conditional form.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="A fair coin is flipped and a fair six‑sided die is rolled. What is the probability of getting heads and an even number?"
          options={["1/12", "1/6", "1/4", "1/3", "1/2"]}
          correct="1/4"
          solution={
            <>
              <p>
                The coin result is independent of the die result, so multiply:
                <span className="ms-1">
                  <KInline expr="P(\text{heads} \cap \text{even}) = P(\text{heads})\cdot P(\text{even})" />
                </span>
                .
              </p>
              <p>
                <KInline expr="P(\text{heads}) = \tfrac12" /> and{" "}
                <KInline expr="P(\text{even}) = \tfrac36 = \tfrac12" />, so{" "}
                <KInline expr="\tfrac12 \cdot \tfrac12 = \tfrac14" />.
              </p>
            </>
          }
        />

        <p>
          Not every “and” question involves independent events. If one outcome changes the
          composition of what remains (for instance, drawing without replacement), the
          events are dependent and you must use conditional probability.
        </p>

        <ExampleCard
          number={2}
          title="Two draws without replacement (dependent events)"
          statements={[
            "A jar contains R red marbles and B blue marbles, where R and B are positive integers. Two marbles are drawn at random without replacement. What is the probability that both marbles are red?",
            "1) R/B = 2 and R + B = 15",
            "2) R = 10",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want <KInline expr="P(\text{red}_1 \cap \text{red}_2)" />. Because the second
                draw depends on the first, use the conditional form:
              </p>
              <KBlock expr="P(\text{red}_1 \cap \text{red}_2) = P(\text{red}_1)\,P(\text{red}_2 \mid \text{red}_1) = \frac{R}{R+B}\cdot \frac{R-1}{R+B-1}" />
              <p>
                Statement (1): From <KInline expr="R/B = 2" /> and <KInline expr="R + B = 15" />, we get{" "}
                <KInline expr="R = 10" /> and <KInline expr="B = 5" />. Thus,
              </p>
              <KBlock expr="\frac{R}{R+B}\cdot \frac{R-1}{R+B-1} = \frac{10}{15}\cdot \frac{9}{14} = \frac{3}{7}" />
              <p>This uniquely determines the probability. Statement (1) is sufficient.</p>
              <p>
                Statement (2): Knowing <KInline expr="R = 10" /> is not enough without{" "}
                <KInline expr="B" />. Different values of <KInline expr="B" /> yield different
                probabilities, so (2) alone is not sufficient.
              </p>
              <p>Answer: A.</p>
            </>
          }
        />

        <MustKnow>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Multiply only when events are independent, or when you explicitly use the
              conditional form <KInline expr="P(A)\,P(B\mid A)" />.
            </li>
            <li>
              “Without replacement” is a common signal for dependence; update the second
              probability accordingly.
            </li>
            <li>
              If you’re unsure about independence, default to the conditional formula.
            </li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}