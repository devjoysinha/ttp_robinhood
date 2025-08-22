import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.5.1 Strengthening Cause–Effect by Ruling Out Alternatives | Critical Reasoning",
  description:
    "Learn a core GMAT Critical Reasoning tactic: make a causal claim more convincing by eliminating other plausible causes. Includes two carefully explained multiple‑choice drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5.1 Strengthening a Cause‑and‑Effect Argument by Ruling Out Alternative Causes
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A typical causal claim has the form <InlineMath math={"C \\to E"} />:
          some cause C is asserted to bring about effect E. To make such a
          conclusion more credible, a powerful move is to rule out other
          reasonable explanations for E. The fewer viable competing causes,
          the stronger the case that C really drives E.
        </p>

        <MustKnow>
          To reinforce a causal conclusion, eliminate plausible alternative
          causes of the observed effect. You don’t have to prove the conclusion
          beyond doubt—excluding even one sensible rival explanation increases
          support for the claim.
        </MustKnow>

        <p>
          Authors making causal claims typically assume two things: that the
          proposed cause actually operates, and that no other factor better
          explains the outcome. You can shore up the argument by adding
          evidence that the “no other factor” assumption is reasonable.
        </p>

        <p>
          Quick illustration: Suppose a company trials a new multivitamin among
          people with low vitamin D. After the trial, every participant’s
          vitamin D levels rise. The company concludes the multivitamin caused
          the increase. That might be right—but other forces could explain the
          jump (for example, unusually sunny weather or a shift toward
          vitamin‑D‑rich foods). If we learn that participants’ sun exposure
          and diets did not change, we’ve removed two competing causes, so the
          supplement looks more likely to be the driver.
        </p>

        <MCQExample
          number={19}
          prompt="Two hundred college seniors joined a study. One hundred completed a survey and received 30 hours of conflict‑resolution training; the other 100 only completed the survey. Ten years after graduation, the trained group reported significantly higher average incomes than the untrained group. Therefore, learning conflict‑resolution skills helps people earn more."
          options={[
            "When recruited, participants agreed to complete a second survey a decade later.",
            "Many universities could add conflict‑resolution courses without hiring more instructors.",
            "People who are strong at handling conflicts often report relatively low‑stress personal relationships.",
            "Students aiming for high incomes may reasonably choose to take conflict‑resolution classes.",
            "Survey data indicate that the trained group was no more motivated to earn high incomes than the untrained group.",
          ]}
          correct="Survey data indicate that the trained group was no more motivated to earn high incomes than the untrained group."
          solution={
            <>
              <p>
                We need evidence that supports the causal link “training
                increases income” by removing competing explanations. A common
                alternative cause here is baseline motivation.
              </p>
              <p>
                Choice E tells us motivation did not differ between the groups,
                so motivation is unlikely to explain the income gap. That
                directly reinforces the causal story that the training led to
                higher earnings.
              </p>
              <p>
                The other choices don’t eliminate a rival cause or add causal
                support: agreeing to a follow‑up (A) and feasibility for
                colleges (B) are irrelevant; low‑stress relationships (C) is a
                new, unlinked claim; and “students should take the class” (D)
                is a recommendation that presupposes, rather than supports, the
                causal claim.
              </p>
            </>
          }
        />

        <MCQExample
          number={20}
          prompt="Each year, students at Middletown Elementary and Greeneville Elementary take tests to measure academic progress. Every year, Middletown’s students show more progress on average than Greeneville’s. Therefore, Middletown’s teachers must be more effective at promoting academic growth."
          options={[
            "Middletown’s administration is recognized for effectively using technology to support learning.",
            "Parents of students at Greeneville are just as supportive of academic progress as parents at Middletown.",
            "Some teachers focus narrowly on raising test scores rather than fostering well‑rounded learning.",
            "Administrators often use student test results when evaluating teachers.",
            "Several Middletown teachers have received teaching‑excellence awards.",
          ]}
          correct="Parents of students at Greeneville are just as supportive of academic progress as parents at Middletown."
          solution={
            <>
              <p>
                The argument infers “better teachers” from higher measured
                progress. To strengthen, remove alternative causes for the
                difference in progress between schools.
              </p>
              <p>
                Choice B neutralizes a major rival explanation—differences in
                parental support. If parental support is comparable across
                schools, the teacher‑effectiveness explanation looks more
                plausible.
              </p>
              <p>
                The other choices do not rule out a competing cause or target
                the causal link: technology prowess (A) could itself be an
                alternative cause, not evidence about teachers; a general claim
                about teaching to the test (C) is non‑specific; using test
                scores in evaluations (D) doesn’t add causal support; and some
                awards at Middletown (E) don’t establish that teachers there
                are, on the whole, more effective than those at Greeneville.
              </p>
            </>
          }
        />

        <p>
          Bottom line: to make <InlineMath math={"C \\to E"} /> more convincing,
          chip away at other credible paths to E. In the next section, we’ll
          look at scientifically designed experiments and why features like
          random assignment and controls are so effective at ruling out
          alternative causes.
        </p>
      </article>
    </main>
  );
}