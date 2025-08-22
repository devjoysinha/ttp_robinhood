import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return display ? (
    <div
      role="img"
      aria-label={ariaLabel ?? expr}
      className="my-2 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <span
      role="img"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "At Least Probability Problems | Probability",
  description:
    "Learn how to solve “at least” probability questions by enumerating qualifying scenarios or using binomial sums. Includes worked examples and multiple‑choice practice.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          Solving “At Least” Probability Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In probability, “at least” means “greater than or equal to.” For instance,
          “heads at least two times in three flips” includes exactly two heads and exactly
          three heads.
        </p>

        <section aria-labelledby="general-process">
          <h3 id="general-process" className="text-xl font-semibold text-white">
            General Process
          </h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <span className="font-semibold">Identify qualifying outcomes.</span> Determine all
              scenarios that meet “at least n.”
            </li>
            <li>
              <span className="font-semibold">Compute each scenario’s probability.</span>
            </li>
            <li>
              <span className="font-semibold">Add them up.</span> Because the scenarios are mutually
              exclusive, the total probability is their sum.
            </li>
          </ol>

          <MustKnow>
            To handle “at least” questions, split into all qualifying counts and add the
            corresponding probabilities. With a binomial setting (independent trials with success
            probability p), you can write
            <Math
              display
              expr={"P(\\text{at least } r) = \\sum_{k=r}^{n} \\binom{n}{k} p^{k} (1-p)^{n-k}"}
              ariaLabel="Probability of at least r successes equals the sum from k equals r to n of n choose k times p to the k times (1 minus p) to the n minus k."
            />
          </MustKnow>
        </section>

        <section aria-labelledby="ex-coin-3">
          <h3 id="ex-coin-3" className="text-xl font-semibold text-white">
            Example 1: Three Coin Flips
          </h3>
          <p>
            A fair coin is tossed 3 times. What is the probability of getting heads at least 2 times?
          </p>

          <details className="group rounded-lg border border-gray-700 bg-gray-800/40 p-4">
            <summary className="cursor-pointer select-none font-semibold text-gray-200 outline-none transition-colors group-open:text-white">
              Show Solution
            </summary>
            <div className="mt-3 space-y-3">
              <p className="font-semibold">Step 1: Qualifying counts</p>
              <ul className="list-disc pl-6">
                <li>Exactly 2 heads</li>
                <li>Exactly 3 heads</li>
              </ul>

              <p className="font-semibold">Step 2: Probability of each count</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  There are{" "}
                  <Math expr={"\\binom{3}{2}"} ariaLabel="3 choose 2" /> ways to get exactly 2 heads.
                  Each equally likely outcome has probability{" "}
                  <Math expr={"\\left(\\tfrac{1}{2}\\right)^{3}"} ariaLabel="one half cubed" />. So
                  the probability for exactly two heads is{" "}
                  <Math
                    expr={"\\binom{3}{2}\\left(\\tfrac{1}{2}\\right)^{3} = 3\\cdot \\tfrac{1}{8} = \\tfrac{3}{8}"}
                    ariaLabel="3 choose 2 times one eighth equals three eighths"
                  />
                  .
                </li>
                <li>
                  Exactly 3 heads occurs with probability{" "}
                  <Math
                    expr={"\\left(\\tfrac{1}{2}\\right)^{3} = \\tfrac{1}{8}"}
                    ariaLabel="one half cubed equals one eighth"
                  />
                  .
                </li>
              </ul>

              <p className="font-semibold">Step 3: Add</p>
              <p>
                <Math
                  display
                  expr={"\\tfrac{3}{8} + \\tfrac{1}{8} = \\tfrac{4}{8} = \\tfrac{1}{2}"}
                  ariaLabel="three eighths plus one eighth equals one half"
                />
                Final probability: 1/2
              </p>
            </div>
          </details>
        </section>

        <section aria-labelledby="ex-biased">
          <h3 id="ex-biased" className="text-xl font-semibold text-white">
            Example 2: Biased Event Across 3 Trials
          </h3>

          <MCQExample
            number={1}
            prompt="In City Y, the chance that a storm drops more than 5 inches of snow is 1/3. Across 3 storms, what is the probability that more than 5 inches occurs in at least 2 storms?"
            options={["1/27", "3/27", "5/64", "7/27", "10/27"]}
            correct="7/27"
            solution={
              <>
                <p>
                  Let success be “snow > 5 inches,” with p = 1/3 and q = 1 − p = 2/3. “At least 2”
                  means exactly 2 or exactly 3 successes.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Exactly 2: <Math expr={"\\binom{3}{2} p^{2} q"} ariaLabel="3 choose 2 p squared q" />{" "}
                    ={" "}
                    <Math
                      expr={"3\\cdot \\left(\\tfrac{1}{3}\\right)^{2}\\left(\\tfrac{2}{3}\\right) = \\tfrac{6}{27}"}
                      ariaLabel="three times one ninth times two thirds equals six over twenty-seven"
                    />
                  </li>
                  <li>
                    Exactly 3: <Math expr={"\\binom{3}{3} p^{3}"} ariaLabel="3 choose 3 p cubed" /> ={" "}
                    <Math
                      expr={"\\left(\\tfrac{1}{3}\\right)^{3} = \\tfrac{1}{27}"}
                      ariaLabel="one third cubed equals one over twenty-seven"
                    />
                  </li>
                </ul>
                <p>
                  Total:{" "}
                  <Math
                    expr={"\\tfrac{6}{27} + \\tfrac{1}{27} = \\tfrac{7}{27}"}
                    ariaLabel="six twenty-sevenths plus one twenty-seventh equals seven twenty-sevenths"
                  />
                  . Choice D.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-6-tosses">
          <h3 id="ex-6-tosses" className="text-xl font-semibold text-white">
            Example 3: At Least 5 Tails in 6 Fair Tosses
          </h3>

          <MCQExample
            number={2}
            prompt="A fair coin is tossed 6 times. What is the probability of getting tails at least 5 times?"
            options={["7/64", "6/64", "5/64", "3/64", "1/64"]}
            correct="7/64"
            solution={
              <>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Exactly 5 tails:{" "}
                    <Math expr={"\\binom{6}{5}\\left(\\tfrac{1}{2}\\right)^{6}"} ariaLabel="6 choose 5 times one half to the sixth" />{" "}
                    ={" "}
                    <Math expr={"6\\cdot \\tfrac{1}{64} = \\tfrac{6}{64}"} ariaLabel="six times one sixty-fourth equals six sixty-fourths" />
                  </li>
                  <li>
                    Exactly 6 tails:{" "}
                    <Math expr={"\\binom{6}{6}\\left(\\tfrac{1}{2}\\right)^{6} = \\tfrac{1}{64}"} ariaLabel="6 choose 6 times one half to the sixth equals one sixty-fourth" />
                  </li>
                </ul>
                <p>
                  Sum: <Math expr={"\\tfrac{6}{64} + \\tfrac{1}{64} = \\tfrac{7}{64}"} ariaLabel="six sixty-fourths plus one sixty-fourth equals seven sixty-fourths" />
                  . Choice A.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Key Takeaway
          </h3>
          <p>
            “At least” problems are position-free and additive: enumerate the valid counts and add
            their probabilities. In binomial contexts, use{" "}
            <Math expr={"\\sum_{k=r}^{n} \\binom{n}{k} p^{k} (1-p)^{n-k}"} ariaLabel="sum from k equals r to n of n choose k times p to the k times one minus p to the n minus k" />{" "}
            to move quickly and avoid double-counting.
          </p>
        </section>
      </article>
    </main>
  );
}