import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { ExampleCard } from "@/components/ui/ExampleCard"; // kept in case you want to add DS drills later
import { InlineMath, BlockMath } from "react-katex";
// Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "7.5 Fraction Word Problems | GMAT Quant",
  description:
    "Master step-by-step reasoning for fraction word problems: work with 'of the whole' vs. 'of what remains', compose remainders, and translate to algebra with variables.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5 Fraction Word Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Fraction word problems often hinge on a subtle phrase: of the whole
          versus of what remains. When a portion is taken from what remains,
          you’re compounding fractional changes rather than adding or
          subtracting directly from the original amount.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-medium">
              Always confirm the reference for each fraction.
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                If a step removes a fraction of the current amount, the
                remaining fraction after that step is
                {" "}
                <InlineMath math={"1 - f"} />
                .
              </li>
              <li>
                For several sequential steps removing fractions
                {" "}
                <InlineMath math={"f_1, f_2, \\dots, f_n"} />
                {" "}
                of the amount at that moment, the overall fraction left is
                {" "}
                <InlineMath math={"(1 - f_1)(1 - f_2)\\cdots(1 - f_n)"} />
                .
              </li>
              <li>
                Removing a fraction of the original whole is not the same as
                removing that fraction of what remains, unless stated.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="pizza-setup">
          <h3 id="pizza-setup" className="sr-only">
            Introductory example
          </h3>
          <p>
            Imagine a group orders a pizza. One person serves
            {" "}
            <InlineMath math={"\\tfrac{1}{3}"} />
            {" "}
            of the whole pie. Another person then takes
            {" "}
            <InlineMath math={"\\tfrac{2}{3}"} />
            {" "}
            of the remaining pizza, not of the original. After the first serving,
            {" "}
            <InlineMath math={"\\tfrac{2}{3}"} />
            {" "}
            of the pizza remains. The second serving removes
            {" "}
            <InlineMath math={"\\tfrac{2}{3}"} />
            {" "}
            of that amount, so the leftover piece is
            {" "}
            <InlineMath math={"\\tfrac{1}{3}\\times\\tfrac{2}{3} = \\tfrac{2}{9}"} />
            {" "}
            of the original pizza.
          </p>
        </section>

        <MCQExample
          number={25}
          prompt={
            <>
              A man starts with a full cup of coffee. In the first hour, he
              drinks <InlineMath math={"\\tfrac{1}{4}"} /> of the coffee. In the
              second hour, he drinks <InlineMath math={"\\tfrac{2}{3}"} /> of
              what remains. In the third hour, he drinks
              {" "}
              <InlineMath math={"\\tfrac{3}{5}"} /> of the new remainder. What
              fraction of the original coffee is left after three hours?
            </>
          }
          options={[
            <span key="a">
              <InlineMath math={"\\tfrac{1}{10}"} />
            </span>,
            <span key="b">
              <InlineMath math={"\\tfrac{3}{10}"} />
            </span>,
            <span key="c">
              <InlineMath math={"\\tfrac{1}{2}"} />
            </span>,
            <span key="d">
              <InlineMath math={"\\tfrac{2}{3}"} />
            </span>,
            <span key="e">
              <InlineMath math={"\\tfrac{3}{4}"} />
            </span>,
          ]}
          correct={"1/10"}
          solution={
            <>
              <p className="mb-2">
                Work with the fraction remaining after each step:
              </p>
              <BlockMath math={"\\text{Left after hour 1} = 1 - \\tfrac{1}{4} = \\tfrac{3}{4}"} />
              <BlockMath math={"\\text{Left after hour 2} = \\tfrac{3}{4}\\bigl(1 - \\tfrac{2}{3}\\bigr) = \\tfrac{3}{4}\\cdot\\tfrac{1}{3} = \\tfrac{1}{4}"} />
              <BlockMath math={"\\text{Left after hour 3} = \\tfrac{1}{4}\\bigl(1 - \\tfrac{3}{5}\\bigr) = \\tfrac{1}{4}\\cdot\\tfrac{2}{5} = \\tfrac{1}{10}"} />
              <p className="mt-2">
                Alternatively, multiply the residual fractions directly:
                {" "}
                <InlineMath math={"(1-\\tfrac{1}{4})(1-\\tfrac{2}{3})(1-\\tfrac{3}{5}) = \\tfrac{3}{4}\\cdot\\tfrac{1}{3}\\cdot\\tfrac{2}{5} = \\tfrac{1}{10}"} />
                .
              </p>
              <p className="mt-2">
                Note: Multiplying the amounts consumed,
                {" "}
                <InlineMath math={"\\tfrac{1}{4}\\cdot\\tfrac{2}{3}\\cdot\\tfrac{3}{5}"} />
                ,
                does not in general give what remains. The correct approach is
                to multiply the fractions left after each step.
              </p>
            </>
          }
        />

        <MustKnow>
          If you start with amount <InlineMath math={"x"} /> and remove
          {" "}
          <InlineMath math={"\\tfrac{1}{y}"} /> of it, the remainder is
          {" "}
          <InlineMath math={"x - \\tfrac{1}{y}x = x\\Bigl(1-\\tfrac{1}{y}\\Bigr) = x\\cdot\\tfrac{y-1}{y}"} />
          .
        </MustKnow>

        <MCQExample
          number={26}
          prompt={
            <>
              A store begins the week with <InlineMath math={"x"} /> phones in
              inventory. On Monday it sells
              {" "}
              <InlineMath math={"\\tfrac{1}{y}"} /> of the phones. On Tuesday,
              it sells <InlineMath math={"\\tfrac{1}{z}"} /> of the remaining
              phones. How many phones are left at the end of Tuesday (express
              your answer in terms of <InlineMath math={"x, y, z"} />)?
            </>
          }
          options={[
            <span key="a">
              <InlineMath math={"\\dfrac{x(yz - z - y + 1)}{yz}"} />
            </span>,
            <span key="b">
              <InlineMath math={"\\dfrac{x(z - 1)}{z}"} />
            </span>,
            <span key="c">
              <InlineMath math={"\\dfrac{x(y - z)}{yz}"} />
            </span>,
            <span key="d">
              <InlineMath math={"\\dfrac{zx - z - y}{zy}"} />
            </span>,
            <span key="e">
              <InlineMath math={"\\dfrac{xz - x}{yz}"} />
            </span>,
          ]}
          correct={"x(yz - z - y + 1)/(yz)"}
          solution={
            <>
              <p className="mb-2">
                After Monday:
                {" "}
                <InlineMath math={"x\\Bigl(1 - \\tfrac{1}{y}\\Bigr) = x\\cdot\\tfrac{y-1}{y}"} />
                .
              </p>
              <p className="mb-2">
                After Tuesday, keep
                {" "}
                <InlineMath math={"\\Bigl(1 - \\tfrac{1}{z}\\Bigr) = \\tfrac{z-1}{z}"} />
                {" "}
                of that remainder:
              </p>
              <BlockMath math={"x\\cdot\\tfrac{y-1}{y}\\cdot\\tfrac{z-1}{z} = x\\cdot\\dfrac{(y-1)(z-1)}{yz} = x\\cdot\\dfrac{yz - y - z + 1}{yz}"} />
              <p className="mt-2">
                So the inventory left is
                {" "}
                <InlineMath math={"\\dfrac{x(yz - z - y + 1)}{yz}"} />
                .
              </p>
            </>
          }
        />

        <p>
          Takeaway: for chained fractional changes, think multiplicatively.
          Translate each step into a “fraction remaining,” then multiply those
          remainders together. When variables are involved, keep expressions in
          factored form as long as possible to avoid algebraic mistakes.
        </p>
      </article>
    </main>
  );
}