import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.1 Introduction | Statistics",
  description:
    "Overview of the five core statistics you’ll see on the GMAT: mean, median, mode, range, and standard deviation. Includes concise definitions, key formulas in KaTeX, and a quick check-for-understanding.",
};

// Server component-safe KaTeX renderer with a11y-friendly output
function KaTeX({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "htmlAndMathml",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={className}
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
          14.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Questions about statistics show up frequently on the GMAT. This
          chapter focuses on five must‑know topics: mean, median, mode, range,
          and standard deviation. Below you’ll find what each one measures,
          along with the most important formulas and habits that will save you
          time on test day.
        </p>

        <section aria-labelledby="mean-heading" className="space-y-3">
          <h3
            id="mean-heading"
            className="text-lg font-semibold text-white md:text-xl"
          >
            1) Average (Arithmetic Mean)
          </h3>
          <p>
            The arithmetic mean is the “balance point” of the data: add the
            values and divide by how many there are.
          </p>
          <div className="rounded-md bg-gray-800/50 p-4 text-gray-200">
            <div className="flex flex-col gap-2">
              <div>
                <KaTeX
                  expr="\,\bar{x}=\dfrac{1}{n}\sum_{i=1}^{n} x_i"
                  ariaLabel="x bar equals one over n times the sum from i equals one to n of x sub i"
                />
              </div>
              <div>
                <KaTeX
                  expr="\,\text{Sum} = n\cdot \bar{x}"
                  ariaLabel="Sum equals n times x bar"
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="median-heading" className="space-y-3">
          <h3
            id="median-heading"
            className="text-lg font-semibold text-white md:text-xl"
          >
            2) Median
          </h3>
          <p>
            The median is the middle value once the list is sorted. With an odd
            number of terms, it’s the single center value; with an even number
            of terms, it’s the average of the two central values.
          </p>
          <div className="rounded-md bg-gray-800/50 p-4 text-gray-200">
            <ul className="list-disc pl-5">
              <li className="mt-1">
                Odd count: the middle index is{" "}
                <KaTeX
                  expr="(n+1)/2"
                  ariaLabel="open parenthesis n plus one close parenthesis over two"
                />
              </li>
              <li className="mt-1">
                Even count: median is{" "}
                <KaTeX
                  expr="\dfrac{x_{(\frac{n}{2})} + x_{(\frac{n}{2}+1)}}{2}"
                  ariaLabel="the average of x at index n over 2 and x at index n over 2 plus 1"
                />
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="mode-heading" className="space-y-3">
          <h3
            id="mode-heading"
            className="text-lg font-semibold text-white md:text-xl"
          >
            3) Mode
          </h3>
          <p>
            The mode is the value that appears most often. A set can have one
            mode, multiple modes, or none if all frequencies match.
          </p>
        </section>

        <section aria-labelledby="range-heading" className="space-y-3">
          <h3
            id="range-heading"
            className="text-lg font-semibold text-white md:text-xl"
          >
            4) Range
          </h3>
          <p>
            The range measures spread using only the extremes: maximum minus
            minimum.
          </p>
          <div className="rounded-md bg-gray-800/50 p-4 text-gray-200">
            <KaTeX
              expr="\text{Range} = \max(x_i) - \min(x_i)"
              ariaLabel="Range equals max of x sub i minus min of x sub i"
            />
          </div>
        </section>

        <section aria-labelledby="sd-heading" className="space-y-3">
          <h3
            id="sd-heading"
            className="text-lg font-semibold text-white md:text-xl"
          >
            5) Standard deviation
          </h3>
          <p>
            Standard deviation quantifies how far data points typically sit from
            the mean. On the GMAT, you’ll often compare spreads conceptually,
            but it helps to recognize the formulas:
          </p>
          <div className="rounded-md bg-gray-800/50 p-4 text-gray-200 space-y-2">
            <div>
              Population:
              <div className="mt-1">
                <KaTeX
                  expr="\sigma=\sqrt{\dfrac{1}{n}\sum_{i=1}^{n}\left(x_i-\mu\right)^2}"
                  ariaLabel="sigma equals the square root of one over n times the sum from i equals one to n of quantity x sub i minus mu squared"
                />
              </div>
            </div>
            <div>
              Sample (unbiased estimator):
              <div className="mt-1">
                <KaTeX
                  expr="s=\sqrt{\dfrac{1}{n-1}\sum_{i=1}^{n}\left(x_i-\bar{x}\right)^2}"
                  ariaLabel="s equals the square root of one over n minus one times the sum from i equals one to n of quantity x sub i minus x bar squared"
                />
              </div>
            </div>
          </div>
        </section>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li className="mt-1">
              Sort before finding the median and, when useful, the mode.
            </li>
            <li className="mt-1">
              Outliers pull the mean and standard deviation; the median usually
              resists them; the range changes only if an extreme changes.
            </li>
            <li className="mt-1">
              Keep the quick identities handy:
              <span className="ml-2">
                <KaTeX
                  expr="\text{Sum}=n\cdot\bar{x}"
                  ariaLabel="Sum equals n times x bar"
                  className="ml-2"
                />
              </span>
              <span className="ml-4">
                <KaTeX
                  expr="\text{Range}=\max-\min"
                  ariaLabel="Range equals max minus min"
                />
              </span>
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="The numbers 4, 8, 10, and 18 have arithmetic mean:"
          options={["8", "9", "10", "11", "12"]}
          correct="10"
          solution={
            <>
              <p>
                Add the values and divide by the count:
                <span className="ml-2">
                  <KaTeX
                    expr="\bar{x}=\dfrac{4+8+10+18}{4}=\dfrac{40}{4}=10"
                    ariaLabel="x bar equals open parenthesis 4 plus 8 plus 10 plus 18 close parenthesis over 4 equals 40 over 4 equals 10"
                  />
                </span>
              </p>
            </>
          }
        />

        <p>
          As you progress through this chapter, you’ll practice choosing the
          right statistic for the job, spotting when ordering matters, and
          reasoning about how changes to a set affect each measure.
        </p>
      </article>
    </main>
  );
}