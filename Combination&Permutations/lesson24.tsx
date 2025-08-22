import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import katex from "katex";

export const metadata: Metadata = {
  title: "16.3.3 Indistinguishable Items in Permutations | Combinatorics",
  description:
    "Learn why identical items collapse many arrangements into the same outcome and how ignoring that fact leads to overcounting. Includes intuitive examples and common pitfalls.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="inline-block align-baseline"
      aria-label={ariaLabel || expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet (load once globally in your app layout for best performance) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
        integrity="sha384-6sktwKZzT4yd3yqzGd2VfN8nYJw9mX8x+qQjG/8JH5oC3r9a9Kk8g2MUiQnBbq9B"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.3 Beware of Indistinguishable Items in Permutation Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some items are identical: they look the same and cannot be told apart. Think repeated letters like “S, S, S, S, S,” five copies of the number 5, or five pairs of the same red pants. When objects are indistinguishable, many orderings that would differ with distinct objects collapse into a single arrangement.
        </p>

        <p>
          For instance, imagine a license plate that consists only of the letter S, used five times. Or picture a jar with five identical blue marbles drawn one at a time. Without any markings or unique features, you cannot tell one S (or one marble) from another—so swapping their positions does not create a new, different outcome.
        </p>

        <MustKnow>
          In permutation questions, always count only the distinguishable arrangements. If some items are identical, many “orders” are actually the same outcome. Ignoring indistinguishability leads to overcounting.
        </MustKnow>

        <section aria-labelledby="why-it-matters">
          <h3 id="why-it-matters" className="text-xl font-semibold text-white">
            Why this matters
          </h3>
          <p>
            If you treat identical items as if they were all different, you’ll inflate the count. A common mistake is to compute the number of orderings for five identical letters as if they were five distinct letters.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4">
              <h4 className="mb-2 font-semibold text-white">Naive (incorrect) reasoning</h4>
              <p className="mb-2">
                “There are 5 positions, so just arrange 5 items in sequence.”
              </p>
              <p className="text-gray-200">
                <MathInline expr={"5! = 5\\times4\\times3\\times2\\times1 = 120"} ariaLabel="5 factorial equals 120" />
              </p>
              <p className="mt-2 text-sm text-gray-400">
                This assumes all five items are different, which is not true here.
              </p>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4">
              <h4 className="mb-2 font-semibold text-white">What’s actually happening</h4>
              <p>
                Every five-letter sequence is SSSSS—no matter how you “rearrange” the S’s, the sequence doesn’t change. So there is only one distinguishable arrangement.
              </p>
              <p className="mt-2 font-medium text-emerald-300" aria-live="polite">
                Correct count: 1
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="more-examples">
          <h3 id="more-examples" className="text-xl font-semibold text-white">
            More intuition
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Drawing marbles from a jar of five identical blue marbles: the sequence “blue, blue, blue, blue, blue” is the same in any “order,” because no draw looks unique.
            </li>
            <li>
              Five copies of the same shirt lined up in a closet: exchanging their positions doesn’t produce a new arrangement you can tell apart.
            </li>
          </ul>
        </section>

        <section aria-labelledby="common-pitfall">
          <h3 id="common-pitfall" className="text-xl font-semibold text-white">
            A common pitfall
          </h3>
          <p>
            Overcounting typically occurs when we apply a permutations rule as if all items were distinct. For five identical items, computing <MathInline expr={"5!"} ariaLabel="5 factorial" /> or using a “fill the slots” product like <MathInline expr={"5\\times4\\times3\\times2\\times1"} ariaLabel="five times four times three times two times one" /> is inappropriate, because swapping identical items doesn’t create new, distinguishable results.
          </p>
        </section>

        <p className="text-gray-300">
          Up next, we’ll formalize how to adjust counts when some items repeat, so you can handle words like “LEVEL,” digits with repeats, and similar scenarios without overcounting.
        </p>
      </article>
    </main>
  );
}