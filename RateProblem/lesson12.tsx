import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.10.1 Same Start Time (Converging Rates) | Rate Problems",
  description:
    "Learn how to solve converging rate problems when both travelers start at the same time. Includes a quick walkthrough, a Must‑Know summary, and a multiple‑choice example with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.10.1 Variation 1: Both Objects Leave at the Same Time
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two travelers depart simultaneously and move toward one another at
          constant speeds, they have been traveling for the same amount of time
          at the instant they meet. That shared time lets us model both motions
          with a single variable.
        </p>

        <MustKnow>
          • If two objects start at the same moment and head toward each other
          at constant rates, their travel times are equal at the meeting point.
          Use one variable, typically <InlineMath math="t" />, for both times.
          • For converging motion, the total distance covered together equals the
          initial separation:
          <BlockMath math="\text{(distance of object 1)} + \text{(distance of object 2)} = \text{initial gap}" />
          • With <InlineMath math="\text{distance}=\text{rate}\times\text{time}" />,
          the key equation becomes
          <InlineMath math="r_1 t + r_2 t = D" />, so{" "}
          <InlineMath math="t=\dfrac{D}{r_1+r_2}" />.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑Example
          </h3>
          <p>
            A train moves at 60 mph. At the same moment the train departs, a
            car 390 miles away heads straight toward the train on a parallel
            road at 70 mph. How long until they meet?
          </p>

          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-left text-sm">
              <caption className="sr-only">
                Rate–Time–Distance for train and car
              </caption>
              <thead className="text-gray-400">
                <tr>
                  <th scope="col" className="py-2 pr-4">
                    Object
                  </th>
                  <th scope="col" className="py-2 pr-4">
                    Rate
                  </th>
                  <th scope="col" className="py-2 pr-4">
                    Time
                  </th>
                  <th scope="col" className="py-2 pr-4">
                    Distance
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:py-2">
                <tr>
                  <th scope="row" className="font-medium text-gray-200 pr-4">
                    Train
                  </th>
                  <td className="pr-4">
                    <InlineMath math="60\ \text{mph}" />
                  </td>
                  <td className="pr-4">
                    <InlineMath math="t\ \text{hours}" />
                  </td>
                  <td className="pr-4">
                    <InlineMath math="60t\ \text{miles}" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-gray-200 pr-4">
                    Car
                  </th>
                  <td className="pr-4">
                    <InlineMath math="70\ \text{mph}" />
                  </td>
                  <td className="pr-4">
                    <InlineMath math="t\ \text{hours}" />
                  </td>
                  <td className="pr-4">
                    <InlineMath math="70t\ \text{miles}" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Set up the converging equation and solve for t:</p>
          <BlockMath math="60t + 70t = 390" />
          <BlockMath math="130t = 390 \quad\Rightarrow\quad t = \dfrac{390}{130} = 3\ \text{hours}" />
          <p>They meet after 3 hours.</p>
        </section>

        <section aria-labelledby="mcq-example">
          <MCQExample
            number={12}
            prompt="Thorstein is in Easton and Tom is in Weston, 240 miles apart. They leave at the same time and drive toward each other on the same road. Thorstein drives at 60 mph and Tom at 40 mph. How many minutes pass before they meet?"
            options={[
              "60 minutes",
              "120 minutes",
              "132 minutes",
              "144 minutes",
              "156 minutes",
            ]}
            correct="144 minutes"
            solution={
              <>
                <p>
                  Since both start together, let{" "}
                  <InlineMath math="t" /> be the time in hours for each
                  traveler. Using{" "}
                  <InlineMath math="\text{distance}=\text{rate}\times\text{time}" />
                  :
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Thorstein’s distance: <InlineMath math="60t" />
                  </li>
                  <li>
                    Tom’s distance: <InlineMath math="40t" />
                  </li>
                </ul>
                <p>
                  Because they’re converging, the distances add to the initial
                  separation:
                </p>
                <BlockMath math="60t + 40t = 240" />
                <BlockMath math="100t = 240 \quad\Rightarrow\quad t=\dfrac{240}{100}=\dfrac{12}{5}\ \text{hours}" />
                <p>
                  Convert to minutes:
                  <InlineMath math="\dfrac{12}{5}\ \text{hours}\times\dfrac{60\ \text{min}}{1\ \text{hour}}=144\ \text{minutes}" />
                </p>
                <p>Answer: 144 minutes.</p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: for same‑start converging motion, you can model both
          travelers with one time variable. The solution often collapses to{" "}
          <InlineMath math="t=\dfrac{D}{r_1+r_2}" />, followed by any needed
          unit conversion.
        </p>
      </article>
    </main>
  );
}