import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.13 Time‑Saving Tricks: Units Digits and Perfect Squares | Essential GMAT Quant",
  description:
    "Learn fast tactics for squaring numbers on the GMAT: use units digits to identify answers quickly, apply estimation for decimals, and leverage which last digits are (and aren’t) possible for perfect squares. Includes four practice questions with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.13 Look for Clever, Time‑Saving Ways to Solve Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent GMAT shortcut for squaring large numbers is to focus on the
          units digit. Test writers often give answer choices with different last digits, so
          matching the units digit of the square lets you pick the correct choice without
          computing the full product.
        </p>

        <p>
          Why this works: the last digit of <InlineMath math="n^2" /> depends only on
          the last digit of <InlineMath math="n" />. For example, any number ending in
          9 will square to a number ending in 1 because <InlineMath math="9^2=81" />.
        </p>

        <p className="italic text-gray-400">
          Example: a number ending in 4 will square to something ending in 6 because{" "}
          <InlineMath math="4^2=16" />.
        </p>

        <MustKnow>
          If the answer choices have distinct units digits, square only the last digit of the
          original number. The resulting last digit must match the correct answer—no full
          multiplication required.
        </MustKnow>

        <MCQExample
          number={74}
          prompt={
            <>
              What is <InlineMath math="18{,}117^2" />?
            </>
          }
          options={[
            "328,225,689",
            "329,330,724",
            "329,117,585",
            "330,228,466",
            "331,347,388",
          ]}
          correct="328,225,689"
          solution={
            <>
              <p>
                The units digit of <InlineMath math="18{,}117" /> is 7. Since{" "}
                <InlineMath math="7^2=49" />, the square must end in 9. Among the options,
                only 328,225,689 ends in 9, so that is the value of{" "}
                <InlineMath math="18{,}117^2" />.
              </p>
            </>
          }
        />

        <p>
          The same “rightmost digit” idea works for decimals. Square the final written digit,
          then combine that with a quick estimate to select the best match.
        </p>

        <p className="italic text-gray-400">
          Examples:
          <br />
          • <InlineMath math="58.5^2" /> ends with 5 (because <InlineMath math="5^2=25" />).
          <br />
          • <InlineMath math="117.52^2" /> ends with 4 (because <InlineMath math="2^2=4" />).
        </p>

        <MCQExample
          number={75}
          prompt={
            <>
              <InlineMath math="504.13^2" /> =
            </>
          }
          options={[
            "154,147.0569",
            "245,147.0569",
            "245,328.5761",
            "254,147.0569",
            "254,328.5761",
          ]}
          correct="254,147.0569"
          solution={
            <>
              <p>
                The last digit of 504.13 is 3, so the square must end in 9 (
                <InlineMath math="3^2=9" />). That removes choices C and E.
              </p>
              <p>
                Estimate with rounding:{" "}
                <InlineMath math="504.13 \approx 500 \Rightarrow 500^2=250{,}000" />.
                The exact square will be slightly larger than 250,000 (because 504.13 {" > "} 500)
                and must end in 9. Among the remaining options, 254,147.0569 fits.
              </p>
            </>
          }
        />

        <p>
          Another speed trick: not every last digit can appear on a perfect square. Squaring
          the digits 0 through 9 reveals all possibilities:
        </p>

        <div className="rounded-md bg-gray-800/40 p-4">
          <BlockMath math={"0^2=0,\\ 1^2=1,\\ 2^2=4,\\ 3^2=9,\\ 4^2=16,\\ 5^2=25,\\ 6^2=36,\\ 7^2=49,\\ 8^2=64,\\ 9^2=81"} />
        </div>

        <MustKnow>
          The last digit of a perfect square must be 0, 1, 4, 5, 6, or 9. It can never be 2, 3,
          7, or 8. Use this to eliminate impossible answers instantly.
        </MustKnow>

        <MCQExample
          number={76}
          prompt="Which of the following is not a perfect square?"
          options={["2,916", "4,225", "5,778", "7,569", "9,604"]}
          correct="5,778"
          solution={
            <>
              <p>
                Perfect squares cannot end in 8. Since 5,778 ends with 8, it cannot be a
                perfect square. The others all end in allowable digits, and in fact each is a
                known square.
              </p>
            </>
          }
        />

        <MCQExample
          number={77}
          prompt={
            <>
              If <InlineMath math="n" /> is a perfect square, which of the following could be{" "}
              <InlineMath math="n" />?
              <br />
              I. 658,244,133
              <br />
              II. 717,128,237
              <br />
              III. 981,756,889
            </>
          }
          options={["I only", "II only", "I and III", "III only", "I, II, and III"]}
          correct="III only"
          solution={
            <>
              <p>
                A perfect square can’t end in 3 or 7, so I and II are impossible. Choice III ends
                in 9, which is allowed. While an allowed last digit doesn’t prove a number is a
                square, the question asks which could be a square—so III only.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: let place value do the work. Match units digits to avoid heavy
          arithmetic, estimate when decimals show up, and remember which last digits are
          possible for squares. These checks are fast and decisive under time pressure.
        </p>
      </article>
    </main>
  );
}