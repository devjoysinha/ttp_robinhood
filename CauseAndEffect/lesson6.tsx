import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure the KaTeX stylesheet is included globally in your app (e.g., in app/layout).
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "6.4 Weakening a Cause‑and‑Effect Argument | Critical Reasoning",
  description:
    "How to weaken causal arguments on GMAT Critical Reasoning: reverse causation, alternate causes, confounders, and cause/effect mismatches. Includes a quick MCQ and two sufficiency-style drills with full explanations.",
};

function KaTex({
  expr,
  display = false,
  ariaLabel,
  className,
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

  const commonProps = {
    role: "math",
    "aria-label": ariaLabel ?? expr,
    className,
    dangerouslySetInnerHTML: { __html: html },
  } as const;

  return display ? <div {...commonProps} /> : <span {...commonProps} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4 Weakening a Cause‑and‑Effect Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On Critical Reasoning “Weaken” questions, causal conclusions show up
          frequently. The author typically claims that some factor (the cause)
          produced a result (the effect). Your job is to show that this link is
          doubtful, not to prove the opposite is true. In symbols, the claim is
          often “cause implies effect”:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <KaTex
            display
            expr={"\\text{Hypothesis:}\\quad C\\;\\to\\;E"}
            ariaLabel="Hypothesis: C implies E"
          />
        </div>

        <MustKnow>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Reverse the direction: show it’s plausible that{" "}
              <KaTex expr={"E\\to C"} ariaLabel="effect implies cause" /> or
              that the observed effect led people to the supposed cause.
            </li>
            <li>
              Offer an alternate cause: a different factor explains{" "}
              <KaTex expr={"E"} ariaLabel="the effect" />.
            </li>
            <li>
              Introduce a confounder: a third variable drives both{" "}
              <KaTex expr={"C"} ariaLabel="the cause" /> and{" "}
              <KaTex expr={"E"} ariaLabel="the effect" />, creating a misleading
              association.
            </li>
            <li>
              Break the link with counterexamples:
              <ul className="mt-2 list-inside list-[circle] space-y-1 pl-4">
                <li>
                  Cause without effect: cases where{" "}
                  <KaTex expr={"C"} ariaLabel="the cause" /> occurs but{" "}
                  <KaTex expr={"E"} ariaLabel="the effect" /> does not.
                </li>
                <li>
                  Effect without cause: cases where{" "}
                  <KaTex expr={"E"} ariaLabel="the effect" /> happens even when{" "}
                  <KaTex expr={"C"} ariaLabel="the cause" /> is absent.
                </li>
              </ul>
            </li>
          </ul>
        </MustKnow>

        <p>
          When assessing an answer choice, ask: does it make the causal story
          less credible? If yes, it weakens—whether by reversing the arrow,
          supplying a different explanation, or showing the stated connection
          fails in real cases.
        </p>

        <MCQExample
          number={1}
          prompt="A company report shows that employees who drink at least two cups of coffee at work have higher productivity than those who do not. The report concludes that drinking coffee increases productivity. Which of the following, if true, most weakens the conclusion?"
          options={[
            "More productive employees are likelier to choose coffee because they take fewer long breaks.",
            "The company offers free coffee in the break room.",
            "Some employees who do not drink coffee are allergic to caffeine.",
            "Tea drinkers show the same productivity as non‑coffee drinkers.",
            "Productivity is measured by number of tasks completed daily.",
          ]}
          correct="More productive employees are likelier to choose coffee because they take fewer long breaks."
          solution={
            <>
              <p>
                The conclusion assumes{" "}
                <KaTex expr={"\\text{coffee} \\to \\text{productivity}"} ariaLabel="coffee causes productivity" />
                . Choice A suggests the reverse: being productive leads employees
                to drink coffee—i.e.,{" "}
                <KaTex
                  expr={"\\text{productivity} \\to \\text{coffee}"}
                  ariaLabel="productivity causes coffee"
                />
                . That undercuts the causal claim and is the best weaken.
              </p>
              <p>
                The other choices either describe background facts (free coffee),
                irrelevant subsets (caffeine allergies), or neutral metrics and
                comparisons that don’t target the causal link.
              </p>
            </>
          }
        />

        <p>
          Don’t attack correlation itself; aim directly at the assumed link
          between the specific cause and effect in the argument.
        </p>

        <ExampleCard
          number={2}
          title="Camera Installations and Accident Rates"
          statements={[
            "Claim: Installing speed cameras caused last year’s drop in traffic accidents in City X.",
            "1) During the same period, total traffic volume in City X fell by 30% because of a sharp increase in fuel prices.",
            "2) Neighboring cities without speed cameras experienced similar accident declines last year.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We’re testing whether the stated cause (cameras) really drove
                the effect (accident decline).
              </p>
              <p>
                Statement (1) offers an alternative cause: fewer cars on the
                road plausibly reduce accidents. That weakens the camera claim.
              </p>
              <p>
                Statement (2) shows the effect happened where the supposed cause
                was absent, which also weakens the causal link.
              </p>
              <p>
                Each statement independently undermines the conclusion. Thus,
                either alone is sufficient to weaken. Answer: D.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="App Usage and Test Score Gains"
          statements={[
            "Claim: Using a new prep app caused students’ scores to rise by 15 points this term.",
            "1) App users also increased total weekly study time compared to non‑users.",
            "2) Historical data show a 15‑point rise in the previous term as well, before the app existed.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Statement (1) provides an alternative cause: extra study time
                could explain the gains, weakening the causal claim about the
                app.
              </p>
              <p>
                Statement (2) shows the same improvement occurred even without
                the app—effect without the proposed cause—also weakening the
                claim.
              </p>
              <p>
                Each statement on its own undercuts the conclusion. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Summary: To weaken a causal argument, consider reversing the direction
          of influence, proposing another explanation, introducing a confounder,
          or demonstrating mismatches between cause and effect in real cases.
          Any of these can erode the plausibility of{" "}
          <KaTex expr={"C\\to E"} ariaLabel="C implies E" />.
        </p>
      </article>
    </main>
  );
}