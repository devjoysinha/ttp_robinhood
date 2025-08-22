import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.8 Rule Out an Alternate Cause | Strengthen the Argument",
  description:
    "Learn how to strengthen cause-and-effect arguments by eliminating alternate explanations. Includes a worked multiple‑choice example and clear takeaways.",
};

function KInline({
  children,
  ariaLabel,
}: {
  children: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel ?? children}
      className="inline-block align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.8 Eliminate an Alternate Cause of an Effect
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Strengthen questions hinge on cause-and-effect reasoning: an
          author observes an outcome and attributes it to a specific cause. To
          boost that line of reasoning, show that the observed effect is{" "}
          unlikely to be explained by some other factor.
        </p>

        <MustKnow>
          When a conclusion claims “Cause → Effect,” the author is assuming no
          other plausible cause explains the same effect. If you can rule out
          alternative explanations, you make the original causal story more
          credible.
        </MustKnow>

        <p>
          You don’t have to prove the conclusion beyond doubt. Even removing a
          single realistic alternative makes the argument stronger. Eliminate a
          few, and the support gets stronger still. If you could rule out{" "}
          <em>all</em> other explanations, you’d effectively confirm the causal
          claim.
        </p>

        <MustKnow>
          Strengthening does not require certainty. Ruling out even one viable
          alternate cause strengthens the argument.
        </MustKnow>

        <section aria-labelledby="illustration-title" className="space-y-3">
          <h3
            id="illustration-title"
            className="text-xl font-semibold text-white"
          >
            Quick illustration
          </h3>
          <p>
            Suppose researchers find that lizards of a given species in one
            region are larger on average than those elsewhere. They also note
            unusually high UV exposure in that region and conclude that UV
            levels drive the size difference.
          </p>
          <p>What else could explain the size gap? For instance:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Food is more plentiful there, supporting faster or longer growth.
            </li>
            <li>
              Predators disproportionately remove juveniles (small individuals),
              raising the average among survivors.
            </li>
            <li>
              Better camouflage or habitat lowers predation on larger lizards.
            </li>
            <li>
              Local water sources contain elevated growth-supporting nutrients.
            </li>
          </ul>
          <p>
            Any statement that credibly rules out one of these possibilities
            pushes the argument toward “it’s the UV.” The more alternatives you
            exclude, the more the causal story is reinforced.
          </p>
        </section>

        <section aria-labelledby="mini-example-bats" className="space-y-3">
          <h3
            id="mini-example-bats"
            className="text-xl font-semibold text-white"
          >
            Mini example: ruling out a competing cause
          </h3>
          <p>
            An author claims: “Pipistrelle bats can’t navigate above 50 dB; if
            they can’t navigate, they can’t eat and die. Over the past year,
            the number of dead bats found near Lincoln’s town center rose by{" "}
            <KInline ariaLabel="75 percent">75\%</KInline>. Therefore, noise
            levels above 50 dB likely occurred there.”
          </p>
          <p>
            This argument assumes the spike in deaths wasn’t driven by something
            else (e.g., disease). A statement such as “Only 2% of the many dead
            bats tested positive for lethal pathogens” knocks out a plausible
            alternate cause and thus strengthens the conclusion about noise.
          </p>
        </section>

        <MustKnow>
          The most direct way to strengthen a causal claim is to show the effect
          does not track with other suspected causes (or that those causes were
          absent).
        </MustKnow>

        <section aria-labelledby="mcq-title" className="pt-2">
          <h3 id="mcq-title" className="sr-only">
            Multiple-choice example
          </h3>

          <MCQExample
            number={7}
            prompt={
              <>
                A year ago, Greenville Elementary upgraded its playground with
                the goal of improving safety. In the year after the upgrade,
                reported playground injuries dropped by{" "}
                <KInline ariaLabel="forty-two percent">42\%</KInline> compared
                with the prior year. Therefore, the renovation must have made
                the playground safer. Which of the following, if true, most
                strengthens the conclusion?
              </>
            }
            options={[
              "During the year after the renovation, both the playground supervisors and the playground rules were unchanged from the prior year.",
              "After hearing about Greenville’s decline in injuries, a neighboring school decided to renovate its own playground.",
              "Students who used the playground in both years reported liking the renovated playground more.",
              "Unusually rainy weather last year meant students spent less time on the playground than the year before.",
              "Last year, Greenville’s renovated playground had fewer injuries than the playground at nearby Amity Elementary.",
            ]}
            correct="During the year after the renovation, both the playground supervisors and the playground rules were unchanged from the prior year."
            solution={
              <>
                <p>
                  The author infers “renovation → fewer injuries.” To strengthen
                  that claim, rule out other reasons injuries might have fallen.
                </p>
                <p>
                  Choice A removes two natural competitors: stricter rules and
                  improved supervision. With those explanations off the table,
                  the renovation is a more compelling cause. Choice D actually
                  weakens the argument by offering a different cause (less time
                  on the playground). The other choices are irrelevant
                  comparisons or preferences.
                </p>
                <p>Answer: A.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: in causal Strengthen questions, focus on potential
          alternate causes. The more you can exclude, the more the stated cause
          earns the credit for the observed effect.
        </p>
      </article>
    </main>
  );
}