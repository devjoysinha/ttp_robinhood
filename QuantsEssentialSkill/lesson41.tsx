import 'katex/dist/katex.min.css';
import katex from 'katex';
import type { Metadata } from 'next';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '2.16.1 Order of Operations in Fractions | Essential GMAT Quant',
  description:
    'Master how PEMDAS works inside fractions: simplify the entire numerator and denominator before dividing. Includes a worked example with step‑by‑step reasoning.',
};

function KInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    trust: false,
    output: 'html',
    displayMode: false,
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    trust: false,
    output: 'html',
    displayMode: true,
  });
  return (
    <div
      className="my-4 overflow-x-auto"
      role="figure"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.16.1 Order of Operations in Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A fraction represents “top divided by bottom.” When there are multiple operations in the
          numerator and/or denominator, treat each part as if it were wrapped in its own parentheses.
          In other words, simplify the entire numerator and the entire denominator first, then
          perform the division.
        </p>

        <p>
          For instance, consider the expression:
        </p>

        <KBlock ariaLabel="(3 + 4) over (9 times 4)">
          {\String.raw`\frac{3+4}{9\cdot 4}`}
        </KBlock>

        <p>
          You may be tempted to “cancel” a 4 from the numerator with a 4 in the denominator, but that
          is not allowed because the 4 in the numerator is part of a sum. Cancellation only works with
          common factors, not with terms joined by addition or subtraction. The correct approach is:
        </p>

        <KBlock ariaLabel="Seven over thirty-six">
          {\String.raw`\frac{3+4}{9\cdot 4} = \frac{7}{36}`}
        </KBlock>

        <MustKnow>
          If the numerator or denominator of a fraction contains addition or subtraction, complete
          those operations before dividing. Think “group the top, group the bottom, then divide.”
        </MustKnow>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked Example: Follow PEMDAS inside the fraction
          </h3>

          <p className="mt-2">
            Evaluate the expression below. Remember: fully simplify the numerator and denominator of
            the fraction before subtracting it from the rest of the expression.
          </p>

          <KBlock ariaLabel="Expression to evaluate">
            {String.raw`6 + 2\cdot 3^{2}\;-\;\frac{\,\left(6 + \frac{24}{6} - 8\right)\,}{\,\left(2^{3} - 2 \div \frac{1}{2}\right)\,}`}
          </KBlock>

          <MCQExample
            number={82}
            prompt="Evaluate the expression above."
            options={['48.5', '24.75', '23.5', '14.5', '8.25']}
            correct="23.5"
            solution={
              <>
                <p className="mt-2">
                  1) Simplify inside the fraction first.
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    Numerator:
                    <KInline ariaLabel="Six plus twenty-four over six minus eight">
                      {String.raw`\;6 + \frac{24}{6} - 8 = 6 + 4 - 8 = 2`}
                    </KInline>
                  </li>
                  <li>
                    Denominator:
                    <KInline ariaLabel="Two cubed minus two divided by one half">
                      {String.raw`\;2^{3} - 2 \div \frac{1}{2} = 8 - 4 = 4`}
                    </KInline>
                  </li>
                </ul>

                <p className="mt-3">
                  So the fraction becomes
                  <KInline ariaLabel="Two over four">{String.raw`\;\frac{2}{4} = \frac{1}{2}`}</KInline>.
                </p>

                <p className="mt-3">
                  2) Now evaluate the remaining operations in the main expression.
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    Exponents first:
                    <KInline ariaLabel="Three squared equals nine">
                      {String.raw`\;3^{2} = 9`}
                    </KInline>
                  </li>
                  <li>
                    Then multiplication:
                    <KInline ariaLabel="Two times nine equals eighteen">
                      {String.raw`\;2\cdot 9 = 18`}
                    </KInline>
                  </li>
                  <li>
                    Finally, addition and subtraction:
                    <KInline ariaLabel="Six plus eighteen minus one half equals twenty three point five">
                      {String.raw`\;6 + 18 - \frac{1}{2} = 24 - \frac{1}{2} = 23.5`}
                    </KInline>
                  </li>
                </ul>

                <p className="mt-3">Therefore, the value of the expression is 23.5.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p className="mt-2">
            Fractions don’t change PEMDAS; they just bundle work on the top and bottom. If you keep
            the “whole top over whole bottom” mindset, you’ll avoid illegal cancellations and get to
            the correct result faster.
          </p>
        </section>
      </article>
    </main>
  );
}