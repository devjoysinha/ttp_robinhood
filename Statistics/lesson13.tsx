import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// NOTE: Ensure the KaTeX stylesheet is included globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "14.3.8 Average of an Evenly Spaced Set | Statistics",
  description:
    "Learn the fast ‘bookends’ method: the mean of an evenly spaced list equals the average of its first and last terms. Includes two MCQ examples with full solutions.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: false,
  });
  return (
    <span
      className="align-baseline"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: true,
  });
  return (
    <div
      className="my-3 overflow-x-auto"
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
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.8 Determining the Average of an Evenly Spaced Set
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For any list in which the numbers are spaced evenly, the mean is
          simple to compute: take the first term and the last term—often called
          the “bookends”—add them, and divide by two. This works because evenly
          spaced sequences are symmetric around their center.
        </p>

        <MustKnow>
          The average of an evenly spaced set equals the average of its
          bookends:
          <MathInline
            expr={`\\text{Average} = \\dfrac{\\text{first term} + \\text{last term}}{2}`}
            ariaLabel="Average equals the first term plus the last term, all over two."
          />
        </MustKnow>

        <p>
          Quick illustration: suppose the set is 50, 100, 150, 200, 250, 300,
          350. Since the terms increase by a constant step of 50, we can jump
          straight to the mean using the bookends:
        </p>

        <MathBlock
          expr={`\\text{Average} = \\dfrac{50 + 350}{2} = 200`}
          ariaLabel="Average equals fifty plus three hundred fifty over two, which is two hundred."
        />

        <p>
          This approach is much faster than summing all the terms and dividing
          by the count, especially for long sequences.
        </p>

        <MCQExample
          number={16}
          prompt="What is the average of 100, 200, 300, 400, and 500?"
          options={["100", "200", "300", "400", "500"]}
          correct="300"
          solution={
            <>
              <p>
                The list is evenly spaced (step 100). Use the bookends method:
              </p>
              <MathBlock
                expr={`\\text{Average} = \\dfrac{100 + 500}{2} = 300`}
                ariaLabel="Average equals one hundred plus five hundred over two, which is three hundred."
              />
              <p>Therefore, the average is 300.</p>
            </>
          }
        />

        <MCQExample
          number={17}
          prompt="What is the average of all three-digit integers?"
          options={["100", "500.5", "549.5", "550", "550.5"]}
          correct="549.5"
          solution={
            <>
              <p>
                Three-digit integers run from 100 through 999, inclusive, and
                form an evenly spaced set with step 1. Apply the bookends:
              </p>
              <MathBlock
                expr={`\\text{Average} = \\dfrac{100 + 999}{2} = \\dfrac{1099}{2} = 549.5`}
                ariaLabel="Average equals one hundred plus nine hundred ninety-nine over two, which is one thousand ninety-nine over two, equals five hundred forty-nine point five."
              />
              <p>So the mean of all three-digit numbers is 549.5.</p>
            </>
          }
        />

        <p>
          Bottom line: whenever the spacing is uniform, the “bookends” give you
          the mean immediately—no long arithmetic required.
        </p>
      </article>
    </main>
  );
}