import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.8.1 Minimum and Maximum Ranges of Combined Sets | Statistics",
  description:
    "Learn how to minimize or maximize the range when merging data sets. See why the largest individual range controls the minimum combined range and why endpoints control the maximum. Includes three MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.8.1 Minimum and Maximum Ranges of Combined Sets
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In this lesson, you’ll learn how to bound the overall range when
          multiple sets are merged. We’ll answer two questions:
        </p>
        <ul className="list-disc pl-6">
          <li>What is the smallest possible range after combining sets?</li>
          <li>What is the largest possible range after combining sets?</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Minimizing the combined range
        </h3>
        <p>
          Think of each set as an interval on a number line. To make the overall
          span as small as possible, you want all other intervals to sit
          completely inside the widest one. That way, the merged set can’t get
          any wider than the largest original span.
        </p>

        <MustKnow>
          If set A has range P and set B has range Q with P ≤ Q, then the
          smallest possible range after combining A and B is Q. More generally,
          for two or more sets, the least possible combined range equals the
          largest individual range.
        </MustKnow>

        <section aria-labelledby="mini-example-min">
          <h4 id="mini-example-min" className="text-lg font-semibold text-white">
            Quick walkthrough
          </h4>
          <p>
            Suppose class A’s scores occupy an interval of length 40 and class
            B’s scores occupy an interval of length 30. If B’s interval sits
            entirely inside A’s, the combined scores still span 40—the best you
            can do. Any time the smaller intervals fit inside the largest one,
            the minimum combined range equals that largest range.
          </p>
        </section>

        <MCQExample
          number={52}
          prompt={
            <>
              Last year at Roller Coaster World, the daily ticket sales had a
              range of 3,500 in January and 5,000 in February. What is the
              least possible range for the two months combined?
            </>
          }
          options={["1,500", "3,500", "5,000", "7,000", "8,500"]}
          correct="5,000"
          solution={
            <>
              <p>
                The minimum combined range equals the largest individual range.
                Here, max(3,500, 5,000) = 5,000. So the least possible combined
                range is 5,000.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={53}
          prompt={
            <>
              <div className="mb-3">
                Each student at ABC University is exactly one of the following:
                first-year, sophomore, junior, or senior. The table shows the
                range of heights (in cm) for each designation. What is the
                smallest possible range of heights among all students?
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-1 text-left text-sm">
                  <caption className="sr-only">
                    Ranges of heights by student designation
                  </caption>
                  <thead className="text-gray-200">
                    <tr>
                      <th scope="col" className="px-3 py-2">
                        Designation
                      </th>
                      <th scope="col" className="px-3 py-2">
                        Range (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-800/40">
                      <td className="px-3 py-2">First-year student</td>
                      <td className="px-3 py-2">31</td>
                    </tr>
                    <tr className="bg-gray-800/40">
                      <td className="px-3 py-2">Sophomore</td>
                      <td className="px-3 py-2">55</td>
                    </tr>
                    <tr className="bg-gray-800/40">
                      <td className="px-3 py-2">Junior</td>
                      <td className="px-3 py-2">42</td>
                    </tr>
                    <tr className="bg-gray-800/40">
                      <td className="px-3 py-2">Senior</td>
                      <td className="px-3 py-2">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          }
          options={["20", "31", "35", "37", "55"]}
          correct="55"
          solution={
            <>
              <p>
                The minimum combined range equals the largest individual range.
                Among 31, 55, 42, and 20, the largest is 55. So the least
                possible overall range is 55 cm.
              </p>
              <p>Answer: E.</p>
            </>
          }
        />

        <h3 className="mt-8 text-xl font-semibold text-white">
          Maximizing the combined range
        </h3>
        <p>
          To make the combined set as wide as possible, push the extremes:
          include the smallest value that can appear in any contributing set and
          the largest value that can appear in any contributing set. Then the
          merged range stretches from that global minimum up to that global
          maximum.
        </p>

        <MustKnow>
          For two or more sets, the greatest possible combined range equals G −
          S, where S is the least value any set can attain and G is the greatest
          value any set can attain.
        </MustKnow>

        <section aria-labelledby="mini-example-max">
          <h4 id="mini-example-max" className="text-lg font-semibold text-white">
            Quick walkthrough
          </h4>
          <p>
            If an exam’s possible scores run from 0 to 100 and you combine
            multiple classes, the merged range is maximized to 100 − 0 = 100 as
            soon as at least one student scores 0 and at least one student
            scores 100, while each class still respects its own range length.
          </p>
        </section>

        <MCQExample
          number={54}
          prompt={
            <>
              Townville’s hockey tournament has four age divisions:
              <ul className="mt-2 list-disc pl-6">
                <li>Child: 6–12</li>
                <li>Teen: 13–19</li>
                <li>Adult: 20–54</li>
                <li>Senior: 55–75</li>
              </ul>
              This year there were teams in Child (10 teams), Teen (8 teams),
              and Adult (31 teams), and no teams in Senior. What is the greatest
              possible range of ages among all players this year?
            </>
          }
          options={["12", "31", "48", "69", "Cannot be determined"]}
          correct="48"
          solution={
            <>
              <p>
                With no Senior teams, the oldest possible player is 54 (Adult).
                The youngest possible player is 6 (Child). Thus the maximum
                combined range is 54 − 6 = 48.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={55}
          prompt={
            <>
              In Molvania, a population center is a town if its population is at
              least 1,000 and at most 9,999. Alphania’s towns have a population
              range of 1,500, Betania’s have a range of 900, and Gammia’s have a
              range of 2,000. What is the difference between the greatest and
              least possible ranges of the populations of all 40 towns combined?
            </>
          }
          options={["1,100", "4,300", "6,999", "9,099", "9,999"]}
          correct="6,999"
          solution={
            <>
              <p>
                Maximum combined range: global max − global min = 9,999 − 1,000
                = 8,999.
              </p>
              <p>
                Minimum combined range: the largest individual range among the
                provinces, which is 2,000 (Gammia).
              </p>
              <p>Difference: 8,999 − 2,000 = 6,999.</p>
              <p>Answer: C.</p>
            </>
          }
        />

        <h3 className="mt-8 text-xl font-semibold text-white">Key takeaways</h3>
        <ul className="list-disc pl-6">
          <li>
            Minimum combined range = the largest individual range (nest the
            others inside it).
          </li>
          <li>
            Maximum combined range = global maximum − global minimum (hit both
            endpoints).
          </li>
        </ul>
      </article>
    </main>
  );
}