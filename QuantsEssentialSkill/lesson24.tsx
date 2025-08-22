import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.8 Convert a Fraction to a Percent | Essential GMAT Quant Skills",
  description:
    "Learn the fastest way to turn any fraction into a percent by multiplying by 100%. Includes clear, step‑by‑step KaTeX examples and a quick self‑check.",
};

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel ?? "mathematical expression"}
      role="math"
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
    output: "html",
  });
  return (
    <div
      aria-label={ariaLabel ?? "mathematical expression"}
      role="math"
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.8 Converting a Fraction to a Percent
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Percent means “per hundred.” So to change any fraction into a percent,
          multiply the fraction by{" "}
          <MathInline expr={"100\\%"} ariaLabel="one hundred percent" />. That’s
          it—the product is your percent.
        </p>

        <MustKnow>
          To convert a fraction{" "}
          <MathInline expr={"\\tfrac{a}{b}"} ariaLabel="a over b" /> to a
          percent, compute{" "}
          <MathInline
            expr={"\\tfrac{a}{b}\\times 100\\%"}
            ariaLabel="a over b times one hundred percent"
          />
          . If the denominator divides 100 cleanly, you’ll get a whole‑number
          percent; otherwise, expect a decimal or a mixed percent.
        </MustKnow>

        <section aria-labelledby="examples-heading" className="space-y-4">
          <h3
            id="examples-heading"
            className="text-base font-semibold text-gray-200"
          >
            Worked examples
          </h3>

          <div className="rounded-md border border-gray-800 bg-gray-900/40 p-4">
            <p className="mb-2 font-medium text-gray-200">
              Example 1: A fraction already “out of 100”
            </p>
            <p className="sr-only">
              Seven over one hundred times one hundred percent equals seven
              percent.
            </p>
            <MathBlock expr={"\\frac{7}{100}\\times 100\\% = 7\\%"} />
          </div>

          <div className="rounded-md border border-gray-800 bg-gray-900/40 p-4">
            <p className="mb-2 font-medium text-gray-200">
              Example 2: Denominator divides 100
            </p>
            <p className="sr-only">
              One fourth times one hundred percent equals one hundred over four
              percent which is twenty five percent.
            </p>
            <MathBlock expr={"\\frac{1}{4}\\times 100\\% = \\frac{100}{4}\\% = 25\\%"} />
          </div>

          <div className="rounded-md border border-gray-800 bg-gray-900/40 p-4">
            <p className="mb-2 font-medium text-gray-200">
              Example 3: Repeating decimal percent
            </p>
            <p className="sr-only">
              One third times one hundred percent equals one hundred over three
              percent which is thirty three and one third percent.
            </p>
            <MathBlock expr={"\\frac{1}{3}\\times 100\\% = \\frac{100}{3}\\% = 33\\tfrac{1}{3}\\%"} />
            <p className="mt-2 text-sm text-gray-400">
              You can also write{" "}
              <MathInline expr={"33.\\overline{3}\\%"} ariaLabel="33 point 3 repeating percent" />.
            </p>
          </div>

          <div className="rounded-md border border-gray-800 bg-gray-900/40 p-4">
            <p className="mb-2 font-medium text-gray-200">
              Example 4: An improper fraction
            </p>
            <p className="sr-only">
              Three halves times one hundred percent equals three hundred over
              two percent which is one hundred fifty percent.
            </p>
            <MathBlock expr={"\\frac{3}{2}\\times 100\\% = \\frac{300}{2}\\% = 150\\%"} />
          </div>
        </section>

        <section aria-labelledby="tips-heading" className="space-y-2">
          <h3
            id="tips-heading"
            className="text-base font-semibold text-gray-200"
          >
            Quick tips
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-300">
            <li>
              Reduce first when convenient. For example,{" "}
              <MathInline expr={"\\tfrac{6}{25}\\times 100\\% = 6\\times 4\\% = 24\\%"} />
              .
            </li>
            <li>
              If 100 isn’t divisible by the denominator, express the result as a
              decimal or a mixed percent.
            </li>
          </ul>
        </section>

        <MCQExample
          number={101}
          prompt="What percent is equal to 5/8?"
          options={["60%", "62.5%", "65%", "80%", "12.5%"]}
          correct="62.5%"
          solution={
            <>
              <p className="text-gray-300">
                Multiply by{" "}
                <MathInline expr={"100\\%"} ariaLabel="one hundred percent" />:
              </p>
              <p className="sr-only">
                Five eighths times one hundred percent equals five hundred over
                eight percent which is sixty two point five percent.
              </p>
              <MathBlock expr={"\\frac{5}{8}\\times 100\\% = \\frac{500}{8}\\% = 62.5\\%"} />
              <p className="mt-2 text-gray-300">
                Therefore, the answer is 62.5%.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}