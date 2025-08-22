import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function TeX({ children, display = false }: { children: string; display?: boolean }) {
  const html = katex.renderToString(children, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return display ? (
    <div
      className="katex-block overflow-x-auto"
      role="img"
      aria-label="mathematical formula"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <span
      className="katex-inline"
      role="img"
      aria-label="mathematical formula"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.13.1 Replace Part of a Mixture with Another Mixture | Word Problems",
  description:
    "Learn how to handle replacement problems where part of a mixture is removed and replaced with a different mixture. Includes a worked example and a practice multiple‑choice question with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.13.1 Replacing Part of a Solution with Another Solution
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, you may have swapped out some of a mixture with a pure component (for
          instance, removing some brine and adding pure water). The same playbook works when
          you replace a portion of one mixture with another mixture of a different
          concentration. Track the amount of the key ingredient before and after the
          replacement, and set up a single balance equation.
        </p>

        <MustKnow>
          Treat replacement as a bookkeeping exercise on the amount of the active ingredient.
          After removing r units of the original mixture and adding r units of the new
          mixture, the final amount of ingredient equals:
          <br />
          <TeX display>{`\\text{ingredient after removal} + \\text{ingredient added} = \\text{ingredient in final mixture}`}</TeX>
        </MustKnow>

        {/* Worked example card */}
        <section aria-labelledby="worked-example" className="rounded-lg border border-gray-700 bg-gray-900/40 p-5">
          <h3 id="worked-example" className="mb-2 text-xl font-semibold text-white">
            Worked Example: Replace with a Different Solution
          </h3>
          <p className="mb-4">
            A 36‑gallon solution is 25% fertilizer. How many gallons must be removed and
            replaced with an 18% fertilizer solution to end with 36 gallons at 20% fertilizer?
          </p>

          <p className="mb-2">
            Let <TeX>{`r`}</TeX> be the volume (in gallons) that we remove and then replace.
            After removal, <TeX>{`36 - r`}</TeX> gallons remain at 25%. We then add
            <TeX>{`\\ r`}</TeX> gallons at 18%. The final volume still totals 36 gallons at 20%.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-left">
              <caption className="sr-only">
                Mixture matrix for replacement with another solution
              </caption>
              <thead>
                <tr className="border-b border-gray-700 text-gray-200">
                  <th className="py-2 pr-4">Component</th>
                  <th className="py-2 pr-4">Percent Fertilizer</th>
                  <th className="py-2 pr-4">Gallons</th>
                  <th className="py-2 pr-4">Gallons of Fertilizer</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2 pr-4">Remaining original</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2 pr-4">
                    <TeX>{`36 - r`}</TeX>
                  </td>
                  <td className="py-2 pr-4">
                    <TeX>{`0.25\\,(36 - r) = 9 - 0.25r`}</TeX>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 pr-4">Added solution</td>
                  <td className="py-2 pr-4">18%</td>
                  <td className="py-2 pr-4">
                    <TeX>{`r`}</TeX>
                  </td>
                  <td className="py-2 pr-4">
                    <TeX>{`0.18\\,r`}</TeX>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Final mixture</td>
                  <td className="py-2 pr-4">20%</td>
                  <td className="py-2 pr-4">36</td>
                  <td className="py-2 pr-4">
                    <TeX>{`0.20\\cdot 36 = 7.2`}</TeX>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-2">
            <p>Now equate the total fertilizer in the final mixture:</p>
            <TeX display>{`0.25(36 - r) + 0.18r = 0.20\\cdot 36`}</TeX>
            <TeX display>{`9 - 0.25r + 0.18r = 7.2`}</TeX>
            <TeX display>{`9 - 0.07r = 7.2 \\quad\\Rightarrow\\quad -0.07r = -1.8 \\quad\\Rightarrow\\quad r = \\dfrac{1.8}{0.07} \\approx 25.7`}</TeX>
            <p className="mt-2">
              So, removing and then replacing about 25.7 gallons with the 18% solution yields
              the desired 20% concentration.
            </p>
          </div>
        </section>

        <p>
          The same template works for any “remove and replace” setup: express the remaining
          amount of the ingredient after removal, add the amount contributed by the new
          mixture, and set that equal to the amount required in the target mixture.
        </p>

        {/* Practice multiple choice */}
        <MCQExample
          number={63}
          prompt="Doris has 60 liters of lemonade that is 25% syrup by volume. To produce 60 liters that are 20% syrup, how many liters must be removed and replaced with lemonade that is 10% syrup?"
          options={["15", "20", "25", "30", "40"]}
          correct="20"
          solution={
            <>
              <p>
                Let <TeX>{`r`}</TeX> be the number of liters removed (and then replaced). After
                removal, <TeX>{`60 - r`}</TeX> liters remain at 25% syrup, contributing{" "}
                <TeX>{`0.25(60 - r)`}</TeX> liters of syrup. The added lemonade contributes{" "}
                <TeX>{`0.10r`}</TeX> liters of syrup. The final mixture is 60 liters at 20% syrup,
                i.e., <TeX>{`12`}</TeX> liters of syrup.
              </p>
              <TeX display>{`0.25(60 - r) + 0.10r = 0.20\\cdot 60`}</TeX>
              <TeX display>{`15 - 0.25r + 0.10r = 12`}</TeX>
              <TeX display>{`15 - 0.15r = 12 \\quad\\Rightarrow\\quad -0.15r = -3 \\quad\\Rightarrow\\quad r = \\dfrac{3}{0.15} = 20`}</TeX>
              <p>Therefore, 20 liters must be removed and replaced.</p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="mt-8">
          <h3 id="big-picture" className="text-lg font-semibold text-gray-200">
            Big Picture
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              Keep the volume constant: remove <TeX>{`r`}</TeX>, then add <TeX>{`r`}</TeX>.
            </li>
            <li>
              Balance the ingredient: remaining ingredient + added ingredient = required
              ingredient.
            </li>
            <li>
              One linear equation in <TeX>{`r`}</TeX> solves the problem quickly.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}