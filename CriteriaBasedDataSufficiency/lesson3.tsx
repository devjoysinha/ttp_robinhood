import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

// KaTeX (client-only) inline renderer
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "4.3 When to Consider Outside Factors | Criteria‑Based Data Sufficiency",
  description:
    "Learn how to decide whether outside factors matter in criteria‑based Data Sufficiency: restricted vs. unrestricted groups, keyword cues, worked examples, and a DS drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet (client-safe; harmless on SSR) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 Deciding Whether Outside Factors Must Be Considered
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In criteria‑driven DS problems, one question unlocks the whole setup:
          are we dealing with a restricted pool or an open one? The answer tells
          you whether information beyond what’s explicitly named could affect
          the outcome.
        </p>

        <MustKnow>
          To decide if outside factors matter, ask: Is the scenario restricted
          to a specific, closed group? If yes, ignore outside possibilities. If
          no, you must account for options not explicitly listed.
        </MustKnow>

        <p>
          Here, “group” is broad: it can be people, companies, objects, or even
          the criteria themselves—any set that the question is implicitly or
          explicitly limiting.
        </p>

        <MustKnow>
          In criteria‑based DS, the “group” can be any relevant collection:
          entities, items, or the stated requirements. What matters is whether
          that collection is closed (restricted) or open (unrestricted).
        </MustKnow>

        <section aria-labelledby="cars-scenarios">
          <h3 id="cars-scenarios" className="text-white font-semibold">
            Quick contrast: restricted vs. unrestricted
          </h3>
          <p className="mt-2">
            Unrestricted example: “Phil plans to buy a used car this weekend.
            His requirements are a price under $4,000 and not green. Will he buy
            his neighbor’s car?” Because Phil could buy from anyone whose car
            meets his conditions, you must consider other sellers besides the
            neighbor.
          </p>
          <p>
            Restricted example: “Phil will buy a used car from his neighbor this
            weekend. The car must cost under $4,000 and not be green. Will he
            buy the neighbor’s car?” Now the “group” is just one car—his
            neighbor’s—so outside options are irrelevant.
          </p>
        </section>

        <MustKnow>
          Rules of thumb:
          <br />- Restricted group → outside factors do not apply.
          <br />- Unrestricted group → outside factors can change the answer.
        </MustKnow>

        <section aria-labelledby="keywords">
          <h3 id="keywords" className="text-white font-semibold">
            Keyword cues in DS stems
          </h3>
          <p className="mt-2">
            Certain words hint at whether the group is closed or open:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>
              “only,” “exactly” → usually restricted (closed set or complete
              list)
            </li>
            <li>
              “include,” “or neither” → usually unrestricted (more options may
              exist)
            </li>
          </ul>

          <p className="mt-4">
            Example (restricted): “Sara’s only criteria for attending a lecture
            are X and Y.” The word “only” tells us no other conditions apply; we
            evaluate solely against X and Y.
          </p>
          <p>
            Example (unrestricted): “Sara’s criteria include X and Y.” The word
            “include” signals there may be additional, unstated criteria that
            still matter.
          </p>
          <p>
            Another unrestricted cue is “or neither,” as in: “Will Jerome hire
            Company A, Company B, or neither?” That phrasing leaves room for
            outcomes outside the two named companies, so the choice set isn’t
            closed.
          </p>
        </section>

        <MustKnow>
          Not every stem uses a clear keyword. Even without them, the wording
          will still imply whether the scenario is closed or open—read carefully
          and decide before testing statements.
        </MustKnow>

        <section aria-labelledby="practice">
          <h3 id="practice" className="text-white font-semibold">
            Practice DS drill (unrestricted setting)
          </h3>

          <ExampleCard
            number={3}
            title="Deciding if outside options matter"
            statements={[
              "Kumar is planning a 5‑day trip to Mexico. His must‑have resort criteria include a total cost of at most $3,000 and a location where the daily temperature never drops below 75°F. His agent suggests two resorts: Gran Cielo and Sol y Mar. Did Kumar more likely book Gran Cielo, Sol y Mar, or neither?",
              "(1) Gran Cielo costs $2,500 and is in a warmer location than Sol y Mar.",
              "(2) Sol y Mar’s daily temperature exceeds 77°F and it is more expensive than Gran Cielo.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  First note the phrase “criteria include” and the choice “or
                  neither” in the question. Both indicate an unrestricted
                  scenario: there may be additional requirements and possibly
                  other resorts beyond the two named.
                </p>

                <p className="mt-2">
                  Kumar’s stated non‑negotiables are:
                </p>
                <ul className="ml-6 list-disc">
                  <li>
                    Cost{" "}
                    <InlineMath
                      math="\le 3000"
                      aria-label="less than or equal to three thousand dollars"
                    />
                  </li>
                  <li>
                    Daily temperature{" "}
                    <InlineMath
                      math="\ge 75^{\circ}\!F"
                      aria-label="at least seventy-five degrees Fahrenheit"
                    />
                  </li>
                </ul>

                <p className="mt-4">
                  Statement (1): We learn Gran Cielo is $2,500 (meets the cost
                  cap) and warmer than Sol y Mar, but we still don’t know
                  whether either resort clears the temperature floor. Plus, the
                  setting is unrestricted—other resorts could also satisfy the
                  conditions. Not sufficient.
                </p>

                <p className="mt-2">
                  Statement (2): Sol y Mar meets the temperature requirement
                  since{" "}
                  <InlineMath
                    math="77^{\circ}\!F"
                    aria-label="seventy-seven degrees Fahrenheit"
                  />{" "}
                  is above the threshold, and it’s pricier than Gran Cielo. But
                  we don’t know exact prices, so either or both could violate
                  the{" "}
                  <InlineMath
                    math="\le 3000"
                    aria-label="less than or equal to three thousand dollars"
                  />{" "}
                  constraint. Other resorts might qualify as well. Not
                  sufficient.
                </p>

                <p className="mt-2">
                  Together: Gran Cielo satisfies the price limit, and Sol y Mar
                  satisfies the temperature floor; however, we still don’t know
                  whether both criteria are simultaneously met by a single
                  resort, whether Sol y Mar’s price is within the cap, or
                  whether Kumar had additional must‑haves (the stem said
                  “include”). Because the group is not closed, outside options
                  may also beat both recommendations. Still not sufficient.
                </p>

                <p className="mt-2 font-semibold">Answer: E.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: before testing statements, lock down whether the stem
          restricts the choice set. If it doesn’t, account for extra criteria
          and unlisted options when judging sufficiency.
        </p>
      </article>
    </main>
  );
}