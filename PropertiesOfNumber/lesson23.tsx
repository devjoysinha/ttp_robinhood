import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "4.8 Multiples | Properties of Numbers",
  description:
    "Understand multiples: formal definitions, quick rules, and a worked multiple‑choice example. Includes KaTeX-rendered formulas and accessible, responsive UI.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.8 Multiples
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A multiple of a number is what you get when you take that number and
          multiply it by an integer. For instance, starting from 2:{" "}
          <InlineMath math="2\cdot0=0" />, <InlineMath math="2\cdot1=2" />,{" "}
          <InlineMath math="2\cdot2=4" />, <InlineMath math="2\cdot3=6" /> — and
          the list continues forever.
        </p>

        <p>
          Formally, for quantities <InlineMath math="x" /> and{" "}
          <InlineMath math="y" />, we say “<InlineMath math="x" /> is a multiple
          of <InlineMath math="y" />” exactly when{" "}
          <InlineMath math="x = n\,y" /> for some integer{" "}
          <InlineMath math="n" />. Equivalently, as long as{" "}
          <InlineMath math="y \neq 0" />, the quotient{" "}
          <InlineMath math="\dfrac{x}{y}" /> is an integer if and only if{" "}
          <InlineMath math="x" /> is a multiple of <InlineMath math="y" />.
        </p>

        <MustKnow>
          If <InlineMath math="y \neq 0" />, then{" "}
          <InlineMath math="x" /> is a multiple of{" "}
          <InlineMath math="y" /> precisely when{" "}
          <InlineMath math="\dfrac{x}{y}" /> is an integer. Thinking in terms of
          “does it divide evenly?” is often the fastest route on test day.
        </MustKnow>

        <p>
          Example: if we are told <InlineMath math="x" /> is a multiple of 5, we
          can write <InlineMath math="x = 5n" /> for some integer{" "}
          <InlineMath math="n" />. That also guarantees{" "}
          <InlineMath math="\dfrac{x}{5}" /> is an integer. The first four
          nonnegative multiples of 5 are:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <BlockMath math="\;0,\;5,\;10,\;15" />
        </div>

        <p>
          One more useful perspective: every integer is both a factor and a
          multiple of itself. For example, 5 divides 5, and 5 is also{" "}
          <InlineMath math="5 \times 1" /> — so it’s naturally a multiple of 5.
        </p>

        <MustKnow>
          To generate a multiple of any value <InlineMath math="x" />, simply
          multiply <InlineMath math="x" /> by any integer.
        </MustKnow>

        <MCQExample
          number={16}
          prompt="If a, b, c, d, and x are positive integers, and x = 3abd, which of the following is NOT guaranteed to be a multiple of x?"
          options={["9abcd", "3abcd", "15abd", "3abc", "45abcd"]}
          correct="3abc"
          solution={
            <>
              <p>
                A quantity is a multiple of <InlineMath math="x" /> exactly when
                dividing by <InlineMath math="x" /> yields an integer. Since{" "}
                <InlineMath math="x = 3abd" />, test each choice by forming{" "}
                <InlineMath math="\dfrac{\text{choice}}{3abd}" />.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  A: <InlineMath math="\dfrac{9abcd}{3abd} = 3c" /> (integer).
                </li>
                <li>
                  B: <InlineMath math="\dfrac{3abcd}{3abd} = c" /> (integer).
                </li>
                <li>
                  C: <InlineMath math="\dfrac{15abd}{3abd} = 5" /> (integer).
                </li>
                <li>
                  D: <InlineMath math="\dfrac{3abc}{3abd} = \dfrac{c}{d}" />.
                  This need not be an integer. For instance,{" "}
                  <InlineMath math="c=3" /> and <InlineMath math="d=4" /> give{" "}
                  <InlineMath math="\dfrac{3}{4}" />.
                </li>
                <li>
                  E: <InlineMath math="\dfrac{45abcd}{3abd} = 15c" /> (integer).
                </li>
              </ul>

              <p>
                Only choice D can fail to divide evenly by{" "}
                <InlineMath math="x" />. Therefore, the correct answer is D.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: when checking whether something “must be” a multiple,
          reduce the fraction against the known factorization and look for any
          leftover variables in the denominator. If a leftover like{" "}
          <InlineMath math="d" /> remains, the result may not be an integer for
          all allowable values.
        </p>
      </article>
    </main>
  );
}