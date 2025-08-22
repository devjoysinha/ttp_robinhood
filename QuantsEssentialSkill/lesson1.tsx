import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.1.1 Least Common Denominator | Essential GMAT Quant",
  description:
    "Understand what the least common denominator (LCD) is and how to find it quickly. Includes a must‑know summary and two multiple‑choice practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.1 The Least Common Denominator
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The least common denominator (LCD) of several fractions is the smallest
          positive integer that each denominator divides into with no remainder.
          For instance, for the fractions{" "}
          <InlineMath math="\,\frac{1}{6},\,\frac{1}{5},\,\frac{1}{12}\," /> the
          LCD is 60, since 60 is the least positive integer divisible by 6, 5,
          and 12.
        </p>

        <MustKnow>
          The LCD of a set of fractions is the smallest positive integer
          divisible by every denominator in the set. A simple way to find it is
          to list a few multiples of each denominator and choose the first
          multiple common to all lists.
        </MustKnow>

        <section aria-labelledby="how-to-find">
          <h3 id="how-to-find" className="sr-only">
            How to find the LCD by listing multiples
          </h3>
          <p>
            Quick method: write down multiples for each denominator and pick the
            first value shared by all lists. Let’s try{" "}
            <InlineMath math="\frac{1}{3},\,\frac{1}{9},\,\frac{1}{12}" />.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33,{" "}
              <strong>36</strong>, …
            </li>
            <li>
              Multiples of 9: 9, 18, 27, <strong>36</strong>, …
            </li>
            <li>
              Multiples of 12: 12, 24, <strong>36</strong>, …
            </li>
          </ul>
          <p>
            The first number appearing in all three lists is 36, so the LCD of{" "}
            <InlineMath math="\frac{1}{3},\,\frac{1}{9},\,\frac{1}{12}" /> is{" "}
            <strong>36</strong>.
          </p>
        </section>

        <MCQExample
          number={4}
          prompt={
            <>
              What is the least common denominator of{" "}
              <InlineMath math="\frac{1}{3},\,\frac{1}{9},\,\frac{1}{12}" />?
            </>
          }
          options={["24", "36", "48", "56", "72"]}
          correct="36"
          solution={
            <>
              <p>
                List multiples or use prime factors. By listing:
              </p>
              <ul className="list-disc pl-6">
                <li>3 → …, 33, 36, 39, …</li>
                <li>9 → …, 27, 36, 45, …</li>
                <li>12 → …, 24, 36, 48, …</li>
              </ul>
              <p>
                The first common multiple is 36, so the LCD is 36.
              </p>
              <p className="mt-2">
                Prime‑factor method gives the same result. The denominators are{" "}
                <InlineMath math="3 = 3" />, <InlineMath math="9 = 3^2" />,{" "}
                <InlineMath math="12 = 2^2\cdot 3" />. Take the highest power of
                each prime that appears: <InlineMath math="2^2\cdot 3^2=36" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={5}
          prompt={
            <>
              The least common denominator of{" "}
              <InlineMath math="\frac{1}{2},\,\frac{1}{6},\,\frac{1}{x}" /> is
              30. Which values of x could make this true?
              <br />
              I. 5  II. 10  III. 20
            </>
          }
          options={["I only", "I and II", "II only", "II and III", "I, II, and III"]}
          correct="I and II"
          solution={
            <>
              <p>
                We need <InlineMath math="\text{lcm}(2,6,x)=30" />. Since{" "}
                <InlineMath math="\text{lcm}(2,6)=6" />, the condition becomes{" "}
                <InlineMath math="\text{lcm}(6,x)=30" />.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  I. <InlineMath math="x=5" /> →{" "}
                  <InlineMath math="\text{lcm}(6,5)=30" /> ✓
                </li>
                <li>
                  II. <InlineMath math="x=10" /> →{" "}
                  <InlineMath math="\text{lcm}(6,10)=30" /> ✓
                </li>
                <li>
                  III. <InlineMath math="x=20" /> →{" "}
                  <InlineMath math="\text{lcm}(6,20)=60" /> ✗
                </li>
              </ul>
              <p>Thus, only I and II work.</p>
              <BlockMath math="\text{Answer: I and II}" />
            </>
          }
        />

        <p>
          Bottom line: the LCD is just the least common multiple of the
          denominators. You can find it fast by listing a few multiples or by
          using prime factorization to take the highest power of each prime that
          appears across the denominators.
        </p>
      </article>
    </main>
  );
}