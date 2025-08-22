import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "6.3 Cause‑and‑Effect Reasoning | Critical Reasoning",
  description:
    "Learn why people over‑infer causation from patterns, sequencing, and co‑occurrence. Includes quick checks and examples to spot and avoid post hoc and correlation‑causation traps.",
};

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.3 Cause‑and‑Effect Reasoning
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          People naturally look for patterns and connections. That tendency can
          be helpful for making predictions—but it also tempts us to see causes
          where none exist. In Critical Reasoning, many arguments hinge on shaky
          assumptions about what causes what.
        </p>

        <MustKnow>
          Our brains often jump from “I see a pattern” to “I know the cause.”
          Treat that leap with skepticism—especially on test day.
        </MustKnow>

        <section aria-labelledby="rooster-story">
          <h3 id="rooster-story" className="sr-only">
            Sequencing example
          </h3>
          <p>
            Consider a folktale: a villager notices her rooster crows just
            before sunrise. After a week of this sequence, she claims the
            rooster makes the sun appear. The sequence is consistent—yet the
            causal claim is absurd.
          </p>
          <p>
            The flaw is assuming that because one event routinely precedes
            another, the first must cause the second. In symbols:{" "}
            <MathInline
              expr={`A\\text{ before }B\\;\\nRightarrow\\;A\\text{ causes }B`}
              ariaLabel="A before B does not imply A causes B"
            />{" "}
            is invalid.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="In the folktale above, which reasoning error best describes the villager’s conclusion?"
          options={[
            "Overgeneralizing from a small sample",
            "Assuming a necessary condition is sufficient",
            "Equivocating between two meanings of a word",
            "Confusing sequence with causation",
            "Assuming all alternatives have been ruled out",
          ]}
          correct="Confusing sequence with causation"
          solution={
            <>
              <p>
                The claim hinges on “X happens, then Y happens; therefore, X
                causes Y.” That’s the classic post hoc (sequencing) fallacy,
                i.e., treating temporal order as proof of causation.
              </p>
            </>
          }
        />

        <MustKnow>
          Pinning down a true cause is hard. Treat any causal claim with
          caution—ask what else could explain the effect, whether the direction
          of influence could be reversed, and whether the effect occurs even
          without the proposed cause.
        </MustKnow>

        <section aria-labelledby="why-hard">
          <h3 id="why-hard" className="sr-only">
            Why causal claims are tricky
          </h3>
          <p>
            Two common traps lead to shaky causal conclusions:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Sequencing: Event A comes before Event B, so A caused B.
            </li>
            <li>
              Co‑occurrence: A and B happen together, so A caused B (or vice
              versa).
            </li>
          </ul>
          <p>
            Remember: correlation alone isn’t causation. Even a strong
            correlation{" "}
            <MathInline
              expr={`\\rho_{A,B}\\neq 0\\;\\nRightarrow\\;A\\to B`}
              ariaLabel="Nonzero correlation does not imply A causes B"
            />{" "}
            does not prove that A produces B.
          </p>
        </section>

        <MCQExample
          number={2}
          prompt="A city reports that traffic collisions dropped sharply the month after launching a new safety app. Officials conclude that the app caused the reduction. Which of the following, if true, most weakens the conclusion?"
          options={[
            "The app offers real-time alerts for road hazards.",
            "Awareness of the app was highest among daily commuters.",
            "A multi‑week snowstorm during that month reduced total driving by 35%.",
            "The city plans to expand the app to neighboring towns.",
            "Some users reported the app occasionally crashed.",
          ]}
          correct="A multi‑week snowstorm during that month reduced total driving by 35%."
          solution={
            <>
              <p>
                If far fewer people drove due to weather, collisions could fall
                for reasons unrelated to the app. That alternative cause weakens
                the causal conclusion.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Spot the causal flaw"
          statements={[
            "Study: Workers who drink two cups of coffee daily report higher productivity than those who don’t. Therefore, drinking coffee increases productivity.",
            "Which option best identifies a flaw in the argument?",
            "A) The study fails to define productivity precisely.",
            "B) The study does not randomize participants and may reflect preexisting differences (e.g., more driven workers choosing coffee).",
            "C) The sample size is too large to analyze properly.",
            "D) The result cannot be replicated across different industries.",
            "E) The study does not measure the cost of coffee.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The claim assumes a causal direction from coffee to productivity
                without ruling out selection effects or third variables. Perhaps
                highly motivated workers are more likely to drink coffee and
                also more productive. Without controls or randomization,
                correlation does not establish causation.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="sr-only">
            Big picture
          </h3>
          <p>
            Takeaway: Do not accept a causal claim just because events happen in
            order or together. Challenge the link by asking:
          </p>
          <ul className="list-disc pl-6">
            <li>Could the relationship be reversed?</li>
            <li>Is there a third factor driving both events?</li>
            <li>Does the effect appear even when the supposed cause is absent?</li>
            <li>Does the effect disappear when the cause is present?</li>
          </ul>
          <p>
            If authors don’t address these questions, the cause‑and‑effect
            conclusion is on shaky ground.
          </p>
        </section>
      </article>
    </main>
  );
}