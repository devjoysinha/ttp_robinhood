import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.6.3 Be Careful with the Number of Compounding Periods | Word Problems",
  description:
    "Understand how compounding frequency changes the per‑period rate and how to use A = P(1 + r/n)^(nt). Includes worked examples and MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.3 Be Careful with the Number of Compounding Periods
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Interest rates are typically quoted per year, but the compounding can happen more often than once a year: twice a year, quarterly, monthly, and so on. When that happens, you must adjust the rate to match the number of compounding periods.
        </p>

        <MustKnow>
          If the annual rate is <InlineMath math="r" /> and interest is compounded <InlineMath math="n" /> times per year, then the rate applied each period is{" "}
          <InlineMath math="r/n" />. The compound interest formula already bakes this in:
          <BlockMath math="A=P\left(1+\frac{r}{n}\right)^{nt}" />
        </MustKnow>

        <p>Quick per‑period rate sanity checks:</p>
        <ul className="list-disc pl-6">
          <li>
            Semiannual compounding at 12% yearly gives <InlineMath math="12\%/2=6\%" /> per half‑year.
          </li>
          <li>
            Quarterly compounding at 12% yearly gives <InlineMath math="12\%/4=3\%" /> per quarter.
          </li>
          <li>
            Monthly compounding at 12% yearly gives <InlineMath math="12\%/12=1\%" /> per month.
          </li>
        </ul>

        <p>
          You can compute growth period by period or plug directly into the formula. If answer choices are widely spaced, estimation can save time; if they’re tight, use exact calculations.
        </p>

        <MCQExample
          number={35}
          prompt="A principal of $10,000 earns 4% annual interest, compounded semiannually. What is the value after one year?"
          options={["$10,124", "$10,204", "$10,400", "$10,404", "$10,800"]}
          correct="$10,404"
          solution={
            <>
              <p>
                Semiannual compounding means two periods per year and a per‑period rate of{" "}
                <InlineMath math="0.04/2=0.02" />.
              </p>
              <BlockMath math="A=10{,}000\left(1+0.02\right)^{2}=10{,}000\cdot 1.0404=10{,}404" />
              <p>Answer: $10,404.</p>
            </>
          }
        />

        <MCQExample
          number={36}
          prompt="Margot invests $4,000 at 8% annual interest, compounded quarterly. Which expression gives the value after one year?"
          options={[
            "4000(1.08)",
            "4000(1.02)^4",
            "4000(1.02)^8",
            "4000(1.04)^8",
            "4000(1.08)^4",
          ]}
          correct="4000(1.02)^4"
          solution={
            <>
              <p>
                Quarterly compounding: <InlineMath math="n=4" /> and per‑period rate{" "}
                <InlineMath math="0.08/4=0.02" />. Over one year:
              </p>
              <BlockMath math="A=4{,}000\left(1+0.02\right)^{4}" />
              <p>So 4000(1.02)^4 is correct.</p>
            </>
          }
        />

        <MCQExample
          number={37}
          prompt="An account totals $54,080 after one year at 8% annual interest, compounded semiannually. How much was originally invested?"
          options={["$45,000", "$50,000", "$54,000", "$59,000", "$62,000"]}
          correct="$50,000"
          solution={
            <>
              <p>
                With semiannual compounding: <InlineMath math="A=P(1+0.08/2)^{2}=P(1.04)^2" />.
              </p>
              <BlockMath math="54{,}080=P\cdot 1.0816\quad\Rightarrow\quad P=\dfrac{54{,}080}{1.0816}=50{,}000" />
              <p>Answer: $50,000.</p>
            </>
          }
        />

        <MCQExample
          number={38}
          prompt="An investor deposits $10,000 at y percent annual interest, compounded semiannually. If the account is worth x dollars after one year, what is y in terms of x?"
          options={[
            "10000(1 + x/200)^2",
            "x/10000 − 1",
            "2√x − 200",
            "x^2/100 − 200",
            "√x/100 − 100",
          ]}
          correct="2√x − 200"
          solution={
            <>
              <p>
                One year, semiannual:{" "}
                <InlineMath math="x=10{,}000\left(1+\frac{y}{200}\right)^2" />.
              </p>
              <BlockMath math="\left(1+\frac{y}{200}\right)=\sqrt{\frac{x}{10{,}000}}=\frac{\sqrt{x}}{100}" />
              <BlockMath math="\frac{y}{200}=\frac{\sqrt{x}}{100}-1\quad\Rightarrow\quad y=2\sqrt{x}-200" />
              <p>Thus y = 2√x − 200.</p>
            </>
          }
        />

        <MCQExample
          number={39}
          prompt="John deposits n dollars at 2% annual interest, compounded semiannually. After 18 months, the interest earned is k dollars. What is n in terms of k?"
          options={[
            "k / ((1.01)^3 − 1)",
            "1 / ((1.02)^2 − k)",
            "(k − 1) / 1.02",
            "k / (1 − (1.03)^2)",
            "1 / (k − (1.01)^3)",
          ]}
          correct="k / ((1.01)^3 − 1)"
          solution={
            <>
              <p>
                Semiannual compounding gives per‑period rate <InlineMath math="0.02/2=0.01" />. In 18 months there are{" "}
                <InlineMath math="3" /> periods, so:
              </p>
              <BlockMath math="A=n(1.01)^3" />
              <p>
                Interest earned <InlineMath math="k=A-n=n\left[(1.01)^3-1\right]" />.
              </p>
              <BlockMath math="n=\dfrac{k}{(1.01)^3-1}" />
            </>
          }
        />

        <p>
          Bottom line: always align the per‑period rate with how often interest is applied. Once{" "}
          <InlineMath math="r/n" /> and the total number of periods <InlineMath math="nt" /> are set,{" "}
          <InlineMath math="A=P(1+r/n)^{nt}" /> does the rest.
        </p>
      </article>
    </main>
  );
}