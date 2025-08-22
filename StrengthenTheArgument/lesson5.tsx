import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.5.1 Add a Supporting Premise | Strengthen the Argument",
  description:
    "Learn how correct answers strengthen arguments by adding a premise—either the only support or extra support. Includes two worked mini‑cases and one multiple‑choice practice with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.5.1 Add a Supporting Premise to Back the Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many strengthen questions, the passage’s conclusion is weakly
          supported—or not supported at all. A correct answer can boost the
          argument by supplying a premise that backs the conclusion. Sometimes
          that new premise is the only support; other times it adds to support
          already present.
        </p>

        <MustKnow>
          A strengthen answer often works by contributing a new premise. That
          premise can be the sole reason to accept the conclusion or an extra
          reason alongside the passage’s original evidence.
        </MustKnow>

        <p>
          Importantly, a strengthen answer does not need to prove the conclusion
          with certainty. It only needs to make the conclusion more plausible.
        </p>

        <MustKnow>
          Strengthening is about increasing likelihood, not delivering proof.
          The correct answer should make the conclusion more likely to be true,
          even if it doesn’t guarantee it.
        </MustKnow>

        <section aria-labelledby="wind-farm-case" className="space-y-3">
          <h3
            id="wind-farm-case"
            className="text-xl font-semibold text-white"
          >
            Mini‑case 1: When no support is given
          </h3>
          <p className="italic text-gray-300">
            Breezetricity, a company that generates electricity using wind
            turbines, plans to build a large wind facility in Urdall. Although
            Urdall’s three coal plants are expected to meet national demand for
            at least the next decade, Breezetricity expects the wind facility to
            be profitable within five years. Which statement, if true, best
            justifies Breezetricity’s expectation?
          </p>
          <p>
            The passage offers essentially no reason to believe the project will
            make money. A strong answer adds a premise that creates demand for
            the new facility’s output, such as:
          </p>
          <p className="italic">
            Several multinational manufacturers considering new plants in Urdall
            will proceed only if a reliable source of non‑polluting electricity
            is available.
          </p>
          <p>
            This added premise points to future buyers who specifically require
            clean energy, making Breezetricity’s profitability claim more
            credible.
          </p>
        </section>

        <MustKnow>
          A powerful way to strengthen an argument is to add a premise that
          directly supports the stated conclusion.
        </MustKnow>

        <section aria-labelledby="sugar-tax-case" className="space-y-3">
          <h3 id="sugar-tax-case" className="text-xl font-semibold text-white">
            Mini‑case 2: When some support exists but more is needed
          </h3>
          <p className="italic">
            The government of Khartona plans to cut diabetes rates by imposing a{" "}
            <InlineMath math="20\%" aria-label="twenty percent" /> tax on sugary
            drinks. Because sugary drinks supply most of the country’s refined
            sugar intake, the government argues that the tax will significantly
            reduce consumption of refined sugar. Which statement, if true,
            provides the strongest support?
          </p>
          <p>
            The passage gives a start: tax sugary drinks → people may buy fewer
            sugary drinks → refined sugar intake may fall. But potential gaps
            remain:
          </p>
          <ul className="list-inside list-disc text-gray-300">
            <li>
              People might switch to other sugary products (candy, desserts).
            </li>
            <li>
              If sugary drinks are extremely cheap, a{" "}
              <InlineMath math="20\%" aria-label="twenty percent" /> price bump
              might not change behavior.
            </li>
          </ul>
          <p>Good strengthen answers close those gaps. For example:</p>
          <ul className="list-inside list-disc text-gray-300">
            <li className="italic">
              Most consumers choose sugary drinks over lower‑sugar alternatives
              primarily because sugary drinks are about{" "}
              <InlineMath math="15\%" aria-label="fifteen percent" /> cheaper.
            </li>
            <li className="italic">
              If the tax is implemented, people in Khartona will not replace the
              lost sugar from drinks by consuming similar amounts of sugar from
              desserts and candy.
            </li>
          </ul>
          <p>
            These statements either make the tax more likely to shift purchases
            toward healthier options or block substitution to other sugary
            sources—both of which strengthen the government’s position.
          </p>
          <p className="sr-only">
            Math note: a 20% tax implies new price{" "}
            <InlineMath math="p_{\text{new}} = 1.2\,p_{\text{old}}" />
          </p>
        </section>

        <MCQExample
          number={28}
          prompt="Centerville Hospital’s board plans a comprehensive quality‑improvement program to lower the annual number of medical errors. Although the plan requires higher staff compensation, outside consultants claim the program will reduce the hospital’s total yearly costs. Which option best supports the consultants’ claim?"
          options={[
            "Over the last several years, Centerville’s spending on employee compensation has trended downward.",
            "The board hired the consultants specifically to identify ways to cut costs.",
            "Centerville has higher annual operating expenses than any other hospital in its county.",
            "Some Centerville employees earn less than peers in comparable roles at nearby hospitals.",
            "When medical errors occur, injured patients frequently pursue legal action and often receive sizable monetary compensation.",
          ]}
          correct="When medical errors occur, injured patients frequently pursue legal action and often receive sizable monetary compensation."
          solution={
            <>
              <p>
                The passage tells us the new program will increase pay, yet the
                consultants predict overall annual costs will fall. We need a
                premise showing how lowering errors could save enough money to
                offset higher compensation.
              </p>

              <p>
                Option A: Past compensation trends don’t address whether this
                plan lowers total costs now. No support.
              </p>
              <p>
                Option B: Why consultants were hired doesn’t indicate whether
                their recommendation will actually work. No support.
              </p>
              <p>
                Option C: Comparisons to other hospitals don’t show how this
                program changes Centerville’s costs. No support.
              </p>
              <p>
                Option D: Pay differences across hospitals are irrelevant to
                whether this plan cuts Centerville’s total costs. No support.
              </p>
              <p>
                Option E: If errors lead to lawsuits and large payouts, then
                fewer errors can reduce legal/settlement costs. If those savings
                exceed the added compensation, total annual costs drop. This
                directly supports the consultants’ claim.
              </p>
            </>
          }
        />

        <p>
          Takeaway: A strong strengthen answer inserts a premise that makes the
          conclusion more believable—either by creating the needed link or by
          shoring up weak spots in the original reasoning.
        </p>
      </article>
    </main>
  );
}