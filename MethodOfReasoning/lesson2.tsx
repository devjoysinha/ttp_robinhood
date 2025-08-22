import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.1.2 Method of Reasoning: Common Stems | Critical Reasoning",
  description:
    "Learn the most common stems for Method of Reasoning questions and see how to match an argument’s structure to the right description. Includes a worked example with full reasoning.",
};

export default function Page() {
  const impliesMathML = katex.renderToString("P \\Rightarrow C", {
    throwOnError: false,
    output: "mathml", // accessible without requiring global KaTeX CSS
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.1.2 Common Question Stems for Method of Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Method of Reasoning prompts typically use recognizable phrasing. Train
          yourself to spot these patterns so you can focus on how the argument
          is built rather than what it is about.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>The argument is structured by...</li>
          <li>The author responds by doing which of the following?</li>
          <li>The exchange supports the claim that the two speakers disagree about...</li>
          <li>Which choice best captures the relationship between A’s and B’s arguments?</li>
          <li>The official replies using which technique?</li>
          <li>The method of the argument is to...</li>
          <li>The author develops the case by...</li>
          <li>The argument employs which reasoning strategy?</li>
          <li>Which choice most accurately describes the argument?</li>
        </ul>

        <MustKnow>
          Learn the common stems, but stay flexible. Method questions test how a
          conclusion is reached from its support. Match the structure, not the
          topic. Every part of a correct description must be true.
        </MustKnow>

        <MCQExample
          number={2}
          prompt={
            <>
              <p>
                WrapHouse CEO: For more than ten years, WrapHouse has operated
                in Nation X. Recently, economic turmoil there has left our local
                suppliers unable to deliver key ingredients for several
                best‑selling items. Rather than run a reduced menu, we will shut
                down all operations in Nation X at the end of the month.
              </p>
              <p className="mt-3">The CEO’s reasoning is best described as:</p>
            </>
          }
          options={[
            "using one company’s experience to argue that Nation X must reform its economic policies",
            "sketching broad economic conditions and explaining their effect on the company’s worldwide business",
            "assessing industry‑wide effects and prescribing how the industry should respond",
            "asserting that a plan is sensible without offering support",
            "identifying consequences of present economic conditions and drawing a decision from them",
          ]}
          correct="identifying consequences of present economic conditions and drawing a decision from them"
          solution={
            <>
              <p>
                Break the argument into roles:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Context: WrapHouse has operated in Nation X for years.
                </li>
                <li>
                  Premise: Economic upheaval has disrupted ingredient supply.
                </li>
                <li>
                  Conclusion: Shut down operations in Nation X rather than
                  operate with a limited menu.
                </li>
              </ul>

              <p className="mt-3">
                In other words, the structure is “premise leads to conclusion,” shown as{" "}
                <span
                  aria-label="Premise implies conclusion"
                  dangerouslySetInnerHTML={{ __html: impliesMathML }}
                />
                .
              </p>

              <p className="mt-3">
                Why the correct choice fits:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  The CEO reports a direct consequence of the economic situation
                  (ingredient shortages) and then states a decision that follows
                  from that information (cease operations).
                </li>
              </ul>

              <p className="mt-3">
                Why the other choices fail:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Argues for policy reform (A): the CEO doesn’t advocate changes to
                  the nation’s policies—only explains the company’s decision.
                </li>
                <li>
                  Global impact (B): the effect is local to Nation X, not global.
                </li>
                <li>
                  Industry‑level analysis (C): discusses one company, not the entire
                  industry, and gives no industry recommendation.
                </li>
                <li>
                  Unsupported assertion (D): the decision is supported by a stated
                  constraint (supply shortages).
                </li>
              </ul>

              <p className="mt-3">
                Therefore, the best description is: identifying consequences of
                current conditions and drawing a decision from them.
              </p>
            </>
          }
        />

        <p>
          Takeaway: Match the blueprint. Identify what the author is doing
          (defining terms, citing data, drawing an analogy, ruling out
          alternatives, inferring a decision, etc.), then choose the answer that
          captures that exact sequence—every part must be accurate.
        </p>
      </article>
    </main>
  );
}