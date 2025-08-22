import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Note: Ensure KaTeX CSS is loaded globally once in app/layout.(tsx|jsx)
// import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.12.1 Dry Mixtures | General Word Problems",
  description:
    "Build a reliable framework for dry mixture questions: identify components, units, and quantities; organize with a matrix; and set a total‑cost equation. Includes two practice problems with full reasoning.",
};

function MatrixTable({
  caption,
  rows,
  headers = ["", "Price per Pound", "Quantity (lb)", "Total Price ($)"],
}: {
  caption: string;
  rows: Array<[string, string | number, string | number, string | number]>;
  headers?: string[];
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-800">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-gray-900/50">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-3 text-sm font-semibold text-gray-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-800 even:bg-gray-900/30"
            >
              {r.map((cell, i) => (
                <td key={i} className="px-4 py-3 text-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.12.1 Dry Mixtures
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In dry mixture problems, we blend two (or more) solid components to
          form one aggregate mixture. Each ingredient has a unit price (such as
          dollars per pound) and a quantity. The mixture’s unit price is a
          weighted average driven by those quantities.
        </p>

        <p>For instance:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            12 ounces of a candy that costs $2/oz are mixed with 4 ounces of a
            candy that costs $3/oz. What’s the cost per ounce of the blend?
          </li>
          <li>
            30 lb of feed A at $0.50/lb combine with 40 lb of feed B at
            $0.36/lb. What’s the cost per pound of the final feed?
          </li>
        </ul>

        <p>
          These are “dry” setups: prices are per weight of solids, and we add
          costs linearly.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              When you see a dry mixture, lock in three things for each
              component:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Component name (e.g., candy type, feed type)</li>
              <li>Units (e.g., dollars per pound)</li>
              <li>Quantity (e.g., pounds or ounces)</li>
            </ul>
            <p className="mt-3">
              Organize these in a small table. Then use:
              <span className="ml-2 font-mono">
                Total Price = (Unit Price) × (Quantity)
              </span>
              , and set the sum of component totals equal to the mixture’s total
              price.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="example-choc" className="space-y-4">
          <h3 id="example-choc" className="text-lg font-semibold text-white">
            Worked Example: Chocolate Chip Blend
          </h3>
          <p>
            Enrico buys white chips at $2/lb and dark chips at $4/lb. He mixes
            4 lb of white with 6 lb of dark. What is the mixture’s price per
            pound?
          </p>

          <p className="font-semibold">Step 1: Lay out the matrix</p>
          <MatrixTable
            caption="Mixture matrix for chocolate chips—stage 1"
            rows={[
              ["White Chocolate Chips", "2", "4", ""],
              ["Dark Chocolate Chips", "4", "6", ""],
              ["Final Mixture", "n", "", ""],
            ]}
            headers={["", "Dollars per Pound", "Pounds", "Total Price ($)"]}
          />

          <p className="font-semibold">Step 2: Compute totals</p>
          <MatrixTable
            caption="Mixture matrix for chocolate chips—stage 2 with totals"
            rows={[
              ["White Chocolate Chips", "2", "4", "2 × 4 = 8"],
              ["Dark Chocolate Chips", "4", "6", "4 × 6 = 24"],
              ["Final Mixture", "n", "4 + 6 = 10", "10n"],
            ]}
            headers={["", "Price per Pound", "Pounds", "Total Price ($)"]}
          />

          <p className="font-semibold">Step 3: Set total cost equality</p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math={"8 + 24 = 10n"} />
            <BlockMath math={"32 = 10n"} />
            <BlockMath math={"n = 3.2"} />
          </div>

          <p>
            So the blend costs <InlineMath math={"$3.20"} /> per pound.
          </p>
        </section>

        <section aria-labelledby="practice-1" className="space-y-4">
          <h3 id="practice-1" className="text-lg font-semibold text-white">
            Practice: Weighted Average Price
          </h3>

          <MCQExample
            number={55}
            prompt="Maggie buys a grout mixture made of 20 lb of pea gravel at $2/lb and 30 lb of concrete sand at $3/lb. Assuming only these two ingredients, what is the average price per pound of the mixture?"
            options={["$1.95", "$2.20", "$2.35", "$2.57", "$2.60"]}
            correct="$2.60"
            solution={
              <>
                <p className="mb-2">
                  Build the same table and totals. The total weight is{" "}
                  <InlineMath math={"20 + 30 = 50"} /> lb.
                </p>

                <MatrixTable
                  caption="Mixture matrix for grout"
                  rows={[
                    ["Pea Gravel", "2", "20", "2 × 20 = 40"],
                    ["Concrete Sand", "3", "30", "3 × 30 = 90"],
                    ["Final Mixture", "n", "50", "50n"],
                  ]}
                />

                <div className="mt-4 rounded-md bg-gray-900/50 p-4">
                  <BlockMath math={"40 + 90 = 50n"} />
                  <BlockMath math={"130 = 50n"} />
                  <BlockMath math={"n = \\frac{130}{50} = \\frac{13}{5} = 2.6"} />
                </div>

                <p className="mt-2">Therefore, the price is $2.60 per pound.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="practice-2" className="space-y-4">
          <h3 id="practice-2" className="text-lg font-semibold text-white">
            Practice: Solve for a Missing Quantity
          </h3>

          <p>
            Sometimes the mixture price and total weight are fixed, and you need
            to find how much of one component is required.
          </p>

          <MCQExample
            number={56}
            prompt="A store sells a trail mix of chocolate and nuts. Nuts cost $2.75/lb and chocolate costs $1.50/lb. A customer wants a 20‑lb bag priced at $2.25/lb. How many pounds of chocolate should be used?"
            options={["12", "11", "10", "9", "8"]}
            correct="8"
            solution={
              <>
                <p className="mb-2">
                  Let <InlineMath math={"x"} /> be the pounds of chocolate. Then
                  nuts weigh <InlineMath math={"20 - x"} />. Match total cost of
                  parts to the mixture’s total cost:
                </p>
                <div className="rounded-md bg-gray-900/50 p-4">
                  <BlockMath math={"1.50x + 2.75(20 - x) = 20(2.25)"} />
                  <BlockMath math={"1.50x + 55 - 2.75x = 45"} />
                  <BlockMath math={"10 = 1.25x \\quad \\Rightarrow \\quad x = 8"} />
                </div>
                <p className="mt-2">So 8 pounds of chocolate are required.</p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Summary: identify components, units, and quantities; organize with a
          compact matrix; compute each row’s total; and equate sum of component
          totals to the mixture’s total. That workflow handles dry mixtures
          whether you’re solving for a price or for an unknown amount.
        </p>
      </article>
    </main>
  );
}