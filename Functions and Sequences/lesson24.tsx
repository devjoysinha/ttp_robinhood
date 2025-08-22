import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.22 Repeating Sequences | Functions and Sequences",
  description:
    "How to spot and use repeating patterns in sequences. Learn to find any term and to sum long stretches by working in blocks. Includes 4 quick, exam‑style examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.22 Repeating Sequences
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many sequence questions hide a short pattern that repeats forever. The fastest way
          to uncover that pattern is to write out the first few terms and look for a cycle.
          Once the cycle is known, you can jump to any term or add a long run of terms by
          working in complete blocks.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              A repeating pattern has a length <InlineMath math="r" /> if every block of{" "}
              <InlineMath math="r" /> consecutive terms is identical. To locate the value of{" "}
              <InlineMath math="a_n" /> inside a cycle of length{" "}
              <InlineMath math="r" />, reduce <InlineMath math="n" /> modulo{" "}
              <InlineMath math="r" />:
            </p>
            <p className="pl-4">
              <InlineMath math="\text{position in block}=\begin{cases}r,& n\bmod r=0\\ n\bmod r,& \text{otherwise}\end{cases}" />
            </p>
            <p className="pl-4">
              If a particular spot in the block holds value <InlineMath math="x" />,
              then every index congruent to that spot modulo <InlineMath math="r" /> has
              value <InlineMath math="x" />.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="finding-terms">
          <h3 id="finding-terms" className="text-xl font-semibold text-white">
            Finding specific terms
          </h3>
          <p>
            Example pattern: if <InlineMath math="a_n=(-1)^n+5" />, the early terms are
            4, 6, 4, 6, … so the length is 2. Any odd index gives 4; any even index gives 6.
          </p>

          <MCQExample
            number={54}
            prompt={
              <>
                The sequence <InlineMath math="t_1,t_2,t_3,\dots" /> satisfies{" "}
                <InlineMath math="t_1=6,\ t_2=0,\ t_3=4" /> and{" "}
                <InlineMath math="t_n=t_{n-3}" /> for all integers{" "}
                <InlineMath math="n>3" />. What is <InlineMath math="t_{64}" />?
              </>
            }
            options={["0", "2", "4", "6", "8"]}
            correct="6"
            solution={
              <>
                <p>
                  The first few terms are 6, 0, 4, 6, 0, 4, … so the cycle is (6, 0, 4)
                  with length 3. Compute <InlineMath math="64\bmod 3=1" />, so{" "}
                  <InlineMath math="t_{64}" /> matches the first position in the block:
                  6.
                </p>
              </>
            }
          />

          <MCQExample
            number={55}
            prompt={
              <>
                Let <InlineMath math="a_1=1,\ a_2=3" /> and{" "}
                <InlineMath math="a_n=a_{n-1}-a_{n-2}" /> for all integers{" "}
                <InlineMath math="n>2" />. What is the 52nd term,
                <InlineMath math="\,a_{52}" />?
              </>
            }
            options={["-1", "0", "1", "2", "3"]}
            correct="-1"
            solution={
              <>
                <p>
                  Write a few terms: 1, 3, 2, -1, -3, -2, 1, 3, 2, … The pattern is{" "}
                  (1, 3, 2, -1, -3, -2) of length 6. Since{" "}
                  <InlineMath math="52\bmod 6=4" />, we take the 4th term in the block:
                  -1.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="summing-terms">
          <h3 id="summing-terms" className="text-xl font-semibold text-white">
            Sums of many consecutive terms
          </h3>

          <MustKnow>
            To sum a long stretch, break it into complete blocks of the repeating pattern
            plus a small leftover. Multiply the block sum by the number of full blocks,
            then add the leftover terms.
          </MustKnow>

          <p>
            Mini example: for <InlineMath math="a_n=(-1)^n" />, the pair (-1, 1) sums to 0
            and repeats. The first 35 terms contain 17 full pairs and one extra term
            <InlineMath math="a_{35}=-1" />, so the total is -1.
          </p>

          <MCQExample
            number={56}
            prompt={
              <>
                The sequence <InlineMath math="t_1,t_2,\dots" /> satisfies{" "}
                <InlineMath math="t_1=-9,\ t_2=2,\ t_3=8" /> and{" "}
                <InlineMath math="t_n=t_{n-3}" /> for all integers{" "}
                <InlineMath math="n>3" />. What is the sum of the first 65 terms?
              </>
            }
            options={["12", "14", "18", "21", "23"]}
            correct="14"
            solution={
              <>
                <p>
                  The repeating block (length 3) is (-9, 2, 8) with block sum 1. Since{" "}
                  <InlineMath math="65=21\times 3+2" />, we have 21 full blocks plus the
                  next two terms (-9, 2). Thus the sum is{" "}
                  <InlineMath math="21\cdot 1+(-9+2)=21-7=14" />.
                </p>
              </>
            }
          />

          <MCQExample
            number={57}
            prompt={
              <>
                Let <InlineMath math="a_1=0,\ a_2=2" /> and{" "}
                <InlineMath math="a_n=a_{n-1}-a_{n-2}" /> for all integers{" "}
                <InlineMath math="n>2" />. What is the sum of the first 100 terms?
              </>
            }
            options={["-4", "-2", "0", "2", "4"]}
            correct="4"
            solution={
              <>
                <p>
                  Early terms: 0, 2, 2, 0, -2, -2, 0, 2, 2, 0, … The cycle is
                  (0, 2, 2, 0, -2, -2) of length 6, and its sum is 0. Since{" "}
                  <InlineMath math="100=16\times 6+4" />, only the last four terms
                  contribute: (0, 2, 2, 0) sum to 4. Therefore the total is 4.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="quick-rules">
          <h3 id="quick-rules" className="text-xl font-semibold text-white">
            Quick rules of thumb
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Find the cycle by listing a handful of terms; name its length{" "}
              <InlineMath math="r" />.
            </li>
            <li>
              To locate <InlineMath math="a_n" />, use the remainder of{" "}
              <InlineMath math="n" /> upon division by <InlineMath math="r" />.
            </li>
            <li>
              To sum many terms, compute one block’s total and count complete blocks;
              then add the leftover prefix.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}