import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.2 Moving from Words to Equations | General Word Problems",
  description:
    "Turn everyday language into algebra quickly and accurately. Learn common word-to-symbol translations, see worked examples, and practice translating statements into equations.",
};

function MathInline({
  expr,
  ariaLabel,
  className,
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
  className,
}: {
  expr: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

const mappings = [
  {
    english: ["is", "was", "has been"],
    math: "=",
    katex: "=",
    example: "x is 5 → x = 5",
  },
  {
    english: ["more", "years older"],
    math: "+",
    katex: "+",
    example: "n is 3 more than m → n = m + 3",
  },
  {
    english: ["less", "fewer", "years younger", "less than"],
    math: "−",
    katex: "-",
    example: "p is 8 fewer than q → p = q - 8",
  },
  {
    english: ["times", "as many", "factor"],
    math: "×",
    katex: "\\times",
    example: "a is twice b → a = 2b",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2 Moving from Words to Equations
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          A big hurdle in word problems is converting plain English into precise
          algebra. The faster you can translate common phrases into symbols, the
          more mental space you’ll have for strategy and logic.
        </p>

        <MustKnow>
          Treat translation as pattern‑matching. Identify the relationship
          words—such as “is,” “more,” “less,” and “times”—and map them directly
          to mathematical operations. Then define variables and write the
          equation exactly as stated.
        </MustKnow>

        <section aria-labelledby="translation-table" className="space-y-4">
          <h3 id="translation-table" className="text-xl font-semibold text-white">
            Common word-to-symbol translations
          </h3>
          <div
            role="table"
            aria-label="Word to math translation quick reference"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {mappings.map((item, idx) => (
              <div
                role="row"
                key={idx}
                className="rounded-lg border border-gray-800 bg-gray-900/40 p-4 shadow-sm"
              >
                <div role="cell" className="mb-2 text-sm font-medium text-gray-400">
                  Words
                </div>
                <ul className="mb-3 list-disc pl-5 text-gray-200">
                  {item.english.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
                <div role="cell" className="mb-1 text-sm font-medium text-gray-400">
                  Symbol
                </div>
                <div className="mb-3 text-lg text-gray-100">
                  <MathInline expr={item.katex} ariaLabel={`Symbol ${item.math}`} />
                </div>
                <div role="cell" className="mb-1 text-sm font-medium text-gray-400">
                  Example
                </div>
                <p className="text-gray-200">
                  {item.example.includes("→") ? (
                    <>
                      {item.example.split("→")[0].trim()} →{" "}
                      <MathInline
                        expr={item.example.split("→")[1].trim().replaceAll("*", "\\cdot ")}
                        ariaLabel="example equation"
                      />
                    </>
                  ) : (
                    item.example
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="quick-examples" className="space-y-4">
          <h3 id="quick-examples" className="text-xl font-semibold text-white">
            Quick translations
          </h3>
          <div className="space-y-3">
            <p>
              “Amina’s age is triple Brendan’s age.”
              <MathBlock expr="A = 3B" ariaLabel="A equals three times B" />
            </p>
            <p>
              “Lee has 45 fewer followers than Sam.”
              <MathBlock expr="L = S - 45" ariaLabel="L equals S minus forty-five" />
            </p>
            <p>
              “Priya has visited 8 more countries than Minh.”
              <MathBlock expr="P = M + 8" ariaLabel="P equals M plus eight" />
            </p>
            <p>
              “Jorge ate 3 fewer than 4 times what Saira ate.”
              <MathBlock expr="J = 4S - 3" ariaLabel="J equals four S minus three" />
            </p>
          </div>
        </section>

        <MCQExample
          number={31}
          prompt="Translate the statement: “Carla owns twice as many books as Devon, and Evan has 3 fewer books than Carla.” Let C, D, and E represent their numbers of books. Which set of equations is correct?"
          options={[
            "C = 2D and E = C − 3",
            "C = D ÷ 2 and E = C + 3",
            "C = 2D − 3 and E = C",
            "C = D + 2 and E = C − 3",
            "C = 2(D − 3) and E = C",
          ]}
          correct="C = 2D and E = C − 3"
          solution={
            <>
              <p>
                “Twice as many” means multiply by 2, so C equals 2 times D:
              </p>
              <MathBlock expr="C = 2D" ariaLabel="C equals two D" />
              <p>
                “3 fewer than Carla” means subtract 3 from Carla’s count to get Evan’s count:
              </p>
              <MathBlock expr="E = C - 3" ariaLabel="E equals C minus three" />
              <p>Therefore, the correct pair is C = 2D and E = C − 3.</p>
            </>
          }
        />

        <section aria-labelledby="ds-practice" className="space-y-4">
          <h3 id="ds-practice" className="text-xl font-semibold text-white">
            Data Sufficiency drill: translating efficiently
          </h3>
          <ExampleCard
            number={32}
            title="Find x from word statements"
            statements={[
              "x and y are integers. What is the value of x?",
              "1) x is 5 less than twice y",
              "2) y = 7",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  We need a single value for x. Translate each statement to an equation.
                </p>
                <p>
                  Statement (1): “x is 5 less than twice y” translates to:
                </p>
                <MathBlock expr="x = 2y - 5" ariaLabel="x equals two y minus five" />
                <p>
                  This alone is not enough—x varies with y. Not sufficient.
                </p>
                <p>
                  Statement (2): y = 7 gives a specific y, but x is still unknown. Not
                  sufficient.
                </p>
                <p>
                  Together: substitute y = 7 into x = 2y − 5:
                </p>
                <MathBlock expr="x = 2(7) - 5 = 14 - 5 = 9" ariaLabel="x equals nine" />
                <p>
                  Now x is uniquely determined. Together sufficient → C.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="closing" className="space-y-4">
          <h3 id="closing" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Translation is about reading structure: define variables, map the
            relationship words to operations, and write the equation exactly as
            stated. With practice, this becomes automatic and frees you to focus
            on strategy and checking reasonableness.
          </p>
        </section>
      </article>
    </main>
  );
}