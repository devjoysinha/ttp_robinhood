import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.10 Squares and Square Roots | Essential GMAT Quant Skills",
  description:
    "Understand bases and exponents, perfect squares, and the principal square root. Includes three multiple‑choice examples with clear, KaTeX‑rendered explanations.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

function Math({ expr, display = false, ariaLabel, className }: MathProps) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={`${display ? "block my-2 overflow-x-auto" : ""} ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.10 Squares and Square Roots
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In exponential notation, the large number or expression is the base and the small
          raised number is the exponent. For instance, in
          <Math expr="x^{2}" ariaLabel="x squared" className="mx-1" />
          the base is x and the exponent is 2.
        </p>

        <p>
          Squaring means multiplying a number by itself:
          <Math expr="x^{2}=x\cdot x" display />
          Common language:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <Math expr="4^{2}=16" ariaLabel="four squared equals sixteen" /> (read “four
            squared is sixteen”)
          </li>
          <li>
            <Math expr="4^{3}=64" ariaLabel="four cubed equals sixty four" /> (read “four
            cubed is sixty‑four”)
          </li>
        </ul>

        <MustKnow>
          Squaring a whole number produces a perfect square. Examples include 1, 4, 9, 16,
          25, 36, 49, 64, 81, 100, …
        </MustKnow>

        <p>
          A square root of a non‑negative number{" "}
          <Math expr="x" ariaLabel="x" className="mx-1" /> is a value whose square equals{" "}
          <Math expr="x" className="mx-1" />. By convention, the radical symbol returns the
          principal (non‑negative) square root:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <Math expr="\sqrt{144}=12" />
          </li>
          <li>
            <Math expr="\sqrt{100}=10" /> , <Math expr="\sqrt{25}=5" /> ,{" "}
            <Math expr="\sqrt{16}=4" /> , <Math expr="\sqrt{4}=2" /> ,{" "}
            <Math expr="\sqrt{1}=1" /> , <Math expr="\sqrt{0}=0" />
          </li>
        </ul>

        <MustKnow>
          The radical symbol returns the principal square root (never negative). For real
          numbers,
          <Math expr="\sqrt{x}\ge 0 \text{ for } x\ge 0" className="mx-1" /> and{" "}
          <Math expr="\sqrt{\text{negative number}}" ariaLabel="square root of a negative number" className="mx-1" />
          is not a real value. Also, note the difference:
          <Math expr="\sqrt{25}=5" className="mx-1" /> but when solving{" "}
          <Math expr{x^2 = 25} ariaLabel="x squared equals 25" className="mx-1" />
          , the solutions are <Math expr="x=\pm 5" className="mx-1" />.
        </MustKnow>

        <p>
          A common pitfall is to treat the radical as “plus or minus.” That’s incorrect.
          The “±” appears when you solve quadratic equations, not when you evaluate a
          radical.
        </p>

        <MCQExample
          number={57}
          prompt="Which of the following equals √9?"
          options={["81", "3", "-3", "-81", "Cannot be determined"]}
          correct="3"
          solution={
            <>
              <p>
                By definition, the radical returns the principal (non‑negative) square root.
                Since <Math expr="\sqrt{9}=3" />, the correct choice is 3. The value −3 is a
                square root of 9, but it is not the principal square root, so it does not
                equal <Math expr="\sqrt{9}" />.
              </p>
            </>
          }
        />

        <p>
          Keep the “principal root” rule in mind when variables are involved, too. If you
          see <Math expr="\sqrt{x}" />, the expression is always non‑negative for real x
          where it’s defined.
        </p>

        <MCQExample
          number={58}
          prompt="If √x = 4, which of the following could be the value of x?  I. 16   II. 2   III. −16"
          options={["I only", "II only", "III only", "I and III", "I, II, and III"]}
          correct="I only"
          solution={
            <>
              <p>
                From <Math expr="\sqrt{x}=4" />, squaring both sides gives{" "}
                <Math expr="x=16" />. So I is possible.
              </p>
              <p>
                II is not possible since <Math expr="\sqrt{2}\neq 4" />. III is not allowed
                in the real numbers because <Math expr="\sqrt{-16}" /> is not real.
              </p>
              <p>Therefore, only I works.</p>
            </>
          }
        />

        <MCQExample
          number={59}
          prompt="Let p = √m and q = √n with 0 < n < m. Which must be true?  I. p > 0   II. q < 0   III. p > q"
          options={["I only", "III only", "I and II", "I and III", "I, II, and III"]}
          correct="I and III"
          solution={
            <>
              <p>
                Since <Math expr="m>0" /> and <Math expr="n>0" />, both radicals are defined
                and principal, so <Math expr="p=\sqrt{m}>0" /> and{" "}
                <Math expr="q=\sqrt{n}>0" />. Thus I is true and II is false.
              </p>
              <p>
                The square root function is increasing on{" "}
                <Math expr="[0,\infty)" ariaLabel="zero to infinity" />, and{" "}
                <Math expr="n<m" /> implies <Math expr="\sqrt{n}<\sqrt{m}" />, i.e.,{" "}
                <Math expr="q<p" />. So III is true.
              </p>
              <p>Therefore, statements I and III must hold.</p>
            </>
          }
        />

        <p>
          Big picture: exponents describe repeated multiplication, perfect squares come from
          squaring whole numbers, and the radical symbol{" "}
          <Math expr="\sqrt{\;\;}" ariaLabel="square root symbol" className="mx-1" />
          always returns the non‑negative square root. Use these facts to avoid “±” traps
          and to compare rooted expressions safely.
        </p>
      </article>
    </main>
  );
}