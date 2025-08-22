import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: ensure KaTeX styles are included once globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "7.12.3 Solve for Unknowns in Mixture Problems | Word Problems",
  description:
    "Learn how to express one quantity in terms of others in mixture problems by equating the total amount of the ‘pure’ ingredient. Includes two worked multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.12.3 Solving for Unknown Variables in Mixture Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some mixture questions don’t pin down a single numeric answer. In those
          cases, your job is to write one variable in terms of the others. The
          reliable method is to track the amount of the “pure” ingredient coming
          from each part and from the final blend, then set those totals equal.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              To express one unknown in terms of the others in a mixture:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Compute the pure amount from each component. For a percentage
                mixture, that’s
                {" "}
                <InlineMath math="\text{(percent as decimal)}\times\text{(amount)}" />
                .
              </li>
              <li>
                Compute the pure amount in the final blend (its concentration
                times total volume/weight).
              </li>
              <li>
                Set “sum of pure from parts = pure in blend” and solve for the
                requested variable.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="antifreeze-example" className="space-y-3">
          <h3 id="antifreeze-example" className="text-xl font-semibold text-white">
            Quick Demo: Two‑solution mix
          </h3>
          <p>
            Suppose we mix x quarts of a 45% antifreeze solution with y quarts of a
            30% solution to produce a 35% solution. Find x in terms of y.
          </p>
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <BlockMath math={"0.45x + 0.30y = 0.35(x + y)"} />
            <BlockMath math={"45x + 30y = 35x + 35y"} />
            <BlockMath math={"10x = 5y"} />
            <BlockMath math={"x = 0.5\\,y"} />
          </div>
          <p>
            The setup is nothing more than “pure in” equals “pure out.”
          </p>
        </section>

        <MCQExample
          number={59}
          prompt={
            <>
              Three apple‑juice solutions a, b, and c are 50%, 70%, and 90% juice
              by volume, respectively. If we mix a liters of the 50% solution,
              b liters of the 70% solution, and c liters of the 90% solution to make
              a + b + c liters at 75% juice, what is b in terms of a and c?
            </>
          }
          options={[
            "3c + 5a",
            "3c − 5a",
            "5a − 3c",
            "c − 5a",
            "5c − 3a",
          ]}
          correct="3c − 5a"
          solution={
            <>
              <p>
                Track the pure juice. Sum from parts must equal pure in the blend:
              </p>
              <BlockMath math={"0.50a + 0.70b + 0.90c = 0.75(a + b + c)"} />
              <p>Clear decimals (multiply by 100):</p>
              <BlockMath math={"50a + 70b + 90c = 75a + 75b + 75c"} />
              <p>Rearrange and solve for b:</p>
              <BlockMath math={"90c - 75c = 75a - 50a + 75b - 70b"} />
              <BlockMath math={"15c = 25a + 5b"} />
              <BlockMath math={"b = 3c - 5a"} />
              <p>So the correct expression is 3c − 5a.</p>
            </>
          }
        />

        <MCQExample
          number={60}
          prompt={
            <>
              Three metal mixtures contain 3%, 5%, and 12% aluminum by weight. If
              x pounds of the 3% mixture, y pounds of the 5% mixture, and z pounds
              of the 12% mixture are combined to form a mixture that is 8% aluminum,
              what is y in terms of x and z?
            </>
          }
          options={[
            "(4z − 5x)/3",
            "4z − 5x",
            "(7z − 5x)/3",
            "(5z − 4x)/3",
            "(4z + 5x)/3",
          ]}
          correct="(4z − 5x)/3"
          solution={
            <>
              <p>Equate pure aluminum:</p>
              <BlockMath math={"0.03x + 0.05y + 0.12z = 0.08(x + y + z)"} />
              <p>Clear decimals (multiply by 100):</p>
              <BlockMath math={"3x + 5y + 12z = 8x + 8y + 8z"} />
              <p>Group terms:</p>
              <BlockMath math={"4z = 5x + 3y"} />
              <BlockMath math={"3y = 4z - 5x"} />
              <BlockMath math={"y = \\dfrac{4z - 5x}{3}"} />
              <p>Thus y = (4z − 5x)/3.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">Wrap‑up</h3>
          <p>
            The same balance equation works with any number of components: add up
            the pure contributions from each part and set that equal to the pure
            amount in the final mixture. From there, isolate the variable you need.
          </p>
        </section>
      </article>
    </main>
  );
}