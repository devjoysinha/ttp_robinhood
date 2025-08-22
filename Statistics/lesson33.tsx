import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.10.1 Units of Standard Deviation | Statistics",
  description:
    "Understand what “x standard deviations from the mean” means, how to compute bounds using mean and SD, and practice with two GMAT‑style problems.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.10.1 Units of Standard Deviation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Standard deviation (SD) is a measure of spread: it captures how far the
          data typically sit from the mean. When values cluster tightly around the
          average, the SD is small; when values are widely dispersed, the SD is
          larger. If every entry in the data set is identical, the spread is zero,
          so the SD is 0.
        </p>

        <MustKnow>
          You’ll often see positions described in “units of standard deviation”
          from the mean (for example, 1 SD above the mean). We commonly reason
          about ±1, ±2, and ±3 SD from the mean. Extreme points beyond ±3 SD are
          rare in many real‑world distributions.
        </MustKnow>

        <p>
          Given a mean and a standard deviation, you can compute the bounds that
          lie “x standard deviations from the mean” using the following expressions:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <BlockMath math="\text{High bound} = \text{mean} + x(\text{SD})" />
          <BlockMath math="\text{Low bound} = \text{mean} - x(\text{SD})" />
        </div>

        <p>
          Example: Suppose a stock’s 10‑year average return is 50% with SD 10%.
          One SD from the mean gives bounds{" "}
          <InlineMath math="50\% \pm 1\times 10\% = [40\%, 60\%]" />. Two SD give{" "}
          <InlineMath math="50\% \pm 2\times 10\% = [30\%, 70\%]" />, and three SD
          give <InlineMath math="50\% \pm 3\times 10\% = [20\%, 80\%]" />.
        </p>

        <MCQExample
          number={59}
          prompt="Class C has the math scores 86, 79, 90, 92, 76, 81, and 83. The class mean is 87, and the standard deviation is exactly 5. How many of these scores are within one standard deviation of the mean?"
          options={["1", "2", "4", "5", "6"]}
          correct="4"
          solution={
            <>
              <p>
                One SD from the mean sets the inclusive interval:
              </p>
              <BlockMath math="\text{Low} = 87 - 1(5) = 82,\quad \text{High} = 87 + 1(5) = 92" />
              <p>
                Scores within [82, 92]: 86, 90, 92, 83. That’s 4 scores. Answer: 4.
              </p>
            </>
          }
        />

        <p>
          We can similarly extend to three SD from the mean using the same
          expressions:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <BlockMath math="\text{High} = 87 + 3(5) = 102" />
          <BlockMath math="\text{Low} = 87 - 3(5) = 72" />
        </div>

        <p>
          Since every listed score lies between 72 and 102, all of the scores are
          within three SD of the mean.
        </p>

        <MCQExample
          number={60}
          prompt="In a long‑distance swim series, a time of 10.5 minutes is 2.5 standard deviations above the mean, and a time of 4.5 minutes is 1.5 standard deviations below the mean. What is the mean time?"
          options={[
            "5 minutes",
            "5 1/4 minutes",
            "6 minutes",
            "6 1/2 minutes",
            "6 3/4 minutes",
          ]}
          correct="6 3/4 minutes"
          solution={
            <>
              <p>Let m be the mean and s be the standard deviation.</p>
              <BlockMath math="m + 2.5s = 10.5" />
              <BlockMath math="m - 1.5s = 4.5" />
              <p>Set them equal by isolating m and solve for s:</p>
              <BlockMath math="10.5 - 2.5s = 4.5 + 1.5s \;\Rightarrow\; 6 = 4s \;\Rightarrow\; s = 1.5" />
              <p>Substitute back to find m:</p>
              <BlockMath math="m = 4.5 + 1.5(1.5) = 4.5 + 2.25 = 6.75 = 6\tfrac{3}{4}\text{ minutes}" />
              <p>Answer: 6 3/4 minutes.</p>
            </>
          }
        />

        <MustKnow>
          To find “within x SD of the mean,” compute the inclusive bounds{" "}
          <InlineMath math="\text{mean} \pm x(\text{SD})" /> and then check which
          data values fall in that interval.
        </MustKnow>
      </article>
    </main>
  );
}