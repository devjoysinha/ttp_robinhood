import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "4.11.5 LCM and Unique Prime Factors | Properties of Numbers",
  description:
    "See why the LCM of a set of positive integers reveals exactly which primes appear in the set—and in the product of those integers. Includes a quick multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.11.5 The LCM Tells Us the Unique Prime Factors in a Set
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The least common multiple (LCM) of a group of positive integers captures,
          in one number, every prime that shows up anywhere in the group. In other words,
          the distinct primes in the LCM are exactly the distinct primes that appear
          among the integers in the set.
        </p>

        <MustKnow>
          The prime factorization of the LCM lists all and only the unique primes
          present in the set. Those same unique primes are also the complete set of
          primes that divide the product of the integers in the set.
        </MustKnow>

        <section aria-labelledby="factorization-demo" className="space-y-3">
          <h3 id="factorization-demo" className="text-white font-semibold">
            Quick demonstration
          </h3>
          <p>
            Suppose the LCM of three numbers <InlineMath math="x,\,y,\,z" /> is 360.
            Factoring 360 makes the prime set visible:
          </p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <BlockMath math={"360 = 2^3\\cdot 3^2\\cdot 5"} />
          </div>
          <p>
            From this factorization, we can immediately read off the unique primes:
            <InlineMath math="\\{2,\\,3,\\,5\\}" />. No other primes occur in any of
            <InlineMath math="x,\\,y,\\,z" />, so none can appear in their product
            <InlineMath math="xyz" /> either.
          </p>
        </section>

        <section aria-labelledby="why-it-works" className="space-y-3">
          <h3 id="why-it-works" className="text-white font-semibold">
            Why this works
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              When we compute an LCM, we collect every prime that appears in any number
              in the set, and for each prime we take the highest exponent seen across
              the set.
            </li>
            <li>
              Therefore, the LCM’s prime factorization contains each distinct prime
              that occurs in the set at least once.
            </li>
            <li>
              Multiplying the numbers together can’t introduce new primes—products only
              combine primes that were already present—so the product has the same set
              of unique primes as the LCM.
            </li>
          </ul>
        </section>

        <MCQExample
          number={36}
          prompt="If the least common multiple of positive integers S and T is 840, how many distinct prime factors does the product ST have?"
          options={["Three", "Four", "Five", "Six", "Seven"]}
          correct="Four"
          solution={
            <>
              <p>
                Factor the LCM to reveal its unique primes. Those same primes are
                exactly the unique primes in <InlineMath math="ST" />:
              </p>
              <div className="rounded-md bg-gray-800/50 p-4 my-3">
                <BlockMath math={"840 = 2^3\\cdot 3\\cdot 5\\cdot 7"} />
              </div>
              <p>
                The set of distinct primes is <InlineMath math="\\{2,\\,3,\\,5,\\,7\\}" />,
                which has 4 elements. Thus, <InlineMath math="ST" /> has four unique
                prime factors.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}