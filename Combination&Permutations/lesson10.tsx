import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX styles are included globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "mathml", // accessible without relying on CSS
  });
  return display ? (
    <div
      className="my-2 overflow-x-auto"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <span
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    '16.2.9 "Or" Across Multiple Groups | Combinations and Permutations',
  description:
    'Learn how the word "or" signals addition with mutually exclusive choices. Includes a quick must‑know, a worked multiple‑choice example, and combination formula reminders with KaTeX.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.9 Selecting Multiple Items from Multiple Groups Using "or"
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Problems that use the word “or” often ask you to choose between
          alternatives. If the options are in separate, non‑overlapping groups
          (mutually exclusive), you add the number of ways from each group
          rather than multiply. This is different from “and,” which typically
          signals that choices happen together (and often leads to
          multiplication when steps are independent).
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-gray-100">
              Mutually exclusive choices → add.
            </p>
            <ul className="list-disc pl-5">
              <li>
                Events are mutually exclusive if they cannot occur at the same
                time. When a selection is “Group A or Group B,” the counts come
                from disjoint cases, so you add: total ways = ways from A + ways
                from B (+ ways from C, etc.).
              </li>
              <li>
                Use combinations to count selections where order does not
                matter:
                {" "}
                <Math
                  expr="{}^{n}\mathrm{C}_{k} \;=\; \frac{n!}{k!\,(n-k)!}"
                  ariaLabel="n choose k equals n factorial divided by k factorial times n minus k factorial"
                />
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Keep in mind: “or” with disjoint options means you will add the counts
          from each case. Don’t multiply unless the choices are happening
          together as separate steps.
        </p>

        <MCQExample
          number={14}
          prompt="A chest contains 4 distinct coins, 5 distinct jewels, and 6 distinct daggers. If a pirate chooses exactly two coins or two jewels or two daggers to put in a bag, how many different bags are possible?"
          options={["31", "65", "450", "600", "900"]}
          correct="31"
          solution={
            <>
              <p>
                The three categories are disjoint: the pirate takes either two
                coins or two jewels or two daggers. Compute each case using
                combinations and then add.
              </p>

              <p className="mt-2">
                Coins:
                {" "}
                <Math expr="\binom{4}{2} \;=\; 6" ariaLabel="4 choose 2 equals 6" />
              </p>
              <p>
                Jewels:
                {" "}
                <Math expr="\binom{5}{2} \;=\; 10" ariaLabel="5 choose 2 equals 10" />
              </p>
              <p>
                Daggers:
                {" "}
                <Math expr="\binom{6}{2} \;=\; 15" ariaLabel="6 choose 2 equals 15" />
              </p>

              <p className="mt-2">
                Add the mutually exclusive cases:
                {" "}
                <Math expr="6 \;+\; 10 \;+\; 15 \;=\; 31" ariaLabel="6 plus 10 plus 15 equals 31" />
              </p>

              <p className="mt-2">Answer: 31.</p>
            </>
          }
        />

        <ExampleCard
          number={15}
          title='When does "or" not mean add?'
          statements={[
            "You are told to pick 2 items, and you may pick from coins or jewels. Coins and jewels are disjoint categories.",
            "Now suppose you are told to pick 2 items, where each item can be a coin or a jewel. These cases overlap.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                In the first statement, you must choose both items from one
                group only. Those cases are mutually exclusive (all‑coins or
                all‑jewels), so you add the case counts. In the second
                statement, a single selection could be mixed across groups
                (coin‑jewel), so the cases are not mutually exclusive in the
                same way. You’d count by breaking into cases (two coins, two
                jewels, or one of each) and summing those disjoint outcomes.
              </p>
            </>
          }
        />

        <p>
          Summary: If “or” separates disjoint options, add the counts. Use
          combinations
          {" "}
          <Math expr="\binom{n}{k}" ariaLabel="n choose k" />
          {" "}
          for unordered selections, and always verify whether cases overlap
          before deciding how to combine them.
        </p>
      </article>
    </main>
  );
}