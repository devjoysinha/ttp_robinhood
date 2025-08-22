import type { Metadata } from "next";
import katex from "katex";
// Note: Make sure KaTeX styles are loaded once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={block ? "my-2" : ""}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "11.16.1 Inverse Variation with Powers and Roots | Ratios",
  description:
    "Learn how to handle inverse variation when variables appear inside powers or roots. Work through a quick guided example plus two MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.16.1 Inverse Variation with Powers and Roots
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inverse variation isn’t limited to simple pairs such as y and x. The “inversely” part can
          just as easily apply to an expression involving powers or roots. For instance, you might
          see y inversely proportional to x squared, or a rating inversely proportional to the square
          root of a count.
        </p>

        <MustKnow>
          When a quantity varies inversely with an expression E, the relationship is
          y = k / E for some constant k. This works even if E is x², √p, or another algebraic
          expression. To solve problems:
          1) write y = k / E,
          2) use a given data point to find k, and
          3) substitute the new input to compute the requested output.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="sr-only">
            Mini‑example: inverse variation with a square
          </h3>
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">
              Mini‑example: y is inversely proportional to x². If x = 5 gives y = 9, find y when x = 8.
            </p>
            <div className="mt-3 space-y-3">
              <p>Model the relationship:</p>
              <K block expr={"y = \\dfrac{k}{x^{2}}"} ariaLabel="y equals k over x squared" />
              <p>Use the given pair (x, y) = (5, 9) to determine k:</p>
              <K
                block
                expr={"9 = \\dfrac{k}{5^{2}} \\Rightarrow 9 = \\dfrac{k}{25} \\Rightarrow k = 225"}
                ariaLabel="9 equals k over 25, therefore k equals 225"
              />
              <p>Now evaluate at x = 8:</p>
              <K
                block
                expr={"y = \\dfrac{225}{8^{2}} = \\dfrac{225}{64} \\approx 3.52"}
                ariaLabel="y equals 225 over 64 which is approximately 3.52"
              />
            </div>
          </div>
        </section>

        <p>
          The same blueprint works for roots and other expressions: set up the inverse
          variation, solve for k, and then plug in the target input.
        </p>

        <MCQExample
          number={30}
          prompt="At a ski resort, a slope’s difficulty score d is inversely proportional to the square root of the number of riders p who choose it from December to January. If 225 riders selected a slope with difficulty 10, what is the difficulty of a slope chosen by 36 riders?"
          options={["15", "25", "30", "50", "60"]}
          correct="25"
          solution={
            <>
              <p>Translate the statement “d varies inversely with √p” into an equation:</p>
              <K block expr={"d = \\dfrac{k}{\\sqrt{p}}"} ariaLabel="d equals k over square root of p" />
              <p>Use the given data (p = 225, d = 10) to find k:</p>
              <K
                block
                expr={"10 = \\dfrac{k}{\\sqrt{225}} = \\dfrac{k}{15} \\Rightarrow k = 150"}
                ariaLabel="10 equals k over 15 therefore k equals 150"
              />
              <p>For p = 36:</p>
              <K
                block
                expr={"d = \\dfrac{150}{\\sqrt{36}} = \\dfrac{150}{6} = 25"}
                ariaLabel="d equals 150 over 6 equals 25"
              />
              <p>Answer: 25.</p>
            </>
          }
        />

        <MCQExample
          number={31}
          prompt="The variable y varies inversely with x². When x = N, y = 20. What is y if x is doubled?"
          options={["5", "7", "10", "15", "20"]}
          correct="5"
          solution={
            <>
              <p>Write the inverse‑square relationship and solve for the constant:</p>
              <K block expr={"y = \\dfrac{k}{x^{2}}"} ariaLabel="y equals k over x squared" />
              <K
                block
                expr={"20 = \\dfrac{k}{N^{2}} \\Rightarrow k = 20N^{2}"}
                ariaLabel="20 equals k over N squared, therefore k equals 20 N squared"
              />
              <p>Doubling x makes x = 2N. Then:</p>
              <K
                block
                expr={"y_{\\text{new}} = \\dfrac{20N^{2}}{(2N)^{2}} = \\dfrac{20N^{2}}{4N^{2}} = 5"}
                ariaLabel="y new equals 20 N squared over 4 N squared equals 5"
              />
              <p>Answer: 5.</p>
            </>
          }
        />

        <p>
          Takeaway: inverse variation problems with powers and roots follow the same three‑step
          routine. Model, find k, then evaluate.
        </p>
      </article>
    </main>
  );
}