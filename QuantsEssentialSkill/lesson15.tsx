import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.2.4 Compare Fractions with a Common Numerator | GMAT Quant",
  description:
    "Learn a fast way to compare positive fractions by giving them a common numerator. See why larger denominators mean smaller values when numerators match. Includes one ordering MCQ and one roman‑numeral drill with full reasoning.",
};

// Small helper to render KaTeX inline or block math
function Math({ expr, block = false }: { expr: string; block?: boolean }) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    trust: true,
    strict: "ignore",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={block ? "my-2" : ""}
      role="math"
      aria-label={expr}
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
          2.2.4 Comparing Fractions Using a Common Numerator
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You may already compare fractions by finding a common denominator. A
          parallel strategy is often even quicker: give the fractions a common
          numerator. For positive fractions that share the same numerator, the
          fraction with the larger denominator is smaller, and the fraction with
          the smaller denominator is larger. This turns size comparisons into a
          simple check of denominators.
        </p>

        <MustKnow>
          In any list of positive fractions that all have the same numerator,
          larger denominator → smaller fraction; smaller denominator → larger
          fraction. To use this idea, rewrite each fraction so they all share a
          convenient common numerator (typically the least common multiple of
          the original numerators).
        </MustKnow>

        <section aria-labelledby="worked-example-1" className="space-y-4">
          <h3 id="worked-example-1" className="text-xl font-semibold text-white">
            Quick warm‑up: build a common numerator
          </h3>
          <p>Compare the following fractions from least to greatest:</p>
          <p className="flex flex-wrap gap-2">
            <Math expr="\,\frac{4}{17},\," /> <Math expr="\,\frac{8}{49},\," />{" "}
            <Math expr="\,\frac{12}{75}\," />
          </p>
          <p>
            The numerators are 4, 8, and 12. A handy target numerator is their
            least common multiple, which is 24. Scale each fraction so its
            numerator becomes 24:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <Math expr="\frac{4}{17}\times\frac{6}{6}=\frac{24}{102}" />
            </li>
            <li>
              <Math expr="\frac{8}{49}\times\frac{3}{3}=\frac{24}{147}" />
            </li>
            <li>
              <Math expr="\frac{12}{75}\times\frac{2}{2}=\frac{24}{150}" />
            </li>
          </ul>
          <p>
            Now that all three share numerator 24, order them by denominator
            (bigger denominator → smaller value):
          </p>
          <p className="flex flex-wrap gap-2 items-center">
            <Math expr="\frac{24}{150}" />
            <span>is smallest, then</span>
            <Math expr="\frac{24}{147}" />
            <span>, then</span>
            <Math expr="\frac{24}{102}" />
            <span>is largest.</span>
          </p>
          <p>
            Returning to the originals, the increasing order is
            <Math expr="\;\frac{12}{75}\;<\;\frac{8}{49}\;<\;\frac{4}{17}\;" />
          </p>
          <p>
            Why choose a common numerator here instead of a common denominator?
            Because 4, 8, and 12 are easier to align than 17, 49, and 75. In
            general, pick the route—common numerator or common denominator—that
            looks simpler for the numbers you have.
          </p>
        </section>

        <MCQExample
          number={39}
          prompt="Which of the following orders the fractions correctly from least to greatest?"
          options={[
            '4/7 < 9/11 < 12/17 < 18/23',
            '4/7 < 12/17 < 18/23 < 9/11',
            '9/11 < 12/17 < 18/23 < 4/7',
            '12/17 < 4/7 < 9/11 < 18/23',
          ]}
          correct={'4/7 < 12/17 < 18/23 < 9/11'}
          solution={
            <>
              <p>
                Give all numerators the same value. A convenient choice is the
                least common multiple of 4, 9, 12, and 18, which is 36. Convert:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <Math expr="\frac{4}{7}=\frac{36}{63}" />
                </li>
                <li>
                  <Math expr="\frac{9}{11}=\frac{36}{44}" />
                </li>
                <li>
                  <Math expr="\frac{12}{17}=\frac{36}{51}" />
                </li>
                <li>
                  <Math expr="\frac{18}{23}=\frac{36}{46}" />
                </li>
              </ul>
              <p>
                With a common numerator, order by denominator
                (smaller denominator → larger fraction). From least to greatest
                we get:
              </p>
              <p className="flex flex-wrap gap-2 items-center">
                <Math expr="\frac{36}{63}" />
                <span>(=</span>
                <Math expr="\frac{4}{7}" />
                <span>),</span>
                <Math expr="\frac{36}{51}" />
                <span>(=</span>
                <Math expr="\frac{12}{17}" />
                <span>),</span>
                <Math expr="\frac{36}{46}" />
                <span>(=</span>
                <Math expr="\frac{18}{23}" />
                <span>),</span>
                <Math expr="\frac{36}{44}" />
                <span>(=</span>
                <Math expr="\frac{9}{11}" />
                <span>).</span>
              </p>
              <p>Therefore the correct ordering is 4/7 &lt; 12/17 &lt; 18/23 &lt; 9/11.</p>
            </>
          }
        />

        <p>
          Tip: if the numerators are friendlier than the denominators, use a
          common numerator. If the denominators look easier, use a common
          denominator. Both methods are valid—choose the faster path for the
          numbers in front of you.
        </p>

        <ExampleCard
          number={40}
          title="Find all possible values of x (second smallest in order)"
          statements={[
            "The numbers 6/7, 18/23, 27/31, and x are arranged from least to greatest. The value x is the second item in that ordered list. Which of the following could be x?",
            "I. 27/32",
            "II. 9/10",
            "III. 9/11",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                First order the three known fractions using a common numerator.
                The numerators are 6, 18, and 27; a convenient choice is 54.
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <Math expr="\frac{6}{7}=\frac{54}{63}" />
                </li>
                <li>
                  <Math expr="\frac{18}{23}=\frac{54}{69}" />
                </li>
                <li>
                  <Math expr="\frac{27}{31}=\frac{54}{62}" />
                </li>
              </ul>
              <p>
                With common numerator 54, larger denominators are smaller
                fractions. So the order (least to greatest) of the known values
                is:
              </p>
              <p className="flex flex-wrap gap-2 items-center">
                <Math expr="\frac{54}{69}" />
                <span>(=</span>
                <Math expr="\frac{18}{23}" />
                <span>)</span>
                <span>&lt;</span>
                <Math expr="\frac{54}{63}" />
                <span>(=</span>
                <Math expr="\frac{6}{7}" />
                <span>)</span>
                <span>&lt;</span>
                <Math expr="\frac{54}{62}" />
                <span>(=</span>
                <Math expr="\frac{27}{31}" />
                <span>).</span>
              </p>
              <p>
                Since x is second smallest overall, x must lie strictly between
                <Math expr="\frac{18}{23}" /> and <Math expr="\frac{6}{7}" />.
                Convert each candidate to numerator 54 and check:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  I: <Math expr="\frac{27}{32}=\frac{54}{64}" /> lies between{" "}
                  <Math expr="\frac{54}{69}" /> and <Math expr="\frac{54}{63}" />
                  , so I works.
                </li>
                <li>
                  II: <Math expr="\frac{9}{10}=\frac{54}{60}" /> is larger than{" "}
                  <Math expr="\frac{54}{63}" />; it would not be second smallest.
                </li>
                <li>
                  III: <Math expr="\frac{9}{11}=\frac{54}{66}" /> lies between{" "}
                  <Math expr="\frac{54}{69}" /> and <Math expr="\frac{54}{63}" />
                  , so III works.
                </li>
              </ul>
              <p>
                Therefore, the possible values are I and III. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: matching numerators flips the comparison into a quick
          denominator check. Keep this alongside the common‑denominator method
          and pick the one that minimizes arithmetic.
        </p>
      </article>
    </main>
  );
}