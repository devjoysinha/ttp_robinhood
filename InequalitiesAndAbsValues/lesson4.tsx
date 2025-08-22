import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({ math }: { math: string }) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: false,
    output: "html",
    strict: "warn",
  });
  return <span aria-label="math" dangerouslySetInnerHTML={{ __html: html }} />;
}

function KBlock({ math }: { math: string }) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: true,
    output: "html",
    strict: "warn",
  });
  return (
    <div
      className="my-4 overflow-x-auto"
      role="img"
      aria-label="math equation"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "6.5 Inequalities with Multiple Unknowns | Algebra",
  description:
    "Learn how to manipulate inequalities when variables may be positive or negative. Know when you can and cannot divide through by a variable. Includes four practice problems with detailed reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5 Watch Out When Inequalities Include Unknown Signs
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          We can usually treat inequalities much like equations: add or subtract the same quantity on both sides, and combine like terms as usual. The big pitfall comes from multiplying or dividing by a quantity whose sign we don’t know. If that quantity is negative, the inequality direction must flip; if it’s positive, it stays the same. Without knowing the sign, we can’t be sure which way the symbol should point.
        </p>

        <MustKnow>
          Never multiply or divide an inequality by a variable unless you know its sign. It’s always safe to add or subtract the same expression on both sides, and it’s safe to divide by a known positive expression (for example, a square like
          {" "}
          <KInline math="d^2" />
          {" "}
          when you know
          {" "}
          <KInline math="d \ne 0" />
          ).
        </MustKnow>

        <section aria-labelledby="neg-example">
          <h3 id="neg-example" className="sr-only">
            Dividing by a negative reverses the sign
          </h3>
          <p>
            Example with concrete numbers: it’s true that
            {" "}
            <KInline math="(-2)(-5) < (-2)(-9)" />
            {" "}
            because
            {" "}
            <KInline math="10 < 18" />
            . Now divide both sides by <KInline math="-2" /> (a negative). The direction must reverse:
          </p>
          <KBlock math={`\\begin{aligned}
(-2)(-5) &< (-2)(-9) \\\\
\\frac{(-2)(-5)}{-2} &> \\frac{(-2)(-9)}{-2} \\\\
-5 &> -9
\\end{aligned}`} />
          <p>
            If we had failed to flip the sign, we would have concluded the false statement
            {" "}
            <KInline math="-5 < -9" />
            .
          </p>
        </section>

        <section aria-labelledby="algebraic-cancel">
          <h3 id="algebraic-cancel" className="sr-only">
            Safe operations: adding/subtracting
          </h3>
          <p>
            Consider the inequality
            {" "}
            <KInline math="pq + t < pr + t" />
            . Subtracting the same expression from both sides is always valid, so we can remove
            {" "}
            <KInline math="t" />
            :
          </p>
          <KBlock math={`\\begin{aligned}
pq + t &< pr + t \\\\
pq + t - t &< pr + t - t \\\\
pq &< pr
\\end{aligned}`} />
          <p>
            Some might try to divide both sides by <KInline math="p" /> to get <KInline math="q < r" />. That’s not justified unless we know the sign of <KInline math="p" />:
          </p>
          <ul className="list-disc pl-6">
            <li>
              If <KInline math="p > 0" />, then dividing preserves the direction and we get
              {" "}
              <KInline math="q < r" />.
            </li>
            <li>
              If <KInline math="p < 0" />, then dividing flips the direction and we get
              {" "}
              <KInline math="q > r" />.
            </li>
          </ul>
          <p>
            Without the sign of <KInline math="p" />, the only guaranteed conclusion is
            {" "}
            <KInline math="pq < pr" />
            .
          </p>
        </section>

        <MCQExample
          number={11}
          prompt="If ab > ac, which statement must be true?"
          options={["b > c", "b < c", "a ≠ 0", "b ≠ 0", "c ≠ 0"]}
          correct="a ≠ 0"
          solution={
            <>
              <p>
                Don’t divide the inequality by <KInline math="a" /> unless you know its sign. If <KInline math="a > 0" />, dividing by <KInline math="a" /> gives <KInline math="b > c" />; if <KInline math="a < 0" />, it gives <KInline math="b < c" />. So neither “b > c” nor “b < c” must hold.
              </p>
              <p>
                If <KInline math="a = 0" />, then <KInline math="ab = ac = 0" />, contradicting <KInline math="ab > ac" />. Therefore <strong>a ≠ 0</strong> is the only necessary statement.
              </p>
            </>
          }
        />

        <MCQExample
          number={12}
          prompt="If m + k > n + k, which of the following is NOT true?"
          options={[
            "m > n",
            "m − k > n − k",
            "m − n < 0",
            "k − m < k − n",
            "−m < −n",
          ]}
          correct="m − n < 0"
          solution={
            <>
              <p>
                Subtract <KInline math="k" /> from both sides to get <KInline math="m > n" />. So option “m > n” is true, not the answer.
              </p>
              <p>
                From <KInline math="m > n" />, subtract <KInline math="k" /> to get <KInline math="m - k > n - k" /> (true), and subtract <KInline math="m" /> and <KInline math="n" /> appropriately to get <KInline math="k - m < k - n" /> (also true).
              </p>
              <p>
                Multiplying the true inequality <KInline math="m > n" /> by <KInline math="-1" /> flips the sign, yielding <KInline math="-m < -n" /> (true).
              </p>
              <p>
                However, <KInline math="m - n < 0" /> is equivalent to <KInline math="m < n" />, which contradicts <KInline math="m > n" />. Thus “m − n < 0” is the choice that is NOT true.
              </p>
            </>
          }
        />

        <MCQExample
          number={13}
          prompt={
            <>
              If <KInline math="bcd^{2} < acd^{2}" />, which statements must be true?
              <br />
              I. <KInline math="bcd < acd" />
              <br />
              II. <KInline math="bc < ac" />
              <br />
              III. <KInline math="b < a" />
            </>
          }
          options={["None", "I only", "II only", "I and II", "II and III"]}
          correct="II only"
          solution={
            <>
              <p>
                First, notice <KInline math="d = 0" /> would make both sides zero, contradicting the strict inequality. So <KInline math="d \ne 0" />.
              </p>
              <p>
                Roman I: Dividing by <KInline math="d" /> is unsafe because we don’t know its sign; the inequality might flip. So I need not hold.
              </p>
              <p>
                Roman II: Dividing by <KInline math="d^{2}" /> is safe because <KInline math="d^{2} > 0" /> when <KInline math="d \ne 0" />. Thus <KInline math="bc < ac" /> must be true.
              </p>
              <p>
                Roman III: From <KInline math="bc < ac" />, dividing by <KInline math="c" /> is unsafe without knowing the sign of <KInline math="c" />. So III is not guaranteed.
              </p>
              <p>Only statement II must be true.</p>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="If ab > 9b, which of the following must be true?"
          options={["a > 9", "a < 9", "b > 9", "b < 9", "a/b^3 > 9/b^3"]}
          correct="a/b^3 > 9/b^3"
          solution={
            <>
              <p>
                Do not divide by <KInline math="b" /> directly: we don’t know its sign, so the inequality might flip. Options involving “a > 9”, “a < 9”, “b > 9”, or “b < 9” are not forced and can be disproved by simple counterexamples.
              </p>
              <p>
                However, note that <KInline math="ab > 9b" /> cannot hold when <KInline math="b = 0" /> (it would read <KInline math="0 > 0" />), so <KInline math="b \ne 0" />. Because <KInline math="b^{4} > 0" /> for all <KInline math="b \ne 0" />, we can safely divide both sides by <KInline math="b^{4}" /> without flipping the sign:
              </p>
              <KBlock math={`\\begin{aligned}
ab &> 9b \\\\
\\frac{ab}{b^4} &> \\frac{9b}{b^4} \\\\
\\frac{a}{b^3} &> \\frac{9}{b^3}
\\end{aligned}`} />
              <p>
                Therefore <strong><KInline math="\\dfrac{a}{b^3} > \\dfrac{9}{b^3}" /></strong> must be true.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat additions and subtractions normally, and feel free to divide by a known positive quantity. But when a variable’s sign is unknown, don’t divide or multiply by it—test cases may lead the inequality to flip.
        </p>
      </article>
    </main>
  );
}