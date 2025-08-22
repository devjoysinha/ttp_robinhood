import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.12 Probability of “At Least” Outcomes | GMAT Probability",
  description:
    "Master “at least” probability problems by summing disjoint cases or using combinations. Includes a quick walkthrough and two practice MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.12 Probability of “At Least” Some Number of Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a question asks for “at least k,” it’s inviting you to add the probabilities
          of all allowable counts: k, k+1, … up to the maximum possible. There are two
          fast, equivalent ways to compute these:
          (1) multiply sequential pick‑probabilities for each arrangement and then multiply by the
          number of distinct arrangements, or
          (2) use combinations to count favorable selections over total selections.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              “At least k” = sum of disjoint cases: k, k+1, …, max.
            </li>
            <li>
              Combination method: Favorable outcomes divided by total outcomes.
              Example: pick r of type A and s of type B from n items is
              “C(A, r)·C(B, s) / C(n, r+s)”.
            </li>
            <li>
              Sequential method: multiply pick‑probabilities for one order, then multiply by the number
              of distinct orderings.
            </li>
            <li>
              Consider the complement only if it clearly saves time (e.g., “at least one”).
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick Walkthrough (two equivalent approaches)
          </h3>
          <p>
            A vase has 3 roses and 4 tulips. If 3 flowers are drawn at random,
            what is the probability that at least 2 are roses?
          </p>
          <p className="text-gray-200 font-medium">Combination method</p>
          <p>
            We need either 2 roses + 1 tulip, or 3 roses.
            Total ways to pick 3 from 7 is C(7, 3).
          </p>
          <ul className="list-disc pl-5">
            <li>Two roses and one tulip: C(3, 2)·C(4, 1)</li>
            <li>Three roses: C(3, 3)·C(4, 0)</li>
          </ul>
          <p>
            Probability = [C(3, 2)·C(4, 1) + C(3, 3)·C(4, 0)] / C(7, 3)
            = (12 + 1) / 35 = 13/35.
          </p>

          <p className="text-gray-200 font-medium">Sequential method</p>
          <p>
            Compute the probability for one ordering and multiply by the number of
            different orderings of the letters (e.g., RRT and RRR).
            You’ll get the same 13/35. Different route, same destination.
          </p>
        </section>

        <MCQExample
          number={46}
          prompt="A 4-person dance team is chosen at random from 5 dancers from town A and 6 dancers from town B. What is the probability that at least 3 members are from town B?"
          options={["23/66", "4/11", "9/22", "5/11", "31/66"]}
          correct="23/66"
          solution={
            <>
              <p>
                We need 3 from B and 1 from A, or 4 from B. Use combinations.
              </p>
              <ul className="list-disc pl-5">
                <li>Total ways: C(11, 4) = 330.</li>
                <li>Three B, one A: C(6, 3)·C(5, 1) = 20·5 = 100 → 100/330.</li>
                <li>Four B: C(6, 4) = 15 → 15/330.</li>
              </ul>
              <p>
                Add: 100/330 + 15/330 = 115/330 = 23/66.
              </p>
              <p className="mt-2">
                Sequential approach confirms the same result: multiply the step‑by‑step
                probabilities for one arrangement and scale by the number of distinct
                arrangements for each scenario.
              </p>
            </>
          }
        />

        <MCQExample
          number={47}
          prompt="A 5‑member committee is selected from 3 juniors and 6 seniors. What is the probability that at least 2 members are juniors?"
          options={["3/7", "10/21", "25/42", "9/14", "29/42"]}
          correct="25/42"
          solution={
            <>
              <p>
                “At least 2 juniors” is possible only as 2 juniors + 3 seniors, or 3 juniors + 2 seniors
                (we don’t have enough juniors for 4 or 5).
              </p>
              <ul className="list-disc pl-5">
                <li>Total ways: C(9, 5) = 126.</li>
                <li>Two J, three S: C(3, 2)·C(6, 3) = 3·20 = 60 → 60/126.</li>
                <li>Three J, two S: C(3, 3)·C(6, 2) = 1·15 = 15 → 15/126.</li>
              </ul>
              <p>
                Add: 60/126 + 15/126 = 75/126 = 25/42.
              </p>
              <p className="mt-2">
                The sequential pick‑probability approach yields the same answer but with more
                arithmetic. Combinations are usually quicker here.
              </p>
            </>
          }
        />

        <ExampleCard
          number={48}
          title="When to choose combinations vs. sequential multiplication"
          statements={[
            "If every item in a selection is identical within type (e.g., any junior counts the same as any other junior), combinations tend to be fastest.",
            "If the scenario is small and the order is naturally constrained (e.g., a fixed draw order is given), multiplying pick‑probabilities and scaling by arrangements can be just as quick.",
            "For “at least one,” consider the complement when it’s simpler: 1 − P(none).",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                Both routes are valid and produce identical results. Pick the path that minimizes
                arithmetic for the specific numbers you’re given.
              </p>
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: “At least” problems are sums of disjoint cases. Decide quickly whether combinations
          or a sequential approach is cleaner, then execute with care.
        </p>
      </article>
    </main>
  );
}