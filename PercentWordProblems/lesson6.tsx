import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: `12.5 Translating "percent of" | Percent Word Problems`,
  description:
    `Master how to translate "percent of" into algebra. See quick conversions (including unusual cases like 1/10% and 400,000%), plus practice with one MCQ and two Data Sufficiency drills.`,
};

const rows = [
  {
    percentLabel: "1/10%",
    ofx: String.raw`\left(\frac{1}{10}\cdot\frac{1}{100}\right)x=\frac{1}{1000}x`,
    product: String.raw`0.001x`,
    sr: "One tenth of a percent of x equals one-thousandth of x, or 0.001x.",
  },
  {
    percentLabel: "5%",
    ofx: String.raw`\frac{5}{100}x`,
    product: String.raw`0.05x`,
    sr: "Five percent of x equals five hundredths of x, or 0.05x.",
  },
  {
    percentLabel: "83%",
    ofx: String.raw`\frac{83}{100}x`,
    product: String.raw`0.83x`,
    sr: "Eighty‑three percent of x equals 0.83x.",
  },
  {
    percentLabel: "700%",
    ofx: String.raw`\frac{700}{100}x`,
    product: String.raw`7x`,
    sr: "Seven hundred percent of x equals seven times x.",
  },
  {
    percentLabel: "400,000%",
    ofx: String.raw`\frac{400000}{100}x`,
    product: String.raw`4000x`,
    sr: "Four hundred thousand percent of x equals four thousand times x.",
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
          12.5 Translating “percent of” into algebra
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The word percent literally means “per hundred.” So when you see p%, read it as p out of 100.
          Translating that idea into math gives a compact rule you’ll use constantly on GMAT problems.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Core translation
            </p>
            <p>
              <InlineMath math={String.raw`p\%\ \text{ of }\ x \;=\; \frac{p}{100}\,x`} />
            </p>

            <p className="font-semibold mt-4">
              Helpful notes
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Converting to decimal is the same as dividing by 100:{" "}
                <InlineMath math={String.raw`5\% = 0.05`} />,{" "}
                <InlineMath math={String.raw`83\% = 0.83`} />,{" "}
                <InlineMath math={String.raw`700\% = 7`} />.
              </li>
              <li>
                “Tiny” percents work the same way:{" "}
                <InlineMath math={String.raw`\tfrac{1}{10}\%=\tfrac{1}{1000}=0.001`} />.
              </li>
              <li>
                “Huge” percents just scale x by a factor:{" "}
                <InlineMath math={String.raw`400{,}000\% = \tfrac{400000}{100} = 4000`} />.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="translations-heading" className="space-y-3">
          <h3 id="translations-heading" className="text-xl font-semibold text-white">
            Common “percent of” translations
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <caption className="sr-only">
                Mappings from percent to algebraic forms and simplified products
              </caption>
              <thead>
                <tr className="text-left text-gray-200">
                  <th scope="col" className="px-3 py-2">Percent</th>
                  <th scope="col" className="px-3 py-2">Percent of x</th>
                  <th scope="col" className="px-3 py-2">Product (simplified)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.percentLabel} className="rounded-lg bg-gray-800/40">
                    <th scope="row" className="px-3 py-3 font-medium text-gray-100">
                      {r.percentLabel}
                    </th>
                    <td className="px-3 py-3 align-middle">
                      <InlineMath math={r.ofx} />
                    </td>
                    <td className="px-3 py-3 align-middle">
                      <InlineMath math={r.product} />
                      <span className="sr-only">. {r.sr}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <MCQExample
          number={31}
          prompt='Which expression is equivalent to 83% of x?'
          options={[
            "0.83x",
            "0.083x",
            "83x",
            "x ÷ 0.83",
            "83 ÷ (100x)",
          ]}
          correct="0.83x"
          solution={
            <>
              <p>
                Translate directly: <InlineMath math={String.raw`83\%\text{ of }x=\frac{83}{100}x=0.83x`} />.
              </p>
              <p>
                Therefore, 0.83x is correct.
              </p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Data Sufficiency: Compute y from a percent"
          statements={[
            "Let y = p% of x.",
            "1) p = 700 and x = 3",
            "2) p = 83 and x = 5",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need a numeric value for <InlineMath math="y" />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math={String.raw`y=\frac{700}{100}\cdot 3=7\cdot 3=21`} />. Unique value → sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math={String.raw`y=\frac{83}{100}\cdot 5=0.83\cdot 5=4.15`} />. Unique value → sufficient.
              </p>
              <p>
                Each statement alone determines y. Answer: D.
              </p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Data Sufficiency: Tiny percent"
          statements={[
            "Is (1/10)% of N greater than 4?",
            "1) N = 60,000",
            "2) N = 30,000",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Note that <InlineMath math={String.raw`\tfrac{1}{10}\% = 0.001`} />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math={String.raw`0.001\cdot 60000=60>4`} /> → YES. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math={String.raw`0.001\cdot 30000=30>4`} /> → YES. Sufficient.
              </p>
              <p>
                Each statement alone answers the question definitively. Answer: D.
              </p>
            </>
          }
        />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Why this matters</h3>
          <p>
            Percent word problems become routine once you translate the language consistently.
            Start with <InlineMath math={String.raw`\frac{p}{100}x`} />, then simplify to a decimal or whole‑number multiplier when helpful.
            This single move handles everything from very small percents like{" "}
            <InlineMath math={String.raw`\tfrac{1}{10}\%`} /> to very large ones like{" "}
            <InlineMath math={String.raw`400{,}000\%`} />.
          </p>
        </section>
      </article>
    </main>
  );
}