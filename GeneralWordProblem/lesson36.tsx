import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: ensure `katex/dist/katex.min.css` is imported once in your root layout.

export const metadata: Metadata = {
  title: "7.11.2 Consecutive Multiples of Integers | Word Problems",
  description:
    "Understand how to model consecutive multiples algebraically and solve GMAT‑style problems. Includes a multiple‑choice example with full reasoning using KaTeX-rendered math.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.11.2 Consecutive Multiples of Integers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A run of consecutive multiples of a nonzero integer increases by the same step each time.
          For a step size k, you can represent consecutive multiples as
          <span className="mx-1">
            <InlineMath math="x,\, x+k,\, x+2k,\, x+3k,\dots" />
          </span>
          where x is itself a multiple of k.
        </p>

        <p>
          For instance, five consecutive multiples of 5 are 5, 10, 15, 20, and 25.
          Likewise, six consecutive multiples of 8 are 8, 16, 24, 32, 40, and 48.
          The same algebraic pattern works for any nonzero k.
        </p>

        <MustKnow>
          • To model “three consecutive multiples of k,” use
          <InlineMath math="x,\; x+k,\; x+2k" /> with x a multiple of k.
          <br />
          • Their sum is
          <InlineMath math="(x)+(x+k)+(x+2k)=3x+3k" />, so
          <InlineMath math="x=\dfrac{S-3k}{3}" /> if the sum is S.
          <br />
          • Always check that x (and thus each term) is a multiple of k.
        </MustKnow>

        <MCQExample
          number={54}
          prompt={
            <>
              Three consecutive multiples of 9 have a total of 54. If the smallest term is x and the largest term is y, what is{" "}
              <InlineMath math="\dfrac{y}{x}" />?
            </>
          }
          options={["1", "3", "9", "18", "27"]}
          correct="3"
          solution={
            <>
              <p>
                Let the three terms be
                <span className="mx-1">
                  <InlineMath math="x,\; x+9,\; x+18" />
                </span>
                . Their sum equals 54:
              </p>
              <BlockMath math="x+(x+9)+(x+18)=54" />
              <BlockMath math="3x+27=54 \;\;\Rightarrow\;\; 3x=27 \;\;\Rightarrow\;\; x=9" />
              <p>
                Then the largest term is
                <span className="mx-1">
                  <InlineMath math="y=x+18=27" />
                </span>
                , so
                <span className="mx-1">
                  <InlineMath math="\dfrac{y}{x}=\dfrac{27}{9}=3" />
                </span>
                .
              </p>
              <p>Answer: 3.</p>
            </>
          }
        />

        <p>
          Bottom line: when you see “consecutive multiples,” translate the language into an arithmetic progression with common difference k, set up the equation the prompt implies (often a sum), and solve cleanly for the base multiple x.
        </p>
      </article>
    </main>
  );
}