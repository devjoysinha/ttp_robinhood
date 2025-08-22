import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "12.1 Intro to Percent Word Problems | GMAT Quant",
  description:
    "Kick off percent word problems by mastering fast conversions among percents, decimals, and fractions. Includes clear rules, worked examples, and power‑of‑10 shortcuts.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.1 Getting Started
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Chapter 1 you learned the essentials of working with percents. We’ll
          build on those skills here and expand your toolkit for word problems.
          Keep in mind that “percent” literally means “per hundred.”
        </p>

        <p>
          For any percent x, we can write it as a fraction over 100:
        </p>
        <MustKnow>
          <InlineMath math={"x\\% = \\dfrac{x}{100}"} /> (reduce the fraction
          whenever possible).
        </MustKnow>

        <p>Quick illustrations:</p>
        <div className="space-y-2">
          <BlockMath math={"5\\% = \\dfrac{5}{100} = \\dfrac{1}{20}"} />
          <BlockMath math={"50\\% = \\dfrac{50}{100} = \\dfrac{1}{2}"} />
          <BlockMath math={"500\\% = \\dfrac{500}{100} = 5"} />
        </div>

        <p>
          Converting between decimals and percents is routine once you remember
          the “multiply or divide by 100” rule.
        </p>

        <MustKnow>
          To turn a decimal or integer into a percent, multiply by{" "}
          <InlineMath math={"100"} /> and attach the percent sign.
        </MustKnow>

        <div className="space-y-2">
          <BlockMath math={"0.03 \\;\\to\\; 0.03\\times 100 \\;\\to\\; 3\\%"} />
          <BlockMath math={"0.85 \\;\\to\\; 0.85\\times 100 \\;\\to\\; 85\\%"} />
          <BlockMath math={"1.74 \\;\\to\\; 1.74\\times 100 \\;\\to\\; 174\\%"} />
        </div>

        <MustKnow>
          To convert a fraction to a percent, multiply the fraction by{" "}
          <InlineMath math={"100"} /> and add the percent sign.
        </MustKnow>

        <div className="space-y-2">
          <BlockMath math={"\\dfrac{7}{100} \\;\\to\\; 7\\%"} />
          <BlockMath math={"\\dfrac{1}{4} \\times 100 = \\dfrac{100}{4} = 25 \\;\\to\\; 25\\%"} />
          <BlockMath math={"\\dfrac{1}{3} \\times 100 = \\dfrac{100}{3} = 33\\tfrac{1}{3} \\;\\to\\; 33\\tfrac{1}{3}\\%"} />
        </div>

        <MustKnow>
          To change a percent to a decimal, drop the percent sign and divide by{" "}
          <InlineMath math={"100"} />.
        </MustKnow>

        <div className="space-y-2">
          <BlockMath math={"7\\% \\;\\to\\; \\dfrac{7}{100} \\;\\to\\; 0.07"} />
          <BlockMath math={"36\\% \\;\\to\\; 0.36"} />
          <BlockMath math={"298\\% \\;\\to\\; 2.98"} />
        </div>

        <p>
          Dividing by powers of 10 simply shifts the decimal point to the left
          by the number of zeros in the denominator.
        </p>
        <div className="space-y-2">
          <BlockMath math={"\\dfrac{5}{10} = 0.5"} />
          <BlockMath math={"\\dfrac{5}{100} = 0.05"} />
          <BlockMath math={"\\dfrac{5}{1000} = 0.005"} />
        </div>

        <p>
          With these conversions at your fingertips, you’re ready to dive into
          percent word problems in the sections that follow.
        </p>
      </article>
    </main>
  );
}