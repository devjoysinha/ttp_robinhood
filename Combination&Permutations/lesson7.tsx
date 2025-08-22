import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { InlineMath, BlockMath } from 'react-katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { ExampleCard } from '@/components/ui/ExampleCard';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '16.2.6 Multi‑Step Combination Problems | Combinations & Permutations',
  description:
    'Learn how to handle combination problems that span multiple choices or groups. Use the Fundamental Counting Principle, the addition rule, and complements. Includes one quick MCQ and two Data Sufficiency drills with full solutions.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.6 Combinations Involving Multiple Steps
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, our combination questions focused on selecting from a single pool. Real
          test items often chain several choices together or pull from different groups.
          The quickest way to organize these multi‑step scenarios is to break the task into
          clear decisions and apply the appropriate counting rules.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Fundamental Counting Principle (FCP): if a process has step 1 with{' '}
              <InlineMath math="a" /> options and step 2 with <InlineMath math="b" /> options,
              and the steps are independent, then total outcomes are{' '}
              <InlineMath math="a\times b" />.
            </li>
            <li>
              Use combinations when order within a chosen group doesn’t matter:{' '}
              <InlineMath math="\binom{n}{k}=\dfrac{n!}{k!(n-k)!}" />.
            </li>
            <li>
              Distinguish roles. If you’re filling different positions (e.g., chair and
              vice‑chair), count each role separately, then multiply.
            </li>
            <li>
              Use the addition rule for mutually exclusive cases (sum different scenarios),
              and the complement when you see “at least” or “at most.”
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="fcp-heading" className="space-y-3">
          <h3 id="fcp-heading" className="text-xl font-semibold text-white">
            The idea in one line
          </h3>
          <p>
            Multi‑step selection problems typically look like “choose some from group A and
            some from group B.” Translate that into separate combination counts and multiply.
            When a prompt says “or,” you’ll usually add across disjoint cases.
          </p>
          <div className="rounded-md bg-slate-800/60 p-4">
            <BlockMath math="\text{If steps are independent: total}=\prod \text{(ways per step)}" />
          </div>
        </section>

        <MCQExample
          number={61}
          prompt="A committee must include 2 people from 5 engineers and 3 people from 6 analysts. In how many ways can the committee be formed?"
          options={['50', '100', '200', '400', '600']}
          correct="200"
          solution={
            <>
              <p>
                Choose engineers: <InlineMath math="\binom{5}{2}=10" />. Choose analysts:{' '}
                <InlineMath math="\binom{6}{3}=20" />. By the FCP, multiply the steps:{' '}
                <InlineMath math="10\times 20=200" />.
              </p>
            </>
          }
        />

        <section aria-labelledby="pitfalls-heading" className="space-y-3">
          <h3 id="pitfalls-heading" className="text-xl font-semibold text-white">
            Common pitfalls
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Double counting: Don’t treat unordered selections as ordered. Use combinations,
              not permutations, when order doesn’t matter.
            </li>
            <li>
              Mixing “and” with “or”: Multiply for “and” when steps are independent. Add
              disjoint “or” cases. If cases overlap, subtract the overlap (inclusion–exclusion).
            </li>
            <li>
              “At least/at most” traps: Consider the complement to avoid lengthy casework.
            </li>
          </ul>
        </section>

        <ExampleCard
          number={62}
          title="Two groups, fixed counts (Data Sufficiency)"
          statements={[
            'From a pool of 5 engineers and 6 analysts, a 4‑person committee is formed. How many distinct committees are possible?',
            '1) Exactly 2 engineers must be selected.',
            '2) Exactly 2 analysts must be selected.',
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need the total number of 4‑person committees given constraints (if any).
                Without constraints, the mix of engineers/analysts could vary, so the total
                isn’t fixed.
              </p>
              <p>
                <strong>Statement (1):</strong> Exactly 2 engineers. Then the remaining 2
                must be analysts. Count:{' '}
                <InlineMath math="\binom{5}{2}\times \binom{6}{2}=10\times 15=150" />. Unique
                value → sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Exactly 2 analysts. Symmetric count:{' '}
                <InlineMath math="\binom{6}{2}\times \binom{5}{2}=15\times 10=150" />. Unique
                value → sufficient.
              </p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <ExampleCard
          number={63}
          title="At least one from a group (use the complement) — DS"
          statements={[
            'A 4‑person team is chosen from R researchers and 5 managers. How many teams include at least one manager?',
            '1) R = 6',
            '2) Exactly one manager must be selected',
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want teams with at least one manager. A fast route is the complement:
                total teams minus teams with no managers.
              </p>
              <p>
                <strong>Statement (1):</strong> If <InlineMath math="R=6" />, then total
                people <InlineMath math="=11" />. Total 4‑person teams:{' '}
                <InlineMath math="\binom{11}{4}=330" />. Teams with no managers:{' '}
                <InlineMath math="\binom{6}{4}=15" />. So “at least one manager”{' '}
                <InlineMath math="=330-15=315" />. Unique → sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Exactly one manager implies count{' '}
                <InlineMath math="\binom{5}{1}\times \binom{R}{3}" />, which depends on{' '}
                <InlineMath math="R" />. Not sufficient.
              </p>
              <p>
                Only statement (1) is sufficient. Answer: A.
              </p>
            </>
          }
        />

        <section aria-labelledby="roles-heading" className="space-y-3">
          <h3 id="roles-heading" className="text-xl font-semibold text-white">
            Roles vs. no roles
          </h3>
          <p>
            If you’re selecting people into distinct positions (e.g., a 2‑person leadership
            team with a chair and a vice‑chair), treat each role as its own step and multiply.
            If you’re just forming an unordered group, use combinations and do not multiply
            by permutations of the same group.
          </p>
          <div className="rounded-md bg-slate-800/60 p-4">
            <BlockMath math="\text{Unordered team of }k:\ \binom{n}{k}" />
            <BlockMath math="\text{Two distinct roles from }n:\ n\times (n-1)" />
          </div>
        </section>

        <p>
          Big picture: split a multi‑step choice into clean, independent decisions; use
          combinations when order doesn’t matter; multiply across steps; add across disjoint
          scenarios; and lean on complements for “at least/at most.” With that toolkit, most
          multi‑step combination problems fall right into place.
        </p>
      </article>
    </main>
  );
}