import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.1 Resolve the Paradox | Critical Reasoning",
  description:
    "Learn how Resolve the Paradox questions work in GMAT Critical Reasoning: identify the apparent conflict, and pick the choice that reconciles both facts. Includes two quick illustrative paradoxes and one multiple‑choice practice item with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.1 Resolve the Paradox: Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Resolve the Paradox questions center on a short passage containing two
          statements that appear to clash. Your job is not to take sides but to
          find the additional piece of information that makes both statements
          compatible.
        </p>

        <MustKnow>
          A paradox in CR is an apparent conflict between two factual
          statements. You are looking for new information that shows how both
          can be true at the same time.
        </MustKnow>

        <p>
          Importantly, there is no real contradiction once you have the missing
          context. The correct answer provides exactly that context and removes
          the tension between the facts.
        </p>

        <MustKnow>
          The right choice adds a bridging fact that reconciles the two
          statements. It should not argue against either statement, and it
          should not simply restate the problem.
        </MustKnow>

        <p>Two quick illustrations:</p>

        <section aria-label="Paradox illustration 1" className="space-y-2">
          <p className="text-gray-200 font-semibold">Example A</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fact 1: A nation’s natural resources can generate wealth.</li>
            <li>
              Fact 2: Countries rich in natural resources often grow more slowly
              than countries with fewer resources.
            </li>
          </ul>
          <p className="mt-2">
            Why might both be true? One possible reconciliation: countries with
            abundant resources face a higher likelihood of internal or external
            conflict, which suppresses long‑run growth. With that said, both
            statements can coexist.
          </p>
        </section>

        <section aria-label="Paradox illustration 2" className="space-y-2">
          <p className="text-gray-200 font-semibold">Example B</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Fact 1: Insomnia patients face health risks due to insufficient
              sleep.
            </li>
            <li>
              Fact 2: Most physicians treating insomnia do not tell patients to
              “sleep more.”
            </li>
          </ul>
          <p className="mt-2">
            A way to resolve this: telling patients to “sleep more” can increase
            anxiety about sleep, leading to even less rest. Thus, doctors avoid
            that advice, and both facts fit together.
          </p>
        </section>

        <MustKnow>
          In these questions, do not look for a conclusion to support. Instead,
          extract the two facts that seem at odds and test which option best
          explains how they can both hold true.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Critics claim that little has changed in East Beach under the current mayor. Still, the mayor has just been elected to a third term. Which option best resolves this apparent conflict?"
          options={[
            "East Beach schedules mayoral elections in years that do not align with national elections.",
            "Highly effective leaders are frequently unpopular.",
            "Many eligible voters in East Beach skip local elections.",
            "The mayor’s terms have not been consecutive.",
            "Most residents are satisfied with East Beach as it is.",
          ]}
          correct="Most residents are satisfied with East Beach as it is."
          solution={
            <>
              <p className="mb-2">
                The tension is: “Nothing has changed” versus “The mayor keeps
                getting reelected.” We need a reason why voters would support a
                leader despite minimal change.
              </p>
              <p className="mb-2">
                Choices about election timing (A), the general popularity of
                leaders (B), low turnout (C), or nonconsecutive terms (D) do not
                directly explain why this particular mayor keeps winning.
              </p>
              <p>
                If most residents like the status quo (E), then reelecting a
                mayor associated with “no change” makes perfect sense. That
                additional context dissolves the paradox.
              </p>
            </>
          }
        />

        <p>
          Bottom line: identify the two clashing facts, then choose the answer
          that supplies a plausible connector so both facts can stand together.
          Avoid options that restate the problem, shift the topic, or undermine
          one of the facts.
        </p>
      </article>
    </main>
  );
}