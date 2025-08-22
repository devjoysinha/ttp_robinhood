import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import TeX from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.2.1 Verbs in Two‑Speaker Method of Reasoning | GMAT Verbal",
  description:
    "Learn a reliable approach for two‑speaker Method of Reasoning questions: let the lead verbs in the answer choices guide your evaluation. Includes two worked multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.2.1 Let the Verbs Guide You in Two‑Speaker Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In two‑speaker prompts, the second person reacts to the first person’s
          reasoning. A quick, dependable tactic is to pay attention to the leading
          verbs in the answer choices—verbs such as “rejects,” “concedes,”
          “proposes,” “objects,” or “points out.” These verbs tell you exactly
          what the correct answer must show the second speaker doing.
        </p>

        <MustKnow>
          In two‑speaker Method of Reasoning questions, verify the verbs. If an
          answer says the second speaker “rejects and proposes,” both parts must
          match the stimulus. If any listed action doesn’t happen, eliminate the
          choice—even if another part sounds right.
        </MustKnow>

        <section aria-labelledby="how-to-verify" className="space-y-3">
          <h3 id="how-to-verify" className="text-xl font-semibold text-white">
            How to verify quickly
          </h3>
          <p>
            Work verb‑first: scan each option’s leading verb(s), then check the
            dialogue to confirm whether the second speaker truly does those
            actions. Keep the structure in mind: premise <TeX>{String.raw`\Rightarrow`}</TeX>{" "}
            conclusion. You are matching claimed moves (e.g., “rejects,”
            “concedes,” “offers evidence”) against what the second speaker
            actually does.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Film School President: Students in our Screenwriting track should learn every part of the filmmaking process—scouting, editing, still photography—so they see how their scripts fit into the broader industry and can collaborate and network effectively. Screenwriting Instructor: That’s not true. Time spent on other crafts takes away from the many hundreds of hours of writing needed to hit a professional standard, so my students would be worse off focusing on anything other than writing. The Screenwriting Instructor responds to the Film School President by:"
          options={[
            "pointing out a flaw in the President’s argument while agreeing that the main conclusion is correct",
            "rejecting the President’s conclusion and giving evidence for a contrary conclusion",
            "rejecting the President’s conclusion and supporting a contrary conclusion with statistics",
          ]}
          correct="rejecting the President’s conclusion and giving evidence for a contrary conclusion"
          solution={
            <>
              <p>
                The instructor plainly disagrees with the President’s conclusion
                (“That’s not true”) and then provides support for the opposite
                stance: writing demands hundreds or thousands of hours, so time
                diverted to other topics harms students. That matches “rejects
                and gives evidence.”
              </p>
              <p>
                The first option is wrong because the instructor does not concede
                the President’s conclusion. The third option is too specific:
                there’s no statistical evidence cited.
              </p>
            </>
          }
        />

        <section aria-labelledby="careful-reading" className="space-y-3">
          <h3 id="careful-reading" className="text-xl font-semibold text-white">
            Don’t let “almost right” verbs fool you
          </h3>
          <p>
            Trap answers often describe actions that are close to what the second
            speaker does but add an extra verb that never occurs. If the stimulus
            doesn’t show that extra action—such as “concedes,” “defines,” or
            “uses statistics”—cross the option out.
          </p>
        </section>

        <MCQExample
          number={2}
          prompt="Marco: Analysts predict that in ten years most cars on the road will be powered by alternatives such as electricity, natural gas, or hydrogen. I doubt it—those cars typically cost at least $10,000 more than comparable gas models. Ted: As alternative‑energy cars become more common, used cars will enter the market and manufacturers will benefit from economies of scale, bringing prices in line with gas cars. Ted responds to Marco by:"
          options={[
            "arguing that Marco used an unrepresentative sample",
            "defining the term “alternative” more broadly than Marco",
            "rejecting a premise that Marco’s argument relies on",
            "attacking Marco’s motives for opposing alternative‑energy cars",
            "highlighting additional factors that Marco may have overlooked",
          ]}
          correct="highlighting additional factors that Marco may have overlooked"
          solution={
            <>
              <p>
                Marco’s skepticism rests on current price differences. Ted points
                to factors that can erase that gap over time: the resale market
                and economies of scale. He isn’t attacking Marco, redefining
                terms, or dismissing today’s premise outright; he’s explaining
                why that premise might not hold in the future. Thus, he{" "}
                <strong>points out additional considerations</strong> Marco
                didn’t mention.
              </p>
              <ul className="list-disc ms-6">
                <li>
                  Not (A): Ted doesn’t claim Marco’s data source or sample is
                  biased; he addresses how prices evolve.
                </li>
                <li>
                  Not (B): No new definition is offered—just future market
                  dynamics.
                </li>
                <li>
                  Not (C): Ted doesn’t deny the current price gap; he argues it
                  will shrink.
                </li>
                <li>Not (D): There’s no personal attack.</li>
              </ul>
            </>
          }
        />

        <section aria-labelledby="takeaways" className="space-y-3">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Big takeaways
          </h3>
          <ul className="list-disc ms-6">
            <li>
              Treat the verbs in the options as a checklist of actions. Every
              listed action must be visible in the stimulus.
            </li>
            <li>
              Verify whether the second speaker rejects, concedes, proposes,
              offers evidence, qualifies, or shifts scope—don’t infer more than
              what’s stated.
            </li>
            <li>
              Be alert to add‑ons like “with statistics” or “while conceding.”
              If that extra piece isn’t in the dialogue, eliminate the choice.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}