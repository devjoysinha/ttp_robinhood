import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX client components to keep this page a server component
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "14.9 Sums of the Reciprocals of Consecutive Integers | Statistics",
  description:
    "A fast bounding technique for sums of reciprocals of consecutive integers. Learn the 3‑step method and practice with three GMAT‑style examples, including full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.9 Sums of the Reciprocals of Consecutive Integers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Earlier in this chapter we worked with sums of consecutive integers.
          In this section, we’ll handle a close cousin: the sum of their
          reciprocals. Fully adding many small fractions is slow and error‑prone;
          instead, we’ll trap the sum between two clean bounds.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Bounding rule for reciprocal sums</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Count how many terms are in the consecutive run.</li>
              <li>Identify the smallest and largest reciprocals in the set.</li>
              <li>
                Multiply that count by each extreme. The true sum must lie
                strictly between those two products.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Example walk‑through: Suppose we want to understand the sum of the
          reciprocals from 11 to 20 (inclusive),
        </p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"\\frac{1}{11}+\\frac{1}{12}+\\frac{1}{13}+\\cdots+\\frac{1}{20}"} />
        </div>

        <p className="space-y-2">
          <span className="block">
            Step 1. There are{" "}
            <InlineMath math={"20-11+1=10"} /> terms in total.
          </span>
          <span className="block">
            Step 2. The smallest reciprocal is{" "}
            <InlineMath math={"\\tfrac{1}{20}"} /> and the largest is{" "}
            <InlineMath math={"\\tfrac{1}{11}"} />.
          </span>
          <span className="block">
            Step 3. Multiply each extreme by 10:
          </span>
        </p>

        <div className="rounded-md bg-gray-900/40 p-4 space-y-1">
          <div>
            <InlineMath math={"10\\cdot\\tfrac{1}{20}=\\tfrac{1}{2}"} />
          </div>
          <div>
            <InlineMath math={"10\\cdot\\tfrac{1}{11}=\\tfrac{10}{11}"} />
          </div>
        </div>

        <p>
          Therefore the sum is bounded by{" "}
          <InlineMath math={"\\tfrac{1}{2} < \\text{sum} < \\tfrac{10}{11}"} />.
          On multiple‑choice questions, any interval that safely contains this
          range is a valid description of the sum.
        </p>

        <MCQExample
          number={56}
          prompt="Let R be the sum of the reciprocals of the integers from 81 to 100, inclusive. Which inequality must be true?"
          options={[
            "1/20 < R < 1/5",
            "1/5 < R < 20/81",
            "20/81 < R < 2/5",
            "40/81 < R < 1",
          ]}
          correct="1/5 < R < 20/81"
          solution={
            <>
              <p>
                There are{" "}
                <InlineMath math={"100-81+1=20"} /> terms. The smallest
                reciprocal is <InlineMath math={"\\tfrac{1}{100}"} />, and the
                largest is <InlineMath math={"\\tfrac{1}{81}"} />.
              </p>
              <div className="rounded-md bg-gray-900/40 p-4 space-y-1">
                <div>
                  Lower bound:{" "}
                  <InlineMath math={"20\\cdot\\tfrac{1}{100}=\\tfrac{1}{5}"} />
                </div>
                <div>
                  Upper bound:{" "}
                  <InlineMath math={"20\\cdot\\tfrac{1}{81}=\\tfrac{20}{81}"} />
                </div>
              </div>
              <p>
                Hence{" "}
                <InlineMath math={"\\tfrac{1}{5} < R < \\tfrac{20}{81}"} />, so
                the correct choice is B.
              </p>
            </>
          }
        />

        <MCQExample
          number={57}
          prompt="Let M be the sum of the reciprocals of the integers from 66 to 77, inclusive. Which of the following must be greater than M?"
          options={["II only", "I and II only", "I and III only", "II and III only", "I, II, and III"]}
          correct="I and II only"
          solution={
            <>
              <p>
                There are{" "}
                <InlineMath math={"77-66+1=12"} /> terms. The smallest
                reciprocal is <InlineMath math={"\\tfrac{1}{77}"} />, and the
                largest is <InlineMath math={"\\tfrac{1}{66}"} />.
              </p>
              <div className="rounded-md bg-gray-900/40 p-4 space-y-1">
                <div>
                  Lower bound:{" "}
                  <InlineMath math={"12\\cdot\\tfrac{1}{77}=\\tfrac{12}{77}\\approx 0.156"} />
                </div>
                <div>
                  Upper bound:{" "}
                  <InlineMath math={"12\\cdot\\tfrac{1}{66}=\\tfrac{12}{66}=\\tfrac{2}{11}\\approx 0.182"} />
                </div>
              </div>
              <p className="mt-3">
                Check each:
                <br />
                I. <InlineMath math={"\\tfrac{1}{4}=0.25"} /> is greater than{" "}
                <InlineMath math={"0.182"} /> → true.
                <br />
                II. <InlineMath math={"\\tfrac{1}{5}=0.2"} /> is greater than{" "}
                <InlineMath math={"0.182"} /> → true.
                <br />
                III. <InlineMath math={"\\tfrac{2}{15}\\approx 0.133"} /> is
                less than <InlineMath math={"0.156"} /> → false.
              </p>
              <p>Therefore, I and II only.</p>
            </>
          }
          note={
            <>
              Treat I, II, III as:
              <br />• I: <InlineMath math={"\\tfrac{1}{4}"} />, • II:{" "}
              <InlineMath math={"\\tfrac{1}{5}"} />, • III:{" "}
              <InlineMath math={"\\tfrac{2}{15}"} />.
            </>
          }
        />

        <MCQExample
          number={58}
          prompt="Set J contains all integers from 160 to 279, inclusive. Set K contains the reciprocal of each value in J. If T is the sum of the values in K, which range must hold?"
          options={[
            "8/7 < T < 7/4",
            "3/4 < T < 8/7",
            "2/7 < T < 3/7",
            "1/7 < T < 2/7",
            "3/7 < T < 3/4",
          ]}
          correct="3/7 < T < 3/4"
          solution={
            <>
              <p>
                The count is{" "}
                <InlineMath math={"279-160+1=120"} />. Extremes are{" "}
                <InlineMath math={"\\tfrac{1}{279}"} /> (smallest) and{" "}
                <InlineMath math={"\\tfrac{1}{160}"} /> (largest).
              </p>
              <div className="rounded-md bg-gray-900/40 p-4 space-y-1">
                <div>
                  Lower bound:{" "}
                  <InlineMath math={"120\\cdot\\tfrac{1}{279}=\\tfrac{120}{279}=\\tfrac{40}{93}"} />
                </div>
                <div>
                  Upper bound:{" "}
                  <InlineMath math={"120\\cdot\\tfrac{1}{160}=\\tfrac{120}{160}=\\tfrac{3}{4}"} />
                </div>
              </div>
              <p className="mt-3">
                Since{" "}
                <InlineMath math={"\\tfrac{40}{93}\\approx 0.430\\ldots"} /> and{" "}
                <InlineMath math={"\\tfrac{3}{7}\\approx 0.428\\ldots"} />, we
                have <InlineMath math={"\\tfrac{3}{7} < \\tfrac{40}{93}"} />.
                Combining with the upper bound gives{" "}
                <InlineMath math={"\\tfrac{3}{7} < T < \\tfrac{3}{4}"} />.
              </p>
              <p>So the correct choice is the interval 3/7 to 3/4.</p>
            </>
          }
        />

        <MustKnow>
          The big idea: you don’t need to add every fraction. For a run of
          consecutive integers, the sum of reciprocals is squeezed between
          “count × smallest reciprocal” and “count × largest reciprocal.”
          Pick the answer choice that safely contains that band.
        </MustKnow>
      </article>
    </main>
  );
}