import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.7 Percents | Essential GMAT Quant Skills",
  description:
    "Build percent fluency for the GMAT: understand percent as divide-by-100, convert between percents and fractions, and practice combining and multiplying percents. Includes two multiple‑choice examples with step‑by‑step solutions.",
};

// Lightweight KaTeX helper
function Math({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    displayMode: block,
  });

  if (block) {
    return (
      <div
        className="my-2 overflow-x-auto"
        role="img"
        aria-label={ariaLabel ?? expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={ariaLabel ?? expr}
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
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.7 Percents</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Percents show up everywhere on the GMAT. The fastest way to work with them is to remember
          what a percent really is and to translate it into a friendlier form (fraction or decimal)
          before you compute.
        </p>

        <MustKnow>
          “Percent” literally means “per 100,” i.e., divide by 100. In symbols:
          <span className="ml-1">
            <Math expr={"x\\% = \\dfrac{x}{100}"} ariaLabel="x percent equals x over 100" />
          </span>
        </MustKnow>

        <p>Quick conversions that are handy to recognize:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <Math expr={"10\\% = \\dfrac{10}{100} = \\dfrac{1}{10}"} ariaLabel="ten percent equals ten over one hundred equals one tenth" />
          </li>
          <li>
            <Math expr={"30\\% = \\dfrac{30}{100} = \\dfrac{3}{10}"} ariaLabel="thirty percent equals thirty over one hundred equals three tenths" />
          </li>
          <li>
            <Math expr={"2\\% = \\dfrac{2}{100} = \\dfrac{1}{50}"} ariaLabel="two percent equals two over one hundred equals one fiftieth" />
          </li>
          <li>
            A small twist: one tenth of a percent means
            <span className="ml-1">
              <Math expr={"\\left(\\dfrac{1}{10}\\right)\\% = \\dfrac{\\tfrac{1}{10}}{100} = \\dfrac{1}{1000}"} ariaLabel="one tenth percent equals one tenth over one hundred equals one thousandth" />
            </span>
          </li>
          <li>
            Large percents are allowed too:
            <span className="ml-1">
              <Math expr={"500\\% = \\dfrac{500}{100} = 5"} ariaLabel="five hundred percent equals five" />
            </span>
          </li>
        </ul>

        <MustKnow>
          Always reduce fractions when possible. For example,
          <span className="ml-1">
            <Math expr={"\\dfrac{12}{100} = \\dfrac{3}{25}"} ariaLabel="twelve over one hundred equals three twenty-fifths" />
          </span>
          .
        </MustKnow>

        <section aria-labelledby="mini-practice">
          <h3 id="mini-practice" className="sr-only">
            Mini practice
          </h3>
          <p>
            Mini practice: combine symbolic percents by converting them to fractions first.
          </p>
          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-gray-200">
              What is <Math expr={"x\\% + y\\%"} ariaLabel="x percent plus y percent" /> as a single fraction?
            </p>
            <p>
              Convert each percent:
              <span className="ml-1">
                <Math expr={"x\\% + y\\% = \\dfrac{x}{100} + \\dfrac{y}{100} = \\dfrac{x+y}{100}"} ariaLabel="x percent plus y percent equals x over one hundred plus y over one hundred equals x plus y over one hundred" />
              </span>
            </p>
          </div>
        </section>

        <MCQExample
          number={53}
          prompt="Which of the following equals 5% + 7%?"
          options={["1/25", "3/25", "1/5", "7/25", "2/5"]}
          correct="3/25"
          solution={
            <>
              <p>Write each percent as a fraction over 100 and then combine:</p>
              <p>
                <Math
                  block
                  expr={
                    "5\\% + 7\\% = \\dfrac{5}{100} + \\dfrac{7}{100} = \\dfrac{12}{100} = \\dfrac{3}{25}"
                  }
                  ariaLabel="five percent plus seven percent equals five over one hundred plus seven over one hundred equals twelve over one hundred equals three twenty-fifths"
                />
              </p>
              <p>Answer: 3/25.</p>
            </>
          }
        />

        <MCQExample
          number={54}
          prompt="Which expression is equivalent to (x% + y%) × z%?"
          options={[
            "(zx + zy)/100",
            "(x + y)/100",
            "(x + y)/10000",
            "(x + zy)/10000",
            "(zx + zy)/10000",
          ]}
          correct="(zx + zy)/10000"
          solution={
            <>
              <p>
                Convert each percent to a fraction and multiply. First sum the percents, then multiply by the third percent:
              </p>
              <p>
                <Math
                  block
                  expr={
                    "\\bigl(x\\% + y\\%\\bigr)\\cdot z\\% = \\left(\\dfrac{x}{100} + \\dfrac{y}{100}\\right)\\cdot \\dfrac{z}{100} = \\dfrac{x+y}{100}\\cdot\\dfrac{z}{100} = \\dfrac{zx + zy}{10\\,000}"
                  }
                  ariaLabel="open parenthesis x percent plus y percent close parenthesis times z percent equals x over one hundred plus y over one hundred times z over one hundred equals x plus y over one hundred times z over one hundred equals z x plus z y over ten thousand"
                />
              </p>
              <p>Thus the expression is (zx + zy)/10000.</p>
            </>
          }
        />

        <p>
          Bottom line: treat percents as “divide by 100,” convert to fractions or decimals, and then
          use ordinary arithmetic. This approach is both fast and reliable under time pressure.
        </p>
      </article>
    </main>
  );
}