import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "9.2 Rate–Time–Distance Problems | Rate Problems",
  description:
    "A concise guide to Rate–Time–Distance problems: what they are, how to use r = d/t, common units (like mph), and quick practice with a multiple‑choice problem and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.2 Rate–Time–Distance Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Questions that ask “how far,” “how fast,” or “how long” typically fall under
          Rate–Time–Distance (RTD). In these problems, the rate compares how much distance
          is covered to how much time it takes. The core relationship ties the three together:
        </p>

        <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <BlockMath math="r = \dfrac{d}{t}" />
          <p className="mt-2">
            From this identity, you can rearrange to get{" "}
            <InlineMath math="d = r \cdot t" /> and{" "}
            <InlineMath math="t = \dfrac{d}{r}" />.
          </p>
        </div>

        <MustKnow>
          Rate is distance per unit of time. Keep units consistent and track them carefully.
          For instance, miles per hour (mph) is literally the fraction{" "}
          <InlineMath math="\dfrac{\text{miles}}{\text{hour}}" />. Converting units (e.g.,
          minutes to hours) before computing prevents mistakes.
        </MustKnow>

        <p>
          You’ll see many rates expressed in mph, km/min, or m/s. These are all just
          different unit pairings of the same idea: distance divided by time.
        </p>

        <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-4">
          <p className="mb-2 font-semibold text-gray-200">Common examples</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Driving at 55 mph means 55 miles each hour.</li>
            <li>Flying at 10 km/min means 10 kilometers each minute.</li>
            <li>Walking at 1.5 m/s means 1.5 meters each second.</li>
          </ul>
        </div>

        <MCQExample
          number={21}
          prompt="A car travels 150 miles in 3 hours at a constant speed. What is the car’s speed?"
          options={["45 mph", "50 mph", "55 mph", "60 mph", "75 mph"]}
          correct="50 mph"
          solution={
            <>
              <p>
                Use <InlineMath math="r = \dfrac{d}{t}" />. Substitute{" "}
                <InlineMath math="d = 150" /> miles and <InlineMath math="t = 3" /> hours:
              </p>
              <BlockMath math="r = \dfrac{150}{3} = 50 \text{ mph}" />
              <p>The correct answer is 50 mph.</p>
            </>
          }
        />

        <p>
          Whenever you compute, align the units first. If time is given in minutes but
          rate is in hours, convert minutes to hours (or vice versa) before applying the
          formula.
        </p>

        <ExampleCard
          number={22}
          title="Determining Average Speed"
          statements={[
            "A car made a single nonstop trip of fixed distance. What was the car’s average speed, in mph?",
            "1) The trip covered 156 miles and took 3 hours.",
            "2) For the entire trip, the car maintained 52 mph.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need the average speed for the whole trip. By definition,{" "}
                <InlineMath math="r_{\text{avg}} = \dfrac{d}{t}" />.
              </p>
              <p>
                <strong>Statement (1):</strong> Knowing <InlineMath math="d = 156" /> miles and{" "}
                <InlineMath math="t = 3" /> hours is enough:
              </p>
              <BlockMath math="r_{\text{avg}} = \dfrac{156}{3} = 52 \text{ mph}" />
              <p>Statement (1) is sufficient.</p>
              <p>
                <strong>Statement (2):</strong> We’re told directly that the car maintained{" "}
                <InlineMath math="52 \text{ mph}" /> for the entire trip, so the average speed is
                52 mph. Statement (2) is also sufficient.
              </p>
              <p>
                Since each statement alone is sufficient, the answer is D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: RTD problems are driven by a single relationship. Identify the two
          quantities you have, convert units if needed, and solve for the third with{" "}
          <InlineMath math="r = \dfrac{d}{t}" />.
        </p>
      </article>
    </main>
  );
}