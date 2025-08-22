import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.3.5 Choosing a Salary Plan | General Word Problems",
  description:
    "Learn how to find the break-even point between pay plans by equating earnings formulas. Includes a tiered hourly-pay walkthrough and a quick multiple‑choice drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3.5 Which salary should I choose? / How much will I make?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many business and pay questions compare two ways to get compensated. To
          find when the options are equally good, set their total earnings
          expressions equal and solve for the driver (hours, sales, etc.). That
          value is the break‑even point; below it, one plan wins, and above it,
          the other does.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Break‑even happens when total pay from both plans is the same:
              set the two formulas equal and solve.
            </li>
            <li>
              If a plan has tiers (e.g., rates change after a threshold),
              write the correct expression for the relevant region.
            </li>
            <li>
              After solving, sanity‑check by plugging in values just below and
              above the break‑even point to see which plan pays more.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example: tiered hourly pay
          </h3>
          <p>
            Two summer jobs pay by the hour. Job A pays $10 per hour for the
            first 20 hours and $15 per hour for each additional hour. Job B pays
            $8 per hour for the first 16 hours and $18 per hour thereafter. For
            how many hours, <InlineMath math="T" /> , do the jobs pay the same?
          </p>

          <p>
            If we assume <InlineMath math="T \ge 20" /> (which will be true at
            the solution), the total pay is:
          </p>
          <BlockMath math={"10(20) + 15(T - 20) = 8(16) + 18(T - 16)"} />
          <BlockMath math={"200 + 15T - 300 = 128 + 18T - 288"} />
          <BlockMath math={"15T - 100 = 18T - 160"} />
          <BlockMath math={"60 = 3T \\quad \\Rightarrow \\quad T = 20"} />

          <p>
            So they match at 20 hours. A quick check: at 10 hours (below 20),
            Job A pays more; at 30 hours (above 20), Job B pays more.
          </p>
        </section>

        <MCQExample
          number={20}
          prompt="A salesperson can choose either a $100,000 flat annual salary or a plan that pays a $10,000 base plus 30% commission on her annual sales S. For what total sales S would she be indifferent between the two?"
          options={["$100,000", "$200,000", "$300,000", "$400,000", "$500,000"]}
          correct="$300,000"
          solution={
            <>
              <p>
                Let <InlineMath math="S" /> be the total yearly sales. Set the
                plans equal:
              </p>
              <BlockMath math={"100{,}000 = 10{,}000 + 0.30S"} />
              <BlockMath math={"90{,}000 = 0.30S \\quad \\Rightarrow \\quad S = 300{,}000"} />
              <p>
                At <InlineMath math="S = \\$300{,}000" />, both options pay the
                same. Below that, the flat salary wins; above that, the
                commission plan wins.
              </p>
            </>
          }
        />

        <section aria-labelledby="takeaways" className="space-y-3">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Translate words to algebra, then set the pay expressions equal to
              find the break‑even driver.
            </li>
            <li>
              For tiered rates, be sure your expression matches the interval
              implied by the solution.
            </li>
            <li>Test values around the break‑even to confirm which plan wins.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}