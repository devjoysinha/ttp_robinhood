import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "16.3.10 Arrangements with Restrictions | Combinatorics",
  description:
    "Learn how to count permutations under constraints: fixed positions, adjacency requirements, and separation rules. Includes quick strategy notes and practice prompts with solution sketches.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.10 Arrangements with Restrictions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Plain permutation problems ask you to order items freely. Harder problems
          add rules—certain spots must be used, some people must (or must not) sit
          together, a specific letter must go first, and so on. These constraints
          don’t change the core idea; they just nudge you to count with structure.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              Core tools for restricted arrangements
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Slot thinking: map out positions first, then fill them under the
                given rules, multiplying choices across independent slots.
              </li>
              <li>
                Link‑as‑a‑block: when items must stay together, treat them as one
                super‑item, then multiply by the internal arrangements of that block.
              </li>
              <li>
                Keep‑apart via complement: count all arrangements, subtract those
                where the forbidden adjacency occurs.
              </li>
              <li>
                Anchor method: lock down the most restrictive element(s) first to
                simplify the remaining choices.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="permutation-formulas" className="space-y-3">
          <h3 id="permutation-formulas" className="text-xl font-semibold text-white">
            Notation you’ll use
          </h3>
          <p>
            The number of ways to arrange k distinct items selected from n distinct items is
            given by the permutation formula:
          </p>
          <BlockMath math="\,^{n}\!P_{k} = \dfrac{n!}{(n-k)!}" />
          <p>
            When all n distinct items are arranged in order, there are{" "}
            <InlineMath math="n!" /> permutations.
          </p>
        </section>

        <section aria-labelledby="practice-prompts" className="space-y-5">
          <h3 id="practice-prompts" className="text-xl font-semibold text-white">
            Practice prompts (with solution sketches)
          </h3>

          {/* Prompt 1 */}
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Prompt 1</p>
            <p className="mt-1">
              Six people comprise three men and three women. In how many ways can they stand
              in a row if each man must occupy an odd position in the lineup?
            </p>
            <details className="mt-3 group">
              <summary className="cursor-pointer text-sm text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                See a quick counting plan
              </summary>
              <div className="mt-2 text-sm text-gray-300">
                <p>
                  The odd positions are 1, 3, and 5. Place the three men in the odd slots in{" "}
                  <InlineMath math="3!" /> ways, and the three women in the even slots (2, 4, 6)
                  in <InlineMath math="3!" /> ways. Total:{" "}
                  <InlineMath math="3!\times 3! = 36" />.
                </p>
              </div>
            </details>
          </div>

          {/* Prompt 2 */}
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Prompt 2</p>
            <p className="mt-1">
              You have four consonants and one vowel. If the vowel must be first, how many
              different 5‑letter arrangements are possible?
            </p>
            <details className="mt-3 group">
              <summary className="cursor-pointer text-sm text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                See a quick counting plan
              </summary>
              <div className="mt-2 text-sm text-gray-300">
                <p>
                  The first position is fixed by the vowel (1 way). Arrange the four consonants
                  in the remaining slots in <InlineMath math="4!" /> ways. Total:{" "}
                  <InlineMath math="4! = 24" />.
                </p>
              </div>
            </details>
          </div>

          {/* Prompt 3 */}
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Prompt 3</p>
            <p className="mt-1">
              Five distinct people—Jade, Mira, Sam, Corey, and Ola—line up. If Mira and Sam
              must stand next to each other, how many orders are possible?
            </p>
            <details className="mt-3 group">
              <summary className="cursor-pointer text-sm text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                See a quick counting plan
              </summary>
              <div className="mt-2 text-sm text-gray-300">
                <p>
                  Treat the pair (Mira, Sam) as a single block. Then you have 4 items
                  (the block + 3 others) to arrange in <InlineMath math="4!" /> ways. Inside
                  the block, the pair can be ordered in <InlineMath math="2!" /> ways.
                  Total: <InlineMath math="2!\times 4! = 48" />.
                </p>
              </div>
            </details>
          </div>

          {/* Prompt 4 */}
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Prompt 4</p>
            <p className="mt-1">
              Six distinct people stand in a row. Ari and Ben refuse to stand next to each
              other. How many valid arrangements are there?
            </p>
            <details className="mt-3 group">
              <summary className="cursor-pointer text-sm text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                See a quick counting plan
              </summary>
              <div className="mt-2 text-sm text-gray-300">
                <p>
                  Use the complement. Total orders: <InlineMath math="6!" />. Count the bad
                  ones where Ari and Ben are adjacent by making them a block: there are{" "}
                  <InlineMath math="2\times 5!" /> such orders (the pair can be AB or BA).
                  So valid arrangements:{" "}
                  <InlineMath math="6! - 2\cdot 5! = 720 - 240 = 480" />.
                </p>
              </div>
            </details>
          </div>

          {/* Prompt 5 */}
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Prompt 5</p>
            <p className="mt-1">
              Four people—Tanya, Taran, Bina, and Sia—are seated in a single row of four
              seats. Bina must sit in the first seat, and Tanya and Sia must sit next to
              each other. How many seatings satisfy these rules?
            </p>
            <details className="mt-3 group">
              <summary className="cursor-pointer text-sm text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                See a quick counting plan
              </summary>
              <div className="mt-2 text-sm text-gray-300">
                <p>
                  With seat 1 fixed by Bina, seats 2–4 remain. The pair (Tanya, Sia) can occupy
                  seats (2,3) or (3,4). In either case, the pair has{" "}
                  <InlineMath math="2!" /> internal orders. The last person takes the remaining
                  seat in 1 way. Total: <InlineMath math="2\times 2! = 4" />.
                </p>
              </div>
            </details>
          </div>
        </section>

        <p className="pt-2">
          Bottom line: restrictions are just structure. Identify the slots, decide whether to
          link items or count by complement, and multiply carefully. When in doubt, anchor the
          tightest rule first to keep the counting simple.
        </p>
      </article>
    </main>
  );
}