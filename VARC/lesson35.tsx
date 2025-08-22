import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "3.36 Strengthen the Argument Questions | Reading Comprehension",
  description:
    "How to solve Strengthen-the-Argument questions in GMAT Reading Comprehension: common stems, a 3‑step method, and a fully worked example with answer analysis.",
};

function KaTeX({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });

  return (
    <span
      className="katex text-gray-200"
      role="img"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.36 Strengthen the Argument Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Reading Comprehension, Strengthen-the-Argument items ask you to
          select the option that most reinforces a conclusion stated in the
          passage. The task mirrors the Strengthen question type you have seen
          in Critical Reasoning: find the claim being concluded and add support
          for it.
        </p>

        <MustKnow>
          Your answer must boost a conclusion that appears in the passage. It
          should not introduce a brand-new claim or merely restate what the
          passage already says.
        </MustKnow>

        <p>
          Stems for this question type follow predictable patterns. You might
          see prompts such as:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            Which statement, if true, would most strengthen the author’s final
            claim about the proposed policy?
          </li>
          <li>
            Which of the following most strongly supports the position outlined
            in the highlighted sentence?
          </li>
          <li>
            Which option would best reinforce the author’s conclusion in the
            opening line of paragraph three?
          </li>
          <li>
            Which of the following, if accurate, most clearly backs the
            assertion about the cause identified by the author?
          </li>
          <li>
            Which choice provides the strongest additional support for the
            argument presented regarding efficient markets?
          </li>
          <li>
            Which statement, if true, most bolsters the author’s stance as
            summarized by the passage?
          </li>
        </ul>

        <MustKnow>
          Learn the typical wording of Strengthen RC stems. Recognizing the
          pattern quickly focuses your search on the relevant conclusion.
        </MustKnow>

        <section aria-labelledby="strategy-heading" className="space-y-3">
          <h3
            id="strategy-heading"
            className="text-xl font-semibold text-white"
          >
            A concise, repeatable strategy
          </h3>
          <ol className="ml-5 list-decimal space-y-2">
            <li>
              Locate the referenced conclusion. The stem will point to a
              specific claim (e.g., a particular sentence or paragraph). Find
              that exact conclusion in the passage.
            </li>
            <li>
              Gather the local support and context. Identify any nearby
              premises, contrasts, or background that frame the conclusion. Even
              if the passage does not provide explicit evidence, the surrounding
              context matters.
            </li>
            <li>
              Pick the choice that most increases support for that conclusion.
              Correct answers add new, relevant information that makes the
              conclusion more credible in context. Trap answers often:
              <ul className="ml-5 mt-2 list-disc">
                <li>explain existing evidence without adding support,</li>
                <li>introduce irrelevant facts, or</li>
                <li>undermine the conclusion.</li>
              </ul>
            </li>
          </ol>
        </section>

        <MustKnow>
          For Strengthen questions, think in terms of support:
          <span className="ml-2 inline-block rounded bg-gray-800/60 px-2 py-1">
            <KaTeX
              expr={
                String.raw`\text{evidence} \Rightarrow \text{conclusion} \quad\text{and choose the option with the largest }\Delta \text{support} > 0`
              }
              ariaLabel="Evidence implies conclusion; choose the option with the greatest positive change in support."
            />
          </span>
        </MustKnow>

        <section aria-labelledby="example-30" className="space-y-4">
          <h3 id="example-30" className="text-xl font-semibold text-white">
            Example 30
          </h3>

          <MCQExample
            number={30}
            prompt={`Passage: Currency that holds value solely by government declaration and public confidence—fiat money—was first used in 11th‑century China. Although many nations currently rely on fiat money, critics argue that allowing a central bank to control the money supply leads to persistent misalignment with real economic conditions. They further warn that because a central bank can issue unlimited currency, heavy over‑issuance can trigger runaway inflation. To reduce large swings in money supply, these critics recommend tying money to a commodity (for instance, gold), so the quantity of money is naturally capped by the available commodity.

In contrast, supporters of fiat money maintain the following stance: since a central bank can adjust the money supply when needed, fiat systems foster macroeconomic stability and help keep price inflation under control. Proponents also contend that linking money to a commodity can choke the supply of money below what a growing economy requires.

Question: Which of the following, if true, would most strengthen the stance taken by proponents of fiat money?`}
            options={[
              "Records show that in medieval China, both locals and visiting traders routinely accepted fiat notes.",
              "After the United States fully adopted fiat money, its economy became steadier on average, and typical inflation rates fell.",
              "In the 20th century, Britain left the gold standard and moved to fiat money largely because its gold reserves were insufficient.",
              "Central banks can influence money supply using tools such as interest‑rate changes, reserve‑requirement adjustments, and open‑market operations.",
              "A country such as Chad has experienced severe instability and high inflation while using a fiat currency system.",
            ]}
            correct="After the United States fully adopted fiat money, its economy became steadier on average, and typical inflation rates fell."
            solution={
              <>
                <p>
                  The stem asks us to add support for the proponents’ stance.
                  From the passage, that stance concludes: adjusting money
                  supply under a fiat system promotes stability and helps keep
                  inflation in check.
                </p>
                <p>
                  Evaluate each option by asking, “Does this make the conclusion
                  more believable in context?”
                </p>
                <p>
                  A: Widespread acceptance shows usage, not macro stability or
                  inflation control. Little to no support.
                </p>
                <p>
                  B: If a major economy became more stable with lower average
                  inflation after adopting fiat money, that directly fits—and
                  strengthens—the stated conclusion. This aligns with the kind
                  of new, outcome‑based evidence we want.
                </p>
                <p>
                  C: Britain’s switch due to limited gold explains why a change
                  happened, not whether fiat improves stability or inflation.
                </p>
                <p>
                  D: Describing the mechanics of monetary tools clarifies “how”
                  adjustments occur but doesn’t show they produce stability or
                  low inflation. This explains evidence rather than adding
                  support to the conclusion.
                </p>
                <p>
                  E: Reports of high inflation and instability under fiat would
                  weaken, not strengthen, the stance.
                </p>
                <p>
                  Therefore, choice B most strongly supports the proponents’
                  conclusion.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: locate the conclusion the stem targets, gather the nearby
          context, and choose the option that most increases support for that
          specific claim.
        </p>
      </article>
    </main>
  );
}