import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.24 Inference Trap 3: Speculation | Reading Comprehension",
  description:
    "Learn to spot the Speculation trap in GMAT RC Inference questions: plausible but unsupported statements. Includes a worked multiple‑choice example and key takeaways.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.24 Inference Trap 3: Speculation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Inference questions, tempting wrong answers often make a claim that feels realistic or
          likely but isn’t actually backed by the passage. That trap is called Speculation: an answer
          suggests something that could be true in the real world, yet the text never establishes it.
        </p>

        <MustKnow>
          For an inference, plausibility is not enough. A correct inference must be compelled by the
          passage—stated outright or clearly entailed. If an option relies on outside knowledge or
          “what probably happens,” it’s speculation, not proof.
        </MustKnow>

        <p>
          Consider a quick illustration. Suppose a passage says: In 1914, Henry Ford doubled daily
          pay for assembly‑line workers to five dollars to curb heavy turnover. The plan succeeded;
          the company hired far fewer replacements the following year.
        </p>
        <p>
          Now compare two possible answers to an inference question about effects of the wage change:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Speculation: Workers from rival automakers quit to join Ford after the raise.
          </li>
          <li>
            Supported inference: Turnover at Ford declined after the raise compared with before.
          </li>
        </ul>
        <p>
          The first claim could be true, but the passage never says it. The second follows directly
          from “the strategy worked” to reduce turnover.
        </p>

        <MustKnow>
          Gut checks help: If you’re about to pick an answer because “that would probably happen,”
          pause. Re‑read the relevant lines and ask, “Does the passage itself assert or force this
          conclusion?” If not, it’s a Speculation trap.
        </MustKnow>

        <MCQExample
          number={19}
          prompt="The passage below reports on research about banded mongooses in Uganda.
          
Some psychologists argue that only humans possess a sense of fairness. Recent studies challenge that view. Observing several groups of banded mongooses, zoologist Harry Marshall found that females in a group tend to give birth in close synchrony: most deliver on the same night. This synchrony produces a “veil of ignorance”: because the pups look, smell, and sound nearly identical, adults cannot tell which pups are their own. As a result—unlike many species in which parents favor their biological offspring—these mongooses distribute care evenly across the litter, which improves overall survival. For instance, smaller pups are often allowed extra nursing, and weight gaps among pups narrow within weeks.

The passage suggests that Marshall’s findings support which of the following views?"
          options={[
            "Within any group, not a single female gives birth on a night different from the others.",
            "Fairness can arise in animal species beyond banded mongooses.",
            "Mother mongooses recognize that equal care raises the litter’s chances of survival.",
            "Only banded mongooses exhibit synchronized births.",
            "Because of the veil of ignorance, parents do not provide extra care to their own identifiable offspring.",
          ]}
          correct="Because of the veil of ignorance, parents do not provide extra care to their own identifiable offspring."
          solution={
            <>
              <p>
                Focus on what the passage explicitly says about Marshall’s observations and what
                they entail.
              </p>
              <p>
                Choice A is too extreme. The text says “most” females give birth the same night,
                not “all.” Extreme language (“not a single”) overreaches the evidence.
              </p>
              <p>
                Choice B may be true in the real world but isn’t supported by this passage, which
                reports findings about banded mongooses only. That’s speculation.
              </p>
              <p>
                Choice C asserts awareness or intent in the mothers. The passage describes behavior
                and outcomes, not the animals’ mental states—speculation again.
              </p>
              <p>
                Choice D claims exclusivity (“only”). Calling a phenomenon “remarkable” doesn’t
                prove no other species shows it—speculation.
              </p>
              <p>
                Choice E matches the text’s causal chain. The synchrony creates a “veil of
                ignorance,” which prevents parents from identifying their own pups; therefore they
                cannot provide extra care on that basis. This is directly supported and is correct.
              </p>
            </>
          }
        />

        <p>
          Bottom line: Eliminate answers that merely sound plausible. If the text doesn’t say it or
          force it, it’s speculation—not an inference.
        </p>
      </article>
    </main>
  );
}