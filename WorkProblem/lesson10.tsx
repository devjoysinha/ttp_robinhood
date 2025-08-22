import 'katex/dist/katex.min.css';
import katex from 'katex';
import type { Metadata } from 'next';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

// Small helpers to render KaTeX (accessible: HTML + MathML)
function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: 'htmlAndMathml',
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: 'htmlAndMathml',
    displayMode: true,
  });
  return <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: '10.7.3 Two Workers, One Unknown Time | Work Problems',
  description:
    'Learn how to handle combined-rate problems when one worker’s solo time is unknown. Includes a must‑know summary and a multiple‑choice example solved step by step.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">10. Work Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.7.3 Two workers collaborate, but one worker’s time is unknown
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many team‑work questions, the time for one worker to finish the entire job alone isn’t given.
          That’s not a blocker: when the solo time is unknown, represent the worker’s rate symbolically and
          build an equation from rate × time = work.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p>
              Work problems rest on the identities
              {' '}
              <MathInline expr="\\text{Work} = \\text{Rate} \\times \\text{Time}" />
              {' '} and
              {' '}
              <MathInline expr="\\text{Combined Rate} = r_1 + r_2 + \\cdots" />.
            </p>
            <ul className="list-inside list-disc">
              <li>
                If a worker needs
                {' '}
                <MathInline expr="t" />
                {' '}
                units of time to finish one job alone, then the worker’s rate is
                {' '}
                <MathInline expr="\\dfrac{1}{t}" />
                {' '}
                job per unit time.
              </li>
              <li>
                If the job size is
                {' '}
                <MathInline expr="k" />
                {' '}
                jobs completed in unknown time
                {' '}
                <MathInline expr="t" />
                , the rate is
                {' '}
                <MathInline expr="\\dfrac{k}{t}" />
                .
              </li>
              <li>
                A fraction of a job in unknown time scales similarly; e.g., half a job in
                {' '}
                <MathInline expr="t" />
                {' '}
                units has rate
                {' '}
                <MathInline expr="\\dfrac{1/2}{t} = \\dfrac{1}{2t}" />
                .
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          The usual plan: convert each worker’s info to a rate, add rates for the time they work together,
          set total work to one full job, and solve for the unknown.
        </p>

        <MCQExample
          number={11}
          prompt="Carla can wash a full load of dishes in 42 minutes working alone at a constant rate. Together, Carla and Dan wash the same load in 28 minutes, each working at a constant rate. How long would it take Dan, working alone, to wash the load?"
          options={['28 minutes', '35 minutes', '60 minutes', '72 minutes', '84 minutes']}
          correct="84 minutes"
          solution={
            <>
              <p>
                Let Dan’s solo time be
                {' '}
                <MathInline expr="t" />
                {' '}
                minutes. Then Carla’s rate is
                {' '}
                <MathInline expr="\\dfrac{1}{42}" />
                {' '}
                job/min and Dan’s rate is
                {' '}
                <MathInline expr="\\dfrac{1}{t}" />
                {' '}
                job/min.
              </p>
              <p>
                Working together for 28 minutes completes one job:
              </p>
              <MathBlock expr="28\\left(\\dfrac{1}{42} + \\dfrac{1}{t}\\right) = 1" />
              <p>
                Simplify:
              </p>
              <MathBlock expr="\\dfrac{28}{42} + \\dfrac{28}{t} = 1 \\quad\\Rightarrow\\quad \\dfrac{2}{3} + \\dfrac{28}{t} = 1" />
              <MathBlock expr="\\dfrac{28}{t} = 1 - \\dfrac{2}{3} = \\dfrac{1}{3} \\quad\\Rightarrow\\quad 28 = \\dfrac{t}{3} \\quad\\Rightarrow\\quad t = 84" />
              <p>
                So Dan would need 84 minutes working alone.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: when a worker’s solo time is unknown, treat the rate as
          {' '}
          <MathInline expr="\\tfrac{1}{t}" />
          . Combine rates, multiply by the common working time, and equate to one full job to solve for
          {' '}
          <MathInline expr="t" />
          .
        </p>
      </article>
    </main>
  );
}