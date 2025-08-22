import type { Metadata } from "next";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { renderToString } from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, className }: { expr: string; className?: string }) {
  return (
    <span
      className={className}
      aria-label={expr.replace(/\\/g, "")}
      dangerouslySetInnerHTML={{
        __html: renderToString(expr, { throwOnError: false, output: "html" }),
      }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.10 Symbols in Graphics Interpretation | GMAT Data Insights",
  description:
    "Learn how icons and symbols in charts encode quantitative information. Read legends correctly, translate symbols to numbers, and practice with a two‑part mini example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.10 Symbols Found in Graphics Interpretation Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Graphics Interpretation problems often use icons instead of raw numbers.
          The legend explains exactly what each icon stands for, so your first job is
          to translate symbols into quantities before you compute anything.
        </p>

        <MustKnow>
          Treat the legend as a dictionary: one symbol corresponds to a specific amount.
          Convert symbols to numbers before comparing, summing, or forming ratios. Misreading
          a legend is one of the fastest ways to miss an otherwise easy question.
        </MustKnow>

        <p>
          A few quick illustrations:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            If an hourglass equals 100 managers, then five hourglasses represent 500 managers.
          </li>
          <li>
            If a snowflake equals 10 widgets, then two and a half snowflakes represent 25 widgets.
          </li>
        </ul>

        <section aria-labelledby="table-legend" className="space-y-3">
          <h3 id="table-legend" className="text-white font-semibold">
            Reading a legend in a grid or table
          </h3>
          <p>
            Suppose a grid pairs snack types with favorite games. Blue squares label a snack category
            and green circles label a game. If a cell shows a blue square, a green circle, and the
            number 10, then 10 people chose that snack–game combination. To find fans of cookies and
            Wii Bowling, look for the cell marked with the cookie symbol and the Wii Bowling symbol;
            if the cell shows 4, that means 4 people match both.
          </p>
        </section>

        <section aria-labelledby="venn-legend" className="space-y-3">
          <h3 id="venn-legend" className="text-white font-semibold">
            Venn diagrams with symbolic counts
          </h3>
          <p>
            Imagine a survey Venn diagram in which each snowflake represents 20 employees. To find
            the number in any region, count the snowflakes and multiply by 20. For example, if a
            “stocks‑only” region has six snowflakes, that count is{" "}
            <MathInline expr="6 \times 20 = 120" className="text-gray-100" /> employees. If the
            “bonds and mutual funds, not stocks” region has two snowflakes, that total is{" "}
            <MathInline expr="2 \times 20 = 40" className="text-gray-100" /> employees.
          </p>
        </section>

        <section aria-labelledby="example-fig" className="space-y-3">
          <h3 id="example-fig" className="text-white font-semibold">
            Worked example
          </h3>

          <figure className="rounded-lg border border-gray-700 bg-gray-900/40 p-3">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/507/content_Example_11.png"
              alt="Chart showing daily counts of pizza, fruit, and chocolate milk orders for a weekday-only food truck"
              width={650}
              height={429}
              className="h-auto w-full rounded"
              priority
              unoptimized
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              The truck operates Monday through Friday. Each icon corresponds to a fixed number of orders as indicated in the legend.
            </figcaption>
          </figure>

          <MCQExample
            number={1}
            prompt="On which day was the ratio of chocolate milk orders to fruit orders equal to 2 to 3?"
            options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
            correct="Friday"
            solution={
              <>
                <p>
                  From the legend, 1 chocolate milk icon represents 2 orders and 1 fruit icon
                  represents 3 orders. If a day shows the same number of chocolate milk and fruit
                  icons, then the ratio is 2:3. Only Friday has equal counts of those two icons, so the ratio is 2 to 3 on Friday.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="How many pizza orders were placed during the week?"
            options={["138", "139", "141", "142", "144"]}
            correct="144"
            solution={
              <>
                <p>
                  Add the pizza icons across the weekdays, including partial icons if shown. The total number
                  of pizza icons is{" "}
                  <MathInline expr="9 + 5.5 + 6.5 + 6.75 + 8.25 = 36" className="text-gray-100" />.
                  Each pizza icon stands for 4 orders, so the total pizza orders are{" "}
                  <MathInline expr="36 \times 4 = 144" className="text-gray-100" />.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: convert symbols to numbers first, then compute. Once you master that
          translation step, ratios, totals, and comparisons become straightforward.
        </p>
      </article>
    </main>
  );
}