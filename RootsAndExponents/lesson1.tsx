import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Import KaTeX CSS once globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "5.2 The Principal Square Root | Roots and Exponents",
  description:
    "Understand the principal (nonnegative) square root, why √(x²) = |x|, and how to solve equations like x² = k correctly. Includes five GMAT‑style practice items with full reasoning.",
};

// Minimal KaTeX helper (server-rendered)
function Math({
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
  });
  if (display) {
    return (
      <div
        role="math"
        aria-label={ariaLabel}
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Roots and Exponents
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.2 The Principal Square Root
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every nonnegative number has two square roots that are opposites of each
          other, except 0 which has a single root. However, when we write a square
          root with the radical symbol, we mean the principal square root — the
          nonnegative one.
        </p>

        <MustKnow>
          When you see the radical symbol{" "}
          <Math expr="\,\sqrt{\phantom{x}}\, " ariaLabel="square root symbol" />{" "}
          applied to a number, the result is the nonnegative (principal) square
          root. For a positive input, the output cannot be negative.
        </MustKnow>

        <p>
          So simple evaluations go as you would expect:
          {" "}
          <Math expr="\sqrt{144}=12" ariaLabel="square root of 144 equals 12" />,{" "}
          <Math expr="\sqrt{100}=10" ariaLabel="square root of 100 equals 10" />,{" "}
          <Math expr="\sqrt{25}=5" ariaLabel="square root of 25 equals 5" />,{" "}
          <Math expr="\sqrt{4}=2" ariaLabel="square root of 4 equals 2" />,{" "}
          <Math expr="\sqrt{1}=1" ariaLabel="square root of 1 equals 1" />, and{" "}
          <Math expr="\sqrt{0}=0" ariaLabel="square root of 0 equals 0" />.
        </p>

        <p>
          A common pitfall is to write{" "}
          <Math expr="\sqrt{100}=\pm 10" ariaLabel="wrong statement square root of 100 is plus or minus 10" />{" "}
          — that is wrong. The radical returns just{" "}
          <Math expr="10" ariaLabel="ten" />. The same warning applies to{" "}
          <Math expr="\sqrt{25}\neq \pm 5" ariaLabel="square root of 25 is not plus or minus 5" />{" "}
          and{" "}
          <Math expr="\sqrt{144}\neq \pm 12" ariaLabel="square root of 144 is not plus or minus 12" />.
        </p>

        <MustKnow>
          A key identity you’ll use constantly:{" "}
          <Math expr="\sqrt{x^2}=|x|" ariaLabel="square root of x squared equals absolute value of x" />.
          The absolute value appears because squaring hides the sign of x.
        </MustKnow>

        <p>
          This identity is crucial when solving equations with even powers. For
          example, to solve <Math expr="x^2=4" ariaLabel="x squared equals 4" />,
          take square roots of both sides:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <Math
            display
            expr={`\\begin{aligned}
              x^2 &= 4\\\\
              \\sqrt{x^2} &= \\sqrt{4}\\\\
              |x| &= 2\\\\
              x &= \\pm 2
            \\end{aligned}`}
            ariaLabel="solving x squared equals 4 leads to absolute value of x equals 2 and x equals plus or minus 2"
          />
        </div>

        <p>
          The absolute value equation <Math expr="|x|=2" ariaLabel="absolute value of x equals 2" />{" "}
          means x is two units from zero on the number line, so{" "}
          <Math expr="x=2" ariaLabel="x equals 2" /> or{" "}
          <Math expr="x=-2" ariaLabel="x equals negative 2" />.
        </p>

        <section aria-labelledby="quick-checks">
          <h3 id="quick-checks" className="mt-8 text-lg font-semibold text-gray-200">
            Quick checks
          </h3>
          <p>
            Evaluate:{" "}
            <Math expr="\sqrt{400}=20" ariaLabel="square root of 400 equals 20" />,{" "}
            <Math expr="\sqrt{900}=30" ariaLabel="square root of 900 equals 30" />,{" "}
            <Math expr="\sqrt{121}=11" ariaLabel="square root of 121 equals 11" />,{" "}
            <Math expr="\sqrt{225}=15" ariaLabel="square root of 225 equals 15" />.
          </p>
        </section>

        <section aria-labelledby="practice">
          <h3 id="practice" className="mt-8 text-lg font-semibold text-gray-200">
            Practice: GMAT‑style examples
          </h3>

          <MCQExample
            number={1}
            prompt="If √64 = n, which of the following could be the value of n?"
            options={["I only", "III only", "I and III", "II and III", "I, II, and III"]}
            correct="III only"
            solution={
              <>
                <p>Because the radical returns the principal root, we have:</p>
                <p>
                  <Math expr="\sqrt{64}=8" ariaLabel="square root of 64 equals 8" />.
                </p>
                <p>
                  Therefore n must be 8 (statement III). Negative options such as −8 are not possible
                  outputs of the radical. Correct choice: III only.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="If x = √144 and y² = 169, which of the following could be x + y?"
            options={[
              "I only",
              "I and II only",
              "I and III only",
              "III only",
              "II and III only",
            ]}
            correct="II and III only"
            solution={
              <>
                <p>
                  First, <Math expr="x=\sqrt{144}=12" ariaLabel="x equals square root of 144 equals 12" />.
                  Next, from <Math expr="y^2=169" ariaLabel="y squared equals 169" /> we get{" "}
                  <Math expr="y=\pm 13" ariaLabel="y equals plus or minus 13" />.
                </p>
                <p>Possible sums:</p>
                <div className="rounded-md bg-gray-800/50 p-3">
                  <Math
                    display
                    expr={`\\begin{aligned}
                      12+13 &= 25\\\\
                      12+(-13) &= -1
                    \\end{aligned}`}
                    ariaLabel="sums are 25 and negative 1"
                  />
                </div>
                <p>
                  So x + y can be −1 (II) or 25 (III). Correct choice: II and III only.
                </p>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="If x < 0 and x² = 25, what is the value of x?"
            options={["-625", "-25", "-5", "-√5", "√25"]}
            correct="-5"
            solution={
              <>
                <p>
                  From <Math expr="x^2=25" ariaLabel="x squared equals 25" /> we obtain{" "}
                  <Math expr="x=\pm 5" ariaLabel="x equals plus or minus 5" />. Given x is negative,{" "}
                  <Math expr="x=-5" ariaLabel="x equals negative 5" />.
                </p>
              </>
            }
          />

          <MCQExample
            number={4}
            prompt="If √144 = m and √n = 4, what is the product mn?"
            options={["-48", "12√2", "24", "48", "192"]}
            correct="192"
            solution={
              <>
                <p>
                  <Math expr="m=\sqrt{144}=12" ariaLabel="m equals square root of 144 equals 12" />.
                  From <Math expr="\sqrt{n}=4" ariaLabel="square root of n equals 4" />, squaring both
                  sides gives <Math expr="n=16" ariaLabel="n equals 16" />. Thus{" "}
                  <Math expr="mn=12\times 16=192" ariaLabel="m n equals 192" />.
                </p>
              </>
            }
          />

          <MCQExample
            number={5}
            prompt="If x² = 25 and x² − 3x − 40 = 0, what is the value of x?"
            options={["-8", "-5", "5", "8", "200"]}
            correct="-5"
            solution={
              <>
                <p>
                  From <Math expr="x^2=25" ariaLabel="x squared equals 25" />,{" "}
                  <Math expr="x=\pm 5" ariaLabel="x equals plus or minus 5" />.
                </p>
                <p>
                  Factor <Math expr="x^2-3x-40=(x-8)(x+5)=0" ariaLabel="factorization of quadratic" />,
                  so <Math expr="x=8" ariaLabel="x equals 8" /> or{" "}
                  <Math expr="x=-5" ariaLabel="x equals negative 5" />.
                </p>
                <p>
                  The common value between the two equations is{" "}
                  <Math expr="x=-5" ariaLabel="x equals negative 5" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="mt-8 text-lg font-semibold text-gray-200">
            Big picture
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The radical <Math expr="\sqrt{\cdot}" ariaLabel="square root symbol" /> returns the
              principal (nonnegative) square root.
            </li>
            <li>
              Always convert <Math expr="\sqrt{x^2}" ariaLabel="square root of x squared" /> to{" "}
              <Math expr="|x|" ariaLabel="absolute value of x" /> when solving equations.
            </li>
            <li>
              When <Math expr="|x|=k" ariaLabel="absolute value of x equals k" /> with{" "}
              <Math expr="k\ge 0" ariaLabel="k greater or equal zero" />, the solutions are{" "}
              <Math expr="x=\pm k" ariaLabel="x equals plus or minus k" />.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}