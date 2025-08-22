import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "warn",
  });
  const Tag = block ? "div" : "span";
  return <Tag aria-label={ariaLabel ?? expr} className="katex" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "17.6.2 Dependent Events | Probability",
  description:
    "Understand dependent events and conditional probability. Learn and apply the rule P(A ∩ B) = P(A) × P(B | A) with two multiple‑choice examples and full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">17. Probability</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">17.6.2 Dependent Events</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two events are called dependent when the outcome of the first event changes the likelihood of the second.
          In other words, once A happens, the probability of B may no longer be the same as it was before A occurred.
          A classic trigger for dependence is sampling without replacement.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-gray-200">Rule for dependent events</p>
            <K block expr="P(A \cap B) \;=\; P(A)\,\times\,P(B \mid A)" ariaLabel="P of A and B equals P of A times P of B given A" />
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>
                <K expr="P(A \cap B)" /> is the probability that both A and B occur.
              </li>
              <li>
                <K expr="P(B \mid A)" /> means “the probability of B given that A has already occurred” (this is not a division; it’s conditional probability).
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="intuition-heading" className="space-y-3">
          <h3 id="intuition-heading" className="text-lg font-semibold text-gray-200">
            Why the second probability changes
          </h3>
          <p>
            When you remove an outcome on the first draw and do not replace it, the sample space shrinks, and counts of
            specific items often change too. As a result, the probability for the second event is conditioned on what
            happened first.
          </p>
        </section>

        <MCQExample
          number={46}
          prompt="A room contains 14 girls and 14 boys. If two people are chosen at random without replacement, what is the probability that both chosen are girls?"
          options={["11/27", "13/54", "11/36", "1/2", "1/6"]}
          correct="13/54"
          solution={
            <>
              <p>
                Let A be “the first pick is a girl,” and B be “the second pick is a girl.” Use the dependent-events rule:
              </p>
              <K block expr="P(A \cap B) \;=\; P(A)\times P(B \mid A)" />
              <p>
                At the start there are 14 girls out of 28 people:
                {" "}
                <K expr="P(A)=\tfrac{14}{28}=\tfrac{1}{2}" ariaLabel="P of A equals 14 over 28 equals 1 over 2" />.
                After choosing a girl first, 13 girls remain out of 27 people:
                {" "}
                <K expr="P(B \mid A)=\tfrac{13}{27}" ariaLabel="P of B given A equals 13 over 27" />.
              </p>
              <p>
                Therefore:
                {" "}
                <K expr="P(A \cap B)=\tfrac{1}{2}\times\tfrac{13}{27}=\tfrac{13}{54}" ariaLabel="P equals 1 over 2 times 13 over 27 equals 13 over 54" />
                {" "}
                which matches option B.
              </p>
            </>
          }
        />

        <MCQExample
          number={47}
          prompt="A standard 52-card deck has 13 hearts and 13 spades. If two cards are drawn at random without replacement, what is the probability that the first card is a heart and the second card is a spade?"
          options={["1/4", "13/51", "1/169", "13/204", "13/200"]}
          correct="13/204"
          solution={
            <>
              <p>
                Define A as “first card is a heart,” and B as “second card is a spade.” Apply the rule for dependent events:
              </p>
              <K block expr="P(A \cap B) \;=\; P(A)\times P(B \mid A)" />
              <p>
                Initially,
                {" "}
                <K expr="P(A)=\tfrac{13}{52}=\tfrac{1}{4}" ariaLabel="P of A equals 13 over 52 equals 1 over 4" />.
                After a heart is removed (and not replaced), there are still 13 spades but now 51 total cards:
                {" "}
                <K expr="P(B \mid A)=\tfrac{13}{51}" ariaLabel="P of B given A equals 13 over 51" />.
              </p>
              <p>
                Multiply:
                {" "}
                <K expr="\tfrac{1}{4}\times\tfrac{13}{51}=\tfrac{13}{204}" ariaLabel="1 over 4 times 13 over 51 equals 13 over 204" />.
                The correct choice is D.
              </p>
            </>
          }
        />

        <MustKnow>
          When events influence each other, compute the joint probability by multiplying the first-event probability by
          the conditional probability of the second event given the first.
          {" "}
          <K expr="P(A \cap B)=P(A)\,P(B \mid A)" ariaLabel="P of A and B equals P of A times P of B given A" />.
        </MustKnow>
      </article>
    </main>
  );
}