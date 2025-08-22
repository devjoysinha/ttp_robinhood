import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  const Wrapper = display ? "div" : "span";
  return (
    <Wrapper
      role="math"
      aria-label={ariaLabel ?? "mathematical expression"}
      className={display ? "my-2" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "14.5.3 How Weightings Shape a Weighted Average | Statistics",
  description:
    "See how different weights pull a weighted average toward one value or the other. Walk through quick numeric examples, a percent‑weighted scenario, and two practice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">14.5.3 How the Weightings Affect the Weighted Average</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Previously, we bounded a weighted average by looking at the extreme cases that minimize and
          maximize the result. In this lesson, we’ll push that idea further and decide where a weighted
          average must land—often without crunching many numbers.
        </p>

        <p>
          Recall the definition of a weighted average. If values v_i carry weights w_i, then:
        </p>
        <Math
          display
          ariaLabel="weighted average formula"
          expr="\\text{Weighted Average} = \\frac{\\sum_i w_i\\,v_i}{\\sum_i w_i}"
        />

        <p>
          The bigger a weight, the more the final average is “pulled” toward that value. Equal weights
          split the difference exactly in the middle.
        </p>

        <section aria-labelledby="age-mixture-heading" className="space-y-4">
          <h3 id="age-mixture-heading" className="text-xl font-semibold text-white">
            A quick trio: children vs. adults
          </h3>
          <p>
            Suppose every child is 10 years old and every adult is 30. We’ll compute the average age in
            three group compositions.
          </p>

          <div className="rounded-md border border-gray-700 p-4">
            <h4 className="font-semibold text-white">i) 20 children and 20 adults</h4>
            <Math display expr="\\frac{20\\cdot 10 + 20\\cdot 30}{20 + 20} = \\frac{200 + 600}{40} = 20" />
            <p className="text-gray-300">
              With equal counts, the result sits exactly halfway between 10 and 30: the average is 20.
            </p>
          </div>

          <div className="rounded-md border border-gray-700 p-4">
            <h4 className="font-semibold text-white">ii) 25 children and 20 adults</h4>
            <Math display expr="\\frac{25\\cdot 10 + 20\\cdot 30}{25 + 20} = \\frac{250 + 600}{45} = \\frac{850}{45} \\approx 18.9" />
            <p className="text-gray-300">
              More children than adults pulls the average closer to 10 than to 30, here about 18.9.
            </p>
          </div>

          <div className="rounded-md border border-gray-700 p-4">
            <h4 className="font-semibold text-white">iii) 15 children and 20 adults</h4>
            <Math display expr="\\frac{15\\cdot 10 + 20\\cdot 30}{15 + 20} = \\frac{150 + 600}{35} = \\frac{750}{35} \\approx 21.4" />
            <p className="text-gray-300">
              More adults than children shifts the average toward 30; here it’s about 21.4.
            </p>
          </div>
        </section>

        <MustKnow>
          <div className="space-y-2">
            <p>
              Combine two groups with averages x and y:
            </p>
            <ul className="list-inside list-disc">
              <li>Equal counts → the combined average is the simple mean: (x + y) / 2.</li>
              <li>More of group X → the result sits closer to x than to y.</li>
              <li>More of group Y → the result sits closer to y than to x.</li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={29}
          prompt="Monica has 31 type P batteries and 25 type Q batteries. Type P weighs 35 g each, and type Q weighs 55 g each. What is the approximate average weight of her batteries?"
          options={["35 grams", "43.9 grams", "45 grams", "46.1 grams", "55 grams"]}
          correct="43.9 grams"
          solution={
            <>
              <p>
                The average must lie between 35 and 55. It can equal 35 or 55 only if all batteries are
                of a single type—neither is the case here, so eliminate 35 and 55. The midpoint 45 occurs
                only with equal counts, which we don’t have, so remove 45 as well. Because there are more
                P’s (35 g) than Q’s (55 g), the combined average must be closer to 35 than to 55; of the
                remaining answers, 43.9 fits.
              </p>
              <p className="mt-2">Check by computation:</p>
              <Math
                display
                ariaLabel="battery weighted average computation"
                expr="\\frac{31\\cdot 35 + 25\\cdot 55}{31 + 25} = \\frac{1085 + 1375}{56} = \\frac{2460}{56} \\approx 43.9"
              />
              <p>The correct choice is 43.9 grams.</p>
            </>
          }
        />

        <section aria-labelledby="percents-heading" className="space-y-4">
          <h3 id="percents-heading" className="text-xl font-semibold text-white">
            Weighted averages with percentages
          </h3>
          <p>
            All of the logic above applies when weights are given as percents. For example, if a course
            grade is 20% midterm and 80% final, the course average is much closer to the final score than
            to the midterm, and it must lie between the two exam scores.
          </p>

          <MustKnow>
            The same approach you use with numeric weights works with percentage weights: multiply each
            value by its percentage and divide by the total percentage (100%).
          </MustKnow>
        </section>

        <MCQExample
          number={30}
          prompt={
            "Jabari’s car gets 26 mpg in the city and 38 mpg on the highway. On a trip, the car used some gas in the city and a larger amount on the highway. Which could be the trip’s average fuel efficiency?"
          }
          options={["None", "I only", "II only", "I and II", "II and III"]}
          note="I. 32   II. 35   III. 38"
          correct="II only"
          solution={
            <>
              <p>
                If equal gasoline were used in both settings, the average would be the midpoint:
              </p>
              <Math display expr="\\frac{26 + 38}{2} = 32" />
              <p>
                But more fuel was used on the highway, so the average must be closer to 38 than to 26;
                therefore 32 is not possible (eliminate I).
              </p>
              <p>
                Because at least some gas was used in the city, the average cannot be 38 (that would
                require 100% highway). So III is out.
              </p>
              <p>
                A value like 35 is closer to 38 than to 26 and is achievable when highway use dominates.
                Hence, II only.
              </p>
            </>
          }
        />

        <ExampleCard
          number={31}
          title="Is Team Q's average age greater than 34?"
          statements={[
            "The average age in group A is 18; in group B it is 50. No one is in both groups. Team Q is formed by combining A and B. Is Team Q’s average age greater than 34?",
            "1) At least 41% of Team Q are from group A.",
            "2) Fewer than 41% of Team Q are from group B.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                With equal headcounts, the combined average is the midpoint:
              </p>
              <Math display expr="\\frac{18 + 50}{2} = 34" />
              <p>
                Thus, the average exceeds 34 exactly when Team Q has more people from group B than from
                group A.
              </p>
              <p>
                Statement (1): “At least 41% from A” allows both possibilities. For instance, A = 45%, B = 55%
                → more B (YES, average > 34); or A = 80%, B = 20% → more A (NO, average ≤ 34). Not sufficient.
              </p>
              <p>
                Statement (2): “Less than 41% from B” means more than 59% from A, so A outnumbers B and the
                average is below 34. We can answer decisively (NO). Sufficient.
              </p>
              <p>Therefore, statement (2) alone suffices. Answer: B.</p>
            </>
          }
        />

        <p>
          Takeaway: a weighted average always lies between the values being combined and is drawn toward
          the value with the larger weight. Use that pull to reason about answers quickly before computing.
        </p>
      </article>
    </main>
  );
}