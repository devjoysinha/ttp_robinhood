import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.9.1 Strengtheners: Opposite Choices in Weaken Questions | Critical Reasoning",
  description:
    "Learn why tempting opposite answers often strengthen rather than weaken an argument. See two GMAT-style multiple‑choice drills with full reasoning and tips to avoid trap choices.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9.1 Strengtheners — Opposite Choices of the Correct Weaken Answer
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Weaken the Argument questions, your job is to pick the choice that
          softens the support for the conclusion. A common trap is an answer
          that actually bolsters the author&rsquo;s point. These &ldquo;opposite&rdquo;
          choices feel relevant and persuasive — which is exactly why they are
          so appealing under time pressure.
        </p>

        <p>
          For example, consider how these pairings play out:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Conclusion: A powerlifter&rsquo;s dramatic strength gains were driven by
            adding bananas to his daily routine.
            Opposite choice (strengthener): The only change to his routine last
            year was eating bananas every day. That detail links the change to
            the result — it supports, not weakens.
          </li>
          <li>
            Conclusion: A city would profit by offering tax breaks that spur
            productions of big theatrical shows.
            Opposite choice (strengthener): Visitors who attend such shows spend
            money before and after performances. Again, that makes the payoff
            more likely, so it strengthens.
          </li>
        </ul>

        <MustKnow>
          Opposite answers prop up the conclusion. When you&rsquo;re asked to weaken,
          reject choices that make the author&rsquo;s claim more plausible — even if
          they feel on-topic and realistic. Your goal is to reduce the link
          between the evidence and the conclusion, not to reinforce it.
        </MustKnow>

        <MCQExample
          number={25}
          prompt="After finding that few drivers wore seatbelts in Gloucester, the city passed a law allowing police to stop and ticket any driver observed without a seatbelt. Because drivers want to avoid fines, the law will cause nearly all drivers in Gloucester to buckle up. Which option most undermines this conclusion?"
          options={[
            "Auto insurers in Gloucester will double monthly premiums for drivers cited for not wearing seatbelts.",
            "Since the law passed, Gloucester police have added more officers assigned to traffic enforcement.",
            "A nearby town adopted a similar seatbelt law two years ago and saw a large rise in seatbelt use.",
            "Wearing a seatbelt significantly reduces the risk of injury or death in car crashes.",
            "Many vehicles in Gloucester have very dark window tints that prevent officers from seeing whether a driver is belted.",
          ]}
          correct="Many vehicles in Gloucester have very dark window tints that prevent officers from seeing whether a driver is belted."
          solution={
            <>
              <p>
                The conclusion rests on enforcement: if drivers fear tickets,
                they&rsquo;ll wear seatbelts. To weaken, show that enforcement is
                unlikely to work or be applied.
              </p>
              <p>
                Choices that increase the sting of a ticket (higher premiums) or
                the chance of being caught (more officers) make the argument
                stronger, not weaker. Evidence that seatbelts are safe is
                irrelevant to whether this specific law will change behavior.
                Similarly, success in another town doesn&rsquo;t guarantee success
                here.
              </p>
              <p>
                If officers cannot see into cars due to heavy tinting, they
                cannot reliably issue tickets. With little risk of receiving a
                citation, drivers have less reason to change behavior. That
                enforcement gap directly undercuts the author&rsquo;s prediction,
                so the correct answer is the window‑tint option.
              </p>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt="Last year, fantasy films hit record box-office revenue, while revenue from fantasy books fell markedly. So, the most likely reason for the drop in book sales is that would‑be readers chose to watch fantasy movies instead. Which option most calls this conclusion into question?"
          options={[
            "Film marketers, noting historically strong fantasy book sales, targeted likely fantasy book buyers with ads last year.",
            "Fans of the fantasy genre increasingly prefer the social experience of going to the movies versus reading.",
            "Many fantasy publishers and film studios draw on the same limited marketing budgets from shared investors.",
            "Libraries substantially expanded their collections of new fantasy titles in response to the popularity of fantasy movies.",
            "Low‑cost fantasy book exchanges did not experience higher trading volume last year.",
          ]}
          correct="Libraries substantially expanded their collections of new fantasy titles in response to the popularity of fantasy movies."
          solution={
            <>
              <p>
                The author assumes lower book revenue means fewer people read
                fantasy books. To weaken, show a plausible alternative in which
                revenue drops without a real decline in readership.
              </p>
              <p>
                If libraries greatly boosted their stock of new fantasy books,
                many readers could have borrowed instead of buying. That reduces
                sales dollars while leaving the number of readers the same (or
                even higher). This alternate explanation undermines the claim
                that people simply switched from books to movies.
              </p>
              <p>
                By contrast, options about ad targeting or a growing preference
                for movies reinforce the author&rsquo;s story. Shared, limited
                budgets for marketing don&rsquo;t by themselves show why revenue moved
                in opposite directions. And the lack of growth in book‑exchange
                activity removes one alternative but doesn&rsquo;t dispute the library
                explanation.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when weakening, don&rsquo;t be lured by relevant‑sounding
          statements that actually make the conclusion more convincing. Focus on
          disrupting the causal link, exposing a new obstacle, or offering a
          credible alternative explanation.
        </p>
      </article>
    </main>
  );
}