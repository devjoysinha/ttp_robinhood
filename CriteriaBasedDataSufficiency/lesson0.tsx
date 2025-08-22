import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

// If your app loads KaTeX CSS globally (e.g., in app/layout.tsx), InlineMath will render with proper styling.
// Example: import "katex/dist/katex.min.css" in your root layout.
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "4.1 Criteria‑Based Data Sufficiency | Data Insights",
  description:
    "A concise guide to criteria‑based Data Sufficiency: what these problems are, how to evaluate statements, and how to reason to sufficiency without heavy math. Includes two worked examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.1 Introduction to Criteria‑Based DS
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the Data Insights section, you’ll sometimes face Data Sufficiency
          problems built around conditions rather than calculations. Each person
          or object in the scenario has one or more requirements that must be
          satisfied. Your job is to decide whether the given statements let you
          answer the question definitively.
        </p>

        <MustKnow>
          Criteria‑based DS mirrors standard DS: we test whether the statements
          pin down a yes/no or single‑value answer. The difference is emphasis—
          these questions rely on logic about conditions, not on algebra or
          arithmetic.
        </MustKnow>

        <p>
          The format is the same as classic DS: you’re given a prompt plus two
          statements. Evaluate each statement alone, then (if needed) both
          together, and choose the usual DS answer (A–E).
        </p>

        <MustKnow>
          Think “requirements.” Each criterion is a gate that must be passed. A
          statement is sufficient only if it guarantees the outcome asked about,
          without needing any extra assumptions.
        </MustKnow>

        <p>Here’s a small scenario to make this concrete:</p>
        <p>
          A student, Melissa, will enroll only in a cooking class that meets on
          weekends and is taught by a celebrity chef. Her friend Bianca will
          enroll only if the class costs less than $1{","}000 and focuses on
          French techniques. The question might ask whether they’ll end up in
          the same class.
        </p>

        <MustKnow>
          Almost any “must” or “must not” can be a criterion: time windows,
          prices, attributes, seating rules, or capacity constraints.
        </MustKnow>

        <section aria-labelledby="criteria-examples">
          <h3 id="criteria-examples" className="sr-only">
            Example criteria
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>The mower must be solar powered.</li>
            <li>The dog must weigh under 60 pounds.</li>
            <li>The meeting must start before 11 a.m. and last exactly 1 hour.</li>
            <li>
              Jonas must sit next to Caterina, and Caterina cannot sit next to
              Philip or Maya.
            </li>
            <li>
              The flight must depart on a Thursday, have at most one layover,
              and allow one carry‑on per passenger.
            </li>
          </ul>
        </section>

        <ExampleCard
          number={1}
          title="Mini‑example: Will they pick the same cooking class?"
          statements={[
            "Melissa will enroll only if the class meets on weekends and is taught by a celebrity chef. Bianca will enroll only if the class costs less than $1,000 and teaches French techniques.",
            "1) All available classes meet on Saturday mornings.",
            "2) Every class taught by a celebrity chef costs $1,500 or more.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We want a definitive Yes/No: will they take the same class?
                Evaluate each statement for sufficiency.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math="\Rightarrow" /> Every class meets on
                Saturday. That guarantees Melissa’s weekend requirement but says
                nothing about a celebrity instructor, cost, or French focus.
                We still don’t know whether there exists a single class that
                satisfies both sets of criteria. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math="\Rightarrow" /> Any celebrity‑taught class
                costs at least $1{","}500. Bianca requires{" "}
                <InlineMath math="\text{cost} < 1000" />. Therefore, Bianca will
                not enroll in any class that Melissa can take (since Melissa
                requires a celebrity chef). The answer is a guaranteed “No,” so
                this statement alone is sufficient. Pick B.
              </p>
            </>
          }
        />

        <p>
          When you analyze criteria‑based DS, a reliable tactic is to summarize
          each party’s requirements, then look for conflicts or overlaps. If a
          statement forces a contradiction between two required conditions, you
          can often reach a definite Yes/No quickly.
        </p>

        <ExampleCard
          number={2}
          title="Practice DS: Buying a sofa today"
          statements={[
            "Lee will buy a sofa only if it’s comfortable and its color is beige, white, or brown. Scout will not buy a white or green sofa. They’re shopping at Sofa Mart, where every sofa is white, green, blue, beige, or brown. Will they buy a sofa today from Sofa Mart?",
            "1) Every comfortable sofa at Sofa Mart is either green or blue.",
            "2) No beige sofa at Sofa Mart is comfortable.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                Combine the requirements that must be met simultaneously:
                Lee needs “comfortable” + one of {`{`}beige, white, brown{`}`};
                Scout bans white and green. Therefore, the only colors both can
                accept are beige or brown, and the sofa must be comfortable.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                All comfortable sofas are green or blue. Green is forbidden by
                Scout, and blue isn’t in Lee’s allowed set. So there is no sofa
                that is both comfortable and an acceptable color to both. The
                answer is definitively “No”—sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                Beige is ruled out for comfort, but a comfortable brown sofa
                might still exist. Since we don’t know whether any comfortable
                brown sofa is available, we cannot conclude Yes/No. Not
                sufficient.
              </p>
              <p>
                Conclusion: (1) alone suffices; (2) alone does not. Answer A.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat each criterion like a filter. If a statement
          guarantees that the filters either definitively align or definitively
          clash with the question’s target, the statement is sufficient—even if
          no calculations are involved.
        </p>
      </article>
    </main>
  );
}