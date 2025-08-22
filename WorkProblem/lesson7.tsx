import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ math, display = false, ariaLabel }: { math: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(math, { displayMode: display, throwOnError: false });
  return (
    <span className="inline-block align-middle" aria-label={ariaLabel} role="img" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export const metadata: Metadata = {
  title: "10.7 Combined Worker Problems | Work and Rates",
  description:
    "Master combined work problems: how rates add, how to handle one worker stopping early, and how to solve when a worker’s time is unknown. Includes a multiple‑choice example and two Data Sufficiency drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">10. Work Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">10.7 Combined Worker Problems</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many real‑world tasks get done by teams. In math, when two or more “workers” operate at the same time on the same
          job, the overall job finishes faster than if either worked alone. The total work completed is simply the sum of
          the portions done by each worker.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="mb-2">Key relationships for combined work:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Work additivity:
                <span className="ml-2">
                  <K math={"\\text{Work}_{1} + \\text{Work}_{2} = \\text{Work}_{\\text{total}}"} ariaLabel="Work one plus Work two equals Work total" />
                </span>
              </li>
              <li>
                Work–rate–time link:
                <span className="ml-2">
                  <K math={"\\text{Work} = \\text{Rate} \\times \\text{Time}"} ariaLabel="Work equals rate times time" />
                </span>
              </li>
              <li>
                If workers act simultaneously, their rates add:
                <span className="ml-2">
                  <K math={"r_{\\text{combined}} = r_{1} + r_{2} \\;(+ r_{3} + \\cdots)"} ariaLabel="Combined rate equals the sum of individual rates" />
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Strategy: translate the story to rates and times, add simultaneous rates, and use
              <span className="mx-1">
                <K math={"W = r\\,t"} ariaLabel="Work equals rate times time" />
              </span>
              to solve for unknowns.
            </p>
          </div>
        </MustKnow>

        <p>
          You’ll see several variants of this idea:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Both workers contribute for the same amount of time.</li>
          <li>They start together, but one stops early.</li>
          <li>One worker’s time or rate is unknown and must be inferred.</li>
          <li>Questions stated in fractions or percentages of a job.</li>
        </ul>

        <MCQExample
          number={1}
          prompt="Machine A can finish a job in 6 hours, and Machine B can finish the same job in 4 hours. If they work together from start to finish, how long will it take to complete the job?"
          options={["1.5 hours", "1.6 hours", "2 hours", "12/5 hours", "3 hours"]}
          correct="12/5 hours"
          solution={
            <>
              <p>
                Convert to rates per hour:
                <span className="ml-1">
                  <K math={"r_A = 1/6"} ariaLabel="Rate A equals one sixth" />
                </span>
                ,
                <span className="ml-1">
                  <K math={"r_B = 1/4"} ariaLabel="Rate B equals one fourth" />
                </span>
                . Together:
                <span className="ml-1">
                  <K math={"r_{\\text{combined}} = 1/6 + 1/4 = 5/12"} ariaLabel="Combined rate equals five twelfths" />
                </span>
                job per hour.
              </p>
              <p>
                Time to finish one job:
                <span className="ml-1">
                  <K math={"t = \\dfrac{1}{5/12} = \\dfrac{12}{5}\\,\\text{hours}"} ariaLabel="Time equals one divided by five twelfths equals twelve fifths hours" />
                </span>
                , which is 2.4 hours (2 hours 24 minutes).
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Two workers start together; one stops early"
          statements={[
            "Workers A and B begin a job at the same time. After 2 hours, B stops and A finishes the job alone. How long does the entire job take?",
            "1) A alone can finish the job in 6 hours, and B alone can finish in 4 hours.",
            "2) Together, A and B can finish the job in 2.4 hours."
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We need the total time from start to completion.
              </p>
              <p>
                <strong>Statement (1):</strong> Rates are
                <span className="mx-1">
                  <K math={"r_A = 1/6"} ariaLabel="Rate A equals one sixth" />
                </span>
                and
                <span className="mx-1">
                  <K math={"r_B = 1/4"} ariaLabel="Rate B equals one fourth" />
                </span>
                job/hour. In the first 2 hours, they complete
                <span className="mx-1">
                  <K math={"2\\,(r_A + r_B) = 2\\,(1/6 + 1/4) = 2\\cdot 5/12 = 5/6"} ariaLabel="Two times the sum of their rates equals five sixths" />
                </span>
                of the job. Remaining work is
                <span className="mx-1">
                  <K math={"1 - 5/6 = 1/6"} ariaLabel="Remaining work equals one sixth" />
                </span>
                . A finishes the rest in
                <span className="mx-1">
                  <K math={"(1/6)/ (1/6) = 1\\,\\text{hour}"} ariaLabel="One sixth divided by one sixth equals one hour" />
                </span>
                . Total time:
                <span className="mx-1">
                  <K math={"2 + 1 = 3\\,\\text{hours}"} ariaLabel="Two plus one equals three hours" />
                </span>
                . Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Knowing only the combined time
                <span className="mx-1">
                  <K math={"t_{\\text{together}} = 2.4"} ariaLabel="Together they take 2.4 hours" />
                </span>
                gives
                <span className="mx-1">
                  <K math={"r_A + r_B = 1/2.4"} ariaLabel="Combined rate equals one over 2.4" />
                </span>
                , but we still can’t split the work from the first 2 hours between A and B, nor can we find A’s solo finishing time. Not sufficient.
              </p>
              <p>Therefore, statement (1) alone is sufficient; statement (2) alone is not. Answer: A.</p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Unknown time for one worker"
          statements={[
            "Workers A and B together complete a job. What is A’s time to complete the job working alone?",
            "1) Together, A and B finish the job in 3 hours, and B’s rate is twice A’s rate.",
            "2) Working together for 1 hour, they complete one‑third of the job."
          ]}
          correctLetter="A"
          solution={
            <>
              <p>We want A’s solo time.</p>
              <p>
                <strong>Statement (1):</strong> Let
                <span className="mx-1">
                  <K math={"r_A = r"} ariaLabel="Rate A equals r" />
                </span>
                and
                <span className="mx-1">
                  <K math={"r_B = 2r"} ariaLabel="Rate B equals two r" />
                </span>
                . Then
                <span className="mx-1">
                  <K math={"r_A + r_B = 3r = 1/3"} ariaLabel="Sum of rates equals one third" />
                </span>
                job/hour, so
                <span className="mx-1">
                  <K math={"r = 1/9"} ariaLabel="r equals one ninth" />
                </span>
                . Thus, A’s time alone is
                <span className="mx-1">
                  <K math={"t_A = 1/r = 9\\,\\text{hours}"} ariaLabel="t A equals one over r equals nine hours" />
                </span>
                . Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>
                <span className="mx-1">
                  <K math={"r_A + r_B = 1/3"} ariaLabel="Sum of rates equals one third" />
                </span>
                , but there’s no ratio between
                <K math={"r_A"} ariaLabel="r A" />
                and
                <span className="ml-1">
                  <K math={"r_B"} ariaLabel="r B" />
                </span>
                , so A’s individual rate (and time) can’t be isolated. Not sufficient.
              </p>
              <p>Therefore, statement (1) alone suffices; statement (2) alone does not. Answer: A.</p>
            </>
          }
        />

        <p>
          Takeaway: model jobs with rates and time. When workers act at the same time, add the rates; when one stops, split
          the timeline and compute each phase separately. For unknowns, look for a second equation (such as a rate ratio) to
          pin down individual rates.
        </p>
      </article>
    </main>
  );
}