import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "8.3.1 Don’t Confuse ‘Find the Conclusion’ with Similar-Sounding Stems | Critical Reasoning",
  description:
    "Learn to distinguish Find the Conclusion questions from Strengthen, Weaken, and Assumption. Includes a supported‑hypothesis example with a full, choice‑by‑choice explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Find the Conclusion
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.3.1 Don’t Mix Up “Find the Conclusion” with Look‑Alike Question Stems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Critical Reasoning prompts use words such as “concludes” or
          “conclusion,” but that doesn’t automatically make them Find the
          Conclusion questions. The task depends on the entire stem, not a
          single keyword. Slow down and confirm exactly what you’re being asked
          to do.
        </p>

        <MustKnow>
          Read the full question stem before deciding on the task. A stem can
          include the word “conclusion” and still be asking you to{" "}
          strengthen, weaken, or identify an assumption. Likewise, a Find the
          Conclusion question may never use the word “conclusion” at all.
        </MustKnow>

        <p>
          Here’s a quick way to formalize what Find the Conclusion is asking. In
          these prompts, you combine the stated facts to produce the author’s
          main claim that follows from them:
        </p>

        <div aria-label="Logical flow using math notation" className="rounded-md bg-slate-800/60 p-4">
          <BlockMath math={"\\text{Premise}_1 \\;\\land\\; \\text{Premise}_2 \\;\\Rightarrow\\; \\text{Conclusion}"} />
        </div>

        <p>
          By contrast:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Strengthen asks for something that boosts the link to the
            conclusion.
          </li>
          <li>Weaken asks for something that undermines it.</li>
          <li>
            Assumption asks for a statement that must be true for the argument
            to work.
          </li>
        </ul>

        <MustKnow>
          Find the Conclusion = state the author’s main claim that follows from
          the given premises. Do not add new ideas; the right answer should fit
          naturally after “therefore.”
        </MustKnow>

        <section aria-labelledby="example-heading" className="pt-2">
          <h3 id="example-heading" className="sr-only">
            Supported‑Hypothesis Example
          </h3>

          <MCQExample
            number={5}
            prompt={
              <>
                In a field study, an actor posed as an entry‑level applicant and
                interviewed for 100 similar roles using the same résumé. In half
                of the interviews, he disclosed a minor criminal conviction; in
                those cases, he was called back less often than when he did not
                disclose the conviction.
                <br />
                <br />
                Which of the following hypotheses is most strongly supported by
                the statements above?
              </>
            }
            options={[
              "The applicant submitted the same college transcript for every application.",
              "Job seekers with minor convictions find employment almost as difficult as those with major convictions.",
              "When hiring, at least some employers consider factors beyond work experience.",
              "Governments ought to forbid employers from asking about criminal histories.",
              "The primary reason people struggle to find work is having a criminal record.",
            ]}
            correct="When hiring, at least some employers consider factors beyond work experience."
            solution={
              <>
                <p>
                  Paraphrase the facts: same résumé across 100 interviews; fewer
                  callbacks when a minor conviction was disclosed. The right
                  choice should be a conclusion that follows from those facts,
                  not a policy recommendation or a new comparison.
                </p>

                <p className="font-semibold">Use the “therefore” test:</p>
                <p className="italic">
                  Same résumé each time; disclosing a minor conviction lowered
                  callback rates; therefore, ______.
                </p>

                <p className="mt-2">
                  Because the résumé (work history) was constant, the change in
                  callback rate must be tied to something other than experience.
                  That makes option C the best‑supported claim: employers
                  consider factors besides experience.
                </p>

                <p className="mt-4">
                  Why the others are out:
                </p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    A: We’re told the résumé was the same, but nothing about
                    transcripts. This adds new information.
                  </li>
                  <li>
                    B: Introduces a minor‑vs‑major comparison not provided by
                    the stimulus.
                  </li>
                  <li>
                    D: A policy recommendation, not a conclusion drawn from the
                    data.
                  </li>
                  <li>
                    E: Claims the leading cause of employment difficulty, which
                    goes far beyond the evidence.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Final note: Don’t confuse Find the Conclusion with Inference. An{" "}
          inference must be unavoidably true if the statements are true.
          Find the Conclusion asks for the author’s main claim drawn from the
          premises, which can be slightly broader stylistically but still must
          be warranted by the given information.
        </p>
      </article>
    </main>
  );
}