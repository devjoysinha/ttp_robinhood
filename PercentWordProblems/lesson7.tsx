import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: '12.5 Translating "Percent of" | Percent Word Problems',
  description:
    'Learn how to convert phrases like “p percent of x” into algebraic expressions. Includes a quick reference table with fractional and decimal forms rendered with KaTeX.',
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  const rows = [
    {
      percent: String.raw`\tfrac{1}{10}\%`,
      ofX: String.raw`\frac{\tfrac{1}{10}}{100}\,(x)`,
      product: String.raw`\tfrac{1}{1000}\,x \;=\; 0.001\,x`,
    },
    {
      percent: String.raw`5\%`,
      ofX: String.raw`\frac{5}{100}\,(x)`,
      product: String.raw`\tfrac{1}{20}\,x \;=\; 0.05\,x`,
    },
    {
      percent: String.raw`83\%`,
      ofX: String.raw`\frac{83}{100}\,(x)`,
      product: String.raw`0.83\,x`,
    },
    {
      percent: String.raw`700\%`,
      ofX: String.raw`\frac{700}{100}\,(x)`,
      product: String.raw`7\,x`,
    },
    {
      percent: String.raw`400\,000\%`,
      ofX: String.raw`\frac{400\,000}{100}\,(x)`,
      product: String.raw`4\,000\,x`,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5 Translating “percent of”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you see the phrase “p percent of x,” read it as a multiplication:
          take p out of every 100 parts of x. Algebraically, that’s the fraction p/100
          times x. The table below shows common conversions.
        </p>

        <MustKnow>
          Any expression of the form “p% of x” equals (p/100) × x.
          In symbols: <KInline expr={String.raw`p\% \text{ of } x \;=\;\frac{p}{100}\,x`} ariaLabel="p percent of x equals p over 100 times x" />.
          You can also rewrite the result as a decimal when convenient.
        </MustKnow>

        <div className="w-full overflow-x-auto rounded-lg border border-gray-800">
          <table
            className="min-w-full divide-y divide-gray-800"
            aria-describedby="percent-of-caption"
          >
            <caption id="percent-of-caption" className="sr-only">
              Conversions for “percent of x” with fractional and decimal forms
            </caption>
            <thead className="bg-gray-900/30">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                >
                  Percent
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                >
                  Percent of x
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-200"
                >
                  Simplified result
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-gray-900/10">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-gray-900/40 focus-within:bg-gray-900/40">
                  <td className="whitespace-nowrap px-4 py-3 align-top text-sm text-gray-100">
                    <KInline expr={r.percent} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 align-top text-sm text-gray-100">
                    <KInline expr={r.ofX} ariaLabel="percent over one hundred times x" />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 align-top text-sm text-gray-100">
                    <KInline expr={r.product} ariaLabel="simplified product" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section aria-labelledby="tips-heading" className="space-y-3">
          <h3 id="tips-heading" className="text-base font-semibold text-gray-200">
            Quick tips
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Replace “percent of” with “divide by 100, then multiply.” For example,
              <KInline expr={String.raw`12\%\text{ of }x=\frac{12}{100}\,x=0.12\,x`} ariaLabel="twelve percent of x equals twelve over one hundred times x equals zero point one two x" />.
            </li>
            <li>
              Large percentages are allowed. For instance,
              <span className="ml-1">
                <KInline expr={String.raw`250\%\text{ of }x=2.5\,x`} ariaLabel="two hundred fifty percent of x equals two point five x" />.
              </span>
            </li>
            <li>
              Fractions as percentages work the same way:
              <span className="ml-1">
                <KInline expr={String.raw`\left(\tfrac{3}{5}\%\right)\text{ of }x=\frac{\tfrac{3}{5}}{100}\,x=\tfrac{3}{500}\,x`} ariaLabel="three fifths percent of x equals three fifths over one hundred times x equals three over five hundred x" />
              </span>
              .
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}