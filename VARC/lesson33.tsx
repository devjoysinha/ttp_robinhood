import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, as: Tag = "span", display = false }: { expr: string; as?: any; display?: boolean }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    trust: true,
  });
  return <Tag className="sr-only" aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "3.34 Identify the Assumption Questions | Reading Comprehension",
  description:
    "How to find the missing link that must be true for an argument in the passage to work. Learn the 3‑step process, recognize common stems, and practice with a quick RC item.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">3.34 Identify the Assumption Questions</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Reading Comprehension passages often include arguments—either the author’s or a viewpoint quoted from others.
          These arguments typically contain a conclusion supported by one or more reasons.
        </p>

        <p>
          Identify the Assumption questions ask you to uncover the missing idea that must be true for the stated
          evidence to justify the stated conclusion. In short, you’re finding the essential bridge between what’s
          given and what’s claimed.
        </p>

        <MustKnow>
          Identify the Assumption questions focus on what must be true—but is not explicitly said—so that the
          argument holds together. The correct answer supplies a necessary link between the evidence and the conclusion.
        </MustKnow>

        <section aria-labelledby="stems" className="space-y-3">
          <h3 id="stems" className="text-xl font-semibold text-white">
            How these stems are typically phrased
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Which of the following is an assumption required by the author’s evaluation of X?
            </li>
            <li>
              The author’s conclusion that Y depends on which of the following assumptions?
            </li>
            <li>
              The argument made by [group mentioned in the passage] presupposes which of the following?
            </li>
            <li>
              In concluding Z, the author must be assuming that…
            </li>
          </ul>
        </section>

        <MustKnow>
          Learn to spot the predictable wording: “is based on which assumption,” “depends on which assumption,” or
          “must be assuming that.” These cues signal that you’re looking for a necessary, not optional, idea.
        </MustKnow>

        <section aria-labelledby="process" className="space-y-3">
          <h3 id="process" className="text-xl font-semibold text-white">
            A 3‑step process that works
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Locate the relevant conclusion referenced in the question stem. If the stem points to the author’s stance
              on a topic, find that sentence in the passage.
            </li>
            <li>
              Find the supporting evidence tied to that conclusion. Look for support markers such as “because,”
              “since,” or “given that.”
            </li>
            <li>
              Choose the answer that must be true for the evidence to justify the conclusion—the indispensable link.
              It will introduce new information that the passage does not explicitly state.
            </li>
          </ol>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2">
              Conceptually, think of assumption questions as:
            </p>
            <p className="text-gray-200">
              Evidence
              <span aria-hidden="true" className="mx-2 inline-block">⇒</span>
              Conclusion, only if the assumption holds.
            </p>
            <Math expr="\\text{Evidence}~\\Rightarrow~\\text{Conclusion}~\\text{only if Assumption is true}" display />
          </div>
        </section>

        <MustKnow>
          The correct assumption is required. If it’s false, the argument collapses. If it’s true, it doesn’t prove the
          conclusion by itself—it simply makes the reasoning viable.
        </MustKnow>

        <section aria-labelledby="example" className="space-y-4">
          <h3 id="example" className="text-xl font-semibold text-white">
            Example 28
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/30 p-4">
            <h4 className="mb-2 text-lg font-semibold text-gray-100">Reading passage</h4>
            <p className="mb-2">
              Paper currency that isn’t backed by a physical commodity—often called fiat money—derives its value from
              public confidence and government mandate. Although nearly all modern economies use some version of fiat
              money, critics argue that such systems are flawed. Because a central bank determines the money supply,
              these critics maintain that the quantity of money in circulation will never reliably track real economic
              conditions. They further warn that, since new currency can be created without a hard cap, countries face a
              risk of severe inflation if too much money is issued. Their preferred remedy is to peg the money supply to
              a commodity (for example, gold) so that issuance is naturally limited.
            </p>
            <p>
              Supporters of fiat systems counter that adjustable money supply lets central banks smooth out downturns
              and keep inflation within targets. They also caution that tying money to a commodity can choke off credit
              growth and leave a growing economy short of liquidity.
            </p>
          </div>

          <MCQExample
            number={28}
            prompt="The critics’ claim that, in a fiat money system, the money supply will never align with actual economic conditions depends on which of the following assumptions?"
            options={[
              "Central bank control of the money supply never produces a money stock that aligns with economic conditions.",
              "Countries that currently use fiat money would be better off abandoning it.",
              "The most reliable way to align money supply with the economy is to fix it to a commodity standard.",
              "Most central banks issue far too much money, leading to runaway inflation.",
              "Before fiat money existed, money supplies always aligned with economic conditions."
            ]}
            correct="Central bank control of the money supply never produces a money stock that aligns with economic conditions."
            solution={
              <>
                <p>
                  Identify the conclusion and the evidence. The conclusion is the critics’ statement that the fiat money
                  supply will “never” match real economic needs. The evidence is that a central bank controls supply in a
                  fiat regime.
                </p>
                <p>
                  For that evidence to justify the conclusion, we must assume that whenever a central bank controls the
                  money supply, it does not result in an amount that aligns with economic conditions. If central banks
                  could sometimes match conditions well, the “never align” conclusion would not follow.
                </p>
                <p>
                  Choices about switching systems or commodity standards may be opinions the critics hold, but they are
                  not required for the specific “never align” claim. Likewise, statements about typical inflation
                  outcomes or pre‑fiat history are not logically necessary for the reasoning at hand.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrapup" className="space-y-2">
          <h3 id="wrapup" className="text-xl font-semibold text-white">Key takeaways</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Find the conclusion named in the stem, then locate the evidence supporting it.
            </li>
            <li>
              The correct answer supplies a necessary condition that connects evidence to conclusion.
              <span className="mx-2 inline-block" aria-hidden="true">⇒</span>
              without it, the argument breaks.
            </li>
            <li>
              The right assumption is not quoted in the passage; it introduces new but essential information.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}