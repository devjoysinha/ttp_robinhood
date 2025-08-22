import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.3 Consider Outside Factors | Criteria‑Based DS",
  description:
    "Learn how to decide whether outside factors must be considered in criteria‑based Data Sufficiency problems. Spot restricted vs. unrestricted groups, key signal words, and practice with a DS example.",
};

function K({
  expr,
  display = false,
  className,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    output: "mathml",
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 Should We Account for Outside Factors?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In criteria‑driven DS prompts, start by asking one question:
          does the situation limit us to a specific, closed group? Your
          answer to that single question tells you whether other possibilities
          outside the prompt must be considered.
        </p>

        <MustKnow>
          If the scenario restricts the choice to a specific group, you do not
          bring in outside options or criteria. If the scenario does not
          restrict the group, you must consider alternatives beyond what is
          explicitly named.
        </MustKnow>

        <p>
          Here, the word “group” is broad: it can be a set of objects, people,
          companies, destinations, or even the list of criteria themselves. The
          key is whether the universe you’re choosing from is closed or open.
        </p>

        <MustKnow>
          “Group” means any collection relevant to the prompt—items, entities,
          or the stipulated criteria. The moment the group isn’t closed, outside
          factors can impact the answer and must be examined.
        </MustKnow>

        <section aria-labelledby="examples-title" className="space-y-4">
          <h3 id="examples-title" className="text-xl font-semibold text-white">
            Quick Scenarios
          </h3>

          <div className="space-y-2">
            <p className="font-semibold text-gray-100">Scenario A (unrestricted):</p>
            <p>
              Phil plans to buy a used car this weekend. His requirements:
              the price is under $4,000 and the color is not green. Will he
              purchase his neighbor’s car?
            </p>
            <p className="text-gray-300">
              Because Phil could buy from anyone whose car meets his criteria,
              the group is open. Even if the neighbor’s car qualifies, other
              cars might also qualify—so outside options matter.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-100">Scenario B (restricted):</p>
            <p>
              Phil will buy a used car from his neighbor this weekend. His
              requirements are the same. Will he buy his neighbor’s car?
            </p>
            <p className="text-gray-300">
              The choice is restricted to one source—his neighbor. We don’t
              consider other sellers. Outside options are irrelevant here.
            </p>
          </div>
        </section>

        <MustKnow>
          Checklist for criteria‑based DS:
          - Restricted group → ignore outside factors.
          - Unrestricted group → consider outside factors.
        </MustKnow>

        <section aria-labelledby="keywords-title" className="space-y-3">
          <h3 id="keywords-title" className="text-xl font-semibold text-white">
            Helpful Signal Words
          </h3>
          <p>
            Certain words or phrases often hint at whether the group is
            restricted or not:
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-300">
            <li>only — typically restricted</li>
            <li>exactly — typically restricted</li>
            <li>include — typically unrestricted</li>
            <li>or neither — typically unrestricted</li>
          </ul>
        </section>

        <section aria-labelledby="sara-title" className="space-y-4">
          <h3 id="sara-title" className="text-xl font-semibold text-white">
            Illustration with Wording Changes
          </h3>

          <div className="space-y-2">
            <p className="font-semibold text-gray-100">Restricted wording:</p>
            <p>
              “Sara’s only criteria for attending a university guest lecture are:
              both dark matter and black holes are discussed; and if stellar
              life cycles are covered, the Big Bang is also covered. Will Sara
              attend a lecture?”
            </p>
            <p>
              “Only” signals that those are the complete criteria—no hidden
              extras—so the group is restricted.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-100">Unrestricted wording:</p>
            <p>
              “Sara’s criteria for attending a university guest lecture include:
              both dark matter and black holes are discussed, and if stellar
              life cycles are covered, the Big Bang is also covered. Will Sara
              attend a lecture?”
            </p>
            <p>
              “Include” implies there could be additional must‑haves not listed,
              so we treat the group as open and account for those unknowns.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-100">Another unrestricted cue:</p>
            <p>
              “Jerome will hire a contractor to remodel his kitchen only if the
              cost is at most $25,000 and the work finishes within 3 weeks. He
              will hire Sure Thing, NewLook, or neither. Which will he hire?”
            </p>
            <p>
              The phrase “or neither” tells us the decision isn’t confined to
              those two companies—he might choose someone else or neither—so
              the group is not restricted.
            </p>
          </div>
        </section>

        <MustKnow>
          Not every question uses obvious keywords. Even without them, the stem
          will contain enough context to determine whether the group is open or
          closed. Read carefully and infer restriction from the setup.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which stem most clearly requires considering outside factors?"
          options={[
            "The museum will hire a guide from its internal staff who meets all training requirements.",
            "The city will select a vendor whose proposal includes on‑time delivery and a warranty, or neither.",
            "The professor will choose exactly two students from her lab to present at the conference.",
            "The committee’s only rule is that the budget must balance.",
            "The team must pick the MVP from among the five starters only.",
          ]}
          correct="The city will select a vendor whose proposal includes on‑time delivery and a warranty, or neither."
          solution={
            <>
              <p>
                “Or neither” signals the choice may fall outside any named
                options, which makes the group unrestricted. The other stems
                restrict the group via “from its internal staff,” “exactly,”
                “only,” or “from among the five starters only.”
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="DS Example: Unrestricted group because of wording"
          statements={[
            "Kumar wants a 5‑day trip to Mexico. His must‑haves include a price of at most " +
              " $" +
              "3,000 and a daily low of at least 75°F. His agent recommends two resorts: Gran Cielo and Sol y Mar. " +
              "Did Kumar more likely book Gran Cielo, Sol y Mar, or neither?",
            "(1) Gran Cielo costs $2,500 and is in a warmer location than Sol y Mar.",
            "(2) Sol y Mar is in a place with daily temperatures above 77°F and is more expensive than Gran Cielo.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                Requirements (written with math):
                <br />
                • price ≤{" "}
                <K expr="3000" ariaLabel="three thousand dollars" /> (
                <K expr="\le" ariaLabel="less than or equal to" /> $3,000)
                <br />
                • temperature ≥{" "}
                <K
                  expr="75^\circ\text{F}"
                  ariaLabel="seventy-five degrees Fahrenheit"
                />
              </p>

              <p>
                The stem says the must‑haves “include” those criteria and asks
                whether Kumar booked Gran Cielo, Sol y Mar, or “neither.”
                Together, “include” and “or neither” indicate an unrestricted
                group: there might be extra criteria, and he might prefer a
                different resort entirely.
              </p>

              <p>
                Statement (1): We learn Gran Cielo meets price (
                <K expr="2500" ariaLabel="two thousand five hundred dollars" />{" "}
                ≤ 3,000) and is warmer than Sol y Mar. We still don’t know if
                either resort meets the temperature threshold, nor whether other
                options satisfy Kumar’s complete (possibly larger) list. Not
                sufficient.
              </p>

              <p>
                Statement (2): We learn Sol y Mar meets temperature (
                <K
                  expr=">77^\circ\text{F}"
                  ariaLabel="greater than seventy-seven degrees Fahrenheit"
                />
                ) and is pricier than Gran Cielo, but we don’t know whether
                either is ≤ $3,000. Other resorts could also satisfy his needs.
                Not sufficient.
              </p>

              <p>
                Together (1) and (2): Gran Cielo satisfies both stated criteria
                (price and at least as warm as needed if we could confirm its
                temperature, which we still do not), while Sol y Mar definitely
                meets temperature and may or may not meet price. However, since
                the list of must‑haves may include additional requirements and
                “or neither” leaves the door open to other resorts, we still
                cannot conclude where he booked. Insufficient combined.
              </p>

              <p className="font-semibold text-gray-100">
                Answer: E (Even together, the information does not pin down a
                single outcome.)
              </p>
            </>
          }
        />

        <section aria-labelledby="wrapup-title" className="space-y-3">
          <h3 id="wrapup-title" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            Before you evaluate statements in criteria‑based DS, decide whether
            the setup closes the group. If the group is closed, ignore outside
            factors. If it’s open, incorporate additional possibilities—even if
            they aren’t named in the stem.
          </p>
        </section>
      </article>
    </main>
  );
}