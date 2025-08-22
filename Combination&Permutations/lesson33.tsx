import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: false });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="inline-block align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: true });
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? expr}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.3.12 Link Items That Must Stay Together | Combinatorics",
  description:
    "Learn the block method for permutations when certain items must be adjacent. Includes a general formula, a walkthrough mini‑example, and two GMAT‑style multiple‑choice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.12 When certain items must be adjacent, treat them as one block
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some arrangement problems require specific objects to be next to one another. The fastest approach is to group
          those must‑stay‑together items into a single “block,” arrange the blocks, and then account for the internal
          orderings within each block.
        </p>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example
          </h3>
          <p>
            Abby (A), John (J), Sara (S), Mark (M), and Todd (T) stand in a line. If John and Sara must be adjacent,
            bundle them as one unit. Visualize either JS or SJ as a single block, alongside A, M, and T. That gives four
            entities to arrange.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Arrange the four entities: <MathInline expr="4!" ariaLabel="4 factorial" /> ways.
            </li>
            <li>
              Inside the block, J and S can swap: <MathInline expr="2!" ariaLabel="2 factorial" /> ways.
            </li>
          </ul>
          <p className="font-semibold">
            Total arrangements:{" "}
            <MathInline expr="4!\times 2! = 48" ariaLabel="four factorial times two factorial equals forty eight" />.
          </p>
        </section>

        <section aria-labelledby="general-rule">
          <h3 id="general-rule" className="text-xl font-semibold text-white">
            General rule
          </h3>
          <p>
            If you have <MathInline expr="T" ariaLabel="T" /> distinct items in a line and a group of{" "}
            <MathInline expr="g" ariaLabel="g" /> of them must remain together, treat that group as a single unit. You
            then have <MathInline expr="T-g+1" ariaLabel="T minus g plus 1" /> units to arrange, and finally permute the{" "}
            <MathInline expr="g" ariaLabel="g" /> items inside their block.
          </p>
          <MathBlock
            expr="\text{Total arrangements}=(T-g+1)!\times g!"
            ariaLabel="Total arrangements equals open parenthesis T minus g plus 1 close parenthesis factorial times g factorial"
          />
        </section>

        <MustKnow>
          When a subset must be adjacent, compress that subset into a single block. Arrange the blocks, then multiply by
          the internal permutations of the block(s). In symbols:
          <div className="mt-2">
            <MathBlock expr="(T-g+1)!\times g!" ariaLabel="open parenthesis T minus g plus 1 close parenthesis factorial times g factorial" />
          </div>
          Here, T − g + 1 counts the number of units after linking, and g! counts the ways to order the g linked items.
        </MustKnow>

        <section aria-labelledby="mcq-42">
          <MCQExample
            number={42}
            prompt="A photographer lines up Ru, Sol, Tok, Uhm, Vic, and Wu. If Ru and Vic refuse to be separated, how many distinct lineups are possible?"
            options={["120", "240", "288", "576", "1,440"]}
            correct="240"
            solution={
              <>
                <p>
                  Treat Ru and Vic as one block. Now there are five units to arrange: the RV block plus the other four
                  people. That yields <MathInline expr="5!" ariaLabel="5 factorial" /> arrangements. Inside the block,
                  Ru and Vic can switch places in <MathInline expr="2!" ariaLabel="2 factorial" /> ways.
                </p>
                <p className="font-semibold">
                  Total: <MathInline expr="5!\times 2!=240" ariaLabel="five factorial times two factorial equals two hundred forty" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-43">
          <MCQExample
            number={43}
            prompt="Lars plans the order of 7 favorite songs. Four of them are ballads, and he wants the ballads performed consecutively. How many orders are possible?"
            options={["3! × 3!", "3! × 4!", "4! × 4!", "3! × 7!", "4! × 7!"]}
            correct="4! × 4!"
            solution={
              <>
                <p>
                  Group the 4 ballads as one block. Now there are{" "}
                  <MathInline expr="7-4+1=4" ariaLabel="seven minus four plus one equals four" /> units to arrange,
                  which can be done in <MathInline expr="4!" ariaLabel="4 factorial" /> ways. Within the block, the 4
                  ballads can be ordered in <MathInline expr="4!" ariaLabel="4 factorial" /> ways.
                </p>
                <p className="font-semibold">
                  Total: <MathInline expr="(7-4+1)!\times 4!=4!\times 4!" ariaLabel="open parenthesis seven minus four plus one close parenthesis factorial times four factorial equals four factorial times four factorial" />
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            The “link into a block” strategy reduces adjacency constraints to a standard permutation of fewer units,
            then multiplies by the internal permutations of the linked items. Whenever you see “must be together,” think
            “block.”
          </p>
        </section>
      </article>
    </main>
  );
}