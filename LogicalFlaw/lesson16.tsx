import type { Metadata } from "next";
import TeX from "@matejmazur/react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.3.4 Irrelevant Math in Logical Flaws | GMAT Critical Reasoning",
  description:
    "Learn to spot Logical Flaw answer choices that cite numbers, percentages, or statistics that don’t actually bear on the claim. Includes a worked multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main
      className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12"
      aria-labelledby="page-title"
    >
      <header className="mb-8">
        <h1
          id="page-title"
          className="mt-2 text-2xl font-bold text-white md:text-3xl"
        >
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.3.4 Answer Choices That Introduce Mathematical Details That Don’t
          Matter
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Logical Flaw prompts often involve statistics, averages, or totals.
          That opens the door for trap answers that reference numerical facts
          which sound impressive but are irrelevant to the specific claim the
          argument is trying to establish.
        </p>

        <MustKnow>
          Stay locked on the conclusion. Numerical tidbits are useful only if
          they change the truth of the claim being made. If a number, rate, or
          percentage does not affect the path from evidence to conclusion, it’s
          a distraction.
        </MustKnow>

        <p>
          For example, if a conclusion concerns the rate of drug addiction among
          teenagers, an answer choice about what fraction of the entire country
          is made up of teenagers is beside the point—it doesn’t speak to the
          causal link or support behind the conclusion about teens.
        </p>

        <MustKnow>
          Math-sounding distractors are common in Logical Flaw questions. Do not
          reward an answer simply because it cites statistics; reward it only if
          those statistics matter for the exact claim being proven.
        </MustKnow>

        <section aria-labelledby="how-to-avoid" className="space-y-2">
          <h3 id="how-to-avoid" className="text-white font-semibold">
            How to avoid the trap
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Be precise about what the author is trying to show. Write a short
              paraphrase of the conclusion if needed.
            </li>
            <li>
              Don’t pick an answer that merely “sounds reasonable.” Check
              whether the numerical info actually changes the logical link from
              premises to conclusion.
            </li>
          </ul>
        </section>

        <MCQExample
          number={17}
          prompt={
            <>
              A few decades ago, when roughly{" "}
              <TeX math={"10\\%"} aria-label="ten percent" /> of people in
              England chose not to have children, population growth was barely
              positive. Currently, about{" "}
              <TeX math={"20\\%"} aria-label="twenty percent" /> choose not to
              have children. Therefore, if there were no immigration, England’s
              population would decline substantially.
              <br />
              <br />
              The argument is most vulnerable to which criticism?
            </>
          }
          options={[
            "It ignores the possibility that, among recent immigrants, the share who are having children is higher than it is in the overall population.",
            "It overlooks the possibility that the average number of children per parent has risen sharply over the same time period.",
            "It assumes, without support, that a population decline would be bad rather than good for England.",
            "It fails to consider that England’s total population is larger now than it was a few decades ago.",
            "It takes for granted that immigration at its current pace would hold the population steady at today’s level.",
          ]}
          correct="It overlooks the possibility that the average number of children per parent has risen sharply over the same time period."
          solution={
            <>
              <p>
                Structure the reasoning. Then test what must be true for the
                conclusion to hold.
              </p>
              <p>
                Past: growth was minimal when about{" "}
                <TeX math={"10\\%"} aria-label="ten percent" /> of people chose
                not to have kids. Present: about{" "}
                <TeX math={"20\\%"} aria-label="twenty percent" /> choose not to
                have kids. Conclusion: without immigration, population would{" "}
                significantly decrease.
              </p>
              <p>
                The conclusion implicitly compares births now vs. births then.
                A simple model helps:
              </p>
              <p className="rounded-md bg-slate-800/50 p-3">
                <TeX
                  math={
                    " \\text{Births}_{\\text{past}} \\propto b_{\\text{past}}\\,\\big(1-0.10\\big)"
                  }
                />
                <br />
                <TeX
                  math={
                    " \\text{Births}_{\\text{now}} \\propto b_{\\text{now}}\\,\\big(1-0.20\\big)"
                  }
                />
              </p>
              <p>
                If the average children per parent today (
                <TeX math={"b_{\\text{now}}"} aria-label="b now" />) has
                increased enough,{" "}
                <TeX
                  math={
                    "\\text{Births}_{\\text{now}} \\ge \\text{Births}_{\\text{past}}"
                  }
                  aria-label="births now greater than or equal to births past"
                />{" "}
                could still hold, undermining the claim that the population
                would drop substantially without immigration. That is exactly
                what the correct choice points out.
              </p>

              <p>
                Choice B (correct): “It overlooks the possibility that the
                average number of children per parent has risen.” If parents who
                do have kids are having more children on average, that could
                offset the larger share of people choosing childlessness. Then
                the “significant decrease” conclusion is not warranted.
              </p>

              <p>
                Choice A: Talks about immigrant fertility relative to the whole
                population. The conclusion is a hypothetical about no
                immigration; immigrant behavior is irrelevant to whether the
                non‑immigrant birth dynamics alone force a significant decline.
              </p>
              <p>
                Choice C: Injects value judgment (good/bad). The conclusion
                asserts what would happen, not whether it’s desirable. This does
                not expose a logical flaw.
              </p>
              <p>
                Choice D: Notes that the current population is larger than in
                the past. Absolute population size doesn’t determine whether the
                population would trend downward under the stated conditions.
              </p>
              <p>
                Choice E: Claims the author assumes immigration would exactly
                hold the current population level. The author never says that.
                The point is only that removing immigration would cause a large
                decrease; that statement could be true even if immigration
                currently causes a slight increase or a slight decrease.
              </p>

              <p className="font-semibold text-white">
                Answer: B
              </p>
            </>
          }
        />

        <MustKnow>
          Numbers persuade—only when they move the logic. Ask: If this math
          fact were true or false, would it change whether the conclusion
          follows from the premises? If not, it doesn’t matter for this
          question.
        </MustKnow>

        <p>
          Bottom line: isolate the claim, map the support, and reject tempting
          choices that add numerical noise without altering the validity of the
          reasoning.
        </p>
      </article>
    </main>
  );
}