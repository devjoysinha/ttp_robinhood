import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const InlineMath = dynamic(
  () => import("react-katex").then((mod) => mod.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "5.8.3 Paradox Trap Type 3: Choices That Intensify the Paradox | Critical Reasoning",
  description:
    "Learn to spot the classic trap in Resolve-the-Paradox questions: answers that heighten the contradiction instead of explaining it. Includes three worked multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8.3 Paradox Trap Type 3: Answers That Make the Situation More
          Paradoxical
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Resolve‑the‑Paradox questions, your job is to reconcile two
          seemingly incompatible facts. A frequent trap is an answer that
          strengthens the tension between the facts instead of easing it. Those
          options often sound relevant, but they push the conflict further in
          the wrong direction.
        </p>

        <MustKnow>
          Don’t pick a choice that increases the contradiction. The correct
          answer reduces the apparent clash; trap answers add more reasons the
          results should have gone the other way.
        </MustKnow>

        <p>
          How can such traps be tempting? They’re usually closely tied to the
          scenario, so they feel “on topic.” If you don’t check the effect of a
          choice, it’s easy to mistake a paradox‑intensifier for an
          explanation.
        </p>

        <p>Work through the examples below and focus on the net effect:</p>

        <MCQExample
          number={12}
          prompt="Five years ago, Rockport began requiring all cyclists to wear helmets. Since then, the annual number of cycling injuries in Rockport has gone up, not down. Which option best explains this outcome?"
          options={[
            "Wearing a helmet leads some cyclists to take greater risks than they otherwise would.",
            "Starting five years ago, all cars registered in Rockport have had to include advanced collision‑avoidance systems.",
            "Over the past five years, fewer Rockport residents have chosen to ride bikes.",
            "After the law, the city created more bike‑only lanes.",
            "A nearby town that enacted a similar helmet law saw cycling injuries fall.",
          ]}
          correct="Wearing a helmet leads some cyclists to take greater risks than they otherwise would."
          solution={
            <>
              <p>
                The result is surprising because helmets typically reduce
                injury. The correct choice must show how injuries could still
                rise. If helmets induce riskier riding, the increase in crashes
                could outweigh the protective benefit of the helmet—producing a
                net increase in injuries.
              </p>
              <p>
                The other options either predict fewer injuries (safer cars,
                more bike lanes), make the increase even harder to explain
                (fewer cyclists), or talk about another town’s results, which
                heightens the puzzle rather than resolving it.
              </p>
            </>
          }
        />

        <MCQExample
          number={13}
          prompt="To boost tax collections, Newland Falls cut the property tax on homes from 10% to 5% for the first three years after purchase. Since then, the homeownership rate has risen each year, but total city tax revenue has declined each year. Which statement best explains this?"
          options={[
            "Most homes sold each year are bought by existing homeowners who have already owned a home in the city for more than three years.",
            "The city spent a significant share of its property tax revenue on marketing campaigns to promote home purchases.",
            "For the past decade, residents of Newland Falls have earned nearly three times the income of residents in nearby cities.",
            "Across the past three years, the average age of city residents has increased.",
            "Sales‑tax revenue has risen each of the past three years.",
          ]}
          correct="Most homes sold each year are bought by existing homeowners who have already owned a home in the city for more than three years."
          solution={
            <>
              <p>
                The key is how the discount shifts what each property pays. When
                a home is sold, the new owner pays{" "}
                <InlineMath math={"5\\%"} /> for three years. If most buyers
                are current residents who had been paying the full{" "}
                <InlineMath math={"10\\%"} /> and they move into newly
                discounted homes, their individual contributions drop
                immediately. Meanwhile, the sold homes also move to the{" "}
                <InlineMath math={"5\\%"} /> rate under their new owners. That
                mix can drive total revenue down even as ownership rises.
              </p>
              <p>
                The other choices either don’t address the mechanism of the
                discount, are irrelevant to property taxes, or would tend to
                increase (not decrease) total tax revenue—thereby intensifying
                the paradox.
              </p>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="A Midwestern town had two hardware stores; one closed last year. Surprisingly, the remaining store’s sales then declined. Which option best accounts for the drop in sales?"
          options={[
            "The city invested in sprucing up the shopping district where the remaining store is located.",
            "The surviving hardware store is part of a national chain with weak ties to the local community.",
            "In a neighboring town, a department store eliminated its hardware section.",
            "After the competitor closed, the remaining store made no major changes to its marketing or inventory.",
            "The store that shut down had offered free DIY classes that encouraged people to start projects requiring hardware supplies.",
          ]}
          correct="The store that shut down had offered free DIY classes that encouraged people to start projects requiring hardware supplies."
          solution={
            <>
              <p>
                If the closed store had been creating category demand by
                teaching classes, its exit could shrink overall interest in DIY
                projects, reducing purchases at all hardware stores—especially
                the only one left.
              </p>
              <p>
                The other options either suggest sales should rise (less
                competition, nicer district), don’t explain a change (chain
                status, no operational changes), or make the decline even more
                puzzling.
              </p>
            </>
          }
        />

        <MustKnow>
          Litmus test: ask “Does this choice move the facts toward fitting
          together, or further apart?” If it pushes them apart, it’s a trap—even
          if it sounds connected to the story.
        </MustKnow>

        <p>
          Bottom line: resolution answers soften the conflict. Reject choices
          that amplify it.
        </p>
      </article>
    </main>
  );
}