import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.2 Translating Words to Equations | Word Problems",
  description:
    "Learn how to turn everyday language into math: quick phrase-to-symbol translations, common patterns, and worked examples rendered with KaTeX for clarity.",
};

// Simple KaTeX inline renderer (server component safe)
function MathInline({
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
  });
  return (
    <span
      className={className}
      role="math"
      aria-label={ariaLabel || expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2 From Words to Equations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A big hurdle in word problems is converting everyday phrases into precise algebra.
          With a small set of translation rules and patterns, you can turn sentences into
          equations quickly and reliably.
        </p>

        <MustKnow>
          Translating text to math is pattern matching. Identify quantities, compare them,
          and map verbs/connectors to symbols. Keep variables consistent and mirror the sentence
          order carefully to avoid sign mistakes.
        </MustKnow>

        <section aria-labelledby="quick-dictionary-heading" className="space-y-3">
          <h3
            id="quick-dictionary-heading"
            className="text-base font-semibold text-gray-100"
          >
            Quick phrase-to-symbol dictionary
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-800/50">
            <table className="min-w-full border-collapse text-left">
              <caption className="sr-only">
                Common English phrases and their mathematical translations
              </caption>
              <thead className="bg-gray-900/40 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    English
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Translation
                  </th>
                  <th scope="col" className="px-4 py-3">
                    English
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Translation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3">is / was / has been</td>
                  <td className="px-4 py-3">
                    <MathInline expr="=" ariaLabel="equals" />
                  </td>
                  <td className="px-4 py-3">less / fewer / years younger</td>
                  <td className="px-4 py-3">
                    <MathInline expr="-" ariaLabel="minus" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">more / years older</td>
                  <td className="px-4 py-3">
                    <MathInline expr="+" ariaLabel="plus" />
                  </td>
                  <td className="px-4 py-3">times / as many / factor</td>
                  <td className="px-4 py-3">
                    <MathInline expr="\times" ariaLabel="times" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400">
            Tip: “A is 5 less than B” means A is smaller, so write{" "}
            <MathInline expr="A = B - 5" ariaLabel="A equals B minus 5" />.
            Reversing the order is a common error.
          </p>
        </section>

        <section aria-labelledby="examples-heading" className="space-y-4">
          <h3 id="examples-heading" className="text-base font-semibold text-gray-100">
            Quick translations
          </h3>

          <ul className="space-y-3">
            <li className="rounded-md bg-gray-900/30 p-4">
              “George’s age is three times Frank’s age.”
              <div className="mt-2">
                <MathInline expr="G = 3F" ariaLabel="G equals three times F" />
              </div>
            </li>

            <li className="rounded-md bg-gray-900/30 p-4">
              “Liz has 50 fewer online friends than Selby.”
              <div className="mt-2">
                <MathInline expr="L = S - 50" ariaLabel="L equals S minus 50" />
              </div>
            </li>

            <li className="rounded-md bg-gray-900/30 p-4">
              “Paula has been to 12 more countries than Molly.”
              <div className="mt-2">
                <MathInline expr="P = M + 12" ariaLabel="P equals M plus 12" />
              </div>
            </li>

            <li className="rounded-md bg-gray-900/30 p-4">
              “Jason ate 3 fewer than 4 times the number of candies that Sara ate.”
              <div className="mt-2">
                <MathInline expr="J = 4S - 3" ariaLabel="J equals four S minus three" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Watch the grouping: “3 fewer than 4 times S” is{" "}
                <MathInline expr="4S - 3" ariaLabel="four S minus three" />, not{" "}
                <MathInline expr="4(S - 3)" ariaLabel="four times S minus three grouped" />.
              </p>
            </li>
          </ul>
        </section>

        <MCQExample
          number={21}
          prompt='Which equation best represents: "Jason ate 3 fewer than 4 times the number of candies that Sara ate"?'
          options={[
            "J = 4S − 3",
            "J = 4(S − 3)",
            "J = 3 − 4S",
            "J = 3S − 4",
            "J = S − 4 · 3",
          ]}
          correct="J = 4S − 3"
          solution={
            <>
              <p>
                “4 times the number Sara ate” translates to <strong>4S</strong>. “3 fewer than”
                means subtract 3 from that quantity. So the equation is{" "}
                <MathInline expr="J = 4S - 3" ariaLabel="J equals four S minus three" />.
              </p>
              <p>
                The choice <em>J = 4(S − 3)</em> incorrectly subtracts first, then multiplies, which
                changes the meaning.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up-heading" className="space-y-2">
          <h3 id="wrap-up-heading" className="text-base font-semibold text-gray-100">
            Wrap-up
          </h3>
          <p>
            Master the small dictionary above and keep sentence order intact. With consistent
            variable names and attention to “more than” vs. “less than,” most word problems turn
            into clean algebra in a few seconds.
          </p>
        </section>
      </article>
    </main>
  );
}