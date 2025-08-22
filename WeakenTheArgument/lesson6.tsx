import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import katex from 'katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return <span role="math" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: '3.7 Patterns That Weaken Arguments | Critical Reasoning',
  description:
    'Learn the common, repeatable ways correct answers weaken arguments on GMAT Critical Reasoning. See why the best weakeners target the link between premises and conclusion, often by introducing alternatives or questioning causal claims.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">3. Weaken the Argument</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7 The Most Common Ways Correct Answers Weaken Arguments
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Correct weaken answers tend to follow recognizable playbooks. Once you learn these patterns,
          you’ll spot them faster and judge their impact more confidently.
        </p>

        <p>As you study the patterns, you’ll accomplish three things:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Build a catalog of weakening tactics that frequently appear on test day.</li>
          <li>Understand the reasoning behind each tactic so you can apply it across question types.</li>
          <li>
            Develop an intuitive sense for why a correct choice genuinely undermines an argument rather
            than merely sounding related.
          </li>
        </ul>

        <MustKnow>
          Effective weakeners attack the connection between the evidence and the conclusion. They need
          not disprove the conclusion outright; instead, they show the conclusion is less compelling than
          it first appeared—by introducing alternatives, challenging assumptions, questioning cause-and-effect,
          exposing faulty comparisons, or revealing issues with data or definitions.
        </MustKnow>

        <section aria-labelledby="false-dichotomy">
          <h3 id="false-dichotomy" className="text-xl font-semibold text-white">
            Kicking Off: The “Only Two Options” Trap
          </h3>
          <p>
            A frequent flaw is to act as if there are exactly two possibilities when, in reality, a third (or more)
            exists. In logical shorthand, the author treats the situation as{' '}
            <MathInline expr={'A \\\\lor B'} ariaLabel="A or B" /> but ignores that{' '}
            <MathInline expr={'A \\\\lor B \\\\lor C'} ariaLabel="A or B or C" /> is also viable. Pointing out that
            overlooked option weakens the move from premises to conclusion.
          </p>
        </section>

        <MCQExample
          number={31}
          prompt="Editorial: Our museum is running a deficit. We must either raise ticket prices or eliminate exhibits. Therefore, the museum should raise prices immediately to balance the budget. Which of the following, if true, most undermines the editorial’s reasoning?"
          options={[
            'Attendance has been steady for the last three years.',
            'The museum just received a donor’s offer to fund the deficit if the museum launches a community‑education program.',
            'Most visitors say they value the museum’s special exhibits.',
            'A nearby museum raised prices last year.',
            'The city plans to increase downtown parking rates next month.',
          ]}
          correct="The museum just received a donor’s offer to fund the deficit if the museum launches a community‑education program."
          solution={
            <>
              <p>
                The argument frames the choice as a strict either–or: raise prices or cut exhibits. A new funding source
                introduces a third path—cover the deficit without raising prices or cutting exhibits—which undercuts the
                conclusion’s force. That’s the hallmark of exposing a false dichotomy.
              </p>
            </>
          }
        />

        <section aria-labelledby="pattern-spotting">
          <h3 id="pattern-spotting" className="text-xl font-semibold text-white">Pattern Spotting Checklist</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Ask: Is the author pretending there are only two possibilities (
              <MathInline expr={'A \\\\lor B'} ariaLabel="A or B" />) when a real alternative exists (
              <MathInline expr={'A \\\\lor B \\\\lor C'} ariaLabel="A or B or C" />)?
            </li>
            <li>Could new information show the conclusion would not follow for a reasonable, overlooked case?</li>
            <li>Would the proposed alternative, if true, make the recommended action unnecessary or less persuasive?</li>
          </ul>
        </section>

        <p>
          Up next, we’ll explore additional patterns—for example, questioning cause‑and‑effect claims, revealing biased
          or non‑representative data, showing percentages vs. counts were confused, and attacking shaky comparisons. The
          core idea is the same: weaken the bridge from evidence to conclusion, not merely the topic at hand.
        </p>
      </article>
    </main>
  );
}