import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "10.3 Determining an Object’s Work Rate | Word Problems",
  description:
    "Learn to express and compute work rates as Work/Time. See three common ways work information is presented, with clear unit-based examples and quick progress calculations.",
};

function TeX({
  expr,
  display = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });

  const Wrapper = display ? "div" : "span";
  return (
    <Wrapper
      role="math"
      aria-label={ariaLabel ?? expr}
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
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.3 Determining an Object’s Work Rate
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In work problems, the “speed” of a worker, machine, or process is
          always expressed as work completed per unit of time. Keep units
          consistent and make sure you’re forming rate as “work divided by
          time,” not the other way around.
        </p>

        <MustKnow>
          <div>
            A work rate is always
            <TeX
              display
              expr={`\\text{Rate} = \\dfrac{\\text{Work}}{\\text{Time}}`}
              ariaLabel="Rate equals Work over Time"
              className="mt-2"
            />
          </div>
        </MustKnow>

        <section aria-labelledby="specific-quantity">
          <h3
            id="specific-quantity"
            className="text-xl font-semibold text-white"
          >
            1) A specific amount of work finished in a specific time
          </h3>
          <p>
            When a problem gives a concrete number of items completed in a given
            time, convert directly to “items per unit time.”
          </p>

          <ul className="list-outside list-disc space-y-3 pl-6">
            <li>
              Jackie paints 20 fences in 4 weeks:
              <TeX
                display
                expr={`\\left(\\dfrac{20\\,\\text{fences}}{4\\,\\text{weeks}}\\right)
                = 5\\,\\dfrac{\\text{fences}}{\\text{week}}`}
                ariaLabel="Twenty fences over four weeks equals five fences per week"
                className="mt-2"
              />
            </li>
            <li>
              A machine produces 15 cars in 1 month:
              <TeX
                display
                expr={`\\left(\\dfrac{15\\,\\text{cars}}{1\\,\\text{month}}\\right)
                = 15\\,\\dfrac{\\text{cars}}{\\text{month}}`}
                ariaLabel="Fifteen cars over one month equals fifteen cars per month"
                className="mt-2"
              />
            </li>
          </ul>
          <p className="text-gray-400">
            In each case, the amount of work is the completed count (20 fences,
            15 cars), and dividing by time gives the rate.
          </p>
        </section>

        <section aria-labelledby="single-job">
          <h3 id="single-job" className="text-xl font-semibold text-white">
            2) One whole job completed in a specified time
          </h3>
          <p>
            If an object can finish a single job in x time units, its rate is
            simply “one job per x time units.”
          </p>

          <ul className="list-outside list-disc space-y-5 pl-6">
            <li>
              Tom can mow a lawn in 45 minutes:
              <TeX
                display
                expr={`\\dfrac{1\\,\\text{lawn}}{45\\,\\text{minutes}}
                = \\dfrac{1}{45}\\,\\dfrac{\\text{lawn}}{\\text{minute}}`}
                ariaLabel="One lawn over forty-five minutes equals one forty-fifth lawn per minute"
                className="mt-2"
              />
              After 5 minutes, Tom has completed:
              <TeX
                display
                expr={`5\\times\\dfrac{1}{45} = \\dfrac{5}{45} = \\dfrac{1}{9}\\ \\text{of the lawn}`}
                ariaLabel="Five times one forty-fifth equals five forty-fifths equals one ninth of the lawn"
                className="mt-2"
              />
            </li>
            <li>
              A hose can fill a pool in 4 hours:
              <TeX
                display
                expr={`\\dfrac{1\\,\\text{pool}}{4\\,\\text{hours}}
                = \\dfrac{1}{4}\\,\\dfrac{\\text{pool}}{\\text{hour}}`}
                ariaLabel="One pool over four hours equals one quarter pool per hour"
                className="mt-2"
              />
              After 2 hours, the fraction filled is:
              <TeX
                display
                expr={`2\\times\\dfrac{1}{4} = \\dfrac{2}{4} = \\dfrac{1}{2}`}
                ariaLabel="Two times one quarter equals one half"
                className="mt-2"
              />
            </li>
          </ul>
        </section>

        <section aria-labelledby="fractional-work">
          <h3 id="fractional-work" className="text-xl font-semibold text-white">
            3) A fractional amount of work completed in a given time
          </h3>
          <p>
            Sometimes the prompt tells you a fraction of a job (or quantity) is
            done in a certain time. Use the same rule: rate equals work divided
            by time.
          </p>

          <ul className="list-outside list-disc space-y-5 pl-6">
            <li>
              Ying drinks three-fourths of a gallon of milk in 2 hours:
              <TeX
                display
                expr={`\\dfrac{\\tfrac{3}{4}\\,\\text{gallon}}{2\\,\\text{hours}}
                = \\dfrac{3}{8}\\,\\dfrac{\\text{gallon}}{\\text{hour}}`}
                ariaLabel="Three-fourths gallon over two hours equals three-eighths gallon per hour"
                className="mt-2"
              />
            </li>
            <li>
              A machine completes one-fourth of a job in 2 hours:
              <TeX
                display
                expr={`\\dfrac{\\tfrac{1}{4}\\,\\text{job}}{2\\,\\text{hours}}
                = \\dfrac{1}{8}\\,\\dfrac{\\text{job}}{\\text{hour}}`}
                ariaLabel="One-fourth job over two hours equals one-eighth job per hour"
                className="mt-2"
              />
              After 4 hours, total work done is:
              <TeX
                display
                expr={`4\\times\\dfrac{1}{8} = \\dfrac{4}{8} = \\dfrac{1}{2}\\ \\text{of the job}`}
                ariaLabel="Four times one-eighth equals one-half of the job"
                className="mt-2"
              />
            </li>
          </ul>
        </section>

        <p className="text-gray-400">
          Bottom line: identify the work completed and the time taken, then form
          the rate as work per time with consistent units. In the next lesson,
          we’ll use a simple matrix to organize these quantities and solve more
          complex work scenarios.
        </p>
      </article>
    </main>
  );
}