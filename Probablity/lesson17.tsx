import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title:
    "17.11.3 Pick Some, Exclude Others | Probability",
  description:
    "How to compute probabilities when certain items must be chosen while others must be left out. Two multiple‑choice examples with clear reasoning and KaTeX formulas.",
};

// Lightweight KaTeX renderer (assumes KaTeX CSS is loaded globally in your app)
function K({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: block });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={block ? "my-3 block overflow-x-auto" : "inline-block align-middle"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.11.3 When some items must be selected and others must not
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes a probability question locks in part of the selection (certain items must be chosen)
          and bans other items (certain items cannot be chosen). In these situations, clear the
          constraints first, then count what’s left. Combinations are a natural fit here because
          order doesn’t matter.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Two-step playbook for “must include” and “must exclude” constraints:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Remove the excluded items from the larger pool. This does not change how many spots you’re filling; it only changes who is eligible.
              </li>
              <li>
                Treat the required items as already chosen. Subtract them from both the pool and the remaining open spots. Then use combinations to fill the remaining positions.
              </li>
            </ul>
            <p className="mt-3">
              We’ll use the binomial coefficient <K expr={"\\binom{n}{k}"} ariaLabel="n choose k" /> to count selections without regard to order.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={23}
          prompt="From a group of 9 snowboarders, including Roberto and Jose, 4 competitors are chosen at random. What is the probability that Roberto is selected while Jose is not?"
          options={["1/6", "5/18", "1/3", "7/18", "1/2"]}
          correct="5/18"
          solution={
            <>
              <p>
                Exclude Jose from the pool and fix Roberto as selected. That removes 2 specific people (Jose and Roberto) from the group and fills 1 of the 4 spots. So we still need to choose 3 additional riders from the remaining 7.
              </p>
              <p className="mt-2">
                Favorable outcomes: <K expr={"\\binom{7}{3} = 35"} ariaLabel="7 choose 3 equals 35" />
                <br />
                Total outcomes: <K expr={"\\binom{9}{4} = 126"} ariaLabel="9 choose 4 equals 126" />
              </p>
              <p className="mt-2">
                Therefore,
                <K
                  block
                  expr={"\\displaystyle P = \\frac{\\binom{7}{3}}{\\binom{9}{4}} = \\frac{35}{126} = \\frac{5}{18}"}
                  ariaLabel="P equals 35 over 126 equals 5 over 18"
                />
                Answer: 5/18.
              </p>
            </>
          }
        />

        <MCQExample
          number={24}
          prompt="Of the first 10 customers on Monday, 3 are randomly given a free coffee. If Pauline and Micah are both among the first 10, what is the probability that Pauline gets a free coffee but Micah does not?"
          options={["1/5", "13/60", "7/30", "1/3", "7/15"]}
          correct="7/30"
          solution={
            <>
              <p>
                Exclude Micah and lock in Pauline as one of the winners. That reduces the pool by 2 people (Pauline and Micah) and fills 1 of the 3 spots. We still need to choose 2 more winners from the remaining 8 customers.
              </p>
              <p className="mt-2">
                Favorable outcomes: <K expr={"\\binom{8}{2} = 28"} ariaLabel="8 choose 2 equals 28" />
                <br />
                Total outcomes: <K expr={"\\binom{10}{3} = 120"} ariaLabel="10 choose 3 equals 120" />
              </p>
              <p className="mt-2">
                Hence,
                <K
                  block
                  expr={"\\displaystyle P = \\frac{\\binom{8}{2}}{\\binom{10}{3}} = \\frac{28}{120} = \\frac{7}{30}"}
                  ariaLabel="P equals 28 over 120 equals 7 over 30"
                />
                Answer: 7/30.
              </p>
            </>
          }
        />

        <p>
          Big idea: bake the constraints into the setup first. After you mentally remove the banned items and pre‑place the required ones, a simple combination count finishes the job.
        </p>
      </article>
    </main>
  );
}