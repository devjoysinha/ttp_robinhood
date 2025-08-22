import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.8 Assumptions | Critical Reasoning",
  description:
    "Learn what assumptions are in Critical Reasoning, why they are required for an argument to work, see the argument layout as an equation, and practice with a multiple‑choice example and full explanation.",
};

function TeX({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      className={block ? "block my-3 overflow-x-auto" : "inline"}
      aria-label={ariaLabel}
      role="img"
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
          1.8 Assumptions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A healthy argument doesn’t rely only on stated facts. It also leans on
          ideas the author never says outright. Those hidden ideas—assumptions—have
          to be true for the reasoning to hold up.
        </p>

        <MustKnow>
          An assumption is an unstated requirement that must be true for the
          author’s logic to succeed. If a required assumption fails, the argument
          breaks.
        </MustKnow>

        <p>
          A handy way to visualize the structure of many arguments is as a simple
          “equation”:
        </p>

        <TeX
          block
          ariaLabel="Background plus Evidence plus Assumptions equals Conclusion"
          expr="\text{Background} + \text{Evidence} + \text{Assumptions} = \text{Conclusion}"
        />

        <p>
          You can think of assumptions as the connective tissue that links what
          we’re told (background and evidence) to what the author wants us to
          believe (the conclusion).
        </p>

        <MustKnow>
          Assumptions act as the glue between evidence and conclusion. Without
          that glue, the provided evidence does not justify the stated
          conclusion.
        </MustKnow>

        <section aria-labelledby="example-arg-structure">
          <h3 id="example-arg-structure" className="sr-only">
            Example and Explanation
          </h3>

          <MCQExample
            number={2}
            prompt="The City of Bayfield is projected to run a sizable budget shortfall next year. More than 20,000 vehicles enter Bayfield each day via the East Span Bridge. Therefore, if Bayfield starts charging a toll on the East Span Bridge, it will raise enough money to erase the deficit. Which of the following is an assumption required by this argument?"
            options={[
              "Bayfield could substantially raise municipal tax rates.",
              "If Bayfield does not eliminate the deficit, it will have to declare bankruptcy next year.",
              "Drivers will continue to use the East Span Bridge even after a toll is imposed.",
              "Bayfield’s deficit is due to wasteful spending.",
              "The number of cars crossing the East Span Bridge each day will not increase in the near future.",
            ]}
            correct="Drivers will continue to use the East Span Bridge even after a toll is imposed."
            solution={
              <>
                <p className="mb-2">
                  Let’s map the argument using the structure above.
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    Background: Bayfield expects a large deficit next year.
                  </li>
                  <li>
                    Evidence: Over 20,000 cars enter daily via one bridge.
                  </li>
                  <li>
                    Conclusion: A bridge toll will generate enough revenue to
                    close the gap.
                  </li>
                </ul>
                <p className="mt-3">
                  For the plan to work, traffic—and thus toll payments—must keep
                  flowing. If drivers avoid the bridge once the toll starts, the
                  revenue disappears and the conclusion collapses. So the
                  argument relies on the idea that usage won’t drop off because
                  of the toll.
                </p>
                <p className="mt-2">
                  Evaluation of choices:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    A: Other ways to raise money (like higher taxes) aren’t
                    necessary for the toll plan to work. Not required.
                  </li>
                  <li>
                    B: Possible consequences of not fixing the deficit don’t
                    affect whether the toll plan raises enough. Not required.
                  </li>
                  <li>
                    C: Correct. If drivers keep using the bridge even with a
                    toll, revenue materializes as claimed.
                  </li>
                  <li>
                    D: The cause of the deficit is irrelevant to whether tolls
                    can cover it. Not required.
                  </li>
                  <li>
                    E: Even if traffic increases, the plan could still succeed,
                    and a lack of increase isn’t needed. Not required.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: when you assess an argument, look for the hidden links
          that make the reasoning possible. Those links are the assumptions. If
          an assumption fails, the conclusion no longer follows from the
          evidence.
        </p>
      </article>
    </main>
  );
}