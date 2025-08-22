import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { InlineMath } from 'react-katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '10.2.8 Unsupported Conclusions | Logical Flaw',
  description:
    'Learn how arguments go wrong when conclusions aren’t actually supported by the evidence. Includes two multiple‑choice drills and one quick dialogue analysis with full reasoning.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">10. Logical Flaw</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.8 Logical Flaw Four: Conclusions Not Backed by the Evidence
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent mistake in reasoning is to present facts that don’t actually establish the stated
          conclusion. In other words, the author gives you evidence, but the conclusion rests on a link
          that isn’t justified. Symbolically, the argument is pretending that{' '}
          <InlineMath math={'E \\Rightarrow C'} aria-label="Evidence implies conclusion" /> when in fact
          the bridge from evidence E to conclusion C is missing:{' '}
          <InlineMath math={'E \\not\\Rightarrow C'} aria-label="Evidence does not imply conclusion" />.
        </p>

        <MustKnow>
          An argument is flawed if the provided evidence fails to meaningfully bear on the point being
          concluded. When the premise does not address the claim (or could even be true while the claim
          is false), the conclusion is unsupported.
        </MustKnow>

        <section aria-labelledby="dialogue-check">
          <h3 id="dialogue-check" className="text-xl font-semibold text-white">
            Quick dialogue check
          </h3>
          <div className="space-y-3">
            <p className="italic text-gray-200">
              Professor: In recent years, incoming students seem less driven than in the past. I suspect
              admissions now prioritizes applicants who can pay full tuition over those most eager to
              learn.
            </p>
            <p className="italic text-gray-200">
              Admissions Director: That’s not correct. We still use the same application, receive about
              the same number of applications, and continue to interview candidates as before.
            </p>
          </div>

          <MCQExample
            number={1}
            prompt="The admissions director’s reply is most vulnerable to the criticism that it"
            options={[
              'attacks the professor personally rather than addressing the claim.',
              'assumes that using the same application guarantees identical admissions decisions.',
              'offers facts that do not actually engage with the claim it seeks to rebut.',
              'draws a sweeping generalization from a single anecdote.',
              'presumes that full‑tuition students are inherently unmotivated.',
            ]}
            correct="offers facts that do not actually engage with the claim it seeks to rebut."
            solution={
              <>
                <p>
                  The professor’s claim is about a shift in priorities (favoring ability to pay over
                  motivation). The response lists unchanged procedures (same form, similar volume,
                  interviews), which doesn’t show those priorities haven’t shifted. The evidence is
                  tangential, so the conclusion that the professor is “incorrect” isn’t supported.
                </p>
              </>
            }
          />
        </section>

        <p>
          The big test: would the conclusion still be up in the air even if the evidence were true? If
          yes, the support is weak or irrelevant, and the argument is flawed.
        </p>

        <MCQExample
          number={2}
          difficulty="easy"
          prompt="Vehicle Safety Products CEO: Our infant car seats have undergone thousands of hours of testing over the last five years. Therefore, our seats must be the safest infant seats on the market."
          options={[
            'fails to establish that the company’s infant seats also perform well in trucks.',
            'generalizes from a small or biased testing sample.',
            'ignores the possibility that careful driving is the best way to keep infants safe.',
            'assumes that all car owners need infant seats.',
            'uses evidence that does not actually establish the stated conclusion.',
          ]}
          correct="uses evidence that does not actually establish the stated conclusion."
          solution={
            <>
              <p>
                Breakdown: Premise — “We tested for thousands of hours.” Conclusion — “Our seats are the
                safest.”
              </p>
              <p>
                The amount of testing doesn’t tell us the outcome of the testing. Extensive testing could
                reveal flaws just as easily as it could demonstrate excellence. Thus, the premise doesn’t
                connect to the conclusion. Formally:{' '}
                <InlineMath math={'\\text{Testing Hours} \\not\\Rightarrow \\text{Safest}'} />.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Trucks (A) are outside the claim scope. The conclusion is about seats for cars.
                </li>
                <li>
                  A “tiny/unrepresentative sample” (B) isn’t stated; “thousands of hours” suggests the
                  opposite.
                </li>
                <li>
                  Careful driving (C) is irrelevant to comparing infant seats to each other.
                </li>
                <li>Not all drivers need seats (D) is also irrelevant to the comparative claim.</li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={3}
          difficulty="hard"
          prompt="Companies selling foods with GMO‑derived ingredients oppose mandatory GMO labels. Yet since these companies claim there’s nothing wrong with eating GMO‑derived ingredients, they have no reason to think labels would deter consumers."
          options={[
            'fails to provide evidence that eating GMO‑derived ingredients is harmless.',
            'offers as support an assertion that does not clearly lead to the conclusion.',
            'overlooks that such companies have an interest in preserving positive public perception.',
            'merely contradicts the companies’ position without evidence.',
            'draws an irrelevant distinction between sellers of GMO and non‑GMO products.',
          ]}
          correct="offers as support an assertion that does not clearly lead to the conclusion."
          solution={
            <>
              <p>
                Premise: “There’s nothing wrong with eating foods with GMO‑derived ingredients.” Conclusion:
                “Therefore, labels won’t discourage consumers.” That leap is not warranted. Even if the
                premise were true, consumers might still be put off by labels. Hence,{' '}
                <InlineMath math={'E \\not\\Rightarrow C'} />.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  (A) The argument doesn’t need to prove the companies’ assertion; it uses the assertion as
                  given.
                </li>
                <li>
                  (C) Motivations may be relevant background, but the flaw is the missing link between the
                  assertion and the predicted consumer behavior.
                </li>
                <li>(D) The argument doesn’t simply contradict; it draws an unwarranted inference.</li>
                <li>(E) No such distinction is made in the argument.</li>
              </ul>
            </>
          }
        />

        <MustKnow>
          A reliable quick check: Ask whether the conclusion could still be false even if every premise is
          true. If so, the premises don’t do the job. Look for missing links between what’s asserted and
          what’s concluded.
        </MustKnow>

        <p>
          Up next in logical flaws: how arguments confuse necessary or significant facts with sufficient
          proof.
        </p>
      </article>
    </main>
  );
}