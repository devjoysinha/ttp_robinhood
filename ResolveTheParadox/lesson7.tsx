import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "5.8 Common Resolve the Paradox Incorrect Choices | Critical Reasoning",
  description:
    "Learn the most frequent trap answers in Resolve the Paradox questions: what they look like, why they fail, and how to avoid them. Includes a quick MCQ drill and practical checklists.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8 Common Resolve the Paradox Incorrect Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Getting fast and accurate at Resolve the Paradox questions often comes
          down to spotting wrong answers instantly. The more familiar you are
          with typical traps, the less likely you are to burn time or pick a
          choice that sounds plausible but doesn’t actually reconcile the facts.
        </p>

        <MustKnow>
          The correct answer must allow both stated facts to stand together.
          Wrong answers usually do one of the following: explain a different
          issue, focus on only one fact, deny a given fact, add irrelevant info,
          intensify the conflict, or restate the situation without showing how
          the facts can coexist.
        </MustKnow>

        <section aria-labelledby="logic-view">
          <h3 id="logic-view" className="sr-only">
            Logical view of paradox resolution
          </h3>
          <div className="rounded-md bg-slate-800/60 p-4">
            <p className="mb-3">
              Think of the task this way: we’re given two facts, A and B. The
              right answer supplies some context C that makes A and B compatible.
            </p>
            <div className="overflow-x-auto">
              <BlockMath math={"\\text{Find } C \\text{ such that } A \\land B \\land C \\text{ is plausible.}"} />
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                Explains just one side:{" "}
                <InlineMath math={"C \\Rightarrow A"} /> but says nothing about{" "}
                <InlineMath math={"B"} /> (or vice versa).
              </li>
              <li>
                Contradicts a fact:{" "}
                <InlineMath math={"C \\Rightarrow \\lnot A"} /> or{" "}
                <InlineMath math={"C \\Rightarrow \\lnot B"} />.
              </li>
              <li>
                Irrelevant:{" "}
                <InlineMath math={"C \\perp \\{A, B\\}"} /> (no bearing on the
                conflict).
              </li>
              <li>
                Heightens the conflict:{" "}
                <InlineMath math={"A \\land B \\land C"} /> is even harder to
                accept than <InlineMath math={"A \\land B"} /> alone.
              </li>
              <li>
                Restates the facts without linking them: no mechanism to make{" "}
                <InlineMath math={"A"} /> and <InlineMath math={"B"} /> fit.
              </li>
            </ul>
          </div>
        </section>

        <p>
          Below are common trap patterns you’ll see again and again. Skim them
          before tackling new sets to sharpen your filter for bad answers.
        </p>

        <ExampleCard
          number={1}
          title="Trap Type 1: Explains the wrong thing"
          statements={[
            "Stimulus: A city increased funding for public transit, yet ridership fell.",
            "Typical trap: An answer that explains why funding rose (e.g., a new budget rule) rather than why ridership fell.",
            "Why it’s wrong: It addresses a side issue and leaves the paradox (more funding but fewer riders) unresolved.",
          ]}
          correctLetter="—"
          solution={
            <p>
              The correct answer must show how both facts can be true
              simultaneously (e.g., major line closures for repairs reduced
              service despite higher funding).
            </p>
          }
        />

        <ExampleCard
          number={2}
          title="Trap Type 2: Paradox is about a difference, but the answer highlights a similarity"
          statements={[
            "Stimulus: Two similar towns run the same anti-litter campaign, but Town A’s litter drops and Town B’s doesn’t.",
            "Typical trap: An answer that notes both towns use identical posters.",
            "Why it’s wrong: It emphasizes how the towns are alike instead of explaining the divergence in outcomes.",
          ]}
          correctLetter="—"
          solution={
            <p>
              You need a difference-maker (e.g., A increased trash pickups while
              B didn’t), not a similarity.
            </p>
          }
        />

        <ExampleCard
          number={3}
          title="Trap Type 3: Makes the situation more paradoxical"
          statements={[
            "Stimulus: A company cut prices but revenue still rose.",
            "Typical trap: An answer saying the company also spent heavily on discounts.",
            "Why it’s wrong: Bigger discounts would normally reduce revenue further, deepening the puzzle.",
          ]}
          correctLetter="—"
          solution={
            <p>
              A good resolution would give a factor that boosts volume enough to
              offset price cuts (e.g., entry into a much larger market).
            </p>
          }
        />

        <ExampleCard
          number={4}
          title="Trap Type 4: Contradicts one of the stated facts"
          statements={[
            "Stimulus: The museum extended hours, yet daily visitors decreased.",
            "Typical trap: An answer claiming daily visitors actually increased.",
            "Why it’s wrong: You can’t fix a paradox by denying a premise; both facts must remain intact.",
          ]}
          correctLetter="—"
          solution={
            <p>
              Look for context that preserves both statements (e.g., extended
              hours spread visitors across more time slots, reducing the per-day
              average if the reporting window changed).
            </p>
          }
        />

        <ExampleCard
          number={5}
          title="Trap Type 5: Irrelevant information"
          statements={[
            "Stimulus: Despite a larger marketing budget, new subscriptions fell.",
            "Typical trap: An answer discussing office décor or employee benefits.",
            "Why it’s wrong: It has no causal link to subscriptions or to the spend‑vs‑signups relationship.",
          ]}
          correctLetter="—"
          solution={
            <p>
              Relevant factors typically touch targeting, timing, channel mix,
              product availability, or measurement windows.
            </p>
          }
        />

        <ExampleCard
          number={6}
          title="Trap Type 6: Repeats the facts without showing how they can coexist"
          statements={[
            "Stimulus: Restaurant ratings improved, yet foot traffic declined.",
            "Typical trap: An answer that restates that ratings concern quality while traffic measures visits.",
            "Why it’s wrong: It summarizes but doesn’t reconcile. We still don’t see how higher ratings fit with fewer visitors.",
          ]}
          correctLetter="—"
          solution={
            <p>
              A valid resolution might cite higher prices after a renovation or
              a move to a less busy location that reduced casual walk‑ins.
            </p>
          }
        />

        <MCQExample
          number={1}
          prompt="A tech firm boosted ad spending in Q2, yet the number of new paid users dropped. Which choice best resolves the apparent contradiction?"
          options={[
            "The firm increased ad spend to build long‑term brand awareness.",
            "A competitor’s revenue rose sharply in Q2.",
            "Most of the ads ran in regions where the app could not launch in Q2 due to licensing delays.",
            "The average age of the firm’s employees increased.",
            "Internal reports later showed that new paid users did not actually drop.",
          ]}
          correct="Most of the ads ran in regions where the app could not launch in Q2 due to licensing delays."
          solution={
            <>
              <p>
                Choice C reconciles both facts: spend can rise while new paid
                users fall if many ads targeted places where purchases were
                impossible this quarter.
              </p>
              <p>
                A explains the budget but not the drop (Type 1). B is unrelated
                (Type 5). D is irrelevant (Type 5). E contradicts a stated fact
                (Type 4).
              </p>
            </>
          }
        />

        <MustKnow>
          Quick checklist before selecting an answer:
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Does it keep both facts true?</li>
            <li>Does it directly link the facts so they can coexist?</li>
            <li>Does it introduce a difference‑maker (when the paradox is about a difference)?</li>
            <li>Is it relevant to the causal tension in the stimulus?</li>
            <li>Does it reduce, not intensify, the conflict?</li>
          </ul>
        </MustKnow>

        <p>
          Bottom line: the right answer supplies a specific context{" "}
          <InlineMath math={"C"} /> that makes{" "}
          <InlineMath math={"A \\land B"} /> reasonable. Anything that explains
          the wrong issue, denies a fact, or floats unrelated details belongs in
          the reject pile.
        </p>
      </article>
    </main>
  );
}