import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.6 Evidence or Premises | Critical Reasoning",
  description:
    "Understand what counts as evidence in Critical Reasoning: factual statements that support a conclusion. Learn to identify premises, see examples of factual evidence, and practice with a quick check-for-understanding.",
};

function MathInline({
  expr,
  ariaLabel,
  display = false,
}: {
  expr: string;
  ariaLabel?: string;
  display?: boolean;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      aria-label={ariaLabel}
      className={display ? "my-2" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.6 Evidence (Premises)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, evidence—also called premises—consists of factual
          statements that lend support to the author’s conclusion. These facts are
          the building blocks of the argument: they provide the reasons we’re meant
          to accept the claim.
        </p>

        <p>
          Consider this simple argument: “Critical Reasoning is similar to a game.
          Games are enjoyable. Therefore, Critical Reasoning is enjoyable.” In that
          argument, the two factual claims are the premises; the final statement is
          the conclusion they support.
        </p>

        <div className="rounded-md bg-slate-800/60 p-4">
          <MathInline
            ariaLabel="Symbolic form of premises leading to a conclusion"
            expr="\text{P1: CR is like a game},\quad \text{P2: Games are fun} \;\;\Rightarrow\;\; \text{C: CR is fun}"
          />
        </div>

        <MustKnow>
          Evidence (premises) are statements of fact that provide support for a
          conclusion. They are the reasons an author gives to justify the claim.
        </MustKnow>

        <p>
          Authors can present evidence in many ways—numbers, observations,
          experimental results, historical records, and so on. The common thread is
          that they’re offered as facts, not opinions.
        </p>

        <section aria-labelledby="examples-of-facts" className="space-y-2">
          <h3 id="examples-of-facts" className="text-white font-semibold">
            Examples of factual statements that could serve as evidence
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              A study reports that people who consume five or more daily servings
              of fruit experience markedly lower rates of tooth decay than those
              who don’t.
            </li>
            <li>
              The municipality of West Hills started chlorinating the public water
              supply last month.
            </li>
            <li>
              Beginning tomorrow, park rangers will deploy drones with thermal
              cameras to detect campfires.
            </li>
            <li>
              Mars &amp; Co. recorded a 300% month‑over‑month surge in customer
              complaints.
            </li>
            <li>
              No students in the course have previously taken a formal logic
              class.
            </li>
            <li>
              Paleontologists found shark fossils in a dry lakebed in central
              Florida.
            </li>
            <li>
              The Gloucester city council enacted a law allowing officers to
              ticket drivers observed not wearing seat belts.
            </li>
          </ul>
        </section>

        <p>
          Notice that each item is presented as a fact; none relies on a personal
          judgment or opinion.
        </p>

        <MustKnow>
          Do not dispute evidence in Critical Reasoning prompts. If a statement is
          presented as a fact, treat it as true for the purpose of answering the
          question.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which statement below is most clearly a conclusion rather than a premise?"
          options={[
            "Westport High added two new chemistry labs this year.",
            "In a randomized trial, participants who slept 8 hours scored higher on memory tests.",
            "Because enrollments increased and lab space expanded, the school will improve science outcomes.",
            "The city reported a 12% decline in traffic collisions in Q2.",
            "Survey results show that 78% of respondents prefer online billing.",
          ]}
          correct="Because enrollments increased and lab space expanded, the school will improve science outcomes."
          solution={
            <>
              <p>
                Premises are facts; conclusions are claims drawn from those facts.
                Four choices are stated as facts (premises). The remaining choice
                makes a prediction based on reasons offered (“because ...”), which
                marks it as a conclusion.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Identify premises vs. conclusion"
          statements={[
            "Argument:",
            "Critical Reasoning practice increases familiarity with common argument structures. Increased familiarity reduces the time needed to parse new prompts. Therefore, practicing Critical Reasoning will shorten the time you need to understand fresh prompts.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                The first two sentences are premises (facts asserted by the
                author). The last sentence is the conclusion, supported by those
                premises.
              </p>
              <div className="rounded-md bg-slate-800/60 p-3">
                <MathInline
                  ariaLabel="Symbolic structure of the argument"
                  expr="\text{P1: Practice } \Rightarrow \text{ familiarity} \quad \text{and} \quad \text{P2: familiarity } \Rightarrow \text{ less parsing time} \;\;\Rightarrow\;\; \text{C: Practice } \Rightarrow \text{ less parsing time}"
                  display
                />
              </div>
            </>
          }
        />

        <p>
          We will revisit evidence frequently throughout the course. Next up:
          background information—statements that provide context without directly
          supporting the conclusion.
        </p>
      </article>
    </main>
  );
}