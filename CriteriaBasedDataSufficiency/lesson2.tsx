import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
// If your app doesn't already include KaTeX globally, add this in app/layout.tsx:
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "4.3 Deciding Whether to Consider Outside Factors | Criteria‑Based DS",
  description:
    "Learn how to tell when a criteria‑based Data Sufficiency scenario is restricted vs. unrestricted, which determines whether outside factors must be considered. Includes a worked DS example and key trigger words.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 Deciding Whether We Must Consider Outside Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In criteria‑based DS problems, the first checkpoint is simple: ask yourself
          whether the situation limits the choice to a specific group. That one call
          determines whether you have to account for outside possibilities.
        </p>

        <MustKnow>
          To decide if outside factors matter, ask:
          “Is the scenario restricted to a specific group?”
        </MustKnow>

        <p>
          Based on that question, here’s the rule of thumb:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            If the scenario is restricted to a particular group, you do not consider
            outside factors.
          </li>
          <li>
            If the scenario is not restricted, you must consider outside factors.
          </li>
        </ul>

        <p>
          Here, “group” is broad: it can be a set of objects, people, entities, or even
          the given criteria themselves.
        </p>

        <MustKnow>
          In criteria‑based DS, “group” can mean any collection in the scenario:
          items, people, companies, or the exact list of criteria. If the group is
          unrestricted, outside factors can change the outcome.
        </MustKnow>

        <section aria-labelledby="car-scenarios">
          <h3 id="car-scenarios" className="sr-only">
            Illustration: Restricted vs. Unrestricted
          </h3>
          <p className="mt-2">
            Consider two versions of a used‑car situation:
          </p>
          <p className="indent-4">
            Phil plans to buy a used car this weekend. His criteria are “price under $4,000”
            and “not green.” Will he buy his neighbor’s car?
          </p>
          <p>
            In this version, Phil could buy from anyone whose car matches the criteria.
            So even if his neighbor’s car qualifies, other cars might qualify too.
            This is an unrestricted group, and outside options matter.
          </p>
          <p className="indent-4">
            Now change the setup: Phil will buy a used car from his neighbor this weekend.
            The same criteria apply. Will he buy his neighbor’s car?
          </p>
          <p>
            Here, the “group” is restricted to one person—his neighbor. You don’t need to
            worry about other sellers. No outside factors.
          </p>
        </section>

        <MustKnow>
          Summary:
          - Restricted group → ignore outside factors.
          - Unrestricted group → consider outside factors.
        </MustKnow>

        <section aria-labelledby="keyword-signals">
          <h3 id="keyword-signals" className="sr-only">
            Keywords that signal restricted vs. unrestricted
          </h3>
          <p>
            Stems often hint at restriction with keywords. Common signals include:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>only — usually restricted</li>
            <li>exactly — usually restricted</li>
            <li>include — usually unrestricted</li>
            <li>or neither — usually unrestricted</li>
          </ul>
          <p>
            Example (restricted): “Sara’s only criteria for attending a lecture are …”
            “Only” or “exactly” tells you the list is complete, so ignore unstated criteria.
          </p>
          <p>
            Example (unrestricted): “Sara’s criteria include …”
            “Include” implies there could be additional requirements beyond the ones listed.
          </p>
          <p>
            Another unrestricted signal is “or neither,” as in:
            “Will Jerome hire Company A, Company B, or neither?” Since “neither” is possible,
            the decision isn’t confined to only those two companies, and other options or
            missing details may matter.
          </p>
        </section>

        <MustKnow>
          You won’t always see an explicit keyword. Even without one, the stem will contain
          enough context to decide whether the scenario is restricted. Read carefully and
          decide before you evaluate the statements.
        </MustKnow>

        <section aria-labelledby="ds-example">
          <h3 id="ds-example" className="sr-only">
            Data Sufficiency Example
          </h3>

          <ExampleCard
            number={46}
            title="Choosing a Resort (Criteria‑Based DS)"
            statements={[
              "Kumar wants a 5‑day trip to Mexico. His must‑haves include a price of at most " +
                " $3,000 and daytime temperatures of at least 75°F. His agent suggested two options: Gran Cielo and Sol y Mar. " +
                "Did he more likely book Gran Cielo, Sol y Mar, or neither?",
              "1) Gran Cielo costs $2,500 and is in a warmer location than Sol y Mar.",
              "2) Sol y Mar has daily temperatures above 77°F and is more expensive than Gran Cielo.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Translate the criteria succinctly:
                  <span className="ml-2">
                    <InlineMath math={"\\text{price} \\le \\$3{,}000"} />{" "}
                    and{" "}
                    <InlineMath math={"\\text{temperature} \\ge 75^{\\circ}\\mathrm{F}"} />.
                  </span>
                </p>
                <p>
                  The stem says Kumar’s must‑haves “include” these two. That suggests more
                  requirements could exist. It also asks whether he booked one of the two
                  resorts “or neither,” which signals an unrestricted scenario. So we must
                  consider the possibility of other resorts or additional criteria.
                </p>

                <p>
                  <strong>Statement (1):</strong> Gran Cielo costs $2,500 and is warmer than
                  Sol y Mar. We learn Gran Cielo meets the price cap, but we don’t know if
                  either resort meets the temperature threshold. Other qualifying resorts may
                  also exist, and Kumar may have more must‑haves. Not sufficient.
                </p>

                <p>
                  <strong>Statement (2):</strong> Sol y Mar clears the temperature floor and
                  is pricier than Gran Cielo. We still don’t know either resort’s exact price
                  relative to the $3,000 cap, nor whether other criteria matter. Not sufficient.
                </p>

                <p>
                  <strong>Together:</strong> Gran Cielo meets both listed criteria; Sol y Mar
                  meets the temperature requirement but may fail the price cap. It may be
                  tempting to pick Gran Cielo, but because the group is unrestricted
                  (“include,” “or neither”), Kumar could have additional must‑haves or may
                  choose a different resort that better satisfies all his requirements.
                  Still not sufficient.
                </p>

                <p>
                  Therefore, the statements do not determine a single outcome. Answer: E.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: decide restricted vs. unrestricted first. If the group is locked,
          focus only on the named options/criteria. If it’s open, build test cases that
          account for other possibilities and unstated requirements.
        </p>
      </article>
    </main>
  );
}