import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.12 Estimation | Essential GMAT Quant Skills",
  description:
    "Master fast, reliable estimation for the GMAT. Learn rounding principles for multiplication, division, powers, and additive tweaks, then cement the ideas with three multiple‑choice practice questions and full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.12 Estimation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Estimation is a high‑leverage time saver on the GMAT. When exact
          arithmetic is messy, round numbers to convenient benchmarks, exploit
          cancellation, and lean on place‑value intuition to get safely within
          the right answer range.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Round toward simple anchors (10, 100, 1,000, 0.5, 1, etc.) to
              simplify products, quotients, and powers.
            </li>
            <li>
              If answer choices are spaced by orders of magnitude, coarse
              rounding is usually enough.
            </li>
            <li>
              Multiply/divide: round factors in opposite directions when
              possible to keep error balanced.
            </li>
            <li>
              Add/subtract: very small adjustments barely change large bases
              (relative‑size thinking).
            </li>
            <li>
              Use the “approximately equal” symbol <InlineMath math="\approx" />{" "}
              to show where you’re estimating.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="mult-div">
          <h3
            id="mult-div"
            className="text-xl font-semibold text-white mt-8 mb-2"
          >
            Estimating Products and Quotients
          </h3>

          <p className="mt-3">
            Example 1 (product): round both factors to nearby, friendlier
            values.
          </p>
          <BlockMath math={"29.5555\\times 97\\;\\approx\\;30\\times100\\;=\\;3000"} />
          <p className="text-sm text-gray-400">
            The exact product is 2,867 — close to 3,000.
          </p>

          <p className="mt-4">Example 2 (quotient): same idea for division.</p>
          <BlockMath math={"\\dfrac{113}{11}\\;\\approx\\;\\dfrac{100}{10}\\;=\\;10"} />
          <p className="text-sm text-gray-400">
            The exact value ~ 10.27 — again, near 10.
          </p>

          <p className="mt-4">
            Example 3 (mixing both): push each term to a convenient round
            number.
          </p>
          <BlockMath math={"\\dfrac{198\\times 289}{0.998}\\;\\approx\\;\\dfrac{200\\times 300}{1}\\;=\\;60{,}000"} />
          <p className="text-sm text-gray-400">
            The exact value ~ 57,337 — close to 60,000.
          </p>
        </section>

        <section aria-labelledby="powers">
          <h3 id="powers" className="text-xl font-semibold text-white mt-8 mb-2">
            Estimating with Powers
          </h3>
          <p>
            Rounding before squaring keeps calculations light and the error
            controlled.
          </p>
          <BlockMath math={"\\dfrac{989^{2}}{11^{2}}\\;\\approx\\;\\dfrac{1000^{2}}{10^{2}}\\;=\\;\\dfrac{1{,}000{,}000}{100}\\;=\\;10{,}000"} />
          <p className="text-sm text-gray-400">
            The true value is about 8,083.6 — the estimate gets you the scale
            instantly.
          </p>
        </section>

        <section aria-labelledby="add-sub">
          <h3 id="add-sub" className="text-xl font-semibold text-white mt-8 mb-2">
            Estimating Sums and Differences
          </h3>
          <p>Small tweaks barely move a large base.</p>
          <BlockMath math={"1{,}000\\; +\\; \\dfrac{1}{1{,}000}\\;\\approx\\;1{,}000"} />
          <p className="text-sm text-gray-400">
            Exact value: 1,000.001 — indistinguishable at the scale of 1,000.
          </p>
          <BlockMath math={"1{,}200\\; -\\; \\dfrac{1}{11{,}111}\\; -\\; 0.004\\;\\approx\\;1{,}200"} />
          <p className="text-sm text-gray-400">
            Exact value ~ 1,199.9959 — extremely close to 1,200.
          </p>
        </section>

        <section aria-labelledby="practice" className="pt-2">
          <h3 id="practice" className="text-xl font-semibold text-white mt-6">
            Quick Practice
          </h3>

          <MCQExample
            number={71}
            prompt={
              <>
                <span className="block mb-2">Which is closest to:</span>
                <BlockMath math="\\dfrac{112{,}178{,}889\\times 0.8896}{0.9876}" />
              </>
            }
            options={[
              "1,000,000",
              "10,000,000",
              "100,000,000",
              "1,000,000,000",
              "10,000,000,000",
            ]}
            correct="100,000,000"
            solution={
              <>
                <p>
                  Treat the big factor as “about 1.12×10^8”, multiply by a
                  number that’s roughly 11% below 1, and divide by a number
                  that’s roughly 1% below 1. The +12% and −11% in the numerator
                  essentially cancel, and the denominator is ~1:
                </p>
                <BlockMath math="\\dfrac{(\\text{+12%})(\\text{−11%})}{\\text{−1%}}\\;\\approx\\; (\\text{about }1)\\;\\Rightarrow\\;\\text{~}10^8" />
                <p>So 100,000,000 is the best match.</p>
              </>
            }
          />

          <MCQExample
            number={72}
            prompt={
              <>
                <span className="block mb-2">Which is closest to:</span>
                <BlockMath math="\\dfrac{2013^{2}}{20.5\\times 199^{2}}" />
              </>
            }
            options={["2", "5", "10", "20", "50"]}
            correct="5"
            solution={
              <>
                <p>Round to easy anchors:</p>
                <BlockMath math="\\dfrac{2013^{2}}{20.5\\times 199^{2}}\\;\\approx\\;\\dfrac{2000^{2}}{20\\times 200^{2}}\\;=\\;\\dfrac{(2000\\cdot 2000)}{20\\cdot (200\\cdot 200)}" />
                <p>Cancel a factor of 2000/200 = 10 twice:</p>
                <BlockMath math="\\dfrac{10\\cdot 10}{20}=\\dfrac{100}{20}=5" />
              </>
            }
          />

          <MCQExample
            number={73}
            prompt={
              <>
                <span className="block mb-2">Which of the following is greatest?</span>
                <ul className="list-disc pl-6">
                  <li>
                    <InlineMath math={"20{,}617\\times \\dfrac{1}{3147}"} />
                  </li>
                  <li>
                    <InlineMath math={"20{,}617+ \\dfrac{1}{3147}"} />
                  </li>
                  <li>
                    <InlineMath math={"20{,}617- \\dfrac{1}{3147}"} />
                  </li>
                  <li>
                    <InlineMath math={"20{,}617\\div \\dfrac{1}{3147}"} />
                  </li>
                  <li>
                    <InlineMath math={"20{,}617+ \\left(\\dfrac{1}{3147}\\right)^{2}"} />
                  </li>
                </ul>
              </>
            }
            options={[
              "A",
              "B",
              "C",
              "D",
              "E",
            ]}
            correct="D"
            solution={
              <>
                <p>
                  The fraction <InlineMath math={"\\tfrac{1}{3147}"} /> is tiny.
                  Adding or subtracting it barely changes 20,617, and multiplying by it makes a
                  small number. Dividing by a tiny fraction, however, is the same
                  as multiplying by a large number:
                </p>
                <BlockMath math={"20{,}617\\div \\dfrac{1}{3147}=20{,}617\\times 3147"} />
                <p>That’s enormous compared with the other options. So D is largest.</p>
              </>
            }
          />
        </section>

        <p className="mt-8">
          Bottom line: round smartly, compare scales, and only compute exactly
          when you must. Estimation gets you to the correct choice fast.
        </p>
      </article>
    </main>
  );
}