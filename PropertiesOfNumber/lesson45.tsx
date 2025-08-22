import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.12.2 Factors of Factors | Divisibility",
  description:
    "If x is divisible by y, then x is divisible by every factor of y. Learn the rule, see worked examples, and practice with a quick check question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.12.2 Factors of Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A fraction <InlineMath math="\frac{x}{y}" /> is an integer exactly when{" "}
          <InlineMath math="y" /> divides <InlineMath math="x" />. We can push this
          one step further: once <InlineMath math="y" /> divides <InlineMath math="x" />,
          dividing <InlineMath math="x" /> by any divisor of <InlineMath math="y" /> also
          yields an integer.
        </p>

        <MustKnow>
          <p className="mb-2">
            If <InlineMath math="x,y \in \mathbb{Z}^+" /> and{" "}
            <InlineMath math="\frac{x}{y} \in \mathbb{Z}" />, then for every{" "}
            <InlineMath math="z" /> with <InlineMath math="z \mid y" /> we have{" "}
            <InlineMath math="\frac{x}{z} \in \mathbb{Z}" />.
          </p>
          <p className="mb-0">
            In divisibility notation:{" "}
            <InlineMath math="y \mid x \text{ and } z \mid y \;\Rightarrow\; z \mid x" />.
          </p>
        </MustKnow>

        <section aria-labelledby="examples-heading" className="space-y-4">
          <h3 id="examples-heading" className="text-xl font-semibold text-white">
            Examples
          </h3>

          <div className="space-y-2">
            <p>
              Because <InlineMath math="\frac{100}{20} = 5" /> is an integer and the
              divisors of <InlineMath math="20" /> are{" "}
              <InlineMath math="1,2,4,5,10,20" />, it follows that each of the
              following is an integer:
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-2">
              <InlineMath math="\frac{100}{1}" />
              <InlineMath math="\frac{100}{2}" />
              <InlineMath math="\frac{100}{4}" />
              <InlineMath math="\frac{100}{5}" />
              <InlineMath math="\frac{100}{10}" />
              <InlineMath math="\frac{100}{20}" />
            </p>
          </div>

          <div className="space-y-2">
            <p>
              Since <InlineMath math="\frac{81}{9} = 9" /> is an integer and the
              divisors of <InlineMath math="9" /> are{" "}
              <InlineMath math="1,3,9" />, we conclude:
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-2">
              <InlineMath math="\frac{81}{1}" />
              <InlineMath math="\frac{81}{3}" />
              <InlineMath math="\frac{81}{9}" />
            </p>
          </div>
        </section>

        <section aria-labelledby="why-it-works" className="space-y-2">
          <h3 id="why-it-works" className="text-xl font-semibold text-white">
            Why this works
          </h3>
          <p>
            If <InlineMath math="y \mid x" />, then <InlineMath math="x = ky" /> for
            some integer <InlineMath math="k" />. If{" "}
            <InlineMath math="z \mid y" />, then <InlineMath math="y = tz" /> for some
            integer <InlineMath math="t" />. Combining,{" "}
            <InlineMath math="x = k(tz) = (kt)\,z" />, so{" "}
            <InlineMath math="z \mid x" /> and{" "}
            <InlineMath math="\frac{x}{z} = kt \in \mathbb{Z}" />.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt={
            <>
              Let <InlineMath math="n" /> be a positive integer divisible by{" "}
              <InlineMath math="84" />. Which of the following must be an integer?
            </>
          }
          options={[
            "n/14",
            "n/18",
            "n/25",
            "n/27",
            "n/49",
          ]}
          correct="n/14"
          solution={
            <>
              <p>
                If <InlineMath math="84 \mid n" />, then every divisor of{" "}
                <InlineMath math="84" /> also divides <InlineMath math="n" />. Since{" "}
                <InlineMath math="84 = 2^2 \cdot 3 \cdot 7" />, its divisors include{" "}
                <InlineMath math="14 = 2 \cdot 7" />.
              </p>
              <p>
                Therefore <InlineMath math="\frac{n}{14}" /> is guaranteed to be an
                integer. None of the other denominators necessarily divide{" "}
                <InlineMath math="84" />.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Takeaway: once a number is known to be divisible by{" "}
          <InlineMath math="y" />, it’s automatically divisible by every factor of{" "}
          <InlineMath math="y" />. Use this to quickly validate which fractions must be
          integers without extra computation.
        </p>
      </article>
    </main>
  );
}