import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.1 Introduction | Method of Reasoning (GMAT Critical Reasoning)",
  description:
    "Learn what Method of Reasoning questions really test: the structure of an argument. Includes a quick example that walks through identifying the reasoning pattern.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.1 Method of Reasoning and Boldface: Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Method of Reasoning (MoR) questions aren’t asking whether an argument
          is compelling. They ask you to describe how the author builds the
          argument—what claims are made, how the support is used, and how the
          parts fit together.
        </p>

        <MustKnow>
          For MoR questions, judge the structure, not the soundness. Your job is
          to identify the conclusion, the support (premises), and how each part
          functions in the overall argument.
        </MustKnow>

        <p>
          A useful mindset shift: for Strengthen or Weaken questions, you’re a
          builder or a wrecker—adding or removing support. For Method of
          Reasoning, you’re an inspector—you label the pieces and explain the
          layout.
        </p>

        <MustKnow>
          Think “inspector,” not “advocate.” Describe what the author does:
          introduces a claim, brings in evidence, draws a conclusion, considers
          counterpoints, etc. The accuracy of the claims is secondary here.
        </MustKnow>

        <p>
          Consider the short example below. Don’t evaluate whether the evidence
          is good; instead, map the roles each sentence plays and match that
          pattern to the correct choice.
        </p>

        <MCQExample
          number={1}
          prompt={
            <>
              Letter to the editor: “Your paper recently claimed that coffee is
              the most popular hot drink in the United States. Yet everyone I
              know prefers tea. So, the article must be wrong and should be
              corrected.”
              <br />
              Which option best describes the author’s reasoning technique?
            </>
          }
          options={[
            "Introduces a reported claim, offers counterevidence to challenge that claim, and asserts the opposite conclusion.",
            "Introduces a claim, presents confirming evidence, and restates a similar claim.",
            "Appeals to an authority, defines key terms, and draws an analogy.",
            "Describes two competing hypotheses, eliminates one via experiment, and accepts the other.",
          ]}
          correct="Introduces a reported claim, offers counterevidence to challenge that claim, and asserts the opposite conclusion."
          solution={
            <>
              <p>
                Break down the structure by sentence:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  The first sentence cites a claim from the newspaper
                  (reported claim).
                </li>
                <li>
                  The second sentence presents the author’s personal
                  observation intended to undercut that claim (counterevidence).
                </li>
                <li>
                  The third sentence delivers the author’s conclusion that the
                  article is wrong (contrary conclusion).
                </li>
              </ul>
              <p>
                That pattern matches choice (A). Choice (B) is incorrect because
                the evidence doesn’t support the newspaper’s claim—it attempts
                to undermine it.
              </p>
            </>
          }
        />

        <p>
          Even though MoR questions don’t ask you to evaluate validity, you
          should still label the argument’s pieces precisely: spot the main
          conclusion, identify the premises, and note any assumptions the author
          depends on. That role identification is what unlocks the correct
          answer.
        </p>
      </article>
    </main>
  );
}