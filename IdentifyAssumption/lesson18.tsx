import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "2.11.2 Reverse‑Effect Traps in Assumption Questions | Critical Reasoning",
  description:
    "Learn to spot assumption answer choices that do the opposite of what you need—reverse‑effect traps. Includes a worked multiple‑choice example with full reasoning.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="inline-block align-middle"
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
          2. Identify The Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11.2 Reverse‑Effect Traps: Choices that Do the Opposite of What You Need
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In assumption questions, a frequent trap is an answer that is related to
          the argument but pushes it in the wrong direction. Instead of filling a
          missing premise, the choice undercuts the author’s reasoning—essentially
          doing the reverse of what a correct assumption should do.
        </p>

        <p>
          Why do these feel so tempting? Because when you negate them, the negation
          often looks like a legitimate assumption. That resemblance can make a
          weakening statement seem supportive at first glance.
        </p>

        <section aria-labelledby="polygraph-example">
          <h3 id="polygraph-example" className="sr-only">
            Polygraph illustration
          </h3>
          <p className="pl-4 border-l-2 border-gray-700 italic">
            Steven was required to take a polygraph before being hired as a security
            guard. According to the examiner, he “clearly failed” the portion
            concerning the accuracy of his résumé. The company concluded that, since
            he failed the test, he must have lied on the résumé.
          </p>
          <p className="pl-4 border-l-2 border-gray-700 italic">
            Which assumption does the company rely on to reach its conclusion?
          </p>

          <p>
            Consider this tempting—but incorrect—choice: “A person can fail a
            polygraph for reasons unrelated to whether the person is telling the
            truth.” This statement actually weakens the conclusion by questioning the
            test’s reliability. It’s alluring because its negation aligns with the
            type of assumption we’re seeking. Still, as written, it moves the
            argument in the wrong direction and cannot be the answer.
          </p>
        </section>

        <MustKnow>
          In assumption questions, beware of options that are relevant but flip the
          impact: they undermine the argument rather than bridge the gap. If an
          option’s effect is to weaken, it can’t be the missing assumption.
        </MustKnow>

        <MCQExample
          number={31}
          prompt="State Governor: To keep taxpayers from footing the bill for bailouts caused by bad investments, I propose regular forensic audits of all state‑insured banks. Any bank that fails an audit will be barred from receiving a state‑funded bailout for ten years. Following this plan will save taxpayer money. Which of the following is an assumption required for the governor’s conclusion?"
          options={[
            "The savings from denying bailouts to banks that fail audits will exceed the ongoing cost of performing the audits.",
            "Bank executives who anticipate an audit can take accounting steps to conceal certain investments.",
            "Every bank that fails an audit has made poor investment decisions.",
            "Most banks that become ineligible for state‑funded bailouts will subsequently improve their investment decisions.",
            "A larger proportion of state‑insured banks make poor investments than non‑state‑insured banks.",
          ]}
          correct="The savings from denying bailouts to banks that fail audits will exceed the ongoing cost of performing the audits."
          solution={
            <>
              <p>
                The claim is that the policy will save public funds. Denying
                bailouts to failed‑audit banks may reduce spending, but audits also
                cost money. For the plan to net savings, the savings must outstrip
                the audit expense:{" "}
                <KInline
                  expr="\\text{savings} > \\text{audit cost}"
                  ariaLabel="savings are greater than audit cost"
                />
                . That is exactly what choice (A) states, so it is necessary.
              </p>
              <p>
                Choice (B) weakens the plan by suggesting audits can be gamed; a
                weakening statement cannot be a required assumption.
              </p>
              <p>
                Choice (C) is unnecessary. The plan saves money as long as failed‑audit
                banks are denied bailouts, regardless of why they failed.
              </p>
              <p>
                Choice (D) is a trap. The goal is saving money, not improving bank
                behavior. Whether investment decisions improve is beside the point.
              </p>
              <p>
                Choice (E) is irrelevant. The proposal applies only to state‑insured
                banks; comparing them to non‑state‑insured banks doesn’t affect the
                plan’s success.
              </p>
              <p>Therefore, (A) must be true for the governor’s reasoning to hold.</p>
            </>
          }
        />

        <p>
          Up next: another common wrong answer type—choices that merely describe or
          explain the scenario instead of supporting the argument.
        </p>
      </article>
    </main>
  );
}