import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "4.2 Outside Factors in Criteria‑Based DS | GMAT",
  description:
    "Learn how outside, unstated conditions can impact Data Sufficiency problems with criteria. See clear heuristics, a quick car‑buying mini‑case, and a full DS example with reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.2 When Criteria‑Based DS Requires Considering Outside Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many criteria‑based DS questions can be solved using only what’s stated.
          However, you can’t always assume the situation is confined to the exact words in the stem.
          Sometimes unstated, real‑world context can change the outcome.
        </p>

        <MustKnow>
          Don’t assume the scenario is limited strictly to the text in the stem.
          In some problems, details not explicitly mentioned can influence whether the criteria
          are satisfied and, therefore, whether a statement is sufficient.
        </MustKnow>

        <p>
          In other words, the correct DS answer may depend on conditions that the question
          doesn’t spell out. If such outside factors could alter the result, we must account
          for them in our sufficiency analysis.
        </p>

        <MustKnow>
          Be ready to factor in unstated influences when analyzing criteria‑based DS.
          Failing to watch for them can lead to picking an incorrect choice.
        </MustKnow>

        <h3 className="mt-8 text-xl font-semibold text-white">
          A quick mini‑case: outside factors vs. a closed scenario
        </h3>
        <p>
          Scenario A:
          “Phil will purchase a used car this weekend. His requirements are: price under $4,000
          and color not green. Will he buy his neighbor’s car?”
          Statement: “His neighbor is selling a black car for $3,000.”
        </p>
        <p>
          At first glance, you might say “yes,” since the neighbor’s car meets both conditions.
          But that statement alone isn’t sufficient: Phil might have multiple cars available that
          also satisfy his criteria. Because the market could offer other valid choices, we can’t
          conclude he’ll choose his neighbor’s car. The number of suitable alternatives is an
          outside factor the statement doesn’t control.
        </p>
        <p>
          Now tweak the stem.
          Scenario B: “Phil is deciding whether to buy a used car from his neighbor this weekend.
          His requirements are: price under $4,000 and color not green. Will he buy his neighbor’s car?”
          Statement: “His neighbor is selling a black car for $3,000.”
        </p>
        <p>
          In this variation, Phil is only considering the neighbor’s car, not all used cars generally.
          Outside options no longer matter. Here, we simply check whether the single car under
          consideration meets the criteria.
        </p>

        <MustKnow>
          Read stems precisely. If the scenario is open (e.g., “Will he buy a used car?”),
          external availability can matter. If the scenario is closed (e.g., “from his neighbor”),
          unrelated choices are irrelevant.
        </MustKnow>

        <h3 className="mt-8 text-xl font-semibold text-white">Worked DS example</h3>

        <ExampleCard
          number={2}
          title="Hiring under two criteria (outside factors may apply)"
          statements={[
            "The Harmony Corporation will hire two new employees. The requirements are: at least one speaks Spanish and at most one is an engineer. If Alex and Chris are applicants, were they both hired?",
            "1) Alex is a designer, and Chris is an engineer.",
            "2) Alex and Chris both speak Spanish.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                The company is filling two positions subject to two constraints:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  Spanish speakers among the two hires:{" "}
                  <InlineMath math="\,\ge 1" aria-label="greater than or equal to 1" />
                  {"  "}which, with two total hires, is effectively{" "}
                  <InlineMath math="1\text{–}2" aria-label="one to two" />.
                </li>
                <li>
                  Engineers among the two hires:{" "}
                  <InlineMath math="\,\le 1" aria-label="less than or equal to 1" />
                  {"  "}which is{" "}
                  <InlineMath math="0\text{–}1" aria-label="zero to one" />.
                </li>
              </ul>

              <p className="mt-4">
                Statement (1): Alex is a designer; Chris is an engineer. This setup satisfies the
                “at most one engineer” rule, but we still don’t know whether at least one speaks
                Spanish. Not sufficient.
              </p>

              <p>
                Statement (2): Both Alex and Chris speak Spanish. That covers the language rule,
                but we don’t know their professions—if both are engineers, they can’t both be hired.
                Not sufficient.
              </p>

              <p>
                Together: We’d have at least one Spanish speaker (in fact, both), and at most one
                engineer (Chris). It appears they could both be hired. However, the stem never
                restricts the applicant pool to Alex and Chris only. Other candidates might also
                satisfy the same criteria, so we cannot conclude that Alex and Chris were both
                selected. The presence of other qualified applicants is an outside factor the
                statements don’t resolve.
              </p>

              <p className="font-semibold">Answer: E. Even together, the statements are not sufficient.</p>
            </>
          }
        />

        <p className="mt-6">
          Bottom line: In criteria‑based DS, sufficiency may hinge on whether the world outside the
          stem can change the outcome. When the scenario is open, outside factors can matter; when
          it’s closed to a single option or a fixed set, they generally don’t.
        </p>
      </article>
    </main>
  );
}