import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If KaTeX is globally included in your layout, you can import helpers like this:
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "12.4 Boldface Method of Reasoning | Critical Reasoning",
  description:
    "Learn how to identify the function of bolded statements in GMAT Critical Reasoning. Includes must‑know tips and three multiple‑choice drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.4 Boldface Method of Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In boldface questions, one or two parts of a short argument are printed in bold.
          Your task is to name the job each bolded part performs inside the argument’s logic.
          You are not judging whether the argument is persuasive; you are labeling how it is built.
        </p>

        <MustKnow>
          Boldface questions are about roles, not truth. Focus on whether a bolded
          statement is a claim, a reason, a counterpoint, or a conclusion—and whose
          view it represents (the author’s, an opponent’s, or background context).
        </MustKnow>

        <p>
          When two bolded parts appear, every option describes the role of the first bolded
          portion and then the role of the second, in that order. Read carefully—conclusions
          in boldface prompts often appear in the middle, not just at the end.
        </p>

        <MustKnow>
          With two bolded portions, answer choices always describe the first bolded part
          before the second. Misreading this ordering is a common trap.
        </MustKnow>

        <p className="text-sm text-gray-400">
          A compact way to think about argument structure:
          <span className="ml-2 inline-block align-middle">
            <InlineMath math="\text{Premise}_1,\ \text{Premise}_2\ \Rightarrow\ \text{Conclusion}" />
          </span>
        </p>

        <MustKnow>
          Don’t chase facts—trace structure. Ask: Is the bolded part supporting something,
          being supported, contradicting a view, or stating the author’s main point?
        </MustKnow>

        <MCQExample
          number={1}
          prompt={
            <>
              A policy analyst once predicted that outfitting officers with body cameras
              would curb excessive use of force. Yet, <strong>as camera adoption has risen,
              the yearly volume of citizen complaints about force has not declined.</strong> Therefore,
              the presence of cameras does not change officer behavior.
              <br />
              <br />
              The bolded portion plays which role in the argument?
            </>
          }
          options={[
            "It provides a factual observation used to justify the author's conclusion.",
            "It restates the author's overall conclusion.",
            "It states an opposing viewpoint that the author later refutes.",
            "It presents background context unrelated to the author’s final claim.",
            "It summarizes evidence that contradicts the premises."
          ]}
          correct="It provides a factual observation used to justify the author's conclusion."
          solution={
            <>
              <p>
                The passage starts with an expectation, cites what actually happened
                (the bolded statement), and then draws a conclusion. The bolded portion
                is the key evidence the author uses to support the final claim. So the correct
                role is that it supplies supporting evidence for the conclusion.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt={
            <>
              Some people read the last date on an ancient Mayan calendar as a prediction of
              a global catastrophe in December 2012. <strong>That interpretation is likely wrong.</strong>
              For the Maya, the end of a calendar marked the close of one cycle and the start of another, and
              <strong> other inscriptions point to a date roughly 4,000 years after 2012 as important in the future.</strong>
              <br />
              <br />
              In the argument above, the two bolded portions play which roles?
            </>
          }
          options={[
            "The first provides evidence for the author's main point; the second is the main point.",
            "The first is the author's main conclusion; the second is evidence that supports it.",
            "The first is a view attributed to others; the second states the author's conclusion.",
            "The first and second both present background context.",
            "The first opposes the author's position; the second refutes that opposition."
          ]}
          correct="The first is the author's main conclusion; the second is evidence that supports it."
          solution={
            <>
              <p>
                The first bolded sentence declares the author’s main conclusion: the doomsday reading is
                probably incorrect. The second bolded sentence is a reason supporting that conclusion:
                Mayan records recognize a significant date far beyond 2012, consistent with cycles, not endings.
                Thus, first = conclusion; second = supporting evidence.
              </p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt={
            <>
              People with persistent back pain often choose surgery in hopes of relief.
              In many cases, that choice is unwise. Many patients report that
              <strong> the surgical outcomes themselves worsen degeneration in the spine.</strong>
              Moreover, <strong>it’s frequently uncertain that the spinal irregularities targeted by surgery
              are even the source of the pain.</strong>
              <br />
              <br />
              In the passage above, the two bolded portions play which roles?
            </>
          }
          options={[
            "The first contradicts the author’s conclusion; the second supports the conclusion.",
            "Both provide reasons that support the author’s conclusion.",
            "The first is support for the conclusion; the second states the conclusion.",
            "The first challenges the conclusion; the second offers unrelated background.",
            "The first supports the author’s view; the second weighs against it."
          ]}
          correct="Both provide reasons that support the author’s conclusion."
          solution={
            <>
              <p>
                The author’s conclusion is that surgery is often a poor choice. Both bolded statements
                are reasons in favor of that conclusion: the first notes harmful outcomes; the second
                questions whether surgery addresses the true cause of pain. Therefore both are supporting evidence.
              </p>
            </>
          }
        />

        <p>
          Bottom line: label function, not content. If a bolded sentence supplies a reason,
          it’s evidence; if it states what the author is trying to prove, it’s a conclusion;
          if it presents a viewpoint the author intends to challenge, it’s a counterclaim.
          Read precisely and match each bolded part to its role in the argument’s structure.
        </p>
      </article>
    </main>
  );
}