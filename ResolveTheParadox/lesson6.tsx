import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.7 Resolve the Paradox | What Could Be True vs. Must Be True",
  description:
    "Learn the core approach to Resolve the Paradox questions: focus on answers that could be true and would reconcile the facts. Includes a worked multiple‑choice example and concise FAQs.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.7 Answer What Could Be True, Not What Must Be True
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Resolve the Paradox prompts present two facts that seem to clash. Your
          job is not to prove what must be true in all cases, but to find a
          plausible piece of information that, if true, would make those facts
          fit together.
        </p>

        <MustKnow>
          In Resolve the Paradox questions, you’re hunting for a possibility,
          not a certainty. A correct answer only needs to be something that
          could be true and that would reconcile the two statements.
        </MustKnow>

        <p>
          Think of this task as locating a bridge between the facts. There may
          be many potential bridges—any one of them is enough to resolve the
          tension. You don’t need the only bridge or the strongest one—just one
          that works.
        </p>

        <MustKnow>
          Don’t confuse “explains” with “concludes.” An answer that summarizes
          the paradox or restates the mismatch is not an explanation. The right
          choice provides a reason the two facts can coexist.
        </MustKnow>

        <section aria-labelledby="sample-stimulus">
          <h3 id="sample-stimulus" className="text-xl font-semibold text-white">
            Mini Stimulus Illustration
          </h3>
          <div className="mt-2 rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="italic text-gray-200">
              The South Region has had almost no rainfall for years. Yet local
              officials have decided not to restrict residential water use.
            </p>
          </div>
          <p className="mt-3">
            Why might both statements be true? Here are several ways the
            conflict could be resolved:
          </p>
          <ol className="ml-6 list-decimal space-y-3">
            <li>
              The region imports most of its water from another area that has
              plentiful supply. Reason: External supply offsets the lack of
              rain.
            </li>
            <li>
              The region received heavy snowfall, providing sufficient runoff.
              Reason: Snowpack can replenish water even when rainfall is low.
            </li>
            <li>
              A new desalination plant now produces fresh water from seawater.
              Reason: An alternative source reduces dependence on rain.
            </li>
            <li>
              Strict limits were placed on industrial/agricultural usage.
              Reason: Cutting other uses leaves enough water for households.
            </li>
            <li>
              The region built up large reserves in prior years.
              Reason: Stored supply covers current needs despite the drought.
            </li>
          </ol>
          <p className="mt-2">
            Notice that none of these has to be true. Each is simply a
            plausible scenario that would resolve the apparent contradiction.
          </p>
        </section>

        <section aria-labelledby="example-7">
          <MCQExample
            number={7}
            prompt="On average, life expectancy estimates from standard mortality tables are reasonably accurate and widely used in business. However, financial planners who use these tables to project client lifespans report that their clients often live far longer than the projections. Which option best explains this difference?"
            options={[
              "People who hire financial planners typically maintain healthier habits than the average person.",
              "Relying exclusively on mortality tables could leave some clients underfunded in retirement.",
              "Many planners also use web tools to estimate client lifespans.",
              "Planners who use only mortality tables are more likely to underestimate than overestimate lifespans.",
              "Most planners know mortality tables can underestimate lifespan and adjust their projections.",
            ]}
            correct="People who hire financial planners typically maintain healthier habits than the average person."
            solution={
              <>
                <p>
                  The paradox: mortality tables are accurate on average, yet
                  financial planners find their clients outlive those
                  projections. We need a reason that makes both facts compatible.
                </p>
                <p>
                  Choice A is the resolution. The tables reflect averages for
                  the general population, but clients of financial planners may
                  be healthier than average and thus live longer, explaining the
                  discrepancy.
                </p>
                <p>
                  Why the others fail:
                  <br />
                  • B describes a consequence of underestimation, not why it
                  happens.
                  <br />
                  • C introduces another tool but doesn’t explain the gap.
                  <br />
                  • D restates the observed underestimation without giving a
                  cause.
                  <br />
                  • E claims adjustments are made, which would reduce the gap,
                  not explain it.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="faqs">
          <h3 id="faqs" className="text-xl font-semibold text-white">
            Quick FAQs
          </h3>

          <details className="group rounded-md border border-gray-700 bg-gray-900/30 p-4">
            <summary className="cursor-pointer list-item font-medium text-gray-200 marker:hidden">
              Doesn’t answer choice D in the example explain the issue?
            </summary>
            <div className="mt-2 space-y-2">
              <p>
                No. D just paraphrases the phenomenon: planners relying solely
                on the tables tend to underestimate lifespans. That’s the
                problem we already knew about; it doesn’t provide a reason it
                occurs. We need a “because” answer—A supplies that because it
                shows planner clients aren’t representative of the average.
              </p>
            </div>
          </details>

          <details className="group rounded-md border border-gray-700 bg-gray-900/30 p-4">
            <summary className="cursor-pointer list-item font-medium text-gray-200 marker:hidden">
              How do I distinguish an explanation from a conclusion or restatement?
            </summary>
            <div className="mt-2 space-y-2">
              <p>
                An explanation offers a plausible mechanism that lets both facts
                stand together. Conclusions or restatements merely repackage the
                contradiction (e.g., “the estimates are underestimates”) without
                telling you why that happens.
              </p>
            </div>
          </details>
        </section>

        <p>
          Bottom line: pick an option that could be true and that, if true,
          dissolves the tension between the given facts. You are not required to
          prove it must be true—only that it reasonably reconciles the puzzle.
        </p>
      </article>
    </main>
  );
}