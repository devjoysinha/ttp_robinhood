import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app has react-katex installed and KaTeX styles loaded globally, you can render math nicely:
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "8.2 Spotting a ‘Find the Conclusion’ Question | Critical Reasoning",
  description:
    "Learn how to quickly recognize Find the Conclusion question stems, see a worked example, and understand why the correct choice logically follows from the premises.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.2 How to Spot a “Find the Conclusion” Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Find the Conclusion problems, the stem asks you to select the claim
          that most sensibly completes or summarizes the argument. Your job is
          to read the given statements as premises and choose the option that
          naturally follows from them—no more, no less.
        </p>

        <MustKnow>
          Learn to recognize these stems quickly. They typically say things like:
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <em>Which conclusion is best supported by the information above?</em>
            </li>
            <li>
              <em>The most reasonable conclusion based on the premises is that …</em>
            </li>
            <li>
              <em>If the statements are true, they most strongly support which conclusion?</em>
            </li>
            <li>
              <em>Which option most accurately states the main point?</em>
            </li>
            <li>
              <em>Which choice most logically completes the argument?</em>
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="therefore-test">
          <h3 id="therefore-test" className="sr-only">
            Using the “therefore” test
          </h3>
          <p>
            A fast way to verify a candidate conclusion is to append{" "}
            <em>therefore</em> after the premises and see which option fits
            without adding new assumptions. In symbolic terms, if you read the
            premises as implications, the conclusion should be a reasonable
            synthesis—not a leap beyond what’s stated.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 text-gray-200">Example of translating an argument:</p>
            <BlockMath math={`\\text{If the local economy is strong} \\; (E_{good}) \\;\\Rightarrow\\; \\text{incumbency helps} \\; (A)`} />
            <BlockMath math={`\\text{If the economy is weak or voters are worried} \\; (E_{poor} \\lor C) \\;\\Rightarrow\\; \\neg A`} />
            <p className="mt-2 text-sm text-gray-400">
              When the incumbency edge disappears (<InlineMath math="\\neg A" />), other
              candidate attributes tend to matter more.
            </p>
          </div>
        </section>

        <MCQExample
          number={3}
          prompt="In Country Z’s legislative races, incumbents usually win when the district’s economy is healthy. But when the economy is weak, or when most voters in the district say they’re worried about the economy, incumbency stops being an advantage. Which option most logically completes the argument?"
          options={[
            "If a district’s economy is weak in an election year, the incumbent there is unlikely to win reelection.",
            "In Country Z, a lawmaker’s economic expertise is the single most important driver of reelection.",
            "Any incumbent reelected during poor economic conditions must represent a district designed to favor incumbents.",
            "When economic conditions are weak, candidates’ qualifications generally play a larger role than they do when the economy is strong.",
            "Voter turnout in Country Z is typically higher when the economy is weak than when it is strong.",
          ]}
          correct="When economic conditions are weak, candidates’ qualifications generally play a larger role than they do when the economy is strong."
          solution={
            <>
              <p>
                Break the argument into premises, then apply the “therefore” test.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Premise 1: When the economy is doing well, incumbents usually
                  benefit at the polls.
                </li>
                <li>
                  Premise 2: When the economy is weak or voters are concerned about
                  it, incumbency offers no advantage.
                </li>
              </ul>

              <p className="mt-3">
                The correct conclusion should stitch these together without
                introducing new claims.
              </p>

              <p className="mt-3">
                Choice A goes beyond the premises: “no advantage” does not mean
                “probably loses.” We are not given win/loss probabilities—only
                whether incumbency confers an edge.
              </p>
              <p>
                Choice B introduces a new idea—economic expertise—that the passage
                never mentions. The premises discuss economic conditions, not a
                candidate’s skills.
              </p>
              <p>
                Choice C speculates about “safe” districts, which is outside the
                scope of the given information.
              </p>
              <p>
                Choice D says that when the incumbency edge disappears, other
                features of the candidates (e.g., qualifications) matter more. That
                is a reasonable synthesis of the premises: if a typical advantage
                is removed, remaining differences gain relative importance.
              </p>
              <p>
                Choice E is about turnout, which is not discussed in the passage.
              </p>

              <div className="mt-4 rounded-md border border-emerald-700/40 bg-emerald-900/20 p-3">
                <p className="font-medium text-emerald-200">Why D follows:</p>
                <BlockMath math={`E_{good} \\Rightarrow A, \\quad (E_{poor} \\lor C) \\Rightarrow \\neg A \\;\\;\\Longrightarrow\\;\\; \\text{When }\\neg A,\\; \\text{other attributes carry more weight.}`} />
              </div>

              <p className="mt-3">Therefore, D is the best completion.</p>
            </>
          }
        />

        <MustKnow>
          The correct conclusion must be the natural next line after the given
          statements. Avoid answers that:
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>require outside facts the passage never states,</li>
            <li>stretch beyond what the premises justify, or</li>
            <li>shift to a new topic (out of scope).</li>
          </ul>
        </MustKnow>

        <p className="text-gray-300">
          You’re now better at spotting these stems and checking candidates with
          the “therefore” test. Next up: a step‑by‑step method for solving Find
          the Conclusion questions efficiently.
        </p>
      </article>
    </main>
  );
}