import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "16.2.1 Spotting When Order Matters | Combinations vs. Permutations",
  description:
    "Learn to decide quickly whether a counting problem is a combination (order doesn’t matter) or a permutation (order matters). Includes intuitive scenarios, paired examples, and a quick check question with reasoning.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  className?: string;
};

function Math({ expr, display = false, className }: MathProps) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
  });
  return (
    <span
      className={className}
      aria-label={expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.1 How to Recognize Combination Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a problem asks you to pick items from a larger pool, two questions
          should immediately come to mind:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Is this a combination or a permutation?</li>
          <li>Does the order of the chosen items matter?</li>
        </ul>

        <p>
          In short, use a combination whenever the arrangement is irrelevant, and use a
          permutation whenever the sequence or assignment makes a difference.
        </p>

        <MustKnow>
          Combinations ignore order; permutations care about order.
          In symbols:
          <span className="block mt-2">
            <Math expr="{}_nC_r=\dfrac{n!}{r!\,(n-r)!}" />
            <span className="mx-2" />
            <Math expr="{}_nP_r=\dfrac{n!}{(n-r)!}" />
          </span>
        </MustKnow>

        <section aria-labelledby="coffee-examples">
          <h3 id="coffee-examples" className="text-xl font-semibold text-white">
            Two Coffee Scenarios: Same items, different intent
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="font-semibold text-gray-100">
              Scenario A — order doesn’t matter
            </h4>
            <p className="mt-2">
              You have four coffee options: French roast, hazelnut, dark roast, and
              decaf. You’ll choose two different coffees to drink today. Whether you
              think “French then dark” or “dark then French,” your set of two coffees
              is the same. This is a combination.
            </p>
            <p className="mt-2">
              Count with:
              <span className="ml-2">
                <Math expr="{}_4C_2=\dfrac{4!}{2!\,2!}=6" />
              </span>
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="font-semibold text-gray-100">
              Scenario B — order does matter
            </h4>
            <p className="mt-2">
              Now you’ll choose which coffee to drink first and which to drink second.
              “Dark then French” is different from “French then Dark,” so order matters.
              This is a permutation.
            </p>
            <p className="mt-2">
              Count with:
              <span className="ml-2">
                <Math expr="{}_4P_2=\dfrac{4!}{(4-2)!}=12" />
              </span>
            </p>
          </div>

          <MCQExample
            number={201}
            prompt="From 4 coffee types, you pick 2 and decide which to drink first and second. Is this a combination or a permutation?"
            options={["Combination", "Permutation"]}
            correct="Permutation"
            solution={
              <>
                <p>
                  The first-versus-second distinction changes the outcome, so order
                  matters. That’s a permutation. The count is{" "}
                  <Math expr="{}_4P_2=12" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="deciding-rule">
          <h3 id="deciding-rule" className="text-xl font-semibold text-white">
            How to decide quickly
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              If swapping two selected items yields the same outcome, use{" "}
              <strong>combinations</strong>.
            </li>
            <li>
              If swapping two selected items changes the outcome (position, order,
              role, seat, etc.), use <strong>permutations</strong>.
            </li>
          </ul>
        </section>

        <section aria-labelledby="paired-examples">
          <h3 id="paired-examples" className="text-xl font-semibold text-white">
            Paired examples: one combination, one permutation
          </h3>

          <div className="space-y-6">
            {/* Pair 1 */}
            <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <h4 className="font-semibold text-gray-100">
                Pair 1 — sports cars
              </h4>
              <p className="mt-2">
                Choosing 3 to wax from 10 different cars: the set is all that matters,
                so it’s a combination. Choosing Mustang, Corvette, and Ferrari in any
                pick order yields the same trio.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {10}C_3" />.
              </p>
              <p className="mt-4">
                Lining up 3 of those cars in a row: placement matters, so it’s a
                permutation. “Mustang–Corvette–Ferrari” differs from
                “Corvette–Ferrari–Mustang.”
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {10}P_3" />.
              </p>
            </div>

            {/* Pair 2 */}
            <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <h4 className="font-semibold text-gray-100">
                Pair 2 — game show contestants
              </h4>
              <p className="mt-2">
                Selecting 4 contestants from 12: order of selection is irrelevant, so
                it’s a combination.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {12}C_4" />.
              </p>
              <p className="mt-4">
                Selecting 4 and arranging them in a photo line: the lineup order
                matters, so it’s a permutation.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {12}P_4" />.
              </p>
            </div>

            {/* Pair 3 */}
            <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <h4 className="font-semibold text-gray-100">Pair 3 — standby list</h4>
              <p className="mt-2">
                Picking 3 travelers from 8 on standby: the group is what matters, so
                combination.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {8}C_3" />.
              </p>
              <p className="mt-4">
                Assigning window, middle, and aisle to 3 people from that list: seats
                are distinct roles, so order matters — permutation.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {8}P_3" />.
              </p>
            </div>

            {/* Pair 4 */}
            <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <h4 className="font-semibold text-gray-100">Pair 4 — club roles</h4>
              <p className="mt-2">
                Forming a 3‑person finance committee from 12 members: who’s chosen is
                all that matters, so combination.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {12}C_3" />.
              </p>
              <p className="mt-4">
                Filling the offices of President, Secretary, and Treasurer from those
                12: titles are different, so order/assignment matters — permutation.
              </p>
              <p className="mt-2">
                Count with <Math expr="{}_ {12}P_3" />.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p>
            Focus on whether swapping two selected items produces a new outcome. If not,
            use combinations. If yes, use permutations.
          </p>
        </section>
      </article>
    </main>
  );
}