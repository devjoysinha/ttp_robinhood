import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { InlineMath, BlockMath } from 'react-katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '4.9.5 Unique Prime Factors Under Positive Powers | Properties of Numbers',
  description:
    'See why raising a number to a positive integer power never changes which primes appear in its factorization. Includes two practice questions with full solutions.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.9.5 Unique Prime Factors Don’t Change Under Positive Powers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you write a number in prime‑factor form and then raise that number to a positive
          integer power, the set of primes involved does not change—only their exponents grow.
          For instance, <InlineMath math="25 = 5^2" /> has a single unique prime factor, 5.
          Squaring 25 gives <InlineMath math="625 = 5^4" />, which still uses only the prime 5.
        </p>

        <p>
          Another illustration: <InlineMath math="18 = 2 \cdot 3^2" /> contains two unique primes,
          2 and 3. Cubing 18 yields <InlineMath math="18^3 = 5{,}832 = 2^3 \cdot 3^6" />, which
          is built from the same two primes—only the exponents have changed.
        </p>

        <MustKnow>
          If a positive integer <InlineMath math="x" /> has exactly <InlineMath math="r" /> unique
          prime factors, then for any positive integer <InlineMath math="n" />, the number{' '}
          <InlineMath math="x^n" /> has the same <InlineMath math="r" /> unique prime factors. Powers
          change exponents, not which primes appear.
        </MustKnow>

        <MCQExample
          number={25}
          prompt={
            <>
              If <InlineMath math="y" /> is a positive integer, which of the following expressions
              can never have more unique prime factors than <InlineMath math="y" />?
              <br />
              I. <InlineMath math="y^2" />
              <br />
              II. <InlineMath math="y^{11}" />
              <br />
              III. <InlineMath math="10y" />
            </>
          }
          options={['I and II', 'I and III', 'II and III', 'I, II, and III', 'III only']}
          correct="I and II"
          solution={
            <>
              <p>
                Raising to a positive power doesn’t introduce new primes. So{' '}
                <InlineMath math="y^2" /> and <InlineMath math="y^{11}" /> have the exact same set of
                unique prime factors as <InlineMath math="y" />.
              </p>
              <p>
                However, <InlineMath math="10y = 2 \cdot 5 \cdot y" /> can add primes 2 and/or 5 if
                they are not already in <InlineMath math="y" />. Sometimes it matches{' '}
                <InlineMath math="y" /> (e.g., <InlineMath math="y=10" />), and sometimes it has
                more (e.g., <InlineMath math="y=3" /> makes <InlineMath math="30=2 \cdot 3 \cdot 5" />
                ). Thus, only I and II are guaranteed not to have more unique primes.
              </p>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt={
            <>
              Let <InlineMath math="w" /> be prime and <InlineMath math="y = w^2" />. If{' '}
              <InlineMath math="z = 4y^3" />, how many prime factors (counting multiplicity) does{' '}
              <InlineMath math="z" /> have?
            </>
          }
          options={['2', '6', '7', '8', '11']}
          correct="8"
          solution={
            <>
              <p>
                First, <InlineMath math="y = w^2" /> so <InlineMath math="y^3 = w^6" />. Then{' '}
                <InlineMath math="z = 4 \cdot y^3 = 4 \cdot w^6 = 2^2 \cdot w^6" />.
              </p>
              <p>
                Counting prime factors with multiplicity: two 2’s plus six <InlineMath math="w" />
                ’s gives <InlineMath math="2 + 6 = 8" /> total prime factors.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}