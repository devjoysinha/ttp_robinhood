import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX for client-side rendering
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "7.6.3 Out-of‑Proportion Answers | Inference (CR) | Verbal",
  description:
    "Learn to spot answer choices that overstate the stimulus: scope creep (some → most/all), necessity vs sufficiency, probability wording, and tense shifts. Includes two inference MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference (Critical Reasoning)
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.3 Answers That Overreach the Information in the Stimulus
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          An out‑of‑proportion answer choice pushes past what the stimulus actually says—often by
          slightly changing a word or two. In inference questions, small wording changes can
          drastically shift meaning, so an answer that “goes bigger” than the prompt supports
          must be rejected.
        </p>

        <MustKnow>
          Watch for scope inflation and precision traps:
          a single word can turn a supported statement into an unsupported one. The correct answer
          cannot claim more than the stimulus guarantees.
        </MustKnow>

        <section aria-labelledby="word-ladders" className="space-y-3">
          <h3 id="word-ladders" className="text-xl font-semibold text-white">
            Common scope ladders and comparatives that cause overreach
          </h3>
          <p>These families of words are easy to mix up—each step increases strength:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Quantifiers: some → many → most → all</li>
            <li>Frequency: never → seldom/rarely → sometimes → often</li>
            <li>Comparatives: good → better → best</li>
            <li>Comparatives (negative): bad → worse → worst</li>
          </ul>
        </section>

        <section aria-labelledby="mini-examples" className="space-y-4">
          <h3 id="mini-examples" className="text-xl font-semibold text-white">
            Mini contrasts: stimulus vs. overreach
          </h3>

          <div>
            <p>
              Stimulus: “<strong>Some</strong> senators at the meeting ordered a salad.”
            </p>
            <p>
              Overreach: “<strong>Most</strong> senators at the meeting ordered a salad.”
            </p>
            <p>
              “Some” means “at least one,” while “most” means “more than half.” Those are not interchangeable.
              In symbols: some ≥ 1; most {typeof window !== "undefined" && <InlineMath math={"> \\tfrac{1}{2}"} />} of the group.
            </p>
          </div>

          <MustKnow>
            “Some” means “one or more.” “Most” means “more than half”{" "}
            {typeof window !== "undefined" && <InlineMath math="\\left(>\\tfrac{1}{2}\\right)" />} of the relevant group.
          </MustKnow>

          <div>
            <p>
              Stimulus: “After the Stokes–Miller Act, new tariffs are <strong>not guaranteed</strong>.”
            </p>
            <p>
              Overreach: “After the Stokes–Miller Act, new tariffs are <strong>unlikely</strong>.”
            </p>
            <p>
              “Not guaranteed” just says probability is less than certainty{" "}
              {typeof window !== "undefined" && <InlineMath math="\\big(P<1\\big)"/>}.
              “Unlikely” typically implies less than even odds{" "}
              {typeof window !== "undefined" && <InlineMath math="\\big(P<\\tfrac{1}{2}\\big)"/>}.
              Those claims are not equivalent.
            </p>
          </div>

          <MustKnow>
            “Not guaranteed” means probability {typeof window !== "undefined" && <InlineMath math="< 1" />}.
            “Unlikely” suggests probability {typeof window !== "undefined" && <InlineMath math="< \\tfrac{1}{2}" />}.
          </MustKnow>

          <div>
            <p>
              Stimulus: “A 3% sales‑tax cut would be <strong>sufficient</strong> for a 20% revenue boost.”
            </p>
            <p>
              Overreach: “A 3% sales‑tax cut is <strong>necessary</strong> for a 20% revenue boost.”
            </p>
            <p>
              “Sufficient” means “enough by itself.” “Necessary” means “required.” They are not the same.
            </p>
          </div>

          <MustKnow>
            Sufficient = enough on its own. Necessary = required condition. Do not swap them.
          </MustKnow>
        </section>

        <MCQExample
          number={18}
          prompt={
            <>
              In the country of Meridiana, a customer pays state sales tax only when buying from a retailer
              that has a physical presence in the customer’s state. Because many online orders are placed
              with sellers whose locations are only in other states, buyers often do not pay sales tax on
              online purchases. If those statements are true, which option must also be true?
            </>
          }
          options={[
            "Before e‑commerce existed, states collected more sales‑tax revenue.",
            "For the majority of online orders, no state sales tax is due from the buyer.",
            "There could exist an online seller in Meridiana that never needs to collect sales tax on any sale.",
            "As online purchasing grows, states will inevitably collect less sales‑tax revenue.",
            "Shoppers typically buy online from sellers with no in‑state physical location.",
          ]}
          correct="There could exist an online seller in Meridiana that never needs to collect sales tax on any sale."
          solution={
            <>
              <p>
                From the rule, tax is owed only when the seller has an in‑state presence for the customer.
                It’s possible for a retailer to sell exclusively to out‑of‑state customers; in that case,
                the retailer would never collect sales tax. That scenario is logically allowed by the premises,
                so the statement “there could exist such a retailer” must be true.
              </p>
              <p>
                The other options add unsupported claims: historical revenue (A), “most” vs. “many” (B, E),
                and predictions about total revenue trends (D). None of those is guaranteed by the premises.
              </p>
            </>
          }
        />

        <section aria-labelledby="tense-shifts" className="space-y-3">
          <h3 id="tense-shifts" className="text-xl font-semibold text-white">
            Tense shifts can also create overreach
          </h3>
          <p>
            Be careful when an answer turns a past‑tense observation into a future‑tense certainty.
            For example:
          </p>
          <div>
            <p>
              Stimulus: “There <strong>has never been</strong> a successful invasion of Country X.”
            </p>
            <p>
              Overreach: “There <strong>will never be</strong> a successful invasion of Country X.”
            </p>
            <p>
              A historical pattern does not guarantee a future outcome. Past data can inform probability,
              but it does not prove an absolute claim about what must happen later.
            </p>
          </div>

          <MustKnow>
            Do not let “has never” become “will never.” Past observations do not by themselves prove
            future impossibility.
          </MustKnow>
        </section>

        <MCQExample
          number={19}
          prompt={
            <>
              From 1976 to 2014, scientists observed that whenever the monarch butterfly population declined,
              the domestic honeybee population also declined within two weeks. However, some honeybee declines
              were not followed by butterfly declines. Which conclusion is properly supported?
            </>
          }
          options={[
            "Any decline in butterflies will always be followed by a decline in honeybees.",
            "The causes of honeybee declines do not necessarily cause butterfly declines.",
            "Honeybee population size is more closely tied to monarchs than to any other insect population.",
            "If monarchs go extinct, domestic honeybees are likely to go extinct as well.",
            "Honeybee numbers have no effect on butterfly numbers.",
          ]}
          correct="The causes of honeybee declines do not necessarily cause butterfly declines."
          solution={
            <>
              <p>
                We’re told bee declines did not always coincide with butterfly declines. Therefore,
                whatever drove those bee declines didn’t, in at least some instances, also drive a butterfly decline.
                So it’s correct that bee‑decline factors don’t necessarily cause butterfly declines (B).
              </p>
              <p>
                (A) projects a past pattern into an “always” law; (C) compares to “any other insect” (unknown);
                (D) speculates about extinction; (E) claims no impact at all. None of these is warranted.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Inference answers must stay within the stimulus’s boundaries. Be on guard for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Scope creep: “some” quietly becoming “most” or “all.”</li>
            <li>Probability shifts: “not guaranteed” morphing into “unlikely.”</li>
            <li>Logic swaps: sufficient vs necessary.</li>
            <li>Tense jumps: past patterns asserted as future certainties.</li>
          </ul>
          <MustKnow>
            If the answer choice is stronger than the stimulus supports, it’s out of proportion—eliminate it.
          </MustKnow>
        </section>
      </article>
    </main>
  );
}