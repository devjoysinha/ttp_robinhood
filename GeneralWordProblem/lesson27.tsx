import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "7.7 Linear Growth Problems | General Word Problems",
  description:
    "Learn how to model and solve linear growth problems using a simple formula or a growth table. Includes an MCQ and a data‑sufficiency style drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.7 Linear Growth Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Linear growth means you start from an initial amount and add the same
          fixed increment each period. Because the change per step is constant,
          the quantity grows along a straight line when graphed.
        </p>

        <MustKnow>
          When a quantity increases by a constant amount per unit time, model it
          with a linear function. Two reliable tools:
          <br />
          • A closed‑form formula, such as{" "}
          <InlineMath math={"H(t) = H_0 + r\\,t"} /> where{" "}
          <InlineMath math={"H_0"} /> is the starting value,{" "}
          <InlineMath math={"r"} /> is the constant change per period, and{" "}
          <InlineMath math={"t"} /> is the number of periods.
          <br />
          • A simple growth table that lists time and value row by row to reveal
          the pattern.
        </MustKnow>

        <section aria-labelledby="linear-formula">
          <h3 id="linear-formula" className="text-xl font-semibold text-white">
            The linear model
          </h3>
          <p className="mt-2">
            A standard way to capture linear growth is:
          </p>
          <BlockMath math={"y(t) = y_0 + k\\,t"} />
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <InlineMath math={"y_0"} />: initial value at{" "}
              <InlineMath math={"t = 0"} />.
            </li>
            <li>
              <InlineMath math={"k"} />: constant amount added each period
              (slope).
            </li>
            <li>
              <InlineMath math={"t"} />: number of periods.
            </li>
          </ul>
          <p className="mt-2">
            For sequences indexed by positive integers, this is the arithmetic
            sequence model:
          </p>
          <BlockMath math={"a_n = a_1 + (n - 1)\\,d"} />
          <p className="mt-2">
            where <InlineMath math={"a_1"} /> is the first term and{" "}
            <InlineMath math={"d"} /> is the common difference.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="A tree is 10 feet tall at the start of year 0 and grows by 2 feet each year. How tall is it at the end of year 5?"
          options={["18", "19", "20", "22", "24"]}
          correct="20"
          solution={
            <>
              <p>
                Model with <InlineMath math={"H(t) = H_0 + r\\,t"} /> where{" "}
                <InlineMath math={"H_0 = 10"} /> and{" "}
                <InlineMath math={"r = 2"} /> feet/year.
              </p>
              <BlockMath math={"H(5) = 10 + 2\\cdot 5 = 20"} />
              <p>So the height is 20 feet.</p>
            </>
          }
        />

        <section aria-labelledby="growth-table">
          <h3 id="growth-table" className="text-xl font-semibold text-white">
            Solving with a growth table
          </h3>
          <p className="mt-2">
            When the numbers are small or a situation description is messy, a
            quick table can be faster and less error‑prone than jumping straight
            to a formula. For example, starting at 120 members and adding 7 per
            month:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Month 0: 120</li>
            <li>Month 1: 127</li>
            <li>Month 2: 134</li>
            <li>Month 3: 141</li>
            <li>… continue until the target month</li>
          </ul>
          <p className="mt-2">
            Once the pattern is clear, you can switch to{" "}
            <InlineMath math={"M(t) = 120 + 7t"} /> if you need a specific
            month quickly.
          </p>
        </section>

      <ExampleCard
          number={2}
          title="Determining a linear growth value"
          statements={[
            "A process follows a linear growth rule. What is y(12)?",
            "1) y(0) = 50 and the amount increases by 4 each day.",
            "2) y(3) = 62 and y(7) = 78.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>We need the value at t = 12.</p>
              <p>
                <strong>Statement (1):</strong> With{" "}
                <InlineMath math={"y(t)=y_0 + k t"} />, we have{" "}
                <InlineMath math={"y_0=50"} /> and{" "}
                <InlineMath math={"k=4"} />. Thus{" "}
              </p>
              <BlockMath math={"y(12)=50+4\\cdot 12=98"} />
              <p>Sufficient.</p>
              <p>
                <strong>Statement (2):</strong> Two points determine a unique
                line. The slope is{" "}
                <InlineMath math={"k=\\frac{78-62}{7-3}=\\frac{16}{4}=4"} />.
                Using <InlineMath math={"y(3)=62"} />, we solve for the
                intercept: <InlineMath math={"62=3\\cdot 4 + b\\Rightarrow b=50"} />.
              </p>
              <BlockMath math={"y(12)=50+4\\cdot 12=98"} />
              <p>Sufficient.</p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Linear growth is all about a fixed step size. Use the closed‑form
            model when you know the initial value and the per‑period change; use
            a growth table when you want to trace the pattern step‑by‑step or
            sanity‑check your algebra.
          </p>
        </section>
      </article>
    </main>
  );
}