import type { Metadata } from "next";
import Link from "next/link";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { MathBlock } from "@/components/ui/MathBlock";

export const metadata: Metadata = {
  title: "7.3 General Business Problems | Word Problems",
  description:
    "Translate everyday business situations into equations. Learn the core relationships for price per item, totals, per‑person costs, and profit/loss—with a quick unit‑price example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3 General business problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Business‑style word problems are really about translating everyday situations into
          simple equations. Common themes include unit price, total cost, how much each person
          pays when splitting an expense, and basic profit/loss calculations. We’ll kick things
          off with unit‑price problems.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-white">Core relationships you’ll use often:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Total cost equals quantity times unit price:
                <MathBlock
                  aria-label="Total cost equals quantity times price"
                  expression="C = q \times p"
                  display={false}
                />
              </li>
              <li>
                Per‑person share when splitting a bill:
                <MathBlock
                  aria-label="Per person cost equals total divided by number of people"
                  expression="\text{per person} = \dfrac{C}{n}"
                  display={false}
                />
              </li>
              <li>
                Profit and percent profit:
                <MathBlock
                  aria-label="Profit equals revenue minus cost"
                  expression="\text{profit} = \text{revenue} - \text{cost}"
                  display={false}
                />
                <MathBlock
                  aria-label="Percent profit equals profit over cost times 100 percent"
                  expression="\%\text{ profit} = \dfrac{\text{profit}}{\text{cost}} \times 100\%"
                  display={false}
                />
              </li>
            </ul>
            <p className="text-gray-300">
              Always define what each variable represents, and keep units consistent.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="A box contains 24 markers and costs $18. What is the price per marker?"
          options={["$0.60", "$0.65", "$0.70", "$0.75", "$1.25"]}
          correct="$0.75"
          solution={
            <>
              <p>
                Use the unit‑price relationship
                {" "}
                <span className="sr-only">per item equals total cost divided by quantity</span>
                <span aria-hidden="true" className="inline-block align-middle">
                  <MathBlock expression="\text{unit price} = \dfrac{C}{q}" display={false} />
                </span>
                . Here, C = 18 and q = 24, so
                {" "}
                <span aria-hidden="true" className="inline-block align-middle">
                  <MathBlock expression="\dfrac{18}{24} = 0.75" display={false} />
                </span>
                {" "}dollars per marker.
              </p>
              <p>Therefore, the price per marker is $0.75.</p>
            </>
          }
        />

        <p className="text-gray-300">
          Next up: we’ll apply these relationships to “price per item” scenarios in more detail.
          If you keep the formulas straight and track units carefully, these questions become
          straightforward arithmetic.
        </p>

        <nav aria-label="Lesson pagination" className="pt-2">
          <Link
            href="/lesson/518?chapter_id=508"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/60 rounded"
          >
            Continue to Price per item →
          </Link>
        </nav>
      </article>
    </main>
  );
}