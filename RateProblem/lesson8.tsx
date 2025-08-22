import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.8.1 Average Rate with Unknown Distances | Rate Problems",
  description:
    "Learn how to find the overall average speed when two legs of a trip have equal but unknown distances. See two solution styles (variable vs. smart numbers) and practice with a PS example and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.8.1 Average Rate When the Two Distances Are Equal but Unknown
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many average-speed questions tell you that the outbound and return
          distances are the same but don’t provide the actual mileage. That’s
          okay: you can still compute the overall average speed by using either
          a variable for the distance on each leg or by picking a convenient
          number for that distance.
        </p>

        <MustKnow>
          For a round trip with equal legs, you can:
          <br />
          • use the same symbol for both distances (e.g., D and D), or
          <br />
          • pick an easy number that is divisible by all given rates.
          <br />
          The average speed is always Total Distance ÷ Total Time. Remember
          time = distance ÷ rate.
        </MustKnow>

        <section aria-labelledby="two-approaches" className="space-y-3">
          <h3 id="two-approaches" className="text-xl font-semibold text-white">
            Two common approaches
          </h3>
          <p>
            1) Same variable for both legs: let the outbound and return
            distances each be D. Then compute the two times using
            time = distance ÷ rate, add those times, and divide total distance
            (2D) by total time.
          </p>
          <p>
            2) Smart numbers: if the speeds are, say, 10 mph and 3 mph, pick a
            distance such as 30 miles for each leg because both rates divide 30
            evenly. This keeps the arithmetic fast and clean without changing
            the final average speed.
          </p>
        </section>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example walkthrough
          </h3>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                Rate–Time–Distance matrix for two equal legs using a variable D
              </caption>
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-4 py-2">Leg</th>
                  <th className="px-4 py-2">Rate (mph)</th>
                  <th className="px-4 py-2">Time (hr)</th>
                  <th className="px-4 py-2">Distance (mi)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Out</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">D ÷ 10</td>
                  <td className="px-4 py-2">D</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Back</td>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">D ÷ 3</td>
                  <td className="px-4 py-2">D</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Total distance = 2D. Total time = D/10 + D/3 = (13D)/30. So the
            average speed is:
            <br />
            Average speed = (2D) ÷ ((13D)/30) = 60/13 mph.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                Rate–Time–Distance matrix for two equal legs using smart numbers
              </caption>
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-4 py-2">Leg</th>
                  <th className="px-4 py-2">Rate (mph)</th>
                  <th className="px-4 py-2">Time (hr)</th>
                  <th className="px-4 py-2">Distance (mi)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Out</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">30 ÷ 10 = 3</td>
                  <td className="px-4 py-2">30</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Back</td>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">30 ÷ 3 = 10</td>
                  <td className="px-4 py-2">30</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Total distance = 60 miles, total time = 3 + 10 = 13 hours, so
            average speed = 60 ÷ 13 mph. Same result.
          </p>
        </section>

        <MCQExample
          number={8}
          prompt="Melissa walked from home to school at 4 mph and then ran back along the same route at 10 mph. What was her average speed for the round trip?"
          options={[
            "4 1/5 mph",
            "5 2/7 mph",
            "5 5/7 mph",
            "6 2/5 mph",
            "7 mph",
          ]}
          correct="5 5/7 mph"
          solution={
            <>
              <p>
                The two legs have equal distance. Use variables or smart
                numbers.
              </p>
              <p>
                Variable method: let each leg be x miles. Times are x/4 and
                x/10. Total distance = 2x; total time = x/4 + x/10 = (7x)/20.
                Average speed = (2x) ÷ ((7x)/20) = 40/7 mph = 5 5/7 mph.
              </p>
              <p>
                Smart numbers: pick 20 miles for each leg (divisible by 4 and
                10). Times are 5 hr and 2 hr. Average speed = 40 ÷ 7 = 40/7 mph
                = 5 5/7 mph.
              </p>
            </>
          }
        />

        <ExampleCard
          number={9}
          title="Average speed with a mid‑trip speed change (Data Sufficiency)"
          statements={[
            "William drives from home to work. At the halfway point (by distance), he doubles his constant speed. What is his average speed for the entire trip?",
            "1) The distance from home to work is 30 miles.",
            "2) William’s speed before he doubled it was 40 mph.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                Let the total distance be 2D. He drives the first D miles at
                speed v and the last D miles at 2v. Average speed depends on
                the two times, not just distance.
              </p>
              <p>
                Statement (1): Only total distance is known. If v = 30, the
                average speed comes out different than if v = 45. Multiple
                possible averages → not sufficient.
              </p>
              <p>
                Statement (2): v = 40 mph, so the second half is 80 mph. Time =
                D/40 + D/80 = 3D/80. Total distance = 2D. Average speed =
                (2D) ÷ (3D/80) = 160/3 mph. A single value → sufficient.
              </p>
              <p>Thus, statement (2) alone suffices; (1) alone does not. Answer: B.</p>
            </>
          }
        />

        <p>
          Bottom line: when the two distances are equal, average speed problems
          are easiest if you focus on total distance and total time. Use a
          shared variable or pick “friendly” distances that work nicely with
          the given rates.
        </p>
      </article>
    </main>
  );
}