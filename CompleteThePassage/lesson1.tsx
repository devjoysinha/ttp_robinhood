import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "11.2 Complete the Passage: Same CR Skills, New Format | Critical Reasoning",
  description:
    "Complete the Passage questions look new, but they test the same core Critical Reasoning skills—assumptions, strengthen/weaken, conclusions, inferences, and paradoxes. Includes a worked example and cue‑word tips.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.2 Complete the Passage: Same Skills, New Format
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Although the “fill‑in‑the‑blank” look of Complete the Passage problems can feel different,
          the underlying work is identical to what you do on other Critical Reasoning tasks. The blank
          simply asks you to supply a statement that plays a particular role in the argument’s logic.
        </p>

        <p>Depending on the prompt, you may be asked to:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>name a necessary assumption</li>
          <li>strengthen the reasoning</li>
          <li>undermine the support (weaken)</li>
          <li>state the conclusion the author is building toward</li>
          <li>draw a valid inference</li>
          <li>resolve an apparent contradiction</li>
        </ul>

        <MustKnow>
          Complete the Passage questions don’t introduce new CR skills. You’re still
          supplying a statement that performs a familiar task in the argument—just in a
          sentence with a blank.
        </MustKnow>

        <section aria-labelledby="example-analysis" className="space-y-3">
          <h3 id="example-analysis" className="text-xl font-semibold text-white">
            Quick Walkthrough
          </h3>
          <p>
            Consider a one‑sentence argument ending with “because ____.” That cue tells you the blank
            must provide supporting evidence. In other words, you’re doing a Strengthen task:
            the missing statement should bolster the stated conclusion.
          </p>

          <p className="italic text-gray-200">
            There are exactly two candidates for mayor: Rivera and Chen. Since Chen was
            recently charged with tax fraud, Rivera is likely to win the election because ______.
          </p>

          <p>
            The structure is straightforward: two premises (only two candidates; one just received
            damaging news) and a conclusion (Rivera will probably win). The word “because”
            signals that the missing statement should link the negative news to the election outcome.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="There are exactly two candidates for mayor: Rivera and Chen. Since Chen was recently charged with tax fraud, Rivera is likely to win the election because ______."
          options={[
            "candidates hit with serious negative press close to election day typically lose voter support",
            "Rivera has raised less money than Chen this cycle",
            "pre‑election polling often fails to predict the actual winner",
            "most voters in the city are registered independents",
            "Rivera received a newspaper endorsement two years ago",
          ]}
          correct="candidates hit with serious negative press close to election day typically lose voter support"
          solution={
            <>
              <p>
                The blank must supply evidence that strengthens the claim that Rivera will win.
                A statement connecting recent negative news about a candidate to a loss of support
                directly ties Chen’s legal trouble to a worse outcome for Chen—and thus a better one for Rivera.
              </p>
              <p>
                The other choices are irrelevant or potentially weaken the claim (e.g., fundraising differences or
                polling uncertainty do not create a clear support link for Rivera’s victory here).
              </p>
            </>
          }
        />

        <MustKnow>
          Read the final sentence carefully. Cue words such as “because,” “therefore,” “so,”
          “most strongly supports,” or “most likely implies” reveal what the blank is supposed to do
          (e.g., provide evidence, state a conclusion, etc.). Match your completion to that role.
        </MustKnow>

        <section aria-labelledby="big-picture" className="space-y-3">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big Picture
          </h3>
          <p>
            Treat the blank as a role to fill in the argument. Identify the premises and conclusion,
            use the cue words to determine what function the blank must serve, and then supply a statement
            that cleanly performs that function for the entire passage—not just a phrase‑match with the last sentence.
          </p>
        </section>
      </article>
    </main>
  );
}