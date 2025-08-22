import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.6.1 Answers That Could Be True or Only Likely True | Inference",
  description:
    "Learn to avoid tempting inference choices that are merely possible or likely. Includes a worked example and quick checks to confirm what must be true.",
};

function KInline({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? tex}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    output: "html",
    displayMode: true,
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? tex}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.1 Answers That Could Be True or Only Likely to Be True
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Inference questions, your task is to pick the statement that is
          guaranteed by the passage. Tempting wrong options often sound
          reasonable or even probable—but if they aren’t forced by the given
          information, they are not correct.
        </p>

        <MustKnow>
          The correct inference must hold 100% of the time based solely on the
          stimulus. Choices that are merely possible or seem plausible in the
          real world are traps.
        </MustKnow>

        <p>
          Think in terms of three “truth tiers” when you scan choices:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>Must: follows inevitably from what’s stated.</li>
          <li>
            Could: consistent with the passage but not required (may be true or
            false).
          </li>
          <li>Cannot: contradicts the passage.</li>
        </ul>

        <section aria-labelledby="movie-studio-example">
          <h3
            id="movie-studio-example"
            className="text-xl font-semibold text-white"
          >
            Mini‑example: spotting “must” vs. “could”
          </h3>
          <p className="mt-2">
            Suppose a studio reports: from the end of 2007 to the end of 2017,
            actors increased by 20%, set designers decreased by 10%, and the
            total headcount stayed the same. Which statements below illustrate
            each truth tier?
          </p>

          <div className="rounded-md border border-gray-800 bg-gray-900/50 p-4">
            <p className="font-semibold text-gray-100">Clearly false (Cannot)</p>
            <p className="text-sm text-gray-300">
              “The ratio of set designers to actors was higher in 2017 than in
              2007.” Set designers fell and actors rose, so this ratio cannot
              have increased.
            </p>

            <hr className="my-4 border-gray-800" />

            <p className="font-semibold text-gray-100">Unsupported forecast</p>
            <p className="text-sm text-gray-300">
              “From 2017 to 2027, actors will rise another 20%.” That prediction
              isn’t warranted by the 2007–2017 data.
            </p>

            <hr className="my-4 border-gray-800" />

            <p className="font-semibold text-gray-100">Could be true</p>
            <p className="text-sm text-gray-300">
              “In 2017 there were more actors than set designers.” That sounds
              plausible, but the passage never guarantees it.
            </p>

            <hr className="my-4 border-gray-800" />

            <p className="font-semibold text-gray-100">Likely, not certain</p>
            <p className="text-sm text-gray-300">
              “The studio needed fewer set designers in 2017 than in 2007.”
              Maybe—but need is not established by the counts alone.
            </p>

            <hr className="my-4 border-gray-800" />

            <p className="font-semibold text-green-400">Must be true</p>
            <p className="text-sm text-gray-300">
              “The ratio of actors to set designers increased.” If actors grew by{" "}
              <KInline tex="20\\%"/> and designers dropped by <KInline tex="10\\%"/>, then with{" "}
              <KInline tex="A_{2017}=1.2A_{2007}"/> and{" "}
              <KInline tex="D_{2017}=0.9D_{2007}"/>,
            </p>
            <KBlock
              tex="\\dfrac{A_{2017}}{D_{2017}}=\\dfrac{1.2}{0.9}\\cdot\\dfrac{A_{2007}}{D_{2007}}=\\dfrac{4}{3}\\cdot\\dfrac{A_{2007}}{D_{2007}}\\;>\\;\\dfrac{A_{2007}}{D_{2007}}"
              ariaLabel="The ratio in 2017 equals four-thirds times the 2007 ratio, which is larger."
            />
            <p className="text-sm text-gray-300">
              The ratio must have gone up.
            </p>
          </div>
        </section>

        <MustKnow>
          When evaluating choices, demand airtight support. If you can build a
          counterexample that keeps the stimulus true while the choice fails,
          that choice is not the inference.
        </MustKnow>

        <section aria-labelledby="city-x-example">
          <h3 id="city-x-example" className="text-xl font-semibold text-white">
            Quick check
          </h3>
          <p className="mt-2">
            City X offers subsidized units downtown. Until now, tenants paid
            half the rent and the city paid the rest. The city plans to expand
            the number of subsidized units and will cover only one‑third of the
            rent in all subsidized units.
          </p>

          <MCQExample
            number={16}
            prompt="Based on the information, which statement must be true?"
            options={[
              "Some current tenants will have to move because the rent will become unaffordable.",
              "Residents will need to take second jobs to cover the extra rent.",
              "Adding more subsidized units will reduce the market rent for those units.",
              "Tenants of subsidized units will shoulder a larger share of their rent.",
              "Local nonprofits will increase funding to help low‑income families pay rent.",
            ]}
            correct="Tenants of subsidized units will shoulder a larger share of their rent."
            solution={
              <>
                <p>
                  Previously, tenants paid <KInline tex="\\tfrac{1}{2}"/> and the city paid{" "}
                  <KInline tex="\\tfrac{1}{2}"/>. Going forward, the city will pay{" "}
                  <KInline tex="\\tfrac{1}{3}"/>, so tenants must pay{" "}
                  <KInline tex="\\tfrac{2}{3}"/>. Therefore, tenants will cover a greater
                  portion of their rent—this is guaranteed.
                </p>
                <p>
                  The other choices speculate about affordability, employment,
                  pricing, or outside funding—none of which is forced by the
                  stimulus.
                </p>
              </>
            }
          />
        </section>

        <p className="text-gray-300">
          Bottom line: only select an answer that the text compels—not one that
          merely sounds reasonable.
        </p>
      </article>
    </main>
  );
}