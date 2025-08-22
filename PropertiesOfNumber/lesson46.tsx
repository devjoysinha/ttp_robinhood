import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.12.3 LCM Divisibility Rule | Properties of Numbers",
  description:
    "Learn the rule: if a number is divisible by several integers, it’s divisible by their LCM. See counterpoints for products of different numbers, and practice with three multiple‑choice examples fully explained.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.12.3 When one number is divisible by several integers, it’s also
          divisible by their LCM
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Divisibility questions often become straightforward once you translate
          them into prime factors. A particularly handy idea is that any single
          integer that’s divisible by several other integers is automatically
          divisible by the least common multiple of those integers.
        </p>

        <MustKnow>
          If a positive integer z is divisible by two or more positive integers,
          then z is divisible by the least common multiple (LCM) of those
          integers.
        </MustKnow>

        <section aria-labelledby="quick-demo" className="space-y-3">
          <h3 id="quick-demo" className="text-xl font-semibold text-white">
            Quick demo
          </h3>
          <p>
            Since 60 is divisible by 2 and by 5, we have:
          </p>
          <div className="space-y-1">
            <BlockMath math="60 \div 2 = 30 \quad\text{and}\quad 60 \div 5 = 12" />
            <p className="sr-only">
              60 divided by 2 equals 30 and 60 divided by 5 equals 12.
            </p>
          </div>
          <p>
            The LCM of 2 and 5 is 10, so 60 must also be divisible by 10:
          </p>
          <div>
            <BlockMath math="60 \div 10 = 6" />
            <p className="sr-only">60 divided by 10 equals 6.</p>
          </div>
        </section>

        <section aria-labelledby="lcm-k-example" className="space-y-3">
          <h3
            id="lcm-k-example"
            className="text-xl font-semibold text-white"
          >
            Using the rule to find a minimal multiplier
          </h3>
          <p>
            What is the smallest positive k so that{" "}
            <InlineMath math="150k" /> is divisible by 100, 18, and 8?
          </p>
          <div className="space-y-1">
            <BlockMath math="100 = 2^2 \cdot 5^2,\quad 18 = 2\cdot 3^2,\quad 8=2^3" />
            <BlockMath math="\mathrm{LCM}(100,18,8)=2^3\cdot 3^2\cdot 5^2=1800" />
          </div>
          <p>
            So <InlineMath math="150k" /> must be a multiple of 1800. Now prime
            factorize 150:
          </p>
          <BlockMath math="150 = 2\cdot 3\cdot 5^2" />
          <p>
            To reach <InlineMath math="2^3\cdot 3^2\cdot 5^2" />, we still need{" "}
            <InlineMath math="2^2\cdot 3" />, so the least{" "}
            <InlineMath math="k" /> is:
          </p>
          <BlockMath math="k = 2^2\cdot 3 = 12" />
        </section>

        <section aria-labelledby="factors-from-lcm" className="space-y-3">
          <h3
            id="factors-from-lcm"
            className="text-xl font-semibold text-white"
          >
            From LCM to guaranteed factors
          </h3>
          <p>
            If a number N is divisible by both 12 and 20, then N is divisible by{" "}
            <InlineMath math="\mathrm{LCM}(12,20)" />.
          </p>
          <div className="space-y-1">
            <BlockMath math="12=2^2\cdot 3,\quad 20=2^2\cdot 5" />
            <BlockMath math="\mathrm{LCM}(12,20)=2^2\cdot 3\cdot 5=60" />
          </div>
          <p>
            Therefore, every factor of 60 must also divide N. Those factors are:
            1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, and 60.
          </p>
        </section>

        <MCQExample
          number={43}
          prompt="Integer Z is divisible by 15 and 20. Each of the following must be a factor of Z except"
          options={["10", "15", "30", "45", "60"]}
          correct="45"
          solution={
            <>
              <p>
                Because Z is divisible by 15 and 20, Z is divisible by their
                LCM. Compute:
              </p>
              <BlockMath math="\mathrm{LCM}(15,20)=2^2\cdot 3\cdot 5=60" />
              <p>
                So every factor of 60 must divide Z. The numbers 10, 15, 30,
                and 60 are factors of 60, but 45 is not. Thus, 45 is not
                guaranteed to divide Z.
              </p>
            </>
          }
        />

        <MCQExample
          number={44}
          prompt="If positive integer w is divisible by both 12 and 100, what is the greatest integer that MUST be a divisor of w?"
          options={["180", "300", "400", "600", "1,200"]}
          correct="300"
          solution={
            <>
              <p>
                The greatest guaranteed divisor is the LCM of 12 and 100:
              </p>
              <BlockMath math="12=2^2\cdot 3,\quad 100=2^2\cdot 5^2" />
              <BlockMath math="\mathrm{LCM}(12,100)=2^2\cdot 3\cdot 5^2=300" />
              <p>Hence, 300 is the largest number that must divide w.</p>
            </>
          }
        />

        <section aria-labelledby="product-caveat" className="space-y-3">
          <h3
            id="product-caveat"
            className="text-xl font-semibold text-white"
          >
            Important caveat for products
          </h3>
          <p>
            Don’t apply the “LCM of divisors” rule to a product of two different
            numbers unless both divisibility properties belong to the same
            number. When each factor in a product has its own divisibility
            constraint, a different rule applies.
          </p>

          <MustKnow>
            If X is divisible by j and Y is divisible by k, then the product XY
            is guaranteed to be divisible by jk. This is not an LCM situation
            unless both j and k apply to the same integer.
          </MustKnow>
        </section>

        <MCQExample
          number={45}
          prompt="If positive integer A is divisible by 60 and positive integer B is divisible by 35, then AB MUST be divisible by which of the following?"
          options={[
            "I only",
            "II only",
            "I and II only",
            "I and III only",
            "II and III only",
          ]}
          correct="I and II only"
          solution={
            <>
              <p>
                Since A is a multiple of 60 and B is a multiple of 35, the
                product AB must be a multiple of:
              </p>
              <BlockMath math="60\cdot 35=(2^2\cdot 3\cdot 5)\,(7\cdot 5)=2^2\cdot 3\cdot 5^2\cdot 7=2100" />
              <p>Test each statement against 2100.</p>
              <ul className="list-disc pl-5">
                <li>
                  I. 25 = <InlineMath math="5^2" />. Since 2100 has{" "}
                  <InlineMath math="5^2" />, AB must be divisible by 25.
                </li>
                <li>
                  II. 28 = <InlineMath math="2^2\cdot 7" />. Since 2100 has{" "}
                  <InlineMath math="2^2" /> and <InlineMath math="7" />, AB must
                  be divisible by 28.
                </li>
                <li>
                  III. 40 = <InlineMath math="2^3\cdot 5" />. The prime
                  factorization of 2100 has only <InlineMath math="2^2" />, not{" "}
                  <InlineMath math="2^3" />, so 40 is not guaranteed.
                </li>
              </ul>
              <p>Therefore, I and II only.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <ul className="list-disc pl-5">
            <li>
              One number divisible by several integers is also divisible by
              their LCM.
            </li>
            <li>
              For products XY where X and Y have separate divisibility
              conditions, XY is guaranteed to be divisible by the product of
              those conditions (jk), not by their LCM.
            </li>
            <li>Prime factorization keeps these guarantees transparent.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}