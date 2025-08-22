import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "19.19 Sum of an Arithmetic Sequence | Functions & Sequences",
  description:
    "Understand how to sum the first n terms of an arithmetic sequence using S_n = n/2 (a_1 + a_n), how to find the nth term, and avoid common traps. Includes a quick multiple‑choice problem with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.19 Sum of the Terms of an Arithmetic Sequence
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A sequence may be finite (ends after a specific number of terms) or
          infinite (continues without end). Arithmetic sequences are typically
          treated as infinite, but test questions will ask for the sum of only a
          finite portion—most often the first n terms.
        </p>

        <p>
          Two formulas drive almost every sum question for arithmetic sequences:
        </p>

        <MustKnow>
          <div className="space-y-3">
            <div>
              Sum of the first n terms:
              <BlockMath math={"S_n = \\dfrac{n}{2}\\big(a_1 + a_n\\big)"} />
            </div>
            <div>
              The nth term (term formula):
              <BlockMath math={"a_n = a_1 + (n-1)\\,d"} />
            </div>
            <p className="mt-3">
              Here, <InlineMath math={"a_1"} /> is the first term,{" "}
              <InlineMath math={"d"} /> is the common difference, and{" "}
              <InlineMath math={"a_n"} /> is the nth (last) term of the partial
              sum.
            </p>
          </div>
        </MustKnow>

        <p>
          In many problems, you’ll know <InlineMath math={"a_1"} /> and{" "}
          <InlineMath math={"d"} /> but not <InlineMath math={"a_n"} />. In that
          case, first compute <InlineMath math={"a_n"} /> using the term
          formula, then plug it into the sum formula.
        </p>

        <MCQExample
          number={46}
          prompt="The sequence 2, 5, 8, 11, … is arithmetic. What is the sum of the first 100 terms?"
          options={["299", "1,050", "15,000", "15,050", "29,900"]}
          correct="15,050"
          solution={
            <>
              <p>
                We have <InlineMath math={"a_1 = 2"} /> and common difference{" "}
                <InlineMath math={"d = 3"} />. First find the 100th term:
              </p>
              <BlockMath math={"a_{100} = a_1 + (100-1)\\,d = 2 + 99\\cdot 3 = 299"} />
              <p>Now apply the sum formula:</p>
              <BlockMath math={"S_{100} = \\dfrac{100}{2}\\big(a_1 + a_{100}\\big) = 50\\,(2 + 299) = 50\\cdot 301 = 15{,}050"} />
              <p>
                Be careful: 299 is just the last term, not the sum. The correct
                answer is 15,050.
              </p>
            </>
          }
        />

        <p>
          Takeaway: combine the nth term formula with{" "}
          <InlineMath math={"S_n = \\dfrac{n}{2}(a_1 + a_n)"} /> to quickly sum
          a block of terms in any arithmetic sequence.
        </p>
      </article>
    </main>
  );
}