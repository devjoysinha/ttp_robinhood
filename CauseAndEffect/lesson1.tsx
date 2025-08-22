import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.2 Assumptions Behind Cause‑and‑Effect Claims | Critical Reasoning",
  description:
    "Learn the hidden assumptions that power causal arguments: ruling out alternative causes, reverse causation, and coincidence. Includes two quick MCQs and two multi‑choice drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.2 The Assumptions Built Into Every Cause‑and‑Effect Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Any time an author claims that one thing causes another, they’re not just
          reporting a pattern; they’re betting that their explanation is the right one.
          In symbols, a causal claim says that a cause C leads to an effect E
          (<TeX>{String.raw`C \to E`}</TeX>). For that leap to hold, the author is implicitly
          rejecting other stories, such as some different factor A producing the effect
          (<TeX>{String.raw`A \to E`}</TeX>), the direction being reversed
          (<TeX>{String.raw`E \to C`}</TeX>), or the pattern being a fluke.
        </p>

        <MustKnow>
          When a writer asserts a causal link, they presuppose that their cause really
          explains the effect and that competing explanations don’t. On GMAT Critical
          Reasoning, the required assumption often rules out reverse causation,
          a third variable, or mere coincidence.
        </MustKnow>

        <p>
          Let’s warm up with two short assumption checks. In each, identify what the
          argument must take for granted for the causal conclusion to stand.
        </p>

        <MCQExample
          number={201}
          prompt="Researchers tracked 5,000 children and found that as daily smartphone time rose, the chance of attention and learning problems also rose. They concluded that smartphone use causes those problems. Which assumption is required?"
          options={[
            "Children with attention or learning difficulties are not turning to smartphones more because of those difficulties.",
            "Participants came from multiple cities and regions.",
            "Usage was measured only with verified device logs, not surveys.",
            "All devices used in the study had blue‑light filters disabled.",
            "None of the children changed schools during the study period.",
          ]}
          correct="Children with attention or learning difficulties are not turning to smartphones more because of those difficulties."
          solution={
            <>
              <p>
                The conclusion claims phone use drives the issues
                (<TeX>{String.raw`C \to E`}</TeX>). A key competing story is that pre‑existing
                difficulties lead kids to use phones more (<TeX>{String.raw`E \to C`}</TeX>).
                The argument must rule that out. The other choices are either study details
                or scope points that aren’t logically required.
              </p>
            </>
          }
        />

        <MCQExample
          number={202}
          prompt="A beachfront restaurant with outdoor dining became a loud dance club. Soon after, the birds that used to gather there were gone. Therefore, the loud music scared the birds away. Which assumption is required?"
          options={[
            "The birds did not leave mainly because food scraps from diners were no longer available.",
            "The club’s lighting did not attract more insects to the area.",
            "The club’s interior sound level regularly exceeds 90 dB.",
            "The ownership change did not include a renovation of nearby sidewalks.",
            "The overall bird population on the beach did not decline that season.",
          ]}
          correct="The birds did not leave mainly because food scraps from diners were no longer available."
          solution={
            <>
              <p>
                The author blames noise (<TeX>{String.raw`C \to E`}</TeX>). A clear alternative
                is the disappearance of an easy food source when the restaurant closed.
                The argument must exclude that competing cause. The remaining options are
                irrelevant details or not required to justify the conclusion.
              </p>
            </>
          }
        />

        <MustKnow>
          In causal Assumption questions, a frequent correct answer explicitly rules
          out a rival cause. If a different factor could also account for the effect,
          the original causal claim isn’t supported.
        </MustKnow>

        <p>
          Now try two multi‑choice drills that showcase the most common causal
          assumptions: no reverse direction, no third variable, and no coincidence.
        </p>

        <MCQExample
          number={203}
          prompt="Administrators in the Red Valley School District concluded that a new elementary math curriculum is less effective than the prior one, since elementary math scores fell sharply after the switch. Which of the following must they be assuming?"
          options={[
            "High‑school students who moved to a similar new math curriculum did not see score gains.",
            "Teachers were not underprepared to teach the new curriculum.",
            "The current math tests are substantially different from those used under the old curriculum.",
            "Elementary English scores did not drop when a new English curriculum was introduced.",
            "The district chose the new math curriculum based on misleading reviews.",
          ]}
          correct="Teachers were not underprepared to teach the new curriculum."
          solution={
            <>
              <p>
                The district attributes lower scores to the curriculum itself
                (<TeX>{String.raw`C \to E`}</TeX>). If teachers were not adequately trained,
                poor implementation could be the real cause (<TeX>{String.raw`A \to E`}</TeX>),
                breaking the argument. Thus, they must assume inadequate preparation is not
                to blame. The other choices are either irrelevant comparisons or would
                actually undermine the conclusion if true.
              </p>
            </>
          }
        />

        <MCQExample
          number={204}
          prompt="In a medical study, all participants who had suffered persistent insomnia at some point in the last five years were found to be depressed. Therefore, persistent insomnia causes depression. Each of the following is an assumption the argument depends on EXCEPT:"
          options={[
            "Treating insomnia could resolve both the insomnia and the depression.",
            "Job‑related stress did not independently cause both insomnia and depression among participants.",
            "Participants were not already depressed before the insomnia began.",
            "The study allowed people without depression to be included.",
            "The observed pairing of insomnia and depression was not just chance.",
          ]}
          correct="Treating insomnia could resolve both the insomnia and the depression."
          solution={
            <>
              <p>
                We want the choice that is NOT required. The argument must rule out
                a third‑cause explanation (e.g., stress), reverse causation
                (depression → insomnia), sample‑design flaws, and coincidence. Those are
                assumptions the logic needs. By contrast, saying that fixing insomnia would
                also cure depression is a downstream prediction, not a necessary assumption:
                even if that treatment claim were false, insomnia might still cause depression.
              </p>
            </>
          }
        />

        <p>
          Takeaway: A causal claim lives or dies by its hidden guardrails. To defend
          <TeX>{String.raw`~C \to E~`}</TeX> on test day, quickly check that the author has,
          at least implicitly, ruled out a different cause, a reversed relationship,
          and random co‑occurrence.
        </p>
      </article>
    </main>
  );
}