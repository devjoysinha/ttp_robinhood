import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "1.12 Logical Implications in Critical Reasoning | Verbal",
  description:
    "Learn how to read cause-and-effect and if–then claims in Critical Reasoning. Practice turning statements into logical implications with 8 quick drills and 2 worked examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.12 See the Logical Implications of Statements
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strong Critical Reasoning relies on translating claims into what they
          reasonably imply. Whenever the facts change, ask what should follow if
          everything else stays the same.
        </p>

        <MustKnow>
          A logical implication is the natural consequence of a set of facts.
          If a statement is true, what outcome would you expect to see—absent
          other changes?
        </MustKnow>

        <p>
          It often helps to frame implications with if–then language, which we
          can write as <InlineMath math={"X \\Rightarrow Y"} />. Read this as:
          “If X holds, then we should expect Y.”
        </p>

        <MustKnow>
          You can usually express an implication with an if–then: “If X is true,
          then Y should be true (or more likely), all else equal.”
        </MustKnow>

        <p>Quick everyday examples of implications:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            If service quality at a restaurant improves, complaints should drop.
          </li>
          <li>
            If a store becomes easier to reach, traffic to the store should go
            up.
          </li>
          <li>
            If gasoline prices rise, demand should shift toward more
            fuel‑efficient cars and away from gas guzzlers.
          </li>
          <li>
            If people can produce an item more efficiently, output per hour
            should increase.
          </li>
          <li>
            If a city owns more vehicles, its maintenance costs should rise.
          </li>
        </ul>

        <MustKnow>
          On test day, lean on sensible, real‑world cause‑and‑effect. Your job
          is to identify what should reasonably happen given the facts.
        </MustKnow>

        <section aria-labelledby="targeted-practice">
          <h3 id="targeted-practice" className="mt-8 text-xl font-semibold text-white">
            Targeted Practice: What follows logically?
          </h3>
          <p className="text-gray-300">
            For each question, select what most reasonably follows from the
            scenario.
          </p>

          <div className="mt-6 space-y-8">
            <MCQExample
              number={1}
              prompt="Country X sources sugar from two cane farms. A hurricane destroys one farm, causing a 50% drop in monthly sugar output. What should happen to price?"
              options={[
                "Sugar prices will rise.",
                "Sugar prices will fall.",
                "No change in sugar prices.",
              ]}
              correct="Sugar prices will rise."
              solution={
                <>
                  <p>
                    Supply falls sharply. By basic supply–demand, lower supply
                    puts upward pressure on price. So price should increase.
                  </p>
                </>
              }
            />

            <MCQExample
              number={2}
              prompt="Water‑pipe construction removes many parking spots near Restaurant R. What happens to the number of diners?"
              options={[
                "More people will dine there.",
                "Fewer people will dine there.",
                "No change in diners.",
              ]}
              correct="Fewer people will dine there."
              solution={
                <>
                  <p>
                    Harder access reduces convenience, so attendance should
                    decrease, all else equal.
                  </p>
                </>
              }
            />

            <MCQExample
              number={3}
              prompt="Munsford Inc. sells paint to homebuilders. Those builders report fewer new‑home orders. What happens to Munsford’s monthly paint sales?"
              options={[
                "Sales will increase.",
                "Sales will decrease.",
                "The information is insufficient.",
              ]}
              correct="Sales will decrease."
              solution={
                <>
                  <p>
                    Fewer new homes means less painting needed, so paint orders
                    should drop.
                  </p>
                </>
              }
            />

            <MCQExample
              number={4}
              prompt="A hotel starts offering rooms at 20% off. What should happen to the hotel’s daily revenue?"
              options={[
                "Daily revenue will increase.",
                "Daily revenue will decrease.",
                "The direction is unclear from the information.",
              ]}
              correct="The direction is unclear from the information."
              solution={
                <>
                  <p>
                    Discounts boost bookings but cut price per room. Without
                    knowing which effect dominates, net revenue direction is
                    indeterminate.
                  </p>
                </>
              }
            />

            <MCQExample
              number={5}
              prompt="In City C, electricity prices drop 15% while gasoline prices rise 10%. What happens to sales of fully electric vehicles?"
              options={[
                "They will increase.",
                "They will decrease.",
                "We can’t tell from the information.",
              ]}
              correct="They will increase."
              solution={
                <>
                  <p>
                    EVs become cheaper to operate while gas cars become more
                    expensive to fuel. Demand should shift toward EVs.
                  </p>
                </>
              }
            />

            <MCQExample
              number={6}
              prompt="A coffee shop’s supplier runs out of its usual beans, so the shop sells a different‑tasting coffee. What happens to coffee sales?"
              options={[
                "Sales will increase.",
                "Sales will decrease.",
                "The effect on sales isn’t clearly indicated.",
              ]}
              correct="The effect on sales isn’t clearly indicated."
              solution={
                <>
                  <p>
                    “Different” could mean better, worse, or about the same to
                    customers. The direction can’t be pinned down.
                  </p>
                </>
              }
            />

            <MCQExample
              number={7}
              prompt="Oak Hills hired consultants to cut air pollution by (i) restricting cars, (ii) adding bike paths, and (iii) improving transit. The city only added bike paths. What happens to pollution levels, assuming nothing else changes?"
              options={[
                "Pollution will increase.",
                "Pollution will decrease.",
                "Pollution will stay the same.",
              ]}
              correct="Pollution will decrease."
              solution={
                <>
                  <p>
                    Each recommended action reduces pollution. Even adopting one
                    should move levels downward, albeit less than doing all
                    three.
                  </p>
                </>
              }
            />

            <MCQExample
              number={8}
              prompt="For five straight years in a certain country, surveys show 70% prefer high‑speed rail for long trips and 30% prefer driving. What should happen to the share who take high‑speed rail?"
              options={[
                "The percentage will increase.",
                "The percentage will decrease.",
                "The percentage will remain about the same.",
              ]}
              correct="The percentage will remain about the same."
              solution={
                <>
                  <p>
                    The preference split has been stable for years. With no
                    change described, the share using rail should remain roughly
                    steady.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <section aria-labelledby="worked-examples">
          <h3 id="worked-examples" className="mt-10 text-xl font-semibold text-white">
            Worked Examples
          </h3>

          <MCQExample
            number={9}
            prompt="In the United States, the number of automobiles rose substantially from 1920 to 1930, and demand for gasoline rose as well. Yet during the same period, the price of crude oil (the input for gasoline) fell sharply. Which statement best helps explain the price drop?"
            options={[
              "Average fuel burned per mile by cars in 1930 was about the same as in 1920.",
              "New U.S. oil field discoveries between 1920 and 1930 more than doubled crude oil production.",
              "U.S. oil producers exported far more crude oil in 1930 than in 1920.",
              "The number of U.S. refineries capable of producing gasoline rose substantially from 1920 to 1930.",
              "Large oil companies produced each barrel more cheaply than small companies during that period.",
            ]}
            correct="New U.S. oil field discoveries between 1920 and 1930 more than doubled crude oil production."
            solution={
              <>
                <p>
                  Demand for gasoline rose, which alone would push oil prices up.
                  A large increase in oil supply, however, would push prices down.
                  A production surge of 100%+ can outweigh demand growth and drive
                  prices lower. That resolves the paradox.
                </p>
              </>
            }
          />

          <MCQExample
            number={10}
            prompt="Wildwood High School will switch to a math‑teaching approach shown to be much more effective than its current method. Therefore, Wildwood students’ math performance will improve. Which option most strengthens the argument?"
            options={[
              "Wildwood’s teachers have used the current method for over five years.",
              "Teachers won’t change their approaches to reading or science.",
              "Most Wildwood students attend nearly all of their math classes.",
              "Historically, Wildwood’s math results have exceeded the national average.",
              "For some students, homework matters more than classroom learning for math results.",
            ]}
            correct="Most Wildwood students attend nearly all of their math classes."
            solution={
              <>
                <p>
                  The new method works better, but only helps if students are
                  actually exposed to it. High attendance makes it more likely the
                  new method will reach students and improve outcomes.
                </p>
              </>
            }
          />
        </section>

        <p className="mt-6">
          Bottom line: think positionally about cause and effect. Translate a
          claim into its expected consequence—often as{" "}
          <InlineMath math={"X \\Rightarrow Y"} />—and check whether any new
          facts might block or amplify that link.
        </p>
      </article>
    </main>
  );
}