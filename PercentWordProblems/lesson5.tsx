import type { Metadata } from "next";
import katex from "katex";
// Note: Make sure KaTeX styles are available globally (e.g., in app/globals.css):
// @import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '12.5 Translating "percent of" | Percent Word Problems',
  description:
    'Quick guide to converting “percent of” expressions. See how to write a% of x as (a/100)x, even when a is a fraction, a decimal, or more than 100%. Includes compact examples and a short check-for-understanding.',
};

type KProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

function K({ expr, display = false, ariaLabel, className }: KProps) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: display });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

type Row = {
  label: string; // human-friendly percent label
  ofXFractionLatex: string; // fraction form times x
  ofXDecimalLatex: string; // decimal form times x
  note?: string; // optional hint
};

const rows: Row[] = [
  {
    label: "0.1% (that is, 1/10%)",
    ofXFractionLatex: "\\tfrac{1}{1000}x",
    ofXDecimalLatex: "0.001\\,x",
    note: "0.1% = 0.1/100 = 0.001",
  },
  {
    label: "5%",
    ofXFractionLatex: "\\tfrac{1}{20}x",
    ofXDecimalLatex: "0.05\\,x",
  },
  {
    label: "83%",
    ofXFractionLatex: "\\tfrac{83}{100}x",
    ofXDecimalLatex: "0.83\\,x",
  },
  {
    label: "700%",
    ofXFractionLatex: "\\tfrac{700}{100}x = 7x",
    ofXDecimalLatex: "7\\,x",
  },
  {
    label: "400{,}000%",
    ofXFractionLatex: "\\tfrac{400000}{100}x = 4000x",
    ofXDecimalLatex: "4000\\,x",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5 Translating “percent of” expressions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you see “a% of x,” read it as a fraction of x: a percent simply means a parts out of 100. So regardless of whether a is a whole number, a decimal, or even a fraction, the translation is the same: divide by 100 and multiply by x.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Core rule:
            </p>
            <p className="text-gray-200">
              <K expr="a\\%\\text{ of }x\\;=\\;\\left(\\tfrac{a}{100}\\right)x" ariaLabel="a percent of x equals a over 100 times x" />
            </p>
            <ul className="list-disc pl-6">
              <li>“of” means multiply.</li>
              <li>a can be a fraction (e.g., 1/10%), a decimal (e.g., 0.4%), or a large number (e.g., 700%).</li>
              <li>After dividing by 100, you can simplify to a fraction or a decimal multiplier, whichever is handier.</li>
            </ul>
          </div>
        </MustKnow>

        <section aria-label="Percent of translations" className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Common translations at a glance</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {rows.map((r, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-800 bg-gray-900/40 p-4"
                role="group"
                aria-labelledby={`row-${i}-label`}
              >
                <div id={`row-${i}-label`} className="text-sm font-medium text-gray-100">
                  {r.label}
                </div>
                <div className="mt-3 space-y-2">
                  <div className="text-sm text-gray-400">As a fraction of x</div>
                  <div className="text-lg font-medium text-gray-100">
                    <K expr={r.ofXFractionLatex} />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="text-sm text-gray-400">As a decimal times x</div>
                  <div className="text-lg font-medium text-gray-100">
                    <K expr={r.ofXDecimalLatex} />
                  </div>
                </div>
                {r.note && (
                  <p className="mt-3 text-sm text-gray-400">
                    Hint: {r.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Why this works" className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Why this always works</h3>
          <p>
            Percent literally means “per 100.” Turning a% into a fraction is just <K expr="\\tfrac{a}{100}" ariaLabel="a over one hundred" />. Then multiply by x to get the amount.
          </p>
          <p>
            Example: <K expr="700\\%\\text{ of }x=\\left(\\tfrac{700}{100}\\right)x=7x" ariaLabel="seven hundred percent of x equals seven x" />. Similarly, <K expr="0.1\\%\\text{ of }x=\\left(\\tfrac{0.1}{100}\\right)x=0.001x=\\tfrac{1}{1000}x" ariaLabel="zero point one percent of x equals one over one thousand x" />.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt='Which expression equals 0.4% of x?'
          options={['x/250', 'x/40', '0.04x', 'x/400', '4x']}
          correct="x/250"
          solution={
            <>
              <p>
                Translate 0.4% as a fraction: <K expr="0.4\\% = \\tfrac{0.4}{100} = 0.004" />.
                Then <K expr="0.4\\%\\text{ of }x = 0.004x" />.
              </p>
              <p>
                Since <K expr="0.004 = \\tfrac{4}{1000} = \\tfrac{1}{250}" />, we get <K expr="\\tfrac{x}{250}" />. So x/250 is correct.
              </p>
            </>
          }
        />

        <section aria-label="Takeaways" className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Takeaways</h3>
          <ul className="list-disc pl-6">
            <li>Always convert a% to <K expr="\\tfrac{a}{100}" /> and multiply by x.</li>
            <li>Then simplify to a fraction or decimal multiplier for quick arithmetic.</li>
            <li>Large percents (>100%) and tiny percents (<1%) follow the exact same rule.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}