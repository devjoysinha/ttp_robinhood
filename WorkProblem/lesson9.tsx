import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.7.2 When One Worker Leaves Early | Work Problems",
  description:
    "Learn how to handle rate-time-work problems when two workers start together but one stops before the job is finished. Includes a multiple‑choice example with full, KaTeX-rendered solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.7.2 Two workers start together, then one stops
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In this common setup, both workers begin the task at the same time. At
          some point, one worker stops, and the other finishes the remaining
          work alone. The core challenge is to track who works for the shorter
          interval and who keeps going, then combine their contributions.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p>
              Always ground your work in the identities:
            </p>
            <div className="rounded-md bg-gray-900/40 p-3">
              <BlockMath math=" \text{Rate} = \dfrac{\text{Work}}{\text{Time}} \qquad\text{and}\qquad \text{Work} = \text{Rate} \times \text{Time} " />
            </div>
            <p>
              If both start together and one leaves, let the shared time be{" "}
              <InlineMath math="x" />. If the finisher then works{" "}
              <InlineMath math="y" /> more hours alone, model their times as:
            </p>
            <ul className="list-inside list-disc">
              <li>leaving-early worker: <InlineMath math="x" /> hours</li>
              <li>finisher: <InlineMath math="x + y" /> hours</li>
            </ul>
            <p>
              Compute the total work as the sum of each part’s work, and match
              it to 1 job.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={27}
          prompt="Machine A builds one car in 2 hours when working alone at a constant rate. Machine B builds one car in 3 hours when working alone at a constant rate. They work together for 1 hour, and then machine B stops. How much additional time does machine A need to finish the car by itself?"
          options={["10 minutes", "20 minutes", "30 minutes", "40 minutes", "50 minutes"]}
          correct="20 minutes"
          solution={
            <>
              <p>
                Convert times to rates in cars per hour:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <InlineMath math="R_A = \dfrac{1\ \text{car}}{2\ \text{hours}} = \dfrac{1}{2}\ \text{car/hour}" />
                </li>
                <li>
                  <InlineMath math="R_B = \dfrac{1\ \text{car}}{3\ \text{hours}} = \dfrac{1}{3}\ \text{car/hour}" />
                </li>
              </ul>

              <p>
                Working together for 1 hour, they complete:
              </p>
              <BlockMath math=" \left(\dfrac{1}{2} + \dfrac{1}{3}\right)\times 1 = \dfrac{5}{6}\ \text{car} " />

              <p>
                So the remaining work is <InlineMath math="1 - \dfrac{5}{6} = \dfrac{1}{6}" /> of a car. After B
                stops, A alone finishes that remainder at{" "}
                <InlineMath math="\dfrac{1}{2}" /> car/hour. Let{" "}
                <InlineMath math="t" /> be the extra time A needs:
              </p>
              <BlockMath math=" \dfrac{1}{2}\cdot t = \dfrac{1}{6} \quad\Rightarrow\quad t = \dfrac{1}{3}\ \text{hour} = 20\ \text{minutes}. " />

              <p>Answer: 20 minutes.</p>
            </>
          }
        />

        <p>
          Takeaway: separate the joint portion from the solo portion. Compute
          how much work remains after the joint part, then use the solo rate to
          find the extra time.
        </p>
      </article>
    </main>
  );
}