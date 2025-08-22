import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "4.4.2 Multiplication Rules for Even and Odd Numbers | Properties of Numbers",
  description:
    "Master the parity rules for multiplication: when products are even or odd, why any even factor forces an even product, and how odd×odd stays odd. Includes two practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.4.2 Multiplication rules for even and odd numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you multiply integers, the parity of the product is governed by very
          simple patterns:
        </p>

        <div className="space-y-3 rounded-md border border-gray-800 bg-gray-900/40 p-4">
          <p className="flex flex-wrap items-center gap-x-2">
            • Even times any integer is even. For example,
            <InlineMath math="(2k)\cdot n = 2(kn)" /> is always even.
          </p>
          <p className="flex flex-wrap items-center gap-x-2">
            • Odd times odd is odd. Using algebra,
            <InlineMath math="(2a+1)(2b+1)=4ab+2a+2b+1=2(2ab+a+b)+1" /> which is odd.
          </p>
          <p>• If a product has at least one even factor, the whole product is even.</p>
          <p>• A product of two or more integers is odd only when every factor is odd.</p>
        </div>

        <MustKnow>
          The parity of a product is determined by its factors:
          - Any even factor forces an even product.
          - Only an all-odd set of factors yields an odd product.
        </MustKnow>

        <section aria-labelledby="quick-ids" className="space-y-3">
          <h3 id="quick-ids" className="text-base font-semibold text-gray-200">
            Quick identities
          </h3>
          <div className="rounded-md border border-gray-800 bg-gray-900/30 p-4">
            <BlockMath math="\text{even}\times\text{even}=\text{even}\quad\quad \text{even}\times\text{odd}=\text{even}\quad\quad \text{odd}\times\text{odd}=\text{odd}" />
          </div>
        </section>

        <MCQExample
          number={2}
          prompt="If m and n are integers and mn + n^2 is odd, which of the following must be odd?"
          options={["I only", "II only", "I and II", "I and III", "I, II, and III"]}
          correct="II only"
          solution={
            <>
              <p>
                Factor the expression:
                <span className="ms-1">
                  <InlineMath math="mn+n^2=n(m+n)" />.
                </span>{" "}
                A product is odd only if both factors are odd. So <InlineMath math="n" /> is
                odd and <InlineMath math="m+n" /> is odd. That forces{" "}
                <InlineMath math="m" /> to be even (odd − odd = even).
              </p>

              <p>
                I. <InlineMath math="mn" />: since <InlineMath math="m" /> is even,{" "}
                <InlineMath math="mn" /> is even, not odd.
              </p>

              <p>
                II. <InlineMath math="n^2+m" />: <InlineMath math="n" /> is odd ⇒{" "}
                <InlineMath math="n^2" /> is odd. Odd + even = odd. This one must be odd.
              </p>

              <p>
                III. <InlineMath math="m^2n" />: <InlineMath math="m" /> is even ⇒{" "}
                <InlineMath math="m^2" /> is even. Even × odd = even. Not odd.
              </p>

              <p>Only statement II must be odd. Answer: II only.</p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt="If x, y, and z are integers, x/64 is an integer, and yz is odd, which of the following must be odd?"
          options={["I only", "II only", "III only", "I and II only", "I and III only"]}
          correct="I and III only"
          solution={
            <>
              <p>
                From <InlineMath math="x/64\in\mathbb{Z}" />, we know{" "}
                <InlineMath math="x" /> is a multiple of 64, hence even. Since{" "}
                <InlineMath math="yz" /> is odd, both <InlineMath math="y" /> and{" "}
                <InlineMath math="z" /> are odd.
              </p>

              <p>
                I. <InlineMath math="x+z" /> = even + odd = odd ⇒ must be odd.
              </p>

              <p>
                II. <InlineMath math="xyz" /> = (even)(odd)(odd) = even ⇒ not odd.
              </p>

              <p>
                III. <InlineMath math="xy+y" /> = <InlineMath math="y(x+1)" />. Since{" "}
                <InlineMath math="x" /> is even, <InlineMath math="x+1" /> is odd; with{" "}
                <InlineMath math="y" /> odd, odd × odd = odd ⇒ must be odd.
              </p>

              <p>
                Therefore, I and III only must be odd. Answer: I and III only.
              </p>
            </>
          }
        />

        <p>
          Tip: If you forget a rule, plug in small numbers to reconstruct it. For example,
          test <InlineMath math="2\cdot 3" />, <InlineMath math="2\cdot 4" />, and{" "}
          <InlineMath math="3\cdot 5" /> to refresh how parity behaves.
        </p>
      </article>
    </main>
  );
}