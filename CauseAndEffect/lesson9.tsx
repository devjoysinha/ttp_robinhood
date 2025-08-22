import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "6.4.3 Weaken Cause-and-Effect by a Common Cause | Critical Reasoning",
  description:
    "Learn how to undermine a causal claim by proposing a confounding variable that drives both the supposed cause and effect. Includes two practice questions with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4.3 Weakening a Causal Claim by Introducing a Common Cause
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One reliable way to challenge a cause-and-effect conclusion is to
          suggest a third factor that explains both the observed cause and the
          observed effect. In other words, rather than{" "}
          <InlineMath math={"A \\to B"} /> being true, we show that a hidden{" "}
          <InlineMath math={"C"} /> could be responsible for producing both{" "}
          <InlineMath math={"A"} /> and <InlineMath math={"B"} />.
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <BlockMath math={"\\operatorname{corr}(A,B)\\; \\nRightarrow\\; A\\to B"} />
          <BlockMath math={"\\exists\\; C:\\; C\\to A\\; \\text{and}\\; C\\to B"} />
        </div>

        <MustKnow>
          Correlation alone does not prove causation. To weaken a causal
          conclusion, present a plausible confounder that would increase the
          likelihood of both the “cause” and the “effect,” breaking the claimed
          link.
        </MustKnow>

        <section aria-labelledby="warmup-title" className="space-y-3">
          <h3 id="warmup-title" className="text-xl font-semibold text-white">
            Quick intuition
          </h3>
          <p>
            Imagine a researcher observes that frostbite cases and coat usage
            both jump in winter, and then asserts that wearing coats causes
            frostbite. That claim fails because colder temperatures are a
            credible common cause: low temperatures raise frostbite risk and
            also make people wear coats. The coat–frostbite correlation is real,
            but it does not establish causation.
          </p>
        </section>

        <section aria-labelledby="context-title" className="space-y-3">
          <h3 id="context-title" className="text-xl font-semibold text-white">
            Context drill
          </h3>
          <p>
            A city reports a rise in air pollution and a drop in residents’
            fitness levels. Some conclude that pollution is making people less
            fit. An alternative story is that car usage has replaced daily
            cycling: more driving increases emissions and simultaneously reduces
            everyday physical activity. The transportation shift is a
            confounding variable that weakens the original causal claim.
          </p>
        </section>

        <MCQExample
          number={31}
          prompt="Researchers note that students who attended preschool graduate high school at higher rates than those who did not. They conclude that making preschool universal will raise graduation rates. Which option most undermines this conclusion?"
          options={[
            "Some early-childhood programs are not linked to higher graduation rates.",
            "Graduation rate is just one of many measures of academic success.",
            "Families with highly involved caregivers are far more likely to enroll their children in preschool than families with less involved caregivers.",
            "Students who skip preschool are more likely to underperform on state assessments.",
            "Many districts cannot currently afford universal preschool.",
          ]}
          correct="Families with highly involved caregivers are far more likely to enroll their children in preschool than families with less involved caregivers."
          solution={
            <>
              <p>
                The argument treats a correlation as proof that preschool{" "}
                <em>causes</em> graduation. A strong weakener supplies a common
                cause. If caregiver involvement drives both preschool enrollment
                and later graduation, then the higher graduation rate among
                preschool attendees may be due to involvement, not preschool
                itself. That breaks the claimed causal link.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Choices about other programs (A) or other metrics (B) are
                  irrelevant to this causal connection.
                </li>
                <li>
                  Option (D) tends to support the causal story, not weaken it.
                </li>
                <li>
                  Option (E) concerns feasibility, not whether the causal claim
                  is valid.
                </li>
              </ul>
              <p className="mt-2">
                Best answer: the caregiver-involvement confounder (choice C).
              </p>
            </>
          }
        />

        <MCQExample
          number={32}
          prompt="Epidemiologist: People who regularly consume large amounts of alcohol show a lung cancer rate about 50% higher than that of the general population. Therefore, routine alcohol consumption can cause lung cancer. Which finding most seriously calls this conclusion into question?"
          options={[
            "Compounds in red wine have been associated with cancer prevention.",
            "Heavier drinkers have higher lung cancer incidence than moderate drinkers.",
            "Occasional alcohol consumers have the same lung cancer incidence as the general population.",
            "Alcohol does not visibly damage lung tissue in the way cigarette smoke does.",
            "People often smoke and drink to cope with psychological stressors that are believed to contribute to the development of lung cancer.",
          ]}
          correct="People often smoke and drink to cope with psychological stressors that are believed to contribute to the development of lung cancer."
          solution={
            <>
              <p>
                The conclusion treats a correlation as causation. A strong
                weakener introduces a common cause. If emotional stress both
                increases alcohol consumption and elevates lung cancer risk (for
                instance, by also increasing smoking), then alcohol use may not
                be the direct cause of the higher cancer rate.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  (B) trends with dose align with causation and thus support the
                  claim.
                </li>
                <li>
                  (C) leaves open that regular heavy consumption is harmful.
                </li>
                <li>
                  (A) and (D) do not directly address the specific correlation
                  underlying the conclusion.
                </li>
              </ul>
              <p className="mt-2">
                Best answer: the stress confounder (choice E).
              </p>
            </>
          }
        />

        <section aria-labelledby="wrapup-title" className="space-y-3">
          <h3 id="wrapup-title" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p>
            To undercut a causal claim built on a correlation, propose a
            plausible variable <InlineMath math={"C"} /> such that{" "}
            <InlineMath math={"C\\to A"} /> and <InlineMath math={"C\\to B"} />.
            If that story fits the facts, the original conclusion that{" "}
            <InlineMath math={"A\\to B"} /> is no longer compelled.
          </p>
        </section>
      </article>
    </main>
  );
}