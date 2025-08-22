import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is included once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import katex from "katex";

function K(props: { expr: string; display?: boolean; ariaLabel?: string }) {
  const { expr, display = false, ariaLabel } = props;
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });

  if (display) {
    return (
      <figure aria-label={ariaLabel} className="my-4 overflow-x-auto">
        <div
          className="inline-block min-w-fit"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </figure>
    );
  }

  return (
    <span
      aria-label={ariaLabel}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "10.1 Introduction to Work Problems | GMAT Quant",
  description:
    "A quick orientation to work problems as rate problems. See when and how to use the work–rate–time model, with examples and a short check-for-understanding.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Work problems are really rate problems dressed in different language. If you
          haven’t reviewed the core ideas from the Rates chapter, do that first—this
          section builds directly on those tools.
        </p>

        <p>
          In this context, “work” means completing a task or job. Typical scenarios:
        </p>

        <ul className="list-inside list-disc space-y-1 text-gray-300">
          <li>Landscapers clearing a yard</li>
          <li>Machines assembling products</li>
          <li>Crews painting a house</li>
          <li>Pumps filling or draining a tank</li>
        </ul>

        <p>We’ll anchor everything to the fundamental relationship:</p>

        <MustKnow>
          <div className="space-y-3">
            <div className="text-gray-100">
              Core identity:
              <div>
                <K expr="W = r \cdot t" display ariaLabel="Work equals rate times time." />
              </div>
            </div>

            <div className="text-gray-100">
              For a single job taken to completion:
              <div className="mt-1">
                <K expr="r = \dfrac{1}{T}" ariaLabel="Rate equals one divided by time." />{" "}
                and{" "}
                <K expr="T = \dfrac{1}{r}" ariaLabel="Time equals one divided by rate." />
              </div>
            </div>

            <div className="text-gray-100">
              If multiple workers/objects contribute to the same job at the same time,
              rates add:
              <div>
                <K
                  expr="r_{\text{total}} = r_1 + r_2 + \cdots + r_n"
                  display
                  ariaLabel="Total rate equals the sum of individual rates."
                />
              </div>
            </div>

            <div className="text-gray-100">
              For fill–drain (opposing) situations, use a signed sum:
              <div>
                <K
                  expr="r_{\text{net}} = r_{\text{fill}} - r_{\text{drain}}"
                  display
                  ariaLabel="Net rate equals fill rate minus drain rate."
                />
              </div>
            </div>
          </div>
        </MustKnow>

        <p>
          Throughout this chapter, you’ll translate words to rates, decide whether rates
          combine or oppose, and solve for whatever is missing—work, rate, or time.
        </p>

        <MCQExample
          number={1}
          prompt="Which equation correctly relates work (W), constant rate (r), and time (t)?"
          options={[
            "W = r + t",
            "W = r × t",
            "r = W − t",
            "t = W + r",
            "W = r ÷ t",
          ]}
          correct="W = r × t"
          solution={
            <>
              <p>
                By definition of a constant rate, work accumulates linearly with time:
                <K expr="W = r \cdot t" ariaLabel="W equals r times t." />. The other
                expressions don’t match the units or the relationship.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Concept check: combining rates"
          statements={[
            "Machines A and B work on the same job. A completes the job in 6 hours, and B completes it in 8 hours. How long would they take together?",
            "1) Their rates are constant and independent.",
            "2) They start at the same time and work until the job is done.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Convert each time to a rate for a single job:{" "}
                <K expr="r_A = 1/6" ariaLabel="Rate of A equals one sixth job per hour." />{" "}
                job/hour and{" "}
                <K expr="r_B = 1/8" ariaLabel="Rate of B equals one eighth job per hour." />{" "}
                job/hour. If both are constant and simultaneous, the combined rate is{" "}
                <K
                  expr="r_{\text{total}} = \tfrac{1}{6} + \tfrac{1}{8} = \tfrac{7}{24}"
                  ariaLabel="Combined rate equals seven twenty-fourths job per hour."
                />{" "}
                job/hour, so the time to finish one job is{" "}
                <K
                  expr="T = \dfrac{1}{r_{\text{total}}} = \dfrac{24}{7}\text{ hours}"
                  ariaLabel="Time equals twenty-four sevenths hours."
                />
                .
              </p>
              <p>
                Statement (1) ensures rates add; statement (2) ensures they overlap fully.
                Each alone is insufficient; together they determine the time. Answer: C.
              </p>
            </>
          }
        />

        <p>
          Bottom line: treat work problems as rate problems. Identify the rate, time, and
          whether rates add or subtract. Then apply{" "}
          <K expr="W = r \cdot t" ariaLabel="W equals r times t." /> to finish.
        </p>
      </article>
    </main>
  );
}