import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          throwOnError: false,
          output: "html",
        }),
      }}
    />
  );
}

function MathBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  return (
    <div
      aria-label={ariaLabel}
      role="img"
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          throwOnError: false,
          displayMode: true,
          output: "html",
        }),
      }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.12.3 LCM‑Based Divisibility and Product Rules | Properties of Numbers",
  description:
    "Learn a powerful divisibility fact: if a number is divisible by several integers, it’s divisible by their LCM. See how it differs from product scenarios. Includes worked examples and three MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.12.3 LCM‑Based Divisibility and How It Differs for Products
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the previous lesson, we used prime factorizations to force divisibility conditions. Here,
          we’ll package that idea into a single rule based on the least common multiple (LCM), and we’ll
          contrast it with what happens when information is given about a product of two numbers.
        </p>

        <MustKnow>
          If a positive integer z is divisible by two or more positive integers, then z is divisible
          by the least common multiple of those integers. Equivalently, all prime powers required by
          the LCM must appear in the prime factorization of z.
        </MustKnow>

        <section aria-labelledby="quick-check" className="space-y-3">
          <h3 id="quick-check" className="text-xl font-semibold text-white">
            Quick check
          </h3>
          <p>
            Since 60 is divisible by 2 and by 5,
            <span className="sr-only">, we can compute 60 divided by 2 equals 30 and 60 divided by 5 equals 12</span>{" "}
            <MathInline ariaLabel="60 divided by 2 equals 30">{`60/2=30`}</MathInline>{" "}
            and{" "}
            <MathInline ariaLabel="60 divided by 5 equals 12">{`60/5=12`}</MathInline>.
            The LCM of 2 and 5 is 10, so 60 must also be divisible by 10:
            <span className="sr-only">, that is 60 divided by 10 equals 6</span>{" "}
            <MathInline ariaLabel="60 divided by 10 equals 6">{`60/10=6`}</MathInline>.
          </p>
        </section>

        <section aria-labelledby="worked-1" className="space-y-3">
          <h3 id="worked-1" className="text-xl font-semibold text-white">
            Worked example: smallest k to satisfy multiple divisibility conditions
          </h3>
          <p>
            If 100, 18, and 8 are all factors of <MathInline>{`150k`}</MathInline>, what is the least
            possible positive value of k?
          </p>
          <p>Find the LCM of 100, 18, and 8 via prime factorization:</p>
          <MathBlock ariaLabel="Prime factorizations of 100, 18, and 8">
            {`100=2^{2}\\cdot5^{2},\\quad 18=2\\cdot3^{2},\\quad 8=2^{3}`}
          </MathBlock>
          <p>
            The LCM must include the highest power of each prime across the list, so
          </p>
          <MathBlock ariaLabel="LCM equals two cubed times three squared times five squared equals 1800">
            {`\\operatorname{LCM}(100,18,8)=2^{3}\\cdot3^{2}\\cdot5^{2}=1800.`}
          </MathBlock>
          <p>
            Therefore, <MathInline>{`150k`}</MathInline> must be divisible by 1800. Since
            <span className="sr-only"> 150 equals 2 times 3 times 5 squared</span>{" "}
            <MathInline ariaLabel="150 equals 2 times 3 times 5 squared">{`150=2\\cdot3\\cdot5^{2}`}</MathInline>,
            we still need two additional 2’s and one additional 3 to reach the LCM’s prime powers:
          </p>
          <MathBlock ariaLabel="k equals 2 times 2 times 3 equals 12">{`k=2\\cdot2\\cdot3=12.`}</MathBlock>
        </section>

        <section aria-labelledby="product-warning" className="space-y-3">
          <h3 id="product-warning" className="text-xl font-semibold text-white">
            Important contrast: statements about a product
          </h3>
          <p>
            Don’t confuse LCM logic for a single number with scenarios that give information about two
            different numbers whose product is considered.
          </p>
          <MustKnow>
            If X and Y are positive integers with X divisible by j and Y divisible by k, then the product XY
            is guaranteed to be divisible by jk. In fact, jk is the largest integer you can always guarantee
            divides XY from such information alone.
          </MustKnow>
          <p>
            Example: if P is a multiple of 20 and Q is a multiple of 25, then{" "}
            <MathInline>{`PQ`}</MathInline> must be a multiple of{" "}
            <MathInline>{`20\\cdot25=500`}</MathInline>. The LCM of 20 and 25 is 100, but 500 is the
            strongest guaranteed divisor of the product under these assumptions.
          </p>
        </section>

        <section aria-labelledby="mcq-1" className="space-y-6">
          <MCQExample
            number={43}
            prompt="Integer Z is divisible by 15 and by 20. Each of the following must be a factor of Z, except:"
            options={["10", "15", "30", "45", "60"]}
            correct="45"
            solution={
              <>
                <p>
                  If Z is divisible by both 15 and 20, then Z is divisible by their LCM. Prime factorizations:
                  15 = 3 × 5 and 20 = 2^2 × 5, so
                  <span className="sr-only">
                    the LCM equals 2 squared times 3 times 5, which is 60
                  </span>{" "}
                  <MathInline ariaLabel="LCM equals 2 squared times 3 times 5 equals 60">
                    {`\\operatorname{LCM}(15,20)=2^{2}\\cdot3\\cdot5=60`}
                  </MathInline>
                  . Therefore Z must be divisible by every factor of 60.
                </p>
                <ul className="list-inside list-disc">
                  <li>10, 15, 30, and 60 are all factors of 60, so they must divide Z.</li>
                  <li>45 is not a factor of 60, so it is not guaranteed to divide Z.</li>
                </ul>
                <p>Answer: 45.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-2" className="space-y-6">
          <MCQExample
            number={44}
            prompt="If positive integer w is divisible by both 12 and 100, what is the greatest integer that must be a divisor of w?"
            options={["180", "300", "400", "600", "1,200"]}
            correct="300"
            solution={
              <>
                <p>
                  The largest guaranteed divisor is the LCM of 12 and 100. Using prime factorizations:
                  <span className="sr-only">
                    12 equals 2 squared times 3; 100 equals 2 squared times 5 squared
                  </span>{" "}
                  <MathInline ariaLabel="12 equals 2 squared times 3">{`12=2^{2}\\cdot3`}</MathInline>
                  ,{" "}
                  <MathInline ariaLabel="100 equals 2 squared times 5 squared">
                    {`100=2^{2}\\cdot5^{2}`}
                  </MathInline>
                  .
                </p>
                <p>
                  Hence{" "}
                  <MathInline ariaLabel="LCM equals 2 squared times 3 times 5 squared equals 300">
                    {`\\operatorname{LCM}(12,100)=2^{2}\\cdot3\\cdot5^{2}=300`}
                  </MathInline>
                  , which is the greatest integer that must divide w.
                </p>
                <p>Answer: 300.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-3" className="space-y-6">
          <MCQExample
            number={45}
            prompt="If positive integer A is divisible by 60 and positive integer B is divisible by 35, then the product AB must be divisible by which of the following?"
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
                  From the product rule: A is a multiple of 60 and B is a multiple of 35, so AB is a multiple of{" "}
                  <MathInline>{`60\\cdot35=2100`}</MathInline>. Prime factorization:
                  <span className="sr-only"> 2100 equals 2 squared times 3 times 5 squared times 7</span>{" "}
                  <MathInline ariaLabel="2100 equals 2 squared times 3 times 5 squared times 7">
                    {`2100=2^{2}\\cdot3\\cdot5^{2}\\cdot7`}
                  </MathInline>
                  .
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    I. 25 = <MathInline>{`5^{2}`}</MathInline> is present in 2100, so AB must be divisible by 25.
                  </li>
                  <li>
                    II. 28 = <MathInline>{`2^{2}\\cdot7`}</MathInline> is present in 2100, so AB must be divisible by
                    28.
                  </li>
                  <li>
                    III. 40 = <MathInline>{`2^{3}\\cdot5`}</MathInline> requires three 2’s, but 2100 only has{" "}
                    <MathInline>{`2^{2}`}</MathInline>, so 40 is not guaranteed.
                  </li>
                </ul>
                <p>Thus, AB must be divisible by I and II only.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            For a single number required to be divisible by several integers, the LCM captures the exact prime
            powers you must enforce. For products of two numbers with separate divisibility information, the
            strongest universal guarantee is the product of those required divisors.
          </p>
        </section>
      </article>
    </main>
  );
}