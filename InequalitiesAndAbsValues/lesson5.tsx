import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.6 Compound Inequalities | Inequalities and Absolute Values",
  description:
    "Learn how to combine, manipulate, and solve three‑part (compound) inequalities, including how and when to flip inequality signs. Includes two practice questions with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.6 Compound (Three‑part) Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two one‑sided inequalities can be written as a single three‑part
          statement when they describe the same variable from both sides. For
          example, from <InlineMath math={"x \\le 5"} /> and{" "}
          <InlineMath math={"x \\ge -4"} /> we can write the combined form{" "}
          <InlineMath math={"-4 \\le x \\le 5"} />. This compact form is called
          a compound inequality.
        </p>

        <p>
          The usual algebra rules still apply. The only twist is that whatever
          you do to the variable must be done to each part of the three‑part
          chain.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Apply the same operation to all parts. Example: starting with{" "}
              <InlineMath math={"-4 \\le x \\le 5"} />, multiplying everything
              by <InlineMath math={"3"} /> gives{" "}
              <InlineMath math={"-12 \\le 3x \\le 15"} />.
            </li>
            <li>
              If you multiply or divide by a negative number, flip both
              inequality signs. For instance:
              <BlockMath math={"\\frac{-100 \\;\\ge\\; -500x \\;\\ge\\; -1000}{\\;-100\\;} \\;\\Rightarrow\\; 1 \\;\\le\\; 5x \\;\\le\\; 10"} />
              Note that both inequalities reversed direction.
            </li>
          </ul>
        </MustKnow>

        <p>
          When solving a compound inequality, your goal is to isolate the
          variable while maintaining the order of the chain.
        </p>

        <MCQExample
          number={15}
          prompt={
            <>
              If <InlineMath math={"-16 < -4x < 32"} />, which of the following
              could be a value of <InlineMath math={"x"} />?
            </>
          }
          options={["-12", "-8", "-2", "6", "10"]}
          correct="-2"
          solution={
            <>
              <p>
                Divide every part of <InlineMath math={"-16 < -4x < 32"} /> by{" "}
                <InlineMath math={"-4"} />, remembering to reverse both
                inequality signs:
              </p>
              <BlockMath math={"\\frac{-16}{-4} \\;>\\; x \\;>\\; \\frac{32}{-4} \\;\\;\\Rightarrow\\;\\; 4 > x > -8"} />
              <p>
                So <InlineMath math={"x"} /> must lie strictly between{" "}
                <InlineMath math={"-8"} /> and <InlineMath math={"4"} />. Of the
                options, only <InlineMath math={"-2"} /> fits.
              </p>
            </>
          }
        />

        <MCQExample
          number={16}
          prompt={
            <>
              If <InlineMath math={"-20 < -8 + 2x < 32"} />, how many integer
              multiples of <InlineMath math={"3"} /> could{" "}
              <InlineMath math={"x"} /> be?
            </>
          }
          options={["4", "5", "6", "7", "8"]}
          correct="8"
          solution={
            <>
              <p>Isolate x step by step, applying each operation to all parts:</p>
              <BlockMath math={"-20 < -8 + 2x < 32"} />
              <BlockMath math={"\\;\\;\\;\\;\\;\\;\\;+\\,8\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\; +\\,8\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\; +\\,8"} />
              <BlockMath math={"-12 < 2x < 40"} />
              <BlockMath math={"\\frac{-12}{2} < x < \\frac{40}{2} \\;\\Rightarrow\\; -6 < x < 20"} />
              <p>
                The integer multiples of 3 strictly between −6 and 20 are:
                <InlineMath math={"\\; -3,\\; 0,\\; 3,\\; 6,\\; 9,\\; 12,\\; 15,\\; 18"} />.
                That’s 8 values.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat a compound inequality like a normal inequality, but
          remember to perform each step on all parts and reverse directions when
          multiplying or dividing by a negative.