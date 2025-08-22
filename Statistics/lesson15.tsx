import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn’t already include KaTeX styles globally,
// import them once in your root layout: `import 'katex/dist/katex.min.css'`
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.4 Counting Multiples of A or B | Statistics",
  description:
    "How to count how many integers in a range are multiples of A or B without double‑counting. Includes the inclusion–exclusion formula, the floor method for counting multiples, and a worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.4 Counting the Multiples of Integer A or B in a Consecutive Range
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the last lesson, we counted how many members of a consecutive
          integer range are multiples of a single integer. Now we’ll extend that
          idea to two integers: given a range, how many values are divisible by
          A or by B? The twist is that some numbers are divisible by both A and
          B, so we must avoid counting those twice.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Inclusion–Exclusion for Multiples</p>
            <BlockMath math={`\\mathrm{count}(A\\ \\text{or}\\ B) = \\mathrm{count}(A) + \\mathrm{count}(B) - \\mathrm{count}(\\operatorname{lcm}(A,B))`} />
            <p className="text-sm text-gray-300/90">
              Here, count(A) means “how many integers in the interval are
              multiples of A,” and lcm(A, B) is the least common multiple of A
              and B. Subtracting the LCM term removes the double‑count of values
              that are multiples of both A and B.
            </p>
            <p className="font-semibold">Counting Multiples in [m, n]</p>
            <BlockMath math={`\\mathrm{count\\_k}([m,n]) = \\left\\lfloor\\frac{n}{k}\\right\\rfloor - \\left\\lfloor\\frac{m-1}{k}\\right\\rfloor`} />
            <p className="text-sm text-gray-300/90">
              This floor formula counts how many multiples of k lie between m
              and n, inclusive.
            </p>
          </div>
        </MustKnow>

        <p>
          A quick check with a small range illustrates the double‑count issue.
          Between 1 and 13, the multiples of 2 are 2, 4, 6, 8, 10, 12 and the
          multiples of 3 are 3, 6, 9, 12. If you simply add 6 + 4, you’ve
          counted 6 and 12 twice—once for each list. Since{" "}
          <InlineMath math={`\\operatorname{lcm}(2,3)=6`} /> and the values 6
          and 12 are exactly the multiples of 6 in that interval, subtracting
          those two duplicates gives the correct total.
        </p>

        <MCQExample
          number={20}
          prompt="How many integers from 1 to 90, inclusive, are multiples of 3 or 4?"
          options={["52", "50", "45", "43", "40"]}
          correct="45"
          solution={
            <>
              <p className="mb-2">
                Use inclusion–exclusion and the floor method to count each
                piece:
              </p>

              <p className="mt-3 font-semibold">1) Multiples of 3 in [1, 90]</p>
              <BlockMath math={`\\left\\lfloor\\frac{90}{3}\\right\\rfloor - \\left\\lfloor\\frac{1-1}{3}\\right\\rfloor = 30 - 0 = 30`} />

              <p className="mt-4 font-semibold">2) Multiples of 4 in [1, 90]</p>
              <BlockMath math={`\\left\\lfloor\\frac{90}{4}\\right\\rfloor - \\left\\lfloor\\frac{1-1}{4}\\right\\rfloor = 22 - 0 = 22`} />

              <p className="mt-4 font-semibold">
                3) Multiples of both 3 and 4 (i.e., of LCM(3, 4) = 12)
              </p>
              <BlockMath math={`\\left\\lfloor\\frac{90}{12}\\right\\rfloor - \\left\\lfloor\\frac{1-1}{12}\\right\\rfloor = 7 - 0 = 7`} />

              <p className="mt-4 font-semibold">Combine:</p>
              <BlockMath math={`30 + 22 - 7 = 45`} />

              <p className="mt-2">Therefore, the correct answer is 45.</p>
            </>
          }
        />

        <ExampleCard
          number={21}
          title="Why subtract the LCM term?"
          statements={[
            "When counting multiples of A and multiples of B separately, any value that’s a multiple of both A and B is counted twice.",
            "Those shared values are exactly the multiples of lcm(A, B). Subtracting count(lcm(A, B)) removes the duplicates once, giving the true total.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                Think “add the lists, then fix the double‑count.” The fix is
                subtracting the overlap—the multiples of the least common
                multiple.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: use the floor method to count each set of multiples and
          apply inclusion–exclusion to avoid double‑counting the overlap. This
          approach scales cleanly to any consecutive interval and any pair of
          divisors A and B.
        </p>
      </article>
    </main>
  );
}