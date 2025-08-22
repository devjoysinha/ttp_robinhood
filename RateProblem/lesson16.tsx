import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "9.11 Diverging Rate Questions | Rate Problems",
  description:
    "Learn how to solve diverging rate problems by adding speeds and distances. Includes one multiple‑choice example and one data sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.11 Diverging Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In diverging motion, two movers depart from the same location and head
          in opposite directions. The workflow mirrors converging problems, but
          with one crucial switch: their separation grows based on the sum of
          their speeds.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p>
              When two objects leave the same point and travel in opposite
              directions at constant speeds, the total distance between them at
              time <InlineMath math="t" /> is the sum of the distances each
              travels. Equivalently:
            </p>
            <BlockMath math="D_{\text{total}} \;=\; (v_1 + v_2)\,t \;=\; D_1 + D_2" />
          </div>
        </MustKnow>

        <p>
          All the twists you see in converging problems can appear here too:
          different units, delayed starts, or unknowns in the question stem. The
          same distance-rate-time relationships apply; you simply add the rates
          instead of subtracting them.
        </p>

        <MCQExample
          number={17}
          prompt="Two boats leave the same dock at the same time and travel in opposite directions along a straight line. Boat A moves at 30 mph and Boat B at 40 mph. After how many hours will they be 280 miles apart?"
          options={["1 hour", "2 hours", "3 hours", "4 hours", "5 hours"]}
          correct="4 hours"
          solution={
            <>
              <p>
                Because the boats separate, add their speeds:{" "}
                <InlineMath math="30+40=70" /> mph. Let{" "}
                <InlineMath math="t" /> be the time in hours until they are 280
                miles apart. Then:
              </p>
              <BlockMath math="(30+40)\,t \;=\; 280 \;\;\Longrightarrow\;\; 70t \;=\; 280 \;\;\Longrightarrow\;\; t \;=\; 4" />
              <p>So, they will be 280 miles apart after 4 hours.</p>
            </>
          }
        />

        <p>Now try a data sufficiency version that uses the same idea.</p>

        <ExampleCard
          number={18}
          title="How long until two runners are 2 miles apart?"
          statements={[
            "Paul and Steve start at the same point and run in opposite directions at constant rates. How many minutes will it take for them to be 2 miles apart?",
            "1) Paul’s speed is twice Steve’s speed.",
            "2) Steve could run 2 miles alone in 20 minutes.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                If they run in opposite directions for the same time{" "}
                <InlineMath math="t" /> (in minutes), their separation equals
                the sum of their individual distances. Equivalently, the sum of
                their speeds (in miles per minute) times <InlineMath math="t" />{" "}
                must equal 2.
              </p>

              <p>
                <strong>Statement (1) alone:</strong> If Steve runs at{" "}
                <InlineMath math="r" /> miles/min, then Paul runs at{" "}
                <InlineMath math="2r" /> miles/min. The equation is:
              </p>
              <BlockMath math="(2r + r)\,t \;=\; 2 \;\;\Longrightarrow\;\; 3rt \;=\; 2 \;\;\Longrightarrow\;\; t \;=\; \dfrac{2}{3r}" />
              <p>
                Without a numeric value for <InlineMath math="r" />,{" "}
                <InlineMath math="t" /> is undetermined. Not sufficient.
              </p>

              <p>
                <strong>Statement (2) alone:</strong> Steve runs 2 miles in 20
                minutes, so{" "}
                <InlineMath math="r = \dfrac{2}{20} = \dfrac{1}{10}" /> mile per
                minute. Paul’s speed is unknown, so the total rate is unknown.
                Not sufficient.
              </p>

              <p>
                <strong>Together:</strong> From (2),{" "}
                <InlineMath math="r = \tfrac{1}{10}" />. From (1), Paul’s rate
                is <InlineMath math="2r = \tfrac{1}{5}" />. The sum is{" "}
                <InlineMath math="\tfrac{1}{5} + \tfrac{1}{10} = \tfrac{3}{10}" />{" "}
                mile per minute. Now solve for <InlineMath math="t" />:
              </p>
              <BlockMath math="\left(\tfrac{3}{10}\right)t \;=\; 2 \;\;\Longrightarrow\;\; t \;=\; \dfrac{2}{3/10} \;=\; \dfrac{20}{3}\text{ minutes}" />
              <p>Unique time found. Together sufficient. Answer: C.</p>
            </>
          }
        />

        <p>
          Key takeaway: for diverging motion, add speeds. Use{" "}
          <InlineMath math="D = rt" /> for each traveler or jump straight to{" "}
          <InlineMath math="D_{\text{total}} = (v_1+v_2)t" /> and solve for the
          unknown.
        </p>
      </article>
    </main>
  );
}