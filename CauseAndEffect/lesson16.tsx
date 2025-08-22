import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function InlineMath({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    strict: "ignore",
  });
  return (
    <span
      className="inline-block align-middle"
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "6.5.4 Strengthening a Causal Argument by Ruling Out Reverse Causation | Critical Reasoning",
  description:
    "Learn how to strengthen a cause-and-effect conclusion by showing the relationship cannot be reversed. Includes two multiple‑choice examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5.4 Strengthening a Cause-and-Effect Argument by Showing the
          Relationship Cannot Be Reversed
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A quick way to undermine a causal claim is to suggest the direction of
          causation runs the other way. So, to reinforce a conclusion that a
          cause leads to an effect, shore it up by making the reverse direction
          implausible: prove the effect doesn’t drive the cause.
        </p>

        <MustKnow>
          To bolster a claim like{" "}
          <InlineMath expr={"A \\to B"} ariaLabel="A causes B" /> (A causes B),
          provide evidence that{" "}
          <InlineMath expr={"B \\nrightarrow A"} ariaLabel="B does not cause A" />{" "}
          (B does not cause A). Ruling out reverse causation makes the original
          direction of the relationship more compelling.
        </MustKnow>

        <p>
          In test passages, this often appears as an answer choice showing that
          the outcome does not make the supposed cause more likely, thereby
          strengthening the original causal story.
        </p>

        <MCQExample
          number={23}
          prompt={
            <>
              Studies find that people who work out regularly report better
              sleep than those who don’t. Therefore, regular exercise improves
              sleep quality. Which of the following, if true, most strengthens
              the argument?
            </>
          }
          options={[
            "Participants who used sleep aids were excluded from the analysis.",
            "The participants were evenly split by age group.",
            "People who begin sleeping better do not become more likely to start exercising regularly.",
            "People who exercise frequently also tend to improve their diets.",
            "Sleep quality was self‑reported rather than objectively measured.",
          ]}
          correct="People who begin sleeping better do not become more likely to start exercising regularly."
          solution={
            <>
              <p>
                The conclusion claims exercise improves sleep. A classic
                objection is the reverse: better sleep might encourage exercise.
                The choice that says improved sleep does not make regular
                exercise more likely removes this reverse‑causation threat and
                thus strengthens the original causal direction.
              </p>
            </>
          }
        />

        <p>
          Let’s apply the same idea to a research summary and see which choice
          best rules out the reverse relationship.
        </p>

        <MCQExample
          number={24}
          prompt={
            <>
              A study of adults aged 24 to 45 shows that people with lower
              socioeconomic status (SES) have higher rates of chronic illness
              than people with higher SES. Therefore, low SES likely increases
              the risk of chronic illness. Which of the following, if true,
              most strengthens the argument?
            </>
          }
          options={[
            "The sample included as many people in their early 20s as in their mid‑40s.",
            "A person’s socioeconomic status rarely declines after developing a chronic illness.",
            "Some chronic illnesses occur more frequently among high‑income individuals.",
            "Socioeconomic status is typically determined using occupation and income.",
            "Among people with low SES, psychological conditions are more common than physical ones.",
          ]}
          correct="A person’s socioeconomic status rarely declines after developing a chronic illness."
          solution={
            <>
              <p>
                Breakdown: The premise is a correlation (low SES ↔ higher
                chronic illness). The conclusion asserts causation (low SES{" "}
                <InlineMath expr={"\\to"} ariaLabel="causes" /> higher risk).
              </p>
              <p>
                The key vulnerability is reverse causation: perhaps developing a
                chronic illness pushes people into lower SES. The correct choice
                states that SES generally does not drop after illness onset,
                which directly undercuts the reverse direction (chronic illness{" "}
                <InlineMath expr={"\\nrightarrow"} ariaLabel="does not cause" />{" "}
                lower SES) and therefore supports the original claim that low
                SES increases illness risk.
              </p>
              <p>
                The other options are irrelevant to causality (age balancing,
                how SES is defined, or which type of illness is more prevalent)
                or even cut against the observed pattern without addressing the
                direction of causation.
              </p>
            </>
          }
        />

        <p>
          Big picture: when you see a causal conclusion built from a correlation
          premise, look for answers that block the reverse direction. If the
          effect does not lead to the purported cause, the argument that the
          cause leads to the effect becomes stronger.
        </p>
      </article>
    </main>
  );
}