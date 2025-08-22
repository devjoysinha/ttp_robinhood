import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.11 Change in Workers | Work Problems",
  description:
    "Learn two reliable strategies for problems where the number of workers (or machines) changes: find the rate of one worker or use a proportion. Includes three GMAT‑style multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.11 Change in Workers Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section className="space-y-4">
          <p>
            In “change in workers” questions, you’re told how fast a group can
            complete a task and then asked what happens when team size changes
            (workers join or leave) or when the target amount of work changes.
            All workers or machines are assumed to operate at the same constant
            individual rate, so the total rate scales with the count of workers.
          </p>

          <MustKnow>
            <div className="space-y-3">
              <p className="font-semibold">Two dependable approaches:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Find the group rate, divide to get the rate of one worker, and
                  then scale up or down to the new team size.
                </li>
                <li>
                  Use a proportion that compares “number of workers” to “group
                  rate.” Because workers are identical, the ratio stays
                  consistent:
                  <div className="mt-2">
                    <BlockMath math="\dfrac{\text{workers}_x}{\text{rate}_x}=\dfrac{\text{workers}_y}{\text{rate}_y}" />
                  </div>
                </li>
              </ul>
              <div className="pt-2">
                The core work formula is:
                <BlockMath math="\text{rate}=\dfrac{\text{work}}{\text{time}} \quad\Longleftrightarrow\quad \text{time}=\dfrac{\text{work}}{\text{rate}}" />
              </div>
            </div>
          </MustKnow>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">
              A quick mini‑example
            </h3>
            <p>
              Five identical workers can complete one job in 6 days. If three
              workers leave before work begins, what is the combined rate of the
              two remaining workers?
            </p>
            <p className="font-semibold text-white">Method 1: One‑worker rate</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Group of 5:{" "}
                <InlineMath math="\text{rate}_5=\dfrac{1\ \text{job}}{6\ \text{days}}" />
              </li>
              <li>
                One worker:{" "}
                <InlineMath math="\text{rate}_1=\dfrac{1}{5}\cdot\dfrac{1}{6}=\dfrac{1\ \text{job}}{30\ \text{days}}" />
              </li>
              <li>
                Two workers:{" "}
                <InlineMath math="\text{rate}_2=2\cdot\dfrac{1}{30}=\dfrac{1\ \text{job}}{15\ \text{days}}" />
              </li>
            </ul>
            <p className="font-semibold text-white">Method 2: Proportion</p>
            <p>
              Rates scale with headcount, so going from 5 to 2 workers multiplies
              the rate by <InlineMath math="\tfrac{2}{5}" />:
            </p>
            <BlockMath math="\text{rate}_2=\dfrac{2}{5}\cdot\dfrac{1\ \text{job}}{6\ \text{days}}=\dfrac{1\ \text{job}}{15\ \text{days}}" />
          </div>
        </section>

        <section className="space-y-6">
          <MCQExample
            number={23}
            prompt={
              <>
                If 10 men, each working at the same constant rate, can dig a
                ditch in 2 hours, how long will it take 2 of these men to dig{" "}
                <InlineMath math="\tfrac{3}{4}" /> of the same ditch?
              </>
            }
            options={["5 hours", "7.5 hours", "9 hours", "10.5 hours", "11 hours"]}
            correct="7.5 hours"
            solution={
              <>
                <p className="mb-2">
                  First find the rate for 10 workers:
                </p>
                <BlockMath math="\text{rate}_{10}=\dfrac{1\ \text{ditch}}{2\ \text{hours}}=\dfrac{1}{2}\ \text{ditch/hour}" />
                <p className="mb-2">
                  One worker’s rate is{" "}
                  <InlineMath math="\dfrac{1}{10}\cdot\dfrac{1}{2}=\dfrac{1}{20}" />{" "}
                  ditch/hour, so 2 workers’ rate is{" "}
                  <InlineMath math="2\cdot\dfrac{1}{20}=\dfrac{1}{10}" />{" "}
                  ditch/hour.
                </p>
                <p>
                  Time to complete <InlineMath math="\tfrac{3}{4}" /> of a ditch:
                </p>
                <BlockMath math="\text{time}=\dfrac{\text{work}}{\text{rate}}=\dfrac{\tfrac{3}{4}}{\tfrac{1}{10}}=\tfrac{3}{4}\cdot 10=\tfrac{30}{4}=7.5\ \text{hours}" />
              </>
            }
          />

          <MCQExample
            number={24}
            prompt={
              <>
                Six identical machines working together finish a job in 3 hours.
                How long will it take 9 of these machines to complete{" "}
                <InlineMath math="\tfrac{1}{3}" /> of the job?
              </>
            }
            options={[
              "60 minutes",
              "45 minutes",
              "40 minutes",
              "30 minutes",
              "24 minutes",
            ]}
            correct="40 minutes"
            solution={
              <>
                <p className="mb-2">Group rate for 6 machines:</p>
                <BlockMath math="\text{rate}_{6}=\dfrac{1\ \text{job}}{3\ \text{hours}}=\dfrac{1}{3}\ \text{job/hour}" />
                <p className="mb-2">
                  One machine’s rate is{" "}
                  <InlineMath math="\dfrac{1}{6}\cdot\dfrac{1}{3}=\dfrac{1}{18}" />{" "}
                  job/hour, so 9 machines have rate{" "}
                  <InlineMath math="9\cdot\dfrac{1}{18}=\dfrac{1}{2}" /> job/hour.
                </p>
                <p>Time for one‑third of the job:</p>
                <BlockMath math="\text{time}=\dfrac{\tfrac{1}{3}}{\tfrac{1}{2}}=\dfrac{2}{3}\ \text{hour}=40\ \text{minutes}" />
              </>
            }
          />

          <MCQExample
            number={25}
            prompt={
              <>
                Ten pistons, all running at the same constant rate, spin an
                engine 48 times in 10 seconds. What is the minimum number of
                pistons needed to spin the engine at least 54 times in 18
                seconds?
              </>
            }
            options={["5", "6", "7", "8", "9"]}
            correct="7"
            solution={
              <>
                <p className="mb-2">Rate for 10 pistons:</p>
                <BlockMath math="\text{rate}_{10}=\dfrac{48\ \text{spins}}{10\ \text{s}}=\dfrac{24}{5}\ \text{spins/s}" />
                <p className="mb-2">
                  Required rate to hit 54 spins in 18 seconds:
                </p>
                <BlockMath math="\text{target rate}=\dfrac{54}{18}=3\ \text{spins/s}" />
                <p className="mb-2">
                  Since rate scales with the number of pistons, let <InlineMath math="n" /> be
                  the required count. Using proportions:
                </p>
                <BlockMath math="\dfrac{10}{\tfrac{24}{5}}=\dfrac{n}{3}\ \ \Longrightarrow\ \ 10\cdot\dfrac{5}{24}=\dfrac{n}{3}\ \ \Longrightarrow\ \ \dfrac{50}{24}=\dfrac{n}{3}\ \ \Longrightarrow\ \ n=\dfrac{150}{24}=6.25" />
                <p>
                  We can’t use a fraction of a piston, so round up to the next
                  whole number. Minimum needed: 7.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Big takeaways</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If all workers are identical, total rate is proportional to the
              number of workers.
            </li>
            <li>
              Either compute the single‑worker rate and scale, or set up a clean
              proportion. Use{" "}
              <InlineMath math="\text{time}=\dfrac{\text{work}}{\text{rate}}" />{" "}
              to finish.
            </li>
            <li>
              When a minimum number of workers is asked for, round up after you
              solve for the exact real value.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}