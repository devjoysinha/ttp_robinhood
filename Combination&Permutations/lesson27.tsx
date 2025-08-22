import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "16.3.6 Count 2‑D Paths with Checkpoints | Combinatorics",
  description:
    "Learn a fast, checkpoint-based method to count 2‑D paths: break the trip into legs, multiply within each leg, and add across mutually exclusive routes. Includes two practice MCQs with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.6 Counting 2‑Dimensional Paths with Checkpoints
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some grid or network path problems, every valid route must pass through certain
          intermediate locations. We’ll call any such required location a checkpoint. When
          checkpoints exist, you can count paths efficiently by treating the trip as a sequence
          of legs from one checkpoint to the next.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-white">
              Checkpoint Method (3 steps)
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>List all checkpoints you must pass through, including the start and the destination.</li>
              <li>For each consecutive pair of checkpoints, count how many ways you can travel between them.</li>
              <li>Multiply the counts from step 2 to get the number of routes along that checkpoint chain.</li>
            </ol>
            <p className="mt-3">
              If there are multiple, mutually exclusive overall routes (for example, a “top” route
              or a “bottom” route), compute each route’s product separately and then add those totals.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick Mini‑Example
          </h3>
          <p>
            Suppose every path from A to J must go A → B → F → I → J, and the leg counts are:
            1 way from A to B, 3 ways from B to F, 2 ways from F to I, and 1 way from I to J.
          </p>
          <p>
            Using the Fundamental Counting Principle, the total number of A → J paths is
            {" "}
            <span aria-label="one times three times two times one equals six">
              $1\\times3\\times2\\times1=6$
            </span>
            .
          </p>
        </section>

        <MCQExample
          number={34}
          prompt="In the diagram, each valid path from A to N must pass through D and H. How many distinct paths lead from A to N without revisiting a point?"
          options={["10", "12", "15", "30", "60"]}
          correct="30"
          solution={
            <>
              <p>
                All valid routes must follow A → D → H → N in that order. Count the ways on
                each leg and multiply:
              </p>
              <ul className="list-disc pl-6">
                <li>From A to D: 2 ways</li>
                <li>From D to H: 3 ways</li>
                <li>From H to N: 5 ways</li>
              </ul>
              <p>
                Total paths:
                {" "}
                <span aria-label="two times three times five equals thirty">
                  $2\\times3\\times5=30$
                </span>
                . So the answer is 30.
              </p>
            </>
          }
        />

        <section aria-labelledby="when-to-add" className="space-y-3">
          <h3 id="when-to-add" className="text-xl font-semibold text-white">
            Multiply within a route; add across separate routes
          </h3>
          <p>
            Be careful not to multiply counts for routes that are alternatives. If you must choose
            one overall route or another (for example, “top” vs. “bottom”), those cases are mutually
            exclusive, so you add the totals from each case.
          </p>
        </section>

        <MCQExample
          number={35}
          prompt="The network shows two disjoint overall ways to go from A to B: a top route and a bottom route. How many distinct A → B paths exist without revisiting a point?"
          options={["10", "13", "18", "24", "36"]}
          correct="13"
          solution={
            <>
              <p>
                Treat the top and bottom as mutually exclusive overall routes and add their results.
              </p>
              <p className="font-semibold">Top route</p>
              <ul className="list-disc pl-6">
                <li>A → C: 1 way</li>
                <li>C → D: 3 ways</li>
                <li>D → E: 3 ways</li>
                <li>E → B: 1 way</li>
              </ul>
              <p>
                Top total:
                {" "}
                <span aria-label="one times three times three times one equals nine">
                  $1\\times3\\times3\\times1=9$
                </span>
                .
              </p>

              <p className="font-semibold mt-4">Bottom route</p>
              <ul className="list-disc pl-6">
                <li>A → P: 1 way</li>
                <li>P → Q: 2 ways</li>
                <li>Q → R: 2 ways</li>
                <li>R → B: 1 way</li>
              </ul>
              <p>
                Bottom total:
                {" "}
                <span aria-label="one times two times two times one equals four">
                  $1\\times2\\times2\\times1=4$
                </span>
                .
              </p>

              <p className="mt-3">
                Overall paths:
                {" "}
                <span aria-label="nine plus four equals thirteen">
                  $9+4=13$
                </span>
                .
              </p>
            </>
          }
        />

        <MustKnow>
          • Multiply the number of ways across legs within the same overall route (checkpoints).
          <br />
          • Add the totals of different overall routes when those routes are mutually exclusive
          (e.g., “top” OR “bottom”).
        </MustKnow>

        <p>
          Bottom line: break the journey into forced legs (checkpoints) and multiply within each
          leg; if there are alternative overall patterns, compute each pattern and add.
        </p>
      </article>
    </main>
  );
}