import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.9 Detail Answers Built from Multiple Statements | Reading Comprehension",
  description:
    "Learn how GMAT RC detail answers can synthesize information from more than one sentence. See two quick illustrations and an example question with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9 Detail Answers Built from Multiple Statements
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Not every correct Detail answer is lifted from a single sentence. Quite often, the right
          choice blends information from multiple places in the passage or condenses several
          statements into one accurate idea.
        </p>

        <MustKnow>
          Some Detail answers combine or summarize points scattered across the passage. When you
          evaluate a choice, confirm that each part of the statement is supported by what the
          passage says—even if those supporting lines are in different sentences or paragraphs.
        </MustKnow>

        <section aria-label="Illustration 1: Summary across sentences" className="space-y-3">
          <p>
            Imagine a passage explaining that a powerful state sometimes pursued its aims through
            negotiation instead of force; that after conflicts it occasionally integrated former
            rivals in relatively tolerant ways; and that this approach reduced instability in the
            long run. A valid Detail answer could say:
          </p>
          <p className="italic text-gray-200">
            The state&apos;s reliance on diplomacy helped make its empire more stable than others.
          </p>
          <p>
            That answer compresses several sentences into one faithful summary. It&apos;s correct as
            long as every piece of the statement is grounded in the text.
          </p>
        </section>

        <section aria-label="Illustration 2: Combining named items with attributes" className="space-y-3">
          <p>
            Suppose a passage first describes cellular structures that generate energy in the form of
            ATP and later identifies those structures by name. A correct Detail answer might read:
          </p>
          <p className="italic text-gray-200">Mitochondria produce ATP.</p>
          <p>
            The answer merges “what they do” from one sentence with “what they&apos;re called” from
            another. It&apos;s still a detail, just assembled from multiple lines.
          </p>
        </section>

        <MustKnow>
          To verify a Detail answer that looks like a summary or a synthesis, match each element of
          the choice to specific lines in the passage. If any piece can’t be tied to the text, the
          choice is not supported.
        </MustKnow>

        <section aria-label="Example passage and question" className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example</h3>

          <div
            aria-label="Passage"
            className="rounded-md border border-gray-700 bg-gray-900/40 p-4"
          >
            <p>
              Studies show that people who score well on standard IQ tests can still think and act
              in ways that are not rational. This is puzzling because many psychologists long
              assumed that higher IQ should align with more rational judgments and behavior.
            </p>
            <p className="mt-3">
              To explain the mismatch, psychologist Keith Stanovich argues that IQ exams overlook
              crucial aspects of real‑world decision‑making. In his view, someone may be highly
              intelligent yet display a deficit he calls dysrationalia—the failure to reason and act
              rationally despite adequate intelligence.
            </p>
            <p className="mt-3">
              Research points to two contributors to dysrationalia. First, the brain can use
              multiple processing modes. Some modes are effortful but more reliable, while others
              feel easier but are poorly suited to careful reasoning. Because the accurate modes
              demand concentration and can be uncomfortable to use, people often default to the
              easier, lower‑precision modes. Psychologists have even dubbed such people “cognitive
              misers,” preferring the path of least mental effort and, as a result, making weaker
              choices.
            </p>
            <p className="mt-3">
              Second, there is a content issue: to reason well, people must acquire certain rules,
              strategies, and factual knowledge—what cognitive scientist David Perkins calls
              “mindware.” When the necessary mindware is missing, a “mindware gap” exists. Under
              Stanovich’s account, the larger the mindware gap, the more prone a person is to
              dysrationalia. For instance, without basic training in probability, a person may
              struggle to make rational choices in situations that hinge on chance.
            </p>
          </div>

          <MCQExample
            number={1}
            prompt='According to the passage, what does Stanovich believe about “mindware”?'
            options={[
              "As a person's mindware gap grows, irrational thinking and behavior become more likely.",
              "Studying statistics virtually eliminates mindware gaps.",
              "People with less mindware find it easier to think and act rationally.",
              "Low IQ scores typically go hand in hand with large mindware gaps.",
              "Mindware is fixed at birth and cannot be increased over time.",
            ]}
            correct="As a person's mindware gap grows, irrational thinking and behavior become more likely."
            solution={
              <>
                <p>
                  The question asks specifically about Stanovich’s view of mindware. In the final
                  paragraph, the passage states that when mindware is missing, there is a mindware
                  gap, and “the larger the mindware gap, the more prone a person is to
                  dysrationalia.” That directly supports the choice stating that as the mindware gap
                  grows, irrational thinking and behavior become more likely.
                </p>
                <p>
                  Why the others are out:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    The statistics example is presented as one illustration of a mindware gap, not a
                    claim that statistics training removes all gaps.
                  </li>
                  <li>
                    The passage says people need mindware to think rationally, which is the opposite
                    of “less mindware makes rational thinking easier.”
                  </li>
                  <li>
                    No connection is drawn between IQ scores and the size of mindware gaps.
                  </li>
                  <li>
                    Nothing indicates mindware is innate and unchangeable; the example implies that
                    learning can reduce gaps.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Takeaway: a Detail answer can be correct even if it stitches together statements from
          different parts of the passage. Confirm that each piece of the choice aligns with the
          text, and beware of choices that add claims the passage never makes.
        </p>
      </article>
    </main>
  );
}