import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.28 Inference Trap 7: Matches but Incorrect | Reading Comprehension",
  description:
    "Learn the RC inference trap called “Matches but Incorrect”: an answer that echoes the passage but fails to answer the actual question. Includes a worked example with full explanation and tips to avoid the trap.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.28 Inference Trap 7: Matches but Incorrect
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Correct answers to inference questions do two things: they are supported by the passage and they directly answer the task in the question stem. A common trap does only the first—it “sounds right” because it echoes something the author said, yet it doesn’t actually respond to what the question asked.
        </p>

        <MustKnow>
          A “Matches but Incorrect” choice restates accurate information from the passage but fails to address the prompt. Support alone isn’t enough—your choice must both be supported and answer the specific question.
        </MustKnow>

        <section aria-labelledby="mini-demo" className="space-y-3">
          <h3 id="mini-demo" className="text-xl font-semibold text-white">
            Quick illustration
          </h3>
          <p>
            Imagine a passage explains that early factories relied on water power, so they had to be near rivers. After improvements to the steam engine, factories could cluster in cities, and transport speed also increased.
          </p>
          <p>
            If the question asks why urban clustering wasn’t feasible before the steam engine upgrade, an attractive but wrong option might mention that the shipping radius was smaller back then. True? Yes—transport was slower. But that doesn’t answer the question. The reason clustering wasn’t feasible was the power constraint: water power wasn’t available in dense urban clusters. An option that cites access to power is the one that actually answers the question asked.
          </p>
        </section>

        <MustKnow>
          Before confirming an inference answer, ask: “Does this directly resolve the question being asked?” If it merely restates something true from the passage without addressing the task, it’s a trap.
        </MustKnow>

        <section aria-labelledby="example" className="space-y-4">
          <h3 id="example" className="text-xl font-semibold text-white">
            Worked example
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4 md:p-5">
            <p className="text-gray-200 font-medium">Passage</p>
            <p className="mt-2">
              Gross Domestic Product (GDP)—the total market value of final goods and services produced over a period—has long served as a benchmark of national progress. Critics argue, however, that GDP is too narrow: it overlooks important dimensions of human well‑being and fails to reflect harms associated with economic growth. As alternatives, some propose Gross National Happiness (GNH) and the Genuine Progress Indicator (GPI). GNH, introduced in Bhutan, relies on an extensive survey of a random sample of citizens and is resource‑intensive to compute, which has limited its adoption outside Bhutan. GPI, in contrast, leverages widely available data. While it uses some inputs similar to GDP, it also adjusts for costs of growth—such as reduced leisure time and environmental degradation—thereby diverging from GDP’s production‑only focus.
            </p>
          </div>

          <MCQExample
            number={23}
            prompt="The passage implies which of the following is a reason some people criticize the use of GDP?"
            options={[
              "GDP omits the negative consequences associated with economic growth.",
              "GDP is based on data that summarize overall output.",
              "GDP has been used as a development yardstick for many years.",
              "GDP reflects benefits of economic activity.",
              "GDP can be computed using commonly available datasets.",
            ]}
            correct="GDP omits the negative consequences associated with economic growth."
            solution={
              <>
                <p>
                  The question asks for a reason behind the criticism of GDP. In the passage, critics object that GDP is “overly narrow” and “doesn’t account for harms of growth.” Therefore, the best answer is that GDP fails to incorporate negative effects of economic growth.
                </p>
                <p>
                  Why the others are traps:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    “Based on aggregate output” and “has been used for many years” both match statements in the passage, but they are not presented as reasons for criticism. They match, but they don’t answer the question.
                  </li>
                  <li>
                    “Reflects benefits of economic activity” is not cited as an objection; the complaint is about omitting the costs.
                  </li>
                  <li>
                    “Easy to compute from widely available data” is also not a stated reason for criticism; in fact, the text links that advantage to GPI’s practicality, not to a critique of GDP.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            Don’t pick an option just because it mirrors something the author said. Confirm that it resolves the exact task in the stem. If it doesn’t, it’s a “Matches but Incorrect” trap.
          </p>
        </section>
      </article>
    </main>
  );
}