import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.12 Assumptions and Weakening an Argument | Critical Reasoning",
  description:
    "Learn how assumptions power an argument and how weakeners target those assumptions. See why many correct Assumption answers negate a potential weakener, with two fully worked multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.12 Assumptions and Weakening an Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every argument leans on unstated ideas that must hold for the reasoning
          to succeed. Those hidden ideas are assumptions. When a question asks
          for an assumption, you are looking for information the author is
          implicitly taking for granted.
        </p>

        <p>
          Weakening questions and assumption questions are closely related.
          A classic way to weaken an argument is to challenge one of its
          underlying assumptions. Conversely, a common pattern in correct
          Assumption answers is that they block a potential weakener.
          In shorthand: Assumption ≈ the negation of a statement that, if true,
          would undermine the conclusion.
        </p>

        <MustKnow>
          A frequent correct‑answer pattern in Assumption questions is:
          “a statement that would otherwise weaken the argument” combined with
          a negation word such as “not.” In symbols: Assumption = NOT(Weakener).
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example
          </h3>
          <p>
            Suppose someone argues: “People who eat higher‑quality food tend to
            be healthier. Higher‑quality food usually costs more. Therefore,
            people must choose between spending less and being healthier.”
          </p>
          <p>
            A natural weakener is: “On average, any extra spending on
            higher‑quality food is completely offset by reduced medical costs.”
            If that’s true, the either/or tradeoff disappears.
          </p>
          <p>
            The assumption that keeps the argument alive is simply the negation
            of that weakener: “The added cost of better food is not fully
            offset by lower medical expenses.”
          </p>
        </section>

        <section aria-labelledby="pattern" className="space-y-3">
          <h3 id="pattern" className="text-xl font-semibold text-white">
            The “NOT a weakener” pattern
          </h3>
          <ul className="list-disc ps-6 space-y-2">
            <li>The choice references something that would clash with the argument if true.</li>
            <li>It includes a negation (e.g., “not,” “no,” “never,” or an equivalent).</li>
            <li>By negating that clash, the choice becomes a required assumption.</li>
          </ul>
          <p>
            Note: Not every answer containing “not” is correct—make sure the
            negated idea truly prevents a relevant weakener and is necessary for
            the conclusion.
          </p>
        </section>

        <MCQExample
          number={37}
          prompt="Factory Floor Supervisor: Inspectors are increasing enforcement against safety‑code violations. To be certain we aren’t breaking any codes, all managers must ensure their teams follow the standard operating procedures (SOPs) precisely. Which of the following is an assumption the supervisor relies on?"
          options={[
            "Inspectors will arrive without warning in the near future.",
            "Following the factory’s SOPs will not result in safety‑code violations.",
            "Every department manager already knows the SOPs thoroughly.",
            "The most effective way to keep workers safe is to follow the SOPs exactly.",
            "If a violation is found, inspectors will be lenient if SOPs are being followed.",
          ]}
          correct="Following the factory’s SOPs will not result in safety‑code violations."
          solution={
            <>
              <p>
                Goal: avoid safety‑code violations. Plan: make everyone follow
                the SOPs exactly. For the plan to achieve the goal, following
                the SOPs must keep the factory within code. If SOP compliance
                could still violate safety codes, the plan fails.
              </p>
              <p>
                The necessary assumption is therefore: “Acting in accordance
                with the SOPs does not break safety codes.” This is a classic
                “NOT a weakener” structure—negating the possibility that SOPs
                themselves cause violations.
              </p>
              <p>
                Why the others fail:
                <br />
                - Surprise visits (A) are irrelevant; the plan could work
                regardless. <br />
                - Manager expertise (C) concerns implementation readiness, not
                whether the plan would work if followed. <br />
                - “Best way to be safe” (D) supports a different goal (overall
                safety), not specifically “no code violations.” <br />
                - Inspector leniency (E) talks about penalties, not preventing
                violations.
              </p>
            </>
          }
        />

        <MCQExample
          number={38}
          prompt="New owner of a 70‑year‑old diner: The restaurant hasn’t been meaningfully updated inside or out since opening. Over the next year, we’ll modernize almost everything. So there’s no reason to doubt the diner will be more popular than ever. Which assumption does the conclusion require?"
          options={[
            "The renovations will increase profits enough to justify the expense.",
            "The diner cannot become more popular unless the space is significantly updated.",
            "Many direct competitors will also undergo extensive renovations soon.",
            "The diner’s vintage look is not the primary driver of its current popularity.",
            "Restaurants that aren’t updated regularly go out of business.",
          ]}
          correct="The diner’s vintage look is not the primary driver of its current popularity."
          solution={
            <>
              <p>
                The reasoning links “modernize” to “more popular.” That jump is
                safe only if modernization doesn’t remove what customers like
                most. If the retro vibe is the main draw, updating could backfire.
              </p>
              <p>
                Thus, the author must assume the vintage aesthetic is not the
                chief reason people come—again a “NOT a weakener” move that
                prevents the argument from collapsing.
              </p>
              <p>
                Why not the others:
                <br />
                - Profits (A) are not the conclusion; popularity is. <br />
                - “Only if updated” (B) is too strong; other paths to popularity could exist. <br />
                - Competitors renovating (C) doesn’t bridge the gap and might even weaken the claim. <br />
                - Going out of business (E) is off‑scope to popularity.
              </p>
            </>
          }
        />

        <MustKnow>
          Big picture: to find assumptions, look for the lynchpin that keeps the
          plan connected to the goal. Ask, “What would sabotage this conclusion
          if it were true?” Then look for the answer that rules out that
          sabotage—often by negating it.
        </MustKnow>
      </article>
    </main>
  );
}