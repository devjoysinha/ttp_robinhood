import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "7.2 Moving from Words to Equations | Word Problems",
  description:
    "Turn plain-English statements into algebra quickly and accurately. Build a go‑to dictionary of phrases (is, fewer, times, etc.) and see concise examples rendered with KaTeX.",
};

type MapItem = {
  phrase: string;
  symbol: string;
  ariaSymbol: string;
};

const MAP: MapItem[] = [
  { phrase: "is", ariaSymbol: "equals", symbol: "=" },
  { phrase: "was", ariaSymbol: "equals", symbol: "=" },
  { phrase: "has been", ariaSymbol: "equals", symbol: "=" },
  { phrase: "more", ariaSymbol: "plus", symbol: "+" },
  { phrase: "years older", ariaSymbol: "plus", symbol: "+" },
  { phrase: "less", ariaSymbol: "minus", symbol: "−" },
  { phrase: "less than", ariaSymbol: "minus", symbol: "−" },
  { phrase: "fewer", ariaSymbol: "minus", symbol: "−" },
  { phrase: "years younger", ariaSymbol: "minus", symbol: "−" },
  { phrase: "times", ariaSymbol: "times", symbol: "×" },
  { phrase: "as many", ariaSymbol: "times", symbol: "×" },
  { phrase: "factor", ariaSymbol: "times", symbol: "×" },
];

// Server-side KaTeX render helper
const kx = (expr: string) =>
  ({ __html: katex.renderToString(expr, { throwOnError: false }) });

export default function Page() {
  return (
    <>
      {/* KaTeX CSS (loaded via CDN for styling) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            7. General Word Problems
          </h1>
          <h2 className="mt-1 text-lg font-semibold text-gray-200">
            7.2 Moving from Words to Equations
          </h2>
        </header>

        <article className="space-y-6 text-gray-300">
          <p>
            A major hurdle in word problems is converting everyday statements into precise algebra. 
            The fastest solvers rely on a mental “dictionary” that maps common phrases to symbols, so translation becomes automatic.
          </p>

          <MustKnow>
            Build fluency with a small set of triggers:
            “is/was/has been” → equals, “more/older” → plus, “less/fewer/younger” → minus,
            and “times/as many/factor” → multiplication. When you see these, translate first—then solve.
          </MustKnow>

          <section aria-labelledby="map-heading" className="mt-6">
            <h3 id="map-heading" className="mb-3 text-lg font-semibold text-white">
              Common English-to-Math Translations
            </h3>

            <div className="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/40">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  Table of English phrases and their algebraic symbol translations
                </caption>
                <thead className="bg-gray-900/60 text-gray-300">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">English phrase</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Math symbol</th>
                  </tr>
                </thead>
                <tbody>
                  {MAP.map((row, idx) => (
                    <tr key={`${row.phrase}-${idx}`} className="odd:bg-gray-900/20">
                      <th scope="row" className="px-4 py-3 font-medium text-gray-200">
                        “{row.phrase}”
                      </th>
                      <td className="px-4 py-3 text-gray-100">
                        <span aria-label={row.ariaSymbol}>{row.symbol}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="examples-heading" className="mt-8 space-y-4">
            <h3 id="examples-heading" className="text-lg font-semibold text-white">
              Quick Conversions
            </h3>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
              <p className="mb-2">
                George’s age is three times Frank’s age.
              </p>
              <div className="sr-only">Equation: G equals 3 F</div>
              <div aria-hidden="true" dangerouslySetInnerHTML={kx("G = 3F")} />
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
              <p className="mb-2">
                Liz has 50 fewer online friends than Selby.
              </p>
              <div className="sr-only">Equation: L equals S minus 50</div>
              <div aria-hidden="true" dangerouslySetInnerHTML={kx("L = S - 50")} />
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
              <p className="mb-2">
                Paula has visited 12 more countries than Molly.
              </p>
              <div className="sr-only">Equation: P equals M plus 12</div>
              <div aria-hidden="true" dangerouslySetInnerHTML={kx("P = M + 12")} />
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
              <p className="mb-2">
                Jason ate 3 fewer than 4 times the number of candies that Sara ate.
              </p>
              <div className="sr-only">Equation: J equals 4 S minus 3</div>
              <div aria-hidden="true" dangerouslySetInnerHTML={kx("J = 4S - 3")} />
            </div>
          </section>

          <p className="mt-6">
            You’ll apply these translations throughout the chapter. As problems grow in complexity,
            lean on this dictionary first, then organize the algebra. Up next: age setups.
          </p>
        </article>
      </main>
    </>
  );
}