import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Note: Ensure KaTeX CSS is included globally once (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "8.4.4 Find the Conclusion: Answers that Conflict with the Passage | Critical Reasoning",
  description:
    "Avoid conclusion choices that clash with details in the stimulus. Learn a reliable process, see a quick mini-example, and practice with a full problem and explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Find the Conclusion
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4.4 Wrong Answer Type Four: Choices that Conflict with the Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Find the Conclusion questions reward precise reading. A frequent trap is
          an option that sounds consistent with the overall theme of the passage
          but contradicts a specific fact stated in it. If an answer conflicts with
          even one relevant detail from the stimulus, it cannot be the conclusion.
        </p>

        <MustKnow>
          Even if an option “feels” right, it’s wrong if it clashes with a stated
          detail. Verify every candidate against the text, not just the overall
          gist. A good quick check is to append “therefore …” to the stimulus and
          see which option follows without contradicting any premise.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Don’t contradict a stated fact
          </h3>
          <p>
            A city adds a percentage sales tax on all retail goods. Last year,
            total retail sales did not exceed the previous year, yet sales‑tax
            revenue was higher and helped fund a major downtown upgrade.
          </p>

          <div className="rounded-md bg-gray-800/50 p-4">
            <p className="mb-2 font-semibold text-gray-200">Logic snapshot</p>
            <p className="text-sm text-gray-300">
              <InlineMath
                math={
                  "\\text{retail sales}_{\\text{last}} \\le \\text{retail sales}_{\\text{prev}} \\quad \\text{and} \\quad \\text{tax revenue}_{\\text{last}} > \\text{tax revenue}_{\\text{prev}} \\;\\Rightarrow\\; \\text{tax rate likely increased}"
                }
              />
            </p>
            <p className="sr-only">
              Retail sales last year were not greater than the prior year, while tax
              revenue increased; therefore, it is reasonable that the tax rate
              increased.
            </p>
          </div>

          <MCQExample
            number={1}
            prompt="Which conclusion is best supported by the information above?"
            options={[
              "The renovation led to more people coming to the city to shop.",
              "Most of the project’s expenses had already been paid the year before.",
              "The city increased the percentage rate used to compute sales tax on retail goods.",
            ]}
            correct="The city increased the percentage rate used to compute sales tax on retail goods."
            solution={
              <>
                <p>
                  The passage states that total retail sales did not rise, but tax
                  revenue did. The most direct way this can happen is if the tax
                  rate increased. So the third option is supported.
                </p>
                <p>
                  The first option suggests more shoppers, which would usually raise
                  sales; that conflicts with the stated fact that sales didn’t
                  increase. The second option invents a reason about prior‑year
                  budgeting not supported by the text.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="pattern" className="space-y-4">
          <h3 id="pattern" className="text-xl font-semibold text-white">
            The pattern to avoid
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Identify the core statements. Translate them if helpful into clean,
              abstract form.
            </li>
            <li>
              Apply the “therefore” test: append “therefore …” to the premises and
              check which option follows without breaking any given fact.
            </li>
            <li>
              Eliminate choices that conflict with any premise, even if they sound
              plausible in real life or fit the overall narrative.
            </li>
          </ul>
        </section>

        <section aria-labelledby="full-example" className="space-y-4">
          <h3 id="full-example" className="text-xl font-semibold text-white">
            Example: Best completes the argument
          </h3>

          <div className="rounded-md bg-gray-800/50 p-4">
            <p className="mb-2 font-semibold text-gray-200">Premises</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
              <li>
                If DNA evidence is ruled inadmissible, then either contamination
                is possible or the police tampered with it.
              </li>
              <li>
                By law, the exclusion of a defendant’s DNA evidence cannot be taken
                to imply guilt.
              </li>
              <li>
                Nevertheless, jurors sometimes develop negative feelings toward a
                defendant when the DNA is excluded.
              </li>
            </ul>
            <div className="mt-3 text-sm text-gray-300">
              <span className="font-medium text-gray-200">Logical form: </span>
              <InlineMath math={"\\text{inadmissible} \\;\\implies\\; (\\text{contamination}\\;\\lor\\;\\text{tampering})"} />
              <span className="mx-1">,</span>
              <InlineMath math={"\\text{inadmissible} \\;\\not\\implies\\; \\text{guilt}"} />
              <span className="mx-1">, and</span>
              <InlineMath math={"\\text{inadmissible} \\;\\Rightarrow\\; \\text{juror negativity (sometimes)}"} />
            </div>
            <p className="sr-only">
              If DNA is inadmissible, then contamination or police tampering is
              involved; inadmissibility does not imply guilt; and jurors sometimes
              react negatively to inadmissibility.
            </p>
          </div>

          <MCQExample
            number={9}
            prompt="Which of the following statements best completes the argument?"
            options={[
              "Most defendants whose DNA is excluded are in fact guilty.",
              "Admissible DNA results that favor a defendant can occasionally be incorrect.",
              "Jurors should rely on their feelings during deliberations.",
              "At times, jurors’ judgments of guilt are improperly swayed by the exclusion of DNA evidence.",
              "Some jurors ignore the exclusion and evaluate the defendant using the DNA anyway.",
            ]}
            correct="At times, jurors’ judgments of guilt are improperly swayed by the exclusion of DNA evidence."
            solution={
              <>
                <p>
                  Combine the premises: exclusion stems from process issues (possible
                  contamination or tampering), and the law says exclusion does not
                  indicate guilt; yet jurors sometimes react negatively when DNA is
                  excluded. The conclusion that fits is that those negative reactions
                  can inappropriately influence jurors’ views of guilt.
                </p>
                <p>
                  Why the others fail:
                </p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    “Most defendants … are guilty” contradicts the premise that
                    exclusion does not imply guilt.
                  </li>
                  <li>
                    “Admissible DNA can be wrong” is outside the scope; the premises
                    are about inadmissible DNA.
                  </li>
                  <li>
                    “Jurors should trust feelings” conflicts with the legal premise
                    and the idea that negativity is inappropriate.
                  </li>
                  <li>
                    “Some jurors ignore the exclusion and use the DNA anyway” goes
                    beyond the premises; negative feelings don’t necessarily mean
                    they consider excluded evidence.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <MustKnow>
          Before selecting a conclusion, scan the stimulus for any facts that would
          invalidate a tempting choice. If an option contradicts even one stated
          detail, eliminate it immediately—no matter how “reasonable” it seems.
        </MustKnow>
      </article>
    </main>
  );
}