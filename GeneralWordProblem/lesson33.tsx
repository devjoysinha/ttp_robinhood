import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "7.10 Digit Problems | General Word Problems",
  description:
    "Master GMAT digit problems: place value, building equations from digits, and classic two‑digit traps. Includes two Problem Solving MCQs and one Data Sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.10 Digit Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Our base‑10 system uses exactly ten symbols—0 through 9. Any whole or
          decimal number is just a string of these symbols, where a digit’s
          place determines its value. Moving one place left multiplies value by
          10; moving one place right divides value by 10.
        </p>

        <p>
          Example number: 1,762,594,322.983. Reading by place:
        </p>

        <ul className="list-disc pl-6">
          <li>Whole‑number side (left of the decimal):</li>
        </ul>
        <div className="grid grid-cols-1 gap-2 rounded-md bg-gray-800/40 p-4 md:grid-cols-2">
          <ul className="space-y-1">
            <li>1 → billions</li>
            <li>7 → hundred‑millions</li>
            <li>6 → ten‑millions</li>
            <li>2 → millions</li>
            <li>5 → hundred‑thousands</li>
            <li>9 → ten‑thousands</li>
          </ul>
          <ul className="space-y-1">
            <li>4 → thousands</li>
            <li>3 → hundreds</li>
            <li>2 → tens</li>
            <li>2 → ones (aka “units”)</li>
          </ul>
        </div>

        <ul className="list-disc pl-6">
          <li>Decimal side (right of the decimal):</li>
        </ul>
        <div className="rounded-md bg-gray-800/40 p-4">
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <li>9 → tenths</li>
            <li>8 → hundredths</li>
            <li>3 → thousandths</li>
          </ul>
        </div>

        <p>
          Place value decomposes numbers neatly. For instance, 444 is{" "}
          <InlineMath math="400 + 40 + 4" />, so the tens digit is 10 times the
          ones digit, and the hundreds digit is 100 times the ones digit.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Two‑digit blueprint:</p>
            <p>
              If the tens digit is <InlineMath math="T" /> and the units digit
              is <InlineMath math="U" />, then the number’s value is{" "}
              <InlineMath math="10T + U" />. Many “digit” problems turn verbal
              clues into equations using this template.
            </p>
          </div>
        </MustKnow>

        <p>
          On the GMAT, most digit questions center on two‑digit integers, place
          value, or reversing digits. Let’s practice.
        </p>

        <MCQExample
          number={49}
          prompt="The sum of the digits of a two‑digit number is 14. Reversing the digits produces a number that is 18 larger than the original. What is the original number?"
          options={["59", "68", "77", "86", "95"]}
          correct="68"
          solution={
            <>
              <p>
                Let the tens digit be <InlineMath math="a" /> and the units
                digit be <InlineMath math="b" />. Then the number is{" "}
                <InlineMath math="10a + b" />. The given information yields:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Digit sum: <InlineMath math="a + b = 14" />
                </li>
                <li>
                  Reversal is 18 larger:{" "}
                  <InlineMath math="10b + a = (10a + b) + 18" />
                </li>
              </ul>
              <p>
                From the second equation,{" "}
                <InlineMath math="10b + a = 10a + b + 18 \Rightarrow 9b - 9a = 18 \Rightarrow b - a = 2" />
                .
              </p>
              <p>
                Combine with <InlineMath math="a + b = 14" />:
                <br />
                <InlineMath math="\begin{aligned} a + b &= 14 \\ b - a &= 2 \end{aligned}" />
              </p>
              <p>
                Adding gives <InlineMath math="2b = 16 \Rightarrow b = 8" />, so{" "}
                <InlineMath math="a = 6" />. The original number is{" "}
                <InlineMath math="10\cdot 6 + 8 = 68" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={50}
          prompt="If 567,456 = 5×10^a + 6×10^b + 7×10^c + 4×10^d + 5×10^e + 6×10^f and a, b, c, d, e, f are whole numbers, what is a×b×c×d×e×f?"
          options={["0", "1", "2", "3", "4"]}
          correct="0"
          solution={
            <>
              <p>
                The exponents correspond to place values. Writing the equality
                with exponents:
              </p>
              <BlockMath math="567{,}456 = 5\cdot 10^{a} + 6\cdot 10^{b} + 7\cdot 10^{c} + 4\cdot 10^{d} + 5\cdot 10^{e} + 6\cdot 10^{f}" />
              <p>
                By place, we have:
                <InlineMath math="a=5" /> (hundred‑thousands),{" "}
                <InlineMath math="b=4" /> (ten‑thousands),{" "}
                <InlineMath math="c=3" /> (thousands),{" "}
                <InlineMath math="d=2" /> (hundreds),{" "}
                <InlineMath math="e=1" /> (tens),{" "}
                <InlineMath math="f=0" /> (ones).
              </p>
              <p>
                Therefore{" "}
                <InlineMath math="a\cdot b\cdot c\cdot d\cdot e\cdot f = 5\cdot 4\cdot 3\cdot 2\cdot 1\cdot 0 = 0" />
                .
              </p>
            </>
          }
        />

        <ExampleCard
          number={51}
          title="Product of digits equals 6"
          statements={[
            "If the product of the digits of a two‑digit positive integer x is 6, what is the value of x?",
            "1) The units digit of x is six times its tens digit.",
            "2) x is a perfect square.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                If the product of digits is 6, the only two‑digit candidates
                are 16, 61, 23, and 32.
              </p>
              <p>
                <strong>Statement (1):</strong> units digit = 6 × (tens digit).
                This matches only 16. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> x is a perfect square. Of the
                candidates, only 16 is a square. Sufficient.
              </p>
              <p>
                Each statement alone pins down a unique value. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Takeaway: Translate words into place‑value equations. For two‑digit
          integers, the structure <InlineMath math="10T + U" /> plus any
          reversal or digit‑sum/product facts typically solves the question in a
          few steps.
        </p>
      </article>
    </main>
  );
}