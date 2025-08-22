import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: KaTeX CSS is typically imported globally (e.g., in app/layout.tsx or globals.css).
// If not already included in your project, add: import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "10.2.6 Overgeneralization and Sampling Flaws | Logical Flaw",
  description:
    "Understand how overgeneralization and sampling bias undermine arguments. Learn to spot unrepresentative samples, see two worked examples, and apply a quick checklist.",
};

function k(tex: string) {
  // Server-side render KaTeX to HTML; CSS should be loaded globally for proper styling.
  return {
    __html: katex.renderToString(tex, {
      throwOnError: false,
      displayMode: false,
      strict: "ignore",
    }),
  };
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.6 Overgeneralization and Sampling Flaws
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Broad claims built on thin evidence are a classic reasoning error. When
          a conclusion about a large group is drawn from a small or skewed
          sample, the inference often overreaches. That mistake is called
          overgeneralization.
        </p>

        <p>
          For instance, meeting ten residents of a city who all share the same
          political preference does not justify concluding that the entire city
          votes that way. A tiny, hand‑picked, or self‑selected sample rarely
          mirrors the population.
        </p>

        <p>
          To credibly use sample results to support a conclusion about a
          population, the sample should be representative. In practice, larger,
          randomly selected samples tend to better reflect the population than
          smaller or biased ones.
        </p>

        <MustKnow>
          Overgeneralization happens when a sweeping conclusion is drawn from a
          sample that’s too small or not representative. Be suspicious of any
          argument that extrapolates population‑level claims from a handful of
          observations or from a sample that likely excludes key groups.
        </MustKnow>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <p className="mb-2 text-sm text-gray-400">
            Quick math note (rendered with KaTeX):
          </p>
          <p
            className="text-sm text-gray-300"
            aria-label="If the sample is random and large, p-hat approximates p. With bias, the expected value of p-hat is not equal to p."
            dangerouslySetInnerHTML={k(
              "\\text{If the sample is random and large, }\\ \\hat{p} \\approx p.\\ \\text{With bias, }\\mathbb{E}[\\hat{p}]\\ne p."
            )}
          />
        </div>

        <section aria-labelledby="example-1">
          <h3 id="example-1" className="sr-only">
            Example 1
          </h3>
          <MCQExample
            number={26}
            prompt="Help desk manager: We switched to a new, independent survey vendor. Immediately after the switch, average customer‑satisfaction scores rose. Because the new survey is longer and more detailed, the results must be more accurate."
            options={[
              "People who are happier with the help team are more likely to complete long, detailed surveys, which can push averages upward.",
              "The new survey vendor is more expensive than the old one, so its results should be better.",
              "The increase in the score was only 0.1 points, which is probably not meaningful.",
              "During the same period, the company hired more agents to reduce wait times.",
              "The new survey asks more questions, but it uses the same rating scale as before.",
            ]}
            correct="People who are happier with the help team are more likely to complete long, detailed surveys, which can push averages upward."
            solution={
              <>
                <p>
                  The manager’s claim rests on the idea that a longer survey
                  yields truer results. However, longer surveys often suffer
                  from response bias: respondents with positive experiences are
                  more willing to finish them, while less satisfied customers
                  may opt out. If participation skews positive, the scores no
                  longer represent the full customer base.
                </p>
                <p>
                  Therefore, the choice pointing out that longer surveys attract
                  happier respondents directly undermines the manager’s
                  reasoning by highlighting a sampling flaw.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-2">
          <h3 id="example-2" className="sr-only">
            Example 2
          </h3>

	      <p>
            Now consider a multiple-choice question that directly tests for an
            overgeneralization.
          </p>

          <MCQExample
            number={27}
            prompt="Bicycle company representative: Once our new model goes on sale, it will be one of the most popular bikes on the market. Ten professional cyclists tested it for a month, and all ten liked it so much they asked to keep the bike."
            options={[
              "It assumes, without justification, that professional cyclists are good judges of a bike’s overall quality.",
              "The evidence offered is inconsistent with the claim being made.",
              "Part of the support for the conclusion presupposes that the conclusion is true.",
              "The data used to support the conclusion are unrelated to the conclusion.",
              "It assumes that professional cyclists and the general public evaluate bikes using the same criteria.",
            ]}
            correct="It assumes that professional cyclists and the general public evaluate bikes using the same criteria."
            solution={
              <>
                <p>
                  The representative infers broad popularity among the general
                  public from the opinions of a tiny, specialized group. That
                  leap assumes pros value the same things that typical buyers
                  do—an assumption that might be false. For example, pros may
                  prize performance and responsiveness, while everyday riders
                  may prioritize comfort, price, or durability.
                </p>
                <p>
                  The best description of the flaw is the assumption that
                  professionals and the general public judge bicycles by the
                  same standards.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-400">
                  <li>
                    Choice A focuses on whether pros are good judges of
                    “quality,” which isn’t necessary for the popularity claim.
                  </li>
                  <li>
                    Choice B claims inconsistency, but liking among pros does
                    not contradict possible popularity.
                  </li>
                  <li>
                    Choice C alleges circular reasoning, which is not present.
                  </li>
                  <li>
                    Choice D says the data are unrelated; they are related but
                    unrepresentative.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Key takeaway: whenever a conclusion about a large group rests on a
          small, narrow, or self‑selected sample, ask whether the middle of the
          population is actually represented. If the sample can drift away from
          the population, the conclusion is on shaky ground.
        </p>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <h4 className="mb-2 font-semibold text-gray-200">Spot‑it checklist</h4>
          <ul className="list-disc space-y-1 pl-6">
            <li>Is the sample small relative to the population?</li>
            <li>Was participation voluntary or self‑selected?</li>
            <li>Do testers differ materially from the target audience?</li>
            <li>Could the sampling process exclude unhappy or neutral voices?</li>
            <li>Are there alternative explanations (timing, training, changes in process)?</li>
          </ul>
        </div>

        <p className="text-gray-400">
          Up next: common pitfalls when arguments mix up numbers, percentages,
          and other quantitative info.
        </p>
      </article>
    </main>
  );
}