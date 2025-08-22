import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";
// Important: ensure KaTeX CSS is loaded globally in app/layout.(ts|tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "12.4.3 Use Answer Choices to Decode Boldface Roles | Critical Reasoning",
  description:
    "Learn to read boldface answer choices as role descriptions and verify each clause directly against the stimulus. Includes a fully worked example with answer analysis.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.4.3 Answer Choices as Roadmaps in Boldface Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In boldface Method of Reasoning problems, each option tells you what
          the bolded part(s) supposedly do in the argument: either it describes
          the role of one bolded portion, or it states the role of the first
          bolded portion followed by the role of the second. That’s great news
          for test takers—you can compare each clause in an option with the
          passage and eliminate it the moment any clause fails.
        </p>

        <p>
          For instance, consider a typical option that says something like:{" "}
          <em>
            “The first states firm evidence for a position; the second offers a
            reason against taking that course.”
          </em>{" "}
          This is either entirely right about both bold parts or it isn’t. There
          is no partial credit.
        </p>

        <p className="flex flex-wrap items-center gap-2">
          A helpful way to think about it is:
          <span className="rounded bg-gray-800 px-2 py-1">
            <InlineMath math="\text{Answer is correct} \iff r_1 \land r_2" />
          </span>
          where r1 = the first clause matches the first boldface role, and r2 =
          the second clause matches the second boldface role.
        </p>

        <MustKnow>
          - Treat each answer choice as two testable claims (one per bolded
          portion). If any claim doesn’t match the passage exactly, eliminate
          the choice.
          - Always verify roles in the stimulus—identify the main conclusion,
          the premises, counterclaims, and how each boldface segment functions
          relative to those.
        </MustKnow>

        <p className="mt-8">
          Passage for the example below:
        </p>
        <p className="rounded-md bg-gray-900/40 p-4 text-gray-200">
          For a long time, people regarded the human appendix as a useless
          leftover of evolution. <strong>It has now become clear that the appendix
          is a functional organ with a specific job.</strong> The traditional view
          looks doubtful once we note that over thirty species have
          independently developed appendix‑like structures, since{" "}
          <strong>
            it is unlikely that evolution would repeat the same “oversight”
            across so many separate cases
          </strong>
          . Furthermore, the appendix’s anatomy appears well suited to sustaining
          gut flora.
        </p>

        <MCQExample
          number={9}
          prompt="In the argument above, what roles do the two boldfaced statements play?"
          options={[
            "The first presents the argument’s main conclusion; the second is a reason that counts against a view the argument rejects.",
            "The first is an objection to a claim that the argument’s main conclusion disputes; the second states the main conclusion.",
            "The first is an intermediate conclusion supporting the argument’s overall conclusion; the second is the overall conclusion.",
            "Both boldfaced statements are evidence offered for the main conclusion.",
            "The first states the author’s position; the second is a fact the author acknowledges weakens that position.",
          ]}
          correct="The first presents the argument’s main conclusion; the second is a reason that counts against a view the argument rejects."
          solution={
            <>
              <p>
                First, locate the main conclusion. The claim that “it has now
                become clear that the appendix is functional and has a specific
                job” is the author’s central assertion—everything else supports
                or contrasts with it. Thus, the{" "}
                <strong>first boldface</strong> is the main conclusion.
              </p>
              <p>
                The <strong>second boldface</strong> (“evolution would not repeat
                the same oversight across many separate lineages”) undermines the
                old, opposing view that the appendix is useless. It helps the
                author’s conclusion by casting doubt on the rival position; it is
                not the conclusion itself.
              </p>
              <p>
                Therefore, the correct description is: first = main conclusion;
                second = a consideration against the opposing view. Choice A.
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  B and C invert roles (they make the second boldface the
                  conclusion).
                </li>
                <li>
                  D is half‑right at best—the first boldface is not evidence; it
                  is the conclusion.
                </li>
                <li>
                  E is wrong because the second boldface supports, rather than
                  conflicts with, the author’s position.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: let the answer choices guide your role check, but confirm
          everything in the passage. A choice is correct only when each part
          precisely matches the function of the corresponding bolded segment.
        </p>
      </article>
    </main>
  );
}