import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Helpers for generating tables
function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}
function reduced(n: number, d: number) {
  const g = gcd(n, d);
  return [n / g, d / g] as const;
}
function only2sAnd5s(n: number) {
  // true if prime factors of n are only 2 and/or 5
  while (n % 2 === 0) n /= 2;
  while (n % 5 === 0) n /= 5;
  return n === 1;
}
function trimZeros(s: string) {
  if (!s.includes(".")) return s;
  return s.replace(/(\.\d*?[1-9])0+$/u, "$1").replace(/\.0+$/u, "");
}
function formatDecimal(n: number, d: number) {
  const [nn, dd] = reduced(n, d);
  const exact = only2sAnd5s(dd);
  const val = nn / dd;
  const str = exact ? trimZeros(val.toFixed(3)) : (Math.round(val * 1000) / 1000).toFixed(3);
  return { str, exact };
}
function formatPercent(n: number, d: number, exactHint: boolean) {
  const val = (n / d) * 100;
  // use 1 decimal for repeating/approx entries; no trailing .0 for exacts when possible
  return exactHint ? trimZeros(val.toFixed(1)).replace(/\.0$/u, "") + "%" : (Math.round(val * 10) / 10).toFixed(1) + "%";
}

type BaseRow = { denom: number; dec: string; pct: string; exact: boolean };
const baseFractions: BaseRow[] = [
  { denom: 2, ...(() => { const { str, exact } = formatDecimal(1, 2); return { dec: str, pct: formatPercent(1, 2, true), exact }; })() },
  { denom: 3, ...(() => { const { str, exact } = formatDecimal(1, 3); return { dec: str, pct: formatPercent(1, 3, false), exact }; })() },
  { denom: 4, ...(() => { const { str, exact } = formatDecimal(1, 4); return { dec: str, pct: formatPercent(1, 4, true), exact }; })() },
  { denom: 5, ...(() => { const { str, exact } = formatDecimal(1, 5); return { dec: str, pct: formatPercent(1, 5, true), exact }; })() },
  { denom: 6, ...(() => { const { str, exact } = formatDecimal(1, 6); return { dec: str, pct: formatPercent(1, 6, false), exact }; })() },
  { denom: 7, ...(() => { const { str, exact } = formatDecimal(1, 7); return { dec: str, pct: formatPercent(1, 7, false), exact }; })() },
  { denom: 8, ...(() => { const { str, exact } = formatDecimal(1, 8); return { dec: str, pct: formatPercent(1, 8, true), exact }; })() },
  { denom: 9, ...(() => { const { str, exact } = formatDecimal(1, 9); return { dec: str, pct: formatPercent(1, 9, false), exact }; })() },
  { denom: 10, ...(() => { const { str, exact } = formatDecimal(1, 10); return { dec: str, pct: formatPercent(1, 10, true), exact }; })() },
];

function FractionCell({ n, d }: { n: number; d: number }) {
  return <InlineMath math={`\\dfrac{${n}}{${d}}`} />;
}

function TrioTables({
  groupTitle,
  denoms,
  numeratorsByDenom,
}: {
  groupTitle: string;
  denoms: number[];
  numeratorsByDenom: Record<number, number[]>;
}) {
  return (
    <section aria-label={groupTitle} className="grid gap-6 md:grid-cols-3">
      {denoms.map((den) => (
        <div key={den} className="rounded-lg border border-gray-800 bg-gray-900/40">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
            <h3 className="text-sm font-semibold text-gray-200">Base {den} Fractions</h3>
          </div>
          <div className="relative overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-900/60 text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2 font-medium">Fraction</th>
                  <th scope="col" className="px-4 py-2 font-medium">Decimal</th>
                  <th scope="col" className="px-4 py-2 font-medium">Percent</th>
                </tr>
              </thead>
              <tbody>
                {numeratorsByDenom[den].map((num) => {
                  const { str, exact } = formatDecimal(num, den);
                  const pct = formatPercent(num, den, exact);
                  return (
                    <tr key={`${num}/${den}`} className="border-t border-gray-800">
                      <td className="px-4 py-2 text-gray-200">
                        <FractionCell n={num} d={den} />
                      </td>
                      <td className="px-4 py-2">
                        <span className="text-gray-200">{str}</span>
                        {!exact && <span className="ml-2 rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-400">approx</span>}
                      </td>
                      <td className="px-4 py-2">
                        <span className="text-gray-200">{pct}</span>
                        {!exact && <span className="ml-2 rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-400">approx</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}

export const metadata: Metadata = {
  title: "2.9 Base Fractions: Decimal and Percent Equivalents | GMAT Quant",
  description:
    "Memorize the most useful unit fractions (base fractions) and their decimal/percent equivalents. Learn exact vs approximate conversions, see quick tables, and practice with a short multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9 Base fractions and their decimal and percent equivalents
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            On GMAT problems, it’s often faster to work with fractions than with decimals. So when a calculation looks cleaner in fractional form, convert. Sometimes the conversion is exact; other times you’ll use a tight approximation.
          </p>
          <p>
            For instance, <InlineMath math="\\tfrac{1}{2}" /> is exactly <InlineMath math="0.5" />, while <InlineMath math="\\tfrac{1}{9}" /> is typically approximated as <InlineMath math="0.111" />. Likewise, you could go the other direction: use <InlineMath math="0.5" /> as <InlineMath math="\\tfrac{1}{2}" />, or treat <InlineMath math="0.111" /> as about <InlineMath math="\\tfrac{1}{9}" />.
          </p>
        </section>

        <section className="space-y-4">
          <MustKnow>
            A base fraction is a unit fraction—one with numerator 1. Every fraction with the same denominator is a whole‑number multiple of that base fraction. Memorizing the most common base fractions makes mental conversions much faster.
          </MustKnow>

          <p>
            Example with denominator 8: the base fraction is <InlineMath math="\\tfrac{1}{8}" />, which equals <InlineMath math="0.125" />. Multiples follow immediately:
          </p>
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <div className="prose prose-invert max-w-none">
              <BlockMath math="\\tfrac{1}{8}=0.125\\quad\\Rightarrow\\quad \\tfrac{2}{8}=2\\cdot 0.125=0.25\\quad\\Rightarrow\\quad \\tfrac{3}{8}=3\\cdot 0.125=0.375\\quad\\Rightarrow\\quad \\tfrac{4}{8}=4\\cdot 0.125=0.5" />
            </div>
          </div>
          <p>
            This idea works for any denominator. If the decimal terminates (denominator has only 2s and 5s in its prime factorization), your conversion is exact. If it repeats, use a reliable rounded value.
          </p>
        </section>

        <section aria-label="Base fractions quick reference" className="space-y-3">
          <h3 className="text-base font-semibold text-gray-200">Base fractions and their decimal/percent forms</h3>
          <p className="text-sm text-gray-400">
            Exact entries are unmarked; approximations include an “approx” badge.
          </p>

          <div className="relative overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/40">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-900/60 text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">Fraction</th>
                  {baseFractions.map((r) => (
                    <th key={r.denom} scope="col" className="px-4 py-3 font-medium">
                      <InlineMath math={`\\tfrac{1}{${r.denom}}`} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-200">Decimal</th>
                  {baseFractions.map((r) => (
                    <td key={`dec-${r.denom}`} className="px-4 py-2">
                      <span className="text-gray-200">{r.dec}</span>
                      {!r.exact && <span className="ml-2 rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-400">approx</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-800">
                  <th scope="row" className="px-4 py-2 font-medium text-gray-200">Percent</th>
                  {baseFractions.map((r) => (
                    <td key={`pct-${r.denom}`} className="px-4 py-2">
                      <span className="text-gray-200">{r.pct}</span>
                      {!r.exact && <span className="ml-2 rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-400">approx</span>}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-label="Practice conversion tables" className="space-y-8">
          <p>
            Review these mini‑tables until you can convert quickly in either direction. They focus on the most frequently used denominators.
          </p>

          <TrioTables
            groupTitle="Bases 2, 3, 4"
            denoms={[2, 3, 4]}
            numeratorsByDenom={{
              2: [1],
              3: [1, 2],
              4: [1, 2, 3],
            }}
          />

          <TrioTables
            groupTitle="Bases 5, 6, 7"
            denoms={[5, 6, 7]}
            numeratorsByDenom={{
              5: [1, 2, 3, 4],
              6: [1, 2, 3, 4, 5],
              7: [1, 2, 3, 4, 5, 6],
            }}
          />

          <TrioTables
            groupTitle="Bases 8, 9, 10"
            denoms={[8, 9, 10]}
            numeratorsByDenom={{
              8: [1, 2, 3, 4, 5, 6, 7],
              9: [1, 2, 3, 4, 5, 6, 7, 8],
              10: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            }}
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-base font-semibold text-gray-200">Estimating with base fractions</h3>
          <p>
            When a decimal repeats forever, pick a sensible rounded value. For example, <InlineMath math="\\tfrac{5}{9}" /> is really <InlineMath math="0.5555\\ldots" />, so a three‑decimal estimate is <InlineMath math="0.556" /> rather than <InlineMath math="0.555" />.
          </p>
        </section>

        <MCQExample
          number={56}
          prompt="Estimate the value of (0.125 ÷ 0.11) × (0.22 ÷ 0.375) × (0.143 ÷ 0.667). Which fraction is it closest to?"
          options={["1/2", "1/3", "1/5", "1/7", "1/9"]}
          correct="1/7"
          solution={
            <>
              <p>
                Convert each decimal to its base‑fraction counterpart:
              </p>
              <div className="prose prose-invert max-w-none">
                <BlockMath math="0.125\\approx \\tfrac{1}{8},\\quad 0.11\\approx \\tfrac{1}{9},\\quad 0.22\\approx \\tfrac{2}{9},\\quad 0.375=\\tfrac{3}{8},\\quad 0.143\\approx \\tfrac{1}{7},\\quad 0.667\\approx \\tfrac{2}{3}" />
                <BlockMath math="(0.125\\div 0.11)\\times(0.22\\div 0.375)\\times(0.143\\div 0.667)\\;\\approx\\; \\dfrac{\\tfrac{1}{8}}{\\tfrac{1}{9}}\\times\\dfrac{\\tfrac{2}{9}}{\\tfrac{3}{8}}\\times\\dfrac{\\tfrac{1}{7}}{\\tfrac{2}{3}}\\;=\\;\\dfrac{9}{8}\\times\\dfrac{16}{27}\\times\\dfrac{3}{14}" />
                <BlockMath math="\\text{Cancel to get }\\; \\dfrac{1}{7}" />
              </div>
              <p>So the expression is nearest to 1/7.</p>
            </>
          }
        />

        <section>
          <p className="text-gray-300">
            Bottom line: unit fractions control the whole family. Memorize the common ones, know which decimals are exact, and use tight approximations when they’re not.
          </p>
        </section>
      </article>
    </main>
  );
}