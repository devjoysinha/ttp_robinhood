import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Note: ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "9.10.4 Relative Speed (Multiples & Percents) | Rate Problems",
  description:
    "Model converging-rate problems when one object's speed is a multiple or a percent of another's. Includes a quick worked example, a multiple‑choice drill, and a data sufficiency exercise with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.10.4 Variation 4: One Object Is Relatively Faster than Another
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some rate questions, one speed is described in relation to another
          (for example, “k times as fast” or “p% as fast”). That’s different
          from cases where you’re told an absolute difference in speeds. The
          efficient approach is to assign a base rate to one object and express
          the other rate relative to that base.
        </p>

        <MustKnow>
          • If Object A is x times as fast as Object B, set B’s rate to r and
          A’s rate to <InlineMath math="x\,r" />. Example: if A is twice as fast
          as B, use r for B and <InlineMath math="2r" /> for A.
          <br />
          • If Object A is x percent as fast as Object B, set B’s rate to r and
          A’s rate to <InlineMath math="\left(\dfrac{x}{100}\right)r" />.
          Example: if A is 50% as fast as B, use r for B and{" "}
          <InlineMath math="0.5r" /> for A.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3
            id="mini-example"
            className="text-xl font-semibold text-white mt-4"
          >
            Quick Walkthrough
          </h3>
          <p>
            Two people live 21 kilometers apart. At noon, both start walking
            toward each other and meet at 2 pm. The first walker’s speed is 75%
            of the second walker’s speed. What is the second walker’s speed?
          </p>

          <p>
            Let the second walker’s rate be <InlineMath math="r" /> km/h, so the
            first walker’s rate is <InlineMath math="0.75r" /> km/h. Each walks
            for 2 hours before meeting, so the distances they cover are{" "}
            <InlineMath math="2r" /> and <InlineMath math="1.5r" />, which must
            sum to the 21 km between them:
          </p>

          <BlockMath math="2r + 1.5r = 21 \;\;\Rightarrow\;\; 3.5r = 21 \;\;\Rightarrow\;\; r = 6" />

          <p>
            Therefore, the second walker’s speed is 6 km/h.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full border-collapse">
              <caption className="sr-only">
                Rate–Time–Distance table for the quick walkthrough
              </caption>
              <thead className="bg-gray-800/60">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left">
                    Person
                  </th>
                  <th scope="col" className="px-4 py-3 text-left">
                    Rate
                  </th>
                  <th scope="col" className="px-4 py-3 text-left">
                    Time
                  </th>
                  <th scope="col" className="px-4 py-3 text-left">
                    Distance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium">
                    Second walker
                  </th>
                  <td className="px-4 py-3">
                    <InlineMath math="r\ \text{km/h}" />
                  </td>
                  <td className="px-4 py-3">2 h</td>
                  <td className="px-4 py-3">
                    <InlineMath math="2r\ \text{km}" />
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium">
                    First walker
                  </th>
                  <td className="px-4 py-3">
                    <InlineMath math="0.75r\ \text{km/h}" />
                  </td>
                  <td className="px-4 py-3">2 h</td>
                  <td className="px-4 py-3">
                    <InlineMath math="1.5r\ \text{km}" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="mcq-example" className="space-y-4">
          <MCQExample
            number={15}
            prompt={
              <>
                Harper starts driving from Rockport to Gloucester at the same
                time Quinn starts driving from Gloucester to Rockport on the
                same road. They meet after 3 hours. Quinn’s constant speed is{" "}
                <InlineMath math="\tfrac14" /> greater than Harper’s constant
                speed. If the towns are 270 miles apart, what is Harper’s speed?
              </>
            }
            options={["20 mph", "30 mph", "40 mph", "50 mph", "60 mph"]}
            correct="40 mph"
            solution={
              <>
                <p>
                  Let <InlineMath math="h" /> be Harper’s rate (mph). “One
                  quarter greater” means Quinn’s rate is{" "}
                  <InlineMath math="\tfrac{5}{4}h" />. Each drove for 3 hours, so
                  the sum of distances must be 270:
                </p>
                <BlockMath math="3h + 3\left(\tfrac{5}{4}h\right) = 270" />
                <BlockMath math="\left(3 + \tfrac{15}{4}\right)h = \tfrac{27}{4}h = 270 \;\;\Rightarrow\;\; h = 40" />
                <p>Harper’s speed is 40 mph. Choice C.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="tip-section" className="space-y-3">
          <MustKnow>
            In head‑on (converging) motion, the total distance covered until
            meeting equals the sum of the individual distances:{" "}
            <InlineMath math="\text{distance}_1 + \text{distance}_2 = \text{gap}" />
            . Use a simple rate–time–distance table and express unknown rates
            with one variable whenever possible.
          </MustKnow>
        </section>

        <section aria-labelledby="ds-example" className="space-y-4">
          <ExampleCard
            number={16}
            title="Relative speed and meeting time (Data Sufficiency)"
            statements={[
              "Vladimir drives toward Sara’s house at a constant rate. Sara drives toward Vladimir’s house at a constant rate. They leave at the same time on parallel lanes of the same road. In how many minutes will Vladimir arrive at Sara’s house?",
              "1) Vladimir’s rate is twice Sara’s rate.",
              "2) Vladimir and Sara pass each other in 10 minutes.",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  Let Sara’s rate be <InlineMath math="r" /> and Vladimir’s rate
                  be <InlineMath math="v" />. Let <InlineMath math="t" /> be the
                  time (in minutes) when they pass each other. When they pass,
                  both have traveled for the same duration.
                </p>
                <p>
                  Statement (1): <InlineMath math="v = 2r" />. Without the
                  meeting time or the distance between houses, we cannot find
                  the travel time from Vladimir’s start to Sara’s house. Not
                  sufficient.
                </p>
                <p>
                  Statement (2): They meet after 10 minutes. We still do not
                  know either person’s rate or the total distance, so we can’t
                  compute Vladimir’s full trip time. Not sufficient.
                </p>
                <p>
                  Together: In 10 minutes, Vladimir covers{" "}
                  <InlineMath math="10\cdot v" /> and Sara covers{" "}
                  <InlineMath math="10\cdot r" />. With <InlineMath math="v=2r" />
                  , the ratio of Vladimir’s share of the total distance is
                  <InlineMath math="\dfrac{10\cdot 2r}{10\cdot 2r + 10\cdot r}=\dfrac{2}{3}" />
                  . So Vladimir completes <InlineMath math="\tfrac{2}{3}" /> of
                  the entire trip in 10 minutes, which implies the whole trip
                  (to Sara’s house) takes
                  <InlineMath math="\;\;10 \cdot \dfrac{3}{2} = 15" /> minutes.
                </p>
                <p>
                  Both statements together are sufficient; neither alone is.
                  Answer: C.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            When speeds are given relatively, anchor one speed as{" "}
            <InlineMath math="r" /> and write the other as a multiple or a
            percent of <InlineMath math="r" />. In converging setups, add the
            distances each object travels to match the initial separation. A
            small rate–time–distance table keeps the logic clear and prevents
            algebra slips.
          </p>
        </section>
      </article>
    </main>
  );
}