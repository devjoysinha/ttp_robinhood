import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Ensure KaTeX styles are available globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

import { renderToString } from "katex";

function Math({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
  });

  return (
    <span
      role="math"
      aria-label={ariaLabel || expr}
      className={block ? "my-2 block overflow-x-auto py-1" : "inline"}
      // KaTeX outputs sanitized HTML
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.16 PEMDAS: Order of Operations | Essential GMAT Quant Skills",
  description:
    "Master the order of operations (PEMDAS) for GMAT Quant: parentheses, exponents, multiply/divide left‑to‑right, add/subtract left‑to‑right. Learn two time‑saving variations with worked multiple‑choice examples and full solutions rendered with KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.16 PEMDAS: The Order of Mathematical Operations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When expressions mix several operations, accuracy depends on following
          a consistent order. On the GMAT, that order is what people remember as
          PEMDAS: handle grouping first, then powers, then multiplication and
          division from left to right, and finally addition and subtraction from
          left to right.
        </p>

        <MustKnow>
          <span className="font-semibold">PEMDAS order</span>
          <span className="block mt-2">
            1) Parentheses and other grouping symbols (including absolute value
            bars and radicals)
          </span>
          <span className="block">2) Exponents</span>
          <span className="block">
            3) Multiplication and division, evaluated left to right
          </span>
          <span className="block">
            4) Addition and subtraction, evaluated left to right
          </span>
        </MustKnow>

        <p>
          A common pitfall is forgetting the left‑to‑right rule for
          multiplication and division. For example, the value of{" "}
          <Math expr="30 \div 6 \times 5" ariaLabel="30 divided by 6 times 5" />{" "}
          is 25, not 1, because you compute from left to right:
          <Math expr="(30 \div 6) \times 5 = 5 \times 5 = 25" />.
        </p>

        <p>Let’s practice with a mixed‑operation expression.</p>

        <MCQExample
          number={80}
          difficulty="medium"
          prompt={
            <>
              Evaluate:
              <Math
                block
                expr="\dfrac{1}{2}\times\dfrac{3}{4}-4\div\dfrac{1}{4}+5(4+2)^2"
                ariaLabel="one-half times three-fourths minus four divided by one-fourth plus five times the square of quantity four plus two"
              />
            </>
          }
          options={[
            "176 1/8",
            "170 3/8",
            "170",
            "164 3/8",
            "164",
          ]}
          correct="164 3/8"
          solution={
            <>
              <p className="mb-2">Follow PEMDAS carefully:</p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Grouping first:
                  <Math expr="(4+2)=6" /> so the expression becomes{" "}
                  <Math expr="\dfrac{1}{2}\times\dfrac{3}{4}-4\div\dfrac{1}{4}+5\cdot 6^2" />
                </li>
                <li>
                  Exponents:
                  <Math expr="6^2=36" /> giving{" "}
                  <Math expr="\dfrac{1}{2}\times\dfrac{3}{4}-4\div\dfrac{1}{4}+5\cdot 36" />
                </li>
                <li>
                  Multiply/divide left to right:
                  <div className="space-y-1">
                    <div>
                      <Math expr="\dfrac{1}{2}\times\dfrac{3}{4}=\dfrac{3}{8}" />
                    </div>
                    <div>
                      <Math expr="4\div\dfrac{1}{4}=4\times 4=16" />
                    </div>
                    <div>
                      <Math expr="5\times 36=180" />
                    </div>
                  </div>
                  Now we have <Math expr="\dfrac{3}{8}-16+180" />
                </li>
                <li>
                  Add/subtract:
                  <Math expr="-16+180=164" /> so{" "}
                  <Math expr="\dfrac{3}{8}-16+180=164+\dfrac{3}{8}" /> which is{" "}
                  <strong>164 3/8</strong>.
                </li>
              </ol>
            </>
          }
        />

        <MustKnow>
          Two time‑savers that don’t break PEMDAS:
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>
              When only addition/subtraction remains, you can combine terms in
              any convenient order (just keep the correct signs).
            </li>
            <li>
              If the full expression is a sum/difference of separate{" "}
              <em>terms</em> (chunks split by “+” or “−” outside parentheses),
              you can simplify each term independently, then combine.
            </li>
          </ul>
        </MustKnow>

        <p>
          For instance, to quickly simplify{" "}
          <Math expr="-3+7-8+9+12-5-6+4" ariaLabel="minus 3 plus 7 minus 8 plus 9 plus 12 minus 5 minus 6 plus 4" />
          , add the positives and negatives separately:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Positives: <Math expr="7+9+12+4=32" />
          </li>
          <li>
            Negatives: <Math expr="-3-8-5-6=-22" />
          </li>
        </ul>
        <p>
          Combine: <Math expr="32+(-22)=10" />. This matches a strict
          left‑to‑right evaluation but is faster.
        </p>

        <p>
          Also, think “term‑by‑term.” In{" "}
          <Math
            expr="\dfrac{1}{2}\times\dfrac{3}{4}\;-\;4\div\dfrac{1}{4}\;+\;5(4+2)^2"
            ariaLabel="one-half times three-fourths minus four divided by one-fourth plus five times quantity four plus two squared"
          />
          , the three terms are{" "}
          <Math expr="\dfrac{1}{2}\times\dfrac{3}{4}" />,{" "}
          <Math expr="4\div\dfrac{1}{4}" />, and{" "}
          <Math expr="5(4+2)^2" />. You can simplify each term on its own (still
          honoring PEMDAS within that term), then combine the results at the
          end.
        </p>

        <MustKnow>
          Grouping symbols beyond parentheses:
          <ul className="mt-2 list-disc pl-5">
            <li>
              Absolute value bars act like parentheses in priority. For example,
              simplify inside <Math expr="\left|\,\cdot\,\right|" /> before
              removing the bars.
            </li>
            <li>
              A radical behaves like a grouping symbol: simplify its interior
              first.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={81}
          difficulty="medium"
          prompt={
            <>
              If{" "}
              <Math
                expr={`x = \\left|4^2-5^2-2^2+11\\right|+\\dfrac{4(5)}{2(6)}-1`}
                ariaLabel="x equals absolute value of 4 squared minus 5 squared minus 2 squared plus 11, plus fraction 4 times 5 over 2 times 6, minus 1"
              />
              , what is x?
            </>
          }
          options={["7", "8/3", "6", "16/3", "5"]}
          correct="8/3"
          solution={
            <>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Inside the absolute value:
                  <div className="space-y-1">
                    <Math expr="4^2=16,\;5^2=25,\;2^2=4" />
                    <Math expr="\left|16-25-4+11\right|=\left|-9+7\right|=|-2|=2" />
                  </div>
                </li>
                <li>
                  The fraction:
                  <Math expr="\dfrac{4\cdot 5}{2\cdot 6}=\dfrac{20}{12}=\dfrac{5}{3}" />
                </li>
                <li>
                  Combine:
                  <Math expr="x=2+\dfrac{5}{3}-1=\dfrac{6}{3}+\dfrac{5}{3}-\dfrac{3}{3}=\dfrac{8}{3}" />
                </li>
              </ol>
            </>
          }
        />

        <MustKnow>
          Summary:
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              Use PEMDAS strictly within any grouped part or individual term.
            </li>
            <li>
              For the final add/subtract phase, combine in any order that’s
              convenient—just keep the signs with their terms.
            </li>
            <li>
              Absolute value and radicals have the same priority as parentheses.
            </li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}