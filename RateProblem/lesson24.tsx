import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.18 Time‑Zone Adjustments in Rate–Time–Distance | Rate Problems",
  description:
    "Learn how to handle trips that cross time zones in RTD problems. Convert to a single time zone before computing elapsed time. Includes a worked multiple‑choice example.",
};

function TeX({
  expr,
  display = false,
  className,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "htmlAndMathml",
  });
  return (
    <span
      className={className}
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.18 Watch the Time Zone in Rate–Time–Distance Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a trip spans multiple time zones, the departure and arrival times
          shown on clocks are measured in different local times. If you subtract
          them directly, you’ll get the wrong travel duration. Always convert
          everything to a single time zone first.
        </p>

        <p>
          For instance, suppose someone leaves New York at 1 p.m. Eastern and
          reaches Los Angeles at 8 p.m. Pacific the same day. Subtracting 1 p.m.
          from 8 p.m. suggests 7 hours, but New York clocks run three hours
          ahead of Los Angeles. Converting the 8 p.m. Pacific arrival to Eastern
          gives 11 p.m. Eastern, so the actual elapsed time is 10 hours.
        </p>

        <MustKnow>
          In RTD problems that cross time zones, translate times to the origin’s
          time zone (or any single time zone) before computing elapsed time.
          Mixing local times without conversion leads to incorrect results.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <MCQExample
            number={31}
            prompt="Charles leaves New York City on a Tuesday at 11:00 a.m. (New York time) and drives to Los Angeles in 9,000 minutes. What is the day and local time in Los Angeles when he arrives? Note: Los Angeles is 3 hours behind New York."
            options={[
              "Monday 2 p.m.",
              "Monday 5 p.m.",
              "Tuesday 2 a.m.",
              "Tuesday 5 a.m.",
              "Wednesday 2 a.m.",
            ]}
            correct="Monday 2 p.m."
            solution={
              <>
                <p className="mb-2">
                  First convert the travel duration to hours, then to days:
                </p>
                <div className="overflow-x-auto rounded-md bg-gray-900/40 p-4">
                  <TeX
                    display
                    expr={`9000\\ \\text{min}\\times\\frac{1\\ \\text{hr}}{60\\ \\text{min}}=150\\ \\text{hr}`}
                    ariaLabel="9000 minutes times 1 hour per 60 minutes equals 150 hours"
                  />
                  <TeX
                    display
                    expr={`150\\ \\text{hr}\\times\\frac{1\\ \\text{day}}{24\\ \\text{hr}}=6.25\\ \\text{days}`}
                    ariaLabel="150 hours times 1 day per 24 hours equals 6.25 days"
                  />
                </div>

                <p className="mt-4">
                  Since 6.25 days equals 6¼ days, that’s 6 days and 6 hours:
                </p>
                <div className="overflow-x-auto rounded-md bg-gray-900/40 p-4">
                  <TeX
                    display
                    expr={`6.25\\ \\text{days}=6\\tfrac{1}{4}\\ \\text{days}=6\\ \\text{days}\\ +\\ 6\\ \\text{hours}`}
                    ariaLabel="6.25 days equals six and one quarter days, which is six days and six hours"
                  />
                </div>

                <p className="mt-4">
                  Starting from Tuesday 11:00 a.m. New York time, adding 6 days
                  lands on the following Monday at 11:00 a.m. New York time; add
                  the extra 6 hours to get Monday 5:00 p.m. New York time. Los
                  Angeles is 3 hours behind New York, so subtract 3 hours:
                </p>

                <div className="overflow-x-auto rounded-md bg-gray-900/40 p-4">
                  <TeX
                    display
                    expr={`\\text{Monday }5{:}00\\ \\text{p.m. (NY)}\\ -\\ 3\\ \\text{hours}=\\text{Monday }2{:}00\\ \\text{p.m. (LA)}`}
                    ariaLabel="Monday 5:00 p.m. New York minus three hours equals Monday 2:00 p.m. Los Angeles"
                  />
                </div>

                <p className="mt-4">
                  Therefore, he arrives on Monday at 2 p.m. Los Angeles time.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: in any RTD question involving time‑zone shifts, unify the
          time zone before you compute elapsed time or arrival times.
        </p>
      </article>
    </main>
  );
}