import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.5 Common Ways to Strengthen an Argument | Critical Reasoning",
  description:
    "Master the five most frequent ways to strengthen arguments on GMAT CR: add missing support, state needed assumptions, address confounds, rule out alternate causes, and confirm via targeted changes. Includes a quick multiple‑choice drill with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.5 Common Ways to Strengthen an Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strengthen questions ask you to make the author’s conclusion more credible.
          A correct choice narrows the gap between the evidence and the claim or removes
          alternative explanations that could undermine that claim.
        </p>

        <MustKnow>
          A statement strengthens an argument if it increases the likelihood that the
          conclusion follows from the premises. In logical terms, good strengtheners make
          the link P ∧ A ⇒ C more plausible by reinforcing premises (P), supplying
          necessary assumptions (A), or reducing competing explanations for the conclusion (C).
          <span className="sr-only">
            Logical structure: premises and assumptions imply the conclusion.
          </span>
        </MustKnow>

        <div aria-label="Logical structure formula" className="rounded-md bg-slate-800/50 p-4">
          <BlockMath math={"P \\;\\land\\; A \\;\\Rightarrow\\; C \\quad\\text{and}\\quad \\Pr(C\\mid P, A)\\uparrow"} />
        </div>

        <p>Five reliable ways to bolster an argument show up again and again:</p>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Add a missing premise that directly backs the conclusion or amplifies the
            support already provided by the evidence.
          </li>
          <li>
            State a key assumption the author must be relying on. Making that hidden
            requirement explicit and true props up the conclusion.
          </li>
          <li>
            Address a potential confounding factor that could weaken the inference.
            Showing that such an issue is absent or controlled strengthens the logic.
          </li>
          <li>
            Rule out an alternate cause or competing explanation for the observed effect.
            Eliminating rivals points more cleanly to the author’s stated cause.
          </li>
          <li>
            Confirm the conclusion by changing, adding, or removing a variable and
            observing a consistent effect. Results that move as predicted support the claim.
          </li>
        </ul>

        <p>Let’s see this approach in action on a quick drill.</p>

        <MCQExample
          number={1}
          prompt="Several cities that installed protected bike lanes reported fewer car collisions citywide the following year. The author concludes that protected bike lanes reduce car collisions. Which of the following, if true, most strengthens the argument?"
          options={[
            "The cities also launched broad traffic-safety advertising campaigns during the same year.",
            "After the lanes were added, the number of people commuting by bicycle increased.",
            "Intersections where protected bike lanes were installed experienced the largest declines in car collisions, while intersections without new lanes saw little or no change.",
            "Average car insurance premiums fell in those cities during the year after installation.",
            "The cities that added protected bike lanes had higher-than-average household incomes.",
          ]}
          correct="Intersections where protected bike lanes were installed experienced the largest declines in car collisions, while intersections without new lanes saw little or no change."
          solution={
            <>
              <p>
                We want evidence that ties the observed drop in collisions to the new
                bike lanes rather than to some other citywide factor.
              </p>
              <p>
                The correct choice shows that the reduction is concentrated exactly where
                the lanes were added, while other intersections are flat. This both links
                cause to effect and helps rule out broad, unrelated explanations.
              </p>
              <p>
                The other options either introduce possible alternate causes (citywide
                campaigns), are neutral (insurance premiums, demographics), or describe a
                new behavior (more cyclists) that doesn’t by itself tie the lanes to fewer
                car collisions.
              </p>
            </>
          }
        />

        <MustKnow>
          Checklist for strengthen answers:
          - Does it tighten the link between evidence and conclusion?
          - Does it assert a necessary assumption the argument depends on?
          - Does it remove or weaken a plausible alternative cause?
          - Does it control for or dismiss a confound?
          - Do outcome changes align with what the conclusion predicts?
        </MustKnow>

        <p className="pb-2">
          Bottom line: prefer choices that reinforce the pathway from premises to conclusion,
          eliminate competing explanations, or validate the claim through targeted changes.
        </p>
      </article>
    </main>
  );
}