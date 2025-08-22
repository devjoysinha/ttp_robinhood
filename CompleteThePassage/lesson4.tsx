import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "11.5 Complete the Passage — The correct choice must fit the whole passage | Critical Reasoning",
  description:
    "Learn why the right completion must align with the entire argument, not just the final sentence. Includes a quick illustrative fill‑in and a multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.5 The correct answer must work with the entire passage, not just the last sentence
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Complete the Passage questions, it’s easy to lock onto the final sentence
          because that’s where the blank appears. However, the right choice has to
          make sense in light of everything the passage states—not merely sound
          reasonable when appended to the last line.
        </p>

        <MustKnow>
          A valid completion must be consistent with the entire argument. Any answer
          that fits only the final sentence, while conflicting with earlier context,
          is incorrect.
        </MustKnow>

        <section aria-labelledby="walnut-example" className="space-y-4">
          <h3 id="walnut-example" className="text-xl font-semibold text-white">
            Quick illustration
          </h3>

          <p className="italic text-gray-300">
            A nut company sells two items: in‑shell walnuts and walnuts that have already been
            shelled. The shelling equipment failed and will be replaced with a faster machine.
            Delivery and installation will take about a week, so during that week, the company
            can’t produce shelled walnuts. Even so, the company expects to fulfill all orders
            during that period because ________.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2">
              Choice that seems to fit the last sentence only:
            </p>
            <p className="italic text-gray-200">
              the company expects orders received that week to be typical
            </p>
          </div>

          <p>
            Read in isolation, this sounds fine. But the passage explains that no new
            shelled walnuts can be produced for a week. If customers place orders for
            shelled walnuts, “typical” ordering patterns don’t guarantee those orders
            can be fulfilled. So this completion fails once we consider the full context.
          </p>

          <div className="rounded-md border border-emerald-900 bg-emerald-900/10 p-4">
            <p className="mb-2">A completion that fits the whole passage:</p>
            <p className="italic text-emerald-200">
              the company has enough inventory of shelled walnuts to cover at least a week of orders
            </p>
          </div>

          <p>
            This directly resolves the production gap described earlier, so it coherently
            supports the promise to fill all orders during the outage.
          </p>
        </section>

        <section aria-labelledby="mcq-example" className="space-y-4">
          <h3 id="mcq-example" className="text-xl font-semibold text-white">
            Multiple‑choice example
          </h3>

          <MCQExample
            number={5}
            prompt={
              <>
                <p>
                  Which option best completes the passage?
                </p>
                <p className="mt-3">
                  In regions where mosquito‑borne disease is common, pesticides
                  are widely used to suppress mosquito populations. Because
                  pesticides can endanger human health, many municipalities are
                  considering switching to blue lights in outdoor areas with
                  heavy mosquito activity. Blue lights are expected to reduce
                  mosquito populations because ________.
                </p>
              </>
            }
            options={[
              "mosquitoes are not attracted to blue light",
              "blue light is not harmful to endangered bee populations",
              "exposure to blue light renders adult mosquitoes sterile",
              "the use of blue lights is more cost‑effective than the use of pesticides",
              "the impact of blue light on pest insects has been studied thoroughly",
            ]}
            correct="exposure to blue light renders adult mosquitoes sterile"
            solution={
              <>
                <p>
                  The final sentence is introduced by “because,” so the blank should
                  supply a premise that makes the plan—using blue lights—in fact
                  effective at curbing mosquitoes. We need a statement that supports
                  the conclusion for the full context, not just something that sounds
                  reasonable in the last line alone.
                </p>

                <p className="mt-4">
                  Choice A: “not attracted” isn’t the same as “repelled” or “reduced.”
                  It doesn’t show that existing mosquitoes will decline.
                </p>
                <p>
                  Choice B: Bee safety is important in life, but it’s irrelevant to
                  whether blue lights actually control mosquito populations.
                </p>
                <p>
                  Choice C: If blue light makes adult mosquitoes sterile, reproduction
                  drops and populations should fall over time. This directly supports
                  the plan. Correct.
                </p>
                <p>
                  Choice D: Cost has no bearing on biological effectiveness; it doesn’t
                  indicate population control.
                </p>
                <p>
                  Choice E: Saying the impact has been “studied thoroughly” gives no
                  outcome—studies might show success or failure—so it does not support
                  the conclusion.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: complete the argument, not just the last sentence. If a choice
          aligns with the entire passage and supplies the needed support, it’s a strong
          candidate for the correct completion.
        </p>
      </article>
    </main>
  );
}