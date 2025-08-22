import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.8.2 Convert a Percent to a Decimal | Essential GMAT Quant Skills",
  description:
    "Learn to convert any percent to a decimal quickly by dividing by 100 (move the decimal two places left). Includes worked examples, edge cases, and a quick multiple‑choice check.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
};

function Math({ expr, display = false, ariaLabel }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className={display ? "block overflow-x-auto" : "inline"}
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
          2.8.2 Converting a Percent to a Decimal
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every percentage can be written as a decimal. The quickest way is to
          remove the percent sign and divide the number by 100, which is the
          same as shifting the decimal two places to the left.
        </p>

        <MustKnow>
          To convert a percent to a decimal, drop the percent sign and move the
          decimal point two places to the left. Equivalently,
          <span className="mx-2 inline-block">
            <Math
              expr={`p\\% = \\dfrac{p}{100} = p\\times 10^{-2}`}
              ariaLabel="p percent equals p over one hundred, which equals p times ten to the negative two"
            />
          </span>
          Keep the sign of the number if the percent is negative.
        </MustKnow>

        <p>
          Here are a few examples using the “divide by 100” rule. Values above
          100% produce decimals greater than 1, while very small percentages
          become decimals close to 0.
        </p>

        <div className="rounded-md border border-gray-700 bg-gray-800/50 p-4">
          <Math
            display
            ariaLabel="Examples: 0.7 percent equals 0.007; 36 percent equals 0.36; 298 percent equals 2.98"
            expr={String.raw`\begin{aligned}
\Rightarrow\; 0.7\% &= 0.007\\
\Rightarrow\; 36\%  &= 0.36\\
\Rightarrow\; 298\% &= 2.98
\end{aligned}`}
          />
        </div>

        <section aria-labelledby="tips-heading" className="space-y-2">
          <h3 id="tips-heading" className="text-base font-semibold text-white">
            Quick tips and common gotchas
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Above 100%:
              <span className="ml-2">
                <Math expr={`125\\% = 1.25`} ariaLabel="125 percent equals 1.25" />
              </span>
            </li>
            <li>
              Less than 1%:
              <span className="ml-2">
                <Math expr={`0.4\\% = 0.004`} ariaLabel="0.4 percent equals 0.004" />
              </span>
            </li>
            <li>
              Negative values keep their sign:
              <span className="ml-2">
                <Math
                  expr={`-8\\% = -0.08`}
                  ariaLabel="negative eight percent equals negative 0.08"
                />
              </span>
            </li>
          </ul>
        </section>

        <MCQExample
          number={28}
          prompt="Which decimal is equivalent to 12.5%?"
          options={["0.0125", "0.125", "1.25", "12.5", "0.00125"]}
          correct="0.125"
          solution={
            <>
              <p>
                Convert by dividing by 100:
                <span className="ml-2">
                  <Math
                    expr={`12.5\\% = \\dfrac{12.5}{100} = 0.125`}
                    ariaLabel="12.5 percent equals 12.5 over 100 equals 0.125"
                  />
                </span>
              </p>
              <p>So the correct answer is 0.125.</p>
            </>
          }
        />

        <p>
          Bottom line: treat “percent” as “out of 100.” Dividing by 100 (or
          moving the decimal two places left) converts the percent to its
          decimal form instantly.
        </p>
      </article>
    </main>
  );
}