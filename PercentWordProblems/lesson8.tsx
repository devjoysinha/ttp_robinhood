```tsx
// app/(chapters)/percent-word-problems/12-5-percent-of-translations/page.tsx
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '12.5 Various "percent of" translations | Percent Word Problems',
  description:
    'Learn to translate p% of x into a fraction and a decimal quickly. Includes a compact reference table and a short multiple‑choice check.',
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    strict: "warn",
  });
  return (
    <span
      aria-label={ariaLabel}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    output: "html",
    strict: "warn",
  });
  return (
    <div
      aria-label={ariaLabel}
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

type Row = {
  percent: string; // KaTeX
  ofX: string; // KaTeX: p% of x = (p/100) x
  product: string; // KaTeX: simplified product (fraction and/or decimal)
};

const rows: Row[] = [
  {
    percent: "\\tfrac{1}{10}\\%",
    ofX: "\\left(\\tfrac{1}{10}\\right)\\cdot\\tfrac{1}{100}\\,x",
    product: "\\tfrac{1}{1000}x = 0.001x",
  },
  {
    percent: "5\\%",
    ofX: "\\tfrac{5}{100}\\,x",
    product: "\\tfrac{1}{20}x = 0.05x",
  },
  {
    percent: "83\\%",
    ofX: "\\tfrac{83}{100}\\,x",
    product: "0.83x",
  },
  {
    percent: "700\\%",
    ofX: "\\tfrac{700}{100}\\,x",
    product: "7x",
  },
  {
    percent: "400{,}000\\%",
    ofX: "\\tfrac{400{,}000}{100}\\,x",
    product: "4000x",
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
          12.5 Translating “percent of” into math
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A fast way to handle percent problems is to translate “p percent of x”
          into multiplication. Replace the percent with a fraction over 100, then
          multiply by x. If it helps, convert that fraction to a decimal.
        </p>

        <MustKnow>
          For any real numbers p and x:
          <MathBlock
            expr={`\\text{“}p\\%\\text{ of }x\\text{”} \\;=\\; \\frac{p}{100}\\,x \\;=\\; (\\text{decimal form of }p\\%)\\,x`}
            ariaLabel='p percent of x equals p over 100 times x equals decimal p times x'
          />
          This rule also works when p is less than 1 or greater than 100.
        </MustKnow>

        <section aria-labelledby="reference-table-heading" className="space-y-3">
          <h3 id="reference-table-heading" className="text-xl font-semibold text-white">
            Quick reference: common translations
          </h3>

          <div className="overflow-x-auto rounded-lg ring-1 ring-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <caption className="sr-only">
                Translations of various percentages p into p% of x and simplified products
              </caption>
              <thead className="bg-gray-800/40">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Percent
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    p% of x as a fraction
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                    Simplified product
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-900/20">
                {rows.map((r, i) => (
                  <tr key={i} className="align-top">
                    <td className="px-4 py-3 text-sm text-gray-100">
                      <MathInline expr={r.percent} ariaLabel="percent" />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-100">
                      <MathInline expr={r.ofX} ariaLabel="percent of x as a fraction" />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-100">
                      <MathInline expr={r.product} ariaLabel="simplified product" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400">
            Tip: turning p% into a decimal is just moving the decimal point two places left.
            For instance, 5% → 0.05, 83% → 0.83, and 700% → 7.0.
          </p>
        </section>

        <section className="pt-2">
          <MCQExample
            number={37}
            prompt='Which expression equals 700% of x?'
            options={["0.7x", "7x", "70x", "0.07x", "x/7"]}
            correct="7x"
            solution={
              <>
                <p>
                  Translate 700% as a decimal: 700% = 700/100 = 7. Then compute 7 × x.
                </p>
                <MathBlock expr={"700\\%\\text{ of }x = \\frac{700}{100}\\,x = 7x"} />
                <p>So the correct choice is 7x.</p>
              </>
            }
          />
        </section>

        <p>
          Big picture: “percent of” is multiplication. Convert the percent to a fraction
          over 100 or a decimal, then multiply by the base quantity.
        </p>
      </article>
    </main>
  );
}
```