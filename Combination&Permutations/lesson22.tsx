import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  const Element: any = display ? "div" : "span";
  return (
    <Element
      role="math"
      aria-label={ariaLabel || expr}
      className={display ? "my-2" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.3.1 Recognizing Permutations | Combinatorics",
  description:
    "Learn how to identify when order matters in counting problems, recognize permutation scenarios quickly, and see common examples (podium finishes, keypad codes, arranging books, and letter scrambles) with clear reasoning and formulas.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.1 Recognizing Permutations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Selecting items and arranging items are not the same thing. When you only care
          about who or what is chosen, that’s a combination. When the positions or sequence
          of the chosen items matter, you’re dealing with a permutation.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              Quick test: Does swapping two chosen items create a different outcome? If yes,
              it&apos;s a permutation (order-sensitive).
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Picking <em>r</em> ordered positions from <em>n</em> distinct items:
                <Math expr="P(n, r) = \frac{n!}{(n-r)!}" ariaLabel="P of n r equals n factorial over n minus r factorial" />
              </li>
              <li>
                Arranging <em>n</em> distinct items in a line:
                <Math expr="n!" ariaLabel="n factorial" />
              </li>
              <li>
                If items repeat, you&apos;ll adjust with the indistinguishable-items formula
                (covered in a later section).
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="medals">
          <h3 id="medals" className="text-xl font-semibold text-white">
            Example 1: Podium finishes
          </h3>
          <p className="mt-2">
            A contest has ten participants. One each will be awarded Gold, Silver, and
            Bronze. Are we looking at a permutation or a combination?
          </p>
          <p>
            The three spots (Gold, Silver, Bronze) are different roles. Swapping two winners
            changes the outcome, so this is a permutation. If you also want the count:
          </p>
          <Math
            display
            expr="^{10}P_{3} = \frac{10!}{(10-3)!} = 10 \times 9 \times 8 = 720"
            ariaLabel="10 permute 3 equals 10 factorial over 7 factorial equals 10 times 9 times 8 equals 720"
          />
        </section>

        <section aria-labelledby="lock">
          <h3 id="lock" className="text-xl font-semibold text-white">
            Example 2: A 4-digit keypad code
          </h3>
          <p className="mt-2">
            A student must enter a 4-digit sequence on a keypad with digits 0–9. Since
            the order of entry must match exactly, this is a permutation scenario (even if
            people casually call it a “combination lock”).
          </p>
          <p className="mt-2">
            Two common interpretations on standardized tests:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Digits can repeat:
              <Math display expr="10^4 = 10{,}000" ariaLabel="Ten to the power of four equals ten thousand" />
            </li>
            <li>
              Digits cannot repeat:
              <Math
                display
                expr="^{10}P_{4} = \frac{10!}{6!} = 10 \times 9 \times 8 \times 7 = 5{,}040"
                ariaLabel="10 permute 4 equals 10 factorial over 6 factorial equals 10 times 9 times 8 times 7 equals 5,040"
              />
            </li>
          </ul>
          <p className="mt-2">
            Always read for repetition rules; if none are stated, many tests assume
            repetition is allowed for keypad codes.
          </p>
        </section>

        <section aria-labelledby="books">
          <h3 id="books" className="text-xl font-semibold text-white">
            Example 3: Lining up four books
          </h3>
          <p className="mt-2">
            A librarian needs to place four distinct books on a shelf in a row. Changing the
            order creates a new arrangement, so this is a permutation. The number of
            sequences is:
          </p>
          <Math display expr="4! = 24" ariaLabel="Four factorial equals twenty four" />
        </section>

        <MCQExample
          number={1}
          prompt='How many distinct arrangements are possible for the letters in the word "love"?'
          options={["12", "16", "20", "24", "36"]}
          correct="24"
          solution={
            <>
              <p>
                All four letters are different, and order matters when we arrange them.
                Therefore, the count is:
              </p>
              <Math display expr="4! = 24" ariaLabel="Four factorial equals twenty four" />
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="A race has 10 runners. In how many ways can 1st, 2nd, and 3rd place be awarded?"
          options={["120", "210", "720", "1000", "5040"]}
          correct="720"
          solution={
            <>
              <p>
                Podium spots are distinct positions, so this is a permutation of 10 items
                taken 3 at a time:
              </p>
              <Math
                display
                expr="^{10}P_{3} = \frac{10!}{7!} = 10 \times 9 \times 8 = 720"
                ariaLabel="10 permute 3 equals 10 factorial over 7 factorial equals 10 times 9 times 8 equals 720"
              />
            </>
          }
        />

        <MustKnow>
          Big picture: combinations answer “which items,” while permutations answer “in what
          order.” When changing positions changes the outcome, reach for permutations and,
          when appropriate, the formula
          <Math expr="P(n, r) = \frac{n!}{(n-r)!}" ariaLabel="P of n r equals n factorial over n minus r factorial" />.
        </MustKnow>
      </article>
    </main>
  );
}