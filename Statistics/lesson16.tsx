import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "14.4.1 Multiples of A or B, but Not Both | Statistics",
  description:
    "Learn how to count integers divisible by A or B—but not both—over an inclusive interval using LCM and a clean counting formula. Includes a fully worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.4.1 Counting the Multiples of Integer A or B, but Not of Both
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Previously, we learned to count how many integers in an inclusive range are divisible by either of two integers A or B. A common twist is to count those that are divisible by A or B, but not by both. The idea is the same as inclusion–exclusion, with one crucial adjustment to remove numbers divisible by both A and B from each side of the count.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Key formulas</p>
            <div className="rounded-md bg-gray-800/40 p-3">
              <BlockMath math={'\\text{Count}(A\\,\\text{xor}\\,B) = \\text{Count}(A) + \\text{Count}(B) - 2\\,\\text{Count}(\\operatorname{lcm}(A,B))'} />
              <p className="mt-2 text-sm text-gray-300">
                We subtract twice the multiples of <InlineMath math="\\operatorname{lcm}(A,B)" /> because those values are included once in the A count and once in the B count, but we want to exclude them entirely (i.e., “A or B, but not both”).
              </p>
            </div>
            <div className="rounded-md bg-gray-800/40 p-3">
              <BlockMath math={'\\text{For } k \\in \\mathbb{Z}^+,\\; L\\le x\\le U:\\quad \\text{Count of multiples of }k = \\left\\lfloor\\tfrac{U}{k}\\right\\rfloor - \\left\\lceil\\tfrac{L}{k}\\right\\rceil + 1'} />
              <p className="mt-2 text-sm text-gray-300">
                This gives the number of integers in <InlineMath math="[L, U]" /> that are divisible by <InlineMath math="k" />.
              </p>
            </div>
          </div>
        </MustKnow>

        <p>
          A quick sanity check technique: if you list a small interval and mark the multiples of A and B, the values that are multiples of both must be removed from both lists to ensure they don’t appear at all in the final “A or B, but not both” count.
        </p>

        <MCQExample
          number={21}
          prompt="How many integers from 10 to 100, inclusive, are multiples of 2 or 3, but not of both?"
          options={["76", "74", "61", "52", "46"]}
          correct="46"
          solution={
            <>
              <p>Compute three pieces: multiples of 2, multiples of 3, and multiples of their LCM (6), all in the interval [10, 100]. Then apply the xor formula.</p>

              <p className="mt-3 font-semibold">1) Multiples of 2 in [10, 100]</p>
              <BlockMath math={'\\left\\lfloor\\tfrac{100}{2}\\right\\rfloor - \\left\\lceil\\tfrac{10}{2}\\right\\rceil + 1 = 50 - 5 + 1 = 46'} />

              <p className="mt-3 font-semibold">2) Multiples of 3 in [10, 100]</p>
              <BlockMath math={'\\left\\lfloor\\tfrac{100}{3}\\right\\rfloor - \\left\\lceil\\tfrac{10}{3}\\right\\rceil + 1 = 33 - 4 + 1 = 30'} />

              <p className="mt-3 font-semibold">3) Multiples of LCM(2, 3) = 6 in [10, 100]</p>
              <BlockMath math={'\\left\\lfloor\\tfrac{100}{6}\\right\\rfloor - \\left\\lceil\\tfrac{10}{6}\\right\\rceil + 1 = 16 - 2 + 1 = 15'} />

              <p className="mt-3 font-semibold">Combine (xor):</p>
              <BlockMath math={'\\text{Count}(2\\,\\text{xor}\\,3) = 46 + 30 - 2\\cdot 15 = 46'} />
              <p>So there are 46 such integers. Correct answer: E.</p>
            </>
          }
        />

        <p>
          Takeaway: to count “A or B but not both,” compute the counts for A and B over the interval and subtract twice the count of numbers divisible by <InlineMath math="\\operatorname{lcm}(A,B)" />. For the per‑divisor counts, use the floor–ceiling formula to avoid off‑by‑one errors at the endpoints.
        </p>
      </article>
    </main>
  );
}