import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import katex from 'katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { ExampleCard } from '@/components/ui/ExampleCard';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '4.4.4 Test for Even/Odd Algebraic Expressions | Properties of Numbers',
  description:
    'A fast, reliable way to determine the parity (even/odd) of algebraic expressions. Learn the 0-and-1 substitution shortcut, see when it works, and handle division cases. Includes multiple worked examples.',
};

function TeX({ math, display = false, ariaLabel }: { math: string; display?: boolean; ariaLabel?: string }) {
  const __html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: display,
    strict: 'ignore',
  });
  return (
    <span
      className={display ? 'block my-2' : 'inline'}
      aria-label={ariaLabel || 'mathematical expression'}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">4. Properties of Numbers</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">4.4.4 Testing Algebraic Expressions for Even/Odd</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many GMAT questions give you parity information about a variable (for example, “x is even” or “x is odd”) and ask
          whether a given algebraic expression is even or odd. There’s a quick, error‑resistant approach whenever the
          expression uses only addition, subtraction, and multiplication.
        </p>

        <MustKnow>
          If an expression in x uses only +, −, and ×:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To test “x is even,” plug in x = 0.</li>
            <li>To test “x is odd,” plug in x = 1.</li>
          </ul>
          If the result is even (or odd) for 0 or 1, it will be even (or odd) for every even or odd x, respectively.
        </MustKnow>

        <section aria-labelledby="mini-1" className="space-y-4">
          <h3 id="mini-1" className="text-xl font-semibold text-white">
            Mini‑example: quick parity test
          </h3>
          <p>If x is an even integer, which expression is guaranteed to be odd?</p>

          <MCQExample
            number={1}
            prompt="Assume x is even. Which expression must be odd?"
            options={[
              '(3x + 3)^2 − 5x + 3',
              '(5x − 1)^3 + (x + 3)^2',
              '3x + 4 + (x + 5)^2',
            ]}
            correct="3x + 4 + (x + 5)^2"
            solution={
              <>
                <p>
                  When x is even, set x = 0. Then evaluate each option:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    A: <TeX math="(3\cdot0+3)^2 - 5\cdot0 + 3 = 3^2 + 3 = 12" ariaLabel="(3*0+3)^2 -5*0 +3 equals 12" /> → even
                  </li>
                  <li>
                    B: <TeX math="(5\cdot0-1)^3 + (0+3)^2 = (-1)^3 + 3^2 = -1 + 9 = 8" ariaLabel="(-1)^3 + 3^2 equals 8" /> → even
                  </li>
                  <li>
                    C: <TeX math="3\cdot0 + 4 + (0+5)^2 = 4 + 25 = 29" ariaLabel="4 plus 25 equals 29" /> → odd
                  </li>
                </ul>
                <p>Only choice C is odd for x = 0, so it is odd for all even x.</p>
              </>
            }
          />
        </section>

        <p>
          The 0/1 shortcut is powerful, but don’t overextend it. It works as stated only when the expression involves just
          addition, subtraction, and multiplication. Once division appears, parity can vary in multiple ways and you must
          reason carefully.
        </p>

        <MustKnow>
          Division parity outcomes:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Even ÷ Even → could be even, odd, or not an integer.</li>
            <li>Even ÷ Odd → could be even or not an integer.</li>
            <li>Odd ÷ Odd → could be odd or not an integer.</li>
            <li>Odd ÷ Even → never an integer.</li>
          </ul>
        </MustKnow>

        <section aria-labelledby="ex-odd-1" className="space-y-4">
          <h3 id="ex-odd-1" className="text-xl font-semibold text-white">Practice: odd x</h3>
          <MCQExample
            number={2}
            prompt="If x is an odd integer, which of the following must be even?"
            options={[
              'x^2 − 3x + (x + 2)^3',
              '(x + 4)(x + 2)',
              '(2x + 5)(x − 1)',
              '(3x)^2 + 2x',
              '((x^2 + 4x − 1))^2 + 3x',
            ]}
            correct="(2x + 5)(x − 1)"
            solution={
              <>
                <p>Use x = 1 (odd) to test quickly:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    A: <TeX math="1^2 - 3\cdot1 + (1+2)^3 = 1 - 3 + 27 = 25" /> → odd
                  </li>
                  <li>
                    B: <TeX math="(1+4)(1+2) = 5\cdot3 = 15" /> → odd
                  </li>
                  <li>
                    C: <TeX math="(2\cdot1+5)(1-1) = 7\cdot0 = 0" /> → even
                  </li>
                  <li>
                    D: <TeX math="(3\cdot1)^2 + 2\cdot1 = 9 + 2 = 11" /> → odd
                  </li>
                  <li>
                    E: <TeX math="(1^2 + 4\cdot1 - 1)^2 + 3\cdot1 = (4)^2 + 3 = 19" /> → odd
                  </li>
                </ul>
                <p>Only choice C is guaranteed even.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-two-vars" className="space-y-4">
          <h3 id="ex-two-vars" className="text-xl font-semibold text-white">Practice: two variables</h3>
          <MCQExample
            number={3}
            prompt="Let x be even and y be odd. Which must be odd?"
            options={['I only', 'I and II', 'I and III', 'II and III', 'I, II, and III']}
            correct="II and III"
            solution={
              <>
                <p>Test x = 0 (even) and y = 1 (odd):</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    I. <TeX math="3x^2 + (x-y)^2 - y^2" /> becomes <TeX math="0 + (-1)^2 - 1 = 0" /> → even
                  </li>
                  <li>
                    II. <TeX math="5xy - 3x + 4y - 1" /> becomes <TeX math="0 - 0 + 4 - 1 = 3" /> → odd
                  </li>
                  <li>
                    III. <TeX math="(3y - x + 2)(4x - xy^2 + 3)" /> becomes <TeX math="(5)(3)=15" /> → odd
                  </li>
                </ul>
                <p>Therefore, II and III are always odd.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="mini-2" className="space-y-4">
          <h3 id="mini-2" className="text-xl font-semibold text-white">Mini‑example: with division</h3>
          <p>If x is odd, which of the following could be even?</p>

          <MCQExample
            number={4}
            prompt="Assume x is odd. Which could be even?"
            options={[
              '(x^2 + 3x) / 4',
              '(3x + 2) / 4',
              '(x^2 + 4x + 1) / 3',
              'None of these',
            ]}
            correct="(x^2 + 3x) / 4"
            solution={
              <>
                <p>
                  Evaluate at x = 1 (odd):
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    I: <TeX math="(1^2 + 3\cdot1)/4 = 4/4 = 1" /> → odd (but try other odd values)
                  </li>
                  <li>
                    II: <TeX math="(3\cdot1 + 2)/4 = 5/4" /> → not an integer, never even
                  </li>
                  <li>
                    III: <TeX math="(1^2 + 4\cdot1 + 1)/3 = 6/3 = 2" /> → even (at x = 1)
                  </li>
                </ul>
                <p>
                  With division, parity can change across inputs. Testing shows that I and III can produce even values for
                  some odd x (for instance, III is even at x=1). Among the listed choices, (x^2 + 3x)/4 is one that can be even
                  for certain odd x (e.g., x = 5 gives (25 + 15)/4 = 40/4 = 10). So “(x^2 + 3x)/4” is a valid “could be even.”
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-final" className="space-y-4">
          <h3 id="ex-final" className="text-xl font-semibold text-white">Practice: must be odd (with a quotient)</h3>
          <MCQExample
            number={5}
            prompt="If x is an even integer, which expression must be odd?"
            options={[
              '(3x + 2) / 2',
              '2x^2 + 3x + 4',
              '(x^2 + 6x + 8) / 3',
              '(x^2 + 2x − 3) / (x − 1)',
              'x^2 + x − 6',
            ]}
            correct="(x^2 + 2x − 3) / (x − 1)"
            solution={
              <>
                <p>Check quickly with x = 0 (even) unless the denominator vanishes; then try another even value.</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    A: <TeX math="(3\cdot0+2)/2 = 2/2=1" /> (odd), but with x = 2 we get <TeX math="(6+2)/2=4" /> (even) → not “must.”
                  </li>
                  <li>
                    B: <TeX math="2\cdot0^2 + 3\cdot0 + 4 = 4" /> → even always, because terms with x are even and 4 is even.
                  </li>
                  <li>
                    C: numerator even, denominator odd → could be even or non‑integer; not guaranteed odd.
                  </li>
                  <li>
                    D: Factor the numerator: <TeX math="x^2 + 2x - 3 = (x-1)(x+3)" />. For x ≠ 1,
                    <TeX math="\dfrac{x^2 + 2x - 3}{x - 1} = x + 3" />. If x is even, x + 3 is odd. Must be odd.
                  </li>
                  <li>
                    E: Plug x = 0 → <TeX math="-6" /> even → not “must.”
                  </li>
                </ul>
                <p>Only choice D is always odd for every even x in its domain (x ≠ 1).</p>
              </>
            }
          />
        </section>

        <MustKnow>
          The 0/1 substitution is a position check, not heavy computation. Use it confidently for expressions built from
          +, −, and ×. Introduce division, and you must analyze possibilities (integer vs non‑integer) and factor when you
          can to expose guaranteed parity.
        </MustKnow>
      </article>
    </main>
  );
}