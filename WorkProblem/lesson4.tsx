import type { Metadata } from "next";
import { renderToString } from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "10.5 The Major Types of Work Problems | Quant",
  description:
    "A concise guide to the four core work-problem types on standardized tests: single worker, combined workers, opposing workers, and changing teams. Includes KaTeX‑rendered formulas, one quick MCQ, and a Data Sufficiency drill with reasoning.",
};

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{
        __html: renderToString(expr, {
          throwOnError: false,
          output: "html",
        }),
      }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{
        __html: renderToString(expr, {
          displayMode: true,
          throwOnError: false,
          output: "html",
        }),
      }}
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
          10.5 The Major Types of Work Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Most rate–work questions boil down to how fast work is completed and
          how those rates combine. You’ll encounter four recurring patterns.
          Below we outline each pattern and the key relationships to keep in
          mind.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="mb-1">
              Core definition:{" "}
              <MathInline expr={"R = \\dfrac{\\text{work}}{\\text{time}}"} />.
              When a single job is treated as “one whole job,” it’s common to
              write <MathInline expr={"R = \\dfrac{1}{T}"} /> for that worker.
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Working together at constant rates adds linearly:{" "}
                <MathInline
                  expr={
                    "\\dfrac{1}{T_{\\text{together}}} = \\dfrac{1}{T_A} + \\dfrac{1}{T_B} + \\cdots"
                  }
                />
                .
              </li>
              <li>
                Opposing actions (fill vs. drain) combine with signs:{" "}
                <MathInline
                  expr={
                    "\\dfrac{1}{T_{\\text{net}}} = \\dfrac{1}{T_{\\text{fill}}} - \\dfrac{1}{T_{\\text{drain}}}"
                  }
                />
                .
              </li>
              <li>
                Changing teams or switching rates over phases is piecewise: sum
                the completed fractions:{" "}
                <MathInline
                  expr={
                    "\\text{fraction done} = R_1 t_1 + R_2 t_2 + \\cdots"
                  }
                />
                .
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="types" className="space-y-4">
          <h3 id="types" className="text-xl font-semibold text-white">
            The four common types
          </h3>

          <div className="space-y-3">
            <p className="font-medium text-gray-200">
              1) Single‑worker problems
            </p>
            <p>
              One worker/object completes a job at a constant rate. If the job
              size is “1,” then time is the reciprocal of rate:{" "}
              <MathInline expr={"T = \\dfrac{1}{R}"} />.
            </p>
            <MathBlock expr={"R = \\dfrac{\\text{work}}{\\text{time}}"} />
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-2 00">
              2) Combined‑workers problems
            </p>
            <p>
              Multiple workers contribute simultaneously. Since rates add, the
              combined time satisfies{" "}
              <MathInline
                expr={
                  "\\dfrac{1}{T_{\\text{together}}} = \\sum_i \\dfrac{1}{T_i}"
                }
              />
              .
            </p>
            <MathBlock
              expr={
                "\\dfrac{1}{T_{\\text{together}}} = \\dfrac{1}{T_A} + \\dfrac{1}{T_B}"
              }
            />
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-200">
              3) Opposing‑workers problems
            </p>
            <p>
              One agent adds work while another undoes it (e.g., a pipe fills
              while a drain empties). Use signed rates to find the net effect:
            </p>
            <MathBlock
              expr={
                "R_{\\text{net}} = R_{\\text{fill}} - R_{\\text{drain}}\\quad\\Rightarrow\\quad T = \\dfrac{1}{R_{\\text{net}}}"
              }
            />
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-200">
              4) Change‑in‑workers problems
            </p>
            <p>
              The team composition or individual rates change over time. Treat
              each segment separately and add the completed portions:
            </p>
            <MathBlock
              expr={
                "\\text{fraction done} = R_1 t_1 + R_2 t_2 + \\cdots\\;=\\;1\\;\\text{(for full completion)}"
              }
            />
          </div>
        </section>

        <MCQExample
          number={37}
          prompt="Machine A can finish a job in 6 hours and Machine B can finish the same job in 4 hours. If they work together at constant rates, how many hours will it take to complete the job?"
          options={["2 2/5", "12/5", "5/12", "3", "10/3"]}
          correct="12/5"
          solution={
            <>
              <p>
                Add rates. With the whole job as 1 unit,{" "}
                <MathInline expr={"R_A = 1/6"} /> and{" "}
                <MathInline expr={"R_B = 1/4"} />. Then
              </p>
              <MathBlock
                expr={
                  "\\dfrac{1}{T} = \\dfrac{1}{6} + \\dfrac{1}{4} = \\dfrac{5}{12}\\;\\Rightarrow\\;T = \\dfrac{12}{5} = 2.4\\;\\text{hours}"
                }
              />
              <p>Thus the correct choice is 12/5.</p>
            </>
          }
        />

        <ExampleCard
          number={38}
          title="Pipes filling and draining (Data Sufficiency)"
          statements={[
            "A pipe fills a tank at 6 gallons per minute, while a drain removes water at a constant rate of d gallons per minute. If both are open, how many minutes does it take to fill a 540‑gallon empty tank?",
            "1) d = 2",
            "2) With both open, the tank holds 180 gallons after 45 minutes",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need the net fill rate and then compute time = volume ÷ net
                rate.
              </p>
              <p>
                <strong>Statement (1):</strong> If <MathInline expr={"d=2"} />,
                then <MathInline expr={"R_{\\text{net}}=6-2=4"} /> gpm. Time ={" "}
                <MathInline expr={"540/4 = 135"} /> minutes. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> 180 gallons in 45 minutes means
                the net rate is{" "}
                <MathInline expr={"180/45 = 4\\;\\text{gpm}"} />. Time ={" "}
                <MathInline expr={"540/4 = 135"} /> minutes. Sufficient.
              </p>
              <p>
                Each statement alone determines the time. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: identify which structure you’re dealing with—solo worker,
          teamwork, opposing actions, or changing crews—and apply the matching
          rate relationship. Most mistakes come from mixing these patterns, not
          from difficult arithmetic.
        </p>
      </article>
    </main>
  );
}