import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function TeX({
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
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className={block ? "my-2 block overflow-x-auto" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "14.3.4 Counting Consecutive Evens and Odds (Inclusive) | Statistics",
  description:
    "Learn a fast formula to count consecutive even or odd integers in an inclusive range. Includes worked examples and quick checks to avoid endpoint mistakes.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.4 Counting Consecutive Evens and Odds, Inclusive
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          GMAT problems often ask how many terms appear in a run of consecutive
          evens or odds across an inclusive interval. Instead of listing every
          value, use a position-based formula that counts evenly spaced terms in
          one step.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-white">Counting formula</p>
            <p>
              For a set made up only of consecutive even integers or only of
              consecutive odd integers, the number of terms from the smallest to
              the largest value, inclusive, is
            </p>
            <TeX
              block
              expr="\text{count} \;=\; \frac{\text{largest} - \text{smallest}}{2} \;+\; 1"
            />
            <p className="text-sm text-gray-400">
              This works because adjacent evens (or adjacent odds) differ by 2.
            </p>
          </div>
        </MustKnow>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            Quick example: evens from 12 to 24 (inclusive)
          </h3>
          <p>
            Both endpoints are even, so apply the formula directly:
          </p>
          <TeX
            block
            expr="\frac{24 - 12}{2} + 1 \;=\; \frac{12}{2} + 1 \;=\; 6 + 1 \;=\; 7"
          />
          <p>
            There are 7 even integers in that range. A quick list confirms it:
            12, 14, 16, 18, 20, 22, 24.
          </p>
        </section>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-white">Endpoint parity matters</p>
            <p>
              Before using the formula, make sure the smallest and largest
              numbers match the parity you’re counting:
            </p>
            <ul className="list-disc pl-5">
              <li>Counting evens: both endpoints must be even.</li>
              <li>Counting odds: both endpoints must be odd.</li>
            </ul>
            <p className="text-sm text-gray-400">
              If an endpoint has the wrong parity, shift it inward by 1 to the
              nearest even/odd as needed, and then apply the formula.
            </p>
          </div>
        </MustKnow>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Larger ranges</h3>
          <p>
            The same formula scales to big intervals without listing terms.
            Example: odd integers from 45 to 187, inclusive:
          </p>
          <TeX
            block
            expr="\frac{187 - 45}{2} + 1 \;=\; \frac{142}{2} + 1 \;=\; 71 + 1 \;=\; 72"
          />
          <p>So there are 72 odd integers in that inclusive range.</p>
        </section>

        <section className="space-y-6">
          <MCQExample
            number={9}
            prompt="How many even integers are there from 204 to 528, inclusive?"
            options={["160", "161", "162", "163", "164"]}
            correct="163"
            solution={
              <>
                <p>Both endpoints are even, so apply the formula directly:</p>
                <TeX
                  block
                  expr="\frac{528 - 204}{2} + 1 \;=\; \frac{324}{2} + 1 \;=\; 162 + 1 \;=\; 163"
                />
                <p>Answer: 163.</p>
              </>
            }
          />

          <MCQExample
            number={10}
            prompt="How many odd integers are there from 50 to 82, inclusive?"
            options={["16", "17", "18", "19", "20"]}
            correct="16"
            solution={
              <>
                <p>
                  Adjust endpoints to odd values: from 51 to 81. Then use the
                  formula:
                </p>
                <TeX
                  block
                  expr="\frac{81 - 51}{2} + 1 \;=\; \frac{30}{2} + 1 \;=\; 15 + 1 \;=\; 16"
                />
                <p>Answer: 16.</p>
              </>
            }
          />

          <MCQExample
            number={11}
            prompt="Set Q contains all consecutive odd integers from x to y, inclusive, where x and y are positive odd integers. If Q has 88 terms, what is x in terms of y?"
            options={["y − 176", "y − 174", "y − 89", "y − 88", "y − 87"]}
            correct="y − 174"
            solution={
              <>
                <p>
                  For consecutive odds from x to y inclusive, the count is
                </p>
                <TeX expr="\dfrac{y - x}{2} + 1" />
                <p>Set this equal to 88 and solve for x:</p>
                <TeX
                  block
                  expr="\frac{y - x}{2} + 1 = 88 \;\;\Rightarrow\;\; \frac{y - x}{2} = 87 \;\;\Rightarrow\;\; y - x = 174 \;\;\Rightarrow\;\; x = y - 174"
                />
                <p>Answer: y − 174.</p>
              </>
            }
          />
        </section>

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Takeaways</h3>
          <ul className="list-disc pl-5">
            <li>
              Use count = (largest − smallest)/2 + 1 for pure even-only or odd-only runs.
            </li>
            <li>
              Make sure the endpoints match the parity you are counting; adjust
              inward if needed before applying the formula.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}