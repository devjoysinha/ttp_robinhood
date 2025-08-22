import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "16.2.2 Solving Combination Problems | Combinatorics",
  description:
    "Master two fast ways to compute combinations: the formula and the Box‑and‑Fill approach. Includes a worked multiple‑choice example with step‑by‑step reasoning rendered with KaTeX.",
};

function Math({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
    output: "html",
  });
  const Tag = block ? "div" : "span";
  return <Tag role="math" aria-label={ariaLabel ?? "mathematical expression"} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">16. Combinations and Permutations</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">16.2.2 Solving Combination Problems</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Here are two reliable techniques for tackling basic combination questions. You should be comfortable with
          both—use whichever feels quicker in the moment.
        </p>

        <section aria-labelledby="method-1">
          <h3 id="method-1" className="text-xl font-semibold text-white">Method 1: The Combination Formula</h3>
          <p>The number of ways to choose k items from n items (order does not matter) is given by:</p>
          <Math expr="\\binom{n}{k} = \\frac{n!}{k!(n-k)!}" block ariaLabel="n choose k equals n factorial over k factorial times n minus k factorial" />
          <p>
            You’ll also see this written as <Math expr="{^{n}}C_{k}" ariaLabel="n C k" /> and read as “n choose k,” where:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>n is the total number of available items</li>
            <li>k is how many items are selected</li>
          </ul>

          <MustKnow>Commit the combination formula to memory: it’s the fastest path for many problems.</MustKnow>
        </section>

        <MCQExample
          number={101}
          prompt="A coach needs to choose 3 players from a roster of 7. In how many distinct ways can the coach make the selection?"
          options={["10", "25", "35", "60", "120"]}
          correct="35"
          solution={
            <>
              <p>
                Because order doesn’t matter (the group {`{A, B, C}`} is the same as {`{B, A, C}`}),
                this is a combinations problem.
              </p>
              <p className="font-semibold text-white">Formula approach</p>
              <div className="space-y-2">
                <Math expr="n=7,\\; k=3" />
                <Math expr="\\binom{7}{3} = \\frac{7!}{3!\\,(7-3)!} = \\frac{7!}{3!\\,4!}" block />
                <Math expr="\\frac{7\\times 6\\times 5\\times 4!}{3!\\times 4!} = \\frac{7\\times 6\\times 5}{3\\times 2\\times 1} = 35" block />
              </div>

              <p className="mt-4 font-semibold text-white">Box‑and‑Fill approach</p>
              <p>
                Think of three selection “slots.” There are 7 choices for the first slot, 6 for the second, and 5 for
                the third:
              </p>
              <Math expr="7 \\times 6 \\times 5" block />
              <p>
                Because order doesn’t matter, we’ve overcounted by all possible orders of the same 3 players. Divide by
                3! to correct:
              </p>
              <Math expr="\\frac{7\\times 6\\times 5}{3!} = \\frac{7\\times 6\\times 5}{6} = 35" block />
              <p>Therefore, the correct answer is 35.</p>
            </>
          }
        />

        <section aria-labelledby="method-2">
          <h3 id="method-2" className="text-xl font-semibold text-white">Method 2: Box‑and‑Fill</h3>
          <p>
            Model each selection as a box (decision). Multiply the number of options for each box, then divide by
            k! to remove overcounting when order doesn’t matter.
          </p>
          <MustKnow>
            For combinations with k selections: multiply the options per selection and divide by k! to account for
            indistinguishable order.
          </MustKnow>

          <p>Revisiting the coach example with three selections:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>First pick: 7 choices</li>
            <li>Second pick: 6 choices</li>
            <li>Third pick: 5 choices</li>
          </ul>
          <Math expr="\\text{Raw count} = 7\\times 6\\times 5" block />
          <Math expr="\\text{Corrected for order} = \\dfrac{7\\times 6\\times 5}{3!} = 35" block />
          <p>Both methods agree, as they should.</p>
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">Wrap‑Up</h3>
          <p>
            Use the formula for quick calculation or Box‑and‑Fill when a structured count feels clearer. With practice,
            you’ll switch between them fluidly.
          </p>
        </section>
      </article>
    </main>
  );
}