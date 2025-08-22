import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.2.2 Bow‑Tie Method for Comparing Fractions | Essential GMAT Quant",
  description:
    "Learn the bow‑tie (cross‑multiplication) method to compare positive fractions quickly. Includes a worked comparison example plus two practice questions with complete solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.2.2 Using the Bow‑Tie Method to Compare Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two fractions are positive, you can compare them without finding a common
          denominator. The bow‑tie (cross‑multiplication) method multiplies across the
          diagonals and compares the resulting products.
        </p>

        <MustKnow>
          For positive fractions <InlineMath math="\,\frac{a}{b}\," /> and{" "}
          <InlineMath math="\,\frac{c}{d}\," />, the comparison is determined by the cross
          products:
          <div className="mt-2">
            <BlockMath math="\frac{a}{b} \;>\; \frac{c}{d} \quad \text{iff} \quad ad \;>\; bc" />
          </div>
          The same logic works for “<InlineMath math="<" />” and “<InlineMath math="=" />”.
          This rule requires all four numbers to produce positive fractions.
        </MustKnow>

        <p>
          Quick demo: Which is larger, <InlineMath math="\frac{7}{9}" /> or{" "}
          <InlineMath math="\frac{6}{8}" />? Cross‑multiply:
        </p>
        <ul className="list-inside list-disc">
          <li>
            <InlineMath math="7\times 8 = 56" />
          </li>
          <li>
            <InlineMath math="9\times 6 = 54" />
          </li>
        </ul>
        <p>
          Since <InlineMath math="56>54" />, we conclude{" "}
          <InlineMath math="\frac{7}{9} > \frac{6}{8}" />.
        </p>

        <MustKnow>
          Bow‑tie is just algebra: starting from{" "}
          <InlineMath math="\frac{a}{b} \;>\; \frac{c}{d}" />, multiply both sides by{" "}
          <InlineMath math="bd>0" /> to get <InlineMath math="ad>bc" />. It’s fast and exact
          for positive fractions.
        </MustKnow>

        <MCQExample
          number={35}
          prompt="If x and y are nonzero whole numbers and 5x > 3y, which statement must be true?"
          options={[
            "x/y > 3/5",
            "y/x > 3/5",
            "x/y > 5/3",
            "y/5 > x/3",
            "x/5 > y/3",
          ]}
          correct="x/y > 3/5"
          solution={
            <>
              <p>
                Treat <InlineMath math="\frac{x}{y}" /> and{" "}
                <InlineMath math="\frac{3}{5}" /> as the two positive fractions we’re
                comparing. By bow‑tie,{" "}
                <InlineMath math="\frac{x}{y} > \frac{3}{5} \iff 5x > 3y" />, which is given.
                So <strong>only</strong> <InlineMath math="\frac{x}{y} > \frac{3}{5}" /> must
                hold.
              </p>
              <p>
                The other options can fail for valid <InlineMath math="x,y" />. For instance,
                with <InlineMath math="x=2,y=1" /> we have{" "}
                <InlineMath math="5x>3y" /> but <InlineMath math="\frac{y}{x}=\frac12" /> is
                not greater than <InlineMath math="\frac{3}{5}" />; similarly you can test
                counterexamples for the rest.
              </p>
            </>
          }
        />

        <MCQExample
          number={36}
          prompt="Which of the following fractions is greater than 6/8?"
          options={[
            "I Only",
            "II Only",
            "I and II Only",
            "I and III Only",
            "I, II, and III",
          ]}
          correct="I, II, and III"
          // We’ll inline the statements here for clarity.
          // I: 17/18, II: 31/34, III: 18/23
          solution={
            <>
              <p>
                Compare each candidate to <InlineMath math="\frac{6}{8}" /> using bow‑tie.
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  I: <InlineMath math="\frac{17}{18} \stackrel{?}{>} \frac{6}{8}" />. Cross
                  products: <InlineMath math="17\cdot 8 = 136" /> vs{" "}
                  <InlineMath math="18\cdot 6 = 108" />. Since{" "}
                  <InlineMath math="136>108" />, I is greater than{" "}
                  <InlineMath math="\frac{6}{8}" />.
                </li>
                <li>
                  II: <InlineMath math="\frac{31}{34} \stackrel{?}{>} \frac{6}{8}" />. Cross
                  products: <InlineMath math="31\cdot 8 = 248" /> vs{" "}
                  <InlineMath math="34\cdot 6 = 204" />. Since{" "}
                  <InlineMath math="248>204" />, II is greater.
                </li>
                <li>
                  III: <InlineMath math="\frac{18}{23} \stackrel{?}{>} \frac{6}{8}" />. Cross
                  products: <InlineMath math="18\cdot 8 = 144" /> vs{" "}
                  <InlineMath math="23\cdot 6 = 138" />. Since{" "}
                  <InlineMath math="144>138" />, III is greater.
                </li>
              </ul>
              <p>All three are larger, so the correct choice is I, II, and III.</p>
            </>
          }
        />

        <p>
          Takeaway: for positive fractions, bow‑tie gives a one‑step, no‑decimal way to compare.
          Just check which diagonal product is bigger.
        </p>
      </article>
    </main>
  );
}