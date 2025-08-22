import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

// Note: Make sure KaTeX styles are available globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "1.5 The Conclusion | Critical Reasoning",
  description:
    "Learn how to spot the conclusion in an argument, the role it plays, where it can appear, and the signal words that often introduce it. Includes a quick MCQ with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.5 Pinpointing the Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, the conclusion is the claim the author wants you
          to accept. It’s the destination of the argument—everything else is
          there to support or lead you to that claim.
        </p>

        <MustKnow>
          The conclusion is the author’s main claim or takeaway. It is a point
          of view or judgment (not a guaranteed fact), and the other statements
          in the passage function to back it up.
        </MustKnow>

        <p>
          Think of an argument as a chain: premises provide the links, and the
          conclusion is the end point. In logic notation you might see something
          like: <InlineMath math={"\\text{Premise}_1,\\ \\text{Premise}_2\\;\\Rightarrow\\;\\text{Conclusion}"} />{" "}
          or even the “therefore” symbol <InlineMath math={"\\;\\therefore\\;"} />
          to mark the final claim.
        </p>

        <section aria-labelledby="example-argument">
          <h3 id="example-argument" className="text-xl font-semibold text-white">
            A tiny example
          </h3>
          <p className="italic text-gray-300">
            Critical Reasoning is comparable to a game. Games are enjoyable.{" "}
            <InlineMath math={"\\therefore"} /> Critical Reasoning is enjoyable.
          </p>
          <p className="text-gray-300">
            Here, “Critical Reasoning is enjoyable” is the conclusion; the
            preceding statements are premises offered to justify it.
          </p>
        </section>

        <section aria-labelledby="keywords">
          <h3 id="keywords" className="text-xl font-semibold text-white">
            Common signals that a conclusion is coming
          </h3>
          <p>
            Authors often flag conclusions with cue words. These don’t guarantee
            a conclusion, but they frequently introduce one:
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-300">
            <li>Therefore, Thus, Hence, So</li>
            <li>In conclusion, It follows that, Accordingly, As a result</li>
            <li>Consequently, As a consequence</li>
            <li>Clearly, This shows that, It can be concluded that</li>
            <li>Modal recommendations: Should, Ought to, Must</li>
          </ul>
          <p className="mt-2">
            Example conclusions using such cues:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>
              Therefore, the central bank should reduce interest rates now.
            </li>
            <li>In conclusion, plant-forward diets benefit both people and the planet.</li>
            <li>
              So, Redville ought to expand protected bike-lane mileage across main roads.
            </li>
            <li>Clearly, the new university report has serious flaws.</li>
            <li>
              Hence, most people would gain by exercising a bit more each day.
            </li>
            <li>
              This shows that great white sharks aren’t as solitary as once believed.
            </li>
            <li>
              It can be concluded that the conservation program is improving local livelihoods.
            </li>
            <li>
              Accordingly, the pedestrian bridge should be closed during repairs.
            </li>
            <li>
              Consequently, the wolves are likely to return to the park soon.
            </li>
          </ul>
          <p className="mt-2">
            Even with cue words, confirm logically that the flagged sentence is
            truly the point the other statements support.
          </p>
        </section>

        <MustKnow>
          Don’t assume the conclusion is the last sentence. It can appear at the
          beginning, the middle, or the end. Let the logic—not the sentence
          position—guide you.
        </MustKnow>

        <p>
          To answer Critical Reasoning questions efficiently, locate and
          understand the conclusion first. If you misidentify the claim the
          author is trying to establish, evaluating evidence or answer choices
          becomes much harder.
        </p>

        <MustKnow>
          Make it a habit: identify the conclusion before judging the strength
          of the support. Everything else in the argument is oriented around
          that one claim.
        </MustKnow>

        <MCQExample
          number={1}
          prompt={
            <>
              Which statement is the conclusion of the argument below?
              <br />
              <span className="italic">
                Many logic puzzles improve pattern recognition. Critical
                Reasoning practice builds similar skills. Thus, regularly doing
                Critical Reasoning practice strengthens pattern recognition.
              </span>
            </>
          }
          options={[
            "Many logic puzzles improve pattern recognition.",
            "Critical Reasoning practice builds skills similar to those used in logic puzzles.",
            "Therefore, regularly doing Critical Reasoning practice strengthens pattern recognition.",
          ]}
          correct="Therefore, regularly doing Critical Reasoning practice strengthens pattern recognition."
          solution={
            <>
              <p>
                The first two sentences function as premises. The final
                sentence, introduced by a cue word (“Thus”), is the claim they
                support. That claim is the conclusion.
              </p>
              <p>
                In symbolic terms:{" "}
                <InlineMath math={"P_1,\\ P_2\\;\\Rightarrow\\;C"} />. Here,{" "}
                <InlineMath math={"C"} /> is “Regular Critical Reasoning
                practice strengthens pattern recognition.”
              </p>
            </>
          }
        />

        <section aria-labelledby="placement">
          <h3 id="placement" className="text-xl font-semibold text-white">
            Where the conclusion lives (and why it matters)
          </h3>
          <p>
            The conclusion might lead off a passage and then get defended, or it
            might be unveiled at the end. Either way, your task is to home in on
            the author’s main claim. Once you have that, assessing evidence,
            spotting assumptions, or selecting the best answer becomes far more
            straightforward.
          </p>
        </section>

        <p className="text-gray-300">
          Up next: we’ll look at premises—the statements that do the heavy
          lifting to support the author’s conclusion.
        </p>
      </article>
    </main>
  );
}