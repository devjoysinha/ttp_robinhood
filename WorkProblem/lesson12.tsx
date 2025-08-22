import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "10.8 Adding Combined Rates | Work Problems",
  description:
    "Learn how to add and subtract work rates, build combined-rate equations, and solve multi‑worker problems. Includes three multiple‑choice examples with full KaTeX‑rendered solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.8 Adding Combined Rates
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Earlier we defined an individual work rate as “amount of work per unit
          time.” For instance, if a robot cleans one house in two hours, its
          rate is <InlineMath math="\tfrac{1\ \text{house}}{2\ \text{hours}}" />.
          If Franklin bakes one cake in six hours, his rate is{" "}
          <InlineMath math="\tfrac{1\ \text{cake}}{6\ \text{hours}}" />. If a
          pump drains <InlineMath math="\tfrac{3}{4}" /> of a pool in two hours,
          that is <InlineMath math="\tfrac{3}{4}\ \text{pool} \,/\, 2\ \text{h} = \tfrac{3}{8}\ \text{pool per hour}" />.
        </p>

        <p>
          When more than one worker (or machine) contributes to the same job at
          the same time, their rates add. If one worker finishes the job in{" "}
          <InlineMath math="x" /> hours and another in{" "}
          <InlineMath math="y" /> hours, the combined rate is{" "}
          <InlineMath math="\tfrac{1}{x} + \tfrac{1}{y}" /> (jobs per hour).
        </p>

        <MustKnow>
          Add rates, not times. For workers that operate together on the same
          task, the team’s rate equals the sum of the individual rates. In
          symbols: if times are x and y hours for a single job, the joint rate
          is <InlineMath math="\tfrac{1}{x}+\tfrac{1}{y}" /> jobs per hour.
        </MustKnow>

        <MCQExample
          number={13}
          prompt="Farah can finish a task in y hours working alone, and Horatio can finish the same task in z hours working alone. In terms of y and z, what is their combined rate when working together?"
          options={[
            "\\dfrac{y+z}{yz}",
            "\\dfrac{y+z}{y}",
            "\\dfrac{y+z}{z}",
            "\\dfrac{2yz}{y+z}",
            "\\dfrac{yz}{y+z}",
          ]}
          correct="\\dfrac{y+z}{yz}"
          solution={
            <>
              <p>
                Farah’s rate is <InlineMath math="\tfrac{1}{y}" /> jobs/hour and
                Horatio’s rate is <InlineMath math="\tfrac{1}{z}" /> jobs/hour.
                Working together, rates add:
              </p>
              <BlockMath math="\frac{1}{y}+\frac{1}{z}=\frac{z}{yz}+\frac{y}{yz}=\frac{y+z}{yz}" />
              <p>Thus the combined rate is (y + z) / (yz).</p>
            </>
          }
        />

        <p>
          Keep in mind that unknown or extra workers can be handled by adding or
          subtracting rates. If a group’s rate is known and you add or remove a
          contributor, you can isolate the missing rate with simple algebra.
        </p>

        <MCQExample
          number={14}
          prompt="Robots A and B together complete a job in 3 hours. Robots A, B, and C together complete the same job in 2 hours. How long would it take Robot C to complete the job working alone?"
          options={["2 hours", "3 hours", "4 hours", "5 hours", "6 hours"]}
          correct="6 hours"
          solution={
            <>
              <p>
                Convert times to rates. Together, A and B have rate{" "}
                <InlineMath math="\tfrac{1}{3}" /> job/hour, while A, B, and C
                together have rate <InlineMath math="\tfrac{1}{2}" /> job/hour.
                Subtract to isolate C’s rate:
              </p>
              <BlockMath math="\text{rate}_C=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}\ \text{job/hour}" />
              <p>
                A rate of <InlineMath math="\tfrac{1}{6}" /> job/hour means C
                alone needs 6 hours.
              </p>
            </>
          }
        />

        <MCQExample
          number={15}
          prompt="Working in pairs at constant rates, Robots A and B finish a job in 2 hours, Robots A and C in 3 hours, and Robots B and C in 4 hours. About how long will all three robots take to finish the job together?"
          options={["2 hours", "1.8 hours", "1 hour", "0.9 hours", "0.50 hours"]}
          correct="1.8 hours"
          solution={
            <>
              <p>
                Turn each time into a rate (jobs/hour), then add the pairwise
                equations:
              </p>
              <BlockMath math="\begin{aligned}
\frac{1}{A}+\frac{1}{B}&=\frac{1}{2}\\
\frac{1}{A}+\frac{1}{C}&=\frac{1}{3}\\
\frac{1}{B}+\frac{1}{C}&=\frac{1}{4}
\end{aligned}" />
              <p>
                Summing gives{" "}
                <InlineMath math="\tfrac{2}{A}+\tfrac{2}{B}+\tfrac{2}{C}=\tfrac{1}{2}+\tfrac{1}{3}+\tfrac{1}{4}=\tfrac{13}{12}" />.
                Divide both sides by 2:
              </p>
              <BlockMath math="\frac{1}{A}+\frac{1}{B}+\frac{1}{C}=\frac{13}{24}" />
              <p>
                So the team rate is <InlineMath math="\tfrac{13}{24}" /> jobs/hour,
                and time = <InlineMath math="\tfrac{1}{\text{rate}}=\tfrac{24}{13}\approx 1.846" />{" "}
                hours, which is about 1.8 hours.
              </p>
            </>
          }
        />

        <p>
          Big picture: treat “work per hour” as the fundamental quantity. Add
          rates to combine helpers, subtract rates to remove them, and translate
          cleanly between rate and time using{" "}
          <InlineMath math="\text{time}=\tfrac{1}{\text{rate}}" /> for a single
          job.
        </p>
      </article>
    </main>
  );
}