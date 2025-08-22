import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.3.1 Price per Item | General Word Problems",
  description:
    "Master the unit‑price relationship: price per item × number of items = total cost. Learn how to rearrange and apply it, then try a quick multiple‑choice example with a 50% price increase.",
};

function MathExpr({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const __html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "htmlAndMathml",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={className}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html }}
    />
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
          7.3.1 Price per Item
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Price per item” problems rely on a single unit‑rate idea: if identical
          items are purchased, the total amount paid equals the unit price times
          the number bought. Because it’s just a unit‑rate relationship, you can
          solve for whichever piece is missing as long as you have the other two.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="text-gray-200 font-semibold">Core relationship</p>
            <MathExpr
              expr={"\\text{price per item} \\times \\text{number of items} = \\text{total cost}"}
              display
              ariaLabel="Price per item times number of items equals total cost"
            />
            <p className="text-gray-200 font-semibold">Solve for unit price</p>
            <MathExpr
              expr={
                "\\text{price per item} = \\dfrac{\\text{total cost}}{\\text{number of items}}"
              }
              display
              ariaLabel="Price per item equals total cost divided by number of items"
            />
          </div>
        </MustKnow>

        <p>
          For example, buying 10 identical pints at $4 each costs $40 because
          4 × 10 = 40. Rearranging that same relationship lets you determine a
          missing unit price or quantity just as easily.
        </p>

        <MCQExample
          number={13}
          prompt="A trader spends y dollars to buy x shares of a stock. If the stock’s price per share rises by 50%, which expression gives the new price per share?"
          options={[
            "5y/(2x) dollars",
            "3xy/2 dollars",
            "2x/y dollars",
            "3y/(2x) dollars",
            "3y/(5x) dollars",
          ]}
          correct="3y/(2x) dollars"
          solution={
            <>
              <p>
                First find the original price per share by dividing total cost
                by the number of shares:
              </p>
              <MathExpr
                expr={"\\text{original price} = \\dfrac{y}{x}"}
                display
                ariaLabel="Original price equals y over x"
              />
              <p>
                A 50% increase multiplies the price by 1.5, or 3/2:
              </p>
              <MathExpr
                expr={
                  "\\text{new price} = \\dfrac{y}{x} \\times \\dfrac{3}{2} = \\dfrac{3y}{2x}"
                }
                display
                ariaLabel="New price equals y over x times three halves equals three y over two x"
              />
              <p>So the correct choice is 3y/(2x) dollars.</p>
            </>
          }
        />

        <p>
          Takeaway: when all items have the same price, the unit price is just
          the total paid divided by how many were purchased. Keep the unit‑rate
          idea front and center, and translate percentage changes into
          multipliers to update prices quickly.
        </p>
      </article>
    </main>
  );
}