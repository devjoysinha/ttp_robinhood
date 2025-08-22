import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.9.3 No‑Other‑Path Assumptions | Critical Reasoning",
  description:
    "Master the GMAT CR assumption that blocks alternative paths to success. Learn the idea, see two worked multiple‑choice examples, and understand why the correct choice seals off other ways the plan could still work.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify The Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9.3 Correct Answer Type 3: Blocking All Other Paths to Success
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent pattern in Assumption questions is an argument that predicts a plan will fail or
          that a result will not occur. Authors usually cite some reason, but that reason alone isn’t
          enough—they’re also leaning on an unstated idea that no other route could still make the
          plan succeed or the outcome happen.
        </p>

        <MustKnow>
          When a conclusion says a plan won’t work or an outcome won’t happen, the author is
          implicitly assuming there isn’t an alternative way to achieve that same goal. In short:
          “No other path exists that would still lead to success.”
        </MustKnow>

        <p>
          Put differently, the author presumes the analysis is complete: all meaningful variables
          and workarounds have been accounted for. If any overlooked path could restore success,
          the conclusion collapses.
        </p>

        <MustKnow>
          Authors often assume they haven’t missed any factor that would undermine the conclusion.
          If an answer choice rules out a plausible workaround, it’s a strong candidate for the
          required assumption.
        </MustKnow>

        <MCQExample
          number={20}
          prompt="After years of complaints about aircraft noise, Mergate shut down its airport. Many local firms rely on tourist spending, and now air travelers must fly into Wave City and then drive more than 30 minutes to reach Mergate. Therefore, Mergate’s tourism businesses will no longer be able to compete with similar businesses in Wave City."
          options={[
            "Most companies in Mergate receive the majority of their revenue from tourists.",
            "Residents have not experienced a noticeable drop in noise since the airport closed.",
            "The quieter, improved atmosphere in Mergate won’t motivate tourists to make the extra trip from Wave City.",
            "Growth in industries not tied to tourism will not offset any loss in city tax revenue from tourism.",
            "No business in Mergate has benefited from the airport closure.",
          ]}
          correct="The quieter, improved atmosphere in Mergate won’t motivate tourists to make the extra trip from Wave City."
          solution={
            <>
              <p>
                Breakdown: The argument claims that closing the local airport removes a competitive
                advantage (direct flights), so Mergate’s tourism businesses will lose out to Wave
                City’s. To get from evidence to conclusion, the author must also assume there is no
                new, compensating reason for tourists to choose Mergate anyway.
              </p>
              <p>
                The correct choice states exactly that missing piece: even if Mergate is now calmer
                and more pleasant, that improvement won’t persuade tourists to endure the extra
                travel. If it would, the conclusion that Mergate can’t compete would be unfounded.
              </p>
              <p>
                Why the others fail:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  “Most companies rely on tourists” restates an idea we already have and doesn’t
                  bridge to the conclusion.
                </li>
                <li>
                  Noise reduction experienced by residents is irrelevant to whether tourists will still come.
                </li>
                <li>
                  City tax revenue is not the conclusion; competitiveness of tourism businesses is.
                </li>
                <li>
                  “No business benefited” is an extreme statement not needed for the conclusion.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={21}
          prompt="Diamond producers limit the number of stones released to create an impression of rarity. As more consumers can afford diamonds, demand is rising. Hence, as long as producers keep restricting supply, diamond prices will not fall substantially."
          options={[
            "Demand will grow so much that prices would hold steady even if supply were not restricted.",
            "Demand for other precious stones (e.g., rubies, emeralds) will not rise substantially.",
            "If large new diamond deposits were discovered, it wouldn’t become harder for producers to restrict supply.",
            "Laboratories won’t mass‑produce indistinguishable diamonds in quantities large enough to affect the market.",
            "Diamond prices depend on quality as well as on supply and demand.",
          ]}
          correct="Laboratories won’t mass‑produce indistinguishable diamonds in quantities large enough to affect the market."
          solution={
            <>
              <p>
                The conclusion ties stable or rising prices to two conditions: restricted supply and
                increasing demand. For that to hold, there must not be another source that could
                boost effective supply despite producers’ restrictions.
              </p>
              <p>
                The correct choice closes the key loophole: if lab‑grown, indistinguishable diamonds
                flood the market, overall supply effectively increases and prices could drop even if
                miners keep restricting their output.
              </p>
              <p>
                Why the others fail:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Speculating about prices if supply were not restricted addresses the wrong scenario.
                </li>
                <li>
                  Demand for non‑diamond gems can rise without changing the diamond demand story presented.
                </li>
                <li>
                  How difficult it would be to restrict supply is irrelevant; the conclusion assumes restriction continues.
                </li>
                <li>
                  Introducing “quality” as another price driver can weaken the argument; it’s not a necessary assumption.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          In “won’t happen/can’t happen” conclusions, the correct answer often excludes a backup route:
          it asserts that there is no alternative mechanism by which the plan could still succeed.
          Conceptually, it closes off “other paths to the goal.”
        </MustKnow>

        <p>
          Up next: another common pattern—assumptions that a proposed fix won’t recreate the same
          problem or a closely related one.
        </p>
      </article>
    </main>
  );
}