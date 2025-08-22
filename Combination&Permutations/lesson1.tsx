import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({
  expr,
  display = false,
  sr,
  className = "",
}: {
  expr: string;
  display?: boolean;
  sr?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={sr ?? expr}
      className={`${display ? "block my-3 overflow-x-auto" : "inline-block"} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.2 Combinations | Counting Methods",
  description:
    "Understand combinations: when order does not matter, how to use the binomial coefficient, and how to reason through examples. Includes one multiple‑choice example and two Data Sufficiency drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2 Combinations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A combination counts the number of distinct selections you can make when the lineup or
          arrangement is irrelevant. In other words, if two outcomes differ only by order, they
          are considered the same outcome in a combination.
        </p>

        <p>
          Typical prompts include:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Choosing 5 candies from a bowl with 10 different flavors, where the sequence of picks
            doesn’t matter.
          </li>
          <li>
            Selecting 3 prize winners from 50 contestants when 1st/2nd/3rd places are not distinguished.
          </li>
        </ul>

        <MustKnow>
          A combination problem asks “how many groups” rather than “how many orders.” When order
          is irrelevant, count using the binomial coefficient instead of permutations.
        </MustKnow>

        <section aria-labelledby="combo-formula">
          <h3 id="combo-formula" className="text-xl font-semibold text-white">
            The combination formula
          </h3>
          <p>
            For integers n and r with 0 ≤ r ≤ n, the number of ways to choose r items from n distinct
            items is:
          </p>
          <Math
            display
            expr="\\binom{n}{r} = \\frac{n!}{r!(n-r)!}"
            sr="n choose r equals n factorial divided by r factorial times n minus r factorial"
          />
          <p>
            Useful identities:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Symmetry: <Math expr="\\binom{n}{r} = \\binom{n}{n-r}" sr="n choose r equals n choose n minus r" />
            </li>
            <li>
              Factorial: <Math expr="n! = n \\cdot (n-1) \\cdot \\dots \\cdot 2 \\cdot 1" sr="n factorial definition" />
            </li>
          </ul>
        </section>

        <MCQExample
          number={201}
          prompt="From 10 distinct candies, how many different groups of 5 candies can be selected?"
          options={["42", "210", "252", "504", "30,240"]}
          correct="252"
          solution={
            <>
              <p>
                This is a combination: order is irrelevant. Compute:
              </p>
              <Math
                display
                expr="\\binom{10}{5} = \\frac{10!}{5!\\,5!} = \\frac{10\\cdot 9\\cdot 8\\cdot 7\\cdot 6}{5\\cdot 4\\cdot 3\\cdot 2\\cdot 1} = 252"
                sr="10 choose 5 equals 252"
              />
              <p>Therefore, there are 252 different selections.</p>
            </>
          }
        />

        <p>
          When you see a selection problem, first ask whether order matters. If not, reduce to a
          combination and apply the binomial coefficient or symmetry to simplify.
        </p>

        <ExampleCard
          number={202}
          title="Determining an exact count of committees"
          statements={[
            "A committee of 3 people is formed from a pool of 3 managers and t analysts, where t is an integer greater than 0. How many different committees are possible?",
            "1) t > 3",
            "2) The committee has exactly 1 manager",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We need a single numeric count. Without the value of t, the total varies.
              </p>
              <p>
                <strong>Statement (1):</strong> t &gt; 3. This bounds t but doesn’t fix it. Different values of t give different totals. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Exactly 1 manager means choose 1 of 3 managers and 2 of t analysts:
                <Math expr="\\binom{3}{1}\\binom{t}{2}" sr="3 choose 1 times t choose 2" />. The total still depends on t. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> Knowing t &gt; 3 and “exactly 1 manager” still leaves infinitely many possible t values, so the count is not unique.
              </p>
              <p>Answer: E.</p>
            </>
          }
        />

        <ExampleCard
          number={203}
          title="Solving for r using combination values"
          statements={[
            "Integers n and r satisfy 0 < r < n and C(n, r) = 21. What is the value of r?",
            "1) n = 7",
            "2) r is even",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We must determine a unique r.
              </p>
              <p>
                <strong>Statement (1):</strong> If n = 7 and <Math expr="\\binom{n}{r} = 21" sr="n choose r equals 21" />, then
                <Math expr="\\binom{7}{2} = 21" sr="7 choose 2 equals 21" /> and, by symmetry,
                <Math expr="\\binom{7}{5} = 21" sr="7 choose 5 equals 21" />. So r ∈ {2, 5}. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> r is even. With n unknown, many pairs (n, r) produce 21
                (for example, <Math expr="\\binom{21}{1}=21" sr="21 choose 1 equals 21" /> and
                <Math expr="\\binom{21}{20}=21" sr="21 choose 20 equals 21" />), so this alone is not sufficient.
              </p>
              <p>
                <strong>Together:</strong> From (1) r ∈ {2, 5}. From (2) r is even, so r = 2. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Key takeaway: combinations count groups, not sequences. Use the formula, leverage symmetry
          <Math expr="\\big(\\binom{n}{r} = \\binom{n}{n-r}\\big)" sr="n choose r equals n choose n minus r" />,
          and always verify that order truly doesn’t matter before applying combinations.
        </p>
      </article>
    </main>
  );
}