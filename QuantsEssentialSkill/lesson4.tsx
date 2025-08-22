import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX renderer for this page
function Eq({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className="notranslate"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.1.4 Adding a Whole Number and a Fraction | Essential GMAT Quant Skills",
  description:
    "Learn fast, reliable ways to add whole numbers and fractions (proper or improper), convert mixed numbers to improper fractions, and apply the identity A + b/c = (cA + b)/c. Includes two quick practice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.4 Adding a Whole Number and a Fraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A mixed number is just an integer plus a fractional part. So when you add a whole number and a fraction, you can think of “attaching” the fractional piece to the integer. For instance,{" "}
          <Eq expr={"5+\\frac{3}{4}=5\\tfrac{3}{4}"} ariaLabel="5 plus three fourths equals five and three fourths" />{" "}
          and{" "}
          <Eq expr={"\\tfrac{2}{3}+6=6\\tfrac{2}{3}"} ariaLabel="two thirds plus six equals six and two thirds" />.
        </p>

        <p>
          If you need an improper fraction (for algebraic manipulation or comparisons), convert the mixed number using the standard rule:{" "}
          <Eq
            expr={"A\\tfrac{b}{c}=\\frac{cA+b}{c}"}
            ariaLabel="A and b over c equals (c A plus b) over c"
          />
          . For example,{" "}
          <Eq expr={"5\\tfrac{3}{4}=\\frac{4\\times 5+3}{4}=\\tfrac{23}{4}"} ariaLabel="five and three fourths equals twenty-three fourths" />
          .
        </p>

        <p>
          The same logic works even if the “fractional” part is improper. For example,{" "}
          <Eq expr={"5+\\tfrac{9}{4}=5\\tfrac{9}{4}=\\frac{4\\times 5+9}{4}=\\tfrac{29}{4}"} ariaLabel="five plus nine fourths equals twenty-nine fourths" />
          . In short, you never have to separate cases: proper or improper, the conversion step is identical.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Key identity for adding an integer and a fraction:
            </p>
            <p>
              <Eq
                expr={"A+\\tfrac{b}{c}=\\frac{cA+b}{c}"}
                ariaLabel="A plus b over c equals (c A plus b) over c"
              />
            </p>
            <p className="text-sm text-gray-400">
              This works for any integers A, b, c with c ≠ 0, and it covers both proper and improper fractions.
            </p>
          </div>
        </MustKnow>

        <section aria-label="Practice examples" className="space-y-6">
          <MCQExample
            number={13}
            prompt={
              <>
                Which of the following is equal to{" "}
                <Eq expr={"1\\tfrac{1}{5}+2\\tfrac{3}{5}"} ariaLabel="one and one fifth plus two and three fifths" />?
              </>
            }
            options={["19/5", "17/5", "16/5", "14/5", "13/5"]}
            correct="19/5"
            solution={
              <>
                <p>
                  Combine the integer parts and the fractional parts separately:
                </p>
                <p>
                  <Eq
                    expr={
                      "1\\tfrac{1}{5}+2\\tfrac{3}{5}=(1+2)+\\left(\\tfrac{1}{5}+\\tfrac{3}{5}\\right)=3+\\tfrac{4}{5}=3\\tfrac{4}{5}"
                    }
                    ariaLabel="one and one fifth plus two and three fifths equals three and four fifths"
                  />
                </p>
                <p>
                  As an improper fraction:{" "}
                  <Eq expr={"3\\tfrac{4}{5}=\\tfrac{19}{5}"} ariaLabel="three and four fifths equals nineteen fifths" />. So the correct answer is{" "}
                  <strong>19/5</strong>.
                </p>
              </>
            }
          />

          <MCQExample
            number={14}
            prompt={
              <>
                If{" "}
                <Eq
                  expr={"\\tfrac{ac+b}{c}=\\tfrac{5}{3}"}
                  ariaLabel="ac plus b over c equals five thirds"
                />
                , where a, b, and c are positive integers, then{" "}
                <Eq expr={"a+\\tfrac{b}{c}"} ariaLabel="a plus b over c" /> equals which of the following?
              </>
            }
            options={["5", "3", "5/3", "3/3", "Cannot be determined"]}
            correct="5/3"
            solution={
              <>
                <p>
                  Use the identity{" "}
                  <Eq
                    expr={"a+\\tfrac{b}{c}=\\tfrac{ac+b}{c}"}
                    ariaLabel="a plus b over c equals ac plus b over c"
                  />
                  . The prompt gives{" "}
                  <Eq
                    expr={"\\tfrac{ac+b}{c}=\\tfrac{5}{3}"}
                    ariaLabel="ac plus b over c equals five thirds"
                  />
                  , so directly{" "}
                  <Eq
                    expr={"a+\\tfrac{b}{c}=\\tfrac{5}{3}"}
                    ariaLabel="a plus b over c equals five thirds"
                  />
                  . Therefore, the correct choice is <strong>5/3</strong>.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: treat “integer + fraction” as a mixed number when that’s convenient, or jump straight to the improper fraction{" "}
          <Eq expr={"\\tfrac{cA+b}{c}"} ariaLabel="(c A plus b) over c" />
          when it’s not. The identity keeps your work consistent and fast.
        </p>
      </article>
    </main>
  );
}