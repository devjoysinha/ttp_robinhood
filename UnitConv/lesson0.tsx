import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "8.1 Unit Conversions | GMAT Quant",
  description:
    "Master unit conversions on the GMAT. Learn the factor‑label method, cancel units confidently, and practice with one quick MCQ and two Data Sufficiency drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Unit Conversions
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.1 Converting Units
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many GMAT quantities come with units: dollars, cents, grams, pints,
          miles per hour, and more. Questions often ask you to translate one
          measurement into another—for instance, cents to dollars or miles per
          hour to feet per second. The skill you need is a reliable, repeatable
          way to shift between units without changing the underlying quantity.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">The factor‑label (dimensional analysis) method</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Multiply by conversion fractions that are equal to 1, so the value stays the same while units change.
              </li>
              <li>
                Arrange factors so that unwanted units cancel. Track units in the
                numerator/denominator as you go.
              </li>
              <li>
                Convert everything into a single system before computing; round only at the end.
              </li>
            </ul>
            <div className="mt-3">
              <InlineMath math={"1 = \\tfrac{100\\ \\text{cents}}{1\\ \\text{dollar}} = \\tfrac{5280\\ \\text{ft}}{1\\ \\text{mile}} = \\tfrac{60\\ \\text{min}}{1\\ \\text{hour}}"} />
            </div>
          </div>
        </MustKnow>

        <MCQExample
          number={31}
          prompt="Convert 45 miles per hour to feet per second."
          options={["44", "60", "66", "72", "88"]}
          correct="66"
          solution={
            <>
              <p>Use cancellation to move from miles/hour to feet/second:</p>
              <BlockMath math={"45\\ \\tfrac{\\text{miles}}{\\text{hour}}\\times\\tfrac{5280\\ \\text{ft}}{1\\ \\text{mile}}\\times\\tfrac{1\\ \\text{hour}}{3600\\ \\text{s}} = \\tfrac{45\\cdot 5280}{3600}\\ \\tfrac{\\text{ft}}{\\text{s}} = 66\\ \\tfrac{\\text{ft}}{\\text{s}}"} />
              <p>The miles and hours cancel cleanly, leaving feet per second.</p>
            </>
          }
        />

        <p>
          The heart of unit conversion is alignment: chain together equalities so
          that each unwanted unit cancels. If you keep the units visible on each
          fraction, the arithmetic typically falls into place.
        </p>

        <ExampleCard
          number={32}
          title="Speed in mph from mixed units"
          statements={[
            "A bicycle travels d kilometers in t minutes. What is its speed, in miles per hour?",
            "1) d / t = 0.5",
            "2) 1 mile = 1.6 kilometers",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want miles per hour. Start with <InlineMath math={"\\tfrac{d\\ \\text{km}}{t\\ \\text{min}}"} /> and
                convert both distance and time:
              </p>
              <BlockMath math={"\\text{mph} = \\tfrac{d\\ \\text{km}}{t\\ \\text{min}}\\times \\tfrac{1\\ \\text{mile}}{1.6\\ \\text{km}}\\times \\tfrac{60\\ \\text{min}}{1\\ \\text{hour}} = \\tfrac{d}{t}\\cdot \\tfrac{60}{1.6}"} />
              <p>
                Statement (1) gives <InlineMath math={"\\tfrac{d}{t} = 0.5"} /> but no km→mile conversion,
                so we can’t finish. Not sufficient.
              </p>
              <p>
                Statement (2) provides the km↔mile link but no numeric value for <InlineMath math={"\\tfrac{d}{t}"} />.
                Not sufficient.
              </p>
              <p>
                Together, <InlineMath math={"\\text{mph} = 0.5\\cdot \\tfrac{60}{1.6} = 18.75"} />. Sufficient.
                Answer: C.
              </p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Currency conversion to dollars"
          statements={[
            "What is the value of 250 cents in dollars?",
            "1) 1 dollar = 100 cents",
            "2) 4 quarters = 1 dollar",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We need to express 250 cents in dollars. Using conversion factors of 1:
              </p>
              <BlockMath math={"250\\ \\text{cents}\\times \\tfrac{1\\ \\text{dollar}}{100\\ \\text{cents}} = 2.5\\ \\text{dollars}"} />
              <p>
                Statement (1) alone directly converts cents to dollars. Sufficient.
              </p>
              <p>
                Statement (2) relates quarters and dollars but doesn’t connect cents to quarters.
                Without an additional fact, we cannot convert 250 cents to dollars. Not sufficient.
              </p>
              <p>Therefore, (1) alone is sufficient and (2) alone is not. Answer: A.</p>
            </>
          }
        />

        <p>
          Bottom line: treat conversion ratios as “clever 1s.” Multiply by these
          fractions so that units cancel step by step, and only round when your
          final unit is in place.
        </p>
      </article>
    </main>
  );
}