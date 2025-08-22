import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "7.5.3 Inference: Answers Backed by Numerical Clues Across a Passage",
  description:
    "Learn how to infer correct answers from ratios, percentages, and averages spread across a passage. Includes five GMAT‑style multiple‑choice examples with clear solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5.3 Answers Supported by Numerical Information Distributed Throughout a Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common correct answer type in Inference questions is one that follows
          from how numbers in the passage interact—think ratios, weighted
          averages, and percentage changes. You rarely need heavy computation;
          you do need to track the logical consequences of the given quantities.
        </p>

        <MustKnow>
          The math that powers these inferences is usually positional and
          relational, not compute‑heavy:
          <ul className="list-disc pl-6">
            <li>Shifts in composition change ratios and averages.</li>
            <li>Weighted averages move toward the weight that increases.</li>
            <li>
              Opposing percentage moves in numerator and denominator can force a ratio to rise or fall.
            </li>
          </ul>
          Beware attractive statements that could be true; correct inferences must be guaranteed by the data given.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Aurora Chocolates has always used 2 ounces of cocoa in each bar. The company recently reduced the bar’s overall size and weight but kept the cocoa amount per bar at 2 ounces. Which conclusion must be true?"
          options={[
            "The amount of cocoa per bar decreased.",
            "The ratio of cocoa to all other ingredients per bar increased.",
            "The ratio of cocoa to all other ingredients per bar stayed the same.",
            "The price per bar increased.",
            "The sugar content per bar increased.",
          ]}
          correct="The ratio of cocoa to all other ingredients per bar increased."
          solution={
            <>
              <p>
                Let the original total weight be W ounces. Then the cocoa share was{" "}
                <InlineMath math={"\\tfrac{2}{W}"} />. After shrinking, let the new
                total be w with <InlineMath math={"w < W"} />, cocoa still 2 ounces,
                so the new share is <InlineMath math={"\\tfrac{2}{w}"} />.
              </p>
              <BlockMath math={"\\text{Since } w < W,\\; \\tfrac{2}{w} > \\tfrac{2}{W}."} />
              <p>
                Therefore, cocoa’s proportion increased. No pricing or sugar
                information is provided, so those cannot be concluded.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="JuicerCo sells two models: Model Z at a 33% gross margin and Model S at a 41% gross margin. Last year’s average gross margin across both models was higher than the year before. What must be true?"
          options={[
            "More Model S units were sold last year than the year before.",
            "Fewer Model Z units were sold last year than the year before.",
            "The ratio of Model S units to Model Z units was higher last year than the year before.",
            "Total gross margin dollars were higher last year.",
            "Total revenue increased last year.",
          ]}
          correct="The ratio of Model S units to Model Z units was higher last year than the year before."
          solution={
            <>
              <p>
                The overall margin is a weighted average of 33% and 41%. A weighted
                average increases only if weight shifts toward the larger component.
                Thus, the mix must have moved toward Model S.
              </p>
              <p>
                Concretely, if the share of Model S went up, the average moves
                toward <InlineMath math={"41\\%"} />. That does not force absolute
                unit counts or revenue to increase—only the mix. Hence, the ratio{" "}
                <InlineMath math={"\\tfrac{\\text{Model S}}{\\text{Model Z}}"} /> rose.
              </p>
            </>
          }
        />

        <MustKnow>
          Quick ratio/average facts you can lean on:
          <ul className="list-disc pl-6">
            <li>
              Weighted average: <InlineMath math={"\\bar{x} = \\tfrac{w_1x_1 + w_2x_2}{w_1 + w_2}"} />.
              Increase the weight on the larger value and the average increases.
            </li>
            <li>
              If a numerator increases by <InlineMath math={"+p\\%"} /> and the denominator decreases by{" "}
              <InlineMath math={"q\\%"} />, the ratio increases because{" "}
              <InlineMath math={"\\tfrac{(1+p)N}{(1-q)D} > \\tfrac{N}{D}"} /> for{" "}
              <InlineMath math={"p,q>0"} />.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={3}
          prompt="NutWorks sells two products: bagged walnuts in shells for $6 and bagged shelled walnuts for $11. Last year, it sold fewer in‑shell bags and more shelled bags than the year before. Which statement is guaranteed by the information?"
          options={[
            "Total revenue last year was higher than the year before.",
            "The average price per bag last year was higher than the year before.",
            "Competitors charged less for in‑shell walnuts last year.",
            "Most customers prefer shelled walnuts.",
            "Total number of bags sold was unchanged year‑over‑year.",
          ]}
          correct="The average price per bag last year was higher than the year before."
          solution={
            <>
              <p>
                Let x be the count of $6 bags and y the count of $11 bags. The
                average price is <InlineMath math={"\\tfrac{6x + 11y}{x+y}"} />.
                Moving to “fewer $6” and “more $11” shifts the weighted average away
                from 6 and toward 11, so the average price per bag must increase.
              </p>
              <p>
                We know nothing about total counts or total revenue magnitudes, so
                those cannot be fixed. Preferences and competitor pricing are not
                discussed.
              </p>
            </>
          }
        />

        <MCQExample
          number={4}
          prompt="During the first half of 2017, the number of tourists from Japan visiting Paris was 40.5% higher than during the first half of 2016. Over the same periods, tourists from the United Kingdom decreased by 1.7%. What must be true?"
          options={[
            "Combined (Japan + UK) tourist totals were higher in 2017.",
            "In 2017, more tourists came from Japan than from the UK.",
            "The ratio of Japanese tourists to UK tourists was higher in 2017 than in 2016.",
            "The share of all Paris tourists from Japan was higher in 2017.",
            "UK tourists spent less money in 2017.",
          ]}
          correct="The ratio of Japanese tourists to UK tourists was higher in 2017 than in 2016."
          solution={
            <>
              <p>
                Let <InlineMath math={"J_{16},\\,U_{16}"} /> be 2016 counts. Then{" "}
                <InlineMath math={"J_{17} = 1.405\\,J_{16}"} /> and{" "}
                <InlineMath math={"U_{17} = 0.983\\,U_{16}"} />.
              </p>
              <BlockMath math={"\\frac{J_{17}}{U_{17}} = \\frac{1.405\\,J_{16}}{0.983\\,U_{16}} = \\frac{1.405}{0.983}\\cdot\\frac{J_{16}}{U_{16}} > \\frac{J_{16}}{U_{16}}"} />
              <p>
                Thus, the Japan‑to‑UK ratio increased. Totals, absolute ordering,
                overall tourist shares, or spending are not determined by the
                premises.
              </p>
            </>
          }
        />

        <MCQExample
          number={5}
          prompt="Stride Shoes sells only shoes. Last year it sold more pairs online than in any previous year, and its average selling price per pair was also the highest ever. Yet, last year’s total sales revenue was the lowest in company history. Which inference must be true?"
          options={[
            "Company expenses hit a record high last year.",
            "Brick‑and‑mortar unit sales hit a record high last year.",
            "The firm’s market share declined over the last two years.",
            "Stride Shoes has at least one non‑online sales channel.",
            "The company stopped marketing aggressively last year.",
          ]}
          correct="Stride Shoes has at least one non‑online sales channel."
          solution={
            <>
              <p>
                Let online units be <InlineMath math={"Q_o"} /> and average price be{" "}
                <InlineMath math={"P"} />. If Stride sold shoes online only, record‑high{" "}
                <InlineMath math={"Q_o"} /> and record‑high <InlineMath math={"P"} /> would imply
                record‑high revenue <InlineMath math={"Q_o\\,P"} />. But revenue was at a record low.
              </p>
              <p>
                The only way to reconcile this is the existence of another channel
                whose revenue fell enough to outweigh the online gains. Thus, they
                do not sell exclusively online. Nothing about expenses, share, or
                marketing is implied.
              </p>
            </>
          }
        />

        <MCQExample
          number={6}
          prompt="In Bonanvia, for each of the last two years, 50% of oranges produced were consumed domestically and 50% were exported, either as whole fruit or as orange juice. Last year’s total orange production was 15% lower than the year before. Still, the quantity of orange juice exported last year was the same as the year before. What must be true?"
          options={[
            "Last year Bonanvia consumed less than half of the juice it produced.",
            "The average orange price in Bonanvia rose last year.",
            "Bonanvia exported fewer whole oranges last year than the year before.",
            "Exporting juice is more profitable than exporting whole fruit.",
            "Revenue from exported juice was unchanged year‑over‑year.",
          ]}
          correct="Bonanvia exported fewer whole oranges last year than the year before."
          solution={
            <>
              <p>
                Let total production be <InlineMath math={"T"} /> two years ago, so
                exports were <InlineMath math={"0.5T"} />. Last year, production was{" "}
                <InlineMath math={"0.85T"} />, so exports were{" "}
                <InlineMath math={"0.5\\times 0.85T = 0.425T"} />, i.e., smaller overall.
              </p>
              <p>
                Because exported juice volume was unchanged year‑over‑year while total
                exports fell, the shortfall must come from whole‑fruit exports. Hence,
                exported whole fruit decreased. No price or revenue conclusions are
                forced by the premises.
              </p>
            </>
          }
        />

        <MustKnow>
          Spot the traps:
          <ul className="list-disc pl-6">
            <li>
              “More of product A was sold” is not guaranteed when the correct logic
              is “the ratio of A to B increased.”
            </li>
            <li>
              Equal and opposite count changes are rarely given—avoid assuming
              magnitudes that weren’t specified.
            </li>
            <li>
              Revenue depends on both price and quantity: <InlineMath math={"R = P \\times Q"} />.
              Equal quantities do not imply equal revenue when prices can change.
            </li>
          </ul>
        </MustKnow>

        <p>
          Bottom line: track how weights, ratios, and percentage changes interact.
          When the math forces the center of gravity to shift, the corresponding
          inference is locked in—even without crunching exact numbers.
        </p>
      </article>
    </main>
  );
}