import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.5 Translating “percent of” | Percent Word Problems",
  description:
    "Learn to translate phrases like “p% of x” into fractions and decimals. See worked conversions from tiny percents to huge percents, plus a quick check question.",
};

export default function Page() {
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
          When you see a phrase such as “p percent of x,” convert it directly to
          math: divide the percent by 100, then multiply by x. This single move
          works for very small percents, ordinary percents, and even percents
          above 100.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Core rule:
              <span className="ml-2">
                <InlineMath math={`p\\%\\ \\text{ of }\\ x\\;=\\;\\frac{p}{100}\\,x`} />
              </span>
            </p>
            <ul className="list-disc pl-5">
              <li>
                To turn a percent into a decimal, move the decimal point two
                places left: <InlineMath math={`p\\% = \\frac{p}{100}`} />.
              </li>
              <li>
                Large percents simply scale x by more than 1 (for example,
                <InlineMath math={`700\\%\\,\\text{of }x = 7x`} />).
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="percent-table-title" className="space-y-3">
          <h3 id="percent-table-title" className="text-lg font-semibold text-gray-200">
            Common “percent of” translations
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Examples translating “percent of x” into fractional and decimal forms
              </caption>
              <thead className="bg-gray-900/50 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Percent
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    “Percent of x” as a fraction
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Simplified product
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 0.1% (one‑tenth of a percent) */}
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 align-top">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <InlineMath math={`\\tfrac{1}{10}\\%`} />
                      <span className="text-gray-400">= 0.1%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`\\left(\\tfrac{1}{10}\\%\\right)\\text{ of }x\\;=\\;\\tfrac{1}{10}\\cdot\\tfrac{1}{100}\\,x\\;=\\;\\tfrac{1}{1000}\\,x`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`0.001\\,x`} />
                  </td>
                </tr>

                {/* 5% */}
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`5\\%`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`5\\%\\text{ of }x\\;=\\;\\tfrac{5}{100}\\,x`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`0.05\\,x`} />
                  </td>
                </tr>

                {/* 83% */}
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`83\\%`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`83\\%\\text{ of }x\\;=\\;\\tfrac{83}{100}\\,x`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`0.83\\,x`} />
                  </td>
                </tr>

                {/* 700% */}
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`700\\%`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`700\\%\\text{ of }x\\;=\\;\\tfrac{700}{100}\\,x`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`7\\,x`} />
                  </td>
                </tr>

                {/* 400,000% */}
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`400{,}000\\%`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`400{,}000\\%\\text{ of }x\\;=\\;\\tfrac{400{,}000}{100}\\,x`} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <InlineMath math={`4{,}000\\,x`} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400">
            Tip: reading “p percent of x” as “p over 100 times x” keeps your setup consistent
            across all percent sizes.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt='Which expression equals 0.1% of x?'
          options={["x/10", "x/100", "x/1000", "10x", "0.1x"]}
          correct="x/1000"
          solution={
            <>
              <p>
                Convert the percent to a decimal first:
                <InlineMath math={`\\;0.1\\% = 0.001 = \\tfrac{1}{1000}.`} /> Then
                multiply by x to get <InlineMath math={`\\tfrac{1}{1000}x.`} />
              </p>
            </>
          }
        />

        <p>
          Bottom line: always translate “percent of” into multiplication by
          <InlineMath math={`\\;\\tfrac{p}{100}`} />. From there, simplify to a clean
          fraction or decimal before you compute.
        </p>
      </article>
    </main>
  );
}