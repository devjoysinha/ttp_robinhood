import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.5 Absolute Values | Properties of Numbers",
  description:
    "Understand absolute value as distance from zero, the notation |n|, and how to compare magnitudes. Includes a quick check MCQ and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.5 Absolute Values
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every nonzero real number is either positive (to the right of 0 on the
          number line) or negative (to the left of 0). The number 0 itself is
          neither positive nor negative. Before we dive into sign rules, let’s
          lock down what absolute value means and how to read its notation.
        </p>

        <MustKnow>
          The absolute value of a real number <InlineMath math="n" />—written{" "}
          <InlineMath math="|n|" />—is the distance between <InlineMath math="n" /> and 0 on the
          number line. Because distance can’t be negative,{" "}
          <InlineMath math="|n| \ge 0" /> for all real <InlineMath math="n" />.
        </MustKnow>

        <p>
          Interpreting <InlineMath math="|n|" /> as “how far from 0?” makes
          common cases immediate:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <InlineMath math="|{-7}| = 7" /> and <InlineMath math="|7| = 7" /> because both
            numbers are 7 units from 0.
          </li>
          <li>
            <InlineMath math="|108| = 108" /> and <InlineMath math="|{-108}| = 108" /> for the
            same reason—each is 108 units from 0.
          </li>
        </ul>

        <p>
          This “distance-only” viewpoint also explains comparisons: the number
          with the greater magnitude (farther from 0) has the larger absolute
          value, regardless of its sign.
        </p>

        <MCQExample
          number={1}
          prompt="Which number has the greater absolute value?"
          options={["-1000", "10", "They’re equal", "Cannot be determined"]}
          correct="-1000"
          solution={
            <>
              <p>
                Absolute value measures distance from 0. We have{" "}
                <InlineMath math="|{-1000}| = 1000" /> and{" "}
                <InlineMath math="|10| = 10" />. Since 1000 is larger than 10,
                <strong> -1000</strong> has the greater absolute value.
              </p>
            </>
          }
        />

        <p>
          Notation and quick facts to remember:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <InlineMath math="|n| = n" /> if <InlineMath math="n \ge 0" />.
          </li>
          <li>
            <InlineMath math="|n| = -n" /> if <InlineMath math="n < 0" /> (the
            negative sign “flips” the value to make it nonnegative).
          </li>
          <li>
            <InlineMath math="|0| = 0" />.
          </li>
        </ul>

        <ExampleCard
          number={2}
          title="Is |x| equal to x?"
          statements={[
            "Decide whether |x| = x.",
            "1) x ≥ 0",
            "2) x ≤ 0",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We’re answering a yes/no question: “Is <InlineMath math="|x| = x" />?”
              </p>
              <p>
                <strong>Statement (1):</strong> <InlineMath math="x \ge 0" />. For any
                nonnegative <InlineMath math="x" />,{" "}
                <InlineMath math="|x| = x" /> by definition. This always yields
                “yes,” so (1) is sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> <InlineMath math="x \le 0" />. If{" "}
                <InlineMath math="x < 0" />, then <InlineMath math="|x| \ne x" />; if{" "}
                <InlineMath math="x = 0" />, then <InlineMath math="|x| = x = 0" />.
                We get both “yes” and “no” across possibilities, so (2) is not
                sufficient.
              </p>
              <p>Answer: A.</p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Determining a specific value"
          statements={[
            "What is the value of y?",
            "1) |y| = 7",
            "2) y ≥ 0",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                <strong>Statement (1):</strong> <InlineMath math="|y| = 7" /> implies{" "}
                <InlineMath math="y = 7" /> or <InlineMath math="y = -7" />. Two
                possibilities → not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> <InlineMath math="y \ge 0" /> gives only sign
                information, not a number → not sufficient.
              </p>
              <p>
                <strong>Together:</strong> <InlineMath math="|y| = 7" /> and{" "}
                <InlineMath math="y \ge 0" /> force <InlineMath math="y = 7" />. Unique value →
                sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Key takeaway: absolute value is about distance. Treat{" "}
          <InlineMath math="|n|" /> as “how far from 0,” use the definition to
          handle signs cleanly, and test edge cases (such as 0) when answering
          yes/no questions about absolute value.
        </p>
      </article>
    </main>
  );
}