import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "10.3.3 Mis‑targeted Flaw Choices (Attacking the Wrong Conclusion) | Critical Reasoning",
  description:
    "Learn how trap answers in Logical Flaw questions often critique support for a related—but different—conclusion. Includes a worked mini‑case and a multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.3.3 Incorrect Choices That Critique Support for the Wrong
          Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test makers love crafting tempting wrong answers by shifting the
          target: a choice may highlight a defect in the evidence for a
          conclusion that is close to, but not the same as, the author’s actual
          claim. If you don’t pin down the exact conclusion first, that trap is
          easy to miss.
        </p>

        <MustKnow>
          Trap answers often attack support for a different claim than the one
          drawn in the stimulus. Always identify the author’s precise conclusion
          before judging any answer. If an option evaluates evidence for a related
          conclusion instead of the real one, it’s off‑target.
        </MustKnow>

        <p>
          This tactic appears frequently in Logical Flaw questions. The choice
          sounds reasonable because, if the argument had aimed at a slightly
          different conclusion, the critique would apply. But since the author
          didn’t make that conclusion, the “flaw” isn’t actually a flaw in the
          given argument.
        </p>

        <ExampleCard
          number={15}
          title="Mini‑Case: Don’t Attack a Different Conclusion"
          statements={[
            "Education Secretary: A recent study finds that, as years of high‑school education increase, the likelihood of drug addiction decreases. Therefore, if we can raise the percentage of students who finish high school, youth drug addiction will decline.",
            "(A) It assumes, without adequate grounds, that the Department of Education already has effective methods to boost high‑school completion.",
            "(B) It ignores the possibility that drug use causes some students to leave high school early, rather than schooling level determining drug use.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The conclusion to evaluate is causal: “Getting more students to
                finish high school will reduce youth addiction.” Choice (A) is a
                classic mis‑target: it questions whether the Department can
                implement the policy, not whether finishing high school would
                actually reduce addiction. The argument’s claim is about the
                effect of increased completion on addiction, not about the
                Department’s operational capability.
              </p>
              <p>
                Choice (B) flags a real flaw: it points to reverse causation. If
                drug use leads to lower completion (rather than more schooling
                lowering drug use), then pushing completion might not decrease
                addiction at all.
              </p>
            </>
          }
        />

        <MustKnow>
          A dependable workflow:
          <br />1) Lock in the stimulus’s exact conclusion.
          <br />2) For each answer, ask: “Is this critiquing the support for
          that exact conclusion?” If it targets a nearby claim, eliminate it.
        </MustKnow>

        <p>
          Try the following question. As you assess each option, check whether
          it attacks the support for the argument’s actual claim—rather than a
          related but different claim.
        </p>

        <MCQExample
          number={16}
          prompt="One duty of the Verdantville police is to keep local roads safe. Yet, the number of drivers ticketed for speeding has steadily fallen over the last few years. Therefore, the Verdantville police are shirking this responsibility."
          options={[
            "in recent years the department shifted staff to investigations to address a surge in burglaries",
            "many car crashes occur during rush hours when traffic is so congested that speeding is rare",
            "the city raised speeding fines, keeping total fine revenue steady despite fewer tickets",
            "town agencies have trimmed services across the board to balance the budget during a slow economy",
            "the drop in speeding tickets reflects effective enforcement that has reduced speeding on local roads",
          ]}
          correct="the drop in speeding tickets reflects effective enforcement that has reduced speeding on local roads"
          solution={
            <>
              <p>
                Identify the claim: “Police are neglecting road‑safety duties,”
                inferred from “fewer speeding citations.” That leaps from an
                enforcement metric to actual safety without showing that the
                metric means safety has worsened.
              </p>
              <p>
                The best criticism is the possibility that fewer citations come
                from safer roads—e.g., fewer drivers are speeding because
                enforcement has been effective. If that’s true, the declining
                ticket count would not show neglect. That is exactly what choice
                (E) states.
              </p>
              <p>
                Why the others miss:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  (A) Explains a staffing change. Even with a reason for fewer
                  tickets, the question is whether safety is maintained—this
                  doesn’t address that.
                </li>
                <li>
                  (B) Notes when crashes happen, not whether the overall safety
                  trend or speeding levels changed in recent years.
                </li>
                <li>
                  (C) Talks about revenue, which isn’t the conclusion under
                  debate.
                </li>
                <li>
                  (D) Provides budget context but doesn’t show what happened to
                  road safety.
                </li>
              </ul>
              <p>Thus, choice (E) is correct.</p>
            </>
          }
        />

        <p>
          Bottom line: lock onto the author’s exact claim and judge answers by
          whether they critique the support for that specific claim. Options
          that fault evidence for a closely related, but different, conclusion
          are mis‑targeted and should be ruled out. Position your evaluation on
          the right bull’s‑eye, and many traps disappear. </p>
      </article>
    </main>
  );
}