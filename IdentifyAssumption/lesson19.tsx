import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure the KaTeX stylesheet is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function KMath({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "html",
  });
  return (
    <span
      className={display ? "block" : "inline"}
      role="img"
      aria-label={ariaLabel ?? `math ${expr}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "2.11.3 Assumption Traps — Choices That Explain the Story | Critical Reasoning",
  description:
    "Learn to spot the common trap in Assumption questions: an answer that merely explains part of the passage rather than stating a needed assumption. Includes an illustrative mini‑example and a must‑be‑true multiple‑choice question with a full, position‑by‑position breakdown.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11.3 Trap Type 3: An Option That Explains Part of the Scenario
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One frequent trap in Assumption questions is an answer choice that
          offers a tidy explanation for something in the passage. Explanations can
          sound appealing, but an Assumption question is asking for a statement the
          argument needs to be true. If a choice merely explains why something in
          the story might happen, it’s not necessarily a requirement of the
          argument.
        </p>

        <MustKnow>
          Explanations are not assumptions. A correct assumption must be required
          for the conclusion to stand; an explanation just accounts for some detail
          in the setup without being logically necessary.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑Example: Don’t Confuse “Explains” with “Assumes”
          </h3>
          <p className="italic text-gray-300">
            Helena is known for the best apple pie in Clay County. In the Southern
            Charm baking contest, top apple pies win every year. Therefore, Helena’s
            apple pie will win this year.
          </p>
          <p className="italic text-gray-300">Which statement must the argument assume?</p>

          <MCQExample
            number={31}
            prompt="Pick the assumption the argument requires."
            options={[
              "The same panel of judges has evaluated the contest every single year.",
              "Helena will actually submit an apple pie to this year’s contest.",
            ]}
            correct="Helena will actually submit an apple pie to this year’s contest."
            solution={
              <>
                <p>
                  The argument concludes that Helena’s pie will win. That only makes
                  sense if she enters an apple pie at all—otherwise there’s no entry
                  to win. So the needed assumption is that she will submit her pie.
                </p>
                <p>
                  The “same judges every year” option merely explains why the results
                  might be consistent across years. Whether the judges are the same
                  is not required for the conclusion that Helena’s pie will win now.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="primary-example" className="space-y-4">
          <h3 id="primary-example" className="text-xl font-semibold text-white">
            Must‑Be‑True Drill
          </h3>
          <p>
            A study in Sweden reported that people working six hours per day were
            more productive and took fewer sick days than when they worked a
            traditional seven to eight hours. Therefore, a profit‑maximizing firm
            should hire more people and have each of them work six‑hour shifts
            rather than seven to eight hours.
          </p>
          <p className="font-medium text-gray-200">
            Which of the following must be true for the conclusion to hold?
          </p>

          <MCQExample
            number={32}
            prompt="Select the statement that must be true."
            options={[
              "People who work six hours per day usually have more energy for personal life than those who work longer days.",
              "The extra profit generated by shorter shifts is greater than the added expense of hiring more staff.",
              "Moving from eight‑hour to six‑hour shifts typically lowers stress and raises job satisfaction.",
              "Any reduction in daily hours always increases a worker’s productivity.",
              "Most employees would prefer six‑hour shifts to seven‑ or eight‑hour shifts.",
            ]}
            correct="The extra profit generated by shorter shifts is greater than the added expense of hiring more staff."
            solution={
              <>
                <p className="mb-2">
                  Break the argument apart:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Premise: Six‑hour days led to higher productivity and fewer
                    absences than seven‑ to eight‑hour days.
                  </li>
                  <li>
                    Conclusion: To maximize profits, companies should hire more
                    workers and switch everyone to six‑hour shifts.
                  </li>
                </ul>
                <p className="mt-3">
                  Profits depend on both how much value is produced and what it
                  costs to produce it. In simple terms,{" "}
                  <KMath expr="P = R - C" ariaLabel="Profit equals revenue minus cost" />.
                  For the plan to maximize profits, the revenue/efficiency gains
                  from shorter shifts must outweigh the additional hiring costs:
                </p>
                <p className="mt-1">
                  <KMath expr="\text{Gain from 6-hour shifts} > \text{Added hiring cost}" ariaLabel="gain is greater than added hiring cost" />
                </p>
                <p className="mt-3">
                  That’s exactly what choice (B) states, so (B) is required.
                </p>
                <p className="mt-3">
                  Why the others aren’t required:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    (A) and (C) merely offer possible explanations for the
                    productivity increase (more energy, less stress). The argument
                    doesn’t need those explanations to be true.
                  </li>
                  <li>
                    (D) is too broad—this argument only compares six hours versus
                    seven to eight hours, not every possible hour reduction.
                  </li>
                  <li>
                    (E) preferences are irrelevant; the conclusion is about profits,
                    not which schedule workers would rather have.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <MustKnow>
          In Assumption questions, confirm that the choice you select is needed for
          the conclusion to remain valid. If the conclusion could still stand after
          negating a choice, that choice is not an assumption—it might just be an
          explanation or a nice‑to‑have detail.
        </MustKnow>

        <p>
          Bottom line: explanations can sound reasonable, but a correct assumption
          is something the conclusion cannot live without.
        </p>
      </article>
    </main>
  );
}