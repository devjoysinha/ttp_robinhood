import 'katex/dist/katex.min.css';
import katex from 'katex';
import type { Metadata } from 'next';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '10.2.7 Numerical Confusion: Percentages vs. Counts | Critical Reasoning',
  description:
    'Learn to spot arguments that mix up percentages and absolute numbers. Includes a worked multiple‑choice example with a quantitative counterexample rendered in KaTeX.',
};

function TeX({
  children,
  block = false,
  ariaLabel,
}: {
  children: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
    strict: 'ignore',
  });
  return block ? (
    <div
      role="img"
      aria-label={ariaLabel}
      className="overflow-x-auto py-1"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <span
      role="img"
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
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.7 Numerical Confusion: Percentages vs. Absolute Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Arguments that cite statistics often blur the line between rates
          (percentages) and counts (totals). When the overall size of a group
          can change, a shift in percentage does not automatically tell you what
          happened to the actual number of items or people.
        </p>

        <MustKnow>
          Beware of conclusions that treat a change in percentage as a guaranteed
          change in the absolute number, or vice versa. Unless the total
          population is fixed, a smaller percentage can still correspond to the
          same or even a larger count, and a larger percentage can correspond to
          a smaller count.
        </MustKnow>

        <section aria-labelledby="mf-example">
          <h3 id="mf-example" className="sr-only">
            Illustrative scenario: company fund
          </h3>
          <p className="italic text-gray-300">
            Over the last 25 years, the share of employees who contribute to a
            company mutual fund has dropped by 15 percent. Because some
            investors cash out each year, the fund depends on new contributors.
            Therefore, this drop will harm the fund.
          </p>
          <p>
            The reasoning quietly assumes that a lower percentage of participating
            employees means fewer contributors overall. But if the company grew
            substantially, the number of contributors could be unchanged—or even
            higher—despite the smaller percentage.
          </p>
          <p className="text-gray-200">
            Flaw, paraphrased: the argument unwarrantedly treats a percentage
            decrease as proof of a decrease in the underlying count.
          </p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={9}
          prompt="Campaign Director: In the last race, our candidate lost by a few percentage points. Polling for the upcoming election shows that 9 percent more people intend to vote for our candidate now. So our candidate will win comfortably this time."
          options={[
            'It does not explain why support for the candidate would be higher now than before.',
            'It ignores whether approval of our candidate rose or approval of the opponent fell.',
            'It does not determine the exact number of votes we fell short by in the prior election.',
            'It overlooks that the total number of people planning to vote now could be much larger than the total who voted previously.',
            'It ignores that many respondents may have only recently chosen the candidate.',
          ]}
          correct="It overlooks that the total number of people planning to vote now could be much larger than the total who voted previously."
          solution={
            <>
              <p>
                Summary of the claim:
              </p>
              <ul className="ml-5 list-disc">
                <li>Background: prior loss by a small percentage margin</li>
                <li>Premise: reported 9% increase in those intending to vote for our candidate</li>
                <li>Conclusion: a comfortable win is “obvious”</li>
              </ul>
              <p className="mt-3">
                The support mixes a percent change with an unknown total. If the
                overall electorate expands enough, a 9% bump in our candidate’s
                supporters does not ensure a larger vote share.
              </p>
              <p className="mt-3">
                Consider a concrete counterexample. Suppose last time there were{' '}
                <TeX ariaLabel="one thousand" children={'1000'} /> total votes
                and our candidate received{' '}
                <TeX ariaLabel="four hundred" children={'400'} />:
              </p>
              <div className="rounded-md bg-gray-900 p-4">
                <p className="mb-2">
                  Previous election share:{' '}
                  <TeX ariaLabel="four hundred divided by one thousand equals forty percent" children={'\\tfrac{400}{1000}=40\\%'} />
                </p>
                <p className="mb-2">
                  Suppose turnout rises by 20%:{' '}
                  <TeX
                    ariaLabel="current total equals one thousand times one point two equals one thousand two hundred"
                    children={'\\text{current total}=1000\\times1.2=1200'}
                  />
                </p>
                <p className="mb-2">
                  Our candidate’s count rises by 9%:{' '}
                  <TeX
                    ariaLabel="current candidate votes equals four hundred times one point zero nine equals four hundred thirty six"
                    children={'\\text{current votes}=400\\times1.09=436'}
                  />
                </p>
                <p>
                  Current share:{' '}
                  <TeX
                    ariaLabel="four hundred thirty six over one thousand two hundred is approximately thirty six point three percent"
                    children={'\\tfrac{436}{1200}\\approx36.3\\%'}
                  />
                </p>
              </div>
              <p className="mt-3">
                Despite more supporters in absolute terms (
                <TeX children={'436'} ariaLabel="four hundred thirty six" /> vs{' '}
                <TeX children={'400'} ariaLabel="four hundred" />), the vote
                share drops from <TeX children={'40\\%'} ariaLabel="forty percent" /> to approximately{' '}
                <TeX children={'36.3\\%'} ariaLabel="thirty six point three percent" />.
                A comfortable win is not guaranteed. Thus, the best description
                of the weakness is that the argument ignores possible changes in
                the size of the voting population.
              </p>
              <p className="mt-3">
                Why the other options miss the mark:
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  A: Reasons for increased support are irrelevant to whether the
                  math guarantees victory.
                </li>
                <li>
                  B: Whether approval changed for either side does not fix the
                  core percentage-vs-total issue.
                </li>
                <li>
                  C: The exact shortfall last time is unnecessary to evaluate
                  this prediction.
                </li>
                <li>
                  E: Recent decision-making by respondents does not address the
                  mismatch between rates and totals.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          A quick test: when you see a percent change, ask, “What happened to
          the base?” If the denominator can vary, you cannot infer the direction
          of the absolute count—or the share—without more information.
        </MustKnow>
      </article>
    </main>
  );
}