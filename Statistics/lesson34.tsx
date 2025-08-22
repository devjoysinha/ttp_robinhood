import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "14.10.2 Adding or Subtracting a Constant Doesn’t Change Standard Deviation | Statistics",
  description:
    "Understand why adding or subtracting the same constant to every value in a data set leaves the standard deviation unchanged. Includes one multiple‑choice example and one Data Sufficiency drill with complete reasoning.",
};

// Simple KaTeX helpers (server-rendered)
function InlineMath({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const __html = katex.renderToString(expr, { throwOnError: false });
  return <span aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html }} />;
}

function BlockMath({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const __html = katex.renderToString(expr, { displayMode: true, throwOnError: false });
  return (
    <div role="img" aria-label={ariaLabel}>
      <div dangerouslySetInnerHTML={{ __html }} />
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.10.2 Adding or Subtracting a Constant and Standard Deviation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two very different data sets can share the same standard deviation. A key reason:
          shifting every value by the same amount moves the mean by that amount but leaves
          the spread about the mean unchanged.
        </p>

        <div className="rounded-md border border-gray-700/60 bg-gray-900/40 p-4">
          <p className="mb-2 font-semibold text-gray-200">Quick demo</p>
          <p className="mb-2">
            Consider set A: {`{`}500, 650, 750, 900{`}`}. If we add 7,500 to each entry,
            we get set B: {`{`}8,000, 8,150, 8,250, 8,400{`}`}. The averages differ by 7,500,
            but their standard deviations are identical because each value is shifted equally.
          </p>
          <p>
            Likewise, subtracting the same constant from every term creates yet another set
            with the very same standard deviation.
          </p>
        </div>

        <MustKnow>
          If X is a data set and c is a constant, then the standard deviation is invariant under
          addition or subtraction of c:
          <span className="block pt-3">
            <BlockMath
              ariaLabel="The standard deviation of X plus c equals the standard deviation of X, and likewise for X minus c."
              expr="\,\sigma(X+c)=\sigma(X)\quad\text{and}\quad \sigma(X-c)=\sigma(X)\,"
            />
          </span>
          Why? Adding c to each value increases the mean by c, and all deviations from the mean
          remain the same:
          <span className="block pt-2">
            <InlineMath
              ariaLabel="Deviation after shift equals deviation before shift."
              expr="(x_i+c)-\overline{(X+c)}=(x_i+c)-(\overline{X}+c)=x_i-\overline{X}"
            />
          </span>
        </MustKnow>

        <MCQExample
          number={61}
          prompt="Let A = {12, 15, 20, 21, 10}. Define B = {12 + x, 15 + x, 20 + x, 21 + x, 10 + x}. If sd(A) = n, what is sd(B)?"
          options={["n", "n + x/5", "n + x/2.5", "n + x", "n + 2x"]}
          correct="n"
          solution={
            <>
              <p>
                B is created by adding the same constant x to every element of A. Shifting a data set
                by a constant moves the mean but preserves the dispersion around the mean. Therefore,
                <InlineMath expr="\ \sigma(B)=\sigma(A)=n" ariaLabel="sigma of B equals sigma of A equals n" />.
              </p>
              <p className="mt-2">Answer: n.</p>
            </>
          }
        />

        <p>
          The invariance to shifts holds regardless of whether the original values are all the same
          or all different; the spread relative to the (shifted) mean does not change.
        </p>

        <ExampleCard
          number={62}
          title="Comparing standard deviations across two 3-game spans"
          statements={[
            "Over three games, Sara scored x, y, and z goals. The standard deviation for those three games was n. Was the standard deviation for the next three games greater than n?",
            "1) In the next three games, she scored x + k, y + k, and z + k.",
            "2) In each of the next three games, she scored exactly 2 goals.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p className="mb-2">
                We must decide whether the next three-game standard deviation exceeded n.
              </p>

              <p>
                <strong>Statement (1):</strong> Each new score is the corresponding original score plus the
                same constant k. A uniform shift does not alter standard deviation, so the next span’s
                standard deviation equals n. The answer to the question “Is it greater than n?” is No.
                Because we can answer definitively, statement (1) is sufficient.
              </p>

              <p>
                <strong>Statement (2):</strong> The three values are 2, 2, and 2. A set with all equal values
                has standard deviation 0. If n = 0 (original three scores equal), then 0 is not greater than 0.
                If n {">"} 0 (original scores not all equal), then 0 is still not greater than n.
                In every case, the answer is No. Statement (2) is sufficient.
              </p>

              <p><strong>Answer: D</strong> (Each statement alone is sufficient.)</p>
            </>
          }
        />

        <div className="space-y-3">
          <p className="font-semibold text-gray-200">Key takeaways</p>
          <ul className="list-disc pl-6">
            <li>
              Adding or subtracting a constant shifts the mean:
              <InlineMath expr="\ \overline{X\pm c}=\overline{X}\pm c" ariaLabel="mean of X plus or minus c equals mean of X plus or minus c" />.
            </li>
            <li>
              The deviations from the mean are unchanged, so the standard deviation stays the same:
              <InlineMath expr="\ \sigma(X\pm c)=\sigma(X)" ariaLabel="sigma of X plus or minus c equals sigma of X" />.
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}