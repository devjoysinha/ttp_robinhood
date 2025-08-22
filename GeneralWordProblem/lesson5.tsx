import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({
  expr,
  ariaLabel,
  className = "",
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel || expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({
  expr,
  ariaLabel,
  className = "",
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: true,
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel || expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.2 Moving from Words to Equations | GMAT Word Problems",
  description:
    "Translate everyday language into math with speed and accuracy. Learn common phrase-to-symbol mappings and see quick examples that turn sentences into equations.",
};

const mappings: Array<{
  phrase: string;
  symbol: string;
  katex: string;
  hint?: string;
}> = [
  { phrase: "is / was / has been", symbol: "=", katex: "=" },
  { phrase: "more", symbol: "+", katex: "+" },
  { phrase: "fewer / less", symbol: "−", katex: "-" },
  {
    phrase: "less than",
    symbol: "−",
    katex: "-",
    hint:
      'Watch order: "x is 5 less than y" means x = y − 5, not 5 − y.',
  },
  { phrase: "years older", symbol: "+", katex: "+" },
  { phrase: "years younger", symbol: "−", katex: "-" },
  { phrase: "times / as many / factor of", symbol: "×", katex: "\\times" },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2 Turning Words Into Equations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A big step in mastering GMAT word problems is converting everyday
          statements into clean algebra. The faster you move from words to
          symbols, the more brainpower you’ll have for strategy and validation.
        </p>

        <MustKnow>
          Build a quick “translation dictionary” in your head. Identify
          quantities, name variables, and replace phrases with math operators in
          the correct order. Keep a special eye on phrases like “less than,”
          which reverse the subtraction order.
        </MustKnow>

        <section aria-labelledby="phrase-to-symbol">
          <h3 id="phrase-to-symbol" className="sr-only">
            Common phrase-to-symbol mappings
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {mappings.map((m, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-700 bg-slate-800/40 p-4"
              >
                <div className="text-sm text-gray-400">Phrase</div>
                <div className="mt-1 font-medium text-gray-100">{m.phrase}</div>
                <div className="mt-3 text-sm text-gray-400">Translation</div>
                <div className="mt-1 text-xl font-semibold text-white">
                  <KInline expr={m.katex} ariaLabel={`${m.symbol}`} />
                </div>
                {m.hint && (
                  <p className="mt-3 text-xs text-gray-400">{m.hint}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <p>
          Let’s convert a few sentences into equations. First, define variables
          clearly. Then translate the relationship word-by-word, keeping order
          intact.
        </p>

        <section aria-labelledby="examples">
          <h3 id="examples" className="sr-only">
            Translation examples
          </h3>
          <ol className="list-inside list-decimal space-y-4">
            <li>
              “George’s age is three times Frank’s.”
              <div className="mt-1 text-gray-400">Let G = George, F = Frank.</div>
              <KBlock expr={"G = 3F"} ariaLabel="G equals 3 F" />
            </li>
            <li>
              “Liz has 50 fewer online friends than Selby.”
              <div className="mt-1 text-gray-400">Let L = Liz, S = Selby.</div>
              <KBlock expr={"L = S - 50"} ariaLabel="L equals S minus 50" />
            </li>
            <li>
              “Paula has visited 12 more countries than Molly.”
              <div className="mt-1 text-gray-400">Let P = Paula, M = Molly.</div>
              <KBlock expr={"P = M + 12"} ariaLabel="P equals M plus 12" />
            </li>
            <li>
              “Jason ate 3 fewer than 4 times the candies Sara ate.”
              <div className="mt-1 text-gray-400">Let J = Jason, S = Sara.</div>
              <KBlock expr={"J = 4S - 3"} ariaLabel="J equals 4 S minus 3" />
            </li>
          </ol>
        </section>

        <MCQExample
          number={1}
          prompt='Which equation correctly represents: “Carla’s score is 12 less than twice Dan’s score”? Let C = Carla, D = Dan.'
          options={[
            "C = 2D - 12",
            "C = 12 - 2D",
            "C = 2(D - 12)",
            "C = 2D + 12",
          ]}
          correct="C = 2D - 12"
          solution={
            <>
              <p>
                “Twice Dan’s” translates to 2D. “12 less than” means subtract 12
                from that quantity. So C equals 2D minus 12.
              </p>
              <p className="mt-2">
                Common pitfall: flipping the order for “less than.” The pattern
                is “a is b less than c” → a = c − b.
              </p>
              <div className="mt-2">
                <KInline expr={"C = 2D - 12"} ariaLabel="C equals 2 D minus 12" />
              </div>
            </>
          }
        />

        <p>
          As you tackle tougher problems, this translation step stays the same:
          define variables, convert phrases to symbols, and be precise about the
          order implied by the wording.
        </p>
      </article>
    </main>
  );
}