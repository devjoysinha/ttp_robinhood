import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.15 Max–Min Strategies for Word Problems | GMAT Quant",
  description:
    "How to maximize or minimize a target value in word problems by bounding the other values. Includes a worked mini‑example and two multiple‑choice drills with full reasoning.",
};

function K({
  expr,
  display,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: !!display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      aria-label={ariaLabel}
      className={display ? "my-2 overflow-x-auto" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.15 Maximization and Minimization in Word Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many GMAT questions ask for the greatest or least possible value of a
          quantity given certain constraints. We’ll call these “max–min” problems.
          You’ll use a mix of algebra, inequalities, and strategic trial to pin
          down the extreme values quickly and reliably.
        </p>

        <MustKnow>
          There isn’t a single silver bullet for all max–min problems. Sometimes
          you’ll form equations or inequalities; other times, you’ll construct
          cases that satisfy the conditions. Keep multiple tools handy and choose
          the shortest path for the constraints you’re given.
        </MustKnow>

        <p>
          A core idea that pays off often: when the total sum of several values is
          fixed, pushing one value up forces the others down, and vice versa.
        </p>

        <MustKnow>
          With a fixed total:
          <br />
          - To minimize a target value, maximize the remaining values within the
          rules.
          <br />
          - To maximize a target value, minimize the remaining values within the
          rules.
        </MustKnow>

        <section
          aria-labelledby="mini-example"
          className="rounded-lg border border-gray-800 bg-gray-900/40 p-5"
        >
          <h3 id="mini-example" className="mb-3 text-xl font-semibold text-white">
            Mini‑Example: Maximize a Middle Term Under Order Constraints
          </h3>
          <p>
            The positive integers t, u, v, w, x, y, and z satisfy the order
            <K expr="t \le u \le v \le w \le x \le y \le z" ariaLabel="ordered chain" />{" "}
            and have a total sum of 200. You are told <K expr="v=10" /> and{" "}
            <K expr="x=50" />. What is the greatest possible value of <K expr="w" />?
          </p>

          <h4 className="mt-4 font-semibold text-gray-200">Plan</h4>
          <p>
            To make <K expr="w" /> as large as possible, drive all other terms as
            low as the rules allow. From the ordering, after substituting{" "}
            <K expr="v=10" /> and <K expr="x=50" />, we have:
          </p>
          <K
            display
            expr="t \le u \le 10 \le w \le 50 \le y \le z"
            ariaLabel="ordered chain after substitution"
          />

          <p>
            Because t and u are positive integers, their minimums are 1. Since{" "}
            <K expr="y \ge 50" /> and <K expr="z \ge 50" />, the smallest they can be
            while respecting the order is 50 each:
          </p>
          <K display expr="t=1,\; u=1,\; v=10,\; w=?,\; x=50,\; y=50,\; z=50" />

          <p>Use the sum of 200 to solve for w:</p>
          <K display expr="1+1+10+w+50+50+50=200" />
          <K display expr="112 + w + 50 + 50 = 200" />
          <K display expr="162 + w = 200" />
          <K display expr="w = 38" />

          <p className="mt-2">
            So, the maximum possible value of <K expr="w" /> is 38.
          </p>
        </section>

        <MCQExample
          number={68}
          prompt="b, c, d, e, f, and g are positive multiples of 5 with b < c < d < e < f < g. Given c = 30, f = 70, and b + c + d + e + f + g = 350, what is the smallest possible value of g?"
          options={["75", "85", "100", "120", "125"]}
          correct="100"
          solution={
            <>
              <p>
                With a fixed total, to minimize <K expr="g" />, push the other five
                values as high as allowed by the order and “multiples of 5” rule.
              </p>
              <p>
                Since <K expr="b < 30" /> and b is a positive multiple of 5, the
                largest b can be is 25. Also, <K expr="d < e < 70" /> with multiples of
                5, so maximize them as <K expr="d=60" /> and <K expr="e=65" />. We
                already have <K expr="c=30" /> and <K expr="f=70" />.
              </p>
              <K display expr="b+c+d+e+f+g = 350" />
              <K display expr="25+30+60+65+70+g = 350" />
              <K display expr="250 + g = 350" />
              <K display expr="g = 100" />
              <p>The least possible value of g is 100.</p>
            </>
          }
        />

        <MCQExample
          number={69}
          prompt="Five friends own a total of 120 tennis balls. Everyone has a different count, each count is at least 7, and the person with 20 balls ranks third-highest. If Cole has the most, what is the greatest number of balls Cole could have?"
          options={["62", "64", "66", "72", "79"]}
          correct="64"
          solution={
            <>
              <p>
                Let the counts in increasing order be <K expr="w < x < y < z < c" />{" "}
                with Cole having <K expr="c" />. The third-largest is y, so{" "}
                <K expr="y=20" />. To maximize <K expr="c" />, minimize the others while
                honoring the constraints and distinctness.
              </p>
              <p>
                Minimums: <K expr="w \ge 7" /> so set <K expr="w=7" />. Then{" "}
                <K expr="x>7" /> and distinct, so <K expr="x=8" />. Also{" "}
                <K expr="z>20" /> and integer, so <K expr="z=21" />.
              </p>
              <K display expr="w+x+y+z+c = 120" />
              <K display expr="7+8+20+21+c = 120" />
              <K display expr="56 + c = 120" />
              <K display expr="c = 64" />
              <p>Therefore, Cole could have as many as 64 tennis balls.</p>
            </>
          }
        />

        <p>
          Big picture: when a total is fixed, extreme values come from squeezing
          the other terms toward their allowable limits while honoring order and
          any integrality or “multiple of” conditions. Always check that your
          choices keep the list ordered and satisfy all constraints.
        </p>
      </article>
    </main>
  );
}