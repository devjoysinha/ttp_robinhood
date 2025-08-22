import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.2 Strengthen the Argument | Critical Reasoning",
  description:
    "Learn what it means to strengthen an argument, how to identify the conclusion and assumptions, and how to add the kind of information that boosts the conclusion’s credibility. Includes a worked multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.2 How to Strengthen an Argument Effectively
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To strengthen an argument, you introduce new information that makes the
          conclusion more compelling. In short, you increase the support for the
          claim the author is trying to establish.
        </p>

        <MustKnow>
          Strengthening means adding evidence that boosts the plausibility of the
          conclusion. You are not proving the conclusion with certainty; you are
          making it more convincing.
        </MustKnow>

        <p>
          A reliable way to do this is to first map the argument: identify the
          conclusion, list the premises, and notice any gaps between them. The
          best strengtheners either supply a missing link or add relevant
          corroboration that narrows the gap.
        </p>

        <p>
          Consider a quick illustration. Suppose someone argues:
        </p>

        <p className="pl-5 italic text-gray-200">
          “Maya crafts healthy smoothies that people love. Therefore, her new
          smoothie bar will be successful.”
        </p>

        <p>
          A strengthener could add materially relevant context, such as:
        </p>

        <p className="pl-5 italic text-gray-200">
          “The smoothie bar is opening beside a busy fitness center with steady
          foot traffic from smoothie enthusiasts.”
        </p>

        <p>
          This extra detail makes the success claim more believable because it
          connects product fit with a concentrated, interested customer base.
        </p>

        <MustKnow>
          Before you can strengthen an argument, you must understand it. Pin down
          the conclusion, the given evidence, and the key assumption(s). The
          clearer the structure, the easier it is to add the right kind of
          support.
        </MustKnow>

        <p>
          Another high‑yield tactic is to search for missing information the
          argument depends on. Make that missing piece explicit, and you often
          bolster the conclusion.
        </p>

        <p>
          For example, examine this argument:
        </p>

        <p className="pl-5 italic text-gray-200">
          “Anyone living in a house where a communicable disease is present
          should be quarantined. Yesterday, two residents of the yellow house on
          Maple Street were diagnosed with disease X. Therefore, everyone in that
          house should be quarantined.”
        </p>

        <p>
          The author is assuming that disease X is contagious. Stating that
          assumption as a fact—“Disease X is transmissible from person to
          person”—directly tightens the link between the premises and the
          conclusion and thus strengthens the argument.
        </p>

        <MustKnow>
          Look for the missing piece. Making a necessary assumption explicit—or
          adding evidence that meaningfully supports it—is one of the most
          effective ways to strengthen an argument.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Researchers found that the larvae of a certain wax moth can consume polyethylene, a common plastic, and can do so rapidly. Some scientists therefore propose deploying large numbers of these larvae to help lessen plastic waste. Which option, if true, most strongly supports this proposal?"
          options={[
            "In the wild, these larvae typically feed on beeswax, a substance with a composition similar to polyethylene.",
            "When these larvae ingest polyethylene, they metabolize it into compounds that are not plastics.",
            "Global production of polyethylene is roughly 80 million tons per year.",
            "Plastic accumulated in landfills and oceans contributes to numerous environmental harms.",
            "Outside of laboratory conditions, these larvae may not consume plastic at all.",
          ]}
          correct="When these larvae ingest polyethylene, they metabolize it into compounds that are not plastics."
          solution={
            <>
              <p>
                Argument structure:
              </p>
              <p className="pl-5">
                Premise 1: A certain wax moth’s larvae can eat polyethylene.
                <br />
                Premise 2: They can consume large amounts quickly.
                <br />
                Conclusion: Using many such larvae could reduce plastic waste.
              </p>
              <p>
                We want an option that adds the strongest new reason to believe
                the larvae would actually reduce plastic waste.
              </p>
              <p>
                Choice A mentions diet similarity (beeswax vs. polyethylene). That
                may explain why the larvae can eat plastic, but it does not show
                that waste is reduced.
              </p>
              <p>
                Choice B states that the larvae convert polyethylene into
                non‑plastic compounds. If plastic becomes something non‑plastic,
                the amount of plastic waste goes down. This directly supports the
                proposal. Best answer.
              </p>
              <p>
                Choice C quantifies the scope of the problem (how much plastic is
                made) but does not show that larvae deployment would reduce the
                waste.
              </p>
              <p>
                Choice D highlights the harms of plastic pollution, which explains
                why a solution would be valuable, not whether this solution would
                work.
              </p>
              <p>
                Choice E undermines the plan by suggesting the behavior may not
                occur outside the lab.
              </p>
              <p>
                Therefore, the option that most strengthens the proposal is B.
              </p>
            </>
          }
        />

        <p>
          Takeaway: strengthening is about adding the right kind of evidence to
          make the conclusion more likely. Up next, you’ll learn to recognize
          common “strengthen” question stems in the wild.
        </p>
      </article>
    </main>
  );
}