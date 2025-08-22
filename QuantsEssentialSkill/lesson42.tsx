import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

type MathProps = {
  expr: string;
  ariaLabel?: string;
  display?: boolean;
  className?: string;
};

function Math({ expr, ariaLabel, display = false, className }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    trust: true,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr.replace(/\$/g, "")}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.17 Time‑Saving Properties of Addition | GMAT Quant",
  description:
    "Learn how the commutative and associative properties let you reorder and regroup sums for faster mental math. Includes a quick multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main id="main" className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.17 Time‑Saving Properties of Addition
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a problem is just a big pile of additions, you don’t have to add
          in the given order. On the GMAT, a smart rearrangement can turn a
          messy sum into something you can do almost instantly and with fewer
          errors.
        </p>

        <p>
          For instance, look at the sum 46 + 27 + 48 + 51 + 54 + 73 + 52 + 49.
          Rather than adding straight through from left to right, match numbers
          that make clean totals: 46 with 54, 27 with 73, 48 with 52, and 51
          with 49. Each pair makes 100, so the grand total is 4 × 100 = 400.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Commutative property of addition:{" "}
              <Math expr={"a + b = b + a"} ariaLabel="a plus b equals b plus a" />
            </li>
            <li>
              Associative property of addition:{" "}
              <Math
                expr={"(a + b) + c = a + (b + c)"}
                ariaLabel="left parenthesis a plus b right parenthesis plus c equals a plus left parenthesis b plus c right parenthesis"
              />
            </li>
            <li>
              Taken together, these mean you can reorder and regroup any list of
              addends to make the arithmetic faster and cleaner.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="why-it-works">
          <h3 id="why-it-works" className="text-xl font-semibold text-white">
            Why this works
          </h3>
          <p>
            Switching the order of terms doesn’t change the result (
            <Math expr={"a + b = b + a"} />), and changing which terms you add
            first also keeps the total the same (<Math expr={"(a + b) + c = a + (b + c)"} />
            ). So, when a sum has many terms, group convenient pairs or small
            clusters—especially ones that hit round numbers—to speed up your
            calculation.
          </p>
        </section>

        <MCQExample
          number={83}
          prompt={
            <>
              Evaluate:{" "}
              <Math
                expr={
                  "500\\left(91 + 93 + 95 + 97 + 99 + 101 + 103 + 105 + 107 + 109\\right)"
                }
                ariaLabel="500 times the sum of 91, 93, 95, 97, 99, 101, 103, 105, 107, and 109"
                display
                className="my-2 block"
              />
              Which of the following is equal to this expression?
            </>
          }
          options={["50,000", "75,000", "250,000", "500,000", "750,000"]}
          correct="500,000"
          solution={
            <>
              <p>
                Reorder and regroup the terms inside the parentheses to create
                tidy pairs that sum to the same value. Pair the outermost terms
                moving inward:
              </p>
              <Math
                display
                expr={
                  "\\begin{aligned}\n" +
                  "S &= 91 + 93 + 95 + 97 + 99 + 101 + 103 + 105 + 107 + 109\\\\\n" +
                  "&= (91+109) + (93+107) + (95+105) + (97+103) + (99+101)\\\\\n" +
                  "&= 200 + 200 + 200 + 200 + 200 = 1000\n" +
                  "\\end{aligned}"
                }
                ariaLabel="Rewriting sum as pairs each equal to two hundred, total equals one thousand"
                className="my-2 block"
              />
              <p>
                Therefore, the original expression is{" "}
                <Math expr={"500 \\times 1000 = 500{,}000"} ariaLabel="five hundred times one thousand equals five hundred thousand" />.
                The correct choice is 500,000.
              </p>
            </>
          }
        />

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            Choose the order of addition that works for you. Pair into round
            numbers or simple groups whenever possible—the total doesn’t change,
            but the path to it can become much faster.
          </p>
        </section>
      </article>
    </main>
  );
}