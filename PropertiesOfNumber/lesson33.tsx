import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Make sure KaTeX CSS is globally loaded (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "4.10.2 A second method for the LCM | Properties of Numbers",
  description:
    "Learn a practical second method to find the least common multiple (LCM): scan multiples of the largest number until one is divisible by the rest. Includes a quick multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.10.2 A second approach to finding the LCM
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Besides prime factorization, there’s a fast, hands‑on way to find a least common
          multiple. Pick the largest number in the set and list its multiples in order. The
          first multiple that every other number divides evenly is the LCM.
        </p>

        <MustKnow>
          When numbers are few and not too large, scan multiples of the largest term:
          m = k · max, for k = 1, 2, 3, … . The LCM is the smallest m such that each other
          number divides m. In notation:{" "}
          <InlineMath math="\mathrm{LCM}(a,b)=\min\{m \in \{a,2a,3a,\dots\}:~b \mid m\}" />.
        </MustKnow>

        <p className="sr-only">
          The method: list multiples of the larger integer and test divisibility by the
          remaining integer(s) until all divide evenly.
        </p>

        <MCQExample
          number={30}
          prompt="What is the least common multiple of 12 and 5?"
          options={["35", "45", "60", "72", "120"]}
          correct="60"
          solution={
            <>
              <p>
                Start from the larger number, 12, and check its multiples: 12, 24, 36, 48,
                60, …
              </p>
              <ul className="list-disc pl-6">
                <li>12 ÷ 5 is not an integer</li>
                <li>24 ÷ 5 is not an integer</li>
                <li>36 ÷ 5 is not an integer</li>
                <li>48 ÷ 5 is not an integer</li>
                <li>60 ÷ 5 = 12, an integer</li>
              </ul>
              <p>
                The first multiple of 12 that 5 divides is 60, so{" "}
                <InlineMath math="\mathrm{LCM}(12,5)=60" />.
              </p>
            </>
          }
        />

        <p>
          This trial‑multiples technique is especially handy when the numbers are co‑prime
          or nearly so. If the values are larger or you have many of them, prime
          factorization or the identity{" "}
          <InlineMath math="\mathrm{LCM}(a,b)=\dfrac{ab}{\mathrm{GCF}(a,b)}" /> may be more
          efficient.
        </p>

        <div aria-hidden="true">
          <BlockMath math="\mathrm{LCM}(12,5)=60 \quad\text{and}\quad \mathrm{GCF}(12,5)=1" />
        </div>
      </article>
    </main>
  );
}