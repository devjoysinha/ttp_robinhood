import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.9 Common Incorrect Answer Choices in Weaken Questions | Critical Reasoning",
  description:
    "Learn the most frequent trap answers in Weaken the Argument questions: strengtheners, pseudo‑weakeners, frameshifts, premise attacks, and more. Includes quick practice with full explanations.",
};

function Math({
  expr,
  display = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      className={className}
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9 Common Incorrect Answer Choices in Weaken Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Going into Weaken questions with a checklist of typical traps will save
          time and mistakes. Test writers recycle the same wrong‑answer styles,
          so recognizing them quickly helps you steer toward the true weakener.
        </p>

        <p>
          The correct response lowers the persuasive force of the author’s
          conclusion, not just any claim in the prompt.
        </p>

        <div className="rounded-md bg-gray-800/60 p-4">
          <p className="mb-2">
            Think of an argument as a link from premises to a conclusion:
          </p>
          <p className="text-lg">
            <Math expr={"P \\implies C"} ariaLabel="Premises imply the conclusion" />
          </p>
          <p className="mt-3">
            A valid weakener either loosens that link or shows the premises can
            hold while the conclusion fails, for example:
          </p>
          <p className="text-lg">
            <Math
              expr={"P \\land E \\Rightarrow \\lnot C"}
              ariaLabel="Premises and extra evidence can lead to not-conclusion"
            />
          </p>
        </div>

        <MustKnow>
          Correct weakeners reduce support for the author’s stated conclusion.
          Popular traps include:
          <ul className="mt-2 list-disc pl-6">
            <li>
              Strengtheners: add support for the conclusion (the exact opposite
              of what you need).
            </li>
            <li>
              Pseudo‑weakeners: sound critical but don’t touch the premise→conclusion
              link or drift off‑scope.
            </li>
            <li>
              Frameshifts: attack or evaluate a different conclusion or a
              reworded claim the author didn’t make.
            </li>
            <li>
              Premise attacks: dispute stated facts; on the GMAT, treat given
              premises as true unless the task explicitly invites you to doubt them.
            </li>
            <li>
              Scope/time/population shifts: talk about the wrong group, period,
              or context.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="trap-catalog" className="space-y-3">
          <h3 id="trap-catalog" className="text-xl font-semibold text-white">
            A quick catalog of trap families
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Strengtheners in disguise: statements that make the author’s
              plan, explanation, or prediction more credible.
            </li>
            <li>
              Cosmetic negatives: “concerns,” “costs,” or “limitations” that
              don’t actually bear on whether the conclusion follows.
            </li>
            <li>
              Frameshift to a different claim: undermines a side comment,
              restatement, or a reader‑invented conclusion rather than the one
              the author asserts.
            </li>
            <li>
              Nitpicks about methodology or wording that leave the core logic
              untouched.
            </li>
            <li>
              Out‑of‑scope comparisons or anecdotes that neither explain the
              result nor reveal a key assumption.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="City officials argue that building more downtown parking will ease traffic jams because drivers won’t need to circle for spots. Which option most weakens the argument?"
          options={[
            "The new garages will include electric‑vehicle charging stations.",
            "In several comparable cities, adding downtown parking drew more drivers into the area and increased congestion.",
            "A recent poll shows most residents favor the plan.",
            "Private investors will fund construction rather than taxpayers.",
            "More than half of downtown parking spaces are empty after 8 p.m.",
          ]}
          correct="In several comparable cities, adding downtown parking drew more drivers into the area and increased congestion."
          solution={
            <>
              <p>
                The conclusion is “more parking → less congestion.” A strong
                weakener shows a mechanism or precedent in which more parking
                leads to the opposite effect (induced demand).
              </p>
              <p>
                Choice B gives relevant evidence from similar cities that more
                parking increased traffic, directly undercutting the causal link.
                Choices A, C, D, and E are irrelevant to rush‑hour congestion or
                add no pressure against the conclusion.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Trap spotter: strengthener vs. pseudo‑weakener"
          statements={[
            "Argument: A startup claims its nutrition app caused users to sleep better because average sleep increased by 30 minutes during a two‑week pilot.",
            "A) Users who followed the app’s evening routine also reported lower caffeine intake after 3 p.m.",
            "B) The app’s color palette is too bright for dark mode on some phones.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want the trap answer. Choice A actually makes the causal
                story stronger by adding a plausible mechanism (less late caffeine),
                so it is a strengthener, not a weakener. Choice B sounds negative
                but does not speak to whether the app improved sleep during the
                pilot—this is a pseudo‑weakener. Thus, A is the trap style to avoid
                on Weaken questions.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Frameshift and premise attack traps"
          statements={[
            "Argument: Because last year’s ad campaign reached fewer unique viewers than expected, the campaign failed to boost brand awareness.",
            "A) The company’s definition of “unique viewers” is industry‑standard.",
            "B) Independent surveys show brand awareness rose significantly despite the campaign’s limited reach.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                A correct weakener would show that low “reach” doesn’t imply low
                brand awareness—exactly what B does. If you were asked to find a
                trap, common wrong answers would either attack a premise (claim the
                reported reach is inaccurate) or shift to a different claim
                (e.g., sales, ad design). Note that A merely affirms a premise and
                doesn’t affect the conclusion.
              </p>
            </>
          }
        />

        <p>
          Bottom line: target the link between the premises and the stated
          conclusion. If an option doesn’t dent that connection, it’s almost
          certainly not your answer—no matter how negative or detailed it sounds.
        </p>
      </article>
    </main>
  );
}