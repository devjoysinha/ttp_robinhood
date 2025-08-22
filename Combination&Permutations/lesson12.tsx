import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "Combinations with Must-Include Items | Counting & Probability",
  description:
    "Learn a reliable strategy for combinations when certain items must be selected. Includes three practice problems with full, step-by-step solutions using binomial coefficients.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Counting & Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          Combinations with Restrictions: Some Items Must Be Chosen
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many combination questions impose must-include constraints. The cleanest
          way to handle these is to “lock in” the required items first, then count
          how many choices remain to complete the group.
        </p>

        <MustKnow>
          <ul className="list-disc pl-6">
            <li>
              Treat all required elements as already placed in the subgroup.
            </li>
            <li>
              Recalculate: how many candidates are left in the pool, and how many
              open spots remain to fill?
            </li>
            <li>
              Finish with a binomial coefficient. If you must choose r more from
              n remaining, that’s <InlineMath math={"\\binom{n}{r}"} />.
            </li>
          </ul>
        </MustKnow>

        <section aria-label="Quick illustrations" className="space-y-4">
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <p className="font-medium text-gray-100">Quick illustration</p>
            <p className="mt-2">
              From 20 people, form a 6-person committee. If Hattie and Maggie must
              serve, picture them as selected already. You’re left with 18 people
              competing for 4 remaining seats, so the count is{" "}
              <InlineMath math={"\\binom{18}{4}"} />.
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <p className="font-medium text-gray-100">Another illustration</p>
            <p className="mt-2">
              A basket holds 10 pieces of fruit, including exactly 2 apples. Build a
              group of 5 that must contain both apples. Lock in the 2 apples first,
              leaving 8 other fruits and 3 open slots, so{" "}
              <InlineMath math={"\\binom{8}{3}"} /> ways.
            </p>
          </div>
        </section>

        <MCQExample
          number={1}
          prompt="Among 10 available workers, Hank and Willie must be assigned to a 4-person night shift. How many distinct 4-person teams are possible?"
          options={["12", "28", "36", "40", "56"]}
          correct="28"
          solution={
            <>
              <p>
                Place Hank and Willie on the team first. That leaves 8 people for the
                last 2 spots: <InlineMath math={"\\binom{8}{2}"} />.
              </p>
              <p>
                Compute: <InlineMath math={"\\binom{8}{2} = \\frac{8\\cdot7}{2} = 28"} />.
                So there are 28 possible teams.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Eight students try out for a 5-person chess team. If Alex and Eric must make the team, how many different teams are possible?"
          options={["12", "20", "42", "56", "64"]}
          correct="20"
          solution={
            <>
              <p>
                Lock in Alex and Eric. Now 6 students remain for 3 open seats:
                <InlineMath math={"\\binom{6}{3}"} />.
              </p>
              <p>
                Evaluate:{" "}
                <InlineMath math={"\\binom{6}{3} = \\frac{6\\cdot5\\cdot4}{3\\cdot2\\cdot1} = 20"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt="A chest contains 5 distinct flawed diamonds and 2 distinct perfect diamonds. How many different sets of 4 diamonds can be drawn if both perfect diamonds must be included?"
          options={["10", "16", "18", "24", "32"]}
          correct="10"
          solution={
            <>
              <p>
                The two perfect diamonds are required, so fix them first. You need 2
                more from the 5 flawed diamonds: <InlineMath math={"\\binom{5}{2}"} />.
              </p>
              <p>
                Compute: <InlineMath math={"\\binom{5}{2} = \\frac{5\\cdot4}{2} = 10"} />.
              </p>
            </>
          }
        />

        <p>
          The overarching strategy: reserve the mandatory elements up front, then
          use a straightforward combination count on what remains.
        </p>
      </article>
    </main>
  );
}