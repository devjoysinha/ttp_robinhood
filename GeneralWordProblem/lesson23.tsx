import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.6 Interest Rate Problems | Word Problems",
  description:
    "Understand the two core interest models on the GMAT—simple and compound interest. See key formulas in KaTeX, a quick multiple‑choice drill, and two Data Sufficiency examples with complete reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6 Interest Rate Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On GMAT word problems, interest scenarios usually fall into two camps:
          simple interest and compound interest. Simple interest grows only on
          the original principal. Compound interest grows on the principal and
          on any interest that has already accumulated.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-gray-200">Core formulas</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Simple interest (total interest over t years):
                <span className="ml-2 inline-block">
                  <InlineMath math={"I = P r t"} />
                </span>
                . Final amount:
                <span className="ml-2 inline-block">
                  <InlineMath math={"A = P(1 + r t)"} />
                </span>
                .
              </li>
              <li>
                Compound interest (n compounding periods per year):
                <span className="ml-2 inline-block">
                  <InlineMath math={"A = P\\left(1 + \\frac{r}{n}\\right)^{n t}"} />
                </span>
                .
              </li>
            </ul>
            <p>
              Here, <InlineMath math={"P"} /> is the principal,{" "}
              <InlineMath math={"r"} /> is the annual rate (as a decimal),{" "}
              <InlineMath math={"t"} /> is time in years,{" "}
              <InlineMath math={"n"} /> is the number of compounding periods per
              year, <InlineMath math={"I"} /> is total interest, and{" "}
              <InlineMath math={"A"} /> is the ending amount.
            </p>
          </div>
        </MustKnow>

        <p>
          We’ll start with simple interest, then contrast it with compound
          interest in brief Data Sufficiency drills.
        </p>

        <MCQExample
          number={61}
          prompt="An amount of $800 earns interest at a simple annual rate of 5% for 3 years. How much interest is earned?"
          options={["$80", "$100", "$120", "$150", "$180"]}
          correct="$120"
          solution={
            <>
              <p className="mb-2">
                With simple interest, use <InlineMath math={"I = P r t"} />.
              </p>
              <BlockMath math={"I = 800 \\times 0.05 \\times 3 = 120"} />
              <p className="mt-2">So the interest earned is $120.</p>
            </>
          }
        />

        <ExampleCard
          number={62}
          title="Is the growth simple interest?"
          statements={[
            "An investment earns interest at a positive annual rate r for 2 years. Was the interest simple (not compounded)?",
            "1) The rate r was the same each year.",
            "2) The dollar interest earned in year 2 was equal to the dollar interest earned in year 1.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We must determine whether interest accrues only on principal
                each year (simple) rather than on principal plus prior interest
                (compound).
              </p>
              <p>
                <strong>Statement (1):</strong> A constant rate by itself does
                not rule out compounding; compound growth can occur at a fixed
                nominal rate. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> If the dollar interest in year
                2 equals the dollar interest in year 1, that behavior matches
                simple interest. Under compounding with positive rate, year 2
                would earn more than year 1. Sufficient.
              </p>
              <p>Answer: B.</p>
            </>
          }
        />

        <ExampleCard
          number={63}
          title="Identify the compounding frequency"
          statements={[
            "A principal of $1,000 earns interest at a nominal annual rate of 8%, compounded n times per year. What is n?",
            "1) After 1 year, the amount is $1,081.60.",
            "2) After 6 months, the amount is $1,040.00.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Use <InlineMath math={"A = P\\left(1 + \\frac{r}{n}\\right)^{n t}"} />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math={"1000\\left(1 + \\frac{0.08}{n}\\right)^{n} = 1081.60"} />.
                Since <InlineMath math={"(1.04)^2 = 1.0816"} />,{" "}
                <InlineMath math={"n = 2"} /> (semiannual) fits exactly. No
                other integer n gives this exact value. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> For{" "}
                <InlineMath math={"t = 0.5"} /> years,{" "}
                <InlineMath math={"1000\\left(1 + \\frac{0.08}{n}\\right)^{0.5 n} = 1040"} />.
                This requires <InlineMath math={"\\left(1 + \\frac{0.08}{n}\\right)^{0.5 n} = 1.04"} />.
                With <InlineMath math={"n = 2"} />, one half-year at 4% gives
                exactly $1,040. Other common n values (e.g., 4 or 12) produce
                slightly more than 4% after half a year. Thus n = 2. Sufficient.
              </p>
              <p>Answer: D.</p>
            </>
          }
        />

        <p>
          Takeaway: decide upfront whether the problem is simple or compound.
          Apply the corresponding formula and watch units—especially time in
          years and the compounding frequency.
        </p>
      </article>
    </main>
  );
}