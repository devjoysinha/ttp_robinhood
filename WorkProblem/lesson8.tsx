import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "10.7.1 Two Workers, Same Time | Work Problems",
  description:
    "How to add rates when two workers (or machines) start and finish together. Includes one quick multiple‑choice problem, a fractional‑job drill, and a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.7.1 Two workers who start and finish at the same time
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          These questions are easy to spot: both workers begin together and stop
          at the same moment. In such cases, you add their rates to get a
          combined rate and then use time = work ÷ rate. The “work” might be a
          full job or just a fraction of one.
        </p>

        <MustKnow>
          • When two agents work for the same duration, add their rates:{" "}
          <InlineMath math={"R_{combined} = R_1 + R_2"} />. Then{" "}
          <InlineMath math={"\\text{time} = \\dfrac{\\text{work}}{R_{combined}}"} />.
          <br />
          • A “job” need not be 1 unit. If the task is a fraction, use that
          fraction for the work amount.
        </MustKnow>

        <MCQExample
          number={7}
          prompt="Joe paints a fence in 4 hours working alone. His brother can paint the same fence in 2 hours alone. If they paint together at their constant rates, how long will the job take?"
          options={[
            "1 hour",
            "1 hour 20 minutes",
            "1 hour 40 minutes",
            "2 hours",
            "2 hours 20 minutes",
          ]}
          correct="1 hour 20 minutes"
          solution={
            <>
              <p>
                Rates: Joe <InlineMath math={"= 1/4"} /> fence/hour, brother{" "}
                <InlineMath math={"= 1/2"} /> fence/hour.
              </p>
              <p>
                Combined rate:{" "}
                <InlineMath math={"1/4 + 1/2 = 3/4"} /> fence/hour.
              </p>
              <p>
                Time for 1 fence:{" "}
                <InlineMath math={"\\dfrac{1}{3/4} = \\dfrac{4}{3}"} /> hours =
                1 hour 20 minutes. Choice B.
              </p>
            </>
          }
        />

        <p>
          The “whole job” is not always required. Sometimes you’re asked for the
          time to finish a portion of a task. In those cases, treat the work as
          that fraction.
        </p>

        <MCQExample
          number={8}
          prompt="Hose X can fill a pool in 6 hours alone. Hose Y can fill the same pool in 8 hours alone. If both run together at their constant rates, how long will they take to fill 75% of the pool?"
          options={[
            "Less than 3 hours",
            "Between 3 and 4 hours",
            "Between 4 and 5 hours",
            "Exactly 5 hours",
            "More than 5 hours",
          ]}
          correct="Less than 3 hours"
          solution={
            <>
              <p>
                Rates: <InlineMath math={"R_X = 1/6"} /> and{" "}
                <InlineMath math={"R_Y = 1/8"} /> pool/hour.
              </p>
              <p>
                Combined rate:{" "}
                <InlineMath math={"R = 1/6 + 1/8 = 7/24"} /> pool/hour.
              </p>
              <p>
                Work needed: <InlineMath math={"3/4"} /> pool. Time ={" "}
                <InlineMath math={"\\dfrac{3/4}{7/24} = \\dfrac{18}{7}"} /> hours{" "}
                <InlineMath math={"\\approx 2.57"} /> hours, which is less than
                3 hours. Choice A.
              </p>
            </>
          }
        />

        <ExampleCard
          number={9}
          title="How long does machine A need to make 20 widgets?"
          statements={[
            "1) Working together at their constant rates, machines A and B produce 40 widgets in 2 minutes.",
            "2) Machine B alone, at a constant rate, produces 20 widgets in 4 minutes.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want the time for machine A to make 20 widgets, so we need A’s
                rate.
              </p>
              <p>
                From (1): In 2 minutes they make 40 widgets, so combined rate is{" "}
                <InlineMath math={"40/2 = 20"} /> widgets/min.
              </p>
              <p>
                From (2): B’s rate is{" "}
                <InlineMath math={"20/4 = 5"} /> widgets/min.
              </p>
              <p>
                Therefore, A’s rate is{" "}
                <InlineMath math={"20 - 5 = 15"} /> widgets/min. Time for 20
                widgets is{" "}
                <InlineMath math={"\\dfrac{20}{15} = \\dfrac{4}{3}"} /> minutes.
              </p>
              <p>
                Each statement alone is insufficient, but together they pin down
                A’s rate and hence the time. Answer: C.
              </p>
            </>
          }
        />

        <MustKnow>
          To solve “same time” work problems quickly:
          <br />• Convert “one job in T hours” into a rate of{" "}
          <InlineMath math={"1/T"} /> job per hour.
          <br />• Add rates to combine workers.
          <br />• If the task is a fraction f of a job, use{" "}
          <InlineMath math={"\\text{time} = f / R_{combined}"} />.
        </MustKnow>

        <p>
          Big picture: when everyone works for the same duration, position your
          thinking around rates and the total amount of work to be done (full or
          partial). Add rates first; divide the required work by that combined
          rate to get the time.
        </p>
      </article>
    </main>
  );
}