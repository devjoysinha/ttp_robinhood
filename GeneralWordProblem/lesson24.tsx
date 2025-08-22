import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.6.1 Simple Interest Problems | Word Problems",
  description:
    "Master simple interest problems: the formula, unit consistency, and three worked multiple‑choice examples including fractional time conversions and solving for rate.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX styles (scoped include for math rendering) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.1 Simple Interest Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many questions about simple interest boil down to one relationship. Once
          you keep your units aligned, the arithmetic is straightforward.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <BlockMath math={`\\text{Simple Interest} = \\text{Principal}\\,\\times\\,\\text{Rate}\\,\\times\\,\\text{Time}`} />
            <ul className="list-disc pl-5">
              <li>
                Principal is the original amount invested, borrowed, or lent.
              </li>
              <li>
                Rate must be expressed as a decimal or fraction (for example, 5% →{" "}
                <InlineMath math={"0.05"} /> or <InlineMath math={"\\tfrac{5}{100}"} />).
              </li>
              <li>
                Time must use units that match the rate. If the rate is per year,
                express time in years; if the rate is per month, express time in months.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          A common trap is mixing units. For instance, if an account pays an annual
          simple interest rate but the money is invested for only 8 months, convert
          8 months to a fraction of a year:{" "}
          <InlineMath math={"\\tfrac{8}{12} = \\tfrac{2}{3}"} /> year. If the rate is{" "}
          <InlineMath math={"x\\%"} />, treat it as <InlineMath math={"\\tfrac{x}{100}"} />, not just{" "}
          <InlineMath math={"x"} />.
        </p>

        <p>Try the following quick examples.</p>

        <MCQExample
          number={31}
          prompt="Tina deposits $10 in an account that earns 5% simple interest annually. How much interest will she earn in 2 years?"
          options={["$1", "$2", "$3", "$4", "$5"]}
          correct="$1"
          solution={
            <>
              <p>Use the simple interest formula:</p>
              <BlockMath math={"I = P\\,r\\,t"} />
              <BlockMath math={"I = 10\\times 0.05\\times 2 = 1"} />
              <p>Tina earns $1 in interest.</p>
            </>
          }
        />

        <MCQExample
          number={32}
          prompt="Fred invests $100 at 30% simple interest per year. How much total interest does he earn after 8 months?"
          options={["$20", "$18", "$15", "$12", "$10"]}
          correct="$20"
          solution={
            <>
              <p>
                Convert 8 months to years:{" "}
                <InlineMath math={"\\tfrac{8}{12} = \\tfrac{2}{3}"} />.
              </p>
              <BlockMath math={"I = P\\,r\\,t = 100\\times 0.30\\times \\tfrac{2}{3} = 20"} />
              <p>Fred earns $20 in interest.</p>
            </>
          }
        />

        <MCQExample
          number={33}
          prompt="Carl invests $3,600 for one year at simple annual interest. After 5 months, the investment has earned $300 in interest. What is the annual interest rate?"
          options={["19 percent", "20 percent", "22 percent", "23 percent", "25 percent"]}
          correct="20 percent"
          solution={
            <>
              <p>
                Let <InlineMath math={"r"} /> be the annual rate (as a decimal). Time is{" "}
                <InlineMath math={"\\tfrac{5}{12}"} /> year.
              </p>
              <BlockMath math={"I = P\\,r\\,t"} />
              <BlockMath math={"300 = 3600\\,r\\,\\tfrac{5}{12}"} />
              <BlockMath math={"r = \\dfrac{300}{3600\\cdot (5/12)} = 0.20 = 20\\%"} />
              <p>The annual rate is 20%.</p>
            </>
          }
        />

        <p>
          Key takeaway: keep the time unit consistent with the rate and apply{" "}
          <InlineMath math={"I = P\\,r\\,t"} />. Next, we’ll move on to compound
          interest, where interest can earn interest.
        </p>
      </article>
    </main>
  );
}