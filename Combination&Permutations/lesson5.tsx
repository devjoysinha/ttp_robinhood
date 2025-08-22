import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, output: "html" });
  return (
    <span
      className="whitespace-nowrap"
      aria-label={ariaLabel ?? expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: true, output: "html" });
  return (
    <div
      className="my-4 overflow-x-auto"
      aria-label={ariaLabel ?? expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.2.4 Equivalent Property of Combinations | Combinatorics",
  description:
    "Learn the equivalence property for combinations (nCk = nC(n−k)) to speed up counting. See quick computations like 12C10 = 12C2 and 30C27 = 30C3, plus a practice MCQ with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">16. Combinations and Permutations</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.4 The Equivalence Property of Combinations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When we compute combinations, the fastest path is often to use fewer, smaller numbers. The key identity that
          unlocks this shortcut is the equivalence property:
        </p>

        <MathBlock expr={`\\binom{n}{k} = \\binom{n}{n-k}`} ariaLabel="n choose k equals n choose n minus k" />

        <MustKnow>
          Commit to memory: <MathInline expr={`\\binom{n}{k} = \\binom{n}{n-k}`} />. Flipping from selecting k items to
          selecting the complementary <MathInline expr={`n-k`} /> items can reduce the arithmetic dramatically.
        </MustKnow>

        <p>Here are two quick illustrations showing how this equivalence speeds up the math.</p>

        <section aria-labelledby="ex1">
          <h3 id="ex1" className="sr-only">
            Mini‑example 1
          </h3>
          <p className="font-semibold text-gray-200">Mini‑example 1: Evaluate 12C10</p>
          <p>
            Rather than expand ten factors and divide by <MathInline expr={`10!`} />, switch to the complement:
          </p>
          <MathBlock
            expr={`\\binom{12}{10} = \\binom{12}{2} = \\frac{12\\cdot 11}{2!} = 66`}
            ariaLabel="12 choose 10 equals 12 choose 2 equals 12 times 11 over two factorial equals 66"
          />
          <p>Two factors and a small factorial—done in a line.</p>
        </section>

        <section aria-labelledby="ex2">
          <h3 id="ex2" className="sr-only">
            Mini‑example 2
          </h3>
          <p className="font-semibold text-gray-200">Mini‑example 2: Evaluate 30C27</p>
          <p>Selecting 27 out of 30 is equivalent to selecting 3 out of 30:</p>
          <MathBlock
            expr={`\\binom{30}{27} = \\binom{30}{3} = \\frac{30\\cdot 29\\cdot 28}{3!} = 4060`}
            ariaLabel="30 choose 27 equals 30 choose 3 equals 30 times 29 times 28 over three factorial equals 4,060"
          />
        </section>

        <MustKnow>
          Whenever <MathInline expr={`k`} /> is close to <MathInline expr={`n`} />, prefer the smaller calculation
          <MathInline expr={`\\binom{n}{n-k}`} /> to keep numbers compact and reduce cancellation.
        </MustKnow>

        <section aria-labelledby="softball">
          <h3 id="softball" className="sr-only">
            Selection example
          </h3>
          <p className="font-semibold text-gray-200">Quick check: choosing 9 of 11</p>
          <p>
            If order doesn’t matter, the count is{" "}
            <MathInline expr={`\\binom{11}{9} = \\binom{11}{2} = \\frac{11\\cdot 10}{2!} = 55`} ariaLabel="11 choose 9 equals 11 choose 2 equals 55" />
            .
          </p>
        </section>

        <MCQExample
          number={46}
          prompt="Jen needs to bring 21 artworks to a gallery and has 25 pieces available. In how many distinct ways can she choose the 21 pieces if order is irrelevant?"
          options={["12,650", "12,950", "13,240", "13,550", "14,050"]}
          correct="12,650"
          solution={
            <>
              <p>
                This is a combination. The count is{" "}
                <MathInline expr={`\\binom{25}{21}`} ariaLabel="25 choose 21" />. Use the equivalence property to flip
                to a smaller choice:{" "}
                <MathInline expr={`\\binom{25}{21} = \\binom{25}{4}`} ariaLabel="25 choose 21 equals 25 choose 4" />.
              </p>
              <MathBlock
                expr={`\\binom{25}{4} = \\frac{25\\cdot 24\\cdot 23\\cdot 22}{4!} = \\frac{25\\cdot 24\\cdot 23\\cdot 22}{24} = 25\\cdot 23\\cdot \\frac{22}{1\\cdot 6} = 12\\,650`}
                ariaLabel="25 choose 4 equals 25 times 24 times 23 times 22 over 4 factorial equals 12,650"
              />
              <p>Therefore, the number of ways is 12,650.</p>
            </>
          }
        />

        <p className="text-gray-300">
          Big picture: when a combination looks large, try its complement. Computing{" "}
          <MathInline expr={`\\binom{n}{n-k}`} /> instead of <MathInline expr={`\\binom{n}{k}`} /> often trims the work
          to just a few factors and a tiny factorial.
        </p>
      </article>
    </main>
  );
}