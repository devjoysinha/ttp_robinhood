import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure `katex/dist/katex.min.css` is imported globally (e.g., in app/layout.tsx)

function K({
  expr,
  inline = true,
  ariaLabel,
  className,
}: {
  expr: string;
  inline?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: !inline,
    strict: "warn",
    trust: true,
  });
  return (
    <span
      className={className}
      aria-label={ariaLabel}
      role="math"
      aria-hidden={ariaLabel ? undefined : true}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "2.9.2 Cause‑and‑Effect Assumptions | Critical Reasoning",
  description:
    "Learn the Assumption Correct Answer Type that guarantees a cause‑and‑effect conclusion by ruling out alternative explanations, reverse causation, coincidence, and selection bias. Includes two MCQ drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9.2 Assumption Type 2: What must be true for a cause‑and‑effect conclusion to hold
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Critical Reasoning prompts lean on causal claims. When an author says a factor causes an outcome, she is asserting something like{" "}
          <K expr="x \Rightarrow y" ariaLabel="x implies y" />
          . Hidden in that claim is a stronger commitment: there isn’t some other explanation that accounts for the observed pattern just as well or better.
        </p>

        <p>
          Concretely, if the argument concludes{" "}
          <K expr="x \Rightarrow y" ariaLabel="x implies y" />
          , it also banks on statements of the form “not an alternative cause,” e.g.{" "}
          <K expr="\neg(z \Rightarrow y)\ \text{(that would undermine the role of }x\text{)}" ariaLabel="there is not a z that implies y and displaces x" />
          , “the direction isn’t reversed”{" "}
          <K expr="\neg(y \Rightarrow x)" ariaLabel="not y implies x" />
          , and “the pattern isn’t random”{" "}
          <K expr="\neg\text{(coincidence)}" ariaLabel="not coincidence" />
          .
        </p>

        <MustKnow>
          To validate a cause‑and‑effect conclusion, the correct assumption typically eliminates one or more threats:
          alternative causes, reverse causation, coincidence, or selection bias. If any of these can still explain the evidence, the causal conclusion isn’t warranted.
        </MustKnow>

        <p>
          Example of everyday causal reasoning: after a highway’s speed limit was lowered, collisions dropped. Concluding
          “the speed limit reduction caused the drop” assumes no rival explanations, such as: fewer cars used the road,
          new safety tech became mandatory, heavy trucks were barred, or the road surface was newly restored. Any of those,
          if true, would weaken the causal link.
        </p>

        <p>
          A second illustration: in a medical study, everyone who abused alcohol in the last five years was found to be depressed.
          Jumping to “alcohol abuse causes depression” ignores possibilities like reverse causation (depression drove the abuse),
          a third factor causing both, or simple coincidence in a limited sample.
        </p>

        <MustKnow>
          In Assumption questions tied to causality, think positionally: the conclusion says “this cause did it.” The necessary assumption says “nothing else did.” Your job is to locate and block that “something else.”
        </MustKnow>

        <MCQExample
          number={18}
          prompt={
            <>
              In a recent study, every participant who had abused alcohol within the past five years was diagnosed with depression.
              Therefore, abusing alcohol causes depression.
              <br />
              Which of the following is NOT an assumption the argument requires? (EXCEPT)
            </>
          }
          options={[
            "A single therapy designed for alcohol misuse would also cure the associated depression.",
            "Heavy use of illegal drugs did not independently produce both the alcohol misuse and the depression.",
            "The participants were not already depressed before they began abusing alcohol.",
            "The study was not designed in a way that strongly discouraged non‑depressed people from participating.",
            "The observed pairing of alcohol misuse and depression was unlikely to be mere chance.",
          ]}
          correct="A single therapy designed for alcohol misuse would also cure the associated depression."
          solution={
            <>
              <p>
                The conclusion is causal: alcohol misuse → depression. The claim needs assumptions that exclude other explanations:
                no third cause, no reverse causation, no coincidence, and no selection bias.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Choice A is about treatment outcomes. Whether one therapy could fix both issues has no bearing on whether misuse causes depression. This is NOT required, so it’s the correct EXCEPT answer.
                </li>
                <li>
                  Choices B–E each removes a rival explanation (third factor, pre‑existing depression, biased sample, coincidence). Negating any of these would break the argument, so they are required assumptions.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={19}
          prompt={
            <>
              Steven took a pre‑employment polygraph for Company X. According to the examiner, he “completely failed” the section about whether his résumé was truthful. Company X concluded that, since Steven failed that section, he lied on his résumé.
              <br />
              The company’s conclusion depends on which assumption?
            </>
          }
          options={[
            "Using polygraphs for hiring is permitted in Steven’s jurisdiction.",
            "Steven did not have a medical condition that causes excessive sweating, a common source of false polygraph failures.",
            "When writing his résumé, Steven did not expect to be asked about it during a polygraph.",
            "Company X has a legal interest in hiring only candidates with the highest integrity.",
            "Steven had previously failed a polygraph at a competing firm.",
          ]}
          correct="Steven did not have a medical condition that causes excessive sweating, a common source of false polygraph failures."
          solution={
            <>
              <p>
                The company infers lie → fail from fail → lie. To defend the causal leap, the argument must rule out other reasons for failing that section of the test.
              </p>
              <p>
                Choice B removes a plausible alternative cause of failure (physiological artifact), so it is required. The remaining choices are background or confirmation but not necessary assumptions.
              </p>
            </>
          }
        />

        <p>
          Bottom line: a cause‑and‑effect conclusion asserts{" "}
          <K expr="x \Rightarrow y" ariaLabel="x implies y" />
          . The necessary assumption says, in effect, “no credible alternative explains{" "}
          <K expr="y" ariaLabel="y" />
          .” If you can imagine a viable rival—reverse direction, third cause, chance, or biased selection—the causal claim hasn’t been justified.
        </p>
      </article>
    </main>
  );
}