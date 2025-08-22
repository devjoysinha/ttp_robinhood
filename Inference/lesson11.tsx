import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.6.2 Distorted Answer Choices | Critical Reasoning Inference",
  description:
    "Learn how answer choices can subtly distort stimulus information and how to avoid these traps. Includes an illustrative multiple‑choice example with full explanation.",
};

// Lightweight server-side KaTeX helper (outputs accessible MathML; no CSS required)
function Math({ expr, display = false }: { expr: string; display?: boolean }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "mathml",
  });
  return (
    <span
      className={display ? "block my-1" : "inline"}
      aria-label={`math ${expr}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  const soilPrompt =
    "When farmland lacks calcium, yields suffer. Farmers can raise soil calcium by applying lime, but the increase is gradual and the complete effect appears after about 3 years. However, applying too much lime can push calcium to excessive levels, which also harms yields. Which conclusion follows from these facts?";

  const soilOptions = [
    "A farmer who over‑limes a calcium‑poor field may see yields improve at first and then decline later.",
    "Crops generally grow better when calcium is too high than when calcium is too low.",
    "Produce grown in relatively high‑calcium soil is more nutritious than produce grown in relatively low‑calcium soil.",
    "To maintain adequate calcium for strong growth, lime must be reapplied exactly three years after the first application.",
    "Among all soil nutrients, calcium is the single most important for crop growth.",
  ];

  const soilCorrect = soilOptions[0];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.2 Answers That Distort the Stimulus
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, it’s common to see tempting choices that echo
          the language of the stimulus while quietly reshaping its message. If
          you aren’t reading with precision, those near‑matches can feel
          convincing even though they aren’t actually supported by the text.
        </p>

        <MustKnow>
          Small wording tweaks can flip truth conditions. “Almost right” is
          still wrong. Always verify an option against the actual statements in
          the stimulus rather than against your memory or paraphrase.
        </MustKnow>

        <p>
          What makes these traps effective is their surface similarity: they
          borrow the same terms and themes as the passage, but the relationships
          change just enough to break the logical link. Your job is to compare
          claims literally to what’s stated or strictly implied.
        </p>

        <MustKnow>
          Match claims, not vibes. If a choice adds new qualifiers, introduces
          a superlative, swaps cause and effect, or changes scope, it’s likely a
          distortion.
        </MustKnow>

        <section aria-labelledby="mini-stimulus" className="space-y-3">
          <h3 id="mini-stimulus" className="text-xl font-semibold text-white">
            Mini example: spotting the distortion
          </h3>

          <p className="italic text-gray-300">
            Limiting animal agriculture and switching from fossil fuels to
            hydroelectric power are two ways Vertland could lower national
            carbon emissions. Limiting animal agriculture would reduce emissions
            more than switching to hydroelectric power would.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Distortion: “Switching to hydroelectric power would not be a cost‑effective
              way for Vertland to reduce emissions.” The stimulus compares
              emission reduction magnitudes, not costs. Cost‑effectiveness is
              new information.
            </li>
            <li>
              Distortion: “Limiting animal agriculture is Vertland’s most
              effective overall method of cutting emissions.” The passage only
              compares two specific methods; it doesn’t rule out other methods
              that might be even more effective.
            </li>
          </ul>
        </section>

        <hr className="border-gray-700" />

        <section aria-labelledby="how-to-guard" className="space-y-3">
          <h3 id="how-to-guard" className="text-xl font-semibold text-white">
            Practical checks to avoid distortions
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Scan for added qualifiers (only, most, always, never).</li>
            <li>Watch for scope shifts (some → all, two options → all options).</li>
            <li>Check for new metrics (e.g., cost, risk, feasibility) not in the stimulus.</li>
            <li>Guard against cause/effect flips or reversed comparisons.</li>
          </ul>
        </section>

        <hr className="border-gray-700" />

        <section aria-labelledby="mcq" className="space-y-4">
          <h3 id="mcq" className="text-xl font-semibold text-white">
            Worked example
          </h3>

          <div className="text-sm text-gray-400">
            Note: the stimulus mentions that the full effect appears after about{" "}
            <Math expr="t \approx 3\ \text{years}" />. You can reason about the
            timeline without assuming anything else.
          </div>

          <MCQExample
            number={17}
            prompt={soilPrompt}
            options={soilOptions}
            correct={soilCorrect}
            solution={
              <>
                <p className="mb-2">
                  Translate the facts into simple conditionals:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    Low soil calcium ⟹ poor growth{" "}
                    <Math expr="\text{(low Ca)} \Rightarrow \text{reduced yields}" />
                  </li>
                  <li>
                    Add lime ⟹ calcium rises gradually; full effect after{" "}
                    <Math expr="\approx 3\ \text{years}" />
                  </li>
                  <li>
                    Excessive calcium ⟹ poor growth{" "}
                    <Math expr="\text{(too much Ca)} \Rightarrow \text{reduced yields}" />
                  </li>
                </ul>

                <p className="mt-3">
                  If a field starts calcium‑deficient and the farmer applies too
                  much lime, calcium will increase over time. Initially, moving
                  from “too low” toward an adequate range can improve yields,
                  but as the gradual increase continues past the optimal range
                  into “too high,” yields will worsen. That is exactly what the
                  correct choice states.
                </p>

                <p className="mt-3">
                  Why the others fail:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    “Better with too high than too low” compares two bad
                    conditions the passage never ranks. Both extremes harm
                    growth; no relative comparison is supported.
                  </li>
                  <li>
                    Nutrition content of foods is never discussed—outside scope.
                  </li>
                  <li>
                    “Must reapply after three years” misreads the timeline;{" "}
                    <Math expr="\approx 3" /> years is when the full effect
                    appears, not a reset schedule.
                  </li>
                  <li>
                    “Calcium is the most important nutrient” introduces a
                    superlative and ignores other nutrients—unsupported.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p className="mt-6">
          Bottom line: verify that each word in an answer reflects the exact
          relationships in the stimulus. If a choice introduces a new yardstick,
          broadens the scope, or flips the comparison, it’s a distortion—not an
          inference.
        </p>
      </article>
    </main>
  );
}