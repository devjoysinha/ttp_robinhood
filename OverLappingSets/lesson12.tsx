import type { Metadata } from "next";
import katex from "katex";

// UI components from your design system
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Ensure KaTeX CSS is included once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "13.3.2 Three-Set Venns: Solving When Only the ‘Exactly Two’ Sum Is Known",
  description:
    "Learn the fast inclusion–exclusion variant for three overlapping sets when the sum of the 'exactly two' regions is given or requested. Includes a worked warm‑up and two GMAT‑style multiple‑choice examples with full reasoning.",
};

function MathBlock({
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
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel || expr}
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.3.2 Three‑Circle Venn Diagrams when the “Exactly Two” Regions Are Unknown
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Any three‑set Venn diagram breaks the population into 8 non‑overlapping
          regions: the three “only” regions, the three pairwise‑only overlaps,
          the triple overlap, and the “neither” region outside all sets. Because those 8
          regions fully partition the universe, the total count equals the sum of
          those 8 pieces.
        </p>

        <p>
          A more useful form for problem solving is a targeted inclusion–exclusion identity
          that isolates the “exactly two” and “exactly three” pieces. When it applies,
          it lets you move from the group totals directly to the unknown you need,
          often in one line of algebra.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              Use the “exactly‑two” inclusion–exclusion variant if either:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>you are given the total number in the three “exactly two” regions, or</li>
              <li>you are explicitly asked to find that sum.</li>
            </ul>
            <div className="mt-3">
              <p className="mb-2">The identity (U is the full population):</p>
              <MathBlock
                display
                expr={`\\begin{aligned}
|U| &= |A| + |B| + |C| \\; - \\; \\bigl|\\text{exactly two}\\bigr| \\; - \\; 2\\,\\bigl|\\text{exactly three}\\bigr| \\; + \\; \\bigl|\\text{neither}\\bigr|
\\end{aligned}`}
                ariaLabel="Total equals A plus B plus C minus exactly-two minus two times exactly-three plus neither"
              />
            </div>
            <p className="text-sm text-gray-400">
              Why the “− 2 × exactly three”? Members in all three sets are counted three
              times in |A| + |B| + |C| but should be counted once overall. Subtracting
              the “exactly two” block removes each triple member three times; then subtract
              the triple region two more times to net a single count.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-lg font-semibold text-white">
            Quick warm‑up
          </h3>
          <p>
            In a group of 80 people, 30 own a car, 40 own a bike, and 20 own a TV.
            Exactly 15 own exactly two of the three items, and 10 own all three.
            How many own none of the items?
          </p>
          <div>
            <MathBlock
              display
              expr={`\\text{Let } N=|\\text{neither}|.\\quad
80 = 30 + 40 + 20 \\; - \\; 15 \\; - \\; 2\\cdot 10 \\; + \\; N`}
              ariaLabel="80 equals 30 plus 40 plus 20 minus 15 minus two times 10 plus N"
            />
            <MathBlock display expr={`80 = 55 + N`} ariaLabel="80 equals 55 plus N" />
            <MathBlock display expr={`N = 25`} ariaLabel="N equals 25" />
          </div>
          <p>So, 25 people own none of the three items.</p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={20}
          prompt="A 120‑member orchestra plays piano, violin, and/or tuba. Exactly 50 play violin, 70 play piano, and 60 play tuba. If 30 musicians play exactly two instruments, how many play all three? (Everyone plays at least one instrument.)"
          options={["10", "13", "14", "15", "17"]}
          correct="15"
          solution={
            <>
              <p>
                Since every member plays something, the “neither” count is 0. Apply the
                variant identity and solve for T = |exactly three|.
              </p>
              <div className="my-2">
                <MathBlock
                  display
                  expr={`120 = 50 + 70 + 60 \\; - \\; 30 \\; - \\; 2T \\; + \\; 0`}
                  ariaLabel="120 equals 50 plus 70 plus 60 minus 30 minus two T"
                />
                <MathBlock display expr={`120 = 150 - 2T`} ariaLabel="120 equals 150 minus two T" />
                <MathBlock display expr={`2T = 30`} ariaLabel="two T equals 30" />
                <MathBlock display expr={`T = 15`} ariaLabel="T equals 15" />
              </div>
              <p>Therefore, 15 musicians play all three instruments.</p>
            </>
          }
        />

        <MCQExample
          number={21}
          prompt="At a 600‑person party, each guest likes at least one of: eggnog, dim sum, mashed potatoes. Exactly 250 like eggnog, 350 like dim sum, and 300 like mashed potatoes. If 75 like all three, how many like exactly two?"
          options={["100", "150", "225", "300", "450"]}
          correct="150"
          solution={
            <>
              <p>
                Let X be the number who like exactly two of the foods. With no “neither”
                guests, plug into the identity and solve for X.
              </p>
              <div className="my-2">
                <MathBlock
                  display
                  expr={`600 = 250 + 350 + 300 \\; - \\; X \\; - \\; 2\\cdot 75 \\; + \\; 0`}
                  ariaLabel="600 equals 250 plus 350 plus 300 minus X minus two times 75"
                />
                <MathBlock display expr={`600 = 750 - X - 150`} ariaLabel="600 equals 750 minus X minus 150" />
                <MathBlock display expr={`600 = 600 - X`} ariaLabel="600 equals 600 minus X" />
                <MathBlock display expr={`X = 150`} ariaLabel="X equals 150" />
              </div>
              <p>So, 150 guests like exactly two of the foods.</p>
            </>
          }
        />

        <p className="pt-2">
          Takeaway: when the problem gives or asks for the total in the three
          “exactly‑two” regions, switch to the targeted identity above. It cleanly
          isolates the middle overlaps and avoids diagram micromanagement.
        </p>
      </article>
    </main>
  );
}