import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "4.9.6 Prime Factorization with Variable Exponents | Properties of Numbers",
  description:
    "Learn how to compare prime-factor counts when exponents are variables. Includes two quick mini‑examples and two GMAT‑style multiple‑choice questions with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9.6 Prime Factorization When Exponents Contain Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You’ll often need to compare how many copies of a prime appear in the
          factorization of numbers like <InlineMath math={"50^n"} />,{" "}
          <InlineMath math={"144^n"} />, or <InlineMath math={"220^n"} />. The
          clean way to do this is to fully factor the base first, then apply the
          exponent to each prime.
        </p>

        <MustKnow>
          <p className="mb-2">
            Factor the base, then distribute the exponent to each prime.
          </p>
          <BlockMath math={"\\text{If } m=\\prod_i p_i^{e_i},\\ \\text{then } m^n=\\prod_i p_i^{n\\,e_i}."} />
          <p className="mt-2">
            The exponents of the primes in <InlineMath math={"m^n"} /> are just
            the original exponents multiplied by <InlineMath math={"n"} />.
            Compare those new exponents to answer “how many 2s, 3s, 5s, …?” or
            to find ratios and percentages.
          </p>
        </MustKnow>

        <section aria-labelledby="mini-ex-1" className="space-y-3">
          <h3 id="mini-ex-1" className="text-white font-semibold">
            Mini‑example 1
          </h3>
          <p>
            For a positive integer <InlineMath math={"n"} />, what is the ratio
            of the number of 5s to the number of 2s in{" "}
            <InlineMath math={"50^n"} />?
          </p>
          <p className="text-gray-300">
            Since <InlineMath math={"50=2\\cdot 5^2"} />, we have
          </p>
          <BlockMath math={"50^n=(2\\cdot 5^2)^n=2^n\\cdot 5^{2n}."} />
          <p>
            Count of 2s = <InlineMath math={"n"} />; count of 5s ={" "}
            <InlineMath math={"2n"} />. So the ratio (5s):(2s) is{" "}
            <InlineMath math={"2n:n=2:1"} />.
          </p>
        </section>

        <section aria-labelledby="mini-ex-2" className="space-y-3">
          <h3 id="mini-ex-2" className="text-white font-semibold">
            Mini‑example 2
          </h3>
          <p>
            For a positive integer <InlineMath math={"n"} />, the number of 3s
            in <InlineMath math={"120^n"} /> is what fraction of the number of
            2s in <InlineMath math={"120^n"} />?
          </p>
          <p className="text-gray-300">
            Since <InlineMath math={"120=2^3\\cdot 3\\cdot 5"} />, we get
          </p>
          <BlockMath math={"120^n=(2^3\\cdot 3\\cdot 5)^n=2^{3n}\\cdot 3^{n}\\cdot 5^{n}."} />
          <p>
            Count of 2s = <InlineMath math={"3n"} />; count of 3s ={" "}
            <InlineMath math={"n"} />. Thus{" "}
            <InlineMath math={"\\dfrac{\\#\\,3s}{\\#\\,2s}=\\dfrac{n}{3n}=\\dfrac{1}{3}"} />
            . The 3s are one‑third of the 2s.
          </p>
        </section>

        <MCQExample
          number={27}
          prompt="If k is a positive integer, what percent of the prime factors are 5s in the prime factorization of 490,000^k?"
          options={["12.5%", "35%", "33 1/3%", "40%", "50%"]}
          correct="40%"
          solution={
            <>
              <p className="mb-2">
                First, factor the base:
                <InlineMath math={"\\ 490{,}000=49\\cdot 10{,}000=7^2\\cdot 10^4=7^2\\cdot (2\\cdot 5)^4=2^4\\cdot 5^4\\cdot 7^2"} />
                .
              </p>
              <p className="mb-2">
                Raise to the k-th power:
                <BlockMath math={"(490{,}000)^k=2^{4k}\\cdot 5^{4k}\\cdot 7^{2k}."} />
              </p>
              <p className="mb-2">
                Total prime factors = <InlineMath math={"4k+4k+2k=10k"} />.
                Count of 5s = <InlineMath math={"4k"} />.
              </p>
              <p>
                Proportion of 5s ={" "}
                <InlineMath math={"\\dfrac{4k}{10k}=\\dfrac{4}{10}=0.4=40\\%"} />
                . Answer: 40%.
              </p>
            </>
          }
        />

        <MCQExample
          number={28}
          prompt="If n is a positive integer and the number of 2s in the prime factorization of 6,400,000^n exceeds the number of 5s by 90, what is n?"
          options={["9", "10", "12", "15", "18"]}
          correct="15"
          solution={
            <>
              <p className="mb-2">
                Factor the base:
                <InlineMath math={"\\ 6{,}400{,}000=64\\cdot 100{,}000=2^6\\cdot (10)^5=2^6\\cdot (2\\cdot 5)^5=2^{11}\\cdot 5^5"} />
                .
              </p>
              <p className="mb-2">
                Then{" "}
                <InlineMath math={"(6{,}400{,}000)^n=2^{11n}\\cdot 5^{5n}"} />.
                The counts are 2s: <InlineMath math={"11n"} />, 5s:{" "}
                <InlineMath math={"5n"} />.
              </p>
              <p className="mb-2">
                “2s exceed 5s by 90” gives{" "}
                <InlineMath math={"11n-5n=90\\ \\Rightarrow\\ 6n=90\\ \\Rightarrow\\ n=15"} />
                .
              </p>
              <p>Therefore, n = 15.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="pt-2">
          <h3 id="wrap-up" className="text-white font-semibold">
            Takeaway
          </h3>
          <p>
            Prime‑count questions with variable exponents are bookkeeping:
            factor the base, multiply exponents by the variable, and compare the
            resulting exponents to get counts, ratios, or percentages quickly
            and reliably.
          </p>
        </section>
      </article>
    </main>
  );
}