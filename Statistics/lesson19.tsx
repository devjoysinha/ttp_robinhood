import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.5.2 Ranges of Weighted Averages | Statistics",
  description:
    "Learn how to bound a weighted average when the exact weights are unknown. Includes quick multiple‑choice drills and data sufficiency examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.5.2 Ranges of Weighted Averages
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a group average is formed from different subgroups, the exact
          weighted average generally requires knowing each subgroup’s size. If
          those weights are unknown, you can still trap the overall average
          between a minimum and a maximum by pushing the situation to its
          extremes.
        </p>

        <p>
          For instance, suppose a theater charges $8 per veteran and $11 per
          non‑veteran. If a party of 15 enters, the per‑person average depends
          on how many veterans are in the group. Even without that breakdown, we
          can bound the average:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>All 15 are veterans → average is $8 (minimum).</li>
          <li>All 15 are non‑veterans → average is $11 (maximum).</li>
        </ul>
        <p>
          Therefore, the group’s per‑person average lies in the inclusive
          interval [$8, $11].
        </p>

        <MustKnow>
          To bound a weighted average when weights are unknown, place all weight
          on the smallest value to minimize the average and on the largest value
          to maximize it. The overall average must lie between those two
          extremes.
        </MustKnow>

        <section aria-labelledby="formula" className="space-y-3">
          <h3 id="formula" className="text-lg font-semibold text-gray-200">
            A quick formula view
          </h3>
          <p className="text-gray-300">
            In general,
          </p>
          <BlockMath math="\text{Weighted average}=\dfrac{\sum (\text{value}\times \text{weight})}{\sum \text{weights}}" />
          <p>
            When the weights can vary but the values are bounded, the overall
            average can’t go below the smallest value or above the largest
            value.
          </p>
        </section>

        <MCQExample
          number={25}
          prompt="Ayal will invite 9 guests to a party. Every potential guest is between 53 and 62 inches tall, inclusive. Which of the following could be the average height of the invited guests?"
          options={[
            "I only",
            "II only",
            "I and II",
            "II and III",
            "I, II and III",
          ]}
          correct="II and III"
          // I: 51.9   II: 54   III: 61.9
          solution={
            <>
              <p>
                If each invited guest must be between 53 and 62 inches,
                inclusive, then the average of the 9 heights must also lie in
                [53, 62]. Thus:
              </p>
              <ul className="list-inside list-disc">
                <li>I: 51.9 is below 53 → impossible.</li>
                <li>II: 54 is within [53, 62] → possible.</li>
                <li>III: 61.9 is within [53, 62] → possible.</li>
              </ul>
              <p>Therefore, II and III.</p>
            </>
          }
        />

        <ExampleCard
          number={26}
          title="How many dolls were sold?"
          statements={[
            "A store sells only dolls and teddy bears. Each doll costs $d and each teddy bear costs $b. Yesterday, 120 toys were sold at an average price of $7. How many dolls were sold?",
            "1) A doll costs $3 more than a teddy bear.",
            "2) Either d = 5 or b = 5.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let x be the number of dolls. Then bears sold is 120 − x. Using
                weighted average:
              </p>
              <BlockMath math="7=\dfrac{dx + b(120-x)}{120}" />
              <BlockMath math="840 = dx + 120b - bx" />
              <p>
                We want x. Check statements for sufficiency:
              </p>
              <p>
                <strong>Statement (1):</strong> d = b + 3. Substitute into
                840 = dx + 120b − bx:
              </p>
              <BlockMath math="840 = (b+3)x + 120b - bx = 3x + 120b" />
              <p>
                Two unknowns remain (x and b) → can’t solve uniquely. Not
                sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Either d = 5 or b = 5. Try each
                case in 840 = dx + 120b − bx:
              </p>
              <ul className="list-inside list-disc">
                <li>d = 5 → 840 = 5x + 120b − bx (still two unknowns).</li>
                <li>b = 5 → 840 = dx + 600 − 5x (still two unknowns).</li>
              </ul>
              <p>Not sufficient.</p>
              <p>
                <strong>Together:</strong> From (1) d = b + 3 and from (2) either d = 5 or b = 5.
              </p>
              <ul className="list-inside list-disc">
                <li>
                  If d = 5, then b = 2. But then the overall average must lie in
                  [2, 5], which can’t be 7 → impossible.
                </li>
                <li>
                  If b = 5, then d = 8. Substitute into 840 = dx + 120b − bx:
                </li>
              </ul>
              <BlockMath math="840 = 8x + 600 - 5x \;\Rightarrow\; 240 = 3x \;\Rightarrow\; x=80" />
              <p>Unique result, so together sufficient. Answer: C.</p>
            </>
          }
        />

        <section aria-labelledby="percents" className="space-y-3">
          <h3 id="percents" className="text-lg font-semibold text-gray-200">
            A note about percentages
          </h3>
          <p>
            The same “push to extremes” idea works for percentages, with an
            important caveat: if the problem implies each subgroup actually
            exists (non‑zero size), then the overall percentage cannot equal an
            endpoint, because an endpoint would force one subgroup to have size
            zero.
          </p>
          <MustKnow>
            For weighted averages of percentages when every subgroup is
            non‑empty, the possible overall percentages lie strictly between the
            smallest and largest subgroup percentages (endpoints excluded).
          </MustKnow>
        </section>

        <MCQExample
          number={27}
          prompt="At a company, employees are either part‑time, full‑time, or management. If 20% of part‑time staff are vegans, 10% of full‑time staff are vegans, and 40% of managers are vegans, which of the following could be the percentage of all employees who are vegans?"
          options={[
            "I only",
            "II only",
            "I and II",
            "II and III",
            "I, II and III",
          ]}
          correct="II only"
          // I: 5   II: 24   III: 40
          solution={
            <>
              <p>
                The overall vegan rate must lie strictly between the smallest
                subgroup rate (10%) and the largest subgroup rate (40%) if all
                three subgroups are non‑empty. Therefore:
              </p>
              <ul className="list-inside list-disc">
                <li>I: 5% <span className="text-gray-400">(below 10%)</span> → impossible.</li>
                <li>II: 24% <span className="text-gray-400">(between 10% and 40%)</span> → possible.</li>
                <li>III: 40% <span className="text-gray-400">(endpoint)</span> → impossible when all groups exist.</li>
              </ul>
              <p>Only II works.</p>
            </>
          }
        />

        <ExampleCard
          number={28}
          title="Do more than 15% use laptops?"
          statements={[
            "In a group containing freshmen and sophomores, do more than 15% of the students use laptops?",
            "1) 15% of the sophomores in the group use laptops.",
            "2) 10% of the freshmen in the group use laptops.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                <strong>Statement (1):</strong> Knowing sophomores are at 15%
                doesn’t determine the overall rate, because it depends on the
                freshmen rate and the group mix. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Knowing freshmen are at 10%
                alone doesn’t determine the overall rate. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> With freshmen at 10% and sophomores
                at 15%, the overall percentage must be strictly between 10% and
                15% (assuming both groups exist). Therefore, the overall rate
                cannot exceed 15%. The answer to the question “Is it more than
                15%?” is No. Together sufficient. Answer: C.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap" className="space-y-2">
          <h3 id="wrap" className="text-lg font-semibold text-gray-200">
            Key takeaway
          </h3>
          <p>
            You can often answer questions about what a weighted average could
            be without computing it exactly: anchor the weights at the extremes
            to find the range. For percentage problems with all subgroups
            present, that range is an open interval between the smallest and
            largest subgroup percentages.
          </p>
        </section>
      </article>
    </main>
  );
}