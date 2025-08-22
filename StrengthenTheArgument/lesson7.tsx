import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.7 Address Issues That Threaten the Conclusion | Strengthen the Argument",
  description:
    "Learn how to strengthen Critical Reasoning arguments by shoring up a vulnerable point in the reasoning. Includes an illustrative mini‑scenario plus two practice questions with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.7 Strengthen by Addressing a Vulnerability in the Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Arguments on Critical Reasoning prompts are intentionally imperfect.
          There’s almost always at least one meaningful concern that, if true,
          would undermine the conclusion. Strongen the argument by neutralizing
          that concern.
        </p>

        <MustKnow>
          GMAT CR arguments are rarely airtight. You can strengthen an argument
          by tackling a potential weak point—especially one that, if left
          unaddressed, could make the conclusion unreliable.
        </MustKnow>

        <p>
          Consider a quick illustration. Suppose the CEO of an electric‑vehicle
          company argues that EVs are cleaner than gasoline cars because EVs
          don’t produce tailpipe emissions. A major hidden risk here is the
          environmental impact of producing EVs, such as extracting metals for
          batteries with heavy machinery. If those upstream activities were as
          damaging—or more damaging—than lifetime emissions from gas vehicles,
          the CEO’s claim would be in trouble.
        </p>
        <p>
          A statement that strengthens the CEO’s case would directly address
          that risk, for example: “On average, the emissions from sourcing and
          manufacturing EV batteries are lower than the lifetime emissions from
          comparable gasoline vehicles.” By removing a plausible reason to doubt
          the claim, the argument becomes more convincing.
        </p>

        <MustKnow>
          To strengthen effectively, eliminate a plausible failure mode in the
          plan or a hidden assumption that the conclusion depends on. The closer
          your statement lands to the argument’s “pressure point,” the stronger
          the support.
        </MustKnow>

        <section aria-labelledby="mini-scenario" className="space-y-3">
          <h3 id="mini-scenario" className="text-xl font-semibold text-white">
            Mini‑Scenario: Plan With a Hidden Risk
          </h3>
          <p>
            Ocean Breeze Cruises plans to switch to PureFoam, a cleaning product
            that lacks the harmful ingredients found in the soap they currently
            use. Management believes this change will reduce the company’s
            negative environmental impact.
          </p>
          <p>
            What could confirm the plan? A good strengthener would address the
            possibility that the production of PureFoam itself harms the
            environment. For instance:
          </p>
          <p className="pl-4 text-gray-100">
            “Manufacturing PureFoam causes less environmental damage than
            manufacturing the soap Ocean Breeze currently uses.”
          </p>
          <p>
            This removes a potential deal‑breaker (a harmful production process)
            and increases confidence in the conclusion.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Birds often eat grapes before harvest, so Suncrest Vineyards will let trained dogs roam the fields to scare birds away. The team expects this low‑cost, bird‑safe approach to keep most grapes intact until harvest. Which option, if true, most supports the plan?"
          options={[
            "Many bird species near Suncrest do not prefer grapes.",
            "Bird‑blocking netting is costly and needs frequent replacement.",
            "If the dogs are mostly inactive, some birds may still feed in the vines.",
            "Dogs that patrol vineyards typically do not chew the vines or eat grapes.",
            "Most grape‑eating birds in the area migrate through only twice a year.",
          ]}
          correct="Dogs that patrol vineyards typically do not chew the vines or eat grapes."
          solution={
            <>
              <p>
                The vineyard’s conclusion is that letting dogs roam will keep
                grapes safe until harvest. A strong answer removes a realistic
                way the plan could backfire.
              </p>
              <p>
                Choice D confirms that dogs themselves won’t damage vines or eat
                grapes. That directly addresses a potential failure mode—dogs
                causing the very harm the plan is meant to prevent—so it
                supports the plan.
              </p>
              <p>
                Choice A is about birds that already don’t eat grapes, so it’s
                irrelevant to stopping birds that do. Choice B compares costs of
                a different method but doesn’t show that dogs will actually
                protect grapes. Choice C introduces a risk that would weaken the
                plan, not strengthen it. Choice E doesn’t guarantee that grapes
                will be protected when birds are present.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Roasted Coffee Co. (RCC) claims its field crews work in a more relaxed environment than similar companies’ crews. As evidence, RCC cites survey data showing its field workers report lower stress than peers at other coffee makers. Which statement best supports RCC’s claim?"
          options={[
            "RCC field crews work four to five fewer hours per week than peers.",
            "RCC’s profit margins exceed those of leading competitors.",
            "RCC pledges to consider field staff for future management roles.",
            "Field workers rated their stress levels using anonymous surveys.",
            "RCC field workers tend to leave the company sooner than peers at other firms.",
          ]}
          correct="Field workers rated their stress levels using anonymous surveys."
          solution={
            <>
              <p>
                The conclusion relies on survey statistics reflecting genuine
                worker experience. A strong support shows the data are trustworthy.
              </p>
              <p>
                Choice D indicates anonymity, which encourages honest responses,
                making the stress data more credible and the conclusion more
                persuasive.
              </p>
              <p>
                Choice A (hours) may correlate with stress but doesn’t validate
                the surveys themselves. Choice B (profits) is unrelated to work
                climate. Choice C (promotion policy) doesn’t speak to current
                stress. Choice E could even raise doubts about work conditions.
              </p>
            </>
          }
        />

        <p>
          Takeaway: strengthening isn’t about piling on facts—it’s about fixing
          the one or two issues that could sink the conclusion. If your choice
          neutralizes a realistic risk or validates a crucial assumption, it’s
          doing the right work.
        </p>
      </article>
    </main>
  );
}