import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.11.1 Assumption Trap: Supports the Wrong Conclusion | Critical Reasoning",
  description:
    "Learn how a common trap in Identify-the-Assumption questions supports a different conclusion than the author’s actual claim. Includes a quick dialogue drill and a full multiple‑choice example with complete reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11.1 Incorrect Choice Type 1: Backs the Wrong Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent trap in Identify‑the‑Assumption questions borrows key terms from the stimulus but ends up
          shoring up a conclusion that’s adjacent to, not the same as, the author’s actual claim. If your eye
          slips to that nearby claim, the trap looks attractive. If you stay locked on the true conclusion,
          the trap falls apart.
        </p>

        <MustKnow>
          Always anchor yourself to the author’s stated conclusion. Reject choices that strengthen, explain,
          or assume a different claim—even if that claim sounds closely related.
        </MustKnow>

        <MCQExample
          number={30}
          prompt={
            <>
              Zara: I&apos;m trying to sell more of my watercolor pieces. Showing them at the town library seems like
              the best way to reach that goal.
              <br />
              Theo: You&apos;d be seen by more people at Snazzy&apos;s Gallery downtown. So you&apos;d be more likely to meet
              your goal if you displayed your work there instead.
              <br />
              Which assumption allows Theo&apos;s conclusion to be logically drawn?
            </>
          }
          options={[
            "Paintings sold at Snazzy’s Gallery typically fetch higher prices than similar works displayed at the library.",
            "Some people who visit Snazzy’s Gallery would be interested in buying the kind of paintings Zara sells.",
          ]}
          correct="Some people who visit Snazzy’s Gallery would be interested in buying the kind of paintings Zara sells."
          solution={
            <>
              <p>
                Theo concludes that displaying at the gallery makes Zara more likely to achieve her goal of selling
                more paintings. The conclusion is about quantity sold, not price.
              </p>
              <p>
                Price comparisons between the gallery and the library (higher vs. lower prices) don&apos;t matter for
                selling more pieces. What Theo needs is the link from increased exposure to actual potential buyers.
                If some gallery visitors want paintings like Zara&apos;s, more exposure can plausibly translate to more
                sales. That’s the missing assumption.
              </p>
            </>
          }
        />

        <MustKnow>
          Don’t confuse “more sales” with “higher prices,” “more visibility,” or “better venue.” A correct assumption
          must connect directly to the author’s exact conclusion.
        </MustKnow>

        <p>
          Let’s apply this idea to a full multiple‑choice problem. Keep the target conclusion in view and watch
          for answers that drift to a different claim.
        </p>

        <MCQExample
          number={31}
          prompt={
            <>
              Many plant foods contain little or no vitamin B12, which has led to worries that people following
              plant‑based diets could become B12 deficient. Still, there&apos;s no reason to expect widespread B12
              deficiency among those adopting such diets, because they can readily consume B12‑fortified foods or
              take B12 supplements. Which of the following is an assumption required for this conclusion?
            </>
          }
          options={[
            "Fortifying plant foods with B12 does not noticeably change their taste.",
            "No one has a medical condition that interferes with absorbing B12 from foods.",
            "The environmental impact of plant‑based diets is not worse than that of diets including some animal products.",
            "People who choose plant‑based diets generally know they may need to add B12 to avoid deficiency.",
            "There are no other essential nutrients missing from plant foods that cannot be supplemented.",
          ]}
          correct="People who choose plant‑based diets generally know they may need to add B12 to avoid deficiency."
          solution={
            <>
              <p>
                Conclusion: We shouldn’t expect broad B12 deficiency among plant‑based eaters. Premise: B12 is easy
                to obtain via fortified foods or supplements.
              </p>
              <p>
                Gap: Availability alone doesn’t prevent deficiency; people also have to know to use what’s available
                (and typically will do so). The needed assumption is that plant‑based eaters are generally aware they
                may need B12, so the easy availability is meaningful.
              </p>
              <p>
                Why the others fail:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Taste (A) is irrelevant to whether deficiency will be widespread; even if taste changes, fortified
                  foods or supplements could still prevent deficiency.
                </li>
                <li>
                  Absorption issues (B) speak to a different cause of deficiency (medical conditions), not the trend
                  toward plant‑based diets. The conclusion is about diet choice, not all possible causes of deficiency.
                </li>
                <li>
                  Environmental effects (C) are off‑topic; the conclusion focuses only on B12 deficiency risk.
                </li>
                <li>
                  Other nutrients (E) broaden the scope beyond B12; even if other nutrients pose issues, the claim
                  about B12 could still hold.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Checklist for assumption traps:
          - Is the choice about the same exact conclusion?
          - Does it bridge the real logical gap (not a side issue)?
          - Would negating it seriously weaken the author’s claim?
        </MustKnow>

        <p>
          Bottom line: The best defenses against this trap are (1) mark the precise conclusion, (2) map the gap
          between premise and conclusion, and (3) reject choices that strengthen or explain something else.
        </p>
      </article>
    </main>
  );
}