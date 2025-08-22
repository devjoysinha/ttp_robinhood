import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "7.5.1 Fraction Parts Sum to the Whole | General Word Problems",
  description:
    "Master the core model for fraction word problems: parts plus leftover equal the whole. Includes a step‑by‑step demo, one medium MCQ, a harder MCQ, and a Data Sufficiency drill with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5.1 Fractional parts of a whole must add up to the whole
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many word problems split a total into fractional pieces and possibly a
          leftover. The winning strategy is simple: add up every disjoint part
          you’re told about, include any remainder, and set the sum equal to the
          original total.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>The “parts add to whole” equation is:</p>
            <BlockMath math={"p_1 + p_2 + \\dots + p_n + r = W"} />
            <p>
              where each <InlineMath math={"p_i"} /> is a distinct fractional
              part, <InlineMath math={"r"} /> is any remaining amount, and{" "}
              <InlineMath math={"W"} /> is the original whole.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="demo-title" className="space-y-3">
          <h3 id="demo-title" className="text-xl font-semibold text-white">
            Quick demo: splitting $80
          </h3>
          <p>
            Suppose there are 80 dollars in a pot. Victor receives half, then
            Greg receives a quarter of what’s left.
          </p>
          <div className="space-y-2">
            <p>Victor’s share:</p>
            <BlockMath math={"\\tfrac12 \\times 80 = 40"} />
            <p>Money remaining after Victor:</p>
            <BlockMath math={"80 - 40 = 40"} />
            <p>Greg’s share (a quarter of the remainder):</p>
            <BlockMath math={"\\tfrac14 \\times 40 = 10"} />
            <p>Money left in the pot:</p>
            <BlockMath math={"80 - 40 - 10 = 30"} />
            <p>Check with the model:</p>
            <BlockMath math={"40 + 10 + 30 = 80"} />
          </div>
          <p>
            The parts (Victor + Greg) plus the leftover equal the original 80,
            exactly as the model predicts.
          </p>
        </section>

        <MCQExample
          number={27}
          prompt="Edward the cat ate 1/3 of his treats after breakfast, 1/4 of the remaining treats after lunch, and then 21 more as a snack. If 12 treats were left afterward, how many treats did he start with?"
          options={["57", "66", "70", "73", "84"]}
          correct="66"
          solution={
            <>
              <p>
                Let T be the starting number of treats. After breakfast Edward
                ate <InlineMath math={"\\tfrac13 T"} />, leaving{" "}
                <InlineMath math={"T - \\tfrac13 T = \\tfrac23 T"} />. After
                lunch he ate one quarter of the remainder:
              </p>
              <BlockMath math={"\\tfrac14 \\cdot \\tfrac23 T = \\tfrac16 T"} />
              <p>
                Putting everything into “parts add to whole” (including the 21
                snacks and the 12 left over):
              </p>
              <BlockMath math={"\\tfrac13 T + \\tfrac16 T + 21 + 12 = T"} />
              <p>Multiply by 6 to clear fractions:</p>
              <BlockMath math={"2T + T + 198 = 6T \\;\\Rightarrow\\; 198 = 3T"} />
              <BlockMath math={"T = 66"} />
            </>
          }
        />

        <MCQExample
          number={28}
          prompt="A pilot must fly a total of H hours in one day. She flies 1/4 of the required hours plus 2 more in the morning, then 2/5 of what remains in the afternoon, and the final 4 hours in the evening. Which option is closest to her total hours for the day?"
          options={["9", "10", "11.5", "13", "14.5"]}
          correct="11.5"
          solution={
            <>
              <p>
                Let H be the total required hours. Morning:
                <InlineMath math={"\\tfrac14 H + 2"} />. Remaining:
                <InlineMath math={"H - (\\tfrac14 H + 2) = \\tfrac34 H - 2"} />.
                Afternoon:
              </p>
              <BlockMath math={"\\tfrac25(\\tfrac34 H - 2) = \\tfrac{3}{10}H - \\tfrac45"} />
              <p>Use parts add to whole:</p>
              <BlockMath math={"\\left(\\tfrac14 H + 2\\right) + \\left(\\tfrac{3}{10}H - \\tfrac45\\right) + 4 = H"} />
              <p>Multiply by 20:</p>
              <BlockMath math={"5H + 40 + 6H - 16 + 80 = 20H"} />
              <BlockMath math={"11H + 104 = 20H \\;\\Rightarrow\\; 9H = 104 \\;\\Rightarrow\\; H = \\tfrac{104}{9} \\approx 11.56"} />
              <p>Closest choice: 11.5.</p>
            </>
          }
        />

        <ExampleCard
          number={29}
          title="How many history books?"
          statements={[
            "A box contains only comics, novels, and history books. How many history books are there?",
            "1) There are 80 comic books.",
            "2) One-fifth of the books are novels and two-fifths are history.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let T be the total number of books. We want the count of history
                books.
              </p>
              <p>
                <strong>Statement (1):</strong> Comics = 80. With no breakdown of
                the rest, T is unknown and history can vary. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Novels ={" "}
                <InlineMath math={"\\tfrac15 T"} />, History ={" "}
                <InlineMath math={"\\tfrac25 T"} />. We still don’t know T, so
                the exact history count isn’t fixed. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> From (2), comics ={" "}
                <InlineMath math={"T - (\\tfrac15 T + \\tfrac25 T) = \\tfrac25 T"} />
                . From (1), comics = 80, so{" "}
                <InlineMath math={"\\tfrac25 T = 80 \\Rightarrow T = 200"} />.
                Therefore history ={" "}
                <InlineMath math={"\\tfrac25 T = 80"} />. Sufficient together
                only.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Takeaway: translate each description into a part of the whole, add
          those parts with any leftover, and set the result equal to the
          original total. Clearing fractions early often simplifies the algebra.
        </p>
      </article>
    </main>
  );
}