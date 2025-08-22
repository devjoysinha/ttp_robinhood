import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { Fragment } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "9.5.3 Evaluate the Argument: Statement-Style Choices | GMAT CR",
  description:
    "Learn how to solve Evaluate the Argument questions when the answer choices are statements rather than questions. Includes two fully worked examples with reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.5.3 Statement-Style Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, we’ve mostly seen Evaluate questions whose choices are phrased
          as questions. Occasionally, the GMAT flips the script: the choices are
          statements. The solving approach is nearly the same—you still focus on
          the conclusion and look for information that changes how well the
          evidence supports that conclusion.
        </p>

        <p>
          The difference is subtle but important. Since choices are statements,
          the credited option won’t be a query you can answer “this way or that.”
          Instead, the correct statement will directly tilt the argument—either by
          reinforcing its support or by undermining it.
        </p>

        <MustKnow>
          <>
            How to handle statement-style Evaluate choices:
            <ul className="mt-2 list-inside list-disc">
              <li>Identify the author’s conclusion.</li>
              <li>
                Ask: Would this statement make the support for that conclusion
                stronger or weaker?
              </li>
              <li>
                Pick the choice that most meaningfully shifts the support for the
                stated conclusion (in either direction).
              </li>
            </ul>
            <div className="mt-3 text-sm text-gray-300">
              In symbols:{" "}
              <InlineMath math={`S\\ \\uparrow\\ \\Rightarrow\\ \\text{argument strengthens},\\quad S\\ \\downarrow\\ \\Rightarrow\\ \\text{argument weakens}`} />
              , where S denotes the support for the conclusion.
            </div>
          </>
        </MustKnow>

        <section aria-labelledby="example-airport">
          <h3 id="example-airport" className="sr-only">
            Example: Airport noise and local businesses
          </h3>

          <MCQExample
            number={1}
            prompt={
              <Fragment>
                <em>
                  Residents of the city of Mergate have complained about nonstop
                  aircraft noise. The city council is weighing a permanent closure
                  of Mergate Airport. Many local businesses depend on tourist
                  spending, so council members care about what closing the airport
                  would mean for those businesses’ profits.
                </em>
                <br />
                <br />
                <em>
                  Which of the following, if true, is most important for the
                  council to consider when deciding whether to close the airport?
                </em>
              </Fragment>
            }
            options={[
              "Tourist-dependent businesses in Mergate have earned lower profits in recent years than they did in the past.",
              "After a small private airport shut down in Boselton, some Boselton businesses saw revenue rise.",
              "Eliminating takeoff and landing noise would make Mergate a much more appealing vacation spot.",
            ]}
            correct="Eliminating takeoff and landing noise would make Mergate a much more appealing vacation spot."
            solution={
              <>
                <p>
                  The implicit conclusion under evaluation is whether closing the
                  airport makes sense, given the council’s concern about the
                  profitability of tourist-driven businesses.
                </p>
                <p>
                  Choice A talks about current profitability levels but doesn’t
                  tell us how closing the airport would affect profits. Choice B
                  is a weak analogy: it references a different city and a small
                  airport, so it’s only loosely relevant. Choice C matters
                  directly—if closing the airport makes Mergate more attractive to
                  visitors, tourist spending could increase. That strengthens the
                  case for closure in light of the council’s goal.
                </p>
              </>
            }
          />
        </section>

        <p>
          The takeaway: for statement-style Evaluate choices, you don’t need to
          predict whether the right answer will help or hurt. You just need the
          statement that most clearly shifts the strength of the support for the
          conclusion.
        </p>

        <section aria-labelledby="example-bikelanes">
          <h3 id="example-bikelanes" className="sr-only">
            Example: Bike lanes and safety
          </h3>

          <MCQExample
            number={10}
            prompt={
              <>
                The city of Neurtai has installed dozens of miles of protected
                bike lanes over six years. During the same period, the number of
                cyclist–vehicle collisions has risen slightly. Therefore, protected
                bike lanes might not improve safety, and Neurtai should stop adding
                them to save money.
                <br />
                <br />
                Which of the following, if true, is most important for determining
                whether it’s reasonable for Neurtai to stop adding protected bike
                lanes?
              </>
            }
            options={[
              "Interest in exercise has grown in Neurtai, and cycling has become much more popular.",
              "Neurtai has added fewer miles of protected lanes than planners originally projected.",
              "Even where protected lanes exist, cyclists are exposed at intersections.",
              "As the public works team gained experience, the cost per mile of building protected lanes fell.",
              "Many cyclists who ride in parts of Neurtai without protected lanes have never had a collision with a car.",
            ]}
            correct="Interest in exercise has grown in Neurtai, and cycling has become much more popular."
            solution={
              <>
                <p>
                  Conclusion to evaluate: protected lanes don’t improve safety, so
                  the city should stop building them. We want the statement that
                  most directly changes how well the evidence supports that
                  conclusion.
                </p>
                <p>
                  A: If cycling popularity rose substantially, the number of riders
                  likely increased. A small uptick in collisions alongside a large
                  increase in exposure suggests risk per rider could have dropped,
                  which undercuts the conclusion. This is highly decision-relevant.
                </p>
                <p>
                  B: Fewer miles than expected doesn’t tell us whether the lanes
                  that exist increase or decrease safety.
                </p>
                <p>
                  C: Intersections were always unprotected; this doesn’t show how
                  safe protected segments themselves are.
                </p>
                <p>
                  D: Lower construction costs don’t address safety efficacy. If
                  lanes don’t help, cheap lanes still don’t justify continuing.
                </p>
                <p>
                  E: Some riders avoiding crashes without lanes doesn’t show lanes
                  lack value for others; lanes could still reduce collisions among
                  higher‑risk cyclists.
                </p>
                <p>Therefore, A is the most significant for the decision.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Evaluate questions with statement-style choices still hinge
          on the link between evidence and conclusion. Choose the statement that
          most strongly increases or decreases that link.
        </p>
      </article>
    </main>
  );
}