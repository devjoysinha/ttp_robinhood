import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Small, SSR-friendly KaTeX helpers (assumes KaTeX CSS is included globally)
function InlineTeX({ formula }: { formula: string }) {
  const html = katex.renderToString(formula, {
    displayMode: false,
    throwOnError: false,
  });
  return (
    <span
      className="inline-block align-middle"
      aria-label="mathematical expression"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function BlockTeX({ formula, ariaLabel }: { formula: string; ariaLabel?: string }) {
  const html = katex.renderToString(formula, {
    displayMode: true,
    throwOnError: false,
  });
  return (
    <div
      className="my-4 overflow-x-auto"
      aria-label={ariaLabel ?? "mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.3.4 Permutations with Indistinguishable Items | Combinatorics",
  description:
    "Learn how to count arrangements when some objects are identical. Master the formula N!/(r1! r2! … rn!), see quick examples, and test yourself with a GMAT‑style multiple‑choice problem.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.4 Permutations When Some Items Are Identical
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When an arrangement includes repeated items, swapping identical copies doesn’t create a new ordering. To avoid overcounting, divide the total permutations by the factorial of each repeat count.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Permutation formula with repeated items</p>
            <BlockTeX
              ariaLabel="Permutation formula with indistinguishable items"
              formula={"P = \\dfrac{N!}{r_1!\\, r_2!\\, \\cdots\\, r_n!}"}
            />
            <ul className="list-disc pl-5">
              <li>
                <strong>N</strong> is the total number of objects.
              </li>
              <li>
                Each <InlineTeX formula={"r_i"} /> is the count of one type of identical item (e.g., two A’s means <InlineTeX formula={"r = 2"} />).
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="quick-warmups" className="space-y-3">
          <h3 id="quick-warmups" className="text-white font-semibold">
            Quick warm‑ups
          </h3>
          <ul className="space-y-2">
            <li>
              All letters unique: ABCD → <InlineTeX formula={"4!"} /> = 24.
            </li>
            <li>
              Repeats present: AABB → <InlineTeX formula={"\\dfrac{4!}{2!\\,2!} = 6"} /> distinct arrangements.
            </li>
          </ul>
        </section>

        <MCQExample
          number={33}
          prompt="A vault holds one gold bar, one silver bar, two identical platinum bars, and one titanium bar. In how many distinct ways can the bars be arranged in a line?"
          options={["30", "60", "120", "210", "320"]}
          correct="60"
          solution={
            <>
              <p>
                There are 5 bars in total, so start with <InlineTeX formula={"5!"} />.
                Two platinum bars are indistinguishable, so divide by <InlineTeX formula={"2!"} />:
              </p>
              <BlockTeX formula={"\\dfrac{5!}{2!} = 60"} />
              <p>Therefore, the correct answer is 60.</p>
            </>
          }
        />

        <section aria-labelledby="relabeling" className="space-y-3">
          <h3 id="relabeling" className="text-white font-semibold">
            A quick relabeling trick
          </h3>
          <p>
            You can relabel the bars as letters to visualize the counting. For the vault above, let G = gold, S = silver, P = platinum, and T = titanium. You are arranging G, S, P, P, T. The two P’s are identical, so the count matches the formula: <InlineTeX formula={"5!/2! = 60"} />.
          </p>
        </section>

        <section aria-labelledby="speed-check" className="space-y-3">
          <h3 id="speed-check" className="text-white font-semibold">
            Speed check
          </h3>
          <p>
            How many distinct strings can you make from the multiset B, B, B, R, R, R?
          </p>
          <BlockTeX formula={"\\dfrac{6!}{3!\\,3!} = 20"} />
          <p>
            Reason: there are 6 total positions, with three B’s and three R’s, so divide by the repeats to avoid counting swaps of identical letters.
          </p>
        </section>

        <p>
          Bottom line: start with <InlineTeX formula={"N!"} />, then divide by <InlineTeX formula={"r_i!"} /> for every group of identical items. This eliminates duplicate arrangements created by swapping indistinguishable copies.
        </p>
      </article>
    </main>
  );
}