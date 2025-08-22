import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.4 Matrix Approach to Work Problems | Work & Rates",
  description:
    "Use a compact rate–time–work matrix to organize information and solve work problems quickly. Includes a multiple‑choice example and guided reasoning.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel}
      className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
  });
  return (
    <div
      aria-label={ariaLabel}
      className="my-4 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function WorkMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Rate–Time–Work Matrix</caption>
        <thead>
          <tr className="bg-gray-800/50 text-gray-200">
            <th scope="col" className="px-4 py-3 font-semibold">
              Scenario
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Rate
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Time
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Work
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr className="text-gray-300">
            <th scope="row" className="px-4 py-3 font-medium">
              Worker or Group
            </th>
            <td className="px-4 py-3">—</td>
            <td className="px-4 py-3">—</td>
            <td className="px-4 py-3">—</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-3 text-sm text-gray-400">
        Use Work = Rate × Time for any single row to solve for the missing cell.
      </div>
    </div>
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
          10.4 The Matrix Approach to Solving Work Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Just as we organize rate–time–distance questions in a table, we can
          use a compact matrix for work problems to keep relationships clear and
          avoid algebraic slip‑ups. The guiding identity is:
        </p>

        <MathBlock ariaLabel="Work equals Rate times Time" expr="\\text{Work} = \\text{Rate} \\times \\text{Time}" />

        <p>
          In the matrix, each column aligns with one of the variables in{" "}
          <MathInline expr="W = R\\times T" ariaLabel="W equals R times T" />.
          Each row corresponds to one worker or one team. If you know any two
          entries in a row, you can calculate the third using{" "}
          <MathInline expr="W = R\\times T" />.
        </p>

        <WorkMatrix />

        <MustKnow>
          Rates and times can change when workers team up. Always distinguish a
          person’s solo rate/time from the combined rate/time when people work
          together. Don’t mix them.
        </MustKnow>

        <p>
          Let’s see how this plays out on a quick example. We’ll compute solo
          and combined rates directly from the information given.
        </p>

        <MCQExample
          number={1}
          prompt="Working alone, Bob can finish a job in 3 hours. Together, Bob and Tom can finish the same job in 1 hour. What are Bob’s solo rate and their combined rate?"
          options={[
            "Bob: 1/4 job/hr; Together: 1/3 job/hr",
            "Bob: 1/2 job/hr; Together: 1 job/hr",
            "Bob: 1/3 job/hr; Together: 1 job/hr",
            "Bob: 1/3 job/hr; Together: 1/2 job/hr",
            "Bob: 1/4 job/hr; Together: 1/2 job/hr",
          ]}
          correct="Bob: 1/3 job/hr; Together: 1 job/hr"
          solution={
            <>
              <p>
                Bob alone completes 1 job in 3 hours, so his solo rate is{" "}
                <MathInline expr="\\tfrac{1}{3}\\;\\text{job/hour}" />. Working
                together, Bob and Tom finish the job in 1 hour, so their
                combined rate is{" "}
                <MathInline expr="1\\;\\text{job/hour}" />.
              </p>
              <p>
                If Tom’s solo time were <MathInline expr="x" /> hours, then his
                solo rate would be{" "}
                <MathInline expr="\\tfrac{1}{x}\\;\\text{job/hour}" /> and
                together we’d have{" "}
                <MathInline expr="\\tfrac{1}{3} + \\tfrac{1}{x} = 1" />. You
                don’t need to solve for <MathInline expr="x" /> here, but this
                equation shows how solo rates add to a combined rate.
              </p>
              <p>Therefore, the correct choice is the one stating 1/3 and 1.</p>
            </>
          }
        />

        <p>
          When you build your matrix, fill known solo information in one row and
          combined information in another. Then use{" "}
          <MathInline expr="W = R\\times T" /> within a row, and add rates across
          rows only when workers operate at the same time on the same job.
        </p>

        <ExampleCard
          number={2}
          title="Solo vs. combined entries in the work matrix"
          statements={[
            "You are setting up a matrix for a job involving Alice and Ben.",
            "1) Alice’s solo time is 4 hours.",
            "2) Together, Alice and Ben finish in 1.5 hours.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                This isn’t a formal Data Sufficiency problem; it’s a setup
                reminder. Put Alice’s solo info in one row: solo rate is{" "}
                <MathInline expr="\\tfrac{1}{4}\\;\\text{job/hour}" />. Put the
                team’s info in another row: combined rate is{" "}
                <MathInline expr="\\tfrac{1}{1.5}=\\tfrac{2}{3}\\;\\text{job/hour}" />
                . Keep solo and team rows distinct; don’t overwrite one with the
                other.
              </p>
            </>
          }
        />

        <p>
          Bottom line: the matrix keeps roles straight and arithmetic simple.
          Track who’s working, for how long, and whether the rate is solo or
          combined. Then let{" "}
          <MathInline expr="W = R\\times T" ariaLabel="W equals R times T" /> do
          the rest.
        </p>
      </article>
    </main>
  );
}