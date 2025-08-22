import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title: "5.6 Use Estimation Whenever Possible | Table Analysis",
  description:
    "Speed up Table Analysis by rounding and benchmarking. Learn when estimation is safe, when it isn’t, and practice with a quick example.",
};

export default function Page() {
  const approxSum = renderToString(
    "19{,}987 + 20{,}012 + 995 + 12{,}050 \\approx 53{,}000"
  );

  const sciApprox = renderToString(
    "1.9987\\times10^{4} \\approx 2.0\\times10^{4},\\quad 2.0012\\times10^{4} \\approx 2.0\\times10^{4},\\quad 9.95\\times10^{2} \\approx 10^{3},\\quad 1.205\\times10^{4} \\approx 1.2\\times10^{4}"
  );

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.6 Use Estimation Whenever Possible
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Table Analysis problems often dump a lot of numbers on the screen. Under time
          pressure, you won’t survive by calculating everything exactly—you need quick,
          reasonable approximations to zero in on the right choice.
        </p>

        <p>
          As a rule of thumb, round values to friendly numbers, compare magnitudes,
          and use simple benchmarks unless the prompt clearly demands an exact figure.
          This keeps you moving while preserving enough accuracy to answer correctly.
        </p>

        <MustKnow>
          Estimation should be your default in Table Analysis. Only switch to precise
          computation when the question explicitly hinges on exactness (for example:
          a stated “exact value,” a tight threshold, or a boundary case where small
          rounding would change the decision).
        </MustKnow>

        <section aria-labelledby="when-to-estimate" className="space-y-3">
          <h3 id="when-to-estimate" className="text-xl font-semibold text-white">
            When estimation is safe
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The task is a comparison, ranking, or “greater/less” judgment where small
              rounding won’t flip the outcome.
            </li>
            <li>
              The choices are far apart (e.g., tens of thousands vs. hundreds), so coarse
              rounding still isolates the correct option.
            </li>
            <li>
              The prompt allows ranges, words like “about,” or asks for the nearest
              thousand/percent.
            </li>
          </ul>
        </section>

        <section aria-labelledby="when-to-avoid" className="space-y-3">
          <h3 id="when-to-avoid" className="text-xl font-semibold text-white">
            When to avoid estimation
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The question requests an exact number or a precise decimal/percentage.
            </li>
            <li>
              The decision depends on a tight cutoff (e.g., “Is the value at least 10.0?”
              when your rounded total sits right on the edge).
            </li>
            <li>
              Two or more answer choices are very close together, so rounding could point
              to the wrong option.
            </li>
          </ul>
        </section>

        <section aria-labelledby="quick-techniques" className="space-y-3">
          <h3 id="quick-techniques" className="text-xl font-semibold text-white">
            Fast estimation techniques
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Round values to the nearest thousand, hundred, or percent.</li>
            <li>Pair numbers to make round sums (e.g., 19.8k + 0.2k → 20k).</li>
            <li>Use friendly fractions: 10%, 25%, 50%, and 75% as mental anchors.</li>
            <li>Compare orders of magnitude before you compute anything.</li>
          </ul>
        </section>

        <section aria-labelledby="katex-estimation" className="space-y-3">
          <h3 id="katex-estimation" className="text-xl font-semibold text-white">
            Example: approximate first, then verify if needed
          </h3>
          <p>
            Suppose a row requires a quick total. Round each entry and sum:
          </p>
          <p
            className="text-gray-100"
            aria-label="19,987 plus 20,012 plus 995 plus 12,050 is approximately 53,000"
            dangerouslySetInnerHTML={{ __html: approxSum }}
          />
          <p>In scientific-notation terms, the same idea looks like:</p>
          <p
            className="text-gray-100"
            aria-label="1.9987 times ten to the fourth is about 2.0 times ten to the fourth; 2.0012 times ten to the fourth is about 2.0 times ten to the fourth; 9.95 times ten squared is about ten to the third; 1.205 times ten to the fourth is about 1.2 times ten to the fourth"
            dangerouslySetInnerHTML={{ __html: sciApprox }}
          />
          <p>
            Because the choices in many Table Analysis questions are widely spaced, this
            level of approximation is plenty to select the correct answer.
          </p>
        </section>

        <MCQExample
          number={32}
          prompt="A table lists annual revenues (in dollars) for four products: 19,987; 20,012; 995; and 12,050. To the nearest thousand, what is the total revenue?"
          options={["33,000", "42,000", "53,000", "62,000", "73,000"]}
          correct="53,000"
          solution={
            <>
              <p>
                Round each term: 19,987 ≈ 20,000; 20,012 ≈ 20,000; 995 ≈ 1,000; 12,050 ≈ 12,000.
                Summing gives 20k + 20k + 1k + 12k = 53k. So the total is about 53,000.
              </p>
              <p>
                Since choices are thousands apart, this approximation is sufficient—no exact
                arithmetic needed.
              </p>
            </>
          }
        />

        <p>
          Bottom line: estimation is a speed tool. Use it by default, and reserve exact
          computation for edge cases where small differences matter.
        </p>
      </article>
    </main>
  );
}