import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.2.3 Adding Sums | Statistics",
  description:
    "Convert between averages and sums quickly, split and combine groups, and apply the grouping formula. Includes one multiple‑choice example, one data‑sufficiency drill, and another multiple‑choice problem with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.2.3 Adding Sums
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Averages and sums are two sides of the same coin. From{" "}
          <InlineMath math="\text{average}=\dfrac{\text{sum}}{\#\text{ of terms}}" />{" "}
          we can immediately flip to{" "}
          <InlineMath math="\text{sum}=\text{average}\times\#\text{ of terms}" />.
          That simple rearrangement lets you combine or split groups without
          tracking every individual value.
        </p>

        <p>
          For example, suppose 6 students have an average score of 80. Then their
          total is <InlineMath math="6\times 80=480" />. If all 12 students together
          average 90, the class total is <InlineMath math="12\times 90=1080" />.
          Let the other group’s average be <InlineMath math="x" />. The second
          group’s sum is <InlineMath math="6x" />, so:
        </p>

        <div className="rounded-md bg-gray-900/50 p-4">
          <BlockMath math="480+6x=1080\ \Rightarrow\ 6x=600\ \Rightarrow\ x=100" />
        </div>

        <MustKnow>
          If a set with n elements has average a and is partitioned into two
          subgroups with sizes n1 and n2 and averages a1 and a2, then
          <div className="mt-2">
            <BlockMath math="n_1a_1+n_2a_2=na" />
          </div>
          The same idea extends to any number of subgroups: just add each
          group’s “size × average.”
        </MustKnow>

        <p>
          The key workflow: turn each average into a sum, combine sums, and (if
          needed) turn the result back into an average by dividing by the
          number of terms.
        </p>

        <MCQExample
          number={6}
          prompt="The average age of 10 workers is 46. If 6 of the workers have an average age of 30, what is the average age of the remaining 4 workers?"
          options={["50", "55", "60", "65", "70"]}
          correct="70"
          solution={
            <>
              <p>
                Convert each average to a sum:
                <br />
                total of 10 workers: <InlineMath math="46\times 10=460" />
                <br />
                total of the known 6 workers: <InlineMath math="30\times 6=180" />
              </p>
              <p>
                Let <InlineMath math="x" /> be the average of the remaining 4
                workers. Their total is <InlineMath math="4x" />. Then:
              </p>
              <BlockMath math="180+4x=460\ \Rightarrow\ 4x=280\ \Rightarrow\ x=70" />
              <p>So the average of the other 4 workers is 70.</p>
            </>
          }
        />

        <ExampleCard
          number={7}
          title="Sum from a known overall average"
          statements={[
            "If the average of the positive integers a, b, c, d, and e is 20, what is a + b?",
            "1) The average of c, d, and e is 10.",
            "2) The average of b and d is 4.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                From the stem, the five-number sum is{" "}
                <InlineMath math="20\times 5=100" />.
              </p>
              <p>
                <strong>Statement (1):</strong> The average of{" "}
                <InlineMath math="c,d,e" /> is 10, so{" "}
                <InlineMath math="c+d+e=3\times 10=30" />. Then{" "}
                <InlineMath math="a+b=100-30=70" />. Unique value → sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> The average of{" "}
                <InlineMath math="b,d" /> is 4, so{" "}
                <InlineMath math="b+d=8" />. That does not fix{" "}
                <InlineMath math="a+b" />. Not sufficient.
              </p>
              <p>Answer: A.</p>
            </>
          }
        />

        <MCQExample
          number={8}
          prompt="The average age of 10 paintings is 30 years. After adding 5 more paintings, the new average increases by 50 years. What is the average age of the 5 added paintings?"
          options={["60", "80", "120", "160", "180"]}
          correct="180"
          solution={
            <>
              <p>
                Initial total: <InlineMath math="10\times 30=300" />. With 15
                paintings, the new average is{" "}
                <InlineMath math="30+50=80" />, so the new total is{" "}
                <InlineMath math="80\times 15=1200" />.
              </p>
              <p>
                Let <InlineMath math="x" /> be the sum of the 5 new paintings. Then{" "}
                <InlineMath math="300+x=1200\Rightarrow x=900" />, and the new
                group’s average is <InlineMath math="900/5=180" />.
              </p>
              <p>Therefore, the average age of the 5 added paintings is 180.</p>
            </>
          }
        />

        <p>
          Takeaway: move effortlessly between sums and averages. Multiply to get
          sums, add or subtract to combine groups, then divide to return to an
          average when needed.
        </p>
      </article>
    </main>
  );
}