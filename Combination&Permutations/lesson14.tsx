import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Helper to render KaTeX inline with a11y text
function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, output: "html" });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.2.13 Required vs. Forbidden Selections | Combinations",
  description:
    "How to count selections when some members must be included and others must be excluded. Clear rule-of-thumb, one worked warm‑up, and two multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.13 Selecting with “Must‑Include” and “Must‑Exclude” Rules
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes you’re asked to form a group while satisfying two restrictions at once:
          certain people must be in the group, and certain people cannot be in the group.
          The fastest way to count such selections is to shrink the pool and the number of open
          spots before you compute the combinations.
        </p>

        <MustKnow>
          Do this in two quick passes:
          <br />
          - First remove anyone who is not allowed to be chosen; this does not change how many
            seats the subgroup has.
          <br />
          - Next “pre‑place” everyone who must be chosen; this reduces the number of seats you still
            need to fill.
          <br />
          Then compute the count with{" "}
          <MathInline expr="\\binom{n}{k}" ariaLabel="n choose k" /> where{" "}
          <MathInline expr="\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}" ariaLabel="n choose k equals n factorial over k factorial times n minus k factorial" />.
        </MustKnow>

        <section aria-labelledby="warmup-title" className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <h3 id="warmup-title" className="mb-2 text-lg font-semibold text-white">
            Warm‑up example
          </h3>
          <p className="mb-2">
            A class has 10 students, including Tabitha and Grover. We will select a 3‑person team,
            with Grover required to be on the team and Tabitha barred from it. How many teams are possible?
          </p>
          <p className="mb-2">
            Remove Tabitha from the pool and pre‑place Grover on the team. That leaves 8 eligible
            students competing for the remaining 2 seats. So the count is{" "}
            <MathInline expr="\\binom{8}{2}=\\dfrac{8\\times7}{2\\times1}=28" ariaLabel="8 choose 2 equals 28" />.
          </p>
          <p className="text-gray-400">Answer: 28</p>
        </section>

        <p>
          Let’s lock in the process with two quick multiple‑choice drills.
        </p>

        <MCQExample
          number={20}
          prompt="Twelve passengers are vying for four seats on a train. Howie must get a seat, and Alexis must not. In how many ways can the four seats be filled?"
          options={["220", "120", "66", "60", "55"]}
          correct="120"
          solution={
            <>
              <p>
                Remove Alexis (cannot be chosen) and pre‑place Howie (must be chosen).
                Now there are 10 eligible passengers and 3 seats left to fill. Count:
                {" "}
                <MathInline expr="\\binom{10}{3}=\\dfrac{10\\times9\\times8}{3\\times2\\times1}=120" ariaLabel="10 choose 3 equals 120" />.
              </p>
              <p className="text-gray-400">Correct choice: 120.</p>
            </>
          }
        />

        <MCQExample
          number={21}
          prompt="Thirteen graduates, including Danica and Jamila, apply for five internship positions. Danica must be selected, while Jamila cannot be selected. How many distinct groups of interns are possible?"
          options={["330", "462", "495", "720", "792"]}
          correct="330"
          solution={
            <>
              <p>
                Eliminate Jamila from the pool and pre‑seat Danica. That leaves 11
                eligible applicants and 4 open positions. So we have
                {" "}
                <MathInline expr="\\binom{11}{4}" ariaLabel="11 choose 4" />
                {" "}
                groups. Compute:
                {" "}
                <MathInline
                  expr="\\binom{11}{4}=\\dfrac{11\\times10\\times9\\times8}{4\\times3\\times2\\times1}=330"
                  ariaLabel="11 choose 4 equals 330"
                />
                .
              </p>
              <p className="text-gray-400">Correct choice: 330.</p>
            </>
          }
        />

        <p>
          Big picture: tidy the pool first, then count. If you always remove the forbidden members
          and pre‑place the required ones before you compute{" "}
          <MathInline expr="\\binom{n}{k}" ariaLabel="n choose k" />, these questions become routine.
        </p>
      </article>
    </main>
  );
}